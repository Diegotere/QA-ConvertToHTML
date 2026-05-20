# Renegociação de Títulos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Rotina](#rotina)
  - [Renegociação de Títulos a Pagar](#renegociação-de-títulos-a-pagar)
  - [Renegociação de Títulos a Receber](#renegociação-de-títulos-a-receber)
  - [Renegociação pelo CRM](#renegociação-pelo-crm)
  - [Renegociação pela Telecobrança](#renegociação-pela-telecobrança)

---

## Introdução

Imagine uma situação em que o cliente comprou na sua empresa e você gerou a nota fiscal com a forma de pagamento em dinheiro. Após a autorização da nota, o sistema gerou o título a receber. Depois disso, o cliente pensou melhor e perguntou se teria como alterar a forma de pagamento para 2x no cartão de crédito. Sabemos que os títulos gerados por outro módulo, como o Faturamento, não podem ser editados. E agora? O que faremos? Baixamos sem numerário e geramos outro? Mas aí não teria vínculo com a nota fiscal na linha do tempo…

Bem, é para isso que serve a rotina de **renegociação de títulos**. Esta rotina é válida tanto para títulos a pagar quanto para títulos a receber, e funciona da mesma forma.

Na rotina de renegociação, o sistema baixa o título original sem numerário e gera novos de acordo com o novo prazo e forma de pagamento selecionados. E o melhor é que fica tudo vinculado na linha do tempo.

---

## Configurações

Para que a rotina de renegociação funcione corretamente é necessário realizar algumas configurações no sistema Bimer. Inicialmente o usuário terá que cadastrar os tipos de baixa para pagamento total ou parcial.

Caminho: **Configurador >> Financeiro >> Opções >> Baixas >> Configuração de tipos**

Nesta tela informe, através da localização pelo botão da lupa, os seguintes tipos de baixa:

- Baixa total que gera numerário
- Baixa final sem numerário
- Baixa parcial com numerário
- Baixa parcial sem numerário

> **Observação:** Se os tipos de baixa não estiverem cadastrados, é possível cadastrá-los nesta mesma tela, clicando no botão ao lado da lupa.

---

## Rotina

### Renegociação de Títulos a Pagar

No módulo **Contas a Pagar**, acesse a aba **Ferramentas** e selecione a opção **Renegociação de títulos**.

Em seguida será exibida uma tela para selecionar a pessoa do título que deseja renegociar. Após filtrar a pessoa, o sistema apresentará os títulos em aberto para seleção.

Nesta tela:

- Selecione os títulos que deseja renegociar.
- Ao final da tela, o sistema exibe a totalização dos valores e o tipo de baixa configurado — os títulos originais serão baixados sem numerário.
- À direita há a opção de sugerir os mesmos centros de custos dos títulos originais.
- Após selecionar os títulos, clique em **Avançar**.

Na tela seguinte, informe os dados dos novos títulos:

- É possível informar acréscimo, desconto e dados referentes a juros, se houver.
- Escolha o prazo e a forma de pagamento para os novos títulos.
- Se necessário, adicione as parcelas manualmente clicando no sinal de adição no quadro **Parcelas**.

> *[Imagem: tela de seleção de títulos para renegociação]*

Por último, informe uma **descrição** para a renegociação, para facilitar a localização posterior. Por padrão, os títulos são criados com o prefixo **"REN"** no início do número, facilitando a identificação da origem. É possível editar clicando no símbolo de lápis. Se estiver tudo de acordo, clique em **Concluir**.

Por meio da **linha do tempo** é possível ver os títulos originais (ancestral), o processo de renegociação e os títulos gerados (descendentes).

**Extrato de renegociações:** No módulo **Contas a Pagar**, acesse a aba **Relatórios** e selecione **Extrato de renegociação**. É possível filtrar por pessoa, número do título renegociado, código e período da renegociação. Após filtrar, marque a renegociação desejada e clique em **Visualizar** ou **Imprimir**.

---

### Renegociação de Títulos a Receber

Para acessar a renegociação dos títulos a receber, acesse o módulo **Contas a Receber**, aba **Ferramentas**, e selecione a opção **Renegociar títulos**.

O processo é semelhante ao de títulos a pagar. A diferença é que será possível visualizar se o cliente selecionado tem alguma **carta de crédito** disponível para abater parte do valor dos títulos selecionados.

O sistema apresenta o valor da carta de crédito no campo correspondente. Para resgatar e utilizar a carta de crédito na renegociação, clique no ícone de envelope. É possível ainda:

- Salvar a renegociação para continuar depois.
- Excluir uma renegociação pendente.

Após preencher os dados, clique em **Avançar**.

Na tela seguinte, informe desconto ou acréscimo (se houver) e o novo prazo. Ou crie as parcelas manualmente clicando no sinal de adição **[+]** no quadro **Parcelas**. Depois clique em **Avançar**.

Na última tela, por padrão o sistema já leva uma descrição da renegociação, que pode ser alterada. O número do título também é formado com o prefixo **"REN"** por padrão, facilitando a rastreabilidade.

Por meio da **linha do tempo**, veja os títulos originais nos ancestrais e os novos títulos gerados após a renegociação nos descendentes.

---

### Renegociação pelo CRM

No módulo **CRM Administrador de Relacionamentos**, informe um cliente. Tanto na aba **Contas a Pagar** quanto em **Contas a Receber**, há a opção **Renegociar**.

Ao clicar em **Renegociar**, o processo ocorre exatamente da mesma forma descrita anteriormente. A diferença é que o sistema automaticamente recupera os títulos em aberto do cliente selecionado no CRM.

> **Dica:** É possível renegociar individualmente os títulos clicando sobre o título com o botão direito do mouse.

---

### Renegociação pela Telecobrança

A renegociação pode ser feita também no módulo **Telecobrança**. Para isso, o cliente precisa utilizar o módulo e ter as configurações já realizadas.

> **Nota:** Caso necessite de ajuda com o módulo Telecobrança, consulte o manual específico.

Ao abrir o módulo e filtrar pelas cobranças abertas, no menu superior há o botão **Renegociar Cobrança**. Após clicar na opção de renegociação, o processo se dará exatamente igual ao descrito anteriormente.
