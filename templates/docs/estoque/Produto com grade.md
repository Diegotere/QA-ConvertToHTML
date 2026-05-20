# Produto com Grade — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Cadastro de grade](#cadastro-de-grade)
  - [Cadastro de Produtos](#cadastro-de-produtos)
- [Rotinas utilizando Produtos com Grade](#rotinas-utilizando-produtos-com-grade)
- [Configurador Bimer](#configurador-bimer)

---

## Introdução

Através do recurso de **grade de produtos**, é possível trabalhar com variações de um mesmo produto, que alteram em fatores como: cor, tamanho, sabor, dimensão, entre outros. Um exemplo muito comum na utilização de grades de produtos é no segmento de moda.

Veja o exemplo abaixo de uma camisa, que tem variações de cores e tamanhos:

|         | Branco | Azul | Verde | Vermelho |
|---------|--------|------|-------|----------|
| **P**   | X      | X    |       | X        |
| **M**   | X      | X    | X     |          |
| **G**   | X      |      | X     | X        |
| **GG**  | X      | X    |       |          |

Como observamos na tabela, existem variações horizontais de cores e variações verticais de tamanhos. A célula que possui o **X** indica que existe a variação da cor e tamanho. Já as células que não estão sinalizadas com o X, significa que para determinada camisa não existe a variação.

Com base nisso concluímos o seguinte:

- **Variações da camisa disponíveis:** [P, Branco], [P, Azul], [P, Vermelho], [M, Branco], [M, Azul], [M, Verde], [G, Branco], [G, Verde], [G, Vermelho], [GG, Branco], [GG, Azul]
- **Variações da camisa não disponíveis:** [P, Verde], [M, Vermelho], [G, Azul], [GG, Verde], [GG, Vermelho]

No Bimer cada produto da grade possui **controle individual** como:

- Código
- Valor
- Quantidade em estoque

> **Exemplo:** A camisa código 000003 com grade P, Azul custa R$ 20,00 e tem 30 quantidades em estoque. Já a camisa código 000004 com a grade P, Vermelha custa R$ 24,99 e possui 17 em estoque.

Embora o exemplo mostrado seja de moda, a grade se aplica a diversos tipos de produtos como: Pizza, Capacete, Mangueira e Bebidas.

---

## Configurações

### Cadastro de grade

Acesse o **Configurador / Estoque / Produto / Grade** e cadastre as variações da grade que serão vinculadas aos produtos.

No campo **Descrição** informe o nome dessa variação como por exemplo: Cores, Tamanhos, Medidas, dentre outros.

> *[Imagem: Tela de cadastro de grade no Configurador Bimer]*

No quadro **Detalhes** adicione ou edite a variação da sua grade, onde há dois campos:

- **Ordem:** De apresentação dessa variação no cadastro de produtos. Isso quer dizer que a ordem 1 aparece no topo, após a 2, 3 e assim por diante.
- **Sigla:** Nome da variação.
  - Alguns exemplos: Verde, Azul, Amarelo, Roxo, Branco, ou ainda VD, VM, AM, BR, e no caso de tamanhos poderia ser P, M, G, GG.

---

### Cadastro de Produtos

Para cadastrar produtos com grade clique em **Novo produto grade** na tela principal do módulo:

> *[Imagem: Botão "Novo produto grade" na tela principal do Cadastro de Produtos]*

Vamos cadastrar o produto **CAMISA MALHA ALGODÃO** com suas cores e tamanhos. Faça o seguinte passo a passo:

1. Clique em **Adicionar item**. Na tela seguinte informe a variação para o grupo **Vertical** e para o grupo **Horizontal**. Caso uma cor ou tamanho não faça parte da grade deste produto, é necessário desmarcar no checkbox da primeira coluna.

> *[Imagem: Tela de seleção de variações horizontal e vertical com checkboxes]*

2. Clique em cima de cada variação que fará parte do cadastro do produto e veja que é criado um **código distinto** para cada produto da grade, aplicando o controle individual.

> *[Imagem: Tela mostrando códigos distintos gerados para cada variação da grade]*

3. Ao tentar gravar os produtos, ocorrerá a mensagem informando a falta do preenchimento dos campos:

> *[Imagem: Mensagem de erro informando campos obrigatórios não preenchidos]*

   1. Isso ocorre pois é necessário preencher todos os dados num produto da grade e com base nele replicar os dados para os demais produtos da grade. Para isso:
      1. Clique em cima de um dos produtos e preencha todos os **dados obrigatórios**: **Nome do Produto para Grade**, **Unidade**, **tipo**, **fornecedor**, **empresa**, **classificação fiscal** e **cálculo de ICMS** (em alguns casos).
      2. Após, volte na aba **Grade**, deixe a variação que você ajustou selecionada e clique em **Sincronizar informações**. Assim os demais produtos recebem todas as informações do item que você selecionou, mas podem ser ajustados individualmente.

> *[Imagem: Botão "Sincronizar informações" na aba Grade]*

4. Após preencher os demais dados do produto clique em **Gravar**. Na tela principal visualizamos o produto principal da grade e suas variações.

> *[Imagem: Tela principal mostrando produto principal da grade e suas variações]*

> **Dica:** Ao clicar em **Novo produto grade** adicione um nome **básico** que não tenha a variação da grade, como exemplo: CAMISA POLO. Desse modo, ao selecionar a variação de cor e tamanho esses dados são adicionados em cada produto, exemplos: CAMISA POLO BRANCA P, CAMISA POLO AZUL P, CAMISA POLO VERDE M.

---

## Rotinas utilizando Produtos com Grade

As rotinas de compras e vendas são feitas **separadamente**. Isso quer dizer que se o usuário realizar a entrada ou saída de 100 casacos cor branco tamanho P, apenas ele será movimentado em estoque, os demais produtos da grade não serão influenciados. Isso quer dizer que embora haja um vínculo entre os produtos da grade, cada um possui **movimentação individual** em estoque.

No módulo **Consulta de Estoque**, por exemplo, cada variação será visualizada como um produto distinto.

> *[Imagem: Tela de Consulta de Estoque mostrando variações como produtos distintos]*

---

## Configurador Bimer

Ao entrar no menu **Estoque / Opções / Produto / Grade** do configurador, você tem acesso a opções que influenciam no cadastro e edição dos produtos. Vamos ver a função de cada uma:

- **Quantidade máxima de caracteres para descrição principal:** Limite o tamanho de caracteres para a descrição principal da grade.
- **Quantidade máxima de caracteres para grade horizontal:** Informe a quantidade máxima de caracteres da grade horizontal para compor o nome do produto.
- **Quantidade máxima de caracteres para grade vertical:** Preencha a quantidade máxima de caracteres da grade vertical para compor o nome do produto.

> **Nota:** As três opções acima trabalham em conjunto para compor o nome de cada produto da grade. O Bimer não permite que o nome seja maior que 100 caracteres, assim a soma dos três campos não pode ultrapassar esse valor.

- **Composição da descrição de produtos que fazem parte de uma grade:** Escolha se o nome do produto será composto por:
  - **Descrição Principal + Horizontal + Vertical**
  - ou **Descrição Principal + Vertical + Horizontal**

- **Alterar descrição dos produtos que utilizam grade, caso a descrição do cadastro do detalhamento de uma grade seja alterada:** Caso esta opção seja marcada e no cadastro de detalhamento da grade a descrição seja alterada, será apresentada mensagem de confirmação, informando que os produtos que utilizam este detalhamento de grade e que possuíam a descrição anterior, terão seus nomes ajustados.

- **Sincronizar as informações dos produtos da grade:** Com ela marcada, sempre que um item da grade for alterado, todos os outros serão.

> **Dica:** Como o controle dos itens da grade é individual, a opção vem **desmarcada** no sistema e recomendamos aos usuários utilizarem o botão **Sincronizar informações**, caso queiram replicar os dados ajustados para todos os produtos.

> **Nota:** Ao marcar a opção, o botão **Sincronizar informações** não aparece no cadastro do produto com grade, uma vez que os dados **sempre** serão sincronizados.
