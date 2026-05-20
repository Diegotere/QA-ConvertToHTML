# Liberação de Pedidos de Venda — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Conhecendo o módulo](#conhecendo-o-módulo)
- [Rotina](#rotina)

---

## Introdução

A rotina de liberação de pedidos oferece um controle maior sobre os pedidos de venda em aberto, fazendo com que o pedido passe por uma análise pelo setor financeiro e comercial, para então ser liberado.

O **setor financeiro** fará a análise da situação financeira do cliente como, por exemplo: caso haja algum título em atraso, o pedido poderá ser restringido pelo setor financeiro.

O **setor comercial** verifica o limite de vendas para o cliente, podendo ainda incluir uma restrição no pedido de venda, caso o valor correspondente ao pedido seja superior ao liberado para o cliente.

---

## Configurações

### Configurador Bimer

Para que um pedido seja liberado também pelo setor comercial é necessário realizar uma configuração em **Configurador Bimer / Faturamento / Opções / Pedido de Venda / Liberação**, marcando a opção **"Trabalha com liberação de pedidos pelo setor comercial"**.

> *[Imagem: Tela de configurações de liberação de pedidos no Configurador Bimer]*

Segue abaixo a descrição de cada uma das configurações desta tela:

- **Criar o pedido já liberado caso a venda não tenha sido bloqueada e a análise de risco de lucratividade não esteja baixa ou muito baixa:** Com esta opção marcada, ao criar um pedido de venda, o sistema somente criará o pedido com o status `<L> Liberado`, caso a(s) forma(s) de pagamento utilizada(s) esteja(m) informada(s) em **FatPDVCfg / Ferramentas / Opções / Pré-pedido / Pedido de venda / Financeiro**. Com esta opção desmarcada, ao criar um pedido de venda, o sistema criará o pedido com o status `<A> Aguardando`.

- **Considerar que houve bloqueio para liberação, caso a tela de análise seja mostrada com a opção de 'Continuar':** Com esta opção marcada, o sistema considerará que houve bloqueio de venda e o pedido será criado com status `<A> Aguardando`. Com esta opção desmarcada, o sistema considerará que não houve bloqueio e o pedido será criado com status `<L> Liberado`.

- **Trabalha com liberação de pedidos pelo setor comercial:** Com esta opção marcada, habilita o botão **"Liberar pedido de venda pelo setor comercial"** e libera o pedido após a liberação do setor comercial e financeiro. Com esta opção desmarcada, realiza a liberação somente pelo setor financeiro.

- **Liberar automaticamente o setor financeiro pelo setor comercial caso não haja bloqueio:** Com esta opção marcada, no módulo "Liberação de pedidos", ao realizar a liberação pelo setor comercial (em lote ou individual), o sistema liberará o setor financeiro caso não haja nenhum dos seguintes: título vencido, limite de crédito, prazo médio, característica de bloqueio de venda. Funciona em conjunto com a configuração de bloqueio de venda em **Configurador Bimer / Faturamento / Opções / Venda / Bloqueio**.

- **Verificar se há bloqueio em todas as empresas:** Com esta opção marcada, o sistema realizará a validação considerando todas as empresas. Com esta opção desmarcada, o sistema realizará a validação apenas da empresa do pedido de venda.

- **Permite alterar empresas na liberação de pedidos de venda:** Com esta opção marcada, será habilitado um botão na tela de preenchimento de motivo de liberação para permitir alterar as empresas, caso o usuário tenha permissão.

- **O sistema Pedido de venda poderá liberar pedidos que possuam itens em estoque distribuído:** Com esta opção marcada, o sistema **FatPedido** passará a filtrar também os pedidos que possuem itens com estoque distribuído na rotina de liberação de pedidos.

- **Característica de pessoa que será usada para bloquear a liberação do pedido:** Permite selecionar uma característica de clientes que terão seus pedidos de venda bloqueados no momento da liberação. Para prosseguir com a liberação, será necessária a autorização de um usuário com acesso à rotina (ex.: Supervisor).

- **Característica de pessoa de repasse, que será usada para bloquear a liberação do pedido:** Ao informar a característica de pessoa de repasse neste campo e criar um pedido de venda que tenha esta pessoa de repasse, o pedido não será criado liberado mesmo que a configuração citada esteja marcada.

- **Transformar/imprimir o pedido de venda liberado automaticamente em nota fiscal / ordem de entrega:** Permite selecionar um ou mais usuários ativos no sistema para que, no momento em que o(s) usuário(s) selecionado(s) transformar ou imprimir o pedido de venda liberado, automaticamente o pedido de venda seja transformado em nota fiscal ou ordem de entrega.

### Cadastro de usuários

Assim como nas outras rotinas do Bimer, é necessário conceder algumas permissões para os usuários trabalharem na rotina de liberação dos pedidos. Para isso, acesse o perfil individual ou o perfil vinculado ao usuário e insira o sistema **Liberação de pedidos**. Após, forneça os **Acessos** necessários, como a liberação de pedidos e a liberação comercial.

> *[Imagem: Tela de cadastro de usuários com permissões de liberação de pedidos]*

Nos sistemas **Liberação de Pedidos** e **Pedido de Vendas** há o Acesso chamado: **Liberar pedido de venda sem cálculo de ICMS vinculado aos itens**.

Sem esta permissão, o usuário não consegue liberar o pedido de vendas nas seguintes condições:

1. Produto sem cálculo de ICMS no **Cadastro de Produtos / Aba Impostos**.
2. Produto com cálculo de ICMS no Cadastro de Produtos, mas o tributo não está sendo calculado pois falta a linha de origem e destino para a situação da venda.

> **Dica:** Se a empresa desejar impedir não apenas a liberação, mas até o cadastro de itens nos pedidos que tenham deficiência na tributação de ICMS, marque a opção **Bloquear o cadastramento do item caso não encontre o cálculo de ICMS (UFs/CFOP)** em: **Configurador Bimer / Faturamento / Opções / Venda / Geral**.

---

## Conhecendo o módulo

Ao acessar o módulo **FatLiberaPedido** na parte superior são apresentados os seguintes ícones:

- **Liberar (financeiro):** Libera o pedido de venda pelo setor financeiro. Esta liberação é soberana, ou seja, caso o pedido seja liberado primeiramente pelo setor financeiro já constará no módulo Pedido de Venda como Liberado, dispensando a liberação pelo setor comercial.

- **Liberar (comercial):** Libera o pedido de venda pelo setor comercial, sendo necessário realizar posteriormente a liberação pelo setor financeiro.

- **Liberar em lote (comercial):** Possibilita que a liberação do comercial seja de forma otimizada fazendo com que todos os pedidos listados sejam liberados em uma só vez.

- **Cancelar liberação:** Permite que um pedido que já tenha sido liberado retorne ao status de aberto.

- **Restringir (comercial):** Poderá incluir uma restrição pelo setor comercial. Diferente do cancelamento, caso seja feita uma restrição pelo setor comercial, o setor financeiro poderá liberar o pedido.

- **Restringir (financeiro):** Poderá incluir uma restrição no pedido de venda pelo setor financeiro. Caso tenha sido restringido pelo setor financeiro, somente o setor financeiro poderá liberar o pedido.

- **Cancelar pedidos:** Esta opção permite que o pedido de venda seja cancelado pelo módulo FatLiberaPedido, caso o usuário tenha acesso.

- **Atualizar:** Atualiza a listagem de pedidos para serem liberados de acordo com os pedidos novos criados no pedido de venda.

- **Filtro de pedidos:** Permite realizar filtro específico de pedidos. Ao clicar neste ícone é apresentada uma janela onde há:
  - **Empresa:** Inserir de qual empresa deseja-se visualizar os pedidos.
  - **UF:** Possibilita incluir a UF dos pedidos para listagem.
  - **Característica do cliente:** Permite que seja incluída uma característica de pessoa.
  - **Filtrar pedidos com mais de X dias desde a sua criação sem ter sido liberado:** Possibilita configurar o tempo em que deseja-se visualizar dos pedidos que ainda não foram liberados.
  - **Representantes/funcionários:** Permite incluir os representantes ou funcionários que realizaram o pedido de venda.

- **Seleção de pedidos:** Utilizado na liberação de forma otimizada. A diferença deste ícone com o "Liberar pedidos em lote" é que neste é necessário incluir quais pedidos deseja que sejam liberados pelo setor comercial ou financeiro.

- **Totais dos pedidos:** Informa a quantidade, valor, peso bruto e peso líquido total de todos os produtos somados.

- **Motivos bloqueio:** Mostra alguns motivos de bloqueio como títulos vencidos, limite de crédito, prazo médio e característica.

- **Análise cadastral:** Faz uma análise do cliente do pedido de venda, trazendo informações importantes como faturamento, crédito, financeiro, curva ABC e estatística de faturamento e inadimplência.

- **Parecer:** Permite que seja adicionado um parecer ao pedido. Ao incluir um parecer a coluna **CR ATUAL** é atualizada, dessa forma é possível indicar se o pedido está em andamento ou se encontra encerrado.

> **Observação:** Esta opção será habilitada se no **Configurador Bimer / Faturamento / Opções / aba Pedido de Venda / aba Centro de responsabilidade** estiver marcada a opção: **"O pedido será acompanhado com centro de responsabilidade"** e informado o tipo de atendimento e o centro de responsabilidade de encerramento.

- **Histórico:** Será apresentado o histórico dos pareceres inseridos anteriormente ao pedido.

- **Imprimir relatório:** Gera relatórios sobre os pedidos. Para habilitá-lo basta clicar sobre um pedido ao lado esquerdo da tela.

- **Imprimir (Delivery):** Realiza a impressão manual dos pedidos gerados no Delivery (FatDelivery).

> **Observação:** Para que o recurso **Imprimir (Delivery)** seja habilitado, é imprescindível que a empresa que gerou o pedido de venda esteja configurada para trabalhar com Delivery no **Configurador Bimer / Geral / Empresas**, aba **Estoque / Controle de produção / Empresa delivery**.

- **Configurações:** É onde ficam as configurações do módulo.

---

## Rotina

### Liberação setor comercial

Para liberar o pedido pelo setor comercial, basta selecionar o pedido na listagem e clicar no ícone **Libera (comercial)**. Será apresentada uma tela para inclusão de **"Motivo da liberação"**. Ao informar o motivo, o pedido constará como liberado pelo setor comercial, porém ainda constará no módulo de liberação de pedidos para que possa ser liberado pelo setor financeiro.

Ao concluir a liberação pelo setor comercial, o sistema apresenta uma mensagem informando que deverá ser feita a análise no setor financeiro. O pedido liberado somente pelo setor comercial constará no módulo Pedido de Venda ainda em aberto.

> *[Imagem: Tela de liberação pelo setor comercial com campo de motivo]*

### Liberação pelo setor financeiro

Para realizar a liberação do pedido pelo setor financeiro, selecione o pedido na tela de listagem e clique sobre o ícone **Liberar (financeiro)**. Será apresentada uma tela para informar o motivo, como na liberação pelo setor comercial. Após informar o motivo e clicar em **"OK"**, o pedido de venda sairá da tela de listagem do módulo Liberação de Pedidos e será apresentado no módulo Pedido de Venda como **"Liberado"**.

No módulo **Pedido de venda** é possível verificar informações sobre a liberação como: usuário, setor, a data e o motivo da liberação do pedido. Para isso, é necessário acessar o módulo Pedido de Venda, abrir o pedido que foi liberado e clicar em **Mensagens**. Nas setas ao lado direito é possível verificar se houve liberação por outro setor.
