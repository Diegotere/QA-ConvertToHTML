# Implantação Mercos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Vamos implantar Mercos?](#vamos-implantar-mercos)
- [Mercos](#mercos)
- [Importante](#importante)
- [Implantação](#implantacao)
- [Primeiro contato](#primeiro-contato)
- [Ambientes de instalação](#ambientes-de-instalacao)
- [Mercos novamente (E-](#mercos-novamente-e-)
- [mails)](#mails)
- [Instalação Sandbox](#instalacao-sandbox)
- [Testes e validação](#testes-e-validacao)
- [Instalação em ambiente de](#instalacao-em-ambiente-de)
- [produção](#producao)
- [Etapa final](#etapa-final)
- [Company Token](#company-token)

---


## Vamos implantar Mercos?

Nesse manual, vamos aprender a rotina de implantação Mercos com o Bimer. o que devemos saber antes, durante e após a implantação. Como devemos efetuar cada etapa e os meios para concluir.


## Mercos

O que é Mercos? Quem é? O Mercos é um sistema muito parecido com o nosso Four Keep, ou seja, um software para força de vendas. E o que ele faz? De forma resumida, ele cria pedidos de venda e esses são integrados ao Bimer.


## Importante

É importante saber que nesse manual de guia, vamos apresentar um padrão, porém vale ressaltar que poderá ser alterado, conforme utilização de recursos do cliente com a Mercos. Como assim? Vamos supor que o cliente não utilizará o recurso X, logo não precisamos validar e podemos pular alguma etapa, Ok?


## Implantação


## Primeiro contato

Sem mais delongas, vamos a implantação. A primeira informação é que toda implantação do Mercos será realizada pela equipe de suporte. Seu Superior imediato abrirá o atendimento tipo 1500 – Implantação Mercos (Força de venda) e delegará a você para configuração no cliente. A partir daqui acesse o manual técnico de suporte interno bimer, localizado no portal UCA. No manual vá no tópico 8.3 – Agendamento e Implantação Mercos. Siga as etapas de contato com cliente até o número 4.


## Ambientes de instalação

A integração é realizado em 2 etapas em ordem 1.Ambiente de homologação, que também é conhecido como o termo sandbox; 2.Ambiente de produção que é o cenário real e final.


## Mercos novamente (E-


## mails)

A Mercos ou seu superior adicionará você na conversa via e-mail. Esse é contato principal com a Mercos e é por ali que você pegará algumas informações como o escopo da implantação, assim como, informará como está o andamento da integração.


## Instalação Sandbox

No dia combinado para a instalação com o cliente, siga as etapas abaixo: 1.Instale o integrador mercos; 2.Ao acessar, use a base de homologação do cliente. 1.Caso o cliente não tenha, faça backup da sua base de produção e restaure ela, mudando seu nome para identificar que será a de homologação. 3.No integrador aponte o company token de homologação. 1.Para mais informações aonde pega o company token clique aqui. 4.Coloque o restante das informações necessárias.


## Testes e validação

Após a instalação no ambiente sandbox é necessário efetuar a validação e testar as rotinas que o cliente utilizará. Clique aqui e baixe a planilha de testes. Na planilha você informará os testes que já fez, para seu controle. Caso tenha recebido o escopo do cliente da mercos, valide se precisará efetuar todos os testes antes de realizá-los. Após validar que a integração está ocorrendo perfeitamente, sinalize ao cliente e aguarde o treinamento da Mercos com o cliente.


## Instalação em ambiente de


## produção

Assim que finalizarem o treinamento, o cliente poderá: • Não aprovar. ◦ Caso o cliente não aprove, é necessário entender o motivo e se é possível atendermos a demanda ou situação do cliente para conseguirmos sua aprovação. ◦ Se mesmo assim, o cliente não desejar seguir, vá para etapa final. • Aprovar ◦ Ele ou Mercos entrará em contato para seguirmos com as próximas etapas: 1.Em acesso ao cliente, pare o serviço do integrador; 2.Feche o aplicativo e abra agora com a base de produção; 3.Coloque o company token; 4.Preencha o restante das informações. 5.Faça a validação se a integração está ocorrendo perfeitamente.


## Etapa final

Cliente aprovando, poderá encerrar o atendimento, porém para isso, acesse o manual técnico de suporte interno bimer, e no tópico 8.3 – Agendamento e Implantação Mercos, vá na etapa 5 para pegar as informações de como encerrar o atendimento conforme aprovação ou não do cliente.


## Company Token

Esse token é importante para que o integrador leve a informação do Bimer para o Mercos e vice e versa. E quem passa esse código gente? O código poderá ser obtido pela Mercos via e-mail (Geralmente, eles mandam), ou é possível acessar na plataforma Mercos, em Minha Conta, Porém só aparecerá a informação para o usuário responsável. ATENÇÃO!!! Ao abrir o integrador Mercos, é fundamental garantir que a base correta esteja selecionada. A utilização do token de testes em uma base oficial, por exemplo, causará a duplicação de dados tanto na Mercos quanto no Bimer.
