# Comissão — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Gerais](#configurações-gerais)
- [Pontos de Configuração e Hierarquia](#pontos-de-configuração-e-hierarquia)
  - [Produto](#produto)
  - [Prazo](#prazo)
  - [Operação](#operação)
  - [Pessoa Relacionada](#pessoa-relacionada)
  - [Representante/Funcionário](#representantefuncionário)
- [Configurações para Comissão na Duplicata](#configurações-para-comissão-na-duplicata)
- [Configurações para Comissão no Faturamento](#configurações-para-comissão-no-faturamento)
- [Comissão por Meta de Venda](#comissão-por-meta-de-venda)

---

## Introdução

O comissionamento é uma prática comum nas empresas, e o objetivo é incentivar as vendas de produtos e serviços. Normalmente, o vendedor ganha uma porcentagem do valor da venda feita por ele. Esse vendedor pode ser uma pessoa física ou jurídica, um funcionário direto ou um representante.

No Bimer, para o controle de pagamento de comissão, utilizamos o termo **"Pessoa para repasse"**, que abrange as categorias de pessoa **Representante** e **Funcionário**.

### Fato gerador da comissão

O fato gerador da comissão pode ser de duas maneiras:

- **Pelo Faturamento** — a comissão será gerada no momento em que o documento de venda (NF-e, NFC-e, NFS-e, Cupom Fiscal, OE) for emitido;
- **Pela Duplicata** — a comissão será gerada no momento em que ocorrer a baixa do título a receber criado pelo documento de venda ou criado manualmente.

De acordo com as configurações desejadas, você pode definir se a comissão será paga no faturamento, no pagamento da duplicata ou em **ambos os momentos**.

**Exemplo:** Um vendedor recebe 1% de comissão no faturamento e 2% na duplicata. Para uma venda de R$ 100,00 com pagamento para 30 dias, no dia da venda ele receberá R$ 1,00 de comissão e no mês em que o título for baixado ele receberá R$ 2,00 de comissão.

> **Nota:** Normalmente as empresas acumulam as comissões geradas em um período para realizar o pagamento. Exemplo: todo dia 01 do mês, a empresa faz o fechamento das comissões geradas no mês anterior e faz o pagamento.

---

## Configurações Gerais

Caminho: **Configurador / Geral / Opções / Pessoa / Adicionais**

### Representante (pessoa relacionada)

As configurações dessa área definem a obrigatoriedade de os clientes terem ou não um vendedor relacionado.

- **Obrigar o cadastro de representante como pessoa relacionada** — com essa opção marcada, no módulo **Pessoa**, somente será permitido finalizar o cadastro caso tenha sido informado um representante como pessoa relacionada.

  Para que o sistema efetivamente bloqueie o cadastro, também é necessário que a categoria da pessoa esteja selecionada em **Configurador / Geral / Opções / Pessoa – Pessoa relacionada**.

  Categorias que terão o bloqueio: clientes, fornecedores, transportadoras, representantes, terceiros, prospectados, funcionários, dependentes e suspect.

- **Limitar número de representantes por cliente** — com essa configuração marcada, o sistema só permitirá incluir uma quantidade limitada de representantes como pessoa relacionada de um cliente. A quantidade deve ser informada no campo **Limite máximo de representantes**.

### Pessoa para Repasse (Representante/Funcionário)

- **Trabalhar com:** Representante / Funcionário / Ambos — define que categorias de pessoa podem ser a pessoa de repasse em uma venda.
- **Ao selecionar uma pessoa:**
  - **Sugerir o principal** — o sistema incluirá automaticamente no documento, como pessoa para repasse, o vendedor marcado como principal pessoa relacionada no cadastro do cliente.
  - **Sugerir todos os relacionados** — o sistema incluirá automaticamente no documento, como pessoa para repasse, todos os vendedores que estiverem como pessoas relacionadas no cadastro do cliente.
  - **Não sugerir** — o sistema não sugerirá ninguém como pessoa de repasse, mesmo que haja vendedores como pessoas relacionadas no cadastro do cliente.
- **Sugerir o usuário do sistema para repasse** — com essa configuração marcada, o sistema sugerirá a pessoa que estiver configurada como corresponde no cadastro de usuários. Muito útil quando na empresa não existe carteira de clientes por vendedor.

**Exemplo:** O colaborador Edson.oficina está realizando um pedido de venda para o cliente Pedro Silva. A colaboradora Maria.vendas é uma pessoa de repasse; portanto, no pedido criado pelo Edson.oficina, ambos serão levados ao repasse do pedido.

---

## Pontos de Configuração e Hierarquia

Para que a comissão seja calculada, precisamos ter **5 pontos de configuração** marcados. Podemos ter alíquotas diferentes informadas em cada um dos pontos do sistema, e existe uma **hierarquia** para que o sistema saiba qual destas alíquotas deverá utilizar.

A hierarquia utilizada pelo sistema para definir a alíquota de comissão é a seguinte:

1. **Produto**
2. **Prazo**
3. **Operação**
4. **Pessoa relacionada**
5. **Representante/Funcionário**

> **Observação:** Esta hierarquia é ignorada caso no cadastro de representante ou funcionário, aba cadastro, esteja marcada a opção **"A comissão será fixa"**.

> **Importante:** Os cinco pontos citados têm de estar marcados para que a comissão seja calculada, entretanto, a alíquota pode estar preenchida em apenas um destes locais.

### Produto

Caminho: **Módulo Produtos > edição do item > aba Opções**

Marque a opção **"O produto terá repasse/comissão"**. É essa opção que definirá se será gerada comissão para este produto.

Abaixo, marque se a comissão será paga no **faturamento**, na **duplicata**, ou em **ambos**. Caso queira que a alíquota de comissão seja considerada sobre o produto, informe a alíquota de comissão no campo referente. Caso queira definir um dos outros quatro pontos como fonte da alíquota de repasse, deixe o campo em branco.

> *[Imagem: aba Opções do Cadastro de Produtos com a opção "O produto terá repasse/comissão" marcada]*

### Prazo

No cadastro do prazo, informe se haverá ou não o cálculo de comissão nos documentos ou pedidos que utilizarem este prazo. Há campos para informar as alíquotas possíveis para comissão no **Faturamento** ou **Duplicata**.

> *[Imagem: cadastro de prazo com campos de alíquota de comissão para Faturamento e Duplicata]*

### Operação

Para as operações com tipo de movimento **Saída** ou **Venda**, a configuração **"Calcula repasse/comissão"** fica habilitada na **aba Cálculos**. Ao marcar esta opção, será habilitada a aba **"Repasse / Comissão"**. Defina o critério do repasse, escolhendo em qual momento será gerada a comissão.

Caso não queira estabelecer a alíquota na operação, deixe em branco.

> *[Imagem: aba Cálculos da Operação com a opção "Calcula repasse/comissão" marcada e aba Repasse/Comissão habilitada]*

### Pessoa Relacionada

No cadastro do cliente, na aba **Pessoa relacionada**, é possível vincular um funcionário ou um representante, selecionando a respectiva categoria. Assim, ao selecionar o cliente em um pedido de venda, a pessoa do repasse é levada devido ao vínculo realizado.

> **Observação:** Para que a aba pessoa relacionada apareça no cadastro de clientes, é necessário marcar a categoria cliente em **Configurador Bimer / Geral / Opções / Pessoa / Pessoa relacionada**.

Na tela de vínculo da pessoa relacionada, é possível copiar os dados configurados no cadastro do representante/funcionário para aquele ponto de configuração. Basta clicar em **"Copiar Comissão"**.

> *[Imagem: tela de vínculo de pessoa relacionada com o botão "Copiar Comissão"]*

### Representante/Funcionário

Caminho: **Módulo Pessoa > categoria Representante ou Funcionário > aba Cadastros**

Nesse local é possível decidir sobre qual local a pessoa de repasse terá comissão (Faturamento, Duplicata ou Ambos).

A opção **"A comissão será fixa"** determina que a alíquota informada neste local **sobrepõe todas as demais alíquotas** configuradas nos outros 4 pontos de configuração para comissão, ignorando a hierarquia.

> *[Imagem: aba Cadastros do Representante com a opção "A comissão será fixa" e campos de alíquota]*

---

## Configurações para Comissão na Duplicata

Caminho: **Configurador / Financeiro / Opções / Comissão / Geral**

Há configurações referentes à forma como será feito o cálculo da comissão. Estas configurações terão efeito quando a comissão for gerada na duplicata.

Na aba **Impostos**, é possível decidir quais impostos **não serão somados** à base de cálculo da comissão.

> *[Imagem: tela de configurações de comissão no Financeiro com a aba Impostos]*

---

## Configurações para Comissão no Faturamento

Caminho: **Configurador Bimer / Faturamento / Opções / Cálculo da comissão / Geral**

É possível:
- Deduzir valores de impostos da base de cálculo da comissão.
- Definir uma redução da alíquota de repasse dependendo do desconto oferecido na venda ou do prazo utilizado (aba **Alíquotas**).

Com todos os pontos de venda configurados, basta realizar a rotina de venda e a baixa de títulos normalmente. Conforme os fatos geradores de comissão ocorrem, o valor da comissão será lançado no módulo **Conta-Corrente** do Bimer.

---

## Comissão por Meta de Venda

Outra forma de pagamento/repasse de comissões é quando a empresa trabalha com **metas de vendas**.

Nesse modelo, os percentuais de comissão que o vendedor tem direito variam conforme o nível de atingimento de metas.

**Exemplo:** A empresa definiu R$ 50.000,00 como meta de venda para um período:

| Valor de venda no período | Alíquota de comissão |
|---------------------------|----------------------|
| R$ 10.000,00 | 1% |
| R$ 20.000,00 | 2% |
| R$ 30.000,00 | 3% |
| R$ 40.000,00 | 4% |
| R$ 50.000,00 | 5% |

Assim os vendedores têm mais incentivo para buscarem atingir o teto da meta.

### Configurações de meta

**1. Cadastro da meta:**

Caminho: **Configurador / Geral / Outros cadastros / Metas > Novo**

Informe uma descrição para a meta.

Em **Incidência da comissão**, marque se a meta estipulada será para a **empresa** ou **individual por representante**:
- **Empresa:** o valor da meta é dividido pelos vendedores, e eles só receberão comissão se o valor total da venda atingir a meta.
- **Representante:** torna-se individual, e cada vendedor só receberá a comissão se ele atingir o valor estipulado para ele como meta.

Em **Faixa por período**, clique no sinal de adição **(+)**, informe o período e o valor da meta para ele. As empresas definem o período conforme sua forma de gestão (mensal, trimestral, semestral, anual, etc.).

Em **Faixa por valor**, clique no sinal de adição **(+)** e informe:
- **Valor inicial** e **valor final** de faturamento necessário para ter direito a algum percentual de comissão.
- A **alíquota de comissão** a que ele terá direito.

Pode haver uma faixa única (tendo como valor final o próprio valor da meta) ou quebrar a meta em várias faixas.

> *[Imagem: exemplo de cadastro de meta mensal por representante com faixas de valor e alíquotas]*

**2. Vínculo com o vendedor:**

Caminho: **Módulo Pessoa > categoria Representante ou Funcionário > aba Cadastros**

Localize e edite o vendedor desejado e adicione a(s) meta(s).

**3. Acompanhamento:**

A comissão por meta **não é lançada automaticamente** no módulo Conta-Corrente. É necessário fazer o acompanhamento pelo **Relatório de metas por funcionário/representante**, disponível no módulo **Relatórios do estoque / Relatórios**.

> **Atenção!** Caso no RTM do layout padrão não tenha as informações necessárias, existem variáveis que incrementam o relatório.

Depois de emitir o relatório, o gestor pode lançar o valor no módulo **Conta-Corrente**.

> **Dica!** Uma empresa pode trabalhar com os dois tipos de comissão em conjunto (comissão padrão e comissão por meta). Um não invalida o outro.
