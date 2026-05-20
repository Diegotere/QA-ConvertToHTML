# Integração Bimer x FourKeep — Configurações — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Funcionamento da](#funcionamento-da)
- [Integração](#integracao)
- [Requisitos mínimos](#requisitos-minimos)
- [Ativação IIS e Bimer](#ativacao-iis-e-bimer)
- [Connect](#connect)
- [Módulo Integrador Bimer x](#modulo-integrador-bimer-x)
- [Four Keep](#four-keep)
- [Instalação Integrador Bimer x Four Keep](#instalacao-integrador-bimer-x-four-keep)
- [Cadastro de usuários](#cadastro-de-usuarios)
- [Configurações no Integrador](#configuracoes-no-integrador)
  - [Empresa](#empresa)
  - [Opções / Geral](#opcoes-geral)
  - [Opções / Produto](#opcoes-produto)
  - [Opções / Pessoa](#opcoes-pessoa)
  - [Opções / Preço](#opcoes-preco)
  - [Opções / Prazo](#opcoes-prazo)
  - [Opções / Forma de Pagamento](#opcoes-forma-de-pagamento)
  - [Opções / Tipo de contato](#opcoes-tipo-de-contato)
  - [Opções / Integração](#opcoes-integracao)
  - [Opções / Operação](#opcoes-operacao)
  - [Opções / Flex](#opcoes-flex)
  - [Opções / Acesso](#opcoes-acesso)
  - [Agendamento](#agendamento)
  - [Usuários](#usuarios)
  - [Logs](#logs)
  - [Ajuda](#ajuda)
  - [Alinhamento de Bases](#alinhamento-de-bases)
  - [Serviço Integrador](#servico-integrador)

---


## Introdução

A ferramenta Four Keep tem como principal objetivo a criação de pedidos de vendas com apenas alguns toques na tela, por meio de dispositivos móveis com o sistema operacional Android. Suas principais características são: mobilidade, praticidade e modernidade. Neste material falaremos sobre a instalação e configurações. Não deixe de conferir o manual “Integração Bimer x FourKeep – Rotinas”.


## Funcionamento da


## Integração

• Sistema de Retaguarda com o módulo Integrador Bimer x FourKeep – Por meio do módulo integrador serão exportados os dados da base de retaguarda via webservice para a base de dados da Alterdata. Os dados exportados são: as empresas que forem configuradas para trabalhar com força de vendas, tipos de contatos, clientes, tabela de produtos (todos ou somente os produtos que possuírem determinadas características), prazos e as tabelas de preço informadas no próprio integrador. ◦ O integrador é executado como um serviço do Windows chamado BimerIntegradorFourKeep e ainda possui o modo de autorrecuperação para que, caso seja finalizado, ele consiga reiniciar de forma automática; ◦ Na tabela Configuracao na base de dados Bimer, após realizar a integração pela primeira vez será criada uma seção chamada FourKeep.Integracao, esta seção armazena as configurações do Integrador Bimer X FourKeep; ◦ Caso ocorra algum problema no integrador, serão gerados logs de eventos do Windows com o tamanho máximo de 10MB. Ultrapassando esse tamanho, as informações mais antigas serão sobrescritas; ◦ Foi criado uma nova tabela chamada PedidoDeVendaIntegracao na qual será gravado todo pedido que for importado. Esta tabela possui o campo StConfirmadoPeloWebService que informa o status de confirmação do pedido. Este status de confirmação informa se já foi enviada a resposta para os dispositivos móveis, se aquele pedido foi recebido ou não, e qual será o número deste pedido na base de dados da retaguarda; ◦ Caso ocorra algum problema na integração e o integrador não consiga se comunicar com o webservice, será enviado um spy com o log de erro para o e- mail do desenvolvimento da Alterdata, para analisar o que ocorreu. • Webservice Alterdata – Será responsável por realizar as entregas dos dados nas rotinas de exportação e importação. Na rotina de exportação, o módulo do integrador pegará os dados da base da retaguarda e enviará para o webservice, para que ele valide as informações, ou seja, verifique se os dados estão corretos e, em seguida, os entregam para a base de dados da Alterdata. ◦ Na rotina de importação, o processo será inverso. Os dados serão enviados da base de dados da Alterdata para o webservice. Ele conferirá os dados e os entregará ao integrador que alimentará a base de dados da retaguarda. • Banco de Dados Alterdata — O banco de dados disponibilizado pela Alterdata será único, ou seja, todos os clientes que adquirirem essa ferramenta alimentarão a base da Alterdata com seus dados da base de retaguarda. O sistema gerenciador da base de dados será o PostgreSQL, e a tecnologia utilizada será Schema, responsável por realizar as sub-bases dentro da base de dados. Dessa forma, na base de dados da Alterdata existirão várias outras sub- bases separando os dados de cada cliente. • Aplicativo Mobile Four Keep –É responsável por realizar os pedidos de vendas de forma rápida e otimizada. Inicialmente será realizada uma sincronização, para que o aplicativo receba os dados da base de dados da Alterdata via webservice. ◦ Após realizar a criação dos pedidos de vendas, será necessário realizar uma nova sincronização para que os dados gerados no aplicativo sejam enviados novamente à base de dados Alterdata via webservice. Dessa forma, o integrador receberá os dados da base de dados da Alterdata, via webservice e alimentará a base de retaguarda.


## Requisitos mínimos

Sistemas Operacionais: Android (versão 5.0 Lollipop ou superior) ou iOS (versão 12.0 ou superior). •Framework: Microsoft .NET Framework 4.8. •Integração Bimer: Compatível com versões iguais ou superiores a 7.04.01.00. •Instalação: O aplicativo Four Keep deve ser baixado exclusivamente pelas lojas oficiais: Google Play Store (Android) ou App Store (iOS). •Hardware: Dispositivo móvel com tela de 4 polegadas ou superior. •Bimer Connect.


## Ativação IIS e Bimer


## Connect

A partir da versão 11.02.03.19 do integrador, ele passa a contar com o Bimer Connect. Este será responsável para levar informações de cálculos de impostos para o integrador, de forma que os tributos sejam calculados corretamente na importação do pedido na retaguarda. Isso já inclui as informações de IBS/CBS. Como o Bimer Connect é webservice, é necessário que o IIS esteja ativo. Caso já exista devido a outras integrações, não há procedimentos a serem realizados. Mas caso o cliente não trabalhe com outras integrações, é necessário ativar o IIS. Clique aqui para saber o passo a passo da ativação. Observação importante: caso o cliente não tenha o Bimer Connect instalado, será necessário realizar a instalação. Para isso, você poderá rodar o instalador do BimerUP ou BimerAPI. Como o objetivo é que todos os clientes tenham o BimerUP, dê preferência para este.


## Módulo Integrador Bimer x


## Four Keep

O módulo Integrador Bimer x Four Keep é configurado na retaguarda, ou seja, na empresa do cliente, para que haja a comunicação do Bimer com o Four Keep.


## Instalação Integrador Bimer x Four Keep

Se você é aqui da Matriz pegue o instalador em M:/BIMER/Four Keep/Integrador Bimer x Four Keep. Se você não está na Matriz, não fique triste, é só entrar no suporte de Canais e solicitar o instalador. Para realizar a instalação do Integrador Bimer x Four Keep execute o programa BimerIntegradorFourKeep.exe. Escolha o idioma que deseja e clique em Ok. Na próxima tela basta apenas clicar em Avançar. Serão exibidos os requisitos mínimos para o funcionamento do integrador. Caso tenha todos os requisitos solicitados, clique em Avançar. Lembrando que a versão mínima do Bimer pode ser alterada de acordo com a versão do integrador: Aceite os termos de licença e clique em Avançar. Após clique em Instalar. Ao finalizar a instalação, vá na área de trabalho e execute o atalhoIntegrador Bimer x Four Keep. Em seguida, faça o login normalmente. Observação: Por questões de segurança, não poderá utilizar o usuário SUPERVISOR no integrador do 4Keep. Dúvida! Qual usuário vou utilizar na tela de login? Vem comigo ao próximo tópico!


## Cadastro de usuários

Será preciso dar permissão aos seguintes módulos: Integrador Bimer Mobile (para que o usuário tenha acesso ao módulo Integrador) e Four Keep (para que o usuário tenha acesso ao aplicativo no seu dispositivo móvel). Você pode cadastrar novos usuários ou utilizar usuários existentes. Observação:caso você não consiga localizar os módulos, execute o Atualizador de Acessos.


## Configurações no Integrador

Após a instalação é criado o arquivo BimerIntegradorFourKeep.Apresentacao.exe em C:/Program Files (x86)/Alterdata/ERP/Integrador Bimer x Four Keep/Apresentacao, basta executá-lo para iniciar as configurações. É possível executá-lo também pelo atalho criado na área de trabalho.


### Empresa

Na aba de Empresa, clique no ícone do +,cadastre as empresas e setor que utilizarão o Four Keep (caso trabalhe com setores; senão informe apenas a empresa): Marque Utilizar estoque de outra empresa caso a venda seja realizada a partir de uma empresa, mas com o estoque da outra. Exemplo: quero registrar a venda na Filial, mas o estoque vem da Matriz. Assim, informe a empresa e setor de estoque nos quais o sistema enxergará as informações de quantidade disponível, para demonstrar ao vendedor no momento de incluir o item no pedido. A empresa informada neste campo será demonstrada na retaguarda, dentro do pedido de vendas, campo Empresa do Estoque. No integrador é preciso realizar as configurações básicas para que o serviço de integração dos dados funcione de forma correta.


### Opções / Geral

Serão informadas as seguintes configurações: • Endereço de Integração: Informe o endereço do webservice, que será específico para cada cliente. Por meio do endereço de integração é possível realizar a rotina de exportação e importação dos dados para trabalhar com o Four Keep. Ao informar o endereço, o integrador se comunicará com o webservice; • Chave de Acesso: Digite a chave de acesso, que é pessoal e será gerada no momento da criação do cliente na base de integração. Dessa forma, deve-se verificar essa chave com o setor de Desenvolvimento, que é o responsável por gerar esse código. Criação de URL e base de integração para treinamento Por questões de controle e manutenção, não é possível criar um link e chave de acesso para cada colaborador, para que ele possa realizar testes e estudos. Caso seja necessário, será criada uma URL, código de acesso e base de dados para cada filial. E todos os colaboradores da filial deverão utilizar as mesmas informações. Para testes de integração, também não é permitido que sejam utilizadas bases de dados diferentes do Bimer, como base de retaguarda. Cada filial deverá possuir uma base única para os testes. Colaboradores de Filiais – Para a solicitar a liberação de uma URL e código de acesso, se a filial ainda não possuir, deverá ser aberto um atendimento via CRM, para a pessoa código 900000, com o tipo de atendimento 29 – Outros atendimentos, e encaminhar para o usuário DSNBIMER como usuário de próximo contato. Colaboradores de Representações – Para a solicitar a liberação de uma URL e código de acesso, se a Representação ainda não possuir, deverá manter contato com o setor comercial. • Endereço do Bimer Connect: a partir da versão 11.02.03.19 do integrador, ele passa a trabalhar com o Bimer Connect que já é utilizado em outras rotinas como BimerUP, por exemplo. A utilização deste recurso se dá pela necessidade de recuperar dados de cálculo de impostos do Bimer para que os tributos sejam automaticamente calculados na importação do pedido na retaguarda. Ele precisa estar instalado em alguma máquina da rede (podendo ser servidor ou não) e será automaticamente recuperado nesta tela. Basta que ele tenha sido instalado direcionado para o mesmo banco de dados que foi informado no momento de fazer login no integrador do Four Keep. • Campo Valor mínimo para a criação de pedidos – Ao preencher este campo, não será possível criar um pedido com o valor inferior ao definido. • Campo Tipo de frete para importaçãode pedidos - Assim como no módulo Pedido de vendas, no Integrador Bimer X Four Keep será necessário informar o tipo de frete utilizado nas vendas. • Opção “Bloquear a venda se o valor ultrapassar o limite de crédito disponível do cliente”: Ao selecioná-la o sistema verificará qual o limite de crédito disponível do cliente, dessa maneira, se o total do pedido de venda for superior ao limite ocorrerá o bloqueio dessa venda. ◦ Para configurar o valor do limite de crédito para cada cliente acesse o Pessoa / Clientes / Crediário e preencha o campoLimite de crédito geral. O limite de crédito disponível do cliente é calculado a partir dos títulos que estão em aberto para ele. Se as vendas forem à vista (dinheiro ou cartão), não serão bloqueadas. • Permitir alteração do valor unitário: Se a opção for Marcada será possível editar o valor unitário dos itens no aplicativo. No entanto, se ela for desmarcadao valor unitário dos itens no aplicativo é bloqueado para alteração. • Permitir alteração do acréscimo: Se a opção estiver marcada, será possível informar um valor de acréscimo nos itens. Se não, o campo ficará desabilitado. • Bloquear a importação de pedidos que possuam prazo sem vínculo com a forma de pagamento: Com essa marcação, a importação dos pedidos para a retaguarda não será realizada nos casos nos quais o prazo usado não possua vínculo com a forma de pagamento (Configurador / Financeiro / Prazo / Configurações das parcelas). ◦ Ex.: No aplicativo, para efetivar a venda utilizei o prazo “Pagamento em 2x no Boleto” com a forma de pagamento “Boleto Bancário Bradesco”. Nesse caso, o pedido de vendas somente seria importado se a forma de pagamento estiver vinculada no cadastro do prazo, dentro do Configurador. Do contrário, a seguinte mensagem será apresentada no aplicativo:


### Opções / Produto

É possível definir as características dos produtos que serão exportados. Caso não seja informada nenhuma característica nesse campo, todos os produtos serão exportados. Caso informe alguma característica, serão exportados somente os produtos que estiverem com a característica vinculada em seu cadastro. É necessário que o cálculo de ICMS vinculado no item possua a informação de origem e destino de acordo com o cliente da venda, do contrário não é possível sincronizar o pedido. Observação: As informações de embalagem de produto serão exportadas pelo webservice apenas se no Configurador / Faturamento / Opções / Venda / Padrões, a opção“Trabalhar com informação da quantidade por embalagem” estiver marcada e o produto esteja configurado para trabalhar com embalagem.


### Opções / Pessoa

Nesta configuração é possível definir as características dos clientes (pessoa) que serão exportados. Ao informar uma característica, serão exportados somente os clientes ativos que estiverem com a característica vinculada no seu cadastro. Caso não seja informada nenhumacaracterística nesta configuração,todos os clientes ativos serão exportados. • Opção “Característica que será vinculada aos clientes cadastrados no Four Keep”: Neste campo pode-se informar uma característica de pessoa que será vinculada nos novos clientes cadastrados diretamente no aplicativo Four Keep. Isso permite que no módulo BI Pessoa, o gestor realize filtros por essa característica, para consultar a carteira de novos clientes obtidos por meio das vendas com Four Keep. • Opção“Exportar informações de fornecedores e seus respectivos vínculos com produtos”:Se for selecionada, o integrador exporta o identificador, código e nome dos fornecedores para o Four Keep, assim como o vínculo que os mesmos possuem com os produtos. Se desmarcada, essas informações não são exportadas. • Opção “Os clientes recém-cadastrados no Four Keep irão por padrão gerar comissão”: Marcando esta opção, na rotina de importação ao cadastrar um novo cliente, o mesmo terá a opção“O representante terá comissão” marcada dentro do móduloPessoa / Clientes / Pessoa relacionada / Representante. Logo abaixo, poderá preencher qual a alíquota de comissão padrão, esta será atribuída no pedido de vendas à pessoa que consta no cadastro do usuário que criou o pedido (Usuário / Usuários / Pessoa Correspondente):


### Opções / Preço

Nessa aba informe todas as tabelas de preços que serão utilizadas no aplicativo mobile. É obrigatório informar pelo menos uma. Isso quer dizer que se for utilizar 10 tabelas diferentes cada uma deve ser informada nesta aba. • Validade: No momento da inserção da tabela de preço pode-se definir uma data de validade. Sendo assim, quando essa data for alcançada, não será possível utilizar mais esse preço para realizar vendas, pois ele simplesmente não fica mais disponível para utilização. • Comissão Independente: Pode-se inserir percentuais de comissão de acordo com o preço usado na venda. Exemplo: A venda a vista no dinheiro gera uma comissão de 5%; já a venda a prazo em 5 vezes no cartão gera uma comissão de 3%, esta é diminuída, pois a empresa demora mais a receber e tem que cobrir os gastos da venda no cartão como a taxa de convênio. Essa configuração tem prioridade sobre a comissão da aba Pessoa do Integrador. • Tabela padrão: Marque esta opção para indicar que a tabela de preço em questão deverá ser informada automaticamente nas configurações do aplicativo móvel; • Permitir alterar tabela de preço: possibilita a alteração da tabela de preço nas configurações do aplicativo e também nos itens do pedido.


### Opções / Prazo

Nessa aba informe os prazos que serão utilizados nas vendas pelo aplicativo Four Keep.


### Opções / Forma de Pagamento

Informe quais formas de pagamento irão para o Four Keep. Se liga! Quando não for informada nenhuma tabela de prazo ou forma de pagamento, o sistema realizará a exportação de todos os cadastros presentes na retaguarda.


### Opções / Tipo de contato

Esta configuração tem por objetivo informar quais tipos de contatos serão importados do cliente cadastrado no Mobile Four Keep para a base do ERP. Dessa maneira, ao preencher esses campos no Four Keep e realizar a integração, serão verificados pelo sistema os tipos de contatos definidos para cada campo no Integrador Bimer X Four Keep. Assim, o módulo Pessoa receberá essa informação e preencherá os campos da aba Endereço / Contatos os campos de Telefone, Celular e E-mail do cadastro do cliente em questão. Ao cadastrar um cliente no aplicativo Four Keep são habilitados os campos de Telefone, Celular e E-mail, conforme abaixo: Desse modo, são verificados os tipos de contatos definidos em cada campo no módulo Integrador Bimer X Four Keep, e no momento que o cliente for importado, o módulo Pessoa preencherá da seguinte maneira a aba Endereço / Contatos:


### Opções / Integração

Quadro “Geral” - O intervalo informado nesse campo será referente a rotina de Exportação de dados da base de retaguarda para a base de dados da Alterdata. O valor escolhido dependerá do fluxo de cada empresa. É importante ressaltar que nessa rotina serão exportados todos os dados. Observação: A rotina de importação ocorre a cada 10 minutos automaticamente. Quadro“Dispositivos” - O intervalo de tempo configurado neste campo obriga os dispositivos a realizarem uma sincronização total de todos os dados de acordo com um tempo determinado. Quadro “Estoque” opção “Trabalhar com integração do estoque” - Esta opção define se o integrador realizará a exportação da quantidade disponível de cada produto (a qual está presente na base ERP) para o Four Keep; caso esta opção não esteja marcada, no mobile Four Keep não será apresentada/atualizada a quantidade disponível de cada produto. Marcando a opção, habilitam-se abaixo os campos de tempo para que seja estipulado um período para a Integração. Quadro “Estoque” opção “Exportar apenas produtos disponíveis em estoque” - O sistema exportará para o Four Keep somente produtos com a quantidade em estoque disponível superior a zero. Quadro “Estoque” opção “Intervalo de integração de estoque”: Este campo é habilitado ao marcar a opção “Trabalha com integração do estoque” e tem como objetivo fazer com que os dispositivos realizem uma sincronização total da quantidade disponível em estoque de cada produto de acordo com um tempo determinado. Quadro “Financeiro” opção “Exportar títulos a receber em aberto” - Com esta configuração marcada, o sistema exportará para a base de dados de integração, todos os títulos que não tiveram baixa total e que não foram excluídos. Se a opção for desmarcada, no Four Keep não serão apresentados os títulos a receber em aberto do cliente. Para que os valores dos títulos fiquem atualizados com o valor real da retaguarda (incluindo juros e multas), é recomendável configurar a tarefa GEAtualizaAReceberValoresAtualizados pelo módulo Gerente Eletrônico. Observação: Serão somente exportados os títulos das pessoas ativas.


### Opções / Operação

• Operação padrão de pedidos de venda: A operação informada nesse campo será utilizada apenas no retorno do pedido de venda gerado pelo Mobile Four Keep para a base de retaguarda. A operação deste campo não será usada caso o cliente possua uma operação padrão de venda vinculada no módulo Pessoa / Clientes / Aba Cadastros. As demais operações não são obrigatórias, devem ser informadas somente se o cliente for utilizar a rotina / recurso da operação. Exemplo: Se for realizar orçamentos pelo Four Keep, informe a operação no campo correspondente, ao criar o pedido no aplicativo o usuário selecionará o tipo do documento que criará: Operação por empresa A partir da versão 11.02.03.19 do integrador, é possível vincular as operações por empresa. Nesse caso, não é necessário informar as operações na aba “Operações Padrão”.


### Opções / Flex

• Habilitar Flex: O “Saldo Flex” são acréscimos concedidos nos pedidos que poderão ser utilizados como desconto em outros pedidos. Para mais detalhes veja neste material o tópico Informações Extras – Aba Pedidos > Saldo Flex. • Data inicial para o cálculo dos valores de flex: Insira a partir de qual data o sistema calculará o saldo para os vendedores. • Quadro “Prazos que serão desconsiderados do flex (apenas os valores de desconto)”:Usado para realizar exceções dos prazos que não podem ser considerados no cálculo do saldo flex, valendo somente para descontos.


### Opções / Acesso

Informe umusuário e senha configurados na base da retaguarda (Bimer) para conexão de acesso ao serviço de integração, ou seja, com o login informado neste quadro o integrador realizará a conexão com o ERP para carga de dados. Se liga! Após gravar os dados no Integrador, o usuário, senha e os dados de conexão da abertura do sistema ficam presente emC:\Program Files (x86)\Alterdata\ERP\Integrador Bimer x Four Keep\Servico,no arquivo appsettings.json. Ao editar o arquivo note os elementos: • Data Source– Nome do servidor e Instância; • Initial Catalog– Nome da base de dados; • User ID e Password– Usuário e senha informados na aba Acesso.


### Agendamento

São exibidos os status de como encontra-se o serviço em um determinado momento. O agendamento poderá estar em execução, parado ou então reiniciando, e pode-se executar qualquer um dos processos manualmente. Ao clicar emReiniciarpor exemplo, neste momento os novos dados disponíveis na retaguarda serão enviados para o webservice.Na primeira utilização do integrador, clique em Iniciar para que os dados do Bimer sejam enviados para a base do Four Keep, e esta seja alimentada.


### Usuários

Defina os usuários (vendedores) que poderão utilizar o aplicativo. Informe a Senha e Confirme sendo que ela será usada exclusivamente logar no aplicativo.


### Logs

Nesta tela é possível acompanhar os logs de importação e exportação de dados.


### Ajuda

Ao clicar nessa opção o usuário é direcionado para site ajuda.alterdata.com.br, para que o mesmo acompanhe as novidades das versões e tenha acesso ao manual do Integrador Bimer x Four Keep.


### Alinhamento de Bases

Se você conhecesse outras integrações do Bimer, provavelmente já ouviu falar em alinhamento de bases,certo? Se ainda não conhece, o alinhamento tem como objetivo igualar os dados das tabelas do Bimer com as tabelas de integração do Four Keep. Com este recurso, é possível garantir que os mesmos dados que estão na base de integração estejam também na base de retaguarda. Dúvida! Onde fica a função de alinhamento de bases? A partir da versão 4.0.2 do integrador, essa opção não está mais disponível para o usuário. Outra dúvida! Então em qual momento será feito o alinhamento de bases? Será feito automaticamente quando um registro for exportado do Integrador para o webservice, e este já existir lá, ajustando somente este registro. Isso quer dizer que esse alinhamento automático tem como objetivo melhorar a performance da integração, uma vez que o alinhamento completo demorava bastante, ainda mais se a base fosse muito grande. Para você entender melhor como funciona esse alinhamento, saiba que a base de dados do Bimer possui o schema Fourkeep, e para cada elemento que será integrado há dois tipos de tabelas: • Tabela de dados: Todos os dados daquele elemento ficam armazenados nessa tabela (antes da exportação para o Four Keep). As tabelas de dados possuem em seu nome o prefixo Fourkeep. Exemplo: Fourkeep.Produto. • Tabela de vínculo: Após a exportação, essa tabela será preenchida com o vínculo do elemento entre o Bimer e o Four Keep. As tabelas de vínculo possuem em sua descrição o prefixoFourkeep.Integracao.Exemplo: Fourkeep.Integração_Produto. Para ficar mais claro: O produto Smartphone A2 foi ajustado no Bimer e preciso atualizar no Four Keep. No primeiro momento, a tabela Fourkeep.Produto guarda os dados do produto ajustado. Após a exportação, o alinhamento de bases será feito e o vínculo apenas do registro do item será recriado, alimentando a tabela Fourkeep.Integracao_Produto.


### Serviço Integrador

O módulo integrador funcionará como um serviço do Windows. Para localizá-lo, acesse Iniciar / Painel de Controle / Ferramentas Administrativas / Serviços ou Iniciar / Executar / Services.msc, o nome do serviço será BimerIntegradorFourKeep. Este serviço por padrão terá o tipo de inicialização automático, ou seja, caso ocorra algum problema no servidor e este seja reiniciado, o serviço se inicializará de forma automática, respeitando o padrão do agendamento. Sendo assim, a interface do módulo integrador mobile será apenas um gerenciador das configurações.
