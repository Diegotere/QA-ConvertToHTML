# PDV Alterdata — Outros Recursos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Comissão](#comissão)
- [Identificação e/ou Cadastro de Clientes no PDV Alterdata](#identificação-eou-cadastro-de-clientes-no-pdv-alterdata)
- [Lembretes do PDV Alterdata](#lembretes-do-pdv-alterdata)
- [Alternar entre Tabelas de Preço de Venda](#alternar-entre-tabelas-de-preço-de-venda)
- [Recebimento de Crediário](#recebimento-de-crediário)
- [Impressão de Vale Troca](#impressão-de-vale-troca)
- [Desconto Global e por Item](#desconto-global-e-por-item)
- [Bloqueio de Venda — Validação de Crédito](#bloqueio-de-venda--validação-de-crédito)
- [Mensagens Finais](#mensagens-finais)
- [Resumo Diário](#resumo-diário)
- [Integração com NF-Stock](#integração-com-nf-stock)
- [Venda de Produtos Kit](#venda-de-produtos-kit)
- [Venda Pendente](#venda-pendente)
- [Venda Futura](#venda-futura)

---

## Introdução

O objetivo deste material é apresentar alguns recursos opcionais do PDV Alterdata que o cliente pode utilizar de acordo com a sua necessidade, bem como as configurações necessárias para se trabalhar com estes recursos.

> **Dica:** Este manual não foi feito para ser lido obrigatoriamente em ordem sequencial. Use o Sumário para chegar até o tópico desejado.

---

## Comissão

As vendas feitas no PDV Alterdata também podem ser comissionadas, assim como as feitas pelo Faturamento. As configurações e regras de cálculo também são as mesmas, bem como a hierarquia na prioridade da alíquota de comissão:

1. Produto
2. Prazo
3. Operação
4. Pessoa × Representante
5. Representante

Diferente das vendas feitas no Bimer no Faturamento (em que o sistema pode sugerir automaticamente a pessoa de repasse), as vendas feitas no PDV que não tenham sido geradas por um DAV não sugerem a pessoa para repasse da comissão.

### Configuração

No **FatPDVCFG >> Ferramentas >> Opções >> Repasse**, defina em qual momento da venda será pedido o **Vendedor** e se a informação será obrigatória.

Por padrão, no processo de integração, são levados todos os vendedores (representantes ou funcionários) do cadastro de pessoas no Bimer. Porém, é possível configurar para que a exportação seja feita por empresa. Para isso, acesse **PDVAlterdataCfg >> Ferramentas >> Opções >> Geral** e marque a opção **"Exportar vendedores por usuário e empresa"**.

O sistema só exportará os representantes/funcionários caso tenham seus usuários cadastrados no sistema Bimer e vinculados ao cadastro do representante/funcionário. Isso pode ser feito no módulo **Cadastro de Usuários**, preenchendo o campo **Pessoa correspondente** e, na aba **Acesso à informações**, tendo uma ou mais empresas informadas.

Essa configuração também considera se trabalha com funcionários e/ou representantes, no módulo **Configurador Bimer >> Geral >> Pessoa >> Adicionais**.

Ainda no **PDVAlterdataCfg >> Opções >> Documento Auxiliar de vendas >> Geral**, é possível configurar para **Obrigar pessoa de repasse na criação de um DAV**.

Após realizar as configurações, é necessário exportar no **Integrador Bimer x PDV Alterdata** e no **Concentrador do PDV Alterdata**, e realizar a carga de dados no PDV.

### Funcionamento

No PDV Alterdata, após confirmar o fechamento da venda, será apresentada a tela de **Inclusão de vendedores**. É possível digitar o código do vendedor ou clicar em **F2 – Buscar** para pesquisar na tela de **Pesquisa de vendedores**.

Com a inclusão do vendedor, clique em **F9 – Confirmar** para concluir a venda.

Após a importação da venda para o Bimer e processamento do Liberador de Estoque, ao pesquisar a venda nos módulos **Faturamento** (no caso de NFC-e) ou **BI Faturamento**, é possível visualizar o lançamento da comissão através da **Linha do Tempo**.

---

## Identificação e/ou Cadastro de Clientes no PDV Alterdata

A tela para identificação do cliente é exibida automaticamente na venda com algumas formas de pagamento (Cheque, parcelado, cartão). Também é possível acessá-la manualmente com as teclas **Alt + C**.

### Opções Disponíveis

- **Localizar (F2)** — busca os cadastros dos clientes exportados pelo Bimer. Se a configuração **"Exportar para a base de integração somente o cliente padrão"** estiver marcada no PDVAlterdataCFG, somente o cadastro do cliente padrão para vendas será apresentado.
- **Saldo (F4)** — mostra a tela de análise cadastral, verificando o **Limite de Crédito**, **Títulos em Aberto** e **Saldo atual**. Também funciona com as teclas **Ctrl + S**.
- **Limpar (ESC)** — retira o cliente escolhido da tela de seleção.
- **Sair (Esc)** ou **Remover (F3)** — sai da tela de localização de clientes e volta à tela principal do PDV Alterdata.
- **Novo (F5)** — abre o cadastro de um novo cliente. Preencha os campos na tela de **Cadastro Simplificado de Pessoas**.
- **OK (F10)** — seleciona o cliente para a venda.

Ao concluir a venda, caso tenha sido cadastrado um novo cliente, ele será cadastrado também no sistema Bimer e ficará disponível em todos os seus módulos.

> Para este recurso não existe nenhuma configuração necessária, pois a função fica disponível no PDV Alterdata desde que o **Web Service de Plugins** esteja funcionando corretamente.

### Configurações Opcionais

No **PDVAlterdataCfg >> Ferramentas >> Opções >> Geral**, há 2 opções:

- **Exportar para a base de integração somente o cliente padrão** → Com essa opção marcada, os clientes cadastrados no Bimer não serão exportados para o PDV Alterdata. Somente o cadastro do cliente informado no campo **"Pessoa padrão para venda"** estará disponível.

  > Mesmo com apenas o cliente padrão na base, continua sendo possível cadastrar clientes no Bimer através do recurso **Alt + C** no PDV Alterdata. Porém, após a carga de dados, o cadastro deste cliente não estará mais disponível no PDV — somente no Bimer.

- **Exibir tela de dados de cliente ao iniciar uma venda** → Com esta opção marcada, ao iniciar uma venda, o sistema exibirá automaticamente a tela para identificar o cliente. Informe o CPF/CNPJ do cliente. Se ele já existir na base de dados, seu cadastro será trazido para a tela. Se o CPF/CNPJ não existir, a tela ficará editável para informar os dados do cliente.

  > **Atenção:** Quando essa opção está marcada, na venda no PDV o cliente será identificado, porém o documento fiscal é criado no Bimer com o **Cliente padrão** como destinatário. Mas, mesmo assim, o cliente é incluído no cadastro de Pessoas.

No **Configurador Bimer >> Geral >> Opções >> Pessoa**, as configurações existentes na aba **Dados** influenciam o cadastro simplificado (Alt + C) de pessoas no PDV Alterdata.

Após realizadas todas as configurações, realize uma exportação no **Integrador Bimer x PDV Alterdata** e no **Concentrador do PDV Alterdata**, e uma carga de dados no PDV Alterdata.

> **#FicaADica:** Se possível, reinicie também o IIS para reiniciar todos os web services. Na máquina onde estão instalados os web services, abra o Executar com **Windows + R**, digite `IISRESET` e tecle **Enter**. Aguarde ser reiniciado.

---

## Lembretes do PDV Alterdata

Na tela principal do PDV Alterdata, há a opção de deixar uma anotação na tela em cima do PDV dos atalhos existentes, para lembrar ao usuário rapidamente.

Não existe nenhuma configuração para habilitar este botão. A anotação poderá ser movida livremente sobre a tela, e também é possível editar as informações contidas no lembrete clicando em **Alterar**.

---

## Alternar entre Tabelas de Preço de Venda

Na implantação do PDV Alterdata, é obrigatório configurar uma **tabela de preço padrão** e uma **tabela de preço alternativo** para venda.

No **PDV Alterdata >> Outras funções >> Configurações >> Geral >> Tabela de preços a ser utilizada**, é possível escolher a tabela que se quer utilizar nas vendas.

Porém, é possível fazer isso de forma mais simples utilizando as teclas **Ctrl + 1** ou **Ctrl + 2**.

### Exportar Somente Produtos com Ambas as Tabelas

Ao configurar o PDV Alterdata para trabalhar com 2 tabelas de preço diferentes, é possível configurar para exportar somente produtos que possuam essas 2 tabelas.

Para isso, acesse **Configurador do PDV Alterdata >> Ferramentas >> Opções >> Geral** e marque a opção **"Exportar para a base de integração somente produtos que possuam obrigatoriamente preço padrão e preço alternativo"**.

Com isso, no **Cadastro do produto**, na aba **Empresa**, quadro **Preços**, deve-se vincular a tabela de preço padrão e a tabela de preço alternativo, e ter um valor de venda para essas tabelas.

---

## Recebimento de Crediário

O recurso de **Recebimento de Crediário** existe para facilitar a baixa dos títulos a receber em aberto existentes para os clientes do Bimer. Dessa forma, eles podem ir direto ao Caixa para realizar o pagamento de um título que consta em aberto em seu nome.

### Configuração

Acesse **FatPDVCFG >> Ferramentas >> Opções >> Checkout >> Recebimento de crediário** e informe:
- **Tipos de baixa total e parcial** para operações de recebimento de crediário.
- **Forma de pagamento padrão** que o sistema utilizará nestas operações.

> **Observação:** As configurações que não estão contornadas NÃO impactam no recebimento de crediário pelo PDV Alterdata.

Ainda no **FatPDVCFG >> Financeiro >> Geral**, informe as **Formas de pagamento** que podem ser visualizadas no recebimento de crediário.

No **PDVAlterdataCfg >> Ferramentas >> Opções >> Validação >> Recebimento de crediário**, é possível bloquear a possibilidade de dar descontos em títulos vencidos há mais de X dias. Ao informar **0 (zero)**, o sistema não bloqueará o desconto mesmo que o título esteja vencido.

### Funcionamento

1. Acesse o PDV Alterdata e tecle **F11**.
2. Na tela de **Recebimento de crediário**, filtre pelo título a receber ou pela pessoa.
3. Ao localizar o título, clique em **Adicionar**.
4. É possível adicionar vários títulos a receber em um único lote de recebimento.
5. Na tela de inclusão do recebimento, preencha a **forma de pagamento** e os **valores correspondentes**.

**Tratamento de valores:**
- Se o valor informado no **Pagamento** superar o **Valor a pagar**:
  - **Sim** → o valor da diferença será lançado como **juros** e o sistema considerará o valor informado no Pagamento como o valor total a receber.
  - **Não** → o sistema lançará o valor da diferença como **troco** ao cliente.

6. Confira os valores totais na parte inferior e clique em **OK** para confirmar o recebimento do crediário.
7. O sistema realizará impressão de comprovante do recebimento de crediário.
8. Será apresentada mensagem informando que o lote de baixa deve ser localizado e liberado manualmente no módulo **Contas a Receber** do sistema Bimer.
9. Clique em **OK** para prosseguir. Será feita impressão de novo comprovante da movimentação.

**Para liberar o lote de baixa no Bimer:**
1. Acesse o módulo **Contas a Receber** no sistema Bimer.
2. No menu **Baixa**, clique em **Baixa manual**.
3. Clique em **Abrir lote**.
4. Aplique o filtro até localizar o lote de baixa.
5. Selecione-o e clique em **OK**.
6. Clique em **Liberar lote** e confirme a mensagem para a liberação do lote de baixa.

Com isso, todos os títulos a receber vinculados ao lote serão baixados.

---

## Impressão de Vale Troca

O **Vale Troca** existe para casos em que um cliente compra itens para presentear alguém e não quer entregar o cupom fiscal ou NFC-e da compra (que contém todos os itens) para a pessoa presenteada.

O Vale Troca é um documento **não fiscal** e não leva o valor do produto — somente a **Descrição** e a **Quantidade**. Só é possível imprimir o Vale Troca da **última venda** feita no PDV Alterdata.

**Para imprimir:**
1. Acione com as teclas **Ctrl + P**.
2. Confirme clicando em **F9 – Imprimir**.

---

## Desconto Global e por Item

O desconto em uma venda pode ser **Global** ou **por item**.

- **Desconto Global** — não altera o valor unitário do produto; é lançado ao final da venda aplicado ao valor total do cupom.
- **Desconto por item** — lançado junto ao item na impressão do documento; é possível informar percentuais diferentes para cada item.

### Configuração

Acesse **PDVAlterdataCFG >> Ferramentas >> Opções >> Validação >> Produto**. No quadro **"Permitir editar desconto no PDV-Alterdata"**, defina se a edição do campo desconto estará:
- **Sempre disponível**
- **Nunca disponível**
- **Depende do produto**

Ao marcar **Depende do produto**, é necessário cadastrar uma característica de produto para identificar os produtos que não permitem desconto e informar na configuração. A característica é criada no **Configurador Bimer >> Estoque >> Produto >> Característica** e vinculada aos produtos que se enquadram.

### Desconto Global

O desconto global é dado sobre o total do documento de venda, não sobre um item específico. O valor unitário do item não é alterado.

**Para aplicar:**
1. Pressione **Ctrl + D** para acionar o Desconto Global.
2. Informe um **percentual** ou **valor** de desconto (também é possível informar acréscimo).
3. Pressione **F9** para confirmar.

Ao finalizar a venda, no documento fiscal será demonstrado o valor total dos produtos, o valor do desconto e o valor total da venda com o desconto concedido.

### Desconto por Item

O desconto por item é concedido produto a produto e **altera o valor unitário** do produto naquela venda.

**Forma 1 — No momento da inclusão do item:**
Informe um percentual ou valor de desconto no momento em que o item é selecionado. O produto já vai para a lista com o valor unitário alterado.

**Forma 2 — Após o produto já ter sido incluído:**
1. Clique sobre o produto para o qual deseja conceder um desconto.
2. Tecle **F8** para editar.
3. Na tela de edição, informe o desconto e confirme.

Nesse modelo de desconto, o valor é mostrado produto a produto no cupom.

---

## Bloqueio de Venda — Validação de Crédito

No PDV Alterdata é possível realizar análise de crédito de cliente, bloqueando a venda parcelada ou cheque caso encontre alguma divergência com as regras estabelecidas no bloqueio.

> O PDV Alterdata lê as informações da tabela `PessoaResumoSintetico`, alimentada por tarefa do **Gerente Eletrônico**. Exceto o bloqueio referente ao **Cliente inativo**, que é enviado ao PDV Alterdata no `Clientes.dat`.

### Configurações Necessárias

**1. Criar tarefa no Gerente Eletrônico:**

No **Configurador Bimer >> Geral >> Tarefas**, crie uma tarefa para o **Sistema 000131 – Tarefa para atualizar dados de clientes**. Em seguida, crie o agendamento em **Geral >> Tarefas agendadas**.

> O **Gerente Eletrônico** deverá estar em execução para que a tarefa seja executada.

**2. Habilitar validação de crédito:**

Acesse **PDVAlterdataCfg >> Ferramentas >> Opções >> Validação >> Validação de crédito** e marque a opção **"Validar crédito de clientes"**.

### Tipos de Bloqueio

| Tipo | Descrição |
|---|---|
| **Cliente inativo** | Opção existente no cadastro do cliente no módulo Pessoa |
| **Com títulos vencidos a mais de 5 dias** | Verifica os títulos a receber em aberto no nome do cliente |
| **Com limite de crédito excedido** | Analisa o valor do limite de crédito no cadastro do cliente no módulo Pessoa |
| **Quando o maior atraso for superior a X dias** | Quantidade de dias personalizável. Permite configurar ações diferentes para faixas de atraso |
| **Quando o valor da compra for superior à média do cliente em X%** | Percentual personalizável; analisa as compras feitas pelo cliente |

### Ações Disponíveis para Cada Bloqueio

| Ação | Descrição |
|---|---|
| **Liberar** | O sistema avisa, mas libera a venda normalmente |
| **Solicitar usuário com permissão** | O sistema avisa e pede usuário com permissão para liberar a venda (usuário e senha). Permissão concedida no módulo **Cadastro de Usuários**, para o sistema **PDV-Alterdata (Offline)** |
| **Bloquear** | O sistema bloqueia a venda sem possibilidade de liberá-la, mesmo com usuário habilitado. O cliente deverá regularizar sua situação junto à empresa |

### Rotina de Validação de Crédito

O bloqueio somente acontecerá no caso de venda com recebimento **parcelado** ou com **cheque**.

**Funcionamento:**
1. Inicie uma venda informando os produtos e quantidade normalmente.
2. Selecione a opção **F6 – Parcelado** (ou cheque) e selecione a forma de pagamento.
3. Será apresentada a tela de **Localização de Clientes**. Caso o cliente já tenha sido identificado anteriormente, a tela já virá preenchida.
4. Após confirmar o cliente, é feita a validação de crédito pelo PDV Alterdata.
5. Em caso de ocorrência, é apresentada a tela com o resultado da análise.

**Interpretação das bandeiras:**
- **Bandeira verde** → ação de liberar a venda. Clique em **Confirmar (F9)** para prosseguir normalmente.
- **Bandeira amarela** → pede usuário com permissão para liberar a venda. Ao clicar em **Confirmar (F9)**, aparece tela para informar usuário e senha.
- **Bandeira vermelha** → bloqueia a venda. O botão **Confirmar (F9)** ficará bloqueado.

---

## Mensagens Finais

Para configurar o sistema para incluir mensagens no cupom fiscal ou na NFC-e:

1. Acesse **PDVAlterdataCfg >> Ferramentas >> Opções >> Mensagens finais**.
2. Marque a opção **"Habilita impressão da mensagem final no rodapé do cupom fiscal"**.
3. Clique em **Localizar** para selecionar as variáveis que comporão a mensagem.

Após realizar as configurações, é necessário fazer a exportação no **Integrador Bimer x PDV Alterdata** e no **Concentrador do PDV Alterdata**, e realizar carga de dados no PDV.

Após isso, realize uma venda no PDV Alterdata e veja que ao final do documento impresso será destacado o conteúdo das variáveis configuradas (ex.: Nome do vendedor).

> O conteúdo dessa configuração é gravado no Regedit, na chave:
> `HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Alterdata\PDVMarket\MensagensFinais`

---

## Resumo Diário

O **Resumo diário** é um recurso criado para auxiliar o suporte na integração do PDV Alterdata × Bimer. Ele mostra toda a movimentação feita no PDV Alterdata e que deve integrar com o sistema Bimer, analisando o que já foi integrado e o que ainda não foi.

Ele substitui o **Espelho MFD** para os clientes que emitem NFC-e (que não possuem mais o Espelho MFD). Com este recurso, sempre que o caixa é encerrado no PDV Alterdata, é gerado um arquivo .dat e enviado à base do Bimer. Após a importação deste arquivo, no Resumo diário é possível consultar toda a movimentação feita no PDV Alterdata.

**Para acessar:**

- Pelo módulo **PDVAlterdataCfg >> Ferramentas >> Resumo diário de movimentação**: informe a empresa, o terminal de venda, a data e o tipo de importação.
- Pelo módulo **BI Faturamento**, na tela de **Resultado**, no menu **Outros**, opção **Resumo diário**.

As legendas na parte inferior identificam:
- Registros importados corretamente.
- Registros ainda em processo de importação.
- Registros com erro durante a importação.

---

## Integração com NF-Stock

A partir da versão **9.07.02.00** do sistema, é possível configurar para que o sistema envie automaticamente os XMLs de NFC-e gerados pelo PDV para o **NF-Stock**.

Para isso, acesse **Configurador Bimer >> Geral >> Empresas >> Emissão de Notas >> NFC-e >> Geral** e marque a opção **"Enviar NFC-e emitida pelo PDV Alterdata para o NF-Stock"**.

---

## Venda de Produtos Kit

O cliente que trabalhar com venda de produtos kit no PDV poderá fazê-lo normalmente. Contudo, se quiser que saiam os produtos que compõem o kit também, deverá marcar uma configuração.

Acesse **Configurador Bimer >> Faturamento >> Opções >> Venda >> Complementar**, localize e marque a opção **"Trabalha com inclusão otimizada de produtos kit no PDV Alterdata"**.

Após marcar a opção, faça a exportação no integrador, no concentrador e a carga de dados no PDV. Ao adicionar o item no PDV, os produtos da composição serão lançados individualmente.

---

## Venda Pendente

O recurso de **Venda Pendente** permite ao operador do caixa "suspender" uma venda e deixá-la armazenada no PDV para finalizá-la posteriormente. Útil quando um cliente precisa sair para pegar algum item e o caixa não quer perder o que já foi lançado.

### Configuração

Acesse **PDV >> Outras funções >> Configurações >> Geral >> Trabalha com venda pendente**. Após marcar essa opção, feche e reabra o PDV para que ele identifique a configuração.

### Funcionamento

1. Ao realizar a venda e lançar os itens, para colocá-la como pendente, pressione **F10**.
2. Adicione uma **identificação** para aquela venda (ex.: "Venda do cliente de camisa do Brasil").
3. Confirme.
4. O sistema habilitará uma **cesta** na parte superior da tela, indicando que há vendas pendentes.
5. Para retornar a essa venda, clique sobre a cesta ou pressione **Alt + F10**.
6. Na tela de vendas pendentes, é possível **imprimir**, **resgatar** ou **cancelar** a venda.

> **Atenção:** Se mesmo marcando a opção a cesta não habilitar, pode ser que as vendas estejam em homologação. Localize o arquivo `PDVAlterdata.ini` e na tag `GeracaoArquivosHomologacao`, informe o número **1**. Salve o arquivo, feche e reabra o PDV.

---

## Venda Futura

O PDV possui o recurso de **Venda Futura** que consiste em, no momento de finalizar a venda, gerar um **pedido** ou uma **NFC-e**. O pedido será uma venda finalizada que ainda não teve seu documento fiscal emitido.

### Configuração

Acesse **Outras funções >> Configurações >> Impressão >> Método de finalização de vendas**. É possível escolher:
- Uma rotina **fixa** (sempre gerar o pedido ou sempre a nota).
- **Pedir para escolher** no momento da venda.

### Funcionamento

1. Cadastre a venda normalmente, selecione a forma de pagamento.
2. No momento de gerar o documento, caso tenha configurado para escolher na hora, o sistema apresentará a opção:
   - **NFC-e** → o sistema emitirá o documento normalmente.
   - **Pedido** → gerará um registro no Faturamento com status **"Não trabalha NF-e"** para movimentar o estoque e financeiro. Por padrão, quando é emitido um pedido, a numeração inicia em 9. Quando o documento fiscal for emitido posteriormente, o número do pedido no Faturamento será atualizado com o número da nota fiscal.

**Para emitir a nota fiscal posteriormente:**
1. Dentro do PDV, abra a opção **"Vendas (Alt + V)"**.
2. Na tela apresentada, selecione a venda desejada e clique em **"Enviar nota"**.
3. Também é possível **reimprimir** ou **cancelar** a venda.

> **Atenção:** Para essa rotina, o sistema cria o documento no Faturamento baseado na operação informada em **PDVAlterdataCfg >> Operações >> "Operação para cupom fiscal"**. É importante que essa operação esteja corretamente configurada, bem como o seu tipo de documento.
