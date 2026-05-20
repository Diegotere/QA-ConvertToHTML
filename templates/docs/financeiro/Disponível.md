# Disponível — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Tipo de Conciliação Bancária](#tipo-de-conciliação-bancária)
  - [Diretório de Importação do Extrato](#diretório-de-importação-do-extrato)
  - [Integração com o Disponível](#integração-com-o-disponível)
- [Funcionamento do Disponível](#funcionamento-do-disponível)
  - [Lançamento Manual](#lançamento-manual)
  - [Localização](#localização)
  - [Excluir Lançamento](#excluir-lançamento)
  - [Editar Lançamentos](#editar-lançamentos)
- [Conciliação Manual](#conciliação-manual)
  - [Conciliação Múltipla Manual](#conciliação-múltipla-manual)
- [Legendas](#legendas)
- [Ferramentas — Lançamento de Saldo no Banco](#ferramentas--lançamento-de-saldo-no-banco)
- [Consultas e Relatórios](#consultas-e-relatórios)
- [Transferência](#transferência)
- [Ferramentas — Realinhamento de Saldos](#ferramentas--realinhamento-de-saldos)
- [Conciliação Bancária — Devolução de Cheque](#conciliação-bancária--devolução-de-cheque)
- [Ferramentas — Gráfico](#ferramentas--gráfico)
- [Ferramentas — Opções](#ferramentas--opções)

---

## Introdução

Com o módulo **Disponível** é possível comparar as movimentações existentes no banco com as registradas no sistema Bimer. A conferência pode ser realizada de forma **manual** ou **automática** através da importação do extrato bancário emitido pelo banco.

Além disso, o Disponível pode ser utilizado para controle interno das reservas financeiras armazenadas na empresa (normalmente em dinheiro), utilizadas para pequenas despesas do dia a dia.

---

## Configurações

### Tipo de Conciliação Bancária

Caminho: **Configurador do Bimer >> Financeiro >> Informações bancárias >> Contas bancárias**

Clique sobre a empresa para expandir as contas cadastradas e selecione a conta. Na aba **"Dados da conta-corrente"**, selecione o tipo de conciliação:

- **Automática** — As comparações bancárias são efetuadas automaticamente a partir da importação do extrato bancário, por meio dos sincronismos que identificam os lançamentos correspondentes.
- **Manual** — As comparações são feitas pelo usuário, que identifica o valor existente no banco com o informado no sistema e insere a data da compensação.

**Utilizar Nr. Documento na importação do extrato bancário:** Habilitada quando se usa conciliação automática. Ao marcar, o sistema valida se um lançamento está duplicado usando os campos `DTPOSTED`, `TRNAMT`, `CHKNUM` e `MEMO`. Sem a marcação, usa apenas `DTPOSTED`, `TRNAMT` e `MEMO`.

> **Atenção:** Se existirem importações realizadas no sistema, ao alterar essa configuração, lançamentos podem ser excluídos. Realize backup antes de marcar.

**Data de início da conciliação automática:** Selecione a data para início da conciliação automática. Não será possível importar lançamentos com data inferior a esta.

**Data fechamento da conta:** Impede movimentações anteriores a essa data.

**Data do último lançamento importado:** Registra a data do último lançamento importado no extrato bancário. Importações anteriores a essa data podem desconciliar movimentos realizados.

### Diretório de Importação do Extrato

O diretório de importação do extrato bancário pode ser inserido no cadastro do banco ou dentro do próprio Disponível.

Caminho para inserir no banco: **Configurador do Bimer >> Financeiro >> Informações bancárias >> Bancos >> aba "Disponível"**

### Integração com o Disponível

Caminho: **Configurador do Bimer >> Financeiro >> Opções >> Disponível**

Marque as opções de integração para que as baixas de títulos a pagar e a receber gerem movimentos no Disponível.

> **Atenção:** Caso essas configurações não sejam marcadas, nenhuma baixa de títulos a pagar ou a receber gerará movimento no Disponível.

Nessa mesma tela são habilitados os campos **"Campos disponíveis para o histórico das movimentações a pagar"** e **"Campos disponíveis para o histórico das movimentações a receber"**, onde é possível selecionar as variáveis que comporão os históricos das movimentações.

**Integração com Disponível para baixas utilizando a CONTA CAIXA:**

- **Data da baixa** — Data informada no momento da baixa.
- **Data do processamento da baixa** — Data atual do momento da baixa, gravada internamente pelo sistema (não pode ser alterada pelo usuário).

**Outras configurações:**

- **Atualizar conciliação automática após concluir a rotina de conciliar manualmente** — Quando marcada, o sistema atualiza as grids "Movimentos" e "Extrato bancário" toda vez que a rotina de conciliar manualmente for concluída. Quando desmarcada, atualiza apenas quando o usuário clicar em **Atualizar**.

- **Atualizar saldo aplicação automática ao realizar o realinhamento de saldo** — Quando marcada, ao clicar em "Realinhamento de saldos" ou ao incluir um "Lançamento de saldo no banco", o realinhamento do "Saldo aplicação" é realizado conforme os movimentos marcados como "Lançamento para conta de aplicação automática".

- **Limite de dias para importação de extrato bancário** — Verifica se o último lançamento sendo importado é inferior ao último lançamento já existente no Disponível. Se a diferença em dias for inferior ao limite configurado, o sistema exibe uma mensagem pedindo confirmação.

- **Usuários para e-mail** — Ao selecionar usuários, o botão "E-mail" é habilitado para envio de notificações ao executar a rotina.

---

## Funcionamento do Disponível

Selecione a **empresa** e a **conta bancária** desejadas.

**Saldo de abertura:**

Para iniciar a utilização do módulo, lance o saldo de abertura da conta.

Caminho: **Ferramentas >> Saldo de abertura**

Informe a data e o saldo da conta na data em que será iniciado o controle das movimentações bancárias.

> **Observação:** A opção de saldo de abertura só fica habilitada se o saldo ainda não tiver sido informado para a conta selecionada. Após o lançamento, o campo vira **"Editar saldo de abertura"** — o usuário precisará ter permissão no cadastro de usuários para realizar tal edição.

### Lançamento Manual

Além dos lançamentos automáticos gerados pelas baixas de títulos, é possível lançar movimentos manualmente (entrada ou saída).

Na parte superior, clique em **"Novo"** e preencha os campos:

- **Data de cadastro** — Preenchida automaticamente com a data atual.
- **Data do movimento** — Data em que ocorreu a movimentação na conta.
- **Data de conciliação** — Habilitada apenas se a conta estiver marcada como conciliação manual.
- **Valor de entrada/saída** — Valor do movimento. Clique no ícone ao lado para abrir a tela de **Desmembramento de valor por natureza de lançamento**.
- **Imprimir recibo** — Marque para imprimir o recibo da movimentação. Também pode ser impresso na tela principal em **Ferramentas >> Impressão de recibo**.
- **Pagamento antecipado** — Permite cadastrar título a pagar de pagamento antecipado.
- **Natureza de lançamento** — Natureza do movimento.
- **Centro de custo** — Habilitado quando a natureza de lançamento estiver configurada para trabalhar com controle de centro de custo.
- **Número do título** — Preenchido automaticamente, mas editável.
- **Tipo de movimento de cobrança** — Habilitado quando informado valor de entrada.
- **Pessoa** — Selecione a pessoa do movimento (fornecedor ou cliente).
- **Forma de pagamento** — Forma de pagamento do lançamento.
- **Situação administrativa** — Para identificação dos títulos e uso no módulo Telecobrança.
- **Carta de crédito** — Para gerar carta de crédito ou repasse.
- **Histórico** — Histórico do título referente à cobrança ou pagamento.

Clique em **"Ok"** para confirmar.

> **Observação:** Ao criar o lançamento manual no Disponível, o sistema cria um título a pagar ou a receber já baixado. No cadastro da natureza de lançamento é possível configurar para que os movimentos cadastrados com aquela natureza não criem um título a pagar ou a receber.

### Localização

Após criar o movimento, visualize na página principal ou clique em **"Localizar"** na parte superior da tela. Defina os dados para filtro (tipo de lançamento, período, data do movimento, histórico, valor de saída, etc.).

### Excluir Lançamento

A exclusão é permitida quando:

- O movimento esteja com data superior à data de fechamento contábil da empresa.
- O movimento não tenha sido gerado por outro módulo do financeiro.
- O movimento não tenha sido gerado através de aplicação automática.
- O movimento ainda não tenha sido conciliado.

Para excluir, selecione o lançamento e clique em **"Excluir"**.

### Editar Lançamentos

É possível editar um lançamento desde que ele não tenha sido lançado no financeiro, criado através da aplicação automática ou esteja conciliado.

Ao editar, é possível **trocar a conta**: clique no botão **"Trocar conta"**, informe a senha do usuário com acesso ao recurso e preencha a nova conta de movimento.

---

## Conciliação Manual

A conciliação é a verificação dos valores existentes nas contas bancárias com o que está informado internamente no Disponível.

Com o extrato bancário em mãos (PDF ou impresso), identifique a **data da compensação** e o **valor**. Em seguida, acesse o Disponível e localize o lançamento. Há duas formas de conciliar:

1. Clique com o botão direito do mouse sobre o movimento e selecione **"Conciliação"**. Insira a data da conciliação (data em que ocorreu a movimentação bancária).
2. Edite o lançamento e preencha o campo **"Data da conciliação"**. Clique em **"Ok"** para gravar.

Após conciliados, os movimentos são apresentados na grid com a cor **preta**.

### Conciliação Múltipla Manual

Para conciliar mais de um lançamento de uma vez:

Caminho: **aba "Conciliação bancária"**

1. Defina o filtro, insira a data da conciliação e clique em **"Atualizar filtro"**.
2. Selecione os movimentos que serão conciliados e clique em **"Conciliar"**.

Nesta mesma tela, caso o usuário tenha esquecido de lançar algum movimento que precisa ser conciliado, é possível lançá-lo clicando no botão de adição no quadro de **"Movimentos"**.

---

## Legendas

Para identificar o que corresponde cada cor ou marcador, na aba **"Principal"** clique em **"Legenda"**.

**Marcadores:**

- **Extrato confere** — O valor existente no banco está de acordo com o saldo do Disponível.
- **Extrato não confere** — O valor lançado no banco não está de acordo com as movimentações efetuadas. Verifique se algum movimento não foi lançado, se os valores estão corretos e se o saldo do dia foi lançado em **Ferramentas >> Lançamento de saldo no banco**.
- **Lançamento de aplicação automática** — Quando se tratar de um movimento de aplicação automática.

**Cores do texto:**

- **Preto** — Lançamento conciliado (data da conciliação já inserida).
- **Rosa** — Lançamento temporário (baixa manual com data futura aguardando liberação do lote, ou lançamento do extrato ainda não confirmado pelo banco).
- **Verde** — Lançamento pendente (não conciliado, campo "Data conciliação" vazio).
- **Lançamento Futuro** — Movimentos com data de movimento superior à data final informada no período.
- **Lançamento com data de conciliação superior ao filtro** — Movimentos com data de conciliação informada, mas superior à data final do período do filtro.

---

## Ferramentas — Lançamento de Saldo no Banco

Por meio deste recurso, o usuário informa o saldo da conta bancária nos dias, permitindo que o sistema identifique se o saldo confere ou não com o banco.

Para inserir, clique no sinal de **"+"** e informe a data e o valor disponível na conta.

---

## Consultas e Relatórios

Na aba principal há consultas e relatórios para análise das movimentações:

- **Saldo disponível** — Exibe os saldos das contas das empresas cadastradas, com valores de entrada, saída, data da última conciliação e indicação se o extrato confere ou não.
- **Linha do tempo** — Exibe as movimentações que originaram ou são descendentes do lançamento no Disponível.
- **Demonstrativo de saldo de contas** — Visualiza o saldo das contas de acordo com o saldo da empresa e o saldo conciliado.
- **Movimento** — Visualiza os movimentos (pendentes, conciliados e futuros). Informe o período, defina quais dados deseja (contas sem movimento, detalhar movimentos com origem em vários títulos, gerar relatório sem quebra, etc.). Selecione a empresa e as contas desejadas e clique em **"Visualizar"**.
- **Extrato de pessoa** — Exibe todas as pessoas vinculadas nas movimentações e os valores de entrada e saída por conta.
- **Conferência por data de conciliação** — Demonstra os valores conciliados com o saldo atual da conta e todas as movimentações lançadas, filtrados pela data de conciliação.
- **Conferência por data de movimento** — Semelhante ao anterior, mas filtrado pela data das movimentações. Permite visualizar valores de entrada, saída e totais dos dias.
- **Demonstrativo por natureza** — Demonstra os valores separados pela natureza de lançamento vinculada ao movimento. Defina os filtros (tipo de movimentos, conciliados, pendentes, etc.).

---

## Transferência

Para transferir valores de uma conta para outra:

Caminho: **aba "Principal" >> "Transferência"**

Duas opções:

- **Novo** — Transferência manual. Informe a conta de destino, data da movimentação, valor, natureza de lançamento, forma de pagamento, histórico, etc. Clique em **"Ok"** para transferir e imprima o comprovante se desejar.
- **Importar** — Transferências por meio de arquivo importado (disponível a partir da versão **9.07.12.02**). Preencha:
  - **Arquivo para importação de dados** — Diretório do arquivo com os dados dos movimentos de transferências.
  - **Especificação de importação** — Diretório do arquivo SMI com as configurações para importação.
  - **Renomear o arquivo após a importação** — Após importação, a extensão do arquivo é alterada para **"OK"**.

> **Observação:** O sistema gerará um movimento de transferência para a conta de origem e outro para a conta de destino. Os centros de custos serão inseridos no movimento de entrada (conta de destino) e saída (conta de origem) a partir do template de centro de custo principal vinculado à empresa da conta e natureza de lançamento.

É possível editar uma transferência já cadastrada, desde que não esteja conciliada, clicando em **"Editar transferência"**.

---

## Ferramentas — Realinhamento de Saldos

Por meio deste recurso, a empresa pode realinhar o saldo das contas bancárias, analisando adições, exclusões, atualizações dos movimentos e controlando todas as movimentações efetuadas.

Selecione as contas bancárias desejadas clicando no sinal **"+"** e clique em **"Contas bancárias selecionadas"**.

> **Observação:** Para realinhar todas as contas, clique em **"Todas as contas bancárias"** — o usuário precisa ter autorização para isso.

---

## Conciliação Bancária — Devolução de Cheque

Através deste recurso, é possível devolver o cheque quando se tratar de conciliação manual. Selecione o movimento conciliado referente ao cheque a pagar e clique em **Devolução de cheque**.

> **Atenção:** Se o lançamento do cheque não estiver conciliado, o sistema apresentará mensagem e a devolução não será realizada.

---

## Ferramentas — Gráfico

Com este gráfico é possível acompanhar o saldo diário da empresa. Opções de visualização:

- **SN** — Entradas e saídas considerando somente os movimentos sem natureza de lançamento.
- **ST** — Entradas e saídas não considerando transferências.
- **Apenas** — Entradas e saídas considerando apenas as transferências.

O sistema compara o saldo do dia com os últimos três meses para identificar a tendência (queda, estabilidade ou aumento). No campo **"Ano"**, compara com os últimos três anos.

---

## Ferramentas — Opções

Na área de opções é possível realizar configurações e definições para uso no módulo, como:

- Preencher a natureza de lançamento, tipo de movimento de cobrança e pessoa para uso nas devoluções manuais dos cheques.
- Obrigar preenchimento do tipo de cobrança, nome da pessoa, forma de pagamento, etc.

O que for configurado nessa parte será levado automaticamente de acordo com o tipo de lançamento.

> **Observação:** **Procedimento especial** — Serve para configurar uma rotina de conciliação com dias distintos, ou seja, quando em movimentos o lançamento tem uma data e no extrato tem outra data.
