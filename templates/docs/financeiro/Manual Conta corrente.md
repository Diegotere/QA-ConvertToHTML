# Conta Corrente — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Conta Corrente](#conta-corrente)
- [Lançamentos Manuais](#lançamentos-manuais)
  - [Novo Crédito](#novo-crédito)
  - [Novo Débito](#novo-débito)
  - [Transferência de Lançamentos](#transferência-de-lançamentos)
- [Ferramentas](#ferramentas)
  - [Opções](#opções)
  - [Fechamento com RPA](#fechamento-com-rpa)
  - [Reabertura de Fechamento](#reabertura-de-fechamento)
  - [BI Conta-corrente](#bi-conta-corrente)
- [Relatórios](#relatórios)

---

## Introdução

O módulo de **Conta Corrente** é utilizado para realizar o fechamento das comissões e repasses dos vendedores e representantes.

No sistema Bimer, existem dois fatores de geração da comissão:

- **Pelo Faturamento** — A comissão é gerada no momento em que o documento fiscal (Nota Fiscal, NFS-e, Cupom Fiscal) é emitido.
- **Pela Duplicata** — A comissão é gerada no momento em que o título gerado pelo documento é baixado.

> **Nota:** Para que as comissões sejam geradas corretamente, as configurações do módulo de Comissão devem estar realizadas. Consulte o manual de **Comissão** no Portal UCA >> Bimer >> Manuais.

---

## Conta Corrente

Acesse o módulo **Conta Corrente**. Na tela principal, selecione a **empresa** e o **beneficiário** para verificar os valores de comissão liberados e os que estão pendentes.

Na aba **"Valores pendentes"** são exibidos os lançamentos criados na área de lançamentos manuais de crédito e débito. Para que os lançamentos sejam exibidos como pendentes, o usuário não deve preencher a **"Data de liberação"** na tela de lançamento manual.

---

## Lançamentos Manuais

No módulo de Conta Corrente é possível fazer lançamentos de valores de crédito e débito de forma manual para os beneficiários. Na tela superior, encontram-se os botões **"Novo Crédito"** e **"Novo Débito"**.

### Novo Crédito

Campos disponíveis na tela de crédito:

- **Pessoa** — Informe a pessoa que terá o valor creditado.
- **Natureza de lançamento** — Informe a natureza que será vinculada ao crédito.
- **Dt. Movimento** — Data em que o crédito será lançado para o beneficiário.
- **Dt. Liberação** — Data em que o crédito estará disponível para fechamento da comissão.
- **Vl. Lançamento** — Valor do crédito na Conta Corrente.
- **Lançamento irá compor a base de IRRF** — O valor inserido compõe a base de IRRF exibida na área de Fechamento com RPA.
- **Incluir o lançamento no fechamento da fatura** — Se não marcada, o lançamento não será exibido na área de fechamento.
- **Histórico** — Informe o histórico que será levado no lançamento.

### Novo Débito

Campos disponíveis na tela de débito:

- **Pessoa** — Informe a pessoa que terá o valor debitado.
- **Adiantamento** — Caso a empresa tenha disponibilizado algum adiantamento ao beneficiário, marque esta opção. O valor será exibido na coluna saída nos lançamentos.
- **Terceiro** — Pode ser qualquer pessoa. Ao informar o terceiro em um lançamento de débito, será criado um lançamento para o terceiro com a descrição: *"Pagamento efetuado pela pessoa XYZ"*. O terceiro é a pessoa que está recebendo o valor.

> **Observação:** Quando o checkbox **"Adiantamento"** está marcado, não é possível selecionar o terceiro.

- **Natureza de lançamento** — Natureza vinculada ao lançamento do débito.
- **Dt. Movimento** — Data em que o débito será lançado para o beneficiário.
- **Dt. Liberação** — Data em que o débito estará disponível para fechamento da comissão.
- **Vl. Lançamento** — Valor a ser debitado na Conta Corrente do beneficiário.
- **Lançamento irá compor a base de IRRF** — O valor compõe a base de IRRF exibida na área de Fechamento com RPA.
- **Incluir o lançamento no fechamento da fatura** — Quando não marcada, o lançamento não é contabilizado no fechamento de RPA.

Após criar o lançamento, é possível editá-lo ou excluí-lo na parte superior da tela.

### Transferência de Lançamentos

Para transferir valores pendentes ou liberados entre usuários:

Caminho: **Conta Corrente >> aba Principal >> Transferir lançamentos**

Informe:
- **Beneficiário** que receberá o valor.
- **Data da ocorrência** do movimento.
- **Datas de filtro** para buscar os valores a serem transferidos.
- **Incluir pessoas automaticamente** — O sistema incluirá automaticamente as pessoas vinculadas ao beneficiário informado.

Clique em **"Efetuar transferência"**. Para desfazer uma transferência incorreta, utilize o ícone da lixeira para excluir o lançamento.

---

## Ferramentas

### Opções

Nesta área encontram-se as configurações utilizadas pelo módulo:

- **Layout dos relatórios** — Informe os arquivos RTMs para emissão dos relatórios de extrato, RPA, termo de retenção de INSS, etc.
- **Alíquota IRRF pessoas jurídicas** — Percentual do IRRF para cálculo.
- **Vl. mínimo p/ cálculo IRRF pessoas jurídicas** — Valor mínimo para cálculo do IRRF no Fechamento com RPA.
- **COFINS, PIS e CSLL** — Alíquotas correspondentes a cada tributo.

> **Dica:** Os campos **"Vl. acum. p/ cálculo"** ao lado de COFINS, PIS e CSLL verificam se o fornecedor ou terceiro possui configuração de retenção de tributos no cadastro, calculando os impostos nesses casos. Esta verificação existe apenas para fornecedores e terceiros.

- **Gerar os títulos no Contas a Pagar em apenas uma empresa** — Ao marcar, o sistema cria os títulos a pagar somente para a empresa selecionada.
- **Desmembrar o valor do fechamento por natureza de lançamento** — Com esta configuração marcada, ao efetuar o fechamento com valor desmembrado por natureza, a pessoa informada no desmembramento é recuperada de **Configurador Bimer >> Financeiro >> Opções >> A pagar >> aba Impostos**.

Na parte inferior, informe:
- Naturezas de lançamento para os títulos a pagar criados pelo fechamento.
- Natureza para o lançamento de atualização do título de previsão.
- Forma de pagamento para criação dos títulos a pagar.
- Em **"Contas a receber"**: natureza de lançamento e forma de pagamento para criação de títulos a receber no fechamento.
- **Alíquota de redução para base de cálculo dos impostos** — Alíquota de redução de INSS e outros para o fechamento.

### Fechamento com RPA

O **Fechamento com RPA** (Recibo de Pagamento Autônomo) é utilizado para o fechamento dos repasses dos representantes que não são funcionários da empresa.

**Beneficiários:** Vincule os representantes para realização do fechamento. Ao inserir o beneficiário, são exibidos os valores de crédito, débito, INSS, IRRF, etc.

Ao editar o lançamento do beneficiário:

- **Dependentes** — Número de dependentes vinculados ao representante no cadastro da pessoa (em **Pessoa relacionada**). O valor por dependente é configurado na tabela de IRRF em **Configurador do Bimer >> Geral >> Outros Cadastros >> IRRF**.

> **Observação:** A pessoa dependente deve ter até 21 anos ou a data de vencimento do IRRF deve estar preenchida em **Pessoa >> Dependentes >> Cadastros**.

- **Gerar título a pagar ou a receber** — O sistema habilita a opção de acordo com o valor presente na tela. Valor positivo gera título a pagar; valor negativo gera título a receber. Informe também a conta bancária.
- **Lançamento de pagamento de INSS** — Informe a descrição do lançamento, a base e o valor do INSS. Os valores inseridos são **somados** ao valor de INSS já calculado pelo sistema.

**Exemplo de cálculo de INSS:**
- Sistema demonstra base de INSS: R$ 3.000,00, alíquota 12%, valor R$ 360,00.
- Usuário lança INSS adicional: base R$ 600,00, valor R$ 84,00.
- Nova base: R$ 3.600,00. Como excedeu a faixa de 12%, a alíquota passa para 14%.
- Novo valor de INSS: R$ 3.600,00 × 14% = R$ 504,00 – R$ 84,00 = R$ 420,00.

> **Observação:** Se o valor de base exceder o valor da última faixa cadastrada na tabela de INSS, o sistema utiliza o valor da última faixa. As alíquotas de INSS e IRRF são cadastradas em **Configurador do Bimer >> Geral >> Outros cadastros >> INSS** e **IRRF**.

Feita a conferência dos valores, clique em **"Efetuar fechamento"** e confirme.

### Reabertura de Fechamento

Para reabrir um fechamento realizado, informe o período de fechamento para listar todos os fechamentos do período. É possível visualizar pela linha do tempo quais foram os lançamentos de comissão finalizados.

Há duas formas de reabertura:
- Reabrir todo o fechamento realizado.
- Reabrir apenas o fechamento do beneficiário desejado.

### BI Conta-corrente

Nesta área é realizado o fechamento da comissão dos funcionários e representantes.

**Filtros disponíveis:**

**Lançamentos:**
- **Em aberto** — Exibe apenas os lançamentos não fechados (que ainda não geraram títulos a pagar ou a receber). O botão **"Fechamento"** estará habilitado.
- **Fechados** — Exibe apenas os lançamentos já fechados. O botão **"Fechamento"** estará desabilitado.
- **Todos** — Exibe lançamentos abertos e fechados. O botão **"Fechamento"** estará desabilitado.

**Opções adicionais:**
- **Mostrar repasses zerados** — Exibe repasses com valor zero.
- **Conferência de comissões** — Exibe dois campos na área de resultados: comissões baseadas no A Receber e comissões baseadas no Conta-corrente, para conferência dos valores.
- **Considerar lançamentos pendentes** — Exibe lançamentos ainda não liberados (ex.: comissão na duplicata com título ainda não pago).

**Situação dos representantes/funcionários:**
- **Situação do usuário vinculado à pessoa** — Filtra por usuários ativos ou inativos no Cadastro de Usuários.
- **Situação da pessoa por categoria** — Filtra por pessoas ativas ou inativas no Cadastro de Pessoas.

**Ícones da tela:**
1. **Novo** — Retorna os filtros para o padrão inicial.
2. **Recuperar** — Recupera cenários salvos.
3. **Salvar** — Salva o cenário de filtros atual.
4. **Alternar entre filtro e resultado** — Alterna entre a tela de filtro e a área de resultados.
5. **Filtrar** — Retorna o resultado dos filtros.

Após filtrar, são exibidos os beneficiários e os lançamentos com os valores de repasse. Recursos disponíveis:

- **Linha do tempo** — Visualiza a origem do lançamento.
- **Extrato via envio para cliente** — Envia e-mail ao beneficiário com os valores da comissão.
- **Imprimir extrato** — Imprime a relação das comissões conforme o layout definido.
- **Exportar** — Exporta os lançamentos para Excel.
- **Fechamento** — Abre a tela para geração dos títulos a pagar ou a receber.

**Tela de fechamento:**

Para criação dos títulos a pagar:
- **Gerar títulos a pagar** — Marque para criar os títulos a pagar para os beneficiários.
- **Atualizar títulos a pagar de previsão** — Se marcada, o sistema atualiza o título de previsão existente com vencimento no mês do fechamento; se não existir, gera um novo.
- **Calcular impostos para os títulos** — O título é criado no Contas a Pagar com os impostos calculados conforme as configurações de alíquotas do Conta-corrente.
- **Empresa** — Selecione a empresa para a qual o título a pagar será criado.

Para criação de títulos a receber (quando o valor do lançamento for negativo): marque o tipo de título, informe a empresa, forma de pagamento e natureza de lançamento. Clique em **"Efetuar fechamento"**.

---

## Relatórios

### Extrato de Conta-corrente

Demonstra os fechamentos abertos ou fechados, com filtros por data de lançamento, pessoas, naturezas, etc.

Caminho: **Imprimir Relatórios**

Defina o filtro desejado, informe a data do lançamento aberto ou de fechamento de acordo com o tipo selecionado. Clique em **"Visualizar"** ou **"Imprimir"**.

> **Observação:** O arquivo RTM é vinculado nas opções do módulo Conta-corrente.

### RPA

Permite visualizar os fechamentos realizados. Selecione os fechamentos pelo ícone **"+"** no lado direito da tela e clique em **"Imprimir"**.

### Fatura

Permite visualizar as faturas impressas e não impressas. Selecione a fatura desejada, verifique se o layout está vinculado e clique em **"Imprimir"**. Após a impressão, a fatura ficará na cor vermelha.
