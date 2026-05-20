# Fluxo de Caixa — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Utilizando o Fluxo de Caixa](#utilizando-o-fluxo-de-caixa)
  - [Fluxo de Caixa Projetado](#fluxo-de-caixa-projetado)
  - [Fluxo de Caixa Realizado](#fluxo-de-caixa-realizado)

---

## Introdução

O **fluxo de caixa** é um instrumento de gestão financeira que projeta para períodos futuros todas as entradas e saídas de recursos financeiros da empresa, indicando como será o saldo de caixa para o período projetado. Seu objetivo é verificar a saúde financeira do negócio e obter uma resposta clara sobre as possibilidades de sucesso do investimento e o estágio atual da empresa.

Para uma boa análise do fluxo de caixa, devem ser considerados:

- **Saldo atual disponível** — total de recursos financeiros no banco e caixa interno.
- **Compromissos assumidos** — contas a pagar.
- **Recebimentos programados** — títulos a receber.

O sistema de fluxo de caixa do Bimer permite dois tipos de análise:

1. **Fluxo de Caixa Projetado** — demonstra a situação futura da empresa.
2. **Fluxo de Caixa Realizado** — demonstra o comportamento financeiro da empresa em períodos anteriores.

Em uma análise de fluxo de caixa, a **data atual** é sempre considerada como data inicial para o fluxo projetado e como data final para o fluxo realizado.

---

## Utilizando o Fluxo de Caixa

Como se trata de um módulo de análise de resultados, não há configurações específicas para o funcionamento. O módulo analisa os títulos **A Receber** e **A Pagar** já existentes no Bimer.

Na tela inicial do módulo há dois botões:

- **Fluxo de caixa (projetado)**
- **Fluxo de caixa (realizado)**

---

### Fluxo de Caixa Projetado

Ao abrir a tela, são exibidos filtros semelhantes a um BI.

**Período de análise**

No topo da tela de filtros, informe a constante para composição da **Data Final** (a data inicial é sempre a data atual). Utilize os condutores para definir o período. Exemplo: para verificar a projeção dos próximos 3 meses, selecione **Dia atual +**, o número **3** e **Mês(es)**.

**Cenário para composição do saldo disponível**

Define o saldo financeiro disponível (contas bancárias e contas caixa) que será utilizado no Fluxo de Caixa.

Para criar um cenário: clique no ícone **Novo** ao final do campo, preencha os filtros (empresas e contas), salve com o nome desejado e selecione o cenário criado.

Para incluir somente contas específicas: na tela de **Consulta de saldo disponível**, clique em **Alternar filtro/resultado** e faça o filtro das contas desejadas.

> **Nota:** Se nenhum cenário for selecionado, o sistema considerará todas as contas bancárias e contas caixa de todas as empresas para compor o saldo disponível.

**Seção "Considerar na projeção do fluxo de caixa"**

Selecione o que deve compor o relatório:

- **Títulos a pagar/receber vencidos** — Exibe títulos vencidos não pagos/recebidos. Como o relatório é futuro, esses títulos só aparecem se as respectivas opções estiverem marcadas.
  - **Detalhar faixas** — Cria cinco faixas para os títulos vencidos, detalhando os vencimentos.
- **Pedidos de venda** — Considera títulos ainda não criados, mas previstos em negociações de pedidos de venda.
- **Notas fiscais não vinculadas a pedido de venda** — Considera a negociação nas NF-e criadas no Faturamento, mesmo que ainda abertas.
- **Contratos fixos e variáveis** — Considera itens de contratos fixos e variáveis que não estejam nas situações: Doação, Cobrança suspensa, Cobrança paralisada, Contrato não liberado, Contrato excluído ou Situação do produto que desativa item.
- **Contas-correntes em aberto** — Considera os totais de comissão do módulo Conta-Corrente para os quais ainda não foi feito o fechamento.
- **Títulos contra-apresentação** — Considera títulos sem data de vencimento.
- **Títulos de previsão** — Inclui títulos criados como previsão.
- **Considerar como abertos títulos baixados, cujos lançamentos bancários ainda não foram conciliados** — Considera como ABERTOS todos os títulos ainda não conciliados no módulo Disponível.

Após definir os filtros, clique em **Filtrar** para obter o resultado.

**Tela de resultado**

Os valores **A Receber** (azul) e **A Pagar** (vermelho) são exibidos em duas colunas, acompanhados de:

- **Coluna Período** — Cruzamento entre valores a receber e a pagar naquele dia, semana ou mês (A Receber – A Pagar).
- **Coluna Saldo Acumulado** — Considera o valor da coluna Período mais o Saldo disponível. Permite prever quanto a empresa terá daqui a X meses.

Outros recursos da tela de resultado:

1. **Visão** — Selecione o tipo de visualização: diária, semanal ou mensal.
2. **Saldo simulado** — Permite simular cenários financeiros. Exemplo: verificar se um empréstimo de valor X resolveria a situação financeira em 60 dias. Após alterar o saldo simulado, clique em **Atualizar Filtro** para recálculo.

Para detalhar o que há a receber e a pagar em um determinado período, dê duplo clique sobre o período desejado para abrir a tela de **Detalhamento por títulos**. Nesta tela é possível acessar a linha do tempo do título, imprimir, agrupar e até alterar a data de vencimento de títulos a pagar.

**Aba "Visão por natureza de lançamento"**

Exibe as naturezas de lançamento em linhas e a periodicidade escolhida em colunas, permitindo comparar facilmente valores gastos em diferentes períodos com a mesma natureza de lançamento.

---

### Fluxo de Caixa Realizado

Enquanto o fluxo projetado ajuda a se antecipar a possíveis falhas, o **fluxo realizado** ajuda a identificar falhas que já ocorreram, permitindo definir ações corretivas.

Na tela inicial do módulo, clique em **Fluxo de Caixa (realizado)**.

**Período de baixa**

Escolha a data para buscar o saldo realizado no período. Utilize a engrenagem ao lado do campo **Período de baixa** para facilitar a seleção com constantes de data.

> **Dica:** Ao salvar o cenário com uma constante de data, quando o cenário for recuperado, a constante calculará automaticamente o período atual. Exemplo: um gestor que todo último dia do mês filtra os últimos 30 dias — ao salvar o cenário com essa constante, não precisa selecionar a data manualmente.

**Filtros disponíveis**

- Empresa
- Contas bancárias
- Naturezas de lançamento
- Situações administrativas
- Tipos de cobrança

Se o filtro não for especificado, são exibidas todas as informações disponíveis de todas as empresas.

**Cenário para composição do saldo disponível**

Funciona da mesma forma que no fluxo projetado. Clique em **Novo** ao lado do campo, selecione as contas e empresas desejadas em **Alternar filtro/resultado**, filtre e salve o cenário.

> **Dica:** Recomenda-se selecionar as mesmas informações tanto na tela de Filtro do fluxo realizado quanto na tela de Cenário para composição do saldo disponível, para garantir consistência na análise.

**Opções adicionais**

- **Considerar como abertos títulos baixados, cujos lançamentos bancários ainda não foram conciliados** — Desconsidere do resultado todos os títulos sem conciliação. Ideal para análises que consideram apenas valores efetivamente entrados ou saídos da conta.

- **Equiparar a data inicial e final com a data de conciliação** — Muda o campo **Período de baixa** para **Período de conciliação**, usando como base a data gerada pelo módulo Disponível. No resultado, nenhum título sem conciliação será exibido.

**Tela de resultado — campos principais**

| Campo | Descrição |
|-------|-----------|
| **1 — Visão** | Por período ou agrupado pelo plano financeiro das naturezas de lançamento |
| **2 — Data do saldo** | Dia anterior em relação à data inicial do período de baixa |
| **3 — Tipo de visualização** | Diária, semanal ou mensal |
| **4 — Saldo conciliado** | Valor resultante da conciliação do módulo Disponível na data do saldo |
| **5 — Saldo empresa** | Valor resultante de todas as baixas no período anterior, mesmo não conciliadas |
| **6 — Saldo anterior** | Repete o valor do campo 5, trazendo o saldo da empresa antes da geração do fluxo |
| **7 — Total a receber** | Total de títulos recebidos no período (valores em azul) |
| **8 — Total a pagar** | Total de títulos pagos no período (valores em vermelho) |
| **9 — Saldo final** | `Saldo anterior + Total a Receber – Total a Pagar` |
| **10 — Período** | Diferença entre A Receber e A Pagar de cada linha |
| **11 — Saldo acumulado** | Saldo da empresa após somar/subtrair o valor da coluna Período de cada linha |
| **12 — Saldo conciliado por período** | Saldo conciliado em cada dia, considerando apenas valores já conciliados no Disponível |

**Exemplo de cálculo do Saldo Final:**

```
Saldo Final = (Saldo anterior + Total a Receber) – Total a pagar
Saldo Final = (16.715.059,86 + 9.429.688,67) – 8.038,97
Saldo Final = R$ 26.136.709,56
```

Ao clicar duas vezes em qualquer valor da tela de resultado, é aberta a opção de **Detalhes** para análise mais aprofundada do movimento, com acesso à linha do tempo.

**Saldo Simulado**

Assim como no fluxo projetado, é possível simular cenários no fluxo realizado. Exemplo: o gestor quer verificar qual seria o saldo da empresa se pagasse uma nota de R$ 1.000.000,00 ao fornecedor, recebendo um desconto de 20%. Basta informar o valor e clicar em **Atualizar o filtro** para ver os valores ajustados.

> **Dica:** O usuário do fluxo de caixa sempre analisa o **saldo conciliado** para apurar a margem de diferença entre o que foi baixado no sistema e o que consta no extrato bancário, evitando análises incorretas na tomada de decisões.
