# Fechamento de Documento — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configuração](#configuração)
  - [Habilitar fechamento de NF-e e/ou OE](#habilitar-fechamento-de-nf-e-eou-oe)
  - [Configurações no Cadastro da Pessoa](#configurações-no-cadastro-da-pessoa)
  - [Acessos de Usuários e Perfis](#acessos-de-usuários-e-perfis)
  - [Operação para Pedido de Venda](#operação-para-pedido-de-venda)
- [Funcionamento da Rotina](#funcionamento-da-rotina)
  - [Pedido de Venda](#pedido-de-venda)
  - [Nota Fiscal](#nota-fiscal)
  - [Ordem de Entrega](#ordem-de-entrega)
- [Fechamento de Notas Fiscais ou Ordens de Entrega](#fechamento-de-notas-fiscais-ou-ordens-de-entrega)
  - [Notas Fiscais](#notas-fiscais)
  - [Ordens de Entrega](#ordens-de-entrega)
- [Cancelamento de Documento Gerado pelo Fechamento de NF/OE](#cancelamento-de-documento-gerado-pelo-fechamento-de-nfoe)
- [Exclusão de Documento Gerado pelo Fechamento de NF/OE](#exclusão-de-documento-gerado-pelo-fechamento-de-nfoe)

---

## Introdução

A rotina de **fechamento de documento** é utilizada nos casos em que a empresa emite notas ou ordens de entrega **sem gerar financeiro** e, periodicamente, faz o fechamento desses documentos gerando uma nova nota fiscal ou ordem de entrega. A partir da liberação deste novo documento gerado pela rotina, serão gerados os **títulos a receber**.

**Exemplo:** Em uma loja de construção, um cliente vai frequentemente pegar materiais para sua obra. Como o cliente vai com frequência e paga a cada vez, é feito um acordo entre o cliente e a loja para otimizar o processo. Neste acordo, o cliente pegará na loja os materiais que necessita, gerando uma nota de simples remessa e, no fim do mês, o cliente pagará o total dos materiais que pegou neste período. Nesse momento será gerada uma nota que movimentará o financeiro.

---

## Configuração

### Habilitar fechamento de NF-e e/ou OE

Acesse **Configurador > Faturamento > Opções > Aba Fechamento de documentos > subaba Geral** e habilite o recurso desejado. É possível utilizar ambos os recursos simultaneamente.

- **"Trabalha com fechamento de notas fiscais […]"** — marque esta opção para utilizar o recurso de fechamento de documento para notas fiscais emitidas.
- **"Trabalha com fechamento de ordens de entrega […]"** — marque esta opção para utilizar o recurso de fechamento de documento para ordens de entrega impressas.

Ao marcar estas opções, os campos de configurações das abas **NFs** e **OEs** serão, respectivamente, habilitados. As configurações destas abas são opcionais, no entanto, podem facilitar a rotina em sua utilização.

> *[Imagem: tela de configuração com opções de fechamento de NF-e e OE habilitadas]*

---

### Configurações no Cadastro da Pessoa

No cadastro de cada cliente, na aba **Cadastros**, informe:

- **Operações de fechamento para notas fiscais**
- **Operações de fechamento para ordens de entrega**

Se desejar, informe também as operações para notas fiscais e ordens de entrega padrão para este cliente.

> **Atenção:** Esta configuração não será exclusiva para a rotina de fechamento de documento. Ao emitir um pedido ou documento de venda para o cliente, o sistema buscará a operação inserida nos campos **"Operação para notas fiscais"** e/ou **"Operação para ordens de entrega"**, desconsiderando as operações padrão informadas no **Configurador > Faturamento > Opções > Operação**.

> *[Imagem: cadastro da pessoa com campos de operação de fechamento preenchidos]*

---

### Acessos de Usuários e Perfis

No sistema **Faturamento**, libere os acessos **"Fechamento de NF's"** e/ou **"Fechamento de OE's"** aos usuários ou perfis que poderão realizar esta rotina.

> **Dica:** Execute o **Atualizador de Acessos** caso um dos acessos não apareça.

> *[Imagem: tela de acessos com Fechamento de NF's e Fechamento de OE's liberados]*

---

### Operação para Pedido de Venda

No **Configurador > Faturamento > Opções > Aba Pedido de Venda > subaba Permissões**, escolha se deseja que o aplicativo **Pedido de Venda** sugira:

- A operação para **nota fiscal**; ou
- A operação para **ordem de entrega** (padrão configurado para a base de dados ou para a pessoa).

Se preferir, selecione a opção **"ambos"** para que tanto a operação de venda quanto a operação de ordem de entrega sejam sugeridas no cadastro do pedido.

> *[Imagem: configuração de sugestão de operação no Pedido de Venda]*

---

## Funcionamento da Rotina

### Pedido de Venda

Ao informar um cliente no pedido de venda, o sistema verifica se existe alguma operação informada para nota fiscal ou ordem de entrega no cadastro do cliente:

- **Em caso positivo:** sugere a(s) operação(ões) no pedido de venda, de acordo com as configurações anteriormente citadas.
- **Em caso negativo:** o sistema leva em consideração as operações padrão em **Configurador > Faturamento > Opções > Operação**.

---

### Nota Fiscal

O fechamento de Nota Fiscal se dá quando o usuário emite notas fiscais que tenham movimentado o estoque e, posteriormente, deseja gerar o financeiro.

#### Faturamento

- Caso a nota fiscal seja gerada com uma operação configurada para **atualizar financeiro**, a mesma aparecerá com status **"Não"** na coluna **Fechamento**.
- Se a operação da nota fiscal **não gerar financeiro**, o documento será apresentado com status **"Aberto"**, significando que o documento está apto a ser exibido no módulo de fechamento de notas fiscais após o envio, autorização e impressão da NF-e.

---

### Ordem de Entrega

O fechamento de Ordem de Entrega se dá quando o usuário imprime ordens de entrega que tenham movimentado o estoque e, posteriormente, deseja gerar o financeiro.

#### Faturamento

Na coluna **"Fechamento"**, a ordem de entrega terá o status **"Aberto"**. No entanto, somente após impressos e liberados estes documentos aparecerão na tela de fechamento de ordens de entrega.

> **Observação:** Ao realizar o fechamento da OE, o sistema realizará a baixa do título no financeiro **sem numerário**. Para ter um financeiro, será necessário utilizar uma operação de fechamento que atualize o financeiro na NF-e.

---

## Fechamento de Notas Fiscais ou Ordens de Entrega

No módulo **Faturamento**, aba **Diversos**, de acordo com a visualização (Nota Fiscal ou Ordem de Entrega), você verá o botão **"Fechamento de ordens de entrega"** ou **"Fechamento de notas fiscais"**.

> *[Imagem: aba Diversos do Faturamento com botões de fechamento]*

### Notas Fiscais

Nesta tela são exibidas apenas as notas fiscais geradas com operações que **NÃO atualizam financeiro**. Os títulos só serão gerados quando o fechamento de NFs for concluído.

> *[Imagem: tela de fechamento de notas fiscais]*

Na coluna **"Gerar NF/OE"**, selecione se deseja gerar uma nota fiscal ou uma OE para as notas fiscais marcadas. Após marcar as notas fiscais e informar o documento que deseja gerar, clique em **"Processar"**.

Depois de gerar o novo documento, basta enviá-lo para a SEFAZ ou imprimi-lo e executar o **liberador de estoque** (após autorização ou impressão).

> **Nota:** Caso haja um mesmo produto informado em várias notas fiscais, o sistema aglutinará o produto apenas se não houver diferença no valor unitário informado.

---

### Ordens de Entrega

No fechamento de ordens de entrega são exibidas todas as OEs com status do fechamento **"Aberto"**. São apresentadas OEs que geraram financeiro ou não, pois ao gerar o documento do fechamento, o sistema verificará se as OEs possuem títulos vinculados e fará a **baixa sem numerário** dos títulos vinculados a elas, gerando novos títulos de acordo com o prazo informado no **Configurador > Faturamento > Opções > Fechamento de documentos > OEs**.

> *[Imagem: tela de fechamento de ordens de entrega]*

Na coluna **"Gerar NF/OE"**, selecione se deseja gerar uma nota fiscal ou uma OE para as ordens marcadas. Após marcar as OEs e informar o documento que deseja gerar, clique em **"Processar"**.

Depois de gerar o novo documento, basta enviá-lo para a SEFAZ ou imprimi-lo e executar o **liberador de estoque** (após autorização ou impressão).

> **Nota:** Caso haja um mesmo produto informado em várias notas fiscais, o sistema aglutinará o produto apenas se não houver diferença no valor unitário informado.

---

## Cancelamento de Documento Gerado pelo Fechamento de NF/OE

Ao cancelar um documento gerado pelo fechamento de notas fiscais ou ordens de entrega, é necessário marcar a opção **"Criar novo documento"**. Desta forma, o sistema fará os devidos vínculos mantendo as informações de origem com o novo documento.

Ao imprimir (OE) ou enviar (NF-e), o vínculo dos documentos do fechamento pode ser visto pela **linha do tempo**.

> *[Imagem: linha do tempo mostrando vínculo entre documentos do fechamento]*

---

## Exclusão de Documento Gerado pelo Fechamento de NF/OE

Caso o documento gerado seja **excluído**, o sistema desfaz o fechamento que fora realizado, deixando as notas fiscais ou ordens de entrega livres para serem inseridas em um novo fechamento.

O mesmo ocorre caso, após cancelar um documento, a cópia do documento seja excluída.
