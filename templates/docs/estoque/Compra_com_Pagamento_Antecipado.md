# Compra com Pagamento Antecipado — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [O que é considerado pagamento antecipado?](#o-que-é-considerado-pagamento-antecipado)
  - [Visão geral do funcionamento do recurso](#visão-geral-do-funcionamento-do-recurso)
- [Requisitos Básicos](#requisitos-básicos)
  - [Como era a rotina antes da versão 9.04.04.00?](#como-era-a-rotina-antes-da-versão-90404)
- [Configurações Necessárias](#configurações-necessárias)
- [Rotina de compras com pagamento antecipado](#rotina-de-compras-com-pagamento-antecipado)
  - [Cadastro do pedido de compras](#cadastro-do-pedido-de-compras)
  - [Baixa do título de antecipação de pagamento](#baixa-do-título-de-antecipação-de-pagamento)
  - [Cancelamento de compra com pagamento antecipado realizado](#cancelamento-de-compra-com-pagamento-antecipado-realizado)
  - [Entrada da NF-e com pagamento antecipado vinculado a um pedido de compras](#entrada-da-nf-e-com-pagamento-antecipado-vinculado-a-um-pedido-de-compras)
  - [Entrada da NF-e com pagamento antecipado sem vínculo a um pedido de compras](#entrada-da-nf-e-com-pagamento-antecipado-sem-vínculo-a-um-pedido-de-compras)
  - [Antecipação de valores sem vínculo com pedidos de compras](#antecipação-de-valores-sem-vínculo-com-pedidos-de-compras)
  - [Detalhamento da tela de Seleção de pagamentos antecipados](#detalhamento-da-tela-de-seleção-de-pagamentos-antecipados)
- [Transição para a nova rotina](#transição-para-a-nova-rotina)
  - [Situação dos pedidos de compras pendentes de conversão](#situação-dos-pedidos-de-compras-pendentes-de-conversão)
- [Desvincular pagamento antecipado](#desvincular-pagamento-antecipado)
- [Relatório pelo BiFinanceiro](#relatório-pelo-bifinanceiro)

---

## Introdução

Normalmente quando pensamos em uma rotina de compras e pagamentos, a lógica mais comum é: primeiro eu compro e somente depois que o fornecedor emite a Nota Fiscal é que o pagamento é realizado.

Porém, nem sempre essa rotina acontece nesta ordem. Existem casos em que a empresa compradora faz o **pagamento antecipado** pela compra, antes de o documento fiscal ser emitido, mesmo que o produto seja entregue em uma data futura. Essa antecipação pode ser **total ou parcial**, em relação ao valor da compra.

O recurso de pagamento antecipado do Bimer permite que a empresa faça o controle das antecipações de valores feitas para cada fornecedor. O que possibilita gerenciar se o valor antecipado foi utilizado ou não, como foi utilizado, se há algum saldo pendente com o fornecedor, entre outros pontos.

### O que é considerado pagamento antecipado?

Existem diversos motivos para um fornecedor exigir o pagamento antecipado, como por exemplo, custos altos na venda do produto, que possam trazer prejuízo caso a empresa desista da compra; ou simplesmente porque precisa do valor para cobrir os custos da produção ou aquisição da mercadoria.

A prática é bastante comum quando o produto é encomendado pela empresa, e tem características específicas que só atendem a sua necessidade.

Em algumas empresas a rotina é conhecida como **"adiantamento a fornecedores"**. A empresa adianta o valor, ou parte dele, que seria pago na entrega do produto ou depois. E quando o documento fiscal referente à compra chega para a empresa, ela indica que o valor já foi adiantado para o vendedor.

### Visão geral do funcionamento do recurso

No Bimer, a rotina de compras com pagamento antecipado pode iniciar na criação do **pedido de compras**. Ao criá-lo, o usuário do setor de compras indica que haverá a antecipação do pagamento, parcial ou total. Ao gravar o pedido de compras, o sistema cria um título no módulo **Contas a Pagar**, para que o setor financeiro faça o pagamento e baixe o título criado. Essa baixa precisa ser com numerário, afinal, saiu dinheiro da conta da empresa.

Ao baixar o título, o sistema gera um **saldo de valores antecipados ao fornecedor**. Esse saldo poderá ser acompanhado, por exemplo, pelo módulo de Nota Fiscal de Entrada.

Ao receber a mercadoria e fazer a entrada do documento fiscal no módulo Nota Fiscal de Entrada, é possível utilizar o saldo antecipado, ou parte dele, para indicar que o valor devido pela compra já foi pago.

**Pontos importantes:**

1. Um pedido de compras com antecipação de pagamento gera um saldo para o fornecedor.
2. O saldo gerado pelo pedido de compras não fica vinculado a ele, mas sim ao fornecedor.
3. O saldo só é gerado após a baixa com numerário do título a pagar criado pelo pedido.
4. O saldo, por padrão, é utilizado na nota fiscal que for vinculada ao pedido de compras de origem, mas o usuário poderá optar por não utilizá-lo. Neste caso, será necessário pagar normalmente pela compra realizada.
5. Se o saldo gerado pelo pedido de compras não for utilizado, ele ficará acumulado e poderá ser utilizado em qualquer outra entrada de nota fiscal de compra com aquele fornecedor.
6. É possível gerar um pagamento antecipado para um fornecedor sem ser pelo pedido de compras. Para isso basta criar e baixar um título no módulo contas a pagar com as configurações adequadas.

Existem duas formas de gerar saldo de adiantamento para um fornecedor:
- **Pelo pedido de compras**
- **Por um título a pagar avulso**

> **Na verdade, o que gera o saldo é a baixa de um título a pagar que foi criado pela rotina do pedido de compras ou gerado manualmente, com uma natureza de lançamento específica.**

É como se fosse uma conta-corrente para o fornecedor. A empresa antecipa valores para ele, e depois utiliza em compras futuras.

---

## Requisitos Básicos

O único requisito necessário é que a **versão do Bimer seja a 9.04.04.00 ou superior**.

A rotina de compras com pagamento antecipado já existia no Bimer há muito tempo, porém ela foi totalmente reformulada na versão acima indicada.

### Como era a rotina antes da versão 9.04.04?

Nas versões anteriores o valor antecipado ficava vinculado ao pedido de compras de origem. Dessa forma o valor gerado pelo título pago só poderia ser utilizado na entrada de uma nota fiscal vinculada ao pedido de compras de origem da antecipação. Essa forma de trabalhar restringia muito o gerenciamento desses valores.

> **Atenção:** Antes de atualizar o Bimer na versão indicada, verifique se há algum pedido de compras com antecipação de pagamentos em aberto. Caso haja pedidos nessa situação, o sistema migrará o valor em aberto para o saldo do fornecedor. Veja o tópico [Transição para a nova rotina](#transição-para-a-nova-rotina).

---

## Configurações Necessárias

No **Configurador**, acesse a aba **Geral**, e em **Opções**, clique em **Pagamento Antecipado**.

### Campos de configuração

- **Tipo baixa dos títulos gerados a partir da Nota Fiscal de Entrada (não gera numerário)** — Como o pagamento da compra já foi realizado antecipadamente, os títulos que forem gerados pela entrada de uma nota fiscal de compras precisam ser baixados sem numerário, para não haver duplicidade na saída de valores. Deve ser um tipo de baixa final.

- **Natureza de lançamento padrão dos títulos de pagamento antecipado** — Esta é uma das principais configurações para a rotina. Ela tem dupla função:
  - Ser utilizada pelo módulo Pedido de Compras na criação dos títulos referentes a antecipação de pagamento.
  - Ser utilizada pelo sistema para identificar que o título se refere a uma antecipação. Ao fazer uma baixa com numerário, o seu valor entrará para o saldo do fornecedor.

> **Atenção:** A natureza de lançamento informada nesta configuração passa a ser de **uso exclusivo** da rotina de pagamento antecipado. Uma vez utilizada ela não poderá ser usada para outras rotinas, mesmo que a empresa decida cadastrar uma nova natureza para este fim.

- **Naturezas de lançamento utilizadas para pagamento antecipado** — Quadro que lista todas as naturezas de lançamento configuradas para a rotina.

- **Forma de pagamento dos títulos pagos antecipadamente** — O sistema utilizará esta forma de pagamento no momento da baixa do título gerado pela NF de entrada, para identificar que o valor foi pago anteriormente por outro título.

- **Natureza de lançamento para título a receber (estorno de pagamento antecipado)** — Esta configuração não é mais utilizada nas rotinas atuais. Em breve será retirada.

- **Tipo de baixa para adiantamentos não pagos (não gera numerário)** — Pode ocorrer de um título a pagar, gerado para adiantar o pagamento ao fornecedor, não ser baixado totalmente na primeira compra. O restante do adiantamento que não foi pago será baixado automaticamente sem numerário, evitando duplicidade.

> **Observação:** Isso só ocorre para adiantamento vinculado a pedido de compra.

---

## Rotina de compras com pagamento antecipado

### Cadastro do pedido de compras

O segredo da rotina está no **cadastro das parcelas de pagamento**, na aba **Negociação** de um pedido de compras.

Ao incluir a parcela com o valor a ser adiantado ao fornecedor, marque a opção **"Gerar pagamento antecipado"**.

> **Atenção:** A natureza de lançamento informada na parcela, ou mesmo na tela principal do pedido de compra, não pode ser a mesma informada nas configurações da rotina.

Em uma rotina de compras nem sempre é exigida uma antecipação total do seu valor. Acontece, por exemplo, de o fornecedor pedir um adiantamento parcial de 20%, 30%, 50%, etc.

Nestes casos, na aba de negociação deve ser incluída uma parcela somente com o valor do pagamento antecipado, e marcar a configuração indicada. O restante do valor não antecipado deve ser informado em uma ou mais parcelas, sem marcar a opção citada.

**Exemplo:** Em uma compra no valor de R$ 1.000,00, com antecipação de 30%, e o restante pago em 30/60 dias:

| Parcela | Valor | Vencimento | Gerar pagamento antecipado |
|---------|-------|------------|---------------------------|
| 01 | R$ 300,00 | Imediato | ✅ Marcada |
| 02 | R$ 350,00 | 30 dias | ❌ Desmarcada |
| 03 | R$ 350,00 | 60 dias | ❌ Desmarcada |

### Baixa do título de antecipação de pagamento

Ao criar um pedido de compras da forma explicada, o sistema criará um título a pagar, em aberto, com a natureza de lançamento informada nas configurações da rotina.

Esse título deve ser baixado normalmente, de forma total ou parcial, com um tipo de baixa que **gere numerário**, pois ele comprova a saída do valor da conta da empresa. O sistema lançará o valor baixado do título no saldo de antecipação do fornecedor.

### Cancelamento de compra com pagamento antecipado realizado

Pode acontecer de a compra ser cancelada, após o título a pagar referente à antecipação de pagamento ter sido baixado. Nesse caso, ao **Cancelar ou Excluir** o pedido de compras, o sistema alertará que o valor referente ao título a pagar ficará disponível com o fornecedor, para ser utilizado em compras futuras.

### Entrada da NF-e com pagamento antecipado vinculado a um pedido de compras

Inicie normalmente a entrada do documento e selecione o pedido de compra referente ao processo.

Na aba **Negociação**, por padrão, o sistema mostrará a parcela referente ao adiantamento na **cor vermelha**, indicando que o título foi pago antecipadamente.

Para ver detalhes sobre negociação, clique sobre a parcela e clique na opção **"Pagamento antecipado"**. O sistema abrirá a janela **"Seleção de pagamentos antecipados"** que funciona como uma área de controle e consulta do extrato de antecipações feitas para o fornecedor.

Como a entrada da NF-e está vinculada ao pedido de compras com parcela antecipada, o sistema já marcará automaticamente o título criado pelo pedido, e baixado com numerário, para ser utilizado na negociação.

> Não é obrigatório utilizar o título referente ao pagamento antecipado para quitar uma compra. A empresa pode decidir pagar normalmente pela compra, num prazo estabelecido pelo fornecedor, e guardar o saldo do valor antecipado para uma compra ou negociação futura. Nesse caso, basta desmarcar o título na tela e gravá-la.

### Entrada da NF-e com pagamento antecipado sem vínculo a um pedido de compras

Uma das grandes vantagens do recurso é a possibilidade de utilizar o saldo adiantado a um fornecedor para qualquer entrada de NF-e de compras emitidas por ele, independentemente de ser ou não vinculada a um pedido de compras.

1. No módulo **Nota Fiscal de Entrada**, inicie a entrada normalmente do documento fiscal.
2. Na aba **Negociação**, faça o lançamento da(s) parcela(s) de pagamento.
3. **Edite a parcela** que deseja informar que já está quitada e clique na opção **Pagamento Antecipado**.
4. O sistema abrirá a tela **"Seleção de pagamentos antecipados"** com todos os títulos disponíveis.

Na grid **"Pagamentos antecipados"** é possível identificar para cada título:

- **Valor do título**
- **Valor baixado** — quanto realmente foi antecipado
- **Valor utilizado** — quanto do valor baixado foi utilizado em alguma compra
- **Valor disponível** — valor que ainda pode ser utilizado daquele título para quitar uma compra

A coluna **"Vl. a utilizar"** só apresentará algum valor se o título correspondente for marcado. Ela demonstra quanto do título marcado será utilizado para quitar a parcela da negociação.

**Marque** um ou mais títulos de antecipação até chegar o valor necessário para quitar total ou parcialmente a parcela em negociação, e clique em **Gravar**.

A parcela é exibida em **vermelho**, indicando que é um título que foi pago antecipadamente. Se ainda sobrar algum saldo com o fornecedor, ele pode ser utilizado em compras futuras.

### Antecipação de valores sem vínculo com pedidos de compras

Existem muitas empresas que fazem antecipação de valores para os fornecedores, mesmo antes de realizar uma compra com eles, criando assim uma espécie de conta-corrente.

No módulo **Contas a Pagar**, cadastre um título manualmente com a **Natureza de Lançamento padrão dos títulos de pagamento antecipado**, indicada no **Configurador » Geral » Opções » Pagamento antecipado**.

O valor que for baixado deste título, com um tipo de baixa que gere numerário, passará a compor o saldo de antecipação de pagamentos para o fornecedor.

### Detalhamento da tela de Seleção de pagamentos antecipados

A tela de Seleção de pagamentos antecipados está disponível no cadastro de parcelas na negociação do módulo Nota Fiscal de entrada.

**Recursos disponíveis:**

1. **Período de emissão** — Bastante útil quando há muitos títulos de antecipação para o fornecedor, e se precisa filtrar apenas os que foram emitidos em determinado período.

2. **Exibir pagamentos antecipados dos fornecedores relacionados** — Permite que a empresa identifique e utilize os valores que foram antecipados para outros fornecedores, desde que ele conste como pessoa relacionada no cadastro do fornecedor que emitiu a nota fiscal.

3. **Filtro de status:**
   - **Disponíveis** — Filtra apenas títulos que tenham algum valor disponível para ser utilizado na negociação.
   - **Parcialmente utilizados** — Filtra os títulos que tiveram apenas parte do valor baixado como antecipação utilizado em alguma compra.
   - **Abertos** — Títulos a pagar, cadastrados com natureza de lançamento de antecipação de pagamento, e que não foram baixados ainda.
   - **Totalmente utilizados** — Títulos que não restam nenhum valor que possa ser utilizado.
   - **Excluídos** e **Todos** — Filtros intuitivos.

Quando um título disponível nessa tela foi criado por um pedido de compras, o número deste pedido estará disponível na coluna **"Cód. Pedido"**. É possível **Desvincular Pedido de compras** de um título, na opção que fica no rodapé da tela.

---

## Transição para a nova rotina

O recurso de compra com antecipação de pagamento foi reformulado a partir da versão **9.04.04.00**.

Antes, o valor adiantado ficava vinculado a um pedido de compras, e só poderia ser utilizado na entrada da NF-e que atendesse esse pedido. Com a mudança, o valor pago de forma antecipada entra para o **saldo de antecipações feitas ao fornecedor**, podendo ser utilizado para qualquer NF-e emitida pelo fornecedor.

Para empresas que tinham pedidos de compras com antecipação de pagamento em aberto no momento da atualização, no **Configurador » Estoque » Alinhamentos**, foi criado o recurso de **"Pagamento antecipado em saldo com fornecedor"**.

### Como usar

1. Acesse o recurso citado e clique em **Filtrar**.
2. Na primeira vez, é recomendável fazer a consulta sem nenhum filtro informado para ter uma visão geral.
3. Na área **Pagamentos Antecipados** são relacionados os Pedidos de Compras configurados com Pagamento Antecipado que geraram título a pagar, cujo título foi baixado com numerário total ou parcial.

**Campos disponíveis:**

- **Valor total pago** → Corresponde ao valor baixado do título a pagar, gerado pelo pedido de compras com pagamento antecipado.
- **Valor utilizado** → Corresponde ao valor de entrada de NF-e, vinculada ao pedido de compras.
- **Saldo em aberto** → Corresponde ao Valor pago menos o Valor utilizado. O resultado será convertido em saldo para o fornecedor.

Ao selecionar um pedido, ele será detalhado na área central da tela com informações sobre o **Pedido de compra**, **Documento** e **Título a pagar**.

Ao marcar um Pedido de Compra, o seu Saldo em aberto será apresentado na parte inferior da tela, na área **Saldo com Fornecedor**. Para concluir, clique em **Gerar Saldos**.

> Além da possibilidade de fazer a conversão pelo Configurador, é possível fazê-la também pelo próprio módulo de **Nota Fiscal de Entrada**. Na entrada de uma NF-e, ao informar o fornecedor ou trocar a empresa financeira, é exibida uma mensagem informando que há pagamentos antecipados que não foram convertidos em saldo.

### Situação dos pedidos de compras pendentes de conversão

- Somente serão listados os pedidos de compra que não estiverem nos status Cancelado, Totalmente atendido e Atendido com corte.
- Não serão considerados títulos que possuam data de exclusão ou não possuírem baixas.
- Caso haja uma entrada parcial dos produtos de um pedido de compra, mas o valor do pagamento antecipado já tenha sido utilizado, ele será exibido.
- Caso haja registro de saldo contra o fornecedor para o título (Tabela Adiantamento, campo IdAPagar), ele não será exibido, pois entende-se que já está sendo efetuado pela rotina nova.
- Se não houver documentos de entrada para o pedido de compra com pagamento antecipado, será considerado que o Saldo em aberto é igual ao Valor total pago.
- Caso haja documento de entrada para o pedido de compra, todos os registros serão agrupados em uma única linha.
- O documento vinculado ao pedido de compras pode ser tanto um **documento liberado** (tabela Documento) ou **um rascunho** (tabela LoteDoc).
- Nos casos em que seja possível calcular automaticamente o saldo, eles serão carregados automaticamente. Caso contrário o valor virá como 0 (zero) e estará disponível para edição manual.

---

## Desvincular pagamento antecipado

É possível desvincular um pagamento antecipado de duas formas:

1. Pela tela de **Seleção de pagamentos antecipados** (no módulo Nota Fiscal de Entrada).
2. A partir da tela principal do módulo **Pedido de Compras** (a partir da versão 10.00.05.00).

### Configuração de permissão

No **Cadastro de usuários**, configure quem terá permissão para realizar o procedimento:

**Cadastro de usuários > Perfil do usuário > Acessos gerais > Assinatura eletrônica > Pagamento antecipado > "Desvincular pagamento antecipado do pedido"**

### Procedimento

1. Abra o módulo Pedido de Compras.
2. Selecione o pedido.
3. Clique na opção **"Desvincular pagamento antecipado"**.
4. O sistema apresentará uma mensagem de confirmação e informará que o procedimento é **irreversível**.

Caso o usuário logado não tenha permissão, o sistema apresentará a tela de login para informar um usuário com a permissão necessária. Caso tenha permissão, o sistema apresentará direto a mensagem de que o pagamento antecipado foi desvinculado.

É possível verificar essa movimentação na **auditoria de sistemas**.

---

## Relatório pelo BiFinanceiro

A partir da versão **09.07.09.00** foi criado um novo cenário no BI Financeiro para gerar relatórios com os pagamentos antecipados.

### Habilitando a permissão

1. Acesse o módulo **Cadastro de Usuários**.
2. Vá na opção **usuários ou perfil de usuários**.
3. Vá na opção **BIfinanceiro / Acessos / Área de pesquisa** e habilite ou desabilite a opção **"Pagamento antecipado"** para o usuário em questão.

### Gerando o relatório

1. Acesse o módulo **BiFinanceiro / Novo**.
2. Na opção **área de pesquisa** escolha a opção **"pagamento antecipado"**.
3. Faça os filtros desejados e clique em **filtrar**.
4. Salve o cenário para uma próxima pesquisa.
