# Controle de Garantia — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [O que vou aprender?](#o-que-vou-aprender)
- [Fluxo da Rotina](#fluxo-da-rotina)
- [Configurações](#configurações)
  - [Ramo de Atividade](#ramo-de-atividade)
  - [Cadastro de Produto](#cadastro-de-produto)
  - [Tipo de Movimento de Cobrança](#tipo-de-movimento-de-cobrança)
  - [Tabela de Garantia](#tabela-de-garantia)
  - [Configurador](#configurador)
  - [Configurações Recomendadas](#configurações-recomendadas)
- [Rotina](#rotina)
  - [CRM Vendas Follow up](#crm-vendas-follow-up)
  - [Pedido de Vendas](#pedido-de-vendas)
  - [Ordem de Serviço](#ordem-de-serviço)
  - [Manutenção de Contratos](#manutenção-de-contratos)
  - [Informações Extras](#informações-extras)

---

## O que vou aprender?

O Bimer ajuda as empresas que precisam controlar o **tempo de garantia** de cada produto, para verificar se o serviço de assistência prestado será cobrado ou não (de acordo com o tempo da garantia), e analisar quantos serviços foram gerados para determinado cliente e equipamento.

> **Você sabia?!** A rotina foi criada para o cliente da Sweda, que produz impressoras, leitores de códigos de barras e outros equipamentos. No entanto, qualquer cliente do Bimer pode trabalhar com esta rotina.

---

## Fluxo da Rotina

> *[Imagem: fluxograma da rotina de Controle de Garantia, mostrando os módulos: CRM Vendas Follow-up → Pedido de Vendas → Faturamento → Ordem de Serviço → Manutenção de Contratos]*

---

## Configurações

### Ramo de Atividade

Sua base precisa estar configurada com o **Ramo de Serviços** para a rotina funcionar.

Caminho: **Configurador / Geral / Opções / Geral / Ramo de Atividade**

> **Dúvida!** E como faço para mudar pois o campo está travado?

Neste caso, o único modo é ajustar a tabela `Configuracao` por meio do banco de dados. Essa configuração só pode ser ajustada no cliente com autorização da Supervisão / Gerência.

---

### Cadastro de Produto

No catálogo de produtos é necessário ter as **séries** informadas nos respectivos itens. Esta série pode ser adicionada manualmente no módulo **Cadastro de Produtos** ou no lançamento da **Nota Fiscal de entrada**, cadastrando uma nova série.

> **Atenção!** A rotina só funciona para produtos que **controlam série**.

---

### Tipo de Movimento de Cobrança

Caminho: **Configurador / Financeiro / Tipo de Movimento de Cobrança**

Cadastre dois tipos com as seguintes configurações:

**1. Venda do Produto:**
- Marque que o Tipo de negociação **Gera nota fiscal**.

> *[Imagem: cadastro do Tipo de Movimento de Cobrança "Venda do Produto" com a opção "Gera nota fiscal" marcada]*

**2. Contrato de Cobrança:**
- Marque que o Tipo de negociação **Gera Cobrança fixa**.

> *[Imagem: cadastro do Tipo de Movimento de Cobrança "Contrato de Cobrança" com a opção "Gera Cobrança fixa" marcada]*

---

### Tabela de Garantia

Caminho: **Configurador / Geral / Outros Cadastros / Garantias**

Cadastre os tipos de garantias utilizados, focando especialmente no **Número de meses** que define quanto tempo durará a garantia.

> *[Imagem: tela de cadastro de Garantias com o campo Número de meses preenchido]*

Nesta rotina, você pode ter diversos tipos de garantias, de acordo com o produto vendido ou o plano adquirido pelo cliente.

---

### Configurador

Caminho: **Configurador / Geral / Opções / Diversos**

Marque **"Trabalhar com Garantia"** e selecione uma **tabela padrão** (esta será carregada no momento do lançamento, porém o usuário pode alterar conforme a necessidade).

> *[Imagem: tela do Configurador com a opção "Trabalhar com Garantia" marcada e a tabela padrão selecionada]*

Ainda no Configurador, acesse **Opções / Geral** e preencha um produto do tipo **serviço** ou **serviço comercializado** no campo **"Produto a ser utilizado como padrão"**.

---

### Configurações Recomendadas

Abaixo estão ajustes na base que **não são obrigatórios**, mas que foram pensados para facilitar a rotina e criar o cenário ideal. Todas as configurações são realizadas no módulo **Configurador**:

**1. Geral / Opções / Pessoa / Pessoa – Produto:**

Marque **"Permitir produtos iguais para o mesmo cliente, desde que os produtos estejam vinculados a contratos diferentes"** e defina quais empresas podem fazer isso.

- Com a opção marcada, ao encerrar um contato de venda no CRM, será criado um novo contrato vinculado ao produto e série, sem verificar se já existe o produto amarrado ao cliente no módulo Pessoa / Aba Produtos. A cada contrato diferente será criada uma nova linha no vínculo do produto à pessoa.

**2. CRM / Opções / Contato (vendas follow-up) / Pedido de venda:**

Marque:
- **"Gerar pedido de venda ao se encerrar um contato de venda"** — para gerar o pedido de vendas na finalização do contato.
- **"Gerar pedido com status: Aberto"** — importante para que o usuário possa incluir as séries dos equipamentos vendidos (no contato de venda não é possível inserir as séries).

**3. Financeiro / Opções / Manutenção de contratos / Cadastro de contratos:**

Selecione **"Criar contrato com status de liberado desmarcado"**.

- Geralmente o contrato desta rotina não gera cobrança, pois a garantia já cobre o valor cobrado ao cliente. Por isso é recomendável que seja gerado pendente de liberação.

**4. Financeiro / Opções / Manutenção de contratos / Geração de cobrança:**

Marque:
- **"Utilizar produto padrão ao gerar nota fiscal ou título a receber"**
- **"Produto padrão configurado em Configurador / Opções / Geral / campo Produto a ser utilizado como padrão"**

Esta configuração faz com que ao gerar nota ou título a partir do contrato (rotina de geração da cobrança) seja utilizado o produto informado no tópico Configurador.

Selecione também: **"Não utilizar descrição para produto na cobrança fixa"**.

**5. Faturamento / Opções / Pedido de Venda / Geral:**

Desmarque a opção **"Preencher automaticamente as informações do lote / série caso o produto informado controle lote / série"**.

- Isto permitirá que o usuário do módulo Pedido de Vendas selecione a série do produto de modo manual.

---

## Rotina

### CRM Vendas Follow up

1. Acesse o módulo **CRM** na aba **Vendas (follow up)**, escolha um cliente e gere um novo **Contato de Vendas**.

2. Na aba **Complemento**, é apresentado o controle de garantia padrão (pode ser alterado de acordo com a situação da negociação).

> *[Imagem: aba Complemento do Contato de Vendas com o controle de garantia padrão selecionado]*

3. Adicione o produto **2 vezes**, com os tipos de movimentos de cobrança distintos:
   - **Venda do Produto:** insira o valor da venda e quantidade para gerar a NF-e no Faturamento.
   - **Contrato de cobrança:** na aba **Informações para cobrança**, insira a **Data de vencimento** do contrato de cobrança.

> *[Imagem: aba Produtos do Contato de Vendas com os dois tipos de movimentos de cobrança preenchidos]*

4. Grave o contato de venda preenchendo os outros campos, como a aba **Negociação** para gerar o pedido de venda com o prazo informado.

5. Retorne à aba **Vendas follow-up**, selecione o contato de vendas, clique em **Parecer** e faça o fechamento da venda de acordo com o workflow vinculado ao tipo de atendimento.

> *[Imagem: tela de fechamento do contato de vendas com o workflow]*

6. Preencha os dados para geração do **Contrato de Cobrança** e do **Pedido de Vendas**.

---

### Pedido de Vendas

1. Localize o **Pedido gerado pelo Contato de venda** (use a linha do tempo para confirmar se o pedido está correto).
2. Clique em **Edição rápida / Série** para adicionar de modo rápido a série do produto vendido.

> **Dicas:**
> 1. A série é única por unidade. Se uma venda possuir 10 quantidades de impressoras, é necessário vincular 10 séries, uma para cada quantidade.
> 2. A série pode ser informada abrindo o pedido de vendas, em **Itens do Pedido**, na aba **Série**.

3. Gere a nota fiscal a partir do Pedido de Vendas e no módulo **Faturamento** faça o envio e autorização da NF-e.

> *[Imagem: nota fiscal gerada no Faturamento com a série do produto vinculada]*

---

### Ordem de Serviço

A garantia é registrada no módulo **FatOs**. A garantia é basicamente gerar uma nota de serviço (e em alguns casos uma NF-e) relatando a assistência prestada ao cliente. Se a garantia ainda estiver ativa, o cliente não paga pelo serviço realizado.

1. Abra o módulo **FatOs** e gere uma **Nova ordem de serviço**.
2. Quando a base está configurada para a rotina de garantia, o sistema abre a tela para seleção da **série do produto** que foi vendido.

> *[Imagem: tela de seleção da série do produto na abertura da Ordem de Serviço]*

3. Se não houver equipamento cadastrado para o produto e série, realize o cadastro para prosseguir. Se a empresa de vendas for o fabricante, é necessário cadastrá-la como fornecedora.

> *[Imagem: tela de cadastro do equipamento com o Identificador (série) vinculado ao cliente da venda]*

4. Na tela de inclusão da ordem de serviço, insira um item de serviço para gerar a NFS-e. Isso pode ser feito na aba **Produtos / Produtos consumidos** ou na própria aba **Dados do serviço**.

5. Na aba **Informações adicionais**, insira operações que **não atualizem financeiro**, para que as notas sejam geradas sem cobrar nada ao cliente (já que "está na garantia"). Se informar uma operação que atualize financeiro, serão gerados títulos no Contas a receber.

> *[Imagem: aba Informações adicionais da OS com operação sem atualização financeira]*

6. Complete os outros campos. Dados como o cliente da OS podem ser alterados (às vezes a Matriz é o cliente que comprou o equipamento, porém o transferiu para uma filial, e esta aciona a garantia).

7. Mande **Faturar** a Ordem de serviço. Após isso faça a geração das notas e o envio e autorização na prefeitura.

> **Dica!** Se o usuário desejar um cenário ou relatório que demonstre os serviços prestados para determinados equipamentos e clientes (medindo, por exemplo, quantas vezes a garantia foi acionada), basta clicar em **Alternar entre filtro e resultado** no módulo FatOs, selecionar os campos desejados e **Filtrar**.

---

### Manutenção de Contratos

Ao filtrar o cliente no módulo **Manutenção de Contratos**, localize o contrato fixo gerado.

> *[Imagem: tela de Manutenção de Contratos com o contrato de garantia do cliente]*

O contrato registra o **período da garantia** de acordo com a tabela escolhida no módulo CRM. Note a **série vinculada no produto**, para confirmar que o contrato foi gerado para determinada série do item.

Ao acessar o módulo **Pessoa / Aba Produtos**, vemos também a informação dos contratos vinculados ao cliente, com cada produto, série, vigência do contrato e dados do pedido de venda.

> **Nota:** Normalmente o contrato não gera cobrança, por isso marcamos em **Financeiro / Opções / Manutenção de contratos / Cadastro de contratos** a opção **"Criar contrato com status de liberado desmarcado"**. Porém, se for necessário gerar um título ou nota para cobrar o valor da garantia, isso pode ser feito após **Liberar** o contrato.

---

### Informações Extras

- **Série sem contrato vinculado:** No momento da geração da ordem de serviço, se a série do produto selecionado não possuir um contrato vinculado, o sistema exibe uma mensagem alertando o usuário que deve utilizar uma operação que atualize financeiro, uma vez que não há uma garantia vinculada ao produto. O sistema permite continuar, porém será gerada uma OS avulsa sem vínculo com a rotina de garantia.

- **Garantia vencida:** O mesmo comportamento ocorre quando é selecionado um produto com o contrato de garantia vencido, alertando que a empresa deve cobrar do usuário uma vez que a garantia não cobre mais o valor do serviço gerado.

- **Contratos fixos:** Com a rotina de garantia configurada no Bimer, ao criar ou editar contratos fixos pelo módulo Manutenção de contratos, os campos **Data de vigência Inicial** e **Final** serão obrigatórios. O campo **Garantia** fica habilitado para edição. Ao incluir um produto é possível adicionar também sua série de modo manual.
  - A rotina normalmente é criada pelo CRM Vendas Follow-up, porém o usuário pode criar os contratos diretamente pelo Manutenção de Contratos.

> **Nota:** Se você ficou na dúvida sobre como configurar o módulo Manutenção de Contratos, Ordem de serviço e CRM Vendas Follow-up, nesta mesma página de apostilas, você tem acesso aos materiais de cada um desses módulos citados para conseguir configurar e trabalhar com a rotina de garantia de modo completo.
