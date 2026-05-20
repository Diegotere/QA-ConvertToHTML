# Módulos de Relatórios — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Relatórios do Financeiro](#relatorios-do-financeiro)
- [Geral](#geral)
  - [Criar configuração](#criar-configuracao)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Financeiro](#financeiro)
  - [Opções do Relatório - Saldo](#opcoes-do-relatorio-saldo)
  - [Opções do Relatório - Acumulado](#opcoes-do-relatorio-acumulado)
- [Extrato Conta Movimento](#extrato-conta-movimento)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Natureza de Lançamento](#natureza-de-lancamento)
  - [Criar configuração](#criar-configuracao)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Relatórios do Estoque](#relatorios-do-estoque)
- [Documentos](#documentos)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Estatística de Movimento](#estatistica-de-movimento)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Inventário](#inventario)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Posição do Estoque](#posicao-do-estoque)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Produtos Mais Vendidos](#produtos-mais-vendidos)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Relatórios do Faturamento](#relatorios-do-faturamento)
- [Extrato de Representantes](#extrato-de-representantes)
  - [Criar configuração](#criar-configuracao)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Descontos Concedidos](#descontos-concedidos)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Devoluções e Trocas](#devolucoes-e-trocas)
  - [Opções do Relatório](#opcoes-do-relatorio)
- [Quadro de Venda Diária](#quadro-de-venda-diaria)
  - [Opções do Relatório](#opcoes-do-relatorio)

---


## Introdução

Gerar um relatório pode ser um dos momentos mais satisfatórios para um gestor. É nesse momento que será possível analisar os resultados da sua empresa, tendo uma posição positiva ou negativa, de acordo com as métricas definidas pelo gestor. Mas, nem só de análises estatísticas é composto um relatório. Podemos usar relatórios para conferências de documentos, comissões e muito mais! Os relatórios do Bimer, em maioria, são impressos de acordo com layout RTM. Este formato de arquivo permite uma grande personalização, portanto, é comum que visualize algo diferente do padrão em algum cliente, com variáveis calculadas ou esteticamente modificados. Apesar de serem maioria, alguns não permitem edições e serão impressos de acordo com um layout preestabelecido no momento do desenvolvimento da ferramenta. Portanto, fique atento às possibilidades de edição, para não garantir a um cliente uma mudança que não será possível com uma simples edição. As possibilidades de relatórios são diversas, portanto, sempre busque nos módulos de relatórios se não há alguma opção que possa atender a necessidade do cliente.


## Relatórios do Financeiro

O módulo Relatórios do Financeiro contém dados das movimentações bancárias, informações de títulos, baixas e estatísticas do grupo de módulos do Financeiro do Bimer. Citaremos alguns dos relatórios possíveis deste módulo.


## Geral

Este é o relatório mais importante do módulo. Nele serão demonstrados os valores a receber e a pagar em diferentes formatos. Uma boa combinação dos filtros e opções pode trazer informações muito importantes. Para localizá-lo, acesse o módulo Relatórios do Financeiro e clique em Geral.


### Criar configuração

Para criar uma nova configuração para o relatório, clique na opção “Incluir nova configuração” e informe um nome para a configuração. Na parte inferior da janela, selecione os filtros que deseja possibilitar na geração do relatório. Os filtros marcados não serão obrigatórios, mas aparecerão para ser utilizados. Clique em “Próximo” para ir para a tela de opções do relatório.


### Opções do Relatório

Veja a seguir, as principais opções deste relatório: • Títulos:Neste quadro, selecione se deseja ver títulos A Pagar, A Receber ou marque ambos; • Serão impressos os títulos:Opte entre visualizar títulos baixados, abertos, excluídos ou marque todos; • Ordem e Segunda ordem:Escolha qual será a ordem dos dados presentes no relatório. Alfabética, número do título, vencimento, entre outras; • Previsão:Esta opção somente ficará habilitada se o relatório não contiver títulos baixados. Neste quadro, escolha se deseja incluir no relatório título com previsão, sem previsão ou ambos; • Equiparar a data de referência pela:Existem duas possibilidades neste quadro ◦ Marcando a opção "Data de emissão do título / data de baixa": A data de referência será comparada com a data de emissão e a data de baixa do título. Serão considerados os títulos com data de emissão igual ou menor que a data de referência e os títulos com data de baixa igual ou menor que a data de referência; ◦ Marcando a opção "Data de lançamento das informações no sistema": A data de referência será comparada com a data de cadastro e a data de processamento de baixa do título. Serão considerados os títulos com data de cadastro igual ou menor que a data de referência e os títulos com data de processamento da baixa igual ou menor que a data de referência; • Datas:É possível realizar diversos filtros por data nesse local. Entretanto, é importante saber que alguns campos serão habilitados somente de acordo com o sentido do relatório. Por exemplo, o campo “Período de baixa” somente fica passível de preenchimento quando os títulos baixados estão inclusos. ◦ Data de referência: este campo é como uma “máquina do tempo” no relatório, onde você pode visualizar como estavam as informações no sistema na data que for informada neste local. Por exemplo, se cadastro um título em 01/01/2020 e estou no dia 02/01/2020, ao manter a data de referência padrão (dia atual), visualizo o título criado normalmente. Entretanto, se altero a data de referência para 31/12/2019, o título criado não aparecerá, tendo em vista que nesta data ele ainda não existia; • Relatórios: No último quadro da tela é possível selecionar que tipo de relatório você deseja. As opções analítico, sintético, resumo e estatística são as possibilidades de visualização. ◦ Arquivo RTM: Neste quadro (Relatórios) é possível selecionar o arquivo RTM que será utilizado para a visualização do relatório. Também é possível clicar em “Editar o arquivo”, abrindo o ReportBuilder ou “Recuperar o arquivo de layout padrão”, preenchendo o campo com o nome do RTM padrão; ▪ Atenção: cuidado ao clicar para recuperar o layout padrão. Caso esteja realizando algum teste em cliente, armazene o nome do arquivo RTM do cliente, pois pode conter personalizações; • Outras opções: Algumas outras possibilidades do relatório são possibilitadas pelos “checkboxes”. Opções como “Incluir título sem vencimento (contra apresentação)”, faixa de valores e indexadores podem ser necessárias para alguns clientes; • Filtros: Os filtros que foram marcados na criação da configuração ficarão nas próximas janelas. Apesar de marcados na configuração inicial, eles não são obrigatórios, portanto, após realizar as restrições desejadas, clique em "Visualizar” para ver o resultado. Na parte superior do relatório, os dados do filtro podem ser levados à tela de visualização/impressão de acordo com a edição do RTM. É possível ainda adicionar totalizadores por data, cliente, etc, de acordo com a preferência.


## Financeiro

Este relatório é uma forma simplificada de observar o acompanhamento diário do financeiro de uma empresa. A partir dele, é possível comparar em uma só tela dados previstos e realizados do Contas A Receber e A Pagar. São levados somente dados de títulos baixados.


### Opções do Relatório - Saldo

Veja a seguir, as principais opções deste relatório: • Período (data disponível): Informe a data inicial e final que deseja visualizar na análise apresentada por este relatório. As datas consideradas serão as de baixa; • Saldos: Preencha os saldos previsto e confirmado ao último dia antes da data inicial; • Arquivo de layout: Utilize o arquivo RTM padrão ou personalizado do cliente; • Filtros: Clique em próximo para visualizar as opções de filtro para Empresa e Natureza de Lançamento. Após definir os dados, clique em “Visualizar” ou “Imprimir”. A comparação dos valores a receber e a pagar com um panorama de valor previsto e realizado dá uma visão ampla do dia a dia da empresa. Observe que no dia05-jun-XXo valor a pagar previsto está diferente do valor realizado. Isto se deu por conta de um título que foi baixado com desconto de R$ 9,48. Portanto, previa-se pagar R$ 23.524,25, porém, foram pagos R$ 23.514,77, justamente por conta do desconto comentado. Note que, ainda neste dia, o valor realizadoa receber foi maior do que o previsto. A diferença é de R$ 25,78, em virtude de multa e juros aplicados ao título, tendo em vista que foi pago atrasado. A coluna “Saldo” traz a soma do saldo preenchido na tela inicial com o valor recebido, subtraindo o valor pago.


### Opções do Relatório - Acumulado

Este relatório possibilita que o usuário do sistema visualize uma previsão de caixa, cruzando pagamento e receitas com o saldo. Neste relatório, são considerados os títulosabertos, levando em tela os clientes e fornecedores que possuem títulos abertos em determinado período. Este relatório pode ser utilizado, por exemplo, programas os pagamentos e recebimentos do dia ou semana. Selecionando a opção “Acumulado”, o sistema abrirá a tela para informar o filtro de data do período a ser filtrado. Nessa tela também é possível solicitar que os títulos sejam agrupados por pessoa e data. Nas telas seguintes é possível filtrar por empresa e conta bancária. Veja no resultado da visualização do relatório os dados gerados.


## Extrato Conta Movimento

Este relatório traz ao cliente um detalhamento das contas da empresa, sejam bancárias ou não. Por meio dele, o cliente consegue visualizar de forma analítica ou sintética (detalhada ou resumida) o panorama das suas contas bancárias e suas movimentações.


### Opções do Relatório

Veja a seguir, as principais opções deste relatório: • Período: informe o período de movimentação desejada; • Quebra: Escolha a forma de agrupamento das informações. A cada “quebra” o sistema apresenta um subtítulo para facilitar a visualização. Portanto, escolha entre “Por natureza de lançamento”, “Por conta”, “Por conta e Por natureza de Lançamento” e “Por data”; • Referência para movimento bancário: Selecione se a data considerada será a do movimento ou conciliação; • Filtros: Realize, opcionalmente, os filtros de “Empresa”, “Natureza de Lançamento” e “Contas”. Alterne entre as opções de filtro clicando em “Próximo” e “Anterior”. Após definir opções e filtros, clique em “Visualizar”. O relatório acima é sintético, portanto, não traz detalhamentos. A opção analítica deste relatório traz todos os movimentos, separados por conta, sendo possível realizar uma conferência mais minuciosa dos dados.


## Natureza de Lançamento

Visualizar onde estão a maioria das receitas e pagamentos da empresa fica mais fácil ao utilizar este relatório. Por meio dele, é possível visualizar de maneira ágil o quanto, em percentual, uma natureza de lançamento representa dentro de um total, além de outros dados importantes.


### Criar configuração

Assim como o Relatório Geral, é possível criar diferentes configurações preestabelecidas para este tipo de relatório. Para criar uma configuração, informe o nome da configuração e os filtros. Em seguida, clique em “Próximo” para definir as opções.


### Opções do Relatório

Veja a seguir, as principais opções deste relatório: • Títulos: Selecione entre títulos A Pagar, A Receber. Escolha ainda entre ver os títulos baixados, abertos ou ambos; • Datas: Preencha as datas conforme desejado, levando em conta que ao preencher dois campos, o sistema buscará os títulos que obedecerem ambos os critérios ao mesmo tempo; • “Imprime títulos?”: Marque esta opção para que os títulos sejam levados ao relatório (desde que a opção “Analítico” também esteja marcada); • “Imprime resumo?”: Para imprimir um relatório resumido, apenas com os percentuais por natureza de lançamento, marque esta opção. Ela pode ser utilizada de maneira individual ou em conjunto com a opção anterior. Após definir opções e filtros, clique em “Visualizar”. O grande diferencial deste relatório está na coluna “Perc”. Note, na imagem acima, o percentual que cada título representa dentro do total a receber no período filtrado e, ao fim, o totalizador. A quebra do relatório é realizada por Natureza de Lançamento e Empresa. Como na tela principal do relatório foi marcada a opção de impressão de resumo, o sistema apresenta, ao fechar o relatório de título, o resumo. Veja abaixo:


## Relatórios do Estoque

O módulo Relatórios do Estoque contém dados das movimentações de produtos, informações de documentos, dados cadastrais e estatísticas do grupo de módulos do Estoque do Bimer. Citaremos alguns dos relatórios possíveis deste módulo.


## Documentos

Apesar de fazer parte de um relatório de um dos módulos do estoque, é possível visualizar documentos de qualquer natureza neste tipo de relatório, sejam, compras, entradas, saídas, vendas, etc. Para localizá-lo, no módulo Relatórios do Estoque, clique emRelatórios e em seguida,Documentos. É necessário realizar a configuração deste módulo, preenchendo nome e filtros possíveis. Este relatório pode ser utilizado, por exemplo, caso queira visualizar todos os documentos de compra que tiveram valor superior a um limite pré-definido. Além disso, é possível visualizar os itens deste documento.


### Opções do Relatório

• Períodos: Selecione entre data de emissão, referência ou passagem na barreira. Este último dado está presente nasnotas fiscais de entrada, exclusivamente. Os campos podem ser preenchidos individualmente ou em conjunto; • Ordenação dos documentos: Selecione a ordenação do relatório, de acordo com a preferência, entre Empresa, Nr. Documento e outras opções; • Ordenação dos itens: Escolha se os itens do documento estarão organizados por código ou nome. Esta opção somente terá efeito se o relatório contiver itens; • Arquivos de layout: Neste campo, aponte o RTM que será utilizado. O nome do RTM pode variar de acordo com a opção de relatório que será utilizada (Documentos, Itens…); • Opções de Impressão: Escolha a opção desejada entre as opções. As mais utilizadas são: ◦ Documentos: Os documentos serão apresentados de maneira sintética, contendo dados básicos, como número do documento, destinatário e valor; ◦ Itens do documento: Abaixo do documento são apresentados os itens que o compõem, junto aos seus valores unitários, totais e quantidades; • Imprimir documentos: Opte por mostrar documentos cancelados, não cancelados ou todos; • Operações: Selecione o tipo de movimentação que deseja incluir nos documentos filtrados entre Vendas, Transferências, Compras, etc; • Faixa de Valores: Informe nos campos “De” e “Até” o intervalo de valores que deseja filtrar. Este filtro é aplicado para o valor do documento. • Filtros: De acordo com as configurações feitas, você pode filtrar dados utilizando restrições por empresa, pessoas, operações, produtos e até mesmo documentos. Após definir opções e filtros, clique em “Visualizar”. No filtro realizado para geração do relatório acima, somente documentos de compra acima de R$ 5 mil foram inclusos. Além disso, um período de 10 dias foi informado nos filtros. Um gestor pode utilizar este tipo de relatório para analisar as compras mais altas da empresa ou até mesmo conhecer os clientes das maiores vendas em um determinado período, como uma quinzena, mês ou semestre.


## Estatística de Movimento

O objetivo deste relatório é demonstrar as estatísticas das movimentações de produtos realizadas no sistema, possibilitando uma conferência dos registros. Para perfeito funcionamento deste relatório é necessário que as empresas cadastradas estejam configuradas para trabalhar ou não com setor, em Configurador / Estoque / Opções / Aba Movimento / Opções Adicionais. É possível ter uma visão ampla do estoque, analisando como estava o estoque, o que ocorreu (venda, compra, saída, etc) e como ficou, dentro de um mês. Para a composição de um Saldo Final para visualização, o sistema considera a seguinte equação: • Saldo Final=Saldo Anterior (último dia do mês anterior) + Compras + Entradas + Devoluções de Saídas – Vendas – Saídas – Devoluções de Entradas.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Referência: Informe o mês e ano que deseja visualizar no relatório; • Tipo do Relatório: Selecione entre visualizar o relatório de maneira mais detalhada ou ampla. O tipo Sintético traz a visualização das estatísticas por grupos de produto; • Quebra: Opcionalmente, selecione uma quebra por setor ou fornecedor. Ambas opções podem ser marcadas em conjunto ou ficarem desmarcadas; • Outras Opções: O usuário pode optar por ver produtos de um tipo específico ou visualizar produtos de todos os tipos. Além disso, é possível visualizar somente produtos com estoque ou levar ao relatório somente os itens que tiveram movimentação no mês informado; • Filtros: É possível filtrar os resultados por empresa, grupo de produto ou setor. Os produtos que estiverem vinculados a estes cadastros filtrados serão mostrados. Após definir opções e filtros, clique em “Visualizar”. Note no relatório fictício acima que o produto de código “CM12” contava com 5 unidades no estoque e, ao fim do mês, ficou com 24. Isto ocorreu em virtude da entrada de 22 novas unidades e venda de outras 3 no mesmo período.


## Inventário

Este relatório, ao contrário do que muitos clientes pensam, não traz dados de inventários criados pelo módulo Inventário do Bimer. Esse tipo de informação pode ser vista no próprio módulo Inventário. O objetivo do Relatório de Inventário do módulo Relatórios de Estoque é mostrar as quantidades que estão registradas no sistema, assim como o valor dos itens e total do estoque. Este relatório também pode ser utilizado para exportar o arquivo para o Alterdata Fiscal, entretanto, não entraremos em detalhes dessa rotina (botão Exportar, na parte inferior da tela).


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Mês/Ano de Referência: Informe a data ou mês de referência para o relatório. Caso opte por mês/ano, o último dia do mês será considerado para referência; • Tipo de Relatório: Escolha o tipo de custo que será considerado para a montagem do relatório: Custo médio ou Custo de reposição; • Opções de Impressão / Tipo de Impressão: Dentre as variações de opções de impressão está a opção “Impressão Oficial“. Quando esta opção é marcada, os tipos de impressão “Abertura/Encerramento”, “Modelo” e “Classificação Fiscal” ficam disponíveis para serem marcados no referido quadro. Estas são opções que podem ser necessárias para a contabilidade da empresa, com preenchimento do número do livro quando marcamos a opção “Abertura/Encerramento”. As demais opções são formatos do relatório; • Imprimir produtos…: Selecione entre ativos, inativos ou ambos em relação aos produtos; • Outras Opções: Existe a possibilidade de restringir produtos com quantidade zerada ou negativa no relatório, assim como selecionar somente produtos nessas condições. Alguns clientes trabalham com produtos em quantidades fracionárias, portanto, pode ser necessário aumentar a quantidade de casas decimais do campo “Quantidade” do relatório. É possível selecionar até 3 casas decimais; • Filtros: Os filtros são possíveis a partir da configuração montada pelo usuário do sistema. Dentre as possibilidades, estão filtros de grupo, família, setor e empresa. Observe que este relatório não possui arquivo RTM. Seu layout é interno e não é possível modificar. Após definir opções e filtros, clique em “Visualizar”. Note, no relatório acima, que os produtos são demonstrados com suas respectivas quantidades, classificação fiscal, tipo de unidade, valor unitário e valor total. É por meio do somatório de todo o valor total dos produtos de uma empresa que se obtém o valor do estoque. O produto “001048”, grifado no relatório de inventário acima, contém 4 unidades em estoque e seu valor unitário é R$ 13.925,00. Portanto, o valor total deste produto em estoque é de R$ 55.700,00.


## Posição do Estoque

Este relatório possibilita que o usuário visualize um panorama das quantidades dos produtos em estoque. Por meio deste relatório, o usuário pode consultar as quantidades em estoque, reservada, disponível, requisitada, comprada, pendente e prevista dos produtos.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Produtos Ativos/Inativos: Por meio dos quadros “Venda” e “Compra”, selecione se deseja ver produtos ativos, inativos ou ambos; • Dt. Referência: este campo é como uma “máquina do tempo” no relatório, onde você pode visualizar como estavam as informações no sistema na data que for informada neste local; • Usar ordenação: Opcionalmente, marque esta opção e selecione a ordem em que serão apresentados os produtos; • Filtrar quantidade: Ao marcar esta opção, é possível filtrar produtos com quantidades maiores, iguais ou menores que zero, por exemplo; • Filtros: Os filtros são possíveis a partir da configuração montada pelo usuário do sistema. Dentre as possibilidades, estão filtros de empresa, fornecedor, setor e características de produto. Após definir opções e filtros, clique em “Visualizar”. Os dados apresentados neste relatório dependem das configurações presentes no Configurador / Estoque / Opções / Cálculos / Quant. prevista e disponível. As quantidades Disponível e Prevista são personalizáveis, de acordo com a preferência de cada cliente. Portanto, esteja atento a esta informação.


## Produtos Mais Vendidos

Por meio deste relatório, é possível gerar um ranking dos produtos mais vendidos ou que geraram mais faturamento para a empresa dentro de um período. Este tipo de análise dá ao gestor o poder de valorizar um determinado produto que tem tido uma performance acima da média, assim como visualizar os produtos com pior desempenho.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Período de venda: Informe a data de início e fim do período que deseja analisar • Ordenar por: Escolha entre organizar o relatório por Valor Faturado ou Quantidade Faturada, por exemplo. Estas são duas análises que trazem perspectivas distintas: produto que mais vende X produto que mais gera faturamento. Cabe ao gestor a escolha da melhor opção de análise para o seu negócio; • Qt. de produtos no ranking: Selecione a quantidade de produtos que serão mostrados no ranking. Uma análise dos 20 produtos que mais geraram receita para a empresa em um semestre pode ser realizada utilizando este campo, por exemplo; • Filtros: Os filtros são possíveis a partir da configuração montada pelo usuário do sistema. Dentre as possibilidades, estão filtros de empresa e características de produtos. Após definir opções e filtros, clique em “Visualizar”. A análise acima traz os 20 produtos mais vendidos de um semestre, ordenado por quantidade vendida. Observe que os 20 produtos apresentados, totalizam 74,94% do total vendido pela empresa e que o produto mais vendido colaborou com pouco mais de 14% do total. Note que o produto “EP1”, grifado em azul, foi o 8º produto mais vendido, entretanto, seu valor de venda é inferior aos próximos 5 colocados no ranking. A ordenação do relatório poderia mudar estas posições e a análise do usuário do sistema.


## Relatórios do Faturamento

Focado em dados do grupo de módulos do Faturamento, o módulo Relatórios do Faturamento traz, principalmente, informações das vendas da empresa. Neste material, citaremos alguns dos relatórios possíveis deste módulo.


## Extrato de Representantes

Por meio deste relatório, é possível gerar um demonstrativo dos pedidos e/ou documentos emitidos no sistema que estejam vinculados a determinados representantes. Este tipo de análise dá diversas possibilidades ao gestor, entre elas o poder de visualizar, por exemplo, uma comparação entre o que está sendo registrado em pedido e o que está efetivamente sendo vendido (por meio do documento emitido) ou os status de pedidos de um determinado representante.


### Criar configuração

Para criar uma nova configuração para o relatório, marque a opção correspondente e informe um nome para a configuração. Na parte inferior da janela, selecione os filtros que deseja possibilitar na geração do relatório. Os filtros marcadosnão serão obrigatórios, mas aparecerão para ser utilizados.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Período: Informe o período que deseja analisar no relatório; • Pedidos: Nesta seção, marque as opções que desejar visualizar no relatório: ◦ Pedidos processados: Insere no relatório os pedidos que já foram totalmente atendidos; ◦ Saldo de pedidos a atender: Insere no relatório todos os pedidos que ainda possuem quantidade a atender, possibilitando selecionar os status “Aguardando Liberação”, “Liberado” e “Parcialmente Atendido”; ◦ Outras opções: É possível incluir pedidos cancelados, considerar cartas de crédito como valor recebido e visualizar somente pedidos originados no PDV; • Documentos emitidos: Marque esta opção para visualizar documentos. Se desejar, selecione as respectivas opções para visualizar somente documentos impressos e/ou imprimir também documentos cancelados; • Títulos: Quando marcadas, as opções deste quadro levarão ao relatório dados de títulos a receber e valores baixados; • Produtos Vendidos: Marque esta opção para visualizar, de maneira analítica, os produtos presentes nos documentos emitidos. Abaixo, é possível escolher a ordenação dos itens no relatório; • Relatório: Neste local é possível escolher se a estrutura do relatório terá quebra por Empresa e Representante, respectivamente, ou o inverso. Usando a primeira opção, serão mostrados todos os representantes dentro de uma empresa, em seguida, novamente todos os representantes em outra empresa. Utilizando a segunda opção, o agrupamento principal é por representante. Caso tenha somente uma empresa, não fará diferença. Após definir opções e filtros, clique em “Visualizar”. Os pedidos com saldo a atender não obedecem ao filtro de período realizado na tela inicial. Optar por esta possibilidade trará todos os pedidos que ainda estão pendentes no sistema.


## Descontos Concedidos

Os descontos são uma excelente maneira de fidelizar um cliente. Mas, tudo tem um limite, né?! Descontos excessivos podem diminuir a margem de contribuição da empresa. Portanto, na maioria das empresas existe um “teto” para descontos e, em alguns casos, somente alguns colaboradores podem conceder descontos. O relatório de Descontos Concedidos demonstra documentos que tiveram algum desconto aplicado, de acordo com critérios definidos pelo usuário.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Período de emissão: Informe o período de emissão dos documentos que deseja visualizar; • Faixa de desconto: Informe a partir de qual percentual deseja visualizar os descontos. Ou seja, se preencher com 10%, os documentos com 10% ou mais de desconto serão levados ao resultado; • Layout: Escolha a estrutura do relatório, entre analítico (com itens), sintético (somente documentos) ou resumido (não há RTM, sendo possível montar como desejado). Após definir opções e filtros, clique em “Visualizar”. Ao gerar o relatório, existem três maneiras de desconto que devem ser observadas. Note que no relatório fictício acima, existem quatro linhas destacadas em azul, para três possibilidades distintas: 1.Desconto concedido no item, superior ao permitido para o usuário logado e liberado com login e senha pelo usuário SUPERVISOR; 2.Desconto concedidono documento, superior ao permitido para o usuário logado e liberado com login e senha pelo usuário SUPERVISOR; 3.Desconto concedido por algum usuário que já possuía permissão para isto. Portanto, neste caso, não há registro do usuário de liberação do desconto do documento ou item.


## Devoluções e Trocas

O Bimer ERP possui um móduloespecífico para realizar devoluções e trocas: o “Devolução e Troca de Venda”. O relatório de devoluções e trocas busca dados exclusivamente produzidos neste módulo, possibilitando que o usuário tenha acesso aos dados dos processos de devolução e troca gerados no sistema. Esse tipo de relatório pode ser utilizado para conferência, já que o módulo em que são geradas as devoluções e trocas não possui relatórios próprios.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Período: Informe a data inicial e final que deseja filtrar para o relatório; • Tipo de relatório: Escolha se deseja ver processos de devolução, troca ou ambos; • Status: Este quadro refere-se aos status dos processos de devolução ou troca. Selecione entre aberto, liberado, fechado ou cancelado. Após definir opções e filtros, clique em “Visualizar”. A coluna “Tipo” traz as opções Troca ou Devolução. Para os processos de troca, os produtos devolvidos e envolvidos na troca são mostrados abaixo. Para os processos de devolução, somente os produtos que foram devolvidos no processo são mostrados. É importante observar a seção “Negociação” no relatório. Os processos que tiveram o título original mantido, baixado sem numerário ou que geraram uma nova negociação tem esta informação exposta no relatório.


## Quadro de Venda Diária

Este relatório é um dos mais interessantes para um gestor. Por meio do Quadro de Venda Diária, é possível ver o total vendido no dia, projeções e alcance de meta, permitindo planejar ações, caso o objetivo esteja distante. Além disso, existe a possibilidade de analisar as peças vendidas e o valor médio da peça. Outra perspectiva interessante é a visualização do atendimentomédio, que mostra quanto em média cada cliente gasta em cada “visita” à sua empresa.


### Opções do Relatório

Veja abaixo as principais opções para geração deste relatório. • Tipo de Relatório: Selecione entre visualizar os dados de todas as empresas separadamente ou agrupados; • Período de emissão: Informe o período que deseja analisar; • Filtros: De acordo com as configurações iniciais, é possível filtrar por empresa, operação e forma de pagamento. As possibilidades de análise neste relatório são diversas. No relatório de exemplo acima, foi analisado um período de 10 dias. Sendo assim, o sistema projetou que neste mês, se continuar da mesma forma, a empresa venderá cerca de R$ 127 mil líquidos, pois faturou R$ 42.427,10 em 10 dias (média de R$ 4.242,71 por dia, que multiplicado por 30 dias, chega ao valor relatado). No Bimer é possível definir uma meta mensal, e o sistema mostra a meta alcançada até o momento e o percentual que seria ideal de acordo com os dias passados. Note que a empresa fictícia do relatório não está dentro da meta ideal, portanto, precisa trabalhar para recuperar esta diferença. Durante estes 10 dias passados, a empresa vendeu 799 itens em 34 oportunidades de venda. Isto representa uma relação de 23,5 item por venda, representado no campo “Peças/Atendimento”.
