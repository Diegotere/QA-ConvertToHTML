# PDV Alterdata — Pagamento via PIX — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Produto PIX e Integrações](#produto-pix-e-integrações)
- [Integração Shipay](#integração-shipay)
- [Integração Alterdata](#integração-alterdata)
- [Venda por DAV](#venda-por-dav)

---

## Introdução

O PIX é uma forma de pagamento instantânea que não cobra taxas para pessoas físicas por transferência, mesmo entre bancos diferentes. Para pessoas jurídicas, quando há taxa, ela é bem inferior às taxas de cartão de débito.

Os usuários do PDV Alterdata podem aceitar essa forma de pagamento em seu estabelecimento.

---

## Produto PIX e Integrações

Existem 2 métodos de funcionamento e integração do PIX no PDV Alterdata:

- **Integração Alterdata** — realizada pelo DSN do SHOP (método legado).
- **Integração Shipay** — realizada pela empresa parceira Shipay.

Ambas as integrações são vinculadas ao único produto **Alterdata PIX**.

> **Atenção:** Atualmente os novos clientes estão utilizando **apenas a integração Shipay**.

---

## Integração Shipay

### Como Funciona?

A Shipay simplifica a integração dos pagamentos digitais diretamente com a retaguarda. O cliente precisa habilitar a integração com a Shipay no Bimer para vincular o seu banco. Todo PIX recebido pela empresa será direcionado e gerenciado pela Shipay, que ficará responsável pelo recebimento.

> **Importante:** O PIX da Shipay integra com todos os bancos, porém, devido a uma política comercial da Alterdata x Shipay, todo cliente Alterdata integra **exclusivamente com Itaú**, não sendo possível trabalhar com Alterdata PIX em outros bancos.

A partir da versão **10.00.04.00**, o cliente poderá trabalhar com integração Shipay para realizar recebimentos via PIX. O Shipay será o responsável por gerar o QRCode ao final da venda, bem como identificar se o pagamento foi realizado para a emissão da nota fiscal.

O cliente precisa ter o produto **Alterdata PIX** no seu CRM. Caso não tenha, deverá contratar o serviço com o setor comercial.

### Configurações

**1. Relação entre empresas (se aplicável):**

Se o cliente utiliza a conta-corrente da matriz para receber vendas das filiais, acesse **Configurador Bimer >> Geral >> Empresas**, edite a empresa titular da conta e, na aba **Relação entre empresas**, informe as empresas filiais.

**2. Configurar o Shipay:**

Acesse **Configurador Bimer >> Faturamento >> Integrações >> Shipay** e preencha os dados necessários. Clique em **Novo** e informe:

- **Empresa:** selecione a empresa.
- **Nome do responsável:** informe um nome.
- **E-mail do responsável:** informe o e-mail principal do passaporte (será usado para acessar a plataforma Shipay).
- **Senha:** informe uma senha (também será usada para acessar a plataforma Shipay).

Caso o cliente utilize a conta-corrente da matriz para receber vendas das filiais, informe a empresa matriz no campo **Empresa** e, na parte inferior da tela, informe as **Empresas Filiais**.

Clique em **OK** e, após ler os termos, clique em **Eu Aceito**.

**3. Cadastrar forma de pagamento Shipay:**

Acesse **Configurador Bimer >> Financeiro >> Formas de pagamento** e cadastre a forma de pagamento Shipay. Selecione o tipo exclusivo **Shipay** — o sistema habilitará a aba **"Convênio"** para adicionar os dados, incluindo a taxa de retenção.

> **Atenção:** Se não houver taxa de retenção, informe um convênio com valor R$ 0,00.

**4. Exportação e carga de dados:**

Realize a exportação pelo integrador e depois pelo concentrador. Por último, faça a carga de dados no PDV.

### Plataforma Shipay

O cliente deve realizar o login na plataforma **Conexão Itaú**:

**Site:** `https://painelv2-conexaoitau.shipay.com.br`

Toda vez que for logar na plataforma será necessário informar o e-mail, senha e um código de acesso enviado para o e-mail do cliente. O código possui validade de **30 minutos** e não deve ser compartilhado.

#### Aba: Pagamento

O cliente consegue visualizar todos os recebimentos da empresa. O setor de desenvolvimento possui acesso ao painel internamente para fins de análise.

> **Atenção:** O nome do produto sempre será **"Produto Alterdata"**, por conta da LGPD e por questões de segurança.

#### Aba: PIX

Aqui é necessário configurar os dados bancários da conta que será vinculada ao Shipay. Sempre utilize a primeira opção **"Itaú"** para que não haja taxa adicional para o cliente.

> Nesta aba é possível configurar qualquer banco para integração, porém o único banco possível de integrar com o Alterdata PIX é o **banco Itaú**.

Após clicar em **Itaú**, instrua o cliente a realizar a leitura dos termos e as explicações sobre o funcionamento da integração.

> **OBS:** A funcionalidade "Boleto híbrido" não está disponível na integração com a retaguarda.

1. Acesse a conta PJ da empresa e realize o passo a passo solicitado pela Shipay.
2. Preencha todos os campos da tela de cadastro.

Após concluir as 2 etapas do cadastro e finalizar a associação da conta, a Shipay realizará a transferência dos valores recebidos via PIX para essa conta.

> Não é permitido informar conta física, de sócio ou terceiros, para que não seja enquadrado como desvio tributário.

#### Aba: Loja

Na aba **Loja**, é possível visualizar as lojas cadastradas através do PDV. As lojas com terminais ativos ficam aqui e o cadastro ocorre de forma automática ao apontar os dados no cadastro da empresa no Shop.

> **OBS:** Após realizar o cadastro da empresa no PDV, não será possível mais realizar edição por lá. A edição deve ser feita diretamente na plataforma.

### Venda

Após as configurações, o cliente realiza a venda normalmente. Ao finalizar, o **Shipay** ficará disponível no atalho **F5**, junto ao PIX. Basta selecionar a opção **Shipay** e o QRCode será apresentado na tela para o consumidor realizar o pagamento pelo aplicativo do banco.

---

## Integração Alterdata

### Pré-requisitos

- Bimer versão **9.06.01.00** ou superior
- PDV Alterdata **6.1353.94** ou superior
- Chave PIX da empresa habilitada no banco
- Bancos homologados: **Itaú**
- Produto **Alterdata PIX** adquirido com o setor comercial (vendas)

O recurso PIX no PDV Alterdata é um produto vendido separadamente. Quando a venda é concluída, o produto **7458 – Alterdata PIX** é incluído no cadastro do cliente, e o CRM Vendas abre automaticamente um atendimento para que o serviço seja cadastrado.

> Caso algum cliente queira configurar o recurso e o produto não conste no seu cadastro, encaminhe-o para o setor comercial. **Contato Comercial Alterdata: 0800 704 1418.**

### Configurações

**1. Configurar a chave PIX na conta bancária:**

Acesse **Configurador Bimer >> Financeiro >> Informações Bancárias >> Contas bancárias**, localize e edite a conta desejada.

> Por enquanto o recurso só funciona para o **Itaú**, o **Banco do Brasil** e o **Mercado Pago**.

Na aba **Chave PIX**, clique no sinal de adição **(+)** para incluir uma chave. Selecione o **Tipo Chave**:
- CNPJ/CPF
- Telefone
- E-mail
- Aleatória

Na coluna **Chave**, informe a chave habilitada no banco, de acordo com o tipo escolhido.

**2. Cadastrar forma de pagamento PIX:**

Acesse **Configurador Bimer >> Financeiro >> Forma de pagamento** e clique em **Novo** (ou **Editar** se já existir).

- Informe a **descrição** da forma de pagamento (ex.: "PIX Conta XXXX").
- No campo **Tipo**, selecione **"PIX pagamento instantâneo"** — o sistema habilitará a aba **PIX**.
- Na aba **PIX**, informe o código da conta bancária e selecione a chave PIX desejada.
- Grave o cadastro.

> **Atenção:** Não é obrigatório informar a chave PIX no cadastro da forma de pagamento. Porém, se ela não for informada, a forma de pagamento será considerada como uma forma de pagamento normal, sem que o QR Code seja apresentado para o cliente.

> **Dica:** Para cada forma de pagamento só é possível informar **1 (uma) chave PIX**. Caso a empresa tenha mais de uma chave PIX, é necessário criar 1 forma de pagamento para cada chave. Exemplo: *PIX CNPJ Conta 01*, *PIX Telefone Conta 01*, etc.

### Venda

Na hora da venda, selecione a forma de pagamento **F5 – PIX**.

> **Observação:** O atalho F5 era utilizado para Ticket. Se a empresa também possuir a forma de pagamento ticket, ao clicar em F5 será possível escolher entre o ticket e o PIX.

Ao final, o sistema gerará uma imagem com **QR CODE** para o pagamento. O consumidor lê o QR CODE pelo aplicativo do banco em seu celular para efetuar o pagamento e concluir a venda.

> *[Imagem: Tela do PDV com QR Code gerado para pagamento via PIX]*

**O QR Code só será apresentado se:**
- O cliente tiver adquirido o produto Alterdata PIX.
- A chave PIX estiver vinculada à forma de pagamento.
- O serviço for habilitado pelo banco e o **Cliente ID** e **token** tiverem sido cadastrados na Alterdata.

---

## Venda por DAV

Se o cliente utiliza DAV para iniciar as vendas, ele também pode usar o Alterdata PIX para gerar o QR Code da chave PIX normalmente.
