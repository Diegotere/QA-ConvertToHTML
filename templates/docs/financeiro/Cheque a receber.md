# Cheque a Receber — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Rotina de Controle de Cheques a Receber](#rotina-de-controle-de-cheques-a-receber)
- [Configurações](#configurações)
- [Rotina](#rotina)
  - [Cadastro de Novo Cheque](#cadastro-de-novo-cheque)
  - [Enviar Cheque para Conciliação](#enviar-cheque-para-conciliação)
  - [Alterar Status Manualmente](#alterar-status-manualmente)
  - [Cancelar Envio para Conciliação](#cancelar-envio-para-conciliação)
  - [Conciliação de Cheque](#conciliação-de-cheque)
  - [Devolução Manual de Cheque a Receber](#devolução-manual-de-cheque-a-receber)
  - [Conciliação Manual da Devolução de Cheque](#conciliação-manual-da-devolução-de-cheque)
  - [Cancelar Devolução de Cheque a Receber](#cancelar-devolução-de-cheque-a-receber)
  - [Como Receber um Cheque Devolvido](#como-receber-um-cheque-devolvido)
- [Renegociação de Títulos](#renegociação-de-títulos)
- [Gerar Histórico de Carteira](#gerar-histórico-de-carteira)
- [Relatórios](#relatórios)
- [Cadastro de Alíneas de Devolução](#cadastro-de-alíneas-de-devolução)

---

## Introdução

O módulo **Cheque a Receber** tem o objetivo de gerenciar os pagamentos de vendas recebidos com essa forma de pagamento. Além do controle de quais cheques estão aguardando para serem depositados, os cheques também poderão ser renegociados, devolvidos e conciliados.

As rotinas do Cheque a Receber são integradas principalmente com os módulos **A Receber** e **Disponível**.

---

## Rotina de Controle de Cheques a Receber

De forma simplificada, quando a empresa recebe cheques de um cliente para quitar uma venda, acontecem as seguintes fases: depositar o cheque na conta-corrente; acompanhar o extrato para aguardar a compensação; e conciliação do extrato.

**Sequência padrão no Bimer:**

1. O cheque é incluído no módulo Cheque a Receber com status **Cadastrado**.
2. Quando chegar a data do vencimento, o cheque é depositado. No Bimer essa etapa é chamada **"Enviar para conciliação"** — o cheque fica com status **Enviado para Conciliação**, indicando que foi depositado e aguarda compensação.
3. O título a receber vinculado ao cheque é baixado.
4. Quando o dinheiro entra efetivamente na conta-corrente (compensação), é feita a **Conciliação** do cheque no Disponível. O cheque passa para o status **Conciliado**.
5. Se o cheque for devolvido:
   - **5.1** — Se a alínea de devolução permitir reapresentação (ex.: insuficiência de saldo na 1ª apresentação), o cheque passa para o status **Devolvido Pendente**. Cheques com esse status podem entrar normalmente na rotina de envio para conciliação.
   - **5.2** — Se a alínea não permitir reapresentação (ex.: divergência de assinatura), o cheque fica com status **Bloqueado** e não pode ser depositado novamente.

> **O que são alíneas?** Alíneas são códigos usados pelos bancos para indicar o motivo da devolução, conforme tabela padrão definida pelo BCB (Banco Central do Brasil).

**Formas de inclusão de um cheque no sistema:**

- **Cadastro manual** no módulo Cheque a Receber → cria automaticamente um título a receber.
- **Cadastro de título a receber** com forma de pagamento cheque → cria automaticamente um cheque a receber.

---

## Configurações

**1 — Forma de pagamento**

Caminho: **Configurador Bimer >> Financeiro >> Forma de pagamento**

Clique em **Novo** (ou **Editar** se já existir). Certifique-se de que o **Tipo** esteja marcado como **Cheque**.

> **Dica:** Cadastre ao menos duas formas de pagamento com esse tipo: **Cheque** (para recebimentos à vista) e **Cheque pré-datado** (para recebimentos futuros).

**2 — Configurações de cheque**

Caminho: **Configurador Bimer >> Financeiro >> Opções >> aba Cheque >> Outras configurações para cheques (a pagar / a receber)**

Informe os tipos de baixas e as formas de pagamento para Cheque e para cheque com data de baixa futura. Clique em **Gravar** para salvar.

---

## Rotina

### Cadastro de Novo Cheque

Se uma venda gerar título a receber com forma de pagamento cheque, o cheque já aparecerá no módulo com status **Cadastrado**. Para incluir manualmente:

1. Abra o módulo **Cheque a Receber**, informe a **Empresa** e clique em **Novo**.

> **Atenção:** A opção **Novo** só está disponível no filtro **Cadastrados**.

Preencha os campos:

- **Banco** — Código do banco do qual o cheque foi emitido.
- **Agência** — Código da agência bancária da conta-corrente do emitente.
- **Cheque** — Número do cheque emitido pelo cliente.

> **Atenção:** Banco, Agência e Número do cheque são fundamentais para a conciliação automática.

- **C1, C2 e C3** — Informações opcionais da folha do cheque.
- **Vencimento** — Data de vencimento programado no título a receber; serve como referência de quando a empresa poderá depositá-lo.
- **Emitente** — Código do cliente.
- **CMC7** — Código de barras do cheque (sequência numérica impressa na parte inferior). Não obrigatório.
- **Data de emissão do cheque.**
- **Valor original** — Corresponde ao valor do título a receber.
- **Número do título** — O sistema compõe automaticamente com `<código do banco>+<número do cheque>`, mas pode ser alterado.

Clique em **Gravar**. O cheque ficará com status **Cadastrado** e um título a receber será criado vinculado a ele.

### Enviar Cheque para Conciliação

Quando chegar a data do vencimento e a empresa depositar o cheque:

Caminho: **Conciliação >> Enviar cheque para conciliação**

1. Use os filtros disponíveis (empresa, pessoa, banco, tipo de cobrança, data, etc.) e clique em **Avançar**.
2. No quadro **"Cheques disponíveis"**, selecione o(s) cheque(s) desejado(s) e clique em **Adicionar cheque selecionado** (ou dê duplo clique).
3. Preencha a **conta bancária** em que será depositado e a **data do movimento** (será usada como data de baixa do título).
4. Clique em **Enviar** e confirme.

O status do cheque é alterado para **Enviado para conciliação**.

### Alterar Status Manualmente

Caminho: **Alterar status do cheque**

Marque o status desejado e clique em **Alterar status**. Ao alterar de Cadastrado para Enviado para conciliação, o sistema solicitará o código da conta-corrente.

> **Nota:** Este recurso é ágil para um único cheque, mas não permite informar a data do movimento — o sistema usa a data corrente. Recomendado quando a operação ocorreu no mesmo dia.

### Cancelar Envio para Conciliação

Caminho: **Conciliação >> Cancelar cheque enviado para conciliação**

Informe os dados de login com permissão para o cancelamento. Localize os cheques com status **Enviado para conciliação**, marque o desejado, clique em **Cancelar envio** e confirme. O status retorna para **Cadastrado**.

### Conciliação de Cheque

Após depositar o cheque e ocorrer a entrada efetiva do valor na conta-corrente (compensação):

> **Atenção:** Este procedimento é para contas com **conciliação manual**. Para conciliação automática, consulte o manual específico.

Caminho: **Conciliação >> Conciliar cheque**

1. Realize os filtros para localizar o cheque.
2. Selecione o cheque com status **Enviado para conciliação** e clique em **Adicionar cheque selecionado**.
3. Informe a **data de conciliação** se necessário.
4. Clique em **Conciliar**.

Pela **Linha do Tempo** do cheque conciliado, é possível visualizar a baixa no cheque a receber e a movimentação no Disponível.

### Devolução Manual de Cheque a Receber

Somente cheques com status **Conciliado** podem ser devolvidos.

Caminho: **Devolução >> Devolver cheque**

> **Observação:** Também é possível realizar a devolução pelo módulo Disponível, na área de conciliação automática, coluna do extrato, botão **"Devolver cheque"**.

1. Localize o cheque que deseja devolver e adicione-o ao quadro de cheques selecionados.
2. Clique em **"Editar alínea, data de devolução e localização do cheque"**.
3. Informe a **alínea** e a **data de devolução**.
4. Clique em **Devolver** e confirme.

**Por que o cheque continua com status Conciliado após a devolução?**

Quando um cheque é depositado, aparece um movimento de entrada no extrato bancário. Se devolvido, o banco faz um lançamento de saída para acertar o saldo — a entrada original não "some". Como a baixa do título não pode ser excluída (o movimento de entrada no Disponível já está conciliado), o sistema cria um **novo título a receber** vinculado ao original, com sufixo **"D"** no número, para que a empresa possa controlar a cobrança ao cliente.

Para localizar o novo cheque/título: selecione o cheque devolvido, clique em **Devolução >> "Ir para cheque devolvido vinculado"**.

O novo cheque pode ter status:
- **Bloqueado** — Alínea não permite reapresentação (ex.: divergência de assinatura).
- **Devolvido Pendente** — Alínea permite reapresentação (ex.: insuficiência de saldo na 1ª apresentação).

**Linha do Tempo após devolução:**

- **Itens/Baixa:** Dois históricos — baixa com valor positivo (envio para conciliação) e baixa com valor negativo (estorno, para que o valor baixado apareça zerado nas consultas).
- **Descendentes:** Dois registros no Disponível (entrada e saída do valor) e um registro referente ao novo cheque a receber (com sufixo "D").

**Data de emissão do novo título:**
- Se a data de emissão do cheque original for **superior** à data de fechamento contábil: mantém as datas originais.
- Se for **inferior** à data de fechamento contábil: as datas de emissão, referência e vencimento são alteradas para a data de devolução.

> **Dica:** Também é possível fazer a devolução na tela principal: edite o cheque, preencha a **alínea de devolução** e a **data de devolução** em **Cheque devolvido** e clique em **Gravar**.

### Conciliação Manual da Devolução de Cheque

A conciliação da devolução deve ser feita diretamente no módulo **Disponível**, onde é possível visualizar a movimentação de Saída referente à devolução. A rotina segue o mesmo padrão dos demais movimentos.

### Cancelar Devolução de Cheque a Receber

Após conciliada a movimentação de saída no Disponível referente à devolução:

Caminho: **Devolução >> Cancelar devolução**

Informe usuário e senha com permissão. Faça os filtros desejados (o filtro só mostrará o cheque se o movimento de saída da devolução estiver conciliado). Marque o cheque e clique em **"Cancelar Devolução"**.

O sistema desfará tudo o que foi gerado no processo de devolução, inclusive a movimentação no Disponível será excluída. O cheque a receber gerado ficará apresentado na Linha do Tempo como **Excluído**.

> **Alternativa:** Na tela principal, edite o cheque devolvido (Conciliado), remova a **Alínea de devolução** em **Cheque devolvido** e clique em **Gravar**. Confirme o cancelamento.

### Como Receber um Cheque Devolvido

- **Status Devolvido Pendente:** A empresa pode seguir a rotina normal, depositando o cheque novamente.
- **Status Bloqueado:** O cheque não pode ser depositado novamente. A empresa pode:
  - **Renegociar** o título correspondente, gerando novos títulos conforme negociado com o cliente.
  - **Trocar a forma de pagamento** no cadastro do título para permitir baixa manual.

> **Atenção:** Ao trocar a forma de pagamento de cheque, o cheque será retirado do módulo Cheque a Receber.

---

## Renegociação de Títulos

No módulo Cheque a Receber é possível renegociar títulos de pessoas que possuam títulos a receber cadastrados. Aplicável, por exemplo, quando um cliente possui diversos débitos e deseja dar um cheque para quitação total.

Caminho: **Renegociação de títulos** (na tela principal)

1. Informe os dados de login de um usuário com permissão para renegociar títulos.
2. Marque os títulos a receber que deseja incluir na renegociação.
3. Informe um **tipo de baixa final sem numerário** (se não vier preenchido automaticamente).
4. Clique em **Avançar**.
5. Informe os dados da renegociação. Para gerar um novo cheque, informe um prazo de pagamento com cheque.
6. Clique em **Avançar** para visualizar os novos títulos gerados.
7. Clique em **Concluir**.

Os títulos com forma de pagamento cheque que foram renegociados são encontrados no filtro **"Baixados sem numerário"**. O novo cheque ficará com status **Cadastrado**, pronto para edição (informe número, banco e agência se necessário).

Pela Linha do Tempo do novo cheque, é possível visualizar que ele é derivado de uma renegociação.

---

## Gerar Histórico de Carteira

A partir do módulo Cheque a Receber é possível gerar um histórico de carteira de um título a receber.

> **Atenção:** Só é possível gerar histórico de carteira para cheques com status **Cadastrado**.

Caminho: **Gerar histórico de carteira**

1. Realize os filtros para localizar os títulos desejados e clique em **Avançar**.
2. Marque os títulos desejados (os valores serão somados ao campo **Valor total dos títulos**).
3. Clique em **Avançar**.
4. Na última tela, informe a **conta bancária** e, opcionalmente, o **tipo de cobrança**.
5. Clique em **Concluir**.

As informações lançadas na última tela serão vinculadas ao histórico de carteira gerado.

---

## Relatórios

O módulo disponibiliza um relatório para cada status de cheque. Todos os relatórios abrem o mesmo assistente para filtros e apontamento do layout.

1. Selecione o relatório desejado (ex.: cheques **Cadastrados**).
2. Informe os filtros conforme a necessidade e clique em **Avançar**.
3. Selecione os cheques que deseja incluir no relatório.
4. Clique em **Gerar Relatório**.

---

## Cadastro de Alíneas de Devolução

Caminho: **Configurador Bimer >> Financeiro >> Outros Cadastros >> Alínea de devolução de cheque**

A tabela vem pré-cadastrada. O cadastro é simples:

- **Código** — Deve ser igual ao código da tabela padrão dos bancos.
- **Permite reapresentado** — Marque somente se cheques devolvidos com esta alínea poderão ser depositados novamente.
- **Quantidade de reapresentações** — Número de vezes que o cheque pode ser depositado novamente.

> **Atenção:** Estas configurações devem respeitar o que é definido na tabela padrão dos bancos.
