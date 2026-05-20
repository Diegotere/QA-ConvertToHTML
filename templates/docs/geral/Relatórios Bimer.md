# Relatórios Bimer — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é o “Relatórios”?](#o-que-e-o-relatorios)
- [Principais características](#principais-caracteristicas)
- [Utilização do Sistema](#utilizacao-do-sistema)
- [Duplicar modelo](#duplicar-modelo)
- [Customização do modelo](#customizacao-do-modelo)
- [Exportar modelo](#exportar-modelo)
- [Importar modelo](#importar-modelo)
- [Favoritar modelos](#favoritar-modelos)
- [Prévia do relatório](#previa-do-relatorio)
- [Inclusão de modelos criados nos módulos antigos de](#inclusao-de-modelos-criados-nos-modulos-antigos-de)
- [relatórios](#relatorios)

---


## Introdução

A cada dia o Bimer evolui mais. E alguns recursos que eram “TOP” no início do projeto, atualmente podem não atender mais a necessidade dos nossos clientes e da nossa equipe de atendimento. De um lado, os clientes desejam mais autonomia para realizar suas rotinas sem a necessidade entrar em contato com nosso suporte. Do outro lado, nossa equipe de suporte deseja o mesmo, um sistema intuitivo que gere menos dúvidas na hora de executá-lo, para que nossos clientes não precisem entrar em contato conosco para realizar ações simples. Pensando nisso foi criado o módulo “Relatórios”.


## O que é o “Relatórios”?

O Relatórios é o módulo do Bimer, disponível a partir da versão 10.00.00.00 que tem como objetivo reunir os relatórios do Bimer, que atualmente ficam distribuídos, por área, nos módulos:Relatoriós do Estoque, Relatoriós do Faturamento; Relatoriós do Financeiro. Por enquanto não são todos os relatórios que estão disponíveis no módulo Relatórios. O Bimer possui dezenas de relatórios e variações do relatório. Por isso, eles serão migrados aos poucos. Neste momento imagino que já tenham surgidos algumas perguntas que você queira fazer. Vejamos algumas que possivelmente estão entre elas: 1.Os módulos Relatórios do Estoque, Relatórios do Faturamento; Relatórios do Financeiro serão descontinuados? Sim. Porém isso demorará um pouco. Pois, como já foi dito, o Bimer possui dezenas de relatórios. A missão do DSN Bimer é muito mais do que simplesmente tirar de um lugar e colocar em outro. Eles estão fazendo um trabalho de análise para ver o que pode ser melhorado para deixar os relatórios, telas de filtros, etc., muito mais amigáveis e intuitivos. Sabe aquele campo com nome estranho em uma tela que o cliente não consegue interpretar para que serve? O DSN está olhando com cuidado para deixar mais claro o objetivo. Cá entre nós, quem durante um atendimento não ficou caçando para que serve um filtro desses no relatório? 2.Todos os relatórios já estão disponíveis no novo módulo? Como dissemos no início, ainda não, pois a migração está sendo feita com muito critério e análise. 3.Qual o critério o DSN utiliza para decidir quais relatórios têm prioridade para migrarem para o módulo? Através da análise deTelemetria o DSN consegue verificar quais são os relatórios que nossos clientes mais utilizam no dia a dia. 4.Os relatórios que migrarem para o módulo Relatórios serão retirados do antigo módulo de relatório onde eles se encontram? Não. Os módulos Relatórios do Estoque, Relatórios do Faturamento, Relatórios do Financeironão sofrerão modificações.


## Principais características

Conforme dito no início, o módulo Relatórios não é uma simples migração de relatórios de um lado para outro. O módulo possui características importantes que o diferenciam dos módulos antigos. Entre elas: • O RTM de cada de relatório disponível no módulo agora fica gravado na base de dados do Bimer, e não mais no diretório padrão do ERP. Assim, acaba aqueles problemas de o RTM ser salvo no diretório errado; de o usuário não ter acesso ao diretório padrão; de o RTM “sumir” do diretório padrão, etc. • Além do RTM, os principais filtros utilizados na última impressão também ficam salvos no banco de dados. • Tabela AltLayoutRTM no banco de dados. Essa é a tabela na qual os modelos de relatórios são salvos, incluindo o RTM. Nessa tabela existe o campo DsFiltro em que ficam salvos os principais filtros utilizados na última emissão do relatório. • O Diretório padrão ERP disponível no Configurador Bimer » Geral » Opções » Gerai não é utilizado pelo módulo Relatórios. Como o RTM utilizado pelo módulo fica gravado no banco de dados, não é mais necessário verificar esse diretório. Mas, atenção, o Diretório padrão ERP CONTINUA sendo utilizado pelos módulos antigos de relatórios. • Não é possível alterar o layout padrão liberado pelo DSN. Isso é mais do que uma boa notícia. O usuário nunca poderá alterar o layout padrão do sistema. Assim, aquele problema de mexerem no layout padrão, e depois quererem voltar ao padrão, mas, não tê-lo salvo, acabou. Mas, o usuário será obrigado a utilizar o padrão do sistema? Não! Avance uma casa para a próxima característica. • Possui recurso de duplicar modelos de relatórios salvos, incluindo o modelo padrão. Dessa forma, o usuário pode criar quantos modelos desejar, duplicando o modelo padrão, e fazendo as customizações a seu critério. • Exportação e Importação de modelos de relatórios. Por que isso é bom? Entre vários pontos, agora quando o suporte criar algum modelo solicitado pelo cliente, ele poderá exportar esse modelo, salvar em algum local que o usuário do cliente tenha acesso, importar o modelo, e pronto! Só usar! Chega daquela trabalheira de tentar identificar o diretório padrão – pois, ele não é mais utilizada –, ser obrigado a salvar no diretório padrão, e outros “detalhezinhos” que os módulos antigos requerem. • Permite criar modelos do zero. Além de duplicar e/ou importar modelos de relatórios, o usuário pode criar um modelo totalmente novo, incluindo o RTM. Essas são algumas das principais características do módulo. Mas, ele está cheio de facilidades e melhorias. Bora conhecer a cara e o funcionamento dele?


## Utilização do Sistema

Neste manualnão detalharemos relatório por relatório. Não é esse o objetivo. Queremos que você conheça como o módulo funciona. O objetivo do DSN Bimer é que os relatórios sejam autoexplicativos. A ideia é que o usuário consiga interpretar, sem ajuda, o objetivo de cada relatório e cada filtro possível. Então, já fica uma dica! Viu algum campo, filtro, configuração, que possa gerar dúvidas no cliente? Veja com a usabilidade a possibilidade de abrir processo para melhorar a informação. Na tela inicial do módulo encontram-se abas separando os relatórios por área. Assim, os relatórios migrados dos módulos antigos estarão disponíveis na aba respectiva à sua origem. Quando, em uma opção de relatório, existir uma seta para baixo, significa que para esse relatório há mais de uma possibilidade. Como, por exemplo, naaba Faturamento » Quadro de venda diária, para o qual existem as opções Separado por empresa e Agrupado. Falando em Quadro de venda diária, usaremos esse relatório para demonstrar os recursos do módulo. Clique na opção do relatório para ver a tela com modelos e filtros. • Modelos – Mostra os modelos disponíveis do relatório, incluindo o modelo padrão e os modelos criados pelos usuários. O ícone do cadeado no modelo indica que ele é o padrão do sistema, liberado pelo DSN, e que não pode sofrer customizações. • Filtros – Lembra que para chegar a uma tela de filtro você precisava ficar “clicando em avançar” para chegar a ela? Agora o acesso aos filtros é mais direto e rápido pelo menu à esquerda. A lista de filtros varia de acordo com o tipo de relatório. Após selecionar o modelo, e os filtros desejados, clique em imprimir para visualizar o relatório e, se desejar enviar para impressora. Ainda sobre a necessidade antiga de ficar passando tela por tela para “caçar” algum filtro indesejado… Isso também foi pensado. Reparou que em uma das opções de filtros do relatório de exemplo tem um círculo azul e um número? Isso indica que nessa tela de filtro há parâmetros informados. Não ficou muito melhor?


## Duplicar modelo

Para duplicar um modelo, selecione o modelo desejado, e no menu à direita, clique em Duplicar. O sistema criará novo modelo. Você pode alterar a descrição de identificação do modelo, e inserir ou observação com detalhes sobre ele. Clique no ícone verde de “check” para salvar. Atenção: o modelo padrão só permite duplicar ou exportar. Falaremos sobre exportação em um tópico específico sobre a função.


## Customização do modelo

Após criar no novo modelo, é possível editá-lo e customizá-lo. Para isso, clique no menu à sua direita. • Editar descrições – Permite editar o nome e os detalhes do modelo; • Editar relatório – Abre a tela do editor Report Builder. Faça as alterações no RTM conforme a necessidade, e salve. Mas, ao salvar o RTM ele não modificará o RTM padrão? Não! Quando um modelo é duplicado, o RTM vinculado a ele também é duplicado. Visão da tabela AltLayoutRTM no SQL Server Management Studio O campo ‘DsArquivo’ armazena os dados do RTM.


## Exportar modelo

A opção de exportar um modelo existe em todos os modelos, incluindo o padrão. O recurso é muito útil, por exemplo, quando o suporte cria um modelo a pedido do cliente e precisa enviar para ele. Para isso, clique em Exportar. Por questões de organização, o sistema sugerirá o caminhoC:\Users\<usuário>\Documentos\RelatoriosBimer, mas pode salvar no lugar desejado. Escolha o local desejado e clique em Salvar. O arquivo terá este padrão: QuadroVendaDiariaPorEmpresa_(Cópia)Quadro de venda diária por empresa.BimerRel


## Importar modelo

Se é possível exportar, então é possível importar. Além de lógico, é tão simples quanto. Clique emImportar, localize e selecione o arquivo exportado, confirme, e pronto! Já pode usar! Eu avisei que era simples. E se quiser criar um relatório do zero? Nessa mesma tela há a opção “Novo modelo”. Clique nela, atribua um nome, grave, e na opção “Editar relatório” do menu do modelo, crie RTM. Superdica! Existe outra forma de incluir um modelo exportado de relatório. E é muito simples. Os arquivos exportados têm uma extensão própria: *.BimerRel. Para incluir o relatório, sem utilizar a função de Importar, basta dar um duplo clique sobre o arquivo exportado. Será aberta a tela de login do módulo. Informe usuário e senha, confirme, e… Prontinho! O modelo é incluído na base de dados.


## Favoritar modelos

Outro recurso muito bacana é o de favoritar um modelo. É só clicar no ícone da estrela para favoritar. Os modelos favoritos ficarão no topo da lista.


## Prévia do relatório

Para concluir apresentamos o recurso de prévia do relatório. Após emitir o relatório pela primeira vez, o ícone de identificação do modelo muda de aparência, conforme o RTM utilizado. Parando o cursor do mouse sobre ele, uma prévia do layout do relatório é mostrada no lado esquerdo. Agora é só aproveitar mais esse módulo sensacional do Bimer.


## Inclusão de modelos criados nos módulos antigos de


## relatórios

Já sei! Você tem vários relatórios que já customizou nos módulos antigos de relatórios, e não quer perdê-los. Calma! Vou explicar como fazer. No módulo Relatórios, localize o relatório desejado compatível com o que você possui. Por exemplo, o quadro de venda diária. Clique em Modelos, em seguida clique em Novo relatório. Atribua um nome para o relatório, e clique em ícone verde de check. Após criar do modelo, é hora de incluir um layout para ele. Para isso, clique no menu à direito, e selecione Editar relatório. Será aberta a tela do Report Builder (editor de layouts de relatórios). Clique em Arquivo, e selecione Carregar arquivo. Localize o arquivo RTM desejado, no diretório padrão ERP (aquele que está informado no Configurador Bimer » Geral » Opções » Geral), e selecione-o. O layout escolhido será carregado para o editor. Se precisar, pode fazer algum ajuste. Clique em Arquivo » salvar, ou salvar como. Feche o editor. Pronto! Agora o modelo já está disponível para impressão.
