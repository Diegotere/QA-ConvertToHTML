# Inventário — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Cadastro de usuários](#cadastro-de-usuários)
  - [Opções do Estoque](#opções-do-estoque)
  - [Motivo da Contagem de Estoque](#motivo-da-contagem-de-estoque)
  - [Operações](#operações)
- [Módulo Inventário](#módulo-inventário)
  - [Opções do Inventário](#opções-do-inventário)
- [Rotina](#rotina)
  - [Lançamento manual](#lançamento-manual)
  - [Conferência](#conferência)
  - [Exemplos de Lançamentos](#exemplos-de-lançamentos)
  - [Lançamento por importação de txt](#lançamento-por-importação-de-txt)
  - [Lançamento por importação de txt – Lote e Série](#lançamento-por-importação-de-txt--lote-e-série)
- [Opções da tela Principal](#opções-da-tela-principal)
- [Opções da tela de itens](#opções-da-tela-de-itens)
- [Dicas Extras](#dicas-extras)
  - [Custo médio por setor](#custo-médio-por-setor)
  - [Custo de reposição](#custo-de-reposição)
  - [Lote / série](#lote--série)
  - [BI Estoque](#bi-estoque)

---

## Introdução

A palavra **Inventariar** traz o sentido de: enumerar, descrever, fazer o inventário de bens. O módulo Inventário do Bimer vem nessa pegada, ou seja, ajudar o setor de estoque da empresa a controlar quantidade e custo dos produtos.

Sobre a quantidade, é fundamental que o estoque físico (a quantidade que de fato existe dentro da empresa) e o estoque virtual (quantidade demonstrada no sistema por utilização dos usuários) batam corretamente.

Para você entender melhor, vou te mostrar alguns tipos de inventário mais comuns:

1. **Alimentar o saldo Inicial:** É um ajuste de quantidade, muito usado no começo da implantação, pois é necessário dizer para o sistema a quantidade de produtos que a empresa já tem em estoque (em resultado de entradas anteriores ao início de utilização do sistema, que foram dadas em outro software).
2. **Zerar o estoque:** Quando o gestor decide tirar um produto de linha e não quer mais vender ou usar o produto internamente, é só tirar a quantidade física e zerar a quantidade virtual, para que assim o item não seja mais movimentado. Este também é um ajuste de quantidade.
3. **Ajustar a quantidade em estoque:** Quando o saldo entre o estoque físico e virtual não bate, seja para mais ou menos, é necessário executar um ajuste de quantidade dos produtos. Exemplo: No fim do ano o Funcionário Paulo contou os produtos do Galpão da Zona Sul e verificou que haviam 450 caixas de canetas. Ao observar no sistema haviam apenas 430 caixas. Desse modo, ele executa o inventário ajustando a quantidade no Bimer.
4. **Ajuste de custo:** Pode ser de custo de reposição (Valor pago ao fornecedor para recomprar o produto) ou custo médio (valor do custo médio do produto em estoque).
   1. **Problemas gerados pelo custo incorreto:** O gestor pode tomar decisões erradas, como, por exemplo, na formação de um preço calculado, onde considera-se o custo de reposição do fornecedor para formar o preço de venda. Isso quer dizer que quanto maior o custo de reposição, maior o preço de venda. Se o valor no sistema não atualizou, o produto será vendido com valor incorreto e o gestor não atinge a margem desejada.
   2. O custo de reposição e custo médio são atualizados na entrada de produtos no sistema, quando a operação está configurada de modo correto: Opção **influencia no custo médio** (Aba Dados) e **Atualiza custo de reposição** (Aba Cálculos). Portanto, as operações que não tem essa marcação dão entrada sem mexer nos custos.

> **Se liga!** A diferença na quantidade do estoque pode ocorrer por vários motivos, entre eles:

- **Falta de lançamento de documentos:** Quando o sistema está configurado para permitir vender com quantidade negativa, pode-se facilmente esquecer de lançar uma nota de entrada que veio do fornecedor. Um outro problema que pode acontecer é realizar uma venda sem emissão de nota, assim não há um documento para registrar a saída do estoque.
- **Perda:** É comum nas empresas queimar, molhar ou quebrar um produto. Nestes casos é feita a saída física do item, retirando da empresa, porém o funcionário esquece de fornecer a saída no Bimer.
- **Retiradas do estoque:** Imagina numa empresa de varejo, o dono chega na prateleira e simplesmente pega um produto e leva consigo, mas não registra nada no sistema. Mais uma vez o que acontece? O estoque virtual exibe uma quantidade superior em relação à quantidade física.

---

## Configurações

### Cadastro de usuários

Acesse o módulo **Usuário** e, no cadastro do usuário ou perfil, inclua o módulo **Inventário (000060)** e suas respectivas permissões.

### Opções do Estoque

Acesse **Configurador / Estoque / Opções / Inventário**, você pode configurar as seguintes opções:

> *[Imagem: Tela de configurações do Inventário no Configurador]*

- **Só permitir a contagem do lote após a data e hora do inventário:** Não permite que outros usuários façam a contagem antes da data e hora estabelecida.
  - **Exemplo:** Usuário de criação: Supervisor. Data e hora da criação do lote: 01/08/20xx, 14h. Usuário da contagem: Colaborador tenta contar em 29/07/20xx. O sistema apresentará a mensagem: *"O início da contagem deste lote foi programado para o dia 01/08/20xx às 14:00h. Verifique!"*
- **Somente o usuário de solicitação do inventário poderá inserir ou remover itens do lote:** Impede que usuários da contagem removam ou insiram itens no lote de inventário. Apenas o usuário da criação pode fazer isso.
- **Permitir que a "data do inventário" seja retroativa:** Com essa opção dá para criar inventário com data anterior à atual.
- **Nr. de dias para identificar que os lotes de inventário estão abertos há muito tempo:** Informe um número de dias em atraso para o controle dos registros na tela principal do módulo inventário, quando passarão a ficar na cor vermelha.
- **Número de casas decimais para o valor unitário para o inventário:** Informe a quantidade de casas decimais para o valor unitário do inventário.
- **Número de dias máximo que a "data de inventário" poderá ser superior a data atual:** Limita a data do inventário para até X número de dias superior à data atual.

### Motivo da Contagem de Estoque

Serve para classificar os motivos de realizar o inventário, como: Inventário mensal, anual, zerar estoque, Ajuste de custo, etc. Embora a tabela não seja obrigatória, ela fornece um fator a mais no sistema para gerar filtros e relatórios.

Para cadastrar, acesse o **Configurador / Geral / Outros cadastros / Informações Gerais**. Neste local, selecione o grupo **Motivo da contagem** e adicione os motivos desejados. Caso não apareça este grupo cadastrado, digite "Motivo da Contagem" no campo Grupo, pressione Enter e após clique em Novo para cadastrar os motivos.

> *[Imagem: Cadastro de Motivo da Contagem de Estoque]*

### Operações

Será necessário cadastrar 6 operações. Para isso, acesse **Configurador / Estoque / Operação** e clique em Novo.

#### 1ª Operação – Entrada para Inventário

- Tipo de movimento **Entrada**
- **Atualiza estoque** marcada
- **Acerto** desmarcado
- **Influência no custo médio**, na aba Cálculos marque **Atualiza custo de reposição**
- Selecione os CSTs de PIS e COFINS genéricos para entrada (ex.: 99), e na aba Documento informe um Tipo de Documento interno, além de preencher os CFOPs genéricos.

#### 2ª Operação – Saída para Inventário

- Tipo de movimento **Saída**
- **Atualiza estoque** marcado
- **Acerto** desmarcado
- Informe CST de PIS e COFINS genéricos para saída (ex.: 49). Na aba Documento, informe um tipo de documento interno e os CFOPs genéricos.

#### 3ª Operação – Registro de Inventário

- Tipo de movimento **Saída**
- **Atualiza estoque** marcado
- **Atualiza financeiro** desmarcado
- **Acerto** desmarcado
- **Atualiza custo de reposição** desmarcado
- Informe CST de PIS e COFINS genéricos para saída (ex.: 49). Na aba Documento, informe um tipo de documento interno e os CFOPs genéricos.

#### 4ª Operação – Acerto de Custo Médio

- Tipo de movimento **Saída**
- **Atualiza estoque** marcado
- **Acerto** marcado
- **Atualiza custo de reposição** desmarcado
- Informe CSTs de PIS e COFINS genéricos para saída (ex.: 49). Na aba Documento, informe um tipo de documento interno e os CFOPs genéricos.

#### 5ª Operação – Operação de entrada (Somente quantidade)

- Tipo de movimento **Entrada**
- **Atualiza estoque** marcado
- **Atualiza custo de reposição** desmarcada
- **Influência no custo médio** desmarcada
- **Acerto** desmarcada
- Selecione os CSTs de PIS e COFINS genéricos para entrada (ex.: 99), e na aba Documento informe um Tipo de Documento interno, além de preencher os CFOPs genéricos.

#### 6ª Operação – Operação de saída (Somente quantidade)

- Tipo de movimento **Saída**
- **Atualiza estoque** marcado
- **Atualiza custo de reposição** desmarcada
- **Acerto** desmarcada
- Selecione os CSTs de PIS e COFINS genéricos para saída (ex.: 99), e na aba Documento informe um Tipo de Documento interno, além de preencher os CFOPs genéricos.

---

## Módulo Inventário

### Opções do Inventário

Acesse o módulo Inventário e clique no botão relacionado para configurar.

> *[Imagem: Tela de Opções do módulo Inventário]*

#### Aba Geral

- **Bloquear alteração de operações na criação do lote de inventário:** Bloqueia a mudança de operações ao criar o inventário. Assim só podem ser utilizados os cadastrados informados na aba Operação.
- **Obrigar o preenchimento do custo do produto (quando o inventário for de entrada):** Todo inventário de entrada precisa possuir a informação de custo. Isto evitará que o produto fique com o custo zerado.
- **Permitir a edição do custo do produto:** Marque para habilitar o ajuste do custo do produto. Sem essa marcação você não consegue gerar um inventário de ajuste de custo, apenas de quantidade.
- **Recuperar a quantidade em estoque dos itens na edição do lote de inventário:** Marque esta opção para o sistema mostrar a quantidade que há no estoque atualmente, ao editar um inventário já existente que não possui documento de ajuste gerado ainda.
  - **Exemplo:** O inventário foi gerado dois dias atrás e a quantidade em estoque eram de 40 produtos. Na data de hoje o sistema demonstra automaticamente 35 produtos pois 5 já foram consumidos no período.
- **Recuperar o custo dos itens ao sair da tela de edição do lote de inventário:** Quando fechar a tela de inclusão dos produtos no inventário, o custo inserido manualmente pelo usuário será substituído pelo custo médio ou de reposição do produto (de acordo com o campo **Tipo de recuperação de custo**).
- **A quantidade informada na tela principal de itens sobrescreverá a quantidade do produto corrente por usuário:** O sistema respeita a última quantidade lançada para o item.
- **A quantidade informada na tela principal de itens será somada à quantidade do produto corrente por usuário:** O sistema soma a quantidade informada.
- **Tipo de recuperação de custo:** Defina se o valor unitário do produto será o custo médio ou de reposição.
- **Data de Geração de Documento:** Escolha a data que será gravada no documento de ajuste do estoque:
  - **Data do lançamento:** Data programada para o lançamento dos itens no inventário.
  - **Data do inventário:** Data do inventário preenchida ao gerar um novo inventário.
  - **Data atual:** Data em que o usuário clica no botão de Liberar.
- **Utilizar a mesma data da configuração "Data para geração de documentos" na recuperação do custo do produto:** Ao clicar no botão Recuperar custo dos produtos, será utilizada a data informada no campo Data para geração de documento.
- **Quando o inventário estiver configurado para recuperar o custo médio do produto e este estiver zerado, recuperar o último custo médio do produto:** Recupera o último custo médio do produto quando o custo estiver zerado.

#### Aba Operação

Na aba Operação, informe as operações de entrada, saída, registro de inventário e de acerto de custo médio que foram cadastradas.

> *[Imagem: Aba Operação com as operações configuradas]*

#### Aba Importação

Configure a aba Importação para trabalhar com lançamento de inventário através de importação de arquivo txt.

> *[Imagem: Aba Importação com configurações de layout]*

---

## Rotina

Visão resumida de como faremos a rotina:

1. **Lançamento:** Manual ou por importação de arquivo de texto
2. **No Lançamento dos itens:** Seleção de produtos, preenchimento da quantidade e custo médio ou de reposição.
3. **Após finalizar o lançamento:** Rodar o Liberador de estoque.

### Lançamento manual

É o modo mais simples de lançar o inventário. Na tela principal, informe a Empresa de lançamento e clique em **Novo**. Em seguida preencha/visualize os campos:

- **Usuário de solicitação da contagem:** Usuário logado no sistema que está criando o inventário.
- **Data e Hora do inventário:** É o período da criação do inventário, preenchido com os dados atuais como sugestão. O usuário pode ajustar para uma data superior ou anterior.
- **Data do Lançamento:** Preenchido com a mesma data de criação do inventário como sugestão. Pode ser modificada.
- **Descrição do Lote:** Dê um nome para seu inventário de acordo com o tipo de lançamento. Exemplos: Contagem mensal, Contagem Anual, Zerar o estoque, Ajuste de custo Médio do Setor.
- **Motivo da contagem:** Campo de preenchimento opcional, usado para classificar o inventário.
- **Usuário da contagem:** O usuário da solicitação envia o inventário para um funcionário ficar responsável por ele.
- **Tipo de Inventário:** Defina a categoria do inventário (não pode ser modificado depois da criação):
  - **Somente quantidade:** As opções de custo ficam indisponíveis, e apenas as quantidades são atualizadas.
  - **Quantidade / custo médio por setor:** Ajusta a quantidade e custo médio na empresa e setor selecionados. O custo médio será modificado apenas no setor da tela de inventário. Esta opção fica habilitada apenas se a empresa apura o movimento por setores.
  - **Quantidade / custo de reposição:** Ajusta a quantidade e custo de reposição na empresa e setor selecionados. O custo de reposição também será atualizado em todos os outros setores.
  - **Custo médio:** Ajusta apenas o custo médio sem mexer na quantidade. Esta opção fica habilitada apenas se a empresa não apura o movimento por setores.
- **Operações:** São apresentadas aquelas que foram configuradas na tela de Opções.
- **Marcar automaticamente para geração de documento os itens lançados neste lote:** Conforme for lançando o produto, já é feita a marcação para gerar o documento de ajuste.

Após definir as opções e clicar em **Ok** é aberta a tela de **Itens do inventário**. Clique em **Novo** e adicione os produtos.

> *[Imagem: Tela de Itens do inventário com produtos lançados]*

> **Observação:** a partir da versão 10.00.07.00 do Bimer, na tela de localização do produto pela lupa, é possível visualizar as imagens do produto, caso ele possua imagens vinculadas em seu cadastro.

Ao clicar com o botão direito do mouse em cima de um produto, você tem 4 opções:

1. **Marcar / Desmarcar:** Seleciona de modo individual o produto para criar o documento de ajuste no estoque.
2. **Marcar os contados:** Seleciona todos os produtos que estão com o quadrado azul.
3. **Marcar todos:** Seleciona todos os produtos (mesmo os que não foram contados ainda).
4. **Desmarcar todos:** Desfaz a marcação de todos.

> **Se liga!** Se os produtos adicionados não possuírem o quadrado vermelho eles permanecerão no inventário como contados, mas não ajustarão quantidade e custo no estoque.

Após clicar em **Ok** você retorna para a tela principal. Agora é só selecionar seu inventário e clicar em **Liberar**. O sistema informará que você precisa executar o módulo **Liberador de estoque**.

Após Liberar o inventário clique em **Mostrar inventário com documento gerado** para vê-lo novamente, agora na cor verde.

### Conferência

Para confirmar se a rotina funcionou:

- **Linha do tempo:** Após rodar o liberador de estoque, clique em cima do inventário e no botão da Linha do tempo na tela principal. O retorno positivo é quando aparecem os descendentes do inventário, que representam os ajustes no estoque.
- **Consulta de estoque:** Abra o módulo Consulta de estoque, procure pelo seu produto e confira se a quantidade e custos foram ajustados. Você também pode clicar em **Informações complementares / Movimentação** para ver os detalhes do ajuste.

### Exemplos de Lançamentos

> *[Imagem: Exemplos de tela de Itens preenchida para cada tipo de inventário]*

O ajuste de custo de reposição ou médio a ser efetuado, depende da marcação do tipo de inventário marcada na tela de criação do lote de inventário, porém o campo de lançamento (Vl. custo unitário) é o mesmo.

### Lançamento por importação de txt

Para lançar inventário importando arquivo TXT, é necessário criar primeiramente o arquivo txt com as informações necessárias. Esse arquivo pode ser gerado de modo manual ou até por um coletor de dados.

Para que o sistema possa reconhecer corretamente as informações contidas no arquivo, esteja atento às configurações existentes no módulo Inventário, em **Opções, aba Importação**.

Neste caso, usaremos a seguinte sintaxe:

```
Código do produto; Quantidade em estoque; Valor total de custo
```

> **Dica!** Caso o valor contenha centavos, utilize **ponto** em vez de **vírgula** na montagem do arquivo.

Após a criação do arquivo de texto, basta salvá-lo em um local qualquer na máquina. Voltando ao módulo Inventário, na tela principal clique em **Importação de inventário**.

> *[Imagem: Tela de Importação de inventário]*

Preencha as informações necessárias e informe o arquivo txt criado. Em **Tipo de Lançamento** temos duas opções:

- **Individual (Produto):** Apenas os itens que estão presentes no arquivo são levados para a tela do inventário.
- **Total:** São levados os produtos do arquivo com a quantidade preenchida, os demais que tem quantidade em estoque no Bimer são levados com a quantidade zerada.

> **Cuidado** com a opção Total, pois você pode zerar todo seu estoque com essa marcação.

> **Observação:** O valor total do custo será dividido pela quantidade para encontrar o valor unitário de custo.

Para finalizar, marque os produtos e clique em **OK**. Após criado, basta liberar o lote e executar o módulo **Liberador de Estoque**.

### Lançamento por importação de txt – Lote e Série

Se você trabalha com lote de produto ou série, no seu arquivo use o seguinte padrão (delimitador ponto e vírgula):

```
Código do produto + Código do Lote/Série; Quantidade em estoque; Valor total de custo
```

**Exemplo:** `0001262636;100;10.25`

No primeiro campo, o item tem o código 000126 e o lote 2636. Deve ser criada uma linha para cada lote.

Se um produto série for importado, o campo quantidade deve ser 0 ou 1. Se colocar um valor maior que 1, o sistema muda para 1 na tela do inventário.

Antes de realizar a importação, verifique se no arquivo há novos lotes/séries. Se estes não estiverem cadastrados, o sistema pode fazer isso automaticamente. Para isso, clique em **Opções / Importação** e marque **"Cadastrar lotes e séries para produtos automaticamente na importação"**.

Na tela de importação, marque a opção **Individual (Lote/Série)**. Informe o diretório do inventário e o tipo de código de produto presente no arquivo.

> **Se liga nas dicas:**
> 1. O sistema traz uma linha para cada lote distinto;
> 2. Os lotes que já existem no sistema, referente ao produto que está sendo importado, também são exibidos, mas com a quantidade zerada;
> 3. Todos os lotes após a importação aparecem como marcados para a geração do ajuste (quadradinho vermelho). Se você não quer zerar o estoque dos lotes que já existem, clique com o botão direito em **Desmarcar** ou **Desmarcar todos**.

---

## Opções da tela Principal

- **Editar:** Após criar o inventário e inserir os itens, use este botão para mexer nos campos habilitados (descrição do lote, datas, setor).
- **Excluir:** Deleta o inventário do sistema e estorna todas as movimentações. Procedimento irreversível. Use **Mostrar inventários excluídos** para visualizar os apagados (cor cinza).
- **Localizar:** Busque os inventários usando campos de pesquisa como nome do setor ou usuário de solicitação.
- **Reabrir:** Se o inventário foi liberado com informação errada, clique em Reabrir para estornar a movimentação e permitir edição. Após editar, Liberar e rodar o Liberador de estoque.
- **Relatórios:** Dois relatórios disponíveis — na tela principal (layout configurado em Opções / Geral) e na tela de itens.
- **Itens do Inventário:** Ajuste os itens clicando neste botão ou dando duplo clique no inventário.
- **Lançamento Otimizado:** Atalho para ajustar rapidamente a quantidade dos itens já lançados, sem abrir a tela de itens.

> **Olha a dica!** Nas opções do módulo Inventário, o campo de **Preço** deve ter a tabela vinculada no cadastro do produto, para que ao inserir a variável `VlPrecoUnitarioVenda`, o preço da venda saia no relatório.

---

## Opções da tela de itens

- **Editar:** Ajuste a quantidade e custo do produto. Também pode digitar o código do produto e quantidade para fazer o ajuste.
- **Excluir:** Deleta o produto inserido no inventário. Pode inserir novamente a qualquer momento.
- **Localizar:** Facilita a busca de um produto presente no inventário.
- **Selecionar Itens:** Insira vários produtos de modo otimizado — selecione por setor, grupo ou família específica.
- **Recuperar custo do produto:** Os custos zerados e preenchidos serão substituídos pelo custo resgatado no sistema.
- **Recuperar quantidade em estoque:** Busca a quantidade em estoque e preenche a coluna Qt. Estoque.
- **Zerar custo:** Zera todos os custos já informados na tela do inventário.

> **Atenção!** Este botão vai fazer o custo médio ou de reposição ficar zerado em todos os locais do sistema.

- **Zerar quantidade item:** Zera todas as quantidades já informadas na tela do inventário.
- **Atualizar quantidade com estoque:** Preenche a quantidade do item no inventário com aquela presente no estoque atual.

---

## Dicas Extras

### Custo médio por setor

O que define se a opção **Quantidade / custo médio por setor** fica habilitada ou não é a tabela `Configuracao` no banco de dados, que possui a coluna `NmConfiguracao` com o parâmetro `StApuraCustoMedioPorMovimento`.

- Quando a coluna `VlConfiguracao` possuir **S** = habilitado para custo médio por setor.
- Quando possuir **N** = desabilitado.

> **Atenção!** Nas novas versões essa linha não existe mais, sendo assim a apuração do custo médio por padrão é por setor. Se for necessário alterar, entre em contato com seu superior imediato.

Os inventários lançados antes da mudança na tabela **não** serão atualizados automaticamente. Se desejar mexer nos inventários retroativos, acesse o **Configurador / Estoque / Alinhamentos / Estoque**:

- Preencher a(s) empresa(s).
- Selecionar o(s) Produto(s).
- Marcar as opções: **Alinhamento de estoque das empresas e setores** + **Alinhamento do inventário** + **Alinhamento das unidades de estoque**.
- Deixe a data inicial vazia.
- Clique em Concluir.

### Custo de reposição

É possível ajustar o custo de reposição do produto e a quantidade direto no módulo Inventário. Mas também dá para ajustar o custo de reposição pelo módulo **Cadastro de Produtos**.

No módulo, acesse a opção de **Reajuste de preços / Reajustar preços / Selecione Reajustar custo de reposição**, defina o percentual ou valor de reajuste. Nas demais abas, faça os filtros para carregar os produtos que serão ajustados.

> **Dica!** O reajuste de custo de reposição do produto não mexe na quantidade. E assim como no inventário o ajuste é feito no custo da empresa e de todos os setores relacionados ao produto.

### Lote / série

É possível fazer o lançamento manual de lote e série. Na tela de itens do inventário, clique em **Novo** e informe os dados pedidos. Caso informe uma série ou lote com códigos inexistentes, o sistema pergunta se deseja cadastrar novos dados.

Na **Seleção de campos** da tela de Itens do inventário há a coluna **Lote / Série**, para facilitar a localização dos lotes e séries presentes no inventário.

### BI Estoque

Pelo BI Estoque é possível criar o lote de inventário também. Escolha uma das áreas de pesquisas que habilite o botão **Seleção de produtos**.

Após gerar o Resultado, arraste todos os itens desejados para a tela de seleção de produtos, clique em **Criar lote**, preencha os campos **Descrição**, **Motivo da contagem**, **Empresas** e **usuários de destino da contagem** e clique em **OK**.

O recurso de usar o BI Estoque é muito útil quando o gestor está analisando informações sobre o estoque e já deseja criar um inventário com as informações na tela, possibilitando mais dados para filtrar os itens que de fato precisam ser inventariados.
