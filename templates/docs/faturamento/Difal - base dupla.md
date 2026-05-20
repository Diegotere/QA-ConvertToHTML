# DIFAL - Base Dupla — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Vamos relembrar](#vamos-relembrar)
  - [Fator gerador](#fator-gerador)
  - [Responsabilidade pelo recolhimento do tributo](#responsabilidade-pelo-recolhimento-do-tributo)
- [Cálculo com base única](#cálculo-com-base-única)
- [Cálculo com base dupla](#cálculo-com-base-dupla)
  - [1 - Identificar o ICMS interestadual](#1---identificar-o-icms-interestadual)
  - [2 - Calcular a base de cálculo 1](#2---calcular-a-base-de-cálculo-1)
  - [3 - Calcular a base de cálculo 2](#3---calcular-a-base-de-cálculo-2)
  - [4 - Calcular o ICMS Interno](#4---calcular-o-icms-interno)
  - [5 - Calcular o DIFAL](#5---calcular-o-difal)
- [Esclarecimento importante](#esclarecimento-importante)

---

## Introdução

Este manual serve de apoio quando o cliente entrar com o assunto "Difal com base dupla". Serão relembrados tópicos importantes sobre o Difal e explicada a diferença entre o cálculo com base única e base dupla.

---

## Vamos relembrar

### Fator gerador

Os fatores responsáveis pela geração do DIFAL são:

- **Operação interestadual**; e
- **Para consumidor final** — podendo ser consumidor final contribuinte ou não contribuinte.

### Responsabilidade pelo recolhimento do tributo

- **Consumidor final contribuinte de ICMS:** a responsabilidade do recolhimento do DIFAL é do **destinatário** (quem está comprando o produto).
- **Consumidor final não contribuinte de ICMS:** a responsabilidade do recolhimento do DIFAL é do **remetente** (quem está vendendo o produto).

---

## Cálculo com base única

A fórmula para calcular o DIFAL pela base única (imposto por fora) é a que o sistema executa:

```
DIFAL = Valor da Operação * (Alíquota interna – Alíquota interestadual)
```

**Exemplo:**

| Dado | Valor |
|------|-------|
| Valor da operação | R$ 100,00 |
| Alíquota ICMS Interestadual do Mato Grosso | 12% |
| Alíquota ICMS Interna de Minas Gerais | 18% |

**Cálculo na prática:**

```
DIFAL = 100 * (0,18 – 0,12)
DIFAL = 100 * 0,06
DIFAL = R$ 6,00
```

---

## Cálculo com base dupla

Este é o DIFAL para não contribuintes, instituído pela **EC 87/2015** e devidamente regulamentado pela **Lei Complementar 190/2022**. A base dupla (imposto por dentro) é chamada assim por exigir o cálculo de duas bases de cálculo distintas: **Base de cálculo 1** e **Base de cálculo 2**.

O processo é descrito em 5 partes:

### 1 - Identificar o ICMS interestadual

Deve ser identificado o ICMS Interestadual recolhido pelo remetente da mercadoria:

```
Valor ICMS Interestadual = Valor da Operação * Alíquota Interestadual
```

**Exemplo (usando os valores anteriores):**

```
Valor ICMS Interestadual = 100 * 0,12
Valor ICMS Interestadual = R$ 12,00
```

---

### 2 - Calcular a base de cálculo 1

O objetivo é retirar o ICMS interestadual embutido no valor da operação:

```
Base de Cálculo 1 = Valor da Operação – Valor ICMS interestadual
```

```
Base de Cálculo 1 = 100 – 12
Base de Cálculo 1 = R$ 88,00
```

---

### 3 - Calcular a base de cálculo 2

Nesta etapa deve ser encontrada a base de cálculo para o ICMS interno, com inclusão do ICMS interno na base de cálculo:

```
Base de Cálculo 2 = Base de Cálculo 1 / (1 – Alíquota Interna)
```

```
Base de Cálculo 2 = 88 / (1 – 0,18)
Base de Cálculo 2 = 88 / 0,82
Base de Cálculo 2 = R$ 107,31
```

---

### 4 - Calcular o ICMS Interno

Para calcular o ICMS interno, multiplica-se a base de cálculo 2 pela alíquota interna:

```
ICMS Interno = Base de Cálculo 2 * Alíquota Interna
```

```
ICMS Interno = 107,31 * 0,18
ICMS Interno = R$ 19,31
```

---

### 5 - Calcular o DIFAL

Por fim, o valor do DIFAL é a diferença entre o ICMS interno e o ICMS interestadual (calculado no Passo 1):

```
DIFAL = ICMS interno – ICMS interestadual
```

```
DIFAL = 19,31 – 12,00
DIFAL = R$ 7,31
```

---

## Esclarecimento importante

O cálculo por base dupla é uma exigência de diversas Unidades Federativas, fundamentada no **Convênio ICMS 142/2018**, que prevê que o imposto deve integrar sua própria base de cálculo (cálculo "por dentro").

**Comparativo dos resultados:**

| Método | Valor do DIFAL |
|--------|---------------|
| Base única | R$ 6,00 |
| Base dupla | R$ 7,31 |
| **Diferença** | **R$ 1,31 (~22% a mais)** |

Essa diferença ocorre porque o cálculo de base dupla utiliza a alíquota interna de destino duas vezes: no passo 3 (para encontrar a base de cálculo 2) e no passo 4 (para encontrar o valor de ICMS interno).

**Como isso fica no Bimer?**

O Bimer realiza o cálculo de DIFAL de **base dupla e base única**, podendo selecionar qual base será utilizada por CFOP em:

**Configurador / Estoque / CFOP / Impostos / DIFAL / Tipo de base para o cálculo do DIFAL**

O cliente também poderá seguir o que é solicitado pelo Fisco do seu estado.

> **Recomendação do setor de Inteligência Fiscal:** Se o cliente solicitar o cálculo de DIFAL por base dupla, a recomendação é que o cliente utilize a maior alíquota interna de ICMS do país para calcular o ICMS da venda e adicione o valor de ICMS encontrado no valor de venda de seu produto. Dessa forma, a base de cálculo atenderá às demandas da base dupla e o sistema calculará o DIFAL normal, mas com a base de cálculo exigida pelo Fisco do estado.

**Por que o IF indica isso?**

Seguindo essa orientação, se o cliente vender para o estado da maior alíquota de ICMS do país, o imposto será calculado corretamente (seguindo a base dupla exigida pelo Fisco). Se o cliente não estiver vendendo para aquela UF de destino, seu lucro será maior. Assim, em todos os casos, o cliente não será prejudicado.

> **Nota:** Você poderá verificar os atendimentos **0029737660** e **0029731061** com o posicionamento do IF sobre o assunto.
