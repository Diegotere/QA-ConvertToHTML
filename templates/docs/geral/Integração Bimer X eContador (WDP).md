# Integração Bimer x eContador (WDP) — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Fluxo de Integração](#fluxo-de-integracao)
- [Configurações](#configuracoes)
- [Configurações no WDP](#configuracoes-no-wdp)
  - [Central eContador](#central-econtador)
  - [Dados do Contador](#dados-do-contador)
- [Configurações no Bimer](#configuracoes-no-bimer)
  - [Tipos de Processamento e Dados do Título Gerado](#tipos-de-processamento-e-dados-do-titulo-gerado)
  - [Fluxo da integração](#fluxo-da-integracao)
  - [Contador Responsável](#contador-responsavel)
  - [Permissões para Usuários](#permissoes-para-usuarios)
- [Rotina de Utilização](#rotina-de-utilizacao)
- [WDP](#wdp)
  - [Status](#status)
- [Integrador Bimer Financeiro X eContador](#integrador-bimer-financeiro-x-econtador)
- [Informações Importantes](#informacoes-importantes)
  - [Status pós-integração](#status-pos-integracao)
  - [Alterações no Título no WDP](#alteracoes-no-titulo-no-wdp)
  - [Vínculo de Título com Pessoa (Bimer)](#vinculo-de-titulo-com-pessoa-bimer)
  - [Passaporte](#passaporte)
  - [Data de Referência](#data-de-referencia)
- [Valor aglutinado e rateio por centro de custo](#valor-aglutinado-e-rateio-por-centro-de-custo)
  - [WDP](#wdp)
  - [Bimer](#bimer)
  - [Se liga!](#se-liga)
- [Integração Automática](#integracao-automatica)
- [Habilitar serviço de integração](#habilitar-servico-de-integracao)
- [Tarefa](#tarefa)
- [Agendamento de Tarefa](#agendamento-de-tarefa)
  - [Informações Importantes](#informacoes-importantes)
- [Problemas Comuns X](#problemas-comuns-x)
- [Soluções Simples](#solucoes-simples)
- [Qual é o meu passaporte?](#qual-e-o-meu-passaporte)
- [PackUp ou eContador?](#packup-ou-econtador)
- [Não foi possível acessar o servidor do](#nao-foi-possivel-acessar-o-servidor-do)
- [eContador. Verifique!](#econtador-verifique)
- [Dados do Contador Incorretos](#dados-do-contador-incorretos)
- [Problemas com BPLs](#problemas-com-bpls)

---


## Introdução

A Alterdata comercializa soluções individuais para os ramos de gestão e contabilidade, certo?! Mas, quem disse que estas soluções não podem se integrar para oferecer mais agilidade aos clientes? A integração entre o eContador, presente no sistema WDP e o A Pagar, módulo do financeiro do Bimer ERP, existe para evitar retrabalho e automatizar mais uma rotina: a criação de títulos a pagar do sistema de departamento pessoal. Por meio desta integração, o usuário pode gerar títulos referentes a pagamento de folha salarial, férias, rescisões, ticket alimentação, ticket refeição, além de guias como INSS/GPS, GRRF, etc. Para a compreensão deste material, e prática das orientações para testes, o ideal é que você tenha uma base de dados do Bimer e também uma base de dados do Pack, utilizando o seu passaporte para a integração. Para a implantação em clientes, jamais utilize o seu passaporte para configurações.


## Fluxo de Integração

A integração entre o sistema de Departamento Pessoal do Pack e o Financeiro do Bimer ocorre de forma simples, consumindo a API do eContador e importando apenas títulos a pagar a partir de lançamentos criados no Pack. Por meio dessa integração, utilizando o passaporte do cliente, a contabilidade pode enviar dados para a nuvem (eContador), e esses dados são recuperados pelo sistema ERP. Esse recurso pode ser utilizado tanto por empresas com contabilidade externa quanto interna. Endereço da API: https://api-econtador.pack.alterdata.com.br/api/v1/integracaoalterdata/obterArquivosDisponiveis


## Configurações

Antes de irmos às configurações, o primeiro ponto de destaque importante é que para utilização desta integração não há necessidade de instalação específica. Durante a instalação do Financeiro do Bimer ERP o módulo Integrador Bimer Financeiro x eContador (IntegradorBimerFinanceiroeContador.exe) é alocado junto ao diretório dos executáveis, já que ele faz parte do pacote de módulos do Bimer! Junto do executável do instalador, cinco arquivosindispensáveis também são criados: são as BPLs necessárias para realização da integração. Sem elas, o módulo sequer poderá ser acessado. Anote o nome delas aí para não esquecer: • altpack_eContador_71010.bpl; • dbrtl250.bpl; • dsnap250.bpl; • rtl250.bpl; • vcl250.bpl. Fique ligado! • Estes arquivos precisam estar emum dos seguintes locais: no mesmo diretório do executável do integrador OU no diretório do Windows (normalmente, C:\Windows\SysWow64 ou System32 de acordo com a versão do Windows); • Evite deixar as BPLs em ambos os locais. Isto pode confundir uma futura análise, por exemplo; • Se uma nova máquina for usar essa integração, ou se estiver dando erros constantes de BPL na utilização do módulo integrador, execute o instalador, na versão que o cliente está usando. Vamos ao que interessa! Hora de configurar a integração para que tudo seja integrado conforme desejado pelo seu cliente…


## Configurações no WDP

No sistema Departamento Pessoal, do Pack, acesse a aba Empresa e clique no botão Empresa. Em seguida, no cadastro da empresa que deseja integrar os dados, vá até a abaConfigurações, abaProcessos. No quadroeContador marque ocheckbox Realiza a integração eContador e também a opção abaixo, Realiza integração Bimer com a empresa. Ao lado, informe o código da empresa, caso os códigos no WDP e Bimer sejam diferentes. Se os códigos da empresa no Pack e Bimer forem os mesmos não há necessidade do preenchimento deste campo. No exemplo da imagem acima, o código 00037 foi preenchido, portanto, o mesmo código deve ser utilizado nas configurações no Bimer. Fique ligado! Após marcar esta opção em, pelo menos, uma empresa no WDP, a aba Central eContador estará habilitada na tela principal do módulo. Caso não apareça, feche a aplicação e reabra.


### Central eContador

Acessando a aba Central eContador, em Configurações, é possível definir de que forma deseja gerar os títulos de folha de pagamento. É possível optar entre gerar título para a empresa, departamento dos colaboradores ou títulos individuais por funcionário. Ainda é possível agrupar por banco ou centro de custo.


### Dados do Contador

Antes de irmos ao Bimer, vamos verificar uma última informação no Pack: os dados do contador! Para isto, ainda no WDP, na aba Empresa, acesse Informações do Contador. Atente-se ao CNPJ ou CPF cadastrado para o estabelecimento contábil responsável pela empresa. Anote o CNPJ que aparece neste campo, pois ele será utilizado para as configurações no Bimer. Também é possível visualizar esta informação no WPHD, na tela principal, em Informações do Contador. Neste segundo local é possível alterar o passaporte e editar dados, porém, este procedimento está voltado à utilização do sistema Pack e não será demonstrado neste material.


## Configurações no Bimer

Vamos às configurações no Bimer, sistema que receberá os títulos integrados a partir da Central eContador. Primeiro precisamos informar as empresas que receberão os dados do eContador. Para isso, acessamos o configurador > aba financeiro > integrações > em integração eContador vamos a aba empresas. Nessa tela marcamos a opção: trabalha com o serviço de integração Bimer x eContador. No campo abaixo adicione a empresa e marque os tipos de lançamentos a serem importados.


### Tipos de Processamento e Dados do Título Gerado

Acesse Configurador Bimer > aba Financeiro >Integrações e, em seguida, clique em Integração eContador. Na aba Documentos, cadastre, edite ou exclua os tipos de processamento que deseja receber no Bimer. Para criar um registro, clique em Novo. É a partir destes cadastros que o sistema entenderá quais tipos de dados deve importar e como ficarão os títulos no A Pagar. Na tela de novo registro, informe: • Empresa do Bimer: Empresa do Bimer para qual o título será gerado; para qual o título será gerado; • Tipo de processamento no eContador; • Tipo de documento no eContador: É habilitado quando o tipo de processamento selecionado for “Demais processamentos/documentos”; • Natureza de lançamento: Que será atribuída ao título a pagar que será criado; • Data de vencimento do título: De acordo com o vencimento recebido da Central eContador ou para o mês seguinte. Ao escolher a segunda opção, o sistema mantém o dia, porém, acrescenta um mês a frente na data de vencimento; • Forma de pagamento: Que será atribuída ao título a pagar que será criado; • Campos de “Situação administrativa”, “Pessoa” e “Categoria”: Esses campos não são informações obrigatórias, porém, o cliente pode preenchê-los caso ele queira que o título gerado contenha essas informações; • Importar somente documentos da pessoa configurada: Permite que o sistema aplique as configurações específicas apenas aos documentos da pessoa informada na configuração. Seu critério de comparação é o CPF da pessoa do Bimer com o CPF da pessoa do eContador; • Código da empresa no eContador: Atenção! Esse ponto gera bastante dúvida: A integração entre os sistemas Bimer (retaguarda) e WDP (Departamento Pessoal) requer uma configuração precisa dos códigos das empresas em ambos os sistemas. Essa configuração estabelece um "de-para" que permite a correta identificação e sincronização dos dados entre os sistemas. No WDP, o código da empresa é configurado no cadastro da empresa, no campo "Realiza a integração Bimer com a empresa". Esse código é utilizado para identificar a empresa no processo de integração com o Bimer. No Bimer, a configuração do código da empresa também é necessária para estabelecer o vínculo com o WDP. A forma como esse código é configurado no Bimer depende da configuração realizada no WDP: Cenário 1:Se nenhum código da empresa foi informado no campo "Realiza a integração Bimer com a empresa" no WDP, o código de cadastro da empresa no WDP deve ser utilizado na configuração da empresa no Bimer. Cenário 2: Se um código da empresa foi informado no campo "Realiza a integração Bimer com a empresa" no WDP, esse mesmo código deve ser utilizado na configuração da empresa no Bimer. • Campo Regra: Esse campo só estará disponível se a base de dados estiver configurada para trabalhar com autorizador gerencial por regra para inclusão de títulos a pagar. É obrigatório selecionar a regra de critério de análise do título. Caso o usuário utilizado para fazer a integração não tenha autonomia para incluir títulos com o valor, será necessário passar pela rotina de autorização gerencial. Para saber mais informações sobre como trabalhar com autorizador gerencial por regras, acesse o manual Bimer UP – Autorizador gerencial (Financeiro); • Criar como título de previsão: Se desejar que o financeiro faça uma conferência do valor, antes de efetuar o pagamento. Isto por que se o título já estiver como realizado, o financeiro já considera que o pagamento pode ser efetuado e permite a baixa do título, diferente do título previsto; • Criar título com valor aglutinado e rateado por centro de custo: Se desejar totalizar ou agrupar os valores dos títulos e divisão por centro de custo, marque a última opção. ◦ Você pode ainda marcar ou desmarcar a opção para várias configurações ao mesmo tempo. Para isso, é só usar o botão Editar em massa na tela de configuração, arrastar os parâmetros para essa tela, clicar emEditare Ativar ou desativar a criação de título com valor aglutinado e rateado por centro de custo. Entenda melhor o recurso: [ ] Opção desmarcada – Importação individual Empresa 01: ➢ Título 01 Folha de pagamento | R$ 10.000,00, Vencimento em 07/10/2022, Sem pessoa, Centro de custo 01 (100%) ➢ Título 02 Folha de pagamento | R$ 6.000,00, Vencimento em 07/10/2022, Sem pessoa, Centro de custo 02 (100%) ➢ Título 03 Folha de pagamento | R$ 4.000,00, Vencimento em 07/10/2022, Sem pessoa, Centro de custo 03 (100%) ➢ Título 04 Folha de pagamento | R$ 30.000,00, Vencimento em 15/10/2022, Sem pessoa, Centro de custo 04 (100%) ➢ Título 05 Férias |R$ 10.000,00, Vencimento em 10/10/2022, CPF 123456789, Centro de custo 01 (100%) ➢ Título 06 Férias R$ 8.000,00 | Vencimento em 10/10/2022, CPF 987654321, Centro de custo 02 (100%) [X] Opção marcada – Importação aglutinada Empresa 01: ➢ Título Folha de pagamento 01 | R$ 20.000,00 Vencimento em 07/10/2022, Sem pessoa, Centro de custo: 01 (50% = Tít. 01 - R$10.000,00) / 02 (30% = Tít. 02 - R$ 6.000,00) / 03 (20% = Tít. 03 - R$ 4.000,00) ➢ Título 02 Folha de pagamento 02 | R$ 30.000,00 Vencimento em 15/10/2022, Sem pessoa, Centro de custo 04 (100%) ➢ Título de Férias 01 | R$ 10.000,00 Vencimento em 10/10/2022, CPF 123456789, Centro de custo 01 (100%) ➢ Título de Férias 02 | R$ 8.000,00 Vencimento em 10/10/2022, CPF 987654321, Centro de custo 02 (100%) Como você pode notar, para aglutinar os títulos usamos os 4 parâmetros abaixo: • Empresa; • Data de vencimento; • Tipo (Férias, Rescisão, Décimo Terceiro…); • Pessoa; • E dentro do título aglutinado é feita a divisão por centros de custos (ou setores) que são originados do Departamento Pessoal. Para mais detalhes sobre a rotina de geração com total por valor e rateio por centro de custos clique aqui.


### Fluxo da integração


### Contador Responsável

Lembra das Informações do Contador, que vimos lá no WDP? É hora de utilizá-las no Bimer! Cadastre o estabelecimento contábil ou contador no Cadastro de Pessoas do Bimer, especificamente na categoria Terceiros. Em seguida, informe esta pessoa como contador responsável no cadastro da empresa, aba Financeiro, conforme imagem a seguir. Fique ligado! A integração somente ocorrerá com sucesso se o CNPJ ou CPF do contador responsável apontado no cadastro da empresa no Bimer for o mesmo configurado no WDP.


### Permissões para Usuários

Agora que a integração já está praticamente toda configurada, é importante dar acesso aos usuários para que possam acessar o Integrador Bimer Financeiro X eContador. Seja por perfil ou em permissões individuais do usuário, conceda acesso ao sistema 000190 – Integração Bimer X eContador. No quadro de acessos, um único acesso é passível de bloqueio: Limpar dados do Passaporte. É recomendável que somente os usuários com conhecimento da integração e possuidores dos dados de acesso ao Passaporte Alterdata tenham este acesso.


## Rotina de Utilização

Agora que tudo está configurado, vamos ao que interessa! Como realizar a integração.


## WDP

No WDP, após gerar o lançamento desejado (cálculo de folha de pagamento, por exemplo), utilize a Central eContador para realizar a liberação dos títulos para o Bimer. Os títulos gerados são apresentados em cards, com dados pertinentes ao lançamento e à integração. Se liga! Tem dúvidas sobre como gerar lançamentos? Utilize o Centro de Aprendizagem ou materiais do WDP para verificar como fazê-los! Veja neste link, como realizar o cálculo de folha, por exemplo: • Cálculo de Folha (Centro de Aprendizagem): https://ajuda.alterdata.com.br/wdp/calculo-da-folha-31295485.html Realize o filtro, informando a empresa e, opcionalmente, data de pagamento. Além disso, é possível utilizar o campo de pesquisa para digitar algum trecho de referência, como “Antônio” (nome do funcionário), “Folha mensal”, valor, período, etc. Em seguida, selecione os títulos que deseja enviar na integração e em seguida, clique em Liberar Títulos, conforme imagem a seguir. A partir desse momento os títulos estarão liberados na Central eContador, prontos para serem integrados ao Bimer.


### Status

Note que, no card do título, há um status correspondente ao título no campo Mensagem. Inicialmente, os títulos recebem status Aguardando integração manual. Posteriormente, quando são liberados, recebem o status Integrado – Aguardando ser importado pelo Bimer e, por fim, quando são importados, recebem o status Integrado – Importado pelo Bimer. Também é possível utilizar os filtros para uma melhor localização dos cards. Perceba que, após liberados, os títulos recebem um número de documento. Este número é sequencial e serve para identificar o lançamento na Central eContador. Você verá em breve que o título gerado no Bimer fará referência a este número.


## Integrador Bimer Financeiro X eContador

Já que os títulos estão aguardando serem importados pelo Bimer, vamos à quem realiza isso! Acesse oIntegrador Bimer Financeiro X eContador, selecione a empresa, período desejado (emissão ou vencimento) e os tipos de lançamentos a serem importados. Ao clicar em Importar pela primeira vez, no módulo Integrador Bimer Financeiro X eContador, informe os dados de acesso do Passaporte Alterdata. A partir da versão 11.00.05.00, ao confirmar as informações do Passaporte, o sistema cria dois arquivos no mesmo diretório que estiver o executável do Integrador “, os arquivos são: • Altpackup_integracao_suite.txt e • Altpackup_integracao_suite.ini. Em versões anteriores, os arquivos eram criados em C:\Windows. A partir da versão 11.00.05.00, com o ajuste do diretório, elimina falhas decorrentes da falta de permissão do usuário do Windows para criar/alterar arquivos no diretório C:\Windows. Isso é comum em usuários que utilizam a Nuvem Alterdata (cloud), entre outros casos onde o usuário da máquina não possui permissão no diretório C:\Windows. Atenção: Conforme observado, é imprescindível que o usuário da máquina possua permissão de acesso e escrita no diretório para que o sistema possa criar os arquivos contendo os dados do passaporte. Por essa razão, recomendamos que você confirme a criação dos arquivos, mesmo que o sistema apresente a mensagem confirmando que a autenticação foi realizada com sucesso. Seguindo, clique em Importar e “voilà”. Integração realizada com sucesso! Os títulos já estarão no módulo A Pagar. Observação: na versão 10.00.11.00 do IntegradorBimerFinanceiroeContador foi implementada uma melhoria em que, ao realizar a importação dos dados do eContador, a data de referência dos títulos seja preenchida com a mesma data de referência do documento no WPD. A seguir, o sistema gera uma relação de ocorrências, com os números dos títulos importados. Como se trata de folha de pagamento de mensalistas, o sistema atribui o número do título contendo “FMensal” e o número do documento na Central eContador, o mesmo que fora vinculado no card na tela de visualização. Caso haja lançamentos pendentes na Central eContador e o sistema não consiga importar lançamentos por questões de configuração da integração, a relação de ocorrências também é apresentada. Veja a seguir a informação dos documentos que não foram integrados, seguidos do código da empresa ao qual estão vinculados. Esta tela é apresentada após a mensagem informativa do sistema, contendo o seguinte texto: “Não existem documentos a serem importados com o filtro selecionado. Verifique!”


## Informações Importantes


### Status pós-integração

Após serem importados pelo Bimer, os títulos têm o status alterado na Central eContador. Para visualizar o novo status, clique em Atualizar.


### Alterações no Título no WDP

Caso o lançamento importado seja alterado no WDP/Central eContador, os dados não são integrados com o Bimer. Portanto, se precisar recalcular a folha de pagamento, por exemplo, excluao título no Bimer, realize as devidas alterações e importe um novo título para o Bimer. ◦ Se o título ainda não tiver sido liberado na Central eContador, é possível excluí-lo para evitar a integração indevidamente. Portanto, somente libere o título após conferência; ◦ Os títulos já liberados não podem ser excluídos; ◦ Caso seja necessário anular uma folha já processada, exclua o título no Bimer manualmente, desmarque a liberação na Central eContador e refaça todo o processo no DP e depois reintegre ao Bimer.


### Vínculo de Título com Pessoa (Bimer)

Na versão 11.01.03.00 foi liberado o recurso que permite importar documentos do eContador com configurações específicas para cada pessoa, garantindo maior controle e personalização na importação de títulos. Importante! • A opção “Importar somente documentos da pessoa configurada” foi adicionada e pode ser ativada em Configurador > Financeiro > Integrações > Integração eContador > Documentos; • Com essa configuração marcada, o sistema aplica os parâmetros de importação somente aos documentos vinculados à pessoa configurada, identificada pelo CPF, evitando impactos em documentos de outras pessoas; • Para cada empresa e tipo de documento no eContador, será permitida apenas uma configuração padrão sem a opção marcada, que servirá como parâmetro quando não houver uma configuração específica. Observações gerais sobre o vínculo de pessoa: • Caso a opção acima esteja marcada, mas o sistema não localizar uma pessoa com o mesmo CPF existente no Pack, o título não será importado; • Caso tenha uma pessoa informada no campo apontado na imagem acima, mas a opção de baixo não estiver marcada, o sistema importa o título com os dados da pessoa apontada na configuração; • Caso não tenha pessoa informada na configuração acima, o sistema pode agir de duas maneiras: ◦ Caso ele encontre no Bimer o mesmo CPF vindo do Pack, ele faz o vínculo do título com a pessoa cadastrada no Bimer; ◦ Caso ele não encontre o mesmo CPF do Pack na base do Bimer, ele importa o título somente com o nome da pessoa, mas sem o vínculo com o cadastro do Bimer.


### Passaporte

Lembra daquela tela de login do Passaporte Alterdata? Ela só aparecerá em duas ocasiões: Caso clique em Limpar passaporte e na primeira importação.


### Data de Referência

A partir da versão 10.00.11.00 do Bimer e 7.10.14.7 do Departamento Pessoal, a data de referência do título traz o período de geração do documento do Departamento Pessoal, trazendo uma compreensão melhor do evento gerado:


## Valor aglutinado e rateio por centro de custo

Na parte de configurações, em Tipos de Processamento e Dados do Título Gerado falamos da marcação Criar título com valor aglutinado e rateado por centro de custo. Veja abaixo, quais pontos no WDP e no Bimer são fundamentais para que os lançamentos sejam criados corretamente, respeitando essa marcação:


### WDP

• No menu Empresa / Empresa / Configurações / Processos, marque Controla transferências entre departamentos/tomadores. • No menu Empresa / Departamento / Cadastre ou Edite os departamentos e informe o Código de chamada do Centro de custo do Bimer: • No menu Funcionário / Funcionário / Informações da folha / Informações de cálculos vincule o Departamento desejado: • Em relação aos valores da folha, é necessário acessar aAba Central do eContador / Configurações,marqueEmpresaeAgrupar um título por centro de custo. Após isso, gere os processamentos de modo comum. Veja como fica a minha folha de pagamento na Central do eContador. Note que o evento é da folha de pagamento, mas foram gerados valores separados por centro de custos ou departamentos dos funcionários:


### Bimer

Veja como fica a importação do título.Foi geradoum único título paravários movimentos do eContador: E o título a pagar como ficou? Olha ali o título aglutinado e o rateio por centro de custo:


### Se liga!

Para que essa integração com centro de custos funcione corretamente, abra o módulo Cobertura contábil, no menu Cobertura / Financeiro / Contas a Pagar / Inclusão de Títulos / Insira a natureza e marque que trabalhe com centro de custos: 1.O código do centro de custo que será informado no cadastro de departamento do WDP é obtido no Cobertura contábil / em Cadastros e Configurações / Centro de custo / Campo código. 2.Se a empresanão trabalhar com centro de custos, as configurações mencionadas para esse fim não precisam ser feitas, deste modo será aplicada apenas a totalização por valores e não o rateio por CC.


## Integração Automática

É possível realizar a integração de maneira automática, por meio do cadastro e agendamento de tarefas no Bimer.


## Habilitar serviço de integração

Antes de tudo, precisamos marcar a opção Trabalha com serviço de integração Bimer X eContador, noConfigurador Bimer > Financeiro > Integrações > Integração eContador, conforme já vimos anteriormente. Os dados de Natureza de Lançamento e Forma de Pagamento com os quais os títulos serão criados seguirão sendo recuperados da configuração principal neste mesmo local.


## Tarefa

O cadastro da tarefa é simples, utilizando inclusive o próprio módulo integrador como sistema. Para isto, acesse Configurador Bimer > Geral > Tarefas e clique em Novo. Informe o sistema Integração Bimer X eContador e preencha o campo tarefa com o nome desejado.


## Agendamento de Tarefa

Assim como os cadastros de outras tarefas, como backup e retorno de NFS- e, por exemplo, o agendamento precisa de uma periodicidade. Ainda no Configurador Bimer > Geral, acesse Tarefas Agendadas e clique em Novo. Preencha os campos de acordo com a sua preferência e grave.


### Informações Importantes

• É importante atentar-se para o fato de que o Gerente Eletrônico normalmente é executado no servidor, portanto, fique ligado para que as BPLs estejam no mesmo diretório do executável e que estejam compatíveis com a versão; • Cuidado com agendamentos com periodicidade muito frequente, como “a cada 1 minuto”, por exemplo. Isto pode ocasionar travamentos desnecessários, caso o fluxo de geração não seja tão frequente assim no WDP; • O executávelIntegracaoBimerFinanceiroeContador.exeprecisa estar no mesmo diretório em que se encontra o Gerente Eletrônico (GeAgente.exe). Caso contrário, a integração não ocorrerá, tendo em vista que a tarefa não será executada.


## Problemas Comuns X


## Soluções Simples

Nem tudo são flores… Em alguns momentos, podem ocorrer algumas coisas indesejadas, que impedem o funcionamento da integração. Veja a seguir alguns destes “problemas” e saiba como resolver de maneira simples e objetiva!


## Qual é o meu passaporte?

Pode ocorrer de, em máquinas distintas, os passaportes utilizados na integração serem diferentes. Isso é possível porque otoken do passaporte fica salvo emC:\ Windows, com o nome altpackup_integracao_suite.txt. O botão Limpar passaporte apenas apaga este arquivo, para que o sistema entenda que o arquivo não existe e então solicita o login novamente.


## PackUp ou eContador?

Em 2021, por questões internas e comerciais, o sistema recebeu o nome eContador, abandonando o nome antigo: PackUp. Caso o cliente não saiba a diferença, é simples: o que mudou foi apenas o nome do produto. Todas as funcionalidades seguem como antes.


## Não foi possível acessar o servidor do


## eContador. Verifique!

Esta integração acontece apenas para os clientes que possuem o sistema Pack em seu cadastro junto à Alterdata. Ou seja, antes de tudo, verifique no CRM se o cliente possui o Pack em seus produtos.


## Dados do Contador Incorretos

Na trave! Tudo configurado, mas a seguinte mensagem é apresentada: • Não foi possível acessar o servidor do eContador utilizando o CPF/CNPJ NNN.NNN.NNN-NN do contador responsável informado em Configurador Bimer / Geral / Empresas / Financeiro / Integração eContador, campo "Contador responsável". Verifique! Acesse as informações do contador no Pack e confira o cadastro da pessoa vinculada como Contador Responsável, no local indicado na mensagem.


## Problemas com BPLs

Lá no início deste material, você viu a informação de que as BPLs estarão no diretório do executável. Confira as permissões do usuário e, se for o caso, teste a abertura do integrador com o usuário administrador do Windows. Outro detalhe importante é que, em versões anteriores, o sistema utilizava outras BPLs e DLLs para a integração, então fique atento, pois caso realize uma atualização apenas substituindo módulos, estes referidos arquivos não serão substituídos, ocasionando mensagens de ausência.
