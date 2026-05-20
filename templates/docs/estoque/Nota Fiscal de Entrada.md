# Nota Fiscal de Entrada — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [Objetivo do módulo](#objetivo-do-módulo)
  - [Fluxograma dos processos](#fluxograma-dos-processos)
- [Opções do módulo](#opções-do-módulo)
- [Lançamento da nota de entrada](#lançamento-da-nota-de-entrada)
  - [Lançamento Manual](#lançamento-manual)
- [Importar NF-e](#importar-nf-e)
  - [Entrada de NF-e a partir do XML](#entrada-de-nf-e-a-partir-do-xml)
  - [Importar XML (Avulso)](#importar-xml-avulso)
  - [Importar XML (Pedido de compras)](#importar-xml-pedido-de-compras)
  - [Vínculo no Cadastro de Produtos](#vínculo-no-cadastro-de-produtos)
  - [Importação por chave de acesso (NFStock)](#importação-por-chave-de-acesso-nfstock)
  - [Importação por Certificado Digital (NFStock)](#importação-por-certificado-digital-nfstock)
- [Gerenciador de eventos](#gerenciador-de-eventos)
  - [Configurações](#configurações)
  - [Visão Geral](#visão-geral)
  - [Cadastro e Envio de Evento](#cadastro-e-envio-de-evento)
  - [Operações de Manutenção](#operações-de-manutenção)
  - [Informações importantes](#informações-importantes)
- [Importação de XMLs em massa](#importação-de-xmls-em-massa)
  - [Configuração do Diretório Padrão](#configuração-do-diretório-padrão)
  - [Criação da tarefa para importação em massa](#criação-da-tarefa-para-importação-em-massa)
  - [Agendamento da tarefa](#agendamento-da-tarefa)
  - [Rotina de importação](#rotina-de-importação)
  - [Configurações adicionais](#configurações-adicionais)
  - [Situações que impedem a importação](#situações-que-impedem-a-importação)
- [Nova devolução](#nova-devolução)
- [Importar CT-e](#importar-ct-e)
- [Manutenção de Lotes](#manutenção-de-lotes)
- [Liberar Lotes](#liberar-lotes)
- [Enviar opinião](#enviar-opinião)
- [Recarregar opções](#recarregar-opções)

---

## Introdução

### Objetivo do módulo

Assim como uma empresa precisa registrar todas as saídas de produtos e os serviços prestados através de documentos fiscais (NF-e, NFS-e, NFC-e, CF, etc), ela também é obrigada a registrar todas as entradas de produtos ou aquisições de serviços.

Quando a empresa compra um produto ou adquire um serviço, o fornecedor emite o documento fiscal. Quando o produto chega à empresa, ela então utiliza o documento fiscal emitido pelo fornecedor para registrar a compra e entrada do produto no estoque. Somente após esse procedimento é que os produtos podem ser revendidos (ou consumidos).

Para o governo o princípio é simples: se não houve registro da entrada do produto, a empresa não tem saldo dele. Se não existe saldo, então não tem como vender ou consumir o produto. Assim, a finalidade do módulo de **Nota Fiscal de Entrada** é dar entrada dos documentos fiscais recebidos pela empresa.

Exemplos de documentos fiscais que podem ter sua entrada registrada pelo módulo Nota Fiscal de Entrada:

- Notas fiscais (emitidas pelo fornecedor) das compras realizadas
- Cupons fiscais (emitidos pelo fornecedor) das compras realizadas
- Notas fiscais de serviços (emitidas pelo prestador) dos serviços contratados
- Notas fiscais de devolução de vendas (emitidas pelos clientes)
- Notas fiscais de entrada de produtos, que não sejam compras, como, por exemplo, entrada de remessas para beneficiamento, bonificações recebidas, transferência entre empresas, etc.
- Notas fiscais de serviço como energia elétrica, telecomunicações, etc.

Além dos documentos fiscais, o módulo também pode ser utilizado para registrar movimentações internas da empresa, nas quais não há emissão de documento fiscal. Por exemplo, uma indústria que não tenha um sistema de PCP (Planejamento e Controle de Produção) integrado ao Bimer, precisa dar entrada das quantidades produzidas. Então, a entrada pode ser feita pelo módulo Nota Fiscal de Entrada, através do registro das OPs (Ordens de produção).

Além de realizar a movimentação do estoque (quando é uma nota fiscal de produto), no ato do registro dos documentos são calculados os impostos e o custo do produto. Essas informações serão utilizadas na apuração de impostos, na formação de preços de vendas, geração dos títulos a pagar, e outras funções administrativas da empresa.

> **Nota:** Mesmo que não haja movimentação de estoque, a nota fiscal pode ser registrada pelo módulo. Basta que a operação utilizada não esteja configurada para atualizar estoque.

A entrada das notas fiscais pode ser feita de forma **manual**, ou através da **importação do arquivo XML** da NF-e.

### Fluxograma dos processos

> *[Imagem: Fluxograma dos processos do módulo Nota Fiscal de Entrada]*

---

## Opções do módulo

Na tela inicial do módulo, existe o botão **"Opções"**. Nesta área é possível realizar algumas configurações que alteram a forma padrão de trabalho do módulo.

### Aba Geral

- **Completar automaticamente o número da nota fiscal com zeros a esquerda:** com essa opção marcada, na tela de lançamento, no campo "Nº nota fiscal/ Nº RPS", ao informar a numeração da NF-e, por exemplo, 5478 o sistema insere zeros a esquerda, apresentando da seguinte forma: 0000005478.

- **Calcular o número de dias das parcelas de pagamento com base na data de emissão da nota:** com essa opção marcada, a data de vencimento das parcelas será calculada a partir da data de emissão, e não a partir da data da entrada.

  **Exemplo:** A data de emissão da nota foi emitida o dia 07/11, e a forma de pagamento é 30 e 60 dias no boleto. Porém, a data de entrada da NF na empresa é 10/11.
  - Com a configuração **marcada**, o sistema considera como dia de vencimento das parcelas 07/12 (30 dias após o dia 07/11) e 06/01 (60 dias após o dia 07/11).
  - Com a configuração **desmarcada**, o sistema considera como dia de vencimento das parcelas 10/12 (30 dias após o dia 10/11) e 09/01 (60 dias após o dia 10/11).

- **No atendimento de pedidos de compras, permitir o preenchimento dos campos quantidade e embalagem independente da forma que o pedido foi feito:** na criação de um pedido de compras, quando se inclui um item que esteja configurado para trabalhar com embalagem, é possível definir se a quantidade do item está informada em unidade ou em embalagem. Essa configuração permite que, na entrada da Nota Fiscal, o usuário tenha a possibilidade de alterar o padrão escolhido na criação do pedido.

- **Sugerir operação vinculada ao fornecedor, mesmo quando houver operação informada na nota fiscal:** dentro do cadastro do fornecedor na aba "Cadastros > Operação" é possível vincular uma operação padrão para o fornecedor, assim, ao realizar o lançamento da nota, o sistema exibe uma tela de confirmação se o usuário deseja alterar a operação informada na nota pela operação vinculada dentro do cadastro do fornecedor.

- **Permitir alterar a quantidade dos produtos da composição:** com essa opção marcada será possível alterar as quantidades de composição dos itens de um produto composto. Esta configuração só terá influência, caso:
  - **Operação:** o tipo de movimento seja "entrada", e na aba "Documento > Geral" esteja informado o código da "Operação de saída para produtos da composição"
  - **Produto:** seja um produto composto que não seja Kit. Cadastro de Produtos > Aba Produtos relacionados > Composição > Possui composição

- **Criticar produtos sem preço de venda:** quando o produto não tiver o preço de venda, o sistema enviará um e-mail alertando um ou mais usuários sobre a falta de preço de venda no produto. Ao marcar essa configuração, será habilitado o campo **"Nomes dos usuários para spy system"**, no qual devem ser selecionados os usuários que receberão e-mail de alerta.

### Aba Complementar

- **Calcular os impostos de documentos vinculados a XML:**
  - Com a opção **"com base no XML"** marcada, o sistema não fará o cálculo dos impostos. Apenas importará os valores dos impostos existentes no arquivo XML da NF-e.
  - Com a opção **"com base nas configurações do sistema"** marcada, o sistema ignorará os valores de impostos existentes no arquivo XML da NF-e, e calculará os impostos baseados nas configurações de operação, produto, classificação fiscal, tipo de cálculo de ICMS, etc.

- **Calcular os impostos de documentos manualmente vinculados a pedido de compra:**
  - Com a opção **"com base no pedido de compra"** marcada, o sistema lançará nos campos de impostos exatamente os valores existentes no cadastro do pedido de compras vinculado ao lançamento.
  - Com a opção **"com base nas configurações do sistema"** marcada, o sistema ignorará os valores de impostos existentes no cadastro do pedido de compras vinculado ao lançamento, e calculará os impostos baseados nas configurações de operação, produto, classificação fiscal, tipo de cálculo de ICMS, etc.

- **Permitir alteração manual dos impostos:**
  - **Impostos da capa** – Com essa opção marcada, o sistema calculará os impostos nos itens, porém permitirá que os totalizadores sejam alterados na aba "Impostos" do lançamento das notas
  - **Impostos dos itens** – Com essa opção marcada, o sistema calculará os impostos no lançamento de cada item. Porém, os valores ficarão editáveis na aba "Impostos" do item. Os campos dos totalizadores de impostos, na aba "Impostos" da capa da nota fiscal, trarão o somatório dos impostos, porém eles não ficarão editáveis
  - **Não permite alteração** – Com essa opção marcada, o usuário não conseguirá realizar nenhuma alteração nos valores dos impostos

> **Atenção:** Quando o módulo está configurado para permitir alterar o valor calculado dos impostos, e o usuário alterar o valor de algum imposto, as alíquotas serão ajustadas automaticamente. Se as alterações forem realizadas na capa da nota e houver mais de um produto, o sistema alterará proporcionalmente os valores de cada produto.

---

## Lançamento da nota de entrada

### Lançamento Manual

Na tela principal do sistema, informe a **Empresa** para a qual será feita a entrada do documento, e clique em **"Novo"**.

> *[Imagem: Tela principal do módulo Nota Fiscal de Entrada]*

Na tela a seguir, preencha com os dados gerais da nota fiscal.

> *[Imagem: Tela de lançamento com campos de dados gerais da nota fiscal]*

1. **Número da Nota Fiscal / RPS** – Informe o número do documento fiscal. Ou do RPS (Recibo Provisório de Serviços) quando se tratar de uma nota fiscal de serviço
2. **Número da NFS-e** – Se estiver lançando uma nota fiscal de serviço, neste campo deve ser informado o número da nota, além do RPS que já foi informado no campo 1
3. **Data de emissão** – Deve informar a data em que o fornecedor emitiu a nota fiscal
4. **Data de referência** – Informe a data da entrada do produto na empresa. O estoque do produto será movimentado na data informada neste campo
5. **Data barreira fiscal** – Não são todos os lançamentos que terão essa informação. Neste campo deve ser informada a data em que o veículo de entrega passou por uma barreira de fiscalização. Quando ocorre esse fato, a data de passagem pela barreira será informada no corpo do DANFE
6. **Série** – Informe o número de série da emissão da NF. Essa informação consta no DANFE
7. **Cliente/Fornecedor** – Informe o código da pessoa que fez a emissão do documento fiscal. Só é permitido selecionar pessoas que estiverem cadastradas nas categorias "fornecedor" ou "clientes". Caso tenha sido a primeira compra com o fornecedor, e ele ainda não estiver cadastrado na base do Bimer, basta clicar no ícone ao lado direito da lupa, e realizar o cadastro

Ao selecionar um fornecedor para o qual já exista um ou mais pedidos de compras cadastrados, com status de **"Aberto"** ou **"Parcialmente atendido"**, o sistema abrirá uma tela demonstrando os pedidos de compra deste fornecedor. Se a nota recebida for para atender um dos pedidos listados, basta marcá-los na coluna à esquerda da tela. É possível selecionar mais de um pedido de compra.

> *[Imagem: Tela de seleção de pedidos de compra do fornecedor]*

> **Nota:** Na versão 11.01.03.00 o botão **"Pedido de compra"** fica disponibilizado para recuperar a tela de seleção de pedidos a qualquer momento durante o cadastro da nota para que o cliente possa fazer o vínculo dos itens com o pedido. Mas atenção: uma vez que a nota foi liberada, mesmo que ela seja reaberta para edição, o vínculo não poderá mais ser feito. Para isso, o cliente deverá excluir a nota e refazer.

8. **Operação de entrada** – Informe a operação que será utilizada para registrar a entrada da nota, de acordo com o tipo de entrada que esteja sendo feita
9. **Empresa do estoque** – O sistema trará por padrão a mesma empresa informada na tela de abertura do sistema. Porém, é possível escolher outra empresa para movimentação do estoque
10. **Empresa do financeiro** – O sistema trará por padrão a mesma empresa informada na tela de abertura do sistema. Porém, é possível escolher outra empresa que será responsável pelos pagamentos. O sistema criará os títulos a pagar nesta empresa

> **Nota:** Quando é informada uma empresa de estoque ou de financeiro, diferente da que foi informada na tela principal, o sistema considera a empresa da tela principal como empresa que realizou a compra, e as outras apenas para efeito de movimentação do estoque e criação de títulos no financeiro.

> **Atenção:** Caso a operação utilizada para a entrada da NF esteja com empresa do estoque e financeiro informada em seu cadastro (aba Documento), o sistema resgatará a empresa da operação e não a padrão informada na tela de abertura do sistema.

11. **Centro de custo da nota** – Se a empresa estiver configurada para trabalhar com centro de custo, ele deve ser informado neste campo. É possível configurar para o vínculo do centro de custo seja por documento ou por item, marcando a opção **"Habilitar o vínculo de centro de custo ao produto (Cotação, Pedido de Compras e Nota Fiscal de Entrada)"** no **Configurador Bimer » Geral » Opções » Diversos » Produtos**.

Após inserir as informações gerais da nota fiscal, informe os itens referentes a ela. Caso tenha sido selecionado algum pedido de compra ao incluir o fornecedor, os itens já virão automaticamente. Basta conferir se está tudo correto.

Caso não tenha sido selecionado nenhum pedido de compra, basta clicar em **"Adicionar"** na aba **"Produtos"**. O sistema abrirá a tela para inserção dos itens.

> *[Imagem: Tela de inclusão de itens da nota fiscal]*

Na aba **"Dados gerais"** informe o **código do produto**, a **quantidade** e o **valor unitário** do item, bem como o **setor de entrada** dos produtos. Os campos **CFOP**, **origem** e **situação tributária** do produto virão automaticamente, de acordo com as configurações do sistema. Os valores de impostos podem ser conferidos na aba **Impostos**, dentro da própria área de inclusão de itens.

> *[Imagem: Aba Impostos na inclusão de itens]*

Na aba impostos, da inclusão de itens, a partir da versão **10.00.03.00**, foi incluída a opção para visualizar a **memória de cálculo do PIS e da COFINS**, e na versão **10.00.04.00** foi incluída a memória de cálculo do **IPI**.

Os impostos foram divididos por abas para melhor organização dos campos na tela. A memória de cálculo permite visualizar o motivo pelo qual o tributo não está sendo calculado, ou ainda, verificar como o sistema chegou àquele valor de tributação.

Após concluir o lançamento dos itens, eles serão listados na grade da aba Produtos da tela principal da NF.

### Dados gerais

Na aba **Dados Gerais** é possível lançar informações complementares do documento, como o número da **Chave de acesso** (Nota Fiscal eletrônica).

O campo **indexador** deve ser preenchido quando se realiza a entrada de um documento cujos valores estejam em moedas estrangeiras, ou indexados por algum indicador econômico. Por exemplo, se estiver lançando um documento que esteja com valores em dólares. O indexador informado neste campo será levado para os títulos criados no módulo de contas a pagar.

Os valores lançados nos campos **Al. acréscimo**, **Vl. Acréscimo**, **Valor do seguro** e **Outras desp. acessórias** serão somados ao valor total da nota. O valor de **frete** será somado ao valor da nota se a operação estiver configurada para tal. Caso o valor do frete não esteja somando ao total da nota, clique na informação **"Saiba mais"** que aparece em azul ao lado do campo de valor. Dessa forma, o sistema apresentará o motivo pelo qual o frete não está sendo somado para que seja verificado e corrigido.

Já os valores lançados nos campos **Al. desconto** ou **Vl. Desconto** serão deduzidos do total da nota.

### Impostos

Na aba **Impostos** é possível visualizar o resumo de todos os impostos calculados na nota fiscal. Assim como na inclusão de itens, os impostos foram divididos em abas diferentes para melhor visualização dos campos e valores.

### Observações

Na aba **Observações** podem ser digitadas quaisquer observações que a empresa desejar. Porém, é importante lembrar que os dados deste campo poderão ser enviados para a escrituração no sistema de **Escrita Fiscal**.

### Negociação

Na aba **"Negociação"** deve ser informada a negociação do prazo de pagamento com o fornecedor. Caso a nota esteja vinculada a um pedido de compras, o sistema trará a negociação informada no pedido.

É possível informar a negociação de duas formas:

- Clicando no ícone da lupa ao lado do campo **"prazo"**, e selecionando um prazo pré-cadastrado no **Configurador Bimer > Financeiro > Prazos**
- Clicando em **Adicionar** para incluir manualmente cada uma das parcelas

Ao clicar em adicionar, o sistema exibirá a tela para inserir as informações da parcela:

1. **Número do título** – Número de identificação da parcela de pagamento. Normalmente é composto do número documento + número da parcela. Por exemplo, se o número da NF é 10000, dividida em 03 parcelas, então os números dos títulos seriam 10000-1, 10000-2, 10000-3; ou, 10000-1/3, 10000-2/3, 10000-3/3
2. **Vencimento** – Informe a data estipulada pelo fornecedor na qual o título deve ser pago
3. **Valor** – Informe o valor da parcela
4. **Bloqueado e Aglutina título em cheque** – Faz com que o título já seja criado com essas opções marcadas no módulo contas a pagar
5. **Pagamento antecipado** – Por meio desta opção é possível selecionar ou apenas verificar os saldos disponíveis para serem utilizados para esta nota através do recurso de pagamento antecipado. Para saber mais, acesse o manual da rotina de pagamento antecipado
6. **Tipo de baixa** – Esse campo fará com que o título já seja criado baixado no módulo "A pagar". Como, por exemplo, um título que foi pago à vista em dinheiro. Então, o campo só deve ser preenchido se essa for realmente a intenção do usuário. Ao informar um tipo de baixa, o sistema exibirá uma mensagem de alerta, e ao confirmar, habilitará o campo **Conta bancária**, no qual deve ser informada a conta de onde saiu o valor para pagamento do título
7. **Forma de pagamento** – Informe como o título deverá ser pago: boleto, dinheiro, cheque, etc. A classificação correta da forma de pagamento é importante, pois, além dos aspectos gerenciais, ela poderá influenciar na integração contábil
8. **Natureza de lançamento** – Esta área deve ser utilizada quando se deseja desmembrar o valor do título em mais de uma natureza de lançamento. Para informar o desmembramento, clique no sinal de "+", informe a natureza de lançamento e o valor parcial do título que se refere a ela. Depois de preencher todas as informações, basta gravar

> **Atenção:** O valor total das parcelas deve ser igual ao valor total do documento. Caso haja divergência entre os valores, o sistema não permitirá que a nota seja finalizada.

### Transportadora

Na aba **Transportadora** informe os dados sobre a entrega dos produtos na empresa. Informe qual foi a **transportadora** que entregou o produto, **número e UF da placa do veículo**, **alíquotas** e **valores dos impostos**.

No campo **Tipo de frete** deve ser escolhido o responsável pelo pagamento do serviço de transporte:

- **E – Frete por conta do emitente:** Quando o frete for pago pelo próprio fornecedor
- **D – Frete por conta do destinatário:** Quando o frete for pago pela empresa que fez a compra
- **T – Frete por conta de terceiros:** Quando o frete for pago por outra pessoa que não seja o fornecedor (emitente) ou a empresa que fez a compra (destinatário)
- **P – Próprio por conta do remetente:** Quando o fornecedor não contratou uma transportadora, e enviou os produtos em veículo que pertence a ele. Neste caso, o fornecedor deve estar incluído na categoria de transportadora no cadastro de pessoas
- **Q – Próprio por conta do destinatário:** Quando não houve contratação de uma transportadora, e a própria empresa que fez a compra envia um veículo seu para buscar o produto. Neste caso, a empresa deve estar incluída na categoria de transportadora no cadastro de pessoas
- **N – Sem Frete**

> **Nota:** Para que o valor do frete seja somado ao valor total da nota, o tipo de frete deverá ser o mesmo que foi informado no cadastro da operação utilizada na nota, aba Cálculos > Frete. Caso o valor do frete não esteja somando ao total da nota, na aba Dados Gerais será informado o motivo no campo "Saiba mais".

### Conhecimento de transporte

Essa aba deve ser utilizada quando o tipo de frete escolhido na aba Transportadora for **Frete por conta do destinatário**.

O preenchimento das informações pode ser feito de forma manual, preenchendo os campos de acordo com o documento do CT-e, ou através de importação do XML do CT-e na aba **Conhecimento de transporte eletrônico**. Para saber como funciona a rotina de importação de CT-e, consulte o manual específico sobre o assunto no Portal UCA.

Além de preencher os dados do conhecimento de transporte, também é necessário informar os dados para o pagamento do frete, uma vez que a responsabilidade pela contratação da transportadora foi da empresa que comprou o produto. Os dados referentes ao pagamento ficam na aba **Lançamento manual de transporte > Formas de pagamento**.

A negociação de pagamento à transportadora pode ser feita selecionando um prazo pré-cadastrado, ou inserindo a parcela manualmente.

### DIEF (CE)

A aba **DIEF (CE)** – Declaração de Informações Econômico Fiscais do Estado do Ceará será habilitada somente quando a empresa for do estado desta UF.

É aplicada a todos os contribuintes do estado do Ceará inscritos no Cadastro Geral da Fazenda, sendo uma declaração com dados a serem prestados à SEFAZ-CE. Essa declaração poderá ser mensal ou anual de acordo com o regime de recolhimento.

### ISS Tomador

As informações desta área só devem ser preenchidas quando se estiver fazendo a entrada de uma Nota de Serviço e a empresa adquirente estiver enquadrada como **tomadora de serviços**.

> **Nota:** "O tomador de serviço é a pessoa jurídica que contrata o serviço permanentemente em suas dependências, ou seja, o serviço é contratado para ser prestado diariamente, todos os dias do mês, uma terceirização da atividade junto a contratante. Nesse caso, o ISS é devido no local da prestação do serviço." (Portal tributário)

### Finalizar o lançamento

Após preencher todas as informações da nota fiscal, clique em uma das opções no rodapé da tela, para finalizar o lançamento:

- **Liberar para a conferência** – O lançamento será finalizado, porém ainda precisará ser liberado pelo módulo de **Conferência Cega de Entrada**
- **Liberar** – O lançamento será finalizado, e entrará na fila de liberação do módulo **Liberador do Estoque**
- **Salvar rascunho** – O documento será gravado como está, porém não entrará para a fila de liberação do módulo Liberador de Estoque. Esta opção pode ser usada, por exemplo, quando a digitação ainda não foi concluída, mas por algum motivo ela precisa ser interrompida. Desta forma, o usuário não perderá todos os dados lançados até o momento. Ou ainda, quando o usuário não tiver permissão para liberar lançamentos. Ele tem permissão apenas para incluir. Neste caso, o usuário salvará, sem liberar, e outro usuário fará a liberação

Após liberar a nota ou salvá-la como rascunho, ela poderá ser localizada na tela principal do módulo, por meio do número da nota ou pela chave de acesso vinculada a ela.

---

## Importar NF-e

### Entrada de NF-e a partir do XML

Além do lançamento de forma manual, também é possível fazê-lo a partir da importação do arquivo XML da NF-e. A importação do arquivo XML poderá ser vinculada ou não a um pedido de compras. Porém, o processo é feito em opções diferentes do módulo.

---

### Importar XML (Avulso)

Para realizar a entrada de uma nota fiscal a partir do arquivo XML da NF-e, sem fazer o seu vínculo com um pedido de compras, clique na opção **Importar NF-e > Arquivo XML**.

O sistema abrirá a tela a seguir. Nela informe a **operação** que será utilizada para movimentar o estoque, a **empresa do estoque** e do **financeiro**, e aponte também o **diretório** no qual está localizado o XML que será importado.

> *[Imagem: Tela de importação de XML avulso]*

> **Nota:** Para que a operação apareça é necessário que o tipo de documento vinculado a ela seja um tipo de documento com modelo fiscal 55 (NF-e).

> **Nota:** É obrigatório conceder as permissões de segurança na pasta de armazenamento dos arquivos XMLs.

Para importar o XML sem vínculo com pedido de compras, clique na opção **Importar**. Nesse momento, o sistema começará a fazer uma série de validações para a importação da NF-e.

#### Validação da empresa

A primeira validação é em relação à empresa. O sistema verifica se o CNPJ da empresa selecionada na abertura do lançamento coincide com o CNPJ do destinatário informado nas TAGS do XML. Caso haja divergência nas informações, o sistema apresentará uma mensagem de erro. Isso impede que sejam importadas NF-e para empresas erradas.

> *[Imagem: Mensagem de erro de divergência de CNPJ]*

#### Validação do fornecedor

Caso a relação entre o CNPJ da empresa cadastrada no Configurador Bimer e o CNPJ do destinatário informado no XML esteja correta, o sistema verificará se o emitente da NF-e já está cadastrado como fornecedor na base de dados do Bimer.

Se o fornecedor não for localizado na base de dados, o sistema exibe a mensagem que para prosseguir é necessário cadastrar o fornecedor. Ao clicar em **"Sim"** a tela de cadastro é habilitada.

> *[Imagem: Mensagem solicitando cadastro do fornecedor]*

#### Validação do CFOP

Após a identificação do fornecedor, o sistema verificará se existe alguma informação no sistema que identifique qual CFOP deve ser utilizado na entrada da NF-e. Essa informação é necessária porque o CFOP que consta no arquivo XML é o código de saída utilizado pelo fornecedor, emitente da NF-e. Porém, o CFOP que a empresa utiliza para registrar o documento tem de ser um CFOP de entrada.

Caso o sistema não consiga identificar automaticamente qual CFOP deve ser utilizado, será apresentada a tela de vínculo de CFOPs.

> *[Imagem: Tela de vínculo de CFOPs]*

Selecione se deseja fazer um **"Vínculo definitivo"** ou **"Vínculo temporário"** dos CFOPs:

- **Vínculo definitivo** – O sistema gravará essa informação no cadastro do CFOP, e não voltará a fazer esse questionamento em importações futuras
- **Vínculo temporário** – O sistema NÃO gravará essa informação no cadastro do CFOP, e VOLTARÁ a fazer esse questionamento em importações futuras

> **Atenção:** É preciso ter atenção ao escolher o vínculo definitivo, pois, como essa informação ficará fixa para importações futuras, pode ocorrer de haver entrada de NF-e com CFOP errado. Isso porque, por exemplo, a empresa pode receber diversas NF-es emitidas com CFOP 6.101, porém adquiridos para fins diferentes (Revenda, produção, uso e consumo) para os quais os CFOPs de entrada são distintos.

Após a escolha do tipo de vínculo, clique em **"Vincular"**. Será aberta a tela para localização do CFOP a ser utilizado para entrada da NF-e. Basta localizar o CFOP desejado, e clicar em **"OK"**.

> **Nota:** Quando é escolhida a opção **"Vínculo definitivo"**, após selecionar o CFOP desejado, o sistema gravará essa informação no **Configurador Bimer > Estoque > Tributos > CFOP**, no cadastro do CFOP (encontrado no XML), no campo **CFOP Equivalente**. Se essa informação for retirada deste campo, o sistema voltará a apresentar a tela de crítica na próxima importação.

#### Validação dos produtos

Na sequência o sistema verificará se já existe vínculo entre os produtos que constam no arquivo XML com produtos na base de dados do Bimer. Caso não consiga identificar os produtos na base de dados, será apresentada uma tela com a relação de produtos não identificados.

> *[Imagem: Tela de produtos não identificados com opções de vínculo]*

Nesta tela são encontrados os seguintes campos e opções:

- **Observações:** Caso o sistema encontre algum produto na base de dados Bimer com descrição igual à do produto no XML, porém sem nenhum vínculo estabelecido, será apresentada uma observação com essa informação
- **Cadastrar** – Caso seja um produto novo, que ainda não está cadastrado na base de dados do Bimer, ao escolher essa opção, o sistema abrirá a própria tela de cadastro de produtos, já com algumas informações preenchidas
- **Vincular** – Essa opção deve ser utilizada quando o produto já existe na base de dados do Bimer, porém ainda não foram feitas as configurações de vínculo com o fornecedor. Ao clicar nesta opção, o sistema abrirá a tela de pesquisa de produto. Localize o produto correspondente ao que você deseja vincular, e selecione-o

Após selecionar o produto, ele sumirá da lista de itens. Nela permanecerão apenas os itens que ainda não foram vinculados a nenhum produto na base de dados.

- **Realizar vínculo definitivo** – Marcar essa opção, que fica no rodapé da tela, faz com que os vínculos estabelecidos entre os itens do XML com os produtos da base de dados sejam definitivos. Desta forma, quando houver uma nova importação de um arquivo XML **do mesmo fornecedor**, o sistema não questionará mais essas informações
- **Atualizar informações** – O vínculo de itens do XML com produtos da base de dados também pode ser realizado manualmente, direto no módulo de **Cadastro de Produtos**. Caso o usuário que está lançando a NF queira aguardar os ajustes no cadastro de produtos, sem fechar a tela de lançamento da NF, quando o ajuste for feito, basta clicar na opção **"Atualizar informações"** para que o sistema reconheça as alterações, e já identifique o produto

> **Nota:** Adiante será explicado como fazer o vínculo direto no cadastro de produto.

- **Vincular por pedido de compra** – Ao clicar nesta opção, o sistema abrirá a tela para localização de pedidos de compra. É necessário que exista algum pedido de compra para o fornecedor emitente da NF-e, com um ou mais produtos da lista de itens, e que esteja com status de aberto ou parcialmente atendido. É possível localizar pelo código do pedido de compras ou do produto
- **Vincular (no rodapé da tela)** – Tem a mesma função da opção com o mesmo nome, localizada ao lado do item

#### Desfazer vínculo de produtos

Caso o cliente tenha vinculado os produtos de maneira incorreta, é possível desfazer o vínculo dos produtos pela tela de importação de XML ou dentro da própria nota, clicando sobre a opção **"Vínculo de produtos"**. Será apresentada uma tela com os itens e, do lado esquerdo, o checkbox para marcar aqueles que precisam ter o vínculo desfeito, basta selecionar e clicar em **OK**. Com isso, os códigos do fornecedor, EAN e NCM que estiverem no XML serão removidos do cadastro dos produtos.

> **Nota:** Ao desfazer o vínculo, caso a sua nota esteja em edição, será necessário cancelar o cadastro da nota. Caso ela já esteja liberada, será necessário excluir o cadastro da nota e importar novamente o XML para realizar novos vínculos. Além disso, para realizar tal rotina, é necessário ter permissão no cadastro de usuários e o cliente deverá estar na versão **10.00.02.00** ou superior.

#### Conversão de embalagens

Após realizar o vínculo de todos os itens do arquivo XML com produtos da base de dados, a tela fechará automaticamente.

A tela de conversão de embalagens só aparecerá se no **Configurador Bimer > Estoque > Opções > Nota Fiscal de Entrada > Importar NF-e XML**, a configuração **"Sugerir a quantidade de embalagem na importação do XML"** estiver marcada. Ela pode ser utilizada quando a empresa controla o produto em unidade diferente da unidade que consta na NF-e emitida pelo fornecedor.

Por exemplo, quando o fornecedor emite a nota em caixa porém a empresa controla em unidade. Neste caso, o sistema converterá de caixa para unidade na entrada da NF-e. Nesta tela, além de serem listados todos os produtos com as suas respectivas codificações, também há colunas informando:

1. Quantidade do item na unidade emitida pelo fornecedor
2. Quantas unidades do produto devem existir em uma embalagem daquele fornecedor, informado no cadastro do produto no Bimer
3. A quantidade final do produto que será dada entrada no estoque

De acordo com a permissão do cadastro de usuários, é possível realizar ajustes na quantidade final a ser dada entrada. Para isso, basta clicar em **"modificar quantidade"** que fica logo abaixo do nome do fornecedor. O sistema habilitará o campo **Qt. Final**.

> **Atenção:** Outro ponto que precisa estar configurado, para aparecer a tela de conversão de embalagens para unidades, é no **Cadastro do produto > Complementar > Fornecedores**. No vínculo do fornecedor com o produto, o campo **"Qt. Padrão na embalagem"** deve estar preenchido.

Após confirmar as informações da embalagem (caso a tela apareça), clique em **OK**. O sistema abrirá a tela padrão de lançamento de notas fiscais, com os dados preenchidos de acordo com o encontrado no XML. Basta confirmar as informações, e liberar normalmente o documento.

---

### Importar XML (Pedido de compras)

A rotina de importação de XML com pedido de compras é muito semelhante à rotina de importação de XML avulso. A diferença é que na importação do XML avulso existe a possibilidade de utilizar um pedido de compras para otimizar o processo de vínculo entre os itens do XML e os produtos da base de dados.

Contudo, na opção de **Importar vinculado a pedido de compras**, além de o pedido poder ser utilizado para a questão dos vínculos dos produtos, ele também é utilizado para validar se o que consta na NF-e (Preços, produtos, quantidades, negociação, etc) está de acordo com o que foi informado no pedido.

Para iniciá-la, clique em **Importar NF-e > Arquivo XML > Preencha os dados solicitados > Importar vinculado a pedido de compra**.

> *[Imagem: Opção de importar vinculado a pedido de compra]*

Os primeiros passos serão exatamente iguais aos da importação de XML avulso, até a tela na qual é possível realizar os vínculos entre itens do XML e da base de dados.

Após passar pela tela dos itens, o sistema abrirá uma nova tela, listando todos os pedidos de compra que estão com status de **aberto**, **confirmado** ou **parcialmente atendidos** do fornecedor emitente da NF-e.

Nesta tela, selecione o pedido de compras desejado (é possível selecionar mais de um). Para selecionar, basta dar duplo clique do mouse sobre ele, ou clicar com o botão direito do mouse e marcar.

> *[Imagem: Tela de seleção de pedidos de compra para vínculo com XML]*

> **Nota:** A mensagem sobre o atendimento parcial ou com corte não significa que haverá atendimentos neste status. Ela pode aparecer mesmo que não haja divergências, porém, se todas as quantidades baterem, o pedido será atendido totalmente.

Após a seleção de um pedido, o sistema demonstrará na parte inferior esquerda da tela os itens do **pedido de compras**, e na parte inferior direita os itens do **XML**. O sistema marcará os produtos que foram localizados no arquivo XML e no Pedido de compras.

Caso haja algum produto no pedido de compras para o qual não exista quantidade para atendê-lo no XML da NF-e, ele ficará na cor azul, e no rodapé da tela é habilitada a opção para confirmar o atendimento parcial ou o atendimento com corte.

Para dar sequência, basta clicar em **"Concluir"**. O sistema abrirá a tela padrão de lançamento de Notas Fiscais, com os dados preenchidos de acordo com o encontrado no XML. Basta confirmar as informações, e liberar normalmente o documento.

---

### Vínculo no Cadastro de Produtos

Conforme explicado nos tópicos anteriores, ao fazer importação de XML, seja ele avulso ou com pedido de compras, é necessário estabelecer o vínculo entre os itens do arquivo XML e os produtos no Bimer. E essa operação pode ser feita direto na tela de importação da NF-e.

Caso o usuário tenha optado pelo **vínculo definitivo**, o sistema alterará o cadastro de produtos para que na próxima importação ele seja identificado automaticamente.

Essas alterações são realizadas no **Cadastro de Produto > Identificação > Códigos**. O sistema incluirá 03 códigos no cadastro do produto:

- **Código do fornecedor** – Codificação do produto dada pelo fornecedor. Essa informação está na TAG `<cProd>` do arquivo XML
- **NCM** – Código NCM do produto, localizado na TAG `<NCM>` do arquivo XML
- **EAN** – Código de barras do produto, localizado na TAG `<EAN>` do arquivo XML

> *[Imagem: Tela de códigos no Cadastro de Produtos]*

Para que o sistema saiba qual tipo de código ele deve utilizar em cada uma das codificações, ele utilizará os tipos de código de produtos informado no **Configurador Bimer > Estoque > Opções > Produto > Padrão > Tipos de códigos**.

---

### Importação por chave de acesso (NFStock)

Além da importação por arquivo XML, é possível importar NF-es somente com a **chave de acesso**. Contudo, para isso, o cliente precisará ter a licença do produto **NFStock**.

Para realizar a importação, basta acessar o menu **Importar NF-e > Chave de acesso (NFStock)**. Na tela seguinte, informar a **operação**, a **empresa** e o **código da chave de acesso**. Em seguida, clicar em **Importar** ou **Importar vinculado a pedido de compra**, conforme já vimos anteriormente.

> *[Imagem: Tela de importação por chave de acesso NFStock]*

A partir deste momento, a importação da nota é feita normalmente conforme já vimos nos tópicos anteriores.

> **Nota:** Para que essa opção seja habilitada, no **Configurador Bimer > Estoque > Opções > Nota Fiscal de Entrada > NF-Stock**, insira a URL do webservice do NF-Stock.

---

### Importação por Certificado Digital (NFStock)

Liberado na versão **10.00.02.00** do sistema, o recurso de importação de notas fiscais usando o **certificado digital** tem o objetivo de permitir ao cliente verificar, em conjunto com o serviço do NFStock, todas as notas (modelo 55) emitidas para o seu CNPJ de forma que ele possa analisar quais notas já foram importadas para o sistema e quais ainda precisam ser importadas.

> **Nota:** Nessa modalidade, o cliente não precisará ter o NFStock contratado, pois o sistema utilizará apenas o serviço do NFStock para as consultas, juntamente ao arquivo do certificado digital.

#### Configurações necessárias

Para utilizar essa rotina, o cliente precisará fazer uma configuração antes. Acesse **Configurador Bimer > Geral > Empresa > Selecione a empresa que utilizará a rotina > Estoque > Nota Fiscal de Entrada**. Nessa tela, o cliente deverá habilitar a rotina, marcando a opção **Trabalhar com importação de NF-e por certificado digital (NFStock)**.

Após selecionar a opção pela primeira vez, o sistema solicitará informações sobre o arquivo do certificado digital:

1. **Arquivo PFX do certificado digital modelo A1:** deverá ser selecionado o arquivo com extensão .pfx referente ao certificado digital. Não será o certificado instalado na máquina, mas, sim, o próprio arquivo
2. **Código cliente:** código do cliente na Alterdata
3. **Senha do certificado digital:** senha do certificado digital para que o serviço do NFStock possa utilizar para realizar as consultas

> *[Imagem: Tela de configuração do certificado digital]*

> **Nota:** Caso o certificado vença, o mesmo procedimento deverá ser realizado para atualização deste. Basta clicar sobre a opção **"Atualizar certificado"**.

Nessa mesma tela há uma opção chamada **"Validar integração"** que servirá para validar certificado digital, conexão com webservice do NFStock e verificar se a empresa está cadastrada no NFStock.

> **Nota:** O certificado digital apontado para utilização no faturamento não terá relação com essa rotina. O certificado não fica salvo no banco de dados do Bimer. Ele fica armazenado no banco do NFStock, junto à senha criptografada.

#### Rotina

Feita a configuração acima, o cliente já poderá utilizar a rotina. Para isso, abra o módulo **Nota Fiscal de Entrada** e selecione a opção **Certificado Digital (NFStock)** no menu **Importar NF-e**.

Nesse momento o sistema já começa a fazer a busca das notas emitidas para o CNPJ da empresa por meio do serviço do NFStock. Há um prazo de **48h** para as notas aparecerem na consulta, o que se faz necessário devido ao prazo para cancelamento das notas. Dessa forma, o cliente não importará uma nota para o sistema que poderá ser cancelada pelo fornecedor.

> *[Imagem: Tela de consulta de notas por certificado digital]*

Após a consulta, o sistema apresentará a tela com as seguintes informações:

1. **Data de emissão:** poderão ser filtradas quais notas deseja visualizar, de acordo com a data de emissão
2. **Status (filtro):** o cliente poderá optar por visualizar somente as notas importadas, não importadas e/ou ignoradas
3. **Painel de grupo:** caso o cliente deseje, ele poderá agrupar as notas de acordo com as colunas apresentadas para melhor visualização das informações
4. **DANFE:** por meio desta opção o cliente poderá gerar o DANFE da nota
5. **Status:** o cliente poderá verificar o status de cada uma das notas para verificar o que já foi e o que ainda não foi importado
6. **Ação:** caso o cliente não queira importar determinada nota naquele momento, ele poderá ignorá-la. Contudo, isso não significa que o cliente não poderá importá-la novamente em um momento posterior
7. Ao final da tela há um **log** de quando foram feitas as últimas integrações entre Bimer x NFStock x Sefaz

A tela conta também com a opção **"Entenda como funciona"** estilo AVA para que o cliente consiga entender a rotina sem que seja necessário contato com o suporte.

Após selecionar a nota desejada, o cliente poderá fazer a importação por meio das opções **"Importar"** ou **"Importar vinculado a pedido de compras"**. A partir desse momento, a rotina de importação segue igual ao que foi apresentado nos tópicos anteriores.

> **Nota:** As importações dessa tela não são feitas de forma otimizada, mas, sim, individual e manualmente.

---

## Gerenciador de eventos

Esta rotina tem como objetivo permitir o envio de eventos específicos para notas fiscais que possuam incidência dos novos impostos. O uso correto do Gerenciador de Eventos assegura a **Transparência Fiscal** na repartição de tributos, o **Ajuste de Créditos** para evitar a cumulatividade e a total **Conformidade Legal** com as Notas Técnicas (NTs) vigentes, evitando rejeições e passivos tributários.

> **Atenção:** Essa funcionalidade está disponível a partir da versão **11.02.03.26**.

### Configurações

Para que o recurso funcione corretamente, realize as seguintes definições antes do primeiro uso:

- **Diretório de Armazenamento:** Será utilizada a estrutura do Faturamento, então é necessário configurar a pasta onde os arquivos XML dos eventos serão salvos em **Configurador / Faturamento / Opções / Dados Gerais / Comunicação com a SEFAZ**
- **Certificado digital da empresa:** Configure o certificado digital válido da empresa no sistema em **Configurador / Geral / Empresas / Geral / Certificado Digital**
- **Permissão de usuários:** O usuário precisa ter permissões no módulo para conseguir ter acesso

### Visão Geral

Existem duas formas de acessar a ferramenta no módulo Nota Fiscal de Entrada:

- **Menu Principal:** Localizado na barra superior de ferramentas do módulo

> *[Imagem: Acesso ao Gerenciador de Eventos pelo menu principal]*

- **Menu de Contexto:** Clique com o botão direito sobre uma nota já **Liberada**

> *[Imagem: Acesso ao Gerenciador de Eventos pelo menu de contexto]*

### Cadastro e Envio de Evento

O usuário pode filtrar o documento diretamente no Gerenciador ou na tela principal do Nota Fiscal de Entrada.

> **Dica:** Se você abrir o Gerenciador com um documento já selecionado na grid principal do Nota Fiscal de Entrada, ele será levado automaticamente para o filtro.

> **Atenção:** Somente documentos com valores de **IBS** e **CBS** podem trabalhar com a rotina de eventos, seguindo a legislação vigente.

Ao clicar em **"Adicionar um evento"**, selecione o tipo desejado. Dependendo da escolha, o sistema permitirá vincular itens e confirmar o envio.

#### Requisitos para Lançamento de Eventos

Para que o sistema processe o lançamento dos eventos, os seguintes critérios devem ser atendidos simultaneamente:

- **Origem do Documento:** A nota fiscal deve ter sido, obrigatoriamente, importada via arquivo XML
- **Configuração de Tributação:** A operação utilizada deve estar configurada para o cálculo de IBS/CBS
- **Status do Documento:** Não é permitido o lançamento em documentos que possuam histórico de devolução
- **Tipo de Nota:** O documento não pode ser classificado como Nota Complementar
- **Finalidade da Operação:** A opção de Ajuste deve estar desmarcada nas configurações da operação

### Operações de Manutenção

#### Cancelamento de Evento

1. No gerenciador clique com o botão direito sobre o evento desejado
2. Selecione a opção **"Cancelar"**
3. Confirme o envio do Cancelamento

> *[Imagem: Menu de contexto para cancelamento de evento]*

#### Inserir dados de Autorização Manualmente

1. Clique com o botão direito sobre o Evento desejado
2. Selecione **"Inserir Dados de Autorização Manualmente"**
3. Preencha o número do protocolo de autorização

#### Editar dados de autorização manualmente

1. Clique com o botão direito sobre o Evento
2. Selecione **"Editar Dados de Autorização"** e faça a correção

#### Registro de Logs e Auditoria

Acesse: **Configurador Bimer / Geral / Ferramentas / Auditoria dos Sistemas**. Lá você encontrará os logs detalhados de todas as movimentações do Gerenciador.

### Informações importantes

Há algumas informações importantes sobre a rotina:

- Os XMLs trazidos do NFStock ficarão armazenados na tabela **NFESEFAZ**
- Se a nota for importada por fora do recurso, ou lançada manualmente, o sistema consegue identificar pela chave de acesso, e a marca como importada. Isso desde que a configuração esteja marcada em **Configurador Bimer > Estoque > Opções > Nota Fiscal de Entrada > Geral > "Bloquear entrada de notas com chave de acesso duplicada"**

---

## Importação de XMLs em massa

A partir da versão **9.03.07.00** do Bimer é possível realizar a importação de XMLs de notas fiscais para o Nota Fiscal de Entrada. O recurso, liberado com a proposta de agilizar processos, é executado por meio de tarefa agendada e depende de algumas configurações.

### Configuração do Diretório Padrão

O primeiro passo é indicar para o sistema o local padrão no qual ele deve buscar os XMLs que precisa importar. Para isso:

1. Acesse o **Configurador Bimer**, clique na aba **Estoque**, e em seguida em **Opções**
2. Selecione **Nota Fiscal de Entrada** e, em seguida, **Importação NF-e XML**
3. No campo **"Diretório padrão para importação dos XMLs"** informe o local onde serão salvos os arquivos de NF-e enviados pelos fornecedores
4. Em seguida, grave as configurações

> **Atenção:** Todas as NF-es que desejar importar automaticamente, deverão ter os seus arquivos XMLs salvos manualmente por um usuário no diretório padrão.

### Criação da tarefa para importação em massa

O próximo passo é criar a tarefa responsável pela execução da importação. Para isso:

1. Acesse **Tarefas** no Configurador Bimer (aba Geral)
2. Clique em **Novo**, e informe uma descrição para a tarefa. Exemplo: Importação em massa de XML
3. No campo **Sistema**, selecione a tarefa **000228 – Tarefa para importar NFEntrada por XML**
4. Clique em **Ok** para gravar as configurações

### Agendamento da tarefa

Após criar a tarefa de importação, é preciso informar para o sistema a periodicidade em que ela deverá ser executada. Para fazer esse agendamento:

1. Acesse **Tarefas Agendadas** no Configurador Bimer e crie um novo agendamento
2. Informe uma descrição para o agendamento (pode ser o mesmo nome que utilizou na criação da tarefa). Caso tenha mais de uma empresa para a qual deseja fazer a importação, sugerimos que indique o seu nome e/ou código na descrição. Ex: EMPRESA 0001 - IMPORTAÇÃO EM MASSA
3. No campo **Tarefa**, selecione a tarefa criada na etapa anterior
4. Defina a frequência de **Ocorrência** desejada
5. Defina a **duração** da tarefa (sugerimos sem data final)
6. Na aba **Spy system** configure o(s) usuário(s) que deve(m) receber e-mail de ocorrências na execução da tarefa. Para informar mais de um usuário em cada opção, utilize sinal de vírgula (,) para separá-los
7. Clique na aba **Importação NFEntrada**
8. Nos campos **Empresa do Estoque** e **Empresa do Financeiro** informe a empresa na qual será feita a entrada do saldo dos produtos e a empresa responsável pelo pagamento dos títulos
9. No campo **Operação** informe qual deve ser utilizada para movimentar o estoque dos produtos
10. Informe se deseja utilizar diretórios diferentes por empresa
11. Selecione o **status** que a nota terá após ser importada
12. Clique em **Ok** para gravar o agendamento

> **Atenção:** Cada agendamento só executa a importação para uma (01) empresa. Por isso, se houver a necessidade de fazer a importação para mais de uma empresa, é preciso realizar o procedimento de inclusão de tarefa agendada para cada uma delas.

### Rotina de importação

Após todas as configurações serem realizadas, execute o **Gerente Eletrônico**. Ele é o responsável por realizar a tarefa. Por isso, deve ficar em execução o tempo todo, e em uma máquina que tenha acesso ao diretório padrão informado nas configurações.

Agora é só salvar os arquivos XML no diretório e deixar que o Bimer faça o trabalho pesado.

> **Atenção:** Caso já trabalhe com o Gerente Eletrônico para realizar outras tarefas, é necessário fechá-lo e fazer novo login para reconhecer a nova tarefa.

Após o Gerente Eletrônico executar a tarefa, os XMLs serão movidos para novos diretórios, dentro do diretório padrão:

- **Arquivos XML importados com sucesso** – Serão salvos em `<diretório padrão>\IMPORTADO\EMPRESA<código>\<ano-mês-dia da importação>`
- **Arquivos XML com críticas e não importados** – Serão salvos em `<diretório padrão>\NÃO IMPORTADO\EMPRESA<código>\<ano-mês-dia da execução>`

### Configurações adicionais

As configurações vistas até aqui são básicas e indispensáveis para o funcionamento da rotina. Porém, existem outras que podem influenciar no processo.

#### Prazo de pagamento

Por padrão, a importação utilizará as condições de pagamento disponíveis no arquivo XML, para preencher os dados de negociação da NF de entrada. Porém, existem duas outras opções que podem ser configuradas:

1. Acesse o **Configurador Bimer**, e selecione a aba **Estoque**
2. Clique em **Opções**, e selecione **Nota fiscal de entrada / Importação NF-e XML**. Nesta área há algumas opções:
   - Recuperar o prazo configurado no cadastro do fornecedor ao invés do informado no XML
   - Recuperar o prazo configurado no cadastro do produto, aba complementar, tela do fornecedor
   - Recuperar o prazo dos pedidos de compra vinculados no documento ao invés do informado no XML

Se nenhuma delas estiver marcada, o sistema utilizará os dados contidos no XML.

> **Dica:** Como nem sempre no arquivo XML o número dos títulos informados pelo fornecedor é composto pelo número da NF-e, se as opções acima não estiverem marcadas, sugerimos que, nessa mesma tela, marque-se a opção **"Atualizar o número do título nas parcelas com o número da nota ao invés do informado no XML"**. Facilitando, assim, a identificação dos títulos quando eles forem criados no módulo de contas a pagar.

#### Cadastro de Pessoas

No cadastro de fornecedores existem configurações que podem influenciar na importação:

1. Acesse o módulo **Cadastro de Pessoas**
2. Clique na categoria **Fornecedores**, e localize o fornecedor desejado
3. Clique em **Editar** e, em seguida, na opção **Cadastros**. Nela temos as seguintes configurações:
   - **Operação** – Informe a operação que será utilizada para movimentação do estoque, na importação de NF-e emitidas por este fornecedor. Caso não haja nenhuma operação informada, o sistema utilizará a que foi configurada no cadastro do agendamento da tarefa
   - **Prazo** – Informe o prazo padrão que a importação utilizará para preencher os dados da negociação. O sistema só considerará este prazo, caso no Configurador Bimer, aba Estoque, Opções, Nota fiscal de entrada, Importação NF-e XML, a opção "Recuperar o prazo configurado no cadastro do fornecedor ao invés do informado no XML" esteja marcada
   - **Forma de pagamento para tarefa agendada de importação de NFEntrada** – Caso não haja nenhuma forma de pagamento informada nesta opção, será utilizada a do cadastro do prazo vinculado ao fornecedor, desde que no cadastro do prazo haja apenas 1 (uma) forma de pagamento vinculada
   - **Natureza de lançamento** a ser utilizada na importação de dados. Por padrão, ela será utilizada no preenchimento da NF-e importada

> **Atenção:** Se não for informada uma natureza de lançamento, e no Configurador Bimer, Estoque, Opções, Movimento, Opções gerais, a configuração **"Obrigar o preenchimento das naturezas de lançamento nos itens (Nota Fiscal de Entrada / Pedido de compras)"** estiver marcada, a NF-e não será importada.

#### Cadastro de Produtos

Para conferir ou configurar um prazo vinculado ao cadastro do produto:

1. Acesse o módulo **Cadastro de Produtos**, e localize o produto desejado
2. Clique na aba **Complementar**
3. Dê duplo clique sobre o fornecedor desejado
4. No campo **Prazo** informe (ou apenas consulte) o que será usado como padrão na entrada das notas

> **Nota:** O prazo informado neste campo só será considerado se a opção "Recuperar o prazo configurado no cadastro do produto, aba complementar, tela do fornecedor" estiver marcada no **Configurador Bimer / Estoque / Opções / Nota fiscal de entrada / Importação NF-e XML**.

#### Setor de entrada

Por padrão, o sistema utilizará o **"setor de entrada obrigatório"** informado no cadastro do tipo de documento, vinculado à operação de movimentação do estoque. Para conferir ou configurar esse setor acesse o tipo de documento no **Configurador Bimer, aba Estoque**.

Caso não haja nenhum setor informado no tipo de documento, o sistema utilizará o setor padrão de movimentação de estoque da empresa. Para conferir ou configurar esse setor acesse o **Configurador Bimer, aba Estoque / Opções / Movimento / Opções adicionais**.

### Situações que impedem a importação

- Se houver alguma informação no XML que não esteja cadastrada no Bimer, como, por exemplo: produto, fornecedor, CFOP, etc
- Se a operação configurada para utilização:
  - Estiver inativa
  - For de complemento de ICMS, de substituição tributária, de IPI, de PIS, de COFINS ou de valor
  - O tipo da operação for de entrada, a base estiver configurada para utilizar o recurso de saída da composição e não tiver uma operação de composição informada no cadastro da operação
  - Se no tipo de documento vinculado à operação não tiver a empresa de estoque informada
  - Se a operação não for de devolução e o modelo fiscal do tipo de documento for diferente de "55 – Nota Fiscal Eletrônica"
- O emitente esteja como inativo nas categorias de cliente e/ou fornecedor. Esta inconsistência é apresentada quando:
  - O emitente do XML pertencer apenas à categoria de fornecedor e estiver inativo
  - O emitente do XML pertencer apenas à categoria de cliente e estiver inativo
  - O emitente do XML pertencer às categorias de fornecedor e cliente e estiver inativo em ambas
- Existirem produtos, no documento, inativos para compra no módulo cadastro de produto, aba Empresa
- Se estiver marcada a opção **"Obrigar o preenchimento das naturezas de lançamento nos itens (Nota Fiscal de Entrada / Pedido de Compra)"** no módulo Configurador Bimer / Estoque / Opções / Movimento / Opções gerais; e a natureza de lançamento não estiver informada no cadastro do fornecedor. Ou se o emitente estiver somente na categoria cliente, no cadastro da pessoa
- Se houver inconsistências no prazo. Elas ocorrerão se:
  - A operação atualiza financeiro
  - Não houver prazo no cadastro de produto ou no cadastro do fornecedor, e não houver dados de duplicata no XML
  - O prazo resgatado estiver com o tipo de classificação sintético
  - O prazo estiver inativo

---

## Nova devolução

Esta opção é utilizada para dar entrada de Notas Fiscais de Devolução de Vendas, quando o próprio cliente emite a NF-e.

Ao clicar nesta opção, o sistema abrirá a tela para selecionar o **cliente** e o **documento original da venda** (emitido no módulo Faturamento) que está sendo devolvido.

Após confirmar a seleção do documento, será exibida a tela padrão do lançamento de notas fiscais de entrada. Basta preencher os campos **"Número da nota fiscal/RPS"** e **"Data de emissão"**, confirmar os dados e finalizar o lançamento.

> *[Imagem: Tela de nova devolução de vendas]*

---

## Importar CT-e

A rotina de importação de CT-e está disponível em material específico sobre o tema, por trabalhar em paralelo do módulo CT-e.

Você pode obter o manual específico de CT-e no **Portal UCA / Bimer / Manuais / Importação de CT-e**.

---

## Manutenção de Lotes

Este recurso é o mesmo disponível no **Configurador Bimer > Geral > Ferramentas > Manutenção de lotes do estoque**.

Sua função é demonstrar todos os lotes que ainda não foram liberados pelo **Liberador de Estoque** e os motivos de ainda não terem sido liberados.

Nesta tela aparecerão os documentos que estiverem nas seguintes situações:

- **Abertos** – Documentos que ainda não foram liberados pelo módulo no qual ele foi lançado. Ou seja, ainda não foram para a fila de liberação do Liberador de Estoque
- **Prontos para serem liberados** – Documentos que já foram liberados pelo módulo no qual ele foi lançado. Porém, ainda não foram atualizados pelo módulo Liberador de Estoque. Isso pode ocorrer quando o Liberador de Estoque não está em execução, ou ainda não chegou o próximo horário de agendamento de execução
- **Em processo de liberação** – Documentos que estão sendo atualizados pelo Liberador de Estoque no momento em que o filtro desta tela foi realizado
- **Com erro** – Documentos que o Liberador de Estoque tentou fazer a atualização do documento, mas ocorreu algum erro durante o processo. Quando um documento está com status de erro, será apresentada uma mensagem com a descrição no rodapé da tela. Após a correção do erro, é necessário clicar com o botão direito do mouse sobre o documento, para marcá-lo para uma nova liberação
- **Com erro (Nova tentativa)** – Documentos que o Liberador de Estoque tentou fazer a atualização do documento pela segunda vez, mas ocorreu algum erro durante o processo

---

## Liberar Lotes

Este recurso é utilizado para realizar liberação em lote de vários documentos lançados no módulo, porém não foram liberados, apenas salvos.

Basta acessar a tela de liberação de lotes, e na tela a seguir, clicar em **Adicionar** para escolher os documentos que deseja liberar. Após selecionados, basta clicar em **Liberar**.

> **Nota:** O sistema só permitirá selecionar documentos que estejam com status de **aberto**.

---

## Enviar opinião

Através deste recurso é possível que o usuário do sistema se comunique direto com o setor de desenvolvimento do Bimer, fazendo a sua avaliação sobre o módulo Nota Fiscal de Entrada.

Basta clicar na opção, e na tela que se abrirá, informar o seu **e-mail**, o seu **comentário**, e classificar o produto com até **5 estrelas**. E clicar em **Enviar**.

---

## Recarregar opções

Esta opção foi implementada com o intuito de facilitar a vida do usuário, uma vez que não será necessário fechar o módulo e reabri-lo caso alguma configuração tenha sido modificada fora do Nota Fiscal de Entrada. Assim, mesmo com o módulo aberto, será possível recuperar as novas configurações apenas clicando sobre o botão **"Recarregar opções"**.
