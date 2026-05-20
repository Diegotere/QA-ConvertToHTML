#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const command = process.argv[2]
const cwd = process.cwd()

const COLORS = {
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

function log(msg, color = 'reset') {
  console.log(`${COLORS[color]}${msg}${COLORS.reset}`)
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true })
  const entries = fs.readdirSync(src, { withFileTypes: true })
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name)
    const destPath = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath)
    } else {
      fs.copyFileSync(srcPath, destPath)
    }
  }
}

function install() {
  log('\n╔══════════════════════════════════════════╗', 'blue')
  log('║   QA Convert to HTML - Instalador        ║', 'blue')
  log('╚══════════════════════════════════════════╝\n', 'blue')

  const templatesDir = path.join(__dirname, '..', 'templates')

  // 1. Criar pasta Convert-html
  const convertDir = path.join(cwd, 'Convert-html')
  if (!fs.existsSync(convertDir)) {
    fs.mkdirSync(convertDir, { recursive: true })
    log('✓ Pasta Convert-html/ criada', 'green')
  } else {
    log('• Pasta Convert-html/ já existe', 'yellow')
  }

  // 2. Copiar scripts
  const scriptsDir = path.join(cwd, 'scripts')
  if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir, { recursive: true })

  const scriptsSrc = path.join(templatesDir, 'scripts')
  const scriptFiles = fs.readdirSync(scriptsSrc)
  for (const file of scriptFiles) {
    const dest = path.join(scriptsDir, file)
    if (fs.existsSync(dest)) {
      log(`• scripts/${file} já existe (não sobrescrito)`, 'yellow')
    } else {
      fs.copyFileSync(path.join(scriptsSrc, file), dest)
      log(`✓ scripts/${file} instalado`, 'green')
    }
  }

  // 3. Copiar skill do Kiro
  const skillDir = path.join(cwd, '.kiro', 'skills', 'qa-html-converter')
  if (!fs.existsSync(skillDir)) fs.mkdirSync(skillDir, { recursive: true })

  const skillSrc = path.join(templatesDir, 'skill')
  const skillFiles = fs.readdirSync(skillSrc)
  for (const file of skillFiles) {
    const dest = path.join(skillDir, file)
    if (fs.existsSync(dest)) {
      log(`• .kiro/skills/qa-html-converter/${file} já existe (não sobrescrito)`, 'yellow')
    } else {
      fs.copyFileSync(path.join(skillSrc, file), dest)
      log(`✓ .kiro/skills/qa-html-converter/${file} instalado`, 'green')
    }
  }

  // 4. Copiar steering do Kiro
  const steeringDir = path.join(cwd, '.kiro', 'steering')
  if (!fs.existsSync(steeringDir)) fs.mkdirSync(steeringDir, { recursive: true })

  const steeringSrc = path.join(templatesDir, 'steering')
  const steeringFiles = fs.readdirSync(steeringSrc)
  for (const file of steeringFiles) {
    const dest = path.join(steeringDir, file)
    if (fs.existsSync(dest)) {
      log(`• .kiro/steering/${file} já existe (não sobrescrito)`, 'yellow')
    } else {
      fs.copyFileSync(path.join(steeringSrc, file), dest)
      log(`✓ .kiro/steering/${file} instalado`, 'green')
    }
  }

  // 5. Copiar docs do Kiro
  const docsDir = path.join(cwd, '.kiro', 'docs')
  const docsSrc = path.join(templatesDir, 'docs')
  if (fs.existsSync(docsSrc)) {
    copyDir(docsSrc, docsDir)
    log('✓ .kiro/docs/ instalado/atualizado', 'green')
  }

  // 6. Copiar README na pasta Convert-html
  const readmeSrc = path.join(templatesDir, 'README.md')
  const readmeDest = path.join(convertDir, 'README.md')
  if (!fs.existsSync(readmeDest)) {
    fs.copyFileSync(readmeSrc, readmeDest)
    log('✓ Convert-html/README.md instalado', 'green')
  } else {
    log('• Convert-html/README.md já existe', 'yellow')
  }

  // 7. Instalar mammoth e marked como dependências (versões fixas — A.8.30)
  log('\n📦 Instalando dependências (mammoth + marked)...', 'blue')
  const { execFileSync } = require('child_process')
  try {
    execFileSync('npm', ['install', 'mammoth@1.8.0', 'marked@15.0.4', '--save-dev'], { cwd, stdio: 'pipe', shell: true })
    log('✓ mammoth@1.8.0 e marked@15.0.4 instalados', 'green')
  } catch (e) {
    log('⚠ Falha ao instalar dependências. Rode manualmente: npm install mammoth@1.8.0 marked@15.0.4 --save-dev', 'red')
  }

  // Resumo
  log('\n╔══════════════════════════════════════════╗', 'green')
  log('║   Instalação concluída!                  ║', 'green')
  log('╚══════════════════════════════════════════╝', 'green')
  log('\nComo usar:', 'bold')
  log('  1. Coloque os .docx ou .md em Convert-html/')
  log('  2. No Kiro: ative #qa-html-converter e digite /QAhtml')
  log('  3. Ou rode: node scripts/convert-all-docx.js\n')
}

function convert() {
  log('\n🔄 Convertendo documentos...\n', 'blue')
  const scriptPath = path.join(cwd, 'scripts', 'convert-all-docx.js')
  if (!fs.existsSync(scriptPath)) {
    log('✗ Script não encontrado. Rode primeiro: npx qa-convert-to-html install', 'red')
    process.exit(1)
  }
  const { execFileSync } = require('child_process')
  try {
    execFileSync(process.execPath, [scriptPath], { cwd, stdio: 'inherit' })
  } catch (e) {
    log('✗ Erro na conversão', 'red')
    process.exit(1)
  }
}

function validate() {
  log('\n🔍 Validando HTMLs gerados...\n', 'blue')
  const scriptPath = path.join(cwd, 'scripts', 'validate-html.js')
  if (!fs.existsSync(scriptPath)) {
    log('✗ Script de validação não encontrado.', 'red')
    process.exit(1)
  }
  const { execFileSync } = require('child_process')
  try {
    execFileSync(process.execPath, [scriptPath], { cwd, stdio: 'inherit' })
  } catch (e) {
    process.exit(1)
  }
}

// CLI
switch (command) {
  case 'install':
    install()
    break
  case 'convert':
    convert()
    break
  case 'validate':
    validate()
    break
  default:
    log('\nQA Convert to HTML', 'bold')
    log('─────────────────────────────')
    log('\nComandos disponíveis:')
    log('  npx qa-convert-to-html install   → Instala scripts, skills e pastas')
    log('  npx qa-convert-to-html convert   → Converte todos os .docx e .md')
    log('  npx qa-convert-to-html validate  → Valida os HTMLs gerados\n')
    break
}
