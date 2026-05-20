# Parcelamento Otimizado — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Por que as empresas fazem isso?](#por-que-as-empresas-fazem-isso)
- [Configurações](#configurações)
- [Rotina](#rotina)
- [A partir da tabela de Prazo](#a-partir-da-tabela-de-prazo)
- [Forma manual](#forma-manual)
- [Itens da Venda](#itens-da-venda)
- [Mais sobre o Parcelamento Otimizado](#mais-sobre-o-parcelamento-otimizado)

---

## Introdução

O **Parcelamento Otimizado** é um recurso do Bimer que permite controlar os valores adicionais (encargos/juros) cobrados de acordo com o volume de parcelas: quanto maior o número de parcelas e o valor da venda, mais o consumidor paga.

**Exemplo prático:** Ao comprar um computador parcelado, o vendedor pode oferecer:
- Pagamento em até 10 dias: sem juros, com possibilidade de desconto;
- Pagamento em 2x de 30/30 dias: com um valor adicional de encargos.

O Parcelamento Otimizado configura o Bimer para controlar exatamente esses valores adicionais.

---

## Por que as empresas fazem isso?

Um dos motivos é cobrir possíveis inadimplências. Se o cliente pagaria R$ 300,00 em cada parcela, mas paga R$ 320,00 na primeira, R$ 330,00 na segunda e assim por diante, a empresa já recebe um valor adicional para compensar eventuais parcelas não recebidas.

Outro motivo é incentivar o cliente a optar por pagamentos com menos parcelas ou à vista, reduzendo o risco financeiro para a empresa.

> **Nota:** O parcelamento otimizado serve para diminuir os danos causados pela inadimplência.

---

## Configurações

Acesse **Configurador Bimer / Faturamento / Opções / Venda / Prazos** e marque as opções:
- **"Aplicar e somar os juros do prazo diretamente no valor unitário dos itens"**
- **"Habilitar a opção para parcelamento otimizado"**

Ao marcar essas opções, outras configurações são habilitadas:

- **Taxa de encargos padrão a ser utilizada na tela de parcelamento otimizada:** informe uma alíquota padrão de encargos. É um fator obtido a partir de fórmulas que os gestores projetam levando em conta prazo médio de venda, taxa de inadimplência, taxa de emissão de carnê ou boletos etc.

- **Quantidade de dias da primeira parcela:** usada na tela de Parcelamento Otimizado quando for necessário adicionar parcelas de forma manual. O sistema usa esse campo para determinar quando a primeira parcela vencerá, de acordo com a data da venda.

- **Quantidade de dias entre as parcelas:** também usado na tela de Parcelamento Otimizado quando for necessário adicionar parcelas de forma manual. Define o intervalo padrão entre parcelas.

- **Prazo médio máximo para cálculo de parcelamento sem encargos:** define o prazo máximo para fazer parcelamentos sem incidência de encargos adicionais. Por exemplo, se o cliente pagar tudo em até 15 ou 30 dias, não haverá nenhuma incidência adicional.

- **Prazo médio máximo para parcelamento otimizado:** se o valor do prazo médio calculado na tela do Parcelamento Otimizado for maior que o valor deste campo, o sistema exibe a mensagem: *"O prazo médio máximo permitido é de X dias. Verifique."*

> **Observação:** Os dois últimos campos não são obrigatórios. Se zerados: no primeiro caso, todos os parcelamentos terão encargos sem exceção; no segundo, a rotina será feita independentemente da quantidade de dias e volume de parcelas.

---

## Rotina

Após as configurações, nos módulos **Pré-pedido**, **Pedido de venda**, **Documento auxiliar de venda**, **Ordem de serviço**, **CRM (Aba Vendas Follow up)**, **Faturamento** ou **Nota Fácil**, será possível usar a rotina. Nesses módulos, nas abas de negociação, aparece o botão **Parcelamento Otimizado**.

No módulo **Pedido de Vendas**, informe os dados comuns da venda (cliente, operação e produtos). Na aba **Negociação**, informe em quantas vezes será o pagamento. Com a rotina de Parcelamento Otimizado, há duas formas de fazer:

---

## A partir da tabela de Prazo

Escolha uma tabela cadastrada em **Configurador Bimer / Financeiro / Prazos**. Após selecionar o prazo, clique no botão **Parcelamento Otimizado**.

O sistema calculará o valor adicional de encargos com base no prazo médio ponderado.

### Como o sistema calcula o novo valor a pagar?

**Obter o Prazo médio ponderado:**

```
1 – Quantidade de dias da parcela × Valor da Parcela original

Exemplo (4x de 30/30 dias, valor total R$ 4.000,00):
01ª Parcela: 30 × 1.000,00 = 30.000,00
02ª Parcela: 60 × 1.000,00 = 60.000,00
03ª Parcela: 90 × 1.000,00 = 90.000,00
04ª Parcela: 120 × 1.000,00 = 120.000,00

2 – (Soma de todos os valores do passo 01) / Valor total original:
(30.000,00 + 60.000,00 + 90.000,00 + 120.000,00) / 4.000,00
= 300.000,00 / 4.000,00
= 75,00 → Prazo médio ponderado
```

**Total de Encargos:**

```
(Valor da Venda Original × Nova taxa de encargo) / 100
(4.000,00 × 4,33) / 100 = 173,20 → Total de encargos
```

**Total a pagar:** Valor original + Total de encargos.

> **Nota:** Se a tabela de prazo utilizada já possuir incidência de juros, ao usar o botão de Parcelamento Otimizado, o valor de juros do prazo não é levado em conta — o sistema recalcula os encargos em cima do valor original.

Após verificar os valores, clique em **Gravar**.

---

## Forma manual

Se desejar, pode tratar a negociação diretamente pela tela de parcelamento otimizado sem informar o prazo previamente. Basta clicar em **Parcelamento Otimizado**, informar a quantidade de parcelas e pressionar **Enter**.

O sistema criará as parcelas usando os campos **Quantidade de dias da primeira parcela** e **Quantidade de dias entre as parcelas** configurados no Configurador Bimer.

Clique em **Recalcular** para o sistema atualizar os valores de acordo com as parcelas informadas.

> **Atenção:** Nessa forma, a forma de pagamento e natureza de lançamento das parcelas devem ser informadas manualmente.

Para alterar informações padrão de uma parcela (data de vencimento ou percentual), selecione a parcela desejada e clique em **Editar**.

---

## Itens da Venda

Ao abrir os produtos da venda, o valor do Parcelamento Otimizado é **embutido no Valor unitário do item**.

> **Atenção!** É importante que isso seja feito, pois, de forma legal, apenas empresas financeiras geram os juros de forma destacada. As empresas que não são desse ramo precisam embutir esse valor no item, como se fosse parte do preço de venda. Se for realizada de forma separada, a empresa pode ser auditada por uma fiscalização.

---

## Mais sobre o Parcelamento Otimizado

### Opção "Fixa"

Na tela de Parcelamento Otimizado, há a marcação **Fixa**. Quando você ajusta o valor de uma parcela manualmente, deve marcar esta opção; do contrário, ao clicar em **Recalcular**, o sistema divide os valores em parcelas iguais novamente.

### Simulação de cenários

No momento da venda, o vendedor pode simular vários cenários: quanto o cliente pagaria se comprasse em 3, 4, 5, 10 vezes com ou sem entrada.

**Dica:** Para diminuir o total de juros, aumente o valor da entrada ou das primeiras parcelas, ou diminua a quantidade de parcelas. Isso beneficia o cliente (paga menos) e a empresa (maior chance de receber sem perdas).

### Fechar venda sem Parcelamento Otimizado

É possível fechar uma venda parcelada sem usar o botão Parcelamento Otimizado, mesmo com a rotina em operação. Isso é útil para clientes parceiros ou aqueles que sempre pagam em dia.
