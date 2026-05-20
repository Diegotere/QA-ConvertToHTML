# Liberador de Pagamentos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Instalação](#instalacao)
- [Configurações](#configuracoes)
- [Permissões de acesso](#permissoes-de-acesso)
- [Configuração](#configuracao)
- [Rotinas](#rotinas)
- [Pedido de compra](#pedido-de-compra)
- [Nota Fiscal de entrada](#nota-fiscal-de-entrada)
- [Títulos a pagar avulsos](#titulos-a-pagar-avulsos)
- [Auditoria](#auditoria)

---


## Introdução

O módulo Liberador de Pagamentos foi desenvolvido com o objetivo de possibilitar maior controle na rotina de compras com relação às liberações de pedido de compras, notas fiscais de entrada e títulos a pagar, pois, incluí a fase da verificação por algum usuário (normalmente com atribuições de chefia ou supervisão), antes de eles sejam efetivamente liberados. Exemplo: Os funcionários podem gerar pedidos de compra e solicitar a liberação pelo próprio módulo de pedido de compras. Esses são encaminhados para o módulo Liberador de Pagamentos, para que o supervisor responsável pelo estoque analise. Se estiver tudo certo e realmente for necessário realizar o pedido, o supervisor libera o pedido de compras. Caso o pedido esteja incorreto, por exemplo, solicitando uma quantidade do item superior ao necessário para atender a necessidade, o supervisor poderia editar e liberar; ou ainda, simplesmente não liberar o pedido. Atenção! A partir do momento em que este módulo for instalado para ser utilizado, ele executará um script no banco de dados que muda sua rotina de compras, e passar a obrigado que qualquer pedido de compra e nota fiscal de entrada passem primeiramente pelo Liberador de Pagamentos. O módulo afeta diretamente a rotina dos módulos Contas a pagar, Nota Fiscal de Entrada e Pedido de compras. Dica importante! Atualmente temos no Bimer UP o recurso Autorizador Gerencial, que tem função semelhante, conta com recursos bastante interessantes, e diversas outras vantagens. Então, antes de implantar o liberador de pagamentos no cliente, verifique se o Bimer UP não atende melhor a sua necessidade, visto que ele está em constante evolução.


## Instalação

Reforçando que, ao instalar o módulo, as rotinas do pedido de compra, nota fiscal de entrada e títulos a pagar avulsos serão alteradas, fazendo com que seja sempre necessária a liberação pelo módulo Liberador de Pagamentos. Isso ocorre porque durante o processo de instalação é executado um script chamado “Script.sql” (localizado, por padrão, após a instalação em C:\Program Files (x86)\Alterdata\Projects\ Liberador De Pagamentos). Ele é responsável por criar tabelas e realizar uma configuração no banco de dados criando tal obrigação no sistema. O liberador de pagamentos é instalado à parte do sistema Bimer. Assim, ele possui um instalador próprio chamado “LiberadorDePagamentos.exe”. Para os analistas da Matriz, o instalador fica localizado emM:\BIMER\Projetos Específicos\Liberador de Pagamentos. Analistas de filiais e representações, devem entrar em contato com o suporte de Canais e solicitar o instalador. Para instalar o módulo, basta executá-lo comoadministrador. Basta clicar em Avançar nas próximas telas, e aguardara a conclusão.


## Configurações


## Permissões de acesso

O primeiro passo é dar acesso ao produto Liberador de Pagamentos no Cadastro de usuários, para cada usuário envolvido nas rotinas. A permissão pode ser dada pelo perfil individual, outra através do cadastro de perfil usuário. No módulo Cadastro de usuários, apenas liberamos acesso ao módulo. A definição do nível de permissão que cada um terá na utilização do Liberador de pagamentos, é feito nele mesmo. No módulo Liberador de Pagamentos, clique em Controle de acesso, selecione o usuário desejado, e clique em Editar. No quadro Permissões, selecione as opções do módulo que o usuário terá acesso. E no quadro Empresas, selecione as que ele poderá executar ações. Em seguida, grave.


## Configuração

Dentro do módulo Liberador de Pagamentos você verá que existe a opção Configuração. Dentro dele temos algumas opções: • Gerar título de previsão no contas a pagar ao liberar pedidos de compra: com esta opção marcada, todos os registros de pagamento que não estejam configurados como pagamento antecipado, serão gerados no módulo contas a pagar como título de previsão. Com a opção desmarcada, somente serão gerados no contas a pagar os registros de pagamento configurados como pagamento antecipado; • Habilitar visualização dos documentos de entrada criados no Bimer: com esta opção marcada, o sistema habilitará na tela de liberação a opção Notas Fiscais e listará os documentos de entrada criados no Bimer. Com a opção desmarcada, o sistema desabilitará a opção Notas Fiscais na tela de liberação, impossibilitando a opção de listagem de notas fiscais; • Utilizar a natureza configurada no Bimer ao liberar o pedido de compra: com esta opção marcada, se no Configurador Bimer / Geral / Opções / Pagamento Antecipado / Natureza de lançamento dos títulos de pagamento antecipado gerados a partir do pedido de compra, houver uma natureza de lançamento informada, o sistema a utilizara na criação do título. Se não houver nenhuma natureza informada, o título será criado com a natureza de lançamento do Pedido de compras. Observação: caso seja necessário alterar a natureza padrão, verifique diretamente no caminho citado. • Criar atendimento vinculado ao pagamento:marque esta opçãoe informe os dados do atendimento, para que o sistema crie um atendimento automático no Bimera fim de um melhor controle de terceiros sobre o que está sendo gerado de pagamentos. Marque apenas se o cliente desejar, pois não é uma rotina obrigatória. Após configurar de acordo com o que foi explicado acima, clique em “Gravar”.


## Rotinas


## Pedido de compra

Os pedidos de compra deverão ser cadastrados normalmente, a diferença é que nesta rotina será necessário deixar o pedido de compra com o status “Aguardando” para que ele apareça no módulo Liberador de Pagamentos para ser ou não liberado. Caso não esteja com este status, ele não aparecerá para ser liberado. Importante! Conforme citado, para a rotina funcionar corretamente os pedidos de compra devem estar com status de aguardando para que apareçam no Liberador de pagamentos. Então, no cadastro dos usuários que tem acesso para cadastrar de pedidos de compras, seus perfis não podem ter a opção liberação de pedidos habilitada. No Liberador de Pagamentos, selecione a opção Liberação. Em seguida, informe a empresa, data e, de modo opcional, a pessoa do pedido que você deseja liberar. Ao localizar o pedido, dê duplo clique sobre ele. Nesta tela será possível que o responsável analise o pedido para a liberação. Para liberar, basta clicar na opção correspondente. Depois disso, informe o motivo da liberação e salve. Após a liberação, o status do pedido será alterado automaticamente para “Aberto”. Por meio da linha do tempo é possível verificar o dia, horário e usuário da liberação.


## Nota Fiscal de entrada

As notas fiscais de entrada também aparecerão no módulo Liberador de Pagamentos. Para isso, é necessário que a opção para habilitar a visualização de notas fiscais de entrada esteja marcada nas Configurações dentro do módulo de liberação de pagamentos, conforme já mostrado anteriormente neste manual. Você cadastrará sua nota normalmente. Ao clicar para liberar a nota, o status dela será alterado para Aguardando pagamento. Isso significa que a nota aguarda a liberação do pagamento. Após liberar o pagamento é que o Liberador de Estoque fará a liberação da nota, criação dos títulos a pagar e movimentação no estoque. Para liberar a nota, basta ir em Liberações e realizar o filtro. Dentro da liberação da nota o sistema apresenta a opção de “Pedido Origem”. Clicando nesta opção, o sistema apresenta a tela com o pedido que originou a nota. Selecionando o pedido, é possível realizar a liberação também do pedido.


## Títulos a pagar avulsos

Para controle de títulos a pagar avulsos nessa rotina, será necessário cadastrar os títulos diretamente no módulo Liberador de Pagamentos. Para isso, dentro do módulo, você deverá clicar no botão Cadastro de Pagamentos. Em seguida, cadastre os campos normalmente, assim como o cadastro de um título no FinAPagar. Por último, salve o cadastro. Após salvar o título, acesse o menu Liberação e realize o filtro que deseja. Veja o que sistema apresentará o(s) título(s). Dando duplo clique sobre o título, o sistema apresentará suas informações para que o responsável analise e libere-o. Somente após a liberação do pagamento é que o cadastro do título é efetivamente realizado no Bimer; caso não seja liberado, este pagamento aparecerá somente no módulo Liberação de Pagamentos. Como você pode notar na imagem acima, além de liberar, é possível também editar alguma informação do título, se for necessário ou excluí-lo.


## Auditoria

No Liberador de Pagamentos, o botão “Auditoria” oferece um recurso similar à auditoria dos sistemas do Configurador Bimer / Geral. Porém, ele apresentará o log somente do que for realizado dentro do próprio módulo e tais informações não aparecerão na auditoria de sistemas do Configurador Bimer. Como você pode notar, a tela é bem similar à tela da auditoria de sistemas. Você poderá filtrar por categoria (inclusão, alteração, etc), período de modificações, usuários e até mesmo por trecho. Após filtrar, o sistema mostrará o resultado dos logs, com detalhamento no quadro inferior.
