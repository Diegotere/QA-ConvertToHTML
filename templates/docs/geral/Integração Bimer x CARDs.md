# Integração Bimer x CARDs — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Funcionamento](#funcionamento)
  - [Bimer x PDV](#bimer-x-pdv)
  - [CARDs x PDV](#cards-x-pdv)
- [Configuração](#configuracao)
- [Rotina](#rotina)
  - [Teste de comunicação com o Alterdata](#teste-de-comunicacao-com-o-alterdata)
  - [CARDs](#cards)
  - [Venda](#venda)
  - [Consulta de saldo](#consulta-de-saldo)
  - [Cadastrando cliente do Bimer no Cards](#cadastrando-cliente-do-bimer-no-cards)

---


## Introdução

Esta apostila tem como objetivo mostrar como é o funcionamento da integração do Bimer com o CARDs e as configurações no Bimer referentes a esta integração. Este material tem em vista que o leitor já possua conhecimento sobre como funciona oCARDs individualmente e quer saber como é a integração do mesmo com o Bimer. Para saber mais sobre o sistema CARDs, poderá verificar no portaluca.alterdata.com.br na área de manuais do Shop. Para ir direto para o manual clique aqui! Atenção! Será necessário que o terminal do PDV já esteja cadastrado e configurado no CARDs, além de possuir as configurações no terminal do PDV para integrar com CARDs, estas informações se encontram na apostila citada acima.


## Funcionamento

A integração entre o Bimer e o CARDs é toda feita através do PDV Alterdata, o qual age como uma ponte para a importação e exportação de dados entre o CARDs e o Bimer, ambos não possuem contato direto, sendo assim, é essencial que se tenha o terminal do PDV configurado previamente para trabalhar com o Bimer e com o CARDs. O PDV realiza a integração entres os 2 sistemas através de um plugin chamado AltERP_CadastroClienteCards, caso este esteja faltando devido a versão, será necessário realizar a atualização do PDV.


### Bimer x PDV

A integração dos dados referente ao CARDs entre o Bimer e o PDV ocorre através do WebService de plugins, utilizando o plugin de cadastro de cliente cards. Bimer →PDV: Configurações das formas de pagamento. Bimer ←PDV: Novos clientes do CARDs(fazendo assim o vínculo no Bimer dos clientes do CARDs com a base do Bimer) e dados do cartão fidelidade(número).


### CARDs x PDV

O PDV realiza a transação de dados online com o Webservice CARDs de forma que, caso o PDV não consiga realizar a conexão com o Webservice CARDs, o sistema não permitirá que use os recursos da integração. Para o PDV realizar a conexão com o CARDs o mesmo se baseia na configuração emPDV Alterdata / Outras funções (Shift + F11) / Configurações, aba Alterdata Cards, quadro Dados da integração. Webservice CARDs→PDV: Busca a informações online sobre o cliente CARDs, o crédito disponível, os pontos disponíveis e demais informações sobre os cartões (credito/débito/fidelidade). Webservice CARDs ←PDV: Após realizar a venda informará ao CARDs sobre os dados de transação, qual cartão que foi utilizado, qual cliente utilizou, assim como os pontos, créditos e débitos gastos que devem ser abatidos no CARDs.


## Configuração

No Bimer somente configure as formas de pagamento utilizadas no PDV que trabalharam com o CARDs, para isto vá em Configurador Bimer / Financeiro / Forma de pagamento e crie/edite uma forma de pagamento: • Forma de pagamento "Vale crédito": Para utilizar uma forma de pagamento para abatimento de pontos, deverá configurar/criar uma do tipo“Vale crédito”. Dessa forma, não há valores movimentados no caixa e o cliente usa os pontos acumulados como forma de pagamento. Ao ir na aba “PDV” terá a opção “Abate pontos do Alterdata Cards fidelidade”, que informa ao PDV que esta forma de pagamento trabalhará com a integração CARDs. E quando esta forma de pagamento for utilizada em uma venda no PDV serão abatidos os pontos de fidelidade do sistema Alterdata Cards, mas caso a opção esteja desmarcada o PDV tratará esta forma de pagamento como qualquer outra sem integração com o CARDs. • Forma de pagamento "Cartão": Para utilizar a modalidade de pagamento Crédito/Débito no Cards será necessário configurar/criar uma forma de pagamento do tipo “Cartão” no Bimer. Na aba “PDV” há a opção “Vinculo com Alterdata Cards (crédito ou débito)”, que informa ao PDV que esta forma de pagamento trabalhará com a integração CARDs. E quando esta forma de pagamento for utilizada em uma venda no PDV serão abatidos os valores disponíveis em débito/crédito do sistema Alterdata Cards, mas caso a opção esteja desmarcada o PDV tratará esta forma de pagamento como qualquer outra sem integração. Se liga! A opção “Abate pontos do Alterdata Cards fidelidade” somente estará disponível quando a forma de pagamento for do tipo “Vale crédito”. Por sua vez, a opção “Vinculo com Alterdata Cards (crédito ou débito)” somente estará disponível quando a forma de pagamento for do tipo “Cartão”. Se qualquer outro tipo de forma de pagamento estiver selecionado, estas opções aparecerão como indisponíveis para serem marcadas.


## Rotina


### Teste de comunicação com o Alterdata


### CARDs

Para saber se o PDV está conseguindo se comunicar com o CARDs normalmente, basta que no PDV Alterdata aperte Shift + F11 e selecione a opção “Testar Alterdata Cards”, caso esteja se comunicando corretamente será apresentada a mensagem abaixo:


### Venda

Para realizar uma venda utilizando o Alterdata Cards, basta clicar em Alt + F e será aberto uma nova janela. Selecione uma das formas de localização que são número do cartão, CPF/CNPJ, ou número de identidade. Após selecionar uma das opções, no campo abaixo informe os dados referente ao botão selecionado. Neste exemplo foi selecionado para localizar pelo número do cartão, logo preencha esta informação. Após isto, clique no botão “Localizar”, e na parte inferior aparecerá os dados sobre o cliente e o cartão, caso esteja correto clique em “Confirmar”, caso tenha escolhido a pessoa errada, utilize o botão “Limpar”. Após isto na tela principal do PDV, na parte superior da janela, aparece o cliente do CARDs para a venda. Poderá então, prosseguir com a venda normalmente, sendo que a forma de pagamento deverá ser do tipo: F7 – Vale: que baixa os pontos do Alterdata Cards – Será utilizada como Fidelidade (Poderá ser usado tanto para troca por prêmios, quanto como meio de pagamento). F4 – Cartãocom a opção de que é vinculada ao Alterdata Cards – Será utilizado nas modalidades de Crédito/débito. Após isto informe o número do cartão do cliente e confirme, feito isso finalize a venda normalmente. Em seguida no site do Alterdata Cards, veja que na consulta de extrato de pontos serão exibidos os pontos que foram gastos com a venda, atualizando o saldo de pontos restantes. Observação: Ao realizar a venda desta forma, tanto para as formas de pagamento especificadas (vale e cartão), como qualquer outra, o cliente do Cards será importado para a base do Bimer, assim como os dados do cartão.


### Consulta de saldo

Dentro do PDV também terá a possibilidade de realizar a consulta de saldo para isso aperte Shift + F11, selecione a opção “Gerenciador Cards”, em seguida escolha a opção “Consulta de saldo”, informe o número do cartão do cliente e em seguida é apresentado o saldo:


### Cadastrando cliente do Bimer no Cards

No PDV aperte Alt + F para abrir a tela do Alterdata Cards e clique no botão “Novo cartão(F5)”. Em seguida localize o cliente que deseja vincular/exportar para o Cards. Após isto deverá informar o número de cartão do Cards que estivercomo “Sem nome”e clique em “Confirmar”.Em seguida, poderárealizar uma venda normalmentee este cartão terá as informações preenchidas com os dados do cliente Bimer.
