# Convênio ICMS — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)

---

## Introdução

De acordo com o Portal Tributário, os **Convênios de ICMS** são normas complementares das leis, tratados e convenções. Uma vez firmado um Convênio entre 2 ou mais Estados ou DF, este deverá ser ratificado (ou não) pelas respectivas Assembleias Estaduais.

No sistema ERP, o convênio de ICMS nada mais é que um **complemento do que foi configurado no Cálculo de ICMS**. É uma forma de hierarquia de configurações no sistema: caso haja um cálculo de ICMS com convênio vinculado, o sistema priorizará as configurações contidas no convênio.

> **Atenção:** As configurações que serão apresentadas a seguir foram criadas mediante solicitação de clientes específicos. Os cálculos foram feitos de acordo com a legislação e convênios apresentados por estes clientes. Então, as configurações só atenderão clientes que tenham convênios que seguem as mesmas regras. Caso algum cliente tenha alguma necessidade diferente, será necessário verificar com a supervisão sobre o que fazer.

---

## Configurações

Caminho: **Configurador > Estoque > Tributos > Convênio de ICMS**

> *[Imagem: tela do Convênio de ICMS com as configurações separadas entre Venda/saída e Compra/entrada]*

> **Atenção:** Perceba que as configurações estão separadas entre **Venda/saída** e **Compra/entrada**.

### Campos principais

- **Código** — código de identificação/localização do convênio.
- **Descrição** — nome que se dá ao convênio para facilitar a identificação.

### Alíquota resultante para benefícios fiscais

**ICMS:**

Define a alíquota que compõe o cálculo de ICMS. Caso esteja informada alguma alíquota, o ICMS será calculado a partir da alíquota informada no convênio, **ignorando** a alíquota definida no cálculo de ICMS.

**Substituição Tributária:**

Define quanto em (%) será utilizado para a base de cálculo de ICMS ST.

**Exemplo:**
```
Produto:                          R$ 100,00
ICMS:                             12%
MVA:                              40%
Substituição Tributária (Convênio): 60%

Base de cálculo de ICMS ST = 100,00 × 60% = 60,00
MVA                        = 60,00 × 40%  = 24,00
Base de cálculo de ICMS ST = 60,00 + 24,00 = 84,00
ICMS                       = 100,00 × 12%  = 12,00
ICMS ST                    = 84,00 - 12,00  = 72,00
```

### Alíquota resultante de PIS e COFINS

Com esta opção preenchida, o sistema reduzirá da base de ICMS a porcentagem informada que é correspondente ao PIS/COFINS.

Esta opção é utilizada na **Nota Fiscal de Entrada**. Na operação de compra, na aba ICMS deverá estar marcada: **"Possui redução de base de ICMS"**.

**Exemplo:**
```
Valor do produto              = R$ 100,00
Alíquota de ICMS              = 12%
Alíquota resultante PIS/COFINS = 10%

Base de cálculo de ICMS reduzida = 100,00 - (100,00 × 10%) = 90,00
ICMS                             = 90,00 × 12%              = 10,80
```

### Alíquota interna de ICMS

A alíquota definida neste campo será utilizada para o cálculo da substituição tributária.

**Exemplo:**
```
Origem: SP | Destino: SC
Alíquota de ICMS Interestadual: 12%
Alíquota interna SP:            18%
Alíquota Interna SC:            17%
Valor do produto:               R$ 1.000,00
Convênio de ICMS - Alíquota Interna de ICMS: 4%

Cálculo da Substituição Tributária:
ST = (Base de cálculo + MVA × Alíquota Interna ICMS destino) - ICMS
ST = (1.000,00 + 400,00 × 19%) - 120,00
ST = R$ 146,00
```

> **Nota:** Sem o convênio preenchido, no cálculo da substituição tributária, seria utilizada a alíquota interna da UF de destino: SC 17%.

### Dedução de alíquota de ICMS interna / Alíquota de dedução de ICMS

Com esta opção preenchida, o sistema fará o cálculo da substituição tributária normalmente de acordo com o MVA e após acrescentará a alíquota definida ao valor total.

**Exemplo:**
```
Alíquota de ICMS do cálculo de ICMS = 12%
MVA                                  = 40%
Dedução de alíquota interna de ICMS  = 20%
ICMS Interno                         = 20%

Cálculo ST:
ST = (Valor do produto + MVA × Alíquota Interna ICMS) - ICMS
ST = (100,00 + 40,00 × 20%) - 12,00
ST = R$ 16,00

ST total = 16,00 (ST) + 20% da base de cálculo (definido no convênio)
ST Total = 16,00 + 20,00 = R$ 36,00
```

### Alíquotas internas de ICMS por característica de pessoa

Torna-se possível definir a alíquota de ICMS que será utilizada no cálculo de ICMS por **característica** também definida para pessoa.

**Como configurar:**

1. Acesse **Configurador >> Geral >> Característica** e crie uma característica (ex.: "Alíquota de ICMS").
2. Acesse o módulo **Pessoa** e vincule esta característica à pessoa na aba **Características**.
3. Informe esta característica no convênio de ICMS.

Sempre que for emitida nota para esta pessoa com este cálculo e convênio de ICMS vinculado, o sistema utilizará a alíquota de ICMS informada. Para isto, deverá utilizar uma operação para **Consumidor final Não contribuinte**.

Na mesma janela de inserção para a alíquota de ICMS por característica de pessoa há a opção **"Dedução de alíquota de ICMS interna"**, que funciona da mesma forma, porém será utilizada quando a pessoa está vinculada a uma característica configurada para o convênio.

> *[Imagem: tela de configuração de alíquotas internas de ICMS por característica de pessoa no Convênio de ICMS]*

### Prioridade da alíquota de lucro (MVA)

**Cálculo de ICMS / Classificação fiscal:** Define se a alíquota de MVA utilizada para o cálculo da Substituição Tributária será resgatada do **Cálculo de ICMS** ou da **Classificação Fiscal**.

### Vinculação ao Cálculo de ICMS

Após criado o convênio com as configurações necessárias, este poderá ser vinculado ao cálculo de ICMS em:

**Configurador >> Estoque >> Tributos >> Cálculo de ICMS >> Convênio**
