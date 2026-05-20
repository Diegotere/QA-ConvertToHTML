# Faturamento por Terceiros — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Requisitos Necessários](#requisitos-necessários)
- [Configurações](#configurações)
- [Rotina](#rotina)
  - [CRM](#crm)
  - [Requisição](#requisição)
  - [Pedido de Compras](#pedido-de-compras)
  - [Pedido Encerrado](#pedido-encerrado)
  - [Reabrir Pedido de Compra Encerrado](#reabrir-pedido-de-compra-encerrado)

---

## Introdução

A rotina de **faturamento por terceiros** é utilizada quando a empresa realiza o contato de venda com o cliente, porém, quando a venda é fechada, o **fornecedor do produto vendido** é quem emitirá a nota fiscal de venda e gerará um repasse da comissão para a empresa, pois foi ela que manteve contato com o cliente para realizar a venda.

**Exemplo:**

A empresa X fabrica e vende móveis para escritórios e possui um representante responsável por fazer demonstração do produto para os clientes e vender. Porém, a emissão da NF-e será feita pela empresa X, ficando a representação somente responsável pela parte inicial de interação com o cliente para vender o produto. Realizada a venda e emissão da nota, a representação receberá a sua comissão proporcional às vendas efetivadas.

---

## Requisitos Necessários

- A base deve estar configurada para fazer vendas pelo **CRM**, aba **Vendas follow-up**;
- É necessário que seja utilizado um **tipo de movimento de cobrança** configurado para gerar nota fiscal (**Configurador / Financeiro / Tipo de movimento de cobrança**).

---

## Configurações

### Configurador / CRM / Opções / Aba Contato (vendas follow-up) / Geral

> *[Imagem: tela de configurações gerais do CRM para vendas follow-up]*

Caso vá trabalhar com um serviço vinculado a um contrato de manutenção, informe o campo **"Situação padrão para produtos que foram negociados com contrato gerados, mas sem envio de cobrança ao cliente"**. Esta configuração serve para que, caso no fechamento de contato que gera contrato não seja informada a situação do produto, o item seja alimentado com esta informação, desde que a situação do produto esteja configurada para **"Desativar item do contrato"**.

---

### Configurador / CRM / Opções / Aba Contato (vendas follow-up) / Fechamento da venda / Geral

> *[Imagem: tela de configuração do fechamento da venda]*

Nesta tela, informe os **motivos de encerramento da venda**.

Os motivos de encerramento são cadastrados em **Configurador / CRM / Motivos de encerramento**.

---

### Configurador / CRM / Opções / Aba Contato (vendas follow-up) / Fechamento da venda / Requisição

Marque a opção **"Gerar requisição de material, ao criar pedido de venda, para produtos sem quantidade em estoque"** e informe os **setores requisitantes e requisitados**.

> *[Imagem: configuração de geração de requisição de material]*

---

### Configurador / CRM / Opções / Aba Contato (vendas follow-up) / Configurações Gerais / Geral

Informe o **centro de responsabilidade** para encerramento.

> *[Imagem: configuração do centro de responsabilidade]*

---

### Configurador / Faturamento / Opções / Pedido de Venda / Geral

Marque para que o pedido possa ser **faturado por terceiros**.

> *[Imagem: opção Faturado por terceiros marcada nas configurações do Pedido de Venda]*

---

### Cadastro de Característica de Produto

Após realizar as configurações mencionadas acima, deverá ser criada uma **característica de produto** como **"Produto sob encomenda"**. Este cadastro deverá ser realizado em **Configurador / Estoque / Produto / Característica**.

---

### Configurador / Estoque / Opções / Compras / Faturamento por terceiros

Após cadastrar a característica, acesse esta tela e preencha as informações solicitadas:

> *[Imagem: tela de configuração de Faturamento por terceiros no Configurador de Estoque]*

- **Campo "Natureza de lançamento para título a receber referente ao valor da comissão"** — defina uma natureza de lançamento que identifique o valor da comissão gerada pela venda.

- **Campo "Operação a ser utilizada no documento que será criado ao encerrar o pedido de compra"** — no atendimento do pedido de compra faturado por terceiros, é gerada uma nota de serviço e seus títulos a receber, referente ao serviço prestado pela representação. Esta nota utilizará a operação informada neste campo.

- **Campo "Produto a ser utilizado no documento que será criado ao encerrar o pedido de compra"** — no atendimento do pedido de compra faturado por terceiros, é gerada uma nota de serviço e seus títulos a receber, referente ao serviço prestado pela representação. Esta nota deverá ter como produto o serviço prestado pela representação informado neste campo. Além disso, o serviço **não poderá estar cadastrado como "serviço comercializado"**.

---

### FatPdvCfg / Ferramentas / Opções / Pré-pedido/pedido de venda / Características

Esta configuração **não é obrigatória** — depende da rotina do cliente. Quando a representação não tem o produto no estoque local trabalhado, sendo necessário encomendar os produtos após o fechamento de contato de venda, informe a característica de produtos sob encomenda no quadro **"Produtos sob encomenda"** e vincule esta característica aos produtos.

> *[Imagem: configuração de características de produtos sob encomenda]*

---

## Rotina

### CRM

1. Crie um novo contato de venda clicando em **"Novo"**;
2. Na aba **Complemento**, no quadro **"Faturado por terceiros"**, marque **"Sim"** para informar ao sistema que este contato de venda utilizará a rotina de faturamento por terceiros;
3. Após marcar esta opção, será habilitado o quadro **"A entrega será:"** — escolha se o produto será entregue no **endereço do cliente** ou no **endereço da empresa** que realizou o contato de venda.

> *[Imagem: aba Complemento do contato de venda com quadro Faturado por terceiros marcado como Sim]*

4. Na aba **"Produtos"**, informe um produto que possua a característica de **"Sob encomenda"** configurada anteriormente.

Dentro do cadastro do produto, no quadro **"Dados para faturamento de terceiros"**, informe:

- **Campo "Fornecedor"** — informe o fornecedor, ou seja, a empresa que emitirá a nota para o cliente para faturar o pedido;
- **Campo "Vl. resultado da venda"** — informe a diferença entre o valor do fornecedor e o valor da venda para o produto selecionado;
- **Campo "Vl. total resultado venda"** — campo não editável; preenchido automaticamente com a diferença entre o valor do fornecedor e o valor da venda total do pedido.

**Exemplo:**

> Um determinado produto custa R$ 80,00 no fornecedor. O vendedor vende este mesmo produto no valor de R$ 100,00. No momento de fechamento da venda, é gerado um pedido de compra deste produto para a empresa do fornecedor e um pedido de venda do item para o cliente. O valor unitário da venda é R$ 100,00 e o valor resultado da venda é R$ 20,00.

Ao encerrar este contato de venda, será criado um **pedido de venda** e uma **requisição**. É possível visualizar a informação pela linha do tempo do pedido ou da requisição.

A criação da requisição ocorre para que a empresa controle a venda, pois ao trabalhar com o conceito de faturamento por terceiros, quem emitirá a nota fiscal para o cliente será o próprio fornecedor. No entanto, a empresa precisa controlar este envio, pois ela recebe um percentual sobre a venda.

> **Observação:** Tanto o pedido de venda quanto a requisição **não são criados no momento da abertura do contato**, e sim, **no momento em que se encerra o contato de venda**.

---

### Requisição

No módulo **Requisição de Materiais**, selecione a opção de geração de cotação/pedido de compra e localize a requisição gerada no encerramento da venda.

> *[Imagem: módulo Requisição de Materiais com opção de geração de pedido de compra]*

Caso escolha gerar um pedido de compra, na tela seguinte terá o campo **"Fat. Terceiro?"** que informa se o pedido será ou não faturado por terceiro. Após confirmar que está como **"Fat. Terceiro"**, clique em **Concluir**. Em seguida, o sistema apresentará uma tela com o log do pedido que foi gerado.

> *[Imagem: tela de geração de pedido de compra com campo Fat. Terceiro confirmado]*

---

### Pedido de Compras

O status do pedido será alterado de acordo com as informações passadas pelo fornecedor. **Não pode ser gerada uma nota fiscal de entrada**, pois a nota fiscal emitida pelo fornecedor terá como destinatário o cliente, e não a empresa.

Para este recurso foram criados os status **"Confirmado"** e **"Encerrado"**.

#### Pedido Confirmado

Quando o fornecedor confirmar o envio da nota fiscal para o cliente, o pedido deverá ser editado, alterando o status para **Confirmado**.

- **Box "Faturado por terceiros"** — campo não editável; apenas informa se o pedido trabalha ou não com a rotina de faturamento de terceiros.
- **Botão "Confirmar"** — serve para confirmar que o fornecedor enviou a nota fiscal para o cliente.

Ao clicar no botão **"Confirmar"**, o sistema abrirá uma tela de confirmação com os campos:

- **Nr. da nota** — número da nota fiscal do fornecedor que foi enviada para o cliente;
- **Valor da comissão** — calculado automaticamente pela diferença do valor da venda e o valor total do pedido;
- **Data** — data de emissão da nota fiscal emitida do fornecedor para o cliente.

Após inserir os dados, clique em **"Ok"** e grave as alterações feitas no pedido.

> **Observação:** Para a correta geração do pedido de compra, é necessário que o item do pedido esteja com o **custo reposição informado**! Caso contrário, o sistema gerará o pedido de compras com o valor zerado e, assim, o pedido não poderá ser confirmado.

---

### Pedido Encerrado

Depois de ter confirmado o envio do produto e nota fiscal do fornecedor para o cliente, a empresa deverá confirmar com o cliente se o pedido foi recebido por ele. Quando o cliente confirmar o recebimento, o status do pedido deverá ser alterado para **"Encerrado"**.

Para editar o status, basta editar o pedido e alterar o status para **"Encerrado"**.

Ao encerrar o pedido de compra e rodar o **liberador de estoque**:

- O pedido de venda criado no encerramento do contato de vendas muda para o status **"T" (Totalmente atendido)**;
- No **Faturamento**, é criada uma nota fiscal em nome do fornecedor e um título no **Contas a Receber** com o valor da comissão que será enviada para ele efetuar o pagamento;
- A requisição ficará com o status de **"Atendida"**.

---

### Reabrir Pedido de Compra Encerrado

Após ter encerrado um pedido de compra, caso queira reabri-lo por algum motivo (por exemplo, ter encerrado por engano ou informado os dados de confirmação incorretos):

1. Edite o pedido de compras novamente;
2. Clique no botão **"Reabrir"**.

Dessa forma, o pedido voltará para o status **"Confirmado"**.
