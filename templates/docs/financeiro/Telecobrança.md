# Telecobrança — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Sumário](#sumário)
- [Introdução](#introdução)
- [Configurações](#configurações)
- [Tipos de atendimento](#tipos-de-atendimento)
- [Configurador Bimer](#configurador-bimer)
- [Situação Administrativa](#situação-administrativa)
- [Utilizando o Telecobrança](#utilizando-o-telecobrança)
- [Atualizar cobranças](#atualizar-cobranças)
- [Nova cobrança](#nova-cobrança)
- [Detalhamento da cobrança](#detalhamento-da-cobrança)
- [Renegociar cobrança](#renegociar-cobrança)
- [Pessoas](#pessoas)
- [Atendimento](#atendimento)
- [Seleção de cobranças](#seleção-de-cobranças)
- [Montagem de cenário](#montagem-de-cenário)
- [Baixa com depósito não](#baixa-com-depósito-não)
- [identificado](#identificado)
- [Funcionamento da rotina](#funcionamento-da-rotina)
- [Configurações](#configurações)
- [Tipo de Baixa](#tipo-de-baixa)
- [Natureza de lançamento](#natureza-de-lançamento)
- [Configurações específicas para](#configurações-específicas-para)
- [depósito não identificado](#depósito-não-identificado)
- [Depósito não identificado](#depósito-não-identificado)
- [Dicas](#dicas)

---

## Sumário

Introdução................................................................................................................3 Configurações..........................................................................................................4 Tipos de atendimento..................................................................................................4 Configurador Bimer......................................................................................................5 Situação Administrativa...............................................................................................7 Utilizando o Telecobrança....................................................................................10 Atualizar cobranças....................................................................................................11 Nova cobrança...........................................................................................................14 Detalhamento da cobrança........................................................................................16 Renegociar cobrança..................................................................................................19 Pessoas...................................................................................................................... 21 Atendimento..............................................................................................................22 Seleção de cobranças................................................................................................23 Montagem de cenário................................................................................................24 Baixa com depósito não identificado...................................................................28 Funcionamento da rotina...........................................................................................28 Configurações............................................................................................................ 29 Tipo de Baixa........................................................................................................29 Natureza de lançamento......................................................................................29 Configurações específicas para depósito não identificado...................................30 Depósito não identificado...........................................................................................32 Dicas......................................................................................................................42

## Introdução

A vida da galera do financeiro não é nada fácil. Imagine ficar no pé daqueles clientes que esquecem de pagar seus títulos ou que até  querem dar calote na empresa. Mas como o responsável pelas cobranças pode: • Buscar os títulos vencidos de uma ou várias pessoas; • Realizar filtros por meio de campos como centro de responsabilidade, empresa e características de pessoas como inadimplentes. • Ver as informações para entrar em contato como telefone e e-mail; • Dar pareceres após tentar contatar o cliente; O legal é que os títulos são agrupados por cliente que está devendo. E se o cliente quiser quitar tudo que está devendo com a empresa, o usuário do telecobrança pode simplesmente fazer renegociação dos títulos. Dúvida! Mas e como funciona no Bimer para configurar? Venha comigo e descubra!

## Configurações

## Tipos de atendimento

Crie  dois  tipos  de  atendimento,  no  Configurador  Bimer  /  Geral  /  Tipos  de atendimento:

1. Tipo de atendimento sintético que fará do atendimento uma cobrança:
2. Tipo de atendimento analítico que será utilizado para geração automática de
cobranças: Repare que a classificação que coloquei nos cadastros está seguindo o padrão sintético (1) e analítico (1.1) de forma organizada. Com a numeração assim, o Tipo de atendimento analítico está vinculado ao sintético. Se o meu analítico tivesse  por  exemplo  a  classificação  2.1,  as  cobranças  não  apareceriam  no Telecobrança.

## Configurador Bimer

Acesse o Configurador Bimer / CRM / Opções / Telecobrança, vincule os tipos de atendimentos cadastrados: É importante que os tipos de atendimentos sejam informados corretamente, pois uma vez informados os tipos de atendimentos e gerada a cobrança, os campos deixam de ser editáveis. Descrição dos demais campos e opções da tela:

#### •

Usuário que será utilizado para a delegação do atendimento da geração automática de cobranças –  caso informe um usuário, todas as cobranças serão geradas e delegadas para este usuário, para que ele as monitore. Se não preencher este campo, as cobranças serão geradas sem delegação, ou seja, não serão direcionadas para nenhum usuário específico; • Usuário que será utilizado para o parecer do atendimento da geração automática  de  cobranças  –  caso  informe  um  usuário,  os  pareceres  das cobranças geradas serão dados em nome deste informado. Se não preencher este campo, o sistema utiliza o usuário logado como usuário do parecer; • Centro  de  responsabilidade  (analítico)  que  será  utilizado  para encerramento  de  cobranças  – não  é  necessário  o  preenchimento  deste campo, pois, atualmente, a cobrança é encerrada automaticamente quando o título é baixado, e é inserido um parecer padrão informando que o atendimento está sendo encerrado devido a baixa do título; • Utilizar o controle de acesso usuário x empresa – marcando esta opção, os usuários do telecobrança só terão acesso as cobranças de empresas as quais estejam vinculados; • Gerar cobrança por empresa  – com esta opção marcada, caso haja títulos vencidos  a  receber  de  uma  mesma  pessoa,  sendo  que  para  empresas diferentes, o sistema gerará as cobranças separadas por empresa; • Dias em atraso para a criação do atendimento de cobrança – informe após quantos dias em atraso de um título será gerada a cobrança referente a este.

## Situação Administrativa

Para entender para que serve esta tabela vou te contar duas histórias em que você faz parte do departamento de cobrança da empresa: Primeira:  Dando uma olhada na carteira de clientes da empresa, você viu que o cliente Phoenix Motors tem vários títulos em atraso, dai você precisa cobrar o cliente esta semana para que ele pague o que deve. Segunda: O cliente Mineiros do Sul entrou em contato muito insatisfeito com o serviço que você está fornecendo, já é a quinta vez só neste mês que ele entra em contato para reclamar, e até ameaça deixar de contratar seus serviços. Para não perder este cliente, é preciso analisar o que está acontecendo, mas não cobrará nada desse cara até resolver a situação. A empresa continua prestando o serviço, mas suspende a cobrança dos títulos temporariamente. O  que  essas  duas  histórias  têm  em  comum?  Nas  duas  utilizo  situação administrativa, tanto para cobrar um cliente, como para suspender ou paralisar uma cobrança. Para  cadastrar  acesse  Configurador  Bimer  /  Financeiro  /  Outros  Cadastros  / Situação administrativa: Dúvida! O que marco ao cadastrar a tabela para utilizar no módulo Telecobrança?

#### ➢Tipo: Serve para criar um plano de Situação Administrativa, organizando entre

Sintéticas (apenas para organizar e agrupar) e Analíticas (é o detalhamento da Sintética e será usada dentro dos títulos). Este campo trabalha em conjunto com a Classificação da situação. Abaixo tem um exemplo mas, você pode usar quantos níveis forem necessários: • 1 - A Receber (Sintética) • 1.01 - Cobrança Ativa (Analítica) • 1.02 - Cobrança Paralisada (Analítica)

#### ➢Entra  na  Cobrança:  Marcada  para  utilizar  o  título  a  Receber  no  módulo

Telecobrança,  caso  use  uma  situação  sem  essa  marcação  no  título, logicamente o mesmo não aparece no Telecobrança. Em um exemplo de uma cobrança Ativa eu marco esta opção, já no caso de uma cobrança Suspensa ou Paralisada não marco.

#### ➢Permite Baixar o título: Marque esta opção para que os títulos da cobrança

sejam baixados. Quando não está marcada, impede que alguém baixe um título por engano. Veja aqui embaixo a situação administrativa vinculada no título a receber: Além do que vimos até aqui, a situação tem função de: ➢Criar status ou classificações para separar e identificar rapidamente os títulos e a situação deles; ➢Tomar decisões rápidas como realizar ou não a cobrança de um cliente; ➢Agrupamentos e filtros do gestor financeiro para identificar o volume de títulos e qual a situação de cada um. • Exemplo: Neste mês há 100 títulos a receber em aberto dos quais 50 estão em análise pelo setor financeiro, e os outros 50 estão com cobrança ativa, aguardando o cliente realizar o pagamento. #Se liga: Se um título estiver em atraso, mesmo sem situação administrativa, ele já aparece no módulo  Telecobrança.  Então,  nestes  casos,  a  adição  da  situação  serve  facilitar  o controle dos títulos em atraso, não sendo requisito no título para ir à Telecobrança. Se quiser saber mais sobre a utilização da situação administrativa no Bimer clique no artigo aqui em baixo: https://ajuda.alterdata.com.br/bimerbase/financeiro/situacao-administrativa

## Utilizando o Telecobrança

Antes de entrarmos a fundo no módulo Telecobrança, é importante entender que o intuito do módulo  não é auxiliar em rotinas como a baixa ou a modificação dos títulos. Como o nome vem dizendo, o módulo auxilia na parte da cobrança, o que envolve: • Entrar em contato com o cliente para cobrar; • Renegociar os títulos; • Remanejar para outra pessoa na empresa realizar a cobrança. Após fazer a cobrança, normalmente é usado outro módulo para fazer as rotinas posteriores, como o BI Financeiro e o próprio Contas a Receber. Veja comigo agora os recursos presentes no módulo Telecobrança, vamos iniciar direto na rotina.

## Atualizar cobranças

O primeiro passo é gerar as cobranças através do botão  Atualizar cobranças. Ao clicar neste botão, o sistema verifica todos os títulos vencidos no contas a receber e os exibe para que possa ser iniciada a cobrança. Caso tenha algum usuário informado no campo  Usuário que será utilizado para geração  automática  de  cobranças no  Configurador  Bimer  /  CRM  /  Opções  / Telecobrança,  todas  as  cobranças  serão  geradas  para  este  usuário  efetuar  a cobrança. É possível configurar o sistema para fazer a atualização automática das cobranças através do Gerente Eletrônica (GEAgente), conforme orientações a seguir:

1. Crie uma tarefa para atualização automática no Configurador Bimer / Geral /
Tarefas.  Na  opção  sistemas  selecione  o  84  -  Atualizador  de  Cobranças (GeAtualizaCobranca.exe);

2. Crie  o  agendamento  da  tarefa  no  Configurador  Bimer  /  Geral  /  Tarefas
Agendadas. 2.1. Selecione a tarefa criada no passo 01; 2.2. Defina  a  periodicidade  da  execução  da  tarefa.  Normalmente  é programado para ser executada com Ocorrência Diária, a Cada 01 dia. 2.3. Defina  o  horário  para  execução  da  tarefa.  É  recomendado  que  se programe para que a execução ocorra fora do horário de expediente. Assim, caso a base de dados seja muito grande, não afetará o desempenho do sistema. 2.4. Defina a data de início do agendamento. Geralmente é marcada a opção Sem data final.

3. Para que tarefa seja executada corretamente, será necessário que o GeAgente
esteja ativo, em geral no servidor. Após clicar em atualizar cobranças, elas são exibidas para que o usuário realize as ligações de cobrança. Caso não apareça nenhuma cobrança, deverá ser verificado:

1. Se as cobranças foram geradas para o usuário que está informado no filtro.
Neste caso, retire o login informado no campo usuário da tela de filtros e clique em resultado. Desta forma aparecerão as cobranças de todos os usuários. Na maioria das empresas que utilizam o Telecobrança, as cobranças são geradas sem  delegação,  ou  seja,  sem  um  usuário  específico.  Com  isso,  a  pessoa responsável pelo setor de cobrança, gera as cobranças e as delega para os usuários do setor de acordo com o critério utilizado pela empresa;

2. Se há títulos vencidos no contas a receber e se estes títulos não estão com tipo
de cobrança Descontado ou mesmo com a situação administrativa configurada para  não  entrar  na  cobrança,  isso  porque  não  é  possível  cobrar  títulos descontados ou que não estejam configurados para entrar na cobrança;

3. Se o tipo de atendimento analítico está contido no tipo de atendimento sintético
informado no Configurador Bimer / CRM / Opções / Telecobrança.

## Nova cobrança

Como acabamos de ver que o usuário pode usar o botão Atualizar Cobranças ou a tarefa agendada para criar as cobranças de um modo simples e rápido. Além disso, temos o botão  Nova Cobrança  que dá a possibilidade de criar, de modo manual e personalizado, as cobranças. A opção “Nova cobrança” será usada como um Plano C. Após clicar no botão relacionado, informe a pessoa da cobrança, preencha os dados de Tipo de atendimento, tipo de contato, data da próxima cobrança, usuário de próxima cobrança e Pessoa de contato. No quadro Títulos vencidos em aberto veja aqueles títulos que ainda não estão em nenhuma cobrança, mas que já venceram. O  botão  Títulos  a  vencer  permite  adicionar  títulos  que  ainda  não  venceram  na cobrança atual: A cobrança aparece na tela principal e você pode ver os detalhes clicando duas vezes sobre ela ou em Detalhamento da cobrança.

## Detalhamento da cobrança

Neste botão, visualize os títulos que formam o total da cobrança. Além disso, use os botões que aparecem no topo do Detalhamento da cobrança: • Fatores críticos: Veja os atendimentos em aberto de cobrança e seu histórico. • Imprimir boleto: Selecione um dos títulos e gere o boleto para ele, informando a conta bancária e tipo de cobrança: ◦ Olha ali o boleto impresso: • Baixar título sem numerário: Aqui você tem a possibilidade de remover um título da cobrança, em casos nos quais o valor não será mais cobrado do cliente, como em cancelamentos ou erros ao gerar o título. Para isto, informe um tipo de baixa que não gera numerário e confirme. • Você  ainda  pode  usar  a  Linha  do  tempo,  editar  a  observação  do  título (inserindo até dados relacionados à cobrança), Renegociar a cobrança e ver o demonstrativo da renegociação que foi gerado (comprovante).

## Renegociar cobrança

Se entrou em contato e o cliente quer acertar sua dívida com a empresa, use o botão Renegociar Cobrança, pois possivelmente os títulos serão pagos em novas parcelas com acréscimo de juros e multa. Ao clicar neste botão, os títulos que estão em aberto com o cliente são exibidos. Algo importante é que não há como deletar as cobranças, uma vez que elas acompanham a vida útil dos títulos. Porém, pode-se ajustar usando a renegociação, em que você consegue gerar descontos, acréscimos, multas e transformar vários títulos em apenas uma cobrança, por exemplo (para o cliente acertar tudo que está devendo). Após avançar e ajustar os valores, escolha o novo prazo de renegociação e conclua: Voltando  na  tela  principal,  após  Atualizar  os  filtros  os  títulos  renegociados  não aparecem mais, pois foram renegociados para datas futuras (e seus títulos baixados sem  numerário).  Caso  o  cliente  não  faça  o  pagamento  dos  títulos,  estes  serão carregados numa nova cobrança futuramente. O botão  Proposta de Renegociação  é usado quando o usuário clica em  Salvar Renegociação  na tela de  Renegociar cobrança.  Serve para enviar ao cliente a proposta, com as cobranças que serão ajustadas antes de efetuar a renegociação. O envio pode ser feito via e-mail ou gerando um PDF e enviando ao cliente. Se clicar em  Editar  /  Finalizar  proposta  você  retorna  para  a  tela  de  renegociação  para finalizar o processo: Se desejar conhecer um pouco mais da renegociação clique aqui.

## Pessoas

Já  com as  cobranças na tela, você pode entrar em contato com o cliente e dar pareceres nos atendimentos, registrando o que foi definido. Para saber as formas de contato com o cliente, selecione-o e clique em Dados da Pessoa. Caso haja muitas cobranças e você queira localizar apenas de um cliente específico, clique em Localização de pessoas.

## Atendimento

Para registrar o atendimento, utilize o botão  Parecer da tela principal ou da tela Histórico  da  cobrança.  No  botão  Histórico  de  cobrança, veja  histórico  do atendimento no qual o usuário pode ler todos os pareceres que foram dados no atendimento.

## Seleção de cobranças

Na tela principal do módulo de telecobrança haverá também a opção  Seleção de cobrança que permite imprimir os dados como data de abertura da cobrança, pessoa, número de dias em aberto dentre outras informações dos pareceres da cobrança. É possível enviar esses dados por e-mail, porém esse e-mail mesmo que configurado um arquivo HTML que possua variáveis de número e valor do título não será levado, tendo em vista que esse envio de e-mail é correspondente aos pareceres efetuados na cobrança. Ainda nesta tela é possível dar pareceres, visualizar o histórico da cobrança e o botão de confirmar serve para gravar o parecer efetuado. O  Parecer  nesta  tela  é  muito  útil  quando  precisar  remanejar  as  cobranças  já delegadas ou não delegadas para outro usuário, pois é só arrastar as cobranças, clicar em Parecer, preencher os dados e Confirmar.

## Montagem de cenário

O usuário pode criar diversos cenários devido ao grande número de opções presentes no Telecobrança. Clique em Alternar entre filtro e resultado para escolher: datas, usuários  de  cobrança,  data,  cobranças  abertas  ou  encerradas,  faixa  de  valores, característica de pessoa, entre outros. Os campos “Usuário de próximo contato” e “Usuário de contato interno” seguem o padrão dos módulos CRM e já trazem o usuário logado no módulo. A data utilizada é a atual,  porém  os  campos  mencionados  podem  ser  ajustados  para  visualizar  as cobranças de outros usuários ou datas futuras, por exemplo. Após fazer o cenário clique em Filtrar para ver o resultado. Falando na Tela de Resultado, você conta com os recursos: • Seleção  de  campos:  Remova  ou  insira  colunas  no  resultado  apresentado, eliminando dados que não serão utilizados, deixando uma análise mais limpa. • Legenda:  Entenda melhor as cores apresentadas para alertar sobre o status das cobranças. Veja também a descrição dos tipos de atendimentos utilizados. • Agrupamento de colunas:  Clique em  Painel de grupo  e arraste as colunas para  cima,  totalizando  e  separando  o  resultado,  de  acordo  com  o  critério escolhido. Não dê bobeira! Após montar cenário, utilize o botão de Salvar, pois, quando abrir o módulo futuramente, pode usar o mesmo cenário clicando no botão de  Recuperar cenário.

## Baixa com depósito não

## identificado

## Funcionamento da rotina

Imagine que você entregou um boleto a um cliente e ele acabou não pagando o boleto, mas, sim, fazendo um depósito direto para a sua conta bancária. Como você faria com aquele título já criado? Bem, pensando nisso é que foi criado o recurso de baixa com depósito não identificado. Com este recurso, será possível vincular um depósito sem uma pessoa com um título já criado. A rotina funciona da seguinte forma: você já tem um título para determinada pessoa criado. Quando fizer a importação do extrato bancário no Disponível e o sistema não identificar um título para conciliar com aquele movimento e identificar também que aquele movimento não está vinculado a uma pessoa, o Disponível criará um título sem pessoa referente àquele movimento. Feito isso, você fará um filtro no Telecobrança que te mostrará os títulos a receber em aberto e os depósitos não identificados. Dessa forma, você poderá vincular o título original com o depósito. Ao realizar o vínculo, o sistema baixará o título original sem numerário e passará a valer o título sem pessoa criado pelo Disponível. Observação: é  importante  criar  um  tipo  de  baixa  sem  numerário  e  que  esteja marcado para gerar comissão mesmo sem ter numerário. Isso porque o título original será baixado sem numerário, mas somente ele terá o representante informado. Assim, mesmo sendo um depósito não identificado, não prejudicará o cálculo de comissão da empresa.

## Configurações

Para habilitar o recurso há poucas configurações. Vejamos cada uma.

## Tipo de Baixa

Como já foi mencionado, é importante ter um tipo de baixa cadastrado para esta rotina. O tipo de baixa deverá ser sem numerário e gerar comissão.

## Natureza de lançamento

Caso ainda não exista, crie uma natureza de lançamento que deverá ser utilizada no cadastro  do  lançamento  no  módulo  Disponível  para  identificar  que  um  valor  de entrada refere-se a um depósito ainda não identificado.

## Configurações específicas para

## depósito não identificado

Acesse  o  Configurador  Bimer  >  Financeiro  >  Opções  >  Baixas  >  Baixa  com depósito não identificado. No campo “Naturezas de lançamento para depósito não identificado” informe a(s) naturezas que são utilizadas no módulo Disponível para classificar um movimento de entrada de valor como depósito não identificado. O percentual informado no campo “Permitir desconto máximo de até __ % sobre o valor do título” funciona como uma tolerância para quando o valor pago for inferior ao valor total do título. Vou te explicar melhor. Imagine  que  o  cliente  recebeu  um  boleto  com  valor  de  R$1000,00.  Contudo,  no momento de realizar o pagamento do boleto, por algum motivo, ele pagou R$980,00. Na hora de realizar a baixa, o sistema identificará que o valor pago é menor que o valor do título. Nesse caso, o comportamento do sistema será o seguinte: quando o valor pago for menor que o valor do título (respeitando a tolerância informada no campo assinalado com a seta), ele levará o valor da diferença no campo de desconto. Na imagem apresentada temos uma tolerância de 5%. Assim, o sistema levaria a diferença no campo de desconto e procederia com a baixa do título. Mas caso o valor da diferença for superior aos 5%, o sistema solicitará um usuário e senha de alguém que tenha permissão para liberar a baixa do título, mesmo que a diferença seja maior que a tolerância. Nessa situação, o usuário deverá ter permissão no Cadastro de usuários > Perfil de usuário > Acessos gerais > Baixa de títulos através de depósito não identificado. Agora, há ainda outras duas situações: valor pago maior que o valor do título e campo de alíquota máxima de desconto como 0%. Nessas situações o sistema se comportará da seguinte forma: caso o valor pago seja maior que o valor total do título, o sistema levará o valor da diferença no campo de juros; caso a porcentagem do desconto esteja como 0% e o sistema identificar que o valor pago é menor que o valor do título, a baixa  não  será  realizada  a  menos  que  seja  informado  um  usuário  e  senha  com permissão. Isso porque o sistema interpretará que não será aceita nenhuma diferença entre o valor pago e o valor do título. Na versão 10.00.08.00 foi liberada, nessa tela, a configuração  “Tipo de valor para calcular a diferença entre o valor do depósito e o valor do título”. Existem duas opções para ela: • Por valor atualizado – Considera o valor em aberto atualizado, incluindo juros, multas e descontos concedidos pelo sistema; • Por valor líquido – Considera apenas o valor líquido em aberto, excluindo juros, multas e descontos calculados pelo sistema. Na versão 11.01.07.00 foi liberada a possibilidade de vincular o tipo de baixa à conta bancária. Caso seja necessário vincular o mesmo tipo de baixa para mais de uma conta, basta separar o código das contas por vírgula.

## Depósito não identificado

Bem, feitas as configurações acima, está na hora de ver a rotina em prática. Abra o módulo Telecobrança e clique sobre o ícone de “Depósito não identificado”. Feito isso, o sistema apresentará uma tela na qual serão filtrados os depósitos não identificados  criados  no  Disponível  e  os  títulos  a  receber  originais  para  serem vinculados. Na tela que se abrirá, informe o tipo de baixa que será utilizado para baixar o título original. No lado esquerdo, informe o período ou faixa de valor do depósito e a conta bancária que recebeu esse valor; no lado direito informe o período ou faixa de valor dos títulos a receber originais. Por último, clique em “Atualizar filtro” em ambos os lados para que os resultados sejam mostrados. Após os resultados serem mostrados, deverão ser realizados os vínculos. É possível vincular vários títulos a um mesmo depósito desde que, se houver diferença no valor, não ultrapasse a tolerância, conforme já vimos anteriormente. É possível também que os títulos sejam de pessoas diferentes, para o caso de o cliente ter filiais, por exemplo. Perceba que, conforme marcamos os lançamentos para fazer o vínculo, o sistema mostrará se há e qual a diferença entre os valores. Na versão 11.00.08.00 foram disponibilizadas novas ferramentas para facilitar ainda mais o vínculo dos títulos. Confira:

1. Visualização de Dados: Agora, ao selecionar um título a receber, você pode
visualizar os dados do responsável pelo título através do novo botão 'Dados da pessoa'. Essa função proporciona uma visão detalhada e ajuda a confirmar informações rapidamente.

2. Botões  de  Remoção: Foram  adicionados  os  botões  'remover'  e  'remover
todos', permitindo a exclusão individual ou em massa de títulos da tela 'Títulos a receber'. Essas opções tornam o gerenciamento dos títulos mais eficiente.

3. Totalizadores: Novos  totalizadores  foram  incorporados  para  fornecer  uma
visão mais completa das transações: Para Depósitos Não Identificados: • Totalizador de títulos • Totalizador de valor Para Títulos a Receber: • Totalizador de títulos; • Totalizador de valor original; • Totalizador de valor atualizado; • Totalizador de valor tarifa bancária; Após  selecionar  todos  os  lançamentos,  clique  em  “Vincular”  no  canto  superior esquerdo. Quando houver diferença, o sistema apresentará uma mensagem avisando e solicitará a confirmação do usuário. Nesse momento, o sistema criará um lote de baixa. Para visualizar, clique na aba “Vinculados”. Esse lote de baixa aparecerá na opção de Baixa Manual no Contas a receber, mas este não poderá ser finalizado por lá, somente pelo Telecobrança. Após conferir, basta clicar em “Liberar lote”. Mas note que também é possível excluir o lote  (que  desfará  toda  a  movimentação),  abrir  um  lote  já  criado  ou  até  mesmo desfazer o vínculo dos lançamentos. Caso  seja  necessário  visualizar  lotes  criados  por  outros  usuários,  será  necessário liberar no Cadastro de usuários > Perfil de usuários > Acessos gerais > Baixa de títulos através de depósito não identificado > “Gerenciar baixas de qualquer usuário”. Atente-se aos pontos abaixo sobre essa rotina: • Os títulos origem gerarão lançamentos de comissão na Conta-corrente, mesmo sendo baixados sem numerário com a configuração do tipo de baixa  com a opção "Gera comissão mesmo sem gerar numerário" marcada; • Juros, multa e descontos devem ser rateados entre os itens do título origem; • O título estará vencido se a data do depósito for superior à data de vencimento do título origem. O valor de juros e multa deve ser calculado considerando o número de dias entre o vencimento do título origem até a data do depósito não identificado e desconsiderando o valor da tarifa bancária; • A data de baixa do título deve ser igual à data de processamento da baixa. Ou seja, igual à data atual; • Caso NÃO exista lote em aberto para o usuário logado, o vínculo será feito em um lote novo. Caso exista lote em aberto para o usuário logado, o vínculo será realizado no lote em aberto. Caso tenha lote aberto, o ficará um sinal com a quantidade de lotes em aberto na opção “Depósito não identificado” no Telecobrança. Na versão 11.01.03.00 houve modificações importantes com relação à rotina de depósito não identificado. Nessa versão foi implementada uma melhoria para não exibir movimentos bancários na rotina. Para o correto funcionamento é importante se atentar aos pontos abaixo: Cadastro de Usuários No sistema “Disponível” foi adicionada a opção “Desativar movimento para uso na rotina de depósito não identificado”, que está desabilitada por padrão. Disponível Ao editar um movimento, foi incluída a opção “Desativar movimento para uso na rotina de depósito não identificado”. Essa opção estará disponível nas seguintes condições: A natureza de lançamento informada deve estar configurada no Configurador / Financeiro/ Opções/ Baixas/ Baixa com depósito não identificado, na opção “Naturezas de lançamento para depósito não identificado”; O campo “Valor de entrada” deve ser maior que 0 (zero); O movimento bancário não deve ter sido vinculado previamente pela rotina de depósito não identificado. Ao ativar essa opção, o movimento bancário será excluído da exibição na rotina de depósito não identificado Observação: para marcar ou desmarcar essa opção, o usuário precisa ter o acesso habilitado no seu cadastro de usuários. Caso contrário, será solicitada a tela de login e senha. Além disso, toda alteração gerará um log de alteração, garantindo o registro de qualquer modificação. Telecobrança No módulo Telecobrança, dentro da rotina Depósito Não Identificado, foi adicionado o recurso de “Desativar movimento para uso na rotina de depósito não identificado” diretamente da grid de depósitos não identificados. Essa ação pode ser realizada de duas formas: clicando com o botão direito do mouse sobre o movimento selecionado, ou pelo atalho Ctrl + D. Esse recurso estará disponível conforme a configuração de acesso no módulo Cadastro de Usuários. Outra melhoria realizada nessa rotina de depósito não identificado foi a possibilidade de definir o número de dias que permite o vínculo entre um depósito e um ou mais títulos. Com esse recurso, o sistema verificará se há diferença de dias entre o depósito e os títulos vinculados. Se essa diferença exceder o limite configurado, um bloqueio será  acionado,  e  o  usuário  receberá  uma  mensagem,  caso  usuário  não  tenha permissão para continuar o vínculo. A configuração foi criada em Configurador / Financeiro / Opções / Baixas / Baixa com Depósito Não Identificado. Nessa tela foi criado o separador “Vinculo de depósito”. Nesse separador há duas opções: “Considerar a diferença de datas entre os títulos” e “Considerar a diferença entre a data do depósito com a data atual”. O recurso funcionará da seguinte forma: • Campo vazio: o vínculo entre o depósito e os títulos será permitido sem restrições, sem necessidades de verificar as permissões do usuário; • Campo preenchido: se o vínculo estiver dentro do prazo configurado, será permitido sem bloqueio; • Se o vínculo ultrapassar o prazo configurado, o sistema verificará a permissão do usuário no cadastro de usuários, sistema Telecobrança, acesso “Depósito não identificado”: ◦ Se a opção “Permitir vínculo superior a XX dias entre movimentos” estiver habilitada, o vínculo será permitido sem bloqueio. • Se a opção estiver desabilitada, o sistema exibirá uma mensagem informando que a diferença excede XX dias e a operação não poderá ser realizada. Para prosseguir, será necessário fazer login com um usuário que tenha a permissão adequada.

## Dicas

Vou finalizar este manual com algumas dicas que podem ajudar você a mandar bem nos atendimentos gerais de financeiro. Veja as seguintes dúvidas e como resolver:

1. Como faço para baixar vários títulos de cobrança do cliente?
1. Se tiver que baixar vários de modo individual, acesse o  BI Financeiro /
Seleção de Títulos / Arraste os títulos / Baixar.

2. Temos ainda outras soluções como a Baixa manual e a Baixa automática
(quando o cliente trabalha com homologação bancária).

2. Como faço para gerar o boleto de vários títulos?
1. Acesse o BI Financeiro / Seleção de Títulos / Arraste os títulos / Emitir
Boletos.

3. Dá para gerar apenas um título de cobrança com todos os valores que o cliente
deve?

1. Dá sim, é só usar o recurso de Renegociar a cobrança (pelo próprio módulo
Telecobrança) para baixar todos os títulos sem numerário e gerar somente um novo título com o total da cobrança.
