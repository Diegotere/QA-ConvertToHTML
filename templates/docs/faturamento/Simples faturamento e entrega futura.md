# Simples faturamento e entrega futura — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Requisitos Básicos](#requisitos-básicos)
- [Configurações](#configurações)
- [Utilização do Sistema](#utilização-do-sistema)

---

## Introdução

Você conhece o conceito de venda com entrega futura? A rotina de venda com entrega futura ocorre quando a empresa fatura o pedido no fechamento da venda, porém, a entrega dos itens ocorrerá em data posterior.

Na venda com entrega futura é necessário emitir ao menos **02 documentos**: um no ato da venda, e outro quando realmente o transporte para a entrega ocorrer. Isso porque a mercadoria, além de não ter saído ainda do estoque no fechamento da venda, só pode circular acompanhada de uma nota fiscal.

### Exemplos de aplicação

**Exemplo 01**

Uma loja de material de construção, em que o cliente compra, por exemplo, areia, cimento, pedras. Nesse caso, o cliente não leva os produtos. A loja faz a entrega na data combinada com o cliente.

**Exemplo 02**

Um cliente fecha a compra de um produto em grande quantidade, para garantir um preço melhor. Porém, ele não tem lugar para guardar todo o produto, e combina entregas parciais com o fornecedor.

Em ambos os casos, a empresa vendedora emitirá dois tipos de documentos:

- **Documento de simples faturamento** – emitido no ato da venda e disponibilizado ao cliente. Esse documento **gera financeiro**, **calcula comissão**, porém, **não movimenta estoque**.
- **Documento para transporte e entrega da mercadoria** – emitido quando a empresa realmente fizer a entrega dos produtos. Esse documento **não gera financeiro**, **não calcula comissão**, mas **movimenta o estoque** do produto.

> **Observação:** No Exemplo 02, a empresa emitirá 02 ou mais notas fiscais de transporte, uma vez que combinou entregas parciais do produto.

### Vantagens

Uma vantagem é que o prazo para receber pela venda já começa a contar na emissão do documento de simples faturamento, e os vendedores já terão direito à sua comissão.

Além disso, o documento emitido no ato da venda garante ao cliente que a compra foi concretizada.

> **Nota:** Em relação aos tributos nas notas fiscais, isso deve ser visto com a contabilidade da empresa, pois a legislação pode mudar de um Estado para outro.

> **Atenção!** É possível utilizar a rotina gerando **ordens de entrega** ou **notas fiscais**. As configurações são nos mesmos lugares. No exemplo de aplicação, mostraremos exclusivamente nota fiscal, mas o processo é o mesmo.

---

## Requisitos Básicos

Os únicos requisitos necessários são:

- Bimer com versão igual ou superior à **versão 10.00.03.00**;
- Sistema devidamente configurado.

---

## Configurações

No **Configurador Bimer » Faturamento » Opções » Vendas » Entrega imediata e futura**, marque a opção **"Trabalha utilizando entrega imediata / entrega futura"**.

> *[Imagem: Tela de configurações com a opção "Trabalha utilizando entrega imediata / entrega futura" marcada]*

A informação da **Característica de entrega futura** é opcional. Ao informá-la, os produtos que possuírem essa característica em seu cadastro serão marcados automaticamente como entrega futura nos pedidos de vendas.

Se um produto, sem essa característica, for incluído no pedido de vendas, a opção por entrega futura será feita manualmente.

Nessa tela marque a opção **"Gerar documento de simples faturamento a partir do pedido de venda"**. E informe a **operação para gerar nota fiscal de itens de entrega futura** ou, dependendo da rotina do cliente, a **operação para gerar a ordem de entrega de itens de entrega futura**.

> *[Imagem: Tela de configurações com a opção de gerar documento de simples faturamento e o campo de operação para entrega futura]*

Somente é permitido informar operação cadastrada da seguinte forma, no **Configurador Bimer » Estoque » Operação**:

- **Ativo**;
- **Tipo de movimento:** venda ou saída;
- **Atualiza estoque:** marcada;
- **Atualiza financeiro:** desmarcada;
- **Tipo de ajuste de NF-e:** nenhum;
- **Calcula repasse/comissão:** desmarcada.

### Cadastro de usuários

Além das configurações vistas, é necessário definir quais usuários terão permissão de acesso para execução da rotina. A permissão é dada no **perfil do usuário**, no produto **Pedido de vendas**.

> *[Imagem: Tela de cadastro de usuários com a permissão para a rotina de simples faturamento e entrega futura]*

---

## Utilização do Sistema

### Cadastro do Pedido de venda

A rotina de venda se inicia com o cadastro do pedido de vendas. Ele segue o fluxo normal. O detalhe está na inclusão do item do pedido.

Informe normalmente o produto, quantidade e valor unitário. No campo **"Tipo de entrega"**, marque **"Futura"**.

> *[Imagem: Tela de inclusão de item no pedido de vendas com o campo "Tipo de entrega" marcado como "Futura"]*

> **Lembrando!** Se o produto possuir a característica informada no **Configurador Bimer » Faturamento » Opções » Vendas » Entrega imediata e futura » Característica de entrega futura**, o tipo de entrega será marcado automaticamente como futura.

Informe todos os itens, as demais opções do pedido de vendas, e grave-o normalmente. Em seguida, conforme política da empresa, faça a liberação do pedido.

### Emissão da nota de simples faturamento

A nota de simples faturamento é emitida no momento em que a venda é fechada. Para emiti-la o pedido deve estar com status de **liberado**.

Há duas formas de emissão:

1. No menu **Faturar** foi incluída a opção **"Gerar nota fiscal para simples faturamento"**, que permite filtrar diversos pedidos de uma vez;
2. Com o **botão direito do mouse** sobre o pedido, escolher a opção **"Gerar nota fiscal para simples faturamento"**.

> *[Imagem: Menu Faturar com a opção "Gerar nota fiscal para simples faturamento"]*

> **Muito importante!** Essa opção só estará disponível em pedidos nos quais **TODOS OS ITENS** estejam marcados para entrega futura, e que ainda não tenha sido emitida nenhuma outra nota, incluindo a nota de simples faturamento.

> **Dúvida!** E se o cliente tiver comprado produtos que levará de imediato, e produtos para entrega futura? Nesse caso, os itens deverão estar em **pedidos de venda diferentes**.

Ao selecionar a opção, será aberta a tela **"Módulo para gerar NF de simples faturamento a partir de pedidos"**. Basta clicar em **"Gerar NF/OE"** para gerar o documento no módulo Faturamento.

> *[Imagem: Tela "Módulo para gerar NF de simples faturamento a partir de pedidos" com o botão Gerar NF/OE]*

> **Observação:** A emissão de nota de simples faturamento é sempre com o **total de itens**. Não é possível fazer emissões parciais.

O pedido de venda continuará com status de **Liberado**. Porém, na coluna **Simples faturamento** estará com **"sim"**.

> *[Imagem: Lista de pedidos com a coluna "Simples faturamento" marcada como "sim"]*

Para concluir, no módulo **Faturamento**, localize o documento e faça o envio para autorização da SEFAZ.

> **Atenção!** A nota de simples faturamento é gerada com a mesma operação informada no cadastro do pedido de venda. Por padrão, um pedido de venda utiliza a operação informada no **Configurador Bimer » Faturamento » Opções » Operação » Nota Fiscal » Operação padrão para nota fiscal**. Caso a empresa queira utilizar uma operação diferente dessa, deverá informá-la manualmente no cadastro do pedido.

A nota de simples faturamento **gerará comissão e financeiro** (caso a operação esteja configurada para isso), porém, **não movimentará o estoque**, mesmo que a operação esteja marcada para atualizar estoque. O estoque só será atualizado pela nota de entrega da mercadoria.

### Emissão da nota de entrega dos produtos

Ao chegar a data combinada para entrega da mercadoria, deve-se emitir a nota pelo menu **Faturar » Gerar Nota Fiscal**, ou com o **botão direito do mouse** sobre o pedido **» Gerar Nota Fiscal**.

> *[Imagem: Menu Faturar com a opção "Gerar Nota Fiscal" para a nota de entrega]*

> **Observação:** Diferente da nota de simples faturamento, a nota para entrega da mercadoria **poderá atender parcialmente** o pedido de venda.

O documento será gerado no módulo **Faturamento** com a operação informada no **Configurador Bimer » Faturamento » Opções » Venda » Entrega imediata e futura » Operação para gerar nota fiscal de itens de entrega futura**.

Para concluir, basta enviar a NF para autorização da SEFAZ. Essa NF **movimentará o estoque**, concluindo a rotina.

> **Atenção!** E se o cliente desistir da compra após a nota de simples faturamento ser emitida, e antes de a entrega ser feita, e o prazo para cancelamento da primeira nota tiver passado?
>
> Nesse caso, não existe a opção de gerar nota fiscal de devolução, uma vez que a mercadoria não chegou a sair da empresa. Os ajustes na contabilidade e escrita fiscal deverão ser feitos manualmente nos respectivos módulos.
