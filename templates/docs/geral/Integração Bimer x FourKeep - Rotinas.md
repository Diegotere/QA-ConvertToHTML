# Integração Bimer x FourKeep — Rotinas — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Aplicativo Four Keep – Força](#aplicativo-four-keep-forca)
- [de Vendas](#de-vendas)
- [Perfil](#perfil)
- [Pedidos](#pedidos)
  - [Lançamento do pedido](#lancamento-do-pedido)
  - [Visualização dos pedidos](#visualizacao-dos-pedidos)
  - [Recursos adicionais para o pedido](#recursos-adicionais-para-o-pedido)
  - [Informações Extras – Aba Pedidos](#informacoes-extras-aba-pedidos)
  - [Saldo Flex = Acréscimos – Descontos](#saldo-flex-acrescimos-descontos)
- [Lixeira](#lixeira)
- [Rascunho](#rascunho)
- [Clientes](#clientes)
  - [Aba Geral](#aba-geral)
  - [Aba Títulos](#aba-titulos)
  - [Aba Pedidos](#aba-pedidos)
- [Produtos](#produtos)
- [Indicadores](#indicadores)
  - [Aba Resumo](#aba-resumo)
  - [Aba Metas](#aba-metas)
- [Sincronização](#sincronizacao)
- [Histórico de Sincronizações](#historico-de-sincronizacoes)
- [Configurações](#configuracoes)
- [Ajuda](#ajuda)
- [Sair](#sair)
- [Controle de Desconto](#controle-de-desconto)
- [Desconto por Usuário](#desconto-por-usuario)
- [Desconto por Produto](#desconto-por-produto)
- [Solução de Erros](#solucao-de-erros)
- [Retaguarda - Integração do Pedido](#retaguarda-integracao-do-pedido)
- [Base do PostgreSQL](#base-do-postgresql)

---


## Introdução

Neste material falaremos mais especificamente sobre o aplicativo do Four Keep, suas rotinas e a integração. Caso você precise verificar questões relacionadas à instalação ou às configurações, acesse o manual “Integração Bimer x FourKeep – Configurações”.


## Aplicativo Four Keep – Força


## de Vendas

O aplicativo mobile Four Keep é responsável por realizar os pedidos de venda de forma rápida e otimizada. Os dispositivos móveis deverão possuir os seguintes requisítos mínimos: • Android: versão 5.0 (Lollipop) ou superior • iOS: versão 12.0 ou superior • Tamanho de tela sugerido: 4″ ou superior O aplicativo é compatível com os sistemas operacionais Android e iOS. O grande diferencial dessa ferramenta é a possibilidade de trabalhar de forma off- line e on-line, garantindo flexibilidade e desempenho em diferentes ambientes de operação. Faça a busca do aplicativo na Play Store e clique em Instalar: Ou acesse pela Apple Store e clique em Obter: No primeiro acesso ao aplicativo será necessário informar o Domínio da empresa na Alterdata. Esta informação deve ser a mesma que está presente no Integrador Bimer x Four Keep, aba Opções / Geral. Por meio desse endereço é possível realizar a rotina de exportação e importação dos dados para trabalhar com o Four Keep. Se estiver na tela de Login do Four Keep pode-se retornar para a tela de Configurar Conexão clicando no botão <. Tela de Login do Four Keep– Deve-se realizar o acesso inicial, informando o Login (Usuário) e Senha. A senha Atenção! A senha é cadastrada dentro do integrador e pode ser diferente da senha do Bimer. Na tela seguinte, selecione qual empresa utilizará para realizar as vendas. Observação: Para que as empresas e demais informações apareçam, no sistema é necessário que antes realize a integração dos dados pelo serviço do integrador. Primeiro acesso realizado no Four Keep! Veja as opções disponíveis no aplicativo. Veja no próximo tópico a função de cada uma:


## Perfil

Nesta parte é possível visualizar informações específicas do usuário logado no aplicativo, como: nome, e-mail, se está ativo, saldo flex disponível, alíquota máxima de desconto que ele poderá conceder e se possui acesso restrito ou não.


## Pedidos

Por meio dessa aba efetuam-se os pedidos para os clientes. Para realizar tal procedimento deve-se clicar no botão de adição no canto superior direito:


### Lançamento do pedido

• Cliente: Informe o cliente da operação. Na tela de seleção do cliente também é possível verificar se o cliente possui crédito disponível para emissão do pedido, e de quanto é este crédito, bem como saber se ele está “Inadimplente” ou “Adimplente”. A partir da versão 5.0.0 do app, é possível buscar o cliente por trecho do nome, bairro e afins; • Produto:adicione os itens do pedido clicando no desenho do carrinho de compras. É possível adicionar desconto, acréscimo, quantidade e quantidade por embalagem. Na versão 5.0.0 do app foi implementada uma melhoria em que é mostrado caso o pedido não possua estoque; • Natureza da operação: Insira o tipo de operação que será realizado como “venda” ou “orçamento”, por exemplo; • Condição de Pagamento: Informe um prazo como “à vista” ou “a prazo”; • Forma de pagamento: adicione a forma de pagamento que o cliente realizará o pagamento; • Aplicar Desconto: Adicione um desconto geral no pedido. O sistema também permite inserir essa informação separada por item; • Data de entrega: Informe quando o item será entregue ao cliente; • Transportador: Informe a transportadora caso seja necessário; • Custo do Transportador: Informe se há frete a ser pago e qual será a pessoa responsável pelo pagamento deste; • Observações: Nesse campo é possível informar uma observação do pedido de venda que está sendo efetuado. • Assinatura: possível recolher assinatura do cliente ou vendedor para demonstrar ciência das informações do pedido. Após informar todos os dados do pedido, basta clicar em “Salvar pedido” ou “Salvar como rascunho” caso queira continuar o cadastro do pedido posteriormente. Feito isso, o pedido ficará na tela principal do aplicativo aguardando a integração com a retaguarda. Observação: nessa tela principal, apenas os pedidos aguardando integração ou com erro. Para visualizar os integrados, ative a visualização no canto superior direito, confirme indicado na imagem acima.


### Visualização dos pedidos

Ao abrir o pedido é possível ver o status na cor amarela, denominada Aguardando envio. Até que ele seja integrado, ele ficará como “#TEMP”: Após a sincronização no aplicativo ser efetuada e o pedido enviado, ele fica com o status na cor roxa de “Enviado”: E dessa forma-se pode-se acompanhar o status dos pedidos por dentro de cada um deles, ou pela tela principal de pedidos, verificando até mesmo se a nota já foi gerada a partir do pedido. Além dos status Aguardando Envio e Enviado, temos também: • Confirmado: O pedido foi recebido e confirmado pela retaguarda. • Totalmente atendido: Pedido totalmente atendido e todos os produtos foram entregues. • Parcialmente Atendido: Apenas alguns itens deste pedido foram atendidos, o restante ainda pode ser atendido em outro momento. • Atendido com corte: Apenas alguns itens deste pedido foram atendidos, o restante será cancelado. • Cancelado: O pedido foi recebido pela retaguarda, porém foi cancelado. • Pronto para reenvio: Caso tenha ocorrido algum erro na integração do pedido, será necessário editá-lo, ajustando as informações. Ao salvar o pedido, ele ficará com status “Pronto para reenvio” até que seja feita a sincronização e integração. • Devolvido: O pedido foi realizado, porém foi devolvido pelo cliente. Atenção!!! O pedido ficará com status devolvido apenas para devoluções efetuadas no módulo Devolução e troca. Ao lado do status dos pedidos vemos também o símbolo da NFE que demonstra se houve ou não nota gerada a partir do pedido de venda, na qual vemos duas situações: • Nenhuma nota gerada: Nenhuma nota fiscal gerada pelo pedido de venda foi faturada. • Nota gerada: Indica que, pelo menos, uma nota fiscal gerada pelo pedido de venda foi faturada.


### Recursos adicionais para o pedido

Ao manter o dedo pressionado sobre o pedido, serão exibidas as seguintes opções: • Excluir –Para excluir o pedido, caso esteja como rascunho ou não tenha sido integrado; • Atualizar – Envia individualmente o pedido selecionado para a retarguarda; • Duplicar – Permite criar pedidos a partir do pedido selecionado; • Visualizar PDF – É possível visualizar o pedido em PDF, mas é necessário que o dispositivo tenha um leitor de PDF instalado; • Exportar como PDF – Permite a exportação de um arquivo PDF com os dados do pedido.


### Informações Extras – Aba Pedidos

Valor mínimo para criação de pedidos Conforme demonstrado anteriormente o Integrador Bimer X Four Keep possui na aba Opções / abaGeral / o campo “Valor mínimo para criação de pedidos”. Se for lançado algum pedido de venda com valor inferior ao que estiver preenchido nesse campo, o sistema bloqueia a venda e emite a seguinte mensagem: Limite de crédito disponível do cliente Conforme já visto, o integrador Bimer X Four Keep possui o campo Bloquear a venda se o valor ultrapassar o limite de crédito disponível do cliente (Aba Opções / abaGeral). Assim, se for efetuada uma venda que ultrapasse esse limite a seguinte mensagem é gerada: Saldo Flex: • O Saldo Flex, são acréscimos concedidos nos pedidos que poderão ser utilizados como descontos em outros pedidos. Com isto, o sistema abate do flex disponível do usuário, o total de flex utilizado nos pedidos que ainda não foram confirmados. Exemplo: Vendedor João acresceu R$ 10,00 ao valor do preço do produto “celular”, quando o vendeu ao cliente José. Mais tarde, a cliente Maria solicitou que fosse dado um desconto a esse produto. Sendo assim, o João poderia fornecer no máximoR$ 10,00 de desconto para a Maria. • Esse recurso faz com que a empresa tenha um controle para não perder o faturamento que almeja com os valores das vendas, em que o vendedor só pode realizar descontos caso já tenha dado acréscimos anteriores. • Ressaltando que é necessário que no Integrador esteja marcado a opção para HabilitarFlex. • Cada vendedor possui seu saldo não sendo possível transferir o valor de um para o outro. • Na primeira vez que for trabalhar com saldo flex é necessário realizar uma sincronização do Integrador e depois do aplicativo. O saldo será alimentado inicialmente após gerar o primeiro pedido com o acréscimo, em que este precisa chegar na retaguarda (com o statusConfirmadono aplicativo), e depois disso ser feita uma Sincronização no aplicativo.


### Saldo Flex = Acréscimos – Descontos

Sincronização dos pedidos: No canto superior direito da aba Pedidos há o símbolo de uma seta, a qual possui a função de: • Quando direcionada para o lado direito → Visualiza-se somente os pedidos que já sofreram o processo de sincronização; • Quando direcionada para o lado esquerdo→ Visualiza-se somente os pedidos não sincronizados: Descontos e Acréscimos Pode-se inserir esses valores por meio da inclusão do item ao pedido. Para o sistema chegar ao valor final do pedido, ele utiliza a seguinte fórmula: Valor do pedido = Valor Total dos itens + Acréscimos da aba Itens – Desconto da aba Geral – Descontos da aba Itens Tempo Limite dos pedidos no aplicativo Mobile Não há um limite estipulado de dias para o pedido ser deletado do aplicativo após a sincronização. Sendo assim, uma vez que ele é inserido pelo Four Keep e não excluído na base da retaguarda, sempre ficará disponível para visualização no aplicativo mobile. As possibilidades para que os pedidos não apareçam no aplicativo são: fazer logoff do aparelho, trocar de usuário, trocar de aparelho ou desinstalar o app.


## Lixeira

A lixeira permite recuperar um pedido que foi excluído antes de ser importado na retaguarda. É possível recuperar ou excluir definitivamente do app.


## Rascunho

Nessa aba será mostrado todos os rascunhos de pedidos. Para criar um rascunho que apareça nesta aba, basta clicar em Salvar rascunho na parte inferior da tela. Em seguida, vá para a aba Rascunhos e verá o rascunho do pedido salvo, você pode abri-lo para continuar a digitação.


## Clientes

Veja os clientes cadastrados no aplicativo mobile e aqueles que estão presentes na retaguarda. Para incluir um cliente é só clicar emAdicionar.A partir da versão 5.0.0 do FourKeep, é possível localizar o cliente por trecho, bairro, etc. Em seguida, basta preencher o cadastro e clicar em Salvar. A versão 5.3.1 do aplicativo conta com a consulta do CNPJ do cliente diretamente na Receita Federal. Dessa forma, ao informar o CNPJ os dados do cliente são preenchidos automaticamente. Contudo, só é possível fazer até 3 consultas por minuto. Ao informar o CEP, os dados do endereço também são recuperados automaticamente.


### Aba Geral

Após cadastrar o cliente, pode-se abrir o cadastro no qual é possível pela aba Geral: • Visualizar o endereço do cliente; • Realizar chamadas a partir dos telefones de contato do cliente; • Enviar e-mails utilizando aplicativos de e-mails; • Enviar mensagem ou realizar chamadas via WhatsApp; • Criar pedidos para o cliente que está sendo visualizado, botão no canto inferior direito da tela; • Editar o cadastro do cliente que ainda não foi sincronizado ( será apresentado a opção Editar no canto superior direito da tela). Para utilizar o Four Keep em conjunto com os aplicativos de E-mail e WhatsApp, é necessário que estas aplicações sejam previamente instalados no dispositivo móvel, para que assim seja feita uma integração do app do Four Keep com os citados anteriormente. Observação: a partir da versão 5.0.0 do app, foi adicionada uma proteção para não permitir cadastro duplicado de pessoas.


### Aba Títulos

Nota-se as informações de valor em aberto e juros do título e, além disso o totalizador desses valores.


### Aba Pedidos

Veja todos os pedidos criados para o cliente selecionado. É possível saber quando um cliente ainda não foi confirmado pela retaguarda, pois o mesmo apresentará o código TEMP.


## Produtos

Veja o catálogo com todos os produtos disponíveis e dados como a imagem vinculada ao item, código e nome do produto, preço de acordo com aquele definido em Configurações. O campo Quantidade será preenchido ou atualizado caso esteja marcada a opção Trabalha com integração do estoque no módulo em Integrador Bimer x Four Keep / Opções / Integração. Ao clicar em cima de algum item se pode visualizar se o produto possui algum tipo de observação: Na tela principal do menu de produtos, há como buscar produtos ou filtrar por categoria. Clicando no ícone: Também é possível no filtro ordenar por forma crescente, decrescente por código ou nome do produto. Observação: Nas abas “Pedidos”, “Produtos” e “Clientes” consta no canto superior direito da tela o símbolo de filtros, por meio do qual pode-se realizar um filtro para agilizar a localização dessas informações.


## Indicadores


### Aba Resumo

Essa tela apresenta os dados de vendas do mês corrente. Além disso, também é mostrado o valor das vendas transmitidas, vendas faturadas, dias úteis restantes até o final do mês e a tendência de vendas do mês. Todas as informações estão relacionadas ao usuário logado no app.


### Aba Metas

Essa aba apresenta as metas cadastradas e vinculadas ao usuário logado no app. • Valor da meta: Valor da meta individual Importado da base de retaguarda; • Período da meta: Período de vigência da meta, ou seja, quando a meta de vendas começa a valer e quando termina a sua validade; • Valor alcançado: Apresenta o valor que já foi vendido dentro do período de validade da meta; • Porcentagem alcançada: Apresenta o valor de acordo com o campo Valor alcançado; • Valor restante: Apresenta o valor que falta em vendas para alcançar a meta. Para que essa configuração funcione uma meta deverá ser cadastrada no módulo Configurador / Geral / Outros cadastros / Metas, preenchendo um Período e Valor da meta: Após cadastrá-la, ela deverá ser adicionada no cadastro do funcionário, aba Cadastros / Meta. Mas atenção! Esse mesmo cadastro de funcionário deve estar vinculado ao usuário em seu cadastro. Com isso, sempre que for realizada uma venda por este usuário, o valor desta nota fiscal será atualizado no valor já alcançado da meta.


## Sincronização

Na aba Sincronização, realize a integração entre os dados gerados na retaguarda para o aplicativo e vice-versa. Ao iniciar a utilização do aplicativo Four Keep, é necessário efetuar uma sincronização de todos os dados. O tempo da sincronização inicial dos dados dependerá da quantidade de informações na base de dados.


## Histórico de Sincronizações

Funciona como um log das sincronizações. Caso algum erro ocorra durante a sincronização, o aplicativo apontará nessa seção.


## Configurações

Nessa tela temos algumas configurações conforme imagem abaixo: • Preço padrão: Informe o preço que o fourkeep usará como padrão durante a criação de um pedido. Observação: Opção disponível se no integrador, aba Preço, tiver mais de 1 preço informado e a opção: Permitir alterar tabela de preço estiver marcada. • Permitir criar pedido para clientes inadimplentes: Essa configuração não poderá ser alterada no celular. Apenas na retaguarda, porém até o momento, versão 4.4.0 do integrador, não foi implementada o recurso. • Bloquear produtos com estoque zerado: Marque para não permitir a venda de produtos com estoque zerado. Observação: Para usar o recurso sem bloqueio (desmarcado), é necessário que no integrador, aba integração, a opção: Trabalhar com integração do estoque esteja marcada eexportar apenas produtos disponíveis no estoque esteja desmarcada. • CPF obrigatório para cadastro de clientes:Marque para que tenha obrigatoriedade de informar CPF ao cadastrar um cliente. • Preferência do aplicativo: Selecione a opção tema do aplicativo, como Claro, Escuro ou padrão do sistema, essa última usará o tema correspondente do celular. • Sincronização automática: é possível definir um intervalo de 15min a 24h para que a sincronização seja feita automaticamente. Nesse caso, enquanto a sincronização estiver sendo executada, a tela do aplicativo ficará ligada para que o processo não seja interrompido.


## Ajuda

Essa opção abre no dispositivo o site do Centro de Aprendizagem.


## Sair

Utilizada para realizar o logoff pelo usuário que está acessando o aplicativo. Ao logar com o novo usuário, o sistema carrega as configurações definidas para ele, como por exemplo, o controle de desconto para este usuário e alterar a empresa de movimentação. Atenção!!! Ao efetuar o logoff do aplicativo todos os dados locais serão APAGADOS. Com isso são perdidos os pedidos não sincronizados e os sincronizados não aparecerão mais. Uma pequena pausa para dica: Para mais detalhes sobre como cadastrar a meta e como ela influencia no Bimer, clique aqui para acessar um artigo em nosso centro de aprendizagem.


## Controle de Desconto

Podemos realizar o controle de desconto por usuário e produto de acordo com a configuração na base de dados do Bimer. Dessa forma, pode-se definir o percentual máximo de desconto a ser atribuído para cada usuário e produto. Se em um pedido informar um usuário e um produto no qual os dois possuam uma alíquota máxima de desconto configurada, o sistema considera a menor alíquota para o bloqueio.


## Desconto por Usuário

No cadastro de Usuário, aba Configurações do usuário, aba Geral há o campo Faixa de alíquotapermitida para conceder desconto: Caso possua, o valor informado no campoAl.Final será utilizado como alíquota máxima de desconto para aquele usuário. Caso não possua, o sistema considera que o usuário pode aplicar descontos livremente. Assim, ao incluir um novo pedido logado com o usuário, no qual a alíquota for maior que o desconto no cadastro do usuário, a seguinte mensagem é emitida:


## Desconto por Produto

No Cadastro de produto / aba Opções há os campos de Desconto: Caso possua, o valor informado no campo Desc. max. vendas será utilizado como alíquota máxima de desconto para aquele produto; Caso não possua, o sistema considera que para o produto configurado, poderão ser aplicados descontos livremente. Assim, ao incluir um novo pedido com o produto, onde a alíquota é maior que o desconto no cadastro do produto a seguinte mensagem é emitida:


## Solução de Erros

Vimos neste material que o sistema emite algumas mensagens ao gravar os dados ou ao consultar o pedido novamente. Mas o que fazer se a integração por algum motivo não ocorrer? Como por exemplo, de um pedido não aparecer na retaguarda? Pode-se acessar na máquina do Integrador o seguinte caminho: Computador / Gerenciar / Visualizador de Eventos / Logs de Aplicativos e Serviços / Integração Four Keep, filtrando assim por erros de acordo com determinado dia e hora. Ainda pode-se consultar em Geral a mensagem apresentada: Outra forma de acessar é apertar as teclas Windows + R, digitareventvwr e pressionar Enter:


## Retaguarda - Integração do Pedido

O erro que você viu ali acima é comum de ocorrer, principalmente se você trabalha com um cliente de uma nova UF. A partir de agora vou te passar alguns segredos pontos que você precisa ver na retaguarda para corrigir o erro acima e alguns outros: • Operação: Será a mesma utilizada no Integrador / Opções / Operação / Operação padrão de pedidos de vendas. Abra essa operação e veja o CFOP dentro dela. Como o cliente é de fora do estado está sendo utilizado o 6.102, isso quer dizer que o CFOP usado vai de acordo com operação. Se fosse uma venda no mesmo estado da empresa seria utilizado o 5.102, por exemplo. • Cadastro de Produtos: Localizeo produto com erro. De acordo com o log na imagem, o código é o 000002. Veja na abaImpostoso cálculo de ICMS vinculado no seu produto. Se não possuir cálculo de ICMS, inclua algum. • Cálculo de ICMS: Vá no Configurador / Estoque / Tributos / Cálculo de ICMS e inclua uma configuração para a UF de origem, UF de destino e CFOP apontados no log. Os outros campos como a UF de tributação fica a cargo do usuário: Dúvida! Essas configurações são importantes mesmo? Sim! Por meio delas o pedido já é gerado no Bimer com as tributações e códigos fiscais corretos. Para cada pedido que falte um desses pontos, o evento de log do Windows vai alistar um erro. Se liga! Após fazer isso ou outra modificação na retaguarda, sempre: 1.Reinicie o integrador; 2.Faça uma sincronização no aplicativo; 3.Integre novamente o pedido no aplicativo; 4.Reinicie o integrador e veja se o pedido de vendas foi gerado no Pedido de vendas. Para saber qual é o pedido, veja a data, cliente e a coluna “Origem” que trará FourKeep:


## Base do PostgreSQL

Como visto no tópico Funcionamento da Integração, cada cliente possui dados na base do PostgreSQL que fica aqui na Alterdata. Dentro doPGAdmin (Ferramenta de gerenciamento do PostgreSQL), vemos à esquerda o Schema de cada cliente. O nome é de acordo com oDomínioexistente para cada pessoa (presente no integrador). Os comandos de consulta são executados usando a linguagem SQL. Coloque sempre o padrão: Schema.Nome_da_tabela que será consultada, como no exemplo: Algumas tabelas e dicas para te ajudar na análise: • Tabelafaturamento_pedido: Guarda os dados dos pedidos de vendas realizados nos Mobile. • Tabela faturamento_item: Armazena os itens do pedido de venda. • Tabelas com o prefixo estoque_produto: Mostram os dados dos produtos da retaguarda como: o saldo em estoque e preços. • Tabelas com o prefixopessoa: Informações de clientes, fornecedores e transportadoras. • Tabelas com o prefixo financeiro: Dados de pagamento do pedido de venda e dos títulos presentes na retaguarda. • Colunasid_retaguarda: Com esta informação você consegue relacionar os dados da tabela do PostrgreSQL com a devida tabela do SQL Server dentro do Bimer. E analisa também se a informação já foi integrada ou não. ◦ Exemplo: Localizei que o pedido de vendas na tabela faturamento_pedido está com id_retaguarda em branco,o que isso quer dizer? Que o pedido ainda não foi integrado com a retaguarda e possivelmente ocorreu algum erro na recepção do pedido. Se liga nas últimas dicas! O usuário utilizado pelo suporte da Matriz não possui permissão para alterar dados no banco de dados, apenas para consultar. Deste modo, se for necessário ajustar alguma informação deve-se entrar em contato com o Desenvolvimento. Se você tiver mais alguma dúvida no PostgreSQL, clique aqui para ir direto para nossa área de materiais. Se você é de uma representação ou filial, fique tranquilo! É só entrar em contato com Canais para analisar alguma informação no PostgreSQL.
