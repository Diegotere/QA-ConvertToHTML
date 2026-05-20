# NF-Stock — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Do que vamos falar?](#do-que-vamos-falar)
- [Acesso](#acesso)
- [Quais tipos de documentos?](#quais-tipos-de-documentos)
- [Integração Bimer x NF-](#integracao-bimer-x-nf-)
- [Stock](#stock)
- [Faturamento](#faturamento)
  - [Notas de serviço](#notas-de-servico)
- [Estoque](#estoque)
  - [Configurações](#configuracoes)
  - [Tipos de Código](#tipos-de-codigo)
  - [Envio e Consulta de NF-e no NF-Stock](#envio-e-consulta-de-nf-e-no-nf-stock)
  - [Tarefa](#tarefa)
  - [Rotina](#rotina)
- [Site NF-Stock](#site-nf-stock)
- [Sistema](#sistema)
- [Configurações](#configuracoes)
- [Buscar Notas](#buscar-notas)
- [Abas de Documentos Fiscais](#abas-de-documentos-fiscais)
- [Downloads](#downloads)
- [NF-Stock Monitor](#nf-stock-monitor)
- [Download & Instalação](#download-instalacao)
- [Configurações](#configuracoes)
  - [Principal](#principal)
  - [Opções](#opcoes)
  - [Erros](#erros)
  - [Certificado](#certificado)
  - [Proxy](#proxy)
  - [Procuração](#procuracao)
  - [Você sabia?](#voce-sabia)
- [Site Suporte](#site-suporte)
- [Clientes](#clientes)
- [Administradores](#administradores)
- [Buscar](#buscar)
- [Log](#log)
- [Envio por E-mail](#envio-por-e-mail)
- [Que tal mais algumas](#que-tal-mais-algumas)
- [dicas?](#dicas)
- [Modos de enviar a nota](#modos-de-enviar-a-nota)

---


## Do que vamos falar?

A resenha hoje é sobre o conhecimento técnico e orientações que você, analista Bimer, precisa saber sobre o sistema NF-Stock, para prestar um suporte de qualidade e ganhar aquelas estrelinhas que você tanto deseja. Falando nele… o NF-Stock é um servidor via Web de Documentos Fiscais Eletrônicos. Para simplificar: é um site no qual o cliente guarda as suas notas fiscais e pode acessar de qualquer lugar e dispositivo que tenham acesso à internet. Você deve estar se perguntando: “Tá, mas onde eu entro nisso?” O Bimer tem uma integração com o NF-Stock, pois além de o cliente comprar o sistema para guardar suas notas lá, o próprio Bimer tem recursos para integrar os documentos de forma automática. Está pronto para essa viagem? Então aperte o cinto e venha comigo!


## Acesso

Para entrar no NF-Stock há três links que variam de acordo com o tipo de acesso: → 1. Clientes: Ambiente de produção https://nfstock.alterdata.com.br/ Basta o cliente preencher os dados de acesso ou clicar em Esqueci minha senha caso não se lembre. → 2. Colaboradores Alterdata: Ambiente de testes compartilhado pelo comercial https://nfstock.alterdata.com.br/comercial Utilize seu login e senha de rede Alterdata. Na próxima tela selecione: • Visão cliente: Para acessar os dados como se fosse uma empresa que não é escritório de contabilidade; • Visão contador:Acesse como se fosse um contador. Tem duas opções principais que não estão no acesso do cliente:Visualizar como e menu Clientes. Caso a visão Cliente esteja sem notas recentes, use a visão do contador como paliativo de testes. Não temos nenhum ambiente de testes que integram as notas diretamente com o NF-Stock, portanto esse acesso serve para poder orientar o cliente durante os atendimentos. → 3. Suporte Alterdata: Análises no ambiente de produção: https://nfstock.alterdata.com.br/suporte Utilize seu login e senha de rede Alterdata. Falaremos deste acesso mais a frente.


## Quais tipos de documentos?

Atualmente é possível armazenar os seguintes documentos fiscais: ➢ Notas Fiscais eletrônicas (NF-e): Modelo 55; ➢ Nota Fiscal ao Consumidor Eletrônica (NFC-e): Modelo 65; ➢ Conhecimento de Transporte Eletrônico (CT-e): Modelo 57; ➢ Conhecimento de Transporte Eletrônico para Outros Serviços (CT-e-OS): Modelo 67; ➢ Nota Fiscal de Serviço Eletrônica (NFS-e): Modelo varia por prefeitura; ➢ Cupom Fiscal Eletrônico (CF-e): Modelo 59. ➢ Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (NFCom) ➢ Nota Fiscal de Energia Elétrica Eletrônica (NF3e)


## Integração Bimer x NF-


## Stock

Veja neste tópico como é possível relacionar o Bimer com o NF-Stock, e quais tipos de documento do nosso ERP integram com ele.


## Faturamento

No módulo Faturamento, após a nota ser autorizada pelo NF-Easy, ela vai para o site do NF-Stock, A partir da versão 9.07.02.00 do Bimer as NFC-es (modelo 65), originadas do Spice e PDV Alterdata são enviadas pelo NF-Easy para o site do NF-Stock. Para que isso ocorra é necessário abrir o Configurador Bimer / Geral / Empresas / Emissão de Notas / NFC-e / Gerale marcar Enviar NFC-e emitida pelo PDV Alterdata para o NF-Stock. Dúvida! Onde que as notas de venda aparecem no site do NF-Stock? No menu NF-e ou NFC-e / Emitidas. Se liga nesses dados sobre a NF-e Modelo 55: Notas Emitidas:o prazo de visualização pode ser de até 4 (quatro) horas, dependendo do volume de notas enviadas. Notas Recebidas: assim que a NF-e é autorizada e consta no site da SEFAZ Nacional, deve-se esperar um prazo mínimo de 24 horas para que o envio seja feito para o site do NF-Stock. Para confirmar o prazo da nota, pegue a chave de acesso e consulte no portal NF-e (clicando aqui) Então fica a dica: se o cliente acabou de autorizar a nota e já quer vê-la no NF-Stock, peça para ele aguardar o prazo padrão e, caso a nota não apareça, ele pode nos procurar novamente. Para o controle das notas enviadas para o NF-Stock, é criado no NF-Easy o diretório padrão DadosNFEasy\NFstock. As notas autorizadas ficam nesta pasta para serem enviadas para o site. No diretório há duas subpastasXmlsInvalidose XmlsNaoEnviados:guardam arquivos inválidos para o formato da importação da nota, ou arquivos que apresentam outro tipo de problema que impede o envio para o NF-Stock.


### Notas de serviço

A NFS-e não é enviada pelo ISS-Easy diretamente para o site do NF-Stock. O processo funciona assim: 1.Bimer: cadastro da NFS-e; 2.ISS-Easy: envia a nota para o site da prefeitura autorizar o serviço; 3.Prefeitura: armazena a nota autorizada; 4.NF-Stock: vai no site da prefeitura para fazer o download da nota para o site. Dentro do site é necessário acessar o menu Configurações / Opções da Conta / Controle NFSe / Adicionar controle NFS-e. Na tela seguinte, escolha sua prefeitura e preencha os dados solicitados (se o cliente tiver dúvida em como preencher algum campo, ele precisará entrar em contrato com a prefeitura): Dicas úteis: • Se a prefeitura da empresa não estiver aparecendo quer dizer que ainda não existe integração com o site do NF-Stock, pode-se abrir um processo para inclusão do layout do cliente. • O campo “À partir de” determina o período para a verificação e download no site da prefeitura. • Algumas prefeituras disponibilizam as notas recebidas e emitidas, já outras apenas as notas emitidas. Ao selecionar a prefeitura veja emnegritoa informação:


## Estoque

As notas de entrada também são utilizadas no NF-Stock, é possível receber notas do site e enviar para lá também. Para que isso funcione, veja algumas configurações e depois a rotina.


### Configurações


### Tipos de Código

No Configurador Bimer /Estoque / Opções /Produto / Padrões,defina os tipos de código padrão para os produtos na seção Tipos de código. Isto será necessário para a importação de nota fiscal pelo módulo Nota Fiscal de Entrada.


### Envio e Consulta de NF-e no NF-Stock

No Configurador Bimer / Estoque / Opções / Nota fiscal de entrada / NFStock marque Enviar XML das notas de entrada para o NFStock. Logo abaixo, informe a URL do webservice do NF-Stock e, por fim, realize o teste de comunicação. A comunicação com o webservice será utilizada na integração entre o Nota Fiscal de Entrada e o NFStock para enviar e receber documentos de fornecedores, por exemplo.


### Tarefa

Para enviar os XMLs importados é necessário, além da marcação citada, configurar a tarefa GEEnviaXMLEntradaParaNFStock. Após a execução do GEAgente no horário definido, a nota será enviada. Veja como configurar a tarefa: 1 – Cadastre Acesse Configurador Bimer / Geral / Tarefas e insira o sistema 000162, dando um nome de sua escolha: 2 – Agende AcesseConfigurador Bimer / Geral / Tarefas Agendadas, vincule a tarefa cadastrada e defina o tempo de envio do XML para o site: 3 – Execute Abra o módulo GEAgente por meio da execução do aplicativo ou serviço. Se ele já estiver aberto, reinicie a aplicação para que a nova tarefa seja carregada. Algumas dicas para caso não funcione: • Verifique se o arquivo GEEnviaXMLEntradaParaNFStock.exe se encontra no mesmo diretório do executável do Gerente Eletrônico(GEAgente.exe). O diretório padrão é \Arquivos de programas%\Alterdata\ERP; • Veja se o arquivo GEEnviaXMLEntradaParaNFStock.exe está na mesma versão da base. Se não estiver, será necessário atualizar o módulo; • Vá no Cadastro de Usuários / Usuários / Edite o usuário de acesso no Gerente eletrônico / Perfis de acesso do usuário / Sistemas / Inclua o Módulo GEEnviaXMLEntradaParaNFStock. ◦ Após qualquer um desses passos é necessário reiniciar a aplicação.


### Rotina

Mãos à obra! É hora de ver o recurso em funcionamento! Abra o módulo Nota Fiscal de Entrada, informe a empresa e clique em Importar XML avulso ou Importar XML pedido de compra. A diferença entre as opções é exclusivamente o vínculo com o pedido de compra. No entanto, os procedimentos são os mesmos. Informe a operação, empresa e a chave de acesso. Para confirmar a importação, clique em Importar. Caso não possua o fornecedor do documento cadastrado em sua base de dados, o sistema sugere o cadastro e possibilita que isto seja feito sem sair do módulo, dando sequência ao procedimento. Em seguida, o sistema busca os produtos presentes no XML na base de dados e, caso não os encontre, sugere o cadastro ou vínculo com um produto já existente. Esta verificação faz validação do código NCM do produto, assim como código EAN e código do fornecedor, presentes no XML. Os produtos com vínculo encontrado não são mostrados na tela abaixo. Após cadastrar ou vincular os produtos, a nota será mostrada em tela já com os dados do XML preenchidos. Dúvida! Onde que as notas de entradas aparecem no site do NF-Stock? No menu NF-e / Recebidas. Atenção: A partir da versão 11.02.03.19 foi integrada à Central de Notificações. A rotina de importação automática oferece acompanhamento em tempo real diretamente na tela principal da Nota Fiscal de Entrada, proporcionando mais controle, agilidade e segurança no dia a dia. As notificações mantêm o usuário informado sobre cada etapa do processo, do início à conclusão, com avisos exibidos automaticamente por meio de cards intuitivos e alerta sonoro. Comunicando com o NF-Stock: Importando documentos: Importação concluída:


## Site NF-Stock

Bora falar das funções disponíveis no site do NF-Stock!


## Sistema

Há 5 opções: • Home: Volte para a tela inicial do sistema; • Estatísticas: Acompanhe em tempo real como está o armazenamento das notas, consultando informações úteis como o espaço livre e já utilizado no site; ◦ Em qualquer momento a empresa pode entrar em contato e solicitar o aumento de espaço de sua custódia. A Alterdata disponibiliza o espaço adicional e, naturalmente, cobra pela quantidade de notas armazenadas: • Enviar Notas: Envie documentos manualmente para o site do NF-Stock. Para isso, é só selecionar os documentos e Enviar todos ou Enviar cada nota de modo individual. ◦ A opção Enviar notas éusada como paliativo para forçar o envio das notas quando alguma opção automática falha (como certificado ou NF-Easy por exemplo), e upload de notas antigas. ◦ Usada para enviar notas de qualquer modelo compatível com o site e NFS-e com layout homologado. • Parceiros: Cadastre aqui o contador para compartilhar as notas da empresa com ele. Para que o recurso funcione, o contador também precisa possuir o sistema NF-Stock. Desse modo, ele consegue consultar e baixar as notas da empresa, sem utilizar a custódia do escritório de contabilidade. Este recurso facilita a contato da empresa com o contador, pois este não precisa solicitar os arquivos para a empresa, basta pegar quando precisar. ◦ Após fazer o vínculo o contador precisa aceitar no sistema NF-Stock dele. ◦ O contador também pode informar o CNPJ da empresa como parceiro no NF- Stock dele. Se isso ocorrer, nesta tela, a empresa pode dar o aceite, e no globo da notificação chegará a solicitação. ◦ Ao lado de cada contador nesta tela tem os botões Ativar e Desativar para permitir ou não o acesso do contador, em qualquer momento. • Auditoria: Veja quando e quais pessoas fizeram login no NF-Stock da empresa. A auditoria informa ainda o IP da máquina que fez o acesso.


## Configurações

Em Opções da Conta você conta com os seguintes recursos. • Dados: Configure as informações da empresa. Dê uma olhada na imagem e numeração abaixo: 1.Insira a logomarca da sua empresa; 2.Informe um nome de preferência para exibição no site; 3.Adicione o e-mail de algum responsável pelo sistema NF-Stock. Será utilizado para envio de informações como redefinição de senha; 4.Estes campos são bloqueados para edição do cliente e são gerados a partir da contratação do sistema; 5.Essa data é preenchida automaticamente de acordo com a data de aquisição do sistema. Se for modificada para uma data superior, a empresa não visualiza no site as notas anteriores a esta data; 6.A opção está sob investigação é marcada apenas pelo suporte. Para ver mais detalhes desse recurso clique aqui. • Certificado Digital: Selecione o certificado da empresa. No site só é possível utilizar o A1. Se a empresa possuir o A3 deve ser usado o aplicativo NF-Stock Monitor. Com o certificado apontado no site, algumas notas são baixadas automaticamente, principalmente as de entrada, como veremos no tópico Que tal mais algumas dicas? ◦ Sempre que o certificado expirar, será exibida uma notificação no site que pode ser vista no globo do lado superior direito. Quando isto ocorrer, o certificado deve ser alterado nesta tela para que as notas continuem sendo baixadas. • Controle NFSe:Clique aqui para acessar a explicação do recurso neste manual; • Controle SEFAZ: Este recurso serve para buscar notas direto na SEFAZ, mas somente para os estados RJ, MT, PE e SE. Basta adicionar a UF e a inscrição estadual; • Senha: Altere a senha de acesso ao sistema; • Notificações: Marque Sim para sempre receber um e-mail, assim que uma nota for importada para o site do NF-Stock. Desse modo, os e-mails informados na aba Dados receberão essa notificação; • Disponibilizar XML: Pode ser criado um link para que uma pessoa que não tenha acesso ao site baixe uma nota da empresa por meio da chave de acesso. Para isso, preencha um código ou termo no campo Nome curto e clique em Verificar. É criado um link de acesso que deve ser compartilhado com a pessoa que fará o download: ◦ Acessando o link basta informar a chave e fazer o download. • Tempo de Armazenamento: Defina quais tipos de notas armazenar e por quanto tempo. Exemplo: Não desejo armazenar o CT-e, e quero guardar a NFC-e por apenas 3 anos; ◦ Após o período informado as notas serão deletadas do sistema NF-Stock. Por isso, é aconselhável o cliente baixar essas notas antes do tempo de expiração; ◦ Ei, suporte! Se uma nota não estiver sendo armazenada na plataforma, pode ser que nesta tela o cliente marcou para não armazenar um tipo de documento; ◦ Esse tempo de armazenamento tem um padrão de 6 anos pensando no que determina a legislação (normalmente 5 anos), que estabelece que cada estabelecimento deve guardar suas notas e disponibilizar em casos de fiscalização.


## Buscar Notas

Em Chaves de acesso, importe a Nota Fiscal eletrônica (NF-e) de entrada e saída, e Conhecimento de Transporte Eletrônico (CT-e) para clientes com Certificado Digital A1, independentemente do período de emissão dos documentos, informando: • A chave de acesso através da digitação; • Utilizando um leitor próprio de código de barras; • Enviando um arquivo de texto (*.txt), inserindo em cada linha uma chave de acesso distinta. ◦ O envio se limita a 5.000 chaves de acesso por arquivo de texto. ◦


## Abas de Documentos Fiscais

É aqui que você visualiza os documentos da empresa, separados por tipo de nota, tendo as abas: NF-e, NFC-e, CF-e, CT-e e NFS-e. Vou te dar algumas dicas de utilização que são aplicadas para qualquer aba. Para isso, vamos pegar como exemplo a aba NF-e / Recebidas,que é mais completa em termos de campos e rotinas. Se uma aba não possuir alguma opção demonstrada a seguir, é porque não se aplica ao tipo de documento em questão. Veja algumas orientações usando a numeração da imagem: 1 Faça a busca dos documentos usando campos como: CNPJ do participante da nota, número e datas; 2 Se a empresa utiliza o certificado A1 é possível realizar o processo de manifestação da nota, clicando ao lado de cada nota de modo individual, ou realizando em massa por selecionar as notas e clicar em Confirmar Operação (realizando a ciência da operação); 2.1 O recurso constitui em informar para a SEFAZ se reconhece ou não a nota emitida contra o CNPJ da empresa. Em alguns estados isso é obrigatório. Caso a empresa use o certificado A3, é necessário realizar esse processo acessando algum site do governo como e-CAC ou da SEFAZ do estado. 2.2 Clicando no botão ao lado da nota o usuário escolhe o tipo da manifestação. 3 Envie as notas em PDF ou XML para qualquer e-mail. Esta opção é muito usada para enviar uma nota para o cliente que solicita o documento, de modo rápido e ágil. O envio pode ser feito individualmente por nota, ou selecionando várias e enviando em massa pelo botão Compartilhar. 3.1 O destinatário recebe um e-mail com os documentos em anexo. 4 Atualizar o status na SEFAZ é utilizado para forçar a atualização no site, de acordo com a informação da SEFAZ do cliente. Exemplo: a nota na SEFAZ está cancelada e aqui a venda está autorizada; 4.1 Este recurso é disponível apenas para empresas que utilizam o certificado A1 vinculado ao site; 4.2 O sistema já tem um padrão de manter o status atualizado, portanto, o recurso é usado para forçar a atualização. 5 Faça o download das notas, de modo individual ou em massa; 6 Visualize a nota sem realizar o download. Esta será exibida em formato PDF; 7 Clique na Lupa para ver a sua nota separada por grupo de informações contido nela. É similar a consulta que é feita em alguns sites como o Portal NF-e; 8 Gere relatórios das suas notas, apresentando os valores de despesas ou faturamento (de acordo com o tipo da nota). Veja também as informações de elementos contidos nelas como os produtos; 9 Veja as datas de emissão do documento junto ao órgão autorizador e a data de importação para o site do NF-Stock. Exemplo: a NFC-e foi emitida na SEFAZ no dia 18/02/20xx, porém foi importada no site no dia 19/02/20xx de acordo com o tempo de tolerância para importação; Na coluna Origem veja por qual meio a nota foi importada para o site. O robô ali apresenta o aplicativo NF-Stock Monitor. Algumas palavras podem te confundir ao navegar pelas abas de notas. Deixa, então, eu te ajudar a entender algumas delas. Categorias de Notas: • Recebidas: notas de entrada e compras ou aquisição de serviço; • Emitidas: notas de saída e vendas ou prestação de serviços; • Inutilizadas: intervalo de numeração não utilizado para algum tipo de nota, causada por erros de software ou do usuário; • Canceladas: veja os documentos que foram cancelados, por motivos como erro do usuário ou desistência do cliente; • Faltantes: busca das notas emitidas que não estão no site. Exemplo: gerei as notas 01 a 100 com a série 2, por meio desta consulta vejo que estão faltando as notas 80 a 90. Categorias de CT-e • Recebidos: quando a empresa é o destino do CT-e; • Emitidos: a própria empresa emite o CT-e; • Remetidos: quando a empresa envia a mercadoria, sendo ela a fornecedora; • Contratados: emitidos pelas transportadoras que foram contratadas por uma outra transportadora para realizar o frete; • Expedidos: empresa que entrega a carga ao transportador quando o envio não for realizado pelo remetido.


## Downloads

Baixe aqui qualquer documento fiscal armazenado no site, nos formatos XML e PDF. Esta opção é utilizada em casos como: 1.O contador pede para a empresa suas notas fiscais do mês passado; 2.Tempo de armazenamento expirado para as notas e serão baixadas antes que o site exclua.


## NF-Stock Monitor

É um aplicativo utilizado por empresas com certificado A3. Ele também possui compatibilidade com o certificado A1, porém, como o A1 pode ser vinculado no site do NF-Stock, são as empresas que possuem o certificado A3 que mais utilizam o aplicativo. Por meio dele a empresa baixa as notas via certificado após a disponibilização no portal da SEFAZ. Vamos ver como utilizar?


## Download & Instalação

Ao fazer o login no site do NF-Stock, acesse a aba Downloads / NF-Stock Monitor. Após obter o arquivo, execute-o na máquina na qual está o certificado digital. Após a instalação, você já visualiza o painel principal que é aberto com as configurações: Se você fechar este painel, é só acessar novamente usando uma das seguintes opções: 1.Atalho NF-Stock monitor criado na área de trabalho; 2.Digitar no menu iniciar “NF-Stock Monitor”; 3.Clicar na seta no canto inferior direito do computador, próximo ao relógio, no NF-Stock Monitor:


## Configurações

E ai? Pronto para colocar o aplicativo para funcionar? Vamos dar uma olhada em cada aba.


### Principal

Ative oudesative o serviço do aplicativo. Se ele estiverinativo, naturalmente nenhuma nota será baixada e nem enviada para o site do NF-Stock:


### Opções

Veja os diretórios que o aplicativo utiliza. Como padrão é criado o diretório raiz C:\NF e dentro dele as seguintes subpastas: • Enviar: guarda as notas de entradas baixadas no portal da SEFAZ pelo certificado digital. Se o usuário inserir notas de saídas ou de entradas de modo manual no diretório, elas também serão enviadas; ◦ Percebeu que do campo da pasta Enviar até o campo da pasta Erros há mais 4 diretórios vazios? Isso ocorre para que você possa utilizar até 5 pastas diferentes para realizar o upload das notas. Exemplo: a empresa tem uma pasta na qual sempre guarda as notas de saída, e aponta neste caminho. • Erros: qualquer nota que apresentar problemas na importação será removida da pasta de envio e inserida aqui. Alguns problemas comuns são notas com erro de estrutura, e documentos baixados incompletamente com o certificado digital; ◦ Para isso, é necessário marcar a opção abaixo Mover arquivos com erro para a pasta erros. • Enviadas: é o oposto da pasta Erros; as notas exibidas aqui são aquelas enviadas como sucesso para o site do NF-Stock; • Pendentes: são inseridas as notas que estavam sendo enviadas para o NF- Stock quando ocorreu alguma falha de conexão, causada por motivos como: site do NF-Stock fora do ar, instabilidade na internet do cliente. Após ser resolvido o problema, o aplicativo tenta enviar essas notas novamente. Se isso não ocorrer, o usuário pode mover os arquivos para uma das pastas do diretório Enviar para forçar a importação. Vou mostrar agora para você as funções das marcações abaixo da configuração dos diretórios: • Exibir mensagem quando erro ocorrer: demonstra na tela o erro para o usuário assim que ele ocorre, com o objetivo de tentar resolver a situação ou entrar em contato com o suporte; para não interromper o processo de envio de notas; • Inicializar junto com Windows: mesmo que a máquina reinicie, o aplicativo já volta iniciado, poupando o trabalho de precisar abrir “na munheca”. Lembre-se: NF-Stock monitor fechado não envia as notas; • Inicializar de forma silenciosa, minimizando: marcada em conjunto com a opção anterior. Abre o aplicativo de modo discreto, sendo minimizado na “setinha”, próximo ao relógio do Windows. Se não marcar esta opção, o aplicativo fica aberto na tela assim que a máquina inicia; • Remover notas da pasta Enviar, após o envio:as notas enviadas com sucesso são mantidas apenas na pasta Enviadas e removidas da pasta Enviar. Sem a opção marcada, as notas enviadas ficam nas duas pastas. Essa marcação foi criada para o usuário ter um controle daquilo que já foi enviado corretamente para o site; • Realizar tentativas de consulta do certificado continuamente: nas versões anteriores, quando era encontrado um erro na busca de notas na SEFAZ, o sistema emitia um alerta e o usuário tinha que clicar para voltar a buscar as notas. Marcando esta opção, quando o sistema encontra algum erro, dentro de 5 minutos, o próprio NF-Stock monitor realiza uma nova busca, sem precisar que o usuário clique novamente; • Ao enviar arquivos, criar pastas por data de emissão para os XMLs: com esta opção marcada, o sistema armazena os XMLs nas pastas Enviar e Enviados com a seguinte estrutura: C:\NF\Enviar ou Enviadas\Ano\Dia_Mês\CNPJ. • Consulta automática de notas: Marque esta opção para o sistema consultar automaticamente as NF-es.


### Erros

Veja aqui problemas relatados ao tentar importar alguma nota. O usuário pode visualizar um arquivo na pastaErros e aqui entender o motivo de não ter sido importado. Outros logs também serão exibidos como problemas com certificado digital.


### Certificado

Ficou fácil saber o que fazer nesta aba, não é? Isso mesmo que você pensou, apontar o certificado digital da empresa, clicando no botão ao lado do campo Certificado. Confira se o CNPJ e estado estão corretos. Após clique em Verificar Notas na SEFAZ para começar o download dos documentos. Este botão é utilizado também para forçar o download das notas, quando cliente entra em contato e nos informa que as notas não estão sendo baixadas: Se liga nas dicas! 1.Se o certificado digital for removido da máquina, será necessário realizar uma nova configuração do certificado no NF-Stock Monitor; 2.Vez por outra a senha do certificado será solicitada na tela para o usuário realizar uma nova autenticação para continuar baixando as notas.


### Proxy

Configure apenas se a empresa utiliza essa tecnologia. A configuração pode ser feita automaticamente, marcando Utilizar as configurações de proxy do sistema para resgatar os dados do painel de controle, em Opções de Internet. E pode ser configurada manualmentedesmarcando a opção mencionada e preenchendo os dados manualmente. Se liga! • Além de configurar esta tela, o TI da empresa precisa liberar no proxy o acesso ao site do NF-Stock para o envio da nota ao site da SEFAZ, e outros que se aplicam ao estado da empresa para que as notas sejam baixadas sem bloqueio. • Servidor Proxy: É um computador que funciona como intermediário entre um navegador da Web (como o Internet Explorer) e a Internet. Quando um navegador solicita uma página que está armazenada na coleção do servidor proxy (o cache), ela é disponibilizada pelo servidor. Se estiver bloqueada, a URL não pode ser consultado e, desse modo, ocorre o bloqueio.


### Procuração

Recurso disponível apenas para as empresas do Rio Grande do Sul. Caso trabalhe com a procuração, a empresa permite que terceiros, como contadores, baixem suas notas usando o NF-Stock Monitor. Este recurso é mais utilizado por escritórios contábeis, caso queira mais informações use o botão Clique aqui no rodapé da tela.


### Você sabia?

• O tempo de envio de documentos pelo NF-Monitor pode variar. Cada arquivo XML é processado pelo nosso serviço de importação (validando a estrutura e assinatura do XML). Isso geralmente é feito em menos de 1 segundo. Mas quando o volume de documentos é grande, pode ocorrer uma demora nesse envio. • Dependendo do volume de documentos. O envio é instantâneo, seja de documentos baixados via A3 e armazenados na pasta enviar, ou por documentos emitidos pela própria empresa e salvos em um diretório mapeado pelo NF-Monitor. • A qualidade da internet do cliente impacta no tempo do envio, pois, como o documento é enviado da máquina do cliente, usamos a banda de upload dele. Se a qualidade da internet for ruim, tiver uma taxa de upload baixa ou tiver algum gargalo de rede, esse tempo de envio é maior.


## Site Suporte

O acesso é no link https://nfstock.alterdata.com.br/suporte com seu usuário e senhas de rede (que utiliza na Intranet e e-mail): Este site foi criado para dar aquela “mãozinha” para o analista no momento do atendimento, possibilitando recursos como a situação do certificado digital do cliente no site, se a nota já consta no site ou não, e outras coisas mais. Vamos dar uma olhada nas 4 abas.


## Clientes

A primeira opção é Listar clientes que serve para localizar qualquer empresa que tem a custódia do produto. Faça a busca utilizando campos como o código CRM ou CNPJ:Veja ao lado da empresa dois botões: • Selecionar: Veja as informações configuradas no site do NF-Stock da empresa, como tempo de armazenamento de cada documento fiscal, e os dados do certificado digital como a validade. ◦ Pensou o mesmo que eu? Se as notas não estiverem mais sendo baixadas no site do NF-Stock pelo certificado A1, é só olhar neste campo se a validade foi ultrapassada. Assim não é necessário pegar remoto no cliente só para ver os dados configurados no site. • Mais ações ◦ Não está sob investigação:Ao clicar na opção, a empresa do cliente ganha a marcaçãoEstá sob investigação (ou se já estiver marcada, ao clicar a opção é desmarcada). Este processo ocorre quando a empresa está sob fiscalização de algum órgão do governo, e esta marcação bloqueia a exclusão das notas até o término da fiscalização. Atenção! Se algum cliente solicitar esse recurso, acione a supervisão para receber a autorização para esta mudança. ◦ Reenviar senha: Quando o cliente começa a trabalhar com o NF-Stock e diz que não recebeu a senha de acesso por e-mail, ou reclama que o botão de redefinir senha no site não está funcionando. Assim forçamos o envio do e- mail para o cliente redefinir a senha (chegará o e-mail naquele que estiver cadastrado em Visualizar); ◦ Listar clientes: Usado quando a empresa é escritório contábil, para exibir as empresas que são contabilizadas por ela; ◦ Auditoria: Veja um relatório de login no sistema com os dados da empresa, visualizando por exemplo, quando a empresa acessou o NF-Stock pela última vez. No Menu Bilhetagem / Clientes acima do plano, ao clicar em Baixar, será baixado uma planilha com as empresas que excederam o volume de armazenamento no NF- Stock (de 45.000 notas): Note que o valor da licença é cobrada por essa quantidade de armazenamento, e cada vez que ela é ultrapassada em 100% o adicional é cobrado na mensalidade. E na aba Atrasados Crawlerveja os dados do certificado digital, similares ao que vimos no botão Visualizar.


## Administradores

Veja todos os colaboradores da Alterdata que são administradores no NF-Stock, e as permissões definidas para cada um deles:


## Buscar

Procure aqui qualquer tipo de documento fiscal existente na base do NF-Stock. Dúvida! Mas por que isso é útil? Já pegou aquele atendimento em que o cliente diz: “A nota não está aparecendo no site do NF-Stock!”? O que fazer neste caso? Uma das alternativas é acessar a aba Buscar e tentar localizar o documento do cliente, para ver se já existe na base do NF- Stock. Desse modo, você constata se a nota ainda não foi armazenada no site, ou se o cliente não está buscando de modo correto, para saber de que modo conduzir o atendimento: Veja acima que há campos para descobrir como a nota foi importada (coluna origem), as datas de emissão e importação, e ainda pode baixar essa nota.


## Log

Veja o Log de alterações dos clientesdo escritório de contabilidade, como exclusões. Para nós do Bimer essa aba não influencia, apenas para o PACK.


## Envio por E-mail

A nota pode ser enviada para o NF-Stock via e-mail. Isso ocorre quando uma nota no formato XML é enviada em anexo por e-mail, e na cópia é inserido o endereço nf@nfstock.com.br. Exemplo: peço ao fornecedor para mandar o XML para o e-mail da minha empresa e na cópia inserir o endereço nf@nfstock.com.br.


## Que tal mais algumas


## dicas?

1 O Atendimento é prestado pelosuporte Bimer quando o cliente não é escritório de contabilidade, e possui o sistema Bimer ERP em conjunto com o NF-Stock. Nestas condições o analista atende todo o sistema NF-Stock. 1.1 Se o cliente for escritório de contabilidade e não possuir o Bimer ERP, o atendimento é transferido para o Suporte PACK. 1.2 Estas regras são do suporte Matriz e podem ser flexibilizadas de acordo com cada representação. 2 Asnotas de entradadisponibilizadas na SEFAZ não têm um padrão de aparecer simultaneamenteno site do NF-Stock após a importação. Por isso, pedimos ao cliente um prazo mínimo de 24 horas após o envio do documento para que ele possa consultá-lo. 2.1 O NF-Stock possui integração com a SEFAZ Nacional e dos seguintes estados AM, GO, RS e SE; 2.2 Uma empresa que esteja em dia com as requisições e com suas operações ativas, baixa as notas com até 90 dias retroativos; 2.3 Quando uma empresa que está há mais de 60 dias sem baixar notas, e começar hoje a baixar, ela não conseguirá baixar nada retroativo. Somente baixará documentos a partir da data de cadastro do certificado. 3 As notas importadas automaticamente pelo certificado digital (vinculado no site ou NF-Stock Monitor são): 3.1 55 (NF-e) de entrada; 3.2 57 (CT-e) para tomador ou destinatário do frete; 3.3 67 (CTe-OS) para tomador ou destinatário do frete; 3.4 NFSe para municípios com baixa por certificado; 3.5 59 (CF-e) e NFC-e (65), não baixamos via certificado, exceto para a SEFAZ que possui integração com o NF-Stock. 4 Alguns termos são usados para falar do certificado digital: 4.1 A1:arquivo eletrônico no formato pfx, não está disponível em formato físico, pode ser usado em várias máquinas simultaneamente. Tem validade de 1 ano. 4.2 A3: dispositivo físico. É utilizado em apenas uma máquina por vez, pois necessita está plugado no computador via USB. Tem validade de 3 anos. Pode ser um cartão que é conectado numa leitora digital. 4.2.1 Token: é o certificado A3 em formato de pendrive, tendo todas as especificações explicadas acima. 5 O NF-Stock guarda notas emitidas em contingência apenas se ela realmente for autorizada no ambiente de Contingência. Se a nota foi emitida em contingência por falha de comunicação, ela não é armazenada no NF-Stock.


## Modos de enviar a nota

Veja abaixo um resumo das possibilidades de enviar a nota para o site, como aprendemos: 1 Faturamento, PDV e Spice: após a autorização da nota pelo NF-Easy; 2 Nota de entrada: envio do XML pela tarefa GEEnviaXMLEntradaParaNFStock; 3 No Site do NF-Stock; 3.1 Fazer upload pela opção Enviar notas; 3.2 Certificado A1; 3.3 Buscar notas pela Chave de acesso; 3.4 Controle NFS-e para importar notas de serviço. 4 Aplicativo NF-Stock Monitor; E-mail com a nota, selecionando na cópia: nf@nfstock.com.br
