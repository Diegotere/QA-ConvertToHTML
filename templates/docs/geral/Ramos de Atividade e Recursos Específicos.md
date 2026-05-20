# Ramos de Atividade e Recursos Específicos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é ramo de atividade?](#o-que-e-ramo-de-atividade)
  - [Indústria](#industria)
  - [Comércio](#comercio)
  - [Prestação de serviço](#prestacao-de-servico)
- [Definir o ramo de atividade](#definir-o-ramo-de-atividade)
- [no sistema](#no-sistema)
- [Como alterar o ramo de atividades pelo Configurador](#como-alterar-o-ramo-de-atividades-pelo-configurador)
- [Bimer?](#bimer)
- [Tabela Comparativa de](#tabela-comparativa-de)
- [Ramos de Atividade](#ramos-de-atividade)

---


## Introdução


## O que é ramo de atividade?

O ramo de atividade é a área de atuação de empresa no mercado, sendo definido o produto que será comercializado ou o ramo da prestação de serviço. Assim, a primeira escolha da empresa ao abrir o seu negócio é definir o ramo de atividade. Nos ramos de atividades as empresas encontram subcategorias como prestação de serviço, indústria ou comércio. Com isso, ao escolher a atividade é necessário que seja definido o ramo específico, por exemplo, uma atividade industrial que pode ser uma fábrica de automóveis, produção de laticínios, bebidas dentre outras.


### Indústria

As empresas industriais são responsáveis pela alteração da matéria-prima transformando-as em outros itens por meio da mão de obra, máquinas ou equipamentos que auxiliam na produção.


### Comércio

As empresas do ramo comercial são aquelas que realizam a venda diretamente ao consumidor final, normalmente compram produtos de fornecedores, ou distribuidoras, para que sejam revendidos em sua loja.


### Prestação de serviço

Ao contrário das outras atividades mencionadas que visam a entrega de uma mercadoria ao cliente, o prestador de serviços visa oferecer sua mão de obra ao consumidor. Em geral um ramo se subdivide em vários tipos de atividades. Por exemplo, no ramo industrial podemos ter diversas atividades, como indústria de alimentos, bebidas, máquinas, etc. Já no ramo comercial há o comércio de equipamentos eletrônicos, revenda de alimentos, móveis, roupas, e assim vai. No ramo de serviços também não é diferente, existem diversos tipos de prestação de serviços como, manutenção de equipamentos, limpeza e conservação predial, telemarketing, autocenters, etc. Bom, com certeza o Bimer não tem como atender todas as atividades possíveis. Porém, o foco desse material não é detalhar quais os tipos de atividades o Bimer tem melhor aderência. Mas, sim, destacar alguns recursos que só estarão disponíveis para uso para determinados ramos de atividades.


## Definir o ramo de atividade


## no sistema

Atualmente a base de dados do Bimer pode ser configurada para 05 ramos de atividades: • Indústria; • Comércio; • Serviços; • Autocenter; • Moda. Atenção: O comércio de roupas e acessórios, que são o que foi nomeado de “Moda”, não é o foco do Bimer. A solução da Alterdata para o ramo de moda é o produto “Moda”. Porém, como o Moda pode trabalhar integrado à parte de financeira do Bimer, foi disponibilizado um recurso específico no Bimer com esse objetivo. Mas isso não significa que devemos comercializar o Bimer sozinho dizendo que ele atende ao ramo de moda. Outro detalhe que é importante que fique bem claro, é que a escolha do ramo de atividade para o banco de dados deve ser feita antes do início da implantação, logo após restaurar a base de dados padrão no SQL Server. Fazer essa alteração depois que a implantação já está em andamento pode dar uma grande “zebra”. Isso porque campos ou recursos que o cliente já estava utilizando podem sumir ao mudar o ramo de atividades do banco de dados. “Ah, mas eu já estava com a implantação no meio, e só depois que percebi que precisava de determinado recurso, que para ser habilitado tem de mudar o ramo de atividade. O que faço agora?” Nesse caso, você precisa manter contato com a suporte de canais e o DSN Bimer, para avaliarem juntos o impacto dessa mudança no cliente que você está implantando. Então, já sabe, nada de ficar trocando a base de dados de uma outra para outra sem a devida análise. Importante: A mudança do ramo de atividade, por padrão, só pode ser feita utilizando comando direto na base de dados. Existe apenas dois cenários nos quais podemos alterar o ramo de atividades pelo configurador Bimer: ➢ Do ramo comércio para moda; ➢ Do ramo comércio para autocenter.


## Como alterar o ramo de atividades pelo Configurador


## Bimer?

O primeiro passo é dar acesso a algum usuário à configuração para alterar o ramo de atividades. Mas já vimos essa é uma alteração de grande impacto. Por isso, recomendamos que a permissão seja dada somente para o usuário supervisor, e logo após fazer a troca do ramo, essa permissão seja retirada, para não haver surpresas desagradáveis mais para frente. No cadastro de usuários é necessário definir se o perfil ou o usuário terão permissão para alterar o ramo de atividade da empresa. Assim, na área de controle de acesso no cadastro de usuários, localize o “Configurador /Geral” e conceda “Permite alterar ramo de atividade”. Em seguida, acesse o Configurador Bimer / Geral / Geral / Opções / Ramo de atividade, e faça a alteração.


## Tabela Comparativa de


## Ramos de Atividade

Nas tabeles abaixo você encontrará quais recursos são habilitados em cada tipo de ramo de atividade.
