# CEST – Código Especificador da Substituição Tributária — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [O que é CEST?](#o-que-é-cest)
- [Quem está obrigado a utilizar o CEST?](#quem-está-obrigado-a-utilizar-o-cest)
- [Mercadoria sem incidência de ICMS ST — é necessário informar o CEST?](#mercadoria-sem-incidência-de-icms-st--é-necessário-informar-o-cest)
- [O CEST altera a fórmula de cálculo do ICMS ST?](#o-cest-altera-a-fórmula-de-cálculo-do-icms-st)
- [É possível gerar NF-e sem o CEST?](#é-possível-gerar-nf-e-sem-o-cest)
- [Relação entre CEST e NCM](#relação-entre-cest-e-ncm)
- [Nota de entrada com CEST — o ICMS ST já foi calculado?](#nota-de-entrada-com-cest--o-icms-st-já-foi-calculado)
- [Como é composto o CEST?](#como-é-composto-o-cest)
- [O contribuinte que recebe a mercadoria precisa preencher o CEST?](#o-contribuinte-que-recebe-a-mercadoria-precisa-preencher-o-cest)
- [Empresas do Simples Nacional precisam se adequar ao CEST?](#empresas-do-simples-nacional-precisam-se-adequar-ao-cest)
- [Comentário da NT (Nota Técnica 2015/003 v.130)](#comentário-da-nt-nota-técnica-2015003-v130)
- [Alterações no sistema Bimer](#alterações-no-sistema-bimer)
- [Configurações do sistema Bimer](#configurações-do-sistema-bimer)

---

## O que é CEST?

**CEST** é uma sigla que significa **"Código Especificador da Substituição Tributária"**.

Foi criado para estabelecer uma uniformização e identificação das mercadorias e bens que são passíveis de **Substituição Tributária** e antecipação de ICMS.

Ele é usado em **Notas Fiscais Eletrônicas (NF-e)** conforme o **Convênio ICMS 142, de 29 de outubro de 2018**.

A instituição do CEST, somado à obrigatoriedade de informá-lo no respectivo documento fiscal, buscou delinear a correta identificação das mercadorias passíveis de sujeição ao regime da substituição tributária.

---

## Quem está obrigado a utilizar o CEST?

Todas as empresas que realizam a emissão de **NF-e/NFC-e** com produtos que estejam sujeitos a substituição tributária ou antecipação.

---

## Mercadoria sem incidência de ICMS ST — é necessário informar o CEST?

Se for realizada alguma operação com a mercadoria ou bem listados nos **Anexos I a XXVI do Convênio ICMS 142/2018**, mesmo que não haja a incidência de ICMS Substituição Tributária ou ICMS normal, **deve-se informar o código CEST**.

---

## O CEST altera a fórmula de cálculo do ICMS ST?

**Não**, a fórmula de cálculo do ICMS Substituição Tributária permanece a mesma.

---

## É possível gerar NF-e sem o CEST?

**Não**. A partir do ano de 2016 este código passou a ser obrigatório.

---

## Relação entre CEST e NCM

Sim, nas tabelas dos anexos do Convênio ICMS 142/2018, cada número de CEST é relacionado a um ou mais códigos de **NCM (Nomenclatura Comum do Mercosul)**. Assim, esses dois códigos devem ser preenchidos respeitando essa relação, pois do contrário, quando for gerada a nota fiscal eletrônica serão ocasionados erros nos campos específicos (tags) do NCM e CEST.

---

## Nota de entrada com CEST — o ICMS ST já foi calculado?

**Não necessariamente.** Segundo essa regulamentação, haverá casos em que um contribuinte realizará a saída/venda de produtos que possuam um código CEST, mas ele não será tributado por ele com a modalidade do ICMS ST, podendo ser um produto com tributação comum de ICMS, por exemplo.

Assim, a forma de verificar como o produto foi tributado continua sendo pelo **CST (Código de Situação Tributária)** do ICMS.

---

## Como é composto o CEST?

O código CEST é composto por **sete dígitos** divididos em três partes:

> *[Imagem: diagrama mostrando a composição do código CEST com os três grupos de dígitos]*

**Exemplo de leitura:** um produto relativo a *Bebidas alcoólicas, exceto cerveja e chope*, sendo do **Anexo III (02)**, no qual ele é o **primeiro item listado** no seu respectivo anexo **(001)** e **não possui nenhuma tributação diferenciada** para o cálculo do ICMS ST ou antecipação do imposto **(00)**.

Os dois primeiros dígitos ainda podem ser compostos de acordo com os códigos listados no Anexo I.

---

## O contribuinte que recebe a mercadoria precisa preencher o CEST?

Uma vez que o contribuinte que está realizando a emissão da nota já informa o código CEST no produto inserido na NF-e, o cliente que está **recebendo** essa mercadoria apenas executará o processo de escriturar a nota como uma movimentação de entrada.

---

## Empresas do Simples Nacional precisam se adequar ao CEST?

É aplicável a **todo tipo de empresa**, inclusive as do Simples Nacional.

---

## Comentário da NT (Nota Técnica 2015/003 v.130)

**Campo CEST:**

Incluído campo CEST (Código Especificador da Substituição Tributária) que estabelece a sistemática de uniformização e identificação das mercadorias e bens passíveis de sujeição aos regimes de substituição tributária e de antecipação de recolhimento do ICMS com o encerramento de tributação, relativos às operações subsequentes, conforme definições do **Convênio ICMS 142, de 29 de outubro de 2018**.

**Produtos e Serviços da NF-e:**

No arquivo XML, foi criada uma TAG com a informação do CEST, que deverá conter o número do CEST relativo ao produto referenciado.

> *[Imagem: trecho do XML da NF-e com a tag CEST preenchida]*

---

## Alterações no sistema Bimer

Para atender a legislação referente ao CEST, foram necessárias algumas alterações no sistema Bimer:

**1. Nova tabela no banco de dados:**

Foi criada a tabela **CEST**, que grava as informações das numerações do CEST, vinculando-as a um ID. Esta tabela já vem alimentada com os códigos CEST disponibilizados no Anexo da NT.

```sql
select * from cest
```

**2. Campo na tabela Produto:**

Na tabela **PRODUTO**, foi criada a coluna `idCEST`, que leva a informação de ID do número do CEST da tabela CEST.

```sql
select * from produto
```

**3. Campo na tabela ClassificacaoFiscal:**

Na tabela **ClassificacaoFiscal**, foi criada a coluna `idCEST`, que leva a informação de ID do número do CEST da tabela CEST.

```sql
select * from classificacaofiscal
```

O código CEST permite vínculo em dois locais no sistema Bimer:
- **Cadastro de Produtos**
- **Classificação Fiscal**

---

## Configurações do sistema Bimer

### Cadastro de Produtos

Caminho: **Cadastro de Produtos > Geração NF-e > Código CEST**

> *[Imagem: tela do Cadastro de Produtos com o campo Código CEST na aba Geração NF-e]*

Através deste campo é possível selecionar o código CEST cadastrado pelo sistema, ou cadastrar manualmente um novo código clicando no botão de adição.

> *[Imagem: tela de cadastro do Código CEST]*

### Classificação Fiscal

Caminho: **Configurador > Estoque > Tributos > Classificação Fiscal**

Nesta tela, você poderá localizar códigos CEST já cadastrados e também cadastrar um novo, se necessário.

> **Importante:** O código CEST informado no **produto** terá **precedência** sobre o código CEST da **classificação fiscal**.

Assim como o NCM, o código CEST não fica visível no momento em que vamos emitir uma NF-e no módulo Faturamento. Porém, esse código é informado no arquivo XML e a falta dele gera críticas e rejeição pela SEFAZ.
