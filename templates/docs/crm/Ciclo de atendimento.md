# Ciclo de Atendimento — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Pré-Requisitos](#pré-requisitos)
  - [Configurador Bimer >> CRM >> Opções >> Ciclo de atendimento](#configurador-bimer--crm--opções--ciclo-de-atendimento)
  - [Configurador Bimer >> Geral >> Atendimento/Agendamento >> Workflow](#configurador-bimer--geral--atendimentoagendamento--workflow)
  - [Criando um Workflow](#criando-um-workflow)
  - [Centro de Responsabilidade (CR)](#centro-de-responsabilidade-cr)
  - [Workflow](#workflow)
  - [Configurador Bimer >> CRM >> Ciclos de atendimento](#configurador-bimer--crm--ciclos-de-atendimento)
  - [Configurador Bimer >> Geral >> Atendimento/Agendamento >> Tipo de atendimento](#configurador-bimer--geral--atendimentoagendamento--tipo-de-atendimento)
- [Utilizando o ciclo de atendimento](#utilizando-o-ciclo-de-atendimento)

---

## Introdução

Este é um recurso que pode e deve ser utilizado para "encantar" os clientes, já que tem como função principal, criar um padrão para a venda, utilizando perguntas previamente cadastradas.

---

## Pré-Requisitos

Veja a seguir o que é necessário para o ciclo de atendimento funcionar.

### Configurador Bimer >> CRM >> Opções >> Ciclo de atendimento

Marcar a opção **"Utilizar ciclo de atendimento no contato (vendas follow-up)"**.

> *[Imagem: Tela de opções do CRM com a opção de ciclo de atendimento marcada]*

### Configurador Bimer >> Geral >> Atendimento/Agendamento >> Workflow

Criar um **workflow** para a rotina que utilizará o ciclo de atendimento.

> *[Imagem: Tela de configuração do Workflow no Configurador Bimer]*

### Criando um Workflow

Workflow significa fluxo de trabalho, e no CRM não é diferente. No CRM, o workflow significa o percurso que o tipo de atendimento deverá seguir nas mais diversas situações. Um tipo de atendimento de venda, por exemplo, seguirá um percurso no qual serão questionados os contatos obtidos com o cliente, se esses contatos foram bem-sucedidos e se a venda foi realizada. Já um tipo de atendimento de curso terá outro percurso, ou seja, outro workflow, com outros tipos de questionamentos e possíveis respostas.

> **Observação:** caso um cliente queira criar um workflow novo, deverá verificar com a supervisão sobre a questão.

### Centro de Responsabilidade (CR)

Pode-se definir um CR como uma etapa do atendimento. Um CR pode ou não estar vinculado a usuários específicos. Ou seja, o CR define a cada momento em que fase o atendimento está.

**Exemplo:** aguardando cliente entrar em contato, dependendo do analista ligar para o cliente, atendimento encerrado, em análise, etc.

O cadastro do CR é feito no **Configurador Bimer >> Geral >> Atendimento/Agendamento >> Centro de responsabilidade**. Preencha a classificação e descrição. Quando o CR for responsável por encerrar o atendimento, marque a opção **"Encerra o processo"**.

> **Observação:** os centros de responsabilidade são importantes, pois são utilizados no BiAtendimento como parâmetros nas estatísticas de atendimentos. Eles possibilitam ao usuário saber, por exemplo, se existem atendimentos parados em uma determinada fase e há quanto tempo estão parados.

### Workflow

Cada workflow pode conter vários CRs e decisões, conforme o fluxo desejado.

Para configurar um workflow acesse **Configurador Bimer >> Geral >> Atendimento/Agendamento >> Workflow**. É necessário:

1. No campo **descrição** informe o nome do workflow. No quadro **"Sequência"** é onde serão configurados os CRs, decisões ou outro workflow, ou seja, o fluxo em si.

2. Clique em **"Novo cadastro"** e será apresentada a tela, em que o campo **"Ordem"** é o número da ordem sequencial desse CR ou decisão que o workflow seguirá. O recomendável é criá-los com a numeração de 5 em 5, para facilitar a manutenção e inserção futura de novos.

3. No quadro **"Tipo"** terá a opção **"CR"**, **"Decisão"** e **"Workflow"**:

   - **CR** — No qual será informado, para este workflow, quais os CRs cadastrados serão utilizados e suas respectivas ordens. O campo **"Prox. Ordem"** dirá, após ele, para qual ordem deverá mudar. É possível, por exemplo, começar com um CR de ordem 000 - "Aguardando equipamento para conserto" e a sua próxima ordem ser o CR 005 - "Em manutenção", e depois ter como próxima ordem 010 - "Manutenção concluída".

   - **Decisão** — Quando o atendimento entra ou mesmo sai de um CRM, pode ser necessário que o usuário tome uma decisão sobre o que deseja que seja feito. Geralmente, essas decisões são feitas no formato de perguntas e possíveis respostas e, de acordo com a resposta, o atendimento seguirá um caminho específico.
     > **Exemplo:** Decisão: "O atendimento pode ser encerrado?"; Resposta 1: Sim (o atendimento é encerrado); Resposta 2: Não (haverá uma outra decisão ou mesmo irá para outra etapa).

   - **Workflow** — Servirá para direcionar o atendimento para iniciar um outro workflow externo e informar sua ordem.

> *[Imagem: Tela de configuração do Workflow com sequência de CRs e decisões]*

### Configurador Bimer >> CRM >> Ciclos de atendimento

Criar um ciclo de atendimento utilizando os CRs (Centros de Responsabilidade) constantes no workflow.

Para incluir um registro, clique no botão **Novo**. Cada CR poderá ter suas perguntas que serão cadastradas uma a uma, basta selecionar o CR e clicar no sinal de **"+"** na grid **"Perguntas"**. Digite a classificação e a descrição da pergunta.

> *[Imagem: Tela de cadastro do Ciclo de atendimento com perguntas por CR]*

Escolha o **"Tipo de resposta"** que poderá ser:

- **Alfanumérico** — Para respostas tipo texto curto até 100 caracteres. Ex: Nome.
- **Memorando** — Para respostas tipo texto longo. Ex: Descrição de ambiente do cliente.
- **Numérico** — Para respostas numéricas. Ex: 1, 123, 587.
- **Moeda** — Para respostas com valores monetários. Ex: R$ 100,00.
- **Data** — Para respostas tipo data. Ex: 01/01/2001.
- **Hora** — Para respostas hora. Ex: 12:30.
- **Múltipla escolha (uma opção)** — Para respostas em que será escolhida uma e somente uma das opções de respostas previamente cadastradas. Ex: Sim / Não.
- **Múltipla escolha (Várias Opções)** — Para respostas em que será escolhida uma ou mais das opções de respostas previamente cadastradas. Ex: Sistemas operacionais instalados – Win95, Win98, Win2k, WinXP, Linux.

Ao cadastrar uma resposta, pode-se marcar as opções:
- **"Padrão marcado"** — A resposta já virá marcada quando utilizar o ciclo de atendimento.
- **"Gera Resposta complementar"** — Aparecerá o campo para uma resposta complementar.

### Configurador Bimer >> Geral >> Atendimento/Agendamento >> Tipo de atendimento

Criar um tipo de atendimento, informando o **workflow** e o **ciclo de atendimento** cadastrados.

> *[Imagem: Tela de cadastro do Tipo de atendimento com workflow e ciclo vinculados]*

---

## Utilizando o ciclo de atendimento

A utilização do ciclo de atendimento é feita no **CRM**, aba **Vendas Follow-Up**.

Crie um novo contato com o tipo de atendimento que tenha sido configurado para utilização do ciclo.

> *[Imagem: Criação de contato no CRM com tipo de atendimento vinculado ao ciclo]*

No momento da criação do contato, o botão **"Ciclo de atendimento"** ainda não estará disponível para ser utilizado. Após ter criado o contato, no momento que der o parecer, aparecerão as perguntas que foram configuradas no Ciclo de atendimento.

Depois de ter dado o primeiro parecer dentro do contato, ao clicar no botão de **"Ciclo de atendimento"**, serão exibidas as perguntas do ciclo de atendimento.

A troca de CR deverá ser feita normalmente utilizando o parecer como qualquer outro contato. Será exibida automaticamente a janela com as perguntas do ciclo de atendimento constantes para este CR. Estas poderão ou não ser respondidas neste momento. Se o usuário quiser, poderá responder algumas das perguntas (em qualquer ordem) e posteriormente responder as outras.

Outra forma de acessar as perguntas do ciclo de atendimento, basta clicar no botão **"Ciclo"** que aparece no CRM, aba Vendas Follow-up.

Para habilitar o preenchimento de respostas de um CR anterior, o usuário deverá clicar no botão **"Desbloquear"**.

O encerramento do contato de venda acontecerá da mesma forma que um contato sem ciclo de atendimento, gerando ou não um pedido de venda.

> **Observação:** mesmo que o atendimento já tenha sido encerrado é possível verificar as perguntas e respostas do ciclo de atendimento, bem como prosseguir com o preenchimento das respostas do ciclo.
