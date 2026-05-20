# Cobertura Contábil — Introdução — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [O que é Contabilidade?](#o-que-é-contabilidade)
- [Plano de Contas e Contas Contábeis](#plano-de-contas-e-contas-contábeis)
- [Fato e Lançamento Contábil](#fato-e-lançamento-contábil)
- [Contabilidade Digital](#contabilidade-digital)
- [Importância do Cobertura Contábil para a Contabilidade Digital](#importância-do-cobertura-contábil-para-a-contabilidade-digital)
- [Cobertura Contábil](#cobertura-contábil)

---

## Introdução

A **Cobertura Contábil** é o módulo do Bimer responsável por reunir as movimentações financeiras ocorridas em um período e enviá-las para o sistema de contabilidade. Ele pode trabalhar integrado ao **Pack Contábil** da Alterdata, ou gerar informações para outros sistemas de contabilidade.

---

## O que é Contabilidade?

De forma simples, **Contabilidade** é o controle do patrimônio de uma empresa. Patrimônio é tudo aquilo que a empresa possui — dinheiro no banco, imóveis, veículos, móveis, equipamentos, produtos, títulos a receber e títulos a pagar.

A composição do patrimônio pode ser dividida em:

- **Bens** — Tudo o que a empresa possui e está disponível para utilização: dinheiro em contas bancárias, imóveis, veículos, equipamentos, produtos, etc.
- **Direitos** — Títulos a receber referentes às vendas e prestações de serviço. Quando esse dinheiro entrar na conta da empresa, aumentará o valor de seus bens.
- **Obrigações** — Compromissos financeiros assumidos pela empresa: títulos a pagar, salários de colaboradores, tributos ao governo, etc. Quando pagos, diminuem o valor dos bens.

A fórmula do patrimônio líquido é:

```
Patrimônio Líquido = Bens + Direitos – Obrigações
```

**Exemplo:**

| Categoria   | Item                  | Valor          |
|-------------|-----------------------|----------------|
| Bens        | Imóvel                | R$ 300.000,00  |
| Bens        | Veículo               | R$ 50.000,00   |
| Bens        | Produtos em estoque   | R$ 40.000,00   |
| Bens        | Saldo em conta        | R$ 10.000,00   |
| Direitos    | Títulos a receber     | R$ 100.000,00  |
| Obrigações  | Títulos a pagar       | R$ 65.000,00   |

```
Patrimônio Líquido = (300.000 + 50.000 + 40.000 + 10.000) + 100.000 – 65.000
Patrimônio Líquido = R$ 435.000,00
```

---

## Plano de Contas e Contas Contábeis

Cada valor que compõe o patrimônio de uma empresa precisa estar identificado e representado. Essa identificação é feita através das **Contas Contábeis** — que possuem a mesma função das naturezas de lançamento usadas no Bimer, porém com nomenclatura contábil.

Como o número de contas contábeis é muito grande, elas são organizadas em um **Plano de Contas**, cuja estrutura mínima é:

1. **Ativo** — Bens imóveis e direitos que pessoas (físicas ou jurídicas) têm.
2. **Passivo** — Obrigatoriedades que devem ser pagas periodicamente.
3. **Receita** — Montante obtido com a venda de um produto, prestação de serviços, etc.
4. **Despesa** — Gastos realizados.

Cada conta contábil é composta por **Descrição**, **código reduzido** e **classificação**. Existem dois tipos de contas:

- **Sintéticas** — Criam agrupamentos de contas; não podem ser usadas diretamente em lançamentos.
- **Analíticas** — São as que realmente podem ser usadas em um lançamento contábil.

**Exemplo resumido de plano de contas:**

```
1. Ativo
   1.1 Circulante
       1.1.1 Disponível
       1.1.2 Aplicações Financeiras
       1.1.3 Clientes
       1.1.4 Outras contas a receber
       1.1.5 Estoques
   1.2 Não Circulante
2. Passivo
   2.1 Circulante
   2.2 Não Circulante
   2.3 Patrimônio Líquido
3. Despesas
   3.1 Custos diretos da produção
   3.2 Despesas Operacionais
4. Receita
   4.1 Receita Bruta de vendas e serviços
   4.2 Dedução de Receita Bruta
   4.3 Receita Operacional
```

---

## Fato e Lançamento Contábil

Tudo aquilo que causa modificação no patrimônio da empresa é considerado um **fato contábil** — compra de mercadoria, venda de produto, recebimento ou pagamento de título, etc. Todo fato contábil precisa ser registrado na contabilidade por meio de um **Lançamento Contábil**.

Um lançamento contábil tem sempre dois pontos: a **origem** e o **destino** do valor.

Um lançamento contábil deve conter:

- Data do fato contábil
- Conta contábil de débito
- Conta contábil de crédito
- Histórico do lançamento

> **Importante:** Em contabilidade, **CRÉDITO** representa a **Origem** e **DÉBITO** representa o **Destino**. Não faça a associação matemática de crédito = soma e débito = subtração.

**Exemplos de lançamentos:**

```
a) Integralização do capital inicial:
   Débito  (destino) → Caixa (Ativo)
   Crédito (origem)  → Capital (Passivo)

b) Compra de materiais a prazo:
   Débito  (destino) → Materiais (Ativo)
   Crédito (origem)  → Fornecedores (Passivo)

c) Compra de terreno à vista:
   Débito  (destino) → Terrenos (Ativo)
   Crédito (origem)  → Caixa (Ativo)
```

---

## Contabilidade Digital

A **contabilidade digital** é uma forma de simplificar rotinas contábeis que anteriormente eram realizadas de maneira manual, permitindo aos contadores integrar as informações das empresas de maneira simples e rápida através da internet.

Seus principais benefícios são:

- Agilização de processos
- Automação de rotinas
- Maior assertividade na obtenção dos dados contábeis
- Substituição da escrituração em papel pela transmissão digital ao fisco

---

## Importância do Cobertura Contábil para a Contabilidade Digital

A Cobertura Contábil é o aplicativo responsável por gerar e enviar lançamentos contábeis do Bimer para o **Pack Contábil da Alterdata (WCont)**.

Para que a geração e o envio dos lançamentos ocorram corretamente, é necessário configurar a Cobertura vinculando as contas contábeis às pessoas, naturezas de lançamentos e contas (bancárias e caixa).

Ela é fundamental para a contabilidade digital pois permite:

- Obtenção das informações das movimentações financeiras das empresas para declaração ao fisco através do **SPED ECD** (Sistema Público de Escrituração Digital – Escrituração Contábil Digital).
- Emissão de **Balanço** e **DRE** (Demonstração do Resultado do Exercício).
- Integração direta com o sistema contábil, reduzindo erros nos lançamentos.

---

## Cobertura Contábil

As explicações sobre configuração do módulo estão divididas nos seguintes blocos:

- **Configurações gerais do módulo**
- **Contas a pagar** — Como configurar e gerar os lançamentos
- **Contas a receber** — Como configurar e gerar os lançamentos
- **Compras** — Como configurar e gerar os lançamentos referentes a movimentações de estoque pelas notas fiscais de compras
- **Vendas** — Como configurar e gerar os lançamentos referentes a movimentações de estoque pelas notas fiscais de venda

> **Nota:** Para aprofundamento nas práticas contábeis e configuração detalhada da Cobertura Contábil, acesse o treinamento de especialização disponível no **Portal UCA >> Bimer >> Cursos >> Especialização**.
