# Banco do Brasil — Integração de Boletos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [Simplificando a Cobrança](#simplificando-a-cobrança)
  - [Como Funciona a Integração?](#como-funciona-a-integração)
  - [Vantagens](#vantagens)
- [Configurações Necessárias](#configurações-necessárias)
  - [Conta Banco do Brasil](#conta-banco-do-brasil)
  - [Criação da Conta Bancária no Bimer](#criação-da-conta-bancária-no-bimer)
- [Envio de Boletos para o Banco](#envio-de-boletos-para-o-banco)
  - [Validações para o Envio de Boletos](#validações-para-o-envio-de-boletos)
- [Baixa de Títulos Recebidos](#baixa-de-títulos-recebidos)
- [Exclusão](#exclusão)
  - [Exclusão de Título no Financeiro](#exclusão-de-título-no-financeiro)
  - [Exclusão de Título Criado pelo Faturamento](#exclusão-de-título-criado-pelo-faturamento)
- [Alteração de Histórico de Carteira](#alteração-de-histórico-de-carteira)
- [Alteração do Vencimento](#alteração-do-vencimento)
- [Alteração de Dados do Título](#alteração-de-dados-do-título)
- [Proteções Diversas](#proteções-diversas)
- [Validação de Títulos](#validação-de-títulos)

---

## Introdução

O Bimer trabalha integrado ao **Banco do Brasil** para geração on-line de boletos de cobrança bancária. De forma simplificada, o sistema se conecta diretamente aos serviços do banco, envia os dados da cobrança de um ou mais clientes e faz a emissão dos boletos de forma muito rápida.

A integração com o Banco do Brasil foi liberada no Bimer a partir da versão **9.02.06.00**.

### Simplificando a Cobrança

**Sem integração direta:**
1. Emite a NF-e → gera títulos a receber
2. Emite os boletos
3. Gera arquivo remessa de cobrança
4. Envia o arquivo para o banco
5. Aguarda até o próximo dia para baixar o arquivo retorno
6. Importa o arquivo retorno para verificar aceitações e rejeições
7. Envia o boleto para o cliente

**Com integração direta:**
1. Emite a NF-e → gera títulos a receber
2. Envia os dados da cobrança para o banco via API (sem arquivo remessa)
3. O banco avisa na hora se a cobrança foi incluída com sucesso
4. Envia o boleto para o cliente

### Como Funciona a Integração?

A integração é feita através da **API Boleto Fácil**, criada pelo DSN Shop da Alterdata, que facilita a integração com qualquer banco que disponibilize integração por API. Essa API pode ser utilizada por todas as linhas de sistemas da Alterdata (Bimer, Shop, Pack, etc.).

**Fluxo de envio de boletos ao banco:**

1. O usuário emite a NF-e ou outro documento fiscal que atualize o financeiro.
2. O Bimer cria os títulos a receber (ou o usuário os cria manualmente).
3. O usuário envia as cobranças para o banco.
4. O Bimer se conecta à API Boleto Fácil, que se comunica com a API do Banco do Brasil e envia os dados da cobrança, incluindo o nosso número.
5. A API do Banco do Brasil retorna se a cobrança foi incluída com sucesso, além da linha digitável e do código de barras.
6. O Bimer salva as informações e gera o boleto de cobrança.
7. O usuário envia o boleto ao(s) cliente(s).

**Fluxo de baixa dos títulos recebidos:**

1. A tarefa **GeBaixaTitulosBoletoFacil** verifica na base de dados os títulos pendentes de baixa.
2. Consulta a API Boleto Fácil, que consulta a API do Banco do Brasil para verificar títulos recebidos.
3. O GeBaixaTitulosBoletoFacil gera o lote de baixa dos títulos conforme informações do banco.

### Vantagens

1. Fim da criação e homologação do layout de arquivo remessa de cobrança.
2. Não é necessário acessar o sistema do banco para enviar arquivo remessa.
3. Fim da criação e homologação do layout de arquivo retorno de cobrança.
4. Não é necessário acessar o sistema do banco para baixar arquivo retorno.
5. Não é necessário importar arquivo retorno no Bimer para realizar a baixa dos títulos.
6. Envio on-line da cobrança para o banco.
7. Retorno on-line da situação da cobrança no banco.

---

## Configurações Necessárias

### Conta Banco do Brasil

O primeiro passo é a empresa entrar em contato com a agência na qual possui a conta-corrente que utilizará para emitir as cobranças. Se ainda não possuir a conta, deverá abri-la. Se já possuir, deverá informar à gerência que deseja trabalhar com essa modalidade de cobrança.

A agência emitirá o contrato e disponibilizará informações necessárias para a configuração no Bimer (carteira, aceite, etc.).

### Criação da Conta Bancária no Bimer

**1 — Cadastrar a agência (se necessário)**

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Agências >> Novo**

**2 — Cadastrar ou editar a conta bancária**

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Contas Bancárias >> Novo** (ou **Editar**)

Na aba **Dados**, preencha:
- **Descrição**
- **Tipo de baixa** (final e gera numerário) para uso no Disponível
- **Código do Titular** e **Código da Empresa**
- Deixe a opção **Ativo** marcada
- **Não marque** a opção **Caixa**

Na aba **"Dados da conta corrente"**:
- **Tipo Conta:** CC (conta-corrente)
- **Número da conta**
- **Banco:** código **001** (Banco do Brasil)
- **Agência:** selecione a agência cadastrada

Na aba **Boleto bancário/Arquivo remessa >> "Integração de boleto com o banco"**:

Marque a opção **"Trabalhar com integração de boletos"**.

Preencha os campos obrigatórios fornecidos pelo banco:
- **Identificador da aplicação**
- **Client ID**
- **Client Secret**

**Aba Registro e recebimento de boleto:**

- **Aceite** — Identifica se o boleto de cobrança foi aceito (reconhecimento da dívida pelo pagador).
- **Modalidade de cobrança** — Identifica a característica dos boletos dentro das modalidades existentes no banco.
- **Permitir recebimento parcial** — Autoriza o banco a receber pagamento parcial do boleto.
- **Utilizar limite de dias para recebimento** — Indica que o boleto pode ser recebido após o vencimento. Informe a quantidade de dias corridos permitidos.

**Aba Instruções para boletos vencidos:**

- **Quantidade de dias corridos para protesto** — Dias para protesto automático após o vencimento (se contratado com o banco).
- **Quantidade de dias corridos para negativação** — Dias para negativação após o vencimento.
- **Carteira Principal** — Carteira a ser usada no envio via API Boleto Fácil. Se não preenchida, o sistema usará a primeira carteira informada na aba **Dados para cobrança**.

**Aba Estorno de cobrança descontada:**

Automatiza o processo de estorno de valores adiantados pelo banco em cobranças não pagas pelo cliente final:

- **Tipo de cobrança simples** — Utilizado para registrar o estorno no histórico de carteira.
- **Número de dias para estorno** — Dias após o vencimento para iniciar o estorno.
- **Juros/Multa** — Alíquotas que o banco aplicará ao estorno (devem ser idênticas ao contrato bancário).

**Aba Dados para cobrança:**

Os campos **Carteira**, **Variação da carteira**, **Convênio** e **Sequencial** são de preenchimento obrigatório.

**Juros e Multa:**

As alíquotas de juros e multa enviadas ao banco na emissão dos boletos são configuradas em:
- **Configurador Bimer >> Financeiro >> Opções >> Juros/Multa/Dedução >> A Receber >> Alíquota de juros**
- **Configurador Bimer >> Financeiro >> Opções >> Juros/Multa/Dedução >> Geral >> Alíquota de multa**

---

## Envio de Boletos para o Banco

Há duas formas de envio: **manual** e **automática**.

**Envio manual:**

1. Acesse o **Contas a Receber**, localize e selecione o título desejado.

> **Atenção:** A data de emissão do título deve ser igual ou menor que a data de envio dos dados para o banco.

2. Clique em **"Impressão Boleto"**. Ao informar a conta do Banco do Brasil, será habilitada a opção **"Enviar boleto ao Banco"**.
3. Clique sobre ela para exibir as opções:

| Opção | Comportamento |
|-------|---------------|
| **Enviar boleto ao banco** | Envia via API. Se bem-sucedido, retorna o número do boleto no banco. |
| **Visualizar** | Se já registrado: abre visualização. Se não: pergunta se deseja enviar. |
| **Imprimir** | Se já registrado: abre impressão. Se não: pergunta se deseja enviar. |
| **Gerar PDF** | Se já registrado: gera PDF. Se não: pergunta se deseja enviar. |
| **E-mail** | Se já registrado: abre tela de envio por e-mail. Se não: pergunta se deseja enviar. |
| **Envio para cliente** | Se já registrado: abre tela de Envio para cliente. Se não: pergunta se deseja enviar. |
| **WhatsApp** | Envia o boleto via WhatsApp Web (se configurado no computador). |

> **Atenção:** O Banco do Brasil oferece apenas o serviço de registro da cobrança, geração da linha digitável e código de barras, e informações sobre recebimento. O envio do boleto ao cliente continua sendo responsabilidade da empresa — é necessário manter o layout do boleto configurado no Bimer.

Os mesmos recursos estão disponíveis em: **Contas a Receber (Ferramentas >> Impressão de boletos)**, **BI Financeiro**, **CRM** e **Telecobrança**.

**Envio automático:**

Configurado por meio de uma tarefa agendada que se comunica com a API Boleto Fácil. Consulte o artigo específico em: https://ajuda.alterdata.com.br/bimerbase/bimer-financeiro/envio-automatico-de-boletos

### Validações para o Envio de Boletos

Para realizar o envio, o sistema verifica:

1. **Valor do boleto** — Deve ser igual ou superior a R$ 0,01.
2. **Data de emissão** — Deve ser menor ou igual à data atual.
3. **Data de vencimento** — Não pode ser vazia ou inferior à data atual.
4. **CPF/CNPJ do cliente** — Obrigatório e válido. Títulos sem pessoa vinculada não podem ser enviados.
5. **Convênio/Carteira/Variação da carteira** — A conta bancária deve estar cadastrada com esses dados conforme o banco.
6. **Endereço** — O cliente deve possuir endereço completo vinculado ao cadastro.
7. **Identificador da aplicação, Client ID e Client Secret** — Dados corretos fornecidos pelo banco.

---

## Baixa de Títulos Recebidos

A baixa é feita através da tarefa **GeBaixaTitulosBoletoFacil** pelo **Gerente Eletrônico (GEAgente)**.

Para o agendamento da tarefa, foi criada a aba **"Integração com Bancos"**, onde é possível informar usuários que receberão e-mail em caso de divergência de valores na baixa.

**Critérios para que um título seja considerado na consulta:**

- Título não pode estar excluído.
- Título deve estar em aberto.
- Ter histórico de carteira ativo (sem usuário de cancelamento).
- Histórico de carteira ativo com conta configurada para integração com o banco.
- Histórico de carteira ativo com o campo `idexterno` preenchido na tabela `HistoricoCarteira`.
- Histórico de carteira ativo com o campo `idtransacao` preenchido na tabela `HistoricoCarteira`.

**Dados utilizados na baixa:**

- **Forma de pagamento:** a mesma informada no título.
- **Tipo de baixa:** configurado em **Configurador Bimer >> Financeiro >> Opções >> Baixas/Configuração de tipo de baixa >> campo "Final (gera numerário)"**.
- **Conta bancária:** a mesma do histórico de carteira.
- **Empresa:** a mesma empresa da conta bancária.

> **Dica:** A tarefa **GeBaixaTitulosBoletoFacil** pode ser utilizada para realizar a baixa de títulos integrados tanto com o Banco do Brasil quanto com o GerenciaNet, pois ambos integram através da API Boleto Fácil.

---

## Exclusão

### Exclusão de Título no Financeiro

Ao excluir ou renegociar um título com histórico de carteira ativo gerado pela integração de boletos, o sistema apresentará mensagem informando que o título será cancelado no banco. Ao confirmar, o título é cancelado no banco e o histórico de carteira é cancelado no Bimer.

### Exclusão de Título Criado pelo Faturamento

Quando uma nota fiscal é cancelada ou devolvida, o título a receber é excluído no Contas a Receber. A integração via API Boleto Fácil cancela automaticamente o título no banco nas seguintes condições:

1. Qualquer rotina de cancelamento ou devolução dentro do sistema que faça a exclusão dos títulos.
2. Autorizar/Validar o documento até o momento de realizar a liberação do estoque.
3. Executar o módulo **Liberador de estoque** — o liberador atua como autorizador; somente após sua autorização a API pode cancelar o título no banco.

---

## Alteração de Histórico de Carteira

Ao alterar o histórico de carteira de títulos integrados ao banco, o sistema apresentará mensagem informando que o título será excluído no banco. Ao confirmar, o título é cancelado no banco e o novo histórico de carteira é incluído.

> **Observação:** Esta alteração só é permitida na tela de cadastro do título.

---

## Alteração do Vencimento

Ao alterar o vencimento de títulos integrados ao banco, o sistema apresentará mensagem informando que o vencimento será alterado no banco. Ao confirmar, a data de vencimento do boleto é alterada no banco.

---

## Alteração de Dados do Título

Os campos abaixo **não podem ser alterados** em títulos integrados ao banco. O sistema apresentará mensagem informando que a alteração não poderá ser feita e que deve ser utilizada a rotina de **renegociação**:

- Código da Pessoa
- Nome do título
- Valor original
- Desmembramento do valor
- Incluir e excluir item
- Indexador
- Tela de item / Valor do item / Quantidade do item / Descrição do item

---

## Proteções Diversas

- **Geração de remessa:** Não é permitido gerar remessa em uma conta configurada para integração de boletos. Também não é possível marcar um título com histórico de carteira ativo (gerado pela integração) na rotina de geração de arquivo remessa.

- **Movimentos automáticos:** Em **Contas a Receber >> Ferramentas >> Movimentos automáticos**, não é permitido informar uma conta bancária configurada para integração de boletos no grupo de informações para impressão de boleto.

- **GeImprimeBoleto:** Não é permitido utilizar uma conta configurada para integração de boletos na rotina do GeImprimeBoleto, nem marcar uma conta para integração caso esteja configurada nessa rotina.

- **Impressão em conta diferente:** Em **Contas a Receber >> Ferramentas >> Imprimir boletos**, não é permitido selecionar um título integrado com o banco para impressão em uma conta diferente da informada no histórico de carteira.

- **Baixa de títulos integrados:** Não é permitido baixar manualmente um título que já tenha sido integrado com o banco.

---

## Validação de Títulos

Para validar títulos, utilize o **Postman** com o arquivo de coleção fornecido pelo supervisor.

**Informações necessárias antes de iniciar:**

Execute os comandos SQL abaixo individualmente e na ordem indicada:

```sql
SELECT * FROM Areceber WHERE NrTitulo = 'NUMERO DO TITULO'
SELECT IdExterno, * FROM HistoricoCobranca WHERE IdAReceber = 'ID ENCONTRADO NO COMANDO ANTERIOR'
```

**Procedimento no Postman:**

1. Importe o arquivo de coleção fornecido pelo supervisor (**Collection >> Import**).
2. No **GET Gerar chaves clientes BB/API**, informe a URL substituindo o código pelo código do cliente no CRM:
   ```
   https://boletofacil.alterdata.com.br/boleto-facil-rest-api/autenticacao/[CODIGO_CRM]/gerarchaves
   ```
   Clique em **SEND**. O retorno trará **IdCliente** e **IdPassword**.
3. No **POST Autenticação usuário BB >> Body**, informe o IdCliente e IdPassword e clique em **SEND**. Será disponibilizado um **token**.
4. No **GET Verifica status dos títulos na API**, informe o IDExterno obtido no primeiro passo na URL:
   ```
   https://boletofacil.alterdata.com.br/boleto-facil-rest-api/boletos/[ID_EXTERNO]/retornarstatus
   ```
   Em **Headers >> Authorization**, informe o token gerado. Clique em **SEND**.

> **Observação:** Se for apresentada mensagem de token expirado, retorne ao POST e clique em SEND novamente para gerar um novo token.

**Status retornados pelo Banco do Brasil:**

| Código | Status |
|--------|--------|
| 0 | Aguardando |
| 1 | Pago |
| 2 | Vencido |
| 3 | Devolvido |
| 4 | Contestado |
| 5 | Cancelado |
| 6 | Baixado |
| Outro | Inexistente |
