# Venda com embalagem — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Rotina](#rotina)

---

## Introdução

O recurso de embalagem no Bimer funciona como um **conversor de unidades** para os casos em que os produtos são controlados em unidades, mas são comprados ou vendidos em embalagem.

Este recurso funciona apenas como um facilitador na digitação, para evitar que o usuário tenha que fazer a conversão manualmente e lançar a quantidade convertida em unidade.

**Exemplo prático:** Numa loja de chocolates, existe um produto que é o carro-chefe da casa: a trufa especial. A loja determinou que as trufas serão vendidas em caixas com 4 unidades. No entanto, as trufas são controladas em unidades no estoque. O recurso descrito aqui trata dessa situação e de outras!

> **Nota:** Este material fala exclusivamente sobre a rotina de **venda**. As explicações relacionadas à rotina de compra estão em um outro material específico.

---

## Configurações

### Habilitar Quantidade por Embalagem e Padrão de Preenchimento

Acesse o **Configurador**, aba **Faturamento**, vá em **Opções**, aba **Venda**, **Padrões**, marque a opção **"Trabalhar com informação da quantidade por embalagem"** e defina o padrão do preenchimento para operação nacional ou operação de exportação, escolhendo entre **Unidade** ou **Embalagem**.

Este padrão de preenchimento vai habilitar, na inclusão do item, o campo de **Unidade** ou **Embalagem**, de acordo com o que você escolher na tela acima.

> *[Imagem: Tela de configurações do Faturamento com a opção "Trabalhar com informação da quantidade por embalagem" marcada e o padrão de preenchimento definido]*

Ainda nesta aba, temos duas configurações opcionais para esta rotina:

- **Quando o usuário tiver permissão para modificar a quantidade de itens na embalagem (dentro de cada embalagem) o valor unitário deverá ser recalculado, preservando assim o valor total da nota** – Com esta opção marcada, ao alterarmos a **Qt. na embalagem**, o sistema recalculará o valor da nota com a quantidade correspondente;

- **Habilitar o campo quantidade quando a entrada de informações for por embalagem** – Com esta opção marcada, o sistema habilitará o campo **Qt. pedida** e **Qt. de embalagens** e desabilitará o campo **Qt. na embalagem**.
  - Com a opção **marcada**: `Qt. na embalagem = Qt. pedida / Qt. de embalagens`
  - Com a opção **desmarcada**: o sistema deixará o campo **Qt. pedida** desabilitado e habilitará os campos **Qt. de embalagens** e **Qt. na embalagem**. Cálculo: `Qt. Pedida = Qt. de embalagens × Qt. na embalagem`

Configure de acordo com a preferência e salve as alterações clicando em **Gravar**.

### Configurações no Produto

Acesse o módulo **Cadastro de Produtos**, localize e abra o produto que trabalhará com embalagem na venda. Acesse a aba **"Opções"** em Editar o produto selecionado.

> *[Imagem: Tela de cadastro do produto com a aba Opções aberta]*

#### Embalagem (Venda)

Configure a **unidade da embalagem** (caixa, quilograma, litro, etc) e a **quantidade em relação à embalagem**. Além disso, selecione em **"Efetuar cálculo da quantidade de embalagens"** a opção desejada:

**Opção 1 – Pela divisão da qt. itens pela qt. na embalagem**

```
Fórmula: Qt Item / Qt na Embalagem
```

Usando o exemplo da venda das trufas, cada caixa possui 4 unidades. Portanto, o campo deve ser preenchido com **4** e a opção **"Pela divisão da qt. itens pela qt. na embalagem"** marcada.

**Opção 2 – Pela multiplicação da qt. itens pela qt. na embalagem**

```
Fórmula: Qt Item × Qt na Embalagem
```

Ainda no exemplo da venda do chocolate, o produto é vendido por unidade. Portanto, cada unidade do produto preenche 25% (ou 0,25) da caixa (1 caixa dividido para 4 unidades). Portanto, no campo quantidade, foi informado **"0,25"** e a opção **"Pela multiplicação da qt. itens pela qt. na embalagem"** foi selecionada. Sendo assim, ao emitir uma NF-e ou gerar um pedido, o sistema entende que a cada 1 Unidade existe 0,25 Caixa.

> *[Imagem: Tela de configuração de embalagem no cadastro do produto com as opções de cálculo]*

#### Completa Embalagem

Na seção **"Embalagem (Venda)"** ainda é possível realizar a configuração opcional para completar embalagem. Esta configuração somente será válida caso a configuração **"Efetuar cálculo da quantidade de embalagens"** estiver com a opção **"Pela divisão da qt. itens pela qt. na embalagem"** marcada.

- **Completa embalagem** – Com esta opção marcada, o sistema somente permitirá vender com quantidades **múltiplas** à qt. na embalagem. Este comportamento será aplicado tanto ao módulo **Pedido de Venda** quanto ao módulo **Faturamento**.

> *[Imagem: Opção "Completa embalagem" marcada no cadastro do produto]*

#### Cobrança de Embalagem

Outra configuração, também opcional, na seção **Embalagem (Venda)** é a cobrança de embalagem.

- **Cobra embalagem** – Com esta opção marcada, o sistema cobrará um adicional de embalagem (quando houver no pedido ou documento) aplicando alíquota a um valor que levará como base o preço do produto, incidência de impostos e/ou outras despesas conforme a necessidade.

Para trabalhar com cobrança de embalagem é necessário cadastrar um **Adicional** no Configurador. No **Configurador / aba Faturamento / Adicionais**, clique em **"Novo"** para adicionar um adicional. No cadastro, marque **"É adicional de embalagem"**, e informe um **"Nome"** e **"Alíquota %"** para este adicional. Desta forma, o adicional só será calculado para os produtos configurados para cobrar embalagem.

Mais abaixo, ainda poderão ser definidos quais impostos e despesas comporão a base de cálculo deste adicional.

> *[Imagem: Tela de cadastro do adicional de embalagem no Configurador]*

### Configurações Opcionais

#### Dados de Embalagem no XML

Pode ser necessário levar dados de embalagem para o XML. Para configurar o sistema para isto, acesse **Configurador / aba Faturamento / Opções / aba NF-e / Complementar**, e marque a opção **"Levar para o XML da NF-e os dados da embalagem (caso a saída esteja sendo feita pela embalagem)"**.

Com esta opção marcada, o sistema usará a quantidade de embalagens, valor unitário da embalagem e unidade da embalagem para preencher o XML.

Abaixo da opção mencionada, é necessário escolher em qual local do XML você deseja levar os dados da embalagem:

- **Nas tags de informações comercializáveis e tributáveis** – Tags `uCom`, `qCom`, `uTrib` e `qTrib`, por exemplo;
- **Somente nas tags de informações tributáveis** – Somente nas tags `uTrib` e `qTrib`, por exemplo. Para NFe de exportação, é necessário utilizar a unidade tributável de acordo com a tabela de NCM, em virtude da NT 2016.001.

> *[Imagem: Tela de configurações NF-e / Complementar com a opção de levar dados de embalagem para o XML]*

#### Informações Adicionais do produto

É possível levar para o XML, nas informações adicionais do produto, a unidade e a quantidade da embalagem do produto na nota fiscal. Para isto, marque a opção **"Quantidade da embalagem"** no **Configurador / Faturamento / Opções / aba NF-e / Complementar**.

#### Quantidade Mínima

Ainda nas **Opções do módulo Configurador**, da aba **Faturamento**, aba **Pedido de venda**, **Complementar**, é possível definir uma **quantidade mínima de embalagens** a serem vendidas por pedido de venda. Além disso, também é possível definir uma **sobretaxa**, caso a quantidade mínima não seja atingida.

Essa sobretaxa pode ser cobrada uma única vez ou para cada embalagem informada no pedido de venda, de acordo com a preferência do usuário (opção **"Esta taxa será cobrada por embalagem"**).

> **Importante:** Esta configuração **não impactará** no cadastro da nota fiscal no módulo Faturamento. As configurações abaixo demonstradas são exclusivas para o **Pedido de Venda**.

> **Importante:** Atente-se ao campo de taxa, que é preenchido com **valor (R$)** da taxa e não por alíquota (%).

#### Permissão para alterar a quantidade de item por embalagem

Nos cadastros de usuários ou perfis no módulo **Cadastro de Usuários**, é possível conceder acesso para **alterar a quantidade de itens por embalagem**. Ao habilitarmos este acesso, o campo **Qt. na embalagem** ficará sempre habilitado na criação do pedido ou documento.

> **Importante:** O mesmo acesso existe para a nota fiscal no módulo Faturamento. Então, caso seja necessário habilitar o campo nos dois módulos, conceda o acesso em ambos os sistemas.

---

## Rotina

A seguir, visualize a demonstração da rotina utilizando o módulo **Pedido de Venda**. O comportamento no **Faturamento** é o mesmo, com exceção da parte de sobretaxa (quantidade mínima), que é exclusiva para pedido de venda.

Acesse o módulo **Pedido de Venda**, informe a **Empresa** e crie um pedido normalmente.

No cadastro do pedido de venda informe o **Cliente**, **Operação**, e em **Itens do pedido** clique em **Adicionar**.

Na tela de inclusão de produtos, após informar o item, note que o campo de quantidade que ficará habilitado será o que foi definido por padrão nas configurações.

Como nas configurações foi definido **Embalagem** como padrão, o campo **Qt. de embalagens** fica habilitado para definirmos qual a quantidade de embalagem que o cliente deseja. Já o campo **Qt. na embalagem** é habilitado somente se houver permissão no módulo **Cadastro de Usuários**. Além destes, observe também a **Unidade embalagem** e o **Valor unitário da embalagem** ao lado.

> *[Imagem: Tela de inclusão de produto no pedido de vendas com os campos de embalagem habilitados]*

Neste caso, como estamos informando a quantidade por embalagem, o campo **Qt. Pedida** fica desabilitado.

- Se a opção **"Quando o usuário tiver permissão para modificar a quantidade de itens na embalagem o valor unitário deverá ser recalculado"** estiver marcada, ao alterarmos o valor do campo **Qt. na embalagem** manualmente o sistema recalculará o **Vl. líquido** do item.
- Se a opção **"Habilitar o campo quantidade quando a entrada de informações for por embalagem"** estiver marcada, o sistema mudará o seu comportamento desabilitando o campo **Qt. na embalagem** independente do acesso no Cadastro de Usuários e habilitará o campo **Qt. Pedida**.

Após confirmar as informações de lançamento do produto, basta gravar clicando em **OK**.

### Alteração da inserção de quantidade

Na inclusão de um produto no pedido de vendas, o sistema permite que seja alterada a forma como ele será vendido. Ou seja, é permitido optar pela venda por **"Unidade"** ou por **"Embalagem"**, mesmo que haja um padrão. Ao mudarmos de embalagem para Unidade, por exemplo, o sistema desabilita os campos **Qt. de embalagens** e **Qt. na embalagem** e habilita o campo **Qt. Pedida**. O sistema apenas alerta sobre o padrão, e após confirmação é possível seguir adiante com a opção escolhida.

> **Nota:** A alteração não alterará o padrão das demais vendas. Será alterado somente no pedido de vendas corrente.

### Sobretaxa por embalagem

Após informar os dados na aba **Negociação** e gravar o pedido de venda, caso tenha configurado a base para sobretaxar o pedido se um produto não atingir a quantidade mínima de embalagens para a venda, o sistema apresentará um alerta neste momento.

Para o exemplo, configuramos a quantidade mínima como **4 embalagens**, com um valor de sobretaxa de **R$ 5,00**. No pedido de venda abaixo, o cliente está levando 3 caixas de trufas, que é inferior à quantidade mínima configurada:

> *[Imagem: Alerta de sobretaxa por embalagem com a mensagem de quantidade mínima não atingida]*

O valor da sobretaxa será lançado como **Outras despesas** na aba **Outros** do pedido de venda. Para prosseguir basta clicar em **Sim** e o pedido de venda será gravado com a sobretaxa. Ao clicar em **Não** o pedido de venda será gravado sem a sobretaxa.

> *[Imagem: Aba Outros do pedido de venda com o valor da sobretaxa lançado como Outras despesas]*

Perceba que a taxa foi única, de R$ 5,00. No entanto, há como configurar que esta sobretaxa seja multiplicada pela quantidade de embalagens, conforme mencionado no tópico de configurações do recurso.

### Completa embalagem

Com a opção **Completa embalagem** no cadastro do produto marcada, na inclusão do item no pedido de venda ou nota fiscal, caso o sistema esteja configurado para habilitar o campo quantidade quando a entrada de informações for por embalagem, somente será permitido informar **quantidade múltipla** do campo **"Qt. Na embalagem"**.

Isto se aplica perfeitamente ao nosso exemplo utilizado desde o início, onde as trufas são vendidas sempre em caixas com quatro unidades.

Ao lançar uma quantidade (no campo **Qt. Pedida**) que não seja múltipla do campo **"Qt. na embalagem"**, o sistema bloqueia a inserção do item no pedido de venda ou nota fiscal com o seguinte alerta:

> *A quantidade informada deve ser múltipla da quantidade por embalagem (4 produtos por embalagem), informada no cadastro deste produto. Sendo assim, a quantidade de embalagem mais próxima a ser informada é 1 ou, alternativamente, poderá ser informado 4 de quantidade. Verifique.*

### Cobra adicional de embalagem

Ao lançar um pedido de venda ou nota fiscal com um adicional que tenha a opção **"É adicional de embalagem"** marcada, o sistema calculará este adicional para todos os itens que tiverem a opção **Cobra embalagem** marcada no Cadastro de produtos.

Ao lado do campo em que o adicional foi inserido, observe a alíquota aplicável. Na capa do pedido de venda ou nota fiscal será destacado o valor encontrado para os adicionais.

No caso do exemplo acima, o cálculo feito foi:

```
Vl. Item × Al. Adicional = Vl. Adicional
R$ 10,00 × 0,50% = R$ 0,50
```

Veja a fórmula completa abaixo, que será usada conforme cadastro do adicional:

```
Vl. Adicional = (Valor do item + Acréscimo rateado + Desconto rateado + ICMS Frete rateado
               + PIS Frete rateado + COFINS Frete rateado + Seguro rateado
               + Outras despesas rateadas) × Al. Adicional
```

> *[Imagem: Tela do pedido de venda com o adicional de embalagem calculado e destacado na capa]*

### XML da nota fiscal eletrônica

Para os produtos que trabalham com embalagem:

- Caso a opção **"Levar para o XML da NF-e os dados da embalagem"** esteja **desmarcada**, mesmo que o produto seja lançado com o padrão de cadastramento Embalagem, o XML da NF-e será gerado com a **unidade, quantidade e valor da unidade do produto**, tanto na tag de unidade comercializável quanto na tag de unidade tributável.

- Com a opção mencionada **marcada** e levando os dados para as informações comercializáveis e tributáveis, o XML será gerado considerando a **unidade, a quantidade e o valor da embalagem** do produto.

> *[Imagem: Comparação de dois XMLs gerados para a mesma venda, um com dados de unidade e outro com dados de embalagem]*

Se o sistema estiver configurado para levar a **Quantidade da embalagem** no quadro **Informações adicionais do produto** no módulo Configurador / Faturamento, os dados são gerados na tag `<infAdProd>` com as informações da embalagem do produto.

> *[Imagem: XML da NF-e com a tag infAdProd contendo as informações de embalagem do produto]*
