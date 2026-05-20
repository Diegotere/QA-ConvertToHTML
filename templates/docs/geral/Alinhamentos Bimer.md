# Alinhamentos Bimer — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Alinhamentos Estoque](#alinhamentos-estoque)
- [Alinhamento Estoque](#alinhamento-estoque)
- [Alinhamento Lotes do estoque](#alinhamento-lotes-do-estoque)
- [Alinhamento Quantidades compradas](#alinhamento-quantidades-compradas)
- [Alinhamento Quantidades requisitadas](#alinhamento-quantidades-requisitadas)
- [Alinhamento de Saldo das empresas e setores](#alinhamento-de-saldo-das-empresas-e-setores)
- [Alinhamentos Financeiros](#alinhamentos-financeiros)
- [A receber](#a-receber)
  - [Alinhar o valor dos títulos a receber](#alinhar-o-valor-dos-titulos-a-receber)
  - [considerando o somatório dos](#considerando-o-somatorio-dos)
  - [valores dos itens](#valores-dos-itens)
  - [Alinhar baixas de títulos a receber](#alinhar-baixas-de-titulos-a-receber)
  - [que não estão vinculados a um lote](#que-nao-estao-vinculados-a-um-lote)
  - [Alinhar as pessoas de repasse dos](#alinhar-as-pessoas-de-repasse-dos)
  - [títulos a receber, analisando os](#titulos-a-receber-analisando-os)
  - [documentos de origem](#documentos-de-origem)
  - [Alinhar os valores de centro de](#alinhar-os-valores-de-centro-de)
  - [custos que estejam inconsistentes](#custos-que-estejam-inconsistentes)
  - [com a alíquota do lançamento.](#com-a-aliquota-do-lancamento)
- [A pagar](#a-pagar)
  - [Alinhar baixas de títulos a pagar que](#alinhar-baixas-de-titulos-a-pagar-que)
  - [não estão vinculados a um lote](#nao-estao-vinculados-a-um-lote)
  - [Alinhar as baixas totais que estejam](#alinhar-as-baixas-totais-que-estejam)
  - [com mais de uma baixa total, sendo](#com-mais-de-uma-baixa-total-sendo)
  - [uma delas de R$0,00](#uma-delas-de-r000)
- [Alinhamentos Faturamento](#alinhamentos-faturamento)
- [Alinhar e/ou Analisar os pedidos de venda](#alinhar-eou-analisar-os-pedidos-de-venda)
- [Geração de NFs de entrada a partir do Devolução/Troca](#geracao-de-nfs-de-entrada-a-partir-do-devolucaotroca)
- [de vendas](#de-vendas)
- [Alinhar itens das NFs de entrada a partir do processo de](#alinhar-itens-das-nfs-de-entrada-a-partir-do-processo-de)
- [devolução](#devolucao)
- [Alinhamento do Histórico de Compra/Entrada](#alinhamento-do-historico-de-compraentrada)

---


## Introdução

Já ouviu falar sobre alinhamentos no sistema Bimer? Se não ouviu, em algum momento você vai se deparar com um deles no seu atendimento ou em visitas. Os alinhamentos são recursos de manutenção que têm por objetivo fazer alguma atualização nas tabelas do sistema, corrigindo possíveis problemas nos saldos, valores ou movimentações. Para exemplo, temos o alinhamento de estoque que recalcula todo o estoque, corrigindo qualquer problema que haja no estoque das empresas, setores ou no inventário. Alguns alinhamentos temos que ter um certo “cuidado” na execução, pois podem influenciar em movimentações que já foram corrigidas, caso o usuário não informe uma data inicial ou não selecione o item desejado, como: produto, lote, movimento, etc. Isso pode ser ruim, pois, sendo um processo irreversível, não temos como desfazer a rotina, ou seja, nada de Ctrl + Z. Na dúvida, se o processo pode influenciar em outras movimentações, o backup é a melhor solução! Melhor pecar pelo excesso de cuidado do que pela falta dele, né? Bem, agora que você já sabe um pouquinho sobre os alinhamentos, veremos quais são os principais alinhamentos que podem ser utilizados no sistema Bimer. Vamos lá?


## Alinhamentos Estoque

Sem dúvida, os alinhamentos de estoque são um dos mais utilizados, pois estão relacionados às quantidades em estoque disponível para empresa/setor. Ter a quantidade errada dos produtos pode ser prejudicial para o usuário do sistema. Imagine perder uma venda porque no Consulta de estoque indica que não temos quantidades suficientes e quando vamos ver no estoque físico tem. Existem casos em que todas as movimentações foram realizadas corretamente, porém, por algum motivo, as quantidades estão incorretas. Ao validar as movimentações, o sistema deveria apresentar 10 unidades, mas está exibindo apenas 3, pois não está calculando determinado lançamento. Assim, existem alinhamentos que corrigem estes casos, fazendo com que o estoque fique exatamente como deveria. Dúvida! Os alinhamentos de estoque estão relacionados apenas às quantidades em estoque dos produtos? Não, temos também alinhamentos relacionados aos status das requisições e pedidos de compras.


## Alinhamento Estoque

O alinhamento de estoque recalcula todo o estoque, corrigindo qualquer eventual problema no estoque das empresas, setores, no inventário, nos códigos dos produtos e também nas unidades de estoque. Para melhor entendimento, o alinhamento realiza o mesmo processo de liberação dos movimentos já digitados. Para acessar o alinhamento de estoque, acesse o “Configurador Bimer > Estoque > Alinhamentos > Estoque”. Veja que o sistema já demonstra a instrução sobre o alinhamento. Avance para iniciarmos o processo. O primeiro filtro é o da empresa. Não deixe de selecionar a empresa, assim, o sistema só vai recalcular o saldo em estoque da empresa desejada. Na próxima tela, você poderá selecionar quais itens deseja alinhar, preenchendo o seu código no campo correspondente. Em seguida, basta dar um “Enter” ou clicar em “Incluir o produto no filtro”, que fica ao lado. Mas, se você não lembra do código do produto, clique em “Adicionar” na parte inferior, assim, a tela de localização será exibida. Dúvida! O que acontece se eu não selecionar nenhum item? Neste caso, o sistema fará o alinhamento de todos os produtos da empresa. Antes de avançarmos, também temos a seguinte configuração na tela de filtro de produtos: Seleção de produtos com problemas de saldo: serve para selecionar somente produtos que estão com diferença de saldo. Informando uma data de seleção, o sistema rastreará os produtos com problemas desde a data de seleção até a data atual. Caso a data de seleção não seja informada, o sistema verificará os produtos com problemas somente do dia atual. Esta data é somente para a seleção dos produtos, e não para o alinhamento. Feita a seleção dos itens, avance. O próximo filtro disponível é o de grupo de produtos. Definido os filtros desejados, temos que selecionar os tipos de alinhamentos de estoque que serão realizados: Alinhamento do estoque das empresas e setores: - Alinha as quantidades em estoque das empresas selecionadas; - Alinha o estoque dos setores das empresas selecionadas; - Alinha o custo médio por movimento. Alinhamento do inventário: - Alinha as quantidades e valores da tabela inventário de acordo com os documentos filtrados no período escolhido, inserindo ou atualizando os registros; - Alinha o custo médio por movimento. Alinhamento do código dos produtos: - Preenche o código dos produtos que não possuam vinculo com a tabela "ProdutoMaster". Alinhamento das unidades de estoque - Alinha as unidades de estoque de saída e entrada, de acordo com as informações presentes na "MovimentoEstoqueItem". Alinhamento do Saldo em estoque da empresa x setor - O setor padrão recebe a diferença de saldo: Não serão alteradas as movimentações dos outros setores. - Alinha o setor padrão e zera outros setores: O setor padrão ficará com o saldo em estoque da empresa e os outros setores serão zerados. Informe a data; caso não seja selecionada, o sistema fará o alinhamento total. Pronto! Agora já podemos clicar em “Concluir” para o sistema iniciar o alinhamento. O alinhamento será realizado, sendo exibido ao final o tempo total de execução: *** Alinhamento do Estoque *** O Alinhamento do Estoque foi concluído com sucesso. Tempo Total: 0h 0m 0s 239ms Agora é só confirmar se foi corrigida a informação.


## Alinhamento Lotes do estoque

O objetivo do alinhamento de Lotes do Estoque é alinhar os produtos que estejam marcados para controlar lote. O alinhamento verifica a existência de movimentações de produtos que controlam lote sem um lote informado. Quando isso ocorre, o alinhamento cria um lote genérico para o item e preenche a movimentação com esse lote. Outro objetivo, seria a validação das movimentações com lotes que não existem mais no sistema e que tenham sido excluídos por algum motivo. Realizando o mesmo processo, ao encontrar um lote nessas condições, é criado um lote genérico. Para realizar o alinhamento, vá em “Configurador Bimer > Estoque > Alinhamentos > Lotes do estoque”. Neste alinhamento é obrigatório selecionar a empresa, caso não seja selecionada é exibida a mensagem: Informação É necessário informar uma Empresa. Verifique! Selecione a empresa desejada e avance. Caso deseje filtrar os produtos com lote que serão alinhados, clique em “Adicionar”: Da mesma forma que o alinhamento de estoque, caso não seja selecionado nenhum item, todos os itens com lote serão alinhados. Na tela final, informe a data de início do alinhamento e clique “Concluir”. Assim, a operação será concluída.


## Alinhamento Quantidades compradas

O alinhamento das quantidades compradas é utilizado quando o usuário já efetuou o lançamento das compras no sistema, não possuem pedidos de compra em aberto para o item, e, mesmo assim, no Consulta de Estoque são exibidas as quantidades. Antes de realizar o alinhamento, clique na lupa ao lado de “Qt. Comprada” e verifique se existem pedidos em aberto. Se realmente não houver, podemos realizar o alinhamento. É bem simples! Acesse o “Configurador Bimer > Estoque > Alinhamentos > Quantidades compradas”. Neste alinhamento não existem filtros, ou seja, o sistema efetuará todo o alinhamento das quantidades compradas no estoque. Basta clicar em “Sim” para que seja iniciado. A execução é bem rápida. Ao concluir, é exibida a seguinte tela:


## Alinhamento Quantidades requisitadas

O alinhamento das quantidades requisitadas é muito parecido com o alinhamento das quantidades compradas. Utilizamos quando, no Consulta de Estoque, indica que existem quantidades requisitadas, porém, ao clicar na lupa, não existe nenhum movimento. No “Configurador Bimer > Estoque > Alinhamentos > Quantidades requisitadas”. Confirme o alinhamento, assim, o processo será realizado.


## Alinhamento de Saldo das empresas e setores

Veremos, agora, o alinhamento do saldo em estoque da empresa com os setores. Vamos imaginar a seguinte situação: o cliente entra em contato informando que o saldo da empresa no Consulta de Estoque está incorreto, porém, o estoque dos setores está certo. Neste caso, pode ser que ele não tenha permissão em algum setor, certo? Sim, consulte as permissões nos setores para o usuário desejado. Caso realmente ele tenha permissão em todos, podemos utilizar o alinhamento de saldo das empresas e setores. Dúvida! Qual saldo em estoque será considerado como correto? Boa pergunta! Será considerado o saldo em estoque dos setores. Acesse o “Configurador Bimer > Estoque > Alinhamentos > Saldo da empresa e setores”. Clique em “Avançar”; no primeiro filtro, selecione as empresas que serão alinhadas. Na próxima tela, informe os itens que estão com as quantidades em estoque incorretas. Temos também o filtro de grupo de produtos, caso deseje alinhar todos os itens do grupo. Em seguida, na última tela, digite “Confirmo” para iniciar o alinhamento. E o alinhamento será iniciado. O processo é bem rápido! Exibindo a tela de conclusão, verifique no Consulta de Estoque se as quantidades foram ajustadas corretamente.


## Alinhamentos Financeiros

Sabemos que o controle financeiro é fundamental para a saúde financeira do estabelecimento. Entretanto, em alguns casos, pode acontecer de algum título não ter o lote de baixa vinculado, o somatório dos itens estar incorreto, etc. Para acessar os alinhamentos financeiros, acesse o “Configurador Bimer > Financeiro > Alinhamentos.


## A receber


### Alinhar o valor dos títulos a receber


### considerando o somatório dos


### valores dos itens

Através deste alinhamento, o sistema fará o ajuste do valor do título de acordo com o somatório dos itens. Vamos imaginar que existe um título com dois itens no valor de R$ 49,85 e R$ 48,19, ou seja, o valor do título seria de R$ 98,04. Contudo, ao verificar, o valor do título está como R$ 98,00. Ao rodarmos o alinhamento, o valor será ajustado para que fique de acordo com o somatório dos itens.


### Alinhar baixas de títulos a receber


### que não estão vinculados a um lote

Caso exista alguma baixa de título que não tenha um lote vinculado, podemos utilizar este alinhamento. Ao clicar em “Listar” são exibidos todos os títulos que estão sem lotes. Dentro do título, na área de visualização das baixas, o campo fica desabilitado, pois não existe um lote de baixa vinculado. Ao executar o alinhamento, o lote será criado. Na tabela “LoteAReceber” do banco de dados, na coluna “DsLoteAreceber” terá a seguinte informação: “Lote recuperado pelo alinhamento financeiro”: Agora, o campo de visualização das baixas ficará habilitado, permitindo acessar os dados do lote:


### Alinhar as pessoas de repasse dos


### títulos a receber, analisando os


### documentos de origem

Será realizado o alinhamento das pessoas de repasse, analisando os documentos de origem, preenchendo de acordo com as alíquotas de repasse do cadastro da pessoa. Serão analisados e ajustados os títulos a receber, identificando quais documentos tiveram a pessoa de repasse informada com alíquota zerada, ocasionando para que os títulos tivessem os seus itens sem a informação da pessoa de repasse. Caso os títulos estejam em aberto, serão copiadas as alíquotas de repasse informadas no cadastro da pessoa de repasse. Ao clicar em “Listar” são exibidas as ocorrências que precisam ser ajustadas. Em seguida, clique sobre o alinhamento para que ele seja executado. Caso não haja nenhum documento com a pessoa de repasse com alíquota zerada, será exibida a seguinte informação:


### Alinhar os valores de centro de


### custos que estejam inconsistentes


### com a alíquota do lançamento.

Por meio deste alinhamento é possível verificar quais títulos estão com os valores e alíquotas de centro de custo divergentes. Pode ser utilizado também para os títulos a pagar e/ou a receber, em aberto ou baixados, que não tenham sido contabilizados.


## A pagar


### Alinhar baixas de títulos a pagar que


### não estão vinculados a um lote

A rotina deste alinhamento é a mesma que vimos anteriormente no tópico do a receber. Será analisado se existem títulos que não tenham lotes de baixa vinculados. Ao clicar em “Listar” na área de alinhamentos são exibidos os títulos: Realizado o alinhamento, na tabela “LoteAPagar” será criado o lote, indicando que foi recuperado através do alinhamento:


### Alinhar as baixas totais que estejam


### com mais de uma baixa total, sendo


### uma delas de R$0,00

Por meio deste alinhamento é possível identificar títulos que possuam mais de uma baixa, porém, uma delas está com o valor zerado. Dúvida! Poderia demonstrar um exemplo? Claro! Veja abaixo que o título de número 001114-1 está lançado duas vezes no lote 007613, sendo que na coluna “Vl. baixa” um registro está igual a R$ 0,00: Ao abrirmos o título 001114-1, podemos identificar que o valor é de R$ 120,00, e na aba baixas contém os dois registros: Realizando o alinhamento, o sistema remove o registro zerado, mantendo apenas o lote em que foi efetuada a baixa total.


## Alinhamentos Faturamento

Na área de Faturamento, temos quatro alinhamentos disponíveis que estão relacionados aos pedidos de venda, geração de NF-e de entrada a partir da Devolução/troca, alinhamento dos itens da NF-e de entrada e, por fim, o alinhamento do histórico de compras/entradas. No Configurador Bimer, acesse aba “Faturamento > Alinhamentos”.


## Alinhar e/ou Analisar os pedidos de venda

Por meio deste alinhamento conseguimos analisar os status dos pedidos, quantidades pendentes, quantidades em processamento, pedidos que estejam ligados notas fiscais/ordem de entrega já excluídos, etc. Primeiramente, selecione o que deseja alinhar. Ao selecionar “Alinhar pedidos com estoque distribuído” o sistema alinhará os pedidos que possuem estoque distribuído, conforme a opção marcada, da seguinte forma: Em seguida, os tipos de pedidos que serão alinhados, exemplo: • Pré-pedidos com pedido transitório gerado: Ao selecionar essa opção, os pedidos transitórios que estiverem vinculados a um pré-pedido serão excluídos; • Pedidos transitórios sem pedido de venda: Ao marcar essa opção, os pedidos transitórios que não estiverem ligados a nenhum pedido de venda serão excluídos; • Pedidos de venda com documento de transferência e pedidos transitórios gerados: Ao selecionar essa opção, os pedidos de venda que já tiverem documentos de transferência gerados terão seus pedidos transitórios excluídos, caso existam; • Pedidos de venda sem o documento de transferência ou pedidos transitórios gerados: Ao marcar essa opção, os pedidos serão alinhados conforme o(s) status selecionado(s) da seguinte forma: Filtrar os pedidos e/ou pré-pedidos do seguinte período: esse período será utilizado no filtro para selecionar os pedidos de venda e/ou pré-pedidos que serão alinhados. Deixando as datas vazias, o sistema realizará os alinhamentos em todos os pedidos de venda e/ou pré-pedidos com estoque distribuído. Observação: Esse filtro não influenciará a opção “Pedidos transitórios sem pedido de venda”. Dúvida! O que seria estoque distribuído? O estoque distribuído é um recurso que permite ao usuário de uma empresa visualizar e vender produtos que tenham quantidades em estoque em outras empresas do grupo. Exemplo: o usuário da filial 01 faz a venda de um produto o qual, no seu estoque local, há somente 7 unidades, mas a quantidade pedida pelo cliente é de 20 unidades. Por meio do recurso de estoque distribuído, o usuário poderá vender as 20 unidades, sendo que 13 serão transferidas da matriz ou de outra filial que tiver a quantidade em estoque. Caso deseje saber mais sobre o recurso de estoque distribuído, acesse o material no “Portal da UCA > Bimer > Materiais >Manuais> Estoque distribuído”. Definido os dados que serão alinhados, clique em “Alinhar e/ou analisar”. Caso tenha selecionado o alinhamento de histórico do pedido, é exibida a seguinte confirmação: Em seguida, se for identificado algum ajuste a ser feito, o sistema exibe uma tela com os dados a serem alterados. Marque o que deseja que ocorra com o pedido e clique em “Alterar”.


## Geração de NFs de entrada a partir do Devolução/Troca


## de vendas

Com este alinhamento, o sistema gerará uma nota fiscal de entrada para o processo de devolução/troca no qual ocorreu algum problema no momento da liberação e a nota fiscal não tenha sido gerada. Informe o período de emissão que será utilizado para filtro e selecione o código da devolução/troca desejada e que esteja pendente a geração. Em seguida, clique “Gerar NF”.


## Alinhar itens das NFs de entrada a partir do processo de


## devolução

Este alinhamento recupera os itens das notas fiscais de entrada que foram geradas a partir do processo de devolução (módulo Devolução e Troca) e que foram removidos indevidamente no momento da liberação da nota.


## Alinhamento do Histórico de Compra/Entrada

O sistema alinha a tabela de histórico de compra/entrada de acordo com o filtro informado pelo usuário. Serão recuperados os documentos de Compra e/ou Entrada dos itens que foram adquiridos com incidência de Substituição Tributária (CST 10, 30, 70, 90 ou CSOSN 102, 103, 201, 202, 203, 300, 400, 500, 900) ou com incidência do ICMS ST Retido (CST 60 ou CSOSN 500)
