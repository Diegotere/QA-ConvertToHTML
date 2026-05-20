# Bloqueio de Vendas — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Gerais](#configurações-gerais)
- [Bloqueio por Títulos Vencidos](#bloqueio-por-títulos-vencidos)
- [Bloqueio por Limite de Crédito](#bloqueio-por-limite-de-crédito)
- [Bloqueio por Prazo Médio](#bloqueio-por-prazo-médio)
- [Bloqueio por Característica de Pessoa](#bloqueio-por-característica-de-pessoa)

---

## Introdução

Através deste material serão mostradas as possibilidades existentes no sistema Bimer para o bloqueio de uma venda, seja por título a receber em aberto e vencido, por limite de crédito, por prazo médio ou característica de pessoa. Serão abordadas as configurações necessárias para cada uma das possibilidades e a rotina na prática.

Estes bloqueios poderão afetar os módulos: **Pré-Pedido**, **Pedido de Venda**, **Faturamento**, **CRM / CRM Vendas**, **Ordem de Serviço**, **DAV**, **PDV Alterdata** e **Nota Fácil**.

> **Dica 1:** Caso queira entender somente sobre 1 único bloqueio, use o índice para pular diretamente para o tópico de configurações do bloqueio, pois não há necessidade de ler o material completo, exceto as configurações logo abaixo da aba Geral que impactam em todos os bloqueios.

> **Dica 2:** Os bloqueios mostrados neste material podem impactar diversos módulos de venda, porém para a criação do material usamos somente o módulo **Pedido de venda**.

---

## Configurações Gerais

Caminho: **Configurador >> Faturamento >> Opções >> Venda >> Bloqueio >> Geral**

> **Atenção!** As configurações desta aba somente serão habilitadas caso habilite um bloqueio de venda em uma das abas seguintes.

Opções adicionais (não obrigatórias, mas que influenciam em todos os bloqueios):

- **Não será necessário informar login e senha para liberar as compras bloqueadas dos clientes** — com esta opção marcada o sistema permitirá avançar sem informar login e senha com permissão para liberar as vendas. Para a rotina funcionar, deixe a opção **desmarcada**.
- **Efetuar verificação de bloqueio mesmo que a operação utilizada não atualize financeiro** — com esta opção marcada o sistema fará o bloqueio mesmo que a venda não gere financeiro.
- **Na verificação do bloqueio, também considerar os títulos marcados como título de previsão** — com esta opção marcada o sistema fará o bloqueio considerando títulos de previsão.
- **Ao informar o cliente, sempre permitir "Continuar" e solicitar login e senha para liberação somente na gravação** — com esta opção marcada o sistema só pedirá login e senha na gravação.

Também é possível configurar:
- Uma **característica de pessoa** que, ao vincular ao cliente, o deixará imune às configurações de bloqueio de venda.
- Se os cheques enviados para a conciliação são considerados como títulos em aberto ou pagos.
- Um **spy system** para quando houver alerta ou bloqueio, ou somente bloqueio.

---

## Bloqueio por Títulos Vencidos

### Configurações necessárias

Acesse: **Configurador >> Faturamento >> Opções >> Venda >> Bloqueio >> Títulos vencidos**

Marque a opção **"Os clientes que tiverem títulos vencidos há mais de X dia(s), terão suas compras bloqueadas"** e defina a quantidade de dias que o sistema deve considerar para realizar o bloqueio.

> *[Imagem: tela de configuração de bloqueio por títulos vencidos]*

Opção adicional: **Efetuar o bloqueio por título mesmo que as formas de pagamento utilizadas sejam do tipo "dinheiro" ou "cartão"** — ao ser marcada, fará o bloqueio mesmo que a venda esteja sendo feita em dinheiro ou cartão.

Defina também em quais momentos e módulos este bloqueio impactará no sistema Bimer.

**Permissão de usuário:** No módulo **Cadastro de Usuários**, localize o sistema no qual é iniciada a venda, habilite o acesso na opção **Liberação de crédito por dias em atraso** e salve as alterações. Para os usuários que não devem realizar a liberação, este acesso deve ser desabilitado.

> **Atenção!** O mesmo acesso existe nos outros módulos impactados por esta rotina. Por isso, certifique-se de realizar a liberação em todos os módulos que serão afetados por este bloqueio.

### Rotina na prática

1. Acesse o módulo **Pedido de Venda**, informe a **Empresa** e clique em **Novo**.
2. Informe o cliente. Neste momento, o sistema poderá apresentar a tela com os títulos em aberto do cliente.
3. A tela exibirá detalhes do motivo do bloqueio (ex.: 2 títulos a receber com 14 dias de atraso, bloqueio configurado para mais de 5 dias).
4. Clique em **"Autorizar na gravação"** (se a opção de solicitar login somente na gravação estiver marcada) ou informe usuário e senha com permissão para liberação.
5. Continue o cadastro do pedido normalmente (Operação, produtos, aba Negociação).
6. Ao clicar em **OK** para gravar, o sistema fará nova análise e apresentará crítica. Clique em **Autorizar** e informe usuário e senha com permissão.

> *[Imagem: tela de bloqueio com detalhes dos títulos vencidos]*

Caso o usuário não tenha acesso, será apresentada mensagem de erro. Se tiver a devida permissão, o pedido de venda será gravado normalmente.

> **Nota:** Se a opção **"Não será necessário informar login e senha"** estiver marcada no Configurador, somente o botão **Continuar** será apresentado e o sistema não pedirá usuário e senha em nenhum momento.

---

## Bloqueio por Limite de Crédito

O limite de crédito é definido individualmente por cliente. É possível configurar a base para bloquear as vendas caso ultrapasse esse limite, seja pelo valor total ou por parcela.

### Configurações necessárias

Acesse: **Configurador >> Faturamento >> Opções >> Venda >> Bloqueio >> Limite de crédito**

Duas opções disponíveis:

- **Os clientes que tiverem o limite de crédito ultrapassado na venda, terão suas compras bloqueadas** — considera o valor total da venda.

  - *Exemplo 1:* Cliente com limite de R$ 5.000,00 e títulos em aberto de R$ 4.000,00. Nova compra de R$ 1.500,00 → bloqueado (R$ 4.000 + R$ 1.500 > R$ 5.000).
  - *Exemplo 2:* Cliente com limite de R$ 5.000,00 sem títulos em aberto. Compra de R$ 5.100,00 → bloqueado (ultrapassa o limite).

- **Os clientes que tiverem o limite de crédito ultrapassado por parcela, terão suas compras bloqueadas** — verifica o valor máximo que cada parcela da negociação poderá ter (configurado em **Cadastro de pessoas > Clientes > Crediário**).

> **Nota:** Estas duas opções são independentes uma da outra.

Também é possível definir se clientes com limite de crédito em **R$ 0,00** serão considerados para o bloqueio.

**Permissão de usuário:** No módulo **Cadastro de Usuários**, acesse a edição do perfil do usuário e, em **Assinatura eletrônica**, habilite o acesso à opção **Liberação de Crédito**.

### Rotina na prática

1. Acesse o módulo **Pedido de Venda**, informe a **Empresa** e clique em **Novo**.
2. Informe o **Cliente**, **Operação**, **Produto** e preencha a aba **Negociação**.
3. Ao clicar em **OK**, o sistema verificará as configurações e análise do cadastro do cliente.
4. Se o bloqueio ocorrer (por valor total e/ou por parcela), clique em **Autorizar** e informe usuário e senha com permissão.

> *[Imagem: tela de bloqueio por limite de crédito com detalhes do motivo]*

---

## Bloqueio por Prazo Médio

O prazo médio é definido por cliente e possui duas formas de cálculo.

### Prazo médio Simples

Somatório do número de dias de vencimento das parcelas, dividido pela quantidade de parcelas.

**Exemplo:**
- 1ª Parcela: 00 dias — R$ 2.000,00
- 2ª Parcela: 30 dias — R$ 4.000,00
- 3ª Parcela: 60 dias — R$ 4.000,00

```
(00 + 30 + 60) = 90
90 / 3 = 30
Prazo médio simples = 30 dias
```

### Prazo médio Ponderado

Multiplicação do número de dias de vencimento pelo valor de cada parcela, somando todos os resultados e dividindo pelo total da negociação.

**Exemplo:**
- 1ª Parcela: 00 dias — R$ 2.000,00
- 2ª Parcela: 30 dias — R$ 4.000,00
- 3ª Parcela: 60 dias — R$ 4.000,00
- Total: R$ 10.000,00

```
00 × R$ 2.000,00 = R$       0,00
30 × R$ 4.000,00 = R$ 120.000,00
60 × R$ 4.000,00 = R$ 240.000,00
Total             = R$ 360.000,00

360.000,00 / 10.000,00 = 36
Prazo médio ponderado  = 36 dias
```

### Configurações necessárias

1. Acesse: **Configurador >> Faturamento >> Opções >> Venda >> Bloqueio >> Prazo médio**. Marque a opção **"Os clientes que tiverem o prazo médio ultrapassado na venda, terão suas compras bloqueadas"**, defina o tipo de cálculo e quais momentos e módulos impactarão.

2. No módulo **Pessoa / Clientes**, acesse o cadastro do cliente, menu **Crediários**, defina o **Prazo médio** e salve.

3. No módulo **Cadastro de Usuários**, acesse a edição do perfil do usuário, vá em **Assinatura eletrônica** e habilite a opção **Liberação de Crédito**.

> **Observação:** O acesso para liberação do bloqueio por prazo médio é o **mesmo acesso** da liberação por limite de crédito. Um único usuário não pode ter permissão para um e não ter para o outro.

### Rotina na prática

1. Acesse o módulo **Pedido de Venda**, informe a **Empresa**, clique em **Novo** e prossiga com o cadastro.
2. Na aba **Negociação**, informe o prazo ou inclua as parcelas manualmente.
3. Ao clicar em **Autorizar**, o sistema pedirá usuário e senha com permissão de acesso para liberar a venda.

---

## Bloqueio por Característica de Pessoa

No sistema Bimer é possível criar uma característica de pessoa para identificar clientes e configurar o bloqueio de vendas com base nessa característica.

### Configurações necessárias

**1. Cadastro da característica:**

Acesse: **Configurador >> Geral >> Características da pessoa >> Novo**

Defina uma descrição clara e de fácil compreensão. É recomendado marcar a opção **"Habilita visualização no CRM"** para ter destaque no CRM do cliente.

**2. Configuração do bloqueio:**

Acesse: **Configurador >> Faturamento >> Opções >> Venda >> Bloqueio >> Característica**

Informe a característica da pessoa no quadro **"Bloquear as compras dos clientes que possuem qualquer característica relacionada abaixo"**. É possível vincular mais de 1 característica.

Defina também se a venda será bloqueada mesmo em **Dinheiro ou Cartão** e em quais momentos e módulos terão impacto.

**3. Vínculo ao cliente:**

No módulo **Pessoa / Clientes**, localize o cadastro do cliente, acesse o menu **Características**, inclua a característica configurada para o bloqueio e **Grave** as alterações.

**4. Permissão de usuário:**

No módulo **Cadastro de Usuários**, acesse a edição do perfil do usuário, vá em **Assinatura eletrônica** e habilite a opção **Liberação de Crédito**.

> **Observação:** O acesso para liberação do bloqueio por característica de pessoa é o **mesmo acesso** da liberação por limite de crédito e por prazo médio. Ao habilitar o acesso, impacta para os três bloqueios simultaneamente.

### Rotina na prática

1. Acesse o módulo **Pedido de Venda**, informe a **Empresa** e clique em **Novo**.
2. Ao informar o **Cliente**, o sistema apresentará a tela com as ocorrências encontradas (característica configurada para bloqueio).
3. Clique em **Continuar** para prosseguir com o cadastro do pedido (Operação, Produtos, etc.).
4. Ao clicar em **OK** para gravar, o sistema fará nova verificação e apresentará as ocorrências.
5. Clique em **Autorizar** e informe usuário e senha com permissão para liberar a venda.

> *[Imagem: tela de bloqueio por característica de pessoa]*

Se o usuário não tiver a devida permissão, será apresentada mensagem de erro. Se for autorizado, o pedido de venda será gravado normalmente.
