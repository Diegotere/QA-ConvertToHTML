# Mapa de Carregamento — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Rotina](#rotina)
- [Mapa de Viagem X Ordem de Carregamento](#mapa-de-viagem-x-ordem-de-carregamento)
- [Relatórios](#relatórios)
- [Informações adicionais](#informações-adicionais)

---

## Introdução

O **mapa de carregamento** é um recurso do Bimer que auxilia o processo de carregamento de mercadorias no caminhão. Ele permitirá que o motorista coloque os produtos corretos dentro do caminhão e saiba a quem deve realizar a entrega.

Através dessa rotina, no momento da geração do XML/impressão da nota, ou na criação do pedido de venda, ou ainda na transformação de um pedido de venda em uma NF-e/OE, será gerado um documento de mapa resumo com os itens da nota, o qual o Motorista e os ajudantes do transporte receberão para que possam fazer o carregamento do caminhão com os produtos.

Na entrega, algumas empresas trabalham com a rotina em que o próprio motorista ao realizar a entrega no cliente, recebe o dinheiro pela encomenda (ou em alguns casos pela montagem). Nestes casos, ao retornar para a empresa, o motorista deverá realizar a prestação de contas deste valor recebido do cliente.

---

## Configurações

No **Configurador > Faturamento > Opções > Mapa de carregamento** deverá marcar a opção **"Trabalhar com mapa de carregamento"** para que o sistema entenda que está trabalhando com a rotina de mapa de carregamento. Após marcada, as demais configurações abaixo serão desbloqueadas.

- **Seção "Gerar mapa de carregamento":** Através deste quadro poderá definir em que momento será gerado o mapa resumo.

- **Campo "Natureza de lançamento para títulos de notas fiscais em transporte":** Informe uma natureza de lançamento neste campo, para que assim que o mapa de carregamento for gerado, esta natureza de lançamento seja vinculada ao título, indicando que o mapa ainda está em transporte e o processo ainda não foi encerrado.

- **Campo "Forma de pagamento para vales (perda de mercadorias)":** Define qual a forma de pagamento utilizada para identificar perda de mercadoria no mapa. Após a criação do mapa, poderá visualizar o relatório em **Faturamento > Prestação de Conta > Relatórios > Vale (Perda de mercadorias)** com a relação de perdas.

- **Campo "Conta bancária para pagamento de títulos por baixa na inclusão (natureza de lançamento)":** Ao informar uma conta neste campo, ao lançar o pagamento do mapa de carregamento no módulo **Faturamento > Prestação de Conta**, será gerado um movimento no disponível desta conta.

- **Opção "Impressora onde será impresso o mapa de carregamento":** Definirá qual a impressora será utilizada por padrão para impressão do mapa de carregamento.

- **Campo "Usuários que receberão spy na reabertura de mapa de carregamento":** Quando no módulo Prestação de contas for realizado uma reabertura de um mapa resumo, será enviado um spy para os usuários listados neste campo.

- **Opção "A data da última parcela deverá ser limitada à data do último vencimento da Nota Fiscal":** Com esta opção marcada, o sistema verificará se a data da parcela que está sendo informada na prestação de contas é superior à data do último vencimento da Nota, e caso seja, não permitirá que o usuário prossiga com o processo.

- **Opção "Localizar motorista pelo cadastro de usuários":** Com a opção marcada, somente será possível preencher o nome do motorista em mapas de carregamento através da localização do nome de usuários que possuam a **"Função motorista"** abaixo informada. Com a opção desmarcada, será permitido digitar o nome do motorista em mapas de carregamento.

- **Campo "Função motorista":** Este campo só será habilitado caso a opção **"Localizar motorista pelo cadastro de usuários"** esteja marcada. Neste campo poderá ser informada a função do motorista que é cadastrada em **Configurador > Geral > Outros Cadastros > Funções**.

- **Seção "Prestação de contas":** Estas opções terão efeito na utilização do módulo **Faturamento > Prestação de Conta**.
  - **Opção "Editar forma de pagamento na prestação de contas":** Com essa opção marcada será possível editar a forma de pagamento do mapa de carregamento no módulo prestação de contas.
  - **Opção "Permite vincular nota fiscal a um mapa de carregamento já liberado":** Com essa opção marcada será possível incluir documentos a mapas já liberados.

---

## Rotina

Dependendo do que esteja configurado em **Configurador > Faturamento > Opções > Mapa de carregamento > Gerar mapa de carregamento**, o usuário pode ter diferentes cenários.

### Pedido de Venda

Quando o sistema está configurado para gerar o mapa **"No cadastro do pedido"** ou **"Na transformação do pedido em NF/OE"**, o procedimento será realizado no Pedido de Venda. No momento de finalizar o cadastro de um pedido de venda ou realizar a sua transformação, o sistema apresenta a tela a seguir para preenchimento dos dados do mapa de carregamento.

- **Campo "Informe a transportadora para os pedidos selecionados":** Informe qual a transportadora que realizará o transporte dos itens do(s) pedido(s).
- **Campo "Placa":** Informe a placa do veículo.
- **Seleção "UF":** Estado ao qual o veículo pertence.
- **Opção "Gera mapa de carregamento automaticamente":** Com esta opção marcada, será gerado um mapa de carregamento, sem a necessidade de preencher os demais dados neste momento, podendo ser completados futuramente através do módulo de prestação de contas.
- **Opção "Cadastrar/informar o mapa de carregamento manualmente":** Com esta opção marcada, os campos abaixo serão habilitados para realizar o preenchimento dos mesmos.
- **Ajudantes:** Caso haja, informe os nomes de até dois ajudantes.
- **Impressão:** Selecione os respectivos checkboxes para imprimir mapa de carregamento e/ou ordem de carregamento após gerá-los nesta tela.

> **Observação:** Como em um mapa de carregamento normalmente mais de uma mercadoria estará presente, ao transformar outros pedidos em NF-e, por exemplo, selecione a opção **"Cadastrar/informar o mapa de carregamento manualmente"** e selecione o mapa desejado pelo seu número.

### Faturamento

Quando o sistema está configurado para gerar o mapa **"Na impressão/geração do xml da NF"**, o procedimento será realizado no Faturamento ao realizar o envio da nota. Junto aos dados de data e hora de emissão e saída, o sistema apresenta campos para informar dados para geração do mapa.

- **Opção "Não gerar mapa":** Marcando esta opção, o mapa de carregamento não será gerado.
- **Opção "Incluir em um mapa já existente":** Marque esta opção para vincular nota a um mapa de carregamento já criado anteriormente através do campo **"Nr. Mapa"**.
- **Opção "Gerar um novo mapa de carregamento":** Marque esta opção para gerar um novo mapa de carregamento. Os campos de motorista e ajudantes serão habilitados para preenchimento.

Em seguida, caso esteja marcado para gerar um novo/incluir mapa de carregamento e **"Imprimir mapa de carregamento após o envio da(s) nota(s)"**, será apresentada a tela para seleção do layout e marcação das opções desejadas, tendo a opção de simplesmente visualizar ou imprimir o mapa de carregamento.

Em seguida, o sistema apresentará a tela para impressão da **Ordem de Carregamento**. É possível optar entre um relatório analítico ou sintético.

---

## Mapa de Viagem X Ordem de Carregamento

Apesar de o recurso chamar-se **Mapa de Carregamento**, o referido mapa trata de uma explanação das entregas a serem feitas. Portanto, podemos chamá-lo também de **Mapa de Viagem**. Além do Mapa de Viagem, o sistema também gera uma **Ordem de Carregamento**.

**Exemplo:** Imagine uma viagem de entrega que será realizada pelo caminhão da empresa para entregar produtos a três clientes distintos. O primeiro, a 3 km de distância da empresa, enquanto o segundo está a 10 km de distância. Já o terceiro cliente encontra-se em outro distrito, a 23 km de distância. As entregas são cargas de 300 a 400 KG, portanto, é preciso ter atenção no momento de carregar o caminhão com as mercadorias. Ou seja, já que entregaremos a mercadoria do terceiro cliente por último, os seus produtos devem ser carregados primeiro, para ficarem no fundo da carroceria.

Para organizar os produtos na carroceria, o sistema auxilia com a geração da **Ordem de Carregamento**, que trará apenas os produtos e quantidades, de acordo com a ordem sequencial definida pelo próprio usuário.

- **Mapa de Viagem/Carregamento:** Relatório que traz dados para entrega, como endereço, nome do cliente, número do documento, etc.
- **Ordem de Carregamento:** Relatório de auxílio para carregamento do veículo do transporte, contendo dados dos itens que serão transportados e a sequência da entrega.

### Sequência para entrega

Para informar o sequencial de entrega, acesse o cadastro da pessoa (destinatário da NF-e), vá na aba **Adicionais** e informe um número no campo **"Sequência"**.

Para a Ordem de Carregamento, o sistema sempre organizará o relatório em **ordem decrescente**, para que os números mais altos apareçam primeiro para carregamento do veículo. A metodologia utilizada é uma espécie de **"Último que Entra, Primeiro que Sai (UEPS)"**.

> *[Imagem: Modelo de impressão de Ordem de Carregamento]*

---

## Relatórios

Em **Faturamento > Relatórios** é possível realizar a impressão das ordens de carregamento e mapas de viagem, caso deseje.

---

## Informações adicionais

Até este ponto, a rotina poderia ser considerada finalizada após a impressão e entrega do mapa e/ou ordem de carregamento para o motorista, porém existe o detalhe de que algumas empresas trabalham com um passo a mais. Neste caso, utiliza-se o módulo **Prestação de Conta** para que se possa fazer a liberação do mapa de carregamento, caso tudo tenha ocorrido perfeitamente durante a entrega do produto e recebimento do dinheiro.

> **Observação:** Através do módulo **Faturamento > Prestação de Conta** também é possível complementar as informações de mapa de carregamento, realizar a impressão e liberação do mesmo, porém este módulo será abordado somente em outro manual por se tratar de uma rotina não obrigatória para mapa de carregamento.
