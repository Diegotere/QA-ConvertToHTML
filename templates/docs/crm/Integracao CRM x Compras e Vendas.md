# Integração CRM x Compras e Vendas — Bimer CRM

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Requisito](#requisito)
- [Cotação](#cotação)
  - [Configurações da Cotação](#configurações-da-cotação)
  - [Rotina Cotação x CRM](#rotina-cotação-x-crm)
- [Pedido de compras](#pedido-de-compras)
  - [Configurações do Pedido de compras](#configurações-do-pedido-de-compras)
  - [Rotina Pedido de Compras x CRM](#rotina-pedido-de-compras-x-crm)
- [Vendas](#vendas)
  - [Configurações](#configurações)
  - [Pré-pedido](#pré-pedido)
  - [Pedido de Venda](#pedido-de-venda)

---

## Introdução

CRM é a sigla em inglês para Gestão de relacionamento com cliente. Seu objetivo é ajudar o gestor a conhecer o perfil das pessoas com quem se relaciona, demonstrando fatores como o nível de satisfação de um cliente, porte da empresa, valor do faturamento, preferências no atendimento e diversos outros fatores.

Por meio do CRM, o gestor consegue analisar todos os contatos e relações gerados entre empresa x pessoa. Quando falamos de pessoas, podem ser: clientes, fornecedores, funcionários e assim por diante. E quando falamos de contatos e relações podem ser orçamentos, compras, vendas, despesas e receitas financeiras.

O CRM do Bimer é um dos mais completos do mercado, pois em vários pontos do sistema onde há uma relação entre empresa x pessoa é possível gerar um atendimento para acompanhamento daquele processo e de suas fases.

Neste manual ensinaremos como criar atendimentos a partir dos processos de compra e venda: cotação, pedido de compras, pré-pedido e pedido de vendas.

---

## Requisito

Para que você tire pleno proveito deste material, é necessário conhecimento na parte de CRM para saber como criar atendimentos, workflow, CR, tipos de contato e assim por diante.

---

## Cotação

### Configurações da Cotação

Acesse o **Configurador >> Estoque >> Opções >> Cotação >> Centro de responsabilidade**. Faça o seguinte:

- Marque a opção: **"A cotação será acompanhada com centro de responsabilidade."**
- **Tipo de atendimento:** Informe aquele que será usado para criar o atendimento de acompanhamento no CRM.
- **Centro de responsabilidade de encerramento:** Escolha o código que será usado na fase de encerramento da cotação.

> *[Imagem: Configurações de Centro de responsabilidade para Cotação]*

Não esqueça de vincular o workflow no tipo de atendimento.

> *[Imagem: Workflow vinculado no tipo de atendimento]*

### Rotina Cotação x CRM

Com as configurações no esquema, acesse o módulo **Cotação**. A partir de agora, as cotações criadas no sistema sempre vão gerar um atendimento de modo automático.

Veja como fica o módulo Cotação após as configurações:

- **Coluna CR Atual** — Demonstra em qual fase o atendimento se encontra, de acordo com os dados do processo de cotação.
- **Coluna Possui atendimento** — Recebe os valores **S** de Sim e **N** de Não. Mostra se a cotação possui atendimento vinculado.
- **Coluna Atendimento encerrado** — Recebe os valores **S** de Sim e **N** de Não. Mostra se o atendimento vinculado à cotação já foi encerrado ou não.

> *[Imagem: Módulo Cotação com colunas de CRM habilitadas]*

Novos botões disponíveis:

- **Parecer de atendimento** — Dê aqui pareceres no atendimento em qualquer momento. Informando detalhes relevantes como contatos feitos com fornecedores ou algum tipo de pendência na compra. Este botão também fica disponível na tela de Decisão de compras.
- **Histórico do atendimento** — Veja o histórico de pareceres que foram efetuados, apure em qual momento se encontra o atendimento. Este botão também fica disponível na tela de Decisão de compras.

Nos módulos do CRM, o atendimento já fica disponível para consulta.

**Qual o caminho a seguir?**

O primeiro é fornecer os pareceres no atendimento conforme os eventos e contato com os fornecedores vão acontecendo, para que assim as fases do atendimento sejam cumpridas.

O segundo caminho é realizar a **Decisão de compras** (após a tomada de preço). Com o pedido de compras gerado a partir da cotação, o atendimento será encerrado com o CR definido nas configurações.

Isso ocorre pois o objetivo do atendimento é acompanhar a cotação durante sua vida útil. Como a cotação foi finalizada pelo pedido não há mais o que fazer no atendimento. No histórico do atendimento aparece o texto:

> *Encerrado pela geração do(s) pedido(s) de compra abaixo: 000999 / 001000*

**Curiosidades:**
1. A pessoa do atendimento é a **Empresa da cotação**.
2. O usuário de abertura do atendimento e dos pareceres automáticos é o mesmo que está logado no módulo Cotação.

---

## Pedido de compras

### Configurações do Pedido de compras

Acesse o **Configurador >> Estoque >> Opções >> Compras >> Centro de responsabilidade**. Faça o seguinte:

- Marque a opção: **"O pedido será acompanhado com centro de responsabilidade."**
- **Tipo de atendimento:** Informe aquele que será usado para criar o atendimento de acompanhamento no CRM.
- **Centro de responsabilidade de encerramento:** Escolha o código que será usado na fase de encerramento do pedido de compra.
- **Usuário responsável pelo atendimento:** Informe se o usuário de próximo contato do atendimento será:
  - Aquele que está logado no módulo Pedido de compra.
  - O usuário de **Liberação** presente dentro do pedido, na aba Outros / Usuário responsável pela liberação do pedido de compra. Para esta opção funcionar corretamente, recomenda-se marcar no **Configurador >> Estoque >> Opções >> Compras >> Liberação** a opção **"Obrigar o usuário a informar uma pessoa responsável pela liberação do pedido de compra"**.
- **Registrar no atendimento quando um usuário liberar o pedido de compra** — O sistema fornece um parecer automático no momento da liberação do pedido, contendo dados da data e hora de liberação e qual usuário fez o processo.
- **Encerrar o atendimento quando o pedido de compra for totalmente atendido ou atendido com corte** — O atendimento será encerrado junto com a finalização do pedido de compra.
- **Usuários que receberão SPY quando for criado um atendimento a partir do pedido de compra** — Informe os logins que vão receber uma notificação por e-mail após a criação do pedido.
- **Campos que serão informados no atendimento criado para acompanhamento do pedido de compra** — Defina quais dados vão aparecer no topo do atendimento criado a partir do pedido.

> *[Imagem: Configurações de Centro de responsabilidade para Pedido de compras]*

### Rotina Pedido de Compras x CRM

Com as configurações no esquema, acesse o módulo **Pedido de compra**. A partir de agora, os pedidos criados no sistema sempre vão gerar um atendimento de modo automático.

Novos botões disponíveis:

- **Novo Parecer** — Dê aqui pareceres no atendimento em qualquer momento.
- **Histórico** — Veja o histórico de pareceres que foram efetuados.

> *[Imagem: Módulo Pedido de compra com botões de CRM habilitados]*

Colunas adicionadas:

- **Coluna CR Atual** — Demonstra em qual fase o atendimento se encontra.
- **Coluna Possui atendimento** — S ou N.
- **Coluna Atendimento encerrado** — S ou N.

**Daqui para frente, há dois caminhos:**

O primeiro é fornecer os pareceres no atendimento conforme os eventos e contato com os fornecedores vão acontecendo, passando o atendimento em cada fase definida no processo de compras.

O segundo caminho é gerar a nota fiscal de entrada, em atendimento ao Pedido de compra. Feito isto, é dado um parecer automático no atendimento com o número da nota (se a opção de encerramento automático estiver marcada).

**Curiosidades:**
1. A pessoa do atendimento é o **fornecedor do pedido de compras**.
2. O usuário de abertura do atendimento e dos pareceres automáticos é o mesmo que está logado no módulo Pedido de compra.
3. O usuário de parecer automático do atendimento do pedido a partir da nota fiscal de entrada é o mesmo da abertura do atendimento.
4. Se o pedido de compras possuir uma cotação como ancestral e o módulo Cotação estiver configurado para gerar atendimento, no histórico do atendimento do pedido de compra conseguimos visualizar a informação do atendimento da cotação.

---

## Vendas

A rotina de vendas inicia com um orçamento (pré-pedido) ou pedido de vendas, para futuramente gerar a nota fiscal.

### Configurações

Acesse o **Configurador >> Faturamento >> Opções >> Pedido de Venda >> Centro de responsabilidade**. Faça o seguinte:

- Marque a opção: **"O pedido será acompanhado com centro de responsabilidade."**
- **Usuário padrão para atendimento** — Este será usado como usuário de próximo contato do atendimento.
- **Tipo de atendimento** — Informe aquele que será usado para criar o atendimento de acompanhamento no CRM.
- **Centro de responsabilidade de encerramento** — Escolha o código que será usado na fase de encerramento do pedido.
- **Limpar o filtro de pedidos após um parecer, quando o pedido não mais pertencer ao filtro de CR** — Se a coluna CR Atual possuir algum filtro na tela do módulo Pedido de vendas, ao dar um parecer que mude o CR, o sistema limpa o filtro automaticamente.
- **Em que momento deverá gerar atendimento para pré-pedido criados no aplicativo Pedido de venda** — Escolha se o atendimento será criado na geração do pré-pedido ou na transformação do pré-pedido em pedido de vendas.
- **Em que momento deverá gerar atendimento para pré-pedido criados no aplicativo Pré-pedido** — Escolha se o atendimento será criado na geração do pré-pedido ou na transformação em pedido de vendas. O usuário pode escolher ainda não gerar atendimento no Pré-Pedido.
- **Gerar atendimento ao criar pedido diretamente no aplicativo Pré-pedido na aba Pedido de venda** — Faz com que o pedido criado na aba Pedido de Venda do módulo Pré-Pedido crie o atendimento.

> *[Imagem: Configurações de Centro de responsabilidade para Pedido de Venda]*

### Pré-pedido

A partir de agora, os orçamentos criados no sistema vão gerar um atendimento de modo automático (de acordo com a configuração de momento de geração).

Novos botões disponíveis no módulo Pré-pedido:

- **Novo Parecer** — Dê aqui pareceres no atendimento em qualquer momento.
- **Histórico** — Veja o histórico de pareceres que foram efetuados.

> *[Imagem: Módulo Pré-pedido com botões de CRM habilitados]*

Nos módulos do CRM, o atendimento já fica disponível para consulta.

### Pedido de Venda

A partir de agora, todos os pedidos de vendas criados no sistema vão gerar um atendimento de modo automático. Além disso, os pré-pedidos criados ou transformados em pedidos no módulo Pedido de venda, também criarão atendimento.

Novos botões e colunas disponíveis:

- **Novo Parecer** — Dê aqui pareceres no atendimento em qualquer momento.
- **Histórico** — Veja o histórico de pareceres que foram efetuados.
- **Coluna CR Atual** — Demonstra em qual fase o atendimento se encontra.
- **Coluna Possui atendimento** — S ou N.
- **Coluna Atendimento encerrado** — S ou N.

> *[Imagem: Módulo Pedido de venda com colunas e botões de CRM habilitados]*

**O que acontece após o faturamento?**

A rotina de Liberação e faturamento do pedido são realizadas de modo comum, até a geração, autorização e liberação da NF-e.

Após liberar a NF-e, o atendimento vinculado ao pedido **permanece em aberto**, sendo necessário que o usuário do CRM forneça pareceres até encerrar o atendimento. Isso ocorre por alguns motivos:

- **Onboarding ou pós-venda** — A empresa acompanha o cliente na utilização do produto ou serviço, oferecendo suporte, manuais, vídeos e assim por diante. Essa é uma tática que muitas empresas fazem para reter clientes.
- **Acompanhamento financeiro** — O atendimento pode ser enviado para o financeiro aguardar o pagamento do cliente e lembrar de cobrar em caso de inadimplência.

**Curiosidades:**
1. A pessoa do atendimento é o **cliente** informado no pré-pedido ou pedido de vendas.
2. A informação inserida no momento da **Liberação** do pedido de vendas não gera parecer no atendimento.
3. Quando o pedido é **cancelado**, o atendimento é encerrado e no histórico é gerado o informe: *"O pedido de venda foi cancelado."*
4. Ao **duplicar** um pedido, esta informação aparece na abertura do atendimento: *"Pré-pedido: 000111, duplicado através do Pré-pedido: 000110"*
