# Integração Bimer x Fiscal — Movimentos Específicos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Registro 014](#registro-014)
- [Geração](#geracao)
- [Importação no Fiscal](#importacao-no-fiscal)
- [Registro 017](#registro-017)
- [Geração](#geracao)
- [Importação no Fiscal](#importacao-no-fiscal)
- [Bloco H](#bloco-h)
- [Geração](#geracao)
- [Importação no Fiscal](#importacao-no-fiscal)
- [Diferencial de Alíquotas –](#diferencial-de-aliquotas)
- [Entrada](#entrada)
- [Geração](#geracao)
- [Importação no Fiscal](#importacao-no-fiscal)
- [Conhecimento de](#conhecimento-de)
- [Transporte](#transporte)
- [Geração](#geracao)
  - [Nota Fiscal de Entrada](#nota-fiscal-de-entrada)
  - [Faturamento](#faturamento)
- [Importação](#importacao)
- [Movimento de Impressora](#movimento-de-impressora)
- [Fiscal](#fiscal)
- [Bloco K](#bloco-k)
- [ICMS Efetivo, ICMS ST e FCP](#icms-efetivo-icms-st-e-fcp)
- [ST retidos](#st-retidos)
- [Geração](#geracao)
  - [Nota Fiscal de Entrada](#nota-fiscal-de-entrada)
  - [Faturamento](#faturamento)
- [Importação no Fiscal](#importacao-no-fiscal)
- [Modelo 66 e 67](#modelo-66-e-67)
- [Introdução](#introducao)
- [Geração](#geracao)
- [Importação no Fiscal](#importacao-no-fiscal)

---


## Introdução

A essa altura você já deve ter aprendido como configurar o sistema e como executar a rotina de integração, certo? Agora que já aprendemos o arroz com feijão, vou te contar um segredo: a integração leva movimentos bem específicos como CT-e, inventário, bloco K e bloco H. Vem comigo que vou te mostrar vários desses movimentos.


## Registro 014

Leva os dados de cadastro de produtos.É usado quando é necessário apenas importar os itens no fiscal para fazer novos cadastros, ou quando é preciso atualizar alguns dados como o NCM dos produtos que estão diferentes em relação aos dados do Bimer.


## Geração

Para gerar no Bimer acesso o módulo Cadastro de Produtos / clique em Resumido: Na primeira tela selecione Novo Cenário e em seguida escolha um nome: Em seguida, selecione o layoutExportacao_Produto2013.rtm,marque os filtros desejados, avance e escolha a empresa e clique em Imprimir: Na tela que se abre selecione a opçãoImprimir para arquivo (ou Exportar, dependendo da versão do Windows), selecione Arquivo de Texto: Ao clicar no botão do campo Onde indique o local onde você quer guardar o arquivo. Escolha um nome e diretório, e clique em Salvar. Basta clicar em Ok para gerar. Ao abrir veja o registro 014 sendo gerado:


## Importação no Fiscal

Acesse a aba Lançamentos / Importação e Exportação / SPED (Layout Alterdata) / selecione o arquivo, marque Somente Cadastro de Produto, marque Atualizar produtos (usada para atualizar dados já existentes em caso de mudanças). A opção Utilizar código EAN no Código específico é usada quando os produtos no Bimer possuem este código, conhecido como código de barras, assim o usuário pode escolher este como o código de chamada do produto. Para importar clique em Concluir:


## Registro 017

Leva a informação das duplicatas/parcelas da Fatura baixada da Nota Fiscal, Nota de ISS Saída ou ISS Tomador.


## Geração

Para configurar o sistema siga os passos: • No sistema Bimer, acesse o Configurador / Estoque / Opções / Integração Fiscal / Financeiro marque Habilitar exportação de dados para o fiscal no BI Financeiro, para regime de caixa: ◦ Preencha os códigos de operações no WFiscal para títulos a receber e a pagar. Isso faz com que todo novo título gerado pelo sistema possua esse código preenchido por padrão. Se essa informação não estiver no título não conseguimos gerar o arquivo. ▪ No sistema Fiscal consulte esse código pelo menu Cadastros / Operações de Receita / Dedução. • Acesse o módulo BI Financeiro, clique em Alternar filtro/resultado: ◦ Em Área de pesquisa, marque Por baixa, selecione Tipo de títulos (A pagar ou A Receber, ou ambos), escolha a Empresa e marque Considerar empresa de cadastro do título, informe as Datas para filtro e clique na parte superior em Filtrar: Veja o resultado, e clique em Exportar Wfiscal. Na tela que se abre indique oDiretório referente aos títulos vinculados a documentos e Exporte: Abra o arquivo e veja os dados:


## Importação no Fiscal

Acesse a abaLançamentos / Importação e Exportação / SPED (Layout Alterdata) / selecione o arquivo. Você pode selecionar Não importar retenção da baixa de duplicatas caso deseje. Para importar clique em Concluir: Se liga nas seguintes dicas para conseguir importar corretamente: • A duplicata precisa estar no sistema Escrita Fiscal com a mesma data de vencimento e número do título no Bimer; • No cadastro de empresas do Bimer, é necessário preencher o código da empresa no Escrita Fiscal. Se não fizer isso, a posição 02 a 04 no registro 017, com o código da empresa, não é preenchido e impede a importação no Fiscal; • No título do Bimer veja que na aba Complementar, há o campo Código da operação no Wfiscal que deve sempre estar preenchido:


## Bloco H

O bloco H no SPED ICMS e IPI é o responsável pelo movimento de inventário.


## Geração

Primeiro, faça os seguintes passos: • Acesse Configurador / Estoque / Opções / Integração Fiscal e marque a opçãoHabilitar exportação de dados para o fiscal no relatório de inventário. • No Configurador / Estoque / Opções / Inventário, localize o campo Número de casas decimais para o valor unitário para o inventário e preencha para que o sistema também considere os valores com vírgula (ex.: 5,75). Se não tiver nada preenchido o sistema arredonda o valor para cima (ex: em vez de 5,75 arredonda para 6). • Acesse o móduloRelatórios de estoque.Após, vá ao menuRelatórios / Inventário, na tela dos parâmetros informe: • Mês/Ano Referência:Com o mês que possui o saldo que levará para o inventário; • Tipo de relatório: Escolha o tipo de custo que será usado para a coluna valor unitário do item; • Número de casas decimais para a quantidade em estoque:Informe a quantidade para este campo, principalmente quando trabalho com medidas fracionadas como quilograma, metro e litros. Clique em Exportar. Na próxima tela clique na pasta amarela, informe o diretório e a descrição do arquivo a ser criado no campo Nome. Após, clique em Abrir. Por fim, clique em Gerar TXT e confirme a geração do arquivo. No sistema Escrita Fiscal basta realizar a importação do arquivo TXT pelo menu Lançamentos / Inventário e estoque / Inventário Personalizado. Para facilitar segue abaixo a estrutura de importação no Arquivo e como é gerada cada coluna: Alguns detalhes dos campos: • O nome dos campos na imagem acima, é para facilitar a importação no Wfiscal, pois colocamos a mesma descrição do módulo Importador. • Campo 03: No Bimer conhecemos o NCM como Classificação Fiscal do produto. • Campos 05 e 06: Código e nome dos grupos vinculados nos produtos. • Campo 08: Percebeu que a quantidade está negativa? Isso pode ocorrer por alguns motivos no Bimer, um exemplo: Lançar mais saídas do que entradas do produto (o sistema tem configuração para permitir venda com estoque negativo). É importante tomar cuidado, pois o SPED do governo (obrigação fiscal) não permite isso e gera erros. Assim o contador junto ao cliente decidirão o que fazer nesta situação, algumas opções: ◦ Na tela de geração do arquivo marcar as opções Não imprimir produtos com quantidade negativa ou Não imprimir produtos com quantidade zerada. ◦ Ajustar os lançamentos para que o saldo fique positivo, lançando as notas que estão faltando. • Campo 09: Representa o valor de custo do produto. Pode ser o custo médio ou de reposição, de acordo com a marcação no ato da geração. • Campo 10: É a alíquota de ICMS interna do estado da empresa que está gerando o arquivo, presente no Configurador / Geral / Endereço / UF.


## Importação no Fiscal

Acesse a aba Lançamentos / Inventário e estoque / Inventário Personalizado. Informe a empresa, marque Código específico selecione o período de geração do movimento e clique em Concluir: Em seguida marque Texto (*.txt). Ao avançar, informe o arquivo a ser importado clicando no botão abaixo: Acima de Abrir, selecione a opção Texto (*.txt), selecione o arquivo e clique e Abrir: Marque as opções Delimitado – Caracteres como vírgula ou tabulação separam cada campo e marque Ponto e vírgula. É necessário informar se os dados de produtos começam na primeira linha ou não. Isso porque pode ser que a primeira linha esteja pulada ou tenha algum tipo de título. Ao chegar na tela abaixo, selecione como na imagem abaixo: Se liga! Para facilitar a importação vá no tópico Geração, na parte estrutura de importação no Arquivo,e veja o nome de cada coluna gerada no Bimer em comparação com o Wfiscal. O grupo Inventário não é utilizado no sistema Wfiscal, embora seja gerado no arquivo, portanto sua informação é indiferente nesta rotina. Vá avançando até chegar na tela abaixo e clique em Executar: Consulte o movimento importado em Lançamentos / Inventário e estoque / Movimento de Inventário, indique a empresa e o período: Ei, que tal uma dica: O arquivo do Bimer ERP, não vem o campo Conta do Inventário que é obrigatório na validação do SPED ICMS e IPI. Se o cliente desejar preencher essa informação em massa no fiscal, é só clicar no botão da Engrenagem (último botão da tela de Movimento de Inventário


## Diferencial de Alíquotas –


## Entrada

Se a empresa compra mercadorias para uso e consumo (ex.: materiais de higiene para a empresa) ou ativo imobilizado (ex.: eletrodomésticos para uso dos funcionários como geladeira), em que a alíquota de ICMS da nota é menor que a alíquota interna de ICMS do estado da empresa, é necessário calcular um valor adicional de ICMS, que é exatamente essa diferença entre as duas alíquotas (por isso o nome desse imposto é diferencial de alíquotas). Ex.: Empresa do RJ comprou do fornecedor de Maranhão, um micro-ondas no valor de R$ 100,00. Alíquota de ICMS aplicada na nota é de 7%, a alíquota interna de ICMS é de 20%, assim quanto é o diferencial? Acertou se você disse 13%! (20%-7%). Para que funcione no Bimer faça o seguinte:


## Geração

• Acesse Configurador / Estoque / Operação / Selecione a operação da Nota / Aba Integração fiscal / marque a opção Calcula diferencial de alíquota: Ah, não esqueça que a operação deve ser de compra ou entrada. • Acesse Configurador / Geral / Endereço / UF / Localize o estado da empresa compradora e informe a alíquota de ICMS interna (que precisa ser maior que a alíquota de ICMS da nota): • Lance a nota de compra / entrada com os dados configurados nos passos anteriores, deve ser de um fornecedor de outro estado. Após, realize a liberação da nota pelo módulo Liberador de estoque. • No Configurador, faça a leitura e exportação de dados desta nota para gerar o arquivo SPED Layout Alterdata.


## Importação no Fiscal

Para importar o arquivo no Escrita Fiscal, acesse a aba Lançamentos / Importação e Exportação / SPED (Layout Alterdata) / marcando a opção Movimentação. Para conferir os dados acesse a aba Lançamentos / Nota Fiscal / Nota Fiscal. Localize a nota, na aba “Diferencial de alíquota” veja que o diferencial de alíquotas é lançado:


## Conhecimento de


## Transporte

É comum nas operações de entrada e saída ter o conhecimento de transporte vinculado às notas, também conhecido com CT-e, pois como as mercadorias não vão e vêm sozinhas, é necessário um veículo para transportar os produtos. E o legal é que tem como enviarmos esses documentos para o fiscal, bora ver como?


## Geração

Como estamos falando de dois tipos de movimento, entrada e saída, veja como deve ser lançado no sistema a partir de cada módulo para a integração dar certo.


### Nota Fiscal de Entrada

Há duas formas de lançar o valor de CT-e na nota de entrada:Manual e pela importação do XML de CT-e. Independentemente do modo como o cliente lança, o CT-e é integrado com o Fiscal. Vamos ver cada uma delas: 1.Lançamento Manual: É feito na abaConhecimento de Transporte / Lançamento manual de transporte / Dados do transporte: Apesar de não aparecer na imagem, é necessário informar também a chave de acesso do CT-e para que não ocorram erros no Fiscal. 2.Importação de CT-e: A partir da versão 9.01.05.01 do Bimer, os documentos importados e vinculados às notas de entrada são levados na integração. Pela aba Conhecimento de transporte / Conhecimento de transporte eletrônico, o usuário pode importar e vincular o CT-e à nota de entrada. Dúvida! Mas e se o cliente possuir mais de um CT-e na nota, todos serão integrados com o fiscal? A resposta é sim, é só vincular quantos CT-es forem necessários e após realizar a integração com o fiscal. Outra dúvida! E se o cliente quiser importar um CT-e que não está vinculado a uma nota fiscal, importa também? Sim! A partir da versão 11.01.02.00 é possível importar os CT-es, mesmo que não estejam vinculados a notas fiscais. Para isso, basta importar no módulo CT-e e, na tela da leitura de dados, é só manter marcada a opção correspondente.


### Faturamento

O lançamento é feito pela aba ACT, Veja que para a integração não mostrar erros preenchi todos os campos. Na AbaTransportadoraselecione quem levará as mercadorias para o destinatário. Depois de lançados os documentos, no configurador Bimer faça aleitura e exportação de dados para gerar o arquivo SPED Layout Alterdata. Antes de você importar no fiscal, veja como fica o conhecimento de transporte na tela de Documentos do Configurador Bimer: Viu ali? Ele fica na cor roxa. Se tiver algum erro, clique no botão Log de erro e corrija antes de mandar o documento. Veja um exemplo: No arquivo SPED Alterdata são alimentados alguns registros como o 001 (com os dados da nota) e o 003 (com a pessoa que fez o transporte). Só mais uma coisa: Cada documento será levado de acordo com sua data, isso quer dizer que se a data do CT-e estiver no mês 01 e a da nota no mês 02, cada movimento será levado no arquivo no respectivo mês. Em relação à leitura de dados, ao fazer o filtro de uma nota que possua CT-e vinculado, este será levado para a tela de documentos independentemente de sua data. No Bimer tudo certo! E no fiscal o que faço? Vem comigo!


## Importação

Para importar o arquivo no Escrita Fiscal, acesse a aba Lançamentos / Importação e Exportação / SPED (Layout Alterdata) / marcando a opção Movimentação. Para conferir os dados acesse a aba Lançamentos / Nota Fiscal / Nota Fiscal. Localize a nota pelo Tipo de Entrada ou Saída: Caso o CT-e ou ACT esteja vinculado a uma nota fiscal, os dois documentos serão mostrados no Fiscal. Caso o CT-e tenha sido importado avulso, ou seja, sem vínculo com nota fiscal, aparecerá sem a nota fiscal. A mesma lógica acontece para o preenchimento dos dados da nota fiscal vinculada, ou não, ao CT-e.


## Movimento de Impressora


## Fiscal

• A NFC-e (Nota Fiscal ao Consumidor Eletrônica) leva essa informação no arquivo SPED Alterdata, no entanto, a operação não pode ter a marcação Imprime cupom fiscal na aba Cupom fiscal:


## Bloco K

É o movimento de Controle e Produção de estoque. Caso queira ver mais informações sobre a integração do Bloco K veja o artigo: https://ajuda.alterdata.com.br/bimerbase/bimer-estoque/integracao-fiscal-bloco-k A versão 11.01.01.00 do Bimer trouxe um recurso importante na geração do bloco K. O sistema Wise PCP passou a ter a rotina de desmontagem. As movimentações geradas nessa rotina serão levadas para o Bloco K a partir dessa versão. Se quiser saber mais sobre a rotina de desmontagem, clique aqui para consultar o manual do Wise PCP. Observação: na versão 11.01.05.00 o cliente pode fazer a leitura/exportação do bloco K pela tarefa do GEAgente que já existia. Para isso, basta criar e agendar a tarefa utilizando o sistema 000210 – Leitura e exportação integração fiscal. No cadastro da tarefa agendada, aba Leitura/Exportação integração fiscal, o cliente deverá marcar a opção “Bloco K”. Ele poderá criar tarefas separadamente para que as rotinas sejam executadas em momentos diferentes.


## ICMS Efetivo, ICMS ST e FCP


## ST retidos

A partir da versão 10.00.14.00 do Bimer, as notas que possuírem valores de ICMS ST e FCP Retidos, ICMS Efetivo e valor de ICMS ST Substituto, serão exportados nos registros 010 do SPED Layout Alterdata. A nota lançada pode ser de entrada ou de saída. Você precisa também da versão 7.1030 ou superior do Wfiscal do Pack para que a importação dos campos seja bem-sucedida. Dê uma olhadinha aqui! Neste material vamos bem direto ao ponto na integração do ICMS Efetivo com o Fiscal. Se desejar saber como configurar no sistema acesse os seguintes artigos do Ajuda: • https://ajuda.alterdata.com.br/bimerbase/bimer-faturamento/icms-efetivo- icms-st-e-fcp-st-retidos • https://ajuda.alterdata.com.br/bimerbase/bimer-estoque/icms-st-e-fcp-st- retidos


## Geração


### Nota Fiscal de Entrada

Abra a nota fiscal / aba Produtos / selecione o item desejado / Impostos, acesse os campos de ICMS ST Retido e preencha os dados (de acordo com a situação do lançamento): Depois de lançados os documentos, no configurador Bimer faça aleitura e exportação de dados para gerar o arquivo SPED Layout Alterdata. Detalhe dos registros gerados: • Valor de base ICMS ST Retido - Posição 1467 a 1480 • Alíquota de ICMS ST Retido - Posição 1481 a 1485 • Valor ICMS ST Retido - Posição 1500 a 1513 • Valor de base FCP ST Retido - Posição 1514 a 1527 • Alíquota de ST FCP Retido - Posição 1528 a 1532 • Valor de ST FCP Retido - Posição 1533 a 1546


### Faturamento

Acesse a nota / aba Itens da nota fiscal / Complementar e preencha os campos de ICMS / ICMS ST retido e ICMS Efetivo: Depois de lançadas as notas, no configurador Bimer faça a leitura e exportação de dados para gerar o arquivo SPED Layout Alterdata. Detalhe de todos os registros gerados: • Valor ICMS ST Substituto - Posição 1486 a 1499 • Valor de base ICMS ST Retido - Posição 1467 a 1480 • Alíquota de ICMS ST Retido - Posição 1481 a 1485 • Valor ICMS ST Retido - Posição 1500 a 1513 • Valor de base FCP ST Retido - Posição 1514 a 1527 • Alíquota de ST FCP Retido - Posição 1528 a 1532 • Valor de ST FCP Retido - Posição 1533 a 1546 • Alíquota de Redução ICMS Efetivo Base - Posição 1547 a 1560 • Valor de Base ICMS Efetivo - Posição 1561 a 1574 • Alíquota de ICMS Efetivo - Posição 1575 a 1579 • Valor de ICMS Efetivo - Posição 1580 a 1593 • Percentual da Redução de base do ICMS – Posição 1594 a 1598 • Percentual da Redução de base do ICMS ST – Posição 1599 a 1603 Para você entender melhor: No arquivo SPED Alterdata veja os campos de valor de Base ICMS Efetivo (a partir da posição 1561), seguido da alíquota e valor do tributo:


## Importação no Fiscal

Daqui para frente falaremos sobre a entrada e saída de modo conjunto, pois o processo é o mesmo. Para importar o arquivo no Escrita Fiscal, acesse a aba Lançamentos / Importação e Exportação / SPED (Layout Alterdata) / marcando a opção Movimentação. Para conferir os dados acesse a aba Lançamentos / Nota Fiscal / Nota Fiscal / Entrada ou Saída. Localize o documento e clique duas vezes sobre ele. Vá na aba Itens da nota e clique em Detalhar ICMS ST:


## Modelo 66 e 67


## Introdução

A Nota fiscal de energia elétrica eletrônica (NF3-e), modelo 66 e o CT-e para outros serviços, modelo 67 são notas lançadas como entrada no Bimer, e advinha? São integradas com nosso querido fiscal! Saiba mais! Neste material não aprofundaremos a teoria dessas notas, mas vou deixar algumas dicas: 1.Os tributos da nota de energia são calculados como em uma nota eletrônica comum, ou seja, se pode tributar ICMS, PIS e COFINS por exemplo.

2. Se desejar saber mais sobre a nota de energia veja a norma técnica:
https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx? conteudo=Li420kNzaH0=


## Geração

• Acesse Produtos e inclua o item para energia elétrica ou serviço de transporte. Este produto será lançado como se fosse uma nota de compra comum: • Cadastre o tipo de documento e informe o modelo para geração da nota 66 ou 67: • Inclua uma operação de compra / entrada, marque os tributos que serão calculados na nota, informe o tipo de documento cadastrado no passo anterior e os CFOPs. Ah, não esqueça de marcar a opção “Atualiza Escrita Fiscal”: • Lance a nota fiscal de compra / entrada no módulo Nota Fiscal de Entrada. Utilize a operação e produto cadastrados nos passos anteriores. Depois é só liberar a nota fiscal.


## Importação no Fiscal

Para importar o arquivo no Escrita Fiscal, acesse a aba Lançamentos / Importação e Exportação / SPED (Layout Alterdata) / marcando a opção Movimentação. Acessando a tela de movimento normal de notas ou a aba Lançamentos / Notas fiscais e produtos você observa as notas integradas: Se liga! Nas notas fiscais, as abas“SPED” e “Complemento” devem ser ajustadas pelo usuário
