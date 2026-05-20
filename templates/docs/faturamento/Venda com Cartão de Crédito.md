# Venda com cartão e/ou financeira — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações necessárias](#configurações-necessárias)
- [Funcionamento da rotina](#funcionamento-da-rotina)

---

## Introdução

Quando as vendas são realizadas utilizando formas de pagamento configuradas como **cartão** ou **financeira**, o responsável por pagar a empresa não é o cliente que comprou o produto, mas sim, a **administradora/financeira** que autorizou a venda.

Neste material você aprenderá desde as configurações necessárias até a conciliação do recebimento dos valores.

---

## Configurações necessárias

### Pessoa – Cadastro de convênio

Para trabalhar com a rotina de venda com cartão de crédito e/ou financeira é necessário, antes de mais nada, cadastrar no **Pessoa.exe**, categoria **Convênio**, as administradoras de cartões de crédito e as financeiras com as quais a empresa possui contrato.

Na aba **"Adicionais"**, pode-se informar as naturezas de lançamento correspondentes às taxas cobradas nas transações:

- **Natureza de lançamento para TAC Empresa** – TAC Empresa é a Taxa de Abertura de Crédito que algumas empresas cobram a seus clientes, em vendas financiadas;
- **Natureza de lançamento para TAC Convênio** – TAC Convênio é a Taxa de Abertura de Crédito que as financeiras cobram, em vendas financiadas. Esse valor pode ser repassado aos clientes ou a empresa assumir como uma despesa na venda;
- **Natureza de lançamento para Alíquota de convênio** – Corresponde ao percentual que a administradora de cartões ou financeira retém sobre o valor bruto da venda, ao pagar a empresa.

> **Nota:** Caso o cliente tenha dúvidas sobre os níveis das naturezas de lançamento, como ativo, passivo, receita ou despesa, é necessário verificar junto à contabilidade.

> *[Imagem: Tela de cadastro do convênio com a aba Adicionais e os campos de natureza de lançamento]*

### Forma de pagamento

#### Cartão de crédito

No **Configurador Bimer » Financeiro » Forma de pagamento**, na aba **"PDV"** existe o campo **"Adquirente"**, que será utilizado na área de **"Dados de transação do cartão"** na tela de parcela da aba **"Negociação"** do pedido de venda e faturamento.

Esta informação é utilizada em algumas integrações, como com o **Conciliare** e com o **Muven**, pois o pedido já é integrado com os dados de pagamento. No entanto, é possível preencher manualmente, desde que o tipo da forma de pagamento seja cartão (débito ou crédito).

Ao selecionar **"Cartão"**, será habilitada a aba **"Convênio"**. O campo **"Convênio"** se refere à administradora do cartão de crédito que a empresa possui convênio.

> *[Imagem: Tela de cadastro da forma de pagamento com a aba Convênio habilitada após selecionar Cartão]*

Clique no sinal de **"+"** na grid **"Convênio x Parcela"** para incluir as informações contratuais entre a empresa e a administradora do cartão. Caso haja mais de uma empresa conveniada à administradora de cartão de crédito, é necessário configurar as informações de cada parcela para cada empresa.

Na inclusão do convênio, além do código da **Empresa** e **N° de parcelas**, informe a **"Al. Retenção convênio"** que é o percentual de dedução feita pela administradora do cartão, sobre o valor da venda.

> **Exemplo:** Se o valor da venda for R$ 100,00 e a alíquota de retenção for igual a 5%, então a administradora pagará apenas R$ 95,00 para a empresa.

É possível limitar a concessão de descontos nas vendas informando um percentual no campo **"Alíquota máxima de desconto"**. O objetivo desse recurso é impedir que a equipe de vendas conceda descontos muito altos em vendas com cartão, que possam trazer prejuízo para a empresa.

No campo **"Nº de parcelas"** informe em quantas vezes o cliente pagará pela compra.

No quadro **"Recebimento da loja"**:

- **À vista** – Deve ser marcada quando a empresa recebe o valor integral (menos taxas) independente se o cliente pagará parcelado ou não para a administradora.
  - Exemplo: o cliente compra em 4x com juros da administradora, porém a loja receberá o valor integral da venda em uma única parcela.

- **Parcelado** – Deve ser marcada quando a administradora pagará o valor para a empresa de forma parcelada.
  - Exemplo: O cliente compra em 4x sem juros na loja com o cartão de crédito. E a loja também receberá, da administradora do cartão de crédito, o valor da venda de forma parcelada.

Quando a opção escolhida é **"Parcelado"**, é habilitada a opção **"Considerar a data da primeira parcela para os demais vencimentos"**:

- **Com a opção marcada** – O vencimento a partir da segunda parcela de recebimento da empresa será calculado a partir da data de vencimento da primeira.
  - Exemplo: Em uma venda feita no dia 01/01, em que a primeira parcela de recebimento da empresa seja 10 dias, e as demais a cada 30 dias, então o vencimento da primeira parcela será 10/01, e as demais 10/02, 10/03 e assim por diante.

- **Com a opção desmarcada** – O vencimento a partir da segunda parcela de recebimento da empresa será calculado a partir da data corrente.
  - Exemplo: Em uma venda feita no dia 01/01, em que a primeira parcela de recebimento da empresa seja 10 dias, e as demais a cada 30 dias, então o vencimento da primeira parcela será 10/01, e as demais 01/02, 01/03 e assim por diante.

Em **"Nº de dias primeira parcela"** informe em quanto tempo a administradora pagará a primeira parcela para a empresa. E em **"Nº dias entre as parcelas"** informe o intervalo para cálculo do vencimento da segunda parcela em diante.

> *[Imagem: Tela de cadastro da forma de pagamento com os campos de parcelamento e recebimento da loja]*

#### Financeira

O cadastro de uma forma de pagamento configurada como **"Financeira"** é muito semelhante ao que foi visto para Cartões.

Porém, no campo **Convênio** informe a administradora financeira.

Além dos campos e opções vistas no cadastro da forma de pagamento para Cartão, existem dois novos campos usados especificamente para financiamentos feitos por Financeiras:

- **TAC Convênio** – Taxa de abertura de crédito cobrada pela Financeira para vendas parceladas. A taxa pode ser informada em percentual ou valor. O valor de TAC Convênio será **deduzido**, pela financeira, do valor total do título;
- **TAC Empresa** – Taxa de abertura de crédito cobrada pela própria empresa para vendas parceladas. A taxa pode ser informada em percentual ou valor. O valor de TAC Empresa será **somado** ao valor do título.

O quadro da opção **"Gerar título separado"** deve ser utilizado quando, em vez de somar o valor do TAC Empresa no mesmo título a receber, seja criado um separado somente com o valor do TAC. Nesse caso, é preciso informar também a **Natureza de lançamento** e a **forma de pagamento**, além do **Dia fixo** para o vencimento desse título ou o **número de dias** para recebimento.

> *[Imagem: Tela de cadastro da forma de pagamento Financeira com os campos TAC Convênio, TAC Empresa e Gerar título separado]*

### Configurador Bimer >> Financeiro >> Prazos

Através dos prazos é feito o vínculo entre as formas de pagamento e os prazos disponíveis na empresa para as vendas. Na aba **"Configuração das parcelas"**, grid **"Formas de pagamento"**, clique no sinal de **"+"** para adicionar as formas de pagamento financeira/cartão de crédito.

> **Observação:** Ao tentar inserir uma forma de pagamento do tipo "cartão" ou "financeira", o sistema confronta o n.º de parcelas informado no prazo com o n.º de parcelas informado na aba convênio destas formas de pagamento. Com isso, só será possível informar essas formas de pagamento no prazo, caso nos dois cadastros esteja informado o mesmo n.º de parcelas.

> *[Imagem: Tela de configuração de prazos com a grid de formas de pagamento e o botão de adição]*

### Configurador Bimer >> Financeiro >> Opções >> Baixas >> Configurações diversas para baixas de títulos

Nesta aba, faça as configurações necessárias para a baixa dos títulos referentes às taxas de abertura de crédito do convênio e da empresa.

> *[Imagem: Tela de configurações diversas para baixas de títulos com as opções de TAC]*

---

## Funcionamento da rotina

Na seleção dos prazos o sistema exibe todas as formas de pagamento disponíveis para o prazo selecionado. Observe que a forma de pagamento aparece duas vezes, diferenciadas pela informação entre parênteses:

- **"administradora"** – quando o recebimento da loja estiver configurado como **à vista**;
- **"loja"** – quando o recebimento estiver configurado como **parcelado**.

Em ambas as formas de recebimento da loja o valor da venda não muda. O que muda é que:

- Quando for uma venda com parcelamento pela **administradora**, o cliente pagará o valor dos juros da administradora, que será cobrado em sua fatura de cartão de crédito;
- Quando a venda for parcelada pela **loja**, o cliente não pagará juros da administradora.

> *[Imagem: Tela de seleção de prazos com as formas de pagamento cartão exibidas duas vezes (administradora e loja)]*

Ao selecionar a forma de pagamento cartão (débito ou crédito) será habilitado o campo **"Dados de transação do cartão"** na tela de alteração da parcela nos módulos Faturamento e Pedido de venda. O campo **Adquirente** resgata a rede adquirente cadastrada na forma de pagamento informada.

> *[Imagem: Tela de parcela com o campo "Dados de transação do cartão" habilitado e o campo Adquirente preenchido]*

Quando o título a receber é gerado, o valor da alíquota de convênio é automaticamente debitado do valor original do título.

> **Observação:** Não é possível baixar títulos com forma de pagamento cartão e/ou financeira manualmente pelo **FinAReceber**. A baixa de títulos com forma de pagamento cartão e/ou financeira deve ser efetuada através do recurso de **baixa manual**, ou pelo **BIFinanceiro**. Caso a empresa possua o sistema **Conciliare**, a baixa de títulos vendidos com cartão será feita por ele.

Quando o título a receber proveniente da venda com cartão de crédito ou financeira for baixado, será gerado um **título a pagar**, baixado sem numerário, com o valor da alíquota de convênio.

No **FinDisponível**, será apresentado o movimento referente ao recebimento do valor do título já descontado o valor referente à alíquota de retenção do convênio. O título a pagar é baixado sem numerário, pois, na verdade não há saída de valor da conta da empresa para pagamento deste título, mas sim um recebimento do valor da venda feita já com o desconto referente à retenção de convênio.

> *[Imagem: Tela do FinDisponível com o movimento de recebimento do valor da venda com cartão já descontada a alíquota de convênio]*
