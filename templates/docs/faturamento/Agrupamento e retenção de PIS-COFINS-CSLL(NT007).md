# PIS, COFINS e CSLL na NFS-e (Adequação NT 007) — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Imposto Devido x Retido](#imposto-devido-x-retido)
- [Configurações](#configurações)
- [Representação da Estrutura em XML](#representação-da-estrutura-em-xml)
- [Importante](#importante)
- [Comportamento no Financeiro](#comportamento-no-financeiro)
- [Códigos disponíveis para tpRetPisCofins](#códigos-disponíveis-para-tpretpiscofins)
- [Empresas do Lucro Real](#empresas-do-lucro-real)

---

## Introdução

A Nota Técnica SE/CGNFS-e nº 007 trouxe uma mudança na forma como o governo exige a declaração do **PIS**, **COFINS** e **CSLL** nas Notas de Serviço.

O objetivo principal é o **agrupamento das retenções**: agora, os valores retidos de PIS, COFINS e CSLL deixam de ser enviados em campos individuais e passam a ser somados em uma única estrutura no XML (a tag `vRetCSLL`). Essa mudança organiza a comunicação com o Portal Nacional, separando o que é **Imposto Devido** (responsabilidade da sua empresa) do que é **Imposto Retido** (descontado pelo seu cliente), garantindo que a nota seja validada sem erros fiscais.

> **Atenção:** Esta funcionalidade está disponível a partir da versão **11.02.03.26** do Bimer.

---

## Imposto Devido x Retido

### Imposto Devido (O que a sua empresa paga)

O imposto devido é a obrigação tributária que nasce da própria venda ou prestação de serviço. É o valor que a empresa "deve" ao governo por ter gerado receita.

- **Quem paga:** a sua empresa, através de uma guia de recolhimento;
- **Na prática:** se você prestou um serviço de R$ 1.000,00 e a alíquota de **PIS devido** é 0,65%, sua empresa deve pagar R$ 6,50 ao governo por essa operação;
- **No sistema:** ao marcar as opções de **Imposto Devido**, o Bimer calcula esse valor para que ele seja declarado na nota como um débito da sua empresa.

### Imposto Retido (O que é descontado no pagamento)

O **imposto retido** (ou retenção na fonte) ocorre quando o cliente "antecipa" o pagamento do imposto. Em vez de ele te pagar o valor total e você pagar ao governo depois, o cliente já desconta esse valor do seu pagamento e ele mesmo repassa ao fisco.

- **Quem paga:** o seu cliente (ele retém do seu pagamento);
- **Na prática:** se o mesmo serviço de R$ 1.000,00 tiver retenção de PIS, o cliente vai te pagar apenas R$ 993,50. Os R$ 6,50 que faltam não são um "prejuízo", mas, sim, um imposto que o cliente já pagou em seu nome;
- **No sistema:** ao configurar as **Alíquotas Retidas**, o Bimer subtrai esses valores do seu Contas a Receber (o título financeiro).

---

## Configurações

### Na empresa

Caminho: **Configurador / Geral / Empresas / aba "Emissão de notas" / NFSe**

Habilitar: **Agrupar Retenções Federais (PIS/COFINS/CSLL)**

**Como funciona com a marcação:**

Os valores de PIS e COFINS devidos agora têm suas próprias tags (`vPis` e `vCofins`). Já os valores retidos de PIS/COFINS/CSLL são somados e enviados obrigatoriamente na tag `vRetCSLL`.

O Portal Nacional usará a tag `tpRetPisCofins` para distinguir quais impostos foram retidos.

> **Atenção:** A marcação na empresa é obrigatória apenas para clientes cujas prefeituras utilizem o **Portal Nacional**. Caso a prefeitura utilize provedor próprio, essa marcação não é necessária.

### Nas operações

No **Cadastro de Operações** (**Faturamento / Cadastros / Operações**), houve a separação definitiva das alíquotas.

Agora terá um campo para alíquota de **PIS/COFINS/CSLL devidos** e outro campo para **PIS/COFINS/CSLL retidos**.

> *[Imagem: tela do Cadastro de Operações com os campos separados de alíquotas devidas e retidas]*

Verifique também as marcações:

- **Calcula PIS devido (NFS-e) / COFINS devido (NFS-e):** ao marcar esta opção, o sistema fará o cálculo do PIS/COFINS devido para as Notas Fiscais de Serviço e lançará esta informação no XML. O imposto poderá ser tributado tanto para Pessoa Física ou Pessoa Jurídica.
- **Possui retenção de PIS / COFINS / CSLL:** ao marcar esta opção será feita a retenção dos impostos.

> **Dica:** Precisa duplicar a operação? **NÃO!** O sistema realiza a migração automática das alíquotas antigas para os novos campos. O cliente só precisará criar uma nova operação se tiver o cenário raro de precisar de alíquotas diferentes para o "Devido" e para o "Retido" na mesma nota. Caso contrário, a operação atual continua funcionando normalmente.

---

## Representação da Estrutura em XML

A tag `vRetCSLL` passará a consolidar a soma dos valores de retenção de PIS, COFINS e CSLL, enquanto os valores devidos de PIS e COFINS continuarão sendo informados em suas tags específicas (`vPis` e `vCofins`).

A validação do sistema será baseada na tag `tpRetPisCofins`, que aceitará apenas o código `0` ou o intervalo de `3` a `9`. Os códigos `1` e `2` serão descontinuados e removidos do schema da NFS-e assim que o preenchimento dos grupos relativos ao IBS e à CBS se tornar obrigatório.

### XML com PIS/COFINS devidos sem retenção

> *[Imagem: XML do BIMER com PIS/COFINS devidos sem retenção]*

> *[Imagem: XML do Portal Nacional correspondente]*

Como o PIS/COFINS/CSLL devidos foram mantidos em suas tags de valores, serão preenchidas as tags `vPis` e `vCofins` e o tipo de retenção.

### XML com PIS/COFINS/CSLL retidos

> *[Imagem: XML do BIMER com PIS/COFINS/CSLL retidos]*

> *[Imagem: XML do Portal Nacional correspondente]*

Com os tributos retidos, os valores serão agrupados na tag `vRetCSLL` e preenchido o tipo de retenção.

> **Atenção:** Estas regras legais se aplicam apenas ao Faturamento de NFS-e emitidas pelo **Portal Nacional**, independente disso, as configurações na operação afetarão todos os documentos fiscais que calculem PIS e COFINS (devido ou retido). Apenas a forma como a informação é levada no XML é referente à NFS-e.

---

## Importante

### Valores no Faturamento do BIMER

Quando PIS/COFINS/CSLL for **devido**, o valor aparecerá na capa da nota.

> *[Imagem: capa da nota com valores de PIS/COFINS devidos destacados]*

Quando forem **retidos**, você pode ver na aba **"Negociação"** no campo **"Valor"** — será subtraído o valor retido da nota.

> *[Imagem: aba Negociação com valor retido subtraído do total]*

> **Atenção:** A partir da versão **11.02.03.28** o valor do PIS, COFINS e CSLL retido fica visível durante a edição da nota, permitindo uma conferência rápida e precisa dos valores que compõem o total líquido.

> **Dica:** Uma mesma nota fiscal pode apresentar, simultaneamente, o cálculo do imposto retido e do imposto devido.

---

## Comportamento no Financeiro

As retenções configuradas nesta rotina continuarão sendo abatidas do valor final a pagar e dos títulos gerados no módulo financeiro, mantendo a integridade do seu fluxo de caixa e das contas a receber.

---

## Códigos disponíveis para tpRetPisCofins

| Código | Descrição |
|--------|-----------|
| 0 | PIS/COFINS/CSLL Não Retidos |
| 1 | PIS/COFINS Retido *(será descontinuado)* |
| 2 | PIS/COFINS Não Retido *(será descontinuado)* |
| 3 | PIS/COFINS/CSLL Retidos |
| 4 | PIS/COFINS Retidos, CSLL Não Retido |
| 5 | PIS Retido, COFINS/CSLL Não Retido |
| 6 | COFINS Retido, PIS/CSLL Não Retido |
| 7 | PIS Não Retido, COFINS/CSLL Retidos |
| 8 | PIS/COFINS Não Retidos, CSLL Retido |
| 9 | COFINS Não Retido, PIS/CSLL Retidos |

> **Nota:** Os tipos **1** e **2** serão descontinuados assim que o preenchimento do grupo IBS/CBS se tornar obrigatório no documento fiscal.

*Fonte: Documentação da Nota Técnica Nº 007*

---

## Empresas do Lucro Real

No regime do **Lucro Real**, o PIS e a COFINS são regidos pelo princípio da **não-cumulatividade**.

Essa sistemática permite a utilização de alíquotas distintas para o imposto retido e o imposto devido, garantindo que o destaque nas notas fiscais ocorra de forma precisa e em conformidade com a legislação.
