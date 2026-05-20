# Produto Origem — Bimer Estoque

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Cadastro de Produtos](#cadastro-de-produtos)
- [Consulta de Estoque](#consulta-de-estoque)
  - [Exemplo de compra com produto origem](#exemplo-de-compra-com-produto-origem)
  - [Exemplo de venda com produto origem](#exemplo-de-venda-com-produto-origem)

---

## Introdução

Algumas empresas têm a necessidade de vender um produto por uma unidade de controle diferente da unidade da compra. São exemplos: as empresas de tecidos que compram em grandes quantidades por KG e vendem em metro, ou empresas do ramo de varejo que compram em caixa e vendem em unidade.

Para isso, eles utilizam a rotina de **Produto Origem** na qual um mesmo produto possui uma unidade de medida para compra e outra unidade para venda. Esta rotina também é conhecida como **Produto Pai** e **Produto Filho**, em que o produto pai é o produto definido para compra e o produto filho é o definido para venda.

É possível então, no sistema Bimer, configurar quanto do produto em caixa corresponderá ao produto em unidade. Desta forma, o sistema atualizará as quantidades do produto em cada movimentação, de compra ou de venda, de acordo com o **Fator de Conversão** definido.

> **Nota:** Utilizamos como exemplo neste manual as unidades de medida "caixa" e "unidade". Contudo, a configuração é válida com as outras unidades de medida disponíveis no Bimer.

---

## Configurações

### Cadastro de Produtos

No Cadastro de Produto é necessário cadastrar dois produtos: um será utilizado para movimentações de **compra/entrada**, e outro será utilizado para movimentações de **venda/saída**. Eles estarão vinculados e será definido um fator de conversão entre eles que fará com que os dois produtos sejam movimentados, tanto nas entradas/compras, utilizando o produto definido para compra (pai) quanto nas saídas/vendas utilizando o produto definido para venda (filho).

**Passo 1:** Acesse o módulo **Cadastro de Produto**, clique em "Novo Produto", realize o cadastro de um produto, na aba **Identificação** determine a unidade de medida que é utilizada para a **compra** deste produto, insira as demais configurações e salve o cadastro.

> *[Imagem: Cadastro do produto de compra (produto pai) com unidade em caixa]*

**Passo 2:** Após cadastrado o produto de compra, é necessário cadastrar um produto que será usado nas **vendas**, informe a unidade de medida utilizada para a venda.

> *[Imagem: Cadastro do produto de venda (produto filho) com unidade em unidade]*

**Passo 3:** Para que o sistema entenda que se trata de um mesmo produto, torna-se necessário realizar o vínculo entre eles. Para tal vínculo, deverá ser definido no produto configurado para venda (produto filho) os campos **Produto Origem** e **Fator Conversão**, existentes na aba **Produtos Relacionados** do módulo Cadastro de Produto.

- **Produto Origem:** Será informado o produto de origem, ou seja, o cadastrado para a compra (produto pai).
- **Fator de conversão:** Define o fator de conversão das unidades entre os produtos. Ex: 1 caixa do produto Compra corresponde a 10 unidades do produto Venda. Desta forma, quando é feita a compra do produto pai, o produto filho será atualizado multiplicando a quantidade comprada pelo valor definido no Fator de conversão.

> *[Imagem: Aba Produtos Relacionados com campos Produto Origem e Fator de Conversão preenchidos]*

Para criar o vínculo entre os produtos, abra o produto definido para venda, inclua o produto definido para compra no campo **"Produto Origem"** e defina o **"Fator de Conversão"** entre eles, em seguida salve o cadastro.

---

## Consulta de Estoque

No módulo **Consulta de Estoque** é possível visualizar as quantidades dos produtos disponíveis em estoque. Foram simuladas duas situações: na primeira foi registrado no módulo Nota Fiscal de Entrada uma compra para o produto origem, e em outra foi registrado no módulo Faturamento uma venda com o produto cadastrado para venda. Abaixo é possível visualizar como o sistema se comporta ao atualizar as quantidades dos produtos movimentados no estoque.

### Exemplo de compra com produto origem

As compras deverão ser registradas utilizando o produto que foi definido como **Produto Origem** (produto pai). Foi registrada uma compra com o Produto Compra de 10 quantidades, o fator de conversão entre o produto origem e o produto utilizado para venda foi definido como 10. Perceba então, que o sistema registrou a entrada de **10 caixas** do Produto Compra e **100 unidades** para o Produto Venda.

Para esta visualização, acesse o **Consulta de Estoque > selecione a empresa > insira o produto > aba Informações complementares > aba Movimentação**.

> *[Imagem: Movimentação do Produto Compra mostrando Qt Item = 10 caixas]*

> *[Imagem: Movimentação do Produto Venda mostrando Qt Item = 100 unidades]*

Ou seja, ao registrar a compra do produto o sistema fará a conversão indicando quantas unidades estão disponíveis em estoque para venda ou saída do produto na unidade de medida diferente da que fora comprada.

### Exemplo de venda com produto origem

Ao realizar vendas ou saídas, deverá atualizar o produto configurado para venda (produto filho) e, de acordo com o fator de conversão definido, também será movimentado o produto origem (produto pai).

Foi feita uma venda de 10 unidades do produto venda. Ao liberar o documento foram registrados no estoque a saída de **10 unidades** do produto venda e **1 unidade** do produto compra que foi definido na unidade de medida em caixa.

> *[Imagem: Movimentação mostrando saída do produto venda e produto compra]*

Desta forma, certifica-se que qualquer movimentação feita com produto pai ou produto filho o sistema atualizará o estoque dos dois cadastros de acordo com o fator de conversão definido.
