# Disponível — Conciliação Automática — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Bancos](#bancos)
  - [Contas Bancárias](#contas-bancárias)
- [Disponível — Conciliação Automática](#disponível--conciliação-automática)
- [Sincronismo](#sincronismo)
  - [Considerar](#considerar)
  - [Desprezar Considerando no Saldo](#desprezar-considerando-no-saldo)
  - [Desprezar Desconsiderando no Saldo](#desprezar-desconsiderando-no-saldo)
  - [Considerar/Lançar](#considerarlançar)
  - [Devolução](#devolução)
  - [Exigir Transferência Manual](#exigir-transferência-manual)
  - [Outras Opções](#outras-opções)
- [Importação do Extrato](#importação-do-extrato)
- [Consultando o Movimento Importado](#consultando-o-movimento-importado)
- [Histórico do Extrato Bancário x Sincronismo](#histórico-do-extrato-bancário-x-sincronismo)
- [Ícones da Conciliação Automática](#ícones-da-conciliação-automática)
- [Incluir Lançamento Manualmente](#incluir-lançamento-manualmente)
- [Reimportação de Arquivo](#reimportação-de-arquivo)
- [Informações de Importação](#informações-de-importação)
- [Alinhamento de Extrato Bancário](#alinhamento-de-extrato-bancário)
- [Arquivo OFC e Arquivo OFX](#arquivo-ofc-e-arquivo-ofx)

---

## Introdução

Após realizar as movimentações bancárias dentro do Bimer (transferência, pagamento ou recebimento), é importante consultar se esses valores constam no extrato da conta bancária.

Para empresas com grande fluxo de movimentação, a **Conciliação Bancária Automática** permite importar o arquivo do extrato bancário e o próprio sistema faz todo o trabalho de conferência, demonstrando os movimentos que estão batendo e as divergências entre a conta bancária e o movimento no Bimer.

Os arquivos utilizados na importação são do tipo **OFX** ou **OFC** (emitidos pelo banco ou instituição financeira), que demonstram os eventos ocorridos em uma conta bancária (compra com cartão de débito, depósito, saque, transferências, pagamentos, etc.).

---

## Configurações

### Bancos

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Bancos**

Abra o banco vinculado à conta da conciliação. Na aba **"Disponível"**:

- **Diretório para importação do extrato bancário (conciliação bancária automática)** — Local onde está o arquivo de importação.
- **Padrão do arquivo a ser utilizado pela conciliação bancária automática** — Selecione o formato (OFX, OFC ou Específico).

A opção **"Específico (.DLL)"** é utilizada quando o arquivo de movimentações não está no formato OFX ou OFC. A DLL lê o layout do arquivo disponibilizado pelo banco e o converte para o formato de importação.

> **Dica:** Se vários usuários fazem a rotina de conciliação, use um diretório compartilhado em rede para que todos tenham acesso.

### Contas Bancárias

Caminho: **Configurador >> Financeiro >> Informações Bancárias >> Contas Bancárias**

Abra a conta que será utilizada na conciliação automática e acesse a aba **"Dados conta-corrente"**:

- **Número da Conta** — Deve ser o mesmo do arquivo a ser importado.
- **Tipo de conciliação bancária** — Mude para **"Automática"**. Com isso, no Disponível o botão "Conciliação múltipla" ficará desabilitado e o botão **"Conciliação automática"** será habilitado.
- **Data Início conciliação automática** — Insira uma data inferior ao período do arquivo para possibilitar a importação. O sistema só aceita conciliação automática de lançamentos não inferiores a esta data.

> **Observação:** Por motivo de integridade dos dados, depois que começar a usar a conciliação automática, não é recomendável voltar para a manual.

- **Data Último lançamento Importado** — Data do último lançamento do sistema encontrado no arquivo importado. Se o cliente ficar alguns meses sem realizar a conciliação e tentar importar um período futuro, o sistema informará que a data inicial do extrato é superior à última data importada. Para resolver:
  - Importar os arquivos faltantes até chegar no período desejado (a data atualiza automaticamente).
  - Clicar no cadeado ao lado do campo e mudar a data para o primeiro dia do extrato a ser importado (requer usuário com permissão no cadastro de usuários).

- **Data Final da última importação** — Data final dos lançamentos do último arquivo importado. Pode ser maior que a "Data Último lançamento Importado", pois pode haver movimentos no arquivo sem sincronismo ou lançamentos para conciliar no Bimer.

- **Banco** e **Agência** — Informe o banco e a agência cadastrada.

> **Dica:** No arquivo a ser importado, a variável `BANKID` representa o código do banco (a conta deve ser cadastrada com o mesmo banco do arquivo). Na variável `ACCTID`, os 4 primeiros números representam a agência e o restante é o número da conta.

---

## Disponível — Conciliação Automática

Ao acessar a conta, vá em **"Conciliação bancária"** e selecione **"Conciliação automática"**.

---

## Sincronismo

O sincronismo é a configuração de vínculo do que está no arquivo de extrato com o que consta lançado no sistema. Dessa forma, é feita a ligação automática dos movimentos no momento da importação do extrato.

Na tela de conciliação automática, clique em **"Sincronismo"** e depois em **"Novo"**.

### Considerar

Ao informar o tipo **Considerar**, são habilitados os campos de **"Histórico"** do **"Extrato"** e **"Histórico"** do **"Movimento disponível"**.

- Na área do **Extrato**: informe o histórico exibido nos movimentos do extrato.
- Na área **Movimento Disponível**: preencha o histórico dos lançamentos presentes no sistema Bimer.

Ao realizar a conciliação, o sistema pesquisa os históricos informados no sincronismo e títulos com valores iguais para realizar o vínculo automático do movimento, ficando aguardando confirmação.

A partir da versão **11.02.03.04**, foi liberada a opção **"Validar número da transação do boleto com número da cobrança no extrato"**, que aprimora a inteligência do sistema para validar o número da transação do título a receber com o número da cobrança no extrato bancário. Esta opção só fica habilitada para movimentos positivos no extrato.

### Desprezar Considerando no Saldo

Não utiliza determinado evento do extrato no vínculo do lançamento para o sistema — o valor desse evento não aparece no módulo Disponível, mas é **considerado no saldo** da conta para comparação com o banco.

Informe o histórico a ser desconsiderado no movimento e clique em **"OK"**.

### Desprezar Desconsiderando no Saldo

O sistema não vincula o evento do extrato ao movimento do Bimer e **não considera** este valor no saldo da conta.

**Exemplo:** Taxa de manutenção de conta de R$ 35,00 todo mês. Se o lançamento da taxa possui um título no Bimer, o recomendável é considerar no saldo; se não existe o título, o correto seria não considerar no saldo. Assim o saldo fechará corretamente.

É possível realizar a rotina de desprezar de forma manual: na tela de **"Extrato"**, selecione o movimento, clique em **"Desprezar"** e selecione a opção relacionada.

### Considerar/Lançar

Pode ter dois comportamentos:

1. **Se encontrar o mesmo movimento no Bimer** — É feita a amarração (igual ao tipo Considerar).
2. **Se não encontrar o lançamento** — Cria um movimento já conciliado no Disponível.

Para que a criação funcione corretamente, preencha:

- **Sinal** — **Positivo** (receitas), **Negativo** (pagamentos) ou **Sincronismo** (ambas as situações).
- **Histórico** do **Extrato** e **Histórico** do movimento do Disponível.
- **Forma de Pagamento**, **Situação administrativa**, **Natureza de lançamento**, **Tipo de Movimento de cobrança** e **Pessoa** — usados na criação do novo movimento.

### Devolução

Serve para realizar devolução de cheque. Na tela principal, na coluna do extrato bancário, é habilitada a opção **"Devolução de cheque"** para estornar o valor do cheque da conta bancária e devolvê-lo nos módulos de cheque do sistema Bimer.

No campo **"Histórico"** do sincronismo, informe o histórico que aparece no extrato. No campo **"Sinal"**:
- **Negativo** — Devolução de cheque a receber (saindo da conta).
- **Positivo** — Devolução de cheque a pagar (retornando para a conta).

Em **Ferramentas >> Opções**, preencha o quadro **"Devolução de cheques manual"** com: Natureza de lançamento, Tipo Mov. Cobrança, Pessoa, Categoria, Nr. Documento e Nr. Banco.

**Ao clicar em "Devolução de cheque":**

- **Cheque a receber (valor negativo):** O sistema verifica se existe algum cheque a receber com o número de cheque nas posições configuradas, já baixado e com movimento bancário conciliado. Se encontrar, gera um lançamento no Movimento Bancário e um cheque com status de devolvido vinculado ao cheque de origem. Se não encontrar, gera o lançamento e o cheque devolvido sem vínculo.
- **Cheque a pagar (valor positivo):** Gera um lançamento no Movimento Bancário com os dados idênticos ao Extrato Bancário.

### Exigir Transferência Manual

Utilizado quando se realiza transferência entre contas bancárias. A configuração segue o mesmo padrão da Devolução do cheque — informe o mesmo histórico que aparece no extrato.

Ao clicar no lançamento na tela principal, é habilitado o botão **"Transferência"**. Informe a conta de destino, preencha os demais campos e clique em **"Ok"**.

**Observações sobre Transferência:**
- Se o valor for negativo: a conta origem já vem como padrão (não pode ser alterada); informe a conta de destino.
- Se o valor for positivo: a conta de destino já vem como padrão (não pode ser alterada); informe a conta origem.
- Na conta atual: gerado um lançamento conciliado no Movimento Bancário.
- Na conta de destino/origem: gerado um lançamento pendente no Movimento Bancário.

### Outras Opções

- **Marcação "Ativo"** — Se desmarcada, o sistema desconsidera esse cadastro na rotina de conciliação.
- **Opção "Aplicação automática"** — Para empresas com contrato de aplicação automática:
  - **Acrescer** — Conciliação automática com crédito na conta bancária; valor futuramente debitado e acrescido no saldo de aplicação automática.
  - **Decrescer** — Débito no saldo de aplicação automática e crédito no saldo da conta bancária.
  - **Ignora** — Sincronismo não utilizado na aplicação automática.
- **Posição Inicial** e **Posição Final** — Informam a partir de qual posição do histórico o sistema deve buscar no extrato e no movimento para fazer a conciliação.

---

## Importação do Extrato

Após configurar os sincronismos, clique em **"Importar Extrato Bancário"** na tela principal.

Caso a conta ainda não tenha saldo de abertura, a tela para inserção do saldo será aberta (é possível inserir valor negativo usando o sinal de subtração).

**Regras de importação:**

- Só são importados lançamentos com data de movimento superior ou igual à data de início da conciliação automática, maior que a data de fechamento da conta e superior à data de abertura de saldo.
- Antes de importar, o sistema verifica lançamentos já existentes no extrato bancário no período do arquivo. Se existir um lançamento na tabela de extrato que não se encontra no arquivo sendo importado, ele será excluído junto com seus vínculos.
- Se em uma data existe o mesmo total e quantidade de lançamentos no arquivo e na tabela de Extrato Bancário, os lançamentos do arquivo não são importados (sistema entende que nada foi alterado).
- Se um lançamento do arquivo possuir as mesmas informações de TrNamt, FitId, CheckNum, Memo e DtPosted de um lançamento já existente, também não é importado.

Após importar, todos os lançamentos são apresentados na tabela de Extrato Bancário com o status **Pendente**. Os sincronismos cadastrados são executados automaticamente após a importação.

A única verificação feita automaticamente (independente de sincronismo) é a do número do documento do extrato nas tabelas de Cheque e AReceber — se o número for localizado e o título estiver baixado com movimento bancário pendente e valor igual, é feito um vínculo automático.

---

## Consultando o Movimento Importado

Após importar, filtre a data em **"Período de Movimentação"** e marque quais movimentos devem ser mostrados:

- **Pendente** — Em verde: lançamentos ainda não conciliados ou desprezados, com data de movimento inferior ou igual à data atual.
- **Marcado** — Ainda não conciliado, mas com movimentos do Bimer e extrato vinculados um ao outro (aguardando confirmação do usuário).
- **Conciliado** — Movimento do extrato já conciliado no lançamento do sistema Bimer.
- **Desprezado** — Lançamentos desprezados (considerando ou não no saldo).
- **Futuro** — Lançamentos ainda não conciliados ou desprezados, com data de movimento superior à data atual.

Na tela à esquerda (**"Movimento"**) ficam os lançamentos bancários gerados por baixas ou incluídos manualmente. À direita (**"Extrato"**) ficam os eventos do extrato bancário.

> **Observação:** Ao gerar movimento bancário a partir de baixa de título, o movimento é apresentado no Disponível com status **"Pendente"**, a não ser que a forma de pagamento esteja configurada para gerar o movimento bancário já conciliado.

> **Observação:** Quando há movimentos com o mesmo histórico e valor, diferenciando apenas a data, o sistema faz a comparação de "nível de proximidade" priorizando a menor diferença de dias entre as duas datas (a partir da versão **9.00.06.00**).

---

## Histórico do Extrato Bancário x Sincronismo

Quando o extrato é importado e não há sincronismo cadastrado para determinados movimentos, é necessário criá-lo. Na tela de extrato, identifique o **"Histórico"** e acesse **"Sincronismo"**. Preencha o campo **"Histórico"** na área de extrato com a informação obtida na importação, complete os demais dados e grave.

---

## Ícones da Conciliação Automática

**Executar Sincronismo e Confirma Conciliação:**

- **Executar Sincronismo** — Realiza o vínculo dos movimentos com sincronismo do tipo "Considerar" ou "Considerar/Lançar". Os lançamentos ficam com o ícone do marcador azul na coluna "Status" (status MARCADO), indicando que há um relacionamento entre o movimento do extrato e o lançamento no Disponível, pendente de confirmação.
- **Confirma Conciliação** — Os movimentos com status MARCADO são conciliados de fato no movimento.

**Desfazer Marcações:** Desfaz o vínculo dos lançamentos marcados no sincronismo do tipo "Considerar" ou "Considerar/Lançar", removendo o ícone azul. O usuário pode clicar em "Executar sincronismo" novamente para remarcar.

**Desfazer Conciliações:** Remove a conciliação dos lançamentos, voltando ao status "Pendentes". Defina no campo **"Período de movimentação"** uma data para desfazer a conciliação — movimentos fora dessa data não serão alterados.

**Lançamento de Saldo no Banco:** De acordo com a conciliação efetuada, o sistema realiza automaticamente o lançamento do saldo no banco. Se necessário modificar esses saldos, clique em **"Lançamento de saldo no banco"** para excluir os valores de saldo no banco.

---

## Incluir Lançamento Manualmente

Para incluir um movimento baseado no que consta no extrato para realizar a conciliação, selecione o evento na tela de **"Extrato"** e clique no botão de adição. Complete o cadastro com os dados desejados (Natureza de Lançamento, Forma de pagamento, etc.).

---

## Reimportação de Arquivo

Ao reimportar um arquivo de extrato bancário, podem ocorrer dois comportamentos:

1. **Desconciliar o movimento (cor verde)** — O sistema desconcilia o que já estava importado nesta data, caso os movimentos do dia não existam mais no extrato que acabou de ser importado, ou caso existam mas tenham sofrido algum tipo de atualização no banco.
2. **Permanecer sem alterações (cor preta)** — Nada é modificado caso os movimentos importados sejam exatamente iguais (sem nenhuma mudança em relação ao primeiro arquivo importado).

O comportamento de desconciliar ou não é determinado pela opção **"Utilizar Nr. Documento na importação do extrato bancário"** no cadastro da conta bancária:
- **Marcada:** Usa os campos `DTPOSTED`, `TRNAMT`, `CHKNUM` e `MEMO` para validar se um lançamento foi modificado.
- **Desmarcada:** Usa os campos `DTPOSTED`, `TRNAMT` e `MEMO`.

**Orientações para o cliente:**
1. Esteja ciente de que mudanças nos lançamentos são comuns em alguns bancos.
2. Faça a importação por partes (ex.: até o dia 15, depois a partir do dia 16) para evitar desconciliações.
3. Faça a importação após fechar o último dia do mês (importação mensal) para não correr o risco de desconciliar movimentos.

---

## Informações de Importação

Através desta área é possível verificar o diretório de importação dos arquivos OFX/OFC ou DLL sem sair da área de Conciliação automática. São exibidos também: data do fechamento da conta, data da última importação e data da última conciliação.

---

## Alinhamento de Extrato Bancário

Este recurso analisa se o código da empresa está divergente do que está informado na conta bancária. Quando ocorre divergência (ex.: usuário seleciona empresa 00001 no Disponível, mas ao acessar a conciliação automática troca para empresa 00002), a importação do extrato pode gerar movimentos duplicados. O alinhamento identifica o movimento duplicado e exclui, mantendo apenas o movimento da empresa correta.

> **Observação:** A rotina somente afeta extratos bancários relacionados à conta atual e que não estejam conciliados.

---

## Arquivo OFC e Arquivo OFX

**Dados principais em um arquivo OFC:**

- `<ACCTID/16070607318` — Agência (4 primeiros dígitos) e número da conta (restante).
- `<DTSTART/20060701` — Data inicial do extrato (formato AAAAMMDD).
- `<DTEND/20060711` — Data final do extrato (formato AAAAMMDD).
- `<LEDGER/124749.00` — Saldo na data final do extrato.

Bloco de lançamento:
- `<STMTTRN/` — Início do bloco.
- `<DTPOSTED/20060703` — Data do lançamento.
- `<TRNAMT/5750.00` — Valor do lançamento.
- `<FITID/0042417` — Identificador interno do lançamento.
- `<CHKNUM/0042417` — Número do lançamento (para cheques, contém o número do cheque).
- `<MEMO/DP BLQ01 BCOS` — Histórico do lançamento.
- `</STMTTRN/` — Final do bloco.

**Dados principais em um arquivo OFX:**

- `<ACCTID/1338430687` — Agência (4 primeiros dígitos) e número da conta (restante).
- `<DTSTART/20060714100000[-03:EST]` — Data inicial do extrato (formato AAAAMMDD).
- `<DTEND/20060726100000[-03:EST]` — Data final do extrato.

Bloco de lançamento:
- `<STMTTRN/` — Início do bloco.
- `<DTPOSTED/20060714100000[-03:EST]` — Data do lançamento.
- `<TRNAMT/123.00` — Valor do lançamento.
- `<FITID/20060714001` — Identificador interno do lançamento.
- `<CHECKNUM/20060714001` — Número do lançamento.
- `<MEMO/CEI 999304 DINHEIRO` — Histórico do lançamento.
- `</STMTTRN/` — Final do bloco.
- `<BALAMT/406.21` — Valor do saldo na data apresentada como `<DTASOF/`.
- `<DTASOF/20060725100000[-03:EST]` — Data do saldo apresentado no arquivo.

> **Observação:** A formatação e as palavras-chave podem variar de banco para banco. Alguns bancos apresentam `<CLTID/` ao invés de `<ACCTID/`.

**Importação de arquivos:**

Ao clicar em **"Importar extrato bancário"**, o sistema verifica no diretório configurado se existe um arquivo com o tipo configurado (OFX ou OFC) para a conta bancária selecionada.

- Se existir mais de um arquivo para a conta, é apresentada uma tela para seleção.
- Se existir apenas um arquivo, a importação inicia automaticamente.

A informação do número da conta no arquivo é apresentada após a palavra-chave `<ACCTID/`, sendo os 4 primeiros dígitos a agência e os demais o número da conta.
