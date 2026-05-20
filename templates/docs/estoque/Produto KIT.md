# Produto KIT — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [Produto Kit X Produto Composto](#produto-kit-x-produto-composto)
- [Cadastro de Produtos](#cadastro-de-produtos)
- [Movimentação em Estoque](#movimentação-em-estoque)
  - [Entrada](#entrada)
  - [Saída](#saída)
- [Venda de produto Kit](#venda-de-produto-kit)
  - [Bloqueio de exclusão de item padrão](#bloqueio-de-exclusão-de-item-padrão)

---

## Introdução

Suponhamos que em meu estoque tenho os produtos monitor, mouse, teclado e gabinete separados, os quais vendo separadamente na minha loja de informática.

No entanto, há alguns clientes que querem comprar um computador montado, ou seja, com seus componentes incluídos. Dessa maneira, em vez de vender cada produto separadamente ao cliente, vou utilizar os componentes (monitor, mouse, teclado e gabinete) para montar um computador. Neste caso, o computador é o **Produto Kit**.

Dessa forma, todos produtos acabados que estão presentes em estoque, podem ser vendidos individualmente ou em conjunto, para formar um produto novo.

### Produto Kit X Produto Composto

A principal diferença de produto kit para produto composto é que o **produto kit** é montado a partir de produtos acabados em estoque; já no **produto composto** é necessário realizar um processo de fabricação utilizando produtos como matérias-primas para obter o produto final.

---

## Cadastro de Produtos

O primeiro passo é cadastrar todos os itens de forma individual, como no exemplo dado na introdução, para controlar a venda do computador.

Portanto, é necessário cadastrar o próprio produto **computador** e todos os componentes do kit (monitor, mouse, teclado e gabinete) separadamente.

> *[Imagem: Cadastro dos produtos individuais do kit]*

Em seguida, edite o cadastro do produto que será montado, nesse caso, o computador. Vá até a aba **Produtos Relacionados**, marque as opções **Possui Composição** e **A composição será um kit…**

A área Composição será habilitada, clique no botão **Adicionar** para incluir os itens do kit.

> *[Imagem: Aba Produtos Relacionados com opções de composição e kit]*

Na tela de inclusão dos itens informamos individualmente:

- **Produto:** Podendo usar a lupa para localizar o item.
- **Quantidade:** A quantidade utilizada para montar o kit, de acordo com sua unidade de medida. Por exemplo, vou utilizar uma unidade de gabinete para montar o computador, assim, informo o número 01 em quantidade.
- **Rateio (%):** Informo o percentual desse produto no kit montado. Suponhamos que esse item represente 15% do total do kit.
- **Produto Fixo:** Possui a finalidade de informar quais produtos obrigatoriamente o kit deve possuir. Dessa forma, não é possível remover este item no momento da venda.
- **Produto Padrão:** Faz com que este componente seja demonstrado no momento da venda vinculado ao kit, sendo este um produto usado para a montagem do kit. Mas, se a opção "Produto fixo" estiver desmarcada e a opção "Produto Padrão" estiver selecionada, o sistema permite que, no momento da venda, este item seja retirado e não contabilizado na venda. Podemos dar o exemplo de uma caixa de som: o cliente pode optar por levar o computador com ou sem a caixa de som.

> **Observação:** Ao incluir todos os itens da composição, o percentual de rateio não pode ser maior que 100%. Após editar o produto, clique em **Gravar**.

> *[Imagem: Tela de inclusão dos itens do kit com campos preenchidos]*

A opção **"A composição será um kit e a quantidade opcionais será de"** é um recurso utilizado para limitar a venda de itens opcionais a serem comercializados para o cliente junto ao computador. Suponhamos que haja uma caixa de som, microfone e um apoio de punho, todos sendo itens opcionais. Ao informar no campo "Quantidade de produtos opcionais" o número "2", ao tentar incluir 3 produtos opcionais no momento da venda, o sistema não permite e emite a mensagem dizendo que a quantidade limite de produtos opcionais já foi atingida.

> **Nota:** As demais configurações de como atribuir um preço ao produto, tributação, NCM e setores seguem o mesmo padrão de um produto comum.

---

## Movimentação em Estoque

### Entrada

É importante informar que, ao fornecer a entrada do produto kit na empresa, o sistema alimenta cada item que o compõe. Se, por exemplo, a empresa comprar 5 computadores, será feita a entrada de 5 mouses, 5 teclados, 5 monitores e 5 gabinetes. O produto "Computador" (produto kit) **não possui seu saldo alimentado no estoque**.

> *[Imagem: Consulta de Estoque mostrando movimentação dos itens do kit]*

Na base utilizada para fazer este manual foi lançada uma nota de entrada com os seguintes dados:

1. **Operação:** Com o Tipo de movimento marcado como **Entrada**, que **atualiza estoque**, **não atualiza financeiro** (para não gerar títulos a pagar já que a minha própria empresa está montando o kit), sem a marcação de impostos (já que a montagem é interna).
   - Caso o produto venha do fornecedor já montado, deve-se alterar a operação para atualizar o financeiro, gerando os títulos a pagar, e gerar os impostos devidos.
2. Na aba **Produtos**, inseri a entrada de 10 produtos (COMPUTADOR) com CST de ICMS sem tributação.
3. Após preencher os demais dados, liberei o documento e executei o **Liberador de estoque**.

### Saída

No momento da venda, o sistema **NÃO** fornecerá a saída do produto COMPUTADOR (Produto Kit) do estoque, mas, sim, de 1 mouse, 1 teclado, 1 monitor e 1 gabinete ao realizar o processo de venda do computador.

> *[Imagem: Consulta de Estoque mostrando saída dos itens do kit]*

Isso quer dizer que o produto kit será utilizado nos documentos de entrada e saída, mas a consulta de estoque deve ser realizada pelos itens que compõem o kit.

---

## Venda de produto Kit

Existem duas formas de se realizar a venda de um produto Kit.

1. **O Item da NF-e é o próprio produto Kit** — Neste cenário, ao informar o produto Kit no Pedido de vendas ou no Faturamento, é ele quem ficará como item da nota. Contudo, a movimentação do estoque será feita pelos produtos de composição do Kit, conforme vimos no tópico anterior.

2. **Os itens da NF-e são os produtos de composição do Kit** — Neste cenário, ao informar o produto Kit no Pedido de vendas ou no faturamento, o sistema automaticamente inclui os itens de composição, em vez de inserir o produto Kit.

> *[Imagem: Pedido de vendas com itens de composição do kit desmembrados]*

Nesse segundo cenário, tanto no pedido de vendas quanto no faturamento, são incluídas na Grid as colunas **"Código do Kit"** e **"Nome do Kit"**, que correspondem ao código e nome do Produto Kit. Essa informação é muito útil, em caso de haver mais de um Kit no mesmo pedido.

As colunas "Código do Kit" e "Nome do Kit" também são exibidas nos sistemas: **FatPrePedido.exe**, **CRM** e **CRM Vendas**, facilitando a identificação do item.

> **Observação:** Nos exemplos acima, mostramos a tela do Pedido de vendas, mas o resultado seria o mesmo se o lançamento estivesse sendo feito direto no módulo Faturamento, no caso de uma nota avulsa.

Para conseguir trabalhar da segunda forma, antes acesse o **Configurador Bimer » Faturamento » Opções » Venda » Completar**, e marque a opção **"Trabalhar com inclusão otimizada de produtos Kit"**.

A configuração **"Exibir confirmação antes da inclusão otimizada de produtos Kit"** é opcional.

### Bloqueio de exclusão de item padrão

No cadastro de um produto Kit, como visto no início deste manual, é possível definir alguns produtos que serão fixos ou padrão. É possível bloquear que um usuário retire esse produto no pedido de venda, para que não seja feita uma "venda errada". Imagine que o produto Kit é um computador e o vendedor retira do Kit o processador e as memórias desse computador.

Esse bloqueio é feito por usuário ou perfil de usuário. Para isso, acesse o **Cadastro de usuários » Perfil** (ou direto no cadastro do usuário).

1. No produto **Pedido de venda**, em controle de acesso aos módulos do sistema, acesse **Assinatura eletrônica**, e desabilite a opção **"Excluir insumos desmembrados do Kit"**.
2. No produto **Faturamento**, em controle de acesso aos módulos do sistema, acesse **Assinatura eletrônica » Nota Fiscal**, e desabilite a opção **"Excluir insumos desmembrados do Kit"**.
