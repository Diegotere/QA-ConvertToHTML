# Integração Bimer x Fiscal — Rotina — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Rotina Convencional](#rotina-convencional)
- [Leitura de dados](#leitura-de-dados)
- [Exportação de dados](#exportacao-de-dados)
  - [Análise do arquivo SPED Layout Alterdata](#analise-do-arquivo-sped-layout-alterdata)
- [Importação no Escrita Fiscal](#importacao-no-escrita-fiscal)
  - [Conferência importação](#conferencia-importacao)
  - [Nota Fiscal](#nota-fiscal)
  - [Nota de serviço](#nota-de-servico)
- [Rotina de Integração](#rotina-de-integracao)
- [Automática](#automatica)
- [Configurações](#configuracoes)
  - [Cadastro de Tarefas](#cadastro-de-tarefas)
  - [Módulo Gerente Eletrônico](#modulo-gerente-eletronico)
  - [Cadastro de Usuários](#cadastro-de-usuarios)
- [Consulta de notas Bimer](#consulta-de-notas-bimer)
- [Faturamento](#faturamento)
- [Nota Fiscal de Entrada](#nota-fiscal-de-entrada)
- [Informações adicionais](#informacoes-adicionais)
- [Correspondência de produtos entre Bimer x SPED](#correspondencia-de-produtos-entre-bimer-x-sped)
- [Aglutinação de produtos com lote/série](#aglutinacao-de-produtos-com-loteserie)
- [Reforma Tributária](#reforma-tributaria)

---


## Introdução

Olá como estão as coisas por ai? Pronto para aprender como funciona a rotina da integração? Então vamos lá! Primeiro vou demonstrar como funciona do início ao fim o modelo convencional, depois falaremos sobre a Integração automática.


## Rotina Convencional

Para realizar a rotina até chegar no Fiscal, são necessários três passos. Veja nos próximos tópicos quais são.


## Leitura de dados

É o recurso que usamos para filtrar quais notas do Bimer serão carregadas para integrar com o sistema Escrita Fiscal, podendo limitar por período e tipos de movimento. Funciona como um “pré-validador” no qual o usuário ainda analisa possíveis erros no lançamento da nota, que causam problemas no sistema Fiscal. Para acessar vá até o módulo Configurador / Estoque / Integração com Escrita Fiscal / Leitura de dados. Na primeira tela defina o período e Tipos de documento como esclarece a imagem abaixo: Isso quer dizer que o cliente pode, por exemplo, carregar somente o movimento de serviços prestados da primeira quinzena do mês. Se liga! Se estiver configurado no cadastro da empresa para trabalhar com data de emissão o sistema pegará todos os documentos cujas datas de emissão sejam dentro do período estabelecido no filtro. Se estiver configurado para trabalhar com data do documento, então o sistema somente pegará os documentos cujas datas de saída ou de entrada estejam dentro do período estabelecido. Ao lado do campo período há a opção Visualize a data que será filtrada, que permite que usuário veja como as empresas estão configuradas em relação às datas de escrituração. Na próxima tela informe a(s) empresa(s) para geração e clique em Concluir. Após a leitura dos dados, encontramos os movimentos em Configurador / Estoque / Integração com escrita fiscal / Documentos. Após realizar a filtragem pela data, através desta tabela, o usuário pode verificar as possíveis inconsistências na leitura de dados. Os movimentos são carregados na tela, contendo cores diferentes. Para ver o que significa cada um clique em Legenda. Destacaremos 4 cores: • Preto: Documento pronto para ser exportado para o fiscal. • Turquesa: Já foi gerado em um arquivo anteriormente e, portanto, não pode ser levado novamente. • Cinza: Documento para controle interno do Bimer que não estará incluso na integração com o fiscal. • Vermelho: Notas com erro de lançamento ou configuração que impediria o processo de exportação para o fiscal: Para verificar o erro apresentado, selecione o registro na tela principal e clique no botão Ocorrências. Dessa forma será exibida uma nova janela com as inconsistências daquele documento: Uma das inconsistências desse documento é: A situação tributária ICMS informada no produto (código Escrita Fiscal) 000001 exige que seja informada uma base de ICMS. Nesse caso na operação usada na nota está marcada a opção de Isento ou Outros de ICMS mas, a nota no Bimer calcula o imposto, dessa forma deve-se alterar na operação pela abaIntegração Fiscal / Lançamento base ICMS / Quando calcular ICMS, lançar base em Base ICMS, para que na leitura dos documentos as notas sejam carregadas com o imposto. É importante ressaltar que a cada alteração nas tabelas do Bimer deve-se fazer uma nova leitura de dados. Ou acesse o Configurador / Estoque / Opções / Integração Fiscal e marque a opção “Sobrepor dados da integração com os dados da nova leitura”. Ao clicar 2x sobre um registro, será aberta uma nova janela para que se possa verificar o cadastro e com a possibilidade de editá-los. Essa opção é muito útil quando se precisa apenas realizar um ajuste rápido e gerar a exportação para o fiscal, porém tudo o que for modificado desta forma, não atualizará no Bimer. Por exemplo, se na tela foi modificado o CFOP 6.102 que estava ocasionando a inconsistência e foi trocado por 2.102 que é o CFOP correto, o registro ficará com a cor preta em vez de vermelha, mostrado que está correto. Porém, em qualquer outra parte do Bimer, este registro ainda estará com CFOP 6.102, o CFOP 2.102 apenas será reconhecido no Escrita Fiscal, ao exportar. Ao clicar em “Ok”, será exibida a tela de log com a relação de ocorrências. Clicando em “Fechar” o sistema mostrará um alerta para confirmação se irá gravar os dados mesmo com a ocorrência: Esses alertas serão gerados tanto para lançamentos manuais quanto para aqueles criados pela leitura de dados. É de extrema importância que não se altere os dados por esta tela. A orientação que devemos dar é que ascorreções sejam feitas em suas origens, para evitar recorrência do erro, exceto em situações atípicas.


## Exportação de dados

Depois de feita a leitura de dados e conferidos os registros resultantes desta leitura, as informações estão prontas para serem exportadas para o Escrita Fiscal. Assim, vamos gerar o arquivo SPED Layout Alterdata por meio desse recurso. Para isso, acesseConfigurador / Estoque / Integração com escrita fiscal / Exportação de dados. Em seguida, você define qual período e movimentos daqueles que foram carregados na leitura serão gerados no arquivo SPED Layout Alterdata. Layout Saca O layout anteriormente denominado SACA foi removido para evitar inconsistências, como a ausência do CST de PIS/COFINS e do código CEST, que geravam retrabalho manual no sistema Fiscal. Agora, o Bimer utiliza exclusivamente o padrão interno da Alterdata para garantir a integridade total dos dados. Conforme exibido no sistema, o layout do arquivo de exportação seguirá esse padrão próprio e, para consultar as especificações técnicas detalhadas de cada registro, basta selecionar “clique aqui” na tela de origem para exportação dos dados para escrita fiscal: Continuando a rotina, ao clicar em Avançar informe a(s) empresa(s) para geração do arquivo. Na tela seguinte pode-se estipular apenas algumas operações, dessa forma, ao selecionar apenas as operações de venda, as notas de compras não serão geradas no arquivo. Assim, se deve atentar a essa tela: poderia ocorrer de o cliente gerar um arquivo dizendo que as notas não estão indo para o Fiscal. Um dos motivos pode ser a maneira que o cliente realizou o processo de exportação. Caso queira levar todos os documentos não pode haver nenhuma operação filtrada: Em seguida há os campos: • Código da empresa: Caso o código da empresa no fiscal seja diferente em relação ao código da empresa no Bimer, preenchemos nesse campo. • Nome do arquivo para a integração com a Escrita Fiscal: Clique na pasta azul ao lado do campo, direcione o local para geração do arquivo. No campo Nome informe a descrição para criar o arquivo e depois clique em Abrir para salvar. • Gerar log de documentos exportados:Gera ao final da exportação um relatório com os documentos gerados. • Forçar exportação dos registros com erro: Mesmo que o documento esteja na cor vermelha (com erro) será exportado para o fiscal: Após clique em Concluir. Confirme e geração e note a mensagem abaixo: Ao final caso haja algum documento que não será exportado notamos a seguinte mensagem:


### Análise do arquivo SPED Layout Alterdata

Às vezes é preciso consultar o arquivo e as informações que foram geradas nele. Por quê? Para ver se os dados que estavam no Bimer foram inseridos corretamente no arquivo ou se faltou alguma coisa. Você até pode consultar o arquivo por meio de um bloco de notas, mas indicamos que você use o notepad ++. Para usá-lo baixe a versão mais recente no link https://notepad-plus-plus.org/downloads/: Após instalar clique com o botão direito na opção Abrir com Notepad ++ ou Edit with Notepad ++: Em seguida você analisa o arquivo de acordo com o layout SPED pelo link: https://ajuda.alterdata.com.br/wfiscal/layout-importacao-sped: Ali você encontra quais dados são gerados de acordo com os registros. Na imagem acima vemos os registros 001 - Nota Fiscal / Cupom Fiscal, por exemplo, ao clicar em cima dele veja mais detalhes sobre o que é gerado em cada posição do registro. Caso queira ver o número da nota abra o arquivo, consulte o registro 001, e a posição 19 a 37 no arquivo. ATENÇÃO:A partir da versão 11.02.03.26 o Bimer passa a considerar as informações de IBS e CBS de notas de serviços prestados e tomados na integração com escrita fiscal, realizando a geração doregistro 049 no arquivo fiscal, garantindo maior aderência às novas exigências da reforma tributária. É feito de forma automática, contendo qualquer informação de IBS/CBS preenchido ele irá gerar o registro 049. Assim você verifica que o número da nota no registro 001 é o 400: Dessa forma, consulte várias informações no layout. Ah, ficam algumas dicas sobre a análise: • Os três primeiros dígitos da linha representam o registro; • O arquivo segue uma sequência lógica. Na imagem vemos que a nota fiscal 400 trouxe os registros 001, 002, 004 e 010. No que na linha 10 vemos a informação da próxima nota (número 560); • O bloco de notas comum possui limitação de colunas em cada linha, por isso se recomenda a utilização do Notepad ++ que não possui essa deficiência.


## Importação no Escrita Fiscal

Após realizar a exportação pelo Bimer, é necessário realizar a importação pelo Escrita Fiscal, para isto vá em Escrita Fiscal / Lançamentos / Importação e Exportação / SPED (LAYOUT ALTERDATA), será aberta a seguinte janela: No quadro Importar: • Opção Movimentação - Com esta opção marcada importará movimentações de venda, saída, entrada e compra. • Opção Somente cadastro de produto - Com esta opção marcada apenas importa os produtos em si. • Opção Somente Bloco K - Importa apenas o Bloco K gerado no sistema Bimer, caso queira ver mais informações sobre a integração do Bloco K veja o artigo: clique aqui. • Opção Importar múltiplos arquivos - Marcando esta opção poderá importar mais de um arquivo do local especificado; • Opção Não efetuar validações - Ao realizar a importação do arquivo txt o fiscal não validará a integridade das informações contidas no mesmo, não gerará criticas e importará os dados estando corretos ou incorretos; • Opção Atualizar produtos - De acordo com os itens contidos no arquivo txt a ser importado, o fiscal utilizará suas informações para atualizar os produtos já existentes no fiscal; • Apagar as notas e desmembramentos antes de efetuar a importação: Faz com que as notas já presentes no movimento sejam apagadas e reimportadas caso estejam no arquivo. Isso evita duplicidade de movimentos no fiscal. • Não recalcular PIS / COFINS dos itens: Se ela estiver marcada, ao importar os documentos fiscais de entradas e saídas o sistema respeita as configurações de impostos do Bimer. Se estiver desmarcada o sistema verifica no cadastro da empresa, quais são as alíquotas de PIS e COFINS e recalcula os impostos com base nessas alíquotas. • Opção Importar de base externa - Em casos em que se trabalha com bases em que o código da empresa é X e na outra base essa mesma empresa tem um código Y, ou seja, em ambas as bases a mesma empresa possui códigos de chamada diferentes. Esta opção se faz desnecessária nos arquivos vindos do Bimer devido as configurações feitas em Configurador / Geral / Empresas / Integração escrita fiscal, campo Código da empresa na escrita fiscal ou na tela de Exportação campo Código da empresa, as quais já tratam esta situação de correlação de códigos de empresas em bases distintas. • Campo Informe o diretório e o arquivo-texto a ser importado: localize o arquivo que foi exportado pelo Bimer e clique em abrir. Clique emAvançare na próxima tela informe a(s) empresa(s). Após clique em Concluir:


### Conferência importação


### Nota Fiscal

Para conferir se os documentos fiscais de entradas e saídas foram importados para o fiscal corretamente, vá emEscrita Fiscal/aba Lançamentos/Nota fiscal/Nota fiscal, informe a empresa e o período da importação: Uma outra maneira de conferir é acessar a aba Lançamentos / Notas fiscais e produtos. Ao realizar o filtro busque pela coluna Origem da nota. Se esta coluna estiver preenchida com Importador SPED Alterdataquer dizer que esta movimentação veio importada por meio do arquivo gerado no Bimer.


### Nota de serviço

Já para conferir as notas de serviços acesse o Escrita Fiscal/Lançamentos/Notas de serviço/Notas de serviços Prestados\Tomados, informe a empresa, Cód. Operação e o período, nesta tela serão apresentadas as movimentações geradas pela importação: Uma outra maneira de conferir é acessar a aba Lançamentos / ISS, Receitas e Deduções. Ao realizar o filtro busque pela coluna Origem da nota. Se esta coluna estiver preenchida comImportador SPED Alterdata quer dizer que ela veio importada por meio do arquivo gerado no Bimer.


## Rotina de Integração


## Automática

Por meio de uma tarefa agendada a ser executada que deve estar vinculada ao sistema GEIntegracaoEscritaFiscal, a Leitura e Exportação dos dados serão realizadas de maneira automática na rotina de Integração com Escrita Fiscal. Isso vai agilizar o processo de integração visto que podemos automatizar essas rotinas sem necessidade do usuário realizá-las de forma manual. Observação: Recurso disponível a partir da versão 7.04.09.00 do Bimer.


## Configurações


### Cadastro de Tarefas

No Configurador / Geral / Tarefas, crie uma nova tarefa, com o sistema Leitura e exportação integração fiscal: Cadastro de Tarefas Agendadas No Configurador / Geral / TarefasAgendadas é necessário criar tarefas agendadas distintas para leitura e exportação, vinculando a Tarefa cadastrada: Tarefa 1 (Leitura): Na aba Importação/Exportação, selecione o tipo "Leitura". Tarefa 2 (Exportação): Selecione o tipo "Exportação". É importante ressaltar que o período utilizado para a leitura e exportação de dados será a Ocorrência da tarefa agendada (diário, semanal ou mensal). Exemplo: Se estiver selecionada a opçãoMensal, será realizada a leitura/exportação do período que compreende a data informada até 1 mês antes. A criação de tarefas agendadas distintas ocorre, pois no cadastro da tarefa agenda há a abaImportação/Exportação integração fiscal,em que é necessário configurar: • Tipo de Integração: Leitura ou Exportação. • Seleção de empresas: Definir quais empresas usarão a tarefa, podendo usar a marcaçãoTodas as Empresasou selecionar empresas específicas no campoEmpresas selecionadas para integração escrita fiscal. • Tipos de documentos: Marcar os documentos a serem lidos/exportados. E no caso da Exportação é necessário configurar: • Operações para exportação: Selecionar quais operações serão usadas para consultar os documentos a serem exportados. • Código da empresa no fiscal: Código da empresa no Wfiscal e não no Bimer. Poderá verificar o código da empresa na escrita fiscal através do módulo do PackWPHDem Empresas ou através doEscrita Fiscal/Cadastros /Empresas. • Diretório padrão dos arquivos exportados: Caminho de geração do arquivo. • Forçar a exportação dos registros com erro: Realizar a exportação mesmo que o documento possua erros.


### Módulo Gerente Eletrônico

Certifique-se que o módulo Gerente Eletrônico está em execução, e observe se as tarefas cadastradas constam na lista de Tarefas em Execução: Após isso caso possua dados o arquivo de exportação será gerado no caminho informado na tarefa agendada.


### Cadastro de Usuários

Caso o usuário não tenha a permissão ao sistema Leitura e exportação integração fiscal, o gerente eletrônico não executará a tarefa agendada:


## Consulta de notas Bimer

O cliente pode entrar em contato dizendo que tem notas lançadas no Bimer, mas não chegam no fiscal ou nem mesmo aparecem na tela de Documentos da Integração. E agora quem poderá nos defender? Calma, não temos o Chapolin, mas, sim, dicas valiosas que vão te dar aquela moral.


## Faturamento

Podemos verificar as notas de saídas / vendas (pela aba Nota Fiscal) e prestação de serviços (aba Nota fiscal de serviço) por meio do módulo Faturamento do Bimer: Algumas colunas nos ajudam a verificar quais notas podem ser integradas: • Status NF-e: Apenas as notas autorizada serão integradas (normalmente com o status Impressa). • Nr NF-e:Numeração da nota, se esse campo não estiver preenchido o documento não será integrado. • Coluna I: Não pode haver nenhuma cor nessa coluna, pois são informações que impedem a liberação e finalização da nota. Caso o cliente tenha dúvidas pode clicar em Legenda e visualizar o que representa cada cor. E exceção é a opção destacada abaixo: Ao abrir algum documento, veja mais detalhes como o participante da nota, operação, produtos, impostos, valor total da nota. E na aba Negociação as duplicatas:


## Nota Fiscal de Entrada

Podemos verificar as notas de entradas/compras e aquisição de serviços (aba Nota fiscal de serviço) por meio do módulo Nota Fiscal de Entrada do Bimer: Localizamos por meio das colunas: • Nr. documento: Consulta-se o número das notas. • Status: Somente os documentos com o status Liberado serão integrados Ao abrir algum documento, veja mais detalhes como o participante da nota, operação, produtos, impostos, valor total da nota. E na aba Negociação as duplicatas:


## Informações adicionais

Na versão 11.02.03.04 foram adicionados alguns recursos interessantes que merecem atenção. Vejamos!


## Correspondência de produtos entre Bimer x SPED

Os tipos de produtos do Bimer são diferentes daqueles exigidos no SPED, sabia? Com isso, alguns tipos do Bimer não existiam no SPED, o que gerava transtornos ao cliente que precisava realizar a alteração manual. Assim, é possível fazer a relação entre eles. Para isso acesse Configurador / Estoque / Opções / Integração fiscal / Produto. Nessa tela você verá os campos de produtos que deverão ser relacionados. Com essa relação realizada, os produtos terão seu tipo enviado corretamente para o SPED (registro 010, posições 134 a 135). Além disso, a partir desta mesma versão, o sistema fará o envio dos produtos para o SPED seguindo a mesma ordem dos produtos no XML da nota (tag nItem).


## Aglutinação de produtos com lote/série

Além desses recursos, também foi implementada a possibilidade de aglutinar itens que controlam lote/série nas notas de entrada. Antes eram geradas linhas separadas no SPED para cada lote/série. Com a nova configuração, será gerada somente uma linha com o somatório das quantidades e valores. A configuração se encontra em Configurador / Estoque / Opções / Integração fiscal / Geral. Também foi liberada a exportação dos dados de desoneração de ICMS para o SPED (registro 010, posições 1376 a 1389). Mas para este recurso nenhuma configuração é necessária, o sistema fará automaticamente.


## Reforma Tributária

Ainda na versão 11.02.03.04 foram liberados os campos de IBS/CBS na tela de documentos da rotina de integração fiscal. Ao gerar o arquivo SPED layout Alterdata, o sistema criará os registros 044 e 045 para as informações de IBS/CBS.
