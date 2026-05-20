# Nota Fiscal de Entrada - Inconsistência com Pedido de Compras — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
- [Utilização do Sistema](#utilização-do-sistema)
- [Informações Adicionais](#informações-adicionais)

---

## Introdução

Imagine a seguinte situação: o setor de compras manteve contato com o fornecedor, fez toda negociação para chegar a um acordo sobre a quantidade e o valor do produto a ser comprado. Em seguida, gerou o pedido de compras para documentar o que foi acordado. Porém, por um motivo qualquer, quando o fornecedor emitiu a NF-e, o valor unitário ficou diferente do combinado.

Pode acontecer de, na hora de receber a mercadoria e lançar a nota fiscal no Bimer, o colaborador responsável por isso não note a diferença, e lance o documento sem fazer nenhuma crítica. Isso acabará tendo desdobramentos que podem até causar prejuízo para a empresa.

Vamos a um exemplo com números para você entender melhor.

A empresa compra 01 tonelada do produto X, com valor unitário de R$ 10,00 por KG. Então, o valor que a empresa teria de pagar ao fornecedor é 1.000 Kg x R$ 10,00 = **R$ 10.000,00**. Se o fornecedor emitir a NF-e errada, com valor unitário de R$ 10,75, o valor total que a empresa teria de pagar pularia para **R$ 10.750,00**. Uma diferença de quase R$ 1.000,00.

E não para por aí. Além do valor unitário, pode haver divergência no cálculo de algum tributo como **ICMS**, **IPI**, **PIS**, **COFINS**, etc. Isso também é um problema porque fará com que a empresa apure errado o valor dos tributos a pagar, podendo até mesmo pagar multa por isso lá na frente.

A boa notícia é que o Bimer tem como confrontar os valores da NF-e lançada no módulo **Nota Fiscal de Entrada** com o pedido de compras que for vinculado a ela. E, se encontrar alguma divergência, o sistema fará a crítica. E ainda, se o usuário que estiver lançando a NF-e não tiver permissão para lançar com divergências, será necessário solicitar a algum usuário que tenha essa permissão – o gerente, por exemplo – para liberar esse documento. A liberação poderá ser feita tanto no próprio módulo **Nota Fiscal de Entrada**, como no **CRM**. O que dá mais agilidade ao processo.

Dessa forma, basta quem lançou a nota avisar ao responsável que precisa de liberação, e esse usuário pode fazer a liberação de onde estiver, desde que possua acesso ao Bimer.

---

## Configurações Necessárias

O que você precisa fazer é definir quais usuários podem ou não liberar divergências entre os valores da NF-e e do pedido de compras.

Acesse o **Cadastro de usuários**. Se a empresa trabalhar com **Perfil de usuário**, é nesta opção que você deve entrar logo em seguida. Já se a empresa trabalhar com perfil individual, então entre na opção **Usuário**. Localize o módulo **Nota Fiscal de Entrada**, e em **"Controle de acessos aos módulos do sistema"**, **Assinatura eletrônica**, localize as opções:

- **"Liberar caso tenha inconsistências com o pedido"**
- **"Liberar inconsistências de impostos com o pedido"**

Clique com o botão direito do mouse para habilitar ou desabilitar.

> *[Imagem: Tela de cadastro de usuários com as opções de assinatura eletrônica para liberação de inconsistências]*

Se a opção estiver **habilitada**, significa que o usuário com esse perfil pode liberar inconsistências. Caso seja necessário, deverá ser bloqueado/liberado ambas as permissões. Logo, se estiver **desabilitada**, significa que o usuário com esse perfil não pode liberar inconsistências.

> **Nota:** Essa mesma permissão foi criada no produto **CRM / Fornecedor / Assinatura eletrônica**, e no produto **CRM Atendimentos / Assinatura eletrônica**. Assim, o usuário poderá liberar por qualquer um desses módulos.

---

## Utilização do Sistema

Na rotina de cadastro de pedidos não há nenhuma diferença. Basta informar corretamente os valores referentes a **quantidade**, **valor unitário** e **tributos** de cada item.

> *[Imagem: Tela de item em um pedido de compra com informações de cálculo de ICMS e IPI]*

O pedido é gravado normalmente e deve estar com status **"Aberto"** para que ele possa ser atendido na entrada de uma Nota Fiscal.

### Registro da NF-e com divergências

O próximo passo é o registro da NF-e emitida pelo fornecedor no módulo **Nota Fiscal de Entrada**. Vamos acessar com um usuário que **não tenha permissão** para liberar inconsistências.

1. Acesse o módulo, clique em **Novo**
2. Informe o **fornecedor** utilizado no pedido de compras
3. Selecione o **pedido de compras** que está sendo atendido
4. Insira todos dados normalmente

> *[Imagem: Tela de edição do item mostrando alíquota e valor de IPI com diferença do pedido de compras]*

### Tela de inconsistências

Tanto na opção **Liberar** quanto na opção **Salvar rascunho** o sistema apresentará a lista de inconsistências.

> *[Imagem: Lista de inconsistências mostrando divergência no valor do IPI entre pedido de compras e NF-e]*

### Fluxo de liberação

- Se tiver clicado em **Liberar**, e clicar em **Autorizar**, na tela de validação, será apresentada a tela para que um usuário com permissão libere a diferença.

> *[Imagem: Tela de autorização solicitando login de usuário com permissão]*

- Caso necessite saber mais detalhes, antes de liberar pode verificar as ocorrências na opção **Analisar pedidos**, disponível no rodapé da tela do documento.

> *[Imagem: Tela de análise de pedidos mostrando valores com divergência e bloqueio de liberação]*

### Fluxo de salvamento como rascunho

- Se tiver clicado em **Salvar como rascunho** e clicar em **"Solicitar autorização"**, na tela de validação, o card sumirá da lista e o documento poderá ser salvo.

> **Atenção:** Não esqueça de verificar cada inconsistência apresentada para conseguir salvar o documento como rascunho. O documento é salvo com o status **"Aberto"**.

### Liberação pelo CRM

O usuário que tenha permissão para liberar inconsistências poderá fazer isso, por exemplo, através do **CRM**. Ao acessar o módulo, não é preciso nem informar o código de uma pessoa, pois já aparecerá no menu à esquerda a opção de **Autorização** com uma ou mais notificações.

Ao clicar na opção, é apresentada uma janela com todas as notas que precisam ser liberadas.

> *[Imagem: Tela do CRM com lista de notas pendentes de liberação]*

Dê um duplo clique sobre a nota desejada, ou clique em **Detalhes** no menu da tela. O sistema exibirá uma tela na qual há informações sobre o **pedido de compras** no lado esquerdo, e no lado direito informações sobre a **NF-e**.

> *[Imagem: Tela de detalhes com comparação entre pedido de compras e NF-e lado a lado]*

Para saber os motivos que necessitam de liberação, clique em **Analisar pedido**. O sistema apontará as inconsistências encontradas (como diferença no valor de IPI, entre outras). Caso deseje liberar, é só fechar a tela e clicar em **Autorizar**.

> *[Imagem: Tela de análise mostrando inconsistências detalhadas]*

### Liberação pelo CRM Atendimentos

A autorização pode ser feita também pelo módulo **CRM Atendimentos**, desde que tenha sido liberado no cadastro do usuário ou perfil, no sistema CRM Atendimentos.

### Liberação pelo Nota Fiscal de Entrada

Se a empresa não trabalha, ou não possui, os módulos do CRM, o usuário pode fazer a liberação direto no módulo de **Nota Fiscal de Entrada**, editando o documento desejado e clicando em **Liberar**.

> **Nota:** Se a autorização tiver sido dada pelos módulos CRM ou CRM Administrador, o usuário que solicitou a autorização deve editar novamente o documento no módulo **Nota Fiscal de Entrada** e liberá-lo para poder concluir a operação. Assim, ele entrará na fila de atualizações do **Liberador de Estoque**.

---

## Informações Adicionais

A opção de liberação de inconsistências avalia diversos pontos entre a NF-e e o Pedido de compras. Veja os pontos considerados:

- **ICMS**
- **ICMS ST**
- **IPI**
- **PIS**
- **COFINS**
- **CSLL**
- **ISS**
- **INSS**
- **IRRF**
- **CFOP**
- **CST**
- **CST IPI**
- **CST PIS**
- **CST COFINS**
