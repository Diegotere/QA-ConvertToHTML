# RTM — Criação de Variáveis — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é uma variável?](#o-que-e-uma-variavel)
- [O que é Object Pascal?](#o-que-e-object-pascal)
- [Variável Calculada](#variavel-calculada)
- [Introdução básica a linguagem Object Pascal](#introducao-basica-a-linguagem-object-pascal)
- [Estrutura básica do Object Pascal](#estrutura-basica-do-object-pascal)
- [Variáveis e tipos de dados](#variaveis-e-tipos-de-dados)
- [Operações e operadores](#operacoes-e-operadores)
  - [Igualdade, Diferença e Negação](#igualdade-diferenca-e-negacao)
  - [Maior que, menor que, maior ou igual, menor ou](#maior-que-menor-que-maior-ou-igual-menor-ou)
  - [igual](#igual)
  - [Soma, subtração, multiplicação e divisão](#soma-subtracao-multiplicacao-e-divisao)
  - [Gravar um resultado em uma variável (atribuição)](#gravar-um-resultado-em-uma-variavel-atribuicao)
- [Estruturas de Decisão e de Repetição](#estruturas-de-decisao-e-de-repeticao)
  - [Condição if, then, else](#condicao-if-then-else)
  - [Ciclo While, Do](#ciclo-while-do)
  - [Ciclo For to do/For downto Do](#ciclo-for-to-dofor-downto-do)
  - [Condição Case of e else:](#condicao-case-of-e-else)
- [Arredondamentos](#arredondamentos)
- [Criando uma variável calculada](#criando-uma-variavel-calculada)
- [Aba Cálculo](#aba-calculo)
- [Exemplos de variáveis calculadas](#exemplos-de-variaveis-calculadas)
- [Variável global](#variavel-global)
- [Sub-relatório X Capa](#sub-relatorio-x-capa)
- [Utilização de variável global](#utilizacao-de-variavel-global)
  - [Exemplo prático](#exemplo-pratico)
- [Declaração da variável](#declaracao-da-variavel)
- [Destinar dados à variável](#destinar-dados-a-variavel)
- [Exibir os dados da variável global](#exibir-os-dados-da-variavel-global)
- [Informações Adicionais](#informacoes-adicionais)
  - [Deixar variável de origem dos dados invisível](#deixar-variavel-de-origem-dos-dados-invisivel)
  - [Renomear variáveis](#renomear-variaveis)
- [Input Query](#input-query)
- [Declaração da variável](#declaracao-da-variavel)
- [Criação da caixa de valor](#criacao-da-caixa-de-valor)
- [Inserção do valor em uma variável visível](#insercao-do-valor-em-uma-variavel-visivel)

---


## Introdução


## O que é uma variável?

De modo geral variável é algo sujeito a ter variações ou mudanças, que pode assumir qualquer um dos valores em um conjunto de informações. Softwares utilizam os recursos de hardware mais básicos para executar algoritmos, que são conjuntos de regras e procedimentos, como uma receita de bolo, por exemplo. Enquanto o processador executa os cálculos, a memória é responsável por armazenar dados e servi-los ao processador. O recurso utilizado nos programas para escrever e ler dados da memória do computador é conhecido como variável, que é simplesmente um espaço na memória que é reservado e nomeado. Podemos armazenar a idade dos funcionários de uma empresa através da utilização de uma variável chamada “idade”, por exemplo. Interprete uma variável como uma gaveta “etiquetada” em um armário, e em nosso exemplo, teríamos uma gaveta específica para “idade”. Quando criamos uma variável no programa, é especificado que tipo de dados pode ser armazenado nela. Por exemplo, a variável “nome” só poderia armazenar valores do tipo texto. Já a variável “idade”, só poderia armazenar valores do tipo número (inteiro). Chamamos este espaço alocado na memória de variável, porque o valor armazenado neste espaço de memória pode ser alterado ao longo do tempo. Veja abaixo uma demonstração de como funciona uma variável em um algoritmo: Algoritmo Teste de Variável Declaração das variáveis nome: Texto Início nome<- “João” imprimir(nome) nome <- “Maria” imprimir(nome) Fim Nesse algoritmo, é declarada uma variável chamada“nome” do tipo“Texto”. Inicialmente será armazenado o texto “João” na variável “nome”, e em seguida é solicitado ao sistema a imprimir na tela o valor desta variável. Neste momento aparece na tela o texto “João”, em seguida alteramos o valor da variável para “Maria” neste momento o texto “João” é apagado da memória e em seu lugar é armazenado o texto“Maria”. Em seguida, é solicitado imprimir na tela novamente o valor da variável, então aparece na tela o texto “Maria”. Exemplo 2: Algoritmo Soma Declaração de variáveis numero1: Inteiro numero2: Inteiro resultado: Inteiro Início numero1 <- 5 numero2 <- 4 resultado <- numero1 + numero2 imprimir(resultado) numero2 <- 2 resultado <- resultado * numero2 imprimir(resultado) Fim O resultado deste algoritmo é imprimir na tela o valor “9” e depois o valor “18”. Saber como ler e escrever dados na memória do computador é muito importante para criar um algoritmo. E a forma como faz isso é através das variáveis.


## O que é Object Pascal?

Object Pascal é uma linguagem de programação de alto nível desenvolvida com base na linguagem Pascal. A diferença é que Object Pascal é orientado a objeto. Esta linguagem foi utilizada para a criação de muitos programas, dentre os que utilizam esta linguagem estão o próprio Bimer e o Report Builder. Como qualquer linguagem de programação, o seu principal objetivo é fazer com que uma pessoa consiga passar para o computador o que ele deseja que o computador realize, como uma soma, multiplicação ou até procedimentos mais avançados, utilizando algoritmos bem escritos de forma um pouco similar a linguagem de comunicação do ser humano. Esses algoritmos possuem uma sintaxe e uma semântica própria assim como o português. Cada linguagem de programação tem suas regras diferenciadas de escrever e objetivos diferentes, podendo comparar as linguagens de programação a idiomas, como português, inglês, espanhol, etc. Retornando ao exemplo anterior, que demonstra um algoritmo de soma usando variáveis, ao reescrevê-lo em Object Pascal o mesmo ficaria da seguinte forma: Program Soma; Var numero1 : Integer; numero2 : Integer; resultado : Integer; Begin numero1 := 5; numero2 := 4; resultado := numero1 + numero2; Writeln(resultado); numero2 := 2; resultado := resultado * numero2; Writeln(resultado); End. Note que o formato da escrita e algumas regras foram alterados, porém, este algoritmo realiza a mesma tarefa manipulando as variáveis. A linguagem Object Pascal oferece outras formas melhores para trabalhar com variáveis, possibilitando assim utilizar formas diversas as manipulações de valores, aplicando fórmulas matemáticas, condições, repetições, etc.


## Variável Calculada

Durante a criação ou edição de um RTM no sistema, algumas vezes poderá se deparar com situações em que apenas utilizar certos recursos como de “Campo texto” e “Campo calculado” do Report Builder serão limitados para necessidades que precisam de um grau elevado de complexidade. O recurso de “Variável calculada” do Report Builder possibilita utilizar recursos customizáveis, em que poderá escrever ou manipular se um valor através da linguagem Object Pascal, possibilitando assim atender a obtenção de valores e customização elevada, como de cálculos complexos que dependem de variáveis diferentes do sistema ou até recursos como ocultar linhas ou valores impostas por uma determinada condição. Um exemplo prático do que é possível realizar é não apresentar no relatório os valores iguais ou inferiores a zero.


## Introdução básica a linguagem Object Pascal

O grande destaque do recurso “Variável calculada” do Report Builder é a sua customização através da linguagem Object Pascal. Portanto, é importante realizar uma introdução básica sobre programação em Object Pascal, para que possua conhecimento do essencial para atender as necessidades comuns que geram demanda.


## Estrutura básica do Object Pascal

Em exemplos anteriores foram mostrados o pseudocódigo e um código do Object Pascal em suas determinadas estruturas, entretanto a construção destes códigos não foi detalhada. Toda linguagem possui uma sintaxe e semântica, e o Object Pascal não é diferente. A linguagem possui uma estrutura básica de onde determinados elementos devem estar localizados e estruturados conforme o exemplo abaixo: Program <Nome do programa>; Var <Zona de declaração dos tipos de variáveis>; Begin <Zona do código>; End. Nessa representação genérica acima, observe que nos trechos em “Negrito” estão contidas estruturas fixas obrigatórias, nativas da linguagem, que devem ser escritas dessa forma. São como as gavetas com etiquetas, em que elas dizem o que deve ter dentro de cada gaveta. O que está escrito em “<Verde>” é o conteúdo dessa gaveta. Primeiramente, analisando a estrutura, observe o trecho “Program <Nome do programa>”, em que “Program” é a instrução que diz à quem está programando este código que deverá informar o nome do programa na parte “<Verde>”. Em seguida, observe: Var <Zona de declaração dos tipos de variáveis> “Var” orienta que este local deverá conter as declarações das variáveis. Logo em seguida na zona “<Verde>” deverá realizar as declarações de todas as variáveis que serão utilizadas ao decorrer do programa; E, por fim, a parte mais importante: Begin <Zona de comandos> End. Onde “Begin” e “End.” informam que entre estas duas palavras deverá colocar os comandos e instruções que o sistema executará, como realizar, soma, multiplicação, tornar campos invisíveis, etc. Eles servem como o delimitador do código, onde “Begin” é o início e “End.” é o fim do espaço onde poderá escrever o comando. Sempre ao declarar uma variável ou passar uma instrução é necessário inserir “;” no final para que o Pascal interprete corretamente.


## Variáveis e tipos de dados

Os principais tipos de dados são os seguintes: • Integer – número inteiro (exemplo: -2; 0; 10); • Real – número real (números quebrados, por exemplo: -0.33; 7; 1.01); • String – cadeia de caracteres (texto); • Char – caractere (somente uma letra); • Boolean – booleano: verdadeiro ou falso; • Double – números de ponto-flutuante (com parte fracionária); • Text – ficheiro de texto simples. Estes tipos de dados informam ao sistema o que a variável receberá. Isso é necessário porque o sistema trata internamente cada tipo de dados de forma diferente. Sendo assim, não há como realizar operações matemáticas com valores do tipo char que recebem apenas uma letra. A declaração das variáveis é feita apenas uma vez e não poderá ser alterada depois ao decorrer da execução. Para realizar a declaração deverá escrever Var e logo abaixo informar o <nome da variável> : <tipo de dados>. Veja a sintaxe: Var numero1 : Integer; texto1 : Text;


## Operações e operadores


### Igualdade, Diferença e Negação

A igualdade e a diferença são úteis essencialmente em condições. A resposta que estes operadores devolvem ao programa é do tipo boolean: verdadeiro ou falso. Por exemplo, no caso de 2 = 2 será devolvido True (verdadeiro), pois de fato, 2 é igual a 2. Já no caso de 2 <> 2 será devolvido False (falso), pois 2 não é diferente de 2. Já no caso de ser escrito NOT (2 <> 2), será devolvido que é verdade, pois de fato, 2 não é diferente de 2. Veja a sintaxe: Igualdade: A = A Diferença:A <> B Negação:not (A – B)


### Maior que, menor que, maior ou igual, menor ou


### igual

Comparar valores maiores, menores ou iguais é uma outra possibilidade na edição de um RTM. No seguinte exemplo em que 2 > 2, retornará falso, pois 2 não é maior que 2, e sim igual. O sinal de “menor que” possui um comportamento similar. Num teste como “1 < 3”, ele retornará verdadeiro, pois 1 é menor que 3. Por último, caso queira testar se um valor é maior ou igual a outro, será feito desta forma “2 >= 2”. Nesse caso, retornará verdadeiro, já que mesmo que não seja maior, o valor é igual, a mesma regra é seguida para menor ou igual “<=”. Veja a sintaxe: Maior que:A > B Menor que:A < B Maior ou igual a: A >= B Menor ou igual a: A <= B


### Soma, subtração, multiplicação e divisão

Para realizar estas operações, basta utilizar as variáveis declaradas como inteiro, a exemplo de uma equação matemática: Soma: A + B Subtração:A - B Multiplicação: A * B Divisão: A / B Contudo, no caso da divisão, o Object Pascal tem dois operadores: um devolve o resultado da divisão como um número inteiro e outro o primeiro resto da divisão: Resultado inteiro:A div B Primeiro resto:A mod B Neste caso, aplicando valores às variáveis, onde A é igual a 10 e B é igual a 5, ao usar “A div B“ o resultado seria “2”. Ao utilizar “A mod B”, o resultado final seria “0”, porque ao dividir 10 por 5, imediatamente o primeiro resto é 0. Porém, se dividíssemos 21 para 5, o primeiro resto seria “1”. Pois, o último valor inteiro possível de dividir 21 para 5 é 4. 5 x 4 é igual a 20 e sobra 1, que é o primeiro resto (para chegar em 21). Veja a aplicação prática ao lado.


### Gravar um resultado em uma variável (atribuição)

O resultado destas últimas operações pode ser gravado numa variável (atribuído a uma variável) para depois ser utilizado noutros processos e cálculos. Em Pascal, o comando (operador) que dá ordem para atribui um valor numa variável é “:=”. Por exemplo, se quisermos somar duas variáveis inteiras, A e B, e atribuir o resultado a uma variável inteira chamada resultado, será escrito “resultado := A+B”. Este operador regulamenta que a variável que está a esquerda recebe o valor do que está a direita do comando. Veja a sintaxe: <Variável que receberá o valor> := <Valor que será atribuído a variável> A := 2 + 5 Caso faça o inverso, não funcionará: <Valor que será atribuído a variável> := <Variável que receberá o valor> 2 + 5 := A


## Estruturas de Decisão e de Repetição

Estruturas de decisão são instruções organizadas que permitem ao programa analisar uma determinada condição e, dependo se a resposta for verdadeira ou falsa, decidirá o que realizar em seguida. Já as estruturas de repetição são instruções estruturadas que obrigam o programa repetir um conjunto de instruções (comandos) conforme a condição é verdadeira ou falsa, esta execução em outras palavras serão designadas por ciclos.


### Condição if, then, else

Esta condição dá uma ordem de condição ao programa, como “Se”, “Então” ou “Senão”. Veja a sintaxe: if (condição) then begin <Comando 1>; end else begin <Comando 2>; end; Ou seja,se a condição for verdadeira,então será executado o “<Comando 1>”, senão será executado apenas o “<Comando 2>”. Exemplo: Se a variável A, do tipo Real, for positiva ou nula, então mostra-se o texto “número positivo ou nulo”, caso contrário mostra-se o texto “número negativo”: if (A >= 0) then begin writeln('Numero positivo ou nulo'); end else begin writeln('Numero negativo'); end;


### Ciclo While, Do

Este ciclo obriga o programa a executar repetidamente a mesma série de instruções enquanto uma determinada condição for verdadeira. Quando a condição se tornar falsa, o programa (ou o código) sairá do ciclo de repetição. No exemplo a seguir enquanto A for menor ou igual a 0, ele irá ler repetidamente outro valor de A que for digitado, até que um dos valores de A seja maior que 0: While (A <= 0) do begin readln(A); end;


### Ciclo For to do/For downto Do

Este ciclo tem a mesma ideia de repetir uma determinada série de instruções até que a condição seja satisfeita, sendo que o while roda indefinidamente até que a condição deixe de ser verdadeira. Ao utilizar “For”, a diferença é que ele não roda indefinidamente, e sim repete um número de vezes já pré-definido. Dessa forma poderia definir que um trecho do código sempre irá se repetir 5 vezes ou até a quantidade de vezes definida por uma variável. Para isso, o ciclo conta com uma variável que adicionará mais um valor ao seu próprio valor a cada execução, até atingir o número de vezes que deve repetir. Exemplo: Program Repeticao; Var Contador: Integer; Begin For Contador:= 1 to10 do begin Writeln('Contagem: ', Contador ); End; End. O exemplo acima imprimirá sequencialmente na tela: Contagem: 1 Contagem: 2 Contagem: 3 Contagem: 4 Contagem: 5 Contagem: 6 Contagem: 7 Contagem: 8 Contagem: 9 Contagem: 10 Neste exemplo o contador será inciado com o valor 1, a cada ciclo ele será incrementado com mais um automaticamente (Contador := Contador + 1), o mesmo fará isso até chegar a 10 que foi o limite de repetições imposto. A cada clico imprimirá a mensagem “Contagem: ”, acompanhada do valor da variável “Contador”. Quando a variável chegou em 10, sua condição foi satisfeita e assim parou de repetir o comando que estava dentro do For. Podemos aplicar a contagem inversa utilizando o downto, ao invés do to. Desta forma, o programa não incrementará +1 ao valor da variável de inicialização e controle, ele decrementará -1 a cada ciclo. Se no código anteriormente descrito utilizássemos este recurso, ficaria da seguinte maneira: ProgramRepeticao; Var Contador: Integer; Begin For Contador:= 10 downto0 do begin Writeln('Contagem: ', Contador); End; End. E imprimiria na sequência: Contagem: 10 Contagem: 9 Contagem: 8 Contagem: 7 Contagem: 6 Contagem: 5 Contagem: 4 Contagem: 3 Contagem: 2 Contagem: 1 Contagem: 0


### Condição Case of e else:

Esta condição pode poupar a utilização excessiva de condições if. Esta instrução basicamente orienta o seguinte: “caso a variável tenha este valor, então…”. Para classificar uma nota de 0 a 20 em termos qualitativos, teremos por exemplo, o seguinte: Program Avaliacao; Var Nota: Integer; Begin Writeln('Introduza uma nota de 0 a 20: '); Readln(Nota); Case Notaof 0..9:Writeln('Insuficiente'); 10..14:Writeln('Suficiente'); 15..17:Writeln('Bom'); 18..20:Writeln('Excelente'); Else begin if (Nota< 0) then Writeln('ERRO! Nota nao pode ser negativa!'); if (Nota > 20) then Writeln('ERRO! Nota nao pode ser maior que 20!'); End; End. Caso mais do que uma instrução tenha que ser executada em determinado caso, a estrutura será: Case Notaof 0 .. 9:begin Writeln('Insuficiente'); Writeln('Reprovado'); End; 10 .. 14:Writeln('Suficiente'); //continua até o final...


## Arredondamentos

Em Pascal é possível, realizar arredondamento de valores. Existem dois métodos distintos: round ou “:”. Através da função de arredondamento, podemos ainda atribuir o resultado a uma variável. Por exemplo, para arredondar um resultado do tipo real o código ficaria da seguinte forma: Program Arrendodamento; Var Inteiro : integer; Numero_real : real; Begin Numero_real := 34.56356976356; Inteiro := round(Numero_real); //arredonda para 35 End. Com o método dos dois pontos, deverá indicar o espaço que o número ocupa e o arredondamento que possui. A sintaxe seria basicamente montada da seguinte forma: Número : Espaço : Arredondamento Exemplo prático: Writeln(Resultado:4:5); Neste caso, se o resultado for 34.56356976356, aparecerá algo como ##34.56357 (sendo “#” indicação de um espaço vazio). Entretanto, se utilizarmos o espaço como 0 e o arredondamento como 2, veja o que ocorre: Writeln(Resultado:0:2); Resultado: 34,56 Atenção: este método só serve para a escrita com os procedimentos padrão write e writeln.


## Criando uma variável calculada

Para criar a variável calculada no Report Builder, é necessário clicar no botão “Variável”, e clicar no local onde deseja que a mesma apareça no relatório. Após inserir a Variável Calculada, deverá determinar qual será o seu tipo de dado. Seria a declaração da variável em si como exemplificado anteriormente, porém, com tipos mais variados. Observação: Caso não apareça o campo de selecionar o tipo da variável deverá ir em “Visualizar / Barra de Ferramentas”, e marca a opção “Editar”. Após determinar o seu tipo, vamos ao ponto chave da variável calculada: a opção de Cálculos. Clique com o botão direto em cima da variável e selecione a opção “Cálculos...”. Será exibida a tela de Cálculos, que é o ambiente de programação, onde será incluído o código referente a ação da variável: Ao clicar na tela aparecerá a variável “Value”, esta variável é responsável pelo que vai aparecer no RTM, ou seja, se estiver “Value := 100,00 + 50,00”, na tela principal do relatório aparecerá o valor 150,00. Logo o resultado que deseja que apareça no relatório deverá ser atribuído a esta variável para exibição. Outra consideração importante é que não será necessário informar toda a estrutura do pascal, por exemplo, veja o seguinte código completo em Object Pascal: Program RTM; Var Value: real; Begin Value := 10.00 + 10.00; Writeln(Value); End. Já no cálculo da variável calculada do RTM a sintaxe necessário é a seguinte: Value := 10.00 + 10.00; O sistema compreende da mesma forma, pois ele interpreta que tudo que está escrito dentro da tela de cálculo estaria entre o “Begin” e “End.”, e no momento de exibir as informações no relatório o sistema já realiza a operação de “Writeln(Value);”. É possível “arrastar” o conteúdo do campo “Campos para<Dado>” para a área de cálculos, como podemos ver na imagem acima. Após informar o código de ação da variável, deverá compilar a fim de certificar que o código não possui erros. Para isto, basta clicar com o botão direito sobre um espaço em branco na parte de inserção de código e selecionar a opção “Compilar”. Na parte inferior da tela, mostrará a quantidade de erros e o que há de errado. Caso esteja com “0 Erros”, significa que está funcionando corretamente e bastará apenas clicar em “Ok” para gravar a alteração no cálculo da variável.


## Aba Cálculo

Este é o ambiente de programação do RTM, onde é possível que o usuário com algum conhecimento da linguagem de programação Pascal desenvolva cálculos e rotinas através de procedimentos e funções. Para acessar este local, clique na aba “Cálculo” na tela principal da edição do RTM. Ao clicar com o botão direito no quadro “Faixas de Relatório”, é possível selecionar a opção de edição/criação de Variáveis, Eventos e Módulos: A opção Variáveis mostrará as variáveis calculadas presentes no relatório de acordo com sua disposição no mesmo (Cabeçalho, Detalhe, Rodapé, em inglês, Header, Detail e Footer, respectivamente). A opção Eventos mostrará todos os objetos do relatório. Cada funcionalidade desse objeto chama-se evento. Evento é uma ação, algo que ocorre em dado momento. Poderá utilizar esta área para programar determinados comandos para o relatório. No evento, ao gerar o código há o diferencial de ser necessário informar o código entre “Begin” e “End.” para que funcione adequadamente.


## Exemplos de variáveis calculadas

Abaixo, estão alguns exemplos de comandos de variáveis que poderão ser criadas para auxiliar em um relatório. QueryBox Esta linha de comando da variável calculada, é utilizada para criar um Caixa de diálogo solicitando uma informação. A informação colocada na caixa de diálogo aparecerá na variável que está no RTM. If (InputQuery('<Nome do quadro>', '<Informação do que fazer>', Value) = True) Then value := Value; Exemplo Prático: Ao imprimir um relatório, cliente deseja que seja aberto um campo para informar a placa do veículo que entregará as mercadorias. If (InputQuery('Placa do Veículo', 'Informe a placa do veículo da entrega', Value) = True) Then value := Value; Ao gerar o relatório, o sistema trará a seguinte tela: Dentro do relatório, a variável terá o valor inserido neste campo. Veja este recurso mais detalhado no tópico Input Query. Somar 2 variáveis Esta linha de comando fará com que 2 variáveis tenham seus valores somados Value:= variable2.value + variable1.value; Exemplo prático: Foram criadas as variáveis 1 e 2, para somar os valores de IPI e ICMS dos itens. Por fim, podemos somar estes dois totais, para ter um valor total de IPI e ICMS e um único local. Fique atento! As variáveis somente podem ser somadas se estiverem em um mesmo condutor de dados. Caso precise somar dados de subreports ou condutores de dados distintos, utilize uma variável global. Somar o próprio valor Esta variável fará com que o sistema some todos os valores que essa mesma variável poderá apresentar Value:= variable1.value + value; Exemplo prático: Ao gerar um relatório com valor das notas, você pode usar este tipo de variável para criar um subtotal. Ou seja, a cada linha, podemos ir acompanhando o subtotal com mais aquele valor. A variável 1 traz o valor do Faturamento. Devemos criar uma segunda variável com o código acima, para que traga o somatório destes valores. Veja o resultado nas imagens abaixo. À esquerda, a edição do RTM. À direita, a impressão: Somar uma variável calculada e um campo no sistema Esta linha de comando fará com que o sistema some o valor de uma variável calculada com algum campo do sistema Value:= variable2.value + <Campo do sistema que deseja somar>; Exemplo prático: Podemos usar esta questão quando quisermos somar algum valor a um campo do sistema. Poderíamos colocar o valor de R$ 100,00 a mais de taxa em cada documento para visualizarmos em relatório. Veja como ficaria na impressão: Detail visível apenas após ter passado por requisitos Esta variável fará com que o detail fique visível apenas se passar pelos requisitos. If (BDESubReport1['QtEstoque'] <= 0) Then Begin detail.visible := true; End elsebegin detail.visible := false; End; Exemplo prático: Podemos citar um exemplo quando estamos gerando um relatório de títulos a pagar, e quando o somatório da pessoa ultrapassa R$ 1000,00, os títulos sejam mostrados (analítico), porém, caso o valor esteja menor, será mostrado somente o valor total (sintético). Campo visível apenas após ter passado por requisitos Esta variável fará basicamente a mesma coisa que a variável acima, porém, se restringe a apenas um campo e não a todo o detail. If (BDESubReport1['NmDescricao'] ='SUBTOTAL') Then Begin variable1.visible := false; End elsebegin variable1.visible := true; End; Exemplo prático: Podemos colocar uma variável 'Cliente inadimplente' para aparecer somente quando a pessoa tiver títulos vencidos a 5 ou mais dias.


## Variável global

A variável global, no ambiente de programação, é uma variável acessível em todos os escopos. No contexto de RTM, utilizamos este tipo de variável quando precisamos que uma informação esteja disponível em diferentes sub-relatórios (ou, em inglês, como escrito no Report Builder, subreports). Ou seja, podemos utilizar este recurso quando precisamos “transferir” uma informação entre sub-relatórios ou de um sub-relatório para a capa do documento.


## Sub-relatório X Capa

De maneira contextual, os sub-relatórios são como quadros em uma página da web. É exatamente onde ficam alocadas as informações. Estas informações, por sua vez, são disponibilizadas em variáveis. Já a capa do relatório/documento é como se fosse a própria página da web, ou seja, a parte montada da estrutura que contém os “quadros” (neste caso, os sub-relatórios). É comum chamar os sub-relatórios de subreports, afinal, é desta forma que vemos a sua representação no Report Builder.


## Utilização de variável global

Para entender melhor o conceito, considere que temos em edição um RTM de Pedido de Venda. Neste caso exemplificado, precisamos que as quantidades de todos os itens sejam levadas à capa do pedido. Entretanto, somente temos variável de quantidade de item no sub-relatório em que estão os itens.


### Exemplo prático

Tenho um pedido de venda com dois itens distintos, sendo 10 quilos de abóbora e 20 quilos de maçã, somando uma carga total de 30 quilos. Ao montar o RTM para impressão do Pedido de Venda, não tenho no condutor de dados “PedidoDeVenda” (utilizado para a capa) uma variável de quantidade total dos itens. Entretanto, no condutor de dados “PedidoDeVendaItem” (usado para o subreport que contém itens), tenho as quantidades individuais por produto. Ao longo das orientações sobre este assunto, utilizaremos o exemplo citado para as explicações. Portanto, considere-o nos demais passos para melhor entendimento.


## Declaração da variável

O primeiro passo para resolver esta questão é declarar a variável global. Ela é a responsável por levar a informação de um subreport para outro local. Ao declarar uma variável, faz-se necessário definir umnome para a mesma. No nosso exemplo, utilizaremos o título “QtdTotal”. Para fazer isto, no Report Builder, primeiramente acesse a aba “Cálculo” (1) e em seguida, no primeiro quadro branco à esquerda, clique com o botão direito e selecione “Modulo”, como apontado na imagem abaixo (2). Em seguida, selecione “Declaraçoes” e ao lado, no quadro a direita, clique sobre “Variables” e no quadro na parte inferior, insira o nome da variável e o tipo de dados. Neste caso do exemplo, o tipo deve ser double, pois conterá números. Se fosse algum texto, poderíamos usar string, por exemplo. Devemos seguir a seguinte sintaxe: <Nome da variável> : <Tipo de Dados>; Portanto, em nosso exemplo, preencheremos da seguinte forma: QtdTotal : double; Em seguida, clique sobre algum espaço branco no quadro onde descreveu a variável com o botão direito do mouse e clique em “Compilar”. Sendo assim, ficará da seguinte forma: Se a sintaxe estiver correta, no rodapé da tela apresentará a mensagem: “Compilaçao Completada: 0 Errors”.


## Destinar dados à variável

Após criar a variável, é preciso informar qual dado será destinado a ela. Portanto, acesse o subreport em que possui esta informação. No nosso exemplo, há um subreport para itens, com uma variável que soma todas as quantidades. É necessário saber qual o nome da variável que contém esta informação. Para isto, localize-a, clique sobre a mesma e observe seu nome no painel à esquerda ou na parte inferior da tela, como na imagem a seguir: Note que o nome da variável na imagem acima é: “DbCalc2”. De posse deste nome, agora é necessário informar à variável “QtdTotal” que estes dados serão levados a ela. Para isto, acesse novamente a aba Cálculo e em seguida, no primeiro quadro branco à esquerda, clique com o botão direito e selecione “Evento”. Observe que existem diversos elementos, e que cada variável está alocada na sua posição dentro do RTM. As variáveis que estão no Detalhe, estarão na seção Detail, as que estão no Sumário, estarão em Summary… Localize onde está sua variável e clique sobre a posição/evento em que ela se encontra. Ou seja, se está no sumário, clique sobreSummary. Em seguida, clique com o botão direito do mouse sobre “AfterGenerate” e clique em “Novo”. No quadro abaixo, informe que a variável global receberá o valor da variável escolhida, seguindo a seguinte sintaxe: <Nome da variável global> := <Nome da variável escolhida.value>. Seguindo o caso citado anteriormente, nosso exemplo ficaria da seguinte forma: QtdTotal := DbCalc2.value. Após escrever o código, compile para conferir e gravar a informação. Feito isto, a variável global já está recebendo o valor da variável escolhida.


## Exibir os dados da variável global

A variável globalQtdTotaljá recebe informações nesse momento, entretanto, é “invisível” neste RTM ainda, pois ela está sendo calculada apenas internamente. Sendo assim, é necessário criar uma variável calculada do mesmo tipo que a variável global para atribuir o valor desejado a esta nova variável. Acesse a aba “Desenho” ecrie uma variável calculada. No caso do exemplo aqui apresentado, a informação deve ser levada à capa. Portanto, devemos acessar a aba “Main” na parte inferior da janela. Como na criação da variável global selecionamos o tipo Double/Duplo, este mesmo tipo de dados foi escolhido para esta nova variável. Na tela de edição da variável, é necessário atribuir a ela o valor presente na variável global QtdTotal. A atribuição deve ser feita seguindo a seguinte sintaxe: Value := <Nome da variável global>; De acordo com o exemplo proposto, a variável criada terá o seguinte conteúdo: Value := QtdTotal; Observação: Não se esqueça de compilar para conferir se está correto e gravar a informação. Veja abaixo como ficaria a impressão: A soma das quantidades dos dois itens do pedido de venda totalizou 30. Sendo assim, este valor é levado na impressão do mesmo.


## Informações Adicionais


### Deixar variável de origem dos dados invisível

Durante a montagem de um layout de determinado relatório ou documento, pode ser que o valor constante na variável de origem dos dados não precise ficar visível no subreport em que foi criada. Para isto, basta selecioná-la, clicar com o botão direito do mouse e desmarcar a opção “Visível”. Cuidado para não tornar invisível a variável global. Este procedimento deve ser feito na variável de origem dos dados.


### Renomear variáveis

Em um RTM mais trabalhado, com diferentes variáveis de soma, cálculos, etc, pode ser necessário, para uma melhor organização, renomear as variáveis criadas. Para renomear, clique sobre a variável desejada, e em seguida selecione-a no painel à esquerda, no quadro “Estrutura do Relatório”. Com a variável desejada marcada, clique novamente sobre o nome e será habilitada a edição (ou dê dois cliques com um intervalo de 1 segundo entre eles). Dê um novo nome e grave apertando Enter ou clicando em qualquer local no RTM.


## Input Query

Em alguns momentos, você pode precisar de alguma informação para o seu RTM que não esteja presente nas variáveis do sistema. Ou, até mesmo, o cliente tenha a necessidade de inserir uma informação que não é possível se obter pelo Bimer por meio de variáveis naquele RTM, como um código de um formulário de impressão, código de um lacre, a cotação de uma determinada moeda ou até mesmo uma simples observação, por exemplo. Qual seria a solução nestes casos? Uma variável com Input Query! Por que não? Este recurso possibilita que o sistema leve um valor que será digitado em uma caixa de valor apresentada em tela, no momento em que o cliente gera o relatório ou impressão do pedido. Para fazer isto, dividimos este procedimento em três momentos: declaração da variável, criação da caixa de valor e inserção do valor em uma variável visível. Para auxiliar na explicação, vamos utilizar uma variável para inserirmos qual carro será utilizado na empresa para entregar a mercadoria pedida. Portanto, no momento da impressão do pedido, o usuário deverá redigir o nome do veículo, como por exemplo “Ranger” ou “Palio”.


## Declaração da variável

Na edição do RTM, declare uma variávelcom o nome desejado e o tipo de dados que precisa. Em nosso exemplo, como se trata de uma variável para obter o nome do carro, optaremos pelo tipo string. Portanto, ficaria com o a seguinte sintaxe: Carro : string; Lembre-se de compilar, para que a informação não seja perdida!


## Criação da caixa de valor

Agora que já temos a variável declarada, é preciso orientar o sistema para que, assim que for processar a visualização, apresente em tela a caixa de valor, ou como também é conhecida, a querybox para que o usuário insira um valor. Há três informações importantes na montagem de uma querybox: Nome da janela pop-up, pergunta ou orientação para Preenchimento e destino de armazenamento do valor preenchido. O nome da janela e a informação ou pergunta que aparecerão, ficam a critério de escolha do editor do RTM. Já o destino do valor, deve ser a variável que declaramos no passo anterior. Para criar o evento, na tela de edição do RTM no Report Builder, acesse a aba “Cálculo”. Em seguida, no primeiro quadro branco à esquerda (Objetos Relatórios), clique com o botão direito e selecione “Eventos”, como apontado na imagem abaixo: Em seguida, localize no quadro à direita, o evento “OnStartFirstPass” (ao iniciar a primeira passagem). Vamos adicionar a orientação neste evento, pois ele ocorre antes de tudo ser montado na visualização ou impressão do RTM. A sintaxe para inputquery segue o seguinte padrão: InputQuery ('<Nome da querybox', 'Orientação de preenchimento', VariávelDestino); Portanto, em nosso exemplo, a variável ficará da seguinte forma: InputQuery ('Veículo da Entrega', 'Informe o veículo', Carro); Observação: ao fim do código, utilize “;” e compile para finalizar. Após finalizar esta etapa, a variável Carro,declarada no início, já está programada para receber o que for preenchido na caixa.


## Inserção do valor em uma variável visível

Por último, precisamos transferir a informação que será obtida por meio da querybox para uma variável visível. Este procedimento é simples: basta criar uma variável calculada e definir que o seu valor será igual ao valor da variável declarada anteriormente. É necessário criar uma variável calculada do mesmo tipo que a variável global para atribuir o valor desejado a esta nova variável. Acesse a aba “Desenho” e crie uma variável calculada. No caso do exemplo do veículo, o tipo de dados pode ser “Texto”, pois será compatível com “String”, definida no momento da declaração da variável. Na tela de edição da variável atribua o valor, utilizando a seguinte sintaxe: Value := <Nome da variável declarada>; De acordo com o exemplo proposto, a variável criada terá o seguinte conteúdo: Value := Carro; Veja a seguir como a querybox é apresentada: Note que o título da janela (1) e a orientação de preenchimento (2) na imagem acima estão de acordo com o que foi preenchido no código. Após clicar em “OK”, a visualização será aberta ou a impressão será realizada. Veja abaixo como o valor inserido é mostrado.
