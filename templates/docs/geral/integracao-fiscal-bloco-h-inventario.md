# Integração Fiscal — Bloco H (Inventário) — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [O que é Bloco H?](#o-que-é-bloco-h)
- [Configurações no Bimer](#configurações-no-bimer)
- [Geração do Arquivo no Bimer](#geração-do-arquivo-no-bimer)
- [Importação no WFiscal](#importação-no-wfiscal)

---

## O que é Bloco H?

O bloco H é o inventário físico de produtos que a empresa possui em seu estoque ao final de determinado período (na maioria dos casos, no final do ano de apuração).

O usuário pega o saldo de produtos que ele tem no Bimer (resultante de vendas, compras, e outras entradas e saídas) e envia para o sistema Fiscal.

---

## Configurações no Bimer

Primeiro, faça os seguintes passos:

1. Acesse o **Configurador Bimer >> Estoque >> Opções >> Integração Fiscal** e marque a opção **"Habilitar exportação de dados para o fiscal no relatório de inventário"**.

2. No **Configurador Bimer >> Estoque >> Opções >> Inventário**, localize o campo **"Número de casas decimais para o valor unitário para o inventário"** e preencha para que o sistema também considere os valores com vírgula (ex.: 5,75).

> **Observação:** Se não tiver nada preenchido, o sistema arredonda o valor para cima (ex.: em vez de 5,75 arredonda para 6).

---

## Geração do Arquivo no Bimer

Acesse o módulo **Relatórios de estoque**. Após, vá ao menu **Relatórios >> Inventário**. Na tela dos parâmetros informe:

- **Mês/Ano Referência:** Com o mês que possui o saldo que levará para o inventário.
- **Tipo de relatório:** Escolha o tipo de custo que será usado para a coluna valor unitário do item.
- **Número de casas decimais para a quantidade em estoque:** Informe a quantidade para este campo, principalmente quando trabalha com medidas fracionadas como quilograma, metro e litros.
- **Não Imprimir produtos com quantidade zerada** e **Não imprimir produtos com quantidade negativa:** Com essas marcações o arquivo será gerado apenas com produtos que tenham saldo maior que zero. Essas marcações são aplicadas ao SPED ICMS e IPI, que não aceita produtos com quantidade igual ou menor que zero.

> **Dica:** Em caso de dúvidas sobre produtos com saldo zerado ou negativo, verifique com sua consultoria contábil a melhor decisão para esses casos.

Clique em **Exportar** (segundo botão no rodapé). Na próxima tela clique na pasta amarela, informe o diretório, a descrição do arquivo a ser criado no campo **Nome** e clique em **Abrir**. Por fim clique em **Gerar TXT** e confirme a geração do arquivo.

### Detalhes dos campos do arquivo gerado

| Campo | Descrição |
|-------|-----------|
| Campo 03 | NCM — no Bimer conhecido como **Classificação Fiscal** do produto |
| Campos 05 e 06 | Código e nome dos grupos vinculados nos produtos |
| Campo 09 | Valor de custo do produto (custo médio ou de reposição, conforme marcação na geração) |
| Campo 10 | Alíquota de ICMS interna do estado da empresa, presente em **Configurador Bimer >> Geral >> Endereço >> UF** |

> **Observação:** Os nomes dos campos seguem a mesma descrição do módulo Importador do WFiscal, para facilitar o mapeamento na importação.

---

## Importação no WFiscal

O arquivo gerado pelo Bimer pode ser importado em qualquer sistema de contabilidade que consiga interpretar o layout gerado. A seguir, os passos para integração com o sistema **WFiscal da Alterdata**.

Para acessar o importador:

Acesse a aba **Lançamentos >> Inventário e estoque >> Inventário Personalizado**.

1. Informe a **empresa**.
2. Marque **Código específico**.
3. Selecione o **período de geração do movimento** (normalmente o mesmo informado no Bimer ERP).
4. Clique em **Concluir** para abrir a tela dos 9 passos.

### Passo 1 de 9

Marque **Texto (*.txt)**.

### Passo 2 de 9

Selecione o arquivo que será importado. Acima de **Abrir**, escolha a opção **Texto (*.txt)** para encontrar o arquivo gerado no Bimer ERP.

### Passo 3 de 9

Marque as opções:
- **Delimitado** — Caracteres como vírgula ou tabulação separam cada campo.
- Em **Delimitador de campo**, marque **Ponto e vírgula**.

### Passo 4 de 9

Preencha o campo **Primeira linha** com a informação da primeira linha do arquivo a ser considerada na importação (normalmente o valor **1**, para importar todos os dados do arquivo).

Deixe o **Símbolo decimal** como vírgula (`,`).

### Passo 6 de 9

Clique na setinha ao lado de cada coluna (com a descrição **Field**) e selecione os campos conforme o layout do arquivo gerado pelo Bimer.

### Passo 7 de 9

A fim de evitar erros no SPED ICMS e IPI:

- Indique que a coluna **Descrição - inventário** receberá a mesma informação da coluna **Descrição – produto**.
- Selecione que a coluna **Unidade de medida IV** receberá o valor da coluna **Unidade medida**.

### Passo 9 de 9

- Deixe a opção **"Adicionar: acrescenta registros no arquivo de destino"** marcada.
- Clique em **Executar**.

### Conferência do movimento importado

Consulte o movimento importado em **Lançamentos >> Inventário e estoque >> Movimento de Inventário**, indique a empresa e o período.

> **Dica:** No arquivo do Bimer ERP não vem o campo **Conta do Inventário**, que é obrigatório na validação do SPED ICMS e IPI. Se desejar preencher essa informação em massa no fiscal, clique no botão da **Engrenagem** (último botão da tela de Movimento de Inventário).
