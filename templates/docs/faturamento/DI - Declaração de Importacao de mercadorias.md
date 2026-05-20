# DI – Declaração de Importação de Mercadorias — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Configurações](#configurações)
- [Geração da Nota](#geração-da-nota)
- [Geração da Nota Atendendo Pedido de Compras](#geração-da-nota-atendendo-pedido-de-compras)
- [Produtos com Lote e Série](#produtos-com-lote-e-série)
- [Cálculos e Tributos](#cálculos-e-tributos)
- [Termos Usados na Rotina de Declaração de Importação](#termos-usados-na-rotina-de-declaração-de-importação)

---

## Introdução

Para suprir à necessidade de reposição de estoque de produtos, as empresas têm a opção de adquiri-los no mercado interno (dentro do país) ou no mercado externo (vindo de outros países). Quando a operação de compra é realizada no mercado externo, dá-se o nome de **importação**.

O processo de importação é composto de várias etapas, pois precisa cumprir uma série de burocracias para regularizar a entrega de produtos estrangeiros no País. Durante esse processo, a empresa importadora precisa emitir alguns documentos. Entre eles encontra-se a **Declaração de Importação**, comumente chamada de **DI**.

Segundo a RFB (Receita Federal do Brasil), a Declaração de Importação consiste na prestação das informações correspondentes à operação de importação, contendo dados de natureza comercial, fiscal e cambial sobre as mercadorias.

> *[Imagem: Fases simplificadas de um processo de importação]*

Para a retirada da mercadoria, a empresa importadora deverá emitir uma NF-e a partir das informações que constam na Declaração de Importação. O objetivo deste material é explicar como emitir a nota fiscal a partir de uma DI. A rotina pode ser toda realizada de maneira **manual**, digitando a Declaração de Importação, ou a DI pode ser importada através do **XML** disponibilizado pela SISCOMEX.

Após emitir a Nota Fiscal Eletrônica, deve ser enviada para SEFAZ para iniciar o processo de autorização.

Na nota gerada:
- As informações do **emitente** (grupo de tags `emit`) serão preenchidas com os dados da empresa nacional que comprou a mercadoria;
- As informações do **destinatário** (grupo de tags `dest`) serão preenchidas com o fornecedor estrangeiro, e dentro dessa nota a tag `DI` será adicionada para informar à SEFAZ que se trata de uma nota de importação.

> Mesmo a empresa nacional sendo a emitente da NF-e, ela se trata de uma operação de **entrada** e alimentará o estoque dos produtos, além de gerar os títulos a pagar ao fornecedor de acordo com a configuração da operação.

---

## Configurações

### Tipo de Documento (Criação)

> **Atenção!** Caso a empresa não necessite usar um tipo de documento diferenciado para a DI, poderá utilizar o tipo de documento já existente para emissão de NF-e.

Acesse **Configurador >> Estoque >> Tipo de documento** para configurar o tipo de documento para notas fiscais de importação. É necessário informar a série, espécie e modelo para geração de NF-e. Caso necessite continuar a numeração, informe o campo **"número sequencial"**.

### Operação

No processo de emissão de NF-e de importação é necessário utilizar operações específicas para esta finalidade. Em **Configurador >> Estoque >> Operação**, configure:

#### Aba Dados

Para que a nota fiscal de importação seja emitida corretamente, a operação utilizada deve estar configurada com:

- **Tipo de movimento** – **Entrada/Compra**;
- **Operação** – **Importação**;
- **Atualiza estoque** – marcado (para movimentar os produtos na entrada);
- **Atualiza financeiro** – marcado (gerar títulos a pagar para o fornecedor).

A marcação **Regime Aduaneiro especial drawback** é usada para isentar a nota fiscal de vários impostos, exceto o ICMS que pode ser calculado. Ao marcar essa opção, é possível informar na nota o número do ato concessionário do regime de drawback.

#### Aba Cálculos

Marque os impostos que serão calculados, como o **II (Imposto de Importação)**, e quais valores serão somados à base deste imposto, como despesa acessória, despesa aduaneira e antidumping.

Caso tenha os demais impostos como ICMS, PIS ou COFINS, marque-os normalmente. Dentro da aba **ICMS >> Importação**, informe quais valores serão somados à base de cálculo deste imposto.

Para PIS e COFINS, existem opções para que o usuário escolha se o valor destes tributos serão somados em **Outras Despesas** no XML da nota de importação.

#### Aba Documento

Na aba **Geral**, vincule o tipo de documento criado ou escolhido anteriormente para a emissão das notas fiscais de importação. Em **CFOP**, defina os códigos fiscais. O campo mais importante é o **CFOP do Exterior**, pois ele será usado na geração da NF-e.

### Classificação Fiscal

Para correto cálculo do II (Imposto de Importação) é necessário o preenchimento da alíquota deste imposto no cadastro da **Classificação Fiscal** (**Configurador >> Estoque >> Tributos >> Classificação Fiscal**) na aba **Importação >> II**.

A marcação **Aplica direito de Antidumping** deve ser selecionada se for necessário lançar/calcular essa taxa na nota fiscal de importação.

> Os impostos na área de Declaração de Importação devem ser preenchidos se utilizar o lançamento manual pelo botão **Declaração de importação** na aba **Diversos** do Faturamento, pois ao alterar ou incluir um NCM em uma DI, as alíquotas serão alteradas de acordo com a aba **Importação** da classificação.

### Cálculo de ICMS

Em **Configurador >> Estoque >> Tributos >> Cálculo de ICMS**, configure o cálculo de ICMS vinculado ao produto. A **origem** deve ser **XX (Exterior)** e o **destino** deve ser a UF da empresa que emitirá a NF-e, informando o CFOP do exterior, a situação tributária e alíquota de ICMS.

### Configuração do Tipo de Documento para Nota Fiscal

Em **Configurador >> Faturamento >> Opções >> Operação >> Nota Fiscal**, informe o tipo de documento utilizado para emissão de notas fiscais de importação no quadro **Tipos de documentos para nota fiscal**.

> Caso o tipo de documento não esteja informado neste quadro, não será possível localizar, no aplicativo Faturamento, a operação de importação vinculada a este tipo de documento.

### Operação para Importação com XML

Se for utilizar a importação via XML, preencha o campo **Operação para nota fiscal eletrônica de compra/entrada gerada a partir de uma declaração de importação** em **Configurador >> Faturamento >> Opções >> Operação >> Diversos**.

Com esta configuração realizada, no módulo Faturamento, aba **Diversos**, será habilitado o botão **Declaração de importação**.

### Opções de Comportamento do Sistema

Em **Configurador >> Faturamento >> Opções >> Declaração de importação >> Geral** estão presentes configurações para somar, ratear ou não considerar os dados de **Frete Internacional**, **Seguro Internacional**, **Despesas (THC)** e **Imposto de Importação**. Além disso, é possível decidir entre destacar o II no documento ou ratear este valor.

### Cadastro de Produtos

Para correto cálculo de II é necessário que o produto seja de **origem estrangeira**. Acesse o cadastro do produto e na aba **Impostos** defina a origem do produto com o código **1, 2, 6 ou 7**, conforme definido pela contabilidade da empresa.

### Pessoa

No cadastro do fornecedor, a pessoa precisa estar com o **endereço do exterior (UF XX)**, com todas as informações preenchidas e, no campo **Tipo de Contribuinte do ICMS**, marque **não contribuinte**.

Consulte se a cidade preenchida no endereço está com o campo **código no IBGE** com 7 dígitos com o numeral 9 (**9999999**). Esse é um código genérico que deve ser informado para qualquer endereço do exterior.

---

## Geração da Nota

Existem 3 formas de gerar a nota de declaração de importação:

1. **Forma manual** – criando uma nova nota diretamente no Faturamento;
2. **Forma automática** – realizando a importação do XML para o sistema;
3. **Forma manual** – pela tela de Declaração de Importação.

### Forma Manual (nota avulsa no Faturamento)

No aplicativo Faturamento, crie uma nova nota e informe a operação de lançamento da DI. Dessa forma, o sistema habilitará a aba **Exterior** na qual deverão ser inseridas as informações referentes à importação:

- **Campo Documento de importação** – documento básico do despacho de importação;
- **Campo Data do registro** – corresponde à data de registro da DI;
- **Campo Tipo de declaração** – informe se é uma Declaração de importação ou Declaração simplificada;
- **Campo Via de transporte** – informe a via de transporte utilizada para a importação da mercadoria;
- **Quadro Desembaraço, campo Data** – corresponde à data do desembaraço alfandegário;
- **Quadro Desembaraço, campo UF** – unidade federativa onde ocorreu o desembaraço;
- **Quadro Desembaraço, campo Local** – informe o local onde ocorreu o desembaraço;
- **Quadro Intermediação, campo Tipo de intermédio** – informe qual o tipo de intermédio:
  - **Importação por conta própria** – a empresa importadora adquire mercadorias do exterior em seu nome e com recursos próprios;
  - **Importação por conta e ordem de terceiro** – serviço prestado por uma empresa importadora que promove, em seu nome, o despacho aduaneiro de mercadorias adquiridas por outra empresa (adquirente);
  - **Importação por encomenda** – a empresa adquire mercadorias no exterior com recursos próprios para revendê-las a uma empresa encomendante previamente determinada.

> **Observação:** Quando o tipo de intermédio for 2 ou 3, será obrigatória a informação do **Adquirente**.

- **Quadro Intermediação, campo Adquirente** – deverá ser informado quando o tipo de intermédio é por conta e ordem, ou por encomenda.

> O adquirente da intermediação deverá ser da categoria **fornecedor** no cadastro de pessoa.

Na tela de inclusão de itens, por meio da aba **importação**, o usuário pode informar os dados de importação referentes a cada item:

- **Campo Número da adição** – referente ao número da adição. Cada adição é formada por produtos com NCMs diferentes;
- **Campo Sequencial** – mostra o número sequencial do determinado item no número da adição;
- **Campo Código do fabricante estrangeiro** – fornecedores diferentes em uma mesma nota;
- **Campo Vl. AFRMM** – Adicional ao Frete para Renovação da Marinha Mercante. Sempre que se utilizar a via de transporte marítimo este campo deverá ser informado.

> **Dica:** Na nota lançada de modo avulso no Faturamento, quando marcada a opção **Integra o valor de ICMS à sua própria base de cálculo** (em **Operação >> Aba Cálculos >> ICMS >> Importação**), é utilizada a seguinte fórmula:

```
Base de cálculo do ICMS = Valor do item * [1 / (1 - Alíquota do ICMS)]

Exemplo:
Valor do item: R$ 100,00 e Alíquota do ICMS: 17%
Base de cálculo do ICMS = 100,00 * [1 / (1 - 0,17)]
Base de cálculo do ICMS = 100,00 * [1 / 0,83]
Base de cálculo do ICMS = 100,00 * 1,204819277108434
Base de cálculo do ICMS = 120,48
```

> Esta marcação afeta somente o lançamento da nota avulsa pelo Faturamento, não tem consequências na tela da DI, pois lá o valor de ICMS sempre é integrado.

### Forma Automática (importação via XML)

A importação da DI se dará por XML, na qual será possível vincular os fornecedores/fabricantes e produtos da DI com os cadastros na base de dados.

> **Atenção:** o sistema apenas apresentará os fornecedores que possuírem endereço estrangeiro em seu cadastro, e produtos que tenham a mesma classificação fiscal (NCM) da DI.

Em alguns campos consta **ME**, sigla para **Moeda Estrangeira**, ou seja, os valores representados estão sem a conversão para a moeda nacional.

Para realizar o procedimento:

1. Vá no **Faturamento >> Aba Diversos**, informe a empresa de estoque e clique no botão **Declaração de importação**;
2. Na janela que se abre, clique em **Importar XML**;
3. Marque a opção **Carregar XML de Declaração de Importação** e clique em **Avançar**;
4. Localize o arquivo XML da DI e clique em **Avançar**;

> **Observação importante:** A partir da versão **9.07.13.00** do Bimer, na tela de localização do XML é possível também trocar a operação que será levada para NF-e gerada após a importação da DI.

5. Realize o **vínculo entre o fornecedor** que está no XML com o do sistema Bimer e clique em **Avançar**;
6. Realize o **vínculo entre os produtos** da DI com os produtos do sistema (ambos deverão ter o mesmo fornecedor e NCM) e clique em **Concluir**;
7. Na próxima janela, preencha os campos **Emitente**, **Tipo de intermédio** e **Adquirente**. Após preencher esses campos, poderá alterar os demais campos caso necessário.

Nesta tela há as seguintes opções:

- **Botão Informações** – mostra informações importantes sobre alguns campos;
- **Botão Salvar** – salvará as informações na tela para continuar de onde parou;
- **Botão Recalcular** – após realizar alterações nos valores do documento, recalcula os demais valores. Na DI são apresentados os tributos vindos do XML; se o usuário recalcular, será usada a alíquota de ICMS da classificação fiscal para atualizar o valor deste tributo;
- **Botão Gerar NF-e** – gerará uma nota fiscal de compra com a data atual no Faturamento.

Após clicar para **Gerar NF-e**, o sistema processará os dados e criará a nota fiscal. Ainda na NF-e será necessário preencher a aba **Exterior** com dados do local e data do desembaraço aduaneiro.

> **Observação:** Na versão **11.01.02.00**, ao realizar a importação via XML ou ao criar o documento manualmente, quando vincular um produto que contenha o cálculo de ICMS com CST associado ao código de benefício fiscal vinculado no módulo Produto, na aba **Empresa >> Código do Benefício Fiscal**, o benefício fiscal será automaticamente recuperado e informado na tag `<cBenef>` ao gerar a NF-e.

### Forma Manual – pela tela de Declaração de Importação

Este formato é semelhante ao processo usando importação do XML. No entanto, os dados serão preenchidos manualmente na tela de **Declaração de Importação**, na aba **Diversos** do Faturamento.

Informe um novo código de DI que não esteja no sistema e preencha os dados na tela de inclusão da DI. No quadro **Adições**, inclua todos os produtos da DI de acordo com o respectivo grupo de NCM.

> Na tela de Adições, ao informar um NCM o sistema carrega as informações das alíquotas dos impostos presentes no cadastro da **Classificação Fiscal >> Aba Importação**.

Após realizar a inserção da nota, gere NF-e.

---

## Geração da Nota Atendendo Pedido de Compras

No processo de compras, antes da nota do fornecedor chegar à empresa, é comum que seja feito um pedido de compras. Quando a nota chega, é possível vincular o pedido em aberto com o produto da DI e realizar o seu atendimento gerando a NF-e a partir dele. Este recurso está disponível da versão **8.00.14** em diante.

Para realizar a rotina, no momento de **Importar o XML**, há o botão **Vincular por pedido de compra**. Marque o item que deseja vincular e clique no botão mencionado.

Para que os pedidos apareçam nesta tela é necessário que estejam nas seguintes condições:

- Status **aberto** ou **parcialmente atendido**;
- Produtos com o mesmo **NCM** (de acordo com a tabela de classificação fiscal) da DI;
- **Fornecedor** seja o mesmo que possui o vínculo na DI.

Após realizar os vínculos, clique em **Concluir**.

Voltando à tela de lançamento da DI, clique em **Atender pedido de compra**. Na tela seguinte, clique no checkbox ao lado do pedido de compras que será atendido e selecione como o pedido será atendido caso a quantidade de itens da DI seja menor em relação à quantidade de itens do pedido.

Após selecionar a opção desejada, note que o item é apresentado no quadro **Itens do pedido de compra**, onde há duas colunas:

- **Qt. a atender** – demonstra a quantidade pedida no pedido de compras selecionado;
- **Qt. mov.** – informa a quantidade atendida da DI de acordo com o pedido de compras selecionado.

Para finalizar, clique em **Concluir** e prossiga com a rotina de geração da NF-e.

---

## Produtos com Lote e Série

Na versão **11.01.01.00** do Bimer foi liberado o recurso em que é possível emitir a NF-e de importação sem informação de lote e série dos produtos.

Para trabalhar com essa rotina, acesse **Configurador >> Faturamento >> Opções >> Declaração de importação >> Geral** e marque a opção **"Permitir a inclusão de produtos sem preenchimento de lote/série nos documentos de importação"**.

> **Atenção:** Para trabalhar com essa rotina, é necessário que o cliente trabalhe com o **Liberador de documentos** (ative a utilização do módulo em **Configurador >> Faturamento >> Opções >> Venda >> Liberação de documento**).

---

## Cálculos e Tributos

### SISCOMEX

A cada nova declaração de importação o sistema calcula automaticamente **R$ 115,67** de SISCOMEX, e a cada adição acrescentada à declaração o valor é calculado de acordo com a seguinte tabela (Instrução Normativa 2024 de Abril de 2021):

| Adições | Valor por adição |
|---------|-----------------|
| Até a 2ª adição | R$ 38,56 |
| Da 3ª à 5ª | R$ 30,85 |
| Da 6ª à 10ª | R$ 23,14 |
| Da 11ª à 20ª | R$ 15,42 |
| Da 21ª à 50ª | R$ 7,71 |
| A partir da 51ª | R$ 3,86 |

**Exemplo 1:** Lançando uma declaração apenas com uma adição: R$ 115,67 + R$ 38,56 = **R$ 154,23** de SISCOMEX.

**Exemplo 2:** Lançando uma declaração com três adições: R$ 115,67 + R$ 77,12 (duas adições × R$ 38,56) + R$ 30,85 = **R$ 223,64** de SISCOMEX.

> Na importação de XML o sistema calcula automaticamente os valores de SISCOMEX. Os valores e faixas do Siscomex podem ser modificados em **Configurador Bimer >> Faturamento >> Opções >> Declaração de Importação >> Siscomex** (disponível a partir da versão **9.07.09.00**).

### Fórmulas dos Tributos

#### ICMS

```
1 - Base de ICMS = (VMCV R$ + II + IPI + PIS + COFINS + SISCOMEX + Antidumping
    + AFRMM do Item + Seguro R$ + Despesas R$ + Frete R$) / (1 - (Alíquota de ICMS
    + Alíquota de FCP / 100))

2 - Valor de ICMS = Base de ICMS * Alíquota de ICMS

Obs.: Para chegar no AFRMM do item use a fórmula:
AFRMM do item = Valor de AFRMM da DI * (Peso Líquido do item / Peso Líquido total)
```

#### FCP

```
1 - Base de FCP = (VMCV R$ + II + IPI + PIS + COFINS + SISCOMEX + Antidumping
    + AFRMM do Item + Seguro R$ + Despesas R$ + Frete R$) / (1 - (Alíquota de ICMS
    + Alíquota de FCP / 100))

2 - Valor de FCP = Base de ICMS * Alíquota de FCP
```

#### IPI

```
1 - Base de IPI = VMCV R$ + II + Seguro R$ + Despesas R$ + Frete R$
2 - Valor de IPI = Base de IPI * Alíquota de IPI
```

#### II, PIS e COFINS

```
1 - Base = VMCV R$ + Seguro R$ + Despesas R$ + Frete R$
2 - Valor do Tributo = Base * Alíquota do Tributo
```

> As fórmulas acima são usadas na importação do XML e no lançamento manual pela tela de Declaração de Importação e sempre se comportam desse modo, independentemente de outras configurações do sistema.

### Lançamento dos Tributos na DI

Dependendo do local no qual o usuário faz o lançamento da DI, o sistema se comporta de modo diferente:

**Nota avulsa pelo Faturamento:**
- Os dados são localizados como se fosse uma nota normal de vendas, mantendo o comportamento padrão com as hierarquias para o cálculo;
- Da **Classificação Fiscal** será obtido o percentual de Imposto de Importação;
- Os outros tributos como ICMS, PIS e COFINS o sistema não pega da aba Importação da classificação fiscal, mas mantém o comportamento comum.

**Lançamento pela Tela de Declaração de Importação:**
- Os dados são localizados a partir das informações da aba **Importação** da classificação fiscal da adição;
- O percentual de ICMS e FCP informados na tabela de cálculo de ICMS não são utilizados. O percentual de IPI não é obtido da operação. As alíquotas de ICMS, FCP e IPI têm que ser informadas obrigatoriamente na classificação fiscal do produto;
- Caso não tenha PIS e COFINS preenchidos na classificação, o sistema pega o percentual da operação;
- Se precisar lançar o valor de ICMS ST na tela da DI, o único modo é informar a base e valor de modo manual.

### Conferência dos Tributos

Após lançar os tributos na DI, é possível conferir de modo individual ou de modo otimizado utilizando o módulo **BI Faturamento**.

No BI, use o **Modo de Visualização de Documento**, adicionando a coluna **Vl. II** (valor do imposto de importação) em **Campos Visíveis** e o **Tipo de movimentação da operação** como **Compra**.

> A coluna **Vl. II** foi disponibilizada na versão **10.00.01.00**.

---

## Termos Usados na Rotina de Declaração de Importação

**SISCOMEX:** Sistema Integrado de Comércio Exterior. É um instrumento que integra as atividades de registro, acompanhamento e controle das operações de comércio exterior, por meio de um fluxo único, computadorizado, de informações.

**Regime de Drawback:** Suspende ou elimina os tributos incidentes sobre insumos importados para utilização em produto exportado. Funciona como um incentivo às exportações, pois reduz os custos de produção de produtos exportáveis.

**Antidumping:** O Dumping ocorre quando há venda de produto de indústria externa com preços menores que o mercado interno do próprio país. As medidas antidumping são de proteção comercial, tomadas quando há importação a preço de dumping causando danos às empresas nacionais.

**Alfândega:** Repartição governamental responsável pelo controle do movimento de entradas (importações) e saídas (exportações) de mercadorias para o exterior ou dele provenientes, responsável, inclusive, pela cobrança dos tributos pertinentes.

**Despesa aduaneira:** Paga à alfândega para cobrir os custos envolvidos na liberação (desembaraço) da mercadoria.

**AFRMM:** Adicional ao Frete para Renovação da Marinha Mercante. É uma contribuição para o apoio ao desenvolvimento da marinha mercante e da indústria de construção e reparação naval brasileiras.

**Desembaraço Aduaneiro:** Processo de liberação da mercadoria para exportação ou de importação, serve para verificar se as mercadorias envolvidas na operação estão regularizadas.

**Local de desembaraço:** Local onde deve-se dirigir para realizar o processo de desembaraço aduaneiro.

**VMLE:** Valor da Mercadoria no Local de Embarque. É o valor da mercadoria ajustado ao local de embarque, correspondente ao valor FOB.

**VMLD:** Valor da Mercadoria no Local de Descarga. É o valor do VMLE acrescido do frete e do seguro. Também conhecido como valor CIF.

**ME:** Valor em moeda estrangeira.

**Taxa de Câmbio:** É uma relação entre moedas de dois países que resulta no preço de uma delas medido em relação à outra. Na importação do XML ela é calculada pelas tags `condicaoVendaValorReais \ condicaoVendaValorMoeda`.

**VUCV:** Valor Unitário na Condição de Venda.

**VCV:** Valor Condição de Venda (totalizando as quantidades de cada valor unitário). Exemplo: comprando 5 camisas importadas, cada uma no valor de R$ 100,00, o VUCV será de R$ 100,00 (unitário), mas o VCV (valor total) será R$ 500,00.
