# Exportação de Dados — Neogrid — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é o Neogrid?](#o-que-e-o-neogrid)
- [Cadeia de suprimentos](#cadeia-de-suprimentos)
- [Sincronização da cadeia de suprimentos](#sincronizacao-da-cadeia-de-suprimentos)
- [Exportação de Dados](#exportacao-de-dados)
  - [ATENÇÃO!](#atencao)
- [Tarefa](#tarefa)
- [Exportador Neogrid](#exportador-neogrid)
- [Intervalo de Execução](#intervalo-de-execucao)
- [Configurações e](#configuracoes-e)
- [Agendamentos](#agendamentos)
- [Configurações – Tarefa](#configuracoes-tarefa)
  - [Configurações para integração](#configuracoes-para-integracao)
  - [Criação da tarefa e agendamento](#criacao-da-tarefa-e-agendamento)
- [Configurações – Exportador Neogrid](#configuracoes-exportador-neogrid)
  - [Instalação](#instalacao)
  - [Configurações para integração](#configuracoes-para-integracao)
- [Layout e Utilização](#layout-e-utilizacao)
- [Formato Flat File Posicional](#formato-flat-file-posicional)
  - [000150|Pedro Carvalho|30000](#000150pedro-carvalho30000)
- [Layout v4.0](#layout-v40)
  - [Nome do arquivo](#nome-do-arquivo)
  - [Layout de posições](#layout-de-posicoes)
  - [Utilização v4.0](#utilizacao-v40)
  - [Exemplo de Arquivo](#exemplo-de-arquivo)
- [Layout v10.2](#layout-v102)
  - [Nome do arquivo](#nome-do-arquivo)
  - [Layout de posições](#layout-de-posicoes)
  - [Utilização v10.2](#utilizacao-v102)
  - [Dados do XML](#dados-do-xml)
  - [Exemplo de Arquivo](#exemplo-de-arquivo)
- [Exportação dos Pedidos de](#exportacao-dos-pedidos-de)
- [Compra](#compra)
- [Configurações para Exportação](#configuracoes-para-exportacao)
  - [Adicionar vínculos (Botão '+' na grid “Vinculo de empresas x](#adicionar-vinculos-botao-na-grid-vinculo-de-empresas-x)
- [Geração dos arquivos](#geracao-dos-arquivos)
- [Geração Manual](#geracao-manual)
  - [exportados, mesmo que já tenham sido incluídos em arquivos de exportação](#exportados-mesmo-que-ja-tenham-sido-incluidos-em-arquivos-de-exportacao)
- [Geração por Agendamento](#geracao-por-agendamento)
- [Layout Pedido de Compra – Padrão NeoGrid](#layout-pedido-de-compra-padrao-neogrid)

---


## Introdução


## O que é o Neogrid?

A Neogrid é uma empresa especializada em soluções para estoque, especificamente para sincronização automática da cadeia de suprimentos.


## Cadeia de suprimentos

Podemos chamar de cadeia de suprimentos todo o fluxo de organizações, pessoas, atividades e recursos relacionados à entrega dos produtos a um cliente. Algumas pessoas conhecem este conceito como “cadeia logística” ou, em seu termo literal em inglês, “supply chain”. Este fluxo consiste na abrangência desde a matéria–prima até a entrega ao consumidor final.


## Sincronização da cadeia de suprimentos

A Neogrid possui uma solução em software que realiza a sincronização automática da cadeia de suprimentos, coletando dados do varejo ou distribuidor e disponibilizando para as indústrias, por exemplo. Sendo assim, a indústria consegue saber qual a posição do estoque de um determinado distribuidor ou varejista, podendo tomar ações para reposição. O Bimer, por sua vez, é utilizado como sistema de gestão (de estoque) por estes varejistas ou distribuidores e disponibiliza – por meio desta exportação de dados – as informações que serão captadas pela Neogrid.


## Exportação de Dados

É possível realizar a exportação da posição do estoque dos produtos, vendas e notas fiscais do Bimer para a Neogrid. Para isto, temos duas possibilidades, por meio de tarefa ou do Exportador Neogrid. A opção de tarefa está de acordo com a versão 10.2 do layout exigido pela Neogrid, enquanto o Exportador Neogrid obedece aos critérios da versão 4.0 deste layout.


### ATENÇÃO!

O Exportador Neogrid foi criado especificamente para o layout utilizado para a importação de dados do cliente 156605. Assim, não deve ser instalado em outros porque não funcionará, uma vez que foi desenvolvido com os IDs específicos. O tópico será mantido no manual exclusivamente para caso seja necessário atender a este cliente.


## Tarefa

A tarefa é executada pelo Gerente Eletrônico, sendo necessário realizar a sua criação em Configurador Bimer / Geral / Tarefas (detalhamento no tópico de Configurações e Agendamentos). Esta modalidade não requer quaisquer instalações. Podem ser exportados dados de posição de estoque. Estes dados, por sua vez, são extraídos do Bimer e gravados em arquivo ‘.txt’. Os demais dados da integração são captados pela Neogrid através dos XMLs de notas emitidas.


## Exportador Neogrid

O Exportador Neogrid é um sistema desenvolvido pela Alterdata em linguagem ‘.NET’ que realiza integração com a base de dados Bimer, lendo informações do sistema e as exportando em arquivo ‘.txt’. Esta aplicação independe da instalação do Bimer na máquina em que é executado. Assim como a tarefa, o Exportador gera os dados de posição de estoque. Porém, além disso, também são exportados os produtos, vendedores, clientes dados de vendas e notas fiscais.


## Intervalo de Execução

De acordo com os manuais de integração da Neogrid, a integração de dados deve ser feita uma vez por dia. Este critério é obrigatório para a versão 4.0. Já a versão 10.2 permite que seja gerado mais de um arquivo por dia, caso necessário.


## Configurações e


## Agendamentos

Como tratam–se de duas versões de layout de integração e formas distintas de exportação, as configurações para utilização da exportação por tarefa ou exportador são diferentes. Não haverá nenhuma intervenção das configurações entre as modalidades. As configurações para a tarefa serão exclusivas da tarefa, assim como as configurações do Exportador Neogrid serão exclusivas desta aplicação.


## Configurações – Tarefa


### Configurações para integração

Acesse Configurador Bimer / Geral / Opções / Integração Neogrid. Neste local, faremos as configurações para funcionamento da rotina. Preencha os campos de acordo com a listagem abaixo: • Diretório padrão: informe a pasta onde serão salvos os arquivos gerados pela integração; • CNPJ do distribuidor: informe o número do CNPJ da indústria que receberá os dados da integração; • Número do relatório: número de referência do documento/mensagem, designado pelo emissor do arquivo da integração; • Tipo de Código do Produto: será considerado o código interno do produto no emissor. Não é necessário que seja o EAN, pois, este também será levado automaticamente; • Empresa para integração Neogrid: informe as empresas que gerarão o arquivo da integração; • Grupo de produto: opcionalmente, informe o(s) grupo(s) de produtos que deseja filtrar para exportar; • Característica de produto: opcionalmente, informe a(s) característica(s) de produtos que deseja filtrar para exportar. Após preencher as informações, grave as configurações realizadas.


### Criação da tarefa e agendamento

Como dito inicialmente, não é necessário realizar instalação, entretanto, é preciso que o executável ‘GeExportaPosicaoEstoqueNeogrid.exe’ esteja presenteno mesmo diretório em que se encontra o Gerente Eletrônico. Esta aplicação será executada em virtude da tarefa criada em Configurador Bimer / Geral / Tarefas, e agendada no mesmo local, em Agendamento de Tarefas. Para criação da tarefa o sistema a ser utilizado é o ‘000216 – Tarefa para exportação de dados para Neogrid’. O nome da tarefa fica a critério do usuário. As demais configurações deste cadastro são opcionais. Em seguida, realize o agendamento da tarefa, definindo preferencialmente um horário que não seja de movimentação na empresa. Acesse Configurador Bimer / Geral / Tarefas Agendadas. • Código: é gerado automaticamente ao clicar em Novo, para criar um agendamento; • Nome do agendamento: informe um nome de sua escolha. Esta informação aparecerá no GEAgente, quando estiver próximo do horário de agendamento; • Tarefa: selecione a tarefa criada no passo anterior; • Ocorrência: selecione diário, para que seja feito todos os dias; • Diário: este quadro é habilitado ao marcar ‘Diário’. Selecione o intervalo de dias entre as execuções. O ideal neste caso é 1 dia; • Frequência: marque a opção ‘Ocorre uma vez às:’ e informe o horário em que ocorrerá a integração; • Duração desta tarefa: marque a opção ‘Sem data final’, para que a exportação ocorra sem prazo final determinado. Atenção: Para que o agendamento seja executado, o GEAgente necessita estar aberto e ativo. Portanto, em casos de suporte, verifique se o Gerente Eletrônico está em execução. Para testar, altere o horário do agendamento rapidamente para três minutos a frente do seu horário atual e observe se o agendamento será processado com sucesso.


## Configurações – Exportador Neogrid


### Instalação

No museu de versões – unidadeM:\ (colaboradores da matriz), encontre em BIMER\Projetos Específicos\GE Exportador NeoGrid o instalador GE Exportador NeoGrid na versão que desejar utilizar. Execute–o e avance as etapas da instalação até sua conclusão.


### Configurações para integração

Posteriormente à instalação, execute–o fazendo login na base de dados em que realizará a exportação de dados, dando duplo clique no ícone que ficará na área de trabalho. Note que, ao abrir, a aplicação é automaticamente minimizada para a bandeja do Windows. O ícone do Exportador Neogrid é exatamente igual ao ícone do Gerente Eletrônico, entretanto, não possuinenhuma relação com o mesmo. O Exportador Neogrid roda independente de qualquer execução do Gerente Eletrônico. Para realizar as configurações, clique com o botão direito sobre o ícone na bandeja do Windows, vá em Opções e clique em Configurações. Na abaGerente Eletrônico, preencha a frequência da verificação. Para que a exportação ocorra uma vez ao dia, preencha a ocorrência a cada 1 minuto e use um intervalo de tempo de 1 minuto. No exemplo acima, a exportação ocorrerá às 22h31min. Utilize as demais opções com as seguintes finalidades: • Habilitar envio de log por e–mail: o Exportador Neogrid enviará um log por e– mail, caso haja alguma inconsistência no momento da exportação; • Habilitar log em tela: além de enviar o log por e–mail, alertará o usuário com um pop–up em tela com as inconsistências da exportação; • Quadro ‘E–mail destinatário’:informe o e–mail que receberá o log supracitado; • Quadro ‘E–mail remetente’: informe os dados da conta que será utilizada para enviar o e–mail de log. Na aba Complementar, preencha as seguintes informações: • Caminho de exportação dos arquivos Alpargatas: informe o diretório em que serão salvos os arquivos da exportação. Note que, neste campo, o nome dado menciona a indústria Alpargatas, a qual informei no início do material que fora o foco da criação deste recurso; • Quadro ‘Complementar’: informe o Supervisor e Gerente de vendas padrão. Estes dados serão levados em todas os registros de vendas; • Empresas a serem consideradas para venda e estoque: selecione as empresas que deseja que tenham seus dados exportados. Todos os campos desta tela são obrigatórios. É importante mencionar que Alpargatas é a indústria que confecciona sandálias Havaianas. O cliente que solicitou este recurso é um distribuidor destes produtos, que por sua vez, tem seu fornecimento realizado pela Alpargatas. Na aba 03 – Clientes, informe os dados de integração dos clientes, realizando uma espécie de “De–Para”, onde apontará os clientes que recebem determinada característica em acordo com seu segmento na Neogrid. Isto dependerá diretamente do cadastro do cliente, portanto, devemos orientar que crie e vincule as características ciente da necessidade deste vínculo. Para adicionar um vínculo, selecione a característica do Bimer no campo à esquerda e o segmento da Neogrid/Alpargatas à direita. Em seguida, clique no botão ‘+’ para confirmar o vínculo e observe que será levado ao quadro abaixo. O campo Código de segmento de cliente padrão será utilizado quando não houver característica na pessoa. Lembrando que para cadastrar uma característica de clientes no Bimer, devemos acessar Configurador Bimer / Geral / Característica da Pessoa. Para realizar o vínculo, podemos utilizar o Cadastro de Pessoa, para realizar individualmente, ou BiPessoa para vincular características em massa. Na imagem acima, utilizei característicasGold, SilvereBronze, entretanto, em um cliente, poderia criar características até mesmo com o nome do segmento, como Atacado, Indústria, etc. Uma característica só pode ser utilizada uma vez, vinculada a um único segmento. A mesma regra serve para os segmentos, que só podem ser vinculadas uma única vez a uma característica. Na aba 05 – estoque, realize o vínculo entre unidade no Bimer e unidade na Neogrid/Alpargatas. Para adicionar um vínculo entre as unidades, utilize o mesmo procedimento utilizado na aba anterior, selecionando os dados e clicando em ‘+’. Abaixo do quadro dos vínculos, temos o código de unidade de medida padrão, que será utilizado caso a unidade presente no documento não esteja neste quadro de vínculos. No campo Grupo de produtos para leitura de vendas/estoque, selecione o grupo que será levado para a exportação. É muito importante ressaltar que todas as configurações desta tela são obrigatórias. Caso deixe de cumprir algum destas exigências, não conseguirá gravar as configurações. Veja outras configurações são necessárias para os produtos: • Os produtos que serão exportados devem possuir código EAN cadastrado; • O produto deve ter um fornecedor principal; • O produtodeve ter informação de quantidade na embalagem informada (Cadastro do Produto / Aba Opções, seção ‘Embalagem (Venda)’; • O produto deve estar vinculado à empresa da exportação. Na aba Vendedor, informe uma pessoa para ser considerado levada na exportação quando não houver uma pessoa de repasse no documento. O preenchimento deste campo é obrigatório. Após realizadas as configurações, clique em Salvar. Este botão valida e salva todas as configurações das abas. Se algo estiver inconsistente, será criticado imediatamente e somente poderá gravar as configurações se tudo estiver preenchido. No exemplo abaixo, não há grupo de produto e vendedor padrão informados. Observe as críticas a baixo:


## Layout e Utilização

Como temos duas versões distintas atendidas por duas modalidades de exportação, precisamos conhecer a utilização e o layout das versões 4.0 e 10.2, que são relacionadas, respectivamente, ao Exportador Neogrid e à tarefa de exportação.


## Formato Flat File Posicional

Os arquivos de exportação em ambas as versões são gerados em formato Flat File posicional, que é um conceito de estrutura de arquivo posicional. Isto quer dizer que cada informação da exportação está em uma posição específica definida previamente por um manual. Utilizando um exemplo simples, desejo integrar dados dos pedidos de compra do meu sistema com um sistema de fornecedores. Portanto, tenho o seguinte pedido: • Número do pedido: 000150; • Nome do solicitante: Pedro Carvalho; • Valor do Pedido: R$ 300,00. Previamente, meu primeiro fornecedor enviou um manual com a seguinte estrutura: [Número do pedido]|[Nome do solicitante]|[Valor do pedido], onde os colchetes ([]) devem ser removidos e os pipes (|) devem ser mantidos para separar os campos. O valor de pedido deve ser preenchido com apenas duas casas decimais. Desta forma, meu arquivo ficaria com a seguinte estrutura: •


### 000150|Pedro Carvalho|30000

Um segundo fornecedor, por sua vez, me encaminhou o seguinte layout de seu manual: • Número do pedido: posições de 1 a 6, 6 caracteres numéricos; • Nome do solicitante:posições de 7 a 26, 20 caracteres alfanuméricos, alinhado à direita e completado com espaços; • Valor do pedido: posições de 27 a 36, 10 caracteres numéricos, onde os dois últimos serão as casas decimais. Seguindo este segundo layout, o arquivo teria a seguinte estrutura: Dentro da estrutura de um arquivo deste tipo, podem conter diversos registros. Estes registros são as linhas do arquivo, e podem trazer informações importantes, e normalmente são iniciados por um valor fixo definido.


## Layout v4.0

> **Observação:** Importante: Arquivo gerado pelo Exportador Neogrid.


### Nome do arquivo

O padrão de nomenclatura do arquivo é composto pelos identificadores abaixo: Nome do arquivo: [NomeProjeto]_[CNPJDistribuidor]_[DataHoraCriação].txt Exemplo: TESTEPROJ_99999999999999_AAAAMMDDHHMMSS.txt Onde: • “TESTEPROJ” é um identificador fixo; • “99999999999999” é CNPJ do distribuidor; • “AAAAMMDDHHMMSS” é a data e hora da criação do arquivo.


### Layout de posições

• Dados numéricos: devem ser alinhados à direita e complementados com zeros a esquerda. Deve-se utilizar a quantidade de casas para decimal proposto na coluna correspondente e não deve haver ponto para representá-lo. Os valores são estritamente positivos e não deve ser utilizado nenhum sinal como ‘+’ ou ‘-’; • Dados Alfanuméricos: Se a informação for obrigatória, deve possuir conteúdo diferente de espaços. O conteúdo deve ser alinhando à esquerda completando com espaços à direita, até o final do campo. • Os registros serão sempre iniciados pelo seu código, conforme determinação do layout. Ou seja, a linha do cabeçalho, iniciará em 01, já a de cliente em 03; • A coluna ‘Tipo’ traz o tipo de dados esperado (AN = Alfanumérico ou N = Numérico); • A coluna ‘Inf. Obrig.’ será preenchida com ‘S’ ou ‘N’, para sim ou não, respectivamente. Quando for obrigatório o preenchimento, a posição não poderá estar vazia; • O Filler deve sempre ser mandado em branco. Veja abaixo os quadros com as posições e instruções da Neogrid para o layout 4.0. Tipo Tam. Tipo de Registro AN - S CNPJ Distribuidor(Filial) N - S Data Hora Geração do documento N - S Versão Layout AN - S Fornecedor N - S Filler AN - N Registro 01 – Cabeçalho Uma única ocorrência Casas decimais Posição Início Posição Fim Inf. Obrig. Tipo Tam. Tipo de Registro AN - S Nome Vendedor AN - S Código Vendedor AN - S Nome Supervisor AN - N Código Supervisor AN - N Nome Gerente AN - N Código Gerente AN - N Filler AN - N Registro 02 – Vendedor Casas decimais Posição Início Posição Fim Inf. Obrig. Tipo Tipo de Registro AN - S Código Cliente AN - S CEP Cliente N - N Uf Cliente AN - S Cidade Cliente AN - S Endereço Cliente AN - S Cliente AN - S Código Segmento Cliente N - S Filler AN - N Registro 03 – Cliente Casas decimais Posição Início Posição Fim Inf. Obrig. Tipo Tam. Tipo de Registro AN - S Numero Nota Fiscal AN - S Série Da Nota Fiscal AN - S Código do Item (Ean/Dun) AN - S Tipo de Código de Produto AN - S Código Da Unidade de Medida AN - S Quantidade Vendida N S Bonificação AN - S Valor Unitário N S Valor Total Bruto N S Valor Total Líquido N S Filler 1 AN - N Tipo Da Nota Fiscal N - S Filler 2 AN - N Descrição Produto AN - N Filler 3 AN - N Registro 04 – Vendas Casas decimais Posição Início Posição Fim Inf. Obrig. Tipo Tam. Tipo de Registro AN - S Código do Item (Ean/Dun) AN - S Data do Estoque N - S Quantidade Estoque N S Código da Unidade de Medida AN - S Tipo de Código de Produto AN - S Filler 1 AN - N Descrição Produto AN - N Filler 2 AN - N Registro 05 – Estoque Casas decimais Posição Início Posição Fim Inf. Obrig. Tipo Tam. Tipo de Registro AN - S Numero Nota Fiscal AN - S Série Da Nota Fiscal AN - S Data Emissão Da Nota Fiscal N - S Tipo Da Nota Fiscal N - S Código Vendedor AN - S Código Cliente AN - S Filler AN - N Registro 06 – Notas Fiscais Casas decimais Posição Início Posição Fim Inf. Obrig. Tipo Tam. Tipo de Registro AN - S Código Interno do Item (Cód. Distribuidor) AN - S Código do Produto (Cód. Ean/Dun) N - S Quantidade de Produtos na Embalagem N - S Preço Cadastrado Unitário do Produto para Venda N S Filler 1 AN - N Descrição Interna do Item AN - S Filler 2 AN - N Registro 07 – Produtos Casas decimais Posição Início Posição Fim Inf. Obrig.


### Utilização v4.0

Para gerar o arquivo de exportação, basta manter o Exportador Neogrid aberto e ativo. Desta forma, os arquivos serão salvos no diretório informado nas configurações. Caso queira forçar uma exportação, basta clicar com o botão direito sobre o ícone do exportador na bandeja do Windows e clicar em ‘Executar’. Em seguida, informe o período que deseja gerar os arquivos. Caso informe mais de um dia, será gerado um arquivo para cada dia.


### Exemplo de Arquivo

Vamos analisar abaixo uma pequena parte de um arquivo gerado por uma exportação. Observe que há sete linhas de registro. Cada uma iniciada por um prefixo, assim como informado no layout: Note também que, de acordo com as tabelas do layout, a UF da cidade está na posição 25 (podemos chamar também de coluna) e possui dois caracteres alfanuméricos. Portanto, analisando o registro 03 do arquivo, conseguimos visualizar que sua UF é Amazonas (AM). O cursor no editor do arquivo está ao lado direito da UF. Portanto, na parte inferior é possível observar “Col: 27”.


## Layout v10.2

> **Observação:** Importante: Arquivo gerado pela tarefa.


### Nome do arquivo

Não há nesta versão uma padronização obrigatória para o nome do arquivo. Entretanto, há uma sugestão de nome, que é seguida pela tarefa do Bimer. O formato é composto pela seguinte estrutura: • Nome do arquivo: [NomeProjeto]_[CNPJDistribuidor]_[CNPJIndústria ]_[DataHoraCriação].txt • Exemplo: TESTEPROJ_8888888888888_99999999999999_AAAAMMDDHHMMSS.txt Onde: • “TESTEPROJ” é um identificador fixo; • “8888888888888” é CNPJ do distribuidor; • “99999999999999” é CNPJ da indústria (que vai receber o arquivo); • “AAAAMMDDHHMMSS” é a data e hora da criação do arquivo.


### Layout de posições

• Dados numéricos: Em caso de campo não obrigatório e não havendo a disponibilidade do dado, não deve ser preenchido, embora o campo deva existir separado por PIPE. Além disso, o ponto decimal deverá estar representado. Deve-se utilizar a quantidade de casas para decimal proposto na coluna correspondente. Se não solicitar informações decimais não é necessário informar o ponto decimal. Os valores são estritamente positivos e não deve ser utilizado nenhum sinal como ‘+’ ou ‘-’; • Dados Alfanuméricos: Para os dados alfanuméricos, não utilize caracteres acentuados, como ‘Ç’, ‘Á’, ‘Ê’, etc ou caracteres especiais como ‘\’, ‘@’, ‘#’, etc. No caso de campo não obrigatório, e não havendo a disponibilidade do dado, não deve ser preenchido, embora o campo deva existir separado por PIPE. • Os registros serão sempre iniciados pelo seu código, conforme determinação do layout; • A coluna ‘Tipo’ traz o tipo de dados esperado (AN = Alfanumérico, N = Numérico ou DT= Data/Hora); • A coluna ‘Inf. Obrig.’ será preenchida com ‘S’ ou ‘N’, para sim ou não, respectivamente. Quando for obrigatório o preenchimento, a posição não poderá estar vazia. Veja abaixo os quadros com as posições e instruções da Neogrid para o layout 10.2.


### Utilização v10.2

Para gerar o arquivo de exportação regularmente, basta manter o Gerente Eletrônico aberto e ativo. Desta forma, os arquivos serão salvos no diretório informado nas configurações deste layout. Caso queira forçar uma exportação, acesse Configurador Bimer / Geral / Outros Cadastros / Exportação Neogrid. Informe o período e a empresa em que deseja gerar a exportação. Em seguida, informe o período que deseja gerar os arquivos. Caso informe mais de um dia, será gerado um arquivo para cada dia. Tipo Tam Dec Tipo de Registro S AN - Identificação S AN - Versão S AN - Número do Relatório S AN - Data - Hora de Emissão do Documento S DT - Data Inicial do Período de Estoque S DT - Data Final do Período de Estoque S DT - CNPJ do Emissor do Relatório S N - CNPJ do Destinatário do Relatório S N - Tipo Tam Dec Tipo de Registro S AN - Data do Estoque S DT - Código interno Item S AN - Código do Produto S AN - Quantidade em Estoque S N Quantidade Estoque Trânsito S N Registro 01 – Cabeçalho Uma única ocorrência Inf. Obrig. Registro 02 – Estoque Inf. Obrig. Nesta versão da exportação, égerado somente posição de estoque via arquivo. A Neogrid capta os dados de cliente, dados da nota fiscal, vendedor e vendas através de acesso aos XMLs de notas fiscais emitidas.


### Dados do XML

Para que a Neogrid possa baixar os XMLs da empresa que deseja realizar a integração, é necessário que no Bimer seja feita uma configuração para levar os dados da Neogrid no XML, como pessoa autorizada. Além disso, para que a Neogrid tenha os dados do vendedor, é necessário também levar esta informação ao XML. Para isto, acesse Configurador Bimer / Faturamento / Opções / Aba XML: Na seção ‘Geração de tags do grupo de uso livre do contribuinte’, renomeie os campos ‘Funcionário’ e ‘Representante’ para ‘Vendedor’ e ‘Venda agenciada’, respectivamente. Na seção ‘Autorização de acesso ao XML da NF-e por CPF/CNPJ’, selecione a empresa em que deseja permitir a exportação e informe o CNPJ da Neogrid. Feitas estas configurações, o sistema levará dados aos XMLs de notas fiscais eletrônicas emitidas que permitirão que a Neogrid leia os dados da nota e repasse à indústria envolvida. Veja abaixo a estrutura do XML. Podemos notar a existência da tag <autXML/, tendo como valor o CNPJ da Neogrid, que informamos nas configurações anteriormente. Além disso, perceba que no grupo de tags <infCpl/, temos os dados que definimos no Configurador, na seção ‘Geração de tags do grupo de uso livre do contribuinte’, com o campo tendo nome definido como ‘Vendedor’ e o CPF do mesmo. O sistema levará somente uma pessoa de repasse, e será a primeira encontrada.


### Exemplo de Arquivo

Há uma diferença notável entre as estruturas dos arquivos gerados nos layout v10.2 e v4.0. Na versão v10.2, os campos são separados pelos pipes, e então, podemos localizar simplesmente pela contagem de campos da esquerda para a direita. Volte ao layout rapidamente, observe que a quantidade em estoque está no 5º grupo do registro 02. O 1º grupo é o código do registro, seguido pela data, código interno do item e, no 4º grupo, veja o código EAN. No 5º grupo, veja que este item possui 2.800 unidades. O 6º grupo é reservado para quantidade em trânsito, porém, tanto a versão 4.0 quanto a versão 10.2 não preenchem este campo com nenhuma informação. O recurso foi criado com padrão para preencher este valor zerado.


## Exportação dos Pedidos de


## Compra

A partir da versão 10.00.06.00, o sistema Bimer oferece a funcionalidade de exportar não somente a posição do estoque, mas também os pedidos de compra para integração com o sistema EDI (Electronic Data Interchange) da Neogrid.


## Configurações para Exportação

As configurações para a exportação dos pedidos de compra para o sistema EDI Neogrid são realizadas em uma janela específica, localizado no Configurador / Geral / Opções / Integração Neogrid / Pedidos de Compra. Abaixo, detalhamos cada uma das opções disponíveis: • Diretório Padrão: Este campo permite definir o local (pasta) onde os arquivos de texto contendo os dados dos pedidos de compra serão gerados. É fundamental definir um diretório de fácil acesso e que seja conhecido pelo sistema de integração da Neogrid. • Grid “Vinculo de empresas x fornecedores”: Esta grade apresenta a relação estabelecida entre as empresas cadastradas no Bimer e os respectivos fornecedores para os quais os pedidos de compra serão exportados. É nesta seção que se define quais transações serão consideradas para a integração. •


### Adicionar vínculos (Botão '+' na grid “Vinculo de empresas x

fornecedores”): Ao clicar no botão de adição (+), uma nova linha é habilitada na grade, permitindo o cadastro de um novo vínculo entre uma empresa do Bimer e um fornecedor. Os seguintes campos deverão ser preenchidos: • Empresa: Informe o código de identificação da empresa conforme cadastrado no sistema Bimer. • Fornecedor: Insira o código de identificação do fornecedor conforme cadastrado no sistema Bimer. • Número do contrato: Caso exista um contrato de fornecimento formalizado entre a empresa e o fornecedor, informe o número do contrato neste campo. Esta informação pode ser relevante para a Neogrid. • Equivalência de unidade do produto x unidade para exportação: A partir da versão 11.01.02.00, o sistema Bimer introduziu a funcionalidade de definir a equivalência entre a unidade de medida cadastrada para o produto no sistema e a unidade que será utilizada no arquivo de exportação. • Unidade do produto: Este campo exibe a unidade de medida padrão na qual o produto está cadastrado no sistema Bimer. • Sigla para exportação: Neste campo, você pode especificar uma sigla diferente para representar a unidade de medida do produto no arquivo de exportação. Por exemplo, se um produto está cadastrado no Bimer como "Unidade" (UN), você pode definir a sigla para exportação como "EA" para atender aos requisitos do sistema de destino.


## Geração dos arquivos

O sistema Bimer oferece duas formas distintas para a geração dos arquivos de exportação dos pedidos de compra para a Neogrid: manual e por agendamento.


## Geração Manual

A geração manual dos arquivos de exportação pode ser realizada através do seguinte caminho no sistema Bimer: Configurador / aba Geral / Ferramentas / Exportação Neogrid. Ao executar a exportação manualmente, o sistema irá considerar todos os pedidos de compra com status 'Aberto' que corresponderem aos vínculos de empresa x fornecedor definidos nos filtros da tela de geração. É importante ressaltar que, na geração manual,todos os pedidos abertos que se enquadrarem nos vínculos serão


### exportados, mesmo que já tenham sido incluídos em arquivos de exportação

anteriores. Portanto, é crucial gerenciar e controlar os arquivos exportados para evitar duplicidades na integração com a Neogrid.


## Geração por Agendamento

A exportação automática dos pedidos de compra pode ser configurada através do agendamento da tarefa GeExportaPedidoDeCompraNeogrid.exe, que é executada pelo aplicativo GeAgente.exe. O agendamento desta tarefa deve ser realizado no sistema Bimer, no seguinte caminho: Configurador / Geral / Tarefas e Tarefas agendadas. Nesta seção, é possível definir a frequência e o horário em que a tarefa de exportação será executada automaticamente. Os arquivos gerados por agendamento incluirão todos os pedidos de compra com status 'Aberto' que se enquadrarem nos vínculos de empresa x fornecedor e que possuíremdata de emissão igual à data de execução do agendamento. Diferentemente da geração manual, a exportação por agendamento considera apenas os pedidos emitidos no dia da execução da tarefa, independentemente de terem sido exportados anteriormente. Atenção: Ao configurar o agendamento, é fundamental definir horários adequados para garantir que os pedidos de compra sejam exportados no momento desejado para a integração com a Neogrid.


## Layout Pedido de Compra – Padrão NeoGrid

A coluna “Tam” das tabelas a seguir evidencia o tamanho total do campo e a coluna “Dec”, quantos dígitos equivalem às casas decimais deste tamanho total. Os campos apontados como “S” na coluna “Obrig” deverão sempre conter informação, salvo casos em que ela não exista. Por exemplo, se sobre determinado produto não houver incidência de desconto comercial, o campo poderá ser gerado zerado. O documento de Pedido apresenta a seguinte estrutura hierárquica dos registros:
