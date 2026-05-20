# Autorizador de Pagamentos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Configurador](#configurador)
  - [Cadastro de Usuários](#cadastro-de-usuários)
- [Rotina](#rotina)
  - [Autorizar](#autorizar)
  - [Negar](#negar)
  - [Consultar Autorização](#consultar-autorização)
- [Dicas Extras](#dicas-extras)
  - [Previsão](#previsão)
  - [Voltar para Pendente](#voltar-para-pendente)
  - [Relatórios](#relatórios)
  - [Linha do Tempo e Anexos](#linha-do-tempo-e-anexos)
  - [Autorizador Gerencial — Bimer Up](#autorizador-gerencial--bimer-up)

---

## Introdução

O **Autorizador de Pagamentos** é um recurso do módulo **Contas a Pagar** que permite aos gestores do financeiro:

- Controlar o pagamento das despesas.
- Negar ou autorizar pagamentos — somente após a autorização o valor é liberado para baixa do título.
- Limitar quem pode autorizar pagamentos e quem não pode.
- Auditar quem autorizou ou negou os pagamentos.

---

## Configurações

### Configurador

Caminho: **Configurador >> Financeiro >> Opções >> Baixas >> Configurações diversas para baixa de títulos**

Marque a opção **"Permitir baixar títulos a pagar somente após a autorização de pagamento"** para ativar o recurso.

Há também a opção **"Permitir selecionar títulos a pagar para geração de arquivo remessa somente após a autorização de pagamento"**, utilizada na geração do arquivo remessa de Liquidação (Títulos a Pagar). Com ela marcada, os títulos ficam disponíveis para remessa somente após a autorização do pagamento.

### Cadastro de Usuários

No perfil individual ou no perfil vinculado ao usuário, insira o sistema **A Pagar** e configure os acessos:

- **Autorizar/Negar autorização de pagamento** — Habilita as opções de permitir ou inibir o pagamento do título. Deve ser atribuído a usuários no nível de supervisão financeira.
- **Voltar autorização de pagamento para pendente** — Permite retornar um título já autorizado ou negado para o status de pendente. Útil ao selecionar um título incorreto ou quando um supervisor reavalia que o pagamento não pode ser realizado no momento.

---

## Rotina

Após as configurações, o módulo **Contas a Pagar** exibirá três novidades:

1. **Botão Autorizar Pagamentos** — Tela com os recursos para autorizar ou negar pagamentos.
2. **Botão Consultar Autorização** — Para manusear títulos individualmente e consultar seu status.
3. **Coluna \<A\> Autorização de pagamento** — Exibe o status do título quanto à autorização, com três cores conforme a legenda.

### Autorizar

A autorização é feita em 3 passos:

**1º Passo — Localização**

Use os filtros de **Empresa**, **Data de cadastro** e **Vencimento programado** dos títulos e clique em **Atualizar Filtro** para exibir os documentos no quadro **Títulos disponíveis**. Para adicionar títulos avulsos, clique na lupa ao lado de **Número do título** e busque pelo campo desejado.

**2º Passo — Adição dos títulos**

Clique em **Adicionar** para incluir o título individualmente, ou em **Adicionar todos** para selecionar tudo que foi filtrado. O quadro **Autorização** será preenchido. Para remover um título selecionado por engano, clique em **Remover** ou **Remover todos**.

**3º Passo — Autorização**

No topo da tela, clique em **Autorizar** para permitir o pagamento dos títulos selecionados. Os títulos autorizados ficam em **negrito** no quadro de Autorização. Para visualizá-los, clique em **Mostrar títulos autorizados em aberto**.

Após a autorização, a coluna **\<A\> Autorização de pagamento** na tela principal do Contas a Pagar é preenchida com o **botão verde** (autorizado), e o financeiro já consegue dar baixa no título.

> **Dica:** O botão **Autorizar todos** autoriza todos os pagamentos pendentes de autorização de uma só vez. Se houver múltiplas autorizações (ex.: 14, 25 e 26), clicar em **Autorizar** sobre uma delas autoriza apenas aquela; clicar em **Autorizar todos** libera todas simultaneamente.

> **Como criar autorizações diferentes?** O sistema analisa o período filtrado. Se não houver nenhuma autorização com títulos pendentes, uma nova autorização é criada. Se já houver uma em aberto, o título é adicionado a ela. Para criar uma nova autorização no mesmo período, autorize ou negue primeiro as que estão pendentes.

### Negar

A rotina de negação segue os mesmos **1º e 2º passos** da autorização (Localização e Adição de títulos).

**3º Passo — Negar a autorização**

No topo da tela, clique em **Negar** para proibir o pagamento dos títulos selecionados. No quadro que se abre, informe uma **Observação** para negar o pagamento (opcional).

Os títulos negados ficam na cor **laranja** no quadro de Autorização. Para visualizá-los, clique em **Mostrar títulos negados em aberto**.

Após a negação, a coluna **\<A\> Autorização de pagamento** é preenchida com o **botão laranja** (autorização negada), e o financeiro não consegue dar baixa no título.

> **Dica:** O botão **Negar todos** nega todos os pagamentos pendentes de autorização de uma só vez.

### Consultar Autorização

O botão **Consultar Autorização** na tela principal do Contas a Pagar permite ações individuais em um título. É mais prático e rápido para autorizar ou negar apenas um título específico.

A tela de Consultar Autorização exibe:

1. **Status** — Três situações possíveis:
   - **Pendente** — O processo de autorização ainda não foi feito.
   - **Negada** — O pagamento foi proibido.
   - **Autorizada** — O pagamento foi liberado.
2. **Área título** — Número, nome, data de emissão e observação do título.
3. **Área Solicitação** — Usuário, data da solicitação e descrição adicionada ao negar o pagamento.
4. **Voltar para pendente** — Retorna o título para o status de pendente após autorizar ou negar.
5. **Dados da Pessoa** — Informações adicionais: outros títulos a pagar em aberto, endereço e meios de contato.
6. **Histórico** — Auditoria com o histórico de mudanças em relação à autorização do pagamento (quem negou ou permitiu e o motivo).
7. **Negar** — Proíbe o pagamento, mudando o status para Negada.
8. **Autorizar** — Autoriza o pagamento, mudando o status para Autorizada.
9. **Fechar** — Retorna à tela principal do Contas a Pagar.
10. **Área de Autorização** — Após negar ou autorizar, exibe o usuário, data e observação da decisão.

> **Atenção:** Se o usuário tentar realizar a baixa do título sem a autorização do pagamento, o sistema exibirá a mensagem informando que é necessário autorizar o pagamento primeiro pelo botão **"Autorização de pagamento"** na tela principal.

---

## Dicas Extras

### Previsão

Os títulos de previsão não são exibidos na grid principal do Autorizador de Pagamentos. Para autorizá-los, há duas opções:

1. Na tela principal do **Contas a Pagar >> Menu Principal**, clique sobre o título, acesse **Consultar Autorização** e clique em **Autorizar**.
2. No botão **Autorizar Pagamentos**, clique em **Localizar** e marque a opção **Previsão**. Em seguida, prossiga com a autorização ou negação normalmente.

> **Detalhe:** Embora seja possível autorizar um título de previsão, ainda não será possível realizar a baixa — o título precisa constar como **realizado**. Por isso, edite o título e mude sua condição antes de efetuar a baixa.

### Voltar para Pendente

Caso tenha autorizado ou negado títulos incorretamente, utilize o botão **Voltar para pendente**. Para isso, localize os títulos, selecione-os e clique no botão correspondente. Os títulos voltam para o status pendente e podem ser autorizados, negados ou removidos da tela de autorização.

Também é possível fazer isso individualmente pelo botão **Consultar Autorização**.

### Relatórios

Na tela de **Autorizar Pagamentos**, há dois botões de relatório:

- **Imprimir Autorização Selecionada** — Gera o relatório com os títulos da autorização selecionada.
- **Imprimir todas as autorizações** — Gera o relatório de todas as autorizações exibidas na tela.

> **Nota:** Não há um RTM padrão para o Autorizador de Pagamentos. Para gerar relatórios, é necessário criar um novo layout: clique em **Selecionar layout para impressão >> Novo**, dê um nome ao relatório e clique em **Alterar layout do relatório**. Na tela seguinte, acesse **Arquivo >> Novo relatório** e adicione os elementos e variáveis desejados. Após confeccionar, salve em **Arquivo >> Salvar para arquivo**.

### Linha do Tempo e Anexos

Na tela do autorizador, dois botões trazem mais detalhes sobre a despesa:

- **Linha do tempo** — Mostra qual usuário gerou o título, se é avulso ou veio de outro módulo (como Nota Fiscal de Entrada), a forma de pagamento e o fornecedor.
- **Anexos** — Se na criação ou edição do título foi adicionado um PDF de boleto bancário, guia de pagamento ou outro documento, é possível abri-lo para análise antes de efetuar o pagamento.

### Autorizador Gerencial — Bimer Up

O **Autorizador Gerencial** do Bimer Up e o **Autorizador de Pagamentos** podem trabalhar simultaneamente. Pontos importantes:

1. Para o título ser baixado, ele precisa passar pelo **Autorizador de Pagamentos** e pelo **Autorizador Gerencial**.
2. A autorização do pagamento pode ser feita antes ou depois da liberação pelo Autorizador Gerencial. Para autorizar um título que ainda está como previsão (aguardando o Bimer Up), acesse **Contas a Pagar >> Menu Principal >> Consultar Autorização** ou use o botão **Autorizar Pagamentos >> Localizar** marcando a opção Previsão.

> **Nota:** Para mais informações sobre a rotina no Bimer Up, consulte o manual **Controle de Alçada – Contas a Pagar** no Portal UCA.
