# Compra com Embalagem — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [O que ajustar?](#o-que-ajustar)
  - [Configurador](#configurador)
  - [Cadastro de Produtos](#cadastro-de-produtos)
- [Rotinas](#rotinas)
  - [Pedido de Compras](#pedido-de-compras)
  - [Nota de Entrada - Manual](#nota-de-entrada---manual)
  - [Nota de Entrada - Importação de XML](#nota-de-entrada---importação-de-xml)
- [Para Finalizar](#para-finalizar)

---

## Introdução

Um grande desafio para muitas empresas é conseguir manter um controle de estoque bem organizado, e isso ocorre por fatores como: o grande volume de entradas e saídas; perdas; e até mesmo pela diferença do controle de armazenamento do fornecedor e da empresa.

**Exemplo de situação:**

- **Produto da compra:** Iogurte (Unidade)
- **O Fornecedor:** Embala este produto em caixas, com 6 unidades cada.
- **Empresa de Varejo:** Precisa dar entrada no estoque, porém ela não controla este produto em caixas como o fornecedor, mas controla em unidades.

Imagine que a empresa compre 360 unidades de iogurte e o fornecedor mandou 58 caixas. Será que foi enviada a quantidade pedida? Para saber, o funcionário que está fazendo a entrada precisaria pegar uma calculadora e fazer as contas de modo manual.

Com o sistema Bimer, temos o recurso de fazer a **compra por embalagem do fornecedor**, em que há uma inteligência de sempre comparar a quantidade enviada na embalagem do fornecedor com a quantidade que foi solicitada, convertendo para o controle de estoque da empresa. No exemplo citado, o sistema facilmente mostraria que o fornecedor enviou 348 unidades do iogurte (58 caixas) e não 360 unidades (60 caixas) conforme o pedido.

---

## O que ajustar?

### Configurador

Acesse o menu **Estoque / Opções / Movimento / Opções Gerais** e marque **"Trabalhar com informação da quantidade por embalagem"**.

Logo abaixo há 2 configurações opcionais para esta rotina:

#### 1. Não atualizar automaticamente a quantidade de embalagem do produto ao alterar o campo "qt. por embalagem" no item da nota (Nota Fiscal de Entrada)

- **1.1 Com a opção marcada:** Editando a quantidade de embalagem do item no módulo Nota fiscal de entrada, a quantidade de embalagem que fica no cadastro de produto, nas informações do fornecedor **não será modificada**.
- **1.2 Com a opção desmarcada:** Editando a quantidade de embalagem do item no módulo Nota fiscal de entrada, a quantidade de embalagem que fica no cadastro de produto, nas informações do fornecedor **será atualizada**.
- **1.3 Entenda melhor:** Este recurso é bem interessante, pois o fornecedor pode mudar a quantidade na embalagem do produto. *Exemplo:* O fornecedor mandava caixas com 6 iogurtes cada, porém, montou uma embalagem mais econômica e barata que permite mandar 8 iogurtes em cada embalagem. Essa mudança é percebida quando o veículo do fornecedor chega à empresa com as mercadorias. Por isso a configuração fica amarrada no módulo **Nota fiscal de entrada** (momento de registrar a entrada da nota). Desse modo, o cadastro de produtos pode ser atualizado automaticamente.

#### 2. Bloquear a movimentação quando a quantidade pedida não for múltipla da quantidade por embalagem

Com esta opção marcada, somente poderá ser cadastrado um Pedido de Compra ou Nota Fiscal de Entrada caso a quantidade seja múltipla da Quantidade padrão na embalagem.

**Exemplo:**
- Produto Iogurte possui Qt. Padrão na embalagem = 6
- Neste caso o pedido de compra poderá ser de 6, 12, 18, 24… quantidades.
- Caso tente comprar por exemplo 7, o sistema bloqueará o cadastro do item no pedido de compra.

#### Importação de XML

Se utilizar a importação de XML, acesse o menu **Estoque / Opções / Nota fiscal de entrada / Importação NF-e XML** e marque **"Sugerir quantidade de embalagem na importação do XML"**. Esta opção ativará a rotina de entrada por embalagem mesmo que a nota seja importada e não lançada manualmente.

### Cadastro de Produtos

No cadastro do produto, na aba **Complementar / Fornecedores**, faça o vínculo do fornecedor e defina:

- **A quantidade padrão na embalagem:** preencha a quantidade que vem em cada embalagem do fornecedor (no exemplo, a quantidade é igual a 6).
- **Unidade:** De compra com o fornecedor (no exemplo, caixa). Para o sistema realizar a conversão, é utilizada a **Unidade** informada na aba **Identificação** do item, que representa a forma como se controla o produto no estoque da empresa.

---

## Rotinas

Agora que já configurou seu sistema, veja como ficam as rotinas no processo de compras.

### Pedido de Compras

Ao lançar o novo pedido, coloque o fornecedor vinculado ao item. Após, inclua o próprio produto na aba **Itens**. Há duas formas de fazer o lançamento:

#### Opção 1: Unidade

Marque esta opção e preencha o campo **quantidade pedida**, com o total de unidades compradas do produto. A **Quantidade por embalagem** é recuperada do cadastro de fornecedores para ser feita a conversão com a unidade de compra do fornecedor.

> **Dúvida:** E se eu informar uma quantidade que não completa a quantidade certa por embalagem, o sistema deixa?
>
> Isto depende da configuração vista anteriormente. Se a opção **"Bloquear a movimentação quando a quantidade pedida não for múltipla da quantidade por embalagem"** estiver marcada, o sistema jogará para o próximo valor acima múltiplo da embalagem.

#### Opção 2: Embalagem

O lançamento dessa vez não será pela unidade, mas pela quantidade total de embalagens compradas com o fornecedor. Então se foram compradas 10 embalagens de iogurte, o sistema já calcula a quantidade pedida em unidade. Assim é só preencher o campo **Qt. Embalagens**.

> **Para clarear as coisas:** O modo do lançamento será preferencial do usuário do sistema, são duas formas que levam para o mesmo caminho. No exemplo da compra de 60 unidades do iogurte poderia lançar de duas formas:
> 1. Marcar **Unidade** e inserir 60 no campo **Qt. Pedida**.
> 2. Marcar **Embalagem** e inserir 10 no campo **Qt embalagens**.

Daqui para frente é só finalizar o lançamento e liberação do **Pedido de compras**.

### Nota de Entrada - Manual

Ao receber a mercadoria do fornecedor, abra o módulo **Nota Fiscal de entrada** e lance uma nova nota. Após inserir o fornecedor, selecione o pedido de compras e informe a **Qt. Movimento** com a quantidade que veio no veículo do fornecedor. Isso quer dizer que é possível fazer atendimentos parciais ou com corte.

O sistema já calcula automaticamente o número de embalagens do fornecedor, de acordo com a conversão configurada. Isto facilita o processo de conferência da mercadoria, sempre comparando a unidade da entrada na empresa com a unidade do fornecedor.

> **Se liga!** Ao lançar uma nota atendendo um pedido de compras, não é permitido ajustar a quantidade na tela de itens, apenas na tela de seleção de pedido de compras (botão **Pedido de compras** do lado esquerdo inferior da nota). Ao lançar a nota avulsa, sem vínculo com pedido, os campos permitem alteração e validam a configuração de trabalhar apenas com quantidade múltipla por embalagem.

### Nota de Entrada - Importação de XML

Com a opção de **sugerir a quantidade de embalagem na importação do XML** marcada (conforme visto nas Configurações), conseguimos importar a nota de entrada respeitando a rotina.

1. Acesse o **Nota fiscal de entrada** e faça a importação pelos botões **Importar XML avulso** ou **Importar XML pedido de compra** (caso tenha algum pedido para atender).
2. Durante a importação, será aberta a tela **"Verificação de produto x embalagem"**. O sistema resgata a quantidade padrão do fornecedor informada no vínculo do produto.
3. É realizado o cálculo da quantidade do XML multiplicada pela quantidade na embalagem.
4. Na tela do lançamento da nota, na aba **Produtos**, veja a quantidade convertida de acordo com a unidade de armazenamento.

> **Dicas importantes:**
> - O fornecedor precisa estar vinculado no item e configurado com a quantidade por embalagem. Se o fornecedor for novo, a configuração não estará montada ainda.
> - No momento da importação, você deve **cadastrar** ou **vincular** o produto importado no sistema. Se for vincular, certifique-se que o item vinculado está configurado de modo correto para a rotina, dentro do cadastro de produtos do Bimer.

---

## Para Finalizar

**Como fica o produto origem nessa história?**

Você pode trabalhar com ele normalmente. Veja o exemplo abaixo:

- O **Fornecedor** envia o iogurte na **embalagem** com **6 unidades**.
- Na hora que dá **entrada** no estoque, a empresa faz em **Unidades**.
- Na hora da **venda**, a empresa pode realizar em **unidade**, ou numa embalagem que ela mesmo monta com **12 unidades no pacote**.
  - No Bimer, vinculei o produto com caixa e o **Fator de conversão 12**, no produto que compro em Unidade.

### Consulta de Estoque

No módulo **Consulta de estoque**, veja como fica o controle da empresa:

- **Iogurte Unidade:** É demonstrada a quantidade em Unidade, onde o sistema já faz a conversão da quantidade comprada em caixa. A rotina de compra com embalagem do fornecedor é usada apenas como um **facilitador** no momento de dar entrada do documento no sistema — todo o controle de estoque é feito na unidade de armazenamento interna da empresa.

- **Iogurte Caixa 12 Unidades:** O sistema demonstra o saldo deste produto fazendo a conversão para a quantidade da venda. No exemplo, 48 unidades de iogurtes representam 4 caixas de 12 unidades cada uma.

> Para saber mais sobre Produto origem ou sobre outras rotinas de estoque, acesse as apostilas no portal da UCA.
