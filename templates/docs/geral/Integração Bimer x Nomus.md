# Integração Bimer x Nomus — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é o Nomus PCP?](#o-que-e-o-nomus-pcp)
- [Objetivo da Integração Bimer ERP x](#objetivo-da-integracao-bimer-erp-x)
- [Nomus PCP](#nomus-pcp)
- [Funcionamento](#funcionamento)
- [Instalação &](#instalacao)
- [configuração](#configuracao)
- [Instalação do webservice](#instalacao-do-webservice)
- [Configuração Web.Config](#configuracao-webconfig)
- [Instalação de Recursos do webservice](#instalacao-de-recursos-do-webservice)
  - [Instalando o Gerenciador de Serviços de](#instalando-o-gerenciador-de-servicos-de)
  - [Informações de Internet (IIS)](#informacoes-de-internet-iis)
  - [Instalando o .NetFramework e ASP.net](#instalando-o-netframework-e-aspnet)
- [Rotina de](#rotina-de)
- [integração](#integracao)
- [Configurações do Bimer ERP dentro do](#configuracoes-do-bimer-erp-dentro-do)
- [Nomus PCP](#nomus-pcp)
- [Módulo Integrador Diretiva Cadastral](#modulo-integrador-diretiva-cadastral)
- [Integrador ERP x Nomus](#integrador-erp-x-nomus)
- [Sincronizar dados (Integrador Diretiva](#sincronizar-dados-integrador-diretiva)
- [Cadastral)](#cadastral)
- [Tarefa de exportação de dados (Falhas e](#tarefa-de-exportacao-de-dados-falhas-e)
- [envio de custo)](#envio-de-custo)
- [TCPMon](#tcpmon)
- [Nomus x Bimer](#nomus-x-bimer)
- [Bimer x Nomus](#bimer-x-nomus)

---


## Introdução


## O que é o Nomus PCP?

O Nomus PCP, é um software para planejamento e controle da produção (PCP) exclusivo para indústrias, ou seja, é um sistema onde se tem o controle de todas as etapas da produção de um produto em uma indústria.


## Objetivo da Integração Bimer ERP x


## Nomus PCP

O objetivo desta integração é complementar o Bimer ERP, para torná-lo mais eficiente para clientes do ramo industrial. Haja vista que estes clientes necessitam de um controle mais detalhado sobre sua produção, o sistema de PCP permite que este controle seja feito.


## Funcionamento

A integração de dados entre o Bimer ERP e o Nomus PCP será feita através de webservices. Na integração, serão exportados para o PCP os dados existentes no Bimer necessários para o seu funcionamento e serão importadas movimentações de estoque efetuadas pelo fechamento de ordens de produção do PCP. Para cada transação integrável foi definido o sistema doador e o sistema receptor. Dessa forma, a integração de cada transação ocorrerá sempre no mesmo sentido, simplificando a integração e reduzindo seu risco. Conforme Demonstrado na ilustração acima, são exportados para o PCP dados de: • Empresas; • Setores; • Pessoa (Cliente, Fornecedor, Prospectado, Representante, Transportadora, Terceiro, Sócio e Funcionário); • Produtos; • Consultas de saldo em estoque; • Famílias de produtos; • Grupos de produtos; • Operações; • Unidades de medida; • Pedidos de venda. O envio destes dados é de responsabilidade da Alterdata. Conforme os dados vão sendo gravados e editados no Bimer, os mesmos serão enviados para o Nomus PCP, por meio da DLL da diretiva cadastral garantindo o sincronismo entre os dois sistemas. Os produtos são integrados sem nenhum requisito específico e são de responsabilidade dos analistas Alterdata. Além disso, é importante ressaltar que os pedidos de venda são integrados assim que são incluídos no Bimer, não sendo necessária as suas liberações. Caso alguma exceção ocorra durante o envio dos dados para o PCP, os dados também não serão salvos no Bimer. São importados do PCP dados de: • Movimentação de estoque. O envio destes dados é de responsabilidade da Nomus. Na conclusão das ordens de produção serão enviados para o Bimer movimentações de entrada de produtos acabados e saídas de matéria prima. Estas movimentações poderão ser feitas por setores e por lote, de acordo com as configurações do produto no Bimer.


## Instalação &


## configuração


## Instalação do webservice

Para que a integração entre o Bimer ERP e o Nomus PCP funcione corretamente, é necessário efetuar a instalação do webservice que fará parte da comunicação entre os sistemas. Para instalar o webservice são necessário que já tenha instalado na máquina: • Gerenciador de Serviços de Informações de Internet (IIS); • .NetFrameWork 4.0; • ASP.net. Dica!Caso algum dos recursos não estejam instalados na máquina, verifique o tópico“Instalação de Recursos do webservice” Para começar a configurar o Webservice, será necessário abrir o Gerenciador de Serviços de Informações de Internet (IIS), normalmente esse módulo pode ser encontrado no seguinte caminho: Painel de Controle / Ferramentas Administrativas / Gerenciador de Serviços de Informação de Internet (IIS), conforme a imagem: Se preferir, abra pelo menu executar digitando “inetmgr”. Após localizar Gerenciador de Serviços de Informação de Internet (IIS) em ferramentas administrativas, abra-o para seguir com a instalação. Para adicionar o webservice, clique com o botão direito do mouse na pasta “Sites” e selecionar a opção de “Adicionar Site”. Ao fazer esse procedimento, o sistema apresentará a seguinte janela: Nessa janela, haverá algumas informações importantes que devem ser configuradas e merecem ser destacadas. São elas: 1.Nome do Site – Esse campo é responsável pelo Nome que será apresentado no IIS; 2.Caminho físico – Nesse campo, informe em qual diretório deverá colocar os arquivos do webservice para que seja feita a integração; 3.Porta – Nesse campo, informe a porta de comunicação do webservice. Esse é um dos campos mais importantes, pois a informação que for informada neste local será necessária para configurar no PCP a porta de comunicação do webservice. O número da porta informado não pode ser utilizado novamente e não pode ter sido utilizado anteriormente, ou seja, cada webservice precisa ter o número de sua porta única. Normalmente são utilizadas as portas 8085, 8089, 8080 ou 8087 para a configuração do webservice, mas não são de uso obrigatório.


## Configuração Web.Config

Após configurar o webservice, o sistema criará o Site com o nome informado. Por enquanto, o site ainda não possui nada, pois ainda não foi colocado nenhum conteúdo em sua pasta física, que foi informado no item 2 na imagem anterior. Os arquivos que serão colocados no diretório do webservice podem ser adquiridos com o suporte Bimer, ou se você for da Matriz, acessando o diretório “M:/” (Museu). Após colocar os arquivos na pasta a mesma ficará da seguinte maneira: Dentre os arquivos que serão inseridos nesta pasta, o arquivo “Web.config” necessitará de algumas alterações, pois este arquivo é responsável por direcionar a base do Bimer que fará integração com o webservice que está sendo configurado. Para configurar o arquivo Web.config, abra-o em um programa para edição de txt, como o bloco de notas e edite o registro <connectionStrings> da seguinte forma abaixo substituindo os valores que se encontram em verde: < dataConfiguration defaultDatabase=“Alterdata” /> < connectionStrings > < add name= “Alterdata” connectionString= "Data Source= Informe o servidor; Initial Catalog= Informe o database; Persist Security Info= True; User ID= Informe o usuário; Password= Informe a senha;" providerName= “System.Data.SqlClient” /> </ connectionStrings > Após configurar o Web.config, é preciso realizar alguns ajustes nas configurações do webservice no próprio IIS. Para isso, vá na tela de IIS e clique na parte superior esquerda sobre o item “Pools de Aplicativo”. Ao selecionar pools de Aplicativo, o sistema apresentará do lado direito, Algumas configurações e o webservice criado. Clique com botão direito no webservice e o sistema apresentará as opções mostradas acima. Para efetuar a configuração do webservice, vamos em dois locais distintos: 1.Configurações Básicas – Informe a versão do .NET Framework: 2.Configurações Avançadas – Na opção “Habilitar Aplicativos de 32 bits” deverá estar como True. Isso evitará que o webservice tenha certos erros por incompatibilidade de plataforma. Após isto, o webservice já estará configurado. Para efetuar o teste, basta clicar com botão direito no webservice na parte esquerda e selecione a opção “Gerenciar Site / procurar”. Se tudo foi configurado corretamente, o sistema apresentará a seguinte janela:


## Instalação de Recursos do webservice


### Instalando o Gerenciador de Serviços de


### Informações de Internet (IIS)

Quando uma máquina não possui o Gerenciador de Serviços de Informação de Internet (IIS) instalado, é necessário efetuar sua instalação para que seja possível configurar o webservice para integração com o PCP. Para instalar o IIS, vá em Painel de controle / Programa e Recursos (Módulo para adicionar e remover programas do Windows), e clique emAtivar ou desativar recursos do Windows. Após isso, selecione a opção de “Serviços de informações da Internet” e todas as opções em sua raiz, com exceção de Servidor FTP. Clique em OK para instalar o IIS.


### Instalando o .NetFramework e ASP.net

Para fazer a instalação destes aplicativos, normalmente é possível baixar o instalador através do site da Microsoft e instalando o .NetFramework mais recente o sistema automaticamente instala o ASP.net também, porém, caso o mesmo não faça a instalação sozinho, existem outras 2 formas de fazer essa instalação: 1.Executando o comando no CMD para registrar o ASP.net. Comando: Para máquinas 32 bit: %windir%\Microsoft.NET\ Framework\v4.0.30319\aspnet_regiis.exe -i Para máquinas 64 bit: %windir%\Microsoft.NET\ Framework64\v4.0.30319\aspnet_regiis.exe -i 2.Caso o Windows não suporte o comando pelo CMD apresentará a seguinte mensagem: “Esta opção não tem suporte nesta versão do sistema operacional. Os administradores devem instalar/desinstalar o ASP.net 4.5 com IIS8 usando a caixa de diálogo ‘Ativar/Desativar Recursos do Windows’ ou a ferramenta de gerenciamento Gerenciador do Servidor ou a ferramenta de linha de comando dism.exe.” Dessa forma, será necessário instalar o ASP.net da mesma forma que foi feita a instalação do IIS. Na tela de adicionar recursos do Windows, vá na opção “.NET Framework 4.8 Advanced Services”, marque a opção ASP.net 4.8 e clique em Ok para instalar a ferramenta.


## Rotina de


## integração


## Configurações do Bimer ERP dentro do


## Nomus PCP

Para que a integração funcione corretamente, também será necessário realizar algumas configurações dentro do Nomus PCP, essa configuração é responsabilidade da Nomus, mas serão apresentadas as informações de como efetuar essa verificação, pois poderá ser útil para conferir se o PCP está apontando a integração para o webservice corretamente. Para verificar essa configuração, deverá entrar no PCP e ir em: Configurador Geral /Nova Configuração. Após poderá verificar o campo “URL de acesso ao webservice ERP”, essa opção é onde é informando o webservice do Bimer dentro do PCP para que o mesmo saiba qual o webservice que ele precisa utilizar na comunicação da integração.


## Módulo Integrador Diretiva Cadastral

Este módulo realiza a sincronização de dados do Bimer com o PCP Nomus, além de permitir uma visualização dos logs de integração entre os sistemas. Normalmente esse módulo é utilizado apenas para efetuar a integração inicial com o PCP, pois na maioria dos clientes, os mesmos já possuíam o Bimer anteriormente e começaram a trabalhar com o PCP depois. Devido a isso, a primeira integraçãoé feita manualmente, para que o Bimer envie dados como: Cliente, Empresa, Setor, Produtos, unidade de medida e Etc.. Estes dados são enviados para alimentar a base do PCP, e posteriormente, a integração será realizada de maneira automática. Esse módulo também poderá ser utilizado para forçar algumas integrações que podem não ter sido feitas por algum motivo, como instabilidade na conexão do cliente ou qualquer problema de comunicação entre os sistemas. A utilização do Integrador Diretiva Cadastral se resume a duas opções: • Sincronizar Dados – Neste local será possível “forçar” o envio de uma informação que não tenha sido integrada, ou até mesmo, em último caso, realizar um alinhamento de bases. • Histórico – É por meio do histórico que o usuário consegue visualizar logs da integração.


## Integrador ERP x Nomus

O módulo IntegradorERP_Nomus existe, porém, está em desuso. Atualmente, deve ser utilizado exclusivamente durante a implantação, não devendo ser mantido no cliente. Por meio dele, é possível realizar teste dos recursos do webservice Bimer x Nomus. No ambiente do cliente, mantenha exclusivamente o Integrador Diretiva Cadastral, citado anteriormente.


## Sincronizar dados (Integrador Diretiva


## Cadastral)

Essa ferramenta serve para efetuar a integração do Bimer com o PCP, e basicamente inclui, altera e exclui registros do Bimer no PCP. Ele é utilizado para fazer inclusões de registros que por algum motivo não foram levados na integração automática do sistema para o PCP, alterar registros que foram mudados no PCP e não validaram sua alteração no Bimer, ou excluir registros que não existem mais no Bimer, mas por algum motivo ainda estão no PCP. A função utilizada para fazer a integração inicial das bases é a opção de “Alinhamento de Bases”. Ao selecioná-la o sistema tentará incluir o registro, caso não exista, tentará alterar, caso esteja diferente, caso não exista mais, excluirá.


## Tarefa de exportação de dados (Falhas e


## envio de custo)

Eventualmente, o envio de dados, como pedidos pode falhar. Para proteger isto, a tarefa GeExportaDadosNomus foi criada. Outra função desta tarefa é o envio dos custos (médio e de reposição) para o PCP Nomus. Função essa essencial, pois os custos não são enviados via dll. Para criar a tarefa, vá até o Configurador Bimer / Geral / Tarefas e clique em novo. Localize o sistema 000146 – Tarefa para exportação de dados ERP x Nomus. Em seguida, ainda no Configurador Bimer / Geral, clique em Tarefas Agendadas. Crie um novo agendamento com a tarefa criada anteriormente. Informe o nome e a periodicidade desejada. É necessário que o Gerente Eletrônico esteja ativo e o arquivo GeExportaDadosNomus.exe esteja no mesmo diretório que o GeAgente.exe. Dica!A versão 11.00.06.00 é a última a disponibilizar a DLL AltDiretivaCadastral_Nomus e a tarefa GeExportaDadosNomus durante sua instalação, porém ambas são possíveis de encontrar no museu nas versões mais atuais.


## TCPMon

O TCPMon é uma ferramenta utilizada para verificar a comunicação na Integração do Bimer com a Nomus, e, por meio dela, é possível verificar os dados de envio e retorno da informação. Caso haja algum tipo de erro ou pendência que impeça a integração, pode-se analisar por meio da ferramenta. Para ter obter a ferramenta acesse o link: http://treinar.alterdata.com.br/UCA/BIMER/tcpmon-1.1.zip


## Nomus x Bimer

Caso queira verificar os dados de envio do PCP Nomus para o Bimer, basta abrir o executar-tcpmon-1.1.bat e preencher: • Local Port:A porta em que o tcpmon vai receber conexões, sendo essa qualquer porta de rede livre no computador. Ex.: 9999 • Server Name:O IP da máquina na qual se encontra o WebService do Bimer. Pode-se buscar essa informação no PCP Nomus, na aba Configurador Geral / Nova Configuração / campo “URL de acesso ao webservice ERP”. • Server Port: Porta do WebService ERP. • SSL Server:Deve-se utilizar segurança para monitorar. Normalmente desmarcado. Após, clique em Add Monitor. No PCP Nomus, na aba Configurador Geral / Nova Configuração / campo “URL de acesso ao webservice ERP”, informe o IP da máquina onde está o tcpmon, seguido pela porta informada em “Local Port” no próprio tcpmon. Após, faça o procedimento no sistema para que gere o log. Ao final dos testes deve-se retornar para a porta correta. No TPCMon vemos uma nova aba com o número da “Local Port”:


## Bimer x Nomus

Caso queira verificar os dados de envio do site do Bimer para a Nomus, basta abrir o executar-tcpmon-1.1.bat, e preencher: • Local Port: A porta em que o tcpmon vai receber conexões, sendo essa qualquer porta de rede livre no computador. Ex.: 9999 • Server Name: O IP do site da Nomus. Pode-se verificar essa informação acessando as configurações da diretiva cadastral dentro do configurador Bimer. • Server Port: Porta do site da Nomus. Após clicar em Add Monitor. Nas configurações da diretiva cadastral no configurador Bimer, informe a URL e porta informada para a “Local Port” do TCPMon: Após, faça o procedimento no sistema para que gere o log. Ao final dos testes, retorne para a porta correta. No TPCMon basta consultar a nova aba com o número da “Local Port”. Obs.: Normalmente o tcpmon não mostra em tempo real. Os registros demoram alguns segundos (ou mais) para aparecer, mesmo que o servidor de destino já tenha recebido a solicitação. A ferramenta TCPMon pode ser utilizada para monitorar qualquer outro serviço de rede.
