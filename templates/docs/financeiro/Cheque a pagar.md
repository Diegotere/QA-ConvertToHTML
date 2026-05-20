# Cheque a Pagar — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Banco](#banco)
  - [Conta Bancária](#conta-bancária)
  - [Configurador](#configurador)
- [Rotinas de Cheque a Pagar](#rotinas-de-cheque-a-pagar)
  - [Cadastro Manual de Cheques](#cadastro-manual-de-cheques)
  - [Cadastro de Cheque a Partir de Títulos a Pagar](#cadastro-de-cheque-a-partir-de-títulos-a-pagar)
  - [Autorização de Cheque](#autorização-de-cheque)
  - [Cópia de Cheque Avulso](#cópia-de-cheque-avulso)
  - [Cancelamento](#cancelamento)
  - [Devolução de Cheque](#devolução-de-cheque)
  - [Excluir Cheque](#excluir-cheque)
  - [Relatório de Cheques](#relatório-de-cheques)
  - [Estornar Títulos Rejeitados](#estornar-títulos-rejeitados)
- [Previsão](#previsão)
- [Cheque Pré-datado](#cheque-pré-datado)
  - [Configurações Cheque Pré-datado](#configurações-cheque-pré-datado)
  - [Criação do Cheque Pré-datado](#criação-do-cheque-pré-datado)
  - [Baixa do Título](#baixa-do-título)
- [Impressora de Cheque](#impressora-de-cheque)
  - [Configurações de Impressão](#configurações-de-impressão)
  - [Rotina com Impressora de Cheque](#rotina-com-impressora-de-cheque)
  - [Impressão via TS](#impressão-via-ts)
- [Informações Extras](#informações-extras)

---

## Introdução

Algumas empresas ainda usam cheque para pagar seus títulos. Para isso, a empresa deve entrar em contato com o banco para receber autorização para trabalhar com cheque em sua conta bancária. O banco fornece um talão com várias folhas para preenchimento de: valor, beneficiário, "data de bom para" e assinatura.

A maioria das rotinas com cheque é realizada pelo módulo **Cheque a Pagar (FinChequeAPagar)**. A devolução do cheque é realizada no módulo **Disponível**.

> **Atenção:** O cheque a pagar precisa **sempre** estar vinculado a algum título a pagar. Cadastrar um cheque a pagar manualmente sem vincular um título a pagar impedirá a continuidade da rotina.

---

## Configurações

### Banco

Caminho: **Configurador >> Financeiro >> Informações bancárias >> Banco**

No cadastro do banco referente à conta-corrente do cheque, acesse a aba **"A pagar"** e informe o RTM do **Layout de cheque avulso** e do **Layout de cheque (formulário contínuo)**.

### Conta Bancária

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Contas Bancárias**

Edite a conta que será usada para emitir cheques. Na aba **Cheque**:

- Marque **"Terá emissão de cheque"**.
- **Início do Intervalo** — Primeiro número de cheque do talão.
- **Fim do Intervalo** — Último número de cheque do talão.
- **Último Cheque impresso** — Informe apenas se o talão já tiver cheques gerados antes da utilização do Bimer. Exemplo: talão de 01 a 100, já usados manualmente até o cheque 09 → informe 09 para que o próximo gerado seja o 10. Este campo é atualizado automaticamente pelo sistema.

> **Atenção:** A área **"Impressão de cheques (impressora de cheques)"** só deve ser preenchida se a empresa trabalhar com esse tipo de impressora específica. Impressoras comuns (jato de tinta, laser, matriciais) são instaladas normalmente no computador ou rede e o sistema as reconhece automaticamente.

**Vantagens das impressoras de cheque:**
- Agilizar o preenchimento do cheque.
- Evitar erros de preenchimento manual.
- Validar cheques: algumas impressoras conseguem ler cheques a receber, consultando o SERASA para verificar se o cheque é roubado, clonado ou falso.

### Configurador

Caminho: **Financeiro >> Opções >> Cheque >> Outras Configurações para cheque (a pagar / a receber)**

- **Baixa total para cheque (gera numerário)** — Tipo de Baixa para registrar pagamentos integrais por cheque. No cadastro do tipo de baixa, marque as opções **Gera Numerário** e **Baixa Final**.
- **Baixa parcial para cheque (gera numerário)** — Tipo de Baixa para registrar pagamentos parciais por cheque. No cadastro, marque apenas **Gera numerário**.

> **Dica:** Use tipos de baixas com descrições próprias para a rotina, facilitando a análise pelo BI Financeiro dos movimentos por tipo de baixa.

---

## Rotinas de Cheque a Pagar

### Cadastro Manual de Cheques

Usado quando o título a pagar ainda não está criado no sistema e o pagamento será feito no momento.

1. Informe a empresa, selecione o status **Não impressos** e clique em **Novo**.
2. Preencha os dados:
   - **Conta bancária** configurada para geração de cheque.
   - **Valor** do cheque a pagar.
   - **Pessoa** que receberá o cheque (fornecedor, funcionário ou sócio). Não é recomendável deixar em branco.
   - **Data do cheque** ("data de bom para").
   - **Observação** para controle interno (ex.: "Cheque usado para compra de equipamento").
3. Clique em **Gravar**. O cheque fica com status **Não Impresso**.

Ao clicar em **Imprimir Cheque**, informe o número do cheque de acordo com a sequência do talão. Opções:

- **Preenchimento manual** — O cheque já foi emitido manualmente; apenas registra no sistema sem enviar para impressora.
- **Imprimir** — Envia os dados do cheque para a impressora.

Se os dados para criação do título a pagar não foram informados no cadastro do cheque, o sistema os solicita neste momento. Informe:
- Tipo de Baixa para registrar a baixa do título quando o cheque for assinado.
- Forma de pagamento.
- Número e valor do título (preenchidos automaticamente de acordo com os dados do cheque).

**Assinatura do cheque:**

Por padrão, o sistema seleciona automaticamente o cheque com status de impresso. É possível selecionar outros cheques com o mesmo status e assinar todos de uma vez.

- A **Data de baixa** é preenchida automaticamente com a data corrente, mas pode ser alterada.
- Se o cheque for para transferência entre contas da empresa, informe o código da conta de destino no campo **"Conta para transferência do valor do cheque selecionado (FinDisponível)"**.
- Em **Usuários disponíveis para assinatura**, selecione o responsável clicando em **"+"** e clique em **Assinar**.

O status do cheque muda para **Assinado**, o título a pagar é baixado no módulo Contas a Pagar e um movimento de saída é criado no Disponível.

### Cadastro de Cheque a Partir de Títulos a Pagar

Quando o título a pagar já está lançado no sistema e a empresa emitirá um cheque para pagamento.

1. Na tela principal, clique em **Gerar Cheque**.
2. Deixe a opção **Imprimir** selecionada e filtre os títulos por Empresa, Forma de Pagamento, Natureza de Lançamento, Pessoa, etc.
3. Os títulos a pagar são apresentados. Clique com o botão direito para marcar individualmente ou marcar todos.

**Aglutinar títulos em um único cheque:**

Para pagar mais de um título com um único cheque, edite cada título dando dois cliques e marque **Aglutina Título**. Ao avançar, confirme os dados do cheque:

1. **Data de "Bom para"** — Data futura indica que a compensação só pode ser feita a partir daquela data.
2. **Número da Conta** de onde sairá o valor.
3. **Nº do cheque** a ser gerado (o sistema resgata o sequencial do último cheque gerado).
4. **Beneficiário** para títulos aglutinados. Para "cheque ao portador", marque **"Não incluir beneficiário"**.
5. **Preenchimento manual** — Marque se o cheque pertence a um talão que será preenchido à mão.

Clique em **Gerar Cheque** e depois em **Processar**. O cheque é levado para o status **Impresso**. A partir daqui, o processo é o mesmo do cadastro manual: assinar, baixar os títulos e registrar no Disponível.

### Autorização de Cheque

É possível configurar o sistema para exigir autorização prévia antes da assinatura do cheque.

Caminho: **Configurador >> Financeiro >> Opções >> Cheque >> A pagar**

Marque a opção **"Permitir assinar cheque somente após autorização do pagamento"**.

No **Cadastro de Usuários**, no perfil dos usuários com esse privilégio, libere no produto **"Cheque a pagar"** a opção **"Autorizar/retirar autorização do pagamento"**.

Para autorizar um cheque após a impressão, na tela principal clique em **"Autorizar pagamentos"**. Filtre os cheques, dê duplo clique no cheque para adicioná-lo ao quadro **Autorização** (ou clique em **"Adicionar"**) e clique em **"Autorizar"**.

Nessa mesma tela é possível filtrar pelos cheques já autorizados e retirar a autorização, além de imprimir a autorização conforme layout pré-definido.

### Cópia de Cheque Avulso

É possível imprimir cópias dos cheques com status de previstos, impressos ou assinados.

Selecione o cheque desejado, clique em **"Cópia de cheque avulso"** e em **"Imprimir"**.

O layout da cópia é definido em: **Configurador >> Financeiro >> Opções >> Cheque >> A pagar >> Layout de cópia de cheques impressos, previstos e assinados**.

### Cancelamento

Para cancelar, o cheque deve estar com status **Impresso** ou **Assinado**. Após localizar o cheque, vá em **"Cancelamentos"**. Há duas opções:

**Cancelamento de cheque:**

Cancela o cheque em si, fazendo com que seu número não possa mais ser reutilizado. Utilizado em casos como perda do cheque ou sustação. Informe o motivo e confirme.

- Se for um cheque avulso: os títulos a pagar vinculados ficam com status **Excluído**.
- Se for um cheque gerado a partir de um título a pagar: a baixa do título é desfeita.

**Cancelamento de assinatura:**

Cancela apenas a assinatura do cheque, voltando-o para o status **Impresso** para que seja novamente assinado. Informe o login de autorização, o motivo e confirme.

### Devolução de Cheque

A devolução de um cheque a pagar é feita no módulo **Disponível** (não no módulo Cheque a Pagar).

**Rotina com conciliação manual:**

1. Após a assinatura, o cheque aparece pendente de conciliação no Disponível. Realize a conciliação primeiro.
2. Vá em **Conciliação Bancária >> Devolução de cheque**. Informe a Natureza e histórico e marque se o cheque será reapresentado ou não.
   - **Reapresentar marcado** → Cheque aparece no Cheque a Pagar com status **Reapresentado** (ou **Reapresentado conciliado** se o movimento no Disponível for conciliado).
   - **Reapresentar não marcado** → Cheque aparece como **Devolvido**. Opções disponíveis:
     - **Reapresentar o cheque devolvido** — Informe quando houve a reapresentação. O cheque muda para **Reapresentado** e aparece no Disponível para conciliação com movimento de saída.
     - **Inutilizar o cheque devolvido** — Informe o motivo. O cheque passa para status **Inutilizado**, o título no Contas a Pagar é excluído e o movimento de devolução no Disponível recebe um asterisco com a mensagem explicativa. Após a inutilização, não é possível fazer nenhum tratamento adicional com o cheque.

No Disponível, o movimento registrado na devolução gera uma entrada na conta, representando que o valor que havia saído retorna.

**Rotina com conciliação automática:**

1. Faça a assinatura do cheque e acesse o módulo Disponível.
2. Na aba **"Conciliação Bancária"**, a opção **"Devolução de cheque"** fica desativada — a rotina é realizada na área de **"Conciliação automática"**.
3. Importe o arquivo OFX com o registro da compensação. Selecione os movimentos e clique em **Conciliar**.
4. Para a devolução, confirme se o arquivo OFX possui o registro da devolução. Selecione o registro e clique em **"Devolução de cheque"**.
5. Para reapresentar, marque a opção correspondente e clique em **"Ok"**. O status muda para **Reapresentado** e aparece no Disponível para conciliação.
6. Se o cheque for devolvido pela segunda vez, selecione o movimento e clique em **"Devolver cheque"**. O status muda para **Devolvido**.
7. Para inutilizar, clique em **"Inutilizar cheque devolvido"**, informe o motivo e confirme. O cheque passa para **Inutilizado** e o título no Contas a Pagar é excluído.

### Excluir Cheque

A exclusão pode ser feita a qualquer momento, fazendo com que o cheque não apareça mais e permitindo reutilizar o número. Utilizado quando é necessário alterar informações do título a pagar que não podem ser alteradas devido ao vínculo com o cheque, ou quando o cheque foi cadastrado incorretamente.

Localize o cheque, clique em **"Excluir"** e confirme.

### Relatório de Cheques

Clique no botão **"Relatório de cheques"**. Na tela de filtro:

- Filtre por período de **"bom para"** ou **data de cadastro/emissão** (pelo menos um desses filtros é obrigatório).
- No quadro **"Status dos cheques"**, marque quais status devem aparecer (se nenhum for marcado, todos são apresentados).
- Em **"Ordenar relatório por"**, selecione a ordem conforme a necessidade.
- A opção **"Agrupar por empresa do título"** agrupa os cheques por empresa.

Clique em **"Avançar"** para filtrar por bancos, agências e contas bancárias. Clique em **"Visualizar"** para exibir o relatório.

### Estornar Títulos Rejeitados

Quando o banco rejeita apenas alguns títulos de um cheque aglutinado (não todos), é possível estornar apenas os títulos rejeitados sem cancelar a assinatura de todo o cheque.

**Pré-requisito:** O movimento relacionado ao cheque e o movimento de entrada criado para estorno devem estar conciliados no Disponível.

Clique em **"Estornar títulos rejeitados"**, localize o cheque, selecione o **"Título a pagar"** e o **"Lançamento de entrada – conciliado"**. Ao clicar em **"Realizar estorno"**, o sistema cria automaticamente uma cópia de cada título estornado no A Pagar.

> **Observação:** Ao retirar a data de conciliação do movimento de entrada utilizado no estorno do cheque, o sistema apresentará uma crítica, pois o estorno também será desfeito.

---

## Previsão

Usado quando a empresa já quer vincular um título a um cheque, mas ainda não possui o número dele.

1. Clique em **Gerar Cheque** no módulo Cheque a Pagar.
2. Marque **Previsionar** e preencha os campos para seleção dos títulos.
3. Selecione os títulos desejados.
4. Informe a data de **"Bom para"** e a conta bancária.
5. Clique em **Gerar Cheque** e depois em **Salvar**.

O cheque aparece na tela principal no filtro de **Previstos** sem número de cheque.

Para preencher os dados quando tudo estiver pronto, clique em **Imprimir Cheque**:

1. Preencha o filtro para buscar os cheques previstos.
2. Selecione o(s) cheque(s).
3. Opcionalmente, mude a conta bancária ou data de "bom para".
4. Marque o tipo de processamento.
5. Gere o cheque.

O número do cheque é apresentado de acordo com o sequencial da conta. Clique em **Processar** — o cheque passa para **Impresso** e segue o processo normal de assinatura.

---

## Cheque Pré-datado

O cheque pré-datado é quando a empresa emite um cheque com a "data de bom para" no futuro. Juridicamente, o cheque é uma ordem de pagamento à vista, mas é uma prática costumeira no mercado.

### Configurações Cheque Pré-datado

Caminho: **Configurador >> Financeiro >> Opções >> Cheque >> Outras configurações para cheques (a pagar/a receber)**

1. **Tipo de baixa total sem numerário** — Usado para baixar o título original pago totalmente por cheque pré-datado (o título original é renegociado).
2. **Tipo de baixa parcial sem numerário** — Usado para baixar o título original pago parcialmente por cheque pré-datado.
3. **Forma de pagamento** para os novos títulos gerados pela renegociação (deve ter o tipo Cheque).
4. **Natureza de lançamento** para os títulos criados na renegociação.

### Criação do Cheque Pré-datado

Para criar um cheque pré-datado, coloque a **"data de Bom para"** do cheque superior à data atual e à data de vencimento do título.

1. Clique em **Gerar cheque** e filtre os títulos.
2. Marque o título e informe a data de "bom para" maior que a data de vencimento e maior que a data atual.
3. Clique para gerar o cheque e depois em **Processar**.
4. Na tela principal, o cheque aparece em **Impressos**. Clique em **Assinar Cheque**.
5. Confirme que a data de "Bom para" está maior que a atual e assine.

**O que acontece na assinatura:**

Todo cheque pré-datado gera uma **renegociação** — o título original é baixado sem numerário (usando o tipo de baixa configurado no item 1 das configurações). Um novo título é criado com:

- **N° Título** — Número do título original + sufixo **ChqPre**.
- **Vencimento** — Data de "bom para" do cheque pré-datado.
- **Forma de pagamento** — Configurada no item 3.
- **Natureza de Lançamento** — Configurada no item 4.

No Disponível, é criado um movimento na mesma data de "bom para" do cheque pré-datado, pendente de conciliação.

### Baixa do Título

O título criado na renegociação fica em processo de baixa no módulo A Pagar (não baixado ainda), pois foi gerado em data futura. Quando o responsável pelo Disponível receber o extrato bancário e verificar que o valor do cheque foi compensado, realiza a conciliação do movimento — e o título é baixado automaticamente.

---

## Impressora de Cheque

> **Lembrete:** Impressoras comuns (jato de tinta, laser, matriciais) são instaladas normalmente no computador ou rede e o sistema as reconhece automaticamente. As configurações desta seção são apenas para impressoras de cheque específicas.

### Configurações de Impressão

Caminho: **Configurador >> Financeiro >> Opções >> Cheque >> A Pagar**

1. **Arquivo Layout (.Lay)** — Define a estrutura do cheque e quais campos serão exibidos na impressão. Recomenda-se informar o caminho de rede compartilhado para que todos os usuários com permissão usem o mesmo arquivo. Varia de acordo com a marca e modelo da impressora.
2. **Porta da impressora** — Porta na qual foi configurada a impressora de cheque.
3. Se o arquivo Layout for configurado para impressão via TS (Terminal Service), o campo 2 pode ser desabilitado e o campo 3 habilitado.
4. **Verso do cheque** — Marque se algum elemento preenchido no sistema precisa ser impresso no verso.
5. **Limite de caracteres** — Limita o número de caracteres no verso do cheque. Se informar zero, tudo será impresso; se informar um valor maior que zero, os dados serão impressos até esse limite.

Se a empresa possui contas com configurações diferentes de layout e localização da impressora, o ajuste deve ser feito no cadastro da conta bancária (aba **Cheque >> Impressão de cheques**).

### Rotina com Impressora de Cheque

Nada muda na forma de criar e imprimir um cheque. A diferença é que o sistema se comunica com a impressora de cheque em vez de uma impressora comum. Ao final de cada processo, confirme a impressão do cheque para que o sistema mude o status para **Impresso**.

### Impressão via TS

Utilizado quando a empresa possui servidor em nuvem (Terminal Service) e a impressora está instalada na máquina local.

Utilize o aplicativo **AgenteImpChequeTS_ERP.exe** tanto no servidor TS quanto na máquina local onde está a impressora (localizado na pasta padrão de instalação do Bimer).

Clique com o botão direito no ícone na bandeja do Windows e acesse **Configuração**. Configure em ambas as máquinas:

- **Layout para impressora de cheque** — Arquivo de Layout (.Lay) da impressora física.
- **Porta da Impressora de cheque** — Número da porta onde foi instalada a impressora localmente.
- **Diretório de comunicação** — O mesmo diretório compartilhado informado em **Configurador >> Financeiro >> Opções >> Cheque >> A Pagar >> Diretório de comunicação**.

---

## Informações Extras

- **Usuário não consegue assinar o cheque** — Acesse o Cadastro de Usuários e verifique se a permissão **"Assinar cheques"** está habilitada para o usuário.

- **A opção "Aglutina título" pode vir marcada de outro lugar?** — Sim. Pode ser marcada manualmente no título a pagar, ou configurada no módulo Nota Fiscal de Entrada: **Configurador >> Estoque >> Opções >> "Gerar os títulos no contas a pagar com a opção 'aglutina título em cheque' marcada"**.

- **Baixa parcial pelo módulo Cheque a Pagar** — Na tela **Gerar Cheque**, ao abrir o título: (1) altere o valor da baixa para o valor que deseja pagar; (2) informe um tipo de baixa parcial.

- **Dados padrão para devolução de cheque** — Para evitar preencher repetidamente os dados de devolução, acesse **Opções do Disponível** e configure campos padrão como a Natureza de Lançamento.

- **Navegação por conta** — Ao abrir o Cheque a Pagar, é possível navegar usando uma empresa e conta específica. Para ver todos os cheques sem especificar a conta, deixe o campo em branco.

- **Impressão de cheque** — Nas configurações de cheque a pagar do financeiro é possível definir os dados para impressão de cópias de cheques e dados de depósito, selecionando os RTMs e a impressora correspondentes.
