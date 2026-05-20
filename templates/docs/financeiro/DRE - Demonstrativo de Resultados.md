# DRE — Demonstrativo de Resultados — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [O que é DRE?](#o-que-é-dre)
- [Pré-requisitos](#pré-requisitos)
- [Configurações](#configurações)
  - [Permissões de Usuário](#permissões-de-usuário)
  - [Parametrização de URL](#parametrização-de-url)
- [Acesso ao Módulo e Filtros](#acesso-ao-módulo-e-filtros)
- [Demonstrativo de Resultado X Ratio](#demonstrativo-de-resultado-x-ratio)
- [Criação de Demonstrativos](#criação-de-demonstrativos)
  - [Composição da Linha por Valor](#composição-da-linha-por-valor)
  - [Origens de Cálculo](#origens-de-cálculo)
  - [Composição de Linha por Fórmula](#composição-de-linha-por-fórmula)
  - [Metas](#metas)
  - [Customização](#customização)
  - [Linha para Percentual](#linha-para-percentual)
  - [Outras Funções da Tela de Demonstrativo](#outras-funções-da-tela-de-demonstrativo)
  - [Compartilhamento de Demonstrativos](#compartilhamento-de-demonstrativos)
- [Resultados](#resultados)
- [Exemplos de DRE](#exemplos-de-dre)

---

## Introdução

O recurso **Demonstrativo de Resultado** permite que o cliente visualize, organize e acompanhe o desempenho financeiro e as operações da empresa de forma gerencial. A tela centraliza os relatórios de resultados, auxiliando na tomada de decisões fundamentadas em dados reais.

Esta ferramenta simplifica a gestão financeira ao substituir planilhas complexas por uma interface intuitiva. Com ela, o cliente gera e consulta demonstrativos que indicam a lucratividade da operação e identificam os principais custos.

### O que é DRE?

O **DRE – Demonstrativo do Resultado do Exercício** tem como objetivo detalhar a formação do resultado líquido de um exercício pela confrontação das receitas, custos e despesas de uma empresa, apuradas segundo o princípio contábil do regime de competência (receitas e despesas devem ser incluídas na apuração do resultado do período em que ocorrem).

O módulo Demonstrativo de Resultado apresenta a formação do resultado líquido do exercício, confrontando receitas, custos e despesas, oferecendo um resumo econômico dos resultados operacionais em um determinado período.

> **Exercício** = período de 01 de janeiro a 31 de dezembro de cada ano.

**Representação simplificada:**

```
(+) Receita Bruta de Vendas
(-) Deduções (devoluções, impostos sobre vendas)
(=) Receita Operacional Líquida
(-) Custo das Mercadorias Vendidas (CMV)
(=) Lucro Bruto
(-) Despesas Operacionais (vendas, administrativas, financeiras)
(=) Resultado Líquido do Exercício
```

---

## Pré-requisitos

- **Versão do Bimer:** igual ou superior a **11.02.03.16**
- **Versão do Bimer UP:** igual ou superior a **11.02.03.07**
- O produto **"Demonstrativo de resultados"** já vem vinculado por padrão no CRM do cliente
- Este módulo é uma **aplicação Web integrada ao Bimer UP**

---

## Configurações

### Permissões de Usuário

O acesso deve ser liberado no módulo **Cadastro de Usuários**, liberando permissão ao módulo **Demonstrativo de Resultado** para o usuário ou perfil de usuário.

### Parametrização de URL

A URL de acesso do Bimer UP é obrigatória, pois o DRE é um sistema web integrado ao Bimer UP.

Caminho: **Configurador >> Geral >> Opções >> Bimer UP**

Configure o link do Bimer UP para que o DRE possa ser visualizado e utilizado dentro do Bimer Desktop.

---

## Acesso ao Módulo e Filtros

Caminho: **Financeiro >> Demonstrativo de Resultado**

O sistema permite a criação de demonstrativos organizados por **Código**, **Descrição** e **Categoria**. Ao acessar a tela, são exibidos todos os demonstrativos já cadastrados com as colunas:

- **Código** — Identificador único do registro.
- **Descrição** — Nome ou título do demonstrativo.
- **Categoria** — Classificação do grupo de relatórios.

Para localizar rapidamente um grupo de relatórios, utilize o campo de busca **"Todas as categorias"** no canto superior direito da tela.

**Filtro por Operação:** Nas origens de cálculo relacionadas a documentos, o campo **Filtro por Operação** permite que o sistema calcule os resultados considerando apenas os documentos emitidos com as operações selecionadas.

---

## Demonstrativo de Resultado X Ratio

O Demonstrativo de Resultado substitui o antigo sistema **Ratio**. Diferente do Ratio (sistema externo integrado), o Demonstrativo de Resultado é um módulo nativo do Bimer UP, eliminando a necessidade de integrações complexas ou custos adicionais de licenciamento. Com o lançamento deste módulo, o sistema Ratio será descontinuado. Todos os recursos anteriores foram preservados, com melhorias incluídas.

---

## Criação de Demonstrativos

Para cadastrar um novo demonstrativo, clique em **"Novo"**. O sistema apresentará duas opções:

- **Modelo Padrão SEBRAE** — Gera automaticamente um demonstrativo com estrutura e linhas pré-configuradas conforme as normas sugeridas pelo SEBRAE.
- **Modelo Vazio** — Permite criar toda a estrutura do zero, definindo manualmente cada linha, origem de cálculo e fórmula.

Após selecionar o modelo, informe a **Descrição** (nome) do demonstrativo e clique em **"Ok"**.

### Composição da Linha por Valor

Na tela de edição das linhas:

- **Campo "Número"** — Identificação da linha atribuída automaticamente pelo sistema.
- **Campo "Ordem"** — Define a sequência de apresentação das linhas na tela. Não tem vínculo com o campo "Número".
- **Campo "Descrição"** — Nome de exibição da linha. Por convenção:
  - **(+)** para valores que serão somados
  - **(-)** para valores que vão subtrair
  - **(=)** para linhas que fazem cálculo com outras linhas

Em **"Tipo de linha"**, ao marcar a opção **"Valor"**, o quadro **"Fórmula"** é desabilitado e o quadro **"Origem do cálculo"** é habilitado.

No campo **"Origem"**, indique as variáveis que comporão o cálculo. Clique em **"Buscar origens de cálculo"**, selecione a origem desejada e clique em **"Adicionar"**. É possível adicionar mais de uma origem para a mesma linha — o sistema somará automaticamente todas as origens informadas.

Quando a origem de cálculo for relacionada a **"títulos a receber"** ou **"títulos a pagar"**, ao adicionar a origem será habilitada a opção **"Naturezas"**, que permite definir quais naturezas de lançamentos devem ser consideradas.

### Origens de Cálculo

**Faturamento:**
- **Vendas do período** — Documentos fiscais emitidos no período com operações configuradas para venda. Devoluções e cancelamentos são desconsiderados.
- **ICMS sobre as vendas do período** — Valor do ICMS dos documentos fiscais de venda com operações configuradas para calcular ICMS.
- **IPI sobre as vendas do período** — Valor do IPI dos documentos fiscais de venda com operações configuradas para calcular IPI.
- **Comissão sobre as vendas do período** — Valor de comissão dos documentos fiscais de venda.

**Estoque** (considera os produtos referentes aos documentos fiscais filtrados para o resultado das vendas):
- **Custo das mercadorias vendidas no período (Contábil)** — CMV = Vl. Estoque inicial + Vl. Compras e entradas – Vl. Estoque final.
- **Valor do estoque inicial do período** — Valor do estoque dos produtos vendidos na data inicial do período.
- **Valor do estoque final do período** — Valor do estoque dos produtos vendidos na data final do período.

**A Receber:**
- **Títulos a receber em aberto** — Títulos (previsão ou realizados) com vencimento dentro do período, em aberto.
- **Títulos a receber no período** — Títulos com vencimento dentro do período, independente do status.
- **Títulos de previsão a receber em aberto** — Títulos de previsão com vencimento no período, em aberto.
- **Títulos a receber em aberto (sem previsão)** — Títulos realizados com vencimento no período, em aberto.
- **Títulos a receber após o final do período** — Títulos em aberto com vencimento superior à data final do período.
- **Títulos de previsão a receber após o final do período** — Títulos de previsão com vencimento superior ao período.
- **Títulos a receber após o final do período (sem previsão)** — Títulos realizados com vencimento superior ao período.
- **Títulos a receber duvidosos** — Títulos vencidos há mais de 30 dias.
- **Títulos recebidos no período** — Títulos com data de baixa dentro do período, independente do vencimento.

**A Pagar:**
- **Títulos a pagar em aberto no período** — Títulos (previsão ou realizados) com vencimento no período, em aberto.
- **Títulos a pagar no período** — Títulos com vencimento no período, independente do status.
- **Títulos de previsão a pagar em aberto** — Títulos de previsão com vencimento no período, em aberto.
- **Títulos a pagar em aberto (sem previsão)** — Títulos realizados com vencimento no período, em aberto.
- **Títulos a pagar após o final do período** — Títulos em aberto com vencimento superior à data final do período.
- **Títulos de previsão a pagar após o final do período** — Títulos de previsão com vencimento superior ao período.
- **Títulos a pagar após o final do período (sem previsão)** — Títulos realizados com vencimento superior ao período.
- **Títulos pagos no período** — Títulos com data de baixa dentro do período, independente do vencimento.

### Composição de Linha por Fórmula

Em **"Tipo de linha"**, ao marcar a opção **"Resultado"**, o quadro **"Fórmula"** é habilitado e o quadro **"Origem de cálculo"** é desabilitado.

> **Atenção:** Na fórmula de cálculo, só é possível utilizar linhas cujo **"Número"** seja anterior ao número da linha que está realizando o cálculo. O número da **"Ordem"** também influencia da mesma forma.

Para montar a fórmula:
- Selecione uma linha e clique na seta para baixo — a linha será incluída como variável na fórmula, representada entre colchetes com o número precedido da letra **"L"** (ex.: `[L3]`).
- Para incluir um valor numérico fixo, informe o valor e clique na seta para baixo.
- Entre os números e variáveis, use os operadores matemáticos clicando sobre o operador desejado.
- Para validar a fórmula, clique no botão de **check**.
- Para limpar o campo da fórmula, clique no botão **"X"**.

### Metas

Marque a opção **"Meta"** para habilitar os campos de edição. A meta pode ser por **valor** ou **percentual**.

**Meta por Valor:**
- **Indicador máximo** — Se o valor da linha ultrapassar este valor, exibe seta para cima (⬆) na coluna "Indicador".
- **Indicador mínimo** — Se o valor da linha ficar abaixo deste valor, exibe seta para baixo (⬇).
- **Valor** — Valor da meta a ser alcançado.
- Se o valor estiver entre o mínimo e o máximo, exibe seta para a direita (➡) em azul.

**Cores dos indicadores:**
- Setas verdes (⬆⬇) indicam valores positivos.
- Setas vermelhas (⬆⬇) indicam valores negativos.
- Por padrão, seta para cima = verde (acima da meta) e seta para baixo = vermelha (abaixo da meta).

Para casos em que estar acima da meta é negativo (ex.: valor de ICMS), marque a opção **"Apresentar valor superior a meta como negativo"**. Com isso, a seta para cima ficará vermelha e a seta para baixo ficará verde.

**Cálculo do % meta atingida:**
```
% meta atingida = (Valor × 100) / Meta
```

**Meta por Percentual:**

Trabalha em conjunto com o campo **"Linha"**, que seleciona uma linha de referência para calcular a meta. O valor da meta é obtido pelo percentual (campo "Valor") aplicado sobre o valor da linha referenciada.

```
Meta = Valor da linha referenciada × Percentual configurado
```

### Customização

- **Cor** — Selecione a cor que a linha será apresentada na composição e na tela de resultados.
- **Negrito** — Define se o texto da linha ficará em negrito.
- **Alinhar à direita** — Por padrão os textos são alinhados à esquerda; marque para alinhar à direita.

### Linha para Percentual

A opção **"Valor proporcional em relação a linha"** realiza uma comparação entre a linha atual e a linha selecionada. No resultado, a linha referenciada aparece na coluna **"Linha para percentual"** e o percentual é exibido na coluna **"% sobre a linha"**.

### Outras Funções da Tela de Demonstrativo

**Categorias:** Para criar categorias para os demonstrativos, clique em **"Nova"** no campo de categoria, informe o nome e clique em **"Salvar"**. Em seguida, informe a qual categoria o demonstrativo pertence.

**Adicionar linhas:** Além das linhas do modelo SEBRAE, é possível criar outras linhas clicando em **"Adicionar linha"** e configurando normalmente.

Ao finalizar o cadastro e a configuração de todas as linhas, clique em **"Gravar"** para salvar as configurações.

### Compartilhamento de Demonstrativos

Por padrão, a configuração de demonstrativo é visível apenas para o usuário que a criou. Para compartilhar, clique em **"Compartilhar"** e defina os níveis de acesso:

- **Leitor** — O usuário apenas consulta os dados.
- **Editor** — O usuário tem permissão para alterar o demonstrativo.
- **Remover** — Remove o usuário do compartilhamento.

---

## Resultados

Para visualizar o resultado da DRE:

1. Na tela inicial, clique em **"Visualizar"** no demonstrativo desejado.
2. Selecione a(s) **empresa(s)** e o **período** que deseja consultar.
3. Clique em **Processar**.

Na tela de processamento são apresentadas todas as linhas configuradas. Na parte superior, defina a data de processamento do período. Para cada processamento realizado, o sistema cria uma nova aba para cada faixa de data, permitindo comparações entre períodos.

Ao marcar a opção **"Apresentar valores por mês"**, os valores das linhas são apresentados de forma mensal.

Em cada linha, clique no ícone **(i)** de informações para visualizar como foram realizados os cálculos.

---

## Exemplos de DRE

**Receita Bruta**

Representa as operações recorrentes da empresa com relação a produtos e/ou serviços vendidos no período. Não são deduzidas as despesas.

Origem de dados: **"Vendas do período"**

**Receita Operacional Líquida**

Resultado da receita operacional menos vendas canceladas, impostos sobre vendas e abatimentos. Voltado para a cobertura das despesas e custos da empresa.

Cálculo sugerido:
```
(+) Vendas do período
(-) ICMS sobre as vendas do período
(-) IPI sobre as vendas do período
(-) Comissão sobre as vendas do período
(-) Custo das mercadorias vendidas no período (Contábil)
(=) Receita Operacional Líquida
```

> **Observação:** A receita líquida pode variar de empresa para empresa com relação ao que será ou não considerado na dedução.

**Impostos que incidem sobre as vendas**

Resultado com os valores totais de impostos pagos sobre as vendas.

Cálculo sugerido:
```
(+) ICMS sobre as vendas do período
(+) IPI sobre as vendas do período
(=) Total de impostos sobre vendas
```

> **Observação:** Por enquanto o sistema traz apenas os tributos de IPI e ICMS. Futuramente serão considerados outros impostos como PIS/COFINS e ISS.

**Custo de serviços e mercadorias vendidas**

Calcula os elementos que envolvem todos os gastos relativos à produção.

Origem de dados: **"Custo das mercadorias vendidas no período (Contábil)"**
