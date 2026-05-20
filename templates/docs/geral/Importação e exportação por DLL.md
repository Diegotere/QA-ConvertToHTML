# Importação e Exportação por DLL — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Configurações](#configuracoes)
- [Cadastro de Importações/exportações de dados](#cadastro-de-importacoesexportacoes-de-dados)
- [Importação e Abas](#importacao-e-abas)
  - [Dados](#dados)
  - [Spy System](#spy-system)
  - [Parâmetros](#parametros)
  - [Entidade externa](#entidade-externa)
- [Exportação](#exportacao)
- [Rotina](#rotina)
- [Modo Manual](#modo-manual)
- [Modo Automático](#modo-automatico)
- [Análise do Arquivo](#analise-do-arquivo)
- [Arquivo de Exportação](#arquivo-de-exportacao)
- [Arquivo de Importação](#arquivo-de-importacao)

---


## Introdução

O Bimer possui uma ferramenta poderosa de "conversa" com outros sistemas. Imagine que ele fala línguas diferentes através de pequenos tradutores chamados DLLs. Essas DLLs permitem que você traga informações de fora (importação) ou envie dados do Bimer para outros softwares (exportação), como pedidos de vendas, títulos financeiros e cadastros de produtos.  Importação: Trazendo dados para o Bimer O objetivo aqui é pegar um arquivo de dados (geralmente enviado por um fornecedor ou outro software) e transformá-lo em registros dentro do seu sistema. O passo a passo é simples: 1.Recebimento: Você obtém o arquivo de dados. 2.Armazenamento: Salve este arquivo em uma pasta específica no seu computador ou servidor. Dica: Essa pasta deve ser exatamente a mesma que foi definida nas configurações da sua DLL no Bimer. Se o caminho estiver errado, o sistema não encontrará o arquivo. 3.Processamento: O Bimer lerá o conteúdo e gravará as informações no banco de dados. Como saber se deu certo? O sistema te dá uma resposta visual por meio do nome do arquivo na pasta: • ✅Sucesso: O arquivo ganha a extensão.OK (Ex:pedidos.txt.OK). Isso indica que os dados já estão no sistema. • ❌Falha: O arquivo ganha a extensão .ERRO (Ex: pedidos.txt.ERRO). Isso acontece se houver alguma "inconsistência" (como um código de produto que não existe ou um valor inválido).  Exportação: Enviando dados para fora A exportação funciona como uma "impressão" de dados em um arquivo, para que outro sistema possa ler o que aconteceu no Bimer. Neste processo, a DLL trabalha nos bastidores fazendo três verificações cruciais: 1.Filtro: Ela identifica quais informações precisam ser enviadas (ex.: apenas as vendas do dia). 2.Formatação: Ela organiza os dados (garante que datas e valores fiquem no padrão correto). 3.Criação: Ela gera o arquivo final com o nome e tipo combinados. Assim que o processo termina, o arquivo aparece automaticamente na pasta configurada, pronto para ser enviado ou lido pelo sistema de destino. Quer saber mais? Você já sabe que o Bimer usa DLLs para integrar dados, mas o que isso significa na prática? Pense na DLL como um "módulo de inteligência" especializado. O Bimer é o corpo do sistema, e as DLLs são habilidades específicas que você adiciona a ele. Por que usamos DLLs diferentes? Como cada fornecedor, ou banco de dados, envia arquivos em formatos próprios (uns usam colunas, outros usam pontos e vírgulas, alguns usam textos longos), o sistema precisa de um "tradutor" específico para cada situação. Cada DLL tem uma missão única, como: • Tradução de Layout: Ler o arquivo do fornecedor e "explicar" para o Bimer onde está cada informação. • Cálculos Automáticos: Realizar contas complexas durante a transferência de dados. • Geração de Relatórios: Criar arquivos de texto ou mensagens de erro detalhadas quando algo sai do esperado. Regras para o funcionamento Para que a sua integração não pare, existem dois pontos críticos que você precisa observar: 1.A DLL é obrigatória: Sem esse arquivo instalado e configurado, o Bimer não "aprende" a ler aquele formato específico. A função de importar ou exportar simplesmente não funcionará. 2.Versão é Tudo: Ter a DLL nem sempre é suficiente; ela precisa estar atualizada. Atenção:Se o seu fornecedor mudar o layout do arquivo e você continuar usando uma DLL antiga, o sistema poderá apresentar erros ou importar dados de forma incorreta. Mantenha suas "habilidades" sempre na versão mais recente! Acho que você entendeu o que eu quero dizer, não é? Vem comigo para configurar seu Bimer!


## Configurações


## Cadastro de Importações/exportações de dados

Acesse o Configurador / Geral / Importações/exportações de dados para visualizar o painel com todas as DLLs configuradas: Vamos dar uma olhada em como cadastrar cada tipo de DLL:


## Importação e Abas


### Dados

• Empresa e Nome da Operação:Se o cadastro for específico para uma empresa, selecione-a e dê um nome para o cadastro realizado; • Tipo: Marque “Importação”; • Quadro “Validação de registros – Caso algum registro para a importação não seja válido”: ◦ Importar registros mesmo assim: Mesmo que o sistema identifique erros nos dados, a importação será feita, inserindo os registros, com erros, na base; ◦ Não importar registros com erro: Quando o Bimer identificar que o registro está com erro, ele não o importará, e importará somente os que estiverem corretos; ◦ Não importar nenhum registro do arquivo com erro: Ao identificar que algum registro está com erro, nenhum registro daquele arquivo será importado, até mesmo os registros que estiverem corretos não serão importados; ◦ Não validar a importação: O sistema não validará os registros, simplesmente realizará a importação dos dados estando eles corretos ou não. • Nome da DLL com as rotinas de importação de dados: Selecione o arquivo DLL que será usado na importação. Normalmente fica na mesma pasta de instalação do sistema Bimer ERP. ◦ Caso você não tenha a DLL devida, entre em contato com o setor de Canais para obter o arquivo. Se você é da Matriz, pode pegar o arquivo direto no M:\ na pasta da versão relacionada ao sistema do cliente. • Diretório dos arquivos a serem importados: Indique o caminho em que estão os arquivos que serão importados. Sempre que obtiver um novo arquivo para importar, este deve ser colocado neste diretório específico.


### Spy System

• Spy system: Ao realizar a importação será enviado um spy para a pessoa informada. Para informar mais de uma pessoa, deverá separá-las por vírgula; • Enviar spy somente para mensagens de erro: Enviará spy somente quando tiver algum erro durante a importação.


### Parâmetros

Possui configurações específicas e varia dependendo da DLL informada. Veja o exemplo da AltImpERP_Alterdata.dll, em que você pode marcar o que fazer na importação de pedidos de vendas e títulos:


### Entidade externa

Nem todas as DLLs utilizam esta aba, assim ela habilitará de acordo com o arquivo informado. Insira os dados específicos que farão parte da importação. Exemplo: Na integração de dados do sistema de força de venda mobile (exemplo de DLL:AltImpERP_MobileMotociclo), poderá cadastrar os usuários e senhas do sistema de força de vendas, pois os dados são utilizados no momento de fazer exportação.


## Exportação

A explicação dos campos segue a mesma lógica da Importação que acabamos de ver. As diferenças na Exportação são: • A marcação Tipo em Exportação; • O campoValidação de registrose o botãoLayout de importaçãonão estarão disponíveis, pois se aplicam apenas na importação. Se liga nas dicas! Ao lado do arquivo DLL existem duas opções que vão te ajudar nos atendimentos: 1.Informações da DLL: Veja a versão da DLL. Fique atento! Se a versão for inferior em relação à versão do Bimer, você pode ter alguns problemas, como erros causados na importação devido à incompatibilidade. Então fique sempre de olho nesta informação. 2.Layout de Importação: Veja como é o layout da DLL deimportação selecionada. Isso vai te ajudar a comparar o arquivo disponibilizado com o layout praticado na importação:


## Rotina


## Modo Manual

Para realizar a exportação ou a importação acesse oConfigurador / Geral / Ferramentas / Importações/Exportações de dados.Na primeira tela, deixe marcada a opção “DLL de importação/exportação” e clique em Avançar. Na tela seguinte veja todos os arquivos que foram configurados e o tipo (importação ou exportação): Selecione as rotinas de importações / exportações que serão processadas clicando ao lado de cada uma, ou usando os botões de atalho na parte de cima. Defina os campos de filtro informando o período e pessoa (opcional). Feito isso é só Concluir. Ao final do processo veja os informes: Ok ou Erro representando se a exportação e importação foram feitas de modo correto ou não. Após isso aparece uma mensagem com maiores detalhes sobre a execução: No exemplo do log, a primeira importação não foi feita, pois não existem arquivos no diretório configurado. Já a segunda, não foi realizada por um erro relacionado a uma tabela do banco de dados. Esta mensagem ocorre, normalmente, quando a DLL está tentando acessar uma tabela que já foi modificada no sistema, porém, como possui uma versão antiga em relação ao Bimer, o erro é gerado. Qual é a moral? Independentemente da mensagem, nesta tela você entende o motivo de não ter feito a rotina e, naturalmente, procura uma solução para o cliente.


## Modo Automático

Que tal facilitar ainda mais a exportação e importação de dados? Para isso, configure a rotina para trabalhar de modo automatizado, por meio das tarefas do Gerente Eletrônico. Bora aprender como fazer isso? • Abra o módulo Configurador, vá na aba Geral, clique na opção Tarefas. ◦ Clique em Novo. Nesta tela será informado o nome da tarefa, o sistema que será executado (número da tarefa), data de validade da tarefa e sua relevância. Após realizar o procedimento acima, acesse o Configurador, vá na aba Geral, clique na opção Tarefas agendadas e clique emNovo. Na AbaDados configure a ocorrência e a frequência com que a tarefa será executada. Se a empresa possuir um usuário que monitorará as tarefas, informe seu login na aba Spy system para que ele possa corrigir algum tipo de erro ou confirmar a execução correta. Após estas configurações é necessário iniciar o Gerente Eletrônico (GEAgente). Caso ele já esteja em execução, feche e abra novamente para que a nova tarefa seja carregada. O GEAgente fica em execução ao lado do relógio do Windows, clique com o botão direito nele e acesse Tarefas em execução. • Se sua tarefa não executar, faça o seguinte: ◦ Vá no Cadastro de Usuários / Usuários / Edite o usuário de acesso no Gerente eletrônico / Perfis de acesso do usuário / Sistemas / Inclua o módulo da tarefa. Você Sabia? O Gerente eletrônico também pode ser executado como serviço. Para saber como configurar o módulo acesse o artigo no Ajuda clicando aqui.


## Análise do Arquivo


## Arquivo de Exportação

No exemplo da DLL que utilizei foram gerados arquivos que mostram dados de títulos, pessoas e características. Ao abrir o diretório escolhido na configuração, veja os arquivos: Veja que ao abrir o arquivo com algum editor de texto, conseguimos mergulhar nas informações apresentadas: É importante ressaltar que os arquivos gerados e as informações apresentadas no conteúdo variam de acordo com a DLL utilizada. Atenção! Se precisar de ajuda para validar o arquivo do cliente, lembre-se que o próprio sistema já dá o que é esperado em casa posição do arquivo em Configurador / Geral / Importação/Exportação, ao lado do campo de apontamento da DLL.


## Arquivo de Importação

Nos casos de erro na importação do arquivo, abra o Layout de Importação (presente dentro do Cadastro de Importações/exportações de dados): O layout é dividido em seções, como “Pedidos”, e em cada seção é apresentado como deve ser a estruturação do arquivo em que: • Item – É o número de identificação cada item dentro da seção; • Nome – Descrição do item; • Início – Informa qual é a posição inicial de determinado item; • Fim– Informa qual é a posição final de determinado item; • Tamanho– Informa qual é tamanho máximo que determinado item possui; • Decimais – Número de casas decimais que um determinado número pode ter; • Tipo – Informa o tipo de dados que aquele item deve conter: C – Caractere; N – Número; D– Data. • Observação – Observações adicionais referentes ao item. Para te dar aquela moral nos atendimentos veja um arquivo de títulos a receber que preciso importar para o Bimer. Veja o arquivo e a comparação do que gera cada campo de acordo com o layout: No exemplo foram sinalizados apenas alguns campos para que você entenda como funciona. Além disso, para entender a posição indicada pelo sistema, basta olhar o campo “Col” que conta as colunas do arquivo. Analisando o arquivo com o layout do lado, você consegue granular algumas informações. Vamos dizer que o cliente está questionando que seus pedidos estão vindo com o desconto vazio ou sem prazo; ou o título a receber está com a data de emissão incorreta. Abrindo o arquivo você consegue buscar aquela informação e mostrar se é um erro presente no arquivo ou se é algo relacionado ao importador. Outro caso que é muito comum, é o cliente pegar um arquivo corrompido ou incompleto. Dessa forma, peça para ele obter um novo arquivo para importar.
