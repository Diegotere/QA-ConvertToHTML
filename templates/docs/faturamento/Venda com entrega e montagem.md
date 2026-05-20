# Venda com entrega e montagem — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [O que configurar?](#o-que-configurar)
- [Rotina](#rotina)

---

## Introdução

Se alguma empresa faz a venda e controla a montagem do produto, é só contar com o sistema Bimer. Nele a rotina será basicamente:

- **Venda** – Gerar a NF-e de venda com os produtos que serão entregues e montados, informando os dados do mapa de carregamento. Nesta rotina, configurar a base para trabalhar com mapa de carregamento é obrigatório;
- **Prestação de contas** – Liberar a nota e o mapa de carregamento, de acordo com a entrega dos produtos;
- **Ordem de Serviço** – Gerenciar a montagem dos produtos.

---

## O que configurar?

### Opções do Faturamento

Acesse **Configurador / Faturamento / Opções / Mapa de carregamento**, marque **"Trabalhar com mapa de carregamento"** e defina o momento em que o mesmo será gerado. As informações referentes ao mapa de carregamento serão utilizadas no módulo **Prestação de Contas**.

> *[Imagem: Tela de configurações do Mapa de carregamento com a opção marcada e o momento de geração definido]*

A opção **"Localizar motorista pelo cadastro de usuários"** permite buscar pelo cadastro do usuário do motorista, para vincular ao mapa de carregamento. Além disso, devemos vincular uma **função** para o motorista.

Em seguida acesse **Configurador / Faturamento / Opções / Montagem** e marque a opção **"Trabalhar com montagem de produtos"**.

> *[Imagem: Tela de configurações de Montagem com a opção "Trabalhar com montagem de produtos" marcada]*

Configure os campos, seguindo as dicas:

- **Não fazer a distribuição e delegação automática dos montadores** – Com ela desmarcada, o sistema já delega cada montagem para as pessoas informadas nesta tela, na parte de **Montadores**. Se estiver marcada, a cada montagem é necessário preencher o montador manualmente, na ordem de serviço;

- **N° de dias limite para execução da montagem** – Esta informação será lançada automaticamente dentro da montagem no módulo de **Ordem de Serviço**, no campo **Data Limite**. Serve para definir a política da empresa para montagem.
  - Exemplo: Quando o cliente compra o produto, a empresa tem até 15 dias para realizar a montagem;

- **Tipos de Atendimentos e Centro de responsabilidade** – Informe cada campo conforme a descrição. Exemplo: O tipo de atendimento para montagem será levado na geração da Ordem de serviço, e exercerá o Workflow programado para registrar as etapas no atendimento;

- Vincule a **Empresa** e as **tabelas de preço** para montagem e desmontagem;

- Informe os cadastros de **terceiros ou funcionários dos montadores**. A soma do Nr. OS informados nesse lançamento deve ser igual ou menor que o valor informado no campo **"reiniciar contagem de montagens a cada xxx ordens de serviço"**.
  - Isso auxilia na distribuição das montagens entre as pessoas informadas na tela, conforme o limite definido para cada um. E ao atingir o número das ordens de serviços (definido no campo), o contador é reiniciado.

> *[Imagem: Tela de configurações de Montagem com os campos de montadores, tipos de atendimento e tabelas de preço preenchidos]*

### Cadastro de Pessoa

O montador é cadastrado na categoria **Funcionários** ou **Terceiros**. Não há nada de especial no cadastro, é só fazer do modo como você já está acostumado(a).

> *[Imagem: Tela de cadastro de pessoa na categoria Funcionários ou Terceiros]*

### Cadastro de Usuários

No campo **"Pessoa correspondente"** faça o vínculo de um usuário para cada montador cadastrado no módulo **Pessoa**.

> *[Imagem: Tela de cadastro de usuários com o campo "Pessoa correspondente" vinculado ao montador]*

### Cadastro de Produtos

Selecione o produto e vá na aba **Adicionais**.

- **Sem montagem** – Com esta opção marcada, não será gerada OS para montagem;
- **Com montagem** – Com esta opção selecionada, após os entregadores realizarem a prestação de contas informando que o produto foi entregue, será gerado um atendimento de montagem no módulo **Ordem de Serviço** para que seja agendada e realizada a montagem do produto;
- **Opção Montagem eventual** – Com esta opção marcada, o sistema não gera ordem de serviço, mas se na mesma nota existir um produto que possui montagem, será gerada montagem incluindo o produto. Esta opção será utilizada para produtos que podem ser montados pelo próprio cliente, como exemplo uma cama, porém, existem situações em que a montagem deste item poderá ser solicitada.

  **Exemplos:**
  1. Se o cliente estiver incapacitado para realizar a montagem, seja por idade avançada, problemas de saúde, etc.
  2. O cliente comprou um guarda-roupa e uma cama; ele tem condições de montar a cama sozinho, mas como o guarda-roupa terá que ser montado por um especialista, ele pode aproveitar para montar a cama também.

> *[Imagem: Tela de cadastro do produto com a aba Adicionais e as opções de montagem]*

### Opções do Financeiro

Para que seja feito o lançamento de valores na prestação de contas dos mapas de carregamento impressos, é necessário configurar os tipos de baixa no **Configurador / Financeiro / Opções / Baixas / Configuração de tipos de baixa**.

> *[Imagem: Tela de configuração de tipos de baixa no Configurador Financeiro]*

### Configurações opcionais

Se você marcou a opção **"Localizar motorista pelo cadastro de usuários"** no Configurador, aba Faturamento, terá que cadastrar uma **Função** para o Motorista, no módulo **Configurador / Geral / Outros cadastros / Funções**.

Além de inserir a Função no módulo Configurador, Aba Faturamento, é necessário vincular esta Função aos usuários dos montadores, no módulo **Cadastro de Usuários**, aba **Configurações do usuário**, aba **Geral**, no quadro **Funções exercidas**.

> *[Imagem: Tela de cadastro de usuários com a função de motorista vinculada no quadro Funções exercidas]*

---

## Rotina

### Geração do mapa de carregamento

Veja uma rotina completa de venda de produtos com entrega e montagem.

**Caso 1 – Gerar mapa de carregamento no cadastro do pedido:**

Se estiver configurado no **Configurador / Faturamento / Opções / Mapa de carregamento** para gerar mapa de carregamento **"No cadastro do pedido"**, será necessário inserir as informações do mapa de carregamento no **Pedido de Venda**, tela de inclusão/edição de pedido, aba **Mapa de carregamento (F3)**.

> *[Imagem: Tela do Pedido de Venda com a aba Mapa de carregamento (F3) aberta]*

Nesta tela é possível selecionar um mapa de carregamento já existente, criar um novo, alterar o cadastro do mapa de carregamento e até mesmo excluir o mapa de carregamento. Depois é só dar continuidade à rotina de venda normalmente.

O campo **"Nome do motorista"** permite preencher o nome do motorista, ou caso a opção **"Localizar motorista pelo cadastro de usuário"** esteja marcada, o sistema não permitirá digitar o nome do motorista, mas habilita o botão para localização do usuário do motorista.

**Caso 2 – Gerar mapa na transformação do pedido em NF/OE:**

Se no **Configurador / Faturamento / Opções / Mapa de carregamento** estiver configurado para gerar mapa de carregamento **"Na transformação do pedido em NF/OE"**, será necessário inserir as informações do mapa no módulo de geração de notas fiscais/ordens de entrega a partir de pedidos.

> *[Imagem: Tela de geração de notas fiscais a partir de pedidos com o campo de mapa de carregamento]*

Nesta tela é possível também gerar o mapa, cadastrar um novo ou selecionar um mapa já existente. Em seguida basta prosseguir com a rotina de venda normalmente.

**Caso 3 – Gerar mapa na impressão/geração do XML da NF:**

Caso no **Configurador / Faturamento / Opções / Mapa de carregamento** esteja marcado para gerar mapa de carregamento **"Na impressão/geração do XML da NF"**, será necessário preencher os dados do mapa de carregamento no momento da impressão/envio da nota fiscal/ordem de entrega.

> *[Imagem: Tela de impressão/envio da nota fiscal com o campo de mapa de carregamento]*

Assim como nas outras opções, aqui também é possível gerar o mapa, cadastrar um novo ou selecionar um mapa já existente.

Após autorizar e liberar sua NF-e com os itens, já é possível ir para a próxima etapa.

> **Dica:** Nas telas onde aparecem as opções de marcar **"Imprimir mapa de carregamento"**, é aberta a opção para selecionar o layout e fazer a impressão.

> *[Imagem: Opção de imprimir mapa de carregamento com seleção de layout]*

O mapa de carregamento pode ser usado pelos entregadores e montadores para controle interno, e até para assinatura do cliente com ciência dos processos realizados:

> *[Imagem: Exemplo de mapa de carregamento impresso com os dados da entrega e espaço para assinatura do cliente]*

### Impressão e Liberação do Mapa de Carregamento

Acesse o módulo **Prestação de Contas** e faça a localização do mapa de carregamento desejado.

Pelo módulo **Prestação de Contas** você pode imprimir o mapa de carregamento clicando no símbolo da impressora.

> *[Imagem: Tela do módulo Prestação de Contas com o mapa de carregamento localizado e o botão de impressão]*

Depois que os entregadores retornam é necessário fazer a **prestação de contas**, lançando valores recebidos e confirmando o que foi ou não entregue. Isso pode ser feito clicando 2 vezes sobre a Nota ou pelo botão **"Liberar a nota selecionada"**:

> *[Imagem: Tela de prestação de contas com o botão "Liberar a nota selecionada"]*

O documento e o valor ficam com status **Liberado** confirmando que foi **Entregue**. Agora é só clicar no botão **"Liberar o mapa de carregamento"** na parte de cima:

> *[Imagem: Botão "Liberar o mapa de carregamento" na parte superior da tela de Prestação de Contas]*

Veja que o status do Mapa de carregamento muda, e a linha do tempo demonstra a OS gerada:

> *[Imagem: Tela de Prestação de Contas com o status do mapa de carregamento atualizado e a linha do tempo mostrando a OS gerada]*

### Gerenciamento da Montagem

No módulo **Ordem de Serviço** busque as montagens que foram criadas, podendo localizar os clientes pelo botão de **Filtro**. Veja também o número da Montagem assim como exibiu na linha do tempo do módulo Prestação de contas.

> *[Imagem: Tela do módulo Ordem de Serviço com as montagens listadas e o filtro de busca]*

Dentro da Montagem, podemos informar mais detalhes sobre a montagem, alterar o montador, confirmar o valor de repasse e dados do agendamento com o cliente (o campo **"Data efetiva"** representa a data marcada para a montagem).

> *[Imagem: Tela de detalhes da montagem com os campos de montador, valor de repasse e data efetiva]*

Após feita a montagem, podemos dar um **Parecer** e assim seguirá o workflow configurado no tipo de atendimento configurado para montagem.

> *[Imagem: Tela da montagem com o botão Parecer e o workflow de atendimento]*

Podemos também gerar uma **montagem avulsa** clicando em **Novo**. Ou caso o produto tenha sido levado pelo próprio cliente, mas seja necessária a montagem, a mesma poderá ser gerada através do botão **"Gerar montagem"** que se encontra na tela principal do módulo Ordem de Serviço.

Nesse caso realize o filtro por **pedido de venda** ou **documento**, pendente de montagem do produto no cliente.

> *[Imagem: Tela principal do módulo Ordem de Serviço com o botão "Gerar montagem" e o filtro por pedido de venda ou documento]*

E se você desejar realizar ações em massa nas Montagens, clique em **Seleção**, arraste os documentos e realize ações como:

- **Efetuar parecer**;
- **Alterar a data de montagem** (data efetiva);
- **Imprimir** vários documentos de modo rápido e simples.

> *[Imagem: Tela de seleção em massa de montagens com as opções de ações em lote]*

> **Última dica!** Se você tiver alguma dúvida para configurar o Bimer para gerar NF-e, nos módulos Ordem de serviço ou Prestação de contas, acesse a área de manuais da UCA e busque a apostila relacionada à sua dúvida.
