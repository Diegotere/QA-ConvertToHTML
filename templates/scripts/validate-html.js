/**
 * Valida o HTML gerado contra os padroes esperados.
 * Uso: node scripts/validate-html.js
 */
const fs = require('fs')
const path = require('path')

const DIR = path.resolve(__dirname, '..', 'Convert-html')
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.html'))

if (files.length === 0) {
  console.log('Nenhum HTML para validar.')
  process.exit(0)
}

let hasErrors = false

for (const file of files) {
  const html = fs.readFileSync(path.join(DIR, file), 'utf8')
  console.log(`\n=== Validando: ${file} ===\n`)

  // 1. Verificar se badges de status existem (inline ou class)
  const passou = (html.match(/background:#27ae60|status-passou/g) || []).length
  const falhou = (html.match(/background:#e74c3c|status-falhou/g) || []).length
  const andamento = (html.match(/background:#3498db|status-andamento/g) || []).length
  const melhoria = (html.match(/background:#f39c12|status-melhoria/g) || []).length
  const total = passou + falhou + andamento + melhoria

  console.log(`Status badges: ${total} total`)
  console.log(`  PASSOU: ${passou} | FALHOU: ${falhou} | EM ANDAMENTO: ${andamento} | MELHORIA: ${melhoria}`)

  if (total === 0) {
    console.log('  ERRO: Nenhum badge de status encontrado!')
    hasErrors = true
  }

  // 2. Verificar se header-row existe (class ou inline background)
  const headerRows = (html.match(/header-row|background-color:#2c3e50/g) || []).length
  console.log(`\nHeader rows: ${headerRows}`)
  if (headerRows === 0) {
    console.log('  ERRO: Nenhuma header-row encontrada!')
    hasErrors = true
  }

  // 3. Verificar se badge NAO esta na primeira celula de uma row (bug de desalinhamento)
  // Detectar tanto class-based quanto inline-based badges
  const badgeInFirstCell = html.match(/<tr[^>]*>\s*<th[^>]*>\s*<span[^>]*(?:status|background:#(?:27ae60|e74c3c|3498db|f39c12))/g) || []
  if (badgeInFirstCell.length > 0) {
    console.log(`\n  ERRO: ${badgeInFirstCell.length} badge(s) na PRIMEIRA celula (desalinhamento)!`)
    hasErrors = true
  } else {
    console.log('\n  OK: Nenhum badge desalinhado na primeira celula.')
  }

  // 4. Verificar se imagens existem
  const images = (html.match(/<img /g) || []).length
  console.log(`\nImagens: ${images}`)
  if (images === 0) {
    console.log('  AVISO: Nenhuma imagem encontrada.')
  }

  // 5. Verificar se a cor do cabecalho esta correta (apenas em header-row)
  const headerBgInNonHeader = html.match(/(?<!header-row[^"]*")background-color:\s*#2d3748/g) || []
  console.log(`\nCor #2d3748 fora de header-row: ${headerBgInNonHeader.length}`)
}

console.log('\n' + (hasErrors ? 'VALIDACAO FALHOU - corrija os erros acima.' : 'VALIDACAO OK'))
process.exit(hasErrors ? 1 : 0)
