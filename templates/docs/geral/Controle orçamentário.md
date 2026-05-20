# Controle Orçamentário — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Instalação e login](#instalacao-e-login)
- [Tela inicial](#tela-inicial)
- [Aba principal](#aba-principal)
- [Aba Dashboard](#aba-dashboard)
- [Configurações](#configuracoes)
- [Rotina](#rotina)
- [Aba Orçamento](#aba-orcamento)
- [Incluindo um orçamento](#incluindo-um-orcamento)
  - [Aba Orçamento / botão Liberação de](#aba-orcamento-botao-liberacao-de)
  - [Pedidos](#pedidos)
- [Orçamento / aba Lançamentos](#orcamento-aba-lancamentos)
  - [Inclusão de lançamentos de](#inclusao-de-lancamentos-de)
  - [orçamento](#orcamento)
- [Orçamento / aba Cenários](#orcamento-aba-cenarios)
  - [Cadastro de Cenário](#cadastro-de-cenario)
  - [Listagem de cenários](#listagem-de-cenarios)
  - [Resultado](#resultado)
  - [Resultados por período](#resultados-por-periodo)
- [Dashboard](#dashboard)
  - [Criando um Dashboard](#criando-um-dashboard)
  - [Cadastrando Gráficos](#cadastrando-graficos)
  - [Cadastro de Séries](#cadastro-de-series)
  - [Visualizar gráficos](#visualizar-graficos)
- [Controle de acesso](#controle-de-acesso)
- [Auditoria do sistema](#auditoria-do-sistema)
- [Backup](#backup)

---


## Introdução

O módulo Controle Orçamentário foi feito para que o cliente tenha o controle de gastos de cada natureza de lançamento de sua empresa. Ou seja, ele consegue controlar quanto de orçamento disponível a empresa possui para cada natureza de lançamento ou centro de custo, fazendo a comparação também com suas receitas. O que é um balancete orçamentário? É um importante recurso de auxílio à tomada de decisões, pois ele permite realizar uma projeção para a contabilidade, refletindo situações de lucro ou prejuízo. Esta é uma ferramenta gerencial que permite controlar se o que foi planejado no início do período está realmente ocorrendo. Através do balancete orçamentário o cliente notará distorções do planejado e tomará medidas para que a empresa atinja as metas estabelecidas no planejamento estratégico da empresa. Exemplo ¹: em uma empresa, a cada setor é dado um orçamento. Como exemplo, o setor de infraestrutura tem o orçamento de R$ 10.000 para gastar a cada mês. No mês de janeiro, o setor de infra gastou R$ 7.345,00 e se manteve dentro do orçamento. Porém, no mês de fevereiro chegou a R$ 12.000 de gastos, ultrapassando o orçamento. O módulo orçamentário permite diferenciar entre o valor do orçamento e o valor gasto em cada mês. Exemplo ²: o diretor quer ter um controle sobre os gastos e ganhos para estimar o crescimento da empresa, saber em que deve investir mais e quais setores que estão prejudicando os fundos da empresa. Ao utilizar o sistema, ele poderá obter um gráfico estas informações e, a partir deste ponto, tomar as devidas decisões. Observação: este módulo não vem nos pacotes de instalação padrão do Bimer. Para instalá-lo, no caso de colaboradores da Matriz, deverá pegar o seu instalador em: M:\ BIMER\Projetos Específicos\Controle Orçamentário <versão>.exe. Já no caso de colaboradores de filial ou representação, deverão solicitar ao suporte canais.


## Instalação e login

A instalação do módulo é realizada com o instalador, assim como os outros módulos do Bimer Desktop. Execute o instalador, avance e confirme o diretório no qual será instalado. Na tela seguinte, será apresentada a opção de criar um atalho na área de trabalho, mas não obrigatória a marcação. Em seguida, clique em “Instalar” e conclua. Após a instalação, basta logar no módulo usando o mesmo usuário e senha de acesso ao Bimer, bem como a conexão com a base.


## Tela inicial


## Aba principal

• Orçamento – Esta opção abre a área de criação dos orçamentos da empresa; • Configurador geral – Exibe a tela de configurações do módulo, no qual apontaremos as árvores das naturezas que serão utilizadas nos lançamentos e outras configurações opcionais; • Auditoria – Abre os registros da auditoria do sistema contendo os cancelamentos, erros, liberação, inclusões, etc.; • Backup – Permite fazer os backups dos orçamentos criados; • Controle de acesso – Área para concessão das permissões dos usuários no sistema Controle orçamentário; • Enviar opinião – Utilizado para que o usuário envie sugestões sobre o sistema; • Ajuda – Redireciona para a área de documentação do Centro de Aprendizagem.


## Aba Dashboard

• Dashboard – Área para definição dos dados que serão exibidos nos gráficos; • Gráficos – Exibe as informações de acordo com os dashboards criados.


## Configurações

Para utilizar o sistema, é necessário configurar as classificações de natureza de lançamento e de centro de custo. Caso exista alguma classificação nas naturezas de lançamento ou centro de custo repetidas, o sistema exibe uma mensagem solicitando o ajuste. Em seguida, no Controle orçamentário, acesse a opção Configurador Geral / Geral. Na área de Naturezas de lançamento sintéticas informe as naturezas de receita e despesas que serão utilizadas pelo Controle Orçamentário. Assim, serão exibidas somente as naturezas analíticas provenientes da árvore de naturezas sintéticas no momento da inclusão de um novo lançamento. Na opção Gerar títulos de previsão no Contas a pagar ao liberar os pedidos de compra, os registros de pagamento que não estejam configurados como pagamento antecipado, serão gerados no Contas a pagar como título de previsão. Caso esta configuração esteja desmarcada, somente serão gerados no Contas a pagar os registros de pagamento configurados como pagamento antecipado. Já para utilizar o recurso Autorizador gerencial por orçamento é necessária as seguintes configurações: • Gerar títulos de previsão para pedidos de compra em aberto (liberado) no Configurador / Financeiro / Opções / aba Complementar; • “Aguardando" ou "Em digitação", no Configurador / Estoque / Opções / Cotação/ status inicial do pedido de compra; • Trabalhar com autorizador gerencial para o aplicativo Pedido de Compras, no Configurador / Estoque / Opções / Compras / Geral; • Possui permissão para autorizar títulos a pagar que ultrapassaram o limite do orçamento no Cadastro do usuário / Configurações do usuário / Autorizador gerencial / Contas a pagar. Feita as configurações, feche o Controle Orçamentário para que as opções Título a pagar e Pedido de compra sejam habilitadas. Dica! Para saber sobre as opções do recurso de Autorizador gerencial por orçamento, clique aqui. EmResultado temos a opção “Considerar título que não tenha lançamento no orçamento”. Caso esteja marcada, o título criado em contas a pagar ou contas a receber, que for vinculado a uma natureza de lançamento pertencente as árvores de receitas ou despesas do sistema, mesmo que não tenha lançamento no orçamento, será exibido no resultado. A configuração, permite a seleção de títulos com status “Aberto”, “baixado” ou “Ambos”. Observação: quando as opções “Título aberto” e “Título baixado”, estiverem desmarcadas, só serão exibidos no resultado, os títulos que possuírem lançamentos do orçamento. A opção “Descrição das colunas do resultado” permite ao usuário alterar as descrições: orçado, realizado, pendente e diferença. Orçado Valor que se espera apurar, lançado no orçamento. Realizado Valor efetivado, obtido do financeiro Bimer (efetivamente o que foi pago/recebido). Pendente Valor orçado – Valor realizado, obtendo assim o valor pendente que equivale aos títulos em “Aberto”. Ex.: orçado 100, realizado 80, pendente= 20 Diferença Valor orçado – valor realizado E, por fim, a opção “Considerar título com baixa sem numerário” considera todos os tipos de baixa de títulos (com numerário e sem numerário) na coluna “Realizado” do resultado.


## Rotina


## Aba Orçamento


## Incluindo um orçamento

Para cadastrar um orçamento, clique no botão Incluir e escolha entre: • Orçamento comum: Orçamento de gerenciamento interno do módulo Controle Orçamentário. • Orçamento – Autorizador Gerencial: Além do gerenciamento no módulo Controle Orçamentário, será usado na rotina de Autorizador Gerencial por Orçamento Após abrirá uma janela com as opções: Quadro “Período do exercício” insira a data inicial e final que será utilizado pelo orçamento. No campo “Lançamentos”, “com periodicidade”, informe a incidência de lançamentos dentro do período (anual, mensal, trimestral, etc.). Ao lado mostra o usuário do cadastro do orçamento e o que alterou pela última vez. Já no campo “Descrição” informe a descrição do orçamento. No “Tipo de orçamento” informe o tipo da movimentação que orçamento terá: receita, despesas ou receitas e despesas. Em “Forma de Lançamento” é muito importante que usuário selecione correspondente o tipo desejado, havendo as seguintes opções: “Apenas Natureza de lançamento”, “Natureza de lançamento desmembrando por centro de custo” e “Orçamento personalizado”. Em seguida, selecione a empresa e os usuários que poderão visualizar o orçamento. O campo “Responsáveis” e “Observação” são campos livres. Ao gravar o orçamento você pode editar, excluir ou duplicar. Observação: a partir da versão 10.00.10.00 do Controle Orçamentário, é possível adicionar mais de uma empresa ao orçamento.


### Aba Orçamento / botão Liberação de


### Pedidos

Esta opção serve para efetuar a liberação dos pedidos de compra, sendo apenas um facilitador que altera o status do pedido de compra de “Aguardando” para “Aberto”. Para liberar o pedido na tela de Orçamentos, selecione um dos orçamentos criados para a empresa que gerou o pedido de compras e clique na opção “Liberação de pedidos”. É importante que o orçamento seja selecionado antes, caso contrário, o sistema não apresentará nenhum pedido. Na tela de filtro há os seguintes campos: 1.Fornecedor – Informe o fornecedor vinculado ao pedido de compra; 2.Período – Filtro do período de emissão dos pedidos de compra; Para liberar o pedido de compra, dê um duplo clique sobre ele ou clique em “Mostrar detalhes”. Assim, o sistema apresentará uma nova janela para efetuar a liberação do pedido de compra selecionado, bastando clicar em “Liberar”. No campo “Legendas” temos as opções “Deflação” e “Inflação”, que possuem como base o valor de custo anterior da mercadoria. Dessa forma, caso o valor atual seja menor que o anterior, o item fica na cor verde indicando a deflação; já se estiver mais caro o seu custo, ficará na cor vinho referente a inflação.


## Orçamento / aba Lançamentos

Nesta aba poderá incluir, editar e excluir os Lançamentos que são as informações que serão utilizadas no restante do módulo. Nela ficarão os Lançamentos dos orçamentos criados anteriormente. É importante lembrar que esta aba está diretamente ligada a aba “Orçamentos” e que as informações que serão apresentadas e inseridas nela, dependerá de qual orçamento foi selecionado na tela anterior antes de mudar de aba. 1.Expande ou recolhe níveis da natureza de lançamento: esta opção faz com que automaticamente na coluna “Natureza de lançamento” expanda/recolha os níveis sintético/analítico das naturezas de lançamento; 2.Opções de filtro: podemos filtrar por “Centro de Custo” e/ou “Natureza de lançamento”; 3.Incluir: podemos incluir um novo lançamento. Este lançamento é cadastrado de acordo com o orçamento selecionado na aba anterior; 4.Editar: podemos editar um lançamento já cadastrado. Somente conseguirá editar quando selecionar o registro na coluna do período do lançamento, em cima do valor; 5.Excluir: exclui o lançamento. Este botão somente ficará habilitado quando selecionar o registro na coluna do período do lançamento, em cima do valor; 6.Relatório: exibe o relatório com as naturezas de lançamento na tela e possibilita imprimi-las.


### Inclusão de lançamentos de


### orçamento

Depois de criar um orçamento, faremos os lançamentos deste. Para isso, deixe selecionado o orçamento em que deseja incluir lançamentos na aba “Orçamentos” e clique na aba “Lançamentos”. Agora, está na listagem de lançamentos do orçamento selecionado. Para incluir um lançamento, clique no botão “Incluir”. 1.Tipo: campo para selecionar o tipo do lançamento, apenas ficará habilitada a opção que foi selecionada no tipo do orçamento; 2.Valor orçado: campo com a informação do valor orçado do lançamento; 3.Considerar como abatimento: os valores dos lançamentos marcados como abatimento serão deduzidos na tela de lançamentos e de resultado, reduzindo assim o valor total dos lançamentos; 4.Período: campo para selecionar a data do lançamento; apenas apresentará as datas correspondentes ao período dos lançamentos, informado na criação do orçamento; 5.Selecionar por períodos: ao clicar no ícone, poderão ser selecionadas as fases para que seja criado um lançamento com as mesmas características para cada uma das opções de data listadas; 6.Replicar por todo o exercício: replicará o valor orçado para todas as datas do orçamento; 7.Natureza de lançamento: campo para selecionar a natureza de lançamento correspondente ao lançamento.


## Orçamento / aba Cenários

Esta aba é responsável por criar cenários que confrontarão as informações do módulo Controle Orçamentário com os títulos lançados no Bimer.


### Cadastro de Cenário

Ao clicarmos no ícone de “Incluir” na aba “Cenário”, o sistema apresentará a tela de cadastro de cenário com diversas opções de filtro conforme ilustrado abaixo: • Descrição – Identifica o cenário, ou seja, é o nome do cenário; • Datas a considerar na coluna “pendente” / “realizado” – Essa data será a data de referência utilizada para os títulos que estão cadastrados no ERP, que serão levados no resultado; • Colunas a Exibir na Tela de Resultados – Esta opção habilita a coluna selecionadas de cada período do exercício do orçamento. Veja abaixo cada uma de suas opções: ◦ Orçado – Coluna com o valor orçado do período; ◦ Realizado – Coluna com os valores baixados do ERP no período; ◦ Diferença – Coluna com a diferença entre o valor orçado e realizado do período; ◦ Diferença complementar/Diferença total complementar – O valor varia dependendo se for receita ou despesas: ▪ Para receita: (Realizado + Pendente) – Orçado ▪ Para despesa: Orçado - (Realizado + Pendente); ◦ Pendente – Coluna com os valores de título em aberto do período; ◦ Acumulado – Coluna com total resultante do período; ◦ Total Orçado – Coluna com o valor total orçado de todos os períodos. (Soma dos valores orçados); ◦ Total Realizado – Coluna com o valor total de títulos baixados de todos os períodos. (Soma dos valores baixados); ◦ Diferença Total – Coluna com o valor total de diferença de todos os períodos. (Soma de todos os valores de diferença); ◦ Saldo Final – Coluna com o resultado final do saldo. (Orçado Total – Realizado Total); Aba Usuários – Permite selecionar quais os usuários terão acesso ao cenário selecionado.


### Listagem de cenários

A listagem de cenários é feita na tela principal da aba “Cenários”. Por meio dela é possível filtrar esta listagem pela descrição dos cenários. Depois de informar a descrição de filtro que deseja, clique no botão “Filtrar” e o sistema buscará os cenários de acordo com o filtro que informado.


### Resultado

Para visualizar os resultados de acordo com um determinado cenário, na listagem de orçamentos da aba “Orçamentos”, selecione o orçamento que deseja ver os resultados. Depois, na listagem de cenários da aba “Cenários”, selecione o cenário que usará para ver os resultados e clique no botão Resultados. O sistema realizará os cálculos e exibirá os resultados em seguida. Veja que na tela aparece cada mês com a informação: orçado, realizado e diferença. “Orçado” é o valor do orçamento que foi criado anteriormente. Já o “Realizado” se refere aos valores dos títulos do Bimer com os status que foram marcados na criação do cenário. A “Diferença” é a diferença entre o valor orçado e o realizado.


### Resultados por período

Caso deseje os resultados de acordo com um determinado cenário, e também, selecionar quais períodos serão apresentados, na listagem de orçamentos da aba “Orçamentos”, selecione o orçamento que deseja ver os resultados. Depois, na listagem de cenários da aba “Cenários”, selecione o cenário que usará para ver os resultados, marque o campo “Selecionar períodos a serem exibidos no resultado”, será apresentada a tela de seleção de períodos: Selecione os períodos a serem exibidos e clique no botão “Resultados”.


## Dashboard

Em Dashboard, poderá criar um cenário que possuirá as informações para gerar um relatório em formato de gráfico para ilustrar o confronto das informações de título do Bimer com os lançamentos de orçamento do Controle Orçamentário.


### Criando um Dashboard

Para criar um Dashboard, clique no botão “Incluir”. • Descrição – Nome do Dashboard; • Gráficos – Aqui são informados os gráficos que irão compor o Dashboard. O cadastro de gráficos será descrito a seguir; • Usuários – Permite informar os usuários que têm acesso ao Dashboard. Se não for informado nenhum usuário, todos terão acesso ao Dashboard.


### Cadastrando Gráficos

Para conseguirmos gerar um gráfico do Dashboard, confrontando as informações do ERP e do módulo Orçamentário, será necessário efetuar alguns cadastros dentro do Dashboard, para que seja possível apresentar os resultados de acordo com o gráfico esperado. 1.Descrição – Descrição do gráfico que aparecerá no cadastro de dashboard; 2.Orçamento – Campo para informar o orçamento que será utilizado para demonstrar no gráfico; 3.Tipo de Gráfico – Campo para informar qual será o tipo do gráfico. Dependendo de qual opção for selecionada, o sistema alterará algumas configurações na inclusão da “Série”; 4.Área – Essa configuração serve para marcar o local em que o gráfico configurado será mostrado no dashboard; 5.Períodos – Campo para selecionar quais períodos serão apresentados no gráfico do dashboard; 6.Séries – Nesse campo será necessário cadastrar todas as naturezas e situações que deseja que sejam apresentados nos gráficos. Dependendo do tipo gráfico selecionado, o sistema apresentará algumas configurações diferentes na inclusão da série. O cadastro de série será visto a seguir; 7.Formato – Campo para informar como será a apresentação do gráfico. Dependendo do “Tipo de Gráfico”, o sistema poderá habilitar formatos diferentes.


### Cadastro de Séries

Ao clicar no ícone para incluir a série, o sistema abrirá uma das seguintes janelas, dependendo de qual tipo de gráfico for selecionado. 1.Nome – Descrição que será apresentado dentro do cadastro de gráfico; 2.Natureza de Lançamento – Natureza de lançamento que será apresentada no gráfico; 3.Centro de Custo – Centro de custo que será apresentado no gráfico, caso a natureza utilize centro de custo; 4.Apurar – Tipo de movimento do lançamento que será apresentado; 5.Comparar – Nesse campo, será necessário selecionar qual informação referente a natureza de lançamento que será apresentada no gráfico. Para gráficos do tipo “setorial”, será possível selecionar apenas uma opção. Já para gráficos do tipo “evolutivo”, o sistema permite que seja selecionado mais de um tipo de comparação.


### Visualizar gráficos

Para visualizar o gráfico, vá à tela principal do dashboard, selecione a opção “Gráfico” e o dashboard desejado.


## Controle de acesso

O sistema Controle Orçamentário possui um recurso de controle de acesso de usuários que permite que você limite as permissões de acesso aos módulos do sistema para um determinado usuário. Esse formulário só pode ser aberto por usuários configurados como “Administrador” dentro do Controle Orçamentário. Sendo assim, para mudar as permissões dos usuários já cadastrados no Bimer, siga os seguintes passos: • Na tela principal, clique em “Controle de Acesso”; • No formulário do módulo, o usuário administrador deverá selecionar um usuário que deseja conceder ou revogar permissões. Para isto, basta clicar sobre o login do usuário na lista e clicar em “Editar”. Após selecionar o usuário, o sistema listará todos os módulos e recursos do sistema com as permissões de acesso do usuário neles. Modifique as permissões conforme desejar e clique no botão “Gravar” para salvar as modificações realizadas.


## Auditoria do sistema

O objetivo da auditoria é disponibilizar ao usuário administrador detalhes sobre as operações realizadas no sistema e informações, como: usuário, data, entre outras. A auditoria no Controle Orçamentário funciona da mesma forma que a auditoria do Bimer Desktop. 1.Categorias – Filtra por quais categorias de dados da auditoria será considerado; 2.Período de modificações – Delimita o período o qual as operações foram realizadas; 3.Pesquisar por trecho – Descrição da operação que deve aparecer na auditoria; 4.Usuários – Filtra os usuários que devem aparecer na auditoria; 5.Filtrar – Ao clicar neste botão, será realizado o filtro e direcionado para outra tela mostrada a seguir. Ao realizar o filtro, será mostrado a tela abaixo com os registros da auditoria e, na parte inferior, os detalhes do registro selecionado. É possível imprimir ou visualizar os logs mostrados na tela.


## Backup

Caso deseje ter uma segurança, poderá realizar o backup dos orçamentos. Para isso, na aba “Gerar Backup”, deverá informar no campo “Orçamento” qual dos orçamentos deseja realizar o backup e, em seguida, no campo “Nome” deverá dar um nome para o backup e clicar em “Gerar Backup”. Caso queira restaurar um backup, deverá ir na aba “Restaurar Backup”. No campo “Orçamento” informar qual dos orçamentos cadastrados deseja restaurar. No quadro “Backups” deverá selecionar qual backup deseja restaurar e clicar em “Restaurar”. Caso queira se desfazer de algum backup salvo, basta clicar em “Excluir”. É importante ressaltar que se o orçamento for apagado do sistema, não há como voltar as informações por meio do backup. Portanto, o backup só é usado para realizar uma restauração enquanto o orçamento existir no módulo Controle Orçamentário.
