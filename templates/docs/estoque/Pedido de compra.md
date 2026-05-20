# Pedido de Compras — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Visão geral](#visão-geral)
  - [Filtros](#filtros)
  - [Tela de resultado do filtro](#tela-de-resultado-do-filtro)
- [Gerar Pedido](#gerar-pedido)
  - [Aba Itens](#aba-itens)
  - [Bloqueio de inclusão de itens em pedido gerado por cotação](#bloqueio-de-inclusão-de-itens-em-pedido-gerado-por-cotação)
  - [Aba Outros](#aba-outros)
  - [Aba Endereço de entrega](#aba-endereço-de-entrega)
  - [Aba Negociação](#aba-negociação)
  - [Gravar Pedido](#gravar-pedido)
- [Relatórios](#relatórios)
  - [Relatório de Pedido de Compra](#relatório-de-pedido-de-compra)
  - [Projeção de Compromissos Assumidos](#projeção-de-compromissos-assumidos)
  - [Controle de Pedido de Compra](#controle-de-pedido-de-compra)
- [Cancelamento](#cancelamento)
- [Auditoria](#auditoria)
- [Duplicar Pedido de Compra](#duplicar-pedido-de-compra)
- [Envio pelo WhatsApp Web](#envio-pelo-whatsapp-web)
- [Informações adicionais](#informações-adicionais)
  - [Título de previsão](#título-de-previsão)
  - [Bloqueio de datas](#bloqueio-de-datas)
  - [Menu de contexto](#menu-de-contexto)

---

## Introdução

O módulo **Pedido de Compra** é responsável por administrar pedidos de compra da empresa. Por meio dele é possível criar ou visualizar pedidos de compra. Este módulo faz parte da rotina de compra no Bimer, portanto, integra o grupo de módulo do **Estoque**.

No Pedido de Compra é possível criar um pedido independente ou visualizar um registro gerado por outros módulos, que podem ser **Requisição de Materiais** ou **Cotação**.

A rotina de compra de uma empresa consiste em um dos momentos mais importantes, portanto, por meio desta aplicação, será possível registrar dados combinados com o fornecedor, como valores e prazos de pagamento. Estes dados serão recuperados pelo aplicativo **Nota Fiscal de Entrada**, quando será dada a entrada nas mercadorias e, consequentemente, no documento fiscal.

---

## Visão geral

Na tela principal, podemos ter uma visão geral dos pedidos de compra. Para que os pedidos sejam mostrados na tela principal, informe a **empresa** e o **período** que deseja visualizar.

> *[Imagem: Tela principal do módulo Pedido de Compras]*

### Filtros

É possível filtrar quais pedidos de compra aparecerão através de campos opcionais. Ainda na tela principal, na parte superior é possível filtrar pelo **Fornecedor**, **Centro de custo** e **Usuário responsável pela liberação**. Abaixo do campo de data de emissão, é possível realizar filtros por **status** de pedido de compra. Veja abaixo o que se refere cada status:

- **Em digitação** – Os pedidos que possuem este status ainda não foram concluídos e estão aptos a edições
- **Aguardando** – Estes pedidos já foram digitados e estão aguardando liberação
- **Aberto** – O pedido já foi liberado e está aguardando a entrega dos produtos (entrada do documento fiscal)
- **Cancelado** – O pedido foi cancelado por algum motivo, não podendo mais ser utilizado
- **Atendido com corte** – O fornecedor entregou parte da quantidade de produtos pedida e não entregará o restante
- **Parcialmente atendido** – O fornecedor entregou parte da quantidade de produtos pedida e entregará o restante posteriormente. A quantidade restante dos produtos ficará em "Aberto", aguardando a chegada da mercadoria para ser transformado em nota fiscal
- **Totalmente atendido** – Todos os produtos foram entregues. Desta forma, o pedido está "finalizado"
- **Confirmado** – O pedido foi confirmado, e o status não poderá mais ser editado (somente cancelado). Neste momento, está aguardando ser transformado em nota fiscal
- **Encerrado** – É utilizado em rotinas específicas do PCP Nomus
- **Autorização**
  - **Pendente** – Este status é utilizado quando o usuário faz um pedido fora das permissões concedidas ao mesmo nas configurações do **Controle de Alçada** (Cadastro de Usuários). O pedido ficará bloqueado para qualquer edição ou alteração de status, sendo possível apenas visualizá-lo
  - **Negada** – Neste status, o pedido fica totalmente editável. Este status é utilizado caso a autorização solicitada é negada no **Autorizador Gerencial**. Sendo assim, o usuário pode editar este pedido e enviar novamente solicitando autorização para prosseguir com a compra

> **Nota:** Além do status do pedido, há status por produto. Portanto, para que o pedido de compra apareça para ser recuperado no **Nota Fiscal de Entrada**, o status do item precisa ser **Aberto**, **Parcialmente Atendido** ou **Confirmado**.

---

### Tela de resultado do filtro

Após realizar os filtros, os pedidos serão mostrados no grid do módulo. Algumas colunas trazem dados do pedido, como código e fornecedor, além do status.

> *[Imagem: Grid de pedidos de compra com colunas de dados]*

Outras colunas:

- **Baixado** – Este campo se refere à baixa do título de pagamento antecipado. Caso esteja baixado, aparecerá um tique azul
- **Pgto. ant.** – Este campo serve para informar se o pedido possui ou não pagamento antecipado. Em caso positivo, será marcado com um ícone de uma gota azul
- **Fat. Terc.** – Este campo indica se o pedido trabalha ou não com a rotina de faturamento por terceiro
- **Status** – Informa o status em que o pedido se encontra atualmente
- **Possui atendimento**, **Atendimento Encerrado** e **CR Atual** – São utilizados quando a base de dados está configurada para trabalhar com Centro de Responsabilidade

---

## Gerar Pedido

Um pedido pode ser gerado automaticamente pela rotina de **Requisição** ou **Cotação**. Além disso, é possível criar um pedido de forma manual clicando em **Novo**.

Na tela de cadastro do pedido de compra preencha os campos de acordo com a necessidade.

> *[Imagem: Tela de cadastro do pedido de compra]*

- **Código:** Informe manualmente o código do pedido ou deixe em branco para que o sistema atribua um código sequencial automaticamente ao gravar o pedido de compra
- **Nr. Orçamento:** O preenchimento deste campo é opcional e servirá apenas para registro. Algumas empresas geram um orçamento manual, este possui um número que poderá ser vinculado ao pedido de compra apenas como um informativo
- **Previsão de entrega:** Na parte superior direita, informe a previsão de entrega da mercadoria
- **Status do pedido:** Selecione o status do pedido
- **Outros campos:** Os campos de natureza de lançamento, operação e indexador são utilizados para definir dados específicos do pedido

---

### Aba Itens

Neste local, adicione os itens do pedido de compra e suas respectivas informações relativas à quantidade, valor, impostos, etc, clicando em **Adicionar**.

> *[Imagem: Aba Itens do pedido de compra com botão Adicionar]*

---

### Bloqueio de inclusão de itens em pedido gerado por cotação

Para bloquear a inclusão de itens em pedidos de compra gerados a partir de cotação, acesse **Usuário / Selecione o usuário ou perfil desejado / Sistemas / Pedido de Compra / Assinatura Eletrônica / Permitir a inclusão de itens na edição do pedido** e remova a permissão **Em pedidos de compra gerados por cotação**. Esta permissão foi criada para que seja possível manter o pedido somente com os itens da cotação, e para que haja possibilidade de liberação, foi criado o respectivo acesso.

Ao tentar incluir um item no Pedido de Compra, o sistema apresenta uma mensagem informando sobre o bloqueio.

> **Nota:** Esta configuração não impede que o usuário altere outros dados, como por exemplo, a quantidade pedida de um item já presente no pedido de compra. Seu funcionamento é exclusivo para o impedimento da inclusão de um produto diferente dos que já estão no pedido em edição.

---

### Aba Outros

Neste local é possível informar o **tipo de frete** (por conta do emitente, destinatário, etc), a **transportadora**, e valores de **acréscimo**, **desconto**, **frete**, etc.

O campo **Usuário responsável pela liberação do pedido** pode ser utilizado opcionalmente. Ao preencher, você determinará um usuário que seja exclusivamente responsável por realizar a liberação deste pedido. Esta rotina é utilizada em situações em que é preciso que uma pessoa responsável revise e valide os pedidos de compra realizados.

O campo **Cotação** é preenchido automaticamente quando o pedido é gerado a partir do módulo **Cotação**.

---

### Aba Endereço de entrega

Nesta aba, insira as informações do endereço em que os produtos contidos no pedido de compra deverão ser entregues.

---

### Aba Negociação

Nesta aba é necessário informar os dados de pagamento do pedido de compra. Opte por um **prazo de pagamento** previamente criado ou insira as parcelas manualmente, clicando em **Adicionar**.

> *[Imagem: Aba Negociação com opções de prazo de pagamento e parcelas]*

---

### Gravar Pedido

Dados preenchidos? Vamos lá! Para gravar o pedido, clique em **Ok**.

> **Atenção:** É importante estar atento ao status escolhido para o pedido, já que alguns status não permitem uma edição posterior.

Caso esteja com o status **Aguardando**, para realizar a liberação do pedido, abra-o e clique em **Liberar**. Também é possível realizar a liberação alterando o status para **Aberto**.

> *[Imagem: Botão Liberar no pedido de compra]*

É possível que seja apresentada uma tela para informar dados de login e o motivo da liberação. Isto ocorre em virtude da opção **Sempre apresentar tela de assinatura eletrônica ao liberar pedidos de compra** no **Configurador / Estoque / Opções / Aba Compras / aba Geral**.

Com o pedido liberado (status **Aberto**), o mesmo poderá ser transformado em nota, no módulo **Nota Fiscal de Entrada**.

---

## Relatórios

De volta à tela principal do Pedido de Compras, é possível gerar alguns relatórios para impressão. Os relatórios estão na seção **Relatórios**.

As opções **Imprimir** e **Visualizar** reproduzem exatamente o que está na grid do Pedido de Compra.

---

### Relatório de Pedido de Compra

Gera um relatório de vários pedidos informando a **quantidade dos itens**, **valor unitário**, **unidade** e **nome do produto**. Cada pedido é mostrado em páginas individuais.

> *[Imagem: Exemplo de relatório de Pedido de Compra]*

Também é possível realizar a impressão de um pedido específico sem acessar o relatório. Para isto, abra o pedido que deseja imprimir e em seguida clique **Imprimir** ou **Visualizar**.

> **Nota:** A impressão é realizada por meio de um **RTM**. Portanto, a impressão pode ser personalizada tanto no relatório, quanto no pedido de compra.

---

### Projeção de Compromissos Assumidos

Este relatório demonstra o valor de títulos a pagar em aberto com seus fornecedores.

> *[Imagem: Exemplo de relatório de Projeção de Compromissos Assumidos com aglutinação por fornecedor]*

---

### Controle de Pedido de Compra

Este relatório é bem útil em casos que se deseja ter um controle dos pedidos, sabendo a relação de **produtos**, **fornecedores**, **pedidos**, **quantidade**, **data de entrega/emissão** e **valor**.

> *[Imagem: Exemplo de relatório de Controle de Pedido de Compra]*

---

## Cancelamento

Para cancelar um pedido por algum motivo como, por exemplo, não haver mais necessidade de comprar aqueles itens, selecione o pedido no grid e clique no botão **Cancelar o pedido**. O sistema fará uma confirmação por segurança.

Ao confirmar, será aberta uma janela de **assinatura eletrônica** para informar o motivo do cancelamento e informar os dados de acesso.

Após concluir, o pedido fica com status **Cancelado** e não pode mais ser editado.

> *[Imagem: Tela de assinatura eletrônica para cancelamento do pedido]*

---

## Auditoria

O botão **Auditoria do pedido selecionado** traz dados sobre o pedido selecionado na tela principal do módulo Pedido de Compra. São exibidos eventos relevantes, como alterações feitas no pedido após ter sido criado, com dados do que foi feito e o usuário responsável.

> *[Imagem: Tela de auditoria do pedido de compra]*

---

## Duplicar Pedido de Compra

Caso deseje duplicar um determinado pedido para que não necessite redigitar um novo, selecione o pedido desejado e clique no botão **Duplicar pedidos**.

Caso queira alterar o pedido a ser duplicado, altere o código do pedido ou pesquise pelo campo **Pedido de compra**.

Confirme se deseja manter as datas de entrega do pedido e dos itens ou alterá-las.

> **Nota:** Quando há uma duplicação, o pedido original fica como **ancestral** do novo pedido na **Linha do Tempo**.

> *[Imagem: Tela de duplicação de pedido de compra]*

---

## Envio pelo WhatsApp Web

A partir da versão **10.00.07.00** é possível fazer o envio do pedido para o fornecedor direto pelo **WhatsApp Web**. Para isso, é necessário que o fornecedor tenha o número do celular registrado no contato principal do seu cadastro no módulo **Pessoa**. Além disso, é necessário estar logado no WhatsApp Web na mesma máquina que está abrindo o pedido.

Para realizar o envio:

1. Selecione o pedido e clique sobre o ícone do **WhatsApp Web** na tela principal do Pedido de Compras
2. Caso o fornecedor tenha mais de um telefone registrado no seu cadastro, o sistema solicitará que você selecione para qual número ele deverá fazer o envio
3. Caso o fornecedor não tenha o telefone cadastrado, você poderá selecionar a opção **"Enviar para outro número"** e, no campo que será habilitado, digite o número do fornecedor com DDD e clique em **"Enviar"**
4. Caso queira enviar para mais de um contato, selecione a opção **"Enviar para contatos do WhatsApp Web"**

Depois de selecionar ou informar manualmente o número, será iniciada a conversa no WhatsApp Web do fornecedor já com os detalhes do pedido.

> *[Imagem: Conversa no WhatsApp Web com detalhes do pedido]*

---

## Informações adicionais

### Título de previsão

É possível configurar o sistema para gerar **títulos a pagar de previsão** ao criar um pedido de compras, para melhorar o controle do fluxo de caixa da empresa.

Para configurar o Bimer para trabalhar desta maneira, acesse **Configurador / Financeiro / Opções / Complemento**, e marque a opção **Gerar títulos de previsão para pedidos de compras em abertos (liberados)**.

> *[Imagem: Configuração de títulos de previsão no Configurador Bimer]*

Com esta opção marcada, ao criar um pedido e liberá-lo, um título será criado no módulo **A Pagar**.

> *[Imagem: Título de previsão criado no módulo A Pagar]*

> **Nota:** Após dar entrada em um documento fiscal a partir do pedido de compra, o título de previsão será excluído.

---

### Bloqueio de datas

Na tela principal do Pedido de Compra, em **Opções**, é possível definir dias do mês em que deseja bloquear vencimento de parcelas. Por exemplo, uma empresa deseja concentrar todos os seus pagamentos entre os dias 01 e 15 do mês. Desta forma, basta bloquear todos os dias após este período.

Ao realizar um pedido com uma parcela que tenha vencimento em um dos dias bloqueados, o sistema alerta ao usuário solicitando uma confirmação.

Ao clicar em **Sim**, o sistema abre uma tela de login para realizar a liberação.

> **Nota:** Existe uma permissão específica no **Cadastro de Usuários**, no sistema **Pedido de Compra** para esta liberação: **Liberar parcela de prazo em dia bloqueado**.

---

### Menu de contexto

A partir da versão **10.00.07.00** o Pedido de Compras ganhou também um **menu de contexto**. Clicando com o botão direito do mouse sobre o pedido, o sistema mostrará diversas rotinas que poderão ser realizadas individualmente para aquele respectivo pedido.

> *[Imagem: Menu de contexto do Pedido de Compras]*
