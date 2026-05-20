# SellOut — Goodyear — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Funcionamento](#funcionamento)
- [Configuração](#configuracao)
- [Integrador Sellout – Goodyear](#integrador-sellout-goodyear)
- [Instalação](#instalacao)
- [Rotina de envio de dados](#rotina-de-envio-de-dados)

---


## Introdução

Para você que não conhece ainda, a Goodyear é uma das principais marcas e líder em inovação tecnológica na indústria depneus, tem estado nas estradas da América Latina por mais de um século. O módulo“SellOut Goodyear”foi desenvolvido para os clientes Bimer que necessitam de integração com a empresa Goodyear, poisrevendemos pneus fabricados por ela. Este módulo atua como exportador dos dados da base do Bimer ERP para o sistema da Goodyear. Com este envio, a Goodyear compreende como está a absorção de seus produtos no mercado, se um item está aumentando em faturamento ou caindo em desuso, por exemplo. Vamos entender melhor como funciona isso? Vêm comigo!


## Funcionamento

Para realizar a exportação o SellOut resgata informações da base de dados Bimer e através destes gera um JSON estruturado com base nos layouts estabelecidos pela Goodyear e em seguida envia para a API de integração criada pela empresa Exata inteligência e tecnologia, a qual levará os dados para o sistema da Goodyear. Nota¹:“JSON (JavaScript Object Notation – Notação de Objetos JavaScript) é uma formatação leve de troca de dados. Para seres humanos, é fácil de ler e escrever. Para máquinas, é fácil de interpretar e gerar.” < http://www.json.org/json-pt.html > Nota²:“API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês Application Programming Interfaceque significa em tradução para o português Interface de Programação de Aplicativos.” < http://canaltech.com.br/o-que-e/software/o-que-e-api/ > Os Layouts existentes na API são referentes aos dados que serão exportados, são eles: • 101– Clientes; • 102– Produtos; • 103– Força de vendas; • 104– Forma de pagamento; • 105– Endereço de clientes; • 201– Tabela de preço; • 202– Carteira de clientes; • 203– Estoque; • 204– Pedidos; • 205– Faturamento. Observação¹: Os layouts 103 e 202 não foram criados, pois ainda não existem dados na base do Bimer para o preencher estas informações. Observação²: Para saber com mais detalhes como é formatado o JSON de acordo com o layout da Goodyear, poderá consultar o link a seguir: < https://goodyear.exata.it/Help/>


## Configuração

No módulo Cadastro de produtos, em cada produto que deseja que seja integrado, deverá ter um tipo de código vinculado com o nome “GOODYEAR” e o mesmo deverá ser o código principal, caso não tenha nenhum código com esse nome, basta cadastrá- lo com a descrição “GOODYEAR”, exemplo: Pneu Aro 13 Goodyear.


## Integrador Sellout – Goodyear


## Instalação

O primeiro passo é instalar o módulo Integrador Sellout – Goodyear que se encontra no diretório: M:\BIMER\Projetos Específicos\Integrador Sellout-Goodyear. O caminho de Instalação padrão do instalador é: C:\Program Files (x86)\Alterdata\ERP\ Bimer Integrador Sellout-Goodyear, porém pode ser modificado pelo usuário. Se você não for da Matriz, fique à vontade para solicitar ao pessoal de Canais. Sempre use uma versão igual ou inferior em relação à sua base (caso não tenha uma igual).


## Rotina de envio de dados

Ao executar o Integrador, será apresentada a tela de login padrão do Bimer. Após fazer a autenticação defina uma data de Envio e clique no botão relacionado. Este envio é feito sempre de modo manual pelo usuário: Após realizar a exportação será apresentado a tela abaixo, informando o status da exportação de cada layout. Informações interessantes da Integração: • Os dados são apenas Exportados para a API e depois para o sistema Goodyear. O Bimer apenas retorna a informação que os dados foram exportados ou não. Não são importados dados para os módulos do sistema, como por exemplo o cadastro de produtos. • Se você observar a imagem da exportação (acima), são enviados diversos dados, onde a Goodyear obtêm informações da comercialização de seus pneus para outros clientes (os quais são revendidos pela empresa do Bimer). Veja alguns dados que são enviados, para você entender melhor: ◦ Produto: Informação de quais pneus minha empresa têm em estoque. ◦ Tabela de Preço: Valor de preço de venda dos produtos. ◦ Estoque:Informação da quantidade de pneus da minha empresa em estoque. ◦ Pedido de Venda:Volume de pedidos de vendas que os pneus estão inseridos. ◦ Faturamento: Informações de notas fiscais que foram geradas, resultando na venda dos produtos. Estas informações incluem dados da nota fiscal como valores, número e série. ◦ Cliente e endereço: Dados de clientes e endereços das vendas.
