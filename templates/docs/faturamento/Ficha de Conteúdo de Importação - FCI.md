# Ficha de Conteúdo de Importação - FCI — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
  - [Cadastro de Produtos](#cadastro-de-produtos)
  - [Configurador > Estoque > Tributos > Cálculo de ICMS](#configurador--estoque--tributos--cálculo-de-icms)
- [Rotina](#rotina)
  - [Nota Fiscal de Entrada](#nota-fiscal-de-entrada)
  - [Lançamento de Número de Controle de FCI pelo Módulo Cadastro de Produtos](#lançamento-de-número-de-controle-de-fci-pelo-módulo-cadastro-de-produtos)
  - [Venda com Número de Controle de FCI pelo Módulo Faturamento](#venda-com-número-de-controle-de-fci-pelo-módulo-faturamento)

---

## Introdução

Conforme as diretrizes do **Convênio ICMS 38/2013** e do **Ajuste SINIEF 19/2012**, a legislação determina, no artigo 8º:

> Nas operações com bens ou mercadorias importados que tenham sido submetidos a processo de industrialização no estabelecimento do contribuinte emitente da Nota Fiscal Eletrônica, deverá ser informado, em campo próprio do referido documento fiscal, o número de controle da FCI e o percentual do conteúdo de importação do produto.

A **FCI (Ficha de Conteúdo de Importação)** é gerada por um emissor público, que fornecerá ao cliente um código de controle baseado nas seguintes informações:

1. Descrição da mercadoria ou bem resultante do processo de industrialização;
2. O código de classificação na **Nomenclatura Comum do MERCOSUL – NCM/SH**;
3. Código do bem ou da mercadoria;
4. O código **GTIN** (Numeração Global de Item Comercial), quando o bem ou mercadoria possuir;
5. Unidade de medida;
6. Valor da parcela importada do exterior em cada unidade de medida;
7. Valor total da saída interestadual por unidade de medida;
8. Conteúdo de importação calculado nos termos da cláusula quarta.

O número de controle de FCI conterá **33 caracteres**. Exemplo de um código de FCI:

```
DB1EAD4-5AEF-4648-A5E3-A5EB391B19BB1
```

No sistema Bimer, o número de controle da FCI pode ser lançado:

- Na **entrada do produto** pelo módulo **Nota Fiscal de Entrada** (tanto em entrada manual quanto importação de XML de NF-e); ou
- Cadastrado diretamente no módulo **Cadastro de Produtos**.

Este deverá ser vinculado na emissão de NF-e de venda no módulo **Faturamento**.

> **Observação:** Caso precise verificar se um determinado número de FCI é válido e a qual produto e porcentagem pertence, acesse: [https://www.fazenda.sp.gov.br/CCIWEB/Account/Login.aspx](https://www.fazenda.sp.gov.br/CCIWEB/Account/Login.aspx)

---

## Configurações Necessárias

### Cadastro de Produtos

Acessando o módulo **Cadastro de Produtos** e abrindo o modo de edição do produto:

- O produto pode ter qualquer **Tipo**, exceto **Serviço** ou **Serviço Comercializado**.
- Na aba **Impostos**, o produto poderá ter **Origem 3, 5 ou 8**.

> *[Imagem: aba Impostos do cadastro de produto com campo Origem destacado]*

---

### Configurador > Estoque > Tributos > Cálculo de ICMS

No cadastro do **Cálculo de ICMS**, marque a opção **"Aplica alíquota para produtos de origem estrangeira"** e informe a **Al. ICMS**.

Com esta opção marcada, o sistema aplica esta alíquota de ICMS para produtos de origem estrangeira, quando em comercialização interestadual.

> **Atenção:** Esta informação não deve ser sugerida ao cliente; ele deve consultar o seu contador.

> *[Imagem: tela do Cálculo de ICMS com opção Aplica alíquota para produtos de origem estrangeira marcada]*

---

## Rotina

### Nota Fiscal de Entrada

1. Acesse o módulo **Nota Fiscal de Entrada**;
2. Informe a **Empresa** e clique em **Novo**;
3. Informe a **Operação** normalmente usada para compra, o número da nota e a data de emissão;
4. Dê continuidade ao cadastro da nota fiscal normalmente, informando os dados do fornecedor e da nota fiscal;
5. Ao adicionar o produto da nota, será apresentado o campo para informar o **código FCI**.

O campo FCI pode ser preenchido:
- **Manualmente**, digitando o número de controle de FCI; ou
- Através do botão **Localizar**, que mostrará os códigos vinculados no cadastro do produto.

> *[Imagem: tela de inclusão de produto na Nota Fiscal de Entrada com campo FCI destacado]*

**Comportamento após a entrada:**

- Caso tenha vinculado através do botão de localização o Número de FCI já vinculado ao cadastro do produto: dê a entrada normalmente e nada mudará no cadastro do produto.
- Caso tenha digitado o número de FCI manualmente: ao dar entrada nesta nota fiscal, este número será **vinculado ao cadastro do produto**.

Dê continuidade normalmente gravando o item na nota fiscal. Em seguida, informe o prazo e libere o documento. Rode o **Liberador de Estoque** para concluir a movimentação.

**Verificando o FCI no Cadastro de Produtos:**

Abra o módulo **Produto**, localize o cadastro do produto da nota fiscal e abra o modo de edição. Na aba **Empresa**, selecione a empresa da movimentação e vá na aba **FCI – Ficha de Conteúdo de Importação**.

Nesta aba é possível:
- Visualizar o número do FCI vinculado ao produto;
- **Ativar/inativar** o número do FCI;
- **Definir como padrão**;
- **Editar** um cadastro existente;
- **Excluir** caso não tenha nenhum documento vinculado a ele.

> *[Imagem: aba FCI no cadastro do produto com número de controle vinculado]*

> **Observação:** Caso dê entrada na nota fiscal com o cadastro do produto em aberto, é importante alternar entre o cadastro de um produto e outro, ou fechar o módulo e abrir novamente para o Nr. FCI aparecer corretamente.

**Importação via XML:**

O processo de cadastro do número FCI a partir da importação de XML de compra ocorrerá da mesma maneira que a nota lançada manualmente, exceto pelo fato de que o sistema lerá o número de FCI contido no XML e preencherá o campo automaticamente, **não sendo permitidas edições**.

Após a liberação da nota, o número de FCI também poderá ser visualizado em **Cadastro de Produtos > Empresa > FCI – Ficha de Conteúdo de Importação**.

No XML da nota fiscal eletrônica, esta informação vai junto ao produto na tag `<nFCI>`.

---

### Lançamento de Número de Controle de FCI pelo Módulo Cadastro de Produtos

1. Acesse o módulo **Produto** e localize o produto;
2. Abra o modo de edição;
3. Vá na aba **Empresas** e selecione a empresa de movimentação;
4. Na tela seguinte, acesse a aba **FCI – Ficha de Conteúdo de Importação**;
5. Para cadastrar, informe:
   - **Nr. FCI**
   - **Data da última atualização**
   - Defina se será **padrão**
   - Deixe a opção **Ativo** marcada.

> *[Imagem: aba FCI no cadastro de produto com campos de cadastro manual]*

---

### Venda com Número de Controle de FCI pelo Módulo Faturamento

O Número de controle de FCI somente é apresentado no módulo **Faturamento**, na inclusão do item da nota fiscal na aba **Complementar**.

**Procedimento:**

1. Acesse o módulo **Faturamento**;
2. Informe a **Empresa** e clique em **Novo**;
3. Informe o cliente e adicione o produto;
4. Vá na aba **Complementar** e localize o campo **Ficha de conteúdo de importação**.

Ao lado do campo há as opções:
- **"Preencher informação da ficha de importação"** — abrirá tela para localizar qual o número de controle da FCI deseja incluir. Nesta tela aparecerão todos os números de controle de FCI ativos, vinculados ao cadastro do produto.
- **"Retirar informação da ficha de importação"** — limpará o campo.

> *[Imagem: aba Complementar no Faturamento com campo Ficha de conteúdo de importação]*

Após incluir, basta gravar o lançamento do item e emitir a NF-e normalmente.
