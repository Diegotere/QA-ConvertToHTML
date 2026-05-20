# RTM — Edição de Layout — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Ferramentas de Edição](#ferramentas-de-edicao)
- [Onde ficam armazenadas as configurações?](#onde-ficam-armazenadas-as-configuracoes)
- [Opções de Personalização do Editor](#opcoes-de-personalizacao-do-editor)
- [Barra de Ferramentas](#barra-de-ferramentas)
- [Condição de Exibição](#condicao-de-exibicao)
- [Label com condição](#label-com-condicao)
  - [Criando um label](#criando-um-label)
  - [Criando uma condição](#criando-uma-condicao)
- [Imagem com condição](#imagem-com-condicao)
  - [Inserindo imagens](#inserindo-imagens)
  - [Criando uma condição](#criando-uma-condicao)
- [Linhas Alternando Cor](#linhas-alternando-cor)
  - [Mod](#mod)
  - [Inserindo um polígono](#inserindo-um-poligono)
  - [Criando uma condição](#criando-uma-condicao)
- [Configurações de Layout da](#configuracoes-de-layout-da)
- [Página](#pagina)
- [Aba Impressora](#aba-impressora)
- [Aba Tamanho do Papel](#aba-tamanho-do-papel)
- [Aba Layout](#aba-layout)
- [Aba Margens](#aba-margens)

---


## Introdução

Quando falamos em relatórios ou impressões no Bimer, logo vem aquela pergunta: é layout padrão ou RTM? Pois é, esta pergunta tão simples pode dar um rumo diferente na tratativa do assunto junto ao cliente, pois sabemos que as impressões que ocorrem a partir de RTMs são personalizáveis. As edições de RTMs do Bimer são feitas na ferramenta Report Builder, um editor que oferece inúmeras possibilidades tanto no contexto de programação, quanto na personalização gráfica do arquivo de layout. Este material tem foco exclusivo na personalização gráfica do arquivo de layout. Caso queira conhecer mais sobre criações de variáveis e conceitos, acesse o material RTM – Criação de variáveis no Portal UCA, na área de manuais do Bimer.


## Ferramentas de Edição

Para realizar alterações no layout e facilitar a utilização do Report Builder, é possível personalizar a barra de ferramentas do editor. Para isto, na tela principal de edição, clique em Visualizar. Neste local, você poderá escolher o que deseja visualizar em tela durante a edição do RTM. No menu Barra de Ferramentas é possível escolher quais grupos de botões deseja exibir no Report Builder. As configurações realizadas neste local são mantidas para as execuções futuras do editor, não importando qual seja o RTM especificamente. Ou seja, se realizo as configurações na tela de edição de um espelho de pedido de venda, as configurações serão mantidas quando abrir a edição de qualquer outro RTM do sistema.


## Onde ficam armazenadas as configurações?

Os dados de configurações pertencem à máquina. Portanto, eles ficam gravados em um arquivo de inicialização (extensão .ini). Este arquivo está armazenado no diretório Rbuilder, em C:\Users\<Nome do usuário>\AppData\Local, como podemos visualizar na imagem a seguir.


## Opções de Personalização do Editor

No menu Visualizar, há opções que podem facilitar a edição do RTM. Veja a seguir algumas utilidades: • Réguas: marque esta opção caso queira visualizar os eixos horizontal e vertical, como se fossem uma régua, em centímetros na tela do editor; • Margins (ou Margens): marque esta opção para visualizar as margens configuradas no RTM na janela de edição do Report Builder. As margens são definidas em Arquivo > Configurar Páginas... > Aba Margens; • Mostrar Dados: esta opção mostra dados da impressão, quando marcada. Normalmente, utiliza-se desmarcada, pois, desta forma visualizamos os nomes das variáveis; • Temas: por padrão, o Report Builder usa um tema azul. No entanto, você pode modificar isto optando por temas como Office 2007 Black ou Aluminum. É importante ressaltar que esta alteração não tem nenhuma relação com o que será impresso por meio do RTM. É apenas um tema de apresentação da ferramenta Report Builder.


## Barra de Ferramentas

Ainda no menu Visualizar, temos o submenu Barra de Ferramentas. Aqui, você escolhe o que fará parte da sua barra superior na tela do editor. Você pode optar por marcar todas as opções ou manter apenas algumas, que sejam mais interessantes para o que costuma editar. Veja a seguir o que cada opção habilita… 1.Componentes avançados: Dentre as opções deste quadro, é possível inserir um subreport (subrelatório) ou, até mesmo, uma quebra de página; 2.Componentes Padrão: Aqui, você pode gerar um código de barras uma variável calculada, um label (caixa de texto utilizada para colocar o nome do campo. Por exemplo, Valor Unitário), variável do sistema (que pode conter data, hora, número de página, etc), imagens, formas (linha, retângulo, círculo, etc), um memorando (utilizado para textos maiores) ou uma caixa de texto formatado; 3.Componentes de Dados:Este quadro talvez seja um dos mais utilizados! É aqui que você consegue criar uma variável contendo dados para o relatório, como Quantidade, Valor, etc. Para criar este tipo de variável, clique no botão Campo texto. A diferença entre os componentes é semelhante aos componentes padrão, no entanto, os dados aqui serão trazidos do sistema, como por exemplo, a geração de código de barras a partir do código do produto. O componente Campo calculado é utilizado para operações aritméticas, como somar, contar, média, mínimo e máximo; 4.Estrutura do Relatório: O quadro de estrutura do relatório fica à esquerda da tela do editor, e por meio dele, é possível visualizar as variáveis presentes no subreport acessado. Além disso, é possível selecionar a variável pelo respectivo quadro e realizar alterações na fonte, cor, ordem (enviar para trás, trazer para frente, etc), tornar a variável visível ou invisível, formato da apresentação… Tudo que é possível realizar ao clicar sobre a variável na tela principal com o botão direito do mouse; 5.Estrutura de Dados: Este quadro pode ser muito útil quando estamos buscando uma determinada variável. Por meio dele, você pode localizar facilmente todas as variáveis possíveis dentro de um condutor de dados. Basta selecionar o condutor de dados no primeiro quadro e as variáveis aparecerão logo abaixo; 6.Alinhamento ou Espaçamento: Ninguém gosta de ver um relatório ou impressão desalinhado(a), né?! Este quadro serve para manter uma organização visualmente melhor no RTM. Para utilizar os botões, é necessário marcar ao menos duas variáveis, onde a primeira sempre será utilizada como referência para alinhar as próximas selecionadas; ◦ Para alinhar duas variáveis, por exemplo, de título e dados, selecione primeiro o título e posteriormente a variável que contem o dado. Em seguida, clique no botão Alinhas os centros horizontais. Desta forma, as variáveis ficarão alinhadas na mesma direção; ◦ Caso queira alinhar todas as variáveis de título em relação à altura de um campo texto, marque o campo que será a referência, em seguida, com uso do botão shift, marque as demais variáveis e clique no botão Alinhar os topos; 7.Tamanho: O quadro detamanho proporciona a possibilidade de igualar a altura ou largura dos campos. Os botões permitem escolher, ao marcar mais de uma variável, se o maior ou menor tamanho será a referência para todos os campos. Isto pode ser utilizado quando desejamos criar um RTM com campos que trazem dados a serem comparados, comovalor a pagarevalor a receber, por exemplo; 8.Deslocamento: Neste local, após marcar uma variável é possível mover uma variável por 1 pixel dentro do RTM. Isto pode ser difícil utilizando o mouse, portanto, é possível mover para todas as direções. Estes botões podem ser substituídos por um atalho no teclado, composto por CTRL + Seta direcional. Ou seja, se desejo mover minha variável 1 pixel para baixo, devo marcá-la e apertar CTRL + ↓; 9.Desenho: Utilizado para as formas, por meio dos botões contidos neste quadro é possível alterar a cor do preenchimento, estilho da linha, etc; 10.Editar: Aqui, você consegue editar um campo texto ou mudar os dados de uma variável de dados. Por exemplo, há um campo contendo o texto Quantidade Unit., porém, deseja alterar o nome para Qtd Un.. É por meio deste quadro que conseguirá realizar esta edição. No entanto, caso esteja utilizando uma variável de dados do sistema, você verá o condutor de dados à esquerda e a variável ao lado. Pode ser necessário alterar a variável de QtPedida para QtAtendida em um RTM de espelho de pedido, por exemplo. Isto seria feito neste respectivo quadro; 11.Padrão: O quadro padrão traz consigo botões muito conhecidos para quem está acostumado com o ambiente Windows e pacote Office… Por meio deste local, você pode recortar, copiar e colar dados, recuperar um RTM do arquivo ou, até mesmo, salvar o RTM que está em edição; 12.Formato: Neste quadro você consegue modificar a orientação do texto (justificado, alinhado à esquerda, centralizado, etc), alterar cor do fundo ou da fonte, inserir borda ou alterar a ordem do campo no RTM (recuar, enviar para trás, trazer para frente…).


## Condição de Exibição

As edições mais simples podem seguir uma lógica já conhecida de editores de texto ou ferramentas de desenho. Porém, quando o cliente pede algo um pouco mais excêntrico, é necessário um conhecimento mais específico. Um dos pedidos mais comuns, é realizar um condicionamento para a exibição de uma informação. Vejamos um exemplo… Na impressão do pedido, o cliente deseja que, de acordo com o nome do usuário, o e-mail seja alterado na impressão. Em uma breve pesquisa no Report Builder, é possível ver que não há campo que traga esta informação automaticamente, porém, o cliente informou que possui apenas 9 possibilidades de e- mails a serem utilizados, ou seja, até 9 usuários que emitem pedidos de venda.


## Label com condição

Com visto anteriormente, um label é o mesmo que uma caixa de texto. Portanto, primeiramente, precisamos criar este label para que a condição atribua a ele um valor de acordo com a condição.


### Criando um label

Na tela de edição, no quadro de componentes padrão, clique no botão Texto. Em seguida, posicione a variável na tela de edição e no quadro editar, altere o texto para algo sugestivo. Atenção! O texto preenchido somente será utilizado caso não haja nenhuma condição que atenda aos critérios de exibição.


### Criando uma condição

Agora, precisamos criar a condição, para que, de acordo com uma determinada informação, um valor seja atribuído ao label anteriormente criado. A condição será inserida dentro de uma variável calculada, portanto, clique no botão Variável no campo Componentes Padrão. Em seguida, posicione a variável em qualquer local do RTM, clique com o botão direito sobre a mesma e vá em Cálculos. Na janelaCálculos, informe as condições utilizando o operadorIF, que, em português, quer dizer “SE”. Após dizer qual será a condição, utilize THEN, que, em português, significa “ENTÃO”. O script será escrito na conjugação imperativa. Como se estivéssemos dando uma orientação: • se o nome do usuário for Jefferson, então, o e-mail será adm@alterdata.com.br; • if PedidoDeVendaGeral['NmLogin'] = 'JEFFERSON' then Label1.text := 'adm@alterdata.com.br'; • Note que a maneira de atribuir o e-mail é apontando que o campo Label1 receberá o e-mail adm@alterdata.com.br. Caso haja outras possibilidades de condições, basta separá-las por “;”. Veja a seguir o exemplo: Veja que o exemplo do Jefferson é apenas uma das nove condições possíveis para esta variável. Ou seja, o label poderá receber qualquer um dos e-mails desta variável, de acordo com o login do usuário do pedido de venda.


## Imagem com condição

Como sabemos, o Bimer é um sistemamultiempresas. Portanto, o cliente pode utilizar um mesmo RTM para imprimir pedido de duas empresas distintas. No entanto, quando estas empresas possuem logotipos distintos, esta tarefa requer um pouco mais de atenção. É necessário inserir ambas as imagens no RTM, colocá-las como invisíveis e criar uma variável condicional para que torne a imagem visível, de acordo com a condição desejada.


### Inserindo imagens

Na tela de edição, no quadro de componentes padrão, clique no botão Figura. Em seguida, posicione a variável na tela de edição e no quadro editar, clique com o botão direito e, em seguida, vá em Figura. Em seguida, selecione o arquivo de imagem. Repita o procedimento para inserir a segunda logo. Após selecionar a imagem, clique com o botão direito e desmarque a opção Visível. Desta forma, a imagem ficará invisível.


### Criando uma condição

Agora, vamos à criação da condição, para que, de acordo com o código da empresa, por exemplo, uma das imagens seja mostrada. A condição será inserida dentro de uma variável calculada, portanto, clique no botão Variável no campo Componentes Padrão. Em seguida, posicione a variável em qualquer local do RTM, clique com o botão direito sobre a mesma e vá em Cálculos. Na janelaCálculos, informe as condições utilizando o operadorIF, que, em português, quer dizer “SE”. Após dizer qual será a condição, utilize THEN, que, em português, significa “ENTÃO”. Entre as condições, utilize o termo ELSE, que em português, quer dizer “SENÃO”. O script será escrito na conjugação imperativa. Como se estivéssemos dando uma orientação: • se o código da empresa for 1, então, a imagem 1 será visível, senão, se o código da empresa for 2, então, a imagem 3 será visível; • if PedidoDeVendaGeral['CdEmpresa'] = '1' then image1.visible:=true else if PedidoDeVendaGeral['CdEmpresa'] = '2' then image3.visible:=true; • Note que a maneira de alterar a imagem para visível é por meio da condição visible := true. Veja a seguir o exemplo: Na impressão dos pedidos, cada empresa levará sua logo, utilizando uma mesma estrutura de RTM.


## Linhas Alternando Cor

Há quem diga que um relatório ou impressão em formato paisagem fica mais organizado. Outros, preferem modo retrato… Isto vai da preferência e da quantidade de dados que a impressão conterá. No entanto, quando falamos em uma impressão com muitos dados, a linha pode se confundir aos olhos de quem lê. Para isto, o ideal é que as linhas alternem de cor, para que você possa acompanhá- las até o fim por sua cor. Ou seja, se você está lendo a linha 92 e o relatório alterna entre azul e branco, as linhas 91 e 93 serão brancas, portanto, conseguirá guiar-se com mais facilidade até o canto da página. Note a diferença entre as impressões acima. Ambas são do mesmo pedido, no entanto, perceba que há mais facilidade em acompanhar os dados do pedido na impressão da esquerda, por haver a alternância de cor da linha. Para que isto seja possível, faz-se necessário usar uma condição. Inserimos um retângulo (no botão Polígono), colocando-o na cor que deseja alternar e deixando-o como invisível (botão direito sobre o objeto, e desmarque Visível). A condição precisa ser alternada, para que em uma linha, deixe o retângulo visível e na próxima, não. Para isto, é necessário criar uma variável de contagem autoincremental, e posteriormente, realizar um mod desta variável.


### Mod

Afinal de contas, o que é mod? Este tipo de expressão é muito utilizada em ambientes de programação, e serve para buscar o resto da divisão entre dois números. Neste caso, utilizaremos o número 2 como divisor, o que vai sempre ocasionar em um resto 0 ou 1. • 1/2: Na equação 1 dividido para 2, não há como prosseguir sem números decimais. Portanto, o mod 2 para 1, é 1, pois é a sobra inicial da divisão. • 2/2: Quando dividimos 2 para 2, o resto é zero. • Quando dividimos 3 para 2, o resto será 1… 4 para 2, resto zero, e assim por diante. • Note que o resto sempre vai alternar entre 0 e 1, ou seja, temos uma variação binária para estabelecer a condição… Para fazer isto, primeiro crie uma variável para obter o “número da linha”. Na tela do editor, clique no botão Variável. Clique com o botão direito sobre a variável criada e vá em Cálculos. Na janela de cálculos, informe: • Value := value + 1; • Isto quer dizer que a cada linha, receberá o valor dela mesma somado a 1. Em seguida, crie uma nova variável calculada, e na janela de cálculos, informe: • Value := <Nome da variável criada>.value mod 2; • Exemplo: a variável criada inicialmente recebeu nome variable7. Portanto, o comando será escrito da seguinte forma: ◦ Value := variable7.value mod 2; Atenção: Busque sempre manter estas variáveis invisíveis.


### Inserindo um polígono

Para inserir um retângulo, na tela do editor, clique no botão Polígono, e em seguida, altere a forma para Retângulo, caso não esteja. Ajuste o tamanho e envie para trás do texto. Note que o nome do objeto, no exemplo acima, é Shape1. Portanto, agora precisamos que quando o resultado de mod 2 for 0, shape1 seja visível e caso contrário, não visível…


### Criando uma condição

É necessário criar uma terceira variável calculada para criar a condição de exibição do shape1 (objeto). Na janela Cálculos desta nova variável, informe as condições utilizando o operador IF, que, em português, quer dizer “SE”. Após dizer qual será a condição, utilize THEN, que, em português, significa “ENTÃO”. Entre as condições, utilize o termo ELSE, que em português, quer dizer “SENÃO”. O script será escrito na conjugação imperativa. Como se estivéssemos dando uma orientação: • se o resultado for 0, então, o shape1 será visível, senão, shape1 será invisível; • IfVariable17.value = 0 then shape1.visible := true else shape1.visible := false; • A variável 17 é exatamente a que contém a expressão mod 2. Portanto, a condição valida o valor que está nela para definir a visibilidade do objeto. Veja a seguir o exemplo: Resumidamente, precisamos nos lembrar de que existem três momentos de orientação para esta personalização: 1.A numeração das linhas; 2.Obtenção do mod 2; 3.Condicionamento a partir do resultado da segunda etapa, tornando o objeto visível ou não.


## Configurações de Layout da


## Página

A página ficou pequena para a quantidade de campos? A margem está muito grande? Muito pequena? Seus problemas acabaram! Nas configurações de layout da página, é possível configurar diversos detalhes importantes em um RTM.


## Aba Impressora

Neste local é possível definir a impressora padrão para impressão com este RTM. Além disso, é possível também escolher quantas cópias da impressão você deseja.


## Aba Tamanho do Papel

Aqui você pode definir o tamanho do papel, entre opções pré-definidas, como A4, A3, etc, ou inserir o tamanho manualmente nos campos Altura e Largura. Ainda nesta tela, defina a orientação da página, entre Retrato e Paisagem.


## Aba Layout

Neste local é possível dividir a página em colunas e definir a largura das mesmas. Na parte inferior, defina ainda qual será o espaçamento das linhas.


## Aba Margens

Ajuste manualmente as margens do seu documento. Mas, cuidado! Margens muito estreitas podem ser cortadas na impressão.
