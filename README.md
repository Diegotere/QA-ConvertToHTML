# qa-convert-to-html

Converte documentos de teste QA (.docx) em HTML corporativo com CSS inline.

Ideal para colar em sistemas que sanitizam CSS (TinyMCE, ERPs, editores rich-text, Quill, CKEditor).

## Instalação

```bash
npx qa-convert-to-html install
```

Isso cria no seu projeto:
- `CONVERTIDOS-HTML/` — pasta para colocar os .docx e receber os .html
- `scripts/convert-all-docx.js` — script de conversão
- `scripts/validate-html.js` — script de validação
- `.kiro/skills/qa-html-converter/SKILL.md` — skill para uso no Kiro IDE

## Uso

### Via npx

```bash
# Converter todos os .docx da pasta CONVERTIDOS-HTML/
npx qa-convert-to-html convert

# Validar os HTMLs gerados
npx qa-convert-to-html validate
```

### Via Kiro IDE

1. Ative a skill: `#qa-html-converter`
2. Digite: `/QAhtml`

O Kiro faz tudo automaticamente (instala dependências, converte, valida).

## Features

- ✅ Imagens embutidas como base64 (arquivo único)
- ✅ Status automático (Sim→PASSOU, Não→FALHOU, vazio→EM ANDAMENTO)
- ✅ CSS 100% inline (compatível com sanitizadores)
- ✅ Cabeçalhos de tabela com fundo escuro
- ✅ Imagens clicáveis (abrem em nova aba)
- ✅ Validação automática pós-geração

## Requisitos

- Node.js >= 14
- mammoth (instalado automaticamente pelo `install`)

## License

MIT
