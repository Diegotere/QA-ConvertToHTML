# Assistente de Compras — Bimer ERP

> **Sensibilidade:** interno  
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Rotinas](#rotinas)
  - [Quantidade Sugerida](#quantidade-sugerida)
  - [Fórmulas de Cálculo](#fórmulas-de-cálculo)
  - [Variáveis das Fórmulas](#variáveis-das-fórmulas)
  - [Botões de Análise](#botões-de-análise)
- [Realizando Pedido de Compra](#realizando-pedido-de-compra)
- [Seleção de Produtos](#seleção-de-produtos)
- [Relatório](#relatório)

---

## Introdução

O Assistente de Compras serve como um auxílio ao usuário na geração do pedido de compra, pois fornece dados para uma análise mais detalhada do desempenho de cada produto, tornando mais rápida a decisão de estratégias. O assistente de compras analisa todo o estoque da empresa, identificando as necessidades e dando sugestão de compra sem que o usuário fique calculando manualmente as quantidades dos produtos que devem ser comprados.

---

## Rotinas

Para utilizar o recurso de Assistente de compras, você deverá abrir o **BIEstoque** e no quadro **"Área de pesquisa"**, selecionar a opção **"Assistente de compras"**. Ao selecionar essa opção, serão habilitados alguns campos específicos para o assistente na aba **"Assistente de compras"**.

Nesta tela de filtro terá várias opções importantes para a geração de um resultado preciso com as informações necessárias.

### Quantidade Sugerida

No campo **"Quantidade sugerida"**, ao informar algum valor no campo **"Dias Cálculo"**, o sistema habilita as opções **"Considerar Prazo de entrega"** e **"Não considerar quantidade Comprada"**, e também os campos **"Utilizar no cálculo a quantidade:"** e **"Utilizar no cálculo da quantidade sugerida:"**.

- **Dias cálculo** – Este campo determina para quantos dias se deseja fazer uma compra de mercadoria. Assim, o sistema considerará, à frente, a quantidade a atender para os dias informados.
- **Considerar prazo de entrega** – Serão considerados os dias para cálculo + os dias que o produto será entregue.
- **Não considerar quantidade comprada** – Não será considerada a quantidade comprada no cálculo da quantidade sugerida.

No campo **"Utilizar no cálculo a quantidade"** — o cálculo será feito diminuindo da quantidade **disponível** ou da quantidade em **estoque**, de acordo com o que for marcado.

### Fórmulas de Cálculo

No quadro **"Utilizar no cálculo da quantidade sugerida"**:

1. **Soma do consumo médio com a quantidade Vendida:**

   ```
   (((CM / 30) + (QV / DV)) / 2) * (DC + PE)) - (QT + QC)
   ```

2. **Apenas Consumo Médio:**

   ```
   ((CM / 30) * (DC + PE)) - (QT + QC)
   ```

3. **Apenas Quantidade Vendida:**

   ```
   ((QV / DV) * (DC + PE)) - (QT + QC)
   ```

### Variáveis das Fórmulas

#### CM — Consumo Médio

O consumo médio é calculado somando as quantidades movimentadas em determinado período, dividido pela quantidade de meses deste mesmo período. Este período é configurado através de opções existentes no módulo **Configurador / Estoque / Opções / Cálculos / Consumo e consumo médio**. Neste local se configura a quantidade de meses para cálculo do consumo médio, excetuando-se ou se incluindo determinadas variantes.

Também é possível fazer o cálculo do consumo médio através de um período específico, que poderá ser informado no **BIEstoque / Filtro / Assistente de compras**.

> **Importante:** O consumo médio **NUNCA** pega as informações do mês corrente, ou do mês informado na data de referência, sendo esta última configurável na aba Filtro, aba geral.

**Exemplo:** se o mês corrente for janeiro, o sistema realizará o cálculo do consumo médio baseado nos meses de outubro, novembro e dezembro do ano anterior.

#### QV — Quantidade Vendida

É a quantidade vendida em um determinado período.

Como padrão, a quantidade vendida é apurada somando a quantidade vendida no mês corrente, baseando-se do primeiro dia do mês até a data atual. Existem outras duas possibilidades para se apurar a quantidade vendida:

1. Alterando a **data de referência**, existente na aba Filtro. Assim, o sistema pegará o dia e o mês informados neste campo para apurar a quantidade vendida.
2. Informando um **período específico** para a apuração, através do campo **"Período para informação de movimentações"**, existente na aba "Assistente de compras". Caso seja informada uma data neste campo, o sistema desprezará a data de referência para apuração da quantidade vendida.

#### DV — Dias de Venda

É a quantidade de dias corridos calculados através de uma das possibilidades citadas para se achar a quantidade vendida.

#### DC — Dias Cálculo

Esta variável é a informação da caixa **"Dias cálculo"**, informada na aba Filtro, aba "Assistente de compras". Este campo determina para quantos dias se deseja fazer uma compra de mercadoria. Assim, se a empresa deseja que o sistema sugira qual a quantidade ideal de estoque para 60 dias, deverá informar 60 neste campo.

#### PE — Prazo de Entrega

É a informação da coluna "Prazo de entrega" que é resgatada da seguinte forma e seguindo esta ordem de prioridade:

1. O sistema verifica o prazo de entrega informado no **vínculo entre o produto e o fornecedor principal** dele (módulo de Cadastro de produtos > aba Complementar).
2. O sistema verifica o prazo de entrega do **próprio fornecedor** (módulo de Cadastro de pessoas, categoria Fornecedores, aba Cadastros).
3. O sistema verifica o **prazo de entrega padrão**, informado no Configurador Bimer >> Estoque >> Opções >> Cálculos >> Estoque mínimo, máximo e crítico.

Desta forma, é possível que o sistema calcule a quantidade sugerida, já levando em conta este tempo. Contudo, essa informação só é utilizada na fórmula se estiver marcada a opção **"Considerar prazo de entrega"**, na aba Filtro, aba "Assistente de compras".

#### QT — Quantidade em Estoque/Disponível

Esta variável apura qual a quantidade disponível ou em estoque do produto naquele momento, de acordo com a configuração **"Utilizar no cálculo a quantidade:"**, existente na aba Assistente de compras, no qual se determina qual quantidade deverá ser utilizada no cálculo.

#### QC — Quantidade Comprada

Esta variável apura a quantidade que já foi comprada anteriormente deste produto. Ela somente será utilizada na fórmula, caso **não** esteja marcada a opção **"Não considerar quantidade comprada"**, existente na aba Filtro, aba "Assistente de compras".

### Campos Adicionais

- **Data de referência** — Na parte superior da tela, ao lado do campo "Área de pesquisa". Esta data é utilizada para o cálculo da quantidade vendida.
- **Período para informação de movimentações** — Caso seja informada uma data neste campo, o sistema desprezará a data de referência para apuração da quantidade vendida.
- **Fornecedor padrão para geração de pedido de compra** — A partir da versão 11.00.05.00 do sistema, é possível informar um fornecedor padrão que será utilizado na geração do pedido de compra. Nesse caso, o sistema não mostrará o fornecedor principal como a pessoa do pedido de compra (que é o padrão), ele mostrará que o pedido será gerado utilizando o fornecedor adicionado nesse campo.

Após informar os dados para o filtro, deverá clicar sobre o botão **"Filtrar"**. Dessa forma, serão exibidos os resultados para análise.

> **Observação:** alguns clientes desejam um relatório com "custo médio", "custo de reposição" e "consumo médio". Para isto, bastará na grid **"Campos adicionais"**, adicionar esses elementos.

### Botões de Análise

Existem alguns botões que auxiliarão na análise e nas decisões:

1. **"Novo produto"** — Através desse botão, poderá cadastrar um produto de forma simplificada, somente com as informações relevantes para o cadastro. Dessa forma, poderá cadastrar um novo produto para compra sem a necessidade de fechar o módulo e abrir o Produto.

2. **"Sugerir quantidade"** — Clicando sobre esse botão, o sistema preencherá a quantidade de compra dos produtos de acordo com a quantidade que foi sugerida para cada um.

3. **"Informações do produto"** — Clicando sobre esse botão, será exibida uma tela com informações importantes referentes ao produto selecionado. Poderá selecionar uma empresa e período de análise, visualizando todas as movimentações efetuadas. Também será possível visualizar os códigos e fornecedores que estão vinculados ao produto selecionado.

4. **"Duplicar informações"** — Esta opção possibilitará o usuário duplicar de uma empresa para outra a **"quantidade confirmada"** e **"Valor unitário"** informados pelo usuário.

5. **"Observação do produto selecionado"** — Nesse campo poderá consultar as observações inseridas no cadastro do produto.

---

## Realizando Pedido de Compra

Após analisar os dados e decidir para quais produtos serão gerados pedidos de compra, você poderá:

- Dar um **duplo clique** sobre o produto, ou
- Clicar sobre o botão **"Detalhes"**, ou
- Clicar na grid com o nome da empresa para a qual será feito o pedido.

Em todas as opções abrirá uma nova janela na qual se deve informar a **quantidade** e o **valor unitário**, e dar **"Ok"**. Após isso, o produto ficará com um check vermelho no campo **"C"** (de compra) na grid "Status".

Após realizar este procedimento com todos os produtos que deseja gerar o pedido de compra, clique no botão **"Gerar pedidos"**, na parte superior da tela. Dessa forma, o sistema somente gerará pedidos de compra para os produtos marcados com o tique vermelho.

---

## Seleção de Produtos

Quando se está na tela de resultado do filtro, terá o botão **"Seleção de produtos"** e clicando nele será aberta uma nova janela. Deve-se, então, clicar nos produtos da tela de trás para selecioná-los e arrastá-los para esta nova janela, para que se possa realizar procedimentos aglutinados com eles, como:

1. **"Gerar requisição"** — Através desse botão, você poderá gerar uma requisição de produtos, no qual deve-se informar a empresa e as quantidades a serem requisitadas de cada produto selecionado.

2. **"Criar lote"** — Clicando sobre esse botão, você poderá criar lotes de inventário com os produtos que foram selecionados.

3. **"Gerar cotação"** — Clicando sobre esse botão, você poderá gerar uma cotação de produtos. Para isso, deverá informar a quantidade na tela de seleção de produtos.

4. **"Alterar informações"** — Clicando sobre esse botão, você poderá alterar informações relevantes do cadastro de produtos, como "Qt. Crítica", "Qt. Máxima", "Qt. Mínima" e "Qt. Exp. Mínima".

5. **"Características"** — Clicando sobre esse botão, você poderá alterar a característica dos produtos selecionados.

---

## Relatório

O assistente de compras oferece algumas opções para gerar relatórios com base nos dados que foram filtrados e apresentados na tela de filtro.

### Opção "Relatório"

Esta opção realizará a impressão das informações apresentadas na tela de resultado na forma com que aparece.

> **Observação:** caso as informações apresentadas na tela de resultado tenham expansão horizontal maior que o da folha, na impressão serão divididas em várias impressões. Ou seja, as colunas que não puderem ser exibidas em uma única folha serão exibidas em outras separadamente. Para evitar isso, você poderá fazer ajustes no filtro e redimensionar os campos.

### Opção "Exportar"

Esta opção possibilita exportar essas informações em uma estrutura de planilha eletrônica nos formatos **XLSX**, **XLS** e **HTML**.
