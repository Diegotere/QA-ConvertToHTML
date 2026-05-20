# Redução da Comissão por Desconto ou Prazo Médio Concedido — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Redução de Comissão no Bimer](#redução-de-comissão-no-bimer)
  - [Configurações Básicas](#configurações-básicas)
  - [Configurações para Redução por Desconto Concedido](#configurações-para-redução-por-desconto-concedido)
  - [Configurações para Redução por Prazo Médio](#configurações-para-redução-por-prazo-médio)
- [Utilização do Sistema](#utilização-do-sistema)

---

## Introdução

O pagamento de comissão é uma excelente ferramenta de gestão comercial. Através dela a empresa cria incentivos para que sua equipe comercial venda mais, buscando oferecer melhores produtos, melhor atendimento aos clientes e outras vantagens.

Outra política de incentivo de vendas é a **concessão de descontos**. Nela, a equipe comercial tem autonomia de conceder descontos como argumento nas vendas mais complexas.

Contudo, os descontos precisam ser utilizados com critério. Não é interessante para a empresa sair dando desconto, principalmente altos, em tudo quanto é venda.

Ainda na linha de políticas de incentivo às vendas, outro argumento que pode ser utilizado é o **parcelamento do recebimento** do valor da venda. Por exemplo, a empresa pode adotar padrões de negociação determinando que, dependendo do valor adquirido pelo cliente, ele pode pagar em 2, 3, 4 até 10 vezes sem juros.

Assim como os descontos, o parcelamento da venda também precisa ser usado com critério, pois prazos de recebimento muito longos podem comprometer o fluxo de caixa da empresa.

### O problema da combinação errada

Uma combinação errada de comissão, desconto e parcelamento pode levar a empresa a ter prejuízo na venda de alguns produtos ou serviços.

Quando um gestor define um percentual de comissão, ele já considera esse valor no preço de venda de um produto, para poder alcançar a margem de lucro desejada. O valor da venda de um produto precisa ser capaz de pagar o custo do produto, os custos das vendas, a comissão, e outros custos e despesas, e ainda sobrar uma parte como margem de lucro.

Imagine que um gestor fez todo o cálculo necessário para compor o preço de venda, e percebeu que sua margem de lucro é muito apertada. Se um vendedor dá um desconto muito alto (mesmo que dentro do teto estipulado pela empresa), a margem de lucro do produto cairia ainda mais. Ou, que o vendedor conceda um prazo muito longo de recebimento, diluindo muito o retorno financeiro da venda.

Se houver uma combinação de desconto alto e prazo longo então, os danos podem ser ainda maiores.

### A solução

Algumas empresas adotam a seguinte política com sua equipe comercial: o percentual (cheio) de comissão é X. Porém, se forem concedidos descontos ou o recebimento for parcelado, o percentual de comissão é **reduzido progressivamente**. Quanto maior o desconto ou prazo médio, maior será a redução do percentual de comissão.

Dessa forma, a empresa cria políticas de incentivos às vendas, mas também se protege de negociações comerciais danosas ao resultado financeiro.

---

## Redução de Comissão no Bimer

O Bimer contém configurações para auxiliar às empresas que desejam adotar a política de redução de comissão por desconto ou parcelamento. É possível configurá-lo para as duas situações.

### Configurações Básicas

As configurações para cálculo da comissão existentes nos cadastros de **produtos**, **prazos**, **operações**, **clientes**, **representantes** e **funcionários** continuam valendo e devem ser feitas para que o sistema consiga fazer os cálculos.

> **Nota:** Se você tiver dúvidas sobre como configurar o Bimer para calcular comissão, consulte o manual **"Comissão"** disponível no Portal UCA » Bimer » Materiais » Manuais.

Essas configurações são necessárias para que o sistema saiba qual o percentual cheio da comissão o vendedor teria direito. E, se for necessário, reduzir esse percentual.

---

### Configurações para Redução por Desconto Concedido

Caminho: **Configurador Bimer » Faturamento » Opções » Cálculo de comissão » Alíquotas » Desconto**

Marque a opção **"Reduzir a alíquota de comissão do item conforme as faixas de descontos informadas na tabela abaixo"**.

Clique no sinal de adição **(+)** para incluir as faixas de redução de alíquota:

| Campo | Descrição |
|-------|-----------|
| **Al. Desconto inicial** | Alíquota de desconto a partir da qual o sistema aplicará o percentual de redução. |
| **Al. Desconto final** | Teto do desconto para aplicação do percentual de redução. Na última faixa, deixe em branco. |
| **Al. Redução Faturamento** | Percentual de redução a ser aplicado nas comissões pagas na emissão da nota fiscal. |
| **Al. Redução duplicata** | Percentual de redução a ser aplicado nas comissões pagas no recebimento do título. |

> **Nota:** Se a empresa tiver uma faixa de desconto inicial em que não haja redução da comissão (ex.: desconto de até 3% não tem redução), a primeira faixa deve iniciar em 3,01%. A faixa em que não há redução não precisa ser cadastrada.

No rodapé da tela existem duas opções de aplicação da redução:
- **Considerar somente os descontos lançados diretamente nos itens**
- **Considerar os descontos lançados nos itens mais o desconto geral**

**Exemplo de configuração:**

> *[Imagem: tabela de faixas de desconto com as colunas de alíquota inicial, final e percentuais de redução]*

- Desconto até 3%: comissão sem redução.
- Desconto entre 3,01% e 5%: alíquota de comissão reduzida em 1 ponto percentual.
- Desconto entre 5,01% e 7%: redução da alíquota de comissão de 2 pontos percentuais.
- E assim por diante.

---

### Configurações para Redução por Prazo Médio

Caminho: **Configurador Bimer » Faturamento » Opções » Cálculo de comissão » Alíquotas » Prazo médio**

Marque a opção **"Reduzir a alíquota de comissão conforme as faixas de prazo médio informadas na tabela abaixo"**.

Clique no sinal de adição **(+)** para incluir as faixas de redução de alíquota:

| Campo | Descrição |
|-------|-----------|
| **Nr. dias prazo médio inicial** | Prazo médio a partir do qual o sistema aplicará o percentual de redução. |
| **Nr. dias prazo médio final** | Teto de prazo médio para aplicação do percentual de redução. Na última faixa, deixe em branco. |
| **Al. Redução Faturamento** | Percentual de redução a ser aplicado nas comissões pagas na emissão da nota fiscal. |
| **Al. Redução duplicata** | Percentual de redução a ser aplicado nas comissões pagas no recebimento do título. |

> **Nota:** Se a empresa tiver uma faixa de prazo médio em que não haja redução (ex.: prazo médio de até 34 dias não tem redução), a primeira faixa deve iniciar em 35 dias. A faixa em que não há redução não precisa ser cadastrada.

#### Como o sistema calcula o prazo médio?

O prazo médio é calculado a partir do somatório dos dias para cálculo do vencimento, dividido pelo número de parcelas.

**Exemplo:**

Pagamento em 04 parcelas com 20, 45, 90 e 120 dias:

```
Prazo médio = (20 + 45 + 90 + 120) / 4
Prazo médio = 275 / 4
Prazo médio = 68,75 dias
Prazo médio (arredondado) = 69 dias
```

---

## Utilização do Sistema

Não há nenhuma mudança na rotina de vendas. Basta criar o pedido de vendas, ou mesmo fazer uma NF-e avulsa no Faturamento. Todo o trabalho de redução da alíquota de comissão é feito **automaticamente** pelo sistema, depois de configurado corretamente.

As configurações funcionam nas vendas feitas pelos módulos: **Pré-pedidos**, **Pedido de venda**, **CRM Vendas** e **Faturamento**.

### Como o sistema faz o cálculo da redução?

As alíquotas cheias de comissão da venda são diminuídas das alíquotas de redução informadas nas configurações.

**Exemplo:** Alíquota de comissão do vendedor de 5%, porém, devido a um desconto haverá uma redução de 1%, então sua alíquota final será **4%**.

> **Dica:** Configure o sistema. Cadastre um pedido de vendas sem desconto e observe a alíquota de comissão do vendedor. Em seguida, retorne ao pedido de vendas (ou crie um novo) e dê um desconto (aplicável às faixas configuradas) e observe a nova alíquota de comissão.
