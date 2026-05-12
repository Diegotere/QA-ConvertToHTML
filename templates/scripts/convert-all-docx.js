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
  const raw = arg ? arg.split('=')[1] : '#2c3e50'
  // Validar formato hexadecimal para prevenir CSS injection (A.8.28)
  const COLOR_REGEX = /^#[0-9a-fA-F]{3,8}$/
  return COLOR_REGEX.test(raw) ? raw : '#2c3e50'
})()

/**
 * Escapa caracteres especiais para contexto HTML.
 * Previne XSS quando nomes de arquivo sao inseridos em tags HTML (A.8.28).
 */
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

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

  const title = escapeHtml(path.basename(inputPath, '.docx'))
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

/**
 * Detecta se um arquivo .md e uma pre-analise pelo titulo.
 */
function isPreAnaliseMd(mdContent) {
  return /^#\s*Pré-Análise/m.test(mdContent)
}

/**
 * Escapa HTML em texto plano.
 */
function escapeHtmlText(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/**
 * Converte backticks inline (`code`) em <code> estilizado.
 */
function processInlineCode(text) {
  return text.replace(/`([^`]+)`/g,
    '<code style="background:#edf2f7;color:#2d3748;padding:2px 6px;border-radius:3px;font-size:0.88em;font-family:Consolas,monospace;">$1</code>')
}

/**
 * Converte **bold** em <strong>.
 */
function processInlineBold(text) {
  return text.replace(/\*\*([^*]+)\*\*/g, '<strong style="color:#2c3e50;">$1</strong>')
}

/**
 * Processa formatacao inline (code + bold).
 */
function processInlineFormatting(text) {
  let result = processInlineCode(text)
  result = processInlineBold(result)
  return result
}

/**
 * Converte um .md de pre-analise no formato corporativo com cards e tabelas.
 */
function convertPreAnaliseMdToHtml(mdContent, headerColor) {
  const lines = mdContent.split('\n')
  
  let titulo = 'Pré-Análise — Procedente'
  const tituloMatch = lines[0]?.match(/^#\s*(.+)/)
  if (tituloMatch) titulo = tituloMatch[1].trim()

  const sections = []
  let currentSection = null

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i]
    const sectionMatch = line.match(/^(\d+)\.\s*(.*)/)
    
    if (sectionMatch) {
      if (currentSection) sections.push(currentSection)
      currentSection = { num: parseInt(sectionMatch[1]), title: sectionMatch[2].trim(), lines: [] }
    } else if (currentSection) {
      currentSection.lines.push(line)
    }
  }
  if (currentSection) sections.push(currentSection)

  let confirmacao = ''
  let versaoInfo = ''
  let checklistItems = []
  let simulacaoItems = []
  let sugestaoTexto = ''
  let sugestaoArquivos = []
  let sugestaoHipotese = ''
  let baseInfo = []

  for (const sec of sections) {
    const content = sec.lines.join('\n').trim()

    switch (sec.num) {
      case 1:
        confirmacao = sec.title || content
        break
      case 2: {
        const versaoText = sec.title.replace(/^Pré-análise realizada nas seguintes versões:\s*/i, '').trim()
        versaoInfo = versaoText || content.split('\n')[0]?.trim() || ''
        break
      }
      case 3: {
        const items = content.match(/- \[[ x]\] .+/g) || []
        checklistItems = items.map(item => item.replace(/^- \[[ x]\] /, '').trim())
        break
      }
      case 4: {
        const items = content.match(/^\s*- .+/gm) || []
        simulacaoItems = items.map(item => item.replace(/^\s*- /, '').trim())
        break
      }
      case 5: {
        const contentLines = content.split('\n')
        let textoLines = []
        let arquivoLines = []
        let hipoteseLines = []
        let mode = 'texto'

        for (const cl of contentLines) {
          const trimmed = cl.trim()
          if (/^Arquivos envolvidos/i.test(trimmed)) {
            mode = 'arquivos'
            continue
          }
          if (/^Hip[oó]tese principal/i.test(trimmed)) {
            mode = 'hipotese'
            hipoteseLines.push(trimmed.replace(/^Hip[oó]tese principal:\s*/i, ''))
            continue
          }
          if (mode === 'texto') {
            textoLines.push(cl)
          } else if (mode === 'arquivos') {
            if (/^\s*- /.test(cl)) {
              const parts = cl.replace(/^\s*- /, '').split(' — ')
              arquivoLines.push({ arquivo: parts[0]?.trim() || '', descricao: parts[1]?.trim() || '' })
            }
          } else if (mode === 'hipotese') {
            hipoteseLines.push(trimmed)
          }
        }

        sugestaoTexto = textoLines.join('\n').trim()
        sugestaoArquivos = arquivoLines
        sugestaoHipotese = hipoteseLines.join(' ').trim()
        break
      }
      case 6: {
        const items = content.split('\n').filter(l => l.trim())
        baseInfo = items.map(l => l.replace(/^\s*- \[[ x]\] /, '').trim()).filter(Boolean)
        break
      }
    }
  }

  let appName = 'Bimer UP'
  let appVersao = ''
  let appData = ''
  if (versaoInfo) {
    const parts = versaoInfo.split(' - ')
    if (parts.length >= 3) {
      appName = parts[0].trim()
      appVersao = parts[1].trim()
      appData = parts[2].trim()
    } else {
      appVersao = versaoInfo
    }
  }

  let html = ''

  html += `<h1 style="color:#1f3c5a;border-bottom:4px solid ${headerColor};padding-bottom:12px;margin-bottom:8px;font-size:1.6em;">${escapeHtmlText(titulo)}</h1>\n`

  html += `<div style="display:flex;align-items:center;gap:12px;margin-bottom:30px;">
  <span style="background:#e74c3c;color:#fff;padding:6px 18px;border-radius:20px;font-weight:600;font-size:0.9em;">Procedente</span>
  <span style="color:#555;font-size:0.9em;">${escapeHtmlText(confirmacao)}</span>
</div>\n`

  html += `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:20px;margin-bottom:25px;">
  <table style="width:100%;border-collapse:collapse;">
    <tr><td style="padding:6px 12px;font-weight:600;color:#4a5568;width:200px;">Aplicação:</td><td style="padding:6px 12px;color:#2d3748;">${escapeHtmlText(appName)}</td></tr>
    <tr><td style="padding:6px 12px;font-weight:600;color:#4a5568;">Versão analisada:</td><td style="padding:6px 12px;color:#2d3748;">${escapeHtmlText(appVersao)}</td></tr>
    <tr><td style="padding:6px 12px;font-weight:600;color:#4a5568;">Data da análise:</td><td style="padding:6px 12px;color:#2d3748;">${escapeHtmlText(appData)}</td></tr>
  </table>
</div>\n`

  if (checklistItems.length > 0) {
    html += `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:20px;margin-bottom:25px;">
  <h3 style="color:#1f3c5a;margin-top:0;margin-bottom:12px;font-size:1.05em;">Checklist</h3>
  <table style="width:100%;border-collapse:collapse;">\n`
    for (const item of checklistItems) {
      html += `    <tr><td style="padding:5px 8px;color:#4a5568;">☐ ${escapeHtmlText(item)}</td></tr>\n`
    }
    html += `  </table>\n</div>\n`
  }

  if (simulacaoItems.length > 0) {
    html += `<div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:20px;margin-bottom:25px;">
  <h3 style="color:#1f3c5a;margin-top:0;margin-bottom:12px;font-size:1.05em;">Informações Adicionais para Simulação</h3>
  <table style="width:100%;border-collapse:collapse;">
    <thead><tr style="background:${headerColor};"><th style="padding:10px 12px;color:#fff;text-align:left;font-size:0.9em;border-radius:4px 0 0 0;width:60px;">Passo</th><th style="padding:10px 12px;color:#fff;text-align:left;font-size:0.9em;border-radius:0 4px 0 0;">Ação</th></tr></thead>
    <tbody>\n`
    simulacaoItems.forEach((item, idx) => {
      const bg = idx % 2 === 1 ? 'background:#f8fafc;' : ''
      html += `      <tr style="border-bottom:1px solid #e2e8f0;${bg}"><td style="padding:10px 12px;font-weight:600;color:#4a5568;vertical-align:top;">${idx + 1}</td><td style="padding:10px 12px;color:#2d3748;">${processInlineFormatting(escapeHtmlText(item))}</td></tr>\n`
    })
    html += `    </tbody>\n  </table>\n</div>\n`
  }

  if (sugestaoTexto || sugestaoArquivos.length > 0 || sugestaoHipotese) {
    html += `<div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:20px;margin-bottom:25px;">
  <h3 style="color:#1f3c5a;margin-top:0;margin-bottom:12px;font-size:1.05em;">Sugestão de Como Deveria Funcionar</h3>\n`

    if (sugestaoTexto) {
      const paragraphs = sugestaoTexto.split(/\n\s*\n/).filter(Boolean)
      for (const p of paragraphs) {
        html += `  <p style="color:#2d3748;margin-bottom:15px;">${processInlineFormatting(escapeHtmlText(p.replace(/\n/g, ' ').trim()))}</p>\n`
      }
    }

    if (sugestaoHipotese) {
      html += `  <div style="background:#fffbeb;border:1px solid #f59e0b;border-radius:6px;padding:15px;margin-top:15px;">
    <p style="color:#92400e;margin:0;font-weight:600;">Hipótese principal:</p>
    <p style="color:#78350f;margin:8px 0 0 0;">${processInlineFormatting(escapeHtmlText(sugestaoHipotese))}</p>
  </div>\n`
    }

    if (sugestaoArquivos.length > 0) {
      html += `  <h4 style="color:#4a5568;margin-top:20px;margin-bottom:10px;font-size:0.95em;">Arquivos Envolvidos</h4>
  <table style="width:100%;border-collapse:collapse;">
    <thead><tr style="background:${headerColor};"><th style="padding:10px 12px;color:#fff;text-align:left;font-size:0.9em;border-radius:4px 0 0 0;">Arquivo</th><th style="padding:10px 12px;color:#fff;text-align:left;font-size:0.9em;border-radius:0 4px 0 0;">Função</th></tr></thead>
    <tbody>\n`
      sugestaoArquivos.forEach((item, idx) => {
        const bg = idx % 2 === 1 ? 'background:#f8fafc;' : ''
        const fileName = item.arquivo.replace(/`/g, '').split('/').pop() || item.arquivo.replace(/`/g, '')
        html += `      <tr style="border-bottom:1px solid #e2e8f0;${bg}"><td style="padding:8px 12px;color:#2d3748;font-size:0.88em;"><code style="background:#edf2f7;padding:2px 4px;border-radius:3px;">${escapeHtmlText(fileName)}</code></td><td style="padding:8px 12px;color:#4a5568;">${processInlineFormatting(escapeHtmlText(item.descricao))}</td></tr>\n`
      })
      html += `    </tbody>\n  </table>\n`
    }

    html += `</div>\n`
  }

  if (baseInfo.length > 0) {
    html += `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:20px;margin-bottom:20px;">
  <h3 style="color:#1f3c5a;margin-top:0;margin-bottom:12px;font-size:1.05em;">Informações da Base de Dados</h3>
  <table style="width:100%;border-collapse:collapse;">\n`
    for (const item of baseInfo) {
      const kvMatch = item.match(/^([A-Z][A-Z_ ]+)=(.*)$/i)
      if (kvMatch) {
        html += `    <tr><td style="padding:6px 12px;font-weight:600;color:#4a5568;width:180px;">${escapeHtmlText(kvMatch[1].trim())}:</td><td style="padding:6px 12px;color:#2d3748;">${escapeHtmlText(kvMatch[2].trim())}</td></tr>\n`
      } else {
        html += `    <tr><td colspan="2" style="padding:6px 12px;color:#2d3748;">${escapeHtmlText(item)}</td></tr>\n`
      }
    }
    html += `  </table>\n</div>\n`
  }

  html += `<div style="text-align:center;padding-top:20px;border-top:1px solid #e2e8f0;margin-top:30px;">
  <p style="color:#a0aec0;font-size:0.85em;margin:0;">Pré-análise gerada automaticamente — Desenvolvimento DSN</p>
</div>\n`

  return html
}

async function convertMdFile(inputPath) {
  if (!marked) {
    console.error('  ERRO: pacote "marked" nao instalado. Rode: npm install marked')
    return
  }

  const outputPath = inputPath.replace(/\.md$/i, '.html')
  const mdContent = fs.readFileSync(inputPath, 'utf8')

  let htmlContent

  // Detectar se e uma pre-analise e usar template corporativo
  if (isPreAnaliseMd(mdContent)) {
    htmlContent = convertPreAnaliseMdToHtml(mdContent, HEADER_COLOR)
  } else {
    // Converter Markdown para HTML (generico)
    htmlContent = marked.parse(mdContent)

    // Processar tabelas (status badges)
    htmlContent = processAllTables(htmlContent)

    // Converter primeiro h1 ou paragrafo em titulo estilizado
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
  }

  const title = escapeHtml(path.basename(inputPath, '.md'))
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
