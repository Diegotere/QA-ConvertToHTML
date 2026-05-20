# Integração Bimer x AFV Logical — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
  - [Modelo operacional Logical AFV](#modelo-operacional-logical-afv)
  - [Aplicativos de Integração](#aplicativos-de-integracao)
- [Exportação de Dados do Bimer](#exportacao-de-dados-do-bimer)
- [Configurações](#configuracoes)
  - [Parâmetros](#parametros)
- [Transmissão de Dados para o WebService](#transmissao-de-dados-para-o-webservice)
- [Instalação do AFV Logical](#instalacao-do-afv-logical)
  - [Pré Requisitos](#pre-requisitos)
  - [Instalação](#instalacao)
  - [Criação de Contas (Clientes) e Usuários](#criacao-de-contas-clientes-e-usuarios)
  - [Primeiro Acesso](#primeiro-acesso)
- [Recursos do AFV Logical](#recursos-do-afv-logical)
  - [Clientes](#clientes)
- [Categoria](#categoria)
  - [Incluir um Cliente](#incluir-um-cliente)
  - [Alterar Clientes](#alterar-clientes)
  - [Busca de Clientes](#busca-de-clientes)
  - [Histórico de Compras](#historico-de-compras)
  - [Histórico Financeiro](#historico-financeiro)
  - [Opinião](#opiniao)
- [Realizando um Pedido de Venda](#realizando-um-pedido-de-venda)
  - [Itens do Pedido](#itens-do-pedido)
  - [Alterar Pedido já gravado](#alterar-pedido-ja-gravado)
  - [Excluir Pedido](#excluir-pedido)
- [Promoções](#promocoes)
  - [Produtos](#produtos)
  - [Metas](#metas)
  - [Visitas](#visitas)
  - [Relatórios](#relatorios)
  - [Mensagens](#mensagens)
  - [Sincronismo](#sincronismo)
  - [Resumo dos Registros Integrados](#resumo-dos-registros-integrados)
  - [Administração](#administracao)
  - [Exclusão de Pedidos](#exclusao-de-pedidos)
- [Atualizador](#atualizador)
- [Logical Admin](#logical-admin)
- [Importação de Dados para o Bimer](#importacao-de-dados-para-o-bimer)

---


## Introdução

O Logical AFV é um sistema para a automação da força de vendas. Tem como principais objetivos aumentar a produtividade das equipes de vendas, melhorar a comunicação entre a empresa e o vendedor. Com o AFV Logical o vendedor poderá lançar pedidos, cadastrar clientes, fazer simulações de preços, transmitindo os pedidos via internet sem a necessidade de voltar ao escritório. Importante: o sistema só está homologado para sistema operacional android. O sistema AFV trabalha integrado a sistemas de Retaguarda, por exemplo, Shop e Bimer que fornecerão os dados necessários para alimentar a base do sistema Mobile. Essa integração ocorrerá via internet, uma vez que a base da retaguarda e do sistema AFV não ficam no mesmo dispositivo. A retaguarda fica responsável pela geração de arquivos no formato de “.txt” que contém informações como produtos, formas de pagamento, clientes que alimentam a base de dados do AFV. Após a geração dos arquivos é realizado o envio desses para o WebService onde são transformados em arquivos “.PDB” em seguida, importados para o AFV Logical no momento da Sincronização. Atenção: A conversão dos TXT's em PDB, ocorre no webservice. Quando o usuário do AFV sincroniza o aplicativo solicitando uma base de dados, o AFV se comunica com o WebService onde este faz a conversão dos dados.


### Modelo operacional Logical AFV

O sistema AFV trabalha integrado a sistemas ERP (Retaguarda). Estes sistemas de retaguarda fornecem os dados necessários para alimentar a base de dados do sistema Mobile. Dessa forma, é necessária uma integração de dados através da internet, uma vez que a base de retaguarda e do sistema AFV não ficam no mesmo dispositivo. O sistema ERP gera arquivos em formato TXT para alimentar a base de dados do AFV. Após a geração dos arquivos é realizado o upload desses TXT's para o WebService. No WebService, esses arquivos são transformados em arquivos PDB e são importados para o AFV Logical no momento do Sincronismo. A conversão dos TXT's em PDB, ocorre no webservice. Precisamente quando o usuário do AFV sincroniza o aplicativo solicitando uma base de dados, o AFV se comunica com o WebService de Integração e o mesmo realiza a conversão. Os registros exportados pelo sistema de Retaguarda são: Tabela de Preços, Histórico de Clientes, Promoções, Produtos e outros. O arquivo exportado pelo AFV é referente aos Pedidos.


### Aplicativos de Integração

Para realizar o envio dos arquivos TXT's para o WebService, serão disponibilizados dois aplicativos, o “pcpda.jar” e o “pdapc.jar”. Os aplicativos “pcpda.jar” e o “pdapc.jar” foram criados com o objetivo de automatizar e reduzir as possibilidades de falhas durante os processos de conversão e troca de dados entre o sistema retaguarda e o Logical AFV. Os aplicativos em questão foram criados para não possuírem interface gráfica (ou seja, não possui uma tela com função de importação e exportação), facilitando as operações automatizadas com outros sistemas. pcpda.jar → Tem a função de enviar os arquivos, referentes à base de dados de cada Representante Comercial, para o servidor Logical através de uma conexão HTTP. O sistema retaguarda é responsável pela geração da base de dados, arquivos “.txt”, de cada Representante Comercial e pela disponibilização dessas bases no diretório de envio da aplicação “pcpda.jar”. Também é de responsabilidade do sistema retaguarda ou do cliente a execução da aplicação “pcpda.jar” para o envio das bases de dados para o servidor Logical através do “ENVIAR.BAT”. pdapc.jar → Tem a função de receber todos os arquivos/pedidos, de cada Representante Comercial, disponíveis no servidor Logical através de uma conexão HTTP. O sistema retaguarda é o responsável pela importação desses arquivos/pedidos, de cada Dispositivo Móvel, através da leitura do diretório de recebimento da aplicação “pdapc.jar”. Também é de responsabilidade do sistema retaguarda ou do cliente a execução da aplicação “pdapc.jar” para o recebimento dos arquivos/pedidos através do “RECEBER.BAT”. O sistema Bimer gera o arquivo TXT e este arquivo é enviado ao WebService pelo PcPDA.jar. No WebService, o arquivo é convertido para PDB e alimenta a base do AFV no momento da Sincronização. Modelo de Recebimento de dados: Durante o sincronismo, o AFV gera arquivos TXT, que são exportados para o WebService. No momento que a sincronização é executada pelo PdaPC.jar, esses arquivos podem ser importados para o Bimer. Embora receba arquivos PDB, o AFV gera na exportação de dados, arquivos TXT. Conforme dito anteriormente, o s arquivos Jar's não possuem interface gráfica. Dessa forma, toda a execução deve ficar a critério do sistema ERP ou então, será executado através de um arquivo BAT. Modelo de Bat para envio e recebimento de dados: Os arquivos Jar's, por padrão, ficam no diretório: C:\Logical\NOMECLIENTE. Caso a execução do sincronismo ocorra através dos arquivos BAT, esses arquivos BAT deverão estar no mesmo diretório dos arquivos Jar's. Os dois aplicativos “.jar” foram desenvolvidos em JAVA e, para a execução dos mesmos, será necessário instalar o JAVA na versão 1.6.0_05 ou superior na máquina/PC de integração com o sistema retaguarda do cliente. Para confirmar se a máquina já possui o Java instalado ou identificar a versão utilize o seguinte comando no CMD: Logo após a instalação, sugerimos que seja criado o seguinte caminho de diretórios na máquina/PC de integração com o sistema retaguarda do cliente: “/Logical/<NOMEDOCLIENTE>/” → onde <NOMEDOCLIENTE> é o nome da empresa. Dentro do diretório “/Logical/<NOMEDOCLIENTE>/” deverão ser copiados os seguintes arquivos, que serão disponibilizados pela Logical, “pcpda.jar”, “pdapc.jar” e <NOMEDOCLIENTE>_config.xml. Em seguida, deverão ser criados os seguintes subdiretórios: • pcpda → Subdiretório obrigatório onde deverão ser disponibilizados os arquivos de bases de dados, de cada Dispositivo Móvel, pelo sistema retaguarda para posterior leitura e envio para o servidor Logical pelo “pcpda.jar”. • pcpda_ok → Subdiretório obrigatório onde serão movidos os arquivos de bases de dados, de cada Dispositivo Móvel, enviados para o servidor Logical pelo “pcpda.jar”. Quando os arquivos são enviados com sucesso, estes são alocados nesta pasta para que não sejam reexportados. • pdapc → Subdiretório obrigatório onde serão disponibilizados os arquivos/pedidos, de cada Dispositivo Móvel, recebidos pelo “pdapc.jar”, do servidor Logical, para posterior leitura e importação pelo sistema retaguarda do cliente. • logs → Subdiretório obrigatório onde será salvo o log diário de cada aplicação e que serão utilizados para verificação de erros pelo suporte Logical. O logs serão apagados automaticamente ao atingir 60 dias. Todos os diretórios e subdiretórios deverão ser criados com permissões suficientes, de leitura e escrita.


## Exportação de Dados do Bimer

Para realizar a exportação de dados e, por sua vez, alimentar os diretórios de integração do Bimer com o AFV Logical é necessário utilizar o ConfiguradorBimer, aba Geral do sistema.


## Configurações

Através do Configurador Geral será necessário configurar a DLL de integração e também os diretórios de saída de dados (Localizado em ConfiguradorBimer >> Geral >> Importação / Exportação de Dados). De forma geral, as DLL's com “Tablet”, “Mobile” ou “PDA” no nome poderão ser utilizadas na exportação e importação de dados, por exemplo, ALTImpERP_AFV.dll. A mesma DLL utilizada para a Exportação poderá ser utilizada para a Importação de dados. Um cliente poderá utilizar uma DLL já criada pelo DSN no início da implantação. Porém, deverá ser aberto um processo de novo recurso, para que a DLL seja replicada com o nome do cliente que vai começar a utilizar. Isso se faz necessário, pois caso seja necessária alguma alteração na DLL por solicitação do cliente, esta alteração seja realizada somente na DLL deste cliente. O diretório de Exportação será o diretório utilizado pelos arquivos JAR's (que vimos anteriormente) para exportação dos dados. Dessa forma, é importante informar o diretório correto para que a integração com WebService possa ocorrer de forma correta. Para mais informações sobre como configurar a integração por DLL, clique aqui. Entidade Externa Importante salientar a necessidade de configurar corretamente a aba “Entidade Externa”. Esta será responsável por definir para quais representantes comerciais serão exportadas as informações. Nessa tela, além do diretório de exportação (que terá prioridade sobre o informado na aba “Dados”), o usuário poderá informar os seguintes dados para exportação: • Código Usuário: Código do Usuário do AFV para login. Esse código poderá ser diferente do código de chamada do Bimer. Será um código de login no AFV. Esse código será o prefixo do arquivo TXT gerado. O código de usuário deve ser diferente para cada vendedor, pois mesmo que vindo de bases diferentes ao mandar os arquivos para o Webservice utilizando o mesmo código, uma base sobrescreverá a outra. • Senha: Senha de acesso ao AFV. • Desconto Máximo: Desconto máximo permitido no aplicativo AFV. • Dados a serem exportados: Podemos exportar todos os dados ou então, apenas os que foram alterados desde a última sincronização. Além disso, é possível exportar a região atendida e também alguma mensagem para o representante comercial (feito através das respectivas abas).


### Parâmetros

Nesta área o usuário definirá as permissões, bloqueios ou outras condições para o funcionamento do AFV, por exemplo, valor mínimo do pedido, quantidades de produto por página, obrigar a forma de pagamento, dentre outras. Exportação Após realizar a configuração da DLL de exportação, será necessário acessar o menu de exportação. Para isso, acesse oConfiguradorBimer >> Geral >> Ferramentas >> Importações / Exportações de Dados. Ao selecionar a opção de exportação por DLL, será possível selecionar a configuração desejada para a exportação dos dados. Após marcar a opção desejada, clique com Concluir. Ao confirmar, o processo será executado. Nesse momento, os diretórios selecionados para a Exportação de dados serão alimentados com os arquivos gerados. Os prefixos antes do nome de cada arquivo gerado, se referem ao código do representante comercial no AFV. Estes são configurados no campo de “Entidade Externa”. Caso este campo esteja vazio, nenhum arquivo será gerado. Os arquivos gerados, devem respeitar o layout de integração Logical. Serão separados por '|', conforme exemplo:


## Transmissão de Dados para o WebService

Após a geração dos arquivos de integração, os arquivos JAR's deverão ser executados para que os arquivos de integração sejam exportados para o WebService que serão executados manualmente através de arquivos BAT. Ao executar o arquivo JAR, os arquivos TXT serão direcionados para o WebService para aguardarem a Sincronização de dados e serem convertidos para PDB. Os arquivos JAR's sabem para onde enviar e de onde devem receber os dados através do arquivo XML (NomeCliente_Config.XML) que consta no diretório padrão da Logical. <empresa> <nome> uNchDOnbmD8inACESUsaKQ== </nome> <grupoEmpresa></grupoEmpresa> <codigo> 01 </codigo> <servidorArquivos> g2FpdMQNubxXuQQ71RrruepeAdC/AanerEftSSbRjXE2tEwc1JENxMgSQPLQ6SqXVW1z7NvYbd393A 4yy/QeeATVYTwS/Bbm </servidorArquivos> <login> HgyJY8stRfd019cee1i1MMuisw0O/XXw </login> <senha> YuylYNId2/GIoGxqLkVt2Qawntn+h1sU </senha> <pcpdaDir> PCPDA </pcpdaDir> <pdapcDir> PDAPC </pdapcDir> <pdapcOkDir> PDAPC_OK </pdapcOkDir> <nomeArquivoFechamento> fechamento </nomeArquivoFechamento> <servidorWeb> ZljZ7zUQtP9UUR0oUVJMl1g5e5kvJNAdyYWZIZsx4o5aND65IhF1gX4mDkD/MY/ mIn9SmhyKr+PDsoZWdOBRuAnHxTKUHtfG </servidorWeb> <supervisorWeb> false </supervisorWeb> <tipoConexao> 0 </tipoConexao> <conexaoSegura> false </conexaoSegura> <usaArquivoLog> false </usaArquivoLog> </empresa> A tag “ServidorWeb” grava as informações do endereço do WebService. Este não poderá ser alterado e está criptografado. Quando os arquivos TXT são exportados, estes saem da pasta “pcpda” e vão para a pasta “pcpda_ok” para que não sejam exportados novamente. A pasta PCPDA_OK também serve como uma pasta de Backup. Caso o arquivo enviado não chegue ao WebService, será possível acessar esta pasta para analisar os arquivos ou refazer o envio. Log da Execução dos Aplicativos: Como os aplicativos “pcpda.jar” e “pdapc.jar” foram criados sem uma interface gráfica para o usuário, foi definida uma tabela de códigos de retorno de execução, para informar ao sistema que executou o aplicativo “.jar” se a execução foi bem-sucedida ou não. Veja a tabela abaixo: Tipo Aplicati vos Descrição NO ERR Execução bem sucedida. pcpda.jar Não foram encontrados arquivos para serem enviados no diretório “pcpda”. pdapc.jar Não existem arquivos disponíveis no servidor para serem recebidos. pcpda.jar ERR LOCK UNDER USE Ocorre quando se tenta executar a aplicação e a mesma ainda está em uso. ERR OPEN LOG FILE 501 Não foi possível criar o arquivo de log da aplicação no diretório “logs”. ERR OPEN XML LOG FILE 502 503 Problemas ao acessar o diretório da aplicação. 504 ERR INVALID CONFIG FILE 505 600 pcpda.jar Problemas ao acessar o diretório “pcpda”. 601 pcpda.jar Problemas ao acessar o diretório “pcpda_ok”. 602 pcpda.jar Erro ao compactar os arquivos da base de dados de cada RCA no diretório “pcpda”. 603 pcpda.jar Problemas ao realizar a requisição de envio dos arquivos das bases de dados para o servidor Logical. 604 pcpda.jar Erro na aplicação web do servidor Logical. ERR UPLOAD FILES 605 pcpda.jar Problemas no recebimento dos arquivos das bases de dados pelo servidor Logical. 606 pcpda.jar Problemas ao integrar as bases de dados ao Supervisor Web Logical. 700 pdapc.jar Problemas ao acessar o diretório “pdapc”. ERR REQUEST LIST FILES 701 pdapc.jar ERR SERVER LIST FILES 702 pdapc.jar Erro na aplicação web do servidor Logical. ERR LIST FILES 703 pdapc.jar Problemas ao receber a listagem de arquivos/pedidos disponíveis para baixar do servidor Logical. 704 pdapc.jar 705 pdapc.jar Erro na aplicação web do servidor Logical. ERR DOWNLOAD FILES 706 pdapc.jar Problemas ao baixar os arquivos/pedidos do servidor Logical. 707 pdapc.jar Problemas ao realizar a requisição para mover os arquivos/pedidos baixados do servidor Logical. ERR SERVER MOVE FILES 708 pdapc.jar Erro na aplicação web do servidor Logical. ERR MOVE FILES 709 pdapc.jar Problemas ao mover os arquivos/pedidos baixados do servidor Logical. 710 pdapc.jar ERR RETURN FILE 711 pdapc.jar 712 pdapc.jar Erro no conteúdo dos arquivos/pedidos baixados. ERR CONNECT TIMEOUT 900 Tempo de espera para obtenção de conexão com o servidor expirado. ERR READ TIMEOUT 901 Tempo de espera para obtenção da resposta do servidor expirado. 902 903 ERR UNKNOWN HOST 904 Servidor não encontrado. ERR FATAL 1000 Erro inesperado. Código de Retorno pcpda.jar e pdapc.jar UPLOAD FILES NOT FOUND DOWNLOAD FILES NOT FOUND ERR MOVE UPLOADED FILES As bases de dados foram enviadas, entretanto os arquivos não foram movidos para a pasta “pcpda_ok”. pcpda.jar e pdapc.jar pcpda.jar e pdapc.jar pcpda.jar e pdapc.jar Não foi possível criar o arquivo de log de execução da aplicação no diretório de execução da aplicação. ERR APPLICATION INVALID DIRECTORY pcpda.jar e pdapc.jar ERR CONFIG FILE NOT FOUND pcpda.jar e pdapc.jar O arquivo de configuração <NOMEDOCLIENTE>_config.xml não foi encontrado no diretório da aplicação. pcpda.jar e pdapc.jar Conteúdo do arquivo de configuração <NOMEDOCLIENTE>_config.xml não corresponde ao esperado. ERR UPLOAD INVALID DIRECTORY ERR UPLOADED INVALID DIRECTORY ERR COMPACT UPLOAD FILES ERR REQUEST UPLOAD FILES ERR SERVER UPLOAD FILES ERR INTEGRATION UPLOAD FILES ERR DOWNLOAD INVALID DIRECTORY Problemas ao realizar a requisição de verificação de arquivos/pedidos disponíveis para baixar do servidor Logical. ERR REQUEST DOWNLOAD FILES Problemas ao realizar a requisição para baixar os arquivos/pedidos do servidor Logical. ERR SERVER DOWNLOAD FILES ERR REQUEST MOVE FILES ERR XML LIST FILES DOWNLOAD Erro ao salvar o arquivo “.xml” temporário com a listagem de arquivos/pedidos disponíveis para baixar. Erro ao salvar o arquivo “.zip” temporário com os arquivos/pedidos baixados. ERR CONTENT RETURN FILE pcpda.jar e pdapc.jar pcpda.jar e pdapc.jar ERR SERVER APPLICATION NOT AVAILABLE pcpda.jar e pdapc.jar Execute a aplicação novamente após um período de tempo. Caso o problema persista comunique ao Suporte Logical o código do erro com os respectivos arquivos de log. ERR REQUESTED URL NOT FOUND IN THIS SERVER pcpda.jar e pdapc.jar Verificar se o arquivo de configuração <NOMEDOCLIENTE>_config.xml presente no diretório da aplicação é o mesmo enviado pela Logical. Execute a aplicação novamente. Caso o problema persista comunique ao Suporte Logical o código do erro com os respectivos arquivos de log. pcpda.jar e pdapc.jar pcpda.jar e pdapc.jar A execução das aplicações “pcpda.jar” ou “pdapc.jar” gerará dois tipos de logs: log_pcpda.xml e log_pdapc.xml Estes logs são sempre gerados ao final de cada execução e tem como objetivo prover uma resposta mais explicativa sobre o erro ocorrido para as aplicações que executam os aplicativos “pcpda.jar” e “pdapc.jar”. Para isso foi escolhido um modelo em xml de fácil entendimento e tratamento. Exemplo da estrutura do log em xml: <log> <jarreturncode> 1 </jarreturncode> <jarmessage> Não foram encontrados arquivos para serem enviados no seguinte caminho: C:\ Logical\NOMECLIENTE\pcpda\ </jarmessage> <serverreturncode> 0 </serverreturncode> <servermessage></servermessage> <executiontime> 183 </executiontime> <dataInicio> 20160121 </dataInicio> <horaInicio> 153253 </horaInicio> <dataFim> 20160121 </dataFim> <horaFim> 153254 </horaFim> </log> Descrição dos campos: <jarreturncode> → Código de retorno de execução, indica se a execução foi ou não bem- sucedida. <jarmessage> → Mensagem de explicação/erro sobre o código de retorno de execução. <serverreturncode> → Código de retorno do servidor, indica se a execução de transações com o servidor Logical apresentou falhas. Somente se for diferente de zero. <servermessage> → Mensagem de explicação/erro sobre a transação com o servidor Logical que apresentou falha. <executiontime> → Tempo, em milissegundos, em que a aplicação ficou executando. <dataInicio> → Data de início de execução da aplicação. <horaInicio> → Hora de início de execução da aplicação. <dataFim> → Data de fim de execução da aplicação. <horaFim> → Hora de fim de execução da aplicação. Quando o sistema estiver totalmente Integrado com o Bimer-ERP, estas mensagens de log serão apresentadas em uma interface. Dessa forma, assim que finalizado o Envio ou Recebimento dos arquivos, o sistema apresentará uma tela informando se foi Bem-sucedido ou Não. Assim, o cliente não precisa acessar a pasta de LOG para checar se houve algum problema.


## Instalação do AFV Logical

Para a instalação do AFV Logical, haverá uma pessoa responsável dentro da empresa, como um TI, que realizará a instalação da aplicação em todos os dispositivos utilizados pelos representantes comerciais. Este é o padrão.


### Pré Requisitos

• Versão mínima do Android: 2.3.3; • Tela com tamanho mínimo de 3,2; • Na retaguarda a instalação do Java na versão mais recente; • A instalação é realizada via APK (Não está disponível no GooglePlay). Observação: No dispositivo móvel é necessário permitir instalar aplicativos de fontes externas (a configuração vai variar dependendo do aparelho). Atenção!Embora seja compatível com IOS e WindowsPhone, o sistema não está homologado para estes ambientes.


### Instalação

Para realizar a instalação, o usuário (Cliente) deverá acessar o MySuite (Ambiente da Logical para download de versões do AFV) e realizar o download das aplicações. O MySuite é uma área restrita, disponibilizada para cada cliente pela Logical, contendo aplicativos para download como versões atualizadas do AFV. Cada aplicação do AFV é criada especificamente para cada cliente. Serão disponibilizados 4 aplicativos com extensão “.APK”: “TotalCross.apk”, “LogicalAdmin.apk”, “Atualizador.apk” e “LogicalAFV.apk”e um arquivo com a extensão .XMLque serão enviados para o dispositivo móvel. Primeiramente cole o arquivo XML de nome “AFV_CONFIG.xml” obrigatoriamente no diretório raiz do dispositivo. Observação: Este arquivo poderá ser nomeado de outra forma pelo desenvolvimento. Neste arquivo contém os dados de conexão com o servidor. Para instalar os arquivos “.APK” acesse o gerenciador de arquivos do celular em seguida instale o TotalCross.apkque deverá ser o primeiro. Logo após, instale os arquivos Atualizador.apk, LogicalAdmin.apk e LogicalAFV.apk,não importando a ordem. Perceba que o TotalCross não aparece na tela inicial. Isso se dá porque este funciona em segundo plano. Caso queiramos visualizá-lo, podemos acessar o menu de configurações e ver os aplicativos instalados.


### Criação de Contas (Clientes) e Usuários

Para criação das contas dos clientes e seus respectivos usuários, é necessário utilizar a plataforma pelo link: • http://www.aws.servidorlogical.com.br:8080/logicalmanager/login.html . O acesso a este portal é permitido aos supervisores do Suporte Bimer e colaboradores do Desenvolvimento Bimer.


### Primeiro Acesso

Ao realizar o primeiro acesso ao sistema AFV, será exibida a tela de usuário e senha. Estes serão os mesmos códigos definidos no campo “Entidade Externa” do menu de Exportação de dados do Bimer. Após realizar o Login, será necessário executar a primeira Sincronização de dados. É possível definir se a sincronização enviará e receberá os dados, ou se será realizado apenas um dos procedimentos. Em seguida, será exibida uma tela com mensagens, caso a empresa tenha enviado alguma mensagem através do sistema Bimer (ou outro ERP), conforme vimos no momento da exportação de dados. Após confirmar, a tela principal será exibida.


## Recursos do AFV Logical

O AFV é um sistema que permite seleção de multiempresas. Dessa forma, o representante comercial poderá selecionar mais de uma empresa de trabalho. Para isso, basta clicar no nome da empresa, no topo da tela, em seguida serão exibidos todos os módulos do sistema AFV. Vejamos o detalhamento dos módulos:


### Clientes

Neste módulo o usuário pode incluir os pedidos, cadastrar clientes, consultar dados cadastrais do cliente, consultar o histórico de compra e financeiro, agendar visitas, entre outras funcionalidades. Essa tela será apresentada com maiores detalhes mais a frente. No menu principal ao clicar no botão “Clientes”, a tela abaixo será exibida. Perceba que os clientes estão com cores diferentes. Clicando no botão “Legenda” é informado o significado de cada cor. O status é analisado de acordo com os dados do cliente no AFV (Com título em aberto e em atraso = Cliente inadimplente, etc).


## Categoria

No topo da tela, há o campo chamado de “Categoria”, sendo como um filtro na tabela de clientes. Essas categorias possibilitam ao usuário realizar filtros dos seus clientes. Veja um exemplo do uso de “Categoria”, o usuário cadastrou seus clientes categorizando por clientes VIP, SPC, etc. Para filtrar somente os clientes Vips, clique em “Cliente Vip” e em seguida clique no botão “Confirmar”. Assim, o AFV exibirá somente os clientes que estão cadastrados com essa categoria. Observação: As categorias são as características cadastradas e vinculadas ao cliente no sistema da retaguarda.


### Incluir um Cliente

Para incluir um cliente pressione o botão “Incluir”. O usuário deve preencher os campos desta tela, sendo os seguintes campos obrigatórios: “FANTASIA”,“R. SOCIAL” e “CPF/CNPJ”. Após o preenchimento dos dados de todas as abas do cadastro, o usuário deverá pressionar o botão “Gravar”. Caso desejar cancelar a inclusão a qualquer momento pressione o botão “Cancelar”.


### Alterar Clientes

Para alterar um cliente, selecione o cliente que deseja alterar (repare que o cliente fica destacado), em seguida pressione o botão de informações ao lado do nome do cliente selecionado. Será exibida a tela de dados cadastrais, onde o usuário pode fazer as alterações que desejar. Após alterações pressione o botão “Gravar”. Para cancelar, pressione o botão “Cancelar”. Observação: Esse procedimento atualiza o cadastro de clientes do sistema Bimer.


### Busca de Clientes

Para buscar um determinado cliente, escreva a Razão Social do cliente desejado no campo “Busca”. Para realizar a busca através de outras informações, pressione o botão de lupa. A tela abaixo será exibida: Escreva no campo que deseja realizar a busca e pressione o botão “Confirmar”. Para apagar a informação clique no botão “Limpar”.


### Histórico de Compras

Nesta função é possível visualizar o histórico de compras do cliente, ou seja, os últimos pedidos efetuados por ele no AFV. Para obter acesso a essa função, basta clicar no botão de informações ao lado do cliente escolhido e, em seguida, clique no botão “Compras” e visualize o histórico de compras do cliente. Clicando no botão de informações ao lado de um produto, o usuário pode visualizar: • Detalhes de um item comprado; • Complemento de um item comprado;


### Histórico Financeiro

Nesta função é possível visualizar o histórico Financeiro do cliente com todos os títulos em aberto (vencido ou a vencer). Para obter acesso a essa função, basta clicar no botão de informações ao lado do cliente escolhido e, em seguida, clicar no botão “Finanças” e visualizar o histórico financeiro do cliente.


### Opinião

Nessa função o usuário pode visualizar e realizar pesquisas de opinião para um cliente.


## Realizando um Pedido de Venda

Para realizar um pedido, acesse o menu principal, clique em botão “Clientes”, selecione o cliente que deseja realizar o pedido, clique no botão “Pedido”, em seguida clique no botão “Incluir”. Após ter clicado no botão “Incluir”, preencha os campos “Cond.Pgto” (Condição de Pagamento) e “Forma Pagto” (Forma de Pagamento). Pressionando o botão ao lado do campo.


### Itens do Pedido

O próximo passo é a inclusão de produtos para esse pedido. Para escolher os produtos pressione a aba “Produtos”. A tela seguinte será exibida: Perceba que os produtos estão com cores diferentes. Clicando no botão “Legenda” é informado o significado de cada cor. O status é analisado de acordo com os dados no AFV: Produto novo: O usuário efetuou o cadastro recentemente; Produto em falta: Produto com saldo menor ou igual a zero; Produto em promoção: Serão exibidos os itens que estejam com a característica de promoção vinculada e configurada no módulo de Importação e exportação de dados ERP na aba “Parâmetros > Característica de produto em promoção”. Para agilizar a inclusão dos produtos, o usuário pode realizar a busca do produto pela descrição ou código do mesmo. Selecione o produto desejado e em seguida, clique em “Incluir”. Após a escolha do produto, entre com a quantidade desejada, e se necessário, entre com o desconto percentual desejado. Depois de preencher os campos, pressione o botão “Gravar”. Se desejar cancelar a operação pressione o botão “Voltar”. Caso queira incluir novos itens, basta ir para a aba “Produtos” e repetir o processo. Observação: O desconto pode ser dado no campo “Desconto” na forma de percentual (%) ou já incluindo o preço final com o desconto no campo “Preço c/ Desc.”. Ao clicar na aba Lista de Itens, será exibida a listagem com os produtos pedidos pelo cliente. Ao gravar o pedido, será exibido o seguinte aviso na tela:


### Alterar Pedido já gravado

Para alterar um pedido que ainda não foi enviado, o usuário precisa acessar o menu principal do AFV, em seguida clicar o botão “RELATÓRIOS” e na aba “Pedidos no Período” o usuário tem acesso a todos os pedidos realizados com seus devidos status. Selecione o botão de informações ao lado do pedido desejado e faça as modificações necessárias. Ao término do processo clique em “GRAVAR”. Importante:As alterações no pedido são permitidas apenas para pedidos com status “A enviar”.


### Excluir Pedido

Para excluir um pedido, acesse o menu principal, clique no botão “CLIENTES”, selecione o cliente o qual o pedido foi realizado e em seguida pressione o botão “PEDIDOS”. Os pedidos a serem enviados estarão listados. Para excluir, basta selecionar o pedido desejado e pressionar o botão “EXCLUIR”. A mensagem “Deseja realmente excluir o pedido” será exibida. Pressione “Sim” para confirmar a exclusão e “Não” para cancelar a exclusão. O usuário também pode excluir o pedido clicando no módulo “Relatório”, na aba “Pedidos no Período”, basta selecionar o pedido desejado e pressionar o botão “Excluir”. A mensagem “Deseja realmente excluir o pedido” será exibida. Pressione “Sim” para confirmar a exclusão e “Não” para cancelar a exclusão.


## Promoções

No menu principal ao clicar no botão “Promoção”, o usuário pode visualizar quais as promoções o distribuidor está realizando. Para visualizar os produtos em promoção, basta clicar no ao lado do nome da promoção. Nessa tela o usuário pode visualizar os detalhes de um produto em promoção, tais como a condição de pagamento, a quantidade mínima, o preço, etc. Basta clicar no botão de informações ao lado do produto desejado.


### Produtos

No menu principal ao clicar no botão “Produto”, o usuário pode visualizar os produtos com o seu devido preço, de acordo com a escolha da tabela e uma condição de pagamento. Para visualizar o preço com outra condição de pagamento, pressione o botão ao lado de Condição.


### Metas

No menu principal ao clicar no botão “Metas”, o usuário visualiza o alvo da sua meta a ser alcançada, assim como o faturamento atingido em porcentagem e em valor absoluto e a diferença. A medida que os pedidos forem realizados e faturados as informações são atualizadas. É possível visualizar todas as metas através do botão de seleção de metas no topo da tela.


### Visitas

No menu principal ao clicar no botão “Visitas”, o usuário pode consultar as visitas do dia, podendo seguir um cronograma traçado anteriormente e também pode incluir uma nova visita clicando no botão “Incluir”. Para incluir novas visitas selecione o cliente a ser visitado pressionando o botão de seleção de clientes ao lado do campo cliente e preencha os demais campos. Ao término do preenchimento clique no botão “Gravar” para o agendamento de visita ser salvo. No modulo de visitas também é possível realizar um pedido a partir das visitas agendadas. Após incluir uma visita, o usuário poderá acessá-la para criar um pedido diretamente na tela da visita agendada. Ao localizar a visita, basta clicar na aba “Pedidos” para visualizar o botão de “Incluir”.


### Relatórios

No menu principal ao clicar no botão “Relatórios”, o usuário pode consultar relatórios referentes a pedidos, compras, financeiro, visitas, justificativas das visitas, aniversários e etc. Para visualizar todos os relatórios, deslize o dedo para mudar as telas. • Pedidos no Período • Histórico de Compra • Clientes sem Compras • Clientes sem Histórico de Compras • Títulos Vencidos • Clientes sem Visitas • Aniversário • Ranking de Compras • ABC Clientes • ABC Produtos • ABC Linha Produtos Para obter mais informações do pedido clique no botão de informações ao lado do pedido.


### Mensagens

No menu principal ao clicar no botão “Mensagens”, o usuário pode consultar as mensagens que a empresa enviou clicando no botão “Entrada” e também pode enviar mensagens para a empresa clicando no botão “Saída”. As mensagens são recebidas e enviadas após a realização de um sincronismo. Para Escrever uma mensagem clique no botão “Saída”, escreva sua mensagem e em seguida, clique em “Gravar”. A mensagem será recebida ao acessar o AFV. O usuário também pode visualizar a mensagem clicando no botão “Entrada”.


### Sincronismo

No menu principal, ao clicar no botão “SINCRONISMO”, o usuário poderá enviar os pedidos ou receber os dados da base atualizada via conexão FTP. Ao clicar sobre o botão de “SINCRONIZAR” será iniciada a recepção dos dados. Durante o Sincronismo o aplicativo busca por novas versões do AFV. Importante: Verifique se as opções “Enviar dados” e “Receber dados” estão selecionadas.


### Resumo dos Registros Integrados

Serão EXPORTADOS pelo Bimer os seguintes registros: Atividade → Cadastrado em Características de Pessoas Cidades → Cadastro de Cidades Compra → Histórico de Compras com o Representante Comercial CompraDetalhe → Detalhes do Histórico de Compras Condição → Prazo de Pagamento Forma → Forma de Pagamento Grupo → Grupo de Produtos MetaFixa → Meta do Vendedor – Deve ser configurado no cadastro de metas e vinculado ao cadastro do representante Produto → Cadastro de Produtos ProdutoTabela → Preço por Tabelas de Preços PromocaoProduto → Produtos com característica de promoção Roteiro → Cadastrado em Características de Pessoas Tabela → Tabelas de Preços disponíveis Título → Títulos do Cliente – Títulos em aberto do cliente, cujo representante (pessoa relacionada) seja o vendedor AFV Vendedor → Dados do Representante comercial Visitas → Status da visita. Cadastrado em Característica de Pessoas. Serão IMPORTADOS pelo Bimer os seguintes registros: Cliente → Dados dos Clientes (Com alterações realizadas, por exemplo) Pedido → Pedidos de Venda que foram criados no AFV (Os dados de Operação são configurados no menu de importação do Bimer) Item → Item de Pedido de Venda criado no AFV Fechamento → Fechamento do Arquivo (Garante que o arquivo foi enviado para o WebService com sucesso) As outras informações não são importadas, porém pode ser aberto processo para analisar a possibilidade da sua utilização.


### Administração

No menu principal ao clicar no botão “Administração”, o usuário pode excluir pedidos exportados, usar uma calculadora e ver seu controle de transmissão de dados GPRS.


### Exclusão de Pedidos

Ao clicar no botão “Excluir Pedidos”, o usuário pode excluir todos os pedidos que já foram exportados (enviados) para empresa. Selecione a data que deseja começar a exclusão, depois pressione “Excluir” para confirmar a exclusão. Para baixar a demonstração do AFV acess: http://www.logical.com.br/ Senha de acesso: 2233


## Atualizador

O aplicativo Atualizador servirá para verificar se há disponível atualização no Servidor. Caso exista alguma atualização disponível para o cliente, o usuário poderá acessar o atualizador e aguardar o processo de download. O download poderá ser realizado tanto pela rede móvel quanto com Wi-Fi. O instalador possui cerca de 3,5 Mb. Além disso, conforme mencionado, a cada sincronismo, o sistema busca por novas atualizações.


## Logical Admin

O aplicativo Logical Admin será utilizado para realizar manutenções na base de dados do AFV. Este poderá ser utilizado em caso de corrompimento da base de dados, ou no caso de troca de usuário do AFV (por exemplo, se um representante comercial saiu da empresa e o PDA for entregue a outro representante). Ao clicar em “Limpar”, o sistema realizará a limpeza da base de dados e aguardará novos dados da próxima Sincronização. Com a função “Trocar Usuário”, será possível trocar o usuário do AFV. Esse procedimento poderá ser realizado caso o PDA de um representante comercial passe a ser usado por outro representante comercial. Há também a possibilidade de enviar os log's de erros e realizar o backup do sistema. Para realizar os procedimentos citados, será solicitada uma contra senha. Esta será gerada pelo responsável pela implantação do AFV na empresa. O gerador de senha fica, por padrão, na pasta C:\Logical. O arquivo é o GeradorDeSenha.jar.


## Importação de Dados para o Bimer

Após realizar uma sincronização no AFV marcando a opção de “Enviar Dados” execute o arquivo “Receber.bat” e em seguida para importar os dados para o Bimer é necessário também criar uma configuração de importação de dados. Para isso, deve-se acessar o ConfiguradorBimer >> Geral >> Importação/Exportação de dados. Poderemos utilizar a mesma DLL utilizada na Exportação. Ao selecionar a opção de “Importação”, serão habilitados os campos relativos à importação, como as Operações. Além disso, o sistema permite selecionar se deseja importar o arquivo e gerar Pedido de Venda ou Pré Pedido. Importante lembrar que o campo “Entidade Externa” deve estar preenchido para que sejam importados corretamente. Após realizar a configuração, acesse o menu de importação e exportação de dados. Vamos realizar a importação para criar os pedidos de venda. Deixe marcado somente a opção de importação de dados que será utilizada e, em seguida, clique em Concluir. Caso tenha algum problema na importação de dados, será exibida uma tela com o log do erro encontrado. Após a importação dos dados, poderemos verificar o pedido gerado no módulo FatPedido.
