# Manutenção de Contratos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Contratos](#contratos)
- [Sumário](#sumário)
- [Introdução](#introdução)
- [Fluxograma](#fluxograma)
- [Configurações](#configurações)
- [Ramo de atividade](#ramo-de-atividade)
- [Característica de Pessoa](#característica-de-pessoa)
- [Indexador](#indexador)
- [Situação do Produto](#situação-do-produto)
- [Cadastros Padrões](#cadastros-padrões)
- [Natureza de lançamento](#natureza-de-lançamento)
- [Forma de Pagamento](#forma-de-pagamento)
- [Tipo de Cobrança](#tipo-de-cobrança)
- [Operação](#operação)
- [Seleção dos Cadastros Padrões](#seleção-dos-cadastros-padrões)
- [Rotinas Manutenção de](#rotinas-manutenção-de)
- [contratos](#contratos)
- [Contrato Fixo e Variável](#contrato-fixo-e-variável)
- [Definições](#definições)
- [No sistema](#no-sistema)
  - [Aba Dados da Cobrança](#aba-dados-da-cobrança)
  - [Aba Itens](#aba-itens)
  - [Aba Complementar](#aba-complementar)
  - [Aba Contatos](#aba-contatos)
  - [Abas de Histórico](#abas-de-histórico)
  - [Aba Outros Contratos (pessoa financ.)](#aba-outros-contratos-pessoa-financ)
- [Contrato de Negociação](#contrato-de-negociação)
- [Definição](#definição)
- [No Sistema](#no-sistema)
- [Geração da Cobrança](#geração-da-cobrança)
- [Reajustar Cobrança](#reajustar-cobrança)
- [Indexador Alternativo](#indexador-alternativo)
- [Contrato não localizado](#contrato-não-localizado)
- [Cobrança suspensa](#cobrança-suspensa)
- [Cobrança paralisada](#cobrança-paralisada)
- [Doação](#doação)
- [Outros Recursos](#outros-recursos)
- [Auditoria de Inconsistências](#auditoria-de-inconsistências)
- [Auditoria de alteração de contrato](#auditoria-de-alteração-de-contrato)
- [Seleção de Pessoas](#seleção-de-pessoas)
- [Duplicar](#duplicar)
- [Itens](#itens)
- [Vincular](#vincular)
- [Mover Item](#mover-item)
- [Série](#série)
- [CRM](#crm)
- [Rotina](#rotina)
- [CRM Vendas](#crm-vendas)
- [BiContratos](#bicontratos)
- [Opções do Financeiro](#opções-do-financeiro)
- [Cadastro de Contratos](#cadastro-de-contratos)
- [Reajuste/Repasse](#reajusterepasse)
- [Geração de Cobrança](#geração-de-cobrança)
- [Outras Configurações do contrato](#outras-configurações-do-contrato)
- [Tarefas](#tarefas)
- [Cobranças suspensas/paralisadas](#cobranças-suspensasparalisadas)

---

## Contratos

## Sumário

Introdução................................................................................................................3 Fluxograma..............................................................................................................4 Configurações..........................................................................................................5 Ramo de atividade.......................................................................................................... 5 Característica de Pessoa.................................................................................................6 Indexador.......................................................................................................................7 Situação do Produto........................................................................................................8 Cadastros Padrões..........................................................................................................9 Natureza de lançamento........................................................................................9 Forma de Pagamento............................................................................................10 Tipo de Cobrança..................................................................................................10 Operação..............................................................................................................11 Seleção dos Cadastros Padrões............................................................................12 Rotinas Manutenção de contratos........................................................................14 Contrato Fixo e Variável................................................................................................15 Definições.............................................................................................................15 No sistema............................................................................................................16

#### Aba Dados da Cobrança.......................................................................................................17

#### Aba Itens...............................................................................................................................19

#### Aba Complementar...............................................................................................................21

#### Aba Contatos........................................................................................................................ 22

#### Abas de Histórico................................................................................................................. 22

#### Aba Outros Contratos (pessoa financ.).................................................................................22

Contrato de Negociação...............................................................................................23 Definição..............................................................................................................24 No Sistema...........................................................................................................24 Geração da Cobrança...................................................................................................25 Reajustar Cobrança......................................................................................................29 Indexador Alternativo...........................................................................................32 Contrato não localizado........................................................................................34 Cobrança suspensa......................................................................................................37 Cobrança paralisada.....................................................................................................38 Doação......................................................................................................................... 40 Outros Recursos....................................................................................................41 Auditoria de Inconsistências.........................................................................................41 Auditoria de alteração de contrato...............................................................................41 Seleção de Pessoas......................................................................................................42 Duplicar........................................................................................................................43 Itens.............................................................................................................................43 Vincular................................................................................................................43 Mover Item...........................................................................................................44 Série.....................................................................................................................45 CRM........................................................................................................................46 Rotina...........................................................................................................................46 CRM Vendas..................................................................................................................49 BiContratos............................................................................................................50 Opções do Financeiro............................................................................................53 Cadastro de Contratos..................................................................................................53 Reajuste/Repasse.........................................................................................................55 Geração de Cobrança...................................................................................................57 Outras Configurações do contrato................................................................................60 Tarefas..........................................................................................................................63 Cobranças suspensas/paralisadas................................................................................65

## Introdução

Netflix, Amazon prime e Spotify, você já ouviu falar de um deles alguma  vez?  Esses  são  alguns  dos  serviços  mais  populares  de streaming do mundo. Por meio deles você acessa músicas, séries, filmes e paga um valor mensal ou anual que não é tão alto. As empresas que prestam esses serviços possuem contratos com clientes no mundo todo e ganham a vida por meio desses contratos de cobrança. Falando nisso, entra na história o módulo Manutenção de Contratos, através  do  qual  uma  empresa  pode  controlar  os  contratos  que possui  com  cada  cliente,  cobrando  por  um  produto  ou  serviço prestado, e a cada período (que pode ser de mensal até anual), gera títulos a receber para esses clientes. Suponho que você já entendeu a ideia, né? Veja um fluxograma de como trabalhar com o Manutenção de contratos:

## Fluxograma

Agora que você já sabe por onde vamos passar, bora configurar o sistema?

## Configurações

## Ramo de atividade

Para o Manutenção de contratos funcionar de boa, sua base precisa estar com o ramo de atividade de “serviço”. Para verificar vá ao Configurador Bimer / Opções / Geral / Ramo de atividade: Dúvida! “Se a base do cliente não tiver com o ramo de atividade ‘serviço’?” Durante a implantação, já é definido o melhor ramo de atividade de acordo com o negócio do cliente. A mudança dessa configuração numa base já implantada, pode trazer problemas. Desse modo, se pegar uma situação assim acione seu supervisor imediato ou entre em contato com o setor de canais.

## Característica de Pessoa

Acesse o Configurador Bimer / Geral / Característica da Pessoa e cadastre duas características do tipo Analítica:

1. Paralisação de Cobrança:  usada quando ocorrer uma falha no produto ou
serviço entregue ao cliente por parte da empresa fornecedora. Se essa situação estiver prejudicando o cliente, a empresa fornecedora não realiza cobranças até resolver a situação de seu produto / serviço.

2. Suspensão de Cobrança: usada quando o cliente deixa de pagar à empresa,
conforme valor combinado no contrato. Desse modo, a cobrança é suspensa por um tempo determinado, de acordo com os padrões internos e legais adotados pela empresa.

## Indexador

Um indexador é utilizado como multiplicador dentro do Bimer, para ajustar o valor de um documento. A maioria dos indexadores não possuem um valor fixo, mas alteram de acordo com o tempo. Dúvida! “Pode dar um exemplo?”Claro! Pense na cotação do dólar. Se você for no Google e pesquisar o valor para comprar 1 dólar, vai ver R$ 5,50, por exemplo. Se você for daqui a 1 mês, verá que este valor possivelmente terá sofrido alteração. O indexador será usado no Bimer para ajustar os contratos de cobranças, de acordo com algum índice ou taxa, pode ser do tipo  Moeda  ou  Índice  desde que tenha cotação  informada  para  o  período  a  ser  reajustado.  Para  cadastrar  Acesse Configurador Bimer / Geral / Outros Cadastros / Indexadores. Se Liga! Os indexadores não são atualizados automaticamente. Quando necessário, o usuário precisará abrir essa tela e atualizar manualmente.

## Situação do Produto

A situação funciona como o status do produto/serviço que está sendo comercializado para o cliente. Os nomes são definidos por Gestor, mas só para você entender melhor, veja alguns exemplos: produto devolvido, manutenção cancelada, manutenção ativa. Acesse Configurador Bimer / CRM / Situação do produto para editar ou cadastrar novas situações: Viu ali em cima a opção Desativar o item do contrato? Quando marcada, o sistema exibe um campo de validade da cobrança no momento da criação do contrato. As situações com essa marcação serão utilizadas somente nos contratos do tipo fixo, como numa cortesia, por exemplo. No exemplo abaixo será cobrado do cliente até o dia 12/03, dali para frente não haverá cobrança.

## Cadastros Padrões

Ao incluir um novo contrato, alguns campos sempre serão solicitados: natureza de lançamento, forma de pagamento e tipo de cobrança. Pensando nisso, o usuário pode cadastrar esses padrões e indicar para o sistema, evitando o preenchimento manual a cada novo contrato. Veja abaixo como cadastrar cada um e depois como vincular no sistema.

## Natureza de lançamento

Acesse  Configurador  Bimer  /  Financeiro  /  Natureza  de  Lançamento.  Escolha  ou cadastre uma nova natureza do tipo Analítica:

## Forma de Pagamento

Vá em Configurador Bimer / Financeiro / Forma de Pagamento. Escolha ou cadastre uma nova forma de pagamento do tipo Boleto:

## Tipo de Cobrança

Acesse Configurador Bimer / Financeiro / Tipo de Cobrança. Você deve possuir um tipo de cobrança marcado como Ativo: Só para você saber, o tipo de cobrança é utilizado para definir como o boleto será gerado para cobrar ao cliente (sendo definido por banco). O tipo de cobrança também é conhecido por Carteira.

## Operação

Se  a  empresa  for  gerar  nota  de  serviço  a  partir  desse  contrato,  cadastre  uma operação para prestação de serviços. Lembra como fazer isso? Se não lembra, de boa! Vou te ensinar: Acesse Configurador Bimer / Estoque / Operação / Novo e preencha cada aba:

- Dados: Marque Venda e Atualiza Financeiro para gerar os títulos a receber;
- Cálculos: Marque os tributos que terão incidência no serviço prestado como, por
exemplo, ISS.

- Documento: Informe um tipo de documento para gerar NFS-e:
- Deve estar informado em Configurador Bimer / Faturamento / Opções /
Operação / Nota Fiscal de serviço / Quadro tipos de documento para nota fiscal de serviço. • Os outros campos são de preferência do cliente.

## Seleção dos Cadastros Padrões

Acesse  Configurador  Bimer  /   Financeiro  /  Opções  /  Manutenção  de  contratos  / Cadastro de contratos e selecione os cadastros feitos: Para que seja possível mudar esses cadastros ao incluir um novo contrato, marque a opção “No cadastro de contratos, permitir alterar as informações acima”. Do contrário, o sistema só permite a utilização dos dados informados nessa tela. Fica a Dica: O campo ‘Máscara para geração do número do contrato’ serve para configurar um padrão para preencher o campo Número do contrato. Para isso, utilize variáveis como: {DIA} - Retorna o dia da geração do contrato. {MÊS} - Retorna o mês da geração do contrato. {ANO} - Retorna o ano da geração do contrato. {HOR} - Retorna as horas da geração do contrato. {MIN} - Retorna os minutos da geração do contrato. {SEG} - Retorna os segundos da geração do contrato. {SEQ} - Retorna o número sequencial do código de chamada do contrato.

## Rotinas Manutenção de

## contratos

Começaremos  analisando  as  rotinas  desse  módulo  e  depois  veremos  como  ele interage com o CRM. A primeira tela que você visualiza pode vir sem nada, se ainda não o tiver utilizado. Caso já use o módulo, basta realizar um Filtro para trazer dados. Para começar a utilização, veja as orientações abaixo:

1. Filtro do que será exibido na tela principal. Clique nesse botão e escolha os
parâmetros. Depois, clique em Filtrar;

2. Selecione um cliente e, do lado direito, veja os contratos que ele possui;
3. Ao clicar em um contrato, veja quais são os itens presentes;
4. Crie  um  novo  contrato.  Você  também  pode  excluir  ou  editar  o  contrato
selecionado na tela, ver linha do tempo e vincular contratos da mesma pessoa. Agora que você foi apresentado ao módulo, vamos às rotinas!

## Contrato Fixo e Variável

## Definições

Contrato  fixo: é  utilizado  para  cadastro  de  contratos  que  tenham  cobranças periódicas (semanais, mensais, bimestrais, etc), com as mesmas características, como valor, data de vencimento, etc. Exemplo: Ao contratar um serviço para ter acesso à Internet, de mês em mês será realizada a cobrança de forma fixa sem variar. Contrato variável: é utilizado para cadastro de cobranças que não têm frequência, ou seja, têm validade apenas para uma cobrança. Caso haja uma nova prestação do mesmo serviço, deverá ser cadastrado um novo contrato variável. Exemplo: Um escritório de contabilidade, além de cobrar os honorários fixos (contrato fixo), pode eventualmente prestar um serviço extra. Para este extra será necessário criar uma cobrança variável com dia, mês e ano para o pagamento.

## No sistema

Como a forma de cadastrar e as telas são similares, veremos o fixo e variável juntos. Na tela principal clique em ‘Novo Contrato Fixo’ ou ‘Variável’. Preencha o Cliente e a empresa que receberá os valores cobrados. O campo Número do contrato deve ser preenchido apenas se for feito o controle manual, pois como já vimos,  esse  campo  pode  ser  preenchido  automaticamente  a  partir  de  algumas variáveis. E veja se os endereços de Entrega e Cobrança estão corretos: O campo ‘Cliente responsável pelo financeiro (envio de boletos)’ pode ser alterado, caso  outra  pessoa  realize  os  pagamentos  dos  títulos  referentes  às  cobranças. Exemplo: A Matriz que faz os pagamentos dos títulos da Filial. Observação: caso o cadastro seja para um cliente que já tenha outros contratos, após localizá-lo no filtro e ele aparecer do lado esquerdo da tela, clique sobre o nome do cliente com o botão direito do mouse e selecione o tipo de contrato que deseja criar. Dessa forma, algumas informações do contrato já vêm preenchidas, otimizando o processo. Veja agora a função de cada elemento no contrato:

### Aba Dados da Cobrança

Após informar os produtos, defina: • Destino: Escolha como o sistema deve se comportar para gerar a cobrança ao cliente; ◦ Nota fiscal: A partir do contrato será gerada uma nota no Faturamento, a qual  deve  ser  autorizada  e  liberada.  Após  isso,  o  título  será  gerado  no Contas a Receber para que o cliente seja cobrado. ◦ Título a Receber: Pulamos a etapa do Faturamento, a partir do contrato já é gerado o título a receber para fazer a cobrança. • Liberação de Contrato: A opção Contrato liberado deve ser marcada quando já estiver tudo certo com o contrato, desse modo os processos de geração da cobrança e reajuste poderão ser feitos. Se não marcar essa opção, o módulo entende que o usuário ainda tem alguma pendência a ser ajustada; • Liberação de Contrato:  Em  Registrar cobranças até a data  informe até quando se deve cobrar ao cliente, normalmente é preenchido com a data do fim do contrato. É possível utilizar essa opção também se em algum mês não houver  cobrança  ao  cliente  por  algum  motivo  especial.  Neste  caso, normalmente é informado o último dia do mês que não haverá a cobrança; • Vencimento (dia): Informe em qual dia deve cair o vencimento em cada mês; • Dias p/ antecipação de cobrança:  este campo ficará habilitado caso tenha sido  preenchida  a  quantidade  de  dias  para  antecipação  de  cobrança  em Configurador Bimer / Financeiro / Opções / Manutenção de Contratos / Cadastro de contratos; • Período de vigência do contrato: Diga o início e o fim do contrato deste serviço / produto junto ao cliente; • Taxa bancária: Marque a opção para cobrar a taxa de emissão do boleto bancário / arquivo remessa do cliente. • Agrupamento: Poderá ser informado algum texto de agrupamento que poderá ser visualizado no BiContratos; • Operação  de  nota  fiscal/Operação  de  ordem  de  entrega: Informe  a operação que será utilizada na hora de gerar a cobrança; • Aglutinar Cobranças em título: No ato da Geração da cobrança, os contratos que tiverem essa opção marcada serão aglutinados em um único título, desde que os títulos possuam os seguintes campos em comum: cliente, vencimento, natureza  de  lançamento,  forma  de  pagamento,  tipo  de  cobrança,  e  conta bancária. • 1ª cobrança proporcional: Imagine que o cliente adquiriu um serviço no dia 15 do mês e a cobrança é feita com referência ao mês anterior. Nesse caso, se a empresa acordar com o cliente que ele pagará apenas pelos 15 dias, a opção de primeira  cobrança  proporcional  poderá  ser  marcada.  Caso  a  opção  esteja desmarcada, o cliente pagará o valor cheio da cobrança; • Endereço de prestação: Marque o endereço no qual o serviço será prestado.

### Aba Itens

Adicione os produtos e serviços no contrato, seguindo as numerações da imagem:

1. Selecione o item;
2. Escolha a situação do produto;
3. Valor do item no contrato;
4. Informe a data para iniciar a cobrança para o cliente. É conhecida também
como  data  final  da  carência,  pois  a  empresa  pode  fornecer  ao  cliente  um período de utilização gratuito, causado por uma promoção, por exemplo, e após esse prazo, o cliente efetua os pagamentos. Se você já assinou Netflix  ou Amazon Prime, sabe do que estou falando;

5. Data  final  da  cobrança: Este  campo  vai  aparecer se  for  selecionada  uma
situação  de  produto  que  esteja  marcada  a  opção Desativar  o  item  do contrato;

6. Nesta  aba,  informe  os  dados  do  Reajuste  do  contrato  como  o  indexador
utilizado e o período para isso;

7. Na aba Repasses, informe o vendedor que será comissionado em cima do valor
desse item no contrato;

8. Marque quais períodos serão usados na geração dos documentos, desde mensal
até anual. Para isso é necessário clicar no símbolo do cadeado. Será solicitado o login e senha de um usuário que tenha acesso a essa rotina (módulo Cadastro de Usuários). Observação¹: o campo Período só habilitará se o contrato for do tipo Fixo. Observação: na versão 11.01.06.00 foi implementada uma melhoria  ao gerar contratos fixos, de forma que seja verificado o status (ativo ou inativo para venda) dos produtos complementares conforme configurados no cadastro de produtos. Com isso, o produto será incluído ou removido da árvore de produtos do cliente conforme seu status seguindo a lógica de verificação: 1.Condição de remoção: Quando um produto é incluído, o sistema verifica se há produtos complementares vinculados ao cliente que estão inativos. Caso todos os produtos complementares estejam inativos para todos os produtos do cliente, o produto complementar será removido automaticamente. Se o produto complementar estiver ativo para algum dos produtos do cliente, ele não será removido. 2.Remoção da composição de produto complementar: Quando um produto complementar inativo for removido, toda a sua composição (produtos filhos) também será excluída.

### Aba Complementar

Veja aqui os cadastros padrões que foram selecionados no Configurador Bimer e que podem ser ajustados, de acordo com o contrato. Além dessas, há também outras informações que podem ser adicionadas se o cliente quiser, como: conta bancária que emitirá o boleto bancário, unidade de negócio e dados do banco e agência caso a forma de pagamento seja cheque. Observação: É possível gerar uma Nota Fiscal de Produto (NF-e) em vez de uma Nota Fiscal de Serviço (NFS-e). Para isso, basta alterar a operação nesta tela para uma operação de NF-e. Em seguida, insira um item que não seja de serviço ou serviço comercializado. Assim, no faturamento, a nota será exibida na aba 'Nota Fiscal'. Para gerar a nota de serviço, a operação permanece (de acordo com as configurações) e os produtos precisam ser de serviço e serviço comercializado. Não tem como inserir no mesmo contrato item de serviço e item de outros tipos, portanto, deve-se gerar contratos separados para essa situação.

### Aba Contatos

Nessa tela serão apresentados os contatos presentes no cadastro do cliente.

### Abas de Histórico

Nas abas Histórico de cobranças e Histórico dos reajustes, você possui uma auditoria na qual é possível ver as informações alteradas, como: datas, valores e usuários envolvidos nos processos de alteração.

### Aba Outros Contratos (pessoa financ.)

Veja os outros contratos em que o cliente responsável pelo financeiro está vinculado. Para alterar, basta dar dois cliques no contrato: A utilidade dessa aba é ajustar de forma rápida alguma(s) informação(ões) nos outros contratos dessa pessoa. Suponha que você colocou a data de vencimento errada nos outros contratos, basta abrir cada um e ajustar. Se você finalizou é só ‘Gravar’ o contrato.

## Contrato de Negociação

## Definição

É semelhante ao contrato variável. A diferença é que para um contrato negociado, o valor poderá ser dividido em diversas parcelas no lugar de ter apenas uma data de vencimento.

## No Sistema

Na tela principal, clique em Novo Contrato Negociação: O preenchimento do contrato de negociação é bem similar aos outros que já vimos; as abas são praticamente iguais. A aba que importa nesse momento e que diferencia este dos outros tipos de contrato é a aba  Negociação, a qual veremos a partir de agora. Ao abrir a aba ‘Negociação’ você encontrará o campo para informar o prazo que será utilizado pelo cliente para pagar o valor do contrato. Após selecionar o prazo, informe a forma de pagamento escolhida pelo cliente. Caso seja necessário adicionar algum acréscimo ou desconto, poderá ser informado nessa mesma tela. Após preencher os dados do contrato, itens e a negociação, basta gravar.

## Geração da Cobrança

Após Liberar os contratos (marcação Contrato liberado na aba Dados da Cobrança), você já pode gerar a cobrança. Observação: se você quiser liberar todos os contratos de uma só vez, selecione a opção  ‘Liberar  todos  os  contratos’  que  está  localizada  no  menu  superior  da  tela principal do módulo. Dúvida! “Mas espera um pouco, o que seria gerar cobrança?” Ótima pergunta! Basicamente, significa gerar a nota fiscal ou título a receber para enviar os boletos para o cliente fazer o pagamento. Após clicar no botão Gerar Cobrança, faça um filtro com os contratos que já estão aptos para a cobrança: Escolha filtros como período de vencimento do contrato, o tipo, empresa e cliente. Na parte inferior da tela há outros filtros que poderão ser utilizados. Depois de informar os filtros, clique em ‘Filtrar’.

1. O campo ‘período de vencimento’ não pode ser maior que 30 dias. A informação
deste campo vai de acordo com a Data de vigência do contrato. Exemplo: Contrato mensal, com vigência de 01/01/20xx a 31/12/20xx. Se informar neste campo 01/09/20xx a 30/09/20xx, a cobrança do mês 09 será incluída no filtro.

2. Veja que na seção ‘Opções’ você pode marcar algumas opções para alterar a
geração da cobrança.

3. Faça o filtro e confirme se as cobranças mostradas estão corretas. Clicando com
o botão direito sobre a cobrança, você poderá marcar ou desmarcar cobranças para serem consideradas ou desconsideradas na hora da geração. É possível também registrar a cobrança daquele cliente naquele mês; Estando tudo certo, basta clicar em ‘Gerar Cobrança’. Ao final o sistema apresenta um log com o resultado do processo. Voltando à tela principal, clique em ‘Linha do tempo’ e veja em Descendente o título ou Nota Fiscal que foram gerados. Tenho uma dúvida! “Após gerar a cobrança, faço algo no Manutenção de contratos?” Não,  a  continuidade  da  rotina  será  nos  outros  módulos.  Após  gerar  o  título,  por exemplo,  o  pessoal  do  financeiro  deve  emitir  os  boletos,  enviar  aos  clientes  e, posteriormente,  registrar  os  pagamentos,  fazendo  isso  pelos  módulos  ‘Contas  a Receber’ ou ‘BIFinanceiro’. Outra dúvida! “No Faturamento, onde vejo o documento gerado?” Veja na aba ‘Nota fiscal de serviço’ ou ‘Nota fiscal’ (de acordo com a operação e produtos usados). Não  se  esqueça  de  que  a  nota  precisa  ser  validada  e  liberada  pelo  pessoal  do Faturamento para gerar os títulos no Contas a Receber. Se liga! No caso de notas fiscais em que houver mais de um serviço com códigos de tributação e item da lista de serviço diferentes, o sistema não permitirá a geração de cobrança. Na tela principal há o botão ‘Gerar cobrança (negociação)’ para gerar os documentos a partir dos contratos de negociação. O botão ‘Gerar cobrança’ que vimos, gera os documentos a partir dos contatos fixo e variável. Você sabia? Por meio do módulo ‘CRM’, aba ‘Manutenção de Contratos’ há como criar e editar os contratos da pessoa selecionada.

## Reajustar Cobrança

Fale a verdade! Já contratou algum serviço de internet ou streaming que no começo era um valor, mas depois de 6 meses, 1 ano ou menos, você foi notificado que o valor aumentaria? Isso é algo do nosso dia a dia, em que os clientes que possuem um serviço precisam pagar um valor a mais por ele. No  Bimer  as  empresas  também  podem  fazer  isso  pelo  recurso  de  ‘Reajustar Cobrança’, disponível na tela principal do Manutenção de contratos. Vem comigo que te mostro como fazer o reajuste. Após clicarmos no botão ‘Reajuste cobrança’. Faça um filtro com as cobranças que deseja.  Escolha,  por  exemplo:  datas,  empresa,  cliente,  natureza  de  lançamento, situação do produto, indexador, produto, característica, pessoas de repasse vinculados no contrato e clique em ‘Filtrar’. Depois disso, marque as cobranças que deseja reajustar. Veja na imagem abaixo um exemplo de correção de 10% de aumento. O valor de R$ 1000,00 somou a R$ 100,00 ficando com o total R$ 1.100,00 e clique na opção  Aplicar Reajuste. Na seção Detalhes você poderá conferir os dados também. Dúvida! Mas e se não estiver certo o percentual do indexador? Veja que o campo ‘Indexador’ se refere à sigla presente no cadastro (na imagem CM). Com essa informação, vá no cadastro do indexador em Configurador / Geral / Outros cadastros / Indexadores e atualize a taxa a ser aplicada, feche o módulo e refaça a rotina.

## Indexador Alternativo

Que tal aprofundar nosso conhecimento do reajuste pelo indexador? Ao fazer o filtro na opção de ‘Reajuste de cobrança’, veja que você conta com a opção ‘Informe abaixo um indexador alternativo para cálculo do reajuste’. Ao fazer o filtro sem preencher este campo, o indexador utilizado no reajuste é o informado no item do contrato. Se o campo for preenchido, o reajuste aplicado é com base no indexador informado ali. Esta alternativa é muito útil, pois imagina aquela situação onde há diversos contratos que precisam mudar a cobrança deste ano com base num indexador específico devido a eventos como alta infração ou tributação. Veja que fiz o filtro com o campo preenchido e o sistema aplicou o indexador, e o valor da cobrança foi adicionado em 15% de acordo com a configuração na tabela. Dúvida! E agora faço mais alguma coisa? Você precisa Gerar a cobrança para que o valor ajustado seja gerado no título ou nota fiscal:

## Contrato não localizado

Dúvida! E se o contrato de cobrança não aparecer na lista de filtros para o reajuste, o que eu faço? Esta é uma situação que é bem comum nos atendimentos, veja algumas dicas que podem ajudar você:

- Seleção de dados incorretos:
- Veja se algum filtro está com a marcação azul. Pois se estiver apenas o contrato
que possuir aquela informação aparece para o reajuste. Exemplo: Selecionei o Produto serão reajustados. • Data  de  reajuste  do  item  do  contrato  incompatível  com  a  data  de referência. ◦ Dentro do item do contrato contamos com a aba Reajuste e com o campo Reajustar Item. Aqui o usuário define uma data para o cálculo do reajuste e escolhe  de  quanto  em  quanto  tempo  o  reajuste  será  aplicado  (campo Aplicar reajuste a cada): ◦ Vamos  utilizar  a  imagem  acima  como  exemplo,  para  você  compreender melhor  como  selecionar  a  data  de  referência  na  tela  de  reajuste  de cobrança.  Acima,  vemos  o  campo  ‘Reajustar  Item’  preenchido  com 16/01/2023. Levando em conta esta informação e o campo ‘aplicar reajuste a cada’, o correto seria preencher a data de referência da seguinte forma para o contrato aparecer: ▪ 134 - DIÁRIO: R$ 100,00 --> 17/01/2023 (1 Dia após) ▪ 135 - MENSAL: R$ 200,00 --> 16/02/2023 (1 Mês após) ▪ 136 - BIMESTRAL: R$ 400,00 --> 16/03/2023 (2 meses depois) ▪ 137 - ANUAL: R$ 800,00 --> 16/01/2024 (1 ano depois) • Exemplo: Se você desejar que o contrato 136 – BIMESTRAL apareça, informe uma data de referência igual ou superior a 16/03/2023, não informe 15/03/2023 por exemplo. A  partir  de  agora  falaremos  mais  sobre  algumas  situações  que  acontecem  no relacionamento com o cliente, e afetam o uso do manutenção de contratos.

## Cobrança suspensa

Como já visto, a suspensão acontece, por exemplo, por falta de pagamento do cliente. Para suspender a cobrança, abra o contrato e o item. Em seguida, clique no cadeado para  habilitar  a  alteração  das  opções  e  marque  ‘Cobrança  suspensa’,  informe  o período para o início e fim da suspensão. Esse procedimento deverá ser feito em todos os itens do contrato que terão as cobranças suspensas. Se liga! Ao suspender somente um item do contrato, os demais itens continuarão gerando cobrança para o cliente.

## Cobrança paralisada

Caso haja a necessidade de paralisar uma cobrança por alguma falha na prestação de serviço ou erro do sistema, por exemplo, será necessário editar o contrato e o item do contrato que será paralisado. Na tela de edição do item, clique no cadeado para habilitar a alteração das opções e marque ‘Cobrança paralisada’, informe o período para o início e fim da paralisação. Esse procedimento deverá ser feito em todos os itens do contrato que terão as cobranças paralisadas. Se liga! Ao paralisar somente um item do contrato, os demais itens continuarão gerando cobrança para o cliente. Você Sabia?  A partir da versão 9.03.02.00 do Bimer, ao marcar ou desmarcar a opção de cobrança suspensa ou paralisada, o botão de ‘Auditoria’ dentro do item, grava um  log para que a empresa possa buscar dados de quando o contrato foi alterado para não gerar cobrança, por exemplo.

## Doação

Caso o usuário deseje doar o sistema ao cliente por uma cortesia, por exemplo, será necessário editar o contrato e o item do contrato que será doado. Na tela de edição do item, clique no cadeado, marque ‘Doação’. Faça isso em todos os itens que serão doados. Fica a Dica! Ao doar somente um item do contrato, os demais itens continuarão gerando cobrança para o cliente. Observação: Se não quiser que o sistema solicite usuário e senha para liberar as rotinas citadas acima, basta configurar em Configurador Bimer / Financeiro / Opções / Manutenção de contratos / Outras configurações do contrato, marcando a opção “Não mostrar tela de senha caso o usuário tenha acesso liberado”.

## Outros Recursos

## Auditoria de Inconsistências

O recurso mostra as informações de contratos ou repasses que estão incorretas. Não serão analisados na auditoria os contratos liberados que contenham itens doados, ou que possuem cobrança paralisada ou suspensa. Ao  clicar  em  ‘Cadastro’  são  exibidos  os  erros  de  cadastro  de  contrato,  alguma informação faltante, contratos duplicados etc. Em Cobranças serão exibidos os erros de cadastro da cobrança do contrato, tais como: cobrança variável foi gerada, mas o contrato não foi excluído; o contrato não foi gerado para todos os meses; cliente com contratos com códigos da lista de serviço diferente, etc. Em Repasses serão exibidos erros referentes às comissões contidas nos contratos para os quais já foram geradas as cobranças.

## Auditoria de alteração de contrato

Na tela principal do contrato, pelo botão de Auditoria, veja todas as alterações feitas no contrato selecionado. Através dele é possível identificar a origem, computador de onde foi alterado, usuário e outras informações, conforme pode ser visto na imagem abaixo:

## Seleção de Pessoas

Imagina o seguinte: a empresa lançou uma promoção e deu um desconto de 20% nos 6 primeiros meses do seu serviço, assim vários clientes contrataram. E agora será que preciso gerar contrato por contrato? Não! Quando acontece isso, mesmo contrato gerado para clientes distintos, clique em Pessoas > selecione os clientes ou arraste da tela principal para esse quadro > clique Contrato fixo. Feito isso, preencha os dados do contrato a ser gerado, clique em OK e o sistema gerará os contratos. Para visualizá-los, basta clicar em ‘Atualizar’ ou F5. Além disso, você pode fazer outras ações para vários clientes, como incluir ou remover uma caraterística, ou gerar um atendimento para todos eles.

## Duplicar

Em empresas que trabalham com contratos é comum que vários clientes contratem o mesmo serviço e paguem o mesmo valor. Em vez de cadastrar o contrato para o novo cliente do zero,  duplique  o contrato que já existe e altere as informações como o cliente. Para isso, abra o contato e clique no botão Duplicar.

## Itens

Dentro dos itens há ferramentas que facilitam a utilização e resolução de problemas. Vamos ver algumas delas?

## Vincular

Utilizado para incluir um item ou serviço dentro de um produto composto, neste contrato. Veja na imagem abaixo que o serviço “Manutenção em informática” está como  um  item  independente,  mas  quero  agregá-lo  ao  “Computador  Lenovo  1TB” (produto composto), para dizer que no valor do PC já está embutido o valor do serviço prestado. Clique no item que será incluído / Vincular / informe o destino do produto: Se liga! Após esse procedimento, o item que foi incluído fica com valor zerado, pois o sistema considera que, como o produto foi agregado, o valor já está embutido no item principal, qualquer ajuste deve ser feito por ele. Se desejar reverter, clique no produto e depois no botão ‘Desmembrar’.

## Mover Item

Cliente entrou em contato informando que possui um item que foi inserido de forma correta, com a quantidade, valor, repasse e situação do produto, mas no contrato errado. Precisa remover o produto e incluir de novo no contrato, certo? Errado! Não é necessário, pois no módulo Manutenção de contratos temos um facilitador! É só abrir o contrato onde está o produto, selecionar sobre o item, clicar em  Mover Item, selecionar o contrato correto e depois gravar o contrato.

## Série

Há a opção de visualizar a série do produto na tela de itens do contrato. Dúvida! “Por que isso é interessante?” Pense  comigo:  cada  produto  tem  uma  série  única  que  não  pode  se  repetir. Suponhamos que você adicionou 20 itens no contrato, cada um com sua série, porém um  deles  foi  incluído  de  forma  errada  e  será  preciso  remover. Se não desse para ver essa informação na tela de itens, você teria que abrir cada item e ver a série uma a uma. Assim, é só localizar o produto e remover facilmente.

## CRM

Até aqui vimos a criação do contrato sendo feito pelo próprio módulo Manutenção de Contratos. Mas deixa te contar um segredo: dá para criar também pelo CRM. Isso é comum, pois o vendedor que usa o CRM, gera o contato de venda e no encerramento ele consegue criar um contrato. Desse modo, o contrato já vem prontinho para gerar a cobrança para o cliente. Vamos ver como faz?

## Rotina

No módulo CRM coloque o código do cliente, acesse a aba Vendas (follow up) e crie um contato de vendas (caso ainda não tenha): Vá à aba ‘Produtos’ e inclua os itens no contrato. Dúvida! “Por que na imagem está destacado o tipo de movimento de cobrança?” Excelente pergunta, achei que não fosse perguntar! A partir dessa tabela o módulo CRM pode criar ou não o contrato. Essa tabela informa como a cobrança deve ser feita ao cliente, gerando uma nota fiscal apenas ou primeiro o contrato para depois gerar os outros documentos. Acesse o cadastro do seu tipo de movimento de cobrança no Configurador Bimer / Financeiro  /  Tipo  de  movimento  de  cobrança. Só  vai  gerar  o  contrato  se  estiver marcada a opção ‘Gera cobrança’ em ‘Tipo de Negociação’. Logo abaixo configure o Tipo de movimento que será gerado. Isso quer dizer que o usuário pode ter vários cadastros de tipos de cobranças, cada um com uma configuração distinta. Encontramos outras possibilidades no campo 'Manutenção de Contratos', que oferece as seguintes opções: • 'Não  utilizar  este  tipo  de  movimentação  de  cobrança  para  cobranças criadas no aplicativo Manutenção de Contrato': Ao marcar esta opção, o tipo de movimentação de cobrança não estará disponível para uso no módulo Manutenção de Contratos. • 'Permitir criar itens zerados ao informar este tipo de movimentação de cobrança em contratos fixos e variáveis': Com essa opção marcada, nos contratos cujo destino seja 'Título a Receber', ao gerar a cobrança, os itens zerados com este tipo de movimentação serão somados a outros itens com dados iguais, permitindo a geração de títulos a receber contendo itens zerados. Para contratos cujo destino seja 'Nota Fiscal', itens com valor zero não terão cobranças geradas. Voltando ao CRM, finalize o preenchimento do contato de venda e informe o usuário de próximo contato. Ao acessar o sistema com o usuário de próximo contato, vá à mesma aba ‘Vendas (follow up)’ clique no contato e Parecer. Forneça os pareces para completar o  workflow do atendimento até o encerramento em que será habilita  a mensagem abaixo: Clique  em  ‘Sim’  e  informe  a  senha  do  ‘Supervisor  de  Vendas’  (presente  em Configurador Bimer / CRM / Opções / Contato (vendas follow-up) / Geral / Senha do supervisor de vendas). Em seguida, confirme alguns dados para gerar o contrato como a operação, natureza de lançamentos e se o contrato vai gerar nota ou título. O contato de vendas é encerrado e o contrato criado. Ao acessar a linha do tempo do contrato pelo módulo ‘Manutenção de contratos’, veja o vínculo feito no Ancestral:

## CRM Vendas

O contrato também pode ser criado pelo módulo CRM Vendas. Ao abrir o módulo, no botão ‘Seleção de Pessoas’ selecione vários clientes, clique em ‘Atribuir Contato’ para criar o contato de vendas (ou você pode buscar os contatos já criados no sistema). Para  criar  o  contrato,  use  o  botão  ‘Parecer’  para  finalizar  apenas  o  contato selecionado; ou o botão ‘Seleção de Pessoas / Efetuar parecer’ para encerrar vários contatos de vendas, gerando o contrato no módulo Manutenção. Após criar o contrato, as rotinas são as mesmas. Isso quer dizer que a geração da cobrança, reajuste, auditoria e outros recursos são os mesmos que você acabou de ver. Se tiver dúvida, só voltar e dar uma olhada no manual.

## BiContratos

O cliente entrou em contato e solicitou um relatório dos contratos gerados no último ano para o grupo de produtos “Serviços de Streaming”. O cliente entrou em contato e solicitou um relatório dos contratos que ainda estão pendentes de liberação do último mês. “E agora?” É fácil! Essas e outras situações podem ser atendidas pelo BIContratos. É o melhor módulo para realizar o gerenciamento dos contratos. Dentro dele se pode fazer um filtro dos tipos de contrato, produtos, grupos, data de vigência de contrato, entre outros: Após escolher seu filtro, veja o resultado. Assim como nos outros Bis, o gestor pode agrupar, remover ou adicionar colunas para melhor apuração do seu negócio. E não é só isso! O gestor ainda pode usar o botão ‘Exportar’ para gerar o espelho da tela em formato de planilha. Ele também conta com o botão ‘Seleção de contratos’, com o objetivo de ajustar em massa uma informação comum para vários contratos. Para utilizar arraste os contratos que vai modificar para dentro da tela: Após você tem as opções: • Editar: Ajuste os campos Indexador, datas e Valor de todos os selecionados. • Liberar  contratos:  Marca a  opção  ‘Contrato  liberado’ permitindo  gerar  a cobrança dos contratos que estavam com alguma pendência. • Bloquear Contratos: Desmarca a opção ‘Contrato liberado’ impedindo a geração da cobrança dos contratos que estavam liberados.

## Opções do Financeiro

É verdade que neste material já vimos algumas opções do Configurador Bimer, na aba financeiro, que partir de agora veremos algumas opções complementares que afetam a rotina e são feitas para atender a algumas necessidades específicas. Vamos abrir o Configurador Bimer / Financeiro / Opções / Manutenção de Contratos.

## Cadastro de Contratos

• Obrigar o preenchimento do tipo de movimento de cobrança no item do contrato:  Para um contrato ser gravado será obrigatório o preenchimento do tipo de movimento de cobrança no produto; • Criar o contrato com status ‘liberado’ desmarcado:  O comportamento do sistema é criar o contrato já liberado para a geração da cobrança, mas se marcar essa opção, o sistema criará o contrato bloqueado para que o usuário libere no momento certo. • Não mostrar o campo ‘Dt. final da cobrança’ para itens cuja situação de produto não estiver configurado para desativar item do contrato: Com essa opção, ao vincular uma Situação de produto, no item do contrato que não esteja  com a marcação Desativar o item do contrato, o sistema remove o campo Data final da cobrança. Habilitando apenas para as situações de produto que tenham essa marcação. Para mais detalhes, volte no tópico  Situação do Produto • Mostrar botão de acesso para alteração somente com senha: Quando marcada, faz com que o sistema só permita alterar o campo ‘Data final de cobrança’ com uma autenticação de usuário e senha, ao clicar no ‘cadeado’. Esse campo só habilita se for usada uma Situação de produto, no item do contrato, que esteja com a marcação ‘Desativar o item do contrato’ ou habilita para todas as situações se o campo do tópico anterior estiver desmarcado. • Tipos de movimento de cobrança utilizados como desconto ou acréscimo na nota fiscal: Informe tipos de movimentos de cobrança para dar desconto ou acréscimo na  nota  fiscal,  ou  nota  de  serviço.  Será  usado  apenas  para  os contratos variáveis. ◦ Para o tipo de movimento de cobrança aparecer nessa tela é preciso estar marcado ‘Variável’ em ‘Tipo de negociação’. ◦ A rotina funciona do seguinte modo: ▪ Lance o contrato variável com o tipo de movimento de cobrança comum, informando o produto; ▪ Lance  o  produto  novamente  com  o  valor  do  desconto  ou  acréscimo informando o tipo de movimento de cobrança configurado. ▪ Ao  gerar  a  cobrança,  verifique  se  o  desconto  ou  acréscimo  está informado. ▪ No ‘Faturamento’ verifique que o valor total da nota já aparece com desconto ou acréscimo. Este valor é visto na aba ‘Outros’ da nota. • Dias para antecipação de geração de cobrança: No quadro, defina intervalo de dias para a antecipação de geração da cobrança. Será habilitado um novo campo na aba ‘Dados da cobrança’ do manutenção de contratos com a listagem de dias. Você pode marcar qual desses dias é o padrão para antecipação de cobrança, para ser sugerido ao editar ou incluir o contrato: ◦ Em outros módulos também é habilitada esta configuração, se você quer ver quais são, clique no símbolo de interrogação.

## Reajuste/Repasse

- Indexador: Escolha seu Indexador de reajuste padrão para ser resgatado, ao
incluir um item no contrato.

- A opção abaixo, ‘Permitir aplicar indexador com cotação negativa na rotina de
reajuste de cobrança’ é usada para reajustar cobranças para valores menores que o atual da cobrança. Como assim? A cobrança possui valor de R$ 1.000,00, o indexador tem cotação de -2. Multiplicando 1.000 por -2 o novo valor da cobrança será R$ 998,00. Se as cobranças sempre são ajustadas para mais, não precisa marcar a opção.

- Aplicar reajuste a cada: Escolha um período de reajuste de cobrança padrão
para ser resgatado, ao incluir um item no contrato.

- Sugerir a pessoa de repasse e alíquota de comissão: Se a empresa trabalha
com vendas e já tem as comissões configuradas, essa marcação é uma boa! O sistema resgata a pessoa de repasse e a alíquota de comissão, como se o Manutenção de Contratos fosse um módulo de vendas. Atente-se às configurações abaixo:

- Serão usadas as marcações presentes no Configurador Bimer / Geral / Opções /
Pessoa / Adicionais, campo ‘Pessoa para repasse’ (Representante/Funcionário). Por exemplo: Na imagem abaixo configurei para Trabalhar com Ambas as pessoas na comissão (representante e funcionário), e Sugerir apenas o principal no repasse: ◦ A alíquota de comissão, segue a hierarquia que você já tá acostumado:

- Produto
- Prazo
- Operação
- Pessoa relacionada no cliente
- Representante/Funcionário
• Criticar  o  cadastro  de  contrato  caso  o  representante  da  pessoa  não esteja vinculada como repasse na capa ou no item, caso a pessoa esteja vinculada a uma representação: Quando o representante principal do cliente não está informado no contrato (ou está informado com repasse zerado), o sistema avisa o usuário. Se na empresa for fundamental incluir a comissão nesse esquema de representação, marque essa opção. • Padrão  para  número  de  cobranças  que  permitirá  cálculo  de  repasse: Defina um número de cobranças limite para o cálculo de comissão. Para ficar mais claro, segue um exemplo: Serão geradas 10 cobranças de um contrato e quero que o vendedor seja comissionado só nas 3 primeiras cobranças e não em todas. Para isso, basta preencher este campo. Se o valor for igual a zero, o vendedor sempre ganhará comissão. Ao inserir a pessoa de repasse o usuário observa essa configuração e, se tiver permissão, pode alterar para a pessoa de repasse. • Não mostrar o campo: 'Número de cobranças que permitirá cálculo de preasse para esta pessoa.':  Pode-se omitir essa opção na tela do item do contrato, quando a pessoa de comissão for um representante. Isso faz com que não seja possível colocar um usuário e senha na tela do contrato para mudar o número de cobranças para gerar comissão.

## Geração de Cobrança

Para facilitar, o tópico será mostrado com numerações, ok? 1 Na tela principal do contrato tem o campo ‘Cliente responsável pelo financeiro’. Ao gerar a cobrança para nota fiscal ou título a receber, o sistema usará a pessoa que estiver neste campo para gerar e totalizar os contratos em apenas um documento, em nome do ‘Cliente responsável pelo financeiro’ (em vez do Cliente). 1.1 O sistema só conseguirá aglutinar tudo num mesmo documento, se as informações  dos  itens  forem  iguais  (ex:  mesmo  vencimento,  tipo  de movimento de cobrança etc.). 1.2 A  linha  do  tempo  demonstra  o  documento  gerado  com  os  contratos aglutinados. 2 Faz o cálculo do valor a ser pago na primeira cobrança, de acordo com a diferença entre a data de emissão e data da primeira cobrança. Afeta apenas os ‘contratos fixos’. 2.1 Exemplo: emissão 21/01/20xx

- Vencimento da primeira parcela: 05/02/20xx
- Diferença de dias: 15 dias
- Neste exemplo o valor cobrado não será total, mas proporcional a 15 dias.
2.2 Ao  marcar ‘Considerar  a  data  de  início  de  carência  na  cobrança proporcional’, em vez de usar a data de emissão o sistema usa a data fim de carência (dentro do item) para a cobrança do contrato proporcional. 3 Com essa marcação a cada contrato é gerada uma nota fiscal diferente. E se ela estiver desmarcada? O sistema pode aglutinar vários contratos em uma única nota, desde que os dados a seguir não difiram, em cada contrato: Pessoa, vencimento, natureza de lançamento, tipo de cobrança, forma de pagamento, conta  bancária  e  tipo  de  serviço  (item  da  lista  de  serviço  no  cadastro  de produtos (aba Geração NF-E). 3.1 Essa opção só funciona, quando o destino do contrato é nota fiscal. 4 Na nota ou título gerados pelo manutenção de contratos, em vez de aparecer o produto  do  contrato,  será  levado  um  item  padrão  configurado  em  um  dos caminhos  que  o  usuário  escolher  (abaixo).  Se  o  produto  do  contrato  será utilizado desmarque a opção. Isso pode ser feito em empresas onde controlam internamente um produto e no momento de gerar o documento oficial para o cliente utilizar outra descrição. 5 Gere na observação da nota fiscal as informações aglutinadas dos itens dos contratos fixos e variáveis. 6 Gere na observação do título a receber os números dos contratos. 7 Marcando estas opções, as cobranças fixas ou variáveis serão geradas sem a descrição dos produtos na nota fiscal e/ou títulos a receber.

## Outras Configurações do contrato

Veja as configurações de acordo com a numeração da imagem. 1 Informe aqui a data de início de utilização do sistema. Se você informar ali 01/01/2022 não poderá gerar contratos com data de vencimento inferior a essa data. 2 Se quiser analisar os contratos excluídos em consultas e relatórios marque essa opção. 3 Alguns  campos  presentes  na  tela  de  cadastro  do  contrato  possuem  uma proteção para que somente usuários com acesso à rotina no sistema Cadastro de Usuários possam acessá-los. Mesmo que o usuário tenha acesso, precisa clicar no cadeado (ao lado do campo desejado) e fazer a autenticação para ajustar um campo. 3.1 Ao marcar essa opção no configurador, para os usuários que tenham acesso à rotina no cadastro de usuários, o campo não aparece com proteção, e os cadeados são desabilitados. 4 Se algum item no contrato tiver seu valor reduzido por alguma espécie de benefício ou dedução para o cliente, os usuários que estiverem preenchidos aqui serão notificados por e-mail. 5 Esse  campo  vem  em  apoio  à  marcação  anterior.  Se  desejar  gerar  um atendimento para registrar a redução de algum item no contrato, informe aqui um tipo de atendimento, para que o sistema faça a criação automaticamente. Mas para quem vai esse atendimento? 6 O atendimento de redução no valor do contrato vai para o usuário informado neste campo. 7 Coloque  aqui  uma  tabela  de  informação  complementar  para  ser  usada livremente na inclusão ou edição do contrato. Se o usuário quiser detalhar ainda mais  informações particulares de sua empresa no contrato, ele utiliza este campo. 7.1 Exemplo: Uma pequena pesquisa, com perguntas feitas para o cliente. 7.2 A tabela é cadastrada no Configurador Bimer / Geral / Outros Cadastros / Informações complementares. 8 Da tabela que foi inserida no campo 07, você pode escolher um dos campos que fica livre para utilização do usuário do manutenção de contratos. 9 Você  pode  informar  uma  característica  de  pessoa  para  ser  considerada  no recurso de auditoria de inconsistências. Apenas quem tiver essa característica será considerada na auditoria. 10 Trabalha  em  conjunto  com  o  campo  09.  Ao  informar  uma  operação  neste campo, na auditoria de inconsistências serão levadas em conta os contratos das pessoas que possuam a característica do campo 09, com operações diferentes das que estiverem no campo 10. 10.1 Veja que a auditoria mostra duas inconsistências: 10.1.1 Contratos  de  pessoas  com  a  característica  'XXXX'  que possuem operação diferente da configurada em Configurador do Financeiro, Ferramentas, Opções, aba Manutenção de contratos, aba Outras configurações do contrato:  Exibida para os clientes que possuem a característica informada no campo ‘Característica da pessoa a ser considerada’, porém possuem contratos com uma operação diferente da informada no campo ‘Operações a serem verificadas nos contratos das pessoas com a característica acima’. 10.1.2 Cliente  com  contratos  que  possuem  operações  diferentes: Esta  inconsistência  é  exibida  quando  um  cliente  possui  mais  de  um contrato, e estes contêm operações diferentes entre si. 11 Os campos desta seção serão utilizados em caso de cancelamento ou devolução de um ou mais itens do contrato.

## Tarefas

Sabia que o gerente eletrônico também pode entrar na sua vida quando trabalha com manutenção de contratos? Mas fique tranquilo que ele vem para ajudar! Por meio da tarefa  ‘GeAtualizaStatusProdutoCobranca.exe’.  Quando  ela  está  configurada, automatiza alguns processos que o usuário faria manualmente:

1. Se não tiver nenhum título a receber vencido em aberto (títulos do contrato), a
situação do produto mudará automaticamente no contrato para a que estiver neste  campo.  Imagine  que  a  situação  do  produto  estava  Pendente  de Pagamento, quando o título foi quitado passou para Pleno Atendimento.

2. Se o título a receber foi quitado o item sai da condição de cobrança paralisada.
Exemplo: A empresa paralisou a cobrança até resolver um erro no fornecimento do serviço. Após resolver o erro, cliente paga o título e a cobrança volta ao normal.

3. Se o título a receber foi quitado o item sai da condição de cobrança suspensa.
Exemplo: Enquanto o cliente estava com pendência no pagamento o produto estava nessa situação, após o pagamento ele volta ao normal.

4. Se o período de vigência do contrato chegar ao fim, a situação do item no
contrato  será  alterada.  Exemplo:  A  situação  estava  em  Pleno  Atendimento, passou para Fim do Contrato. É importante configurar essas opções para que o gestor possa analisar os contratos de modo correto. Imagine que o gestor puxe todos os produtos que estão com cobrança suspensa  e mande o setor de cobrança entrar em contato com os clientes para receber pelo valor do serviço prestado. Contudo, um dos clientes já pagou o valor há uma  semana,  mas  os  usuários  esqueceram  de  mudar  no  sistema.  Vai  ficar  uma situação chata com o cliente, fora o tempo e recursos gastos para analisar e entrar em contato de modo desnecessário. Informação: Para configurar a tarefa no gerente eletrônico alguns passos são fundamentais:

1. Configurador  Bimer  /  Geral  /  Tarefas,  vincule  o  sistema  ‘1430  –
GeAtualizaStatusProdutoCobranca.exe’ com o Início da Validade igual à data atual;

2. Configurador Bimer / Geral / Tarefas Agendadas, vincule a tarefa do passo 1.
Defina o período de ocorrência e a frequência, como diário por exemplo (já que a empresa pode ter títulos sendo baixados diariamente).

3. Executar o módulo ‘Gerente Eletrônico’ com um usuário que tenha permissão
no cadastro de usuário ao sistema ‘GeAtualizaStatusProdutoCobranca’.

4. O  arquivo  ‘GeAtualizaStatusProdutoCobranca.exe’  precisa  estar  na  pasta  de
instalação do Bimer.

## Cobranças suspensas/paralisadas

1 Ao suspender a cobrança de um dos itens no contrato, a pessoa recebe essa característica automaticamente. Exemplo: Acesso Bloqueado Por Atraso. 2 Ao paralisar a cobrança de um dos itens no contrato, a pessoa recebe essa característica automaticamente. Exemplo: Cliente Sem Usar o Produto Por Erro de Software. 2.1 Se tiver dúvida sobre como cadastrar acesse o tópico: Característica de Pessoa. 3 Informe o Número Máximo de dias que será permitido entre as datas Inicial e Final de cobrança suspensa e paralisada no cadastro de contratos. Se deixar como 0 não ocorrerá crítica e o usuário poderá usar qualquer intervalo. Se a empresa  possuir  uma  política  interna  para  suspensão  e  paralisação,  é fundamental configurar esses campos. 4 Para os itens paralisados em determinado período o usuário pode marcar a opção Gerar cobrança para os produtos cuja data de vencimento esteja fora do período de paralisação, para que o período que não esteja paralisado permita gerar a cobrança corretamente. Se marcar a opção de Somente exibir log o sistema informa que o contrato está paralisado e não permite gerar a cobrança nos períodos não paralisados. 5 Para  os itens suspensos em determinado período o usuário pode marcar a opção Gerar cobrança para os produtos cuja data de vencimento esteja fora do período de suspensão, para que o período que não esteja suspenso permita gerar a cobrança corretamente. Se marcar a opção de Somente exibir log o sistema informa que o contrato está suspenso e não permite gerar a cobrança nos períodos não paralisados.
