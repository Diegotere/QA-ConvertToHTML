# Aviso de vencimento de boleto por email — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Do que se trata?](#do-que-se-trata)
- [Configurações](#configurações)
  - [Configurador Bimer](#configurador-bimer)
  - [Tarefa e agendamento](#tarefa-e-agendamento)
  - [Cadastro de Pessoas](#cadastro-de-pessoas)
- [Rotina](#rotina)

---

Está enfrentando um alto nível de inadimplência na sua empresa?

Os seus clientes sempre entram em contato com você solicitando o boleto que já havia enviado antes?

Agilize seus processos e facilite sua rotina utilizando o recurso de envio de **Aviso de Vencimento por Email**!

> **Tópicos Relacionados**
> - Instruções de Impressão de Boletos na Documentação do Contas a Receber
> - Impressão automática de boletos por tarefa

---

## Do que se trata?

Esta rotina é realizada por meio do **Gerente Eletrônico**, que aciona uma tarefa para enviar um email como um aviso de vencimento de títulos a receber. Ele leva consigo, anexado, o boleto em questão e pode ter seu layout alterado, já que se trata de um arquivo HTML.

Esta rotina é aplicável apenas aos clientes que já trabalham com **boleto bancário** no Bimer.

> **Importante:** Para que o aviso de vencimento seja realizado, o boleto já deve ter sido impresso anteriormente. Esta impressão pode ser realizada individualmente, por seleção de título ou automaticamente. Isto vai depender de como essa rotina é utilizada em sua empresa.

---

## Configurações

No **Configurador** e **Pessoas** você deve realizar configurações que impactam na rotina do aviso de vencimento. Portanto, fique atento aos detalhes para não deixar nada passar!

### Configurador Bimer

#### Configurações do aviso de vencimento

Acesse **Configurador >> Financeiro >> Opções >> Boleto bancário/arquivo remessa >> Emissão de boleto >> Aviso de vencimento** e realize as seguintes configurações:

- No campo **"Intervalo de dias para envio do aviso de vencimento"**, informe o número de dias antes da data de vencimento que deseja que o aviso seja enviado;
- No campo **"Layout para envio de e-mail de aviso de vencimento"**, informe o arquivo HTML de aviso de vencimento.

> **#FicaADica**
> Você pode informar mais de um intervalo de dias, separados por vírgulas. Sendo assim, mais de um email será encaminhado.
>
> Por exemplo: caso o campo seja configurado com `5,10` e haja um título vencendo em 31/12/2099, o cliente receberá um aviso no dia 21/12/2099 (10 dias antes) e também no dia 26/12/2099 (5 dias antes).

> **Informação Importante!**
> Este arquivo HTML deve ser desenvolvido pela sua empresa. Porém, é disponibilizado um HTML modelo para ajudar na construção do seu próprio material.
> Baixe o arquivo modelo clicando aqui.

#### Variáveis disponíveis para o HTML

Na montagem do HTML você pode utilizar diferentes variáveis para levar informações do Bimer para o email. Veja as variáveis possíveis:

| Variável | Descrição |
|---|---|
| `[TITULO]` | 'Boleto bancário' |
| `[NMPESSOA]` | Nome da pessoa (cliente do título) |
| `[DTENVIO]` | Dia, mês e ano do envio |
| `[NMCLIENTE]` | Nome da pessoa |
| `[CDPESSOA]` | Código da pessoa (código de chamada do cliente no Bimer) |
| `[DSTITULOS]` | Corpo do email |
| `[VLTOTALTITULOS]` | Valor total dos títulos |
| `[VLTOTALTITULOSATUALIZADOS]` | Valor total dos títulos atualizados, com juros, multa, etc. |
| `[ANOREFERENCIA]` | Ano de referência |
| `[NMEMPRESA]` | Nome da empresa do título |
| `[DIASEMABERTOTITULOMAISANTIGO]` | Quantidade de dias desde o vencimento até o envio do e-mail |

### Tarefa e agendamento

**1. Criação da tarefa**

Acesse **Configurador >> Geral >> Tarefas** e crie uma nova tarefa informando:

- **Nome da tarefa** (sugestão: `Aviso de vencimento`);
- **Sistema:** `000191 - Envia aviso de vencimento de títulos a vencer`;
- Clique em **OK** para gravar.

**2. Agendamento da tarefa**

Em seguida, acesse **Configurador >> Geral >> Tarefas Agendadas** e crie um novo agendamento informando:

- **Nome do agendamento**;
- **Tarefa** criada anteriormente;
- **Ocorrência** — recomenda-se a execução 1 vez ao dia, em horário de baixa utilização do sistema (por exemplo, pela manhã, antes do horário de expediente).

> **Nota de versão:** A partir da versão **11.00.04.00**, a tarefa utilizada nesta rotina foi acoplada ao Gerente Eletrônico. Assim, caso você utilize esta versão ou superior, não é necessário ter o executável da tarefa dentro da mesma pasta do Gerente Eletrônico.

> **Fique Ligado!**
> Para que o sistema consiga enviar os boletos por meio do agendamento, é necessário que anteriormente o tipo de contato **"E-mail"** tenha sido configurado.
>
> Confira em **Configurador >> Geral >> Opções >> Pessoa >> Tipo de contato**.

### Cadastro de Pessoas

No cadastro da pessoa do título, deve haver o tipo de contato configurado como **"E-mail"**. É para este email que a tarefa enviará a mensagem.

---

## Rotina

Agora que tudo está configurado, vamos ao que interessa!

Quando chegar a hora definida no agendamento, o sistema executará a tarefa e as mensagens de email serão disparadas contendo:

- O layout do **HTML configurado**;
- O título do cliente em formato **.pdf** anexado.

Nenhuma ação manual é necessária. Depois de tudo configurado, a rotina acontece automaticamente!

> **Atenção:** Certifique-se de que o **Gerente Eletrônico** esteja em execução no momento agendado anteriormente.

> 📧 *[Imagem: exemplo de email de aviso de vencimento encaminhado pela rotina]*
