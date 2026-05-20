# PDV Alterdata — Promoção de Venda — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [O que é o Recurso de Promoção?](#o-que-é-o-recurso-de-promoção)
- [Requisitos Básicos](#requisitos-básicos)
- [Configurações](#configurações)
- [Venda no PDV Alterdata](#venda-no-pdv-alterdata)
- [Informações Extras](#informações-extras)

---

## Introdução

O PDV Alterdata possui um recurso de controle de promoções que permite ao gestor gerenciar quais produtos estão em oferta, o tipo de promoção para cada produto, por quanto tempo a promoção ficará disponível, entre outros aspectos.

A partir da versão **9.03.04.00**, o Bimer possui o recurso de Promoção.

> **Atenção:** Por enquanto o recurso **só está disponível para quem faz vendas pelo PDV Alterdata**.

---

## O que é o Recurso de Promoção?

No **Configurador Bimer** foi criada uma tabela específica na qual serão cadastradas todas as promoções programadas pela loja: qual tipo de promoção será utilizada, por quanto tempo valerão, como inativar promoções, etc.

Com esse recurso, a empresa poderá cadastrar e programar com antecedência todas as promoções que pretende fazer em um determinado período, facilitando bastante o processo de gestão.

---

## Requisitos Básicos

- **Bimer** e **Integrador Bimer x PDV Alterdata** na versão mínima **9.03.04.00**.
- Configurações descritas nos próximos tópicos devidamente realizadas.

---

## Configurações

### Cadastro de Usuários

O primeiro passo é definir quem poderá cadastrar promoções. Acesse:

**Cadastro de Usuários >> Perfil de usuário** (ou perfil individual) **>> Produto "Configurador Bimer" >> Faturamento >> Principais Cadastros**

Habilite o item **"Promoção"**.

### Cadastro de Promoções

Acesse **Configurador Bimer >> Faturamento >> Promoções**, informe a **empresa** e clique em **Novo**.

Existem **4 tipos** de promoção disponíveis:

---

#### A partir de X pague Y

Promoção em que o cliente tem um desconto quando compra a partir de determinada quantidade.

**Exemplo:** Açúcar Cristal custa R$ 4,30 o pacote de 1 kg. Se o cliente comprar a partir de 5 pacotes, o valor cai para R$ 4,00.

**Configuração:**
1. Informe uma **Descrição** para a promoção.
2. Escolha o tipo **"A partir de X leve Y"**.
3. Selecione a **tabela de Preço** a ser considerada (somente as 2 tabelas informadas no **PDVAlterdataCFG >> Opções >> Geral** são permitidas).
4. Em **"A partir de (qt):"**, informe o número mínimo de unidades para obter o desconto.
5. Em **"Pague (unitário)"**, informe o valor unitário que o cliente pagará ao atingir a quantidade mínima.
6. Informe o **Período de vigência** da promoção.
7. Na área **Itens**, clique em **Adicionar** para incluir os produtos desejados (por seleção de produtos, família, grupo ou grade). É possível selecionar mais de um produto usando **Shift** ou **Ctrl**.

> **Atenção:** Como o tipo "A partir de X pague Y" define um preço unitário fixo de promoção, todos os itens informados na configuração ficarão com o mesmo valor caso seja adquirida a quantidade mínima exigida.

> Vale ressaltar que comprando qualquer produto informado na promoção, mesmo que sejam diferentes, se atingir a quantidade mínima o cliente terá direito ao desconto. Exemplo: em uma promoção "A partir de 5 pague R$ 4,00" com Arroz tipo 01 e Feijão preto, se o cliente comprar 3 pacotes de arroz e 2 de feijão, o desconto será concedido.

**Proteções do sistema:**
- Não permite incluir o mesmo item duas vezes na mesma promoção.
- Não permite incluir um item cuja unidade de controle permita venda fracionada.
- Não permite cadastrar uma promoção na qual conste um produto que já esteja em outra promoção cadastrada no mesmo período ou parte dele.

---

#### Leve X pague Y

Promoção em que o cliente "leva um produto grátis" quando compra determinada quantidade.

**Exemplo:** Na compra de 3 unidades de detergente, paga-se apenas o valor de 2 unidades.

**Configuração:**
1. Informe uma **Descrição** para a promoção.
2. Selecione o tipo **"Leve X pague Y"**.
3. Selecione a **tabela de Preço** a ser considerada.
4. Em **"Leve (quantidade)"**, informe a quantidade de itens que o cliente precisa levar para ter o desconto.
5. Em **"Pague (total)"**, informe o valor que o cliente pagará pela quantidade que está levando. Exemplo: levando 3 unidades de detergente (R$ 1,89 cada), paga apenas 2 → 2 × R$ 1,89 = R$ 3,78.
6. Informe o **Período de Vigência** da promoção.
7. Clique em **Adicionar** para incluir os produtos desejados.

> **Atenção:** O sistema considerará sempre **múltiplos da quantidade** informada no campo "Leve (quantidade)" para conceder o desconto.
>
> Exemplo: Se a quantidade definida é 3 e o cliente adquirir 5 unidades, haverá desconto nas 3 primeiras unidades e sobre as outras 2 não haverá. Se adquirir 6 unidades, terá desconto em todas.

---

#### A cada X pague Y

Promoção em que o valor unitário do produto tem um desconto a cada X quantidades adquiridas.

**Diferença em relação a "A partir de X pague Y":** No tipo anterior define-se um valor total para cada conjunto de itens. Já no tipo "A cada X pague Y" informa-se o valor unitário que o sistema deve considerar sempre que atingir determinada quantidade.

**Exemplo:** Feijão pacote de 1 kg, valor unitário padrão R$ 6,50. A cada 10 pacotes comprados, o cliente pagará apenas R$ 5,50 por unidade.

- 9 unidades → paga R$ 6,50 por unidade.
- 10 unidades → paga R$ 5,50 por unidade.
- 15 unidades → paga R$ 5,50 nas 10 primeiras e R$ 6,50 nas outras 5.
- 20 unidades (múltiplo de 10) → paga R$ 5,50 por unidade.

**Configuração:**
1. Informe uma **Descrição** para a promoção.
2. Selecione o tipo **"Leve X pague Y"** (mesmo tipo, configuração diferente).
3. Selecione a **tabela de Preço** a ser considerada.
4. Em **"A cada (quantidade)"**, informe o número de itens necessários para ser considerado na promoção.
5. Em **"Pague (unitário)"**, informe o preço que o cliente pagará por unidade ao atingir a quantidade.
6. O campo **"Pague (total)"** demonstrará o total que o cliente pagará por aquela quantidade.
7. Informe o **Período de vigência** e clique em **Adicionar** para incluir os produtos.

---

#### Combo

Promoção em que o cliente ganha um desconto no total da compra ao adquirir um determinado conjunto de produtos.

**Exemplo:** Em uma autopeças, se o cliente adquirir separadamente Óleo, filtro de óleo e aditivo, pagará R$ 81,60. Porém, se adquirir os 3 itens juntos, pagará apenas R$ 75,00.

**Configuração:**
1. Informe uma **Descrição** para a promoção.
2. Selecione o tipo **"Combo"**.
3. Selecione a **tabela de Preço** a ser considerada.
4. Em **"Pague (total)"**, informe o quanto o cliente pagará pelo combo de produtos.
5. Informe o **Período de vigência** da promoção.
6. Clique em **Adicionar** para incluir os itens que compõem o combo.
7. Grave o cadastro.

---

### Recursos Comuns de Promoções

Na tela de cadastro de promoções, após selecionar uma empresa, as promoções ficam disponíveis na grade inicial, identificadas por **cores** de acordo com sua situação atual. Utilize a opção **Legenda** para verificar o significado de cada cor.

Na tela inicial, além das opções padrão, há as opções:
- **Excluir vencidas** — remove promoções com período de vigência encerrado.
- **Duplicar** — duplica uma promoção existente.

---

## Venda no PDV Alterdata

Antes de realizar as vendas, execute respectivamente:
1. Exportação no **Integrador Bimer x PDV Alterdata**.
2. Exportação no **Concentrador**.
3. Carga de dados no **PDV Alterdata**.

### Venda de Promoção "A partir de X pague Y"

O desconto é aplicado automaticamente quando o cliente atinge a quantidade mínima configurada. O valor unitário não é alterado — o desconto é lançado no total da venda.

**Exemplo:** 5 pacotes de açúcar cristal × R$ 4,30 = R$ 21,50. Com a promoção, desconto automático de R$ 1,50, totalizando R$ 20,00 (R$ 4,00 por unidade).

### Venda de Promoção "Leve X pague Y"

O cliente "leva grátis" unidades do produto ao comprar determinada quantidade.

**Exemplo:** 5 unidades de detergente × R$ 1,89 = R$ 9,45. Como a promoção é "leve 3 pague 2", foi concedido desconto de R$ 1,89 (1 unidade). Se tivesse levado 6 unidades, o desconto seria de R$ 3,78.

### Venda de Promoção "A cada X pague Y"

O desconto é no valor unitário, aplicado a cada múltiplo da quantidade configurada.

**Exemplo:** 15 pacotes de feijão (10 + 5):
- 10 unidades × R$ 6,50 = R$ 65,00 → com promoção: 10 × R$ 5,50 = R$ 55,00 → desconto de R$ 10,00.
- 5 unidades × R$ 6,50 = R$ 32,50 → sem desconto (não atingiu a quantidade mínima).

### Venda de Combo

O desconto só é aplicado quando **todos os itens do combo** são incluídos na venda. Ao incluir apenas parte dos itens, nenhum desconto é aplicado. Ao incluir o item que faltava para compor o combo, o sistema aplica o desconto estipulado automaticamente.

> Em nenhum dos cenários há alteração no valor unitário do produto. O desconto é sempre no **valor total da venda**, conforme determinado pela legislação.

Ao final da venda, além do DANFE com o valor do desconto concedido, o PDV Alterdata também emitirá um **resumo da operação** detalhando o desconto.

---

## Informações Extras

### Proteção no Cadastro de Produtos

Foi incluída uma proteção no módulo **Cadastro de produtos**: se houver alteração no valor de um produto que esteja incluído em uma promoção vigente ou futura, o sistema exibirá uma mensagem informando todas as promoções nas quais ele está incluído.

### Auditoria de Promoções

No **Configurador Bimer >> Geral >> Ferramentas >> Auditoria dos sistemas**, é possível visualizar as ações feitas em **Promoções** (**Configurador Bimer >> Faturamento >> Promoções**).

> Caso tenha alguma dúvida sobre o recurso, entre em contato com um dos Instrutores Bimer por e-mail, pelo Google Chat, ou envie um e-mail para **uca@alterdata.com.br**.
