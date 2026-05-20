# Efí Bank — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [Integração Bimer x Efí Bank](#integração-bimer-x-efí-bank)
- [Configuração](#configuração)
  - [Conta Efí Bank](#conta-efí-bank)
  - [Criação da Conta Bancária no Bimer](#criação-da-conta-bancária-no-bimer)
  - [Juros e Multa](#juros-e-multa)
- [Utilização](#utilização)
  - [Emissão Individual de Boleto](#emissão-individual-de-boleto)
  - [Emissão em Massa de Boletos](#emissão-em-massa-de-boletos)
  - [Validações para o Envio do Boleto](#validações-para-o-envio-do-boleto)
  - [Baixa dos Títulos Recebidos no Banco](#baixa-dos-títulos-recebidos-no-banco)
  - [Tratamento de Valores para Baixas](#tratamento-de-valores-para-baixas)
- [Proteções para Títulos já Integrados](#proteções-para-títulos-já-integrados)
  - [Exclusão de Título pelo Financeiro](#exclusão-de-título-pelo-financeiro)
  - [Exclusão de Título Criado pelo Faturamento](#exclusão-de-título-criado-pelo-faturamento)
  - [Alteração de Histórico de Carteira](#alteração-de-histórico-de-carteira)
  - [Alteração de Dados em Títulos já Integrados](#alteração-de-dados-em-títulos-já-integrados)
  - [Geração de Remessa](#geração-de-remessa)
  - [Movimentos Automáticos](#movimentos-automáticos)
  - [Renegociação de Títulos](#renegociação-de-títulos)
  - [GeImprimeBoleto](#geimprimeboleto)
  - [Impressão em uma Conta Diferente](#impressão-em-uma-conta-diferente)
  - [Baixa de Títulos Integrados](#baixa-de-títulos-integrados)
- [Outros Recursos](#outros-recursos)
  - [Aglutinar Itens no Boleto](#aglutinar-itens-no-boleto)

---

## Introdução

O **Efí Bank** (antigo GerenciaNet) é um banco parceiro da Alterdata que tem como objetivo descomplicar a gestão de cobranças e recebimentos de pessoas físicas e empresas.

A integração do Bimer permite que os títulos sejam enviados diretamente para o banco Efí através de uma API de comunicação. O banco envia o boleto para os clientes por e-mail. Quando há o recebimento do título, o Bimer consulta o status no Efí Bank e realiza a baixa automaticamente através da tarefa **GeBaixaTitulosBoletoFacil**.

**Vantagens em relação ao processo convencional:**
- Não é necessário criar/homologar/enviar arquivo remessa.
- Não é necessário criar/homologar/baixar/processar arquivo retorno.
- Não é necessário configurar layout de boleto.
- Tudo é automatizado.

**Requisito mínimo:** versão **9.01.00.00** ou superior do Bimer.

### Integração Bimer x Efí Bank

A integração é realizada através da **API Boleto Fácil** da Alterdata (mesma API utilizada pelo Shop e ERP4ME One). Atualmente ela se comunica com os bancos **Efí Bank** e **Banco do Brasil**.

**Fluxo:**

1. O usuário emite a NF-e ou cria o título manualmente.
2. O usuário envia o boleto ao banco via API.
3. O Efí Bank confirma o registro e envia o boleto por e-mail ao cliente.
4. O **GEAgente** (Gerente Eletrônico) consulta periodicamente o status do boleto na API.
5. Se o boleto foi pago, o GEAgente cria um lote de baixa. Se não, aguarda o tempo definido pela tarefa e realiza nova consulta.

---

## Configuração

### Conta Efí Bank

O primeiro passo é criar uma conta no Efí Bank. Consulte o artigo de cadastro disponível em:
https://ajuda.alterdata.com.br/bimerbase/bimer-financeiro/cadastro-de-conta-na-efi-antiga-gerencianet

### Criação da Conta Bancária no Bimer

**1 — Cadastrar a agência**

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Agências >> Novo**

Informe:
- **Banco:** código **364** (Efí Bank)
- **N° da agência** e **Nome da agência**

**2 — Cadastrar a conta bancária**

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Contas Bancárias >> Novo**

Na aba **Dados**, preencha:
- **Descrição**
- **Tipo de baixa** (final e gera numerário) para uso no Disponível
- **Código do Titular** e **Código da Empresa**
- Deixe a opção **"Ativo"** marcada

Na aba **Dados da conta corrente**:
- **Tipo Conta:** CC (conta-corrente)
- **Número da conta**
- **Banco:** código **364** (Efí Bank)
- **Agência:** selecione a agência cadastrada

Na aba **"Boleto bancário/Arquivo remessa" >> "Integração com banco"**:

Marque a opção **"Trabalhar com integração de boletos"**. Informe as chaves de acesso fornecidas pelo banco:
- **Client ID**
- **Client Secret**

> **Atenção:** Utilize os dados fornecidos em **API >> Aplicações >> Selecione a aplicação >> Produção** dentro da conta Efí Bank.

> **Dica:** Acesse a aba **Usuários** e informe quais usuários têm permissão para usar essa conta.

### Juros e Multa

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Juros/Multa/Dedução**

- **Menu Geral — Alíquota de Multa:** A taxa máxima permitida pelo Efí Bank é **10%**.
- **Menu A Receber — Período de incidência de juros:** Informe como **Ao dia (a.d)**. A alíquota de juros não pode ultrapassar **0,33% ao dia**.

---

## Utilização

Para emissão de boletos, além dos dados básicos (valor, data de emissão e vencimento programado), o título deve conter as informações bancárias:

1. Banco de cobrança
2. Agência de cobrança
3. Tipo de cobrança
4. Conta bancária

As informações bancárias podem ser preenchidas previamente no cadastro do título ou informadas no momento da emissão do boleto.

> **Dica:** Cadastre um tipo de cobrança específico para o Efí Bank, principalmente se a empresa fizer cobranças por outros bancos.

### Emissão Individual de Boleto

**Envio manual:**

1. Acesse o módulo **Contas a Receber**, localize e selecione o título desejado.
2. Clique em **"Impressão Boleto"**.
3. Na janela, informe a **conta bancária** do Efí Bank e o **tipo de cobrança**.
4. Clique em **"Enviar boleto ao banco"**.

O Bimer se comunicará com a API da Alterdata, que enviará e registrará o boleto. Após o Efí Bank confirmar, ele mesmo fará o envio do boleto por e-mail ao cliente.

O envio é feito para o endereço informado no **tipo de contato e-mail de boleto** do Cadastro da Pessoa. Se não existir esse tipo de contato, o envio é feito para o e-mail principal do cliente.

**Opções disponíveis após o registro:**

- **Visualizar / Imprimir** — Se já registrado: abre o link de visualização/impressão no banco. Se não: pergunta se deseja enviar.
- **E-mail** — Se já registrado: abre tela para informar o e-mail de envio. Se não: pergunta se deseja enviar.
- **WhatsApp** — Envia o QRCode do boleto ao cliente. O QRCode precisa estar validado no Banco Central.

> **Observação:** Esses ajustes impactam as telas de impressão individual nos aplicativos CRM e Telecobrança.

> **Dica:** Se o Bimer exibir a mensagem *"Ocorreu um problema na comunicação com a instituição bancária"*, verifique com o DSN Bimer se a situação é no sistema ou na API do Boleto Fácil. Pode ser instabilidade no serviço do Efí Bank.

### Emissão em Massa de Boletos

Caminho: **Contas a Receber >> aba Ferramentas >> Imprimir Boletos**

1. Informe a **Empresa** e o **N° da Conta Bancária**.
2. Preencha os filtros (títulos sem boleto impresso, com boleto impresso ou todos).
3. Nas próximas telas, filtre por Pessoa, característica de pessoa e tipos de cobrança.
   - **Tipos de cobranças** — Filtra títulos com os tipos informados.
   - **Títulos com tipo de cobrança indefinidos** — Filtra títulos sem tipo de cobrança; ao marcar, informe o tipo de cobrança que será gravado no histórico de carteira desses títulos.
4. Filtre também por Cidades, UF, Mapas de Carregamento, conforme necessário.
5. Na tela **Filtro por títulos**, desmarque os títulos para os quais não deseja emitir boleto neste momento.
6. Clique em **"Enviar boleto para o banco"**.

O Efí Bank gera o boleto e envia por e-mail para os clientes.

> **Observação:** Caso o boleto já tenha sido registrado no banco, não é possível selecionar um e-mail diferente para reenvio — será enviado automaticamente para o e-mail registrado no Efí Bank.

**Envio automático:** Configurado por meio de tarefa agendada que se comunica com a API Boleto Fácil. Consulte: https://ajuda.alterdata.com.br/bimerbase/bimer-financeiro/envio-automatico-de-boletos

### Validações para o Envio do Boleto

1. **Valor do boleto** — Deve ser igual ou superior a **R$ 5,00**.
2. **Data de vencimento** — Não pode estar vazia ou ser inferior à data atual.
3. **CPF/CNPJ do cliente** — Obrigatório e válido. Títulos sem pessoa vinculada não podem ser enviados.
4. **Telefone do cliente válido** — Obrigatório no padrão DDD + número. O sistema valida o tipo de contato configurado em **Configurador >> Geral >> Opções >> Pessoa >> Tipo de contato >> campo "Telefone"**.
5. **Alíquota de juros** — Entre 0% e **0,33% ao dia**.
6. **Alíquota de multa** — Entre 0% e **10%**.
7. **Client ID / Client Secret** — Dados corretos fornecidos pelo banco.

### Baixa dos Títulos Recebidos no Banco

A baixa é feita através da tarefa **GeBaixaTitulosBoletoFacil**, executada pelo **Gerente Eletrônico (GEAgente)**.

Caminho para criar a tarefa: **Configurador Bimer >> Geral >> Tarefas**
Caminho para agendar: **Configurador Bimer >> Geral >> Tarefas Agendadas**

Quando a tarefa agendada estiver vinculada ao GeBaixaTitulosBoletoFacil, é habilitada a aba **"Integração com Bancos"**, onde é possível informar usuários para receberem spy em caso de divergência de valores na baixa.

**Critérios para que um título seja considerado:**
- Título não pode estar excluído.
- Título deve estar em aberto.
- Ter histórico de carteira ativo (sem usuário de cancelamento).
- Histórico de carteira ativo com conta configurada para integração com o banco.
- Histórico de carteira ativo com o campo `idexterno` preenchido na tabela `HistoricoCarteira`.
- Histórico de carteira ativo com o campo `idtransacao` preenchido na tabela `HistoricoCarteira`.

> **Nota técnica:** O `IdTransacao` corresponde ao código da transação do boleto no Efí Bank. O `IdExterno` é o ID próprio do Efí Bank.

**Dados utilizados na baixa:**
- **Forma de pagamento:** a mesma informada no título.
- **Tipo de baixa:** configurado em **Configurador Bimer >> Financeiro >> Opções >> Baixas >> Configuração de tipo de baixa >> campo "Final (gera numerário)"**.
- **Conta bancária:** a mesma do histórico de carteira.
- **Empresa:** a mesma empresa da conta bancária.

A tarefa criará um lote de baixa com a descrição **"Lote de Baixa GerenciaNet"** (ou Efí, dependendo da versão).

### Tratamento de Valores para Baixas

- Se o valor recebido for **maior** que o esperado: a diferença é lançada como **juros/multa** e o título é baixado totalmente.
- Se o valor recebido for **menor** que o esperado: a diferença é lançada como **desconto** e o título é baixado totalmente.

**Baixa parcial (opcional):**

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Baixa automática / Integração com Bancos**

Se a opção **"Realizar a baixa parcial, quando o valor recebido for menor que o valor a receber"** estiver marcada e o valor informado pelo banco for menor que o esperado, será feita uma baixa parcial com o tipo de baixa informado nessa tela. O sistema respeita também o limite de tolerância configurado.

> **Informação importante:** O Efí Bank não informa o valor de juros e multa recebidos separadamente — informa apenas o valor total recebido. O sistema calcula os juros e multa através das alíquotas gravadas no histórico de carteira no momento do envio dos boletos.

---

## Proteções para Títulos já Integrados

### Exclusão de Título pelo Financeiro

Ao tentar excluir um título com histórico de carteira ativo gerado pela integração, o sistema apresentará mensagem informando que o título será cancelado no banco. Ao confirmar, o título é cancelado no banco e o histórico de carteira é cancelado no Bimer.

> **Observação:** Esta proteção foi implementada nos aplicativos Contas a Receber e BI Financeiro.

### Exclusão de Título Criado pelo Faturamento

Quando uma nota fiscal é cancelada ou devolvida, o título a receber é excluído no Contas a Receber. A integração via API Boleto Fácil cancela automaticamente o título no banco nas seguintes condições:

1. Qualquer rotina de cancelamento ou devolução que faça a exclusão dos títulos.
2. Autorizar/Validar o documento até o momento de realizar a liberação do estoque.
3. Executar o módulo **Liberador de estoque** — somente após sua autorização a API pode cancelar o título no banco.

### Alteração de Histórico de Carteira

Ao alterar o histórico de carteira de títulos já integrados, o sistema apresentará mensagem informando que o título será excluído no banco. Ao confirmar, o título é cancelado no banco e o novo histórico de carteira é incluído.

> **Observação:** Esta proteção foi implementada na alteração pela tela de cadastro do título. Em **"Gerar histórico carteira"** foi feita proteção bloqueando a alteração por essa tela.

### Alteração de Dados em Títulos já Integrados

1. **Alteração da data de vencimento** — O sistema apresenta mensagem informando que o vencimento do boleto será alterado no banco.
2. **Alteração dos campos abaixo** — O sistema informa que a alteração não pode ser feita e orienta a utilizar a rotina de renegociação:
   - Código da Pessoa
   - Nome do título
   - Valor original
   - Desmembramento do valor
   - Incluir e excluir item
   - Indexador
   - Tela de item / Valor do item / Quantidade do item / Descrição do item

> **Observação:** Esta proteção foi implementada nos aplicativos Contas a Receber e BI Financeiro.

### Geração de Remessa

Caminho: **Contas a Receber >> aba Ferramentas >> Arquivo remessa**

1. Não é permitido gerar remessa em uma conta configurada para integração de boletos com o banco.
2. Não é possível marcar um título com histórico de carteira ativo (gerado pela integração) na rotina de geração de arquivo remessa.

### Movimentos Automáticos

Caminho: **Contas a Receber >> Inclusão em massa**

No grupo **"Informações para impressão de boleto bancário dos títulos criados neste movimento automático"**, não é permitido informar uma conta bancária configurada para integração de boletos com o banco.

### Renegociação de Títulos

Caminho: **Contas a Receber >> aba Ferramentas >> Renegociar título**

Ao renegociar títulos já integrados ao banco, é apresentado um alerta informando que o título será excluído no banco.

> **Observação:** Esta alteração impacta as renegociações dos aplicativos CRM e Telecobrança.

### GeImprimeBoleto

Não é permitido utilizar o GeImprimeBoleto em uma conta configurada para integração de boletos com o banco:

1. Em **Configurador Bimer >> Financeiro >> Opções >> Boleto bancário/Arquivo Remessa >> Serviço de impressão de boleto >> Formas de pagamento para impressão de boleto**: não é possível informar uma conta bancária configurada para integração.
2. Em **Configurador Bimer >> Financeiro >> Informações bancárias >> Contas bancárias**: não é possível salvar a conta com a opção de integração marcada se ela estiver configurada para usar o GeImprimeBoleto.

### Impressão em uma Conta Diferente

Caminho: **Contas a Receber >> aba Ferramentas >> Imprimir boletos**

Não é permitido selecionar um título integrado com o banco para impressão em uma conta diferente da informada no histórico de carteira. O sistema informa que o histórico de carteira atual deve ser cancelado antes.

> **Observação:** Esta alteração impacta a impressão em massa do aplicativo BI Financeiro.

### Baixa de Títulos Integrados

Não é permitido baixar manualmente um título que já tenha sido integrado com o banco. A baixa deve ser realizada pela tarefa **GeBaixaTitulosBoletoFacil**.

> **Observação:** Os ajustes impactaram todas as rotinas de baixas nos aplicativos Contas a Receber, BI Financeiro e Telecobrança.

---

## Outros Recursos

### Aglutinar Itens no Boleto

Quando um título possui mais de um item (ex.: diferentes tipos de cobranças em um único título), é possível aglutinar todos os itens em apenas um, com uma única descrição, no momento do envio ao banco.

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Boleto Bancário / Arquivo remessa >> Emissão de Boleto >> Configurações adicionais**

Opções disponíveis:

1. **Aglutinar itens boletos GerenciaNet** — Sem essa marcação, o envio é feito de modo individual para o Efí Bank, cada item com sua descrição. Para enviar de modo aglutinado, marque esta opção.

2. **Utilizar descrição padrão para substituir a descrição de títulos com apenas um item** — Se marcada, o sistema sempre usa a descrição do campo 3 no envio, mesmo que o título tenha apenas um item. Se desmarcada, a descrição do campo 3 é usada apenas para títulos com dois ou mais itens.

3. **Descrição padrão do item do boleto** — Preencha a descrição padrão para o item aglutinado ao enviar o título para o Efí Bank.
