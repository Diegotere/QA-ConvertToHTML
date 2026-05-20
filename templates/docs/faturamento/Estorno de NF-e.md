# Estorno de NF-e — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações no Bimer](#configurações-no-bimer)
  - [Operação](#operação)
  - [Vínculo de Operações](#vínculo-de-operações)
- [Utilizando a rotina](#utilizando-a-rotina)
- [Informações Adicionais](#informações-adicionais)

---

## Introdução

Qual o prazo para o cancelamento de uma NF-e? **24 horas!**

Muitos dizem que o prazo é curto e não cobre possíveis percalços que venham a ocorrer numa transação comercial, como uma desistência do cliente antes mesmo da entrega da mercadoria. Para isso, existe a possibilidade de **estorno de NF-e**.

O estorno de NF-e é indicado quando o prazo de cancelamento foi ultrapassado e faz-se necessário "anular" uma operação de venda ou saída. Porém, fique atento:

> **Importante:** O estorno é permitido **somente quando a mercadoria não circulou**. Por exemplo: realizei uma venda para um cliente de outro estado, emiti a NF-e para adiantar o processo, porém o transporte só ocorrerá em 3 dias. No dia da entrega, o cliente informa que não deseja mais receber o produto. Como a mercadoria não circulou, é possível realizar um estorno.

Caso a mercadoria tenha chegado até o cliente e, posteriormente, foi devolvida, trata-se de uma **devolução**, não de um estorno.

Não existe um prazo estipulado para realizar o estorno de uma NF-e, porém a opção da utilização deste recurso é de inteira responsabilidade do cliente, que deve ser orientado por sua assessoria contábil ou jurídica.

---

## Configurações no Bimer

Para fazer o estorno de uma NF-e no sistema Bimer, é necessário:

1. Configurar uma **operação de estorno**;
2. **Vinculá-la** à operação usada na NF-e que deseja estornar.

**Cenário de exemplo:**

- Temos a **operação X** (de Venda) e precisamos emitir um estorno de uma NF-e que possui esta operação.
- Para isso, criaremos a **operação Estorno_X**, equivalente à operação X, porém configurada para a "anulação" da transação.

> *[Imagem: NF-e 134 com status Autorizada e Impressa, sem cancelamento nem devolução]*

> *[Imagem: detalhe da NF-e 134 mostrando a operação 000118 utilizada]*

---

### Operação

Para "anular" a venda, precisamos de uma operação igual à que foi utilizada na NF-e inicial, porém com o devido tipo. Para facilitar, basta **duplicar a operação de venda** (000118 no exemplo) para criar a nova operação equivalente.

Acesse **Configurador / Estoque / Operação**, localize e abra a operação utilizada na venda. Em seguida, clique em **Duplicar** para criar a nova operação.

> *[Imagem: tela de duplicação da operação]*

Ao confirmar a duplicação, o sistema voltará à tela do cadastro da operação já na nova operação. Note que o código da operação já é o novo (000134 no exemplo). Altere a **descrição da operação** para deixar mais sugestivo e, no quadro **Tipo de ajuste NF-e**, marque **Estorno**.

> *[Imagem: quadro Tipo de ajuste NF-e com opção Estorno marcada]*

> **Atenção:** Ao marcar a opção **Estorno**, o sistema automaticamente mudará o **Tipo de Movimento** da operação para **Devolução**. No caso do estorno de NF-e de devolução de compra, deve ser marcado o Tipo de Movimento como **Compra**.

**Exemplo de descrição sugestiva:** `ESTORNO DE VENDA (OP118) - NFe (ConsFinal DIFAL)`

Em seguida, ainda na operação, acesse a aba **Documento / CFOP** e preencha os campos referentes às CFOPs.

> **Nota:** As informações de CFOP devem ser obtidas com a contabilidade da própria empresa.

Conclua o cadastro da operação clicando em **OK** no canto inferior direito.

> **Fique atento!** Se houve cálculo de impostos como PIS, COFINS, ICMS, IPI, etc., configure o sistema para fazer esse cálculo também no estorno, observando o cálculo de ICMS (com UF de origem e destino inversas à transação inicial), configuração de CFOP para cálculo de IPI, etc.

---

### Vínculo de Operações

Para que o sistema saiba que a operação criada é equivalente à operação utilizada inicialmente na NF-e, é necessário configurar o vínculo em:

**Configurador / Faturamento / Opções / NF-e / Estorno**

Neste local, faça o vínculo das operações clicando no ícone **+**.

> *[Imagem: tela de vínculo de operações de estorno]*

Realize o vínculo entre as operações, preenchendo:
- **Operação de NF-e:** 000118 (operação original da venda)
- **Operação de estorno:** 000134 (operação criada para o estorno)

Para confirmar, clique no botão **Criar estorno**.

Para finalizar a configuração, informe as justificativas que serão levadas para o XML das NF-es de estorno:

1. Justificativa para **NF-e de estorno de venda**;
2. Justificativa para **NF-e de estorno de devolução de compra**.

Por último, clique em **Gravar** para salvar as alterações.

---

## Utilizando a rotina

Abra o módulo **Faturamento** e localize a NF-e que deseja estornar (NF-e 134 no exemplo).

Selecione a NF-e e vá na aba **Diversos**. Clique no botão **Estornar nota fiscal**.

> *[Imagem: aba Diversos com botão Estornar nota fiscal destacado]*

O sistema apresentará uma mensagem de confirmação. Clique em **Sim** para continuar.

Pronto! A NF-e de estorno é gerada com a data atual na tela principal de documentos no Faturamento. Note que:

- Há uma **referência à NF-e original** na coluna **Diversos**;
- O documento gerado está **aberto**, pronto para ser enviado à SEFAZ;
- A NF-e original (134) ficará com **S** na coluna **Devolvido**.

> *[Imagem: tela do Faturamento mostrando a NF-e de estorno gerada e a NF-e original com status Devolvido]*

---

## Informações Adicionais

Neste material foi usado como exemplo o estorno de mercadorias, que é o cenário mais comum. Contudo, a partir da versão **9.07.08.00** do Bimer, é possível realizar também o estorno de:

- Notas Complementares/Suplementares de **ICMS**
- **FCP**
- **ICMS-ST**
- **FCP-ST**
- **IPI**

As configurações seguem as mesmas descritas neste material.
