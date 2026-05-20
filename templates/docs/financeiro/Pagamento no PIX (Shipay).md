# Pagamento via PIX (Shipay) — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Alterdata PIX (Modelo Antigo)](#alterdata-pix-modelo-antigo)
  - [Configurações](#configurações)
  - [Cadastro do Serviço PIX na Alterdata e no Banco](#cadastro-do-serviço-pix-na-alterdata-e-no-banco)
  - [Venda no Spice](#venda-no-spice)
- [Alterdata PIX (Shipay)](#alterdata-pix-shipay)

---

## Introdução

O PIX é uma forma de pagamento instantânea que não cobra taxas para pessoas físicas por transferência, mesmo entre bancos diferentes. Para pessoas jurídicas, quando há taxa, ela é bem inferior às taxas de cartão de débito, por exemplo.

Os usuários do **Spice/PDV Bimer** podem aceitar essa forma de pagamento em seu estabelecimento.

Existem duas formas de trabalhar com recebimento via PIX no Bimer:

- **Modelo antigo:** O funcionamento dependia de cada banco, limitando o recurso a clientes com conta nos bancos homologados. Este modelo foi descontinuado.
- **Modelo atual (Shipay):** A Alterdata fechou parceria com a empresa **Shipay** para intermediar os recebimentos. Atualmente, somente o **Alterdata PIX integrado pela Shipay** é comercializado.

> **Nota:** Como há clientes trabalhando no modelo antigo, este manual apresenta as configurações para ambos os modelos.

O recurso PIX no Spice é um produto vendido separadamente. Quando a venda é concluída, o produto **7458 – Alterdata PIX** é incluído no cadastro do cliente, e o CRM Vendas abre automaticamente um atendimento para que o serviço seja habilitado.

- Caso o cliente queira configurar o recurso e o produto não conste em seu cadastro, encaminhe-o para o setor comercial: **0800 704 1418**.
- Caso o produto já conste no cadastro, mas o serviço ainda não esteja habilitado, verifique com a supervisão sobre o andamento da habilitação.

---

## Alterdata PIX (Modelo Antigo)

> **Atenção:** Este modelo foi descontinuado e é utilizado somente em alguns clientes.

**Pré-requisitos:**

- Bimer versão **9.07.03.00** ou superior
- Spice versão **6.1337** ou superior
- Chave PIX da empresa habilitada no banco
- Bancos homologados: **Itaú**, **Banco do Brasil** e **Mercado Pago**
- Produto **Alterdata PIX** adquirido junto ao setor comercial

### Configurações

**1 — Configurar a chave PIX na conta bancária**

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Contas bancárias**

Localize e edite a conta desejada. Acesse a aba **Chave PIX** e clique no sinal de adição **(+)** para incluir uma chave.

Clique sobre o campo **Tipo Chave** e selecione o tipo:

- CNPJ/CPF
- Telefone
- E-mail
- Aleatória

Na coluna **Chave**, informe a chave habilitada no banco de acordo com o tipo selecionado.

**2 — Cadastrar a forma de pagamento para PIX**

Caminho: **Configurador >> Financeiro >> Forma de pagamento**

Clique em **Novo** para inserir uma forma de pagamento (ou em **Editar** se já existir). Informe a descrição, como por exemplo *"PIX Conta XXXX"*. No campo **Tipo**, selecione **"PIX pagamento instantâneo"** — o sistema habilitará a aba **PIX**. Nessa aba, informe o código da conta bancária e selecione a chave PIX a ser vinculada. Grave o cadastro.

> **Atenção:** Não é obrigatório informar a chave PIX no cadastro da forma de pagamento. Porém, se ela não for informada, a forma de pagamento será tratada como uma forma normal, sem que o QR Code seja apresentado ao cliente.

> **Dica:** Para cada forma de pagamento, só é possível informar uma chave PIX. Caso a empresa tenha mais de uma chave, crie uma forma de pagamento para cada uma. Exemplo: *PIX CNPJ Conta 01*, *PIX Telefone Conta 01*, etc.

### Cadastro do Serviço PIX na Alterdata e no Banco

Antes de a empresa começar a utilizar o PIX no PDV, é necessário orientá-la a entrar em contato com o gerente do banco, informar que deseja trabalhar com PIX no sistema Bimer e solicitar as informações necessárias para o serviço ser cadastrado na Alterdata.

As informações devem ser enviadas **exclusivamente por formulário junto ao suporte**. As informações variam de acordo com o banco:

**Itaú:**
- Código no CRM
- CNPJ
- Chave PIX
- Agência e Conta
- ClientId e Token (informados pelo banco por e-mail ao cliente após contato)

**Banco do Brasil:**
- Código no CRM
- CNPJ
- Chave PIX
- Auth_Basic e Developer_Application_Key (disponíveis no painel do BB do cliente)

**Mercado Pago:**
- Código no CRM
- CNPJ
- Chave PIX
- Credenciais (access_token) — disponíveis no painel do Mercado Pago do cliente

**PagSeguro:**
- Código no CRM
- CNPJ
- Chave PIX
- Credenciais (app_client_id e app_client_secret)

> **Atenção:** Algumas dessas informações só ficam válidas por 7 dias. É necessário entrar em contato com o desenvolvimento o mais rápido possível para finalizar a configuração.

Após o desenvolvimento finalizar a configuração, ainda é necessário:

1. Realizar uma exportação de dados no **Integrador Bimer x PDV Alterdata**
2. Realizar uma exportação de dados no **Concentrador**
3. Realizar uma importação no **Integrador Spice**
4. Fechar e reabrir o Spice para que a opção de PIX apareça como forma de pagamento

> **Atenção:** Se esta etapa não for realizada, ao finalizar a venda com forma de pagamento PIX, o QR Code da chave PIX não será apresentado.

### Venda no Spice

Realize a venda normalmente. No momento de informar os dados de pagamento, o PIX ficará disponível na opção **F5** (compartilhada com Ticket). Ao clicar em F5, é possível escolher entre Ticket e PIX.

Selecionando o PIX, o sistema gerará um **QR Code** que poderá ser enviado por WhatsApp ou no formato **"Copia e cola"** para envio por e-mail.

Com a opção de envio por WhatsApp, o sistema abre uma janela para informar o número do consumidor e direciona à página web do WhatsApp.

> **Atenção:**
> - Se a transação já tiver ocorrido, não é possível remover o recebimento pela lixeira — a transação já foi processada.
> - Caso o consumidor ainda não tenha efetuado o pagamento, o caixa pode clicar em **"ESC – fechar"**. Ao confirmar, o sistema verifica na central de recebimentos dos bancos se a transação foi realizada.

---

## Alterdata PIX (Shipay)

Este é o modelo atual da Alterdata para recebimento via PIX em seus produtos. Disponível a partir da versão **10.00.05.00**.

O **Shipay** é responsável por gerar o QR Code ao final da venda e identificar se o pagamento foi realizado para a emissão da nota fiscal.

**Passo 1 — Contratar o serviço Shipay**

O cliente deve contratar o serviço diretamente com a Shipay.

**Passo 2 — Configurar a integração no Bimer**

Caminho: **Configurador >> Faturamento >> Integrações >> Shipay**

Preencha os dados necessários da integração.

**Passo 3 — Cadastrar a forma de pagamento Shipay**

Caminho: **Configurador >> Financeiro >> Formas de pagamento**

Cadastre a forma de pagamento com o tipo **"Shipay"** — tipo exclusivo criado para esta integração. Ao adicionar o tipo Shipay, o sistema habilita a aba **Convênio** para inserção dos dados.

**Passo 4 — Exportar e carregar dados no PDV**

Realize a exportação pelo integrador, depois pelo concentrador e, por último, a carga de dados no PDV.

**Realizando a venda:**

Após a configuração, basta realizar a venda normalmente. Ao finalizar, o Shipay ficará disponível no atalho **F5**, junto ao PIX. Selecione a opção **Shipay** e o QR Code será apresentado na tela. Quando o sistema reconhecer o recebimento do PIX, a venda é concluída e a **NFC-e** é emitida automaticamente.
