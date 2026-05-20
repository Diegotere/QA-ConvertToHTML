# Remessa e Retorno — Informações Gerais — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Termos e Conceitos](#termos-e-conceitos)
  - [Arquivo Remessa](#arquivo-remessa)
  - [Tipos de Arquivos Remessa](#tipos-de-arquivos-remessa)
  - [Siglas](#siglas)
  - [Como é Composto um Arquivo Remessa ou Retorno?](#como-é-composto-um-arquivo-remessa-ou-retorno)
  - [Exemplo de Arquivo Remessa/Retorno](#exemplo-de-arquivo-remessaretorno)
  - [Informações Importantes no Manual do Banco](#informações-importantes-no-manual-do-banco)
  - [O que são as Notas Explicativas?](#o-que-são-as-notas-explicativas)
- [Configurações no Bimer](#configurações-no-bimer)
  - [Bancos](#bancos)
  - [Contas Bancárias](#contas-bancárias)
- [Informações Extras](#informações-extras)
  - [Validadores](#validadores)

---

## Introdução

A integração bancária facilita o trabalho do setor financeiro. Por meio dela, o banco auxilia a empresa a emitir boletos para os clientes, verificar quais já foram quitados e auxiliar no controle do pagamento das despesas. A empresa gera seus títulos, os de competência bancária são enviados aos bancos, e após um período o banco retorna um arquivo indicando eventos como: títulos quitados pelos clientes, títulos pagos pela empresa ou títulos gerados com algum tipo de erro.

A integração bancária abrange o envio ao banco tanto de contas a pagar quanto de contas a receber. Este manual apresenta informações comuns às duas rotinas. Para detalhes específicos, consulte os manuais de **Remessa e Retorno de Cobrança** (boletos a receber) e **Remessa e Retorno de Liquidação** (títulos a pagar), disponíveis no **Portal UCA >> Bimer >> Manuais >> Materiais >> Financeiro**.

---

## Termos e Conceitos

### Arquivo Remessa

É um arquivo enviado pelo cliente ao banco contendo instruções de cobrança ou pagamento, interpretadas pelo sistema dos bancos. Todo arquivo remessa possui um **arquivo retorno** gerado pelo banco como contrapartida, contendo o resultado do processamento das informações enviadas.

### Tipos de Arquivos Remessa

**Remessa de Liquidação:** Utilizada para liquidação (pagamento) de títulos no banco. O arquivo é gerado no **Contas a Pagar** e possui várias modalidades (tipos de lote): pagamentos de DOC, TED, crédito em conta, pagamento de tributos, etc.

**Remessa de Cobrança:** Enviada ao banco para cobrança de clientes (títulos a receber com forma de pagamento boleto). O arquivo é gerado pelo **Contas a Receber** e possui um único lote com todos os títulos que serão recebidos ou não pelo banco.

> **Observação:** Independentemente do tipo de arquivo, o banco sempre gera o arquivo retorno com o resultado do processamento das informações enviadas por remessa.

### Siglas

**CNAB**

Os bancos usam o padrão **FEBRABAN** (Federação Brasileira de Bancos) de **CNAB** (Centro Nacional de Automação Bancária) para receber e enviar informações às empresas clientes usando os arquivos remessa e retorno. O objetivo é fazer o intercâmbio de informações digitalmente entre o sistema do banco e o do cliente.

**CNAB 500, 400 e 240**

A principal diferença entre os formatos é a **quantidade de colunas** por linha:

- **CNAB 500** — 500 posições por linha
- **CNAB 400** — 400 posições por linha
- **CNAB 240** — 240 posições por linha

Para identificar o formato de um arquivo, basta contar as colunas em um editor de texto como o Notepad++.

Como no **CNAB 240** a linha tem menos informações, ele utiliza **segmentos** para cada título (geralmente P, Q, R, etc.), cada um com 240 posições. Os CNABs 500 e 400 não possuem segmentos, pois cada linha tem posições suficientes para registrar todas as informações.

### Como é Composto um Arquivo Remessa ou Retorno?

Um arquivo remessa é montado através de uma estrutura pré-definida pelos bancos, composta pelos seguintes **tipos de registros**:

- **Header (Cabeçalho)** — Inicia um bloco de informações. Existem headers para iniciar os dados de uma empresa ou de um conjunto de títulos (lotes) com algo em comum, como todos os títulos pagos via DOC.
- **Trailer (Rodapé)** — Encerra um bloco de informações. Para cada registro header deve haver um trailer correspondente.
- **Detail (Detalhe)** — Contém as informações dos títulos em si. Para cada título (a pagar ou a receber) existe, no mínimo, um registro detail correspondente.

> **Observação:** Pode haver mais de um detail para cada título quando as informações exigidas pelo banco não cabem em uma única linha. Nesse caso, os details são divididos em **segmentos**. Exemplo: "Detail–Segmento A" com dados do título (valor, vencimento) e "Detail–Segmento B" com informações de pagamento (conta e agência para DOC).

### Exemplo de Arquivo Remessa/Retorno

**CNAB 240** — Arquivo com quatro títulos, cada um com os segmentos P, Q e R gerados.

**CNAB 400** — Arquivo com cinco títulos, cada um em uma única linha com 400 colunas.

> *[Imagem: exemplos de arquivos remessa CNAB 240 e CNAB 400]*

### Informações Importantes no Manual do Banco

O manual do banco contém todas as regras para criação do arquivo remessa. O manual geralmente está no formato de tabela e contém:

- **Nome do campo** — Identificação resumida do campo.
- **Significado/Descrição** — Descrição do que deve ser informado no campo.
- **Posição** — Indica em qual coluna do arquivo o campo se inicia e termina. Em alguns manuais, a coluna **Picture** informa a quantidade de casas decimais.
- **Picture** — Indica se o campo é alfanumérico (aceita letras e números) ou numérico (somente números), além da quantidade de casas decimais para valores.
- **Informação fixa** — Campo cujo conteúdo já é definido pelo banco e não depende do sistema (ex.: código do tipo de registro, campos que devem conter sempre zeros ou espaços em branco).
- **Conteúdo** — Indica a informação fixa obrigatória ou remete à nota explicativa para esclarecimento.

### O que são as Notas Explicativas?

As notas explicativas auxiliam o preenchimento de campos cujo conteúdo depende de algum fator externo. Por exemplo, um campo que recebe o tipo de pagamento: se for DOC, o código pode ser 1; se for depósito em conta do mesmo banco, o código pode ser 2; e assim por diante.

> **Nota:** Pode acontecer de a própria nota explicativa não ser clara. Nestes casos, pesquise a informação em outras fontes, como outros manuais e internet.

---

## Configurações no Bimer

### Bancos

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Bancos**

Dentro do cadastro do banco, a opção **"Calcular 'NOSSO NÚMERO' para títulos enviados via arquivo remessa de cobrança"** deve estar marcada para a maioria dos bancos. Confirme com o banco se é ele quem faz o cálculo ou se pode ser feito diretamente pelo sistema.

> **Atenção:** Com a opção **marcada**, o sistema calcula o DV do "nosso número" e o usuário pode gerar o boleto ou a remessa em qualquer ordem. Com a opção **desmarcada**, o sistema não calcula o DV — o usuário precisa gerar/imprimir o boleto primeiro (para gerar o DV) e depois gerar a remessa.

O **arquivo de layout (RTM)** para o boleto pode ser informado no cadastro do banco ou no cadastro das contas, dependendo se um mesmo RTM será utilizado para boletos de contas diferentes do mesmo banco. O RTM de boleto é utilizado apenas para remessa de cobrança.

O **cálculo DV** (Dígito Verificador do nosso número) deve ser selecionado de acordo com o banco cadastrado.

As **mensagens** (arquivo remessa e impressão de boletos de contas a receber) podem ser informadas conforme a necessidade do cliente. Para cadastrar mensagens: **Configurador Bimer >> Geral >> Outros Cadastros >> Mensagens**.

As **ocorrências e motivos** devem ser cadastradas conforme o manual do banco.

### Contas Bancárias

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Contas Bancárias**

Além dos dados comuns, atenção aos seguintes campos:

- **Código do cedente** — Varia conforme o banco; em geral é composto pelo número da carteira, agência, conta e dígito. Cada banco tem um padrão.
- **Código do cliente banco** — Número do cliente no banco conforme o contrato. O cliente é responsável por fornecer esta informação.
- **Carteira(s)** — Código da carteira utilizada, correspondente ao tipo de cobrança contratado com o banco.
- **Número do convênio** — Número do contrato do cliente com o banco para geração do arquivo remessa de **cobrança**.
- **Convênio de Liquidação** — Número do contrato do cliente com o banco para geração do arquivo remessa de **liquidação**.

> **Observação:** Os campos de convênio são preenchidos apenas se a empresa possuir o serviço mencionado. Na maioria dos casos são distintos, pois a empresa possui contratos separados para cobrança e liquidação.

- **Cálculo do DV** — Carregado a partir da informação do banco vinculado à conta, mas pode ser alterado.
- **Sequencial para o Nosso Número** — Informe o número utilizado para o sequencial do NOSSO NÚMERO. A quantidade de dígitos deve ser verificada com o banco.

Na aba **Remessa (Cobrança e liquidação)**, defina dados padrões para evitar preenchimento manual nas rotinas:

- **Layout padrão para remessa de cobrança** e **Carteira padrão** — o sistema já sugere esses dados na geração do arquivo.
- **Número sequencial do arquivo remessa e de pagamento** — caso já possua um sequencial emitido anteriormente (inclusive em outro software), informe aqui para que o sistema dê continuidade à numeração.

---

## Informações Extras

### Validadores

Os bancos disponibilizam sites para validar o layout do arquivo remessa criado:

- **Banco do Brasil:** https://gmtedi.bb.com.br/validaleiaute/#/validadorleiaute
- **Bradesco:** https://banco.bradesco/html/pessoajuridica/solucoes-integradas/outros/layout-de-arquivo.shtm
- **Sicoob:** https://www.sicoob.com.br/web/sicoob/validador-cnab
- **Sicredi:** https://sicredinortesc2.websiteseguro.com/cobranca/home.php
