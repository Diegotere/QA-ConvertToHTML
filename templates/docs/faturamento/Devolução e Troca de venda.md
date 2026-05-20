# Devolução e Troca de Venda — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
  - [Geral](#geral)
  - [Operações](#operações)
  - [Financeiro](#financeiro)
  - [Estoque](#estoque)
  - [SPY](#spy)
  - [Motivos de Troca/Devolução](#motivos-de-trocadevolução)
- [Utilizando o Módulo](#utilizando-o-módulo)
  - [Devolução para o Faturamento](#devolução-para-o-faturamento)
  - [Registrando no Nota Fiscal de Entrada](#registrando-no-nota-fiscal-de-entrada)
  - [Troca](#troca)
- [Consulta de Estoque e Linha do Tempo](#consulta-de-estoque-e-linha-do-tempo)
- [O que pode (ou não) ser devolvido pelo módulo](#o-que-pode-ou-não-ser-devolvido-pelo-módulo)
- [Devolução de Ordem de Entrega](#devolução-de-ordem-de-entrega)
- [Atalhos do Módulo Devolução e Troca de Venda](#atalhos-do-módulo-devolução-e-troca-de-venda)

---

## Introdução

Este material apresenta o funcionamento completo do módulo **Devolução e Troca de Venda** e como realizar as configurações. Neste módulo é possível realizar as devoluções ou trocas de notas fiscais, ordens de entrega ou cupons fiscais emitidos no PDV, desde que sejam de vendas.

> **Importante:** Este material trata da devolução/troca de **venda**. Para dúvidas sobre devolução de compra, acesse o artigo no Centro de Aprendizagem: **Devolução de Compra**.

**A devolução funciona com NFC-e emitidos no PDV?**
Sim! A rotina de devolução/troca de NFC-e emitidos no PDV Alterdata funciona normalmente.

**O que é devolução de venda?**

> *[Imagem: fluxo simplificado do processo de devolução de venda]*

**E a troca?**

Basicamente o mesmo processo, porém na fase final o cliente devolverá o produto e levará um novo para casa. Caso o valor seja maior, ele terá que pagar a diferença.

**E se o valor do novo produto for menor?**

A empresa pode fazer o mesmo processo da devolução, ou seja, abater o valor de algum título aberto baixando sem numerário ou gerar uma **carta de crédito** para ser utilizada em uma próxima compra.

---

## Configurações Necessárias

### Geral

Em **Configurador / Faturamento / Opções / Devolução / Geral** há diversas configurações que impactarão no funcionamento do módulo:

1. **Habilitar opção para geração de lote no Módulo Nota Fiscal de Entrada ou documento para o faturamento** — com essa opção marcada, é possível definir se o documento de devolução será gerado no módulo **Nota Fiscal de Entrada** ou **Faturamento**. Usado quando fazemos vendas para clientes que emitem notas.
   - Quando o cliente devolve o produto, ele faz a emissão da NF-e em seu sistema e o estabelecimento que fez a venda precisa registrar a nota no módulo de Nota Fiscal de Entrada.
   - Caso a opção esteja desmarcada, o sistema vai gerar o documento apenas no módulo de Faturamento.

2. **Exibir opção para geração de lote antes da liberação do documento de troca/devolução** — dependente da 1ª opção estar marcada. Com a 2ª opção marcada, o sistema muda o momento do questionamento para **antes da liberação do lote**.

3. **Permitir a geração de processos de devolução envolvendo mais de um documento** — com esta configuração marcada, o sistema habilita um novo botão que possibilita selecionar mais de 1 documento de venda a partir de uma única devolução. Útil quando um cliente emite a NF-e de Devolução com produtos de mais de uma NF-e de venda.

4. **Habilitar a crítica na devolução de pedidos cuja NF/OE tenha sido gerado/impresso no dia** — com esta configuração marcada, é habilitado um alerta ao criar a devolução/troca caso o documento tenha sido gerado no dia atual, para que o usuário avalie se o ideal não seria o cancelamento.

5. **Habilitar a crítica na devolução de produtos que sejam mostruário ou sob encomenda** — com esta configuração marcada, é habilitado alerta caso o produto seja mostruário ou sob encomenda.
   - **Venda mostruário:** quando o produto vendido estava sendo exposto na loja, normalmente com preço mais baixo.

6. **Obrigar a informação do motivo de devolução** — com esta configuração marcada, o sistema obriga o preenchimento do motivo de devolução/troca no lote.

7. **Obrigar o cadastramento da pessoa de devolução para vendas com cliente padrão** — com esta configuração marcada, o sistema não permite liberar o processo de devolução/troca sem identificar o cliente para as vendas sem identificação (cliente padrão/consumidor final).

8. **Solicitar vendedor na gravação da devolução** — com esta configuração marcada, o sistema exige informar o vendedor antes de liberar o lote. Muito utilizado no processo de Troca.

9. **Não permitir que a devolução/troca tenha negociação com parcelas sem a forma de pagamento preenchida** — com esta configuração marcada, o sistema obrigará o preenchimento da forma de pagamento ao criar um lote de devolução/troca com registro na aba Negociação / Parcelamento.

10. **Habilitar a crítica quando não houver negociação informada na finalização da devolução/troca no PDV** — com esta configuração marcada, é habilitado bloqueio no módulo PDV para não permitir passar o Pedido no PDV sem informar a negociação.

11. **Solicitar liberação por senha para devolução de numerário na finalização da devolução/troca no PDV** — com esta configuração marcada, ao tentar finalizar o processo de devolução/troca de numerário no PDV, o sistema pede liberação por usuário e senha.

12. **Permitir finalizar as trocas que não possuem quantidade em estoque** — com esta configuração marcada, o sistema bloqueará a liberação do lote caso o produto da troca fique com quantidade negativa em estoque.

13. **Permitir alterar informações da nota fiscal de devolução** — com esta configuração marcada, após finalizar o processo, o sistema permite alterar o **CFOP** e a **Situação Tributária de ICMS** dentro do item na NF-e.

14. **Recalcular os tributos da nota fiscal de devolução** — com esta configuração marcada, o sistema fará o cálculo dos impostos da NF-e de Devolução conforme configuração no sistema no momento da geração. Com a opção desmarcada (mais comum), o sistema apenas copiará os impostos da NF-e de Venda como um espelho.

15. **Desabilitar a opção para criação de devolução a partir de um pedido de venda** — com esta configuração marcada, o campo para pesquisar pelo Pedido de Venda ficará desabilitado.

16. **Desabilitar a opção para criação de devolução a partir de um documento de venda** — com esta configuração marcada, o campo para pesquisar pelo Documento de Venda ficará desabilitado.

17. **Devolução pelo documento de venda quando este possuir um pedido de venda vinculado** — ao buscar pelo Documento de Venda que tenha sido originado de um Pedido de Venda, é possível escolher o vínculo da devolução/troca pelo **Documento de Venda** OU **Pedido de Venda**.
    > **Atenção:** Ao escolher o vínculo pelo Pedido de Venda, o sistema respeitará os valores contidos no pedido independente do valor do documento, o que pode causar diferenças entre a venda e a devolução.

18. **Gerar o pedido de venda utilizando as informações do pedido devolvido** — ao marcar esta opção, o novo pedido de venda gerado pela devolução/troca utilizará como base todas as informações do pedido de venda devolvido (impostos, repasses e negociação).

19. **Realizar cálculo da negociação com base nos títulos** — com esta configuração marcada, o sistema fará o cálculo da negociação com base nos títulos vinculados à Venda (a pagar ou a devolver), mesmo que estes tenham sido renegociados.

20. **Gerar carta de crédito somente para títulos baixados com numerário** — dependente da 18ª opção estar marcada. Com esta configuração marcada, o sistema levará em consideração o valor baixado com numerário dos títulos vinculados à venda para geração da carta de crédito.

21. **Número de dias para localização de pedidos de venda e documentos para devolução ou troca** — define o padrão para o período de emissão dos documentos de Venda que serão buscados ao iniciar o cadastro de um lote de devolução/troca.

22. **Layout para relatório de devolução/troca** — define o layout `.rtm` usado para impressão do relatório do processo.

23. **Preço** — define uma tabela de preço padrão a ser utilizada para os produtos da troca.

24. **Máscara para o campo de observação dos documentos de entrada gerados pela devolução** — define variáveis para serem lançadas em "Observação da NF-e de Devolução" gerada após finalizado o processo.

> *[Imagem: tela de configurações Geral do módulo Devolução e Troca de Venda]*

---

### Operações

Em **Configurador / Faturamento / Opções / Devolução / Operações** é necessário o preenchimento dos campos para geração dos documentos corretamente.

> **Dica:** Ao lado das configurações há uma ajuda ao clicar sobre a interrogação, demonstrando todas as configurações que devem ser feitas na operação.

1. **Operação para o documento de devolução de venda gerado no Faturamento – nota fiscal:**
   - Tipo de Movimento: **Devolução**
   - No quadro Transferência / Devolução: marcar **Venda**
   - **NÃO** marcar **Atualiza estoque** e **Atualiza financeiro** (não é esta operação responsável por movimentá-los)
   - Marcar a opção **Operação para consumidor final**
   - Em Cálculos: somente necessário marcar algum imposto caso a opção **Recalcular os tributos da nota fiscal de devolução** esteja marcada
   - Na aba **Documento / Geral**: informar o Tipo de Documento utilizado para emissão de NF-e
   - Na aba **Documento / CFOP**: preencher os CFOPs para devolução

   > *[Imagem: configuração da operação de devolução de venda para Faturamento]*

2. **Operação para o documento de devolução de venda gerado no Faturamento – Ordem de entrega:** somente utilizado caso trabalhe com Ordem de Entrega.

   > **Dica:** É possível duplicar o cadastro da operação e fazer os ajustes necessários (descrição, tipo, atualiza ou não estoque/financeiro, tipo de documento para OE).

3. **Operação para o documento de devolução de venda gerado no Nota Fiscal de Entrada:** somente utilizado caso trabalhe com o registro da NF-e de Entrada do cliente no módulo Nota Fiscal de Entrada. O Tipo de Documento informado **NÃO pode estar configurado para gerar nota fiscal** (use o tipo de documento interno).

4. **Operação para o documento de devolução de venda (ajuste do custo de estoque):** operação responsável por **movimentar o estoque** na devolução de venda. O financeiro é movimentado pelo próprio módulo de Devolução. O tipo de documento **NÃO** configurado para gerar nota fiscal, porém é necessário **MARCAR** a opção **Atualiza estoque**.

5. **Operação para o documento de devolução de venda que não baixa estoque (Ajuste do custo de estoque):** deve ser informada uma operação exatamente igual à informada no 1º campo (duplicar a operação e alterar o nome). Utilizada para devolução de vendas que utilizaram operação que não atualizam estoque.

6. **Operação para nota fiscal utilizada nos pedidos de venda ou documentos gerados na troca:**
   - Operação de **Venda**
   - Marcar **Atualiza estoque**
   - Não é necessário marcar **Atualiza financeiro**
   - Marcar a opção **Operação para consumidor final**
   - Impostos configurados conforme orientação do contador
   - Tipo de Documento configurado para gerar nota fiscal
   - Necessária pois ao fazer o processo de troca é necessário emitir a NF-e do novo produto levado.

7. **Operação para ordem de entrega utilizada nos pedidos de venda ou documentos gerados nas trocas:** pode ser duplicada da 6ª operação, alterando somente o Tipo de Documento para Ordem de Entrega.

> *[Imagem: tela de configuração das operações de devolução]*

---

### Financeiro

Em **Configurador / Faturamento / Opções / Devolução / Financeiro**:

1. **Mostrar todos os títulos que estão no contas a receber para negociação** — habilita botão no módulo para resgatar todos os títulos existentes no Contas a Receber em nome do cliente (exceto títulos excluídos).

2. **Gerar registro de pagamento nos pedidos de venda gerados em casos de troca** — com esta opção marcada, mesmo que o pedido gerado na troca não atualize financeiro, caso o pedido trocado atualize, o sistema gera o registro de pagamento.

3. **Gerar título a receber baixado quando a forma de pagamento utilizada for dinheiro:**
   - **Marcada:** o título sempre será gerado baixado.
   - **Desmarcada:** o título será gerado em aberto.
   > **Observação:** Esta configuração somente é válida para títulos gerados no módulo de Devolução e Troca de Venda.

4. **Forma de Pagamento** — não é mais utilizado no sistema.

5. **Natureza de Lançamento** — não é mais utilizado no sistema.

6. **Tipo de baixa total (sem numerário)** — tipo de baixa usado para baixar totalmente títulos a receber gerados pelas vendas que ainda estejam em aberto.
   > Na devolução o produto retornou ao estoque, assim o cliente não precisa fazer o pagamento do valor correspondente.

7. **Tipo de baixa parcial (sem numerário)** — tipo de baixa usado para baixar parcialmente títulos a receber gerados pelas vendas que ainda estejam em aberto.

---

### Estoque

Em **Configurador / Faturamento / Opções / Devolução / Estoque**:

- **O setor de entrada para o documento de devolução deverá ser o setor de saída do documento de saída:**
  - **Marcada:** o sistema enxergará o setor de saída do documento de Venda e o usará como setor de entrada do produto a partir do documento de devolução gerado.
  - **Desmarcada:** o sistema usará o setor padrão configurado para a empresa no módulo **Configurador / Estoque**.

- **Controla devolução de produtos para garantia** — utilizado na rotina de Garantia quando a empresa estiver configurada no ramo de atividade Serviços.

---

### SPY

Em **Configurador / Faturamento / Opções / Devolução / Spy**:

1. Configurar e-mail para envio de spy system ao **concluir** um processo de devolução/troca.
2. Configurar e-mail para envio de spy system quando um processo de devolução/troca **não for concluído**.

> **Nota:** Para o correto funcionamento da rotina, é necessário que seja feita a configuração para trabalhar com Spy System no módulo **Configurador / Geral**.

---

### Motivos de Troca/Devolução

Em **Configurador / Faturamento / Motivos de troca/devolução**, clique em **"Novo"** e no cadastro do motivo de troca/devolução é possível configurar:

- Gerar NF/OE de transferência;
- Tipos de Atendimento;
- Operações diferenciadas ao apontado no Configurador / Faturamento;
- Um Setor diferente ao setor padrão da empresa ou do setor de saída do documento de Venda;
- Tipo de documento que será gerado para a devolução/transferência;
- Considerar outros valores.

> *[Imagem: tela de cadastro de motivo de troca/devolução]*

---

## Utilizando o Módulo

### Devolução para o Faturamento

1. Abra o módulo de **Devolução e Troca de Vendas**, clique em **Novo** e na tela **Seleção de pedidos/documentos** filtre qual deseja fazer a devolução (pedido ou documento de venda). Clique em **OK** para abrir.

   > *[Imagem: tela de seleção de pedidos/documentos para devolução]*

2. Selecionado o documento de venda, são apresentadas as informações dos produtos. Informe o **motivo de troca/devolução** e o **Tipo de Processo**.

3. Dê um duplo clique sobre o item no quadro **"Produtos do pedido de venda"**. Caso o item possua mais de uma quantidade disponível, será aberta a tela para selecionar a quantidade devolvida. Ao selecionar **"OK"**, o item irá para o quadro **"Produtos devolvidos"**.

   > *[Imagem: tela de seleção de quantidade a devolver]*

   > **Observação:** Caso a opção **"Enviar este produto para setor de garantia"** esteja marcada, ao finalizar a devolução o produto irá para o setor de garantia, conforme configurado no Configurador / Faturamento.

4. O item será adicionado ao quadro **Produtos devolvidos** com as quantidades e valores.

   > *[Imagem: quadro Produtos devolvidos com itens adicionados]*

5. Na aba **"Observação"** é apresentada a observação do documento original de venda (não pode ser modificada).

6. Na aba **"Comentários"** é possível incluir comentários livres no processo de devolução/troca. Ao gravar o lançamento, será exibida a tela para adicionar o comentário.

7. Na aba **"Negociação"** é possível manipular os títulos a receber:
   - Botão **"Editar"** — abre a edição do título selecionado (ou clique duas vezes sobre o título).
   - Botão **"Atualizar"** — atualiza o valor dos títulos que eventualmente foram modificados durante a criação do processo. Habilitado mediante marcação da opção **"Mostrar todos os títulos que estão no contas a receber para negociação"** no Configurador.

8. A aba **"Produtos de Troca"** é habilitada somente se o **Tipo de processo** selecionado for **Troca**.

**Gerando carta de crédito ou baixando sem numerário:**

- **Gerar carta de crédito no contas a pagar:** o sistema manterá o título a receber originado pela venda em aberto com o valor total e criará um título no Contas a Pagar com o valor total a devolver como carta de crédito para o cliente. Só é possível gerar carta de crédito quando o título consta ainda valores em aberto.

- **Baixar sem numerário:** clique duas vezes sobre o título para abrir a tela de edição, marque a opção **"Baixar título sem numerário"** e clique em gravar. O título terá sua legenda alterada para **Baixa sem numerário** e o valor **Total da negociação** será alterado.

  > *[Imagem: tela de edição do título com opção Baixar título sem numerário marcada]*

  Como o título a receber originado pela Venda será baixado totalmente, é necessário acessar a aba **Negociação / subaba Parcelamento** e informar um **Prazo** ou adicionar as parcelas manualmente para que seja criado um novo título a receber com o valor correspondente aos itens que não foram devolvidos.

9. Clique em **"Gravar"** o processo e na mensagem apresentada clique em **"Sim"** para confirmar a liberação do lote.

10. Será apresentada a tela para adicionar um comentário (obrigatório para confirmar a liberação). Ao informar um comentário, clique em **"Ok"**.

11. Será exibida a tela de confirmação onde o usuário indica se fará a **emissão da NF-e** (Faturamento) ou se esta será apenas **registrada** (o cliente já emitiu a nota).

12. Voltando à tela inicial do módulo, clique em **"Localizar"** e busque pelo processo de Devolução e Troca de Vendas feito. Localize-o e clique em **"OK"** para abrir o lote na tela.

13. Com o lote com status **Liberado** na tela, são habilitados os botões no menu superior:
    1. **Imprimir** — imprime um relatório deste processo.
    2. **Reabrir** — reabre o processo caso seja necessária alguma mudança.
    3. **Fechar** — fecha a visualização deste lote.
    4. **Cancelar** — cancela o processo de devolução/troca (não pode ser desfeito).
    5. **Linha do Tempo** — abre a Linha do Tempo do processo.

14. Confira os itens devolvidos/trocados e a Negociação. Se estiver correto, clique em **"Finalizar o processo de devolução/troca"**.

    > **Atenção:** Após feitos, os passos a seguir não poderão ser desfeitos.

15. Confirme a finalização clicando em **"Sim"**.

16. Será perguntado se deseja imprimir o relatório do lote. Clique em **Sim** para imprimir ou **Não** para avançar sem impressão.

17. O processo de devolução será finalizado com sucesso. A **NF-e de Devolução** será gerada no módulo Faturamento.

18. Realize a conferência da NF-e e envie-a à SEFAZ. Após autorização da NF-e e processamento do **Liberador de Estoque**, a Devolução estará concluída.

> *[Imagem: NF-e de Devolução gerada no módulo Faturamento]*

---

### Registrando no Nota Fiscal de Entrada

Quando o cliente emite a NF-e de Devolução em seu sistema, o estabelecimento deve registrar no módulo **Nota Fiscal de Entrada**:

1. Ao perguntar se deseja faturar ou registrar, clique em **Registrar** para lançar no Nota Fiscal de Entrada.
2. O sistema perguntará se está correto gerar um documento no módulo Nota Fiscal de Entrada. Clique em **Sim**.
3. O sistema abre tela pedindo para informar o **Número do documento**, **data de emissão** e **data de referência** da NF-e de devolução emitida pelo cliente. Após preencher, clique em **OK**.
4. Será exibida a tela principal. Localize o documento através da **Lupa** e faça a liberação da devolução.
5. Abra o módulo **Nota Fiscal de Entrada**, informe a empresa e localize o documento.
6. Serão abertos os dados da NF-e de Devolução. Faça toda a conferência e clique em **Liberar**.
7. Após rodar o **Liberador de Estoque**, a devolução estará concluída.

> *[Imagem: módulo Nota Fiscal de Entrada com NF-e de Devolução do cliente]*

---

### Troca

O processo de troca é semelhante ao de devolução, porém é necessário:

1. Marcar a opção **"Troca"** na tela de lançamento;
2. Informar o **motivo da troca**.

Ao marcar o tipo de processo **Troca**, a aba **"Produtos da Troca"** é habilitada. Nesta aba serão lançados os produtos que o cliente levará após o processo finalizado. Os produtos aqui lançados serão levados para uma nova venda (Pedido de Venda ou Documento, dependendo da configuração).

**Adicionando produtos da troca:**

1. Na aba **Produtos da Troca**, clique em **Adicionar**;
2. Informe o produto e os valores correspondentes;
3. Clique em **OK** para gravar o item.

> *[Imagem: aba Produtos da Troca com produto adicionado]*

**Quando o valor dos itens da troca excede o valor da devolução:**

Na área de **"Negociação"** é possível ver o valor da diferença e o total a pagar. Há duas possibilidades:

- **Opção 1:** Manter o título a receber em aberto e na aba **"Parcelamento"** informar um prazo para gerar um novo título a receber com o valor correspondente. O cliente ficará com **2 títulos em aberto**.
- **Opção 2:** Marcar para baixar sem numerário o título a receber em aberto e informar um prazo na aba Parcelamento para que seja criado um novo título com o valor total. O cliente ficará com **1 título em aberto**.

Escolha a forma desejada, informe o comentário e defina se mandará para o **Faturamento** ou **Registrar** (pois a partir do processo de troca também será gerada uma NF-e de Devolução).

Após a liberação pelo **liberador de estoque**, serão criados dois documentos no Faturamento:
- Um de **devolução**
- Um de **venda**

> **Observação:** Ambas as NF-es devem ser enviadas à SEFAZ e autorizadas. Após isso, o processo de Troca estará concluído.

> *[Imagem: dois documentos gerados no Faturamento após processo de troca]*

---

## Consulta de Estoque e Linha do Tempo

Ao abrir o módulo **Consulta de Estoque**, é possível visualizar a movimentação realizada na aba **Movimentação**.

> *[Imagem: módulo Consulta de Estoque com movimentações de devolução e troca]*

Ao abrir a **Linha do Tempo** da Venda, é mostrado o título a receber gerado pela venda inicial e os processos de Devolução e Troca:

- O título a receber originado pela Venda estará baixado totalmente conforme selecionado no processo de devolução, com o Tipo de Baixa configurado no módulo Configurador / Faturamento.
- Ao abrir pela Linha do Tempo o processo de devolução, é apresentado em **Descendente** o título a receber gerado após finalizado o lote de devolução e a NF-e de Devolução gerada no módulo Faturamento, já autorizada.

> *[Imagem: Linha do Tempo da venda mostrando processos de devolução e troca]*

---

## O que pode (ou não) ser devolvido pelo módulo

O módulo de **Devolução e Troca** permite realizar procedimentos para os **documentos e pedidos de venda** emitidos pela empresa. **Não é possível devolver Nota Fiscal de Entrada** por este módulo.

> **Atenção:** Em virtude do processo #0018508382, **não é possível realizar uma devolução de uma venda marcada como "retirada"**. Esta é uma proteção realizada no sistema para evitar geração de documento com cálculo de imposto incorreto.

---

## Devolução de Ordem de Entrega

A **OE – Ordem de Entrega** é um documento emitido pelo Faturamento e pode ser devolvida como uma NF-e. No entanto, há uma configuração que pode alterar o comportamento do sistema:

Em **Configurador / Faturamento / Opções / Fechamento de Documentos / OE's**, a opção **"Cancelar a OE, que ainda estiver em aberto, ao devolvê-la a partir do pedido de venda"** faz com que o sistema cancele o documento (OE) automaticamente quando a devolução do pedido de venda vinculado a ela é realizada.

---

## Atalhos do Módulo Devolução e Troca de Venda

| Ação | Atalho |
|------|--------|
| Sair do Módulo | Alt+S ou Alt+F4 |
| Criar novo documento | Alt+N ou Insert |
| Novo cadastro com um ou mais documentos | Ctrl+N |
| Exclusão | Alt+E ou Del |
| Localizar documento já existente | Alt+L ou Ctrl+F |
| Imprimir documento presente na tela | Alt+I ou Ctrl+P |
| Reabrir o processo de devolução/troca | Alt+R |
| Fechar a visualização / Cancelar alterações devolução | Alt+C |
| Gravar alterações Devolução | Alt+G |
| Cancelamento da Devolução | Alt+D |
| Finalizar o processo de devolução | Alt+F |
| Linha do tempo | Alt+T |
