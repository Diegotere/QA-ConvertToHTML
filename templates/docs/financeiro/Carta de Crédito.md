# Carta de Crédito — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
  - [Natureza de Lançamento](#natureza-de-lançamento)
  - [Forma de Pagamento](#forma-de-pagamento)
  - [Tipo de Baixa](#tipo-de-baixa)
  - [Parametrização](#parametrização)
- [Rotina de Criação](#rotina-de-criação)
  - [Geração pela Devolução / Troca de Vendas](#geração-pela-devolução--troca-de-vendas)
  - [Cadastro Manual de Carta de Crédito](#cadastro-manual-de-carta-de-crédito)
  - [Disponível](#disponível)
- [Rotina de Utilização](#rotina-de-utilização)
  - [BiVendas, CRMVendas e CRM (Vendas Follow Up)](#bivendas-crmvendas-e-crm-vendas-follow-up)
  - [A Receber / Telecobrança](#a-receber--telecobrança)
  - [Pedido de Venda e Faturamento](#pedido-de-venda-e-faturamento)
  - [Parcela com Dados de Carta de Crédito](#parcela-com-dados-de-carta-de-crédito)

---

## Introdução

Sabe aquele vale ou crédito em loja que você recebe após trocar uma mercadoria com defeito ou da qual se arrependeu? No Bimer, este "vale" ou "crédito" se chama **Carta de Crédito**.

O objetivo deste material é conceituar e demonstrar a aplicação das cartas de crédito no sistema.

Pensando do lado da empresa: se o cliente tem um crédito com ela, a empresa tem um débito com o cliente — ela "deve" o valor daquele vale. E como são registradas as contas devidas pelas empresas no Bimer? **Contas a pagar!**

Uma carta de crédito nada mais é do que um **título a pagar**. A diferença é que, para que um título a pagar seja considerado carta de crédito, ele precisa conter dados previamente configurados para esta rotina.

---

## Configurações Necessárias

Para trabalhar com carta de crédito é necessário informar ao sistema como identificar uma carta de crédito — ou seja, o sistema precisa diferenciar carta de crédito de qualquer outro título a pagar.

### Natureza de Lançamento

Caminho: **Configurador >> Financeiro >> Natureza de Lançamento**

Cadastre uma natureza de lançamento para ser utilizada no Contas a Pagar como carta de crédito.

> **Sugestão:** Use um nome claro que deixe evidente que esta natureza será utilizada exclusivamente para esta rotina.

### Forma de Pagamento

Caminho: **Configurador >> Financeiro >> Forma de Pagamento**

Cadastre uma forma de pagamento específica para carta de crédito, que será utilizada no Contas a Pagar. Você pode utilizar o tipo **"Vale crédito"** para esta forma de pagamento, por exemplo.

### Tipo de Baixa

Cadastre um **tipo de baixa total** e um **tipo de baixa parcial sem numerário**. Assim como os demais cadastros, eles serão utilizados nos títulos de carta de crédito no Contas a Pagar quando houver uma baixa.

> **Dica:** Se você já tem tipos de baixa total e parcial sem numerário, poderá utilizá-los. Porém, caso queira separar tipos de baixa específicos para a rotina de carta de crédito, crie novos registros.

### Parametrização

Após realizar os cadastros, é necessário informar ao sistema o que será considerado carta de crédito.

Caminho: **Configurador >> Geral >> Opções >> Carta de crédito**

Insira os cadastros realizados anteriormente nos devidos campos.

> *[Imagem: tela de parametrização de carta de crédito no Configurador]*

---

## Rotina de Criação

### Geração pela Devolução / Troca de Vendas

Durante uma devolução ou troca pelo módulo **Devolução e Troca de Venda**, é possível gerar uma carta de crédito caso o valor devolvido pelo cliente fique "sobrando". Para isso, marque a opção **"Gerar carta de crédito no contas a pagar"** na aba **Negociação**.

> *[Imagem: aba Negociação com opção de gerar carta de crédito]*

### Cadastro Manual de Carta de Crédito

**Contas a Pagar**

Cadastre manualmente um título a pagar em nome do cliente desejado. Crie o título e marque a opção **Carta de crédito** — a natureza de lançamento e a forma de pagamento serão recuperadas automaticamente do **Configurador >> Geral >> Opções >> Carta de crédito**.

> **Detalhes importantes:**
> - Se o usuário inserir manualmente a natureza e a forma de pagamento configuradas para a rotina, o checkbox de **Carta de crédito** será selecionado automaticamente.
> - Este recurso está disponível a partir da versão **9.07.06.00** do Bimer.

### Disponível

Insira um movimento de **entrada** no módulo **Disponível** e marque o box **"Gerar carta de crédito"**.

> **Atenção:** Esta opção não será exibida quando for informada uma conta caixa para a criação do movimento.

**Quando utilizar esta opção?** Pode ser que o cliente adiante um valor em depósito bancário, por exemplo, e queira ir abatendo em pedidos futuros. Nesse caso, crie o movimento gerando a carta de crédito antes de realizar os pedidos.

---

## Rotina de Utilização

Quando um cliente possui carta de crédito disponível, um ícone indicativo é exibido nos módulos de venda e negociação.

A carta de crédito pode ser utilizada em todos os pontos que permitam negociação de valores a receber — ou seja, sempre que estiver vendendo para o cliente ou renegociando seus títulos, é possível envolver o crédito na negociação.

### BiVendas, CRMVendas e CRM (Vendas Follow Up)

No encerramento de um contato de venda, na tela de geração do pedido de venda, é possível incluir uma carta de crédito.

**Exemplo:** O cliente estava comprando R$ 75.570,90 em mercadorias e tinha uma carta de crédito de R$ 25.000,00. Sendo assim, resta receber R$ 50.570,90.

### A Receber / Telecobrança

Nos módulos **Contas a Receber** e **Telecobrança** é possível utilizar uma carta de crédito na renegociação.

Ainda, no **Contas a Receber** é possível criar uma carta de crédito ao realizar a renegociação de um título quando o valor pago for maior que o valor em aberto.

Para habilitar este comportamento:

Caminho: **Configurador >> Financeiro >> Opções >> Renegociação >> Geral**

Marque a opção **"Gerar carta de crédito com o valor da diferença quando o valor pago for maior que o valor a receber"**.

Ao renegociar um título, preencha o campo **"Al. da parcela"** ou **"Valor da parcela"** com um valor superior ao devido pelo cliente. Por exemplo, com valor em aberto de R$ 900,00, ao informar R$ 1.350,00 o percentual sobe para 150%, indicando que há um valor além da renegociação.

Ao avançar, o sistema exibirá a mensagem:

> *"O valor pago é maior que o valor renegociado. Será gerada uma carta de crédito com a diferença, deseja continuar?"*

Confirme para finalizar o procedimento.

### Pedido de Venda e Faturamento

Na aba **Negociação**, o ícone da carta de crédito será exibido quando:

- A operação estiver configurada para atualizar financeiro;
- O documento tiver origem em pedido de venda no qual não tenha sido informada carta de crédito;
- O cliente tiver carta de crédito disponível para utilização.

### Parcela com Dados de Carta de Crédito

Caso tente realizar a inclusão de parcelas com natureza de lançamento e forma de pagamento configuradas para carta de crédito, o sistema pode bloquear a inserção, dependendo dos acessos do usuário.

A mensagem de bloqueio será exibida caso o acesso **"Criar parcela com forma de pagamento que está configurada para carta de crédito"** esteja bloqueado no **Cadastro de Usuários**.
