# Spy System — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Configurações](#configuracoes)
- [Configurador](#configurador)
- [Cadastro de Usuários](#cadastro-de-usuarios)
- [Painel de Controle](#painel-de-controle)
- [DLLs](#dlls)
- [Rotinas](#rotinas)
- [SMTPs mais utilizados](#smtps-mais-utilizados)

---


## Introdução

Neste material enfocaremos na rotina de envio de spy system pelo sistema Bimer. Nele eu vou te mostrar tudo que precisa ser configurado e vou te indicar algumas rotinas que utilizam este recurso que nossos clientes tanto adoram. Vem comigo!


## Configurações


## Configurador

Para começar, devemos configurar a aba de Spy System em Configurador Bimer / Geral / Opções / Spy System. No quadroServidor SMTP spy system, os campos serão preenchidos com as informações do e-mail que fará o envio do spy system. Assim, o cliente precisa informar os seguintes dados: • Servidor SMTP; • Porta; • Usuário; • Senha (a senha dever a “senha de app” gerada dentro do site do SMTP); • E-mail (campo de e-mail deve conter a mesma informação do campo usuário); • As marcações “Requer uma conexão segura (SSL)” e “Requer autenticação” variam de acordo com cada provedor de e-mail. Observação: É necessário que você, analista, se atente a alguns pontos: • Com a LGPD, fica terminantemente proibido que você possua qualquer tipo de senha do cliente. Assim, peça ao cliente que informe a senha do e-mail no campo correspondente; • As informações solicitadas nesta tela não são de responsabilidade da Alterdata, já que são dados do cliente; • O cliente precisará solicitar ao seu TI que libere, dentro das configurações do provedor de e-mail, que seja permitida a utilização do e-mail em sistemas de terceiros. No campo Outras configurações, as informações são opcionais. É possível informar um HMTL padrão para o envio do spy. Vale lembrar que o suporte não realiza edição de HTML. Se o cliente quiser alguma alteração, ele precisa solicitar ao TI da empresa. Para utilizá-lo no envio de spy, adicione-o no campo “Layout em HTML utilizado no envio de spy system”. Sabemos que dentro do atendimento, ao dar um parecer, é possível fazer o envio de e-mails, certo? A partir destes e-mails podemos também enviar anexos. Assim, é necessário informar o tamanho máximo que o arquivo poderá ter para que seja enviado junto com o e-mail do parecer no campo “Tamanho máximo de anexos a serem enviados pela rotina de e-mail dentro do parecer”. No campo “Configuração para envio de spy system de dias livres na agenda” o cliente poderá configurar para receber um aviso quando algum usuário possuir dias livres na agenda. Apontadas as configurações nesta tela, pode salvar.


## Cadastro de Usuários

O spy system será enviado para o e-mail do usuário que informarmos que deverá receber os avisos. Para que isso ocorra, é necessário que dentro do Cadastro do Usuário > Configurações do usuário > E-mail esteja configurado corretamente. Veja a imagem abaixo:


## Painel de Controle

Outra configuração que precisamos verificar são as configurações de TLS. Para isso, acesse Painel de Controle / Opções da Internet / Avançadas. Role a barra de rolagem até o final para encontrar as configurações que mostrarei abaixo.Para o correto funcionamento dospyé preciso que as configurações desta tela estejam exatamente iguais àsda imagem abaixo. Perceba que as opções marcadas devem ser iguais, mas as que estão desmarcadas também, ok? Após realizar as mesmas marcações da tela acima, clique em “OK” para salvar. Observação: Caso mais de uma máquina faça o envio de spy system, é necessário realizar essa configuração em cada máquina.


## DLLs

Ainda no Painel de Controle, vá na opção “Sistema”. Verifique se a máquina tem processador x64 ou x86. Isso é importante porque precisaremos colocar as DLLs libeay32.dll essleay32.dll na pasta do Windows correspondente ao tipo de processador da máquina que fará o envio do spy. (Caso você não tenha essas DLLs na sua máquina, verifique com o seu supervisor). Se a máquina for x64, você colocará as DLLs na pasta C:\Windows\SysWOW64. Se a máquina for x86, você colocará as DLLs na pasta C:\Windows\System32. Observação: Caso mais de uma máquina faça o envio de spy system, é necessário colocar essas DLLs em cada máquina. Beleza, agora é só testar! Para realizar um teste rápido do funcionamento, basta realizar o envio de e-mail pelo CRM. Mas lembre-se: se o CRM já estiver aberto, é necessário fechar e reabrir módulo.


## Rotinas

Diversas rotinas utilizam o envio de spy system, por exemplo: • Telecobrança; • Liberação automática de lotes do Cobertura Contábil; • Importação de Arquivo Retorno de Liquidação em lote; • Envio Automático de Boletos; • Impressão automática de Boleto Bancário; E outras tarefas executadas pelo Gerente Eletrônico (GeAgente), na configuração da tarefa agendada em Configurador / Geral / Tarefas Agendadas / aba Spy System. Pegaremos como exemplo a rotina de agendamento de backup. Após configurar e executar a tarefa de backup, o usuário informado na aba Spy System da tarefa agendada receberá um e-mail informando que a tarefa foi executada. Veja: Este exemplo de spy system recebido está com HMTL personalizado. Caso não tivesse, o e-mail recebido seria assim:


## SMTPs mais utilizados

Agora eu te indicar alguns links que poderão te ajudar a configurar no cliente, caso ele não tenha essas informações. Google Para ver como configurar o SMTP do Gmail, clique aqui. Outlook/Hotmail Para ver como configurar o SMTP do Outlook/Hotmail, clique aqui. Yahoo Para ver como configurar o SMTP do Yahoo, clique aqui. UOL Para ver como configurar o SMTP da UOL, clique aqui.
