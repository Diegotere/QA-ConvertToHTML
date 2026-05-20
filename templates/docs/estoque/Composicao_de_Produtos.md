# Composição de Produtos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Cadastro de Produtos](#cadastro-de-produtos)
- [Movimentação em Estoque](#movimentação-em-estoque)
  - [Entrada](#entrada)
  - [Saída](#saída)

---

## Introdução

O produto composto passará por um processo de fabricação no sistema Bimer, ou seja, ao fornecer a entrada da mercadoria em estoque será necessário fazer a retirada dos produtos que serão utilizados para a produção, e futuramente será feita a entrada dessa mercadoria já produzida. Podemos realizar esse processo de acordo com vários tipos de produtos como calças e seus insumos, informando que, para produzir a calça, é utilizada certa quantidade de tecido, fecho, linha e botão, por exemplo.

Assim conseguiremos controlar tanto o estoque dos itens utilizados para fabricar o produto composto, como do produto composto em si ao realizar as movimentações de entradas e saídas no sistema.

---

## Cadastro de Produtos

O primeiro passo é cadastrar todos os itens de forma individual. Para controlar a produção da calça, cadastre o próprio produto "Calça masculina" e todos os seus insumos (tecido, linha, botão e fecho).

Em seguida, edite o cadastro do produto que será fabricado (nesse caso, a calça):

1. Vá até a aba **"Produtos Relacionados"**.
2. Marque a opção **"Possui Composição"**. A área "Composição" será habilitada.
3. Clique no botão **"Adicionar"** para incluir os insumos que serão usados para fazer o produto.

Na tela de inclusão dos itens, informe individualmente:

- **Produto:** Podendo usar a lupa para localizar o item.
- **Quantidade:** A quantidade utilizada para fabricar o produto, de acordo com sua unidade de medida. Por exemplo, se utilizar 1 metro de tecido para fazer a calça, informe o número 01 em Quantidade.
- **Rateio (%):** Informe o percentual desse produto que compõe o custo da mercadoria produzida. Suponhamos que esse item represente 15% do valor do produto final.

> **Importante:** Ao incluir todos os itens da composição, o percentual de rateio não pode ser maior que 100%. Após editar o produto, clique em **Gravar**.

As demais configurações como atribuir um preço ao produto, tributação, NCM e setores seguem o mesmo padrão de um produto comum.

---

## Movimentação em Estoque

### Entrada

É importante informar que ao fornecer a entrada do produto que foi fabricado em estoque, o sistema automaticamente fornecerá a **saída** de cada item utilizado na composição.

**Exemplo:** se for realizada a produção e, posteriormente, a entrada de 10 calças prontas, o sistema fará a saída dos itens utilizados no processo de produção (tecido, linha, fecho e botão).

#### Configuração necessária

Para realizar esse processo, é necessário configurar o sistema. No **Configurador / Estoque / Nota Fiscal de entrada / Geral**, marque a opção **"Utilizar recurso de saída de produtos da composição quando for dado entrada em produtos compostos"**.

#### Configuração da operação de entrada

Configure a operação que será utilizada com os seguintes dados:

- **Tipo de movimento** marcado como **entrada**
- **Atualiza estoque**
- **Não atualiza financeiro** (para não gerar títulos a pagar já que a própria empresa está fabricando o produto)
- Sem a marcação de impostos (já que a produção é interna)
- Em **Documento / Geral** deve-se informar uma operação de **Saída** no campo **"Operação de Saída para os produtos da composição"** — isso é necessário para o sistema registrar corretamente os produtos que serão retirados do estoque para produzir o item composto.

#### Configuração da operação de saída

No cadastro da **operação de saída** vinculada à operação de entrada, marque:

- Saída
- Atualiza estoque
- Não atualiza financeiro
- Sem a marcação de impostos (já que a produção é interna)

#### Lançamento da nota

No módulo de **Nota Fiscal de Entrada**, lance uma nota inserindo os itens do produto composto cadastrado anteriormente com CST de ICMS sem tributação.

Na aba **Produtos da composição**, informe o setor de saída dos insumos. Após preencher os demais dados, libere o documento e execute o **Liberador de Estoque**.

Note que ao acessar a **linha do tempo**, haverá um Descendente criado como **Nota Fiscal de Entrada complementar**. Dando dois cliques nele, visualizamos a quantidade de cada produto que saiu do estoque para dar entrada no produto composto.

> **Observação:** É importante ressaltar que não será criado nenhum documento de saída no Faturamento. O processo de saída é visualizado apenas pela linha do tempo para registrar os materiais que saíram do estoque para fabricar o item.

Realizada a entrada do item, podemos consultar a quantidade em estoque dos itens pelo módulo **Consulta de Estoque**, em **Informações complementares > Movimentação**.

### Saída

Ao realizar a comercialização do produto composto, será dada a saída do estoque, mas os insumos da composição **não terão quantidade alterada**. Podemos acessar o módulo **Consulta de Estoque** em **Informações complementares / Movimentação** para ver o saldo do produto.
