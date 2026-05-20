# Integração Bimer x Ratio — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é DRE?](#o-que-e-dre)
- [Representação simplificada de DRE](#representacao-simplificada-de-dre)
- [Fluxo de integração](#fluxo-de-integracao)
- [Configuração](#configuracao)
- [Ambiente de Homologação](#ambiente-de-homologacao)
- [Instalação do Integrador Ratio](#instalacao-do-integrador-ratio)
- [Dicas para instalação, análise e configuração](#dicas-para-instalacao-analise-e-configuracao)
- [Acesso ao sistema](#acesso-ao-sistema)
- [Criação de demonstrativos](#criacao-de-demonstrativos)
- [Composição da Linha por Valor](#composicao-da-linha-por-valor)
  - [Origens de cálculo](#origens-de-calculo)
- [Composição de linha por Fórmula](#composicao-de-linha-por-formula)
- [Metas](#metas)
- [Customização](#customizacao)
- [Linha para percentual](#linha-para-percentual)
- [Outras funções da tela de demonstrativo](#outras-funcoes-da-tela-de-demonstrativo)
- [Resultados](#resultados)
- [Gráficos](#graficos)
- [Exemplos de DRE](#exemplos-de-dre)
- [Receita Bruta](#receita-bruta)
- [Receita Operacional Líquida](#receita-operacional-liquida)
- [Impostos que incidem sobre as vendas](#impostos-que-incidem-sobre-as-vendas)
- [Opções](#opcoes)

---


## Introdução

Ratio é um sistema para auxiliar na construção de DRE, desenvolvido para a plataforma web. O Ratio trabalha com uma API própria podendo integrar com qualquer retaguarda desde que possua um integrador seguindo as regras da API. Observação: Na linha Pack também existe um sistema chamado Ratio, mas os mesmos são distintos. Enquanto o Ratio do Pack trabalha com DRE contábil, o Ratio que integra com o Bimer e demais sistemas trabalha com DRE econômico-financeiro.


## O que é DRE?

Segundo o SEBRAE, o DRE – Demonstrativo do Resultado do Exercício (Ou demonstração do resultado do exercício) tem como objetivo “detalhar a formação do resultado líquido de um exercício pela confrontação das receitas, custos e despesas de uma empresa, apuradas segundo o princípio contábil do regime de competência (receitas e despesas devem ser incluídas na operação do resultado do período em que ocorrem).” Ou seja, o DRE apresenta o resumo financeiro dos resultados operacionais e não operacionais de uma empresa. Desta forma, o módulo Ratio visa apresentar a formação de resultado líquido do exercício de acordo com esses princípios, confrontando receitas, custos e despesas, oferecendo um resumo ou composição econômica dos resultados operacionais de uma empresa em um determinado período. Entende-se como exercício o período entre o dia 1º de Janeiro até o dia 31 de dezembro de cada ano.


## Representação simplificada de DRE

Informações de despesas operacionais, de vendas e financeiras serão sintetizadas em um resultado final do exercício. Exemplo de apuração:


## Fluxo de integração

A integração trabalha em apenas um sentido, os dados da base da retaguarda do Bimer serão exportados pelo serviço de integração para o Ratio, que armazenará e processará estes dados. Nesse processo de exportação serão enviados os seguintes dados: • Estoque – Valor total de venda, valor total de compras e valor de estoque. Não haverá distinção por produto ou notas. • Venda – Leva em consideração apenas valores de notas já emitidas e autorizadas. • A receber – Serão levados em conta todos os títulos a receber, e dados como data de baixa, valor e data de criação. • A pagar – Serão levados em conta todos os títulos a pagar, e dados como data de baixa, valor e data de criação. ATENÇÃO: O Ratio realizará a exportação dos registros retroativamente a partir do 1° dia do ano anterior com base na data que foi habilitado a integração com o mesmo. Por exemplo, de for habilitada a integração no dia 18/04/2018, serão exportados todos os registros a partir de 01/01/2017.


## Configuração

Acesse o Configurador Bimer >> Geral >> Ferramentas >> Opções de integradores >> Ratio, e marque a opção “Habilitar integração”. No campo “Identificador do assinante” se refere ao código de acesso do cliente Alterdata ao Ratio. Para preenchê-lo, clique no ícone da Alterdata ao lado e faça o login no passaporte. Em seguida informe quais empresas e operações de venda ou saída do Bimer serão utilizadas para serem exportados para o Ratio. Ao confirmar as informações serão enviadas para a base do Ratio. Iiih, deu erro? Classe não registrada ou algo do tipo? Vamos resolver! Para realizar a comunicação, o sistema usa a dll LoginPassaporte2.dll. Insira esta dll em um diretório com permissão total e execute os seguintes comandos no prompt de comando do Windows: • cd C:\Windows\Microsoft.NET\Framework\v4.0.30319 • RegAsm.exe C:\<diretorio escolhido>\LoginPassaporte2.dll Além disso, verifique se o NetFramework está instalado.


## Ambiente de Homologação

Para uso em homologação é necessário criar uma chave no regedit para apontar o login no passaporte para o ambiente de homologação. Acesse o Regedit e sobre a chave Computador\HKEY_CURRENT_USER\Software\Alterdata\ERP, clique com botão auxiliar e crie nova chave, com nome Passaporte2. Na chave criada, adicione um “valor da cadeia de caracteres”, com a URL do passaporte de homologação: https://passaporte2- hml.alterdata.com.br. Veja na imagem a seguir, como deve ficar a chave e o registro… Caso não realize este procedimento, não será possível realizar login com sucesso, usando dados de colaborador no passaporte. Atenção: este é um procedimento interno, para uso de colaboradores. Jamais o execute em ambiente de produção no cliente! Voltando à tela… Ao clicar nos botões “Reenviar dados de exportação” e “Ok”, o sistema solicitará confirmação para realizar o procedimento, e removerá todos os registros das tabelas de integração com o Ratio, alimentando-a novamente com os filtros atuais. "Considerar documentos gerados pelo PDV Alterdata e Spice com data de emissão do dia anterior emitidos até às xx:xx” por padrão vem desmarcada e com o horário vazio. Ao selecionar a opção, o sistema obrigará o preenchimento da hora limite, apresentando a seguinte crítica: Ao selecionar a opção: Será verificado o horário da data de emissão do documento e caso ele seja igual ou inferior ao horário configurado, o integrador do Ratio fará o ajuste da data de emissão do documento para o dia anterior somente para realizar a integração com o Ratio, sem que realize qualquer alteração no banco de dados do Bimer. Observação: Somente os documentos gerados pelo PDV Alterdata e Spice são importados com a informação de hora. Exemplo: Horário configurado: 05:00 Documento PDV Alterdata – 1 Data de emissão: 02/01/2021 04:50:00 Data de emissão integrada com Ratio: 01/01/2021 00:00:00 Documento PDV Alterdata – 2 Data de emissão: 02/01/2021 05:10:00 Data de emissão integrada com Ratio: 02/01/2021 00:00:00


## Instalação do Integrador Ratio

Conforme explicado, para o processo de exportação de dados da base de dados do Bimer para a base de dados do Ratio é feito através de um serviço de integração. O instalador do Integrador Ratio pode ser obtido com o suporte de canais do Bimer. O processo de instalação é bastante simples. Basta executar o “Integrador Ratio - <versão>.exe”, e avançar pelas próximas telas. Algumas telas precisam de atenção antes de avançar a próxima. Na tela “Conexão” devem ser configurados os dados do Servidor, do Usuário e da Senha para que o integrador possa acessar Base de Dados do Bimer que trabalhará integrada ao Ratio. Na tela Frequência de execução da integração é informado o tempo em hora para que o processo de integração aconteça. É importante ter critério ao definir esse tempo, para não deixar a máquina onde o serviço está instalado sobrecarregada, desnecessariamente. Por exemplo, existe a necessidade de realizar a integração a cada hora, se geralmente não há mudanças significativas de dados neste intervalo de tempo?


## Dicas para instalação, análise e configuração

1. O diretório C:\Program Files (x86)\Alterdata\Alterdata Bimer – Integrador Ratio\config armazena dois arquivos importantes para a integração. Portanto, caso queira modificar alguns dados, em vez de executar uma nova instalação, pode apenas alterá-los nos arquivos abaixo: 1. AppSettings.config – tempo de intervalo de execução da integração e número de registros. Além destas duas informações, este arquivo possui a URL com que o sistema se comunicará. Para uso em homologação (testes internos), altere a URL https://ratio.alterdata.com.br para http://ratio-hml.alterdata.com.br; 2. ConnectionStrings.config – dados de acesso à base do Bimer; 2. Precisa trocar o passaporte que está vinculado à base de dados? Isso é possível removendo o registro do token do passaporte, na tabela “Configuracao”. O campo “NmConfiguracao” deve ser igual a ‘TokenPassaporte’; 3. A tabela Exportacao, no schema Integracao, demonstra (por meio do campo StExportado) se o registro já foi integrado, onde “1” representa que foi exportado e “0” que não foi exportado; 4. Fez alguma alteração no Bimer e quer que a informação chegue mais rápido no Ratio? Simples! Reinicie o serviço para “forçar” uma integração; 5. Carga não sendo efetuada para o Ratio? Muitas vezes, quando pegamos atendimentos de Ratio, existem casos em que a carga não está sendo efetuada por algum erro no envio das informações do a pagar ou do a receber. Na maioria dos casos pode haver títulos sem o IdNaturezaLancamento localizados nas tabelas APagar e AReceber. A informação da natureza de lançamento é necessária para a carga completa para o Ratio. Se ocorrer algum erro o restante da carga não é efetuada e com isso os dados que estão corretos não são enviados para o Ratio; 6. O diretório C:\TEMP\alterdata\integracao_ratio\logs armazena arquivos que demonstram alertas e erros ocorridos durante a instalação (Warn e Errors, respectivamente). Por meio desses arquivos, é possível descobrir até que ponto a integração funcionou e reduzir o escopo de uma possível análise complexa; 7. Caso esteja com problemas de integração, forneça permissão total nos diretórios do Ratio, além de adicionar os sites do passaporte e Ratio como confiáveis em Opções da Internet.


## Acesso ao sistema

Os clientes da Alterdata acessarão o Ratio pelo link https://ratio.alterdata.com.br. Para usar o Ratio em ambiente de teste, acesse o link https://ratio-hml.alterdata.com.br O acesso se dá através da autenticação por login e senha pelo passaporte.


## Criação de demonstrativos

Para cadastrar um novo demonstrativo basta clicar em “Novo”. Neste momento aparecerá uma tela com um alerta perguntado se deseja criar um demonstrativo utilizando o modelo padrão. Caso clique em “Sim” ele utilizará o padrão do SEBRAE e caso clique em “Não”, poderá cadastrar o seu próprio modelo. Para este exemplo, será utilizado o padrão do SEBRAE. Em seguida informe a descrição do demonstrativo e clique em “Gravar”. Após criar o demonstrativo, será possível alterar as configurações. Para isso clique em “Editar”. Na tela de edição note que o sistema já trará algumas linhas criadas. Porém, é preciso finalizar suas configurações. Para isso, clique em Editar na linha que deseja configurar.


## Composição da Linha por Valor

Campo “Número” – Identificação da linha atribuída automaticamente pelo sistema; Campo “Ordem” - Define a sequência que as linhas serão apresentadas na tela. Esse campo não tem vínculo com o campo “Número”; Campo “Descrição” - É o nome de exibição da linha. Por conveniência utiliza-se (+) para os valores que serão somados, (-) para os valores que vão subtrair e (=) para uma linha que faz um cálculo com outras linhas trazendo um resultado. Em “Tipo de linha” ao marcar a opção “Valor”, desabilitará o quadro “Fórmula”. E habilitará o quadro “Origem do cálculo”. Nesse local indique as variáveis que comporão o cálculo do valor que será apresentado nessa linha. Para isto, clique no campo “Buscar origens de cálculo”, selecione a origem desejada e clique em “Adicionar”.É possível adicionar mais de uma origem para a mesma linha. O sistema automaticamente somará todas as origens informadas no momento de exibição dos dados. Caso origem de cálculo selecionada seja relacionada à “títulos a receber” ou “títulos a pagar”, ao adicionar a origem será habilitada a opção “Naturezas”, que permite definir quais as naturezas lançamentos deverão ser consideradas para compor o valor.


### Origens de cálculo

Seguem as descrições sobre cada origem de cálculo disponível para composição de um DRE. Faturamento: • Vendas do período – Consideram-se como vendas os documentos fiscais emitidos, no período selecionado, com as operações informadas no Configurador bimer » Geral » Ferramentas » Opções de integradores » Ratio. Podem ser operações de venda ou saída. • ICMS sobre as vendas do período – Valor do ICMS dos documentos fiscais emitidos, no período selecionado, com as operações informadas no Configurador bimer » Geral » Ferramentas » Opções de integradores » Ratio. • IPI sobre as vendas do período – Valor do IPI dos documentos fiscais emitidos, no período selecionado, com as operações informadas no Configurador bimer » Geral » Ferramentas » Opções de integradores » Ratio. • Comissão sobre as vendas do período – Valor de comissão dos documentos fiscais emitidos, no período selecionado, com as operações informadas no Configurador bimer » Geral » Ferramentas » Opções de integradores » Ratio. Observação: O sistema desconsidera as devoluções e cancelamentos no período selecionado. Estoque: Para os valores referentes ao estoque o sistema considera os produtos referentes aos documentos fiscais filtrados para o resultado das vendas. • Custo das mercadorias vendidas no período (Contábil) – Refere-se ao CMV das vendas no período. CMV = Vl. do Estoque inicial + Vl. das Compras e entradas – Vl. do Estoque final. • Valor do estoque inicial do período – Valor referente ao estoque dos produtos vendidos no período, na data inicial do período. Exemplo: Se o período selecionado for de 01/01 à 31/12, então considera-se o estoque dos produtos no dia 01/01. • Valor do estoque final do período – Valor referente ao estoque dos produtos vendidos no período, na data final do período. Exemplo: Se o período selecionado for de 01/01 à 31/12, então considera-se o estoque dos produtos no dia 31/12. Receber: • Títulos a receber em aberto – Títulos, de previsão ou realizados, cujas datas de vencimento programado estejam dentro do período selecionado, e que estejam em aberto. • Títulos a receber no período – Títulos cujas datas de vencimento programado estejam dentro do período selecionado, independe do seu status. • Títulos de previsão a receber em aberto – Títulos de previsão cujas datas de vencimento programado estejam dentro do período selecionado, e que estejam em aberto. • Títulos a receber em aberto (sem previsão) - Títulos realizados cujas datas de vencimento programado estejam dentro do período selecionado, e que estejam em aberto. • Títulos a receber após o final do período – Títulos em aberto, cujas datas de vencimento programado sejam superiores à data final do período selecionado. Consideram-se títulos de previsão ou realizados, baixados ou abertos. • Títulos de previsão a receber após o final do período – Títulos de previsão cujas datas de vencimento programado sejam superiores ao período selecionado. • Títulos a receber após o final do período (sem previsão) - Títulos realizados cujas datas de vencimento programado sejam superiores ao período selecionado. • Títulos a receber duvidosos – Títulos a receber realizados sem data de baixa, com data de vencimento maior que 30 dias da data final, e que estevam em aberto no período selecionado. • Títulos recebidos no período – Títulos cujas datas de baixa sejam dentro do período selecionado, independente da data de vencimento programado. Pagar: • Títulos a pagar em aberto no período – Títulos, de previsão ou realizados, cujas datas de vencimento programado estejam dentro do período selecionado, e que estejam em aberto. • Títulos a pagar no período – Títulos cujas datas de vencimento programado estejam dentro do período selecionado, independe do seu status. • Títulos de previsão a pagar em aberto – Títulos de previsão cujas datas de vencimento programado estejam dentro do período selecionado, e que estejam em aberto. • Títulos a pagar em aberto (sem previsão) - Títulos realizados cujas datas de vencimento programado estejam dentro do período selecionado, e que estejam em aberto. • Títulos a pagar após o final do período – Títulos em aberto, cujas datas de vencimento programado sejam superiores à data final do período selecionado. Consideram-se títulos de previsão ou realizados, baixados ou abertos. • Títulos de previsão a pagar após o final do período – Títulos de previsão cujas datas de vencimento programado sejam superiores ao período selecionado. • Títulos a pagar após o final do período (sem previsão) - Títulos realizados cujas datas de vencimento programado sejam superiores ao período selecionado. • Títulos pagos no período – Títulos cujas datas de baixa sejam dentro do período selecionado, independente da data de vencimento programado.


## Composição de linha por Fórmula

Em “Tipo de linha” ao marcar a opção “Resultado”, habilitará o quadro “Fórmula”. Desta forma é possível criar uma fórmula de cálculo para determinar o valor da linha. Atenção: Na fórmula de cálculo pode-se utilizar somente as linhas em que o seu “Número” seja anterior ao número da linha que está realizando o cálculo. Por exemplo, se a linha 5 é do tipo “Resultado”, na fórmula poderá utilizar somente as linhas 4, 3, 2 e 1, não podendo usar as linhas de 6 em diante. O número da “Ordem” também influenciará da mesma forma que a linha, ou seja, considerando apenas as origens anteriores a referenciada no registro atual. Caso o número da ordem seja inferior ao da linha, a regra que vai prevalecer é com relação ao número da ordem. Para montar a fórmula, selecione uma linha e clique na seta para baixo, desta forma a mesma será incluída como variável na fórmula. Esta variável será representada entre colchetes, com o número da linha precedido da letra “L”. Ou então, poderá informar um valor numérico e clicar na seta para baixo para incluir na fórmula. O valor será incluído na fórmula sem nenhum colchete. Entre os números e as variáveis das linhas, usa-se os operadores matemáticos, bastando apenas clicar sobre o operador desejado. Caso queira validar, basta clicar no botão de check para verificar se tem alguma inconsistência na fórmula. Para limpar o campo da fórmula, basta clique no botão “X”. Com a opção “Resultado” marcada o quadro “Origem de cálculo” ficará desabilitado.


## Metas

No quadro de metas marque a opção “Meta” para habilitar os campos para edição. A meta pode ser por valor ou percentual. Marcando a opção por “Valor”, os campos “Indicador máximo”, “Indicador mínimo” e “Valor” serão tratados como valor e não será utilizado o campo “Linha”. • Campo “Indicador máximo” - Caso o valor da linha ultrapasse esse valor, será exibido uma seta para cima (⬆) na coluna “Indicador” na tela de processamento da DRE, informando que ultrapassou o valor da meta estipulada; • Campo “Indicador mínimo” - Caso o valor da linha esteja abaixo desse valor, será exibido uma seta para baixo (⬇) na coluna “Indicador” na tela de processamento da DRE, informando que está abaixo do valor da meta estipulada; • Campo “Valor” - Neste campo deverá informar o valor da meta que deseja alcançar. Caso o valor da linha esteja entre o valor do indicador máximo e mínimo, será exibido uma seta para a direita (➡) com a cor azul na coluna “Indicador” na tela de processamento da DRE, informando que o valor se manteve na meta. As setas para cima e para baixo dos indicadores poderão mudar de cor. As setas na cor verde (⬆⬇) indicam valores positivos, enquanto as setas em vermelho (⬆⬇) indicam valores negativos. Por padrão as setas para cima (⬆) são verdes, pois estão acima da meta e as setas para baixo são vermelhas (⬇), pois estão abaixo da meta. Por exemplo, se trabalharmos com valor de faturamento acima da meta, logo indicará uma seta para cima da cor verde, mostrando que ultrapassou o indicador máximo. Já no caso do faturamento ficar abaixo da meta, o sistema apresentará uma seta para baixo indicando que está abaixo do indicador mínimo e com a cor vermelha, pois é algo ruim para a empresa ter um faturamento abaixo da meta. Existem casos em que estar acima da meta não será algo positivo, por exemplo, no caso de uma linha referente ao valor de imposto de ICMS. Se estiver acima do indicador máximo apresentará uma seta para cima, porém pagar impostos além do esperado é algo negativo, neste caso a seta deveria ser apresentada em vermelho e não em verde. Para isto deverá marcar a opção “Apresentar valor superior a meta como negativo”. Com esta opção marcada, caso o valor da linha esteja acima do indicador máximo ele vai apresentar a seta para cima e com a cor vermelha (⬆). Caso o valor da linha esteja abaixo do indicador mínimo, será apresentado a seta para baixo e com a cor verde (⬇). Veja abaixo um exemplo de como será apresentada após o processamento, da linha“(+) Faturamento (Vendas – Trocas/Devoluções)”, com a linha do tipo “Valor”, com origem de cálculo “Vendas do período”. A meta será por valor. O valor da meta é de R$ 2.000,00, o indicador máximo é R$ 2.010,00 e o indicador mínimo é de R$ 1.990,00. Note que a opção “Apresentar valor superior à meta como negativo” está desmarcada, pois nesse caso quando o faturamento for acima da meta será algo positivo. Após realizar o processamento desta linha veja a equiparação: Na coluna “Valor” será apresentado o valor já processado da linha, que neste caso utiliza a origem “Vendas do período”. Na coluna meta, o mesmo trará o dado do campo “Valor” que foi configurado na linha. Como o valor da linha de R$ 183.857,86 é superior ao indicador máximo que foi configurado com o valor de R$ 2.010,00, logo será exibido na coluna indicador uma seta para cima e como a opção “Apresentar valor superior a meta como negativo” estava desmarcada, será apresentada com a cor verde, por se tratar de um indicador positivo para a empresa. O “% meta atingida” é calculado da seguinte forma: % meta atingida = (Valor * 100) / Meta % meta atingida = (183.857,86 * 100) / 2.000,00 % meta atingida = 18.385.786,00 / 2.000,00 % meta atingida = 9.192,893% Outra forma de se trabalhar com meta é através de “Percentual”. Ao marcar esta opção, os campos “Indicador máximo”, “Indicador mínimo” e “valor” trabalharão em cima do percentual e não do valor como foi visto. Diferente de quando se trabalha com valor, o percentual trabalha em conjunto com o campo “Linha”, para selecionar uma outra linha de referência para calcular a meta. Dessa forma quando se trabalha com percentual o valor da meta será obtido através do percentual (informado no campo valor) da linha informada (no campo linha). Neste caso, após o processamento, veja que na configuração foi informado a “Linha” referente ao “(+) Faturamento (Vendas – Trocas/Devoluções)”, mais especificamente, faz referência ao valor de R$ 183.857,86 desta linha referenciada. E o valor da meta do “(-) ICMS” que é o que está sendo configurado, será calculado pegando o valor da seguinte forma: Meta = (Valor da do campo Linha) x (Valor percentual da configuração) Meta = R$ 183.857,86 * 19,00% Meta = 34.932,99 Neste caso calculando o percentual mínimo e máximo, teremos os seguintes valores: Meta = 34.932,99 *Valor = 34.932,98 Max = 183.857,86 * 19,01% Max = 34.951,37 Min = 183.857,86 * 18,99% Min = 34.914,60 Logo, pode-se concluir que o *valor está abaixo do máximo e acima do mínimo, ficando assim com o indicado com seta para direita com a cor azul (➡). Assim, esse valor atingiu exatamente 100% da meta conforme pode ser visto no campo %meta atingida. Nesta outra composição de linha “(-) Comissões”, veja que o valor da linha é maior que o valor do indicador máximo. Valor comissões = 9.192,87 Max = 183.857,86 x 2,01% Max = 3.695,54 Logo, o valor da comissão é superior ao máximo. Dessa forma a seta será para cima ( ). ⬆ Como a opção “Apresentar valor superior à meta como negativo” está marcada, então a cor da seta em vez de ser apresentada como verde, ficará como uma seta vermelha para cima ( ). ⬆


## Customização

Neste local será possível customizar a visualização das linhas. Campo “Cor” - Poderá selecionar a cor que a linha será apresentada tanto na composição como na tela de resultados; Campo “Negrito” - Esta opção define se o texto da linha ficará ou não em negrito; Campo “Alinhar a direita” - Por padrão os textos das linhas são alinhados à esquerda, mas marcando esta opção o texto será alinhado à direita.


## Linha para percentual

Na tela de edição, a opção chamada “Valor proporcional em relação a linha” tem como objetivo realizar uma comparação entre a linha atual e a linha selecionada no campo “Valor proporcional em relação a linha”. No resultado, a linha referenciada ficará na coluna “Linha para percentual”. Neste exemplo o valor de “(-) ICMS” representa 19% do valor de “(+) Faturamento (Vendas – Trocas/Devoluções)”, conforme é indicado na coluna “% sobre a linha”. A tabela abaixo apresenta de forma mais clara a relação das linhas. Atenção Usando o padrão do SEBRAE será criado uma linha chamada “Títulos a receber duvidosos”. O sistema considera como títulos duvidosos os títulos vencidos a mais de 30 dias. Ao finalizar o cadastro e a configuração de cada uma das linhas, a tela ficará desta forma: Em seguida, clique em “Gravar” para salvar as configurações realizadas no demonstrativo.


## Outras funções da tela de demonstrativo

Existe a possibilidade de criar categorias para os demonstrativos, para isso basta clicar em “Nova” no campo de categoria. Em seguida abrirá a tela abaixo, nela deverá informar o nome da nova categoria e clicar em “Salvar”. Em seguida poderá informar a qual categoria o demonstrativo se refere: Por padrão, a configuração de demonstração é visível apenas para o usuário que criou, caso deseje compartilhar com outras pessoas, deverá marcar a opção “Compartilhar”. Dessa forma ficará visível para os outros usuários na aba “Demonstrativos compartilhados”, mas não há permissão de edição. Além da possibilidade de utilizar as linhas que vem no padrão do SEBRAE, é possível criar outras linhas. Para isto, basta clicar em“Adicionar linha” e informar normalmente os dados de configuração das linhas.


## Resultados

Após gravar e configurar os demonstrativos desejados, visualize o resultado da DRE acessando a tela inicial e clicando em “Visualizar” no demonstrativo desejado. Na próxima tela, selecione a(s)empresa(s) e operíodo que deseja consultar, e clique em processar. Por padrão, todas as empresas vêm selecionadas, porém escolha se a DRE será só de uma ou todas as empresas. Em seguida será apresentado o resultado na tela de processamento, com cada umas das linhas que foram configuradas e explicadas anteriormente: Na parte superior poderá definir a data de processamento do período que deseja gerar a DRE. Para cada processamento que realizar o sistema criará uma nova aba para cada faixa de data, para que possa fazer uma comparação entre as faixas de datas desejadas. Ao marcar a opção “Apresentar valores por mês” o mesmo apresentará os valores das linhas de forma mensal conforme a imagem abaixo: Em cada uma das linhas poderá clicar no ícone (i) de informações, que mostrará como foram realizados os cálculos da linha.


## Gráficos

Novamente na tela de edição de qualquer um dos demonstrativos, na parte inferior tem a opção de “Construir gráfico”,o qual permite criar um gráfico baseado no demonstrativo atual. Na tela seguinte deverá dar um nome ao gráfico através do campo “Descrição do gráfico”. No campo“Período para exemplo” informe o período que deseja coletar os dados para a montagem do gráfico. No quadro“Selecione as linhas” marque quais as linhas do demonstrativo configuradas anteriormente comporão o gráfico. No quadro “Selecione o tipo de gráfico”, definindo a forma que deseja visualizar, entre as opções linha ou coluna. Em seguida clique em “Próximo”. Caso tenha marcado o tipo “Por linha”, será gerado um gráfico conforme demonstrado abaixo: O gráfico mostra os valores de cada linha da demonstração de forma mensal, ao posicionar o mouse sobre a linha, o mesmo informará o valor naquele período. Na parte inferior correlaciona a cor da linha com a sua respectiva definição. Ao marcar a opção “Por coluna” na criação do gráfico, o mesmo é apresentado como na imagem abaixo. Após isso, poderá salvar o gráfico para consultas posteriores clicando em “Salvar gráfico”.


## Exemplos de DRE

O cálculo de DRE pode ser realizado de várias formas dependendo do que se deseja analisar. Seguem abaixo alguns exemplos que poderão ajudar:


## Receita Bruta

Representa as operações recorrentes da empresa com relação a produtos e/ou serviços vendidos no período do exercício. Neste tipo de receita não serão deduzidas as despesas. Para este tipo de DRE poderá utilizar a origem de dados: “Vendas do período”.


## Receita Operacional Líquida

Esse é o resultado da receita operacional menos vendas canceladas, impostos que incidem sobre as vendas e abatimentos sobre as vendas. Esse valor é voltado para a cobertura das despesas e dos custos da empresa. Para este tipo de DRE poderá realizar um calculo com as origens de dados: “Vendas do período” - “ICMS sobre as vendas do período” - “IPI sobre as vendas do período” - “Comissão sobre as vendas do período” - “Custo das mercadorias vendidas no período – Contábil”. Observação: A receita líquida pode variar de empresa para empresa com relação ao que será ou não considerado na dedução do valor da venda.


## Impostos que incidem sobre as vendas

Está relacionado ao resultado com os valores totais de impostos pagos sobre as vendas. Para este tipo de DRE poderá realizar um cálculo com as origens de dados: “ICMS sobre as vendas do período” + “IPI sobre as vendas do período”. Observação: Por enquanto o sistema apenas traz os tributos de IPI e ICMS, mas futuramente serão considerados outros impostos vinculados a venda como PIS/COFINS e ISS. Custo de serviços e mercadorias vendidas Calcula-se os elementos que envolvem todos os gastos relativos à produção. Para este tipo de DRE poderá utilizar a origem de dados: “Custo das mercadorias vendidas no período – Contábil”.


## Opções

Ao clicar no botão “Limpar base de dados” a base de dados do Ratio no PostgreSQL será zerada.
