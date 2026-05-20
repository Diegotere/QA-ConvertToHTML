# Cotação — Bimer Estoque

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [O que é uma cotação?](#o-que-é-uma-cotação)
- [Fluxo da Rotina](#fluxo-da-rotina)
- [Rotina de Cotação](#rotina-de-cotação)
  - [Nova Cotação](#nova-cotação)
  - [Cotação otimizada](#cotação-otimizada)
  - [Liberar cotação](#liberar-cotação)
  - [Tomada de preços](#tomada-de-preços)
  - [Decisão de compra](#decisão-de-compra)

---

## Introdução

### O que é uma cotação?

Suponha que você queira comprar um novo tênis e tem várias empresas que fabricam calçados, cada uma com sua respectiva marca. Mas para você conseguir comprar o tênis, o que leva em conta? Qualidade do produto (melhor conforto, durabilidade, tecido)? Melhor preço? Melhor condição e prazos de pagamento?

Tudo isso é importante para comprar um produto. Após fazer uma pesquisa nas lojas, você vai levar esses fatores em conta e, de acordo com a sua situação, pode ser que o mais importante seja o preço, a qualidade do produto, ou até mesmo a marca para decidir em qual loja e qual modelo vai comprar. Quando fazemos essa pesquisa em nosso cotidiano, estamos realizando uma cotação, ou seja, contatando cada loja/fornecedor para avaliar qual oferece o que estou procurando.

Em empresas que controlam estoque de produtos, o processo de cotação ocorre com muita frequência, pois elas precisam decidir com qual fornecedor comprar, levando em conta fatores como os apresentados no exemplo acima:

- Qualidade do produto;
- Preço do produto;
- Condição e prazo para pagamento;
- Prazo para entrega;
- Qual possui o imposto mais barato.

Muitas vezes a pessoa responsável pelo setor de compras precisa decidir levando em conta o momento da empresa, e nem sempre ela vai usar o mesmo critério para escolher o fornecedor com o qual vai comprar. Como assim? Digamos que a empresa ELETRÔNICOS LTDA. realiza a venda do produto "computador master 3", mas não tem esse produto em estoque no momento. Assim, o cliente João da Silva pede 20 computadores e precisa deles para daqui a 10 dias. Para não perder a venda a empresa ELETRÔNICOS LTDA. vai contatar os seus fornecedores e ela encontra duas opções:

- **Fornecedor A:** venderá os produtos com o valor unitário de R$ 2.000,00 com uma data de entrega daqui a 15 dias.
- **Fornecedor B:** venderá os produtos com o valor unitário de R$ 2.100,00 com uma data de entrega daqui a 7 dias.

Nesse caso, embora o Fornecedor A ofereça o melhor preço, ele não conseguirá entregar no prazo para atender a demanda da empresa. Dessa forma, o responsável pela compra decidirá pelo prazo de entrega e não pelo melhor preço.

Para atender a essa necessidade, o Bimer conta com o módulo **Cotação**, por meio do qual informamos quais produtos queremos comprar e de quais fornecedores. Após informar dentro do sistema o prazo, preço, condições de pagamento e impostos, ele vai nos ajudar, através critério que tem maior peso no momento para a empresa, a tomar uma decisão e escolher o fornecedor. Em seguida, a partir da cotação, geramos o pedido de compras para que o fornecedor emita a nota fiscal e envie as mercadorias para a empresa.

---

## Fluxo da Rotina

Antes de entrar nas configurações do sistema, veja um fluxo com a rotina completa de cotação e quais elementos estão envolvidos.

> *[Imagem: Fluxograma da rotina de cotação]*

> **Observação:** note que após o pedido de compras ser criado, será dada continuidade na rotina de compras, ou seja, dando a entrada da nota e geração dos títulos a pagar no financeiro.

---

## Rotina de Cotação

### Nova Cotação

Primeiramente, abra o módulo de Cotação, informe a Empresa e clique em **Novo**.

> *[Imagem: Tela principal do módulo Cotação]*

Na tela a seguir, poderemos realizar o cadastro dos produtos e fornecedores a serem cotados.

- **Código** — É o código da cotação, similar ao código de chamada dos módulos de pedido de compra e pedido de venda.
- **Data** — No campo data será informada a data que a cotação foi realizada.
- **Situação** — Poderá consultar/alterar o status da cotação.
- **Descrição** — Poderá ser informado um título para a cotação, por exemplo, se o objetivo é para repor estoque ou atender determinado cliente.
- **Setor requisitante** — Campo opcional, referente a rotina de requisição. Neste campo é informado o setor que está solicitando determinados produtos para outros setores da empresa.
- **Setor requisitado** — Campo opcional, referente a rotina de requisição. Neste campo é informado o setor responsável por atender as requisições de outros setores da empresa.
- **Nome usuário requisitante** — Neste campo é informado o usuário que realizou a requisição do material (referente a rotina de requisição de materiais).
- **Grid Produtos** — Poderá adicionar/remover/editar os produtos e suas quantidades para realizar a cotação. Pode-se ainda desmembrar a quantidade de itens pedidos por centro de custo (clicando no botão relacionado). Também é possível remover todos os fornecedores de todos os produtos. Permite definir quais produtos deseja que faça parte da cotação. Permite, ainda, incluir fornecedores que não estão vinculados ao produto no cadastro de produto. No botão **Adicionar/Remover por grupo** permite a cada produto definir a quais grupos de produtos pertence.
- **Grid Fornecedores** — Poderá adicionar/remover/editar quais fornecedores participarão da cotação. Ainda nesta grid tem o botão **Característica** que serve apenas para consultar quais característica de pessoa o fornecedor possui. No botão **remover todos** é possível remover todos os fornecedores do produto selecionado.
- **Assinatura eletrônica** — Permite consultar alguns tipos de liberações que necessitarão de autorização de um usuário com permissões superiores. Por exemplo, quando é necessário cancelar uma cotação, o sistema pede a senha do usuário SUPERVISOR para efetivar o cancelamento, isso será registrado na assinatura eletrônica.
- **Anexos** — Permite anexar arquivos à cotação, por exemplo, um PDF com os preços cotados que o fornecedor enviou por e-mail.
- **Visualizar** — Permite visualizar a cotação através de arquivo RTM.

> **Observação:** quando a cotação é gerada pelo módulo **Requisição de Material**, ela será gerada com status de **Aguardando**, com os campos de Fornecedor, Produto, Setor requisitado, Setor requisitante e Usuário requisitante automaticamente preenchidos. Além disso, é possível visualizar pela linha do tempo.

### Cotação otimizada

Além de ir direto no botão "Novo", há também a possibilidade de realizar uma cotação automática. Imagine que você precise fazer uma cotação de 20 produtos. Na opção de cotação automática você conseguirá filtrar os produtos e gerar a mesma cotação para todos eles sem precisar ficar adicionando produto a produto. Bem melhor, não é?

Dentro do módulo Cotação, selecione a opção **"Cotação otimizada"**.

> *[Imagem: Opção "Cotação otimizada" no módulo]*

Feito isso, o sistema apresentará uma tela similar a um BI.

> *[Imagem: Tela de Cotação otimizada com filtros]*

Nessa tela você poderá selecionar diversos tipos de filtro, conforme sua necessidade, para que o sistema mostre somente os produtos que você precisa.

1. **Empresa de estoque:** informe a empresa para a qual será gerada a cotação.
2. **Tipos de produtos:** você poderá filtrar pelo tipo de produto para os quais deseja gerar a cotação.
3. **Produtos:** caso você não queira filtrar por tipo de produtos, você poderá selecionar os próprios produtos que deseja.
4. **Grupo de produtos:** filtrando por grupo de produtos, o sistema mostrará todos os produtos que possuem este grupo vinculado em seu cadastro.
5. **Família de produtos:** funcionará da mesma forma que o grupo de produtos; filtrando, trará todos os produtos com esta família vinculada em seu cadastro.
6. **Marca do produto:** você poderá utilizar esse campo caso queira filtrar todos os produtos da mesma marca, ou os produtos de mais de uma marca.
7. **Empresas:** filtrando por empresa, o sistema trará todos os produtos vinculados a esta empresa.
8. **Setores:** o sistema mostrará todos os produtos vinculados a este setor.
9. **Fornecedores:** você poderá ainda, filtrar todos os produtos vinculados a um mesmo fornecedor.
10. **Quantidade:** este campo servirá para filtrar os produtos em relação a quantidade de estoque e indicar uma quantidade a ser cotada de acordo com as opções "Estoque ideal" e "Estoque menor ou igual a zero".
11. **Resultado:** neste campo o sistema mostrará os produtos que ele encontrou de acordo com os filtros selecionados nos campos mencionados acima.

Após fazer os filtros dos produtos conforme o critério escolhido, clique na opção **"Atualizar filtro"** para que o sistema mostre os produtos encontrados no campo "Resultado". Depois disso, confira os produtos mostrados pelo sistema e certifique-se de que ficarão somente os produtos que você deseja. Caso tenha algum produto para o qual você não criará a cotação, selecione-o e clique em **"Remover"**. Por fim, clique sobre a opção **"Gerar cotação"**.

Você poderá salvar o cenário escolhido para que não precise refazer os filtros futuramente. Para isso, basta clicar em **"Salvar"** após preencher os campos desejados e informar um nome para o seu cenário. Caso já tenha um cenário salvo, basta clicar em **"Recuperar"** para usá-lo novamente.

Após criarmos a cotação, seguiremos para sua liberação.

### Liberar cotação

Para realizar a tomada de preços, é necessário liberar a cotação. Para isso, basta abrir a tela de edição da Cotação, no quadro **Situação** marcar opção **Liberada** e em seguida clicar em **OK**. Ou ainda, clicar no botão **Liberar Cotação**, presente ao final da tela.

> *[Imagem: Tela de edição da cotação com opção de liberação]*

Assim, para visualizar esta cotação agora, no filtro do grid do aplicativo Cotação é necessário marcar para visualizar as cotações **Liberadas**.

### Tomada de preços

Este recurso permite que a empresa registre os dados colhidos junto aos fornecedores no momento da cotação. Ou seja, o funcionário na empresa contata cada fornecedor e registra os prazos, preços, condições de pagamento, valores de impostos, dados que serão agrupados em cada fornecedor para que a empresa escolha um deles para fechar a compra.

Para isso, deve-se clicar em cima da cotação desejada e, depois, sobre o botão **Tomada de preço**.

> *[Imagem: Botão "Tomada de preço"]*

Dessa forma, será exibida a seguinte tela:

> *[Imagem: Tela de Tomada de preços]*

Nessa tela, deverá:

1. Informar o campo **fornecedor** para o qual está sendo feita a cotação;
2. Informar a **data tomada de preços**, que é a data que entrou em contato com o fornecedor e pegou os valores;
3. Na aba **Dados**, dar um duplo clique nos itens para informar o valor unitário, a previsão de entrega, impostos entre outros dados. A quantidade cotada pode ser menor em relação à quantidade a cotar (casos nos quais o fornecedor não possua toda a quantidade para atender a empresa);
4. Na aba **Condição de pagamento**, deverá informar a previsão de entrega e o prazo de pagamento oferecido pelo fornecedor. Essa informação também será considerada para a análise de compra que será feita posteriormente;
5. Na aba **Outros** é possível informar os dados de transportadoras e visualizar os tipos de contato vinculados ao cadastro do fornecedor, mas a informação de transportadora não é obrigatória;
6. Após clique em **Ok** e registre a tomada de preços dos demais fornecedores.
7. Realize o procedimento com todos os fornecedores que for cotar.

### Decisão de compra

Este é o momento de escolher o fornecedor para fechar a compra, fazendo uma comparação entre eles, de acordo com os dados colhidos na tomada de preços. Na tela principal do módulo Cotação, selecione a cotação e clique em **Decisão de compra**.

> *[Imagem: Botão "Decisão de compra"]*

Em seguida, será aberta a seguinte tela:

> *[Imagem: Tela de Decisão de compra]*

Nessa tela verifica-se qual é o melhor fornecedor para compra, podendo ser identificado pela cor amarela. É possível também definir qual será o critério de avaliação do melhor fornecedor, podendo optar entre **preço**, **prazo**, **ICMS** e **V.P (Valor presente)**:

1. **Preço** — Este critério levará em consideração o valor unitário informado na tomada de preço de cada fornecedor.
2. **Entrega** — Este critério levará em consideração o menor prazo de entrega.
3. **ICMS** — Este critério corresponde ao resultado da opção de compra que gerará mais crédito de ICMS para a empresa.
   > **Exemplo:** se o valor unitário de 2 fornecedores é igual, porém um veio de MG com ICMS de 12%, e outro do RJ com ICMS de 18%, o do RJ dará mais crédito de ICMS.
4. **VP (Valor Presente)** — Este critério corresponde ao resultado do seguinte cálculo:

   ```
   VP (Valor Presente) = valor líquido - (valor líquido * (0,02 * número dias da 1ª parcela))
   ```

   Sendo valor líquido = somatório dos valores abaixo agrupados por fornecedor, número de dias da parcela de pagamento e alíquota da parcela de pagamento da cotação selecionada.

   ```
   Valor Líquido = (VlUnitario + VlAcrescimoRateado + VlIPI + Valor ICMS ST +
   VlFreteRateado + VlSeguroRateado + (VlOutrasDespesasRateado * (AlParcela) /
   100)) - (VlDescontoRateado + VlDesconto)
   ```

   **Exemplo prático:**

   Temos uma cotação de um produto para dois fornecedores:

   **Fornecedor 01:**
   - Valor do produto: R$ 90,00
   - Número de dias da primeira parcela: 30 dias

   ```
   VP = 90,00 - (90,00 * (0,02 * 30))
   VP = 90,00 - (90,00 * 0,6)
   VP = 90,00 - 54
   VP = 36,00
   ```

   **Fornecedor 02:**
   - Valor do produto: R$ 100,00
   - Número de dias da primeira parcela: 50 dias

   ```
   VP = 100,00 - (100,00 * (0,02 * 40))
   VP = 100,00 - (100,00 * 0,8)
   VP = 100,00 - 80
   VP = 20,00
   ```

   Veja que o valor presente do Fornecedor 02 é menor que o Fornecedor 01, isso mesmo o valor unitário do produto do Fornecedor 01 sendo menor (R$ 90,00) do que o Fornecedor 02 (R$ 100,00).

   Então, conclui-se que é uma melhor opção comprar o produto a R$ 100,00 reais para pagar daqui a 50 dias, do que comprar a R$ 90,00 para pagar daqui a 30 dias.

Ao decidir com qual(is) fornecedor(es) serão comprados os produtos, deverão ser informadas as quantidades que serão compradas de cada um. Para isso, clique com o botão direito no registro correspondente ao fornecedor e o produto, em seguida, clique em **Tomada de preço**, exibindo novamente a tela de tomada de preços. Basta editar o item e informar a quantidade de sugestão de compra.

> *[Imagem: Tela de edição da quantidade de sugestão de compra]*

Após isso, os registros que possuírem quantidade informada para compra, serão identificados pela cor vermelha. Para gerar o pedido das cotações marcadas com a cor vermelha, basta clicar sobre o botão **Gerar Pedido de compra**, presente na parte superior da tela.

Dessa forma, ainda poderá ser gerado um relatório dos pedidos que estão sendo gerados.

Ao final, o sistema apresentará uma tela de ocorrência com detalhes do pedido gerado.

> *[Imagem: Tela de ocorrência com detalhes do pedido gerado]*
