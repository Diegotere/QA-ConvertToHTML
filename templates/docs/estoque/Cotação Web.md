# Cotação Web — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Instalação](#instalação)
  - [Requisitos Mínimos](#requisitos-mínimos)
- [Fluxograma do processo](#fluxograma-do-processo)
- [Ambiente de Homologação](#ambiente-de-homologação)
- [Criação da Cotação](#criação-da-cotação)
- [Acesso à Cotação Web](#acesso-à-cotação-web)
  - [Seleção da empresa](#seleção-da-empresa)
  - [Selecionar outra empresa](#selecionar-outra-empresa)
  - [Visão Geral](#visão-geral)
  - [Selecionar Cotação](#selecionar-cotação)
  - [Enviar Cotação](#enviar-cotação)
  - [Retorno da cotação](#retorno-da-cotação)
  - [Decisão de Compra](#decisão-de-compra)
- [Retorno para Cotação Desktop](#retorno-para-cotação-desktop)

---

## Introdução

Liga pro fornecedor, anota a cotação em um papel, liga para o outro, anota, liga pro outro… Depois, pega todas as anotações e coloca na tela de **tomada de preço** do módulo Cotação. Trabalhoso, né?! A solução para agilizar o processo de cotação está disponível ao utilizar o recurso de **Cotação Web**.

A Cotação Web é um recurso do Bimer ERP, em plataforma Web, para auxiliar o setor de compras no processo de aquisição de produtos. Permitindo que sejam realizadas comparações entres os fornecedores envolvidos no processo, para verificar qual oferece as melhores condições de compra. Todo o procedimento se passa dentro do módulo Cotação (aquele mesmo, o EstCotacao).

---

## Instalação

Por se tratar de um módulo desenvolvido em plataforma web, disponibilizado para os clientes no modelo SaaS, ou seja, como um serviço, não será necessário nenhum processo de instalação.

Ao adquirir o produto, será criada uma base de dados nos servidores da Alterdata, e nosso cliente receberá apenas o link para acessar o produto.

### Requisitos Mínimos

- Apenas os navegadores **Google Chrome** e **Mozilla Firefox** estão homologados para utilização da Cotação Web.
- Inicialmente, a Cotação Web está integrando informações apenas com o Bimer ERP.
- Este recurso é compatível da versão **7.02.00.00** ou superior do Bimer ERP.
- O CNPJ da empresa deverá estar cadastrado na base de dados da Alterdata (CRM) como cliente e possuir o módulo Cotação Web, além disso o CNPJ/CPF deverá ter acesso ao passaporte. Esta mesma regra se aplica tanto para clientes como para os técnicos do suporte. Caso tenha dúvida de qual CNPJ/CPF utilizar, consulte a supervisão.
- Os fornecedores devem estar cadastrados corretamente na base de dados do Bimer e devendo possuir **e-mail informado** (para que a cotação web possa realizar o envio de e-mail) e **nome curto** (que é utilizado na tela de decisão de compra).

---

## Fluxograma do processo

> *[Imagem: Fluxograma do processo de Cotação Web]*

---

## Ambiente de Homologação

Estas configurações são necessárias somente nas instalações para testes pelos atendentes de suporte, pois, nestes casos é necessário acessar o ambiente de homologação.

> **Fique atento!** Os clientes da Alterdata utilizam o ambiente de produção. Por isso, essa configuração **NÃO** deverá ser feita para eles.

**Passo 01:**

Abra o bloco de notas e insira o seguinte conteúdo abaixo:

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Alterdata\ERP\CotacaoWeb]
"Homologacao"="1"
```

Em seguida salve o arquivo em qualquer lugar na sua máquina, no formato `CotacaoWeb.reg`. Em seguida execute-o e confirme as telas seguintes que aparecer.

**Passo 02:**

Abra o bloco de notas e insira o seguinte conteúdo abaixo:

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Alterdata\ERP\Passaporte2]
"Endereco"="https://passaporte2-hml.alterdata.com.br"
```

Em seguida salve o arquivo no formato `Passaporte2.reg`. Em seguida execute-o e confirme as telas seguintes que aparecer.

Para confirmar se as configurações foram feitas corretamente, acesse **Regedit > Key_Current_User > Software > Alterdata > ERP**, e verifique se as chaves **CotacaoWeb** e **Passaporte2** estão preenchidas corretamente com `1` e `https://passaporte2-hml.alterdata.com.br`.

> *[Imagem: Regedit com as chaves configuradas]*

---

## Criação da Cotação

A rotina se dá início no módulo **EstCotacao** (Desktop).

Não há diferença na criação da cotação. Crie normalmente uma cotação, clicando em na opção **Novo** na tela principal do EstCotacao, e preencha os dados da cotação. Para que seja possível enviá-la para a Cotação Web é necessário que esteja com status de **Liberada**.

> *[Imagem: Tela principal do EstCotacao]*

Para enviar a cotação para o módulo Cotação Web, selecione a cotação desejada, e clique na opção **"Enviar cotação Web"**.

> *[Imagem: Opção "Enviar cotação Web"]*

Ao clicar na opção **Enviar Cotação Web** pela primeira vez, o sistema solicitará usuário e senha do passaporte.

> *[Imagem: Tela de autenticação do Passaporte]*

Ao se autenticar no passaporte, será gerada um código token. Esse código será salvo na tabela **UsuarioToken** na base de dados do Bimer Desktop. Desta forma, não será necessário informar usuário e senha todas as vezes que tentar enviar uma cotação do Desktop para Web.

Em seguida se abrirá a tela para que se possa escolher a empresa de integração.

> *[Imagem: Seleção de empresa de integração]*

Após selecionar a empresa, e o processo for finalizado, aparecerá mensagem confirmando o envio da cotação do Desktop para Web.

Após o envio, a cotação ficará com status de **Enviada para Web**.

> **Observação:** Quando a cotação é enviada para web, no módulo EstCotacao não poderá editá-la e nem excluí-la, apenas será possível cancelá-la.

---

## Acesso à Cotação Web

O acesso é feito através do link **cotacaoweb.alterdata.com.br**.

> **Observação:** Para ambiente de teste utilize o link: **cotacaoweb-hml.alterdata.com.br** (vide informações na seção Ambiente de Homologação).

Ao abrir o link, será exibida a tela de login no Passaporte Alterdata.

Caso seja o primeiro acesso pelo Passaporte Alterdata, o usuário deverá criar uma conta, e solicitar acesso à empresa e ao produto Cotação Web.

Caso o usuário já possua conta no Passaporte Alterdata, bastará ele acessar o módulo, e solicitar autorização para utilizar a Cotação Web.

> *[Imagem: Tela de login do Passaporte Alterdata]*

### Seleção da empresa

No módulo Cotação Web só é possível trabalhar com uma empresa por vez. Ou seja, caso trabalhe com mais de uma empresa no Bimer ERP, será necessário sempre escolher a empresa com a qual deseja trabalhar, ao acessar a Cotação Web.

A seleção da empresa ocorrerá no momento em que o usuário estiver fazendo o login no sistema, pelo Passaporte Alterdata.

Para isso, clique em **"Selecionar uma empresa assinante"** na de opções, e escolha a empresa com a qual deseja trabalhar neste momento. Em seguida, clique no botão **"Selecionar Empresa"**.

### Selecionar outra empresa

Como a empresa é selecionada no momento em que se está fazendo o login no módulo pelo Passaporte Alterdata, para selecionar outra empresa será necessário sair do sistema e acessá-lo novamente.

Para sair do sistema, clique sobre o ícone do usuário localizado no canto direito superior da tela e clique em **sair**.

Em seguida, informe novamente na tela de acesso, seu Login e senha do Passaporte Alterdata. E selecione outra empresa.

### Visão Geral

Após selecionar a empresa, na tela principal do módulo, você encontrará os seguintes elementos:

> *[Imagem: Tela principal da Cotação Web com elementos numerados]*

1. **Acesso** — Permite visualizar os dados da conta que está logada no módulo. Por ela também é possível fazer o LogOff.
2. **Dashboard Cotação** — Nesta área ficam disponíveis filtros para as cotações da empresa selecionada. As informações estarão separadas pelo status da cotação. E, além de funcionar com filtro, já serão apresentados a quantidade de cotações em cada um dos status:
   - **a) Aberta** — Exibe a quantidade de cotações que vieram da retaguarda e estão aguardando serem enviadas para os fornecedores.
   - **b) Aguardando Fornecedor** — Exibe a quantidade de cotações que já foram enviadas para algum fornecedor, solicitando as condições de compras, e estão aguardando retorno.
   - **c) Parcialmente respondida** — Exibe a quantidade de cotações que já obtiveram resposta de algum dos fornecedores que estão incluídos no cadastro da cotação, porém ainda faltam alguns fornecedores responderem.
   - **d) Respondida** — Exibe a quantidade de cotações para as quais todos os fornecedores cadastrados nelas já tenham enviado resposta para as informações solicitadas.
   - **e) Decisão de compra** — Exibe a quantidade de cotações que já estão na fase de decisão de compras. Ou seja, as cotações que o usuário já iniciou o processo de compras, mas ainda não finalizou.
   - **f) Finalizada** — Exibe a quantidade de cotações que tiveram seu processo encerrado.
3. **Gráfico "Cotação por status"** — Neste também serão demonstradas informações sobre as cotações, por status, porém em um gráfico em formato de pizza.

### Selecionar Cotação

Para visualizar os detalhes das cotações, clique em um dos status disponíveis na área **"Dashboard Cotações"** na tela principal do sistema.

Ao escolher um status, o sistema apresentará uma lista com todas as cotações que estiverem naquele status.

Nos detalhes de uma cotação será possível ver informações como:

- Código da cotação;
- Descrição;
- Data limite para resposta da cotação solicitada para o fornecedor;
- Status.

Para selecionar uma cotação, siga os seguintes passos:

No dashboard, clique sobre o status da cotação **Aberta** para iniciar o processo de cotação, clique sobre uma cotação para selecioná-la. Clique no botão **"Detalhes"**.

> **Dica!** Utilize o campo de busca na área superior direita da tela para localizar uma cotação. Preenchendo a informação nesse campo, a busca é realizada em qualquer campo apresentado na listagem de cotação desta tela.

Na tela de detalhamento da cotação selecionada, inclua a **data limite** da cotação para bloqueio da resposta dos fornecedores e em seguida clique em **"Ok"** ao lado deste campo para validar a data inserida.

> **Fique Sabendo!** Esta data pode ser alterada sempre que necessário.

### Enviar Cotação

Após selecionar a cotação, na tela detalhamento da cotação selecionada, você pode optar por enviar esta cotação para um ou todos os fornecedores.

Nesta tela é exibida uma lista de fornecedores com seus respectivos produtos e status além do progresso de resposta dos mesmos, informando o percentual dos retornos e representado por cores.

Os status de envio das cotações para o fornecedor nesta tela de detalhamento, podem ser apresentados como:

- **Não enviado:** Quando a cotação ainda não foi enviada para um ou mais fornecedores. A cotação neste status é representada visualmente na cor **laranja**.
- **Enviado:** Quando a cotação for enviada para um ou mais fornecedores e aguarda retorno do mesmo. A cotação neste status é representada visualmente na cor **azul**.
- **Respondido:** Quando o fornecedor responde a cotação. A cotação neste status é representada visualmente na cor **verde**.

Para enviar sua cotação para o fornecedor, siga os passos a seguir:

- Selecione a cotação, na tela detalhes da cotação, selecione a cotação de um dos fornecedores listados para exibir os detalhes dessa cotação — por fornecedor;
- Clique em **Enviar** para que automaticamente o sistema envie um e-mail para o fornecedor contendo um acesso (link) para a Cotação WEB de maneira que ele possa enviar uma resposta da cotação solicitada;
- Caso deseje, há a opção de clicar em **Enviar para todos**, localizado no rodapé da tela de detalhamento da cotação, para enviar um e-mail para todos os fornecedores da cotação selecionada uma única vez. Automaticamente o sistema enviará um e-mail para todos os fornecedores contendo um acesso (link) para a Cotação WEB para que cada fornecedor possa enviar sua resposta da cotação solicitada.

> *[Imagem: Tela de envio de cotação para fornecedores]*

Após o envio do link, basta aguardar o retorno da cotação enviada para o fornecedor dentro do prazo estipulado na data limite de resposta para que, em seguida, você inicie o processo de decisão de compra.

> **Dica!** Utilize o recurso de progresso de resposta para identificar o percentual dos status da cotação. Você ainda poderá clicar sobre um desses status para que o sistema traga como retorno, todas as cotações respondidas por exemplo.

### Retorno da cotação

O retorno da cotação ocorre quando o fornecedor que recebeu o link com a cotação para a tomada de preços, preenche as informações necessárias, e envia a resposta para a empresa.

Ao receber o link, basta o fornecedor preencher os dados conforme imagem a seguir.

> *[Imagem: Tela de preenchimento da cotação pelo fornecedor]*

> **Se liga!** O fornecedor somente visualizará os produtos da cotação que ele fornece.

### Decisão de Compra

A decisão de compra poderá ser feita para as cotações que estiverem no status **"respondida"** ou **"parcialmente Respondida"**.

No Dashboard do painel principal, clique no status que deseja selecionar uma cotação.

> *[Imagem: Tela de decisão de compra]*

Na tela de decisão de compra será apresentada uma lista com os produtos da cotação, e para cada produto uma lista dos cinco melhores fornecedores por data de entrega e outros cinco melhores por valor unitário.

Ao selecionar o fornecedor ganhador para o produto, o mesmo será marcado em ambas as colunas. Com o facilitador **"Sugerir ganhadores"** serão selecionados todos os ganhadores por valor unitário ou data de entrega, sendo possível alteração manual destas sugestões. Ao concluir as marcações será possível finalizar o processo da cotação.

Para realizar o processo de decisão de compra, siga os seguintes passos:

1. Selecione no dashboard uma cotação que está respondida ou parcialmente respondida pelo fornecedor;
2. Selecione uma opção para melhor avaliação dos produtos cotados, para **Sugerir ganhadores** por Valor ou Data de entrega para que o site realize o destaque do fornecedor ganhador, escolhendo uma dessas opções;
3. Clique em **Salvar rascunho** para que esta decisão de compra possa ser realizada posteriormente ou finalize a cotação.

---

## Retorno para Cotação Desktop

Após a cotação estar com o status **"Finalizada"** na cotação web, acesse o **EstCotacao** e clique no botão **"Verificar cotações web"**, para que o sistema verifique todas as cotações finalizadas e gere o pedido de compra na retaguarda do Bimer referente a cotação importada.

> *[Imagem: Botão "Verificar cotações web" no EstCotacao]*
