# Título Descontado — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Tipo de Cobrança](#tipo-de-cobrança)
  - [Natureza de Lançamento](#natureza-de-lançamento)
  - [Evento de Baixa](#evento-de-baixa)
  - [Configurações para Baixa de Títulos](#configurações-para-baixa-de-títulos)
- [Rotinas](#rotinas)
  - [Contas a Receber](#contas-a-receber)
  - [Estorno do Título](#estorno-do-título)
  - [Cheque a Receber](#cheque-a-receber)
  - [Estorno do Cheque](#estorno-do-cheque)
- [Extras](#extras)
  - [Alterar Histórico de Carteira](#alterar-histórico-de-carteira)
  - [Negociação no Faturamento](#negociação-no-faturamento)
  - [Inclusão em Massa](#inclusão-em-massa)

---

## Introdução

**Título descontado** é o nome dado a uma transação realizada entre a empresa e um banco, em que o banco antecipa o valor de títulos que a empresa tem a receber de seus clientes em datas futuras.

**Exemplo:**

A empresa fez uma venda de R$ 1.000,00 e emitiu um boleto com vencimento em 30 dias. Porém, ela precisa de capital imediato. Então entra em contato com o banco e negocia a antecipação deste valor. Para antecipar, o banco cobra uma **taxa de desconto**, já deduzida do valor negociado.

```
Valor do título          = R$ 1.000,00
Taxa de desconto         = 5%
Valor antecipado         = R$ 1.000,00 – 5% = R$ 950,00
Valor creditado na conta = R$ 950,00
```

Para o cliente, nada muda — seu título continua com vencimento e valores normais. Caso o cliente não pague no vencimento, o banco cobra da empresa o valor antecipado, geralmente acrescido de juros.

A empresa pode antecipar tanto recebimentos em **boletos** quanto em **cheques**. Em ambos os casos, o cliente deve um valor à empresa, mas o vencimento ainda não chegou. A empresa leva o boleto ou cheque ao banco, que verifica a validade do documento e fecha o negócio.

---

## Configurações

### Tipo de Cobrança

Caminho: **Configurador >> Financeiro >> Tipo de Cobrança**

Clique em **Novo** e marque as opções **Ativo** e **Título descontado**.

> *[Imagem: tela de cadastro de tipo de cobrança com opção Título descontado marcada]*

### Natureza de Lançamento

Caminho: **Configurador >> Financeiro >> Natureza de Lançamento**

Não é necessária nenhuma configuração específica no cadastro. A natureza de lançamento será utilizada somente como auxílio em relatórios.

### Evento de Baixa

Caminho: **Configurador >> Financeiro >> Evento de baixa**

Cadastre um evento de baixa para títulos descontados. No cadastro, marque o tipo **Desconto**.

> *[Imagem: tela de cadastro de evento de baixa com tipo Desconto]*

### Configurações para Baixa de Títulos

Caminho: **Configurador >> Financeiro >> Opções >> Baixas >> Configurações diversas para baixa de títulos**

Preencha os campos:

- **Natureza de lançamento a ser utilizada na baixa de título descontado**
- **Evento de baixa a ser utilizado na baixa de título descontado**

Estas configurações serão utilizadas para a contabilização das movimentações com o banco.

---

## Rotinas

### Contas a Receber

Acesse o módulo **A Receber**, localize o título e abra para edição.

> **Observação:** Títulos gerados por outro módulo e já vinculados a uma cobrança têm os campos **Tipo de cobrança**, **Conta bancária** e **Nr. Título no banco** bloqueados. Também é possível cadastrar um título manualmente informando o tipo de cobrança como descontada.

Para descontar o título, inclua as informações pelo **Histórico de carteira**:

1. Na aba **Histórico de carteira**, clique em **Incluir**.
2. No campo **Data movimento**, informe o período em que receberá o valor do banco.
3. Informe o **percentual** do título que será pago pelo banco. Exemplo: se o banco cobra 10%, o valor antecipado é 90% — informe 90%.
4. Informe a **Conta bancária**, a **Data de referência** e o **Número do título no banco**.
5. Após a gravação, o sistema cancela automaticamente o histórico de carteira anterior.

Na aba **Título**, as informações são atualizadas. Clique em **OK** para salvar.

**Movimentação no Disponível:**

Assim que o tipo de cobrança descontado é informado, o movimento bancário é criado no módulo **Disponível**. Pela **Linha do Tempo** do título a receber, o movimento no Disponível aparece como descendente, com o histórico *"Lançamento referente a título descontado"*.

> **Nota:** O título a receber poderá ser baixado normalmente quando o cliente realizar o pagamento, porém esta baixa não gerará novo registro no Disponível.

---

### Estorno do Título

Caso o cliente não pague o título, o banco cobra de volta da empresa o valor antecipado, acrescido de multa e juros. Para desfazer o processo:

1. Acesse o módulo **A Receber** e abra o título descontado.
2. Na aba **Histórico de carteira**, clique em **Incluir**.
3. Preencha os campos para uma cobrança **sem desconto** — no cadastro do Tipo de Cobrança, a opção **Título descontado** não pode estar marcada.
4. Ao confirmar, o histórico de carteira descontado será cancelado.
5. Na aba **Título**, as informações da cobrança são atualizadas. Clique em **OK**.
6. É aberta a tela de **estorno de título descontado**. Altere a data do movimento de estorno e informe a alíquota ou valor de juros/multa.

Na **Linha do Tempo**, aparece o lançamento do estorno do título descontado no Disponível, acrescido de juros/multa, com o histórico *"Lançamento de estorno referente a cancelamento de título descontado"*.

> **Observação:** O lançamento de estorno é um valor de **saída**, pois o valor que havia entrado na conta precisa ser devolvido ao banco com todos os encargos.

---

### Cheque a Receber

Após lançar os títulos a receber com a forma de pagamento cheque e editar o cheque com os dados do cliente:

Caminho: **Cheque a Receber >> Gerar Histórico de Carteira**

Nas telas seguintes:

1. Escolha as opções para filtrar os títulos que receberão o tipo de cobrança descontado (por natureza de lançamento, empresas, clientes, formas de pagamento, mapas de carregamento, etc.).
2. Selecione os títulos desejados. Títulos com quadrinho azul já possuem um tipo de cobrança descontado, mas podem ser selecionados para alteração.
3. Na próxima tela, informe a **Conta**, o **Tipo de Cobrança**, a **Data movimento** e o **percentual** do título que a empresa receberá.

Após a confirmação, o cheque muda o status de **Cadastrado** para **Enviado p/ Conciliação**. Pela **Linha do Tempo**, é possível ver o movimento de entrada criado no Disponível com o valor antecipado pelo banco.

---

### Estorno do Cheque

Caso o histórico de carteira tenha sido informado incorretamente, ou o cliente não tenha pago o cheque:

1. Acesse o botão **Gerar Histórico de Carteira** no módulo Cheque a Receber.
2. Selecione o título e informe o novo histórico com um tipo de cobrança **sem título descontado**.
3. Aplique a alíquota de juros e multa.

**Resultado:**
- No **Disponível**, é criado um movimento de **saída** com os juros, para ressarcimento ao banco.
- O cheque volta ao status **Cadastrado**, para que a empresa possa cobrar o cliente.

> **Dica:** Caso o cheque não apareça ao filtrar por **Enviado para conciliação**, clique no botão **Localizar** e busque o título informando datas ou número do título como filtro.

---

## Extras

### Alterar Histórico de Carteira

Para corrigir o tipo de cobrança de vários títulos ao mesmo tempo:

Caminho: **A Receber >> Principal >> Gerar histórico carteira**

1. Faça os filtros dos títulos que serão ajustados.
2. Selecione os títulos desejados (clique no primeiro quadradinho para marcar todos).
3. Informe a **Conta**, o **Tipo de cobrança** e o **percentual**, já abatendo o valor cobrado pelo banco.

### Negociação no Faturamento

Ao gerar uma nota pelo módulo **Faturamento**, na aba **Negociação** é possível informar um **Tipo de cobrança descontado** diretamente no prazo combinado com o cliente.

Para facilitar a localização desses títulos no financeiro, recomenda-se:

- Cadastrar um tipo de cobrança específico com uma descrição clara, como *"TÍTULOS DESCONTADOS – VINDOS DO FATURAMENTO"*.
- Ao final do mês ou semana, acessar o **BI Financeiro** e filtrar pelos títulos com esse tipo de cobrança.

**Exemplo de filtro no BI Financeiro:** A Receber, Abertos, composição dos últimos 31 dias, com o campo **Tipo de cobrança** visível. O resultado pode ser exportado para Excel para facilitar o trabalho no Contas a Receber.

### Inclusão em Massa

Para gerar vários títulos com tipo de cobrança para título descontado de uma só vez:

Caminho: **A Receber >> Principal >> Inclusão em Massa**

1. Na primeira tela, insira o **Tipo de Cobrança**.
2. Na área **Descontado**, informe a **Conta bancária**, a **data** e o **percentual** (deduzindo o valor cobrado pelo banco).
3. Os títulos serão criados. Após, realize a rotina de baixa dos títulos normalmente.
