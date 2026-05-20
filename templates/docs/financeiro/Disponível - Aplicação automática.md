# Disponível — Aplicação Automática — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Esquema de Funcionamento no Bimer](#esquema-de-funcionamento-no-bimer)
- [Configurações](#configurações)
  - [Cadastro da Conta-corrente](#cadastro-da-conta-corrente)
  - [Saldo de Abertura da Conta de Aplicação](#saldo-de-abertura-da-conta-de-aplicação)
  - [Sincronismo para Conciliação Automática](#sincronismo-para-conciliação-automática)
- [Rotina](#rotina)
  - [Conciliação Automática](#conciliação-automática)
  - [Lançamento de Saldo no Banco](#lançamento-de-saldo-no-banco)
  - [Rendimentos](#rendimentos)
  - [Movimentações](#movimentações)
- [Outros Recursos](#outros-recursos)
  - [Taxa de Aplicação](#taxa-de-aplicação)

---

## Introdução

A **aplicação financeira automática** ocorre quando a empresa autoriza o banco a investir automaticamente os recursos disponíveis em sua conta-corrente. Quando o banco identifica saldo positivo na conta-corrente, transfere esse saldo para uma conta vinculada e decide como o valor será aplicado.

O valor fica investido por prazo indefinido, acumulando rendimentos, até que a empresa necessite de alguma quantia. Sempre que o saldo da conta-corrente for ficar negativo, o banco transfere somente a quantia necessária da conta de aplicação para a conta-corrente.

**Termos utilizados pelo banco:**
- **Resgate** — Movimento que debita um valor da conta de aplicação e o credita na conta-corrente.
- **Aplicação de papéis** — Movimento que debita um valor da conta-corrente e o credita na conta de aplicação. Também chamado de "Aplicação de rendimento" ou "Aplicação de fundos".
- **Rendimento de aplicação** — Quanto o valor na conta de aplicação rendeu.

**Exemplo prático:**

| Data | Conta-corrente (Entrada) | Conta-corrente (Saída) | Saldo C/C | Aplicação (Entrada) | Aplicação (Saída) | Saldo Aplicação |
|------|--------------------------|------------------------|-----------|---------------------|-------------------|-----------------|
| 01   | R$ 50.000,00             |                        | R$ 0,00   |                     | R$ 50.000,00 →    | R$ 50.000,00    |
| 10   |                          | R$ 10.000,00           | R$ 0,00   | ← R$ 10.000,00      |                   | R$ 40.000,00    |
| 12   |                          | R$ 5.000,00            | R$ 0,00   | ← R$ 5.000,00       |                   | R$ 35.000,00    |
| 15   | R$ 60.000,00             |                        | R$ 0,00   |                     | R$ 60.000,00 →    | R$ 95.000,00    |
| 31   |                          |                        |           | R$ 100,00 (rend.)   |                   | R$ 95.100,00    |

---

## Esquema de Funcionamento no Bimer

Todo o controle das aplicações automáticas é feito pela própria conta-corrente — não é necessário cadastrar uma conta de aplicação separada. O que existe é um **controle paralelo de movimento e saldo aplicado**.

Ao configurar uma conta-corrente para trabalhar com aplicação automática, o sistema passa a controlar dois tipos de saldos:
- **Saldo da conta-corrente**
- **Saldo aplicado**

Quando a conta-corrente está configurada para **conciliação automática** (recomendado), o saldo da conta é lançado automaticamente pelo extrato bancário. Porém, o **saldo da aplicação deve sempre ser lançado manualmente**, pois geralmente não consta nos arquivos de extrato liberados pelos bancos.

---

## Configurações

### Cadastro da Conta-corrente

Caminho: **Configurador >> Financeiro >> Informações bancárias >> Contas Bancárias**

Acesse a aba **"Aplicação automática"** e marque a opção **"Marque caso esta conta tenha aplicação automática"**. Em seguida, configure os campos:

- **Natureza de lançamento (rendimento)** — Natureza utilizada nos lançamentos de entrada correspondentes aos rendimentos da aplicação.
- **Natureza de lançamento (dedução)** — Natureza utilizada nos lançamentos de saída da conta-corrente para aplicação automática.
- **Natureza de lançamento (Taxa de aplicação)** — Natureza utilizada nos lançamentos de saída referentes à taxa cobrada pelo banco para administrar o investimento.
- **Tipo de movimento de cobrança (rendimento / dedução / taxa de aplicação)** — Tipo de movimento de cobrança para as movimentações de aplicação automática.
- **Pessoa** — Pessoa utilizada nos movimentos de aplicação automática. Se não informada, será considerada a descrição da natureza de lançamento (rendimento) como nome da pessoa.

### Saldo de Abertura da Conta de Aplicação

Antes de iniciar o controle da aplicação automática, é necessário lançar o saldo de abertura do investimento.

Caminho: **Disponível >> Ferramentas >> Saldo de abertura (Aplicação automática)**

Informe a **data** em que a aplicação automática começará a ser controlada no Bimer e o **saldo disponível aplicado** nesta data.

> **Atenção:** Informe a data de quando o controle pelo Bimer começará, não a data de quando o contrato com o banco foi firmado. Exemplo: se o contrato com o banco começou em 01/01/20XX, mas o controle no Bimer só iniciará em 01/03/20XX, informe 01/03/20XX.

Após informar o saldo de abertura, será exibida na tela principal do Disponível uma movimentação com o histórico **"Abertura de Saldo Aplicação"**.

> **Atenção:** Após informar o saldo de abertura, o sistema não permitirá importações ou lançamentos manuais anteriores à data de abertura.

### Sincronismo para Conciliação Automática

Para que o sistema identifique que um lançamento no extrato bancário se refere a um movimento de aplicação automática, é necessário criar os sincronismos correspondentes.

Caminho: **Disponível >> Conciliação bancária >> Conciliação automática >> Sincronismo**

Campos do sincronismo:

- **Tipo** — Deve ser sempre **"Considerar/Lançar"**. Ao selecionar, é habilitado o quadro **"Aplicação Automática"**.
- **Movimento no extrato** — Define que tipo de lançamento será considerado:
  - **Positivo** — Considera apenas lançamentos positivos no extrato.
  - **Negativo** — Considera apenas lançamentos negativos no extrato.
  - **Ambos** — Considera lançamentos positivos e negativos.

**Quadro "Aplicação automática":**

- **Lançamento na conta aplicação / contrapartida na conta bancária:**
  - Extrato positivo → Entrada na conta de aplicação + Saída na conta-corrente.
  - Extrato negativo → Saída na conta de aplicação + Entrada na conta-corrente.

- **Lançamento na conta bancária / contrapartida na conta aplicação:**
  - Extrato positivo → Entrada na conta-corrente + Saída na conta de aplicação.
  - Extrato negativo → Saída na conta-corrente + Entrada na conta de aplicação.

- **Ignorar** — Nenhuma alteração no saldo da conta de aplicação. Movimenta apenas a conta-corrente.

**Exemplos de configuração:**

*Saída da conta bancária para aplicação:*
- Movimento no extrato → **Negativo** ou **Ambos**
- Aplicação automática → **Lançamento na conta bancária / contrapartida na conta aplicação**

*Retirada da conta de aplicação para a conta bancária:*
- Movimento no extrato → **Positivo** ou **Ambos**
- Aplicação automática → **Lançamento na conta bancária / contrapartida na conta aplicação**

Outros campos do sincronismo:
- **Histórico** — Descrição do lançamento a ser considerada para o sincronismo.
- **Natureza de lançamento** — Natureza utilizada para classificar o título criado no Contas a Receber ou Contas a Pagar.
- **Pessoa** — Pessoa utilizada no título criado. Pode-se cadastrar o próprio banco como pessoa.

---

## Rotina

### Conciliação Automática

A rotina consiste em realizar a conciliação automática normalmente e lançar os saldos da conta de aplicação manualmente.

Após a configuração, a tela de movimento da conta-corrente exibirá duas novas colunas além da coluna **"Saldo conta"**:
- **Saldo aplicação** — Saldo da conta de aplicação.
- **Saldo conta + aplic.** — Somatória das duas contas.

No rodapé, o saldo considerado é o **"Saldo conta + aplicação"**.

> **Nota:** Nos movimentos de aplicação automática, a visão de "Entrada" e "Saída" é do ponto de vista da conta de aplicação. Exemplo: um valor na coluna "Saída" significa que o valor está saindo do saldo de aplicação e entrando no saldo da conta (resgate).

### Lançamento de Saldo no Banco

O saldo da aplicação automática deve ser lançado manualmente, mesmo com conciliação automática ativa.

Caminho: **Disponível >> Ferramentas >> Lançamento de saldo no banco**

Selecione a conta desejada e informe o saldo da aplicação.

### Rendimentos

O sistema compara o saldo aplicado de um dia com o saldo do dia anterior. Se o saldo do dia for maior e não houver movimento de transferência da conta-corrente para a aplicação, o sistema identifica que houve rendimento e faz um lançamento de entrada.

**Exemplo:**
- 05/06: Saldo aplicação = R$ 55.000,00
- 07/06: Saldo aplicação = R$ 57.000,00 (sem movimento de saída da conta-corrente)
- Sistema identifica rendimento de R$ 2.000,00 e faz lançamento de entrada na aplicação.

A natureza de lançamento utilizada é a configurada em **Configurador >> Financeiro >> Informações Bancárias >> Contas Bancárias >> Aba Aplicação Automática >> Natureza de Lançamento (Rendimento)**.

> **Atenção:** Se o saldo da aplicação não for lançado corretamente, o sistema pode gerar movimentos automáticos incorretos. Por exemplo, se o usuário esquecer de lançar o saldo e o sistema entender que o saldo é zero, ele gerará um resgate do valor total aplicado, utilizando a natureza de lançamento configurada para **Dedução**.

### Movimentações

As movimentações da aplicação automática podem variar conforme o contrato entre a empresa e o banco.

**Exemplo — saldo mínimo na conta-corrente:**

Contrato define saldo mínimo de R$ 10,00 na conta-corrente.
- Saldo conta-corrente: R$ 10,00 | Saldo aplicado: R$ 2.000,00
- Pagamento de título: R$ 100,00
- Novo saldo seria: R$ 10,00 – R$ 100,00 = –R$ 90,00 (negativo)
- Banco faz resgate de R$ 100,00 da aplicação para manter o saldo mínimo
- Saldo aplicado: R$ 2.000,00 – R$ 100,00 = R$ 1.900,00
- Saldo conta-corrente: R$ 10,00 – R$ 100,00 + R$ 100,00 = R$ 10,00

O valor resgatado (R$ 100,00) aparecerá no extrato bancário e deve ser configurado no sincronismo.

---

## Outros Recursos

### Taxa de Aplicação

Disponível a partir da versão **8.00.14.00**. Permite lançar de forma avulsa a taxa cobrada pelo banco para realizar o resgate do valor aplicado. Esta taxa é deduzida da conta de aplicação automática.

**Configuração:**

Na conta bancária, aba **Aplicação automática**, informe:
- **Natureza de lançamento (taxa de aplicação)**
- **Tipo de movimento de cobrança**

No **Cadastro de Usuário**, no perfil individual ou vinculado ao usuário, marque no **Disponível >> Acessos** a opção **"Cadastrar movimento de taxa de aplicação"** para limitar quem poderá lançar esta taxa.

**Lançamento:**

Caminho: **Disponível >> aba Principal >> Lançar taxa aplicação**

Informe a data e o valor da cobrança. Será criado um movimento de saída com a natureza de lançamento e tipo de movimento de cobrança configurados na conta bancária. O histórico exibirá a descrição **"Lançamento de taxa de aplicação automática"**.

> **Observação:** Este tipo de lançamento não pode ser editado. Para corrigir, apague e lance novamente com os dados corretos. O valor lançado **não** é deduzido do saldo da conta-corrente — apenas do saldo da aplicação automática.
