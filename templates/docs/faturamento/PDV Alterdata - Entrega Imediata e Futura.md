# PDV Alterdata — Entrega Imediata e Futura — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Fluxo da Rotina](#fluxo-da-rotina)
- [Configurações](#configurações)
  - [Configurador Bimer](#configurador-bimer)
  - [Configurador do PDV Alterdata](#configurador-do-pdv-alterdata)
- [Funcionamento da Rotina](#funcionamento-da-rotina)
  - [Emissão do DAV](#emissão-do-dav)
  - [Emissão de DAV a partir de Pré-pedido ou Pedido de Venda](#emissão-de-dav-a-partir-de-pré-pedido-ou-pedido-de-venda)
  - [Finalização da Venda no PDV Alterdata](#finalização-da-venda-no-pdv-alterdata)
  - [Documentos Criados na Retaguarda](#documentos-criados-na-retaguarda)
- [Conclusão](#conclusão)

---

## Introdução

Através do recurso de **Entrega Imediata e Futura**, ao realizar uma venda no PDV Alterdata, é possível determinar se a entrega das mercadorias será realizada na hora ou em data combinada com o cliente.

**Exemplo:** Em uma loja de material de construção, o cliente pede 01 rolo de 50 metros de fio e 02 metros de areia. Como há estoque do rolo de fio e o volume não é tão grande, o cliente o levará de imediato. Porém, a areia será entregue futuramente, pois necessitará que um caminhão da loja realize o transporte até a casa do cliente.

---

## Fluxo da Rotina

1. O cliente chega à loja e faz a compra de 20 sacos de areia e 01 rolo de fio.
2. O atendente registra o pedido no módulo **FatDAV**, marcando o item **rolo de fio** como entrega imediata e o produto **saco de areia** como entrega futura.

   > **Observação:** A criação do DAV pode ser realizada também a partir de um **Pré-pedido** ou um **Pedido de vendas**, conforme a rotina da empresa.

3. O cliente dirige-se ao caixa, e o funcionário finaliza a venda no PDV Alterdata a partir do DAV, emitindo a NFC-e contendo os dois produtos.
4. O cliente leva o rolo de fio com a NFC-e.
5. O **Concentrador** e o **Integrador Bimer x SPICE / PDV Alterdata** realizam o processo de importação das vendas do PDV.
6. A integração gera **3 documentos** no Bimer:
   - **6.1** — A NFC-e da venda dos produtos emitida pelo PDV, no módulo Faturamento.
   - **6.2** — Uma NF-e no módulo Faturamento, com status **Aberta**, com o produto areia, para entrega futura. Essa nota será enviada manualmente para a SEFAZ somente na data da entrega.
   - **6.3** — Um documento interno (não fiscal), visível apenas no módulo de consulta de estoque, para fazer a saída do produto fio da entrega imediata.

---

## Configurações

### Configurador Bimer

Acesse **Configurador Bimer >> Faturamento >> Opções >> Venda >> Entrega imediata e futura** e marque a opção **"Trabalha utilizando entrega imediata / entrega futura"**.

O campo **"Característica de entrega futura"** é opcional. Caso informe uma característica de produto neste campo, ao criar um DAV, pré-pedido ou pedido de vendas e inserir um produto com essa característica, por padrão o sistema o marcará para entrega futura. Se não informar uma característica, todos os produtos virão marcados como entrega imediata por padrão.

> **Se Liga!** No momento de criação do pré-pedido, é possível escolher manualmente os produtos para entrega imediata ou futura, independente da característica do produto. A característica é apenas um facilitador que define o tipo de entrega automaticamente.

### Configurador do PDV Alterdata

No **PDVAlterdataCFG**, acesse **Opções >> Operações**, na área **"Operações para entrega imediata e futura"**, e informe as seguintes operações:

1. **Operação para atualizar financeiro** — Era utilizada na criação de um documento para gerar o(s) título(s) a receber da venda realizada no PDV. Atualmente está em desuso, porém continua sendo obrigatória. A operação precisa ser do tipo **venda**, **atualizar financeiro** e **não atualizar estoque**.

2. **Operação para atualizar estoque entrega imediata** — Utilizada para gerar um documento interno que faz a saída do produto com entrega imediata. Precisa ser do tipo **venda**, **não atualizar financeiro** e **atualizar estoque**. Recomenda-se que o tipo de documento vinculado na operação esteja configurado como **documento interno (não fiscal)**, por ser utilizado apenas para movimentar o estoque do produto.

   > **Observação:** A movimentação gerada por esse documento será visível apenas na consulta do movimento de estoque (`EstConsulta`).

3. **Operação para atualizar estoque entrega futura** — Utilizada para gerar o documento que atualizará o estoque dos produtos de entrega futura. Precisa ser do tipo **venda**, **não atualizar financeiro**, **atualizar estoque**, **não calcular IPI** e **ICMS Substituição Tributária**.

   > **Atenção!** Se o tipo de documento informado no cadastro dessa operação estiver configurado para emissão de **NF-e**, será criado um documento na aba **Nota Fiscal** no Faturamento. Se for um tipo de documento configurado para emissão de **OE**, será criado um documento na aba **Ordem de entrega** no Faturamento.

---

## Funcionamento da Rotina

A venda de produtos com entrega futura precisa obrigatoriamente ser feita a partir de um **DAV – Documento Auxiliar de Venda**. Não é possível realizar esse tipo de venda diretamente pelo PDV Alterdata.

### Emissão do DAV

A criação do DAV ocorre normalmente. A diferença está em um detalhe na inclusão dos itens: o campo **"Tipo de entrega"**.

> *[Imagem: tela de inclusão de itens no DAV com campo "Tipo de entrega" — produto "areia lavada" marcado para entrega futura e produto "Cimento" marcado para entrega imediata]*

> **#ParaNãoEsquecer:** O produto areia veio marcado automaticamente com entrega futura porque no seu cadastro tem a característica de produto que também está informada no **Configurador Bimer >> Faturamento >> Opções >> Venda >> Entrega imediata e futura >> campo "Característica de entrega futura"**.

> **#PodeSerDúvida:** Posso trocar o tipo de entrega na hora da venda? Sim! O usuário tem a liberdade de trocar o tipo de entrega de futura para imediata, e vice-versa. A característica de produtos é apenas um facilitador.

Na tela principal do DAV, na grade de produtos, é possível identificar facilmente qual deles está marcado para entrega futura através da marcação na coluna **EF**.

### Emissão de DAV a partir de Pré-pedido ou Pedido de Venda

Além da criação manual no módulo FatDAV, também é possível criar DAVs a partir de pré-pedido ou pedido de venda. Nesses módulos, o detalhe também está na inclusão dos produtos — nas telas de item há a opção do tipo de entrega imediata ou futura.

**No Pré-pedido:**
- Na coluna **"T"** da grade dos itens, os produtos para entrega imediata ficam com ícone **azul** e os produtos para entrega futura com ícone **vermelho**.
- Para trocar, clique na opção **"Alterar tipo de entrega"** — é possível trocar somente o produto selecionado na grade ou todos.

**No Pedido de venda:**
- A opção do tipo de entrega está na tela de inserção do produto.

Depois de criados, transforme-os em DAV e dê sequência na rotina de venda.

> Para saber como criar DAV a partir de pré-pedido ou pedido de vendas, consulte o manual **"PDV Alterdata – DAV (Documento Auxiliar de Venda)"** disponível no **Portal UCA >> Bimer >> Materiais >> Manuais**.

### Finalização da Venda no PDV Alterdata

No PDV, o processo não muda: selecione o DAV normalmente através das teclas **Alt + O** e finalize a venda. O PDV emitirá a NFC-e para ser entregue ao cliente, e o restante da rotina acontecerá na retaguarda.

> Não se esqueça de fazer a importação no **Concentrador** e no **Integrador Bimer x Spice / PDV Alterdata**.

### Documentos Criados na Retaguarda

Na rotina de venda com NFC-e, serão criados **3 documentos** na retaguarda (Bimer):

#### NFC-e da Venda

No **Faturamento >> aba Nota Fiscal Consumidor**, é criada a NFC-e da venda contendo **todos os produtos**, independente do tipo de entrega.

A NFC-e é gerada com um tipo de operação de venda criada automaticamente pelo sistema quando a primeira venda com produtos para entrega futura ocorrer. Essa operação não atualiza estoque, somente financeiro.

O cliente já sai com o DANFE dessa NFC-e e com o produto que ele mesmo levará.

> A operação fica configurada no **Integrador Bimer x Spice >> PDV Alterdata >> Aba Principal >> Terminais**.

#### Documento Interno para Movimentação do Estoque

O cliente levou os produtos com entrega imediata acompanhados por uma NFC-e que não movimentava estoque. Por isso, o sistema cria um **documento interno (não fiscal)** com a operação informada no **PDVAlterdataCFG >> Opções >> Operações >> Operações para entrega imediata e futura >> Operação para atualizar estoque entrega imediata**.

Como não se trata de um documento fiscal, só é possível visualizá-lo na aba de movimentação no módulo **Consulta de estoque**.

#### NF-e / OE para Entrega Futura

Uma empresa não pode transportar um produto sem o acompanhamento de um DANFE. Por isso, o sistema cria uma **NF-e** no **Faturamento >> Aba Nota Fiscal**, com a operação informada no **PDVAlterdataCFG >> Opções >> Operações >> Operações para entrega imediata e futura >> Operação para atualizar estoque entrega futura**. Essa operação está configurada para movimentar estoque.

O documento é criado com **Status NF-e Aberto**, pois deverá ser enviado para autorização da SEFAZ somente na data da entrega.

> **#Dica:** Se a operação estivesse configurada com um tipo de documento de OE, em vez de criar o documento na aba Nota Fiscal, ele seria criado na aba **Ordem de Entrega**.

---

## Conclusão

Com a emissão dos documentos citados, a rotina de venda é finalizada. Caso tenha alguma dúvida na rotina ou queira sugerir alguma melhoria nesse conteúdo, entre em contato com o time Bimer na UCA.
