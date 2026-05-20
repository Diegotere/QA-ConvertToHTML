# Lista de Presentes — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Fluxo da rotina com o Módulo Documento Auxiliar de Venda](#fluxo-da-rotina-com-o-módulo-documento-auxiliar-de-venda)
- [Configurador](#configurador)
- [Cadastro de Usuários](#cadastro-de-usuários)
- [Módulo Lista de Presentes](#módulo-lista-de-presentes)
- [Documento Auxiliar de Venda](#documento-auxiliar-de-venda)
- [GE envio e-mail de lista de presentes](#ge-envio-e-mail-de-lista-de-presentes)
- [Informações adicionais](#informações-adicionais)

---

## Introdução

O módulo **Lista de Presentes** (**Faturamento » Lista de Presentes**) foi feito para que as lojas possibilitem aos seus clientes na realização de eventos como casamento, chá de bebê, chá de panela e outros, elaborarem uma lista de produtos que desejam ser presenteados pelos seus convidados.

A lista de presentes pode ser criada e depois modificada a qualquer momento. Permite impressão e relatórios diversos. Possibilita que um convidado adicione um presente que não constava na lista. Gerencia as entregas apresentando aqueles presentes que serão entregues pela loja ou aqueles que os convidados já levaram para entregar pessoalmente. Ainda permite à loja bonificar os realizadores dos eventos com percentuais em cima do valor dos presentes vendidos, gerando um crédito para adquirirem outros produtos.

**Exemplo:** Ana e João vão se casar, onde os dois se dirigem até a loja CASA & CIA, e após observarem os produtos dessa loja, deixam ali uma lista de presentes que eles desejam ter em sua casa, composta por: toalhas, pratos, panelas, eletrodomésticos, talheres, entre outros. Assim eles passam a informação aos convidados para o casamento, que deixaram a sua lista na loja CASA & CIA, dessa maneira cada convidado se dirige até a loja e à medida que forem comprando e pagando o item, o mesmo é baixado na lista de casamento para que a empresa possa saber quais produtos já foram pagos e quais ainda estão pendentes.

---

## Fluxo da rotina com o Módulo Documento Auxiliar de Venda

Antes de iniciar as configurações e rotina é importante entender por quais módulos passaremos e quais passos realizar em cada um deles, tendo assim uma visão geral:

> *[Imagem: Fluxo da rotina de Lista de Presentes com o Módulo Documento Auxiliar de Venda]*

> **Observação:** Na integração com o PDV os cupons já são vinculados aos itens na respectiva lista de presentes, não sendo necessário fazer o vínculo manual pelo botão **Vincular Venda à lista**.
>
> A partir das vendas vinculadas à lista de presentes já ocorreu o faturamento para a empresa, dessa forma, não são gerados novos títulos no financeiro após encerrar o processo.

---

## Configurador

Acesse a aba **"Faturamento / Opções"**, clique em **"Venda / Lista de Presentes"**:

Marque nesta tela o botão **"Trabalha com lista de presentes"**, e defina abaixo:

- **Bônus:** Percentual de bônus que será concedido como carta de crédito ao encerrar a lista. Dessa maneira, o cliente para o qual serão direcionados os produtos da lista receberá um vale na loja para que o mesmo possa comprar mais produtos futuramente.
- **Layout do espelho da lista de presentes:** Arquivo de layout para a impressão do espelho da lista de presentes.
- **Layout do espelho da lista de presentes – itens vendidos:** Arquivo de layout para a impressão somente dos itens vinculados às listas.
- **Layout do impresso do bônus:** Arquivo de layout para impressão da conferência do bônus ao encerrar a lista de presentes.
- **Layout para aviso de recebimento de presente:** Arquivo de layout HTML para envio de e-mail de recebimento de presente para o cliente através do módulo **GEEnviaEmailListaPresentes**.
- **Operação para documento de entrega:** Operação utilizada no documento gerado ao efetuar entrega da lista. A operação **não pode atualizar Financeiro**, apenas Estoque.

> **Observação:** Para controlar a entrega dos produtos da lista de presentes é necessário configurar o sistema para trabalhar com **Entrega Imediata/Entrega Futura**. Para isso no Configurador acesse a aba **"Estoque / Opções / Produto / Opções Gerais"**, marque a opção **"Trabalha utilizando entrega imediata / entrega futura"** e informe a **"Característica de entrega futura"**.

Uma outra configuração necessária é acessar a aba **"Faturamento / Tipos de Lista de Presentes"**. Realize o cadastro das categorias de lista de presentes utilizadas pela loja de acordo com cada cliente. Clique em **"Novo"** e realize quantos cadastros forem necessários.

---

## Cadastro de Usuários

É necessário conceder as permissões para os usuários que terão acesso ao módulo. Para isso vá até o módulo **Usuário**, clique em **Usuários**, selecione o usuário desejado, na tela de **Sistemas** adicione o módulo **206**, concedendo na tela de **Acessos** as devidas permissões.

> **Observação:** Caso queira realizar a inclusão do sistema diretamente no perfil vinculado ao usuário, no módulo **Cadastro de Usuários** clique em **Perfil de Usuário**, selecione o perfil desejado, em **Controle de Acesso aos sistemas**, adicione o módulo e conceda as devidas permissões.

---

## Módulo Lista de Presentes

### Menu Principal

No menu principal temos os botões para acesso às funcionalidades do sistema:

- **Novo:** Cadastrar novas listas de presentes.
- **Editar:** Utilizado para editar listas de presentes previamente cadastradas. Se a lista estiver encerrada, será exibida a tela como somente visualização. Há controle de registro em uso, de forma que caso um usuário tente editar um documento em aberto em outro computador, seja informado quem está acessando o documento no momento.
- **Excluir:** Usado para excluir cadastros de listas de presentes que ainda não possuem movimentação e não estão sendo utilizadas no momento.
- **Localizar:** Serve para localizar Listas de presentes, independente do filtro utilizado.
- **Vincular/desvincular venda à lista:** Utilizado para vincular vendas que não foram realizadas a partir da lista de presentes. Poderá vincular cupons e notas fiscais inserindo seus itens à lista de presentes. Por esse mesmo botão é possível remover também o documento vinculado.
- **Encerrar:** Realizar o encerramento da Lista de presentes, efetuando o cálculo do bônus, com base no percentual configurado e o valor total das vendas dos itens da lista, para geração da carta de crédito para o cliente.
- **Entregar:** Realizar a entrega de presentes da lista, podendo a entrega ser feita pela loja ou entrega diretamente ao cliente que foi buscar os itens na loja.
- **Devolver itens:** Gerar o documento de devolução de itens da lista de presentes.
- **Lista de presente:** Emitir relatórios referentes ao cadastro e movimentação dos itens das listas de presentes.
- **Linha do tempo:** Com as informações históricas dos documentos gerados a partir da lista.

### Área de Filtro

Onde será possível estabelecer critérios para o preenchimento da grid de listas de presentes:

- Empresa (loja) da lista de presentes
- Período referente às datas inicial e final do evento
- Cliente da loja vendedora
- Funcionário/Representante responsável pela lista
- Por status (listas abertas ou encerradas)

### Cadastro da lista de presentes

A tela de cadastro da lista de presentes é a responsável por todas as informações dos clientes, do evento e dos itens, assim como por efetuar ações de manutenção e impressão da lista de presentes.

Ao clicar em **Novo**, no menu principal a tela será aberta para realizar o cadastro de uma lista de presentes.

Os campos obrigatórios identificam o **Tipo da lista**, o **Funcionário/Representante responsável** (considerado o Vendedor), a **Data do evento**, e o **Cliente 1** (principal), para emissão da nota. Para o campo **Cliente 2** o preenchimento não é obrigatório, sendo utilizado somente como critério de filtro.

No canto superior direito da tela está disponível a informação do **Status da lista de presentes** (aberta ou encerrada).

Ao preencher os clientes, são exibidos o telefone e e-mail no contato principal da pessoa. Caso não tenha sido informado o telefone, será exibida a informação de celular.

Abaixo estarão disponíveis os campos referentes ao **endereço de entrega**, o qual é obrigatório. Nele será possível filtrar um endereço já existente do cliente 1, que esteja marcado como entrega no cadastro da pessoa, ou cadastrar um novo.

Para controle da entrega dos presentes é disponibilizado um campo informativo referente à **Data prometida de entrega** pela loja. Ao lado da data prometida é disponibilizado o **status da entrega** (pendente ou realizada).

A grid de **Itens da lista de presentes** é responsável pela exibição, cadastro e manutenção dos itens.

Os itens que forem incluídos pelo convidado (aqueles que não foram escolhidos previamente pelo cliente) serão exibidos na lista em **cor azul**, conforme legenda, apenas como critério de diferenciação.

### Cadastro dos itens da lista

Ao clicar em adicionar ou editar, na grid de itens da lista de presentes, será exibida tela para inclusão de itens, contendo um cadastro simples com produto e a quantidade para inserir na lista.

Ao gravar o item será efetuada crítica quanto ao tipo do produto, que deverá ser **Intermediário**, **Comercializado**, **Industrializado** ou **Expediente**.

### Movimentações

Ao clicar em **"Movimentações"** em um item da lista, visualiza-se a movimentação e entrega dos itens da lista, ou seja, os documentos que foram vinculados ao produto. Cada registro do log irá conter por item as informações:

- **Documento:** Indicando se Cupom, NF, ou DAV e seu respectivo número. Serão disponibilizadas entre parênteses informações gerais do status, como "cancelado", "devolvido" ou "não impresso".
- **Data:** Indica a data em que ocorreu a movimentação.
- **Usuário:** Indica o usuário que efetuou a movimentação do item.
- **Empresa:** Empresa onde ocorreu a movimentação.
- **Descrição:** Indica a descrição da movimentação realizada.
- **Quantidade:** Quantidade vendida / devolvida.
- **Tipo:** Movimentação do item, se "Venda", "Retirada pelo cliente" ou "Entrega pela loja".

### Impressão de espelho da lista de presente

Ao clicar em **Gravar** será questionado se deseja imprimir a lista criada. Clique em **Sim**, após informe o tipo de impressão, a forma de ordenar os produtos e tabela de preço desejada.

> *[Imagem: Relatório de espelho da lista de presentes]*

Caso na lista criada haja alguma informação pendente, o sistema abre a tela **Validação** informando ao usuário o que precisa ser ajustado.

### Encerramento da lista de presentes

Ao clicar para **"Encerrar"** na tela principal, e confirmado que deseja efetuar o procedimento, o sistema entende que a lista já foi toda preenchida ou seu período finalizado. Assim será gerada carta de crédito conforme percentual de bônus configurado no Configurador, caso haja, sendo em seguida exibidos o espelho para o bônus configurado.

> *[Imagem: Tela de encerramento da lista de presentes com geração de carta de crédito]*

### Vincular/desvincular venda à lista de presentes

Na tela principal, há o botão **"Vincular/desvincular Venda à lista"**. Ele é responsável por realizar o vínculo das vendas já realizadas à lista de presentes, ou até mesmo remover vendas antes vinculadas.

**Quando utilizar esse recurso:** Suponhamos que o cliente JOÃO DA SILVA chegou à loja e comprou o produto toalha de banho, o cupom foi emitido e a venda foi finalizada, só que o JOÃO somente explicou que se referia à lista de casamento ao final da venda. Dessa forma, o vendedor pode simplesmente localizar a lista e incluir a venda feita para o cliente JOÃO.

Para usar o recurso clique na lista desejada e após no botão correspondente. A tela traz as informações básicas apenas como critério de visualização para identificar a lista de presentes e possibilita escolher o documento para vincular, podendo este ser cupom ou nota fiscal.

Ao vincular uma venda à lista, os itens da venda, caso não previamente inseridos na lista, serão incluídos como adicionados pelo convidado e constarão com a **cor em azul**. Os itens que já existirem terão as suas quantidades incluídas como atendidas.

Para que o procedimento seja finalizado, é solicitada mensagem de **'Confirmo'**, e será possível reverter a qualquer momento o vínculo realizado.

Os itens dos documentos vinculados manualmente que forem de entrega futura já serão automaticamente contabilizados como entregues. Os itens de entrega imediata também serão automaticamente considerados como entregues no momento do vínculo.

> **Observação:** O documento somente aparece no módulo caso o Liberador de estoque já tenha sido executado.

Se o usuário vinculou um documento incorreto à lista pode-se desvincular usando esse mesmo botão e selecionando o documento, item em questão e clicando no botão **Vincular/Desvincular**. Somente é possível realizar esse processo quando a lista está com o status **Aberta**.

### Entrega da lista de presentes

Essa tela é responsável por realizar a entrega dos itens da lista de presentes que será realizada pela loja e emitir o documento fiscal para acobertar o trânsito desses itens.

A tela traz as informações básicas apenas como critério de visualização para identificar a lista de presentes. A grid **"Itens pendentes da lista de presentes"** exibe somente os itens que não foram entregues pela loja e nem foram levados pelos clientes, permitindo editar as quantidades a serem entregues. Há a possibilidade de clicar em **"Entregar todas as quantidades pendentes"** para que as quantidades de todos os itens sejam preenchidas em sua totalidade.

Existe ainda a opção de **"Realizar a entrega pela loja"** ou não. Se a opção não estiver marcada, a entrega será tida como parcial, ou seja, uma entrega efetuada diretamente aos clientes.

Ao clicar em entregar será gerado documento de ordem de entrega para dar saída no estoque conforme a operação configurada no **Configurador / Faturamento / Opções / Venda / Lista de Presentes / Operação para documento de entrega**.

Na tela principal do módulo há a coluna **Status da Entrega** para consulta:

- **Parcialmente entregue:** Listas que tiveram as quantidades de produtos parcialmente entregues.
- **Pendente:** Quantidade totalmente pendente de entrega, onde não foi entregue nenhum produto ao cliente.
- **Sem movimentação:** Quando nenhum produto na lista fica disponível para entrega.
- **Totalmente entregue:** Todas as quantidades de produtos atendidos foram entregues ao cliente.

### Devolver Itens

Pelo módulo é possível realizar a devolução dos produtos após o fechamento da venda. Temos duas possibilidades:

1. **Devolução dos itens realizadas pelo próprio convidado**, onde o mesmo comprou o produto mas deseja devolvê-lo para a empresa.
2. **Quando o próprio cliente da lista** (como os noivos, se fosse uma lista de casamento) decide devolver o produto que foi dado por algum convidado.

Para realizar a devolução, primeiro seleciona-se a lista desejada e clica-se em **Devolver Itens**. Em seguida preencha ao lado do produto e documento de venda a quantidade a devolver (podendo ser parcial ou total). No campo **Cliente para devolução e carta de crédito** informe o cliente da lista de presentes ou o convidado (de acordo com a pessoa que está devolvendo a mercadoria).

Após, clique em **Devolver**. O sistema retorna o resultado da rotina informando que criou o documento de devolução no módulo Faturamento e gerou a carta de crédito com o valor da devolução.

> **Observação:** Se desejar que o sistema se comporte de outra forma quanto à negociação ou queira realizar a troca de mercadorias, deve-se usar o **Devolução de Troca e Venda**.

Após isso, no Faturamento o documento foi gerado em **Aberto**, basta realizar o envio para a SEFAZ.

### Relatório de lista de presentes

O relatório de lista de presentes é responsável por mostrar as listas de presentes correspondentes aos filtros informados pelo usuário.

**Aba inicial:**

- **Período de criação:** Data em que a lista de presentes foi cadastrada no sistema.
- **Período prometido para entrega:** Data em que a loja combinou a entrega dos itens da lista no endereço de entrega.
- **Período do Evento:** Data em que o evento relacionado à lista ocorrerá.
- **Período de entrega pela loja:** Data em que a loja realizou a entrega dos itens da lista no endereço de entrega.
- **Tipo de relatório:** Detalhado ou bônus, de acordo com variáveis e RTMs configurados.
- **Movimentações:** Filtro pelas movimentações realizadas.
- **Status:** Se aberta ou encerrada.
- **Entrega:** Selecionar a partir do tipo de entrega.
- **Bônus:** Se possui ou não bônus.
- **Arquivos de layout:**
  - `FatListaPresentes_EspelhoListaPresentes.rtm`: Utilizado na impressão da lista de presentes contendo todos os produtos pendentes e vendidos.
  - `FatListaPresentes_ImpessoBonusListaPresentes.rtm`: Imprime uma declaração para a pessoa que recebe o bônus referente às vendas realizadas.
  - `FatListaPresentes_RelatorioBonusListaPresentes.rtm`: Verifica-se todas as pessoas que receberam bônus, demonstrando detalhadamente a alíquota e total de bônus de cada pessoa.
  - `FatListaPresentes_RelatorioListaPresentes.rtm`: Demonstra as listas de presentes geradas, demonstrando os clientes e os produtos vinculados à sua respectiva lista.

Além dos filtros iniciais será possível realizar filtros por empresas, clientes, tipos de listas, listas de presentes e funcionários.

Ao abrir a tela de relatórios note que há o botão **Cenário**, por meio do qual o usuário pode salvar o filtro que ele realizou, dessa maneira, ao acessar o módulo novamente basta carregar o cenário salvo.

### Linha do tempo da lista de presentes

Conforme documentos vinculados ou gerados a partir da lista de presentes, os mesmos estarão visíveis para navegação através da **linha do tempo**, a qual exibe os dados principais da lista de presentes, seus itens, e quantidades pedidas, atendidas e entregues.

---

## Documento Auxiliar de Venda

O fluxo normal para movimentação dos itens da lista de presentes é realizado através do módulo **Documento Auxiliar de Venda**, que gerará um DAV a partir da lista de presentes, para que seja passado no PDV Alterdata e integre as quantidades atendidas.

Com o sistema configurado para **"Trabalhar com lista de presentes"** no Configurador, será disponibilizado o botão **"Criar DAV a partir da lista de presentes"**, dentro do módulo **Documento Auxiliar de Venda**.

> *[Imagem: Botão "Criar DAV a partir da lista de presentes" no módulo Documento Auxiliar de Venda]*

Ao clicar nesse botão, será exibida tela de seleção das listas de presentes em aberto a serem utilizadas como base para o novo DAV. Na tela aberta pode-se usar vários campos para refinar o filtro. Após encontrar, clique duas vezes na lista ou use o botão **Selecionar**.

Para a rotina o cadastro do DAV segue com 2 alterações:

**1 - Aba Lista de presentes:**

Esta aba conterá a informação da lista de presentes selecionada na tela anterior. É necessário informar o nome da **Pessoa/família que presenteou**.

**2 - Inclusão de itens a partir da lista de presentes:**

Ao clicar no botão **"Adicionar"** itens, será disponibilizado um novo filtro, denominado **Filtrar itens**:

- **Da lista de presentes:** Serão incluídos no DAV somente os produtos já informados na lista.
- **Todos os itens:** Para informar também produtos que o convidado deseja dar como presente, além dos que constam na lista. Dessa maneira, ao fim do processo de integração do PDV Alterdata, o item será adicionado na lista de presentes como incluído pelo convidado.

Ao selecionar um item presente na lista, ao fim do processo de integração do PDV Alterdata, o mesmo terá a sua quantidade atendida movimentada.

A opção **Presente** serve para indicar se o convidado deseja que o produto que ele dará será embalado para presente ou não.

Deve-se marcar também o **"Tipo de Entrega"**:

- **Entrega imediata:** Ao finalizar o processo de integração do PDV Alterdata, a quantidade entregue do item da lista será automaticamente computada como entregue.
- **Entrega futura:** A entrega ficará pendente, e somente será computada ao efetuar a entrega pela lista de presentes, enviar o documento gerado e processar o documento pelo liberador de estoque.

Após, os produtos são demonstrados na aba **Lista de presentes**, com a coluna **P** com o símbolo do módulo lista de presentes.

---

## GE envio e-mail de lista de presentes

Para envio de e-mails de confirmação de itens vendidos aos clientes (cliente 1 e cliente 2), o **GeEnviaEmailListaPresentes** envia e-mail para o endereço informado no contato com tipo e-mail da pessoa, cada vez que houver uma nova venda computada, seja pelo procedimento normal ou pelo vínculo manual.

O layout do e-mail pode ser configurado através das opções de lista de presentes nas opções do Faturamento no Configurador e o tempo de verificação de envio varia conforme configuração da tarefa de envio configurada.

Caso sua tarefa não esteja cadastrada, acesse o **Módulo Configurador / Aba Geral / Tarefas**, crie uma nova tarefa vinculando o **"Sistema" 207** (Tarefa para envio de e-mail da lista de presentes).

Pelo botão **Tarefas Agendadas**, vincule a tarefa criada e defina a periodicidade do envio do e-mail aos clientes.

> **Observação:** O **GeAgente (Gerente Eletrônico)** precisa estar em execução para realizar o envio do e-mail. O e-mail será enviado para o cliente no momento em que a nota/documento for vinculado(a) à lista de presentes.

---

## Informações adicionais

- Os DAVs não são gerados diretamente pelo módulo Lista Presentes segundo orientação legal na qual o DAV não pode ser criado por um aplicativo externo não homologado. Desta forma o usuário deverá acessar o aplicativo DAV para realizar tal procedimento.
- O único fluxo previsto de geração de venda a partir da lista de presentes será para o DAV ou através de vínculo manual de documento após venda realizada. Não será possível gerar vendas a partir da lista de presentes diretamente por outros módulos.
- Não é possível o vínculo de um documento para mais de uma lista.
- Para que seja contabilizada uma movimentação de um item da lista de presentes é necessário que haja uma venda vinculada. Não será possível realizar movimentações manualmente nos itens da lista de presente sem a geração ou vínculo de um documento.
- O bônus será calculado sobre o valor vendido, ou seja, a partir do valor expresso em cada documento fiscal.
