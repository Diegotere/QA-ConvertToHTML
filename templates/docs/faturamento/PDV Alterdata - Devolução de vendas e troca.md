# PDV Alterdata — Devolução de Vendas e Troca — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
- [Devolução de Vendas (On-line)](#devolução-de-vendas-on-line)
- [Devolução de Venda (Off-line)](#devolução-de-venda-off-line)
- [Troca de Produtos](#troca-de-produtos)
  - [Troca de Mercadoria (On-line)](#troca-de-mercadoria-on-line)
  - [Troca de Mercadorias (Off-line)](#troca-de-mercadorias-off-line)

---

## Introdução

Assim como as vendas realizadas pelo Bimer Faturamento, as vendas feitas pelo PDV Alterdata também podem ser devolvidas e trocadas, e o processo pode ser feito pelo próprio PDV Alterdata.

Existem duas formas de realizar as operações de devolução e de troca:

- **ON Line** — O documento de origem é referenciado. Para que a devolução ou troca seja concretizada, o usuário deve informar o número do documento que gerou a venda. Através dos **PLUGINS de Devolução e Troca**, o PDV Alterdata mantém contato com a base de dados do Bimer para localizar o documento referenciado.

- **Off-line** — O documento de origem **NÃO** é referenciado. O usuário não informa o documento que gerou a venda. O PDV Alterdata gerará o documento de devolução e/ou troca que serão enviados para o Bimer na próxima importação de dados.

Existem, portanto, 4 processos:

1. Devolução ON line
2. Devolução Off-line
3. Troca ON line
4. Troca Off-line

---

## Configurações Necessárias

Acesse **PDVAlterdataCfg >> Ferramentas >> Opções >> Operações** e preencha o quadro **Operações para devolução**:

- **Operação para devolução de venda gerada no PDV Alterdata** — Usada na geração da NF-e de Devolução no módulo Faturamento, criada a partir da devolução feita no PDV Alterdata.
  - Deve ser uma operação do tipo **Devolução de Venda**, que **não atualize financeiro** e **não atualize estoque**.
  - O tipo de documento da operação deve estar configurado com modelo fiscal **55 – Nota Fiscal Eletrônica**. Caso a empresa faça emissão de NF-e de venda também no Bimer Faturamento, o tipo de documento deverá ser o mesmo, para respeitar o número de série e sequencial numérico das notas fiscais.

- **Operação para devolução gerada pelo plugin de troca/devolução OFFLINE no PDV Alterdata** — Usada na geração de um documento invisível para movimentar o estoque do produto devolvido, criada a partir da devolução feita no PDV Alterdata no processo Off-line.
  - Deve ser uma operação do tipo **Devolução de Venda**, que **atualize estoque** e **NÃO atualize financeiro**, **NÃO influencie no custo médio** e **NÃO atualize o Escrita Fiscal**.

> **Dica:** Ao parar o cursor do mouse sobre os campos, é apresentado um texto de ajuda referente às configurações necessárias para cada operação.

> **Observação:** Para o correto funcionamento da rotina, também é preciso que as tabelas de cálculo de ICMS vinculadas aos produtos estejam configuradas corretamente no Bimer com os CFOP de devolução.

**Acesso de usuários:**

Dê acesso para o usuário aos recursos de **Devolução** e **Devolução (Off-line)** no Cadastro de Usuários no Bimer.

**Cliente padrão para cupom fiscal:**

Em **FatPDVCFG >> Ferramentas >> Opções >> Checkout >> Geral**, preencha o campo **Cliente padrão para o cupom fiscal**. Use o mesmo cliente padrão para vendas apontado no PDVAlterdataCFG na implantação do PDV Alterdata.

Essa configuração serve para que, ao gerar uma NF-e de Devolução no módulo Faturamento criada a partir da devolução feita no PDV Alterdata, o sistema habilite o campo referente ao **Cliente** para ser alterado antes de enviar a NF-e.

**Motivo de Devolução (opcional):**

Acesse **Configurador Bimer >> Faturamento >> Motivos de troca/devolução >> Novo** para cadastrar um motivo de devolução. Além de identificar a causa da devolução e ser utilizado para análises gerenciais, o motivo de devolução pode ser configurado para: abrir um atendimento de acompanhamento do CRM, definir a operação que será usada nas Notas Fiscais, definir se precisa de autorização gerencial, etc.

---

## Devolução de Vendas (On-line)

A devolução On-line exige a informação do documento de referência.

1. Acesse o PDV Alterdata e tecle **ALT + D**. O plugin de devolução é acionado.
2. Na tela aberta, tecle **F2** (ou clique no ícone ao lado) para filtrar o **Documento de venda** que será devolvido.
3. O sistema sugere selecionar todos os produtos daquele documento.
4. Caso não confirme a seleção de todos os produtos, dê duplo clique sobre o(s) produto(s) que deseja devolver, informe a quantidade devolvida e tecle **Enter** para que o item seja levado para a parte inferior da tela.
5. Se a empresa utilizar, informe um **Motivo da devolução** e clique em **Gravar**.

Se a venda foi feita sem a identificação do cliente (utilizando o cliente padrão), o sistema emitirá um alerta. Caso deseje utilizar a opção de **carta de crédito** em vez de devolver o dinheiro, ou deseje que na nota de devolução o cliente real seja identificado, clique em **Não**, retorne à tela anterior, troque o cliente padrão e clique novamente em **Gravar**.

**Negociação financeira:**

Na tela seguinte, informe a negociação financeira com o cliente para a devolução:

- O sistema mostra o(s) título(s) referente(s) ao documento selecionado e sua situação de baixa.
- O quadro **"Valores de devolução"** mostra o quanto precisa ser devolvido ao cliente.
- O operador pode selecionar a opção **"Carta de crédito"**, se essa for a política de devolução da empresa.
- A área **"Formas de pagamentos disponíveis"** mostra todas as formas de pagamento nas quais haja saldo disponível. Dê duplo clique sobre a forma de pagamento escolhida e informe o valor a ser devolvido.

> **Atenção:** O sistema demonstra apenas as formas de pagamento que tenham sido utilizadas nas vendas daquela abertura de caixa. Caso não haja nenhuma forma de pagamento com saldo suficiente, utilize a carta de crédito. É possível utilizar mais de uma forma de pagamento para completar o valor devolvido.

Após selecionar a forma de pagamento e o valor total a devolver for zero, clique em **Confirmar**.

Se houver retirada de valores do caixa, o sistema emite o comprovante de sangria. Em seguida, informa que o processo foi concluído. Será impresso um documento não fiscal para registrar a devolução, com a orientação de que o documento fiscal deve ser emitido no sistema Bimer.

**Geração da NF-e de devolução:**

Quando o plugin de devolução é acionado, o PDV Alterdata cria um documento no Bimer Faturamento para que seja emitida a NF-e de devolução. **Não é necessário fazer a importação de dados no concentrador e no integrador**, pois a criação do documento é feita pelo plugin (acesso direto à base de dados do Bimer).

Acesse o módulo **Faturamento >> aba Nota Fiscal** para visualizar a NF-e. Para concluir, envie normalmente a NF-e para ser autorizada pela SEFAZ.

---

## Devolução de Venda (Off-line)

A devolução Off-line permite realizar uma devolução de venda **sem identificar o documento de venda** que a originou.

> **Atenção:** Diferente da devolução on-line, em que o PDV cria o documento fiscal no Bimer Faturamento para emissão da NF-e de devolução, na devolução off-line o usuário deverá criar o documento **manualmente** no Bimer Faturamento.

1. No PDV Alterdata, tecle **ALT + CTRL + D**.
2. Informe o produto, a quantidade devolvida e o cliente que fez a devolução.
3. Para concluir, clique em **Confirmar (F11)**.
4. O sistema apresentará mensagem confirmando o valor a devolver.
5. Na tela de **Recebimento**, selecione a forma de pagamento para retirada do valor e clique em **Confirmar (F11)**.
6. Dependendo da configuração, pode aparecer a tela para inclusão de vendedor. Informe o vendedor e clique em **Confirmar (F9)**.

> **Atenção:** Antes de fazer a importação de dados no Concentrador e no Integrador Bimer x PDV Alterdata, é **NECESSÁRIO** fazer uma **carga de dados** do PDV Alterdata, pois é ela quem cria os arquivos DAT que serão importados para o Bimer. Os processos de carga de dados e importações são feitos periodicamente de forma automática — só é necessário fazer de forma manual caso queira adiantar o processo.

Ao finalizar os processos de importação, é criado um documento invisível ao usuário para a movimentação de entrada do produto. Execute o **Liberador de Estoque** para que seja concluída a movimentação. Após isso, a movimentação pode ser consultada no módulo **Consulta de Estoque**.

> O fato de o produto já ter movimentado não significa que a NF-e de devolução não precise ser feita. Ela deve ser emitida, porém o sistema não cria automaticamente o documento no Faturamento — ele precisa ser feito de forma manual.

---

## Troca de Produtos

As vendas feitas no PDV Alterdata podem ser trocadas tanto pelo módulo de Devolução e Troca de vendas no sistema Bimer, quanto pelo próprio PDV Alterdata. No PDV Alterdata, existem os recursos de troca on-line e off-line.

Ao fazer uma troca, é gerado um documento de **Devolução** e um documento de **Venda**. Por isso, as configurações para troca e devolução são iguais. Para fazer uma troca no sistema, é necessário ter operações de devolução de venda configuradas no **PDVAlterdataCFG**, conforme visto no início deste manual.

Além das configurações das operações, é necessário que em **Configurador Bimer >> Financeiro >> Formas de pagamento** haja uma forma de pagamento do tipo **"Troca"** cadastrada.

### Troca de Mercadoria (On-line)

Assim como no processo de devolução, na troca on-line é obrigatório informar o documento de origem referenciado.

1. Acesse o PDV Alterdata e pressione **ALT + T**.
2. Informe o documento original da venda.
3. Escolha se incluirá todos os produtos ou selecione apenas os desejados.
4. Se desejar, informe um motivo para a devolução.
5. Clique em **Gravar**.

> **Atenção:** Se na venda o cliente não foi identificado e está com o cliente padrão, é possível trocá-lo para que a NF-e de devolução saia em nome do real cliente.

> **Observação:** É possível marcar a opção **"Utilizar um DAV para carregar os produtos de troca"**, se a empresa trabalhar com DAV e desejar que seja utilizado um para informar os produtos que serão levados em substituição pelo cliente.

Após gravar, o PDV volta para sua tela inicial para informar os produtos que o cliente levará em troca e gerar a nova venda. Na parte superior direita da tela é exibido o símbolo de troca. Informe os itens e tecle **F9** para fechar a venda.

Na tela de fechamento, o valor dos produtos devolvidos é lançado como valor recebido, com a forma de pagamento configurada como **troca**:

- Se o valor devolvido for **maior** que o valor do produto de troca, o sistema lançará a diferença como **Troco**.
- Se for o **inverso**, o sistema informará que falta um valor a ser complementado pelo cliente.

Após fechar a venda, o sistema processará a troca e apresentará mensagem confirmando a conclusão. No PDV Alterdata, é impressa a NFC-e da nova venda e um comprovante não fiscal de troca do produto.

Por ser um processo on-line, no Bimer Faturamento é gerada uma **NF-e de Devolução em tempo real**, mesmo sem realizar a importação. Caso o cliente não tenha sido identificado no PDV na hora da troca, é possível trocá-lo antes de enviar a NF-e para a SEFAZ.

> **Atenção:** A NFC-e da nova venda só aparecerá no Bimer Faturamento após serem feitas as importações no Concentrador e Integrador.

### Troca de Mercadorias (Off-line)

O processo Off-line permite realizar uma troca de venda **sem identificar o documento de venda** que a originou.

1. No PDV Alterdata, tecle **ALT + CTRL + T**.
2. Informe o(s) produto(s) devolvido(s), a quantidade e o cliente que devolveu.
3. Clique em **Confirmar (F11)**.
4. O sistema apresentará mensagem com o valor de crédito na troca.
5. Informe o vendedor para o processo.
6. Confirme os dados do cliente e clique em **OK (F10)**.
7. O PDV retornará para a tela inicial para informar os produtos levados em substituição. Haverá o ícone indicando que está em uma **"Venda por troca"**.
8. O fechamento da venda segue o mesmo padrão da troca on-line.
9. Encerre a venda normalmente e envie a NFC-e.

Após concluir, faça uma **carga de dados** do PDV Alterdata, importe no **Concentrador** e importe no **Integrador** para que a NFC-e da nova venda apareça no faturamento.

> **Atenção:** Além de criar a NFC-e no Faturamento, o processo de importação cria também um documento invisível para os usuários, que faz o movimento de entrada do produto devolvido no estoque. Porém, a **NF-e não é criada no processo** — ela tem de ser criada e enviada manualmente no Faturamento.
