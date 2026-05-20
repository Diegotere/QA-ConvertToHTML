# Transferência entre empresas — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Rotina](#rotina)

---

## Introdução

O recurso de **transferência entre empresas** tem a finalidade de conferir e liberar a solicitação realizada entre as empresas cadastradas no Bimer. Possui duplo recurso de entrada e saída de mercadorias, ou seja, realiza a saída do estoque da empresa que está fornecendo os produtos e a entrada no estoque da empresa que está solicitando os itens.

Na legislação atual há a previsão de transferência de mercadorias entre empresas. De acordo com a regulamentação, só pode haver transferência de mercadoria entre **estabelecimentos da mesma empresa**, por exemplo:

- Matriz → Filial
- Filial → Matriz
- Filial → Filial

Para empresas que não sejam da mesma titularidade, existem outros mecanismos para classificar a circulação de mercadorias, que não seja por comercialização.

Existem vários motivos para a realização de transferências. Por exemplo:

- **Transferência de mercadoria entre lojas** – Quando um cliente chega a um estabelecimento comercial e deseja um produto, porém é verificado que está em falta no estoque, mas possui saldo em estoque numa outra loja. Dessa forma, o estabelecimento que está comercializando a mercadoria faz uma solicitação de transferência para a loja que possui o produto, para atender a requisição do cliente;
- **Transferência de mercadoria do centro de distribuição para as lojas** – Existe um centro principal de estoque dos produtos, o qual distribui esses produtos para cada uma das lojas da empresa.

Em um processo de transferência, a empresa de origem da mercadoria precisa emitir uma **NF de saída por transferência**, e a empresa destinatária precisa realizar o **registro de entrada** desta mercadoria. Para facilitar essa rotina, o Bimer possui o recurso de transferência entre empresas.

---

## Configurações

### Opções do Estoque

Primeiro acesse **Configurador / Estoque / Opções / Compras / Assistente de compras** e marque **"Utilizar recurso de transferência de estoque entre empresas"**. Com essa opção marcada, será habilitado no BI Estoque este novo recurso.

> *[Imagem: Tela de configurações do Assistente de compras com a opção de transferência entre empresas marcada]*

Na aba **Movimento, Opções gerais** desmarque **"Libera os lotes de transferência entre empresas automaticamente"**. Isto é importante para acionar a conferência na transferência, possibilitando assim o controle do processo, pelo Módulo **Liberação de Transferência**.

> *[Imagem: Tela de opções gerais de movimento com a opção de liberação automática desmarcada]*

### Opções do Faturamento

Acesse **Configurador / Faturamento / Opções / Operação**, aba **Transferência**, e preencha as operações que serão utilizadas no momento da transferência:

| Operação | Configuração necessária |
|---|---|
| **Operação para nota fiscal de transferência** | Transferência, saída, atualiza estoque, não atualiza financeiro, tipo de documento de NF |
| **Operação para nota fiscal de entrada por transferência** | Entrada, atualiza estoque, tipo de documento de NF |
| **Operação para ordem de entrega de entrada por transferência** | Entrada, atualiza estoque, tipo de documento OE |
| **Operação para o documento de transferência – nota fiscal (filial)** | Transferência, saída, atualiza estoque, não atualiza financeiro, tipo de documento de NF |
| **Operação para o documento de transferência – ordem de entrega (filial)** | Entrada, atualiza estoque, tipo de documento OE |
| **Operação para o documento de venda/saída – nota fiscal (transferência para outras empresas)** | Venda, atualiza estoque, com operação de entrada para transferência informada, tipo de documento de NF |
| **Operação para o documento de venda/saída – ordem de entrega (transferência para outras empresas)** | Venda, atualiza estoque, com operação de entrada para transferência informada, tipo de documento de OE |

> *[Imagem: Tela de configurações do Faturamento com as operações de transferência preenchidas]*

---

## Rotina

### Veja como funciona

O processo de transferência funciona assim:

1. A **empresa de origem** emite a NF de transferência, gerando o DANFE para acompanhar a mercadoria em trânsito;
2. Após a emissão, é feita a conferência e liberação da NF no módulo **Liberação de Transferência**;
3. Após a liberação pela empresa emitente, a **empresa de destino** faz a conferência e liberação da NF no módulo **Liberação de Transferência**, para que o sistema faça o registro da entrada da NF, sem a necessidade do registro manual.

A transferência pode ser feita pelo sistema de **3 formas**:

**1 – Faturamento (Transferência manual)**
A NF de saída de transferência pode ser digitada manualmente no módulo Faturamento, pela empresa de origem da mercadoria.
- Rotina: Criar e emitir NF de saída no módulo Faturamento → Empresa origem libera NF de saída no módulo Liberação de Transferência → Empresa destino libera NF de entrada no módulo Liberação de Transferência.

**2 – Assistente de Compras**
A NF de transferência é gerada pelo recurso de assistente de compras, existente no BI Estoque.
- Rotina: Criar NF de saída pelo módulo BI Estoque → Imprimir NF de saída no módulo Faturamento → Empresa origem libera NF de saída no Módulo Libera Transferência → Empresa destino libera NF de entrada no módulo Libera Transferência.

**3 – Estoque distribuído**
A NF de transferência é gerada pela emissão do pedido ou pré-pedido, quando, no momento da venda, não há saldo da mercadoria em determinado estabelecimento que está realizando uma venda, no entanto, esse produto possui saldo em estoque em outra loja, filiada ao estabelecimento.
- Rotina: Pedido de vendas gera NF de saída → Imprimir NF de saída no módulo Faturamento → Empresa origem libera NF de saída no módulo Libera Transferência → Empresa destino libera NF de entrada no módulo Libera Transferência.

### Faturamento (Transferência manual)

Para realizar a transferência manual é necessário criar uma nota pelo módulo do **Faturamento**, informando:

- **Empresa de Origem** – Informada nos campos **Empresa de venda** e **Empresa do financeiro**;
- **Destinatário** – Insira a Pessoa (Empresa) que representa a filial que receberá as mercadorias;
- A operação é carregada automaticamente pela tela de configuração, mas pode ser ajustada.

> *[Imagem: Tela do Faturamento com os campos de empresa de origem e destinatário preenchidos para transferência]*

Inclua todos os itens que serão transferidos:

> *[Imagem: Tela do Faturamento com os itens da transferência incluídos e o CST 90 exibido]*

> **Nota:** O CST **90** representa que o valor não será tributado nesta nota, já que se trata de uma transferência entre empresas do mesmo grupo. Mas isso pode variar, por isso o ideal é o cliente confirmar com sua consultoria tributária.

Por fim, faça o envio da NF-e para a SEFAZ para que a mesma seja autorizada. A nota precisa estar com status de **I (Impressa)** e **Liberada** pelo sistema **Liberador de estoque** para que seja reconhecida pelo módulo Liberação de Transferência:

> *[Imagem: Lista de notas no Faturamento com a nota de transferência com status Impressa e Liberada]*

> **Você sabia?** O quadradinho rosa ao lado da nota representa um documento que está pendente de liberação pelo módulo Liberação de Transferência.

Após isso, abra o módulo **Liberação de Transferência** e insira o código da empresa que está enviando os produtos. Veja na tela a nota fiscal:

> *[Imagem: Tela do módulo Liberação de Transferência com a nota fiscal da empresa de origem]*

Neste momento é possível conferir os itens da transferência e os dados cadastrais da empresa. Se estiver tudo certo, o documento poderá ser liberado, clique no ícone **Liberar Transferência**.

> **Vamos de Dica:**
> 1. Para a rotina de transferência, quando o documento é impresso no Faturamento, o sistema **não movimenta** a quantidade dos itens no estoque, somente após a liberação da transferência.
> 2. Após isso é necessário rodar o **Liberador de estoque** para que a nota de transferência no Faturamento seja finalizada, e o documento de Entrada de Transferência apareça para a empresa de destino no Liberação de Transferência.

Após liberar a transferência da empresa que está enviando os produtos, faça a liberação da empresa de destino. Para isso inclua o código da empresa e veja na tela os documentos que estão aguardando conferência.

Para liberar o documento e alimentar a quantidade em estoque dos produtos, clique no ícone **Liberar Transferência**, insira os dados do usuário habilitado para realizar a rotina.

> *[Imagem: Tela do módulo Liberação de Transferência com os documentos aguardando conferência da empresa de destino]*

Se o **Liberador do Estoque** estiver em funcionamento, o estoque da empresa será alimentado com a quantidade informada na transferência.

Após isso é criada automaticamente uma nota de entrada **Liberada** no módulo **Nota Fiscal de Entrada** para a empresa de destino, com o número da nota emitida no Faturamento e a operação apontada nas configurações do Faturamento. Desse modo, fechamos a rotina!

> *[Imagem: Nota de entrada criada automaticamente no módulo Nota Fiscal de Entrada para a empresa de destino]*

### Transferência via Assistente de Compras

Outra forma de realizar a transferência entre empresas é através do recurso de **Assistente de Compras**, do BI Estoque.

1. Ao acessar o **BI Estoque**, crie um cenário de consulta, clicando em **Novo**;
2. Na próxima tela, selecione **Assistente de compras** como área de pesquisa, preencha os demais campos e clique em **filtrar**;

> *[Imagem: Tela do BI Estoque com o cenário de consulta do Assistente de Compras]*

3. Na tela de resultado, selecione os produtos que deseja transferir de uma empresa para outra. A seleção pode ser feita clicando sobre o produto e arrastando para o quadro inferior chamado **transferência**, ou clique sobre o produto e após no botão **Incluir produto**;

> *[Imagem: Tela de resultado do Assistente de Compras com os produtos selecionados para transferência]*

4. Após selecionar o(s) produto(s) clique sobre **Gerar lançamento** (opção ao lado de Incluir Produto), informe a **empresa de origem**, a **empresa de destino** e **quantidade** a ser transferida;

> *[Imagem: Tela de geração de lançamento com os campos de empresa de origem, destino e quantidade]*

5. Por fim clique em **Efetuar Transferência**:

> *[Imagem: Botão Efetuar Transferência na tela do Assistente de Compras]*

O sistema gera uma **Nota Fiscal de transferência em Aberta** no módulo Faturamento. Após a liberação da nota, basta realizar a liberação pelo módulo **Liberação de Transferência**, conforme já visto neste manual.

### Transferência via Estoque Distribuído

Existe também a opção de transferência de mercadoria utilizando o recurso de **Estoque distribuído** do Pré-pedido ou Pedido de venda. Neste manual não será detalhada a rotina de Estoque distribuído. Se quiser saber mais, acesse a página de manuais do portal da UCA e busque a apostila relacionada.
