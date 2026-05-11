/**
 * Converte TODOS os .docx e .md em Convert-html/ para .html com imagens base64.
 * Uso: node scripts/convert-all-docx.js
 * 
 * Features:
 * - Suporta .docx (mammoth) e .md (marked)
 * - Imagens embutidas como base64 (arquivo unico, sem dependencias)
 * - Status automatico: Sim→PASSOU, Nao→FALHOU, Melhoria→MELHORIA
 * - Cabecalho das tabelas com cor customizada (apenas rows de header)
 * - Celulas de dados com fundo branco
 */

const mammoth = require('mammoth')
const fs = require('fs')
const path = require('path')

let marked
try {
  marked = require('marked')
} catch (e) {
  // marked e opcional — so necessario para .md
}

const DIR = path.resolve(__dirname, '..', 'Convert-html')

// Cor do cabecalho pode ser passada como argumento: node convert-all-docx.js --header-color=#1a365d
const HEADER_COLOR = (function() {
  const arg = process.argv.find(a => a.startsWith('--header-color='))
  return arg ? arg.split('=')[1] : '#2c3e50'
})()

/**
 * Identifica rows de cabecalho e aplica classe CSS.
 * Tambem aplica badges de status na coluna correta.
 * 
 * Estrategia: processa tabela por tabela.
 * - Identifica header rows (titulo + colunas)
 * - Marca header rows com classe .header-row
 * - Para rows de dados com numero CORRETO de colunas, aplica badge na coluna de status
 * - Para rows de dados com colunas faltando (mammoth omitiu celula vazia), NAO aplica badge
 */
function processTable(tableHtml) {
  // Remover thead/tbody que o mammoth gera (coloca tudo em thead)
  let clean = tableHtml
    .replace(/<\/?thead>/gi, '')
    .replace(/<\/?tbody>/gi, '')

  const rows = clean.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || []
  if (rows.length === 0) return tableHtml

  // Verificar se e uma tabela de testes (tem "Passou" ou "Status")
  const isTestTable = /Passou|Status/i.test(tableHtml)
  if (!isTestTable) return tableHtml

  // Encontrar a row de cabecalho com colunas (N.º, Validação, Passou, etc)
  let headerRowIdx = -1
  let passouColIndex = -1
  let totalExpectedCols = 0

  for (let r = 0; r < Math.min(rows.length, 5); r++) {
    const text = rows[r].replace(/<[^>]*>/g, '').trim()
    if (/N\.º.*Validação|Validação.*Passou|Passou.*Observ/i.test(text) ||
        /^N\.º\s/i.test(text)) {
      headerRowIdx = r
      // Contar colunas e encontrar posicao do "Passou"
      const cells = rows[r].match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/gi) || []
      let colPos = 0
      for (let c = 0; c < cells.length; c++) {
        const colspanMatch = cells[c].match(/colspan="?(\d+)"?/i)
        const span = colspanMatch ? parseInt(colspanMatch[1]) : 1
        const cellText = cells[c].replace(/<[^>]*>/g, '').trim()
        if (/^Passou|^Status/i.test(cellText)) {
          passouColIndex = colPos
        }
        colPos += span
      }
      totalExpectedCols = colPos
      break
    }
  }

  // Se nao encontrou header de colunas, tentar abordagem mais simples
  if (headerRowIdx === -1) {
    for (let r = 0; r < Math.min(rows.length, 5); r++) {
      if (/Passou|Status/i.test(rows[r])) {
        headerRowIdx = r
        const cells = rows[r].match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/gi) || []
        let colPos = 0
        for (let c = 0; c < cells.length; c++) {
          const colspanMatch = cells[c].match(/colspan="?(\d+)"?/i)
          const span = colspanMatch ? parseInt(colspanMatch[1]) : 1
          const cellText = cells[c].replace(/<[^>]*>/g, '').trim()
          if (/Passou|Status/i.test(cellText)) {
            passouColIndex = colPos
          }
          colPos += span
        }
        totalExpectedCols = colPos
        break
      }
    }
  }

  if (passouColIndex === -1 || headerRowIdx === -1) return tableHtml

  // Processar cada row
  const processedRows = rows.map((row, idx) => {
    // Rows ate o headerRowIdx sao headers — adicionar classe
    if (idx <= headerRowIdx) {
      return row.replace(/^<tr/, '<tr class="header-row"')
    }

    // Rows de dados — verificar se e um sub-header intermediario
    // (outra row com "N.º", "Validação", "Passou", etc no meio da tabela)
    const rowText = row.replace(/<[^>]*>/g, '').trim()
    if (/N\.º.*Validação|N\.º.*Passou|Validação.*Resultado/i.test(rowText)) {
      return row.replace(/^<tr/, '<tr class="header-row"')
    }

    // Pular sub-headers (colspan grande)
    if (/colspan="?[4-9]"?|colspan="?\d{2,}"?/i.test(row)) {
      return row.replace(/^<tr/, '<tr class="header-row"')
    }

    const cells = row.match(/<t[hd][^>]*>[\s\S]*?<\/t[hd]>/gi) || []
    if (cells.length === 0) return row

    // Calcular total de colunas reais
    let realColCount = 0
    for (const cell of cells) {
      const cs = cell.match(/colspan="?(\d+)"?/i)
      realColCount += cs ? parseInt(cs[1]) : 1
    }

    // Se a row tem MENOS colunas que o esperado, a celula de status foi omitida
    // NAO aplicar badge — deixar como esta
    if (realColCount < totalExpectedCols) {
      return row
    }

    // Row completa — encontrar a celula na posicao do status e aplicar badge
    // IMPORTANTE: nao usar .replace() porque celulas vazias duplicadas
    // fazem o replace substituir a PRIMEIRA ocorrencia (celula errada).
    // Usar reconstrucao por indice exato.
    let colPos = 0
    let targetCellIdx = -1

    for (let c = 0; c < cells.length; c++) {
      const colspanMatch = cells[c].match(/colspan="?(\d+)"?/i)
      const span = colspanMatch ? parseInt(colspanMatch[1]) : 1
      if (colPos === passouColIndex) {
        targetCellIdx = c
        break
      }
      colPos += span
    }

    if (targetCellIdx === -1) return row

    const targetCell = cells[targetCellIdx]
    const textContent = targetCell.replace(/<[^>]*>/g, '').trim()
    let statusHtml = ''

    if (/^(Sim|Yes|SIM|SIm)$/i.test(textContent)) {
      statusHtml = '<span class="status status-passou">PASSOU</span>'
    } else if (/^(N[aã]o|No|NAO|NÃO|Não)$/i.test(textContent)) {
      statusHtml = '<span class="status status-falhou">FALHOU</span>'
    } else if (/Melhoria|Improvement/i.test(textContent)) {
      statusHtml = '<span class="status status-melhoria">MELHORIA</span>'
    } else if (!textContent) {
      statusHtml = '<span class="status status-andamento">EM ANDAMENTO</span>'
    }

    if (!statusHtml) return row

    const tagMatch = targetCell.match(/^(<t[hd][^>]*>)[\s\S]*?(<\/t[hd]>)$/i)
    if (!tagMatch) return row

    const newCell = `${tagMatch[1]}${statusHtml}${tagMatch[2]}`

    // Encontrar a posicao EXATA da celula alvo percorrendo celula por celula
    let searchFrom = 0
    for (let c = 0; c <= targetCellIdx; c++) {
      const pos = row.indexOf(cells[c], searchFrom)
      if (c === targetCellIdx) {
        return row.substring(0, pos) + newCell + row.substring(pos + cells[c].length)
      }
      searchFrom = pos + cells[c].length
    }

    return row
  })

  // Reconstruir tabela
  const tableOpen = tableHtml.match(/^<table[^>]*>/i)?.[0] || '<table>'
  return `${tableOpen}\n${processedRows.join('\n')}\n</table>`
}

/**
 * Detecta blocos de lista com marcadores fora de tabelas em HTML gerado pelo mammoth (.docx).
 * 
 * O mammoth NAO gera <ul>/<li> — converte listas como:
 *   <p>- item 1</p>
 *   <p>- item 2</p>
 * Ou como um unico <p> com <br />- item1<br />- item2
 * 
 * Esta funcao detecta esses padroes e agrupa com o titulo anterior
 * em cards coloridos com borda lateral, conforme o tipo de secao.
 * 
 * Regras de cor:
 * - Melhorias / Sugestoes → borda laranja (#e67e22), fundo amarelo claro (#fef9e7)
 * - Informacoes adicionais / Observacoes / Notas → borda verde (#27ae60), fundo verde claro (#eafaf1)
 * - Problemas / Erros / Falhas → borda vermelha (#e74c3c), fundo vermelho claro (#fdedec)
 * - Requisitos / Pre-condicoes / Ambiente → borda azul (#3498db), fundo azul claro (#ebf5fb)
 * - Outros (sem match) → borda cinza (#7f8c8d), fundo cinza claro (#f4f6f7)
 * 
 * NAO altera tabelas nem conteudo que ja esteja dentro de tabelas.
 * Usado APENAS no pipeline de .docx (mammoth).
 */
function processListBlocksDocx(html) {
  const SECTION_STYLES = [
    {
      keywords: /melhoria|sugest[aã]o|sugest[oõ]es|improvement|aprimoramento/i,
      borderColor: '#e67e22',
      bgColor: '#fef9e7'
    },
    {
      keywords: /informa[cç][aã]o|informa[cç][oõ]es\s*adicionais|observa[cç][aã]o|observa[cç][oõ]es|nota[s]?$|adicional|complementar/i,
      borderColor: '#27ae60',
      bgColor: '#eafaf1'
    },
    {
      keywords: /problema|erro|falha|bug|incidente|cr[ií]tico|bloqueio/i,
      borderColor: '#e74c3c',
      bgColor: '#fdedec'
    },
    {
      keywords: /requisito|pr[eé]-condi[cç][aã]o|depend[eê]ncia|ambiente|configura[cç][aã]o/i,
      borderColor: '#3498db',
      bgColor: '#ebf5fb'
    }
  ]

  const DEFAULT_STYLE = { borderColor: '#7f8c8d', bgColor: '#f4f6f7' }

  function getStyleForTitle(titleText) {
    for (const s of SECTION_STYLES) {
      if (s.keywords.test(titleText)) return s
    }
    return DEFAULT_STYLE
  }

  // Dividir HTML em segmentos: dentro-de-tabela vs fora-de-tabela
  const segments = []
  let lastIdx = 0
  const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/gi
  let tableMatch

  while ((tableMatch = tableRegex.exec(html)) !== null) {
    if (tableMatch.index > lastIdx) {
      segments.push({ type: 'content', text: html.substring(lastIdx, tableMatch.index) })
    }
    segments.push({ type: 'table', text: tableMatch[0] })
    lastIdx = tableMatch.index + tableMatch[0].length
  }
  if (lastIdx < html.length) {
    segments.push({ type: 'content', text: html.substring(lastIdx) })
  }

  // Processar apenas segmentos fora de tabelas
  const processedSegments = segments.map(seg => {
    if (seg.type === 'table') return seg.text
    return groupBulletParagraphs(seg.text, getStyleForTitle)
  })

  return processedSegments.join('')
}

/**
 * Agrupa paragrafos consecutivos com marcadores (- ou •) em blocos coloridos.
 * Detecta o titulo anterior (p>strong ou h1-h4) e usa para classificar a cor.
 */
function groupBulletParagraphs(html, getStyleForTitle) {
  // Separar em elementos individuais (tags de nivel de bloco)
  // Regex para capturar cada elemento de bloco: <p>...</p>, <h1>...</h1>, <ul>...</ul>, etc.
  const blockPattern = /<(?:p|h[1-6]|div|blockquote|ul|ol)[^>]*>[\s\S]*?<\/(?:p|h[1-6]|div|blockquote|ul|ol)>/gi
  const elements = []
  let lastEnd = 0
  let m

  while ((m = blockPattern.exec(html)) !== null) {
    if (m.index > lastEnd) {
      elements.push({ type: 'raw', html: html.substring(lastEnd, m.index) })
    }
    elements.push({ type: 'block', html: m[0], index: m.index })
    lastEnd = m.index + m[0].length
  }
  if (lastEnd < html.length) {
    elements.push({ type: 'raw', html: html.substring(lastEnd) })
  }

  if (elements.length === 0) return html

  // Classificar cada elemento de bloco
  for (const el of elements) {
    if (el.type !== 'block') continue
    const text = el.html.replace(/<[^>]*>/g, '').trim()

    // E uma lista <ul> ou <ol>? (gerada pelo mammoth em alguns .docx)
    const isListElement = /^<(?:ul|ol)/i.test(el.html)

    // E um paragrafo com marcador? (comeca com - ou • ou tem <br/>- padrao)
    const isBulletPara = /^[-•●▪]\s/.test(text) || /^<p[^>]*>\s*[-•●▪]\s/i.test(el.html)
    // E um paragrafo com multiplos itens separados por <br/> com marcadores?
    const hasMultiBullets = (el.html.match(/<br\s*\/?>\s*[-•●▪]\s/gi) || []).length >= 1

    el.isBullet = isBulletPara || hasMultiBullets || isListElement
    el.isListElement = isListElement

    // E um titulo? (h1-h4 ou p>strong sem marcador)
    const isHeading = /^<h[1-4]/i.test(el.html)
    const isStrongPara = /^<p[^>]*>\s*<strong/i.test(el.html) && !el.isBullet
    el.isTitle = isHeading || isStrongPara
    el.titleText = el.isTitle ? text : ''
  }

  // Agrupar: encontrar sequencias de [titulo?] + [bullet paragrafos consecutivos]
  const result = []
  let i = 0

  while (i < elements.length) {
    const el = elements[i]

    if (el.type === 'block' && el.isBullet) {
      // Encontrou um paragrafo com marcador — buscar titulo anterior
      let titleEl = null
      let titleIdx = -1

      // Olhar para tras para encontrar o titulo mais proximo (max 3 elementos atras)
      for (let back = i - 1; back >= Math.max(0, i - 3); back--) {
        if (elements[back].type === 'block' && elements[back].isTitle) {
          titleEl = elements[back]
          titleIdx = back
          break
        }
        // Se encontrar outro bloco que nao e raw/whitespace, parar
        if (elements[back].type === 'block' && !elements[back].isTitle) {
          const backText = elements[back].html.replace(/<[^>]*>/g, '').trim()
          if (backText && !(/^(<br\s*\/?>|\s)*$/.test(elements[back].html))) break
        }
      }

      // Coletar todos os bullet paragrafos consecutivos
      const bulletEls = []
      let j = i
      while (j < elements.length) {
        if (elements[j].type === 'block' && elements[j].isBullet) {
          bulletEls.push(elements[j])
          j++
        } else if (elements[j].type === 'raw' && /^\s*$/.test(elements[j].html)) {
          j++ // Pular whitespace entre bullets
        } else if (elements[j].type === 'block' && /^<p[^>]*>\s*(<br\s*\/?>)?\s*<\/p>$/i.test(elements[j].html)) {
          j++ // Pular paragrafos vazios entre bullets
        } else {
          break
        }
      }

      // Determinar estilo baseado no titulo
      const titleText = titleEl ? titleEl.titleText : ''
      const style = getStyleForTitle(titleText)

      // Se encontrou titulo, remover do result (ja foi adicionado) e incluir no bloco
      if (titleEl && titleIdx >= 0) {
        // Remover o titulo do result se ja foi adicionado
        const titleHtmlToRemove = titleEl.html
        const removeIdx = result.lastIndexOf(titleHtmlToRemove)
        if (removeIdx >= 0) {
          result.splice(removeIdx, 1)
        }
      }

      // Converter bullets em <ul><li> para melhor semantica
      const listItems = []
      let hasExistingList = false
      let existingListHtml = ''
      for (const bel of bulletEls) {
        // Se ja e um <ul> ou <ol>, preservar como esta
        if (bel.isListElement) {
          hasExistingList = true
          existingListHtml += bel.html
        } else {
          // Extrair texto dos bullets — pode ser um <p> com um item ou com multiplos via <br/>
          let content = bel.html
            .replace(/^<p[^>]*>/i, '')
            .replace(/<\/p>$/i, '')

          // Separar por <br/> se tiver multiplos itens
          const parts = content.split(/<br\s*\/?>/i)
          for (const part of parts) {
            const cleaned = part.replace(/^\s*[-•●▪]\s*/, '').trim()
            if (cleaned) {
              listItems.push(cleaned)
            }
          }
        }
      }

      // Montar o bloco
      const titleHtml = titleEl ? titleEl.html : ''
      let listHtml = ''
      if (hasExistingList) {
        listHtml = existingListHtml
      }
      if (listItems.length > 0) {
        listHtml += '<ul>' + listItems.map(item => `<li>${item}</li>`).join('') + '</ul>'
      }
      const blockHtml = `<div data-list-block="true" data-border-color="${style.borderColor}" data-bg-color="${style.bgColor}">${titleHtml}${listHtml}</div>`

      result.push(blockHtml)
      i = j
      continue
    }

    result.push(el.html)
    i++
  }

  return result.join('')
}

/**
 * Aplica estilos inline nos blocos de lista gerados por processListBlocks().
 * Roda DENTRO de applyInlineStyles para manter a ordem correta.
 */
function applyListBlockStyles(html) {
  // Converter data-list-block divs em divs com estilo inline
  html = html.replace(/<div data-list-block="true" data-border-color="([^"]*)" data-bg-color="([^"]*)">/gi,
    function(match, borderColor, bgColor) {
      return `<div style="margin:20px 0;padding:16px 20px;border-left:5px solid ${borderColor};background:${bgColor};border-radius:0 8px 8px 0;">`
    }
  )

  // Estilizar <ul> e <ol> dentro dos blocos de lista (sem bullets padrao, com marcadores customizados)
  // Aplicar estilo nas listas que estao logo apos o bloco
  html = html.replace(/(<div style="margin:20px 0;padding:16px 20px;border-left:5px solid[^"]*;background:[^"]*;border-radius:0 8px 8px 0;">)([\s\S]*?)(<\/div>)/gi,
    function(match, openDiv, content, closeDiv) {
      // Estilizar ul/ol dentro do bloco
      content = content.replace(/<ul(?![^>]*style=)([^>]*)>/gi,
        '<ul$1 style="margin:8px 0 0 0;padding-left:20px;list-style-type:disc;">')
      content = content.replace(/<ol(?![^>]*style=)([^>]*)>/gi,
        '<ol$1 style="margin:8px 0 0 0;padding-left:20px;">')
      // Estilizar li dentro do bloco
      content = content.replace(/<li(?![^>]*style=)([^>]*)>/gi,
        '<li$1 style="margin:4px 0;color:#2d3748;font-size:0.93em;line-height:1.5;">')
      return `${openDiv}${content}${closeDiv}`
    }
  )

  return html
}

/**
 * Aplica estilos inline em cada elemento HTML.
 * Necessario porque o sistema destino sanitiza removendo <style>.
 */
function applyInlineStyles(html) {
  // Estilos por tag/classe
  const S = {
    table: 'border-collapse:collapse;width:100%;margin:20px 0;font-size:0.90em;border:1px solid #ddd;',
    thData: 'padding:14px 16px;text-align:left;vertical-align:top;border:1px solid #e8e8e8;background-color:#fff;color:#333;',
    thHeader: `padding:14px 16px;text-align:center;vertical-align:middle;border:1px solid rgba(255,255,255,0.2);background-color:${HEADER_COLOR};color:#fff;font-weight:600;font-size:0.88em;`,
    thStatus: 'padding:14px 16px;text-align:center;vertical-align:middle;border:1px solid #e8e8e8;background-color:#fff;color:#333;',
    img: 'max-width:180px;height:auto;margin:8px 0;border-radius:4px;border:1px solid #ddd;box-shadow:0 1px 4px rgba(0,0,0,0.08);cursor:pointer;',
    p: 'margin:6px 0;color:#555;font-size:0.97em;',
    a: 'color:#3182ce;text-decoration:none;',
    h1: 'color:#1f3c5a;border-bottom:4px solid #3498db;padding-bottom:12px;margin-bottom:30px;',
    h2: 'color:#555;font-size:1.05em;font-weight:400;margin-top:36px;margin-bottom:16px;font-style:italic;',
    h3: 'color:#4a5568;font-size:1em;margin-top:20px;',
    strong: 'color:#2c3e50;',
    blockquote: 'margin:0 0 24px 0;padding:16px 20px;border-left:4px solid #3498db;background:#f8f9fa;border-radius:0 6px 6px 0;color:#555;font-size:0.9em;',
    statusPassou: 'display:inline-block;padding:5px 14px;border-radius:20px;font-weight:700;font-size:0.72em;text-transform:uppercase;letter-spacing:0.4px;color:#fff;background:#27ae60;',
    statusFalhou: 'display:inline-block;padding:5px 14px;border-radius:20px;font-weight:700;font-size:0.72em;text-transform:uppercase;letter-spacing:0.4px;color:#fff;background:#e74c3c;',
    statusAndamento: 'display:inline-block;padding:5px 14px;border-radius:20px;font-weight:700;font-size:0.72em;text-transform:uppercase;letter-spacing:0.4px;color:#fff;background:#3498db;',
    statusMelhoria: 'display:inline-block;padding:5px 14px;border-radius:20px;font-weight:700;font-size:0.72em;text-transform:uppercase;letter-spacing:0.4px;color:#fff;background:#f39c12;',
  }

  // Tables
  html = html.replace(/<table[^>]*>/gi, `<table style="${S.table}">`)

  // Status badges (antes de processar th/td genericos)
  html = html.replace(/<span class="status status-passou">/g, `<span style="${S.statusPassou}">`)
  html = html.replace(/<span class="status status-falhou">/g, `<span style="${S.statusFalhou}">`)
  html = html.replace(/<span class="status status-andamento">/g, `<span style="${S.statusAndamento}">`)
  html = html.replace(/<span class="status status-melhoria">/g, `<span style="${S.statusMelhoria}">`)

  // Header row cells (th dentro de tr.header-row)
  // Tambem corrigir cores internas (p, strong, a) para branco
  html = html.replace(/<tr class="header-row">([\s\S]*?)<\/tr>/gi, function(match, content) {
    let styled = content
      .replace(/<th([^>]*)>/gi, `<th$1 style="${S.thHeader}">`)
      .replace(/<td([^>]*)>/gi, `<td$1 style="${S.thHeader}">`)
    // Dentro do header, p e strong devem ser brancos
    styled = styled.replace(/<p(?:\s+style="[^"]*")?>/gi, '<p style="margin:6px 0;color:#fff;font-size:0.92em;">')
    styled = styled.replace(/<strong(?:\s+style="[^"]*")?>/gi, '<strong style="color:#fff;">')
    styled = styled.replace(/<a(?:\s+style="[^"]*")?\s/gi, '<a style="color:#7ec8e3;text-decoration:none;" ')
    return `<tr style="background-color:${HEADER_COLOR};">${styled}</tr>`
  })

  // Data row cells - aplicar estilo apenas em th/td que NAO tem style ainda
  html = html.replace(/<th(?![^>]*style=)([^>]*)>/gi, `<th$1 style="${S.thData}">`)
  html = html.replace(/<td(?![^>]*style=)([^>]*)>/gi, `<td$1 style="${S.thData}">`)

  // Imagens - thumbnail com link para abrir em nova aba
  // Envolver cada img em <a target="_blank"> apontando para o proprio src
  html = html.replace(/<img ([^>]*)src="([^"]*)"([^>]*)\/>/gi, function(match, before, src, after) {
    return `<a href="${src}" target="_blank" style="display:inline-block;"><img style="${S.img}" src="${src}" ${before} ${after} /></a>`
  })

  // Paragrafos (sem style existente)
  html = html.replace(/<p(?!\s+style)>/gi, `<p style="${S.p}">`)

  // Links
  html = html.replace(/<a /gi, (match) => {
    if (/style=/.test(match)) return match
    return `<a style="${S.a}" `
  })
  html = html.replace(/<a(?!\s+style)(\s)/gi, `<a style="${S.a}"$1`)

  // Headings
  html = html.replace(/<h1(?!\s+style)>/gi, `<h1 style="${S.h1}">`)
  html = html.replace(/<h2(?!\s+style)>/gi, `<h2 style="${S.h2}">`)
  html = html.replace(/<h3(?!\s+style)>/gi, `<h3 style="${S.h3}">`)

  // Blockquote
  html = html.replace(/<blockquote(?!\s+style)>/gi, `<blockquote style="${S.blockquote}">`)

  // Strong
  html = html.replace(/<strong(?!\s+style)>/gi, `<strong style="${S.strong}">`)

  // Aplicar estilos nos blocos de lista coloridos
  html = applyListBlockStyles(html)

  // Remover classes (nao necessarias com inline styles)
  html = html.replace(/ class="[^"]*"/gi, '')

  return html
}

/**
 * Processa todas as tabelas do HTML
 */
function processAllTables(html) {
  return html.replace(/<table[^>]*>[\s\S]*?<\/table>/gi, function(tableMatch) {
    return processTable(tableMatch)
  })
}

async function convertFile(inputPath) {
  const outputPath = inputPath.replace(/\.docx$/i, '.html')
  
  const result = await mammoth.convertToHtml(
    { path: inputPath },
    {
      convertImage: mammoth.images.imgElement(function (image) {
        return image.read('base64').then(function (imageBuffer) {
          return { src: `data:${image.contentType};base64,${imageBuffer}` }
        })
      })
    }
  )

  // Processar tabelas: marcar headers + aplicar badges de status
  let processedContent = processAllTables(result.value)

  // Processar blocos de lista fora de tabelas — cards coloridos com borda lateral (apenas .docx)
  processedContent = processListBlocksDocx(processedContent)

  // Converter o primeiro paragrafo (titulo do documento) em H1
  processedContent = processedContent.replace(
    /^(<p[^>]*>)([\s\S]*?)(<\/p>)/i,
    function(match, open, content, close) {
      return `<h1>${content}</h1>`
    }
  )

  // Aplicar estilos inline em cada elemento (sistema destino remove <style>)
  processedContent = applyInlineStyles(processedContent)

  const title = path.basename(inputPath, '.docx')
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;margin:0;padding:40px 20px;color:#333;line-height:1.6;background:#f5f7fb;">
<div style="max-width:1100px;margin:0 auto;background:#fff;padding:40px 50px;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
${processedContent}
</div>
</body>
</html>`

  fs.writeFileSync(outputPath, html, 'utf8')
  console.log(`OK: ${path.basename(outputPath)}`)

  if (result.messages.length > 0) {
    result.messages.forEach(m => console.log(`  Aviso: ${m.message}`))
  }
}

async function convertMdFile(inputPath) {
  if (!marked) {
    console.error('  ERRO: pacote "marked" nao instalado. Rode: npm install marked')
    return
  }

  const outputPath = inputPath.replace(/\.md$/i, '.html')
  const mdContent = fs.readFileSync(inputPath, 'utf8')

  // Converter Markdown para HTML
  let htmlContent = marked.parse(mdContent)

  // Processar tabelas (status badges)
  htmlContent = processAllTables(htmlContent)

  // Converter primeiro h1 ou paragrafo em titulo estilizado
  // Se o markdown ja gerou <h1>, manter; senao converter primeiro <p>
  if (!/<h1/.test(htmlContent)) {
    htmlContent = htmlContent.replace(
      /^(<p[^>]*>)([\s\S]*?)(<\/p>)/i,
      function(match, open, content, close) {
        return `<h1>${content}</h1>`
      }
    )
  }

  // Aplicar estilos inline
  htmlContent = applyInlineStyles(htmlContent)

  const title = path.basename(inputPath, '.md')
  const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;margin:0;padding:40px 20px;color:#333;line-height:1.6;background:#f5f7fb;">
<div style="max-width:1100px;margin:0 auto;background:#fff;padding:40px 50px;border-radius:8px;box-shadow:0 2px 12px rgba(0,0,0,0.06);">
${htmlContent}
</div>
</body>
</html>`

  fs.writeFileSync(outputPath, html, 'utf8')
  console.log(`OK: ${path.basename(outputPath)}`)
}

async function main() {
  if (!fs.existsSync(DIR)) {
    console.error(`Pasta nao encontrada: ${DIR}`)
    process.exit(1)
  }

  const docxFiles = fs.readdirSync(DIR).filter(f => f.toLowerCase().endsWith('.docx'))
  const mdFiles = fs.readdirSync(DIR).filter(f => f.toLowerCase().endsWith('.md') && f !== 'README.md')
  const total = docxFiles.length + mdFiles.length

  if (total === 0) {
    console.log('Nenhum .docx ou .md encontrado em Convert-html/')
    return
  }

  console.log(`Encontrados ${total} arquivo(s) (${docxFiles.length} .docx, ${mdFiles.length} .md)\n`)

  for (const file of docxFiles) {
    try {
      await convertFile(path.join(DIR, file))
    } catch (err) {
      console.error(`ERRO em ${file}: ${err.message}`)
    }
  }

  for (const file of mdFiles) {
    try {
      await convertMdFile(path.join(DIR, file))
    } catch (err) {
      console.error(`ERRO em ${file}: ${err.message}`)
    }
  }

  console.log('\nConversao concluida!')
}

main()
