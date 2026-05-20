# Análise — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Estrutura do arquivo](#estrutura-do-arquivo)
- [Instalação](#instalacao)
- [Funcionamento do](#funcionamento-do)
- [módulo](#modulo)
- [Gráficos](#graficos)
- [Visualizar Impressão](#visualizar-impressao)

---


## Introdução

O módulo Análise de Concorrência faz a comparação dos preços dos concorrentes da empresa com os preços praticados na venda. Deste modo, o gestor pode analisar e fazer ações para tornar os seus preços mais competitivos no mercado, para isso o módulo conta com a opção de reajuste de preço. A utilização é bem simples, é necessário que você possua um arquivo do tipo TXT, com dois campos: Código EAN e Valor do Produto. Este arquivo pode ser criado com um coletor de dados (exemplo na imagem ao lado) ou de modo manual pelo usuário. Vamos aprender mais detalhes do arquivo e como utilizar o sistema? Vêm comigo!


## Estrutura do arquivo

Veja acima o arquivo que montei para realizar a importação. Note as duas colunas necessárias para a importação: Código EAN e Preço do concorrente (se precisar colocar números decimais, utilize ponto). Para cada produto é necessária uma linha distinta e para cada fornecedor um arquivo. Salve este arquivo num diretório específico do seu computador, como por exemplo: C:\ Alterdat\Analise. Agora que você já conhece o conceito do módulo e o layout do arquivo, veja como instalar o módulo e como utilizar.


## Instalação

O primeiro passo é instalar o módulo Análise de Concorrência que se encontra no diretório: M:\BIMER\Projetos Específicos\Análise de concorrência. O caminho padrão do instalador é: C:\Program Files (x86)\Alterdata\ERP: Neste diretório será criado o arquivo AnaliseDeConcorrencia.exe. Se você não for da Matriz, fique à vontade para solicitar ao pessoal de Canais. Sempre use uma versão igual ou inferior em relação à sua base (caso não tenha uma igual).


## Funcionamento do


## módulo

Execute o módulo, informe seu usuário, senha e banco de dados. Após isso você têm acesso ao sistema. O primeiro passo é clicar no Configurador: Preencha os campos: • Diretório: Insira o diretório do arquivo de importação. • Cabeçalho: Preencha o número de linhas do arquivo usadas para cabeçalho. Digamos por exemplo que a primeira linha tem os dizeres código e preço, e a partir da segunda linha tem o conteúdo a ser importado, se esse for o caso o campo deve ser preenchido com o valor “1”. • Separador:Insira o delimitador utilizado para separar os dois campos do arquivo. No caso do layout que mostrei para você foi utilizado ponto e vírgula (“;”), mas isso pode variar, por isso é fundamental abrir o arquivo e analisar a sua composição. Configurações prontas? Clique em Salvar e vamos em frente! Informe uma empresa e tabela de preço para a comparação com os concorrentes. O próximo passo é usar o botão Ler arquivos para iniciar a importação. Neste momento todos os arquivos no diretório serão levados em conta, se você tiver arquivos de vários concorrentes todos eles serão importados de uma só vez. Após a importação veja a lista dos arquivos presentes no diretório, onde a coluna Nome do concorrente assume o conteúdo do nome do arquivo. Se desejar, edite o Nome do concorrente (clicando 2x no campo). Esta informação será exibida na tela principal do sistema gerando a coluna para identificar cada concorrente. Para continuar a importação, clique em Analisar: Veja como ficou o módulo após a importação: Vamos analisar mais de perto as informações para entender como interpretar os dados a partir das colunas: • Colunas código e produto: Identificação dos produtos presentes no arquivo. • Preço de venda: Preço praticado pela empresa na venda do produto, de acordo com a tabela de preço selecionada na tela principal. • Nome do concorrente: Cada concorrente recebe uma coluna para demonstrar o preço praticado por ele. • Cores:O preço das colunaspreço de venda econcorrente podem ser exibidas em três cores: ◦ Branco ou cinza: O preço não é o mais caro e nem o mais barato. ◦ Verde: Quando o preço é o mais barato de todos, comparando a empresa e concorrentes. ◦ Vermelho: Quando o preço é o mais caro de todos, comparando a empresa e concorrentes. • Colunas Data, Quantidade e Valor da última compra: Veja os dados da última compra realizada com os fornecedores. A coluna Valor é muito útil para analisar quanto a empresa pagou e por quanto está vendendo, observando por exemplo o lucro obtido em cada venda de acordo o preço praticado. Por fim temos a coluna Novo preço que vem vazia. O objetivo é o usuário ajustar o preço de venda do produto sem sair do módulo. Para isso clique no campo ao lado dos produtos desejados e insira o novo preço. Por fim, clique em Reajustar preços para confirmar o processo: Em seguida confirme a Empresa e a tabela de preço que serão ajustadas. O sistema sugere as informações da tela principal, mas você pode ajustar: Feito isso, os dados da tela são limpos e o sistema aguarda uma nova importação. E os preços foram ajustados. Ao abrir o diretório de importação, perceberá que após a primeira importação no Bimer é criada a pasta Processados para onde são movidos os arquivos que foram importados. Se tiver que realizar uma nova importação é só salvar os arquivos no diretório raiz para repetir o mesmo fluxo. Olha as dicas: Pode ocorrer que sua importação não aconteça por alguns motivos. Vou mostrar algumas mensagens e como resolver: Situação 01: Solução: A mensagem quer dizer que o código EAN informado no arquivo não está presente dentro do Bimer. Se você possuir mais de um produto, o sistema prossegue com a importação, mas não carrega o produto que não existe no Bimer. Situação 02: Após clicar em Ler arquivos nada acontece. Solução: Verifique se dentro do arquivo foi inserido código EAN do produto. Em alguns casos o usuário insere um código de 5 dígitos que é o padrão usado na empresa, mas como aprendemos, este tipo de importação só utiliza código EAN, que possui 13 dígitos (contando os zeros à esquerda. Ex.: 0001996623021). No Bimer cadastre um tipo de código para ser utilizado como EAN, vincule no item e adicione um código de 13 dígitos:


## Gráficos

Utilize os gráficos do sistema para facilitar a comparação de preços e a tomada de decisões. Veja abaixo o que aconteceu na minha análise, onde há 2 gráficos: 1.Distribuição dos preços (Empresa):Veja o percentual dos produtos mais caros e mais baratos da empresa do sistema Bimer. No caso acima, 33,33% dos produtos da empresa são mais caros em relação aos concorrentes e 66,67% mais baratos. 2.Comparativo entre concorrentes: Compara a empresa com os concorrentes e demonstra qual possui o volume de itens mais baratos. Dá para ver no gráfico que das pessoas envolvidas na análise, minha empresa possui 66,67% dos produtos mais baratos do mercado, e o concorrente Luis Silva possui o preço mais barato em 33,33% dos produtos. Caso queira salvar os gráficos, use o botão Imprimir no rodapé da página. Esta análise sendo realizada de tempos em tempos, pode trazer para o gestor informações relevantes como a força ou crescimento de determinado concorrente, onde o gestor pode tomar medidas para tornar seu preço mais competitivo, ou até mesmo aperfeiçoar outro fator de sua empresa ou produto para vencer o concorrente.


## Visualizar Impressão

Se desejar observar os dados do produto num relatório e até imprimir para analisar de um modo melhor, use esse recurso na tela principal. Dentro do Visualizar impressão você pode ajustar as margens, colunas, cor de fundo e outras personalizações, de acordo com seu desejo.
