# PDV — Conferência de Caixa — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
- [Utilizando o Módulo](#utilizando-o-módulo)
  - [Visão Inicial do Módulo](#visão-inicial-do-módulo)
  - [Inclusão de Conferência](#inclusão-de-conferência)
  - [Relatórios da Conferência](#relatórios-da-conferência)
  - [Ações para a Conferência](#ações-para-a-conferência)
  - [Conferência Final e Liberação](#conferência-final-e-liberação)
  - [Relatório de Terminais Movimentados](#relatório-de-terminais-movimentados)

---

## Introdução

O módulo **Conferência de Caixa** (`FatPDVConferenciaCega.exe`) serve para auxiliar nas conferências de encerramentos de caixa do PDV Alterdata, fornecendo um gerenciamento das movimentações diárias do caixa.

---

## Configurações Necessárias

Acesse **Configurador do FatPDV >> Ferramentas >> Opções >> Caixa** e marque a opção **Trabalha com conferência de caixa**, preenchendo os campos necessários para o funcionamento da rotina.

> **Atenção:** Ao marcar esta opção, as vendas feitas com forma de pagamento **dinheiro** não serão mais baixadas automaticamente na geração do título — a baixa ocorrerá somente após a liberação do lote de conferência de caixa.

Os campos a preencher são:

- **Tipo de baixa para recebimento em dinheiro** — Informe um tipo de baixa final para ser utilizada na baixa dos títulos das vendas feitas em dinheiro.
- **Tipo de baixa para pagamento de despesas e vales** — Informe um tipo de baixa final para ser utilizada na baixa dos pagamentos de despesas e vales.
- **Conta bancária para recebimentos em dinheiro conferidos** — Informe uma conta bancária para registrar as movimentações em dinheiro.
- **Conta bancária para pagamentos de despesas e vales conferidos** — Informe uma conta bancária para registrar as movimentações de despesas e vales.

---

## Utilizando o Módulo

Após um dia de trabalho no PDV, é feito o **Encerramento de Caixa** e, com isso, é impresso o **Relatório Gerencial de encerramento de caixa** pelo PDV.

> *[Imagem: exemplo de Relatório Gerencial de encerramento de caixa]*

No caso do PDV Alterdata, o encerramento de caixa somente estará disponível após a integração entre o Bimer e o PDV, realizando uma importação por meio do **Concentrador do PDV Alterdata** e, em seguida, pelo **Integrador do PDV Alterdata**.

### Visão Inicial do Módulo

Acesse o módulo **Conferência de Caixa** (`FatPDVConferenciaCega.exe`). A tela inicial apresenta:

1. **Menu de ações** — permite incluir, alterar, conferir ou excluir uma conferência de caixa. **Consultar** abre a edição (mesma função do duplo clique). **Imprimir** e **Terminais movimentados** são relatórios disponíveis no aplicativo.
2. **Filtros** — podem ser aplicados por status (**Digitadas** e/ou **Conferidas**) e por período.
3. **Grid de conferências** — apresenta as colunas: status, código, terminal, dt. conferência e usuário da conferência.
4. **Legendas** — conferências digitadas ou conferidas.

> **Dica:** A maioria dos botões do módulo Conferência de Caixa aceita navegação pelas teclas do teclado.

### Inclusão de Conferência

Clique em **Incluir (F2)**.

Na tela seguinte, busque o encerramento de caixa filtrando pelo nome do **terminal** e clicando em **Encerramentos**, ou clique diretamente em **Encerramentos** e busque pelo encerramento desejado.

> *[Imagem: tela de busca de encerramento de caixa]*

Com o encerramento localizado, selecione-o e clique em **Selecionar**. As informações exibidas são diretamente do encerramento de caixa e podem ser comparadas com o relatório gerencial impresso no PDV. Constam: nome do terminal, usuário do caixa, datas de abertura e encerramento.

Após isso, a tela retorna com o **usuário do caixa** preenchido. Lance os valores por forma de pagamento conforme os valores contados pelo usuário no momento do encerramento. Clique sobre a forma de pagamento para informar o valor.

**Exemplo de lançamento por forma de pagamento:**

1. Clique sobre a forma de pagamento **F2 – Dinheiro**. Será aberta uma tela de seleção com todas as formas de pagamento configuradas com o tipo **dinheiro** (em **Configurador Bimer >> Financeiro >> Forma de Pagamento**). Selecione **Dinheiro**, informe o valor em R$ e pressione **Enter** para confirmar.
2. Repita o processo para **cheque**: selecione a forma de pagamento, informe o valor e pressione **Enter**.
3. Repita para **cartão**: informe o valor de cada forma de pagamento do tipo cartão e pressione **Enter**.

> **Observação:** Não é necessário apontar todas as formas de pagamento existentes — apenas as que foram movimentadas no dia neste caixa.

Após conferir os valores, clique em **Gravar (F10)** para incluir a conferência de caixa.

### Relatórios da Conferência

A conferência aparecerá no grid com status **Digitada**.

No menu esquerdo, clicando em **Imprimir (F7)**, é possível emitir um relatório da conferência selecionada ou por período (que aglutinará todas as conferências do período selecionado).

Selecione o tipo de relatório desejado e clique em **Visualizar** ou **Imprimir**.

### Ações para a Conferência

| Ação | Tecla | Descrição |
|------|-------|-----------|
| **Alterar** | F3 | Abre a conferência para edição |
| **Excluir** | Del | Exclui a conferência (com confirmação); ela ficará disponível para ser incluída novamente |
| **Consultar** | F6 | Abre a conferência somente para visualização, sem edição |
| **Conferir** | F4 | Abre a conferência final para liberação |

### Conferência Final e Liberação

Ao clicar em **Conferir (F4)**, selecione o período desejado.

A tela exibirá a conferência confrontando o **valor informado pelo usuário** com o **valor do sistema** registrado pelo PDV, por forma de pagamento.

**Edição de recebimentos:**

É possível editar informações por título. Selecione, por exemplo, **Recebimento Cartão** e clique em **Alterar**. Na tela seguinte, é possível editar a forma de pagamento, o cliente, a natureza de lançamento e o valor.

- Pressione **ALT + N** para abrir a tela de edição da natureza de lançamento. Preencha o campo e clique em **OK** para gravar.
- Ao finalizar as alterações, clique em **Gravar (F10)**. O sistema apresentará mensagem de confirmação das alterações dos recebimentos.

**Suprimento e Sangria (forma de pagamento dinheiro):**

Na forma de pagamento **dinheiro**, ao selecioná-la são habilitados os botões:

- **Conta de saída (Suprimento)** — Abre o destaque de suprimentos feitos. Selecione o suprimento, clique em **+** no quadro **Conta bancária de saída**, preencha a conta bancária e o valor, e clique em **Gravar (F10)**.
- **Conta de entrada (Sangria)** — Processo semelhante ao suprimento. Caso não haja o movimento, o sistema informará que não existe o movimento para esta conferência.

**Fechamento Financeiro:**

Clique em **Fechamento financeiro** para abrir o assistente de conferência dos recebimentos em cartão. Filtre por **Convênio** e **Forma de Pagamento**. Inclua os títulos do quadro esquerdo no quadro direito, informe o **Nr. do resumo** (que será levado para o agrupamento do título no Contas a Receber) e clique em **Processar**. Confirme clicando em **OK** e depois em **Sim**.

**Resumo Diário:**

Clique em **Resumo diário** para visualizar o detalhamento da movimentação do terminal, filtrando por data e tipo de movimentação. Útil para entender diferenças entre o valor informado e o valor do sistema, além de identificar possíveis falhas na integração.

Após conferir todos os dados, clique em **Gravar (F10)** para liberar a conferência.

### Relatório de Terminais Movimentados

Após a liberação, a conferência aparecerá com status **Conferida** — somente poderá ser aberta para consulta, sem edição.

Clique em **Terminais movimentados (F8)** para emitir um relatório por data das conferências dos terminais movimentados. Informe a **Data de movimentação** e clique em **Visualizar**.

O relatório destacará o terminal movimentado, o horário de abertura e se já foi conferido ou não.

> **Dica:** Os dados de conferência e encerramento de caixa ficam registrados na tabela `MovimentoCaixa` no SQL, caso seja necessário realizar alguma conferência adicional.
