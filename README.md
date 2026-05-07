# qa-convert-to-html

Converte documentos de teste QA (.docx e .md) em HTML corporativo com CSS inline.

Ideal para colar em sistemas que sanitizam CSS (TinyMCE, ERPs, editores rich-text, Quill, CKEditor).

## Instalação

```bash
npx qa-convert-to-html install
```

Isso cria no diretório raiz onde você executar o comando:
- `Convert-html/` — pasta para colocar os .docx/.md e receber os .html
- `scripts/convert-all-docx.js` — script de conversão
- `scripts/validate-html.js` — script de validação
- `.kiro/skills/qa-html-converter/SKILL.md` — skill para uso no Kiro IDE

## Uso

### Via npx

```bash
# Converter todos os .docx e .md da pasta Convert-html/
npx qa-convert-to-html convert

# Validar os HTMLs gerados
npx qa-convert-to-html validate
```

### Via Kiro IDE

1. Ative a skill: `#qa-html-converter`
2. Digite: `/QAhtml`

O Kiro faz tudo automaticamente (instala dependências, converte, valida).

## Formatos suportados

| Formato | Biblioteca | Nota |
|---------|-----------|------|
| .docx | mammoth | Extrai texto + imagens (base64) |
| .md | marked | Converte Markdown para HTML estilizado |

## Features

- ✅ Suporte a .docx e .md
- ✅ Imagens embutidas como base64 (arquivo único)
- ✅ Status automático (Sim→PASSOU, Não→FALHOU, vazio→EM ANDAMENTO)
- ✅ CSS 100% inline (compatível com sanitizadores)
- ✅ Cabeçalhos de tabela com fundo escuro
- ✅ Imagens clicáveis (abrem em nova aba)
- ✅ Validação automática pós-geração
- ✅ Instala tudo no diretório raiz onde for executado

## Requisitos

- Node.js >= 14
- mammoth e marked (instalados automaticamente pelo `install`)

## License

MIT
