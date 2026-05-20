# Arquivo Remessa e Retorno de Cobrança — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Carteira de Cobrança](#carteira-de-cobrança)
  - [Carteira Simples](#carteira-simples)
  - [Carteira Garantida](#carteira-garantida)
- [O que é Nosso Número?](#o-que-é-nosso-número)
- [Especificações por Banco para Remessa Cobrança](#especificações-por-banco-para-remessa-cobrança)
  - [Caixa](#caixa)
  - [Itaú](#itaú)
- [Montagem dos Arquivos](#montagem-dos-arquivos)
  - [Importação](#importação)
  - [Forma Manual](#forma-manual)
  - [Montagem do Layout](#montagem-do-layout)
- [Remessa de Cobrança](#remessa-de-cobrança)
  - [Tipo de Cobrança](#tipo-de-cobrança)
  - [Lançamento do Título](#lançamento-do-título)
  - [Geração do Boleto](#geração-do-boleto)
  - [Geração do Arquivo Remessa](#geração-do-arquivo-remessa)
  - [Desconto no Boleto](#desconto-no-boleto)
- [Retorno](#retorno)
  - [Rejeição](#rejeição)
  - [Ocorrências](#ocorrências)
  - [Retorno de Cobrança](#retorno-de-cobrança)
  - [Baixa Parcial no Retorno](#baixa-parcial-no-retorno)
  - [Retorno de Cobrança pelo Gerente Eletrônico](#retorno-de-cobrança-pelo-gerente-eletrônico)
- [Fluxo Simplificado da Rotina](#fluxo-simplificado-da-rotina)
- [PIX na Remessa de Cobrança](#pix-na-remessa-de-cobrança)
- [Tarifa Bancária](#tarifa-bancária)

---

## Introdução

Este manual aborda especificamente a rotina de remessa e retorno de cobrança — ou seja, de títulos a receber cadastrados no sistema com forma de pagamento **"boleto"**.

> **Pré-requisito:** A conta bancária deve estar configurada para a emissão de remessa de cobrança. Consulte o manual de **Informações Gerais** disponível no Portal UCA.

---

## Carteira de Cobrança

Também conhecido como **Tipo de Cobrança**. Existe a cobrança sem registro e a cobrança com registro.

> **Atenção:** A cobrança sem registro não é mais permitida pela FEBRABAN.

- **Cobrança sem registro:** A empresa emite o boleto e o envia ao cliente. Não há registro no banco sobre o boleto emitido — o banco só fica sabendo quando ele for pago.
- **Cobrança registrada:** A empresa deve enviar um arquivo de remessa ao banco para que ele tenha conhecimento dos boletos emitidos. Nesta modalidade, o cliente trabalha com Boleto/Remessa/Retorno.

### Carteira Simples

Os títulos são colocados para cobrança e, no momento da liquidação, os valores são creditados ao cedente no prazo (float) definido em contrato. Permite inserir instruções de alteração de vencimento e concessão de abatimento para títulos com registro.

- **Cobrança Simples sem Registro** — Forma mais simples de cobrança. Não admite instrução de devolução ou envio para protesto. A tarifa de emissão só é cobrada após a liquidação.
- **Cobrança Simples com Registro** — O título é registrado no banco, viabilizando o controle de todo o processo de cobrança (inclusão, geração de boletos, alteração de dados, prorrogação, liquidação, baixa, encaminhamento para protesto). A principal tarifa é cobrada pelo registro dos títulos.

### Carteira Garantida

A cooperativa pode antecipar (descontar) o título de cobrança, caucionar o valor dos títulos por meio de uma operação de crédito. Os títulos são sempre registrados.

- **Caucionada** — Vinculada a uma operação de crédito (empréstimo). Os valores dos créditos dos títulos ficam retidos junto à cooperativa, que os libera ao cedente manualmente ao verificar a quitação das parcelas do empréstimo.
- **Vinculada** — Semelhante à Caucionada, mas os valores ficam retidos até a quitação total da operação de crédito.
- **Descontada** — O banco antecipa à empresa o valor dos boletos antes do cliente pagar, cobrando uma taxa por boleto antecipado. Caso o título descontado não seja pago, o cliente deverá devolver ao banco o valor antecipado com juros.

---

## O que é Nosso Número?

É o número utilizado para identificação do título no banco, montado conforme as regras estipuladas nos manuais de cada banco. Normalmente é enviado através do boleto bancário ou no arquivo remessa.

> **Atenção:** Este número deve ser **diferente para cada boleto emitido** e não pode haver duplicidades. É o número que aparece nos extratos bancários para identificação do boleto pago.

---

## Especificações por Banco para Remessa Cobrança

As configurações mudam de acordo com o banco. Abaixo estão os bancos mais comuns como exemplo.

**Padrão da linha digitável (posições):**

| Posição | Variável | Descrição |
|---------|----------|-----------|
| 1–3 | CD_BANCO | Código do banco |
| 4 | Conteúdo fixo | 9 |
| 5 | DV_VERIFICADOR | Dígito verificador geral do código de barras |
| 6–9 | FATOR_VCTO | Fator de vencimento |
| 10–19 | VALOR | Valor do documento |

### Caixa

- Solicitar o Código do cedente e o DV.
- Colocar o número **14** no campo **"Complemento do DV"** no cadastro da conta.
- O **nosso número** deve ter **15 dígitos** e no campo **"Cálculo do DV"** deve ser informado o número **23**.
- Gerar 20 títulos com intervalo de vencimento de 1 dia por causa do cálculo do DV campo livre e o DV geral.

**Regras para o DV da Caixa:**
- Para o DV do Campo livre: aceitos números de 0 a 9.
- Para o DV Geral: aceitos números de 1 a 9 (não aceita zero).

O sistema precisa formar duplas em que os números do DV do campo livre sejam usados para que possa haver a repetição. Exemplo de duplas válidas: 0/1, 1/2, 2/3, 3/4, 4/5, 5/6, 6/7, 7/8, 8/9, 9/1.

> **Dica:** Caso alguma dupla se repita ou não apareça, altere a data de vencimento para +1 dia e reimprima o boleto até chegar na combinação correta.

### Itaú

- O cliente deve solicitar ao banco a carteira que será utilizada.
- O **nosso número** deve ter **08 dígitos** e no campo **"Cálculo do DV"** deve ser informado o número **14**.

---

## Montagem dos Arquivos

### Importação

Quando já existe uma montagem pronta em alguma base do Bimer, é possível importá-la. Para obter a montagem com a Matriz, os analistas de representações devem entrar em contato com a equipe de canais através do Karoo.

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Remessa / Retorno >> Importa Layout**

Informe os dados que deseja importar:
- **Ocorrências** — Importa a tabela de ocorrências para inserir no banco relacionado.
- **Registros de Layout** — Importa os registros disponíveis no arquivo.
- **Montagem de Layout** — Além de importar, o layout já será montado.

Selecione o arquivo, clique no botão de **Filtro** ao lado de **Bancos disponíveis**, clique em **Adicionar** e depois em **Processar**.

### Forma Manual

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Remessa / Retorno >> Criação de registros**

A criação dos registros deve ser feita conforme especificado no manual do banco. No quadro **Layout**, informe os tipos de registros:

- **Header de arquivo** — Cabeçalho do arquivo
- **Header de lote** — Cabeçalho do lote
- **Detail** — Detalhes dos títulos
- **Trailer de lote** — Rodapé do lote
- **Trailer de arquivo** — Rodapé do arquivo

No quadro **Variáveis**, informe as posições de cada variável:

- **Variável (fixa)** — Variável que será utilizada na composição do layout (ex.: `NrTítulo`).
- **Conteúdo (literal)** — Conteúdo fixo especificado pelo banco para determinadas posições.

**Tipos de variáveis:**
- **A (Alfanumérica)** — Aceita letras e números. Alinha à esquerda com espaços em branco à direita.
- **N (Numérico)** — Aceita apenas números. Alinha à direita com zeros à esquerda.

### Montagem do Layout

Caminho: **Configurador Bimer >> Financeiro >> Informações bancárias >> Remessa / Retorno >> Montagem de Layout**

Na primeira tela, informe o banco e selecione **"Gerar nova montagem de layout"**. Clique em **Avançar**.

Os layouts a montar dependem do contrato com o banco. Para remessa e retorno de cobrança:

- **Remessa – Cobrança** — Envio de boletos a receber para registro no banco.
- **Retorno – Cobrança** — Retorno enviado pelo banco com os títulos pagos pelos clientes.
- **Área Variáveis de validação na baixa automática** — Habilitada ao escolher arquivo retorno – cobrança. Permite selecionar variáveis para que a baixa só ocorra se o título no sistema possuir a mesma informação do arquivo retorno (ex.: Nosso número ou número do título no banco).

Informe os dados da montagem e o complemento do nome do arquivo (se exigido pelo banco — data atual ou sequência).

Para cada lote:
1. Clique em **Adição**.
2. Localize os registros de header, detail e trailer e clique em **Adicionar Registro Selecionado**.
3. Organize os registros com as setas vermelhas.
4. Informe uma descrição para o lote.
5. Preencha o quadro **Natureza de Lançamento** com os códigos das naturezas utilizadas.
6. Em **Tipo de cobrança**, selecione o tipo que será utilizado.
7. Avance, informe um Header e um Trailer de arquivo e grave.

Ao final, confirme que a montagem possua header, detail e trailer.

---

## Remessa de Cobrança

### Tipo de Cobrança

Tabela obrigatória para a geração da remessa, que define o tipo de boleto gerado. Exemplos:

- **Cobrança Simples** — Boletos gerados; quando pagos pelos clientes, a empresa recebe conforme o prazo combinado com o banco.
- **Indexada** — A cobrança não possui valor fixo, pois está relacionada a um indexador (moeda estrangeira ou tributo). O valor pode ser alterado de acordo com o dia do pagamento.
- **Rápida** — Boletos com prazo de vencimento de até 5 dias em relação à emissão. Usado por empresas que emitem boletos com frequência e prazo curto.
- **Descontada** — A empresa recebe do banco o valor dos boletos antecipadamente, com cobrança de taxa por boleto antecipado.

Caminho: **Configurador Bimer >> Financeiro >> Tipo de Cobrança**

Marque **Título descontado** apenas se for uma cobrança descontada.

### Lançamento do Título

Campos obrigatórios para a correta integração bancária:

1. Número do título
2. Código da Pessoa
3. Valor Original
4. Tipo de Cobrança
5. Forma de Pagamento
6. Natureza de Lançamento
7. Vencimento Programado

### Geração do Boleto

**Configuração:**

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Contas bancárias >> aba Boleto bancário/Arquivo remessa >> Dados para cobrança**

Verifique se o preenchimento dos dados para o banco foi feito corretamente (conforme especificação de cada banco). Informe o **RTM padrão** para impressão do boleto. Se estiver em branco, clique em **Novo** e selecione o desejado.

> **Nota (versão 11.01.01.00):** Foi adicionada a opção que permite a alteração da data de vencimento do boleto mesmo após a impressão. A opção vem desmarcada por padrão. Para habilitar: **Configurador >> Financeiro >> Opções >> Boleto Bancário >> Arquivo Remessa >> Cobrança/Liquidação**, marque **"Permitir editar vencimento de boletos impressos"**.

**Impressão:**

Há algumas formas de imprimir o boleto:

1. **Contas a Receber** — Ideal para emissão individual. Selecione o título, acesse **aba Principal >> Impressão boleto**, confirme a conta e tipo de cobrança e clique na opção desejada. O boleto é gerado e os dados da emissão são gravados na aba **Histórico de Carteira** do título.

2. **BI Financeiro** — Para emissão em massa. Faça um filtro dos títulos a Receber, clique em **Seleção de títulos**, arraste para a tela e clique em **Emitir Boletos**. Escolha a conta, o tipo de cobrança e o layout para impressão.

3. **Contas a Receber >> Ferramentas >> Imprimir Boletos** — Para impressão de vários boletos.

> **Observação:** O campo **Tipo de cobrança** pode ser informado no ato da geração do boleto, não sendo obrigatório no cadastro do título.

### Geração do Arquivo Remessa

Caminho: **Módulo A Receber >> aba Ferramentas >> Arquivo remessa**

1. Informe a **Empresa**, **Conta**, selecione o **layout** e o número da **Carteira**.
2. Selecione os tipos de títulos a serem levados (incluindo renegociação).
3. Faça o filtro por **Data de Vencimento** e/ou **Data de Emissão**.
4. Marque **Todos os títulos** ou escolha outro tipo (ex.: **Não enviados ao banco ainda**).
5. Na tela seguinte, filtre pelos títulos com o Tipo de Cobrança definido na montagem. Opções adicionais:
   - **Incluir no filtro os títulos sem tipo de cobrança** — Adiciona títulos sem essa informação; escolha o Tipo de Cobrança que eles receberão.
   - **Alterar o tipo de cobrança no reenvio** — Permite mudar o tipo de cobrança dos títulos que já tiveram boletos gerados.
   - **Calcular novo nosso número para títulos enviados ao banco** — Recalcula o nosso número dos títulos incluídos na remessa.
6. Informe as naturezas para filtro (apenas as indicadas na montagem do layout são exibidas).
7. Na última tela, selecione os títulos, informe o **Nosso número** (sequencial), indique a pasta para salvar o arquivo remessa e clique em **Gerar arquivo**.

Após gerar o arquivo, o cliente deve importá-lo no banco.

Acessando o título incluído na remessa, na aba **Histórico de carteira** é possível ver o Tipo de cobrança usado e a data de geração do arquivo remessa.

> **Dica:** Se na montagem do layout foi incluída a variável `NR_CONVENIO`, será utilizado o campo **Número do Convênio** da conta bancária na geração do arquivo.

### Desconto no Boleto

A partir da versão **10.00.07.00**, é possível estabelecer um critério por **característica de pessoas** para definir quais clientes não terão direito a desconto no boleto. Com essas características vinculadas ao cliente, o desconto não será considerado no boleto.

---

## Retorno

### Rejeição

Após o envio do arquivo remessa ao banco, ele pode ser aceito ou rejeitado. Se algum campo do título estiver incorreto, o banco não aceita o arquivo. Para corrigir:

1. Ajuste o título.
2. Gere um novo histórico de carteira para o título.
3. Gere uma nova remessa.

### Ocorrências

As ocorrências são os eventos presentes no arquivo retorno que o banco usa para indicar o que ocorreu no processamento do título (baixas, erros, etc.). Podem ser importadas ou cadastradas manualmente.

Caminho: **Configurador Bimer >> Financeiro >> Informações Bancárias >> Bancos >> (abrir cadastro do banco)**

Na aba **A Receber**, em **Ocorrência**, ao abrir uma delas há a marcação **Baixar título** — selecione a opção e informe um tipo de baixa para as ocorrências que são usadas no arquivo retorno. Para ocorrências que não são para baixar o título, deixe a opção desmarcada.

Os **Motivos** devem ser cadastrados conforme o manual de cada banco.

### Retorno de Cobrança

Caminho: **Módulo Contas a Receber >> aba Principal >> Baixa Automática**

1. Informe a **Empresa**, **Conta** utilizada para baixa e o **Layout** do arquivo retorno.
2. No campo **Arquivo**, direcione para o local onde está salvo o arquivo retorno.
3. Escolha o tipo de arquivo de **log** para análise da importação.
4. A opção **Aglutina Movimento bancário** gera um único movimento no Disponível com todos os títulos a serem baixados.
5. Clique em **OK**.

Na próxima tela, o sistema demonstra quais títulos foram baixados e quais estão com algum tipo de erro.

### Baixa Parcial no Retorno

Disponível a partir da versão **8.02.08.00** (equivalente à 9.00.07.00).

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Baixas >> Baixa automática / Integração com Bancos >> A receber**

Na seção **"Realizar baixa parcial quando o valor recebido for menor que o valor do título"**, marque a opção **"Aplicar a baixa parcial, caso a diferença recebida a menor supere o tolerado abaixo"**. Defina um percentual e/ou valor para tolerância e informe o tipo de baixa a ser utilizado.

**Lógica:**
- Se a diferença entre o valor do título e o valor baixado estiver **dentro da tolerância** → baixa total com desconto da diferença.
- Se a diferença **exceder a tolerância** → baixa parcial.

**Exemplo:**
- Título de R$ 200,00, baixa de R$ 180,00 → diferença de R$ 20,00 (10%). Se a tolerância for 15%, está dentro → baixa total com desconto de R$ 20,00.
- Título de R$ 150,00, baixa de R$ 105,00 → diferença de R$ 45,00 (30%). Se a tolerância for 15%, excede → baixa parcial.

### Retorno de Cobrança pelo Gerente Eletrônico

Disponível a partir da versão **11.01.01.00**.

**Configurações no Layout do arquivo de retorno:**

Variáveis obrigatórias no Header de lote:
- `BANCO_FAVORECIDO` — Valida o código do banco no arquivo.
- `NR_CC_FAVORECIDO` — Resgata a conta bancária no arquivo.
- `TP_REGISTRO` — Define o tipo de linha no arquivo (cabeçalho, detalhe, trailer).

> **Atenção:** A estrutura do arquivo de retorno pode variar conforme o banco. Consulte o manual técnico específico de cada banco.

**Configurações no Gerente Eletrônico:**

1. Cadastre a **tarefa** utilizando o sistema **000242 – Baixa automática de títulos a receber**.
2. No cadastro da **tarefa agendada**, aponte a tarefa cadastrada. O sistema habilitará a aba **"Baixa automática de títulos a receber"**. Clique em **"+"**, informe o banco, o layout do arquivo retorno e o diretório onde o arquivo será salvo.

> **Atenção:** A conta só pode ser cadastrada uma vez, mesmo que esteja relacionada a outras empresas. A baixa sempre será registrada na empresa titular da conta bancária (empresa informada no campo "Empresa" no cadastro da conta bancária).

3. Na parte inferior, configure as opções de geração de logs: "com os títulos identificados no arquivo" ou "com os títulos que apresentarem algum tipo de inconsistência, crítica ou erro" (apenas uma opção pode ser marcada). É possível também configurar para aglutinar movimento bancário.

**Fluxo da rotina:**

1. O sistema verifica o diretório configurado e, ao identificar um arquivo, inicia a rotina de baixa automática.
2. Verifica se o banco na variável `BANCO_FAVORECIDO` corresponde ao banco da tarefa em execução. Se não corresponder, gera um log em `GEBaixaAutomaticaAReceber\Logs` e carrega o próximo arquivo.
3. Após execução correta, move o arquivo retorno para `GEBaixaAutomaticaAReceber\Processados`.
4. A execução continua enquanto existirem arquivos no diretório configurado.

> **Atenção:** O sistema não apresentará mensagens de crítica, informação ou confirmação. Todas as mensagens são armazenadas na pasta `GEBaixaAutomaticaAReceber\Logs`. Se o cliente utilizar a rotina em mais de uma empresa e/ou banco, a configuração deve ser repetida para todos.

---

## Fluxo Simplificado da Rotina

1. Configurar Banco
2. Configurar Conta
3. Importação / criação dos registros
4. Montagem do Layout (informando naturezas de lançamentos e tipo de cobrança)
5. Criação do título com a natureza e tipo de cobrança
6. Impressão do boleto
7. Geração do arquivo remessa com os títulos a receber
8. Importação do arquivo retorno para baixar os títulos a receber

---

## PIX na Remessa de Cobrança

> **Disponível a partir da versão 10.00.03.00.**

Alguns bancos oferecem a possibilidade de pagar por boleto bancário **ou PIX** dentro do próprio boleto. O boleto contém um QR Code e o "copia e cola" do PIX para que o pagador possa optar pela forma de pagamento.

**Fluxo da rotina:**

```
Cadastre o título → Envie a remessa → Aguarde e importe o retorno do banco
(com a informação do "copia e cola") → Imprima o boleto
```

> **Importante:** O boleto só pode ser impresso **após** a importação do arquivo retorno com as informações do PIX. Quem gera o "copia e cola" é o banco, não o Bimer. Se o boleto for impresso antes do retorno, o QR Code não será válido.

**Configurações na montagem da remessa:**

A diferença em relação à montagem padrão é a criação de um novo detalhe com **tipo de registro 3**, contendo a variável `CHAVE_PIX`. Esta variável recuperará a chave PIX configurada na conta bancária (aba **"Chaves PIX"**) marcada como principal.

**Configurações da montagem do retorno:**

Também é necessário um novo detalhe com tipo de registro 3 no retorno, contendo a variável `EMV_PIX` (responsável por trazer as informações do "copia e cola").

> **Atenção:** No retorno, este detalhe do PIX deve estar marcado como **"opcional"**, pois se não existir a informação do PIX para o boleto, a rotina da remessa não será afetada.

**Alteração do RTM do boleto:**

Foi disponibilizada a variável `DsPIXCopiaCola` no RTM. Além de adicionar essa variável, é necessário colocar o QR Code clicando em **DB2DBarCode** e selecionando **BcQRCode** no campo **BarCodeType**.

**Informações importantes:**

- Verifique com o responsável pela homologação quais bancos atendem a esta rotina junto ao Bimer.
- Clientes com conta já homologada que queiram usar este recurso precisarão passar por uma nova homologação para criação do novo detalhe.
- Caso o cliente crie um boleto com PIX sem aguardar o retorno do banco, o boleto será criado com um QR Code válido, porém entrará como depósito não identificado — o boleto perderá o vínculo com o banco e constará como em aberto mesmo que o pagamento já tenha sido efetuado.

---

## Tarifa Bancária

A partir da versão **11.01.03.00**, foi criada uma configuração para clientes que usam remessa de cobrança cobrando tarifa bancária dos boletos emitidos.

Caminho: **Configurador >> Financeiro >> Opções >> Boleto Bancário/Arquivo Remessa >> Emissão de Boleto >> Configurações Adicionais >> "Preservar o valor ao gerar a segunda via do boleto bancário"**

- **Desmarcada (padrão):** Na reimpressão do boleto, o sistema aplica as configurações de cobrança de tarifa bancária definidas no cadastro do cliente (aba "Cadastros"): "Cobrar taxa bancária (impressão de boleto/arquivo remessa)" e "Cobrar tarifa bancária somente para títulos emitidos a partir de:".

- **Marcada:** Na reimpressão do boleto, o sistema ignora as configurações acima e preserva o valor originalmente gerado no boleto, incluindo a tarifa bancária. O valor do título na segunda via é mantido independentemente das configurações de cobrança da tarifa no cadastro do cliente.

> **Observação:** Para que seja considerada uma reimpressão, o histórico da carteira deve conter: número do código de barras, data de arquivo ou data de impressão.
