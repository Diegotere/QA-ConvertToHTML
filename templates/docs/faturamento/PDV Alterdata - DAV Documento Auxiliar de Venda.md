# PDV Alterdata — DAV Documento Auxiliar de Venda — Bimer ERP

> **Sensibilidade:** interno  
> **Fonte:** Universidade Corporativa Alterdata

---

Introdução Quando a empresa trabalha com PDV Alterdata é comum utilizar o módulo FatDAV. Por quê? Imagine o dia a dia desta empresa, onde os clientes entram em contato para consultar o catálogo de produtos, preços, formas e prazos de pagamentos, ou seja, querem fazer um orçamento junto ao vendedor. Com esse orçamento em mãos, o cliente pode ir para sua casa e pensar se vale a pena comprar os produtos de acordo com as condições que lhe são oferecidas. E se esse cliente conclui que vai comprar com a empresa? Neste caso, o vendedor recupera no sistema o orçamento criado no qual já constam todos os dados combinados antes com o cliente, e isso facilita a geração da venda por meio do PDV, visto que não será necessário lançar todos os dados manualmente novamente. Um segundo exemplo: imagine que tenho uma loja de autopeças e os clientes são atendidos pelos vendedores, mas estes não possuem acesso ao caixa, ou seja, apenas iniciam o processo e o operador de caixa fecha a venda. Dessa forma, digamos que o cliente queira comprar, neste momento, um óleo para motor, lanterna traseira e uma bateria. Assim, o vendedor demonstra quais são os produtos disponíveis e gera um DAV para que o cliente possa ir até o caixa, realizar o pagamento e levar os seus produtos. Neste exemplo, por meio do DAV, o operador de caixa recupera os dados da venda para realizar a geração, facilitando o fechamento da venda. Dessa maneira, concluímos que o módulo FatDAV do Bimer ERP gera documentos que podem funcionar como orçamento, os quais serão usados no ato da venda para facilitar o fechamento pelo operador de caixa. Esse módulo respeita a legislação do PAF-ECF mesmo para as empresas que trabalham com NFC-e ou CF-e-SAT, por isso, alguns recursos são limitados e protegidos a fim de seguir essa regulamentação.

Veremos neste material que a partir dos documentos do FatDAV geramos NFC-e ou Cupom Fiscal por meio do PDV Alterdata. E o DAV pode ser criado a partir do próprio FatDAV ou ser originado em outro módulo, como Pré-pedido, Pedido de vendas e Ordem de serviço.

Fluxo da Rotina Antes de fazer as configurações, veja abaixo como é a rotina, e quais módulos podemos utilizar para efetivá-la. 1 – Cliente: entra em contato com a empresa informando os itens que deseja levar; 2 – Vendedor: atende ao cliente, demonstrando o catálogo de produtos, preços, formas e prazos de pagamento; 3 – Módulo FatDAV: vendedor emite o DAV com as informações colhidas durante o atendimento ao cliente. Este pode ser usado como um orçamento e documento que auxilia no processo de venda; 4 – Módulos auxiliares: pelos módulos Ordem de Serviço (FatOS), Pré-Pedido (FatPrePedido) e Pedido de Vendas (FatPedido), podemos iniciar o processo de venda para criar o DAV no módulo FatDAV. 5 – Operador de Caixa: cliente/vendedor leva o DAV emitido ao operador caixa.

6 – PDV Alterdata: o operador de caixa utiliza o DAV emitido para recuperar os dados da venda, evitando o lançamento manual dos produtos, negociação e outros dados contidos no DAV. Assim, o operador realiza o fechamento da venda. Ressalta-se que, para o DAV aparecer no PDV, é necessário que esteja com o status Disponível para o PDV Alterdata e que o Web Service de Integração dos plugins Alterdata esteja devidamente configurado. 7 – Documento emitido: ao fazer o fechamento da venda no PDV, geramos o cupom fiscal ou NFC-e (Nota Fiscal ao Consumidor Eletrônica). 8 – Concentrador e Integrador: realiza-se a rotina de Importação para atualizar os status dos documentos no módulo FatDAV. 9 - Módulo FatDAV: o status do DAV é atualizado após a importação do passo 8.

Configurações Cadastro de Usuários Clicando no botão Cadastro de Usuários, localize a pessoa que vai trabalhar com a rotina do DAV e clique em “Editar”. Na aba “Perfis de acesso do usuário” vincule o módulo Documento Auxiliar de Venda. Configurador do PDV Alterdata (PDVAlterdataCfg) Acesse a aba Ferramentas > Opções > Documento Auxiliar de Venda. Vamos ver cada aba presente no módulo.

Aba Geral Temos as seguintes opções: • Forma de pagamento para substituir a carta de crédito (DAV inativo): Se foi criado o DAV aproveitando uma carta de crédito, caso este documento tenha posteriormente o status alterado para Inativo, o sistema retira das Parcelas do DAV a forma de pagamento configurada como Carta de Crédito e insere a forma de pagamento informada neste campo. São aceitas apenas as que estiverem configuradas como Dinheiro. • Ao criar DAV manualmente o status ficará como disponível para o PDV- Alterdata: Pode-se criar o documento já com o status de Disponível em vez de Aberto. Isso agiliza o processo, uma vez que não será necessário criar o DAV e depois alterar o status. Assim, no momento da criação do DAV como Disponível o usuário do PDV já pode utilizar o documento para realizar a venda.

• Habilitar informação de complemento de produto de um DAV: Ao incluir o item no DAV o campo Complemento é habilitado para inserir alguma descrição ou informação adicional. • Obrigar pessoa de repasse na criação do DAV: Não permite criar um documento sem a pessoa de repasse, ou seja, sem a pessoa de comissionamento, na maioria dos casos, o vendedor. • Utilizar o setor informado no cadastro do terminal na criação de um DAV: Ao criar ou editar o DAV, será utilizado para movimentação de estoque o setor informado no cadastro do terminal do PDV que realizou a venda. Assim, não será utilizado o setor padrão da empresa para movimentar o estoque, mas, sim, o do terminal de venda. • Opções Imprimir complemento de descrição do produto, Imprimir dados da negociação e Imprimir dados da observação do DAV: Marque a informação que deve sair na impressão do DAV. Pode-se marcar mais de uma se for preciso. • Número de dias de validade do DAV (Utilizado na impressão do DAV): Faz com que seja impressa a mensagem no DAV especificando validade dele. Quando informado 0 (zero), a mensagem não é impressa no DAV. Exemplo de mensagem: Este documento é válido por X dia a contar da data de sua emissão. • Verifica estoque por: Afeta na visualização da quantidade do produto no momento de editar / criar o DAV. Marque uma das duas: ◦ Empresa: O FatDAV verificará a quantidade em estoque considerando somente a empresa. ◦ Setor: O FatDAV verificará a quantidade em estoque considerando o setor padrão da empresa ou o setor configurado para mostruário para empresa utilizada.

• Impressão por RTM específico: Podemos informar um RTM diferente do padrão do sistema para a impressão do DAV contendo campos, colunas e dados específicos. Caso não possua nenhum arquivo específico, deixe a opção desmarcada. Aba Ramo de Atividade Caso trabalhe com geração de DAV-OS (DAV com Ordem de serviço), para facilitar a digitação do documento, pode-se marcar a opção Utilizar ramo de atividade pré- definido e inserir a tabela de Informação complementar padrão para os

equipamentos do DAV-OS. Se a empresa for uma automecânica, marque a opção correspondente e preencha os dados da Marca, Modelo, Ano/Fabricação e Renavam.

Essa tabela é cadastrada no Configurador Bimer > Geral > Outros Cadastros > Informações Complementares, clicando em Novo e depois Adicionar para inserir os Campos Personalizados, sendo estes os que são informados nos campos dinâmicos correspondentes do Configurador.

Com essas configurações realizadas, ao criar o DAV-OS, na área de Equipamentos haverá a aba Informações complementares que virá solicitando o preenchimento dos dados apontados no Configurador do PDV. Observação: Para que um dado complementar seja obrigatório, é necessário marcar no cadastro do Campo Personalizado a opção Preenchimento Obrigatório.

Aba Integração Podem ocorrer alguns eventos durante a utilização do módulo FatDAV como cancelamento e cópia do documento. Nesta aba, defina qual ação o sistema executará de acordo com os seguintes eventos: • Ao realizar o cancelamento de um cupom fiscal oriundo de um DAV que esteja vinculado a um pré-pedido: Ao cancelar o documento na situação descrita na opção, marque se o pré-pedido será cancelado, mantido com o status de aberto ou reaberto. • Ao copiar um pré-pedido para DAV: Determine se o valor de frete será rateado (dividido) para todos os itens ou rateado somente para os itens tributados por ICMS ou ISS. • Forma de pagamento para gerar uma parcela no DAV, quando o pré- pedido não possuir nenhuma parcela. Funcionará da seguinte maneira: ◦ Caso a operação do pré-pedido/pedido de venda esteja configurada para atualizar financeiro, o sistema emitirá uma mensagem de crítica e não permitirá gerar o DAV a partir de um pré-pedido/pedido que não possua nenhuma parcela de pagamento, sendo necessário reabrir o pedido e informar o prazo na negociação. ◦ Caso a operação do pré-pedido/pedido de venda não esteja configurada para atualizar financeiro, o sistema gerará DAV com uma única parcela, com o total do DAV, utilizando a forma de pagamento informada na nova configuração. Essa configuração foi implementada especificamente para pedidos criados a partir de uma troca realizada no FatDevolução que não possuam forma de pagamento. Sendo assim, deve-se inserir neste campo uma forma de pagamento que esteja cadastrada com o tipo “Troca”.

• Na tela de seleção para copiar uma ordem de serviço para DAV, o filtro será por: Defina qual tipo de data da ordem de serviço será usada para o filtro relacionado. Aba Venda Mostruário Configuramos o setor mostruário por empresa, clicando no botão de Adição. Assim, ao inserir um produto ao DAV haverá a marcação Produto de Mostruário, marcando-a o sistema utiliza o setor informado nesta tela. Esta

configuração

não

é necessária caso a empresa não trabalhe com mostruário.

Preços padrões Acesse Ferramentas » Opções » Geral e defina o Preço padrão para venda e o Preço alternativo para venda. Essas tabelas de preços devem ser vinculadas ao produto com a definição do preço em seu cadastro. Ao inserir um novo item o FatDAV recupera a tabela de Preço

padrão

para venda, mas o vendedor pode alterar para a tabela que estiver no campo Preço alternativo para venda. Isso quer dizer que o FatDAV trabalha apenas com duas tabelas de preço.

Rotinas do DAV Criação de DAV e importação no PDV Alterdata Acesse o módulo Documento Auxiliar de Venda, informe a Empresa e clique em Novo.

1. Informe a pessoa, normalmente o cliente;
2. Coloque o prazo no DAV;
3. Para o DAV aparecer no momento da Troca no PDV Alterdata, é preciso marcar
opção “Utilizar DAV para troca”;

4. No rodapé inclua os itens clicando em Adicionar.
Na tela de inclusão de produtos, informe o código do produto ou pesquise através do botão Localizar, insira Complemento, quantidade, acréscimo e desconto. No campo Preço estarão disponíveis apenas as tabelas de preço padrão e preço alternativo. No botão Quadro de Estoque o vendedor consulta a quantidade em estoque do item. A visualização pode ser total por empresa ou por setor, de acordo com a definição no Configurador do PDV » Ferramentas » Opções » Documento Auxiliar de Venda » Geral » Verificar estoque por.

Na aba Repasse veja a pessoa de comissionamento, sendo possível mudar a alíquota de comissão ao clicar no símbolo de Cadeado ao lado da Comissão no Faturamento (quando o documento de venda for corretamente gerado/autorizado) ou Duplicata (quando o título gerado pela venda for baixado).

Voltando à tela principal da inserção do DAV, na aba Outros, pode-se informar um acréscimo ou desconto no total do documento, uma Unidade de negócio e Indicador de presença, se necessário. Na aba Repasses, pode-se inserir ou remover algum representante ou funcionário de comissionamento, clicando no símbolo do cadeado para alterar a alíquota.

A última aba é Mensagens, na qual pode-se informar na Observação do DAV um dado para controle interno apenas para uso no módulo FatDAV. Ou podemos inserir uma Observação do documento a fim de ser resgatada em outros módulos. Após isso, podemos Imprimir clicando no botão correspondente (esse processo já salva o DAV). Ou clique em Gravar para salvar sem imprimir o documento. O sistema confirmará a geração do DAV apresentando uma mensagem com o número de documento gerado.

Na grade inicial do módulo FatDAV, observe os status e legendas disponíveis ao DAV. O PDV Alterdata só enxergará o DAV que estiver com status Disponível para o PDV Alterdata. Acesse o PDV Alterdata e aperte as teclas ALT + O, assim abrirá a tela de seleção de DAV. Devemos localizá-lo, selecioná-lo e clicar em Próximo.

Em seguida serão apresentados os dados do DAV, como Cliente e endereço do mesmo, Produtos, e Negociação. É só Concluir.

A venda irá para a grid principal do PDV Alterdata e será apresentado tela para confirmar o Cliente. Basta clicar em OK(F10). Por fim, faça o fechamento da venda. Após isso, a venda estará concluída e, em seguida, devemos importá-la para o sistema Bimer.

Após o processo de Importação no Integrador Bimer x Spice/PDVAlterdata e no Concentrador, o DAV terá seu status alterado para Venda efetivada, ficando em Verde e com o número do cupom fiscal em destaque. A alteração do status para Venda efetivada NÃO depende de rodarmos o Liberador de Estoque. Fica a Dica: Se apertar ALT + O no PDV e dê algum erro para carregar os plugins, acesse Regedit, pasta HKEY_LOCAL_MACHINE\ SOFTWARE\Wow6432Node\ Alterdata\ERP\LoginERPWS,

no campo URLConexaoPadrao coloque o endereço do Integra plugins PDV Alterdata (que se encontra no IIS).

Impressão de DAV Clique no botão Imprimir DAV no menu superior da tela para imprimir o documento selecionado.

Relatório de DAVs Clique em Relatório de DAVs, para emitir os documentos gerados em um período. Clique em Próximo. Na tela seguinte, informe o período e a empresa, e clique em Visualizar ou Imprimir.

Status do DAV O DAV poderá ter os seguintes status: • Aberto → Esse status significa que o DAV foi cadastrado, mas não armazena quantidade em estoque dos produtos e também não é enxergado pelo PDV Alterdata. Esse status permite edição do DAV desde que não tenha sido impresso. Devido a legislação do PAF-ECF, após gravado o DAV, o item já lançado só poderá ter a quantidade editada, mas o item poderá ser removido do DAV ou cancelado. • Inativo → Esse status significa que o DAV foi cadastrado, mas não armazena quantidade em estoque dos produtos e também não é enxergado pelo PDV Alterdata. Esse status NÃO permite edição do DAV. • Disponível para o PDV Alterdata → O PDV Alterdata só enxerga o DAV quando estiver nesse status. Significa que o DAV está disponível para o PDV, mas ainda não foi resgatado nele. Esse status NÃO permite edição do DAV. • Aguardando retorno do PDV Alterdata → Esse status significa que o DAV já foi resgatado no PDV Alterdata, porém a venda ainda não foi importada do PDV para o Bimer. Esse status permanece desde o momento em que o DAV é resgatado no PDV (antes mesmo de finalizar a venda) até o momento em que a venda é importada do PDV para o Bimer, ou que o sistema identifica que a venda foi cancelada antes de ser finalizada no PDV, por isso o DAV volta ao status Disponível para o PDV Alterdata. Esse status NÃO permite edição do DAV. • Venda efetivada → Esse status significa que o DAV já foi resgatado no PDV Alterdata e que a venda já foi importada do PDV para o Bimer. Esse status NÃO permite edição do DAV e não significa que a venda foi liberada pelo módulo Liberador do Estoque.

No módulo FatDAV, na tela principal, temos o botão Alterar status que permite alteração manual do status do DAV. As opções disponíveis variam de acordo com o status atual do documento.

Copiar dados para novo DAV No módulo FatDAV temos recurso para duplicar um DAV ou quando trabalhamos com geração de DAV a partir do Pré-Pedido, ou de DAV-OS a partir de Ordem de Serviço. Para isso, precisamos usar o botão Copiar dados para novo DAV. Este botão fará com que seja aberto o assistente, para filtrarmos o documento que desejamos copiar para criação de um novo DAV. Serão apresentados DAVs já existentes e pré-pedidos na aba DAV. E na aba DAV-OS serão apresentados DAVs já existentes e Ordens de Serviço. Basta selecionar o registro e clicar em OK. O sistema fará a criação do DAV e apresentará mensagem confirmando a criação deste. Nesse caso, o DAV sempre será gerado com status

Aberto

independentemente

da configuração.

DAV a partir de Pré-Pedido Quando trabalhamos com Pré-Pedido e DAV, é possível integrar os 2 módulos, aproveitando o Pré-Pedido para a geração do DAV. Para isso, é necessário configurar a empresa. Acesse o módulo Configurador Bimer » Geral » Empresas » aba Cadastro » Complementar, marque a opção Trabalha com integração do PDV-Alterdata. No Tipo de Integração marque Cupom fiscal, onde empresa deve respeitar a legislação do PAF-ECF, ou selecione NFC-e se para a emissão deste documento no PDV. Faremos 2 exemplos desta rotina, visto que existem diferenças no comportamento do sistema quanto a estas configurações. Faremos antes com Cupom fiscal.

Tipo de Integração – Cupom Fiscal Acesse o módulo Pré-Pedido, faça um filtro e veja que foram habilitados 2 novos botões: Liberar para transformação em DAV e Cancelar liberação para transformação em DAV. Caso estes botões não apareçam, clique em Opções do Sistema verifique se a empresa informada possui no cadastro da empresa a marcação Trabalha com integração do PDV Alterdata.

Após cadastrar o pré-pedido, selecione-o e clique em Liberar para transformação em DAV. Na tela seguinte, pode-se editar alguma informação e clicar em Gravar. Em seguida, serão apresentadas telas para confirmar dados, como prazo de entrega e endereço de entrega do cliente. Se não for necessário alterar, basta clicar em Gravar nas telas apresentadas.

Veja a confirmação da liberação do pré-pedido. Logo em seguida, o sistema lembra da necessidade de gerar DAV pelo botão Copiar dados para novo DAV. O pré-pedido permanecerá em seu grid de pré-pedidos. Se liga! O botão Liberar para transformação em DAV somente aparece na aba Pré- Pedido, assim, para realizar a rotina o pré-pedido, não pode ser transformado pedido de venda. Acesse o módulo FatDAV, informe a Empresa e clique sobre Copiar dados para novo DAV. Na tela de filtro, busque o documento criado usando os campos de Data e em Procurar por pode-se digitar o código do pré-pedido para agilizar a pesquisa. Na coluna Nr. Documento há o número do pré-pedido e na coluna Origem quando há o informe Pedido, confirma-se que este é um pré-pedido e não um DAV.

Selecione o pedido e clique em OK. O DAV é gerado de acordo com a mensagem de confirmação. Note que o DAV foi gerado com status Aberto.

Tipo de Integração – NFC-e Agora faremos o exemplo com o tipo de integração NFC-e. Existe uma rotina que só funciona caso o tipo de integração do PDV Alterdata esteja marcado NFC-e no cadastro da empresa. Esta rotina permite Gerar DAV e Inativar DAV direto do módulo Pré-Pedido, sem a necessidade de usar o botão Copiar dados para novo DAV. Este processo elimina a necessidade de gravar o pré-pedido, para depois liberar para transformar em DAV e, por último, ir no FatDAV e gerar o documento. A geração do DAV pode ser feita diretamente ao gravarmos o Pré-Pedido, pois o sistema já pergunta se deseja gerar DAV. Além disso, o DAV será criado diretamente com status Disponível para o PDV Alterdata, podendo até mesmo eliminar o uso do módulo FatDAV, pois logo ao criar o DAV pelo módulo Pré-Pedido, já estará visível no PDV Alterdata.

Para fazer a rotina, além da configuração para gerar NFC-e na empresa, acesse o módulo Configurador

do

FatPDV (FatPdvCfg)

»

menu Ferramentas » Opções » aba Pré-Pedido / Pedido de venda » Outros, marque a opção O sistema Pré-pedido poderá gerar e inativar DAV vinculado a um pré-pedido. No módulo Pré-pedido, ao criar um documento e clicar em Gravar, é apresentada a mensagem Deseja gerar DAV a partir deste pré-pedido, neste momento?

Ao clicar em NÃO, o pré-pedido é gravado sem gerar o DAV. Poderemos gerar o DAV em um momento posterior. Ao clicarmos em SIM, serão apresentadas telas para confirmar dados como prazo e endereço de entrega do cliente. Se não for necessário alterar, basta ir clicando em Gravar. Em seguida, o sistema grava o pré-pedido já gerando o DAV. E apresenta a mensagem confirmando a criação dele. Acessando o módulo FatDAV, veja que nada mais é necessário, basta acessar o PDV e resgatar o DAV normalmente.

Pode ocorrer do usuário apenas gravar o pré-pedido sem gerar o DAV. Posteriormente se for necessário gerá-lo, selecione o pré-pedido e clique em Gerar DAV na tela principal do módulo Pré-pedido. Podemos também Inativar o DAV criado diretamente a partir do módulo Pré-pedido, basta ir à aba Documentos Auxiliares, selecionar o pré-pedido e clicar em Inativar DAV. Será necessário confirmar a mensagem para prosseguir. E ao consultarmos no módulo FatDAV, veremos o DAV inativado.

DAV a partir de Pedido de Venda A partir do módulo Pedido de Venda também podemos gerar e inativar DAVs. O recurso é bem semelhante ao que existe no módulo Pré-Pedido e está disponível apenas quando a empresa emite NFC-e. Para trabalhar com esse recurso duas configurações são necessárias: • Configurador Bimer » Geral » Empresas » aba Cadastro » Complementar, em Trabalha com integração do PDV Alterdata marque tipo de integração NFC-e. • Configurador Bimer » Faturamento » aba Pedido de venda » Complementar, marque a opção O sistema pedido de venda poderá gerar e inativar DAV vinculado a um pedido de venda.

Ao acessar o módulo Pedido de Venda e informar a Empresa será habilitado o botão NFC-e. Após criar o pedido é necessário liberá-lo. Somente os pedidos de venda liberados podem ser transformados em DAV. Observação: Após a liberação de um pedido de venda que tenha gerado um DAV, não será possível mais realizar o cancelamento da liberação do pedido. Ao clicarmos em NFC-e, temos as opções: Gerar DAV individualmente, Gerar DAV em lote e Inativar DAV. Ao clicar em Gerar DAV individualmente, informe o código do pedido de venda.

O DAV será gerado e o pedido de venda será atendido totalmente. Observações: • Após gerar o DAV, não será possível conferir um pedido de venda pelo FatSeparaPedido; • Não é possível gerar mais de um DAV para um mesmo pedido de venda/pré- pedido; • O sistema não permite editar um pedido de venda/pré-pedido que tenha gerado um DAV.

Através da Linha do Tempo do pedido poderemos visualizar DAV em Descendente. No módulo FatDAV, é sempre gerado com status Disponível para o PDV Alterdata. O recurso de Gerar DAV em lote é usado quando há vários pedidos liberados, a partir dos quais geraremos o DAV. Em seguida, clique em Filtrar pedidos. Monte um filtro buscando por período, clientes ou transportadoras, por exemplo.

Serão apresentados os pedidos de venda disponíveis para geração de DAV. Marque os desejados e clique em Gerar DAV. Com isso, o sistema fará o processamento gerando os DAVs atendendo os pedidos de venda. Ao acessar o FatDAV, veja que, para cada pedido de venda, é gerado 1 DAV distinto, mesmo que existam 2 ou mais pedidos de venda para 1 único cliente. Voltando ao módulo Pedido de Venda, clicando em NFC-e, e em Inativar DAV, abrirá uma janela para informarmos o código do pedido de venda para inativar o DAV. O pedido de venda voltará ao status Liberado e o DAV será inativado no módulo FatDAV.

Criação DAV-OS No módulo FatDAV, acesse a aba DAV-OS, clique em Novo para criar o Documento Auxiliar de Venda da Ordem de Serviço. Na próxima tela, informe a Pessoa e

em Equipamentos, clique em Adicionar. Em seguida, adicione para qual equipamento e

Identificador

foi prestado o serviço, de acordo com a atividade da empresa pode ser um determinado veículo, manutenções em prédios, e assim por diante.

Fica a Dica: essa tabela se encontra no Configurador Bimer » Faturamento » Equipamentos, e dentro dela se insere o Identificador (funciona como um dado que especifica o equipamento, como nesse exemplo informei a placa do veículo). Na aba Informações Complementares, informe os dados conforme a configuração presente no Configurador do PDV em Ferramentas » Opções » Documento Auxiliar de Venda » Ramo de Atividade, podendo inserir alguma Situação Encontrada no Equipamento (informação para controle interno da empresa sobre alguma observação).

Em seguida, adicione os itens usados para realizar o serviço e o próprio serviço que foi prestado. Na aba Dados, informe o item, Complemento, Preço, Quantidade, valores de acréscimo ou desconto. Na aba Repasse, veja a pessoa de comissionamento, sendo possível alterar a alíquota de comissão ao clicar no símbolo de Cadeado ao lado da Comissão no Faturamento (quando o documento de venda for corretamente gerado/autorizado) ou Duplicata (quando o título gerado pela venda for baixado). Na aba Equipamentos podemos adicionar o cadastro por item. Caso seja um único equipamento, não é preciso preencher essa aba.

Se for necessário remover algum produto ou serviço, clique em Desvincular ou Desvincular todos.

Na tela de inserção do DAV-OS, os itens são adicionados: Passando para a aba Negociação, insira as parcelas de forma manual clicando em Adicionar ou escolha uma tabela de Prazo cadastrada no Financeiro. Ainda podemos marcar a opção Utilizar DAV para troca, para disponibilizar o documento para este fim no PDV Alterdata:

Na aba Outros você informa um acréscimo ou desconto no total do documento, uma Unidade de negócio e Indicador de presença, se necessário. Em Repasses, pode-se inserir ou remover algum representante ou funcionário para comissão. Na aba Mensagens, pode-se informar, na Observação do DAV, um dado para controle interno apenas para uso no módulo FatDAV. Ou podemos inserir uma Observação do documento a fim de ser resgatada em outros módulos. Após isso, podemos Imprimir clicando no botão correspondente. Esse processo já salva o DAV: Ou clique em Gravar para salvar sem imprimir o documento. Fique Ligado! Os recursos, status na tela principal do módulo e disponibilidade para o PDV, seguem o mesmo padrão para o DAV comum, já apresentado neste material.

DAV-OS a partir de Ordem de Serviço Através do módulo Ordem de Serviço, podemos faturar o documento gerando um DAV-OS (Documento Auxiliar de Venda da Ordem de Serviço) que também será integrado com o PDV Alterdata. O DAV-OS pode ser gerado com os produtos e serviços da Ordem de Serviço, ou somente com os produtos e uma NFS-e no módulo Faturamento para os serviços. Para configurar a rotina, acesse o módulo Configurador Bimer » Faturamento » Opções » Na aba Ordem de serviço » Complementar, marque a opção Habilita o faturamento das ordens de serviço e logo abaixo, poderemos marcar PDV para somente gerar DAV-OS a partir da ordem de serviço, ou Ambos para gerar DAV-OS ou Nota fiscal no módulo Faturamento.

Ao vincular uma Empresa no quadro Ao faturar para PDV, gerar o DAV dos produtos e a nota fiscal dos serviços para as empresas abaixo, somente os produtos da OS irão para o DAV-OS, e será gerado uma NFS-e no módulo Faturamento para os serviços. Acesse o módulo Ordem de Serviço e crie uma Ordem de Serviço normalmente. Com a OS cadastrada com 1 produto e 1 serviço, clique em Faturar. Dessa forma, o sistema perguntará se deseja faturar para o PDV ou Faturamento. Confirme as mensagens seguintes até conseguir gravar o documento.

Acesse o módulo FatDAV, na aba DAV-OS, clique em Copiar dados para novo DAV, selecione o documento (observando que a coluna Origem demonstra OS (Ordem de Serviço). Por fim clique em OK.

Com isso, o DAV será gerado com o produto e serviço e com status Aberto, independentemente da configuração. No restante da rotina para a alteração de status do DAV e para resgatá-lo no PDV Alterdata, não existem mudanças, são feitos os mesmos processos já vistos neste material.

Outros recursos Venda com Mostruário Mostruário é o termo dado para produtos que estão em exposição para que os clientes possam utilizar. Exemplo: tenho uma quantidade de 100 celulares no estoque principal da empresa, pego um deles em estoque e deixo disponível para que os clientes possam manusear e consultar os recursos disponíveis. Assim, se o cliente desejar comprar o celular, pego o aparelho no estoque principal e faço a venda ao cliente, mas pode ocorrer de não ter mais o produto em estoque. Para não perder a venda, posso oferecer ao cliente o item do mostruário, concedendo um desconto, se for o caso. Para realizar uma venda usando mostruário, além da configuração presente em Ferramentas » Opções » Documento Auxiliar de Venda » Venda Mostruário, no momento da inserção do item no DAV marque Produto de Mostruário.

Dessa forma, na coluna M na aba Itens, o produto será apresentado com um quadrado amarelo.

Venda com Estoque Distribuído O estoque distribuído é quando utilizo o estoque de outra empresa para dar saída no item da venda, podendo fazer a venda usando a empresa filial e o estoque sairia da matriz. Caso a empresa esteja configurada com essa rotina, na tela de Itens haverá o botão Editar o estoque distribuído. Na tela seguinte, clique duas vezes na empresa de estoque e informe a quantidade que será usada de cada uma para realizar a venda: Caso possua dúvidas, na área do Faturamento no portal da UCA há o manual de Estoque Distribuído.

Utilizar Carta de crédito A carta de crédito é um vale que o cliente possui junto a empresa de venda que pode ser usado no momento da negociação, cobrindo todo o valor a ser pago ou parte dele. Caso haja carta de crédito disponível no momento da criação do DAV, podemos selecioná-la clicando no botão amarelo ao lado do campo Vl. Carta de crédito, serão abertos os títulos A pagar disponíveis (que sejam de carta de crédito), clique duas vezes no título desejado e depois confirme.

Em seguida, notamos que o campo Vl. Carta de crédito é alimentado com o total do título selecionado e em Parcelas o valor que será usado na negociação:
