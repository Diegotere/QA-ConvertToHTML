# Ramo de Atividade Serviço — Recursos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é o Ramo de Atividade?](#o-que-e-o-ramo-de-atividade)
- [Objetivo do Material](#objetivo-do-material)
- [Empresas Prestadoras de Serviço](#empresas-prestadoras-de-servico)
  - [Exemplos](#exemplos)
- [Recursos](#recursos)
- [Vínculo no cadastro da pessoa](#vinculo-no-cadastro-da-pessoa)
- [Replicar vínculo de produtos com pessoas](#replicar-vinculo-de-produtos-com-pessoas)
- [Relatório de Pessoas](#relatorio-de-pessoas)
- [Dados de Produtos no CRM](#dados-de-produtos-no-crm)
  - [Como é feito o vínculo?](#como-e-feito-o-vinculo)
  - [Obrigar preenchimento do Tipo de Movimento de Cobrança](#obrigar-preenchimento-do-tipo-de-movimento-de-cobranca)
- [Status da Pessoa](#status-da-pessoa)
- [Composição Flexível](#composicao-flexivel)

---


## Introdução


## O que é o Ramo de Atividade?

O ramo de atividade é a área de atuação de empresa no mercado, sendo definido o produto que será comercializado ou o ramo da prestação de serviço. Assim, a primeira escolha da empresa ao abrir o seu negócio é definir o ramo de atividade. Nos ramos de atividades as empresas encontram subcategorias como prestação de serviço, indústria ou comércio. Com isso, ao escolher a atividade é necessário que seja definido o ramo específico, por exemplo, uma atividade industrial que pode ser uma fábrica de automóveis, produção de laticínios, bebidas dentre outras.


## Objetivo do Material

Esclarecer as diferenças entre o ramo de atividade configurado na base de dados. Este material é interno e não deve ser encaminhado à clientes. Aqui, trataremos de recursos exclusivos para bases de dado com ramo de atividade serviço.


## Empresas Prestadoras de Serviço

As empresas prestadoras de serviço visam oferecer a seus clientes, sua mão de obra, e porvezes, acompanhada de produtos.


### Exemplos

Empresas de marketing digital, conserto de computadores, reparos de eletrodomésticos, contabilidade, assessoria, consultoria, limpeza e dedetização são exemplos de pessoas jurídicas prestadoras de serviço.


## Recursos

Nem tudo é diferente quando se trata de comparação entre bases de dados. Portanto, veja a seguir os tópicos dos recursos específicos para o ramo serviço. Vínculo com Produto Quando sua base de dados está configurada com ramo de atividade voltado para serviços, o comportamento do sistema no contexto de vínculo de pessoas com produtos é modificado. Isso acontece porque empresas que normalmente prestam serviços contínuos, como contratos de manutenção, por exemplo, precisam manter um vínculo do cliente com o item.


## Vínculo no cadastro da pessoa

A tela de vínculo do produto com a pessoa é alterada em relação à comparação com uma base de dados com ramo voltado para comércio, trazendo campos específicos para questões de contratos.


## Replicar vínculo de produtos com pessoas

A rotina para replicar vínculo de produtos possibilita que a árvore de produtos de um funcionário ourepresentante seja replicada para um ou mais funcionários e representantes. Este recurso pode ser utilizado caso queira vincular, por exemplo, os produtos dos quais os colaboradores têm conhecimento. Por exemplo, numa loja de informática, um colaborador tem conhecimento em equipamentos, montagem e manutenção de computadores, enquanto outro colaborador, do departamento de games, tem conhecimento em consoles e jogos. Você pode realizar esta replicação acessando o Configurador Bimer / Aba Estoque / Manutenção de Produtos / Replicar vínculo de produtos. O recurso é bem simples… Na tela de replicação, selecione a pessoa origem e a(s) pessoa(s) destino. Se a pessoa que receberá os produtos replicados já tiver algum dos produtos listados, todas as informações que já estiverem preenchidas serão mantidas, exceto a situação do produto e o tipo de movimento de cobrança. Caso o produto já existente esteja em outra posição na árvore, ele serámovido para a mesma posição da árvore da pessoa origem selecionada Além disso, se a pessoa destino já tiver outros produtos, diferentes dos relacionados na pessoa origem, os mesmos serão mantidos como estavam antes do procedimento. O sistema está preparado para oferecer a replicação do vínculo de produtos, mas, fique atento: somente para as bases de dados com ramo de atividade serviço.


## Relatório de Pessoas

Já que os dados de produtos podem ser vistos na tela de cadastro, o sistema também permite que você visualize as informações referentes ao vínculo do produto com a pessoa no relatório completo de pessoas… Entre outras informações, é possível marcar o box correspondente a produtos para que o módulo leve ao relatório os respectivos dados. Na imagem acima, somente a opção produtos foi marcada. Desta forma, é possível gerar um relatório de produtos vinculados por este local, obtendo informações pertinentes ao vínculo do cliente ou funcionário, por exemplo, com os produtos que possui. Interessante, né?! Para outros ramos de atividade, também existe a opção de levar os produtos ao relatório, no entanto, como para ramo de atividadeserviço o comportamento é diferente no vínculo, mais dados são apresentados no relatório.


## Dados de Produtos no CRM

Já no CRM, no contexto de produtos é possível visualizar uma diferença considerável na aba Atendimentos quando a base de dados está configurada para serviço. A seção Produtos é exibida em tela, junto da seção Informações Complementares. Estes dados são exibidos quando o box “Com produtos” está marcado. Já quando a opção está desmarcada ou com o box “Sem produtos” marcado, a exibição é diferente, sem as seções mencionadas.


### Como é feito o vínculo?

Quando a base de dados está configurada como Serviço, o sistema utiliza a tabela Pessoa_Categoria_Produto_Ser para vincular o produto ao cliente. Quando configurado diferente de Serviço, o sistema utiliza a tabela Pessoa_Categoria_Produto_Com para realizar este vínculo. No cadastro de pessoas, na aba Produto, a tela fica diferente de acordo com o ramo de atividade, justamente para fazer o vínculo com a pessoa. Sendo serviço, é apresentada uma tela mais detalhada, referente a versão do sistema, data de utilização, entre outros. Quando o ramo é diferente de serviço, é apresentado uma tela mais simples para realizar esse vínculo. Cuidado! Mudar o ramo de atividade de uma base de dados pode parecer simples, por meio de um simples comando no banco de dados. No entanto, é importante saber que os vínculos são feitos em tabelas distintas, e ao modificar o ramo de atividade pelo banco de dados estes vínculos não serão levados de uma tabela para outra!


### Obrigar preenchimento do Tipo de Movimento de Cobrança

Os tipos de movimento de cobrança são utilizados, normalmente, para algumas rotinas de clientes que possuem cobranças recorrentes. Portanto, pode ser necessário que você deseje obrigar o preenchimento desta informação em seus pedidos de venda… Isso será possível apenas nas bases de dado com tiposerviço, sendo necessário habilitar a opção “Será obrigatório o preenchimento de tipo de movimento de cobrança do item”. Esta opção está noConfigurador Bimer/ Faturamento / Opções / aba Dados Gerais / Obrigatoriedade. Com esta opção marcada, ao tentar adicionar um item no pedido de venda, por exemplo, o sistema não permitirá continuar, apresentando a seguinte mensagem: “O tipo de movimento de cobrança deverá ser informado. Verifique!”. Esta opção não impacta o comportamento do sistema no módulo Faturamento.


## Status da Pessoa

Por meio do BI Pessoa é possível gerar um relatório contendo um campo exclusivo para a base de dados com ramo de atividadeserviço. Este recurso facilita a identificação de pessoas inadimplentes. A pessoa (cliente, no caso) é considerada inadimplente se tiver a característica de inadimplência vinculada a ela. Esta característica é informada no Configurador Bimer / Opções / Pessoa / Adicionais. No BI Pessoa a coluna com esta informação se chama Status Pessoa. Você pode agrupar ou organizar o relatório por este campo, tendo uma visão clara da quantidade de clientes inadimplentes com mais facilidade.


## Composição Flexível

Certamente você conhece a rotina de Produto Kit, que é basicamente quando você une produtos que podem ser vendidos separadamente e realiza uma venda do conjunto, daí o nome “kit”. Na configuração dos produtos relacionados no cadastro do produto, existe um box chamado “Composição flexível”. Mas, este box só será visto quando o tipo de ramo de atividade da base de dados for serviço. Mas, qual a finalidade dessa configuração? Vamos lá! Ela é utilizada no CRM e, quando marcada, faz com que seja possível remover um item que faz parte da composição do kit. Por exemplo, numa loja de informática, um produto que contém CPU, placa-mãe, memória RAM, teclado e mouse é vendido como Kit Computador. Caso o cliente deseje, pode remover, por exemplo, teclado e mouse da composição na hora da compra, pois pode já ter estes itens em casa. Portanto, no cadastro do produtoKit Computador é necessário que o boxComposição Flexível esteja marcado, como na imagem anterior. Sendo assim, será possível excluir itens da composição na tela de inclusão do contato de venda.
