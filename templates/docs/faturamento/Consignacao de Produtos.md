# Consignação de Produtos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [O Que é Consignação?](#o-que-é-consignação)
- [Fluxo da Rotina](#fluxo-da-rotina)
- [Requisitos](#requisitos)
- [Configurações](#configurações)
  - [Opções do Faturamento](#opções-do-faturamento)
  - [Opções do Financeiro](#opções-do-financeiro)
  - [Opções do Estoque](#opções-do-estoque)
  - [Operações](#operações)
  - [Cliente](#cliente)
- [Criação da Consignação](#criação-da-consignação)
  - [Pré-pedido](#pré-pedido)
  - [Pedido de Vendas](#pedido-de-vendas)
  - [Faturamento](#faturamento)
- [Consignação](#consignação)
  - [Prestação de Contas](#prestação-de-contas)
  - [Devolução de Itens em Consignação](#devolução-de-itens-em-consignação)
  - [Recebimento de Créditos](#recebimento-de-créditos)
  - [Conferência de Cheques](#conferência-de-cheques)
- [Relatórios](#relatórios)
- [Financeiro](#financeiro)
- [Observações da Rotina](#observações-da-rotina)

---

## O Que é Consignação?

**Consignação** é quando uma empresa (**consignador**) entrega mercadorias para determinada pessoa, como seu cliente (**consignatário**) para que sejam vendidas. As mercadorias que não forem vendidas são devolvidas ao consignador.

A consignação é realizada de acordo com um contrato de vendas que possui dados como o preço da mercadoria (documentado por nota fiscal), em que o consignatário possui um prazo para prestar contas das mercadorias que recebeu.

**Exemplo:**

A empresa **Enterprise Tech** é conhecida por lançar ótimas tecnologias em seus smartphones. Ela tem como parceiro seu cliente **Adventure**, que recebe os produtos e tenta vender no esquema de consignação. A Enterprise acabou de lançar o SM2000:

- **Enterprise Tech (consignador):** Envia 700 produtos para o cliente Adventure e combina um prazo de 30 dias para a prestação de contas.
- **Adventure (consignatário):** Recebe os produtos e após 30 dias conseguiu vender 600 produtos. Na prestação de contas o cliente Adventure paga pelos 600 itens. Os outros 100 são devolvidos para a empresa Enterprise.

### Vantagens da consignação

- Para a empresa produtora ou revendedora: é um ótimo teste para novos produtos, facilitando que produtos ganhem força no mercado.
- Para novas empresas no mercado: pode ser usada como networking, onde o consignatário não gastará comprando mercadorias de um fornecedor desconhecido.
- Para a empresa que adquire o produto: boa vantagem para o financeiro, pois ela não precisa pagar por produtos que não vendeu ou que ficaram encalhados no estoque.

> **Importante:** A rotina de consignação no Bimer foi criada para a empresa **consignadora**.

---

## Fluxo da Rotina

> *[Imagem: fluxograma da rotina de consignação no Bimer, mostrando os módulos envolvidos: Pré-pedido → Pedido de Vendas → Faturamento → Consignação → Prestação de Contas / Devolução]*

---

## Requisitos

Para iniciar a utilização do módulo Consignação de produtos, são necessários alguns requisitos:

**1. Setores configurados:**

A empresa precisa estar configurada para trabalhar com setores. É necessário cadastrar pelo menos dois setores:
- **Setor principal** (estoque físico)
- **Setor de consignação** (controla os produtos que estão com os vendedores/clientes para serem vendidos)

Os setores deverão possuir a marcação **"Este setor controla estoque"** e o setor de consignação deverá ter vínculo com outro setor que poderá atender a requisições.

Lembretes:
- Cadastro dos setores: **Configurador / Geral / Setores**
- Após o cadastro, é necessário dar permissão aos usuários que utilizarão esses setores.
- Apenas um setor será utilizado para controlar os produtos em consignação (setor fictício para controle interno).

**2. Característica analítica para consignação:**

Crie uma característica analítica para as pessoas que poderão comprar em consignação. Caminho: **Configurador / Geral / Características da pessoa**. Após criar, vincule-a ao cadastro dos clientes.

> **Dica!** Você poderá vincular a característica às pessoas por meio do **BIPessoa**, selecionando o recurso **Seleção de Pessoas / Características / Adicionar características para as pessoas selecionadas**.

**3. Vínculo de produtos ao setor de consignação:**

Os produtos que serão consignados deverão estar vinculados a um setor que controla consignação. Este vínculo pode ser feito:
- Diretamente no **Cadastro do produto / aba Empresas / campo Setores**
- Pelo **Configurador / Estoque / Manutenção de Produtos / Vincular/desvincular setor com produto**

---

## Configurações

### Opções do Faturamento

Caminho: **Configurador / Faturamento / Opções / Venda / Consignação**

- **Trabalhar com consignação de produtos** — configuração fundamental para que o sistema possibilite fazer vendas em consignação. Com essa opção marcada, é possível verificar os clientes/vendedores que estão há um determinado período sem prestar contas.
- **Nr. de dias para prestação de contas de itens em consignação** — configuração padrão para o número de dias máximo em que o cliente/vendedor deverá devolver os produtos que não vendeu e pagar ou negociar pelos que comercializou.
  - Ao criar um pré-pedido, o usuário é avisado sobre o atraso na prestação de contas de acordo com o valor deste campo.
- **Filtrar itens em consignação por empresa** — (disponível a partir da versão 10.00.07.00) com a opção marcada, o sistema utilizará a empresa como filtro e serão apresentadas apenas as consignações lançadas para a empresa em questão.
- **Prazo padrão para consignação** — utilizado no momento da venda consignada; o sistema automaticamente preencherá o campo prazo com essa informação (exceto quando o cliente possuir um prazo padrão vinculado ao seu cadastro).
  - O recomendável é usar um prazo com uma única parcela, de acordo com a data combinada para a prestação de contas.
- **Característica de pessoa para consignação** — só poderão ser executadas as vendas consignadas para pessoas que possuírem vínculo com ela.
- **Layout para relatório de devolução de itens em consignação** — informe o RTM que deverá ser utilizado na emissão de relatórios de devolução.
- **Grid Setores para consignação** — informe o setor responsável por controlar os itens que estão em consignação.

**Aba Operação / Nota Fiscal:** Informe os tipos de documentos que serão utilizados para notas fiscais.

**Aba Operação / Ordem de Entrega:** Informe os tipos de documentos que serão utilizados para Ordens de Entrega.

**Aba Dados gerais / Obrigatoriedade:** A opção **"Será obrigatório informar pessoa de repasse"** deverá estar **desmarcada**, porque a consignação não é uma venda até que seja feita a prestação de contas.

### Opções do Financeiro

Caminho: **Configurador / Financeiro / Opções / Complemento**

Informe a **natureza de lançamento** que será utilizada para títulos a partir da consignação.

### Opções do Estoque

Caminho: **Configurador / Estoque / Opções / Movimento / Opções adicionais**

Insira o **setor de estoque principal** para a empresa que fará as consignações. Isto faz com que a empresa trabalhe com movimentação de setores no Bimer.

---

### Operações

A rotina exige a utilização de algumas operações específicas:

1. **Operação para documento de saída – nota fiscal:** Utilizada na emissão da nota fiscal de saída consignada.
   - Tipo de movimento: **Saída** ou **Venda**; marcar **Consignação** na aba Dados; atualizar estoque e financeiro; tipo de documento: NF-e.

2. **Operação para documento de saída – ordem de entrega:** Utilizada na emissão da ordem de entrega de saída consignada.
   - Tipo de movimento: **Saída** ou **Venda**; marcar **Consignação** na aba Dados; atualizar estoque e financeiro; tipo de documento: Ordem de Entrega.

3. **Operação para devolução de itens em consignação – nota fiscal:** Utilizada quando o cliente/vendedor devolver os itens não comercializados e quando prestar contas do que vendeu.
   - Tipo: **Devolução de venda**; não marcar consignação; não atualizar estoque; não atualizar financeiro; tipo de documento: nota fiscal.

4. **Operação para devolução de itens em consignação – ordem de entrega:** Mesma finalidade da operação anterior, mas com tipo de documento para OE.
   - Tipo: **Devolução de venda**; não marcar consignação; não atualizar estoque; não atualizar financeiro; tipo de documento: Ordem de Entrega.

5. **Operação para devolução de itens em consignação – nota fiscal de entrada:** Serve para registrar a nota de devolução emitida pelo cliente (via módulo Nota Fiscal de Entrada).
   - Tipo: **Devolução - Venda**; não marcar consignação; não atualizar estoque nem financeiro; tipo de documento: NF-e ou OE.

6. **Operação para o documento de transferência para itens em consignação:** Utilizada para efetuar transferências entre setores (não entre empresas). Transfere os itens do setor de Consignação de volta ao estoque principal.
   - Tipo: **Transferência – Venda** ou **Transferência – Saída**; não marcar Consignação; atualizar somente estoque; tipo de documento: interno (não NF-e nem OE).

7. **Operação para nota fiscal para prestação de contas:** Utilizada na emissão da nota fiscal referente à prestação de contas (nota de venda).
   - Tipo: **Venda**; atualizar somente estoque; tipo de documento: nota fiscal.

8. **Operação para ordem de entrega para prestação de contas:** Utilizada na emissão da ordem de entrega referente à prestação de contas.
   - Tipo: **Venda**; atualizar somente estoque; tipo de documento: ordem de entrega.

> **Dica!** Para a geração de nota fiscal, a legislação determina CFOPs específicos. Normalmente são utilizados os códigos com o final **917** (entradas e saídas) e **918** (devolução). A escolha do CFOP é totalmente ligada à consultoria contábil da empresa.

> **Importante:** Após o cadastro de todas as operações, é necessário informá-las em **Configurador / Faturamento / Opções / Operação / Consignação**. Ao lado de cada operação há uma hint **(?)** explicando como cada uma deverá ser configurada.

---

### Cliente

Caminho: **Módulo Pessoa / Clientes / Crediário / Prazo médio**

Neste campo você pode informar a quantidade de dias que o vendedor terá para realizar a prestação de contas das vendas em consignação.

> **Nota:** O prazo informado no cadastro de clientes **sobrepõe** o prazo padrão presente em **Configurador / Faturamento / Opções / Venda / Consignação**.

Ainda no cadastro de Clientes, aba **Cadastro / Complementar**, o usuário poderá definir o **tipo de pré-pedido padrão**: venda ou consignação (essa configuração só será habilitada caso o cliente possua a característica de pessoa para consignação).

> **Lembrete!** As pessoas precisarão estar com a característica de consignação vinculada nos seus respectivos cadastros, aba **Características**.

---

## Criação da Consignação

### Pré-pedido

1. Acesse o **Pré-pedido** e crie um orçamento informando o cliente que possui a característica de consignação.
2. Ao pressionar Enter, escolha uma forma de pagamento a partir do prazo definido nas configurações.
3. Ao lado do cliente, selecione a opção **Consignação** (a opção Consignação só pode ser marcada para os clientes que possuem a característica de pessoa configurada para a rotina).
4. Lance os produtos consignados e **Grave**.

> *[Imagem: tela do Pré-pedido com a opção Consignação selecionada ao lado do cliente]*

### Pedido de Vendas

1. No pedido de vendas, localize o pré-pedido — as operações foram recuperadas automaticamente.
2. Na aba **"Negociação"**, aparece o prazo e a natureza de lançamento que foram configurados.
3. Após os ajustes necessários, volte na tela principal e transforme o pré-pedido em pedido de vendas.
4. Faça a **liberação do pedido de vendas**.

> **Dica!** A liberação do pedido de vendas pode ser feita no módulo **Liberação de Pedido**.

### Faturamento

1. Acesse **Faturamento / Principal / Gerar Notas a partir do pedido**, localize seu pedido de vendas e gere a nota fiscal.
2. Faça o **Envio e Autorização da NF-e**.
3. Execute o módulo **Liberador de estoque** (indicado pelo ícone verde na coluna `<I>`). Somente após isso o documento fica disponível para o módulo Consignação.

> *[Imagem: tela do Faturamento com a nota gerada e o ícone do Liberador de estoque]*

---

## Consignação

Após a nota de saída gerada, acesse o módulo **Consignação** para dar vida à rotina.

**Exemplo:**
- Consignação de 700 canetas.
- O cliente vendeu 600 canetas e precisa pagar por isso.
- As 100 canetas que não foram vendidas serão devolvidas.

### Prestação de Contas

1. Clique no botão **Prestação de contas**.
2. Informe a empresa e cliente da nota de saída dos itens consignados.
3. Localize o item consignado de acordo com o número do documento de saída.
4. Na coluna **Qt baixada**, informe a quantidade da prestação de contas (ex.: 600).
5. No quadro **Títulos a receber**, o primeiro ou único título já é selecionado automaticamente. Clique em **Avançar**.
6. Na tela de **Pagamentos**, escolha a **Forma de Pagamento** e **Valor** que será pago.
7. Na tela de **Prazo**, informe em quantas vezes o cliente pagará pelos itens.
8. Se estiver tudo ok, clique em **Concluir**.

O sistema perguntará para onde vai a nota de devolução:
- **Nota fiscal de entrada:** preencha os dados da nota gerada pelo seu cliente e acesse o módulo Nota Fiscal de Entrada para finalizar o lançamento e liberação.
- **Faturamento:** será criada uma nota de devolução no módulo relacionado, para que a própria empresa emita uma NF-e de devolução.

Além do documento de devolução, será gerado mais um documento para dar a saída efetiva dos produtos do setor da venda.

> *[Imagem: tela do Faturamento com os dois documentos gerados (devolução e venda)]*

Após isso, verifique no **Consulta de estoque** a transferência de 600 produtos referentes à nota simbólica de devolução e a saída do setor da venda.

### Devolução de Itens em Consignação

Para registrar a devolução dos itens não vendidos (ex.: 100 canetas):

1. Clique no botão **Devolução de itens em consignação**.
2. Clique em **"Novo"** e informe o consignatário que está devolvendo a mercadoria.
3. Localize o produto consignado e clique duas vezes nele ou em **Adicionar**.
4. Clique em **Editar** para ajustar a quantidade dos produtos devolvidos.
5. Clique em **"Gravar"**.
6. Localize o documento de devolução pelo botão **Localizar**.
7. Clique no botão **Finalizar**.
8. Escolha onde a nota de devolução será gerada:
   - **Nota fiscal de entrada:** faça a liberação do documento de entrada e execute o Liberador de estoque.
   - **Faturamento:** envie e autorize a NF-e e execute o Liberador de estoque.

> *[Imagem: Consulta de estoque mostrando a devolução gerando saída do setor de consignação e entrada no setor de estoque da empresa]*

**Resultado final do exemplo:**
- 100 produtos devolvidos → retornaram ao setor comum de estoque.
- 600 produtos vendidos → saída final do setor de estoque de vendas.
- Setor de consignação: saldo zerado.

### Recebimento de Créditos

Quando o cliente deseja adiantar o envio dos pagamentos para a empresa, este botão é utilizado.

**Exemplo:** O cliente ADVENTURE já vendeu 20 produtos dos 700 consignados e deseja enviar o valor antecipadamente.

1. Informe a empresa, vendedor, forma de pagamento e valor.
2. É gerada uma **carta de crédito** no Contas a Pagar (a forma de pagamento e natureza de lançamento são recuperados do **Configurador / Geral / Opções / Carta de crédito**).
3. A carta de crédito gera um **título a Receber** para dar entrada no pagamento feito de modo antecipado.

> **Nota:** No campo **Ancestral** consta o título a Receber, e no prefixo do nome do título observe a forma de pagamento usada no Consignação. O financeiro deve localizar o título a receber e realizar a baixa de modo manual.

**Utilizando a carta de crédito na Prestação de Contas:**

Na tela de Prestação de contas, após selecionar os produtos, acesse a opção **Carta de crédito**. Aqui aparecem todos os Recebimentos de créditos, separados por forma de pagamento. Selecione os desejados e o valor das Cartas de créditos será abatido do valor líquido da prestação de contas.

> **Dica!** Se o cliente possui cartas de créditos criadas pelo Contas a Pagar, Devolução e Troca, ou Disponível, estas também serão exibidas na tela de Prestação de contas.

### Conferência de Cheques

Tem a mesma aplicação do Recebimento de créditos, porém é usada quando o cliente envia um **cheque** como adiantamento.

1. Clique no botão **Conferência de cheques**.
2. Crie um cheque informando a empresa, vendedor e número de aprovação.
3. Clique em **Ok** e retorne para a tela principal.
4. Clique no botão **Libera conferência de cheques** para mudar o status para **Liberado** e permitir a utilização na tela de prestação de contas.

Após o processo:
- É gerada uma **carta de crédito** no contas a pagar.
- É gerado um **cheque no Cheque a receber** com o status de cadastrado, o qual deve ser baixado pelo setor financeiro.

Na tela de Prestação de contas, após selecionar os produtos, acesse a opção **Carta de crédito** para selecionar os cheques desejados. O valor será abatido do valor líquido da negociação.

Na tela de **Cheques** da prestação de contas, também é possível cadastrar um cheque de modo avulso clicando no botão de Adição e preenchendo os dados do cheque do cliente.

---

## Relatórios

O módulo Consignação possui 3 relatórios:

### 1 – Itens consignados

Traz os produtos de modo detalhado, observando as quantidades: consignadas, que já passaram pela prestação de contas, devolvidas e pendentes.

Parâmetros disponíveis: data, status da consignação, tipo de relatório, clientes e empresas.

> *[Imagem: exemplo de relatório de itens consignados com colunas de quantidades]*

### 2 – Extrato de consignação

Demonstra de um modo resumido as consignações. Ideal quando você precisa de um relatório rápido e objetivo.

Filtros disponíveis: período, empresa, clientes e produtos.

> *[Imagem: exemplo de extrato de consignação resumido]*

### 3 – Extrato de prestação de contas

Permite consultar de modo individual e rápido as consignações de um cliente específico, pesquisando até mesmo pelo título original que foi renegociado.

Após fazer o filtro e encontrar as prestações de contas, clique em **Layout para impressão do extrato** para criar ou selecionar um já existente. Com isso você consegue gerar o PDF, visualizar ou imprimir o relatório.

> *[Imagem: exemplo de extrato de prestação de contas com informações financeiras]*

---

## Financeiro

Após a rotina de devolução dos itens consignados, a seguinte mensagem é exibida:

> *[Imagem: mensagem informando que é necessário localizar os títulos da nota de saída de consignação e baixar o valor dos títulos renegociados de modo manual]*

No módulo **Contas a Receber**, localize o título e faça a baixa com um tipo que **não gera numerário**.

**Configuração do tipo de baixa:**

Caminho: **Configurador / Financeiro / Tipo de baixa**

Cadastre uma nova tabela com o nome da rotina, sem a marcação **"gera numerário"** e com a marcação **"Baixa final"**. Assim o título será baixado totalmente sem numerário.

**Dentro do título, você verá:**
- A primeira baixa realizada pelo módulo Consignação no momento da Prestação de contas (o tipo de baixa foi obtido do **Configurador / Financeiro / Opções / Baixas / Configurações de tipos de baixa**).
- A segunda baixa do valor restante do título que permaneceu em aberto após o processo de devolução (o tipo de baixa foi aquele informado de modo manual).

**Como o cliente pagará o valor dos produtos?**

O título foi baixado pelo Consignação após a rotina de Prestação de contas. Esta baixa ocorreu por causa de uma **Renegociação**, que gera novos títulos no contas a receber, com o número de parcelas informado no prazo da Prestação de contas. O financeiro controla os recebimentos e possíveis cobranças do consignatário com base nestes títulos.

---

## Observações da Rotina

A rotina da Consignação foi criada para iniciar pelo módulo **Pré-pedido**, mas também é possível começar pelo módulo **Pedido de Vendas**:

1. Crie um pedido de vendas com a operação de consignação definida no tópico Operações e insira o cliente que possua a característica de pessoa.
2. Na aba **Negociação**, insira o prazo definido em Configurações. Insira a **Natureza de Lançamento** da rotina de consignação dentro do prazo, nas abas Entrada e/ou Parcelas. Se isso não for feito, o prazo será adicionado sem a natureza de lançamento.
3. Após finalizar o lançamento do pedido, siga para a rotina de Faturamento para realizar a emissão e liberação da nota fiscal. Feito isso o documento já aparece no Consignação.

### Últimas Dicas

- Há uma **hierarquia para obter a Natureza de Lançamento** para a geração do título a receber. Primeiro é verificada a natureza dentro do prazo, e depois nas configurações do financeiro.
- Caso queira que o pedido seja criado com o status **Liberado**, marque a opção **"Criar o pedido já liberado caso a venda não tenha sido bloqueada e a análise de risco de lucratividade não esteja baixa ou muito baixa"** em **Configurador / Faturamento / Opções / Pedido de venda / Liberação**.
- No **CRM, aba Consignação**, é possível ver os dados da consignação do cliente filtrado.
- **Não crie no Faturamento uma venda avulsa com a operação da consignação!** A nota avulsa não aparece no Consignação; somente as notas que possuem o pedido de vendas como ancestral.
- As rotinas de **prestação de contas** e **devolução de itens** podem ser feitas de modo parcial. E uma não depende da outra como pré-requisito.
  - Exemplo: O cliente deseja devolver 50% dos itens consignados, mas ainda não vendeu nenhum produto. É só utilizar a opção de devolução de itens e informar a quantidade que será devolvida.
