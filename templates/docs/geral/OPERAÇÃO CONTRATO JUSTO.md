# Operação Contrato Justo — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Informações](#informacoes)
- [Importantes](#importantes)
- [As informações contidas nesse](#as-informacoes-contidas-nesse)
- [manual são restritas aos](#manual-sao-restritas-aos)
- [colaboradores da Alterdata!](#colaboradores-da-alterdata)
- [Não utilize nem mostre esse](#nao-utilize-nem-mostre-esse)
- [material para clientes!](#material-para-clientes)
- [Introdução](#introducao)
- [Controle de licenças](#controle-de-licencas)
- [contratadas](#contratadas)
- [Limite de conexões](#limite-de-conexoes)
- [simultâneas](#simultaneas)
- [Acessos com](#acessos-com)
- [mesmo usuário](#mesmo-usuario)
- [Acesso como](#acesso-como)
- [Supervisor](#supervisor)
- [Importância da](#importancia-da)
- [orientação ao cliente](#orientacao-ao-cliente)
  - [Não crie um usuário para o suporte ou qualquer](#nao-crie-um-usuario-para-o-suporte-ou-qualquer)
  - [usuário sem a permissão e ciência do cliente!](#usuario-sem-a-permissao-e-ciencia-do-cliente)

---


## Informações


## Importantes


## As informações contidas nesse


## manual são restritas aos


## colaboradores da Alterdata!


## Não utilize nem mostre esse


## material para clientes!


## Introdução

Desde Junho de 2021 o DSN vem trabalhando no controle de acessos por usuários em nossas soluções de automação contábil, inicialmente. A comercialização por número de usuários vem desde 2006 e a partir de 2016 colocamos um campo no Bimer para registro dessa informação, antes de 2016 a informação ficava apenas no texto de parecer. Em paralelo, 2 representantes nossos identificaram uma grande discrepância em alguns clientes comparando o número de usuários utilizados e o número de usuários contratados. Com base nessa situação, a Presidência sabiamente quis acelerar essas conferências pois estamos deixando de faturar e até mesmo tendo prejuízos financeiros com a demanda de certos clientes sendo maior do que é contratado. No dia 21/03/2022 a Presidência divulgou o controle de usuários também para o Bimer. Essa operação tem como principal objetivo equalizar de forma justa o que é pago pelo cliente e o que é utilizado, para desta forma termos melhor mapeamento da quantidade de usuários que estão utilizando nosso sistema e assim entender e planejar as necessidades de atendimento. IMPORTANTE: A partir do dia 18 de Julho de 2022, os bloqueios ocorrerão com TODOS os clientes da linha Pack, com data de cadastro do CRM 01/01/2014.


## Controle de licenças


## contratadas

Para a linha PACK, o controle começou nas seguintes versões: • Versão 6.12.127 do produto Fiscal • Versão 6.12.94.4 do produto Contábil • Versão 6.12.81.8 do produto Departamento Pessoal Dados da licença: WPHD > Cadastros > informações do Contador O Bimer tem um campo com a quantidade de licenças contratadas pelo cliente e essa informação ficará vinculada ao código do cliente. Você pode conferir a quantidade de acessos permitidos ao CRM no Alterdata Pack, na opção de “Informações do Contador”, onde fica vinculado o passaporte do cliente. Não haverá bloqueio para acesso ao WPHD mas serão visualizadas as telas educativas, incentivando o cliente a logar com usuários específicos. Para o Bimer, clientes que estiverem com a versão a partir de 9.05.03, já estão controlando usuários simultâneos. Quem já está com essa versão, a data de corte é data de cadastro a partir de 01/01/2016.


## Limite de conexões


## simultâneas

Agora haverá um limites de conexões simultâneas. O sistema terá uma quantidade máxima de acessos e após atingir o limite de conexões, será exibida uma tela informando quais máquinas/usuários estão conectados. Dessa forma, o usuário que tentou conectar e encontrou o limite de conexões excedido só poderá acessar o sistema após algum dos demais usuários encerrar uma instância e liberar uma conexão. O usuário SUPERVISOR não será demonstrado nessa tela, porém ele é considerado na contagem de licenças. Esta tela impedirá imediatamente o acesso ao sistema, demonstrando o número de licenças do contrato do cliente e quais as máquinas que estão ocupando estas licenças naquele momento. Caso clique no botão abaixo de atualizar as conexões (que tem a mesma função de atualizar lá do Updater Manager), aparece a seguinte mensagem para evitar carga no Updater: Sobre a restrição, é importante lembrar alguns detalhes: 1 – Acessar sistemas diferentes da linha Pack em uma mesma máquina contam como uma única licença, desde que acessados com o mesmo usuário. Isso também vale para múltiplos acessos ao mesmo sistema na mesma máquina. 2 – Não existe relação entre os diferentes bancos de dados que o cliente possui e o número de licenças do seu contrato. Sendo assim, logins em diferentes bases contarão no total de licenças. Por exemplo, supondo que um cliente possua 2 bancos de dados e 20 licenças, se 15 usuários logarem na base 1, apenas mais 5 usuários conseguirão logar na base 2.


## Acessos com


## mesmo usuário

Como funciona o controle de acesso? Exemplo 1: Miguel, usuário cadastrado no sistema, se utilizar o sistema na mesma máquina, contará como 1 acesso. Então, Miguel pode usar na máquina Fiscal, DP e Contábil. Exemplo 2: O cliente contratou 3 usuários Pack: Miguel – Tem acesso ao DP, Fiscal e Contábil na mesma máquina = 1 acesso. Joana - Tem acesso ao DP, Fiscal e Contábil em outra máquina = 2 acessos. Beatriz – Tem acesso ao DP, Fiscal e Contábil em uma terceira máquina = 3 acessos. Se o cliente abrir o sistema em uma 4ª máquina com qualquer um dos usuários acima, será exibida a mensagem: A contagem será feita pelo USUÁRIO acessando a Base de Dados do PACK + a máquina. Não é por sistema.


## Acesso como


## Supervisor

O usuário SUPERVISOR deverá ser utilizado com foco no gerenciamento dos sistemas. Ao acessar o sistema com esse usuário, será exibida uma mensagem e um botão para criar um login. Clicando em “Continuar como SUPERVISOR”, o cliente poderá prosseguir com a abertura do sistema utilizando esse usuário. Caso o cliente clique em “Criar meu novo login”, na primeira tela será necessário preencher os campos de login, nome completo, e-mail do usuário e senha com um parâmetro de “força” para a senha digitada. Após o preenchimento, o novo usuário será cadastrado e o sistema direcionará o cliente para a tela de entrada do sistema para que o novo login seja utilizado.


## Importância da


## orientação ao cliente

É muito importante que os procedimentos de implantação e suporte incentivem o cliente a criar usuários individuais para cada colaborador, respeitando a configuração de controle de acessos. O usuárioSUPERVISOR poderá ser acessado em diversas máquinas e deve ser utilizado apenas para alterações gerenciais como permissões e controles de restrição.


### Não crie um usuário para o suporte ou qualquer


### usuário sem a permissão e ciência do cliente!

Utilize o usuário do cliente, sempre respeitando a privacidade de dados e evitando pedir a senha. Sendo possível, faça uso do autopreenchimento de senha, clicando com botão do mouse + CTRL na logo PACK no acesso inicial ao sistema.
