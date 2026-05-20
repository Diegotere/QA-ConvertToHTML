# Arquivo Remessa e Retorno — Liquidação — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Montagem dos Arquivos](#montagem-dos-arquivos)
  - [Importação](#importação)
  - [Forma Manual](#forma-manual)
  - [Montagem do Layout](#montagem-do-layout)
- [Remessa de Liquidação](#remessa-de-liquidação)
  - [Modalidade de Pagamento](#modalidade-de-pagamento)
  - [Lançamento do Título](#lançamento-do-título)
  - [Boleto Bancário](#boleto-bancário)
  - [DOC e TED](#doc-e-ted)
  - [Tributos](#tributos)
  - [Geração do Arquivo Remessa](#geração-do-arquivo-remessa)
  - [Rejeição](#rejeição)
- [Retorno](#retorno)
  - [Ocorrências](#ocorrências)
  - [Retorno de Liquidação](#retorno-de-liquidação)
- [Fluxo Simplificado da Rotina](#fluxo-simplificado-da-rotina)

---

## Montagem dos Arquivos

### Importação

Quando o cliente entrar em contato para homologar uma nova conta, é possível importar montagens já prontas obtidas com o setor de homologação da matriz (analistas de representações devem entrar em contato com a equipe de canais através do Karoo).

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Remessa / Retorno >> Importa Layout**

Informe os dados que deseja importar:

- **Ocorrências** — Importa a tabela de ocorrências para inserir no banco relacionado.
- **Registros de Layout** — Importa os registros disponíveis no arquivo.
- **Montagem de Layout** — Além de importar, o layout já será montado.

Selecione o arquivo, clique no botão de **Filtro** ao lado de **Bancos disponíveis**, clique em **Adicionar** e depois em **Processar**.

Para conferir a importação: **Configurador >> Financeiro >> Informações Bancárias >> Remessa / Retorno >> Montagem de Layout**.

### Forma Manual

Quando não houver arquivo de importação ou for necessário ajuste manual:

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Remessa / Retorno >> Criação de registros**

A criação dos registros deve ser feita conforme especificado no manual do banco. No quadro **Layout**, informe os tipos de registros e as finalidades:

- **Header de arquivo** — Cabeçalho do arquivo
- **Header de lote** — Cabeçalho do lote (subdivisões do arquivo)
- **Detail** — Detalhes dos títulos
- **Trailer de lote** — Rodapé do lote
- **Trailer de arquivo** — Rodapé do arquivo

No quadro **Variáveis**, informe as posições de cada variável que compõe o tipo de registro:

- **Variável (fixa)** — Selecione uma variável que será utilizada na composição do layout. Exemplo: `NrTítulo` (número do título).
- **Conteúdo (literal)** — Utilizado quando o manual do banco especifica um conteúdo fixo para determinadas posições.

**Tipos de variáveis:**
- **A (Alfanumérica)** — Aceita letras e números. Alinha o conteúdo à esquerda, com espaços em branco à direita.
- **N (Numérico)** — Aceita apenas números. Alinha o conteúdo à direita, com zeros à esquerda.

### Montagem do Layout

Caminho: **Configurador >> Financeiro >> Informações bancárias >> Remessa / Retorno >> Montagem de Layout**

Na primeira tela do assistente, informe o banco e clique em **Avançar**. Selecione o tipo:

- **Remessa – Liquidação** — Envio de títulos a pagar para o banco descontar da conta bancária.
- **Retorno – Liquidação** — Retorno enviado pelo banco confirmando o pagamento ou não dos títulos.

Informe os dados da montagem e se o nome do arquivo terá complemento (data atual ou sequência, conforme exigência do banco).

Informe os lotes que farão parte da montagem. Para cada lote (modalidade de pagamento):

1. Clique em **Adição** para montar o lote.
2. Localize os registros de header, detail e trailer do lote e clique em **Adicionar Registro Selecionado**.
3. Organize os registros com as setas vermelhas.
4. Informe uma descrição para o lote (geralmente o nome da modalidade de pagamento).
5. Informe a **natureza de lançamento** e/ou a **modalidade de pagamento** que fará parte deste lote.
6. Grave e repita para cada modalidade de pagamento.

> **Atenção:** Não é possível repetir a modalidade de pagamento dentro da mesma montagem.

> **Nota (versão 10.00.09.00):** Foi disponibilizada a variável **"DT_PAGAMENTO"** que permite avisar ao banco o dia que o cliente deseja que o pagamento seja realizado. Por padrão, o sistema considera a data do arquivo remessa como data de pagamento.

---

## Remessa de Liquidação

### Modalidade de Pagamento

A modalidade de pagamento é uma exigência bancária (FEBRABAN) para identificar antecipadamente como será feito o pagamento ao fornecedor. Principais modalidades:

- **DOC** — Documento de Crédito: transferência bancária com limite de R$ 4.999,99.
- **TED** — Transferência Eletrônica Disponível: sem limite de valor, pode ser usado entre quaisquer bancos.
- **Boletos** — Documento gerado pelo fornecedor ou banco para pagamento via código de barras ou linha digitável.

Caminho: **Configurador >> Financeiro >> Outros Cadastros >> Modalidade de Pagamento**

> **Nota:** A opção **Guia de pagamento** deve ser marcada apenas para tributos sem código de barras.

**Exemplos de modalidades por banco:**

*Bradesco CNAB 240:* Crédito em Conta, DOC, TED, Boletos mesmo banco, Boletos outros bancos, DARF Normal, GPS, FGTS, Pagamento de Salários, entre outros.

*Itaú CNAB 240:* TED mesmo titular, TED outro titular, DOC, Crédito em conta, Boletos, DARF Normal, GPS, FGTS, Pagamento de Salários, entre outros.

*Caixa Econômica CNAB 240:* Crédito em conta corrente, DOC, TED, Boletos Caixa, Boletos outros bancos, Pagamento de Salários, entre outros.

*Santander CNAB 240:* DOC, TED, Crédito em conta corrente, Boletos, DARF, GPS, Pagamento de Salários, entre outros.

*Banco do Brasil CNAB 240:* DARF Normal, GPS, DOC, TED, Crédito em conta, Boletos, FGTS, Pagamento de Salários, entre outros.

A partir da versão **9.07.02.00**, é possível vincular a modalidade de pagamento às formas de pagamento **"Boleto bancário"** ou **"Transferência bancária"**:

- **Boleto bancário:** O sistema valida o banco informado no título.
  - Mesmo banco da conta da remessa → usa a modalidade configurada para **"boleto mesmo banco"**.
  - Banco diferente → usa a modalidade configurada para **"boleto outro banco"**.
  - Sem banco informado no título → modalidade não é preenchida.

- **Transferência bancária:** O sistema valida o CNPJ da pessoa do título.
  - Mesmo CNPJ da empresa → usa a modalidade configurada para **"TED/DOC mesmo titular"**.
  - CNPJ diferente → usa a modalidade configurada para **"TED/DOC outro titular"**.

### Lançamento do Título

Para gerar o arquivo remessa, o título a pagar deve conter:

1. Data de vencimento não vencida.
2. **Modalidade de Pagamento** — campo obrigatório que determina que o título vai para remessa e qual layout será usado.
3. Dados obrigatórios:
   - Número do título
   - Código da Pessoa
   - Valor
   - Forma de Pagamento
   - Natureza de Lançamento
   - Vencimento Programado

De acordo com a modalidade de pagamento, outros campos também passam a ser exigidos.

### Boleto Bancário

Para pagamento de boletos, informe se é **bloqueto** ou **concessionária**, além do **código de barras**.

- **Bloqueto** — Títulos convencionais, cartão de crédito, mensalidades, etc.
- **Concessionárias** — Contas de energia elétrica, gás encanado, água, etc.

> **Dica:** Para preencher o número da linha digitável, utilize uma leitora de código de barras conectada ao computador. Clique no botão correspondente no cadastro do título, aproxime o leitor do boleto e o campo será preenchido automaticamente.

### DOC e TED

Ao utilizar estas modalidades, preencha os campos da área **Informações do Fornecedor** no cadastro do título (dados bancários do fornecedor: banco, agência, conta).

### Tributos

Caminho: **Configurador >> Financeiro >> Opções >> A pagar >> Outras Configurações**

Informe as **Naturezas de lançamentos para títulos de tributos** de acordo com as guias usadas pela empresa.

Após gravar a configuração, ao cadastrar o título com a natureza de lançamento configurada, o botão **Tributos** será habilitado. Nesta tela, preencha obrigatoriamente:

- Código da receita do tributo
- Código de identificação do tributo
- Número Referência do tributo
- Vl. Outras entidades (Valor Total Guia)

Para finalizar o lançamento, escolha a modalidade de pagamento de cada tributo (DARF, GPS, etc.) e não marque as opções **Bloqueto** nem **Concessionária** (caso não haja código de barras).

### Geração do Arquivo Remessa

Caminho: **Módulo A Pagar >> Gerar Arquivo Remessa**

1. Informe a **Empresa**, **Conta** e selecione o **layout**.
2. Faça o filtro por **Data de Vencimento** e/ou **Data de Emissão**.
3. Marque **Todos os títulos** ou escolha outro tipo (ex.: **Não enviados ao banco ainda**).
4. Nas próximas telas, filtre por forma de pagamento, modalidade, natureza de lançamento (se não informar nada, todos os títulos serão considerados).
5. Selecione os títulos desejados.
6. Escolha o diretório para salvar o arquivo, informe um nome com extensão `.TXT` ou `.REM`.
7. Clique em **Gerar arquivo**.

Após a geração, o cliente deve importar o arquivo remessa no site do banco. Na tela principal do módulo A Pagar, os títulos adicionados ao arquivo remessa ficam com ícone azul, indicando que estão em processo de baixa dentro do lote.

> **Dica:** Se alguns títulos não aparecerem mesmo com o filtro correto, verifique a configuração **"Permitir selecionar títulos a pagar para geração do arquivo remessa somente após a autorização de pagamento"** em **Configurador >> Financeiro >> Opções >> Baixa**.

### Rejeição

Se houver lançamento incorreto em algum campo, o banco não aceitará o arquivo remessa. Para corrigir:

1. Edite o título, acesse a aba **Complementar** e verifique o nome do arquivo remessa anterior.
2. Na tela principal do módulo A Pagar, clique em **Baixa manual >> Abrir Lote**.
3. Informe a Empresa e busque pela descrição padrão: *"Arquivo remessa + nome do arquivo.txt"*.
4. Para retirar apenas o título com erro: clique em **Remover Lançamento**.
5. Para remover a baixa de todos os títulos do lote: clique em **Excluir Lote**.

---

## Retorno

### Ocorrências

As ocorrências são os eventos presentes no arquivo retorno que o banco usa para indicar o que ocorreu no processamento do título (baixas, erros, etc.). Podem ser importadas ou cadastradas manualmente.

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Bancos >> (abrir cadastro do banco)**

A partir da versão **10.00.06.00**, há a opção de a ocorrência retirar automaticamente o título do lote de baixa (para remessas rejeitadas ou que exijam ajuste). No cadastro da ocorrência, marque **"Excluir baixa do título"**.

Na aba **A Pagar**, em **Ocorrência**, ao abrir uma ocorrência há a marcação **Baixar título** — selecione a opção e informe um tipo de baixa para as ocorrências usadas no arquivo retorno. Os **Motivos** devem ser cadastrados conforme o manual de cada banco.

### Retorno de Liquidação

Caminho: **Módulo Contas a Pagar >> Baixa Automática**

1. Informe a **Empresa**, **Conta** utilizada para baixa e o **Layout** do arquivo retorno.
2. No campo **Arquivo**, direcione para o local onde está salvo o arquivo retorno recebido do banco.
3. Escolha o tipo de arquivo de **log** para análise da importação.
4. A opção **Aglutina Movimento bancário** gera um único movimento no Disponível com todos os títulos a serem baixados (informe o Nr. do documento abaixo).
5. Clique em **OK**.

Na próxima tela, o sistema demonstra quais títulos foram baixados e quais estão com algum tipo de erro.

**Baixa automática via tarefa agendada (versão 9.07.03.00+):**

Para configurar a leitura e importação automática de múltiplos arquivos retorno:

1. Cadastre a tarefa utilizando o sistema **000232 – Baixa automática de títulos a pagar**.
2. No cadastro da tarefa agendada, aponte a tarefa cadastrada. O sistema habilitará a aba **"Baixa automática de títulos a pagar"**.
3. Clique em **"+"**, informe o banco, o layout do arquivo retorno e o diretório onde o arquivo será salvo.

> **Atenção:** Só é permitido um layout de arquivo para cada banco.

**Variáveis obrigatórias no layout do arquivo retorno:**

*Header de lote:*
- `CD_BANCO_COMPENS` — Valida o código do banco no arquivo.
- `NR_CONTA_COMPENS` e `DAC_NR_CONTA_COMPENS` — Resgata a conta bancária do registro.
- `NR_SEQ_LOTE` — Realiza vínculo do Header de lote com registros do Detail.

*Detail:*
- `NR_SEQ_LOTE` — Realiza vínculo dos registros do Detail com o Header de lote.

**Funcionamento da rotina automática:**

1. O sistema verifica o diretório configurado e, ao identificar um arquivo, inicia a rotina de baixa automática.
2. Verifica se o código do banco na variável `CD_BANCO_COMPENS` corresponde ao banco da tarefa em execução. Se não corresponder, gera um log em `GEBaixaAutomaticaAPagar\Logs` e carrega o próximo arquivo.
3. Após execução correta, move o arquivo retorno para a subpasta `GEBaixaAutomaticaAPagar\Processados`.
4. A execução continua enquanto existirem arquivos no diretório configurado.

> **Atenção:** O sistema não apresentará mensagens de crítica, informação ou confirmação. Todas as mensagens são armazenadas na pasta `GEBaixaAutomaticaAPagar\Logs`. Se o cliente utilizar a rotina em mais de um banco, a configuração deve ser repetida para cada banco.

---

## Fluxo Simplificado da Rotina

1. Configurar Banco
2. Configurar Conta
3. Importação / criação dos registros
4. Montagem do Layout (informando naturezas de lançamentos e modalidade de pagamento)
5. Criação do título com a natureza e modalidade de pagamento
6. Geração do arquivo remessa com os títulos a Pagar
7. Importação do arquivo retorno para baixar os títulos a pagar
