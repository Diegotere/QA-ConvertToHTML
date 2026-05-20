# SUFRAMA — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações necessárias](#configurações-necessárias)
- [Faturamento](#faturamento)
- [Influência no XML da NF-e](#influência-no-xml-da-nf-e)

---

## Introdução

De acordo com o site suframa.gov.br: A **Superintendência da Zona Franca de Manaus (Suframa)** é uma Autarquia vinculada ao Ministério do Desenvolvimento, Indústria, Comércio e Serviços (MDIC) que administra a **Zona Franca de Manaus – ZFM**, com a responsabilidade de construir um modelo de desenvolvimento regional que utilize de forma sustentável os recursos naturais, assegurando viabilidade econômica e melhoria da qualidade de vida das populações locais.

A SUFRAMA tem como centro a cidade de Manaus e está assentada em benefícios fiscais e extrafiscais instituídos com objetivo de reduzir desvantagens locacionais e propiciar condições de alavancagem do processo de desenvolvimento da área incentivada. Na esfera do **Polo Industrial de Manaus (PIM)** os incentivos são possibilitados mediante ação conjunta entre o Governo Federal e o Governo do Estado do Amazonas.

### Incentivos fiscais concedidos para implantação de indústrias

**Federais:**

- **Imposto de Importação (II)** – Redução de 88% sobre os insumos destinados à industrialização ou proporcional ao valor agregado nacional quando se tratar de bens de informática;
- **Imposto sobre Produto Industrializado (IPI)** – Isento;
- **PIS e COFINS** – Alíquota zero nas entradas e nas vendas internas entre indústrias e de 3,65% nas vendas de produtos acabados para o resto do país;
- **Imposto sobre a Renda (IR)** – Redução de 75% do Imposto sobre a Renda e Adicionais Não Restituíveis, exclusivamente para reinvestimentos. Comum em toda Amazônia Legal.

**Estadual:**

- **ICMS** – Crédito Estímulo entre 55% a 100%. Em todos os casos as empresas são obrigadas a contribuir para fundos de financiamento ao ensino superior, turismo, P&D e às pequenas e microempresas.

**Incentivo extrafiscal:**

Além dos incentivos tributários, a Superintendência da Zona Franca de Manaus disponibiliza às empresas, sob a forma de incentivo locacional, lotes fundiários para utilização industrial, ao preço simbólico aproximado de US$ 0,30 por metro quadrado.

---

## Configurações necessárias

### Cidades da SUFRAMA

Acesse **Configurador / Geral / Opções / Diversos / SUFRAMA** para informar as cidades pertencentes à SUFRAMA:

> *[Imagem: Tela de configuração das cidades da SUFRAMA no Configurador]*

### Cadastro de Pessoa

No **Cadastro do cliente**, selecione **Cálculo SUFRAMA** e será habilitado o campo **SUFRAMA** onde é inserido o número de inscrição da empresa na SUFRAMA. Para isto, acesse o módulo **Pessoa / Clientes / Editar / Endereços / Editar**.

> *[Imagem: Tela de cadastro do cliente com o campo SUFRAMA habilitado]*

### Operação

Acesse **Configurador / Estoque / Operação**.

Na aba **Cálculos** marque os tributos necessários para apuração da NF-e. Nas abas presentes ao lado direito referente a cada tributo é possível realizar as configurações da SUFRAMA. A seguir, as configurações das abas **PIS**, **COFINS**, **ICMS** e **ICMS ST**.

#### Aba PIS e COFINS

Na aba **PIS** ou **COFINS** é possível definir se o valor correspondente a este imposto será:

- **Apura imposto** – O imposto referente será calculado normalmente sem ter seu valor descontado no total do documento;
- **Não apura imposto** – O imposto correspondente não será apurado;
- **Abater valor do total do documento** – Calcula o imposto, porém o valor correspondente é destacado e abatido do valor total do documento.

> **Observação:** A aba COFINS possui a mesma configuração.

> *[Imagem: Aba PIS da operação com as opções de configuração para SUFRAMA]*

#### Aba ICMS

Na aba **ICMS** há uma aba específica para o SUFRAMA onde é possível informar se o valor do ICMS será deduzido do valor do documento ou desconsiderado do valor do documento:

- **Deduzir do valor do documento** – O sistema abaterá o valor do imposto total da nota fiscal. Esta opção deverá ser selecionada ao tratar-se de contribuintes localizados em municípios **sujeitos à isenção**;
- **Desconsiderado do valor do documento** – O sistema não abaterá o valor do imposto total da nota fiscal. Esta opção deverá ser selecionada ao tratar-se de contribuintes localizados em municípios **não sujeitos à isenção**.

> **Nota:** Esta configuração afetará apenas a tributação para contribuintes inscritos na SUFRAMA.

> *[Imagem: Aba ICMS da operação com as opções de configuração para SUFRAMA]*

#### Aba Substituição Tributária (ICMS ST)

Em **Substituição Tributária** há opção de somar ao valor total do documento ou abater do valor do documento.

Caso haja o ICMS ST, na aba **Substituição tributária** também é possível informar se o valor correspondente será somado ao documento ou abatido.

- **"Deduz ICMS próprio da operação do valor da Substituição Tributária"** – Possibilita deduzir ou não o valor do ICMS próprio da operação:
  - Com a opção **marcada**: o sistema não considera o valor do ICMS na substituição tributária;
  - Com a opção **desmarcada**: o sistema considera o valor do ICMS na substituição tributária.

> *[Imagem: Aba Substituição Tributária da operação com as opções de configuração para SUFRAMA]*

#### Aba Documentos

Na aba **Documentos**, insira os códigos fiscais próprios da rotina. A SEFAZ valida se o **CFOP** é próprio de operações da Zona Franca. Se o cliente tiver dúvidas em qual escolher, peça para verificar com sua consultoria tributária.

> *[Imagem: Aba Documentos da operação com os CFOPs para operações da Zona Franca]*

### Cálculo de ICMS

No **Configurador / Estoque / Tributos / Cálculo de ICMS** localize a tabela vinculada no seu produto e a linha de origem da empresa e destino do cliente. Fique atento aos campos:

- **Alíquota de ICMS** – Insira o percentual de ICMS devido. Isso é necessário para que o sistema saiba o valor de ICMS que será desonerado;
- **Situação Tributária (CST)** – Selecione **30** ou **40**, que são as duas permitidas por lei. A CST **30** é usada para casos onde além do ICMS está presente também o ICMS ST.

> *[Imagem: Tela de Cálculo de ICMS com os campos de alíquota e CST para operações SUFRAMA]*

---

## Faturamento

Após essas configurações, veja como fica a nota com incidência de PIS, COFINS, ICMS e ICMS ST:

> *[Imagem: Tela do Faturamento com a nota SUFRAMA mostrando o valor total do produto e o valor total da nota após dedução dos tributos PIS, COFINS, ICMS e ICMS ST]*

Observe que é apresentado o valor total do produto e abaixo o valor total da nota considerando a dedução dos tributos PIS, COFINS, ICMS e ICMS ST. E abaixo o aviso sobre o destaque de ICMS.

> **Fica a dica:** A configuração dos outros tributos não muda. Se você quiser uma ajudinha, consulte o manual de configuração de tributos.

---

## Influência no XML da NF-e

Quando há benefício do SUFRAMA, o tratamento do XML ocorrerá de acordo com o que foi configurado na operação. A seguir são apresentados exemplos em que na operação estavam marcados:

- Nas abas **PIS/COFINS**: SUFRAMA – **Abater o valor do total do documento**;
- Na aba **ICMS**: SUFRAMA – **Deduzir do valor do documento**.

### 1º Exemplo

Nota com incidência de **PIS e COFINS**: veja que é apresentada alíquota e valor de PIS/COFINS, porém na tag referente ao desconto este valor é incluído sendo subtraído do total da nota.

> *[Imagem: XML da NF-e com as tags de PIS e COFINS e o desconto correspondente subtraído do total]*

### 2º Exemplo

Nota para SUFRAMA com incidência de **ICMS**:

- Valor da nota = R$ 1.000,00
- Alíquota de ICMS = 12%

O valor correspondente ao ICMS é apresentado na tag **`<vICMSDeson>`** que corresponde a ICMS desonerado.

Ao final do XML na tag de informações complementares **`<infCpl>`** é informado:

- O valor correspondente ao ICMS mais o ICMS ST (abatimento de ICMS);
- O Valor total da nota fiscal após a dedução dos tributos.

> *[Imagem: XML da NF-e com a tag vICMSDeson e as informações complementares com o abatimento de ICMS e o valor total após dedução]*
