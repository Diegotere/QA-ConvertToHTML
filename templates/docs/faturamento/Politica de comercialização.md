# Política de Comercialização — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [O que é isso?](#o-que-é-isso)
- [Configurações](#configurações)
- [Tipos de comercialização](#tipos-de-comercialização)
- [Regras de comercialização](#regras-de-comercialização)
- [Cadastro de pessoa](#cadastro-de-pessoa)
- [Cadastro de Produtos](#cadastro-de-produtos)
- [Rotina](#rotina)
- [Dicas Úteis](#dicas-úteis)

---

## O que é isso?

A rotina **Política de Comercialização** foi criada para atender empresas que vendem produtos com valores diferenciados para um determinado público-alvo.

**Exemplo:** Na empresa Michelin, o preço do pneu Aro 15 é R$ 200,00. Porém, para clientes que são taxistas, há um valor diferenciado com 10% de desconto, sendo assim esses clientes pagam R$ 180,00 pelo pneu.

No Bimer, para identificar qual o tipo de cliente da venda, foi criada a tabela **Tipo de comercialização**, onde é possível vincular os grupos de clientes, os ramos de suas atividades ou alguma descrição que os identifique.

Para definir como o sistema trabalhará com a política de comercialização, foi criada a tabela de **Regra de comercialização**, onde serão gravados os critérios que o sistema utilizará para aplicar ou não os preços diferenciados.

Os valores para as regras de comercialização podem ser definidos de duas formas:

- **Tabela de preços:** os valores diferenciados serão calculados através de uma tabela específica de preços;
- **Percentual:** os valores diferenciados serão calculados através de uma alíquota de desconto sobre os produtos incluídos na rotina, independentemente da tabela de preço.

A política de comercialização pode ser definida por:

- Produto;
- Família de produto;
- Cliente;
- Tipo de comercialização;
- Empresa;
- Período de vigência.

---

## Configurações

### Opções do Faturamento

Acesse **Configurador / Faturamento / Opções / Venda / Regra de comercialização**.

1. **Trabalhar com regras de comercialização:** marque esta opção para habilitar a rotina de política de comercialização.

2. **Produto:**
   - **Exibir produto:** quando marcada, na tela de cadastro das regras de comercialização será habilitado um campo para informar sobre qual produto será feita a política.
   - **Exibir família de produtos:** quando selecionada, será habilitado um campo para informar sobre qual família de produto será feita a política.
   - **Obrigar o preenchimento de produto ou família de produtos:** quando marcada, será obrigatório que pelo menos um dos dois campos seja informado.

3. **Cliente:**
   - **Exibir cliente:** quando marcada, será habilitado um campo para informar sobre qual cliente será feita a política.
   - **Exibir tipo de comercialização:** quando selecionada, será habilitado um campo para informar sobre qual tipo de comercialização será feita a política.
   - **Obrigar o preenchimento de cliente ou tipo de comercialização:** com ela marcada, será obrigatório que pelo menos um dos dois campos seja informado.

4. **Exibir e obrigar o preenchimento de empresa:** quando marcada, será habilitado um campo para informar sobre qual empresa será feita a política, de preenchimento obrigatório.

5. **Exibir e obrigar o preenchimento do período de vigência:** quando selecionada, será habilitado o campo inicial e final do período de vigência que a política de comercialização será válida.

6. **Percentual de desconto:** quando marcada, será habilitado um campo para informar o percentual de desconto sobre o produto.

7. **Tabela de preços:** quando selecionada, será habilitado um campo para informar qual tabela de preço será utilizada na rotina.

---

## Tipos de comercialização

Acesse **Configurador / Faturamento / Tipos de comercialização**. Neste local serão cadastrados os tipos de comercialização, que poderão ser vinculados no Cadastro de pessoas.

> **Dicas:**
> 1. Este cadastro somente é necessário caso as opções **Exibir tipo de comercialização** e **Obrigar o preenchimento de cliente ou tipo de comercialização** estiverem marcadas no Configurador.
> 2. Não foram utilizadas as **características** para fazer o papel do tipo de comercialização, pois um determinado cliente pode possuir já diversas características e o sistema não saberia qual verificar para definir se o cliente terá desconto ou não.
> 3. **Exemplo:** Um cliente possui as características Atacadista e Varejista. No momento da venda, o sistema não teria como saber se o cliente está comprando para vender no atacado ou varejo, os quais teriam preços diferentes.

---

## Regras de comercialização

Acesse **Configurador / Faturamento / Regras de comercialização**.

A tela de cadastro validará as opções marcadas no Configurador. Se alguma opção não foi marcada, o campo não será exibido.

> **Dica:** O botão **Regra de comercialização** será exibido apenas se no Configurador / Faturamento / Opções / Venda / Regra de comercialização estiver marcada a opção **Trabalhar com regras de comercialização**, e após isso é necessário fechar e abrir o Configurador.

Observações sobre o cadastro:

- Os campos **Produtos** e **Família de produto** são excludentes — apenas um deles deve ser preenchido, nunca os dois juntos no mesmo cadastro;
- Os campos **Cliente** e **Tipos de comercialização** também são excludentes;
- O **período de vigência** é sempre obrigatório. Se não houver data de expiração definida, coloque um período longo (ex.: até 31/12/2999);
- O campo **Tabela de preços** somente aparecerá se estiver selecionado no Configurador.

---

## Cadastro de pessoa

No cadastro de pessoa, informe em qual tipo de comercialização o cliente se enquadra. Dentro do cadastro da pessoa, vá em **Cadastros / Dados**, preencha o campo **Tipo de comercialização** e clique em **Gravar**.

> **Dica:** Se trabalhar informando apenas o cliente na tabela de Regras de Comercialização (e não o Tipo de comercialização), não é necessário informá-la no cadastro do cliente.

---

## Cadastro de Produtos

Se a empresa trabalhar com **tabela de preço** na política de comercialização, informe a tabela e o valor de venda já com o desconto no item. Dentro do cadastro de produtos, vá em **Empresa / Preços**.

Se a empresa trabalhar apenas com **Desconto** na Regra de comercialização, é necessário informar todas as tabelas de preço no produto. Deste modo, qualquer tabela de preço informada na venda terá o desconto informado na Regra.

---

## Rotina

Este recurso está disponível para os módulos: **CRM**, **Pedido de venda**, **Pré-pedido**, **FatDav**, **FatOS** e **Faturamento**. Para o usuário, a rotina é transparente e automática.

Ao informar o cliente e o produto, o sistema aplica automaticamente o desconto ou a tabela de preço configurada na regra de comercialização.

Para ver mais detalhes do desconto aplicado, clique nos botões ao lado do campo **Vl. Unitário**.

> **Nota:** Ao trabalhar com a regra de comercialização pelo **Desconto**, qualquer tabela de preço informada sofrerá o desconto. Ao trabalhar com **Tabela de preço**, o sistema traz automaticamente a tabela informada na Regra e não permite que o usuário a remova.

---

## Dicas Úteis

- O aplicativo **Cadastro de produtos** passará a não mostrar a funcionalidade de **Agendamento de preços** localizada na rotina de Reajuste de preços do EstProduto.

- Caso a venda se encaixe em **mais de uma regra de comercialização**, é utilizada a regra com a data inicial mais próxima da data atual. Exemplos:
  - **Caso 1:** A Regra 2 entra em vigência primeiro; ao término, inicia a Regra 1;
  - **Caso 2:** A Regra 1 entra em vigência primeiro; ao início da Regra 2, a Regra 1 sai; ao término da Regra 2, volta a Regra 1;
  - **Caso 3:** A Regra 1 entra em vigência primeiro; ao término, inicia a Regra 2.

- O sistema buscará a regra de comercialização na seguinte ordem:
  - Com dois parâmetros configurados:
    1. Cliente e Produto
    2. Cliente e Família de produto
    3. Produto e Tipo de comercialização
  - Com apenas um parâmetro obrigatório:
    1. Cliente
    2. Produto
    3. Família de produto

- Após gravar os dados da venda, mesmo editando o documento, o sistema **não recalculará automaticamente** o valor dos itens. Para recalcular, é necessário alterar o código do cliente ou alterar a tabela de preços do documento de venda.

- Ao tentar modificar o modo de trabalho de **Alíquota de desconto** para **Tabela de preço** (ou vice-versa) nas Opções do Faturamento, o sistema exibirá um aviso informando que o único modo de mudar é deletar as regras de comercialização do tipo anterior. A empresa só pode trabalhar com um tipo de Regra de comercialização por vez.
