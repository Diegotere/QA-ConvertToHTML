# Baixa com Cheque de Terceiros — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Fluxograma da Rotina](#fluxograma-da-rotina)
- [Configurações](#configurações)
  - [Opções do Financeiro](#opções-do-financeiro)
- [Funcionamento](#funcionamento)
- [Linha do Tempo](#linha-do-tempo)
- [Estorno de Cheque de Terceiros](#estorno-de-cheque-de-terceiros)

---

## Introdução

No setor financeiro de uma empresa há um grande volume de movimentações, entre elas as contas a pagar para os fornecedores, resultantes de serviços tomados ou compras feitas para repor o estoque. Pode-se usar várias formas de pagamento para quitar essa dívida, dentre elas a **Baixa com Cheque de Terceiros**.

Nesse método, o setor financeiro usa os cheques emitidos pelos clientes da empresa para pagar os fornecedores. Os cheques emitidos são usados pelos clientes para quitar suas dívidas — ou seja, os títulos a receber que a empresa possui (resultantes das vendas feitas ou serviços prestados para esses clientes).

Portanto, os cheques ainda não foram levados ao banco para serem descontados e depositados na conta bancária, mas estão nas mãos da empresa. Ao realizar o pagamento para o fornecedor, a empresa não usa o valor real presente em sua conta bancária ou conta caixa, mas o cheque que veio do seu cliente. Assim, quando o fornecedor for descontar o cheque, é da conta bancária do cliente da empresa que será deduzido o valor.

---

## Fluxograma da Rotina

1. **Cliente:** Emite um cheque em seu nome para realizar o pagamento de determinado título à empresa, por um serviço ou compra realizada.
2. **Empresa:** Recebe o cheque emitido pelo cliente.
3. **Módulo Cheque a Receber:** O usuário cadastra o cheque emitido pelo cliente no sistema Bimer.
4. **Módulo Contas a Receber:** É gerado o título a receber em aberto a partir do cheque cadastrado.
5. **Fornecedor:** Recebe, por meio da empresa, o cheque gerado anteriormente pelo cliente, quitando assim a dívida com o fornecedor.
6. **Módulo Contas a Pagar:** O usuário realiza a baixa do título a pagar para o fornecedor usando o cheque entregue pelo cliente, por meio do botão **Baixa com cheque de terceiros**.

---

## Configurações

### Opções do Financeiro

**1 — Configuração da forma de pagamento para cheques**

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Cheque >> Outras configurações para cheques (a pagar / a receber)**

O primeiro ponto importante é saber como identificar os cheques de terceiros. Os mesmos serão títulos a receber com uma forma de pagamento específica. Os cheques de terceiros serão identificados através da forma de pagamento informada no campo **"Forma de pagamento para cheques"**.

> *[Imagem: tela de configuração de forma de pagamento para cheques]*

**2 — Configuração do número de dias para verificação**

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Cheque >> A receber**

O campo **"Número de dias para verificação da data de emissão de cheques a receber"** tem o objetivo de restringir o número de registros apresentados na seleção de cheques a serem utilizados para o pagamento dos títulos.

Somente aparecerão para seleção os títulos que:
- Tiverem a forma de pagamento configurada para cheque;
- Não possuírem baixa;
- Atenderem à condição: `Data de vencimento >= (Data atual - 'Número de dias para verificação')`

**Exemplos:**

```
(10/04/16 >= (05/04/16 – 2 dias)) → (10/04/16 >= 03/04/16) → Aparece no filtro
(10/04/16 >= (13/04/16 – 2 dias)) → (10/04/16 >= 11/04/16) → Não aparece no filtro
```

> **Dica:** Para visualizar todos os cheques disponíveis independentemente da data de emissão, deixe o valor desta configuração zerado.

---

## Funcionamento

É necessário ter títulos a receber com a forma de pagamento configurada para cheque.

Para realizar a baixa com cheque de terceiros:

1. Acesse o módulo **Contas a Pagar (FinAPagar)**.
2. Na aba **Principal**, selecione a opção **Outras baixas** e depois **Baixa com cheque de terceiros**.
3. Será aberta a tela **"Títulos selecionados"**. Para selecionar os títulos que deseja pagar, clique na lupa no campo **"Localização rápida pelo n° do título"** e faça o filtro. Para listar todos os títulos disponíveis, utilize apenas o sinal `%`.

> *[Imagem: tela de seleção de títulos para baixa com cheque de terceiros]*

4. Após selecionar os títulos desejados, clique em **Avançar**.
5. Na próxima tela, visualize os cheques de terceiros disponíveis na grid **"Cheques de terceiros disponíveis"** (lado esquerdo). Selecione o(s) cheque(s) que deseja utilizar e clique no botão de seta para a direita para movê-los para a grid **"Cheques de terceiros selecionados"**. Clique em **Avançar**.

> **Dica:** É possível selecionar mais de um cheque, desde que o somatório não ultrapasse o valor total a pagar.

6. Na próxima tela, caso o(s) cheque(s) não cubra(m) totalmente o valor do título a ser pago, há duas opções:
   - **Pagamento parcial:** Não selecione a conta caixa e clique em **Concluir**. O sistema emitirá um alerta informando que será feito um pagamento parcial — basta confirmar.
   - **Complemento com conta caixa:** Selecione a empresa, a conta caixa (clique no botão com a seta para a direita), informe a natureza de lançamento e o valor que será usado para pagar o restante. Clique em **Concluir**.

> **Dica:** Ao fim da rotina, é possível imprimir um comprovante que demonstra os títulos e cheques envolvidos no processo. Isso é importante para o financeiro arquivar os dados, caso seja necessário.

---

## Linha do Tempo

Após realizar a baixa do título a pagar com cheque de terceiros, na **linha do tempo** é gerado em seu descendente o registro **"Bx. Ch. Terceiro: \<Data\>"**, referente ao cheque de terceiro que realizou a baixa. Este cheque e o título a receber gerado anteriormente pelo cheque ficam com o status **"Baixado sem numerário"**.

> **Observação:** Nesta rotina o **Disponível não é movimentado**, visto que o valor do cheque a receber não entrou na conta bancária da empresa, pois ainda não foi descontado. Dessa maneira, com o cheque em mãos realiza-se o pagamento ao fornecedor e o título a pagar é baixado sem numerário, visto que o valor do pagamento não saiu da conta bancária da empresa, mas sim da conta bancária do cliente vinculado ao cheque.

---

## Estorno de Cheque de Terceiros

Este recurso serve para casos em que houve a baixa de cheque de terceiros, porém verificou-se que um dos títulos foi estornado quando tentou passar o cheque no banco. Para que o sistema consiga reabrir os títulos e desconciliar, é necessário utilizar esta rotina.

Para isso:

1. Acesse o módulo **Contas a Receber (FinAReceber)**.
2. Abra o título que foi utilizado na rotina de baixa de cheques de terceiros.
3. Clique no botão **"Estornar cheques de terceiros"**.

Em seguida, o cheque será estornado e serão criados títulos de estorno com o sufixo **"Est"** para que possam ser utilizados novamente.
