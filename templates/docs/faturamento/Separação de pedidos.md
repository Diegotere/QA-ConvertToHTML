# Separação de pedidos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Do que vamos conversar?](#do-que-vamos-conversar)
- [Configurações](#configurações)
- [Rotina](#rotina)
- [Informações Extras](#informações-extras)

---

## Do que vamos conversar?

Já ouviu falar da rotina de expedição? Basicamente envolve organizar de modo eficiente a saída das mercadorias do estoque para fazer as vendas da empresa.

Imagine grandes renomes como a Amazon, Mercado Livre, Magazine Luíza, que possuem milhares de pedidos por dia para expedir. Como o volume de vendas é alto, o setor de expedição poderia facilmente se perder e trocar os produtos na hora de embalar e fazer o envio, e o cliente não vai gostar nada.

Para que isso não aconteça, antes de enviar a mercadoria ao cliente, é fundamental ter um processo de conferência no setor de expedição.

É aí que entra o módulo **Separação de Pedidos** do Bimer: antes de faturar a nota fiscal e fazer o envio para o cliente, o pedido de vendas é direcionado a esse módulo para que haja a conferência do produto e quantidade solicitada em cada pedido, observando se a mercadoria está disponível no estoque.

A rotina funciona assim:

1. **Pedido de Vendas** – É criado o pedido de vendas para o cliente e liberado (Status **L**);
2. **Separação de Pedidos** – Antes de ir para o Faturamento ou DAV, o pedido chega no módulo Separação de Pedidos para a conferência e, se estiver tudo certo, o pedido fica disponível para faturar;
3. **Faturamento ou DAV** – Transforma o pedido em nota fiscal e, com as mercadorias já conferidas e embaladas, faz o envio das mercadorias e nota ao cliente. (A transformação do pedido em notas pode ser feita também pelo módulo Pedido de Vendas.)

---

## Configurações

Acesse **Configurador / Faturamento / Opções / Pedido de Venda / Complementar**:

- **Habilitar conferência de pedidos (o pedido só poderá ser atendido caso o lote de conferência seja liberado)** – Habilita a necessidade de usar o módulo Separação de Pedidos na rotina de expedição.
  - Sem essa marcação, o usuário também consegue usar o módulo, mas o sistema não obriga que todo pedido de vendas seja conferido antes do Faturamento.

- **Permitir que o módulo de geração de NF/OE considere a quantidade conferida dos pedidos ao atendê-los** – Marque essa opção para que seja observada a quantidade conferida dos pedidos. Se não estiver selecionada, no momento de faturar o pedido pode-se escolher uma quantidade maior do que àquela conferida.
  - Exemplo: Foram conferidas 5 quantidades das 50 que foram solicitadas, e deseja-se que apenas as 5 quantidades sejam expedidas. Para isso ocorrer, deve-se marcar esta opção.
  - Se a quantidade conferida for inferior à quantidade pedida, será considerada a configuração na tela de opções em **Pedido de venda / Faturar**, com a descrição *"Quando não existir quantidade suficiente no estoque ou o pedido não for conferido totalmente, atender automaticamente os pedidos"*. Conforme a configuração selecionada, o sistema atenderá com corte, parcialmente ou não atenderá o item do pedido caso a quantidade conferida não seja suficiente.

- **Permitir que o módulo de geração de DAV considere a quantidade conferida dos pedidos ao atendê-los** – Com esta opção marcada, será considerada a quantidade conferida do pedido de venda e irá atendê-lo automaticamente no módulo de geração de DAV.
  - Se o lote de conferência for liberado sem que nenhuma quantidade do pedido seja conferida, o sistema não permitirá atender o pedido de venda gerando DAV.
  - Caso o pedido seja conferido parcialmente, no momento de gerar o DAV, o sistema atenderá esse pedido com corte gerando o DAV somente com as quantidades conferidas.

- **Ao liberar a separação do pedido, perguntar se o usuário deseja gerar DAV automaticamente** – Se o usuário confirmar, o DAV será gerado automaticamente e já será ajustado para o status de liberado para o PDV-Alterdata.

> **Observação:** Marque as duas últimas opções apenas se utilizar o DAV.

> *[Imagem: Tela de configurações do Configurador / Faturamento / Opções / Pedido de Venda / Complementar]*

---

## Rotina

Após criar e liberar o pedido de vendas, acesse o módulo **Separação de Pedido**. Digite o número do pedido ou clique em **Pedidos disponíveis** para buscar o pedido.

> *[Imagem: Tela do módulo Separação de Pedido com campo de busca por número do pedido]*

Há duas maneiras de conferir as quantidades pedidas:

1. **Individual** – É só informar o código do produto e clicar em **Enter** ou **Tab**. Assim será conferido unidade por unidade.
2. **Em massa** – Antes de informar o código do produto, preencha o campo **Quant. conferida** com a quantidade total, e após informe o código do produto.

> *[Imagem: Tela de conferência com os campos de quantidade e código do produto]*

> **Dúvida:** E se o usuário conferir a quantidade de modo errado? Tem como voltar atrás?
> Sim, é só selecionar o produto e clicar em **Restaurar item**.

> *[Imagem: Botão Restaurar item na tela de conferência]*

### Legenda de cores

A legenda de cores ajuda o usuário da expedição a se organizar:

- **Preto** – Item pendente para conferência. Se o pedido possuir 10 itens, o usuário saberá exatamente quais ainda não foram conferidos;
- **Azul** – Produto já conferido na quantidade exata solicitada pelo pedido de vendas;
- **Vermelho** – Item conferido de modo parcial, causado por motivos como: não ter a quantidade pedida no estoque ou pela falta de embalagem para expedir a mercadoria;
- **Verde** – Pedido de vendas que estejam amarrados a um DAV.

Após fazer a conferência, realize a **Liberação do Lote**:

> *[Imagem: Botão de Liberação do Lote na tela de conferência]*

Se algum produto do pedido estiver na cor vermelha (conferido de modo parcial), o sistema exige um motivo explicando o que aconteceu:

> *[Imagem: Tela solicitando motivo para item conferido parcialmente]*

Após isso é só seguir a rotina comum de vendas: **Faturar o pedido de vendas** e gerar a NF-e.

Você ainda poderá **salvar a separação** para retomar depois, além de **recuperar o lote** caso tenha iniciado o lote e não tenha finalizado.

---

## Informações Extras

### Bloqueio no Pedido

No momento de faturar o pedido de vendas (pelo módulo Faturamento ou Pedido de venda) se o usuário tentar informar uma quantidade maior do que àquela que foi conferida, a seguinte mensagem será exibida:

> *[Imagem: Mensagem de bloqueio ao tentar faturar quantidade maior que a conferida]*

> **Se Liga!** Para que esse bloqueio funcione, é necessária a marcação **"Permitir que o módulo de geração de NF/OE considere a quantidade conferida dos pedidos ao atendê-los"** (Configurador / Faturamento / Opções / Pedido de Venda / Complementar).

### Transportadora

Em algumas empresas é o setor de expedição que informa a transportadora. O Bimer está preparado para se adaptar a essa realidade.

Acesse **Configurador / Faturamento / Opções / Pedido de Venda / Separação** e marque **"Permite informar a transportadora na separação do pedido de venda"**. Se desejar tornar essa informação obrigatória, marque a opção abaixo:

> *[Imagem: Tela de configuração para informar transportadora na separação]*

Assim ao fazer a rotina a seguinte tela será exibida:

> *[Imagem: Tela de separação com campo para informar a transportadora]*

Desse modo, ao abrir o Pedido de Vendas já é possível visualizar a transportadora informada na separação do pedido.

### Alteração de Quantidades

Temos configurações para situações em que algum usuário alterou a quantidade do pedido de vendas, em **Configurador / Faturamento / Opções / Pedido de Venda / Separação**:

- **A alteração das quantidades dos itens do pedido de venda afetará as conferências** – Marque essa opção para que as alterações de quantidade no pedido de venda influenciem o módulo Separação de Pedido.

- **Ao alterar a quantidade de itens de pedido de venda que possuam conferência(s) em aberto, o sistema atualizará a quantidade pedida de todos os itens da conferência em aberto, mantendo a quantidade conferida anteriormente** – Com essa marcação, as quantidades que já foram conferidas antes permanecem no módulo Separação de Pedido. Se ela não for marcada, será necessário refazer toda a conferência do pedido.

- **Ao alterar a quantidade de itens de pedidos de venda que possuam conferência(s) liberada(s)** – Será usada quando a conferência já tiver sido finalizada:
  - A primeira opção reabre a conferência mantendo o que já foi conferido antes;
  - A segunda opção também reabre a conferência, mas zera a quantidade de todos os itens conferidos anteriormente, sendo necessário realizar o processo novamente.

- **Quadro Grupo de produtos que permitirão quantidades diferentes da quantidade pedida** – Será habilitado se desmarcar a opção *"A alteração das quantidades dos itens do pedido de venda afetará as conferências"* e marcar **"Permitir separar quantidades diferentes da quantidade pedida"**.
  - O sistema verifica se o produto em conferência está vinculado a um grupo informado neste quadro. Se sim, verifica a informação de tolerância do grupo:
    - Se for **0,00 (zero)** o sistema permitirá separar qualquer quantidade;
    - Se for **diferente de 0,00 (zero)** o sistema somente permitirá conferir quantidades que estejam dentro da tolerância, seja maiores ou menores do que a quantidade pedida;
    - Para ambos os casos, o sistema ajustará a quantidade pendente e a quantidade conferida conforme a quantidade informada e conferirá automaticamente o item. Assim é necessário que a quantidade seja informada antes do código do produto;
    - Se o produto não pertencer a nenhum dos grupos informados, a conferência será feita normalmente;
    - Caso o produto em conferência for cadastrado no pedido com quantidade por embalagem, o sistema recalculará o campo **'Qt. de embalagens'**.

#### Exemplo de cálculo de tolerância

Partindo do exemplo com 10% como margem de tolerância para o grupo do produto:

```
01° - Qt. de tolerância: Qt. pedida × Percentual da Tolerância
      Qt. de tolerância: 40 × 10% = 4

02° - Menor: Qt. pedida – Qt. da tolerância
      Menor: 40 – 4 = 36

03° - Maior: Qt. pedida + Qt. da tolerância
      Maior: 40 + 4 = 44
```

No momento de fazer a separação, se informar uma quantidade fora da tolerância para maior ou menor, a seguinte mensagem é exibida:

> *[Imagem: Mensagem de alerta com as quantidades aceitáveis dentro da tolerância]*

Em seguida, é solicitado usuário e senha que possuam acesso para liberação da quantidade fora da tolerância configurada. Se não forem informados, o sistema retorna a mensagem com as quantidades aceitáveis.

> **Se liga!** Para que essa rotina funcione, além das configurações apresentadas, há mais duas no cadastro de usuários:
> - **Permite qt. conferida diferente da qt. pedida** – Permite ao usuário informar uma quantidade conferida diferente da quantidade pedida, desde que esteja no intervalo de tolerância;
> - **Liberar qt. diferente da margem de tolerância** – Permite que um usuário informe seus dados de login para liberar uma quantidade superior ou inferior à tolerância permitida.

### Cancelamento do Pedido

A rotina de separação conta com uma proteção: caso o pedido esteja sendo utilizado no Separação de Pedido, o usuário não consegue cancelar a liberação do pedido, e nem cancelar o pedido de venda. Se o usuário tentar realizar esse processo, a seguinte mensagem é exibida:

> *[Imagem: Mensagem de bloqueio ao tentar cancelar pedido em uso no módulo Separação de Pedido]*

### Rotina com DAV

O **DAV** é o Documento Auxiliar de Venda utilizado do PDV Alterdata. O módulo Separação de Pedidos pode ser usado em conjunto com o DAV. Para isso, temos as opções **"Ao liberar a separação do pedido, perguntar se o usuário deseja gerar DAV automaticamente"** e **"Permitir que o módulo de geração de DAV considere a quantidade conferida dos pedidos ao atendê-los"** conforme visto no tópico Configurações.

Se você marcar **"Ao liberar a separação do pedido, perguntar se o usuário deseja gerar DAV automaticamente"**, ao liberar o lote do pedido, ocorrerá a mensagem:

> *[Imagem: Mensagem perguntando se deseja gerar DAV automaticamente ao liberar o lote]*

Se o pedido for direcionado ao módulo DAV, marque a opção relacionada (senão marque Faturamento):

> *[Imagem: Tela de seleção entre DAV e Faturamento]*

Após confirmar, você recebe a mensagem com o DAV gerado:

> *[Imagem: Mensagem confirmando a geração do DAV com o número do documento]*

Observe que na separação de pedidos, o sistema confirma a geração do DAV:

> *[Imagem: Tela de separação de pedidos com confirmação do DAV gerado]*

> **Se liga!** Mesmo que o usuário não gere o DAV neste momento, ele pode gerar mais tarde pelo módulo **Pedido de Vendas / NFC-e**.

### Botões do módulo Separação de Pedido

| Botão | Função |
|---|---|
| **1** | Cria lote de conferência |
| **2** | Recuperar um lote de conferência já existente. Muito utilizado para recuperar um lote que foi salvo e ainda não foi conferido |
| **3** | Salvar o lote de conferência atual (que está sendo exibido na grid) sem realizar a liberação |
| **4** | Exclui o lote atual. Usado quando há erro no lançamento da conferência e é necessário refazer a rotina |
| **5** | Libera o lote conferido |
| **6** | Relatório de resumo da conferência realizada |
| **7** | Relatório de produtos não enviados |
| **8** | Relatório com todos os pedidos de venda no lote de conferência, informando a quantidade pedida e quantidade conferida de cada pedido |

Os relatórios do módulo são utilizados como um facilitador para localizar a mercadoria no estoque, anexar à mercadoria embalada para expedição, entre outros.
