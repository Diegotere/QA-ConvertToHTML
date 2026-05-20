# Requisição de Materiais — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Setores](#setores)
  - [Cadastro de Usuários](#cadastro-de-usuários)
  - [Opções do Módulo Requisição](#opções-do-módulo-requisição)
- [Rotina](#rotina)
  - [Criar requisição](#criar-requisição)
  - [Atender requisição](#atender-requisição)
  - [Gerar cotação ou pedido de compra](#gerar-cotação-ou-pedido-de-compra)
- [Ressuprimento de estoque](#ressuprimento-de-estoque)
- [Lista de Materiais](#lista-de-materiais)
- [Ponto de atendimento (PDA)](#ponto-de-atendimento-pda)
- [Relatório de conferência](#relatório-de-conferência)
- [Requisição urgente](#requisição-urgente)
- [Devolução](#devolução)
- [Perda](#perda)

---

## Introdução

A rotina de requisição de materiais tem como objetivo automatizar solicitações de produtos/materiais entre os setores de uma mesma empresa e permite que cada requisição seja controlada, podendo ser aprovada ou não por um responsável.

Com essa rotina o produto é transferido de um setor para outro. Com isso, teremos os setores:

- **Requisitante:** Pede o produto para outro setor.
- **Requisitado:** Analisa o pedido do setor requisitante para enviar os produtos e atender à requisição.

**Exemplo 01:** Em uma empresa todo o estoque de produtos fica em um setor chamado "Estoque principal". Caso o setor "Administração" necessite de mais papel A4, ele deverá realizar uma requisição deste material para o setor principal. Após a requisição, a pessoa do setor de estoque responsável por autorizar ou rejeitar as requisições, verificará qual decisão tomará. Caso autorize, o material sairá do "Estoque principal" e irá para a "Administração".

**Exemplo 02:** Os produtos de reposição do setor loja (varejo) ficam no setor depósito e, quando estão em falta, são solicitados. A loja recebe os produtos e faz a venda para os clientes da empresa.

> **Se liga!** Esta rotina somente funciona se a empresa trabalhar com setores, e somente serve para atender requisições internas dos setores da mesma empresa, não podendo assim realizar requisições entre setores de outras empresas. Para transferir produtos para empresas diferentes, o cliente deverá realizar a emissão de uma NF-e de transferência.

---

## Configurações

### Setores

Acesse o **Configurador / Geral / Setores**. Caso não tenha os setores, deverá cadastrá-los para a empresa que será considerada na requisição dos materiais. Além disso, é necessário informar quais setores controlam estoque e quais atenderão às requisições feitas pelo setor requisitante.

Na aba **Usuários**, selecione as pessoas que terão permissão para movimentar este setor.

> *[Imagem: Cadastro de setores com aba Usuários]*

Ainda no cadastro dos setores, ao clicar duas vezes sobre o setor adicionado, você poderá permitir que o setor movimente quantidade negativa:

- **Permite cadastrar:** Permite criar a requisição, mesmo que o setor requisitado esteja sem estoque do produto. Muito útil para que a requisição seja criada para iniciar o processo de compras.
- **Permite atender:** Permite atender a requisição, mesmo que o setor requisitado não tenha estoque do produto.

> **Dica:** Se você cadastrou novos setores é necessário vinculá-los no cadastro de produtos na aba **Empresa / Setores**. É possível fazer a inclusão em massa pelo **Configurador / Estoque / Manutenção de Produtos / Vincular/desvincular setor com produto**.

### Cadastro de Usuários

Acesse o módulo **Cadastro de usuários**, localize os funcionários que trabalharão com a rotina de requisição e conceda acesso ao módulo **Requisição de Material**. Dentro das configurações do módulo, conceda permissão a **requisitante** (para quem vai solicitar os produtos) e **requisitado** (para quem atenderá a solicitação).

> *[Imagem: Permissões do módulo Requisição de Material no cadastro de usuários]*

### Opções do Módulo Requisição

Acesse o módulo **Requisição de Material** e clique em **Opções**.

> *[Imagem: Tela de Opções do módulo Requisição de Material]*

#### Aba Geral

Para que a rotina funcione, é necessário configurar as operações a serem utilizadas:

| Operação | Descrição |
|----------|-----------|
| **Requisição** | Operação com tipo de movimento saída, atualiza estoque e possui tipo de documento interno. Será usada na Requisição de consumo. |
| **Devolução** | Operação com tipo de movimento devolução de saída, atualiza estoque e possui tipo de documento interno. Usada nas movimentações de devolução. |
| **Transferência** | Operação com tipo de movimento transferência de saída, que NÃO possui operação de entrada para transferência, atualiza estoque e possui tipo de documento interno. Será usada na Requisição que não seja de consumo, quando os dois setores controlam estoque. |
| **Perda / Controla Estoque** | Operação com tipo de movimento saída, atualiza estoque e possui tipo de documento interno. Usada quando o setor requisitante e requisitado é o mesmo. |
| **Perda / Não Controla Estoque** | Operação com tipo de movimento saída, não atualiza estoque e possui tipo de documento interno. |

Opções adicionais da aba Geral:

- **Ordem dos itens nos módulos requisitante, requisitado e relatório** — Defina a ordem dos itens: por **Digitação** (mesma ordem de inserção) ou por **Código** (ordem crescente).
- **Trabalhar com leitor óptico** — Permite utilizar leitor óptico nos campos de código do produto.
- **Manter as quantidades pendentes nas requisições atendidas parcialmente** — Ao atender parcialmente, a requisição fica como parcial permitindo atender futuramente. Se desmarcada, atenderá com corte.
- **Criticar quantidade pedida superior a quantidade máxima informada no produto** — Considera a quantidade máxima do cadastro do Produto / Empresa.
- **Permitir alterar a prioridade da requisição** — Permite alterar prioridade pelo botão direito do mouse.
- **Permitir baixar produtos não cadastrados** — Permite dar baixa em produtos ainda não cadastrados, usando um produto padrão configurado em **Configurador / Geral / Opções / Geral**.
- **Criticar o saldo do lote/série no atendimento de uma requisição** — Emite alerta quando o saldo do lote/série é inferior à quantidade atendida.
- **Atender a requisição após sua criação** — Atende totalmente de forma automática ao criar.
- **Trabalhar com confirmação de recebimento de requisição** — Habilita o botão de confirmação de recebimento.
- **Gerar arquivo de aviso de atendimento** — Cria um arquivo .txt no diretório informado contendo dados da requisição criada.
- **Impressão de requisição** — Ao marcar, a requisição será impressa automaticamente ao ser gerada.

#### Aba Impressoras por setor

Aponte a impressora presente em cada Setor requisitado. Ao criar a requisição em qualquer setor requisitante, esta será impressa automaticamente no setor requisitado, servindo como alerta.

> **Dica:** O ideal é que as impressoras estejam na rede, e não locais nas máquinas.

#### Aba Módulo requisitante

- **Permitir editar o código da requisição** — Habilita o campo N° Requisição para alteração manual.
- **Permitir editar a data e hora da requisição** — Permite ajustar períodos retroativos.
- **Será obrigatório o preenchimento do centro de custo** — A requisição não poderá ser criada sem centro de custo.
- **Permitir a inclusão de um mesmo produto mais de uma vez** — Permite adicionar o mesmo produto repetidamente. Com **Aglutinar os itens iguais na requisição**, os itens repetidos serão aglutinados.
- **Habilitar o campo lote/série na tela de itens** — Exibe campo para incluir lote/série do item selecionado.
- **Na requisição de consumo, permitir utilizar apenas produtos vinculados ao setor requisitante** — Restringe produtos ao setor requisitante.
- **Permitir a inclusão de produtos inativos para compra** — Permite adicionar produtos inativos.
- **Apresentar custo da última compra do produto** — Apresenta colunas Vl. último custo e Valor total.

#### Aba Módulo Requisitado

Permite criar requisições de vários tipos e indicar **cores** e **arquivos de som** distintos para cada tipo. Os funcionários que atenderão os pedidos recebem alertas sonoros para dar atenção a determinados tipos de requisições.

Para cada tipo de requisição há os campos:

- **Arquivo de som:** Escolha um arquivo wav ou mp3 salvo na rede.
- **Tempo de alerta:** Defina um tempo em segundos para tocar o som.
- **Cor:** Defina a cor de cada requisição (requisições urgentes com cores vibrantes, por exemplo).

> **Dicas sobre o alerta sonoro:**
> 1. O módulo Requisição de Materiais precisa estar aberto para emitir o aviso.
> 2. O tempo de alerta precisa ser maior que zero.
> 3. A máquina precisa ter componentes de som em funcionamento.
> 4. O aviso sonoro só finaliza ao atender a requisição ou ao término do tempo de execução do arquivo.

#### Aba Setores

Informe o responsável de cada setor que receberá um **spy de alerta** avisando ocorrências relevantes nas requisições como substituição de itens ou ajuste de quantidades.

#### Aba Mód. Ressuprimento

Veja o tópico [Ressuprimento de estoque](#ressuprimento-de-estoque).

---

## Rotina

### Criar requisição

Acesse o módulo **Requisição de materiais**, selecione a empresa desejada, após isso clique em **Nova requisição**.

> *[Imagem: Tela de criação de nova requisição]*

Preencha o **Setor requisitante** e o tipo desejado, sendo: requisição, devolução, perda, reposição ou transferência (estoque de apoio). Depois, informe o **Setor requisitado**. Em seguida, clique em **Adicionar** e informe o código do produto e a quantidade a ser requisitada.

> **Dica!** O quadro "Estoque do produto" exibe a quantidade de itens disponíveis e previstos no setor requisitado.

#### Tipos de Requisição

| Tipo | Descrição |
|------|-----------|
| **Requisição** | Requisição normal entre setores que controlam estoque. O sistema fará uma saída do setor requisitado e uma entrada no setor requisitante. |
| **Requisição (Consumo)** | Requisição para uso ou consumo. Apenas dá baixa no estoque do setor requisitado, sem alimentar o setor requisitante. |
| **Devolução** | Veja o tópico [Devolução](#devolução). |
| **Perda** | Veja o tópico [Perda](#perda). |
| **Reposição** | Reposição de itens utilizando estoque de apoio. |
| **Transferência (estoque de apoio)** | Transferências entre setores utilizando estoque de apoio. |

> **Observação:** Para habilitar os tipos Reposição e Transferência (estoque de apoio), é necessário que se trabalhe com estoque de apoio configurado em **Configurador / Geral / Empresas / Estoque**, opção "Utiliza estoque de apoio".

### Atender requisição

Para atender a requisição clique no botão **Atender requisição** na tela principal.

> *[Imagem: Tela de atendimento de requisição]*

Informe o setor requisitado para listar as requisições. Use filtros como datas e status.

**Passo a passo:**

1. Clique na requisição do lado esquerdo. Os produtos aparecem no painel do lado direito.
2. Dê dois cliques no item para marcá-lo e atendê-lo totalmente. Para atender parcialmente, clique novamente, informe a quantidade e clique em **Próximo**.
   - Para itens que controlam lote e série, use o **Item baixa** para decidir qual lote/série será utilizado.
3. O campo **quantidade atendida** é usado para atender parte do produto.
4. Clique em **Próximo** para atender o produto. Ao finalizar todos os itens clique em **OK** e confirme.

> **Atenção!** Após atender a requisição é necessário executar o módulo **Liberador de estoque**. Verifique pela linha do tempo se o documento foi gerado no campo Descendente.

> **Importante!** Na versão 11.01.05.00 foi liberada uma permissão no cadastro de usuários que permite atender uma requisição que tenha produtos com lotes vencidos: **Requisição de materiais / Requisitado / "Permite atender requisição com lote vencido"**.

#### Status das requisições

- **Abertas** — Requisição criada, aguardando atendimento.
- **Parcialmente atendida** — Atendida com quantidade inferior (com opção de manter pendências marcada).
- **Aguardando cotação** — Transformada em cotação, aguardando tomada de preço.
- **Aguardando compra** — Gerou pedido de compra, aguardando nota fiscal.
- **Mercadoria disponível** — Nota fiscal de entrada liberada com quantidade total.
- **Mercadoria disponível parcial** — Nota fiscal liberada com quantidade parcial.
- **Mercadoria disponível com corte** — Nota fiscal liberada com quantidade cortada.
- **Atendidas** — Requisição atendida totalmente.
- **Atendida com corte** — Atendida com quantidade inferior (sem opção de manter pendências).
- **Canceladas** — Pedido cancelado, não pode mais ser utilizado.
- **Autorização pendente** — Aguardando análise do autorizador gerencial.
- **Autorização negada** — Não autorizada, pode ser editada e reenviada.

#### Recursos adicionais

- **Substituir** — Troca um item da requisição por outro.
- **Adicionar** — Inclui mais itens à requisição.
- **Remover** — Exclui o item selecionado.
- **Cancelar** — Cancela a requisição.

### Gerar cotação ou pedido de compra

Caso não tenha o produto em estoque para atender a requisição, poderá ser gerada uma cotação ou pedido de compras. Clique em **Gerar cotação ou pedido de compra**.

> **Importante:** Este recurso só poderá ser utilizado se no cadastro do setor requisitante, o setor responsável por atender as requisições esteja configurado para manipular quantidade menor ou igual a zero.

> **Observação:** Somente poderá gerar cotação ou pedido de compra caso a requisição esteja com status "Aberta" ou "Parcialmente atendida".

Opções disponíveis:

- **Gerar pedido de compra** — Transforma a requisição em pedido de compra.
- **Aglutinar os itens repetidos na cotação e no pedido de compra** — Junta itens repetidos de diferentes requisições.
- **Gerar somente uma cotação para as requisições selecionadas** — Gera uma única cotação. Se desmarcada, gera mais de uma quando empresa, setor requisitante, setor requisitado ou faturado por terceiros forem diferentes.

> **Se liga!** Após a mercadoria chegar na empresa via nota fiscal, o estoque dos produtos será atualizado, porém as requisições não serão atendidas automaticamente. É necessário acessar o módulo Requisição de materiais no botão **Atender Requisição** para monitorar a entrada e atender os pedidos pendentes.

---

## Ressuprimento de estoque

Com o ressuprimento você consegue fornecer uma inteligência para a requisição, a fim de alimentar o saldo dos produtos de um setor com base na chamada "quantidade ideal".

### Configurações

Acesse o módulo **Produtos / Empresa / Setores**. Edite o setor requisitante dos produtos e preencha as quantidades **crítica**, **mínima** e **máxima**.

> *[Imagem: Cadastro de quantidades crítica, mínima e máxima no setor do produto]*

> **Dicas:**
> 1. Os produtos que não possuírem os setores requisitante e requisitados, e que não tiverem os campos de quantidade preenchidos, não serão levados em conta na rotina de ressuprimento.
> 2. Se você utiliza o recurso de preencher as quantidades de modo automático pelo cálculo realizado pelo Configurador, a rotina também funciona.

Em seguida, abra o módulo **Requisição de Materiais** e clique em **Opções / Aba Mod. Ressuprimento**:

- **Quantidade de referência para determinar que um produto necessita de ressuprimento:** Defina se será crítica, mínima ou máxima. O produto só será reposto ao atingir essa quantidade.
- **Quantidade para cálculo de ressuprimento:** Defina se será crítica, mínima ou máxima. O produto será reposto para completar o valor dessa quantidade.
- **Apresentar para ressuprimento somente produtos que possuem quantidade no setor de destino (estocador):** Se marcada, gera ressuprimento só para produtos com saldo no setor requisitado.

**Exemplo:** O produto Papel Office A4 possui: Crítica: 10, Mínima: 20, Máxima: 40, Saldo atual: 11. Com a primeira opção em "Quantidade mínima" e a segunda em "Quantidade máxima", o sistema gerará ressuprimento pois o saldo (11) está abaixo da mínima (20), e a sugestão será de **29 itens** (11 + 29 = 40 Quantidade máxima).

### Rotina

Abra o módulo **Requisição de material** e clique em **Ressuprimento de estoque**.

1. **Setor origem:** Informe o setor requisitante.
2. **Setor destino (estocador):** É o setor requisitado.
3. Clique em **Calcula quantidades** para processar. Os itens são adicionados com a quantidade sugerida.
4. Clique em **Confirmar** para gerar a requisição. Ou clique em **Urgente** para classificar como urgente.

> *[Imagem: Tela de ressuprimento com quantidades sugeridas]*

---

## Lista de Materiais

Este recurso foi criado para empresas de engenharia e construção civil, para organizarem as requisições de produtos com base nos projetos que estão em andamento.

1. Existe um centro de custo para cada obra realizada pela empresa.
2. Com base no centro de custo, o usuário cria requisições de produtos destinados para cada obra.

### Configurações

1. Acesse o **Configurador / Geral / Outros Cadastros / Informações Gerais** e selecione o grupo **Disciplina**, após clique em Novo e cadastre as tabelas.

> **Observação:** Para funcionamento da rotina é necessário que o nome do grupo seja criado como "Disciplina".

2. Acesse o módulo **Requisição de material**, menu **Opções / Geral** e marque **Trabalhar com lista de materiais**.

3. O centro de custo precisa estar presente no **Cobertura contábil**, menu Cadastros e configurações / Centros de custo.

### Rotina

Clique na opção de **Lista de materiais**.

1. Na tela aberta clique em **Novo**, nomeie a lista, inclua o centro de custo e selecione a Disciplina.
2. Clique em **Novo** e adicione os produtos que deseja requisitar.
3. Após gravar, a lista é gerada com status de **Revisão aberta**.
4. Clique em **Requisitar** e após em **Gerar requisição**.
5. O status da lista fica como **Revisão Fechada**.

> **Dica!** Pode ocorrer de a lista ser revisada e itens precisarem ser adicionados após a geração da requisição. Abra a tela de Lista de Materiais, clique em **Adicionar** ao lado da lista criada, dê um nome à revisão, ajuste os itens e clique em **Requisitar** para gerar uma nova requisição complementar.

### Relatório de Mapa de suprimentos

Clique no botão **Mapa de suprimentos**, busque sua lista, clique em **Exportar** e escolha um nome e local para gerar a planilha. O arquivo pode ser impresso e enviado junto com os materiais para facilitar a conferência.

> **Para finalizar!** Quando existir uma revisão anterior já requisitada, o sistema gerará a requisição com a diferença entre a quantidade anterior e a atual. Caso a quantidade seja inferior ou o item seja excluído, o sistema não fará nada com este item.

---

## Ponto de atendimento (PDA)

O PDA (Ponto de atendimento) é um módulo utilizado para transferência de produtos de um setor para um ou vários sem a necessidade de atender, pois não há requisição e, sim, a transferência direta.

> **Atenção!** O módulo PDA foi implementado a partir da versão 11.00.00.00.

### Configuração

**Cadastro de operação:** São necessárias 2 operações em **Configurador / Estoque / Operação**:

1. **1ª Operação:** Tipo de movimento **Entrada**, configurada para **Atualizar o estoque**.
2. **2ª Operação:** Tipo de movimento **Transferência de Saída**, configurada para **Atualizar o estoque**.

> **Dicas sobre as operações:**
> 1. Os CFOPs e CSTs de tributos usados são apenas para gravar a operação, uma vez que a rotina de PDA não gera nota.
> 2. As operações sempre precisam ter a marcação **Nenhum** na aba Dados / Tipo de ajuste NF-e.
> 3. O tipo de documento sempre será interno (não fiscal).

**Opções do PDA:** Acesse **Configurador / Estoque / Opções / PDA** e preencha as operações:

- **Requisição** — Utilizada no atendimento para setores iguais ou quando o setor de entrada controla estoque e o de saída não.
- **Transferência** — Operação usada no documento de transferência entre setores distintos. A mais utilizada na rotina.
- **Relatório de conferência** — Aponte o RTM para impressão.
- **Manipular quantidade negativa** — Permite transferir produtos com saldos negativos.

**Cadastro de PDA:** Acesse **Configurador / Estoque / Outros cadastros / PDA**.

Na aba **Dados** informe:
- A **Empresa** que vai utilizar o módulo.
- Marque se deseja **Imprimir o relatório de conferência na liberação do pedido**.
- Informe a **Quantidade máxima padrão** para movimentação de um produto.

Na aba **Setor** selecione:
- **Setor de Saída:** Setor principal de atendimento dos produtos.
- **Setor de Entrada (01 a 06):** Setores para onde irão os produtos transferidos. Se a empresa possuir mais setores, o PDA habilita um botão **Outros setores**.

### Utilização do PDA

Clique no módulo **Requisição de material** e depois em **Ponto de atendimento**.

- Em **atalhos para setores de entrada** aparecem os setores cadastrados previamente (com atalho de teclado).
- O **setor de saída** vem preenchido.
- No campo **Produto/lote**, informe o produto e a quantidade.
- Após selecionar todos os produtos, clique em **Confirmar**.

> **Se liga!** É necessário que o liberador de estoque esteja em execução para atualizar os saldos em cada setor.

---

## Relatório de conferência

Na tela principal use o botão da impressora, faça o filtro de datas, setor requisitado e escolha as opções de geração. Após clique em **Visualizar**.

> *[Imagem: Relatório de conferência com dados de produtos, setores e localização]*

---

## Requisição urgente

Ao criar a requisição é possível classificá-la como **Urgente**. Isso é usado para dar prioridade a alguma requisição, como em casos nos quais o setor de varejo solicitou o produto da promoção que acabou na loja.

Para que um usuário crie a requisição como urgente é necessário que possua permissão no **Cadastro de Usuários**. Feito isso, ao criar a requisição não clique em OK, em vez disso, clique em **Urgente**.

É possível preencher o campo **Observação** para justificar ao setor requisitado a classificação de urgência. O atendimento segue o fluxo normal.

> *[Imagem: Requisição classificada como urgente com campo de observação]*

---

## Devolução

Algumas configurações são necessárias para trabalhar com o recurso de devolução. Exemplo:

- O setor Estoque requisitou 50 unidades do produto "Água mineral" para o setor Compra.
- O setor de compras aceitou a mercadoria, porém logo percebeu que 10 delas não seriam mais necessárias.
- O setor Compra não está configurado para realizar requisições.

**Solução:** Crie uma nova requisição do tipo **Devolução**, onde o setor requisitante é o Estoque e o requisitado é o Compra. O campo **Observação** é obrigatório para que o setor que receberá o produto possa entender o motivo da devolução.

Após isso, o setor requisitado precisa atender a requisição. Após rodar o liberador de estoque, a quantidade do produto retorna para o setor de origem alimentando o saldo no estoque.

> Em resumo, ao usar o tipo de requisição devolução se subentende que é como se fosse uma requisição comum com setores invertidos.

> **Se liga!** A devolução pode ser gerada por outros motivos, como simplesmente devolver a quantidade excedente ou não utilizada para o setor de origem.

---

## Perda

Existem 2 tipos de requisições para o tipo perda: a que movimenta estoque e a que não movimenta estoque.

### Perda que movimenta estoque

O tipo de requisição perda é utilizado quando precisamos efetuar a baixa de um produto do estoque (como se fosse consumo). O produto pode ter quebrado, por exemplo.

Para efetuar a requisição:

- Selecione o tipo **Perda**.
- Informe o **mesmo setor** Requisitante e Requisitado (de onde sairá o estoque do produto).
- Informe o produto e quantidade e clique em **OK**.

A requisição é atendida automaticamente. Após rodar o liberador de estoque, a saída é efetuada do setor, registrando a perda.

### Perda que não movimenta estoque

Para utilizar o tipo de requisição "perda" que não movimenta estoque é necessário que os setores requisitantes e requisitados sejam **diferentes**.

**Exemplo:** Ontem o setor Financeiro (não controla estoque) criou uma requisição de 1 Mouse para o setor Estoque (controla estoque). O setor de Estoque atendeu e enviou o produto. A quantidade já saiu do estoque "Almoxarifado" (-1 Mouse). O produto não entrou no estoque do setor Financeiro, pois esse não controla estoque. Hoje, o produto foi danificado e deu perda total.

Sendo assim o setor Financeiro cria uma requisição como requisitante, e o requisitado Estoque, marcando a opção de **PERDA**. A requisição será atendida automaticamente. O sistema não movimentará o estoque e usará uma operação de **PERDA NÃO CONTROLA ESTOQUE** apenas para registrar a perda ocorrida.
