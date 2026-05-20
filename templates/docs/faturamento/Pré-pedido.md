# Pré-Pedido — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Funcionamento do módulo](#funcionamento-do-módulo)
- [Configurações do módulo](#configurações-do-módulo)
- [Configurando operações](#configurando-operações)
- [Cadastro de usuário](#cadastro-de-usuário)
- [Funcionamento do sistema](#funcionamento-do-sistema)
- [Lançamento do pré-pedido](#lançamento-do-pré-pedido)
- [Transformar pré-pedido em pedido de venda](#transformar-pré-pedido-em-pedido-de-venda)
- [Transformar pré-pedido em DAV](#transformar-pré-pedido-em-dav)
- [Imprimir](#imprimir)
- [Relatório de descontos em vendas efetuadas](#relatório-de-descontos-em-vendas-efetuadas)
- [Atendimento vinculado ao pré-pedido](#atendimento-vinculado-ao-pré-pedido)

---

## Introdução

O módulo **Pré-Pedido** permite lançar orçamentos de venda e transformá-los em pedido de venda ou **DAV** (Documento Auxiliar de Venda). O principal objetivo do módulo é verificar a quantidade disponível em estoque antes de fazer a transformação.

Normalmente os clientes utilizam o recurso de pré-pedido através do módulo de pedido de venda, mas pelo módulo **Faturamento > Pré-Pedido** é possível acessar essa funcionalidade de forma dedicada.

---

## Funcionamento do módulo

O fluxo básico é:

1. **Lançamento do pré-pedido** — trata-se do orçamento solicitado pelo cliente;
2. **Decisão:** transformar em **Pedido de Vendas** (faturado no módulo Faturamento, gerando NF-e ou ordem de entrega) ou em **DAV** (atendimento no PDV Alterdata).

---

## Configurações do módulo

Antes de iniciar a utilização do módulo, realize algumas configurações. Na parte superior, clique sobre o botão **"Opções do sistema"**.

Será aberta a tela de opções, na qual deve-se informar:
- **Empresa prateleira** (empresa de venda);
- **Empresa depósito** (para que o sistema faça os lançamentos do estoque).

A opção **"Visualizar somente os pedidos da empresa prateleira"** exibirá apenas os pedidos vinculados à empresa prateleira.

> **Observação:** Só ocorre o funcionamento da rotina se estiver desmarcado no Configurador do FATPDV a opção **"Habilitar a informação da empresa principal na tela principal do pré-pedido"**.

Com o recurso **"Ordenação dos produtos para impressão do relatório de pré-pedido"**, é possível definir como serão ordenados os itens na impressão do relatório.

---

## Configurando operações

### Tipo de documento para Nota Fiscal e Ordem de Entrega

Em **Configurador > Estoque > Tipo de documento**, cadastre dois tipos de documento:

**1. NF-e:**
- Cadastre com a descrição "NF-e" e adicione as empresas que trabalharão com nota fiscal eletrônica;
- Os números de série devem ser iguais ou estar entre 1 e 899;
- Para empresas configuradas para NF-e, podem ser informados números de série iguais para o mesmo tipo de documento.

Exemplos de configuração de série:

| Tipo de Documento | Empresa | Série |
|-------------------|---------|-------|
| 000006 – NF-e | 1 | 1 |
| 000006 – NF-e | 2 | 1 |
| 000006 – NF-e | 3 | 2 |

**2. OE (Ordem de Entrega):**
- Cadastre com a descrição "OE" e adicione as empresas que trabalharão com nota fiscal eletrônica.

### Operações para Nota Fiscal e Ordem de Entrega

Em **Configurador / Estoque / Operação**, cadastre duas operações:

**1. NF-e:**
- Tipo de ajuste: **Nenhum**
- Tipo de movimento: Compra, Entrada, Venda, Saída, Devolução ou Transferência
- Na aba **Documento**, selecione o tipo de documento NF-e criado anteriormente

**2. OE:**
- Tipo de ajuste: **Nenhum**
- Tipo de movimento: Venda, Saída, Devolução ou Transferência
- Na aba **Documento**, selecione o tipo de documento OE criado anteriormente

Com a operação e o tipo de documento criados:
- Em **Configurador / Faturamento > Opções > Operação > Nota fiscal**, informe o tipo de documento NF-e e a operação padrão para nota fiscal;
- Em **Configurador > Faturamento > Opções > Operação > Ordem de entrega**, informe o tipo de documento OE e a operação padrão para ordem de entrega.

### Configurando preço padrão

Em **Configurador FatPDV / Ferramentas / Opções / Aba Pré-pedido/Pedido de venda / Aba Preços**, informe um preço padrão no campo **"Preço padrão para pré-pedido"**.

---

## Cadastro de usuário

No cadastro de usuários é possível confirmar quais permissões estão concedidas. Caso algum recurso esteja desabilitado, pode ser que esteja sem permissão no usuário/perfil.

---

## Funcionamento do sistema

O sistema solicita login e senha quando o módulo fica inativo por alguns minutos. Isso ocorre pois no **Configurador do FATPDV**, em **Opções > Pré-pedido/Pedido de venda > Outros**, há a configuração **"Número de minutos para troca automática de login"**.

Conforme o tempo informado, será habilitada a tela para login. Se não estiver habilitada, clique na tela **F12**.

---

## Lançamento do pré-pedido

Caso a opção **"Habilitar a informação da empresa na tela principal do Pré-pedido"** esteja marcada no FATPDV, informe a empresa na parte superior. Se a opção estiver desmarcada, clique em **"Novo"** para iniciar o lançamento.

Selecione a pessoa para lançamento do pré-pedido. O sistema validará se no cadastro da pessoa existe alguma operação, prazo ou preço vinculados para priorizar.

> **Dica:** É possível cadastrar pessoas diretamente no módulo — clique sobre a tecla **F3** para abrir a tela de cadastro de pessoas simplificado.

### Opções "Venda e consignação"

Essas opções são exibidas caso esteja configurado para trabalhar com consignação de produtos em **Configurador > Faturamento > Opções > Venda > Consignação**. Ao selecionar uma pessoa com a característica vinculada, no pré-pedido é possível indicar se o lançamento trata-se de uma venda ou de uma consignação.

### Informações complementares

É possível definir a unidade de negócio, data de entrega, data de montagem e meio de contato.

### Aba Itens

Informe os produtos, tabela de preço e quantidade. Se o produto estiver configurado para trabalhar com lote ou série, será habilitado o campo **"Lote"** ou **"Série"**.

- **Visualizar quantidade do produto na empresa (F6):** para visualizar a quantidade em estoque, clique sobre este botão;
- **Desconto:** caso o usuário tenha permissão, poderá conceder desconto em alíquota ou valor diretamente no item. Se não tiver permissão, será exibida a tela de autorização;
- **Venda de produto de mostruário:** defina se o produto será vendido como de mostruário, selecionando a empresa. Um quadrado amarelo indicará ao usuário ser item de mostruário.

### Aba Repasses

Selecione o funcionário/representante para cálculo da comissão/repasse.

### Aba Negociação

Informe o prazo que será utilizado para pagamento e geração dos títulos a receber quando for transformado em pedido ou DAV.

### Aba Observação

Campos livres para inserir observações que serão exibidas no pré-pedido ou na nota fiscal.

### Aba Transportadora

Informe a transportadora que fará a entrega da mercadoria.

Feito o preenchimento dos dados, grave o pré-pedido. Será exibida a confirmação se o usuário deseja gerar, a partir do pré-pedido, o DAV.

---

## Transformar pré-pedido em pedido de venda

Selecione o pré-pedido desejado e clique sobre o botão **"Transformar pré-pedido em pedido de venda"**. O pedido será exibido para que o usuário confirme os dados. Basta gravar e o pedido será gerado.

Para visualizar o lançamento, acesse a aba **"Pedidos de venda"**.

Na parte superior é possível:
- **Duplicar o pedido** gerando pré-pedido;
- **Voltar o pedido para pré-pedido** caso tenha selecionado o pré-pedido errado.

Após transformar o pré-pedido em pedido de venda, é possível faturá-lo no módulo Faturamento. Os pedidos gerados pelo Pré-Pedido também são enviados para o módulo **Liberação de Pedido**, caso o sistema esteja configurado — sendo necessário fazer a liberação antes de prosseguir com o faturamento.

No módulo Faturamento, clique sobre o botão **"Gerar notas a partir de pedidos"** e defina os filtros para localização dos pedidos.

> **Dica:** Existe a possibilidade de lançar o pedido de venda diretamente sem precisar lançar o pré-pedido. No FatPDVCFG, acesse **Ferramentas > Opções > Aba Pré-pedido/Pedido de Venda > Geral** e marque **"Permitir criar pedido de venda, diretamente na inclusão/edição do pré-pedido"**. Assim, ao incluir um pré-pedido será exibida uma tela de confirmação para o usuário escolher se deseja gravar como pré-pedido, DAV ou pedido.

---

## Transformar pré-pedido em DAV

Localize o pré-pedido desejado e clique sobre o botão **"Gerar DAV"**. O pré-pedido será aberto para que o usuário confirme os dados. Feita a confirmação, grave.

> **Nota:** Caso o botão **"Gerar DAV"** não esteja sendo apresentado, é porque a empresa não está configurada para trabalhar com NFC-e ou PAF-ECF. O DAV é apenas um documento auxiliar da venda — não substitui o documento fiscal.

Na aba **"Documentos auxiliares"** é possível inativar o DAV ou fazer a sua edição. Caso as informações estejam corretas, basta atender o DAV no PDV Alterdata.

---

## Imprimir

Para obter um "espelho" do pré-pedido, pedido ou DAV, acesse a aba correspondente e clique em **"Imprimir"**.

> **Atenção:** Se estiver configurado no cadastro da empresa, em **Configurador > Geral > Empresas > Complementar**, a opção de **"Cupom fiscal"**, o botão de impressão na aba **"Documentos auxiliares"** fica desabilitado, sendo necessário fazer a impressão no FATDAV.

---

## Relatório de descontos em vendas efetuadas

Através do Pré-Pedido é possível gerar um relatório com os descontos emitidos nas vendas. Defina o período desejado e o tipo de desconto.

Existem outros filtros ao avançar, como: usuário, pedido e produtos. Preenchidos os dados, clique em **"Concluir"**.

---

## Atendimento vinculado ao pré-pedido

Os botões **"Novo parecer"** e **"Histórico"** no módulo ficam habilitados após a seguinte configuração:

Acesse **Configurador > Faturamento > Opções > Pedido de vendas > Centro de responsabilidade** e marque a opção **"O pedido será acompanhado com centro de responsabilidade"**.

Em seguida, informe quando o atendimento deve ser gerado. Existem três possibilidades:
- Na criação do pré-pedido;
- Na transformação em pedido;
- Não gerar atendimento para pré-pedidos.

Feitas essas configurações, no módulo serão habilitados os botões de parecer e histórico. O processo é semelhante ao utilizado no CRM e CRM Atendimento.
