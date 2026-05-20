# Arquivo Remessa e Retorno - Homologação (suporte) - Informações Úteis — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Informações Úteis](#informações-úteis)
- [Sensibilidade: interno](#sensibilidade-interno)
- [Sumário](#sumário)
- [Introdução](#introdução)
- [Rotina De Homologação](#rotina-de-homologação)
- [Rotinas do setor:](#rotinas-do-setor)
- [Rotinas da homologação](#rotinas-da-homologação)
- [Homologação De Cobrança](#homologação-de-cobrança)
- [Ambiente de Teste](#ambiente-de-teste)
- [Ambiente de produção](#ambiente-de-produção)
- [Especificações Por Banco -](#especificações-por-banco-)
- [Remessa Cobrança](#remessa-cobrança)
- [BRADESCO (237)](#bradesco-237)
- [SANTANDER(033)](#santander033)
- [ITAÚ (341)](#itaú-341)
- [CAIXA (104)](#caixa-104)
- [BRASIL (001)](#brasil-001)
- [SICOOB (756)](#sicoob-756)
- [SICREDI (748)](#sicredi-748)
- [SAFRA (422)](#safra-422)
- [BANESE (047)](#banese-047)
- [ORIGINAL(212)](#original212)
- [DAYCOVAL (707)](#daycoval-707)
- [Banco do Nordeste (004)](#banco-do-nordeste-004)
- [Homologação De](#homologação-de)
- [Liquidação/Pagamento](#liquidaçãopagamento)
- [Especificações Por Banco -](#especificações-por-banco-)
- [Remessa Pagamento](#remessa-pagamento)
- [SANTANDER(033)](#santander033)
- [Layouts Padrões Já](#layouts-padrões-já)
- [Configurados](#configurados)
- [Links Úteis](#links-úteis)
- [Validadores Arquivo Remessa:](#validadores-arquivo-remessa)
- [Textos Padrões](#textos-padrões)
- [Abertura de atendimento de homologação:](#abertura-de-atendimento-de-homologação)
- [Confirmação de Conclusão da Homologação:](#confirmação-de-conclusão-da-homologação)
- [Encerramento por falta de contato:](#encerramento-por-falta-de-contato)
- [Tabelas/Anexos](#tabelasanexos)
- [Modalidades de pagamento](#modalidades-de-pagamento)
- [Exemplo de tabela de modalidades homologadas](#exemplo-de-tabela-de-modalidades-homologadas)

---

## Informações Úteis

## Sensibilidade: interno

## Sumário

Introdução................................................................................................................3 Rotina De Homologação..........................................................................................3 Rotinas do setor:............................................................................................................3 Rotinas da homologação...............................................................................................4 Homologação De Cobrança.....................................................................................5 Ambiente de Teste.........................................................................................................7 Ambiente de produção..................................................................................................8 Especificações Por Banco - Remessa Cobrança....................................................9 BRADESCO (237)......................................................................................................9 SANTANDER(033)...................................................................................................10 ITAÚ (341)..............................................................................................................12 CAIXA (104)............................................................................................................13 BRASIL (001)..........................................................................................................14 SICOOB (756).........................................................................................................16 SICREDI (748).........................................................................................................17 SAFRA (422)...........................................................................................................18 BANESE (047).........................................................................................................19 ORIGINAL(212).......................................................................................................20 DAYCOVAL (707).....................................................................................................20 Banco do Nordeste (004).......................................................................................21 Homologação De Liquidação/Pagamento.............................................................22 Especificações Por Banco - Remessa Pagamento...............................................24 SANTANDER(033)...................................................................................................24 Layouts Padrões Já Configurados........................................................................25 Links Úteis.............................................................................................................26 Validadores Arquivo Remessa:.....................................................................................26 Textos Padrões......................................................................................................26 Abertura de atendimento de homologação:................................................................26 Confirmação de Conclusão da Homologação:.............................................................27 Encerramento por falta de contato:............................................................................28 Tabelas/Anexos......................................................................................................28 Modalidades de pagamento........................................................................................28 Exemplo de tabela de modalidades homologadas......................................................32

## Introdução

Este manual tem como objetivo explicar os procedimentos e as configurações que devemos fazer no sistema antes de enviar o boleto/arquivo remessa para validação do Banco. Para que o processo de homologação ocorra é necessário configurar o layout RTM, a conta bancária e o arquivo remessa, e aqui juntamos todas as informações necessárias para realização de todo o processo.

## Rotina De Homologação

## Rotinas do setor:

#### 1. Os técnicos de homologação devem ter uma base de dados padrão. Esta base

tem a finalidade de atualização de layouts já homologados para novos bancos ou alguma atualização no layout já homologado que possa afetar os clientes que já estão em funcionamento;

#### 2. Organizar  uma  média  de  atendimentos  por  dia.  Esta  média  pode  ser  de

aproximadamente de 40 à 45 atendimentos por dia;

#### 3. Ao iniciar uma homologação com o cliente procure sempre já exportar o layout

e  estar  com  todos  os  dados  importantes  em  mãos  além  de  estar  com  os manuais.

#### 4. Deve ser aberto um atendimento para cada tipo de homologação (cobrança e

Liquidação) e também por conta. Sempre coloque  no assunto do atendimento o seguinte padrão: CC+DV/BANCO/COB ou LIQ/ CNAB/CON Dados:

#### CC+DV: Conta corrente com dígito

#### Banco: Nome do banco

#### COB ou LIQ: Cobrança ou liquidação

#### CNAB: Código CNAB

#### CON: Convênio (quando houver)

#### 5. A  Homologação  só  pode  ser  encerrada  com  o  cliente  enviando  um  e-mail

confirmando a homologação.

## Rotinas da homologação

#### 1. A homologação é feita em três partes: Ambiente de Teste, Ambiente

#### de Produção e Retorno. Na homologação de remessa de pagamento os

#### testes são por modalidade de pagamento e, dependendo do banco, não

#### existe um ambiente de teste.

#### 2. Com exceção do Itaú todos os outros bancos têm convênio. O convênio é

#### um código do serviço contratado no banco e com isso existe um convênio

#### para cobrança e outro para liquidação(pagamento). O convênio pode ser

#### 1 para mais de uma conta do mesmo grupo do CNPJ.

#### 3. Para o arquivo remessa de cobrança com emissão de boleto pelo sistema Bimer

os bancos têm uma quantidade mínima de títulos a serem enviados, tanto no remessa quanto nos PDFs.

#### 4. Código Cedente é a mesma coisa que Código Convênio.

#### 5. No layout caso algum campo não contenha o total de carácter exigido pelo

mesmo o sistema preenche o restante com a seguinte condição:

#### a. Se o campo for Numérico: preenche com zeros.

#### b. Se o campo for AlfaNumérico: preencher com espaços em branco.

#### 6. Para testes em boletos bancários em que a base esteja configurada para ter

juros e este for um valor muito baixo o valor dos títulos para teste deve ser no mínimo R$40,00. Porque assim o valor do título no sistema x o valor do título no remessa ficam iguais.

#### 7. Existem  homologações  de  alteração.  Neste  caso  usamos  o  mesmo  layout

padrão, mas a diferença é o tipo de alteração dentro da montagem, sendo que vai ser um layout para cada tipo de alteração.

#### 8. Em ambiente de teste existe um padrão de quantidade de remessas a

#### serem enviadas. Os bancos aceitam  de 1 à 10, com isso caso precise

#### efetuar  vários  envios  de  remessa  após  ajustes,  tem  que  se  atentar

#### quanto  ao  sequencial  de  remessa  no  Configurador  /  Financeiro  /

#### Informações bancárias / Contas bancárias / Boleto bancário/Arquivo

#### remessa em Remessa (cobrança e liquidação)

## Homologação De Cobrança

Após receber todos os dados das contas deve ser iniciada a homologação. Com o manual do banco em mãos, comece a inserir as informações no sistema.

#### No Configurador / Aba Financeiro / Informações Bancárias / Bancos:

#### 1. A opção ‘Calcular NOSSO NÚMERO para títulos enviados via arquivo

#### remessa’ deve estar marcada para a maioria dos bancos, devendo ser

#### confirmado com o banco se o mesmo é quem faz o cálculo ou se pode

#### ser feito diretamente pelo sistema.

#### 2. O  arquivo  de  layout  (RTM) para  o  boleto  pode  ser  informado  no

#### cadastro do banco ou mesmo no cadastro das contas, dependerá se um

#### mesmo RTM será utilizado para os boletos de contas diferentes de um

#### mesmo banco, conforme a necessidade do cliente.

#### 3. O  cálculo  DV  (Dígito  Verificador  do  nosso  número) deve  ser

#### selecionado de acordo com o banco que estiver sendo cadastrado. Ou

#### pode ser informado no cadastro da conta bancária.

#### 4. As mensagens (arquivo remessa e impressão de boletas de contas

#### a  receber) podem  ser  informadas  de  acordo  com  a  necessidade  do

#### cliente.  Caso  queira  informar  uma  mensagem  a  mesma  deverá  ser

#### cadastrada  no  Configurador  /  Aba  Geral  /  Outros  Cadastros  /

#### Mensagens. As ocorrências e motivos devem ser cadastradas conforme

#### manual do banco.

#### 5. Vá no cadastro da conta e configure os dados para remessa de cobrança

#### em no  Configurador / Financeiro / Informações bancárias / contas

#### bancárias  /  Boleto  bancário/Arquivo  remessa.  Vide  os  dados  para

#### preenchimento conforme o tópico “ESPECIFICAÇÕES POR BANCO PARA

#### REMESSA COBRANÇA”.

#### 6. Importe o layout a ser homologado na base do cliente. Caso ele já tenha algum

sendo  utilizado  e  não  possua  nenhuma  variável  fixa,  pode  ser  utilizado  o mesmo. Insira as naturezas de lançamento e o tipo de cobrança. Antes de dar início à homologação deve ser seguido um cronograma quando o cliente solicitar a homologação em mais de uma conta do mesmo banco e com o mesmo CNAB. Seria o seguinte:

## Ambiente de Teste

#### 1. Crie os títulos para teste conforme a quantidade determinada pelo banco(tabela

abaixo). Os títulos devem ter um vencimento de no mínimo 30 dias à sua data de emissão, e um intervalo de 30 dias sendo que para caixa por causa do DV geral  gerar  com  intervalo  de  1  dia.  Este  é  necessário  para  que  qualquer eventualidade na hora de gerar a remessa ou ajustar o mesmo o mesmo não fique com a data vencida. Banco Quantidade Observações ITAÚ SICOOB BRASIL BRADESCO BANESE SANTANDER até 5 SICREDI Vl mín R$40,00 CAIXA mín 10 máx 20 Vl mín R$40,00 BANRISUL até 15 NORDESTE

#### 2. Gere o Arquivo remessa. Dependendo do banco o mesmo pode ser validado

conforme o tópico “LINKS ÚTEIS”. O que fazer?

- Usar o mesmo layout
- Teste pode ser feito em uma
conta

- Quantidade de títulos
AmbienteTeste Banco valida:

- Estrutura do boleto
- Linha digitável boleto
O que fazer?

- Gerar um título no valor de R$5,00 para
cada conta

- Gerar o remessa de cada conta
- Cliente deve efetuar o pagamento destes.
- Processar os arquivos retorno
- Os atendimentos só podem ser
encerrados após cada conta estar validada Ambiente Produção O que o banco valida?:

- Conteúdo e estrutura
- Pagamento do boleto
- Gera o arquivo
retorno

#### 3. Se o cliente for emitir os boletos, imprima-os. Será necessário marcar a

#### opção  no  Configurador  /  Financeiro  /  Informações  bancárias  /

#### Bancos  /Calcular  'NOSSO  NÚMERO'  para  títulos  enviados  via

#### arquivo remessa, mas caso o cliente não vá fazer a emissão dos boletos

#### não marque esta opção e não precisa imprimir boletos no sistema.

## Ambiente de produção

#### 1. Criar um título apenas, gerar a remessa do mesmo e imprimir o boleto bancário.

#### 2. Após enviar a remessa e o mesmo ser registrado no banco, o cliente deve

efetuar o pagamento do boleto.

#### 3. Após o pagamento do boleto ser registrado pelo banco é disponibilizado um

arquivo  retorno  o  qual  o  cliente  deve  baixar  para  que  seja  processado  no sistema.

#### 4. No  sistema  efetuamos  o  retorno  na  opção  de  Baixa  Automática,

#### selecionando empresa, conta bancária e layout de retorno.

#### 5. Vale  a  pena  ressaltar  que  na  edição  da  Montagem  de  envio  temos  que

configurar as condições para validar o retorno. No caso a melhor condição é o IDTitulo,  pois  é  único  no  sistema  e  para  o  banco  indifere.  O  IdTitulo  deve também estar no layout de remessa, os padrões citados neste manual já possui.

## Especificações Por Banco -

## Remessa Cobrança

Abaixo seguem os dados e especificações por banco para configuração da conta e sua linha  digitável  para  gerar  a  remessa  e  a  emissão  de  boletos.  Deve-se  acessar Configurador / Financeiro / Informações bancárias / contas bancárias / Boleto bancário/Arquivo remessa. Após o cliente cadastrar os dados da conta no sistema deve ser feita as configurações conforme orientações a seguir. As informações são baseadas em contas já homologadas e nos manuais disponibilizados pelos bancos. Todas as contas bancárias por padrão vão ter uma linha digitável já pré-configurada, pois  a  maioria  dos  bancos  seguem  o  mesmo  padrão,  mas  pode  haver  alguma mudança de acordo com cada banco. Padrão De Até Variável Descrição da variável Conteúdo CD_BANCO Código do banco Conteúdo fixo DV_VERIFICAD OR Dígito verificador geral do código de barras FATOR_VCTO Fator de vencimento VALOR Valor do documento

## BRADESCO (237)

#### 1. O número da conta bancária: 07 dígitos obrigatórios sem contar com o DV, caso

tenha um preencha com zeros à esquerda.

#### 2. Código de carteira: 02 dígitos, caso tenha um preencha com zeros à esquerda.

#### 3. Nosso número: 11 dígitos (preencher com zeros à esquerda)

#### 4. Cálculo do DV:10

Banco Bradesco De Até Variável Descrição da variável Conteúdo NR_AGENCIA Número da agência sem dígito verificador CD_CARTEIRA Código da carteira utilizada na conta NOSSO_NUMERO Número utilizado para sequência do Nosso Número sem dígito verificador NR_CONTABANCARIA Número da conta bancária Conteúdo fixo

## SANTANDER(033)

#### 1. Informar Código do Cedente, que é o mesmo número que o Convênio

#### para colocar nos Campos “Convênio” e “Código do cedente”.

#### 2. Nosso número: 07 dígitos (preencher com zeros à esquerda)

#### 3. Cálculo do DV: 34.

#### 4. No CNAB 400 (pos. 384 a 385) temos que informar o código do complemento. O

código é composto pelo último número da conta bancária e o DV. Com isso basta configurar a variável de  COD_CLIENTE_BANCO e no cadastro da conta informar os dados no campo de Código de cliente no banco.

#### 5. O Banco Santander solicita informar um código de transmissão no Header de

Arquivo da remessa de cobrança. Este é formado da seguinte maneira: CNAB 240 CNAB 400 Nr. Agência (4 Posições) Nr. Agência (4 Posições) Zeros (4 Posições) Zeros (1 Posição) Nr. Convênio (7 posições) Nr. Convênio (7 posições) Zeros (1 Posição) Nr. Conta Bancária (7 posições) POSIÇÃO HEADER DE ARQUIVO HEADER DE LOTE CNAB 240 033 - 047 054 - 068 CNAB 400 027 - 046 X Para cobrança, o Santander as montagens do código de barras são diferentes de acordo com o CNAB utilizado no layout do arquivo remessa. São eles: Banco Santander 240 De Até Variável Descrição da variável Conteúdo Conteúdo fixo COD_CEDEN TE Código do Cedente NOSSO_NUM ERO_DV Número utilizado para sequência do Nosso Número com dígito verificador (não considera o traço) Conteúdo fixo CD_CARTEIR A Código da carteira utilizada na conta Banco Santander 400 De Até Variável Descrição da variável Conteúdo Conteúdo fixo COD_CEDENTE Código do Cedente Conteúdo fixo 00000 NOSSO_NUMER O_DV Número utilizado para sequência do Nosso Número com dígito verificador (não considera o traço) Conteúdo fixo CD_CARTEIRA Código da carteira utilizada na conta

## ITAÚ (341)

#### 1. Informar Código carteira

#### 2. Nosso número: 08 dígitos (preencher com zeros à esquerda)

#### 3. Cálculo do Dv: 14”

Banco Itaú De Até Variável Descrição da variável Conteúdo CD_CARTEIRA Código da carteira utilizada na conta NOSSO_NUMER O Número utilizado para sequência do Nosso Número sem dígito verificador DV_NOSSO_NU MERO Somente o dígito verificador do Nosso Número NR_AGENCIA Número da agência sem dígito verificador NR_CONTABAN CARIA Número da conta bancária DV_CONTABAN CARIA Somente o dígito verificador da conta bancária Conteúdo Fixo

## CAIXA (104)

#### 1. Informar o Código do cedente e o DV. E configurar nos campos

#### “Convênio” e “Código do cedente”. •

#### 2. Campo “auxiliar no Nosso Número”: Informar o Nº 14.

#### 3. Nosso número: 15 dígitos (preencher com zeros à esquerda)

#### 4. Cálculo do DV: 23.

#### 5. Gerar 20 títulos com intervalo de vencimento de 1 dia por causa do

cálculo do DV campo livre e o DV geral Banco Caixa De Até Variável Descrição da variável Conteúdo COD_CEDENTE Código do Cedente Colocar fixo o DV do Código do Cedente NOSSO_NUMERO _1 1.ª parte do Nosso Número Constante 1 - Tipo de Cobrança 1-Registrada 2-Sem Registro NOSSO_NUMERO _2 2.ª parte do Nosso Número Conteúdo Fixo NOSSO_NUMERO _3 3.ª parte do Nosso Número DV_CAMPO_LIVR E Dígito verificador do campo livre calculado por módulo 11 Para a Caixa existe uma regra para o cálculo do DV do nosso número(43) e DV do Campo livre(44), são eles: Para o DV do Campo livre são aceitos números de 0 à 9 Para o DV Geral são aceitos números de 1 à 9 Para a formulação dos boletos para envio ao banco o sistema tem que fazer duplas em que os números do DV do campo livre sejam usados para que possa haver a repetição deste, a mesma regra vale para o DV geral. Sendo que o DV geral não aceita zero. Exemplo: No ambiente teste preciso emitir no mínimo 10 boletos, com isso abaixo segue um exemplo, não necessariamente conforme exemplo, de como tem que estar essa “dupla”: Podem  haver  casos  em  que  alguma  “Dupla”  de  números  se  repetir  e  outro  não aparecer.  Com  isso  basta  ir  alterando  a  data  de  vencimento  para  +1  dia  e reimprimindo o boleto até chegar na combinação correta

## BRASIL (001)

#### 1. Código da carteira: Possui variação (por exemplo: 17/019, 17/035). Deve

#### ser solicitado ao cliente. Configuramos: cadastro da conta, no layout o

#### conteúdo é fixo: Header de Arquivo (CNAB 240 – posição 48 a 50) ou

#### no Detail (CNAB 400 – posição 92 a 94)

#### 2. O DV da agência tem que estar preenchido

#### 3. Cálculo do DV: 11

#### 4. A data de cobrança da multa deverá ser no dia posterior ao vencimento.

#### 5. PROTESTO: Caso o cliente não queira protestar o título, basta informar a

#### instrução de não protestar, pois o BB não trabalha com número de dias

#### para baixa/devolução.

#### Além disso, as configurações do boleto e remessa podem mudar de acordo

#### com  o  número  do  convênio  do  cliente.  O  código  de  barras  é  configurado

#### também de acordo com o número de posições do convênio:

#### ●Para convênio de 7 posições (numeração acima de 1.000.000):

#### Nosso número: 17 dígitos (as 7 primeiras posições é o Nº do convênio e o resto

#### é  o  sequencial  do  nosso  número).  IMPORTANTE!  Neste  caso,  o  nosso

#### número não calcula DV. 20

#### ●Para convênio de 6 posições:

Nosso número: 11 dígitos (as 6 primeiras posições é o Nº do convênio e o resto é o sequencial do nosso número).

#### ●Para convênio de 6 posições:

Nosso número é composto por 11 dígitos ( as 4 primeiras posições é o Nº do convênio e o resto é o nosso número) Banco Brasil Nosso número com 17 posições (Convênio 7 posições) e Nosso número com 11 posições (Convênio 6 posições) De Até Variável Descrição da variável Conteúdo Conteúdo fixo 000000 NOSSO_NUME RO Número utilizado para sequência do Nosso Número sem dígito verificador CD_CARTEIRA Código da carteira utilizada na conta Nosso número com 11 posições (Convênio 4 posições) De Até Variável Descrição da variável Conteúdo NOSSO_NUME RO Número utilizado para sequência do Nosso Número sem dígito verificador NR_AGENCIA Número da agência sem dígito verificador NR_CONTABA NCARIA Número da conta bancária CD_CARTEIRA Código da carteira utilizada na conta

## SICOOB (756)

#### 1. Informar Código do cedente: 07 dígitos (preencher com zeros à esquerda)

#### 2. Complemento do DV: Preencher com a Agência(Cooperativa), colocar o código

do  cedente  com  10  caracteres,sendo  que  tem  que  preencher  com  zeros  à esquerda caso o mesmo não tenha o total de números. No final tem que ter 14 dígitos. Vale ressaltar que o banco envia o cedente com um dígito, ele faz parte da composição.

#### 3. Nosso número: 07 dígitos (preencher com zeros à esquerda)

#### 4. Cálculo do DV: 29.

Banco SICOOB De Até Variável Descrição da variável Conteúdo CD_CARTEIRA Código da carteira utilizada na conta NR_AGENCIA Número da agência sem dígito verificador N° da modalidade da carteira COD_CEDENTE Código do Cedente NOSSO_NUMER O Número utilizado para sequência do Nosso Número sem dígito verificador DV_NOSSO_NU MERO Somente o dígito verificador do Nosso Número N° de parcelas, fixo n°001

## SICREDI (748)

#### 1. O nome do arquivo remessa deve ser salvo com o seguinte padrão

Legenda: Número do convênio = 5 dígitos Mês = 1 dígito, sendo que: De Janeiro à Setembro vai ser usado números (1; 2; 3; etc..); De Outubro, Novembro e Dezembro vai ser usada a letra inicial dos meses (O; N; D). Dia = 2 dígitos CRM = extensão do arquivo, não usa TXT como nos outros bancos.

#### 2. Informar Código do cedente: 05 dígitos(preencher com zeros à esquerda).

#### 3. Solicitar o código do posto: 02 dígitos. O posto deve ser informado no

#### campo de Complemento do cálculo do DV e na linha digitável posição

#### 35 a 36.

#### 4. Nosso número: 06 dígitos, iniciando pelo byte 2. (Ex: 200003)

#### 5. Cálculo do DV: 31.

De Até Variável Descrição da variável Conteúdo Conteúdo fixo. Código numérico correspondente ao tipo de cobrança: “1” – Com Registro CD_CARTEIR A SEmpre vai ser  “1” - carteira simples NOSSO_NUM ERO_DV Nosso Número com dígito verificador (não considera o traço) NR_AGENCIA Número da agência sem dígito verificador Posto da cooperativa de crédito/agência beneficiária (disponibilizado pelo banco) COD_CEDEN Número do convênio + Mês + Dia.CRM TE Conteúdo Fixo. “1” (um) quando houver valor expresso no campo “valor do documento” “0” (zero) quando valor expresso no campo “valor do documento” for zerado Conteúdo Fixo = 0 DV_CAMPO_ LIVRE Dígito verificador do campo livre calculado por módulo 11

## SAFRA (422)

#### 1. Número da conta: deve conter 09 dígitos formados pelo N° da conta + DV.

#### 2. Número da Agência: 05 dígitos sem o DV

#### 3. Cálculo do DV: CNAB 240 usar o 49 DAYCOVAL; CNAB 400 deixar em branco, não

se calcula DV

#### 4. Código da carteira: 01 dígito.

#### 5. Nosso número: 09 dígitos

#### 6. Safra não trabalha com convênio

Banco Safra 240 De Até Variável Descrição da variável Conteúdo Conteúdo fixo - Dígito do Bco Safra NR_AGENC IA Número da agência sem dígito verificador NR_CONTA BANCARIA Número da conta bancária NOSSO_N UMERO Número utilizado para sequência do Nosso Número sem dígito verificador Conteúdo fixo - Tipo de cobrança (2= Cobrança registrada) Banco Safra 400 De Até Variável Descrição da variável Conteúdo Conteúdo fixo - Dígito do Bco Safra NR_AGENCIA Número da agência sem dígito verificador NR_CONTABAN CARIA Número da conta bancária DV_CONTABAN CARIA Somente o dígito verificador da conta bancária NOSSO_NUME RO Número utilizado para sequência do Nosso Número sem dígito verificador Conteúdo fixo - Tipo de cobrança (2= Cobrança registrada)

## BANESE (047)

#### 1. Código do cedente (convênio)

#### 2. Nosso número: 08 dígitos

#### 3. Cálculo do DV: 47

Banco Banese De Até Variável Descrição da variável Conteúdo NR_AGENCIA Número da agência sem dígito verificador NR_CONTABAN CARIA Número da conta bancária NOSSO_NUMER O Número utilizado para sequência do Nosso Número sem dígito verificador DV_NOSSO_NU MERO Somente o dígito verificador do Nosso Número Conteúdo Fixo D1D2 Dois dígitos verificadores utilizados no campo livre. Número de controle (cálculo através dos Módulos 10 e 11)

## ORIGINAL(212)

#### 1. Conta: No sistema cadastra normal a conta, mas no layout o campo

#### destinado ao número da conta bancária deve ser informado a  conta

#### header que o banco disponibiliza ao cliente

#### 2. Nosso número: 10 dígitos

#### 3. Trabalha com convênio

#### 4. Cálculo DV: 48

#### 5. Para a linha digitável do boleto precisa do código de operação. Verificar com o

banco Banco Original De Até Variável Descrição da variável Conteúdo NR_AGENCIA Número da agência sem dígito verificador CD_CARTEIRA Código da carteira utilizada na conta Conteúdo fixo. Código de operação disponibilizado pelo banco DV_NOSSO_NUME RO Somente o dígito verificador do Nosso Número

## DAYCOVAL (707)

#### 1. Código de Identificação da empresa no banco. O banco disponibiliza

#### por  e-mail.  Alfanumérico  composto  por  20  caracteres.  O  código  é

#### informado no header de arquivo: posição 27 a 46 e no detail: posição 18

#### a 37.

#### 2. Nosso  número: 08  dígitos.  Sendo  que  o  banco  disponibiliza  um

#### sequencial para ambiente de teste e outro para ambiente de produção.

#### 3. Cálculo DV: 49 (disponível apenas a partir das versões 8.01.01.00)

#### 4. No layout de cobrança tem a linha 4 destinada aos dados da nota fiscal. Caso

um título não possua vínculo com nota fiscal deve ser configurado dois layouts, um com a linha e outro sem a linha.

#### 5. Sobre o processo de homologação - Para ambiente de teste: pode ser

#### informados dados de uma nota já autorizada direto no layout de forma

#### fixa.  Para ambiente e produção: deve ser emitido uma nota com valor

#### mínimo de 10,00.

#### 6. Para que saiam as informações das NF-e no remessa é necessário marcar

#### a opção “Gerar no arquivo de remessa os dados da NF-e vinculada

#### ao título a ser cobrado”, localizada no cadastro da conta bancária, na

#### aba Boleto Bancário/Arquivo remessa / Dados para cobrança.

DAYCOVAL De Até Variável Descrição da variável Conteúdo NR_AGENCIA Número da agência sem dígito verificador CD_CARTEIRA Código da carteira utilizada na conta Conteúdo fixo. Código de Operação disponibilizada por e-mail pelo banco NOSSO_NUME RO_DV Número utilizado para sequência do Nosso Número com dígito verificador (não considera o traço)

## Banco do Nordeste (004)

1. Código da Agência 04 dígitos sem contar DV. Completar o restante do campo
com zero(s) à esquerda.

2. Conta Bancária 07 dígitos sem contar DV. Completar o campo com zero(s) à
esquerda. Tem que preencher o DV com hífen

3. Nosso Número: 07
4. Cálculo do DV: 38
5. Carteira é campo obrigatório e com 02 dígitos.
6. Convênio/cedente: 10 dígitos. Completar o campo com zero(s) à esquerda
Banco do Nordeste De Até Variável Descrição da variável Conteúdo NR_AGENCIA Número da agência sem dígito verificador NR_CONTABANCA RIA Número da conta bancária DV_CONTABANCA RIA Somente o dígito verificador da conta bancária NOSSO_NUMERO Número utilizado para sequência do Nosso Número sem dígito verificador DV_NOSSO_NUM ERO Somente o dígito verificador do Nosso Número CD_CARTEIRA Código da carteira utilizada na conta Conteúdo fixo

## Homologação De

## Liquidação/Pagamento

Diferente da homologação da remessa de cobrança, na remessa de pagamento temos que cadastrar títulos reais para envio ao banco, pois não é possível criar um código de barras fictício. O cliente deve verificar com o banco se existe algum ambiente de teste porque assim não vai ser debitado nada da conta. A homologação é feita com um título por modalidade de pagamento conforme solicitação do cliente, pois no layout podem haver 10 modalidades e o cliente desejar homologar apenas uma.

#### Exporte o layout e em contato com o cliente vá no Configurador / Financeiro/

#### Outros  Cadastros/  Modalidade  de  pagamento,  e  verifique  se  as

#### modalidades estão cadastradas. Caso não estejam deve ser feito o cadastro.

#### No  tópico  TABELAS  /  ANEXOS pode  localizar  as  modalidades  a  serem

#### cadastradas por banco. Vale ressaltar que quando a modalidade de pagamento

#### for para tributos sem código de barras (Segmento N), temos que marcar a

#### opção ‘Guia de pagamento’ no cadastro da modalidade de pagamentos.

#### Após cadastrar as modalidades de pagamento deve ser importado o layout de

#### remessa de liquidação. No layout de pagamento temos que colocar o número

#### do convênio de pagamento como campo fixo, pois só temos um campo no

#### cadastro da conta para convênio e este geralmente é informado o de cobrança,

#### mas  caso  o  cliente  não  tenha  pretensão  de  trabalhar  com  cobrança  pode

#### deixar a variável e informar o convênio no cadastro da conta bancária. No

#### layout o convênio deve ser informado no Header de lote de cada modalidade e

#### no Header de Arquivo.

#### Com  o  layout  configurado  oriente  o  cliente  a  criar  os  títulos  para  teste

#### conforme cada modalidade de pagamento. Envie para o cliente o manual de

#### “Manual Gerar Remessa A Pagar”, nele constam orientações de como criar

#### os títulos. Após criados os títulos deve ser gerado a remessa para envio ao

#### banco.

Tendo um retorno positivo do banco temos que processar o arquivo de retorno para dar baixa nos títulos e validar o layout de retorno através da Baixa Automática. Após validar todas as modalidades a homologação está encerrada.

## Especificações Por Banco -

## Remessa Pagamento

## SANTANDER(033)

O Banco Santander solicita informar um código de transmissão no Header de Arquivo da remessa de cobrança. Este é formado da seguinte maneira: BBBBAAAACCCCCCCCCCCC BBBB = Número do Banco “033” AAAA = Código de Agência (sem DV) CCCCCCCCCCCC = Número do Convênio (alinhado à direita com zeros a esquerda)

## Layouts Padrões Já

## Configurados

## Links Úteis

## Validadores Arquivo Remessa:

#### BB: https://gmtedi.bb.com.br/validaleiaute/#/validadorleiaute

#### Bradesco: Validador Arquivo (banco.bradesco)

#### SICOOB: https://www.sicoob.com.br/web/sicoob/validador-cnab

#### SICREDI: https://sicredinortesc2.websiteseguro.com/cobranca/home.php

## Textos Padrões

## Abertura de atendimento de homologação:

Prezado Sr. (Nome solicitante), Conforme contato a pouco, seguem algumas solicitações que precisamos antes de iniciar a homologação (Seja: Boleto e/ou Arquivo Remessa/Retorno): !!PREENCHIMENTO DO ANALISTA:!! CÓDIGO ALTERDATA:______ NOME ALTERDATA:______________________

- Preencher todos os dados do Formulário de homologação (em anexo) e caso tenha
alguma dúvida, poderá confirmar junto ao Banco;

- Solicitar ao Banco o manual do layout do boleto ou Arquivo Remessa/Retorno (Para
Arquivo Remessa/Retorno, confirmar com o Banco se será o CNAB 240 ou 400 Posições);

- Configurar a Conta Bancária no Sistema caso ainda não esteja cadastrada;
- Para  Arquivo  Remessa  Liquidação,  nos  informar  quais  as  Modalidades  de
Pagamentos que serão enviadas no Arquivo Remessa;

- Para Boleto bancário, nos informar quais informações que constarão nas Instruções
do  boleto,  como  Juros,  Multa,  Desconto,  Protesto  ou  textos  fixos  definidos  pela empresa.

- Solicitar ao Banco que habilite o Ambiente de testes (Homologação) Ressaltamos
que  temos  um  prazo  de  7  dias  úteis  para  realizar  a  Montagem  do  Arquivo Remessa/Retorno ou a Edição do RTM do Boleto Bancário, que se inicia no momento em que recebemos o formulário junto com o Manual do Banco. Nos colocamos ao dispor para o esclarecimento de qualquer dúvida. ***OBSERVAÇÃO: Enviar o e-mail com cópia para os analistas de homologação****

## Confirmação de Conclusão da Homologação:

Boa tarde Sr(ª). XXX, Conforme nosso contato, envio este e-mail para confirmação do encerramento do atendimento de homologação da conta abaixo: CC: XXXX-X / ITAÚ Banco Itaú

#### Homologação  de  cobrança  (remessa,  boleto  e  retorno)  finalizada  e

#### funcionando corretamente. Confirma?

Sigo no aguardo para que possamos finalizar o atendimento. No mais, estamos a disposição.

## Encerramento por falta de contato:

Por estarmos aguardando um retorno desde o dia XXXX, informo que aguardamos um retorno até a próxima quarta-feira (XXXX), caso contrário o(s) atendimento(s) será(ão) encerrado(s) e poderá(ão) ser retomado(s) em outro momento pela empresa. Segue o(s) número(s) do(s) atendimento(s): XXXXXXXXX

## Tabelas/Anexos

## Modalidades de pagamento

Deve ser marcada a opção de Guia de Pagamento para as modalidades que são para tributos sem códigos de barra BRADESCO - 240 BRAD - Crédito em Conta BRAD - Cheque pagamento administrativo BRAD - DOC BRAD - Cartão Salário BRAD - Crédito em conta poupança BRAD - Ordem de Pagamento BRAD - DARF Normal com Cód. Barras BRAD - DARF Simples com Cód. Barras BRAD - GPS com Cód. Barras BRAD - IPTU com Cód. Barras BRAD - Pagamento com autenticação BRAD - DARJ sem Cód. Barras BRAD - GARE SP ICMS sem Cód. Barras BRAD - GARE SP DR sem Cód. Barras BRAD - GARE SP ITCMD sem Cód. Barras BRAD - IPVA sem Cód. Barras BRAD - Licenciamento sem Cód. Barras BRAD - FGTS BRAD - DPVAT com Cód. Barras BRAD - Títulos mesmo banco (Boletos) BRAD - Títulos outros bancos (Boletos) BRAD - Contas e Tributos com Cód. Barras BRAD - Contas e Tributos sem Cód. Barras BRAD - TED Outro Titular BRAD - TED mesmo Titular BRAD - Pagamento de Salários BRAD - DARF Normal sem Cód. Barras BRAD - DARF Simples sem Cód. Barras BRAD - GPS sem Cód. Barras BRADESCO - 500 BRAD - CC Crédito em Conta BRAD - OP Ordem de pagamento BRAD - DOC - Mesmo titular BRAD - DOC - Titular diferente BRAD - TED - Mesmo titular BRAD - TED - Titular diferente BRAD - Boletos - Mesmo banco BRAD - Boletos - Outros bancos ITAÚ CNAB 240 ITAÚ - TED Mesmo titular ITAÚ - CC (CRÉDITO EM CONTA MESMO TITULAR) ITAÚ - DOC D - Mesmo titular ITAÚ - DOC C - Outro Titular ITAÚ - TED Outro Titular ITAÚ - BOLETOS - Outros Bancos ITAÚ - BOLETOS Mesmo Banco ITAÚ - BOLETOS - Concessionárias ITAÚ - DARF Normal ITAÚ - GPS ITAÚ - FGTS sem Cód. Barras ITAÚ - CC (CRÉDITO EM CONTA OUTRO TITULAR) ITAÚ - CP (CRÉDITO EM CONTA POUPANÇA ITAÚ) ITAÚ - DARF Simples ITAÚ - Tributos sem Cód. Barras ITAÚ - Pagamento de Salários ITAÚ - Cheque ITAÚ - Ordem de Pagamento ITAÚ - DARJ ITAÚ - GARE SP ICMS ITAÚ - Tributos com Cód. Barras (IPTU/ISS/OUTROS TRIB MUNICIPAIS) ITAÚ - Tributos com Cód. Barras CAIXA ECONÔMICA 240 CAIXA - Crédito em conta corrente CAIXA - Cheque CAIXA - DOC Pagamento Fornecedor CAIXA - Ordem de pagamento CAIXA - TED Pagamento Fornecedor CAIXA - Boletos Caixa CAIXA - Boletos Outros bancos CAIXA - DOC Pagamento de Salários CAIXA - TED Pagamento de Salários CAIXA - Concessionária e Tributos com Cód. Barras CAIXA - Crédito em conta poupança CAIXA - DARF Normal sem Cód Barras CAIXA - GPS sem Cód Barras SANTANDER 240 SANT - DOC SANT - TED conta corrente SANT - Crédito em conta corrente SANT - Concessionária SANT - Boletos outros bancos SANT - Boletos mesmo bancos SANT - DARF Simples SANT - GPS SANT - Ordem de pagamento SANT - Tributos com Cód. Barras SANT - Pagamento de Salários SANT - TED Conta poupança SANT - DARF Normal BRASIL 240 BB - DARF Normal sem cód. Barras BB - GPS sem cód. Barras BB - DARF Simples sem cód. Barras BB - IPTU Prefeituras sem cód. Barras BB - DARF Normal com cód. Barras BB - GPS com cód. Barras BB - DARF Simples com cód. Barras BB - IPTU Prefeituras com cód. Barras BB - FGTS com cód. Barras BB - DOC BB - TED outra titularidade BB - TED mesma titularidade BB - Crédito em conta BB - Cheque BB - Pagamento com autenticação BB - Boletos outros bancos BB - Concessionária BB - Boletos mesmo bancos BB - DARJ com cód. Barras BB - GARE SP ICMS com cód. Barras BB - GARE SP DR com cód. Barras BB - GARE SP ITCMD com cód. Barras BB - DARJ sem cód. Barras BB - GARE SP ICMS sem cód. Barras BB - GARE SP DR sem cód. Barras BB - GARE SP ITCMD sem cód. Barras BB - Pagamento de Salários (CC)

## Exemplo de tabela de modalidades homologadas

#### Esta  tabela  tem  a  finalidade  de  auxiliar  o  cliente  nas  etapas  de

#### homologação de cada modalidade. Como exemplo abaixo crie uma tabela de

#### acordo  com  as  modalidades  de  pagamento  selecionadas  pelo  cliente  no

#### formulário de solicitação. Assim você terá um controle de quais modalidades

#### foram homologadas e quais estão pendentes.

[   ] TED [   ] DOC [   ] Transferências para contas Bradesco [   ] Boletos [   ] Concessionárias [   ] Impostos (Quais??)
