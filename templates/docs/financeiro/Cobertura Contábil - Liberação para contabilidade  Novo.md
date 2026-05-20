# Cobertura Contábil — Liberação e Outros Recursos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Liberação para Contabilidade](#liberação-para-contabilidade)
  - [Reenviar Lote](#reenviar-lote)
  - [Seleção de Lotes para Liberação](#seleção-de-lotes-para-liberação)
- [Reabertura](#reabertura)
- [Alinhamento](#alinhamento)
  - [Log](#log)
  - [Centro de Custo (Estoque)](#centro-de-custo-estoque)
- [Duplicar Cobertura](#duplicar-cobertura)
- [Alterar Provisão em Massa](#alterar-provisão-em-massa)
- [Excluir Lançamentos](#excluir-lançamentos)
- [SPED Contábil — Estoque](#sped-contábil--estoque)
- [Custo Estoque](#custo-estoque)
- [Conta Transitória](#conta-transitória)
- [Provisão](#provisão)
- [Business Intelligence](#business-intelligence)

---

## Liberação para Contabilidade

Se o lote estiver sem erros, está pronto para ser enviado para a contabilidade. Para clientes que possuem o **Pack Contábil da Alterdata**, clique em **Liberar**.

A tela seguinte apresenta as preferências para exportação no contábil:

1. **Nome do lote na contabilidade** — Confirme o nome do lote.
2. **Gerar todos os lançamentos com uma única data** — Muito usado por contadores que geram o lote no último dia do mês, fazendo com que todos os lançamentos fiquem com a data 31/xx/20xx, por exemplo.
3. **Data do lote na contabilidade** — Quando marcada, a data na contabilidade receberá a data de criação do lote no Bimer. Quando desmarcada, a data na contabilidade será a data de envio do lote.
4. **Aglutinar movimentos com mesma data e contas** — Movimentos com a mesma data e contas serão gerados em um único lançamento no lote contábil.

Após a exportação, o lote fica na cor **preta**.

Para conferir o lançamento no Pack Contábil: **Lançamentos >> Abrir >> Informe a empresa** (o código é o mesmo que está no cadastro da empresa na Cobertura Contábil, campo **Código da empresa no WCont**). Localize o lote e dê dois cliques para visualizar os lançamentos.

> **Quando a contabilidade é terceirizada** (cliente não usa o Pack): clique em **Exportar** e selecione o layout desejado (configurado nas opções). Isso gera um arquivo que será importado manualmente pelo contador. O suporte auxilia apenas na geração e verificação do arquivo — não na importação em sistemas de terceiros.

### Reenviar Lote

Quando o contador informa que o lote está com contas trocadas, lançamentos faltando ou outros problemas, é necessário ajustar e reenviar. O processo é:

1. Na tela principal, localize o lote na cor preta e clique em **Desmarcar Liberação**. O lote ficará aberto novamente para ajustes.
2. Após realizar os ajustes, **não** envie diretamente para a contabilidade. Primeiro, exclua o lote que foi enviado anteriormente para evitar duplicação de movimentos: na tela do lote, clique em **Apagar Lote**.
3. Agora clique em **Liberar** para reenviar o lote com os ajustes.

### Seleção de Lotes para Liberação

Para liberar vários lotes do estoque e financeiro de uma só vez, clique no botão **Seleção** na tela principal, faça um filtro dos lotes, marque-os e envie para o contábil.

> **Dica:** É possível configurar a liberação de lotes de forma automática. Consulte o artigo específico no Portal UCA.

---

## Reabertura

A opção **Reabertura** foi criada para desprender o lote de uma geração mal sucedida. Isso ocorre quando o usuário gera os movimentos do financeiro e acontece algum problema de conexão com o banco ou similar, fazendo com que o lote não apareça na Cobertura — mas ao tentar gerar novamente, o sistema informa que os títulos já foram contabilizados em outro lote.

Para resolver: clique em **Reabertura**, localize o lote e desvincule os lançamentos.

> **Detalhe técnico:** Para que o lote seja gerado corretamente, as tabelas `AltLogContabil` e `MovimentoContabil` precisam ser alimentadas. O botão Reabertura é usado quando as informações do lote foram geradas apenas na `AltLogContabil` — assim o lote é removido desta tabela para ser gerado novamente, alimentando corretamente as duas.

---

## Alinhamento

O **Alinhamento** é utilizado quando lotes ou lançamentos apresentam algum tipo de erro, permitindo que o sistema faça um ajuste de forma mais rápida e prática. Há dois tipos:

### Log

Utilizado quando o cliente gera o lote do financeiro e alguns títulos não aparecem no lote, mesmo com os filtros de geração corretos.

A tabela `AltLogContabil` deve ser alimentada com as informações do título para que ele apareça na Cobertura. Quando ocorre algum erro nesse processo, o alinhamento de log inclui ou recria os vínculos dos títulos de modo correto.

Para usar: abra a tela, selecione os tipos de movimentos com problema, informe a data dos lançamentos e clique em **Alinhar**. Após o processo, exclua o lote gerado com os títulos faltantes e gere um novo lote.

### Centro de Custo (Estoque)

Utilizado quando o lançamento dos centros de custos atinge um rateio de 100%, mas há uma diferença entre o valor do lançamento contábil e o total dos centros de custos.

Para usar: informe o período dos movimentos na tela e clique em **Alinhar**. O sistema redistribuirá o valor do lançamento por centro de custo de acordo com o percentual de cada um.

Para verificar se há movimentos incorretos sem precisar abrir cada lote individualmente, clique em **Listar**.

> **Atenção:** Este alinhamento é utilizado apenas nos lotes de estoque.

---

## Duplicar Cobertura

Usado quando duas empresas utilizam o mesmo plano de contas e praticamente as mesmas configurações de contabilização, evitando refazer toda a configuração do zero.

**Exemplo:** A empresa 01 – UCA está totalmente configurada. O cliente precisa configurar a empresa 02 – FILIAL ANGRA com as mesmas configurações.

**Procedimento:**

1. Acesse o cadastro das duas empresas e verifique se o plano de contas é o mesmo.
2. Na aba **Cobertura**, clique em **Duplicar Cobertura**.
3. Informe a **Empresa de origem** (a configurada) e a **Empresa de destino** (quem vai receber as configurações).

> **Dica:** Para copiar apenas algumas configurações da cobertura, clique com o botão direito no quadro **Cobertura contábil** e selecione **Marcar ou Desmarcar Cobertura**.

---

## Alterar Provisão em Massa

Utilizado quando várias coberturas estão sem a opção **Trabalha com provisão** marcada e é necessário fazer essa marcação de forma otimizada.

**Procedimento:**

1. Clique em **Alteração de Provisão em Massa**.
2. Selecione a empresa.
3. Faça o filtro das coberturas e clique em **Atualizar**.
4. Escolha se deseja mudar para **Com** ou **Sem Provisão** e confirme.

---

## Excluir Lançamentos

O usuário pode remover lançamentos do lote que não devem ser enviados para a contabilidade.

**Remover individualmente:** Clique sobre o lançamento e depois em **Remover**. O sistema perguntará se o movimento poderá ser contabilizado em outro lote futuramente, ou se deve ser bloqueado para não ser mais contabilizado.

**Remover em massa:** Clique em **Excluir agrupado** na tela principal. Faça o filtro desejado (por lote, empresa, contas, faixa de valores) para encontrar os lançamentos a remover. Selecione os lançamentos dando dois cliques, ou clique no primeiro quadradinho para selecionar todos.

**Recuperar lançamentos excluídos:** Localize o lote na tela principal, marque **Excluídos**, selecione o lançamento e clique em **Recuperar**.

---

## SPED Contábil — Estoque

Quando a empresa está marcada como **Trabalha com SPED Contábil** no cadastro da empresa da Cobertura, o sistema aplica proteções adicionais:

**Financeiro:** Se o usuário tentar liberar lançamentos em partida simples (apenas conta débito sem conta crédito, ou vice-versa), o sistema retorna uma mensagem de erro. O usuário deve enviar apenas partidas dobradas ou cancelar a importação para corrigir os lançamentos.

**Estoque:** O sistema sempre gera as apropriações do estoque com partida dobrada. Se o usuário tentar lançar um movimento de partida simples manualmente, uma mensagem de erro é gerada.

---

## Custo Estoque

Quando está configurada a contabilização do documento pelo valor do custo médio do produto, mas este está zerado, o sistema retorna um erro na contabilização do estoque.

Há duas formas de resolver:

1. **Ajustar o custo médio:** Lance um documento no sistema para ajustar o valor — por inventário de ajuste do custo médio ou pela entrada de uma nota fiscal com operação que influencia no custo médio. Após ajustar, apague o lote e gere novamente.

2. **Alterar para contabilização pelo valor do documento:** Caminho: **Cadastros e Configurações >> Opções >> Complementar >> Contabilização do estoque**. Marque **Valor do documento na contabilização do estoque** (de acordo com o movimento: entrada ou saída). Após, exclua o lote e gere novamente.

---

## Conta Transitória

As **Contas Transitórias** são contas temporárias que contabilizam os valores baixados até que haja a conciliação com o banco. São contas genéricas criadas pelo contador para esse objetivo — não são contas que existem no banco.

**Configuração:**

Caminho: **Cobertura >> Seleciona a empresa >> Financeiro >> Disponível >> Conta bancária >> Campo Conta transitória**

Preencha uma conta do plano para ser utilizada. Quando este campo está em branco, o sistema entende que o usuário não usa a conta transitória. O campo **Histórico padrão** será levado para a geração do lote de conciliação.

**Geração dos Lotes — duas etapas:**

1. Tudo que foi baixado (conciliado ou não no módulo Disponível) aparece com o código da conta transitória no lote de baixa do financeiro, não na conta permanente.
2. Após a geração do lote de conciliação bancária/transferência, é feita uma transferência dos movimentos já conciliados para a conta permanente.

> **Observação:** Os dois lotes normalmente são levados para a contabilidade. O primeiro mostra os valores já baixados mas sem reconhecimento do banco; o segundo confirma que os valores foram baixados e reconhecidos pelo banco.

> **Dica:** Em **Cadastros e Configurações >> Opções >> Complementar**, há a opção **"Não gerar lançamento transitório para baixas de títulos com movimento bancário conciliado"**. Quando marcada, no lote de baixa o que já está conciliado é gerado na conta permanente diretamente, sem conta transitória. O que não está conciliado continua sendo gerado com conta transitória.

---

## Provisão

**Diferença entre Previsão e Provisão:**

- **Previsão** — Lançamento futuro para pagar ou receber algo ainda não concretizado. No Bimer, é um título de previsão. Estes **não integram** com a Cobertura Contábil.
- **Provisão** — Lançamento de título realizado, com o objetivo de reservar um recurso para pagamento de algo já acordado com o credor, ou confirmar o fechamento de uma negociação com o cliente.

Ao marcar na Cobertura da Natureza que **Trabalha com Provisão**, os títulos realizados ainda em aberto serão gerados nos lotes da contabilidade. Sem essa opção, apenas as baixas do título serão integradas.

> **Nota:** Esta opção foi criada para atender diferentes regimes contábeis:
> - **Regime de caixa** — A empresa contabiliza somente quando o dinheiro entra ou sai da conta efetivamente.
> - **Regime de competência** — A empresa contabiliza no momento em que uma despesa ou receita é gerada, mesmo sem pagamento imediato.

---

## Business Intelligence

O **BI da Cobertura Contábil** permite filtrar e analisar lançamentos contábeis por empresa, natureza de lançamento, operação e período.

**Recursos disponíveis:**

- Salvar o cenário atual para utilizações futuras.
- Exportar para Excel para análise detalhada.
- Arrastar colunas da tela principal para cima para criar agrupamentos.

A partir da versão **11.00.10.00** do Bimer, foi liberada a área de pesquisa **"Controle de provisão"** no BI da Cobertura Contábil. Nesta área é possível filtrar pelos lançamentos que já foram provisionados, os que não foram, ou todos em um mesmo relatório. Na tela de filtro, a coluna **"Provisão"** é preenchida por **"N"** (não provisionado) ou **"S"** (já provisionado).
