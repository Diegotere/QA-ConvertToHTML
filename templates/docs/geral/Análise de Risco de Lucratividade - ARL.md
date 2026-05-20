# Análise de Risco de Lucratividade — ARL — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Para Iniciar](#para-iniciar)
- [O que é ARL?](#o-que-e-arl)
- [Dados para o Atendimento](#dados-para-o-atendimento)
- [Fórmulas já existentes](#formulas-ja-existentes)
  - [LEGENDA DOS CAMPOS](#legenda-dos-campos)
- [Configurações](#configuracoes)
- [Configurações Gerais](#configuracoes-gerais)
- [Configurações do Faturamento](#configuracoes-do-faturamento)
  - [Geral](#geral)
  - [Primeira Análise de risco de lucratividade](#primeira-analise-de-risco-de-lucratividade)
  - [Segunda Análise de risco de lucratividade](#segunda-analise-de-risco-de-lucratividade)
  - [Índice para análise](#indice-para-analise)
- [Cadastro de Usuários](#cadastro-de-usuarios)
- [Rotina de análise](#rotina-de-analise)
- [Pontos de verificação da DLL](#pontos-de-verificacao-da-dll)
- [Análise](#analise)
  - [Pedido de Vendas](#pedido-de-vendas)
  - [Liberação de Pedidos](#liberacao-de-pedidos)
  - [Pré-pedido](#pre-pedido)

---


## Para Iniciar


## O que é ARL?

Como você leu na primeira página deste material, ARL é a sigla para Análise de Risco de Lucratividade. Essa é uma função inteiramente ligada à política financeira e de comercialização da empresa, pois mostra se o meu negócio está atingindo o lucro desejado nas vendas. E para isso, definimos em números, valores acima e abaixo do percentual de lucro desejado, para o sistema alertar com cores definidas pelo usuário, se o valor esperado foi atingido ou ultrapassado, por exemplo. Com a ARL o gestor consegue granular informações, levando em conta dados como: • Valor unitário da venda; • Valore de uma tabela de preço específica; • Peso Bruto e Peso Líquido; • Valor de percentual de desconto; • Prazo da Venda; • Tributos, como exemplo: ICMS, PIS e COFINS; • Custo de reposição; • Entre outros. Com esses fatores, o gestor monta fórmulas de cálculo personalizadas de acordo com o seu tipo de negócio e produto comercializado. Após isso, algumas decisões talvez precisem ser tomadas para alcançar o lucro desejado: • Aumentar ou até mesmo diminuir o preço de venda (caso a produto não esteja ganhando mercado por ter um valor de venda muito alto em comparação com a concorrência, por exemplo); • Diminuir os descontos gerados nas vendas, ou conceder somente em determinados prazos de pagamentos; • Diminuir custo de reposição, procurando um fornecedor que venda este produto mais barato; • Diminuir a carga tributária, comprando de um local do mercado nacional ou estrangeiro que ofereça uma vantagem melhor para a empresa. Dúvida! E qual a fórmula para calcular a ARL? Ótima dúvida, para isso vamos ao próximo tópico de nossa viagem.


## Dados para o Atendimento

Preparei este tópico para ajudar você, implantador e técnico de suporte, que encaram os gestores no dia a dia. Vamos ver alguns pontos importantes ao atender o cliente sobre ARL: 1.Não existe uma fórmulapadrão dentro do Bimer, pois cada gestor personaliza de acordo com a necessidade, e decide quais fatores levará em conta para isso, como vimos no tópico anterior. 2.Para fazer o cálculo são usados arquivos do tipo DLL. 3.Se o cliente desejar uma nova fórmula de cálculo, deve ser aberto um processo para nosso Desenvolvimento, descrevendo de modo claro e exato a maneira como a empresa trabalha. 4.Para o sistema calcular de modo correto, todos os valores da fórmula precisam estar presentes, seja na venda, no prazo, no cadastro de produtos ou custo de reposição preenchido, por exemplo. 5.O diretório padrão da DLL é o mesmo dos módulos do Bimer. Todas as DLLs ficam presente no Museu do Bimer (M) de acordo com a liberação das versões. Se você é nosso colega que trabalha fora da Matriz, entre em contato com o setor de Canais para solicitar o arquivo. 6.Pode ocorrer de a fórmula do seu cliente já estar disponível no Bimer, para um outro cliente, pois cada DLL criada recebe o nome da empresa presente no processo. Para dar uma olhadinha nas fórmulas existentesclique aqui ou continue lendo o material. Se Liga! O arquivo do tipo DLL é uma extensão de aplicativo, ou seja, é usado para executar uma função específica no sistema, quando seu parâmetro está ativo. No contexto de ARL, as DLLs tem a função de pegar os dados que foram informados no sistema e calcular para o usuário a margem de lucro, margem de contribuição ou preço por quilo (por exemplo).


## Fórmulas já existentes

Veja aqui quais são as fórmulas já implementadas no sistema para ARL. Assim você entende melhor a cabeça dos gestores e analisa o que é importante para cada um levando em conta o seu negócio:

1. AltCalcERP_BahiaFort.dll:
Informações sobre o cálculo da análise de risco de lucratividade: Descrição: Calcular o Preço por Quilo (PPQ) e a Margem de Contribuição (MC) Fórmulas: Primeira Análise: PPQ = Vl. Item Calculado / Vl. Peso Líquido Segunda Análise: MC = Vl. Líquido / Vl. Custo Produto

2. AltCalcERP_CafeFino.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmula: Primeira análise: ML = Vl. Fator = ((Vl. Item * Al. ARL)/100) ML = Vl. Item Líquido = (Vl. Item - Vl. Pis - Vl. Cofins - Vl. Icms - Vl. Custo - Vl. Fator) ML = (Vl. Item Líquido / Vl. Item) * 100

3. AltCalcERP_Conerio.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmulas: Primeira Análise: ML = Vl. Item - Vl. Custo de Reposição Segunda Análise: ML% = (Vl. Item / Vl. Custo de Reposição) * 100

4. AltCalcERP_EletricosNorte.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmula: Primeira Análise: ML = ((Preço de Venda Líquido / PreçoCNPJ) - 1) * 100 Segunda Análise: Não implementada

5. AltCalcERP_GELDBACH.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmula: Primeira análise: Vl. Fator = ((Vl. Item * Al. ARL)/ 100) Vl. Item Líquido = (Vl. Item - Vl. PIS - Vl. COFINS - Vl. ICMS - Vl. Fator) ML% = ((Vl. Item Líquido - Vl. Custo)/ Vl. Item Líquido) * 100

6. AltCalcERP_LeaderShip.dll
Informações sobre o cálculo margem de contribuição: Descrição: Calcular a margem de contribuição (MC) Fórmula: Primeira análise: MC = ((Vl. Líquido - ((Vl. Item calculado * Al. ARL) / 100) - Vl. Custo) / Vl. Item calculado) * 100

7. AltCalcERP_LimpControl.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmulas: Primeira Análise: ML = Vl. Item - Vl. Custo Segunda Análise: ML% = (Vl. Item / Vl. Custo) * 100

8. AltCalcERP_NovaLider.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmulas: Primeira Análise: ML = (Vl.Liq Item / Vl. Custo) * 100 Segunda Análise: Não implementada

9. AltCalcERP_Panorama.dll
Informações sobre o cálculo de margem de lucro: Descrição: Calcular a margem de lucro (ML) Fórmula: Primeira Análise: ML = ((((Valor Unitário + Valor do IPI unitário) / Deflator) / (Produto.Largura * Produto.Rendimento)) / Fator Aglutinador) Segunda Análise: Não implementada

10. AltCalcERP_Plastigel.dll
Informações sobre o cálculo da análise de risco de lucratividade: Descrição: Calcular o Preço por Kilo (PPK) e a Margem de Contribuição (MC) Fórmulas: Primeira Análise: PPK = Vl. Item Calculado / Vl. Peso Líquido Segunda Análise: MC = Vl. Líquido / Vl. Custo Produto

11. AltCalcERP_Talvegue.dll
Informações sobre o cálculo da análise de risco de lucratividade: Descrição: Calcular a margem de lucro (ML) Fórmula: Primeira Análise: ML = (Valor de venda líquido / Valor do último custo de reposição) Segunda análise: Não implementada


### LEGENDA DOS CAMPOS

Vl Valor MC Margem de Contribuição ML Margem de Lucro PPQ Preço por quilograma Olhe o detalhe: Em geral a Margem de Contribuição é = Valor das Vendas – Custos Variáveis (ligado ao volume produzido ou vendido como tributos ou comissão), porém, como a DLL é personalizada, aqui o sistema vai agir conforme a definição da fórmula de cada empresa. Acho que está na hora de partir para o sistema, não acha? Vamos começar pelas Configurações, e após veremos a utilização de ARL no Bimer.


## Configurações


## Configurações Gerais

Acesse o Configurador / Gerais / Opções / Cálculos: • MarqueTrabalhar com cálculo específicoe selecione a DLL desejada clicando na Pasta Azul. ◦ Como vimos, normalmente a DLL fica no diretório de instalação do sistema, mas pode ser colocada em outro local como um diretório de rede para que todos os usuários consigam usar, sem a necessidade de colocar a DLL em cada máquina da rede. • Função para informar a versão da DLL:Esta é uma versão de controle interno do sistema em relação à DLL. Para você saber se a versão é compatível com o Bimer do seu cliente, não leve em conta esta informação, mas, sim, a versão que aparece ao acessar o diretório da DLL no compuador / Botão direito / Propriedades / Detalhes / Versão do arquivo. Se a versão for inferior em relação ao Bimer, podem ocorrer erros no sistema e na fórmula de cálculo. • Função para calcular a análise de risco de lucratividade: Veja a fórmula da DLL que você selecionou. Perceberá que algumas disponibilizam duas análises e outras apenas uma. Deixe esta opção marcada


## Configurações do Faturamento

Acesse o Configurador / Faturamento / Opções / Venda / Análise de risco de lucratividade e marque Trabalha com análise de risco de lucratividade. Após isso há 4 abas para configurar:


### Geral

Diferente das próximas abas, os parâmetros definidos na aba Geral serão utilizados somente se a DLL possuir configuração para recuperá-los (de acordo com a fórmula da DLL). Com isso em mente, veja a utilidade dos campos: • Habilitar outros campos que influenciarão no cálculo da análise de risco de lucratividade:Habilite mais dois campos ou variáveis que podem ser utilizadas na tela da ARL, no momento da venda. Assim ao gerar um pedido de vendas, por exemplo, os nomes informados serão resgatados e o usuário informará as alíquotas de cada um. • Informe uma alíquota que influenciará no cálculo da análise de risco de lucratividade: Defina um percentual geral que será levado em conta na ARL. • Código do preço para cálculo de análise de risco de lucratividade: Informe a tabela de preço padrão. Para as DLLs que usam o preço na fórmula, deve-se lançar o pedido com a tabela para que o valor seja calculado devidamente. Dica quentinha para você! No módulo Pessoa / Clientes / Cadastros / campo Al. desc. pag. o usuário informa uma alíquota de desconto para o seu cliente. Assim como a aba geral, para usar esse percentual, é necessário que a DLL resgate a informação do cadastro do cliente.


### Primeira Análise de risco de lucratividade

Esta é a aba mais importante da configuração, pois aqui o gestor personaliza para o sistema os valores para a análise no momento da venda. Desse modo, é necessário preencher os campos: • Informe um nome e uma sigla para esta análise de risco de lucratividade: Defina o nome da análise que aparecerá nos módulos de venda do sistema. A sigla serve como um apelido dessa análise. • Informe a análise de risco de lucratividade mínima viável e uma cor de identificação: Indique para o Bimer um valor de referência para a análise, pensando no resultado do cálculo da DLL. A partir desse valor o sistema calcula o mínimo e máximo viável. ◦ Dica: De acordo com o valor do preço de vendas que a empresa pratica, se for colocado um valor aqui muito baixo, a ARL sempre vai ser trazida como positiva. Desse modo, este campo deve ser preenchido pensando no tipo de negócio da empresa e no seu preço médio de venda. • Variações abaixo da análise de risco de lucratividade mínima viável – Campo 01:Defina um percentual para a variaçãoMuito baixa.Se esse resultado for exibido na venda quer dizer que o lucro ou margem da empresa está muito abaixo do esperado. E isso significa que a empresa não está atingindo a meta de venda esperada. • Variações abaixo da análise de risco de lucratividade mínima viável – Campo 02: Defina um percentual para a variação baixa. Se esse resultado for exibido na venda quer dizer que o lucro ou margem da empresa está abaixo do esperado. E mais uma vez a empresa não está conseguindo atingir suas metas de venda. • Variações acima da análise de risco de lucratividade máxima viável – Campo 01: Defina um percentual para a variação alta. Se esse resultado for exibido na venda quer dizer que o lucro ou margem da empresa está acima do esperado. E a empresa mandou bem e conseguiu obter um resultado acima do esperado. • Variações acima da análise de risco de lucratividade máxima viável – Campo 02: Defina um percentual para a variação muito alta. Se esse valor for atingido quer dizer que a empresa está indo muito bem, muito acima do esperado. E se continuar assim e atingir as metas de vendas, o gestor vai pagar aquela pizza para todo mundo! • Paleta de cores: Defina no botão da seta para baixo, a cor de exibição do resultado. Você pode usar também o botão dos três pontos para criar sua cor. Olha as dicas! 1 Percebeu na imagem o mesmo que eu? O valor mínimo viável fica entre a análise de lucratividade mínima e máxima viável. 1.1 Desse modo, o sistema tem um balizador, de acordo com o desejo do gestor. Pois ele sabe que o valor mínimo não está acima e nem abaixo da lucratividade, assim exibe o resultado na cor padrão. E no momento que o valor é atingido (para baixo ou para cima) a cor muda para alertar o gestor. 1.1.1 Exemplo de acordo a imagem: O cálculo resultou em 17,50, isso quer dizer que foi atingida a variação alta de 50% em relação ao lucro. 2 Cálculo do valor de análise mínima – Varia de … 2.1 Valor da análise mínima: 10,00 2.2 Variação abaixo menor: 20% (19,99)% → 0,01% a menos 2.3 Variação acima menor: 50% (49,99)% → 0,01% a menos 2.4 Varia de Inicial: 10 * 19,99% = 1,99 → 10 - 1,99 = 8,01 2.5 Varia de final: 10* 49,99% = 4,99 → 10 + 4,99 = 14,99


### Segunda Análise de risco de lucratividade

Os campos são os mesmos que acabamos de ver na aba Primeira Análise de risco de lucratividade portanto a configuração segue o mesmo padrão. Esta aba serve para o gestor trabalhar com duas análises de risco de lucratividade em paralelo (caso a DLL permita isso). Se a DLL não permitir, este campo não terá uma função no momento da venda. Para habilitar a edição da aba você precisa marcar a opção Habilitar a segunda análise de risco de lucratividade:


### Índice para análise

Esta aba serve para definir um valor de índice mínimo para 1ª e 2ª análise por empresa.Assim, o sistema primeiro obtêm o valor desta aba, senão estiver preenchida, os valores são obtidos das duas abas anteriores (formando assim uma hierarquia).


## Cadastro de Usuários

No módulo Usuários, selecione o perfil individual ou perfil cadastrado do usuário, localize os sistemas Pré-Pedido, Pedido de venda e Liberação de Pedidos e dê, na abaAcessos,as permissões para visualizar a1ª e/ou 2ª Análise de risco de lucratividade.


## Rotina de análise

Neste material vou mostrar para você o exemplo da DLL da Panorama (pois é uma das mais completas em fórmula de cálculo), porém é apenas um exemplo para você compreender como fazer no Bimer, e replicar para as outras DLLs conforme o atendimento do cliente e campos pedidos na fórmula. Para você entender bem, a empresa Panorama é uma indústria de Fabricação de artefatos de material plástico, como por exemplo, embalagens, sacos e sacolas.


## Pontos de verificação da DLL

De acordo com a fórmula, a DLL necessita de um checklist para que o cálculo funcione corretamente. Como estou usando uma de exemplo vou mostrar para vocês os pontos que eu verifiquei: 1 No Configurador / Faturamento/ Opções / Pedido de Venda / Padrões, marque a opção “O fator aglutinadorserá um campo numérico”: 2 No Cadastro de Produtos 2.1 Acesse aDetalhes e preencha oRendimento para a fabricação do produto. 2.1.1 Rendimento → Utilizado para indicar a quantidade disponível da matéria-prima para fabricar um produto acabado. 2.1.1.1 No exemplo das sacolas, imagine que você possua um rolo de 3,5 metros de rolo para fabricar as sacolas, quanto dessa metragem você utilizará para a fabricação? Este valor será informado no campo rendimento. 2.1.1.2 Um outro exemplo seria de Tecido. Tenho na confecção um rolo de 20 metros de tecido, quanto vou utilizar para fabricar camisas, já levando em conta possíveis perdas durante o processo produtivo? 2.2 Ainda na aba Detalhes, marque a opção Dimensões para transporte e preencha a Largura. 2.2.1 Caso nada seja informado nesses campos no cadastro do produto, o sistema considera Produto.Largura * Produto.Rendimento = 1. 3 Acesse o Configurador / Financeiro / Prazos eedite um de seus prazos de venda. Preencha o campo % Desconto máximo para ser levado na fórmula e compor o Deflator. 3.1 Caso o campo não seja preenchido ou não seja informado o prazo no pedido de venda, será considerado o Deflator = 1.


## Análise


### Pedido de Vendas

Vamos iniciar a nossa análise pelo Pedido de Vendas. Lance o pedido, informe o produto e todos os dados desejados. No meu caso lancei o rolo de sacolas plásticas. Veja como a tela do pedido muda com a Análise de Risco de Lucratividade: • Botão Análise:Traz a legenda com os valores e cores parametrizadas no Configurador. • Colunas ARL: No meu sistema ‘ARL’ e ‘PB’, mostram ao lado de cada item o resultado do cálculo e as cores atingidas na análise. Representam os apelidos definidos para cada ARL no Configurador.Você pode inserir ou remover essas colunas pelo botão Seleção de campos. • Valores de ARL: Demonstrados na parte debaixo, trazendo o ARL geral dos produtos dessa venda. O sistema soma todos os ARLs e divide pela variedade de itens (caso tenha mais de uma variedade). • Legenda: Demonstrada na parte de baixo, no lado inferior esquerdo, exibe o que significa cada sigla configurada pelo usuário. Além de inserir o item, informei na aba Negociação o prazo que foi configurado com desconto máximo. O IPI foi calculado com 6% em cima do produto, no qual o valor unitário do tributo foi R$ 12,24. E na aba Principal coloquei o Fator Aglutinador de 70: Assim o cálculo na prática foi (de acordo com a AltCalcERP_Panorama.dll): ML = ((((Valor Unitário + Valor do IPI unitário) / Deflator) / (Produto.Largura * Produto.Rendimento)) / Fator Aglutinador) ML = ((((204,00 + 12,24 ) / 1,035) / (0,60 * 3,50)) / 0,70) ML = (((216,24 / 1,035) / (2,10)) / 0,70) ML = ((208,93 / 2,10) / 0,70) ML = 99,49 / 0,70 ML = 142,13 Mais algumas dicas para você entender o cálculo: • FatorAglutinador = (70 / 100) = 0,70 ◦ O valor de 70,00 foi informado na aba Principal do Pedido ▪ Caso seja informado um valor inferior a 0 ou superior a 100, na fórmula será considerado o valor de 100. • Deflator = (1 + (3,50 / 100)) = 1,035 ◦ O valor de 3,5 é o desconto máximo do prazo, informado na aba Negociação. Conclusão: O valor de ML = 142,13ficou na cor azul pois foi acima de 150% em relação ao valor mínimo definido na configuração do ARL (no meu exemplo foi o valor de 10,00). Desse modo, o usuário vai analisando em cada venda os valores atingidos e observa o rumo que a empresa está tomando. E naturalmente se notar que o valor mínimo e os percentuais estão altos ou baixos pode-se ajustar nas configurações.


### Liberação de Pedidos

O módulo Liberação de Pedido não podia ficar de fora dessa, não é? Ao selecionar o pedido de vendas, pode-se analisar a Análise de Lucro: Veja que há também um link azul que apresenta as configurações feitas no sistema para a geração da rotina (assim como no Pedido de Vendas). Na informação dos itens vemos as cores resultantes dos cálculos, e no rodapé os valores gerados de ARL. A ideia de usar ARL no Liberação de Pedido é bem interessante, pois fornece ao usuário que realiza a liberação dos pedidos mais um fator de análise. Desse modo, ele pode negar a liberação do pedido caso o valor esteja com a variação abaixo do mínimo desejável, por exemplo. E solicitar que algo seja feito para reverter esse quadro como aumentar o preço da venda ou remover o desconto.


### Pré-pedido

Se a empresa usa o módulo para gerar orçamento de vendas, advinha quem estará lá? A ARL, isso mesmo! Mais uma vez, vemos o link azul que apresenta as configurações feitas no sistema para a geração da rotina.Na informação dos itens, vemos as cores resultantes dos cálculos, e no rodapé os valores gerados de ARL. É importante ressaltar que na análise pelo Pré-pedido, alguns campos não estão presentes e, assim, o cálculo muda no orçamento. Como no exemplo da DLL da Panorama, que usa Fator aglutinador e valor de tributos (IPI), estes dados não são levados em conta. No exemplo da imagem, o valor foi 93,86, seguindo a fórmula: ML = ((((Valor Unitário + Valor do IPI unitário) / Deflator) / (Produto.Largura * Produto.Rendimento)) / Fator Aglutinador) ML = ((((204,00 + Sem IPI) / 1,035) / (0,60 * 3,50)) / Sem Fator Aglutinador) ML = ((204,00 / 1,035) / (2,10)) ML = (197,10 / 2,10) ML = 93,86
