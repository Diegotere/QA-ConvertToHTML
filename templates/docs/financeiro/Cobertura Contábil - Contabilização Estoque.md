# Cobertura Contábil — Contabilização Estoque — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Contabilizando Movimentos do Estoque](#contabilizando-movimentos-do-estoque)
- [Configurando a Operação de Compra](#configurando-a-operação-de-compra)
  - [Aba Estoque (Compra)](#aba-estoque-compra)
  - [Aba Frete (Compra)](#aba-frete-compra)
  - [Aba Desp. Acess. (Compra)](#aba-desp-acess-compra)
  - [Aba ICMS (Compra)](#aba-icms-compra)
  - [Aba Subst. ICMS (Compra)](#aba-subst-icms-compra)
  - [Aba IPI (Compra)](#aba-ipi-compra)
  - [Aba Bonificação](#aba-bonificação)
- [Configurando a Operação de Venda](#configurando-a-operação-de-venda)
  - [Aba Estoque (Venda)](#aba-estoque-venda)
  - [Aba Venda](#aba-venda)
  - [Aba Frete (Venda)](#aba-frete-venda)
  - [Aba Desp. Acess. (Venda)](#aba-desp-acess-venda)
  - [Aba ICMS (Venda)](#aba-icms-venda)
  - [Aba Subst. ICMS (Venda)](#aba-subst-icms-venda)
  - [Aba IPI (Venda)](#aba-ipi-venda)
- [Configuração Contabilização de Estoque](#configuração-contabilização-de-estoque)
- [Gerando Lançamentos Contábeis do Estoque](#gerando-lançamentos-contábeis-do-estoque)
- [Gerando Lançamentos Contábeis de Estoque de Vendas com Entrega Futura](#gerando-lançamentos-contábeis-de-estoque-de-vendas-com-entrega-futura)

---

## Contabilizando Movimentos do Estoque

Além dos movimentos financeiros (Contas a Pagar e Contas a Receber), a empresa também tem obrigação de contabilizar valores referentes a movimentações no estoque. O setor de contabilidade deve ser consultado para identificar quais são esses tipos, mas ao menos dois são sempre necessários: os movimentos referentes a **compras** e **vendas**.

É necessário contabilizar, por exemplo, o custo da mercadoria, tributos destacados no documento fiscal e outros valores presentes na NF-e.

As configurações de conta contábil para a **pessoa** (cliente e fornecedor) e para a **Natureza de Lançamento** — já vistas na contabilização financeira — são utilizadas também na contabilização de documentos do estoque. Para completar, é necessário configurar a **Operação** utilizada no documento.

> **Nota:** Para muitas empresas, a contabilização exclusivamente pela parte financeira já será suficiente. Por exemplo, se em uma compra de produtos para revenda o único lançamento necessário é débito na conta de estoque (ativo) e crédito na conta de fornecedores (passivo), basta configurar a conta contábil da natureza de lançamento e do fornecedor. O mesmo vale para notas fiscais de venda. A configuração de estoque é necessária quando a empresa precisa detalhar valores como ICMS, IPI, frete, etc.

---

## Configurando a Operação de Compra

Caminho: **Cobertura Contábil >> aba Cobertura >> Empresa desejada >> Estoque >> Operação**

Clique com o botão direito do mouse e selecione **"Insere nova operação"**. Informe a operação utilizada na entrada de NF-e de compras. As abas são disponibilizadas conforme a operação estiver configurada no **Configurador Bimer >> Estoque >> Operação** (ex.: se a operação calcula ICMS, haverá a aba ICMS).

### Aba Estoque (Compra)

Configura o destino do somatório dos seguintes valores:

```
Vl. produtos + Vl. Acréscimo + Vl. IPI – Vl. Desconto
```

- **Conta** — Código da conta contábil de **débito**, que aumentará o valor de estoque de mercadorias. Para compras de mercadorias ou matérias-primas, é uma conta do nível Ativo. Para compras consideradas apenas gastos, é uma conta de despesa ou custo.
- **Contas do grupo** — Permite informar contas diferentes para débito conforme o grupo ao qual o produto está vinculado. Útil quando a empresa não possui uma conta contábil única representando o estoque.
- O **crédito** será feito na conta informada na configuração da pessoa (fornecedor) na aba Cobertura.
- **Histórico padrão** — Código do histórico que descreverá o lançamento. É possível utilizar variáveis e textos livres complementares.
- **Centro de custos** — Define a utilização:
  - **Não trabalha com C.Custo** — O lançamento não será gerado com centro de custo.
  - **Entrada manual** — O lançamento será gerado com o centro de custo conforme o documento.
  - **Vinculados a conta** — Usa o centro de custo do documento; se não houver, recupera os centros de custo da conta contábil.

### Aba Frete (Compra)

Na sub-aba **Dados**, configure a conta contábil de **débito** no lançamento (ex.: conta de despesas com frete). A contrapartida de crédito será a conta configurada para a pessoa da NF-e.

As sub-abas **ICMS, PIS e COFINS** só precisam ser configuradas quando a empresa faz o destaque desses tributos sobre o valor do frete na aba Transportadora do documento no módulo Nota Fiscal de Entrada.

### Aba Desp. Acess. (Compra)

Configura o destino do somatório dos seguintes valores:

```
Vl. seguro + Vl. Outras Despesas
```

- **Conta** — Código da conta contábil de **débito** (ex.: conta de outras despesas).
- A contrapartida de crédito será a conta configurada para a pessoa da NF-e.

> **Atenção:** A configuração "Contrapartida dos lançamentos será feita contra a pessoa" não está sendo utilizada atualmente. Com ela marcada ou não, a contrapartida será a conta informada na configuração da pessoa emitente da NF-e.

### Aba ICMS (Compra)

Configura o destino do somatório dos seguintes valores:

```
Vl. ICMS próprio + Vl. FCP
```

O valor de ICMS é embutido no valor da mercadoria. Empresas contribuintes do ICMS podem se creditar desse valor para diminuir o montante a recolher. Nessa tela é possível "transferir" o valor de ICMS do estoque para outra conta (ex.: ICMS a recuperar).

- **Conta** — Código da conta contábil de **débito** (ex.: ICMS a recuperar).
- **Contrapartida** — Conta contábil de crédito (ex.: conta de estoque, para reduzir seu valor).
- A opção **"Contrapartida dos lançamentos será feita contra pessoa"** faz com que a conta de crédito seja a vinculada à configuração do fornecedor na Cobertura Contábil.

### Aba Subst. ICMS (Compra)

O valor do ICMS ST geralmente deve ser somado ao valor do estoque do produto, pois soma o valor total da NF-e.

- **Conta** — Código da conta contábil de **débito** referente ao ICMS ST (ex.: a mesma conta informada na aba Estoque).
- Marque **"Contrapartida dos lançamentos será feita contra pessoa"** para que a conta de crédito seja a vinculada à configuração do fornecedor. Caso não marcada, a contrapartida utilizará a conta contábil informada na aba Estoque.

> **Atenção:** Outras formas de contabilizar o ICMS ST devem ser vistas caso a caso com a contabilidade da empresa.

### Aba IPI (Compra)

- **Conta** — Código da conta contábil de **débito** referente ao IPI (ex.: IPI a recuperar).
- **Contrapartida** — Conta contábil de crédito informada no campo correspondente (não necessariamente a conta vinculada ao fornecedor).
- A opção **"Contrapartida dos lançamentos será feita contra pessoa"** faz com que a conta de crédito seja a vinculada à configuração do fornecedor.

### Aba Bonificação

A aba de bonificação é habilitada quando a nota fiscal de entrada possui algum produto com a marcação de bonificação. No lote, será criado um movimento separado específico para os produtos de bonificação.

Se o item de bonificação tiver uma natureza de lançamento configurada nessa opção (a mesma natureza informada no produto do cadastro da nota), o sistema usará a conta e a contrapartida no lançamento contábil. Se não houver conta configurada, usará a conta principal padrão em **Cobertura Contábil >> Cobertura >> Estoque >> Operação >> Bonificação >> Contrapartida**.

> **Observação:** A aba de bonificação foi liberada na versão **11.00.09.00** do Bimer.

---

## Configurando a Operação de Venda

A configuração é semelhante à de compra, com algumas diferenças importantes.

Caminho: **Cobertura Contábil >> aba Cobertura >> Empresa desejada >> Estoque >> Operação**

Clique com o botão direito e selecione **"Insere nova operação"**. Informe a operação utilizada na emissão de NF-e de venda.

### Aba Estoque (Venda)

Responsável pela contabilização da **baixa do estoque** e do **Custo da Mercadoria Vendida (CMV)**.

A baixa do estoque é feita pelo **valor do custo do produto**, não pelo valor da venda. Isso é fundamental: se a baixa fosse pelo valor de venda, o saldo da conta de estoque ficaria negativo.

**Exemplo:**
- Produto adquirido por R$ 1.000,00 → valor de estoque = R$ 1.000,00
- Produto vendido por R$ 2.000,00
- Baixa do estoque pelo custo: R$ 1.000,00 (correto)
- Se fosse pelo valor de venda: saldo ficaria –R$ 1.000,00 (incorreto)

- **Conta** — Código da conta contábil de **crédito** (geralmente a conta de Estoque, nível Ativo).
- **CMV** — Código da conta contábil de **débito** (geralmente uma conta do nível custo/despesas).

### Aba Venda

Configura o lançamento contábil dos seguintes valores:

```
Vl. mercadoria + Vl. Acréscimo – Desconto + Vl. IPI
```

- **Conta** — Código da conta contábil de **crédito** (geralmente uma conta do nível Receitas, ex.: "Receita com revenda de mercadorias").
- A conta de **débito** é recuperada da configuração do cadastro do cliente na aba **Cobertura >> Pessoa** (geralmente uma conta do nível Ativo, ex.: duplicatas a receber).

### Aba Frete (Venda)

O frete é contabilizado quando seu valor é destacado e somado ao total da NF-e para ser cobrado ao cliente, desde que na emissão da NF-e, na aba Transportadora, o **Tipo de Frete** seja **"Frete por conta do destinatário"**.

- **Conta** — Código da conta contábil de **crédito** (geralmente uma conta do nível Receitas, ex.: Receita de serviços ou Receita com Frete).
- A conta de **débito** é recuperada da configuração do cadastro do cliente (duplicatas a receber).

### Aba Desp. Acess. (Venda)

Configura o lançamento contábil dos seguintes valores:

```
Vl. de outras despesas + Vl. de seguro
```

- **Conta** — Código da conta contábil de **crédito** (geralmente uma conta do nível Receitas, conforme definição da contabilidade).
- Para a contrapartida (débito), marque **"Contrapartida dos lançamentos será feita contra a pessoa"** para usar a conta vinculada à configuração do cliente. Caso precise de uma conta de débito diferente, deixe a opção desmarcada e informe a conta desejada.

### Aba ICMS (Venda)

O ICMS Próprio embutido na venda é uma obrigação de recolhimento para o governo estadual ou do Distrito Federal — normalmente considerada uma despesa ou custo.

- **Conta** — Código da conta contábil de **crédito** (geralmente uma conta do nível passivo/obrigações, ex.: ICMS a Recolher).
- **Contrapartida** — Código da conta contábil de **débito** (geralmente uma conta do nível despesas, ex.: Despesas com ICMS).
- A opção **"Contrapartida dos lançamentos será feita contra a pessoa"** faz com que a conta de crédito passe a ser a configurada para o cliente na Cobertura Contábil.

### Aba Subst. ICMS (Venda)

O ICMS ST é somado ao valor total da NF-e e cobrado ao cliente. A Cobertura Contábil não soma o ICMS ST ao montante contabilizado pela Aba Estoque, portanto é necessário configurar esta aba para que a contabilização do valor a receber do cliente fique correta.

- **Conta** — Código da conta contábil referente ao ICMS ST (ex.: ICMS ST a recolher). Será a conta de **crédito** no lançamento.
- Marque **"Contrapartida dos lançamentos será feita contra a pessoa"** para que o sistema use a conta vinculada à configuração do cliente para o lançamento de **débito**.

### Aba IPI (Venda)

O IPI é uma despesa/custo para as indústrias, somada ao total da venda e cobrada do cliente. Como o valor do IPI já faz parte do somatório da Aba Venda (já debitado contra a conta de duplicatas a receber), é necessário contabilizar apenas a **Despesa** e a **Obrigação**.

- **Conta** — Código da conta contábil de **crédito** referente à obrigação (ex.: IPI a recolher).
- **Contrapartida** — Código da conta contábil de **débito** (geralmente uma conta de despesas ou custos).

---

## Configuração Contabilização de Estoque

Caminho: **Cadastros e configurações >> Opções >> Contabilização de estoque**

| Opção | Marcada | Desmarcada |
|-------|---------|------------|
| **Contabilizar estoque de ordem de entrega/outros documentos** | Contabiliza NF-e, Inventários e Ordens de Entrega | Contabiliza apenas NF-e e Inventários |
| **Inverter as contas do lançamento contábil de inventário quando o valor for negativo** | Valor alterado para positivo e contas de débito/crédito invertidas (log de auditoria gerado) | Documento gerado com valor negativo e contas não invertidas (não permite exportação do lote) |
| **Em caso de custo médio zerado, considerar o próximo custo médio válido** | Usa o próximo custo válido durante contabilização de venda | Mostra valor zerado no lote |
| **Lançar o IPI no valor do estoque (compra/entrada)** | IPI adicionado ao valor do estoque; não gera lançamento separado de IPI | Gera lançamento separado para o valor do IPI |
| **Lançar o frete no valor do estoque (compra/entrada) e no valor da venda/saída** | Frete incorporado ao lançamento de estoque (compra) ou venda (saída); sem lançamentos individuais | Gera lançamento separado para o frete |
| **Lançar as despesas acessórias no valor do estoque (compra/entrada) e no valor da venda/saída** | Despesas acessórias incorporadas ao lançamento de estoque ou venda; sem lançamentos individuais | Gera lançamento separado para despesas acessórias |
| **Lançar Subst. ICMS no valor do estoque (compra/entrada) e no valor da venda/saída** | ICMS ST gerado nos lançamentos de estoque/venda; sem lançamento específico de ICMS ST | Gera lançamento específico de ICMS ST |

**Transferência de estoque entre empresas:**
1. **Custo médio** — O valor do estoque é gerado com o valor de custo médio (ou custo de reposição, se o produto tiver a característica configurada).
2. **Valor do documento** — O valor do estoque é gerado com o valor dos itens informados no documento, independente do custo médio atual.

**Contabilização do estoque (documentos de venda/saída):**
1. **Custo médio** — Valor gerado com o custo médio (ou custo de reposição, se configurado).
2. **Valor do documento** — Valor gerado com os itens do documento, independente do custo médio.

**Contabilização do estoque (documentos de compra/entrada com origem no PCP):**
1. **Custo médio** — Contabiliza pelo custo médio para documentos originados no PCP Nomus ou Wise PCP. Para outros documentos, usa o valor dos itens.
2. **Valor do documento** — Usa o valor dos itens do documento, independente do custo médio.

**Característica de produto para contabilização pelo custo de reposição:**

Esta opção é habilitada quando as configurações de Transferência de estoque entre empresas e/ou Contabilização do Estoque (Documentos de Venda/Saída) estiverem configuradas para contabilizar pelo custo médio. Ao contabilizar um documento de venda, saída ou transferência entre empresas, se o produto da nota tiver a característica vinculada, o sistema recuperará automaticamente o valor do custo de reposição. Se a característica não estiver sinalizada, o lançamento será gerado pelo custo médio. Em caso de custo de reposição zerado, usa o próximo custo de reposição válido.

---

## Gerando Lançamentos Contábeis do Estoque

Caminho: **Cobertura Contábil >> aba Lançamentos Contábeis >> Gerar lançamentos Contábeis >> Estoque**

1. Informe a **Empresa** e marque a opção **Novo lote**.
2. Informe uma descrição intuitiva para o lote (ex.: *"Lançamentos de compras \<período\>"*).
3. Filtre os documentos por **data de referência** ou **data de emissão**, conforme a necessidade da Contabilidade.
4. Clique em **Avançar**.
5. Nas próximas janelas, aplique filtros por **Operação** e por **Pessoa** conforme necessário.
6. Clique em **Concluir**.

Ao final do processamento, é exibida uma mensagem informando o número de documentos contabilizados. A Cobertura Contábil filtrará automaticamente o lote gerado para conferência.

Para localizar o lote manualmente: na área de **Filtro de lotes**, selecione a Empresa, em **Tipo de negócio** selecione **Estoque** e informe o **Período de lote** (data em que o lote foi gerado, não as datas dos documentos). É possível também filtrar pelo número do lote.

---

## Gerando Lançamentos Contábeis de Estoque de Vendas com Entrega Futura

Quando o cliente trabalha com entrega futura no PDV Alterdata, ao realizar uma venda é determinado se a entrega ocorrerá no momento da venda ou futuramente. Para entrega futura, é criada uma **Ordem de Entrega** no Faturamento e o usuário poderá criar a NF-e a partir do cupom fiscal.

Neste caso, existem dois movimentos: um documento da Ordem de Entrega e outro da NF-e gerada para acompanhamento da mercadoria. O sistema gera dois movimentos no lote de estoque — um do documento da OE e outro da nota — pois deve contabilizar o estoque do produto para um e o valor financeiro da NF-e para o outro.

Caso a empresa não queira contabilizar os movimentos de ordem de entrega/outros documentos:

Caminho: **Cadastro e configurações >> Opções >> Contabilização de estoque**

Desmarque a opção **"Contabilizar estoque de ordem de entrega/outros documentos"**.

As contas de débito e crédito desses movimentos são buscadas da mesma forma descrita anteriormente neste manual — é necessário lançar as operações utilizadas na NF-e e a vinculada no `PDVAlterdataCfg.exe` na área de operações para entrega futura. Ao configurar as operações, informe a contrapartida ou defina se a contrapartida dos lançamentos será feita contra a pessoa.
