# Controle de Série dos Produtos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [O que é série?](#o-que-é-série)
  - [Questões legais](#questões-legais)
- [Configurações necessárias](#configurações-necessárias)
  - [Configurador / Geral / Empresas](#configurador--geral--empresas)
  - [Configurador / Geral / Setores](#configurador--geral--setores)
  - [Cadastro de produtos](#cadastro-de-produtos)
  - [Configurador / Estoque / Outros cadastros / Tipos de detalhamento de série](#configurador--estoque--outros-cadastros--tipos-de-detalhamento-de-série)
- [Outras configurações (opcionais)](#outras-configurações-opcionais)
  - [Configurador / Faturamento / Opções / Dados gerais / Permissões](#configurador--faturamento--opções--dados-gerais--permissões)
  - [Configurador / Faturamento / Opções / Pedido de venda / Permissões](#configurador--faturamento--opções--pedido-de-venda--permissões)
  - [Configurador / Faturamento / Opções / Pedido de venda / Geral](#configurador--faturamento--opções--pedido-de-venda--geral)
  - [Configurador / Faturamento / Opções / Dados gerais / Impressão](#configurador--faturamento--opções--dados-gerais--impressão)
  - [Configurador / Faturamento / Opções / Dados Gerais / Parâmetros](#configurador--faturamento--opções--dados-gerais--parâmetros)
  - [Configurador / Faturamento / Opções / Pedido de venda / Liberação](#configurador--faturamento--opções--pedido-de-venda--liberação)
  - [Configurador / Faturamento / Opções / NF-e / Complementar](#configurador--faturamento--opções--nf-e--complementar)
  - [Requisição de Materiais / Ferramentas / Opções / Geral](#requisição-de-materiais--ferramentas--opções--geral)
- [Rotina](#rotina)
  - [Requisição de Materiais](#requisição-de-materiais)
  - [Nota Fiscal de Entrada](#nota-fiscal-de-entrada)
  - [Inventário](#inventário)
  - [Pedido de venda](#pedido-de-venda)
  - [Faturamento](#faturamento)
  - [Consulta de Estoque](#consulta-de-estoque)
  - [BiEstoque](#biestoque)

---

## Introdução

### O que é série?

A série é um código único de identificação individual do produto, ou seja, o controle de número serial é feito em cada unidade do produto. Com isso, na movimentação de um produto que tenha serial, cada número de série informado sempre possui quantidade 1.

O número de série fornece um nível de controle consideravelmente grande, por identificar unicamente cada produto e até mesmo possuir questões legais que obrigam, em alguns casos, a sua utilização.

**Exemplo:** em uma conferência dos produtos em estoque, notou-se a falta de um produto. Com isso, verifica-se qual o número de série dele para saber qual é o produto e tentar identificar, por exemplo, se não foi emitida uma NF que continha esse número de série ou algum outro tipo de movimentação que a envolva.

### Questões legais

Existem questões legais que obrigam a utilização de série em alguns tipos de produtos, como exemplo a Lei nº 11.903/2009 que requere a rastreabilidade e controle de medicamentos, utilizando o código IUM que é composto por algumas informações numéricas e uma delas é a série. Além dessa, pode haver outras situações legais que obrigam as empresas a realizarem este controle.

> **Observação:** O recurso de número serial é excludente. Isso significa que ou o produto controla lote, ou controla número de série.

---

## Configurações necessárias

Algumas configurações são necessárias para trabalhar com controle de série no Bimer.

### Configurador / Geral / Empresas

No cadastro da empresa, na aba **Estoque**, acesse a aba **Controle de produção** e marque a opção **Controla lote/série do produto**.

> *[Imagem: Tela do cadastro de empresa com a opção "Controla lote/série do produto"]*

### Configurador / Geral / Setores

No cadastro de setor da empresa, marque a opção **"Este setor controla lote/série"**. Esta opção, caso a empresa trabalhe com setores, informará quais setores podem ou não trabalhar com lote/série.

> *[Imagem: Tela do cadastro de setores com a opção de controle de lote/série]*

### Cadastro de produtos

Cadastre ou edite o produto desejado. Na aba **lote/série** marque a opção **Controla Série**, clique em **Adicionar** para informar as séries do produto.

> *[Imagem: Tela do cadastro de produtos, aba lote/série]*

Preencha os seguintes campos:

- **Campo "Número de série"** — Informe o número da série do produto.
- **Campo "Data de entrada"** — É a data em que tal produto com aquela determinada série teve entrada no estoque.
- **Campo "Tipo de série"** — Determina se a série é uma **"Série Nova"**, ou seja, não foi utilizada ainda, ou se a série já foi utilizada por um produto pela opção **"Série Usada"**.

**Exemplo de utilização:** uma indústria trabalha com fabricação de mouse de computador. Cada mouse possui um número de série, mas para saber quais séries já foram utilizadas por produtos já fabricados e quais ainda podem ser utilizados para produtos que acabaram de serem feitos e precisam de um número de série disponível, é utilizado este recurso.

### Configurador / Estoque / Outros cadastros / Tipos de detalhamento de série

Neste local serão cadastrados os Tipos de detalhamento de série que são inseridos no **Cadastro de produtos / Lote/Série / Tipo de detalhamento de série**.

Este recurso permite detalhar como uma série deverá ser estruturada ao ser criada, seguindo algumas regras.

- **Campo "Código"** — É o código específico para o registro.
- **Campo "Classificação"** — É a classificação que determina como será a ramificação dos registros.
- **Campo "Descrição"** — É o nome que será apresentado para que possa identificar de forma mais objetiva determinado tipo de detalhamento.
- **Quadro "Formação":**
  - **Numérico** — A série será composta apenas por números.
  - **Alfanumérico** — A série será composta por números e letras.
  - **Nr. Caracteres** — Informa a quantidade de caracteres que a série deve possuir.
  - **Opção "Preenchimento obrigatório"** — Esta opção fará com que seja obrigatório, no momento em que for cadastrar uma série, que siga as regras contidas no quadro "Formação". Caso esteja em desacordo, será emitido um alerta.

> *[Imagem: Tela de cadastro de Tipos de detalhamento de série]*

---

## Outras configurações (opcionais)

Serão apresentadas a seguir configurações extras, as quais costumam dar suporte, mas que não são essenciais para uso de série.

### Configurador / Faturamento / Opções / Dados gerais / Permissões

Opção **"Permitir criação de lotes / séries na inclusão de notas fiscais"** — Na criação de nota fiscal o sistema permitirá a criação de lotes / séries na própria nota, em vez de ter que cadastrar previamente no Cadastro de produto.

> *[Imagem: Opção de permissão para criação de lotes/séries em notas fiscais]*

### Configurador / Faturamento / Opções / Pedido de venda / Permissões

- Opção **"Permitir criação de lotes / séries na inclusão de pedidos"** — Na criação de pedido de venda o sistema permite criar lotes / séries na própria nota, em vez de precisar ter que cadastrar previamente no Cadastro de produto.
- Opção **"Permitir inclusão de produtos que controla série sem informação de lote/séries"** — Esta opção é autoexplicativa.

> *[Imagem: Opções de permissão no Pedido de venda]*

### Configurador / Faturamento / Opções / Pedido de venda / Geral

- Opção **"Preencher automaticamente as informações do lote/série, na criação ou edição do pedido de venda"** — Ao selecionar um produto que controle lote/série e informar a quantidade pedida, o sistema carregará automaticamente o lote/série, desde que o usuário possua permissão no cadastro de usuários.
- Opção **"Preencher automaticamente as informações do lote/série, na liberação do pedido de venda"** — Ao realizar a liberação do pedido de venda, o sistema selecionará automaticamente o lote/série dos produtos.

> *[Imagem: Opções gerais do Pedido de venda]*

### Configurador / Faturamento / Opções / Dados gerais / Impressão

- Opção **"Aglutinar os lotes/séries dos produtos na impressão da nf/oe e na impressão do DANFE"** — Por padrão, esta opção vem desmarcada, mas caso o cliente necessite, o sistema aglutinará os produtos iguais, independente de ter lotes diferentes informados.

> *[Imagem: Opção de impressão de lotes/séries]*

### Configurador / Faturamento / Opções / Dados Gerais / Parâmetros

- Opção **"Não mostrar lotes/séries com quantidade em estoque zerada ou negativa"** — O sistema não exibirá lotes com quantidade zerada ou negativa em todo o sistema.

> *[Imagem: Opção de parâmetros de lotes/séries]*

### Configurador / Faturamento / Opções / Pedido de venda / Liberação

- Opção **"Permitir liberar pedidos (oriundos de contatos de venda) com produtos que controla série mas que estão sem série informada"** — No momento da liberação do pedido, o sistema não questionará os produtos que controlam série, mas que estejam com a informação em branco.

> *[Imagem: Opção de liberação de pedidos com série]*

### Configurador / Faturamento / Opções / NF-e / Complementar

Caso deseje que as informações de série dos produtos sejam levadas para o DANFE, marque a opção **"lote/série"**.

Ao gerar o XML, esta informação será apresentada dentro da tag `<infAdProd>`.

> *[Imagem: Opção NF-e Complementar para lote/série]*

### Requisição de Materiais / Ferramentas / Opções / Geral

- Opção **"Criticar o saldo do lote/série no atendimento de uma requisição."** — No módulo Requisição de Materiais, no momento de atender a requisição, caso o produto informado não tenha aquela série em estoque, o sistema apresentará uma crítica.
- Opção **"Criticar o saldo do lote/série no atendimento da requisição de devolução."** — No módulo Requisição de Materiais, no momento da inserção da série no item da requisição de devolução, caso o produto informado não tenha aquela série em estoque, o sistema apresentará uma crítica.

> *[Imagem: Opções de Requisição de Materiais para lote/série]*

---

## Rotina

### Requisição de Materiais

Para que seja possível informar a série do produto em uma requisição, é necessário ir em **Requisição de Materiais / Ferramentas / Opções**, aba **Módulo requisitante**, e marcar a opção **"Habilitar o campo lote/série na tela de itens, caso o setor requisitado esteja marcado para controlar lote/série"**.

> *[Imagem: Opção de habilitar lote/série na Requisição de Materiais]*

Marcando a opção acima, ao selecionar um produto que controla série, será possível selecionar a série que deseja requisitar no Requisição de Materiais.

> *[Imagem: Seleção de série na Requisição de Materiais]*

Caso não esteja configurado para que a informação de série seja inserida na tela de inclusão de itens, ela poderá ser inserida no módulo requisitado, no momento em que a requisição for atendida. Em todo caso, o atendimento da requisição de um produto que controla série não pode ser feita através de duplo clique, apenas pelo quadro item baixa.

> *[Imagem: Atendimento de requisição com série pelo quadro item baixa]*

### Nota Fiscal de Entrada

No Nota Fiscal de Entrada, quando for incluído um produto que controla série, será necessário informá-la.

> *[Imagem: Inclusão de série na Nota Fiscal de Entrada]*

É possível visualizar as séries já vinculadas, editá-las ou adicionar clicando na aba **Séries**.

> *[Imagem: Aba Séries na Nota Fiscal de Entrada]*

### Inventário

Na tela de inserção de itens, ao informar um produto que controla série, será necessário informar a série e a quantidade contida na série selecionada.

> *[Imagem: Informação de série no Inventário]*

### Pedido de venda

No pedido de venda, no momento de inserir um novo item, caso informe um item que controle série e sua quantidade, será apresentada a aba **"Série"** na qual poderá selecionar a quantidade de cada série.

> *[Imagem: Aba Série no Pedido de venda]*

### Faturamento

Ao cadastrar um documento no Faturamento, é necessário selecionar a série que será movimentada, quando o produto informado estiver configurado para controlar série.

Na tela de inclusão/edição de nota fiscal, no quadro **"itens da nota fiscal"** são apresentadas as informações dos lotes selecionados no pedido de venda.

> *[Imagem: Informações de série no Faturamento]*

### Consulta de Estoque

- **Aba Informações complementares, Aba Movimentação** — Nesta tela serão mostradas as informações de cada movimentação com o número de série.
- **Aba Série** — Nesta aba, terão informações específicas sobre cada série de determinado produto.

> **Observação:** ao final da tela é possível marcar para que o sistema mostre também os lotes com quantidade zerada.

> *[Imagem: Consulta de Estoque com informações de série]*

### BiEstoque

No BiEstoque, área de pesquisa de **Notas Fiscais x Itens da nota** há o campo específico para visualização de lote/série do item.

> *[Imagem: Campo de lote/série no BiEstoque]*
