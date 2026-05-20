# CRM — Atendimentos e Agendamentos — Bimer CRM

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Cadastro de Usuários](#cadastro-de-usuários)
  - [Tipo de contato](#tipo-de-contato)
  - [Mensagem](#mensagem)
  - [Formas de envio](#formas-de-envio)
  - [Local de Agendamento](#local-de-agendamento)
  - [Tipo de Agendamentos](#tipo-de-agendamentos)
  - [Atendimento](#atendimento)
- [CRM Administrador de Relacionamentos](#crm-administrador-de-relacionamentos)
  - [Criar atendimento](#criar-atendimento)
  - [Parecer no Atendimento](#parecer-no-atendimento)
  - [Seleção de Pessoas](#seleção-de-pessoas)
  - [Fatores críticos](#fatores-críticos)
- [CRM Consulta de Atendimentos](#crm-consulta-de-atendimentos)
  - [Utilizando o CRM Atendimentos](#utilizando-o-crm-atendimentos)
  - [Totalizar](#totalizar)
  - [Seleção de Atendimentos](#seleção-de-atendimentos)
  - [Dados da pessoa](#dados-da-pessoa)
- [Agenda](#agenda)
  - [Criar agendamento](#criar-agendamento)
  - [Dar parecer no Agendamento](#dar-parecer-no-agendamento)
  - [Outras ações no Agendamento](#outras-ações-no-agendamento)
  - [Agendamento restrito](#agendamento-restrito)
- [BI Atendimentos](#bi-atendimentos)

---

## Introdução

A sigla CRM vem do inglês **Customer Relationship Management** ou em português **Gestão de Relacionamento com o Cliente**.

Dentro das empresas usuárias de um ERP é essencial ter um bom sistema de CRM para medir e analisar a relação com as pessoas que giram em torno da empresa. Exemplos:

- Qual o nível de satisfação do cliente com meu produto e atendimento?
- Quando o cliente entra em contato, quais são os motivos? Insatisfação, reclamação, segunda via de boleto?
- Quais os compromissos agendados para cada colaborador de minha empresa? Quais dias livres eles possuem num período?

Os módulos do CRM do Bimer servem justamente para o gerenciamento dos funcionários da empresa e dos contatos feitos com os clientes, por meio de **atendimentos** e **agendamentos**.

---

## Configurações

### Cadastro de Usuários

É aqui que você define até onde vai a patente de cada usuário, ou seja, o que cada um pode fazer nos módulos do CRM. Acesse o perfil pré-cadastrado ou o perfil individual do usuário, localize os Sistemas **CRM (código 36)**, **CRM Atendimentos (código 38)**, **BI Atendimentos (40)** e **Agenda (50)** dando os devidos acessos.

> *[Imagem: Tela de permissões dos módulos CRM no Cadastro de Usuários]*

### Tipo de contato

Cadastre as tabelas para informar o modo como o cliente entrou em contato com a empresa, ou como a empresa entrou em contato com o cliente. Exemplos: E-mail, WhatsApp e Telefone.

Marque o checkbox **"Tipo de contato visível na tela de parecer"** para utilizar este tipo de contato no CRM.

Esta tabela fica no **Configurador >> CRM >> Tipos de contato**.

### Mensagem

Serve para escrever textos padrões para inserir em pedidos de vendas, atendimentos, agendamentos e outros. O objetivo é montar uma mensagem padrão, ou formulário que deve ser preenchido ao dar um parecer, servindo como um checklist de pontos que não podem ser esquecidos em determinada situação.

Esta tabela fica no **Configurador >> Geral >> Outros Cadastros >> Mensagens**. No momento de cadastrar a tabela, além de digitar o texto, você pode usar **variáveis** que serão carregadas automaticamente a partir dos dados da pessoa, vendedores e atendimento.

### Formas de envio

Defina o modo como a pessoa da empresa se deslocará até o cliente para realizar o agendamento. Esta tabela fica no **Configurador >> CRM >> Formas de envio**.

### Local de Agendamento

Ao criar os compromissos no módulo Agenda, use a tabela **Local de Agendamento** para informar o ponto de encontro.

> **Dica!** Não precisa inserir aqui dados de localização geográfica, pois o Bimer já preenche os dados de endereço a partir da pessoa selecionada no agendamento.

### Tipo de Agendamentos

Ao olhar os compromissos agendados, você precisa entender claramente o que é aquele agendamento, se é uma reunião, demonstração, treinamento, implantação e assim por diante.

No sistema vá no **Configurador >> Geral >> Atendimento/Agendamento >> Tipos de Agendamento**.

**Aba Geral** — Fique atento aos seguintes campos:

- **Nome do arquivo de layout para ficha de visita** — A ficha de visita é um arquivo do tipo RTM, que gera campos para preenchimento do que aconteceu na visita realizada ao cliente. O instalador de RTM possui alguns arquivos com o prefixo `FichaVisita` que podem ser usados.
- **Cor** — Selecione uma cor de sua preferência para exibir o agendamento. Exemplo: O agendamento vermelho representa visita para clientes insatisfeitos.
- **Cria atendimento** — Marque para gerar um atendimento em conjunto com este agendamento.
- **Envia spy system usuário** — Assim que o agendamento é criado, modificado ou excluído, o usuário recebe um e-mail.
- **Nr. dias próx. contato** — Informe o número de dias que será acrescido à data do agendamento para cálculo da data de próximo contato do atendimento.
- **Marcações Contato de venda, Produto, Forma de transporte, Tipo de Atendimento, Local de Agendamento, Valor** — Selecione quais opções ficarão habilitadas no momento da criação do agendamento. Ao lado de cada marcação existe o checkbox **"Preenchimento Obrigatório"**.

**Aba Spy System:**

- **Antes do Agendamento:**
  - **Envia spy system à pessoa da agenda. Dias de antecedência para envio do spy** — Selecione um período em dias para enviar um lembrete para o e-mail da pessoa vinculada no agendamento.
  - **Mensagem para cabeçalho e rodapé** — Selecione uma mensagem para inserir no cabeçalho e/ou rodapé do e-mail.
  - **Desprezar dias não úteis** — Os dias não úteis cadastrados no Configurador serão desconsiderados do parâmetro.

- **Depois do Agendamento:**
  - **Envia spy system à pessoa da agenda** — Marque para enviar um e-mail para a pessoa após o agendamento realizado.
  - **Nr. de dias após agendamento para envio do spy** — Selecione um período em dias para enviar um aviso após a conclusão.
  - **Somente agendamentos efetuados** — Marque para enviar o Spy apenas para os agendamentos que foram executados de fato.
  - **Arquivo HTML a ser enviado ao cliente** — Configure um arquivo HTML para enviar ao cliente após o agendamento.

**Aba Observação padrão** — Adicione alguma mensagem para utilizar no parecer do agendamento.

### Atendimento

Relacione a palavra atendimento com **registro e acompanhamento** de alguma situação. O cadastro da tabela de atendimento é dividido em: **CR – Centro de responsabilidade**, **Workflow** e **Tipo de Atendimento**.

#### Centros de Responsabilidade

O CR representa as fases, etapas, níveis de um atendimento. Fica presente no **Configurador >> Atendimento/Agendamento >> Centros de responsabilidade**.

Cadastre novos dados usando o padrão de classificação **Analítico** e **Sintético**. Você pode escolher uma cor de apresentação para o CR. Marque **"Encerrar processo"** quando o atendimento tiver que ser encerrado nesta fase.

> *[Imagem: Tela de cadastro de Centros de Responsabilidade]*

#### Workflow

No nosso bom português significa **fluxo de trabalho**. É nesta tabela que organizaremos os Centros de responsabilidades, para mostrar ao sistema o momento que será sugerido cada CR.

A tabela fica no **Configurador >> Atendimento/Agendamento >> Workflow**.

O quadro **Sequência** apresenta três tipos:

1. **Decisão (vermelho)** — Cadastre perguntas para o usuário decidir o que fazer em dado momento do atendimento. De acordo com a Resposta escolhida o atendimento será enviado para o código da sequência informado.

2. **Centro de responsabilidade (azul)** — Insira os CRs e a próxima ordem. Marque **"Deverá ser informado usuário para o próximo contato?"** para obrigar o usuário a delegar o atendimento.

3. **Workflow (verde)** — Gera a possibilidade de abrir um outro fluxo de trabalho já existente.

> **Para clarear as coisas:** Ao inserir um elemento no quadro sequência você precisa preencher o campo **Ordem** com uma numeração (de 5 em 5 ou 10 em 10). Este campo serve como referência ao informar a **Próxima ordem** na sequência do atendimento. Use o botão **Editar relatório** para analisar se o fluxo ficou correto.

> *[Imagem: Tela de configuração do Workflow com sequência de CRs e decisões]*

#### Tipos de Atendimento

É aqui que você cria os tipos de atendimentos, utilizando o Workflow e CRs criados. Fica presente no **Configurador >> Atendimento/Agendamento >> Tipos de Atendimento**.

**Aba Dados:**

- **Campos básicos** — Dê um nome para seu atendimento. Classifique usando o padrão sintético e analítico.
- **Prioridade** — Defina um grau de prioridade. Quanto mais baixo o valor maior a prioridade.
- **Nr. dias** — Informe o número de dias máximo para a data de próximo contato nos pareceres.
- **Workflow** — Selecione aquele que foi criado para gerenciar o fluxo do tipo de atendimento.
- **Cor de Apresentação** — Escolha a cor em que o atendimento será apresentado nos módulos do CRM.
- **Usuário de Spy quando for aberto atendimentos com este tipo de atendimento** — Preencha se houver alguém na empresa que precisa acompanhar os atendimentos criados com o tipo relacionado.
- **Bloquear a alteração do tipo de atendimento durante o parecer** — Não deixa mudar o tipo de atendimento após a criação.
- **Obrigar a informação do produto no atendimento** — Selecione para não deixar os usuários abrirem o atendimento sem o produto.
- **Obrigar a informação do tipo de contato e pessoa de contato no parecer** — Marque esta opção para não deixar os usuários realizarem o parecer sem preencher o tipo de contato e pessoa de contato.
- **Permite anexar arquivos** — Marque para deixar os usuários anexarem arquivos na tela do CRM. Limite o tamanho do arquivo em no máximo 10 MB.
- **Bloqueia a alteração da data e do usuário de contato interno do atendimento** — Não permite alterar a data e usuário de contato interno.

**Aba Parecer padrão** — Selecione mensagens para os usuários escolherem no momento de dar um parecer.

---

## CRM Administrador de Relacionamentos

É o modo mais simples de criar um atendimento no Bimer. Por meio dele você analisa todos os atendimentos (abertos ou encerrados) com determinada pessoa.

### Criar atendimento

A primeira coisa que fazemos no CRM é procurar o cadastro da pessoa desejada, inserindo o código, ou clicando na lupa para buscar a pessoa usando campos como CNPJ ou nome.

Após isso clique no **botão Atendimento** para criar sem produto. Ou clique na **aba Atendimento**, selecione o produto desejado e clique em **Atendimento** para criar o atendimento com o produto selecionado.

> *[Imagem: Tela do CRM Administrador com botão de criação de atendimento]*

### Parecer no Atendimento

Após criar o atendimento ou usar o botão de parecer é aberta a tela para registrar os dados de abertura, acompanhamento ou encerramento do atendimento.

- **Pessoa** — Exibe para qual pessoa foi aberto o atendimento.
- **Produto** — Exibe para qual produto foi aberto o atendimento.
- **Versão no atendimento** — É a versão do produto que o cliente possui (tabela no **Configurador >> CRM >> Versões**).
- **Data/hora (inicial/final) do parecer** — Registra a hora que começou e terminou a digitação do parecer.
- **Tipo de atendimento** — Classifique o atendimento de acordo com os tipos cadastrados.
- **Campo Descrição do parecer** — É o corpo do atendimento. Nele o usuário registra o que foi realizado.
- **Tipo de contato** — Preencha a forma de contato utilizada na comunicação com o cliente.
- **Pessoa de contato** — Digite o nome da pessoa que manteve contato.
- **Texto padrão do parecer** — É selecionado um formato padrão de como preencher o parecer. Caso o tipo de atendimento possua apenas um texto padrão este será preenchido automaticamente.
- **Dados do contato interno** — Serve para que duas pessoas monitorem um mesmo atendimento.
- **Digite aqui os usuários para envio de spy system** — Os usuários incluídos neste campo receberão via e-mail notificações do atendimento a cada parecer.
- **Botão Anexos** — Permite incluir no atendimento algum arquivo.
- **Botão A concluir** — Funciona como um botão de salvar o rascunho do parecer. A cada atendimento que você clica neste botão, ele é jogado para o botão **Pareceres pendentes**.

Após preencher todos os dados do parecer, clique em **OK**. O workflow configurado é utilizado para gerenciar as fases do atendimento.

Na última tela, escolha a **Data**, **Horário** e **Usuário de próximo contato** do atendimento. A tecla **F5** pode ser usada para colocar o mesmo usuário que está logado. A marcação **"Atendimento prioritário"** gera um atendimento na cor vermelha para o usuário de próximo contato.

> *[Imagem: Tela de parecer com campos preenchidos e seleção de próximo contato]*

### Seleção de Pessoas

Nesta função é possível escolher várias pessoas e gerar dados de modo otimizado, como atendimentos e características.

**Exemplo:** Digamos que é necessário gerar um atendimento de demonstração de um novo produto para 50 clientes. Em vez de selecionar um por um, use esse recurso e **Atribua um atendimento** para cada cliente.

> *[Imagem: Tela de Seleção de Pessoas com múltiplos clientes selecionados]*

### Fatores críticos

Veja aqui os atendimentos em aberto para a pessoa selecionada. Com isso, quando alguém estiver analisando a pessoa, saberá exatamente todas as pendências que há com a empresa.

Em cada atendimento há o tipo relacionado, a data e usuário de próximo contato. Clique em **histórico** para ver mais informações do atendimento e até mesmo fornecer pareceres.

---

## CRM Consulta de Atendimentos

Este módulo foi feito para que o funcionário na empresa tenha conhecimento dos atendimentos delegados para o seu usuário em determinado período. Por meio dele verifica-se todos os atendimentos abertos e encerrados de um usuário.

### Utilizando o CRM Atendimentos

O cenário padrão do CRM Atendimento já é mostrar os atendimentos delegados para o usuário logado na data atual. Para ver os atendimentos é só clicar em **Filtrar**.

> *[Imagem: Tela do CRM Consulta de Atendimentos com filtro aplicado]*

O objetivo do usuário é zerar os atendimentos do dia. É só clicar em cima de uma pessoa e ao lado visualizar os atendimentos da pessoa.

Na parte superior é possível dar o **Parecer** e visualizar o **histórico do atendimento**. Também é possível ver os **Fatores críticos**.

Alguns exemplos de filtros úteis:

- Resgatar o filtro que foi montado (utilizando o **Recuperar cenário**).
- O usuário pode filtrar outras pessoas de próximo contato e assumir os seus atendimentos, em casos onde um dos usuários está ausente por questões de licença médica ou férias.
- A característica de pessoa é bem útil, pois posso buscar os atendimentos dos clientes por perfil, como rede de lojas, e assim priorizá-los.
- O usuário pode canalizar ou ajustar o filtro para buscar os atendimentos de uma região, pessoa, de um período, os atendimentos encerrados e até de outras pessoas.

### Totalizar

Visualize o total de atendimentos para o usuário do filtro. Na parte de cima há a informação da totalização e na coluna **Data**, o número de atendimentos delegados para cada período.

### Seleção de Atendimentos

Selecione vários atendimentos e dê um mesmo parecer em todos eles. Isso é muito utilizado quando é necessário encerrar vários atendimentos com o mesmo parecer ou delegar as pendências de um usuário para outro.

Ao clicar no botão **Seleção de atendimentos** há duas opções:

#### Atendimento em lote

Selecione atendimentos em aberto de várias pessoas. Para isso clique em cada uma e arraste o atendimento para a caixa que é aberta. Após isso, clique em **Parecer** para inserir em todos os atendimentos a mesma informação. Escolha também um centro de responsabilidade (caso queira mudar o atual), e preencha a data, horário e usuário de próximo contato. Por fim clique em **Aplicar**.

#### Atendimento em aberto da pessoa

Clique em uma pessoa e em seguida neste botão para selecionar todos os atendimentos em aberto da pessoa selecionada. Após isso o processo é o mesmo visto no tópico anterior.

### Dados da pessoa

Veja informações de cada cliente, como o número de telefone, e-mail, redes sociais para entrar em contato com o cliente para dar segmento ao atendimento. Analise também outras informações como localização e características.

---

## Agenda

Gerencie aqui os compromissos dos usuários na empresa. Os agendamentos podem ser consultados por dia, por semana, ou por um outro período específico.

O módulo agenda possui a função operacional para criar e dar pareceres nos agendamentos. E funciona também como um BI onde é possível criar vários cenários para gerenciar os compromissos.

### Criar agendamento

Clique em **Filtrar** na abertura do módulo e em seguida no botão **Novo**.

Na tela aberta preencha os campos:

- **Tipo de agendamento** — Escolha o compromisso que será criado.
- **Data** — Insira o dia do agendamento. Ao clicar no botão **Adicionar** na área de Datas, você consegue selecionar de modo mais fácil um período recorrente.
- **Hr. Inicial e Hr. Final** — Informe o horário de intervalo do agendamento.
- **Usuário** — Insira os usuários da empresa que ficarão responsáveis pelo agendamento. A cada usuário que é colocado pressione a tecla **Enter**.
- **Pessoas** — Selecione as pessoas do agendamento.
- **Campos da parte debaixo** — Contato de venda, produto, forma de transporte, tipo de atendimento, local da agenda e valor são habilitados de acordo com a configuração na tabela de Tipo de agendamento.
- **Observação padrão** — Recupera as mensagens selecionadas no tipo do agendamento.
- **Observação** — Insira qualquer tipo de informação no seu agendamento.

> *[Imagem: Tela de criação de agendamento com campos preenchidos]*

Após gravar, o agendamento é exibido na tela principal de acordo com o filtro realizado. São criados agendamentos distintos, respeitando o número de usuários e pessoas informados na geração.

### Dar parecer no Agendamento

Após a data do compromisso, o usuário delegado deve abrir a agenda e dar um parecer informando se o agendamento foi realizado, quais dados foram combinados com o cliente, se houve algum tipo de problema, ou qualquer outro dado relevante.

Para dar o parecer localize o atendimento e clique no botão relacionado na parte de cima. Marque **"Agendamento realizado"** caso o compromisso tenha realmente sido executado, para que o sistema dê baixa no agendamento.

Se tiver algum atendimento vinculado ao agendamento, é aberta a tela de parecer do atendimento para o usuário fornecer maiores detalhes.

> **Se liga nas dicas!**
> - Se o agendamento estiver configurado para criar atendimento, qualquer parecer dado no agendamento será replicado para o atendimento.
> - É recomendável criar atendimentos a partir dos agendamentos, caso a empresa queira um controle mais detalhado para registrar as etapas do contato com a pessoa do agendamento.

### Outras ações no Agendamento

Ao clicar com o botão direito em cima do agendamento, ou nos ícones da parte de cima, é possível realizar ações como:

- **Excluir agendamento** — Delete o compromisso que foi criado.
- **Usuário avisado?** — Serve como um controle interno para verificar se o usuário do agendamento já foi notificado sobre o compromisso.
- **Autorizar agendamento** — Uma pessoa responsável pode autorizar a realização daquele agendamento.
- **Marcar como agendamento realizado ou Não realizado** — Serve como um atalho para ajustar o status do agendamento.

**Dias livres:**

1. Na tela de **Filtro** selecione os usuários do agendamento.
2. Clique no botão **Dias livres**, preencha um período para análise. Clique em **Atualizar**.
3. Veja o nome de cada usuário e na cor **azul** a informação que ele está totalmente livre e na cor **vermelha** que está parcialmente livre no dia. Para ver mais informações clique em **Detalhes**.

**Bloquear agenda:**

Permite que o usuário bloqueie algum dia em sua própria agenda para que outras pessoas não consigam marcar nenhum compromisso para ele naquele dia. Clique em **Bloquear Agenda**, informe uma data para o bloqueio e adicione. Ao tentar criar um agendamento para o usuário bloqueado, uma mensagem de aviso é exibida.

### Agendamento restrito

Dentro das empresas é comum existirem aqueles agendamentos que somente pessoas autorizadas podem ver para manter um nível de confidencialidade.

Para trabalhar com agendamento restrito, vá até o **Cadastro de usuários >> Usuários** ou **Perfil do usuário >> Sistema Agenda >> Tipos de agendamentos** e inclua os tipos que o perfil ou o usuário selecionado pode visualizar.

Se não preencher este quadro, o usuário terá acesso a todos os tipos de agendamentos. A partir do momento em que preencher um tipo de agendamento, o usuário terá acesso somente àquele(s) tipo(s).

Deste modo, ao acessar o painel dos agendamentos, alguns aparecem com a mensagem **"Acesso restringido"**.

> **Dicas sobre os filtros do Agenda:**
> 1. **Quadro usuários do agendamento** → Informe todos os usuários de uma equipe, cujo a agenda precisa ser monitorada. Após isso **Salve o cenário** e recupere sempre que precisar.
> 2. **Data Anterior** — Permite visualizar os agendamentos anteriores à data de hoje.
> 3. **Quadro Tipos de Agendamentos** — Busque todos os agendamentos com determinado tipo num período. Use o quadro **produto** para saber qual item da empresa gerou maior volume de agendamentos ou a opção **Cidades** para analisar qual localidade teve maior alcance.

---

## BI Atendimentos

Assim como os setores financeiro, estoque e faturamento possuem BI para analisar cada parte do negócio, o gestor também conta com o **BI Atendimentos** no grupo CRM para analisar os atendimentos gerados.

A primeira coisa que você deve fazer é montar um cenário e escolher uma área de pesquisa como base. Veja a função das mais comuns:

- **Estatísticas de Atendimentos** — É um dos principais filtros para analisar os atendimentos gerados no período. Nele você obtém dados de quais produtos, pessoas e tipos de atendimentos que geram o maior volume de dados. No rodapé da página, você observa o número de atendimentos do período e o volume de novos atendimentos.

- **Estatística de tipos de contatos** — Analise qual o canal mais utilizado para entrar em contato com as pessoas. Exemplo: Atendo os clientes via telefone, chat e e-mail. Qual desses três meios é o mais utilizado de modo geral?

- **Atendimento x Parecer** — Veja o volume de pareceres efetuados em determinado período, podendo agrupar pelo número do atendimento ou usuário. No rodapé veja o total de pareceres.

- **Atendimento x Agendamento** — Analise os atendimentos gerados por agendamentos e qual a situação de cada um deles. Você consegue obter dados da data do agendamento, tipo de agendamento e qual usuário estava como responsável.

Além dos filtros e análises contamos ainda com algumas funções operacionais como: **Dados da pessoa**, **parecer** e **seleção de atendimentos**.

> **Dicas sobre o gerenciamento de filtros:**
> - Use os botões **Salvar** e **Carregar** para montar os cenários e usar sempre que desejar.
> - O **Painel de grupo** está presente na tela de resultado. É usado para agrupar e totalizar os dados por uma coluna, como produto, pessoa, meio de contato e tipo de atendimento.
> - O botão **Seleção de campos** é usado para adicionar ou remover colunas da tela de resultado.
> - **Status do atendimento:** abertos e encerrados. Escolha o status do atendimento conforme necessidade.
> - Use ainda os campos de **característica de pessoa** para consultar o cliente por um determinado perfil, como grau de inadimplência.
