# Conversor de Documentos QA → HTML

Ferramenta para converter documentos de teste (.docx) em HTML corporativo com estilos inline, pronto para colar em sistemas que sanitizam CSS (TinyMCE, ERPs, editores rich-text).

## Início Rápido

1. Coloque os arquivos `.docx` nesta pasta (`CONVERT-HTML/`)
2. No Kiro: ative `#qa-html-converter` e digite `/QAhtml`
3. Ou rode: `node scripts/convert-all-docx.js`

Os HTMLs gerados ficam nesta mesma pasta.

## Comandos

| Comando | Descrição |
|---------|-----------|
| `npx qa-convert-to-html install` | Instala scripts, skills e pastas |
| `npx qa-convert-to-html convert` | Converte todos os .docx |
| `npx qa-convert-to-html validate` | Valida os HTMLs gerados |
| `/QAhtml` (no Kiro) | Faz tudo automaticamente |

## Features

| Feature | Descrição |
|---------|-----------|
| Imagens base64 | Embutidas no HTML, sem arquivos externos |
| Status automático | "Sim" → PASSOU, "Não" → FALHOU, vazio → EM ANDAMENTO |
| CSS inline | Funciona em sistemas que removem `<style>` |
| Cabeçalho escuro | Apenas rows de header ficam com fundo #2c3e50 |
| Imagens clicáveis | Thumbnails com link para abrir em nova aba |

## Conversão de Status

| Valor no .docx | Badge | Cor |
|----------------|-------|-----|
| Sim / Yes | PASSOU | Verde (#27ae60) |
| Não / No | FALHOU | Vermelho (#e74c3c) |
| (vazio) | EM ANDAMENTO | Azul (#3498db) |
| Melhoria | MELHORIA | Laranja (#f39c12) |
