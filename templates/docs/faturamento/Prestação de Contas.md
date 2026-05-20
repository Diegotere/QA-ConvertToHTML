# Prestação de Contas — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Para que serve?](#para-que-serve)
- [Rotina](#rotina)
- [Editar informações do mapa](#editar-informações-do-mapa)
- [Confirmação de entrega e pagamento](#confirmação-de-entrega-e-pagamento)
- [Entregue com renegociação (Lançar pagamento)](#entregue-com-renegociação-lançar-pagamento)
- [Reabrir Mapa de Carregamento](#reabrir-mapa-de-carregamento)
- [Devolução](#devolução)
- [Nota fiscal x Mapa de carregamento](#nota-fiscal-x-mapa-de-carregamento)
- [Transferir NF-e para Mapa de Carregamento liberado](#transferir-nf-e-para-mapa-de-carregamento-liberado)
- [Excluir Mapa de Carregamento](#excluir-mapa-de-carregamento)

---

## Para que serve?

A **Prestação de Contas** é uma rotina que se estende da rotina de **Mapa de Carregamento**.

> **Nota:** É indicado que antes de ler este manual, leia o manual de Mapa de Carregamento disponível no Portal da UCA.

A rotina foi criada para empresas em que os caminhões realizam a entrega de mercadoria nos clientes e o próprio ajudante ou motorista é o responsável por realizar o recolhimento do pagamento no momento da entrega. Quando o caminhão retorna à empresa, a pessoa que realizou o recolhimento do pagamento deve prestar contas do que recebeu.

---

## Rotina

Na tela inicial do módulo **Prestação de Contas**, selecione o mapa de carregamento no campo **"Nr. Mapa"**.

Opcionalmente, realize filtros para localizar um mapa de carregamento:

- **Campo a ser localizado:** defina se fará a pesquisa por Código, Descrição, Motorista, 1° ajudante, 2° ajudante, Placa do veículo ou UF da placa do veículo;
- **Quadro "Período" à esquerda:** filtre pela data inicial e final;
- **Quadro "Período" à direita:** filtre pelo status do mapa de carregamento;
- **Campo "Número da nota":** filtre pelo número da nota vinculada ao mapa de carregamento.

Após selecionar o mapa desejado, ele aparecerá em tela. Visualize os documentos presentes no mapa no quadro **"Notas fiscais"**. Somente aparecerão notas fiscais neste campo.

> **Nota:** Caso o mapa de carregamento tenha sido gerado por um pedido, somente aparecerão dados caso a NF-e tenha sido ao menos gerada no Faturamento (não necessita estar autorizada).

O documento pode possuir os seguintes status:

| Status | Descrição |
|--------|-----------|
| **Devolvido** | Quando a nota fiscal é devolvida pelo sistema Faturamento, Devolução e Troca de Vendas ou pelo próprio Prestação de Contas |
| **Parcialmente devolvido** | Quando a nota fiscal é devolvida pelo sistema Devolução e Troca de Vendas (não pode ser realizado dentro do módulo Prestação de Contas) |
| **Cancelado** | Quando a nota fiscal é cancelada pelo sistema Faturamento (não pode ser realizado dentro do módulo Prestação de Contas) |
| **Liberada** | Status que informa que a mercadoria foi entregue e paga |

---

## Editar informações do mapa

Na parte superior da tela, é possível alterar dados do mapa (quando aberto) como descrição, motorista, placa, etc.

Após informar os dados que deseja alterar, clique no botão **"Atualizar mapa"** para salvar as modificações.

---

## Confirmação de entrega e pagamento

### Por nota

No momento em que uma nota fiscal do mapa de carregamento for entregue e o valor for recebido corretamente, selecione a nota e clique em **"Liberar a nota selecionada"**. A nota ficará com o status **"Liberado"** (cor verde), indicando que foi entregue e paga.

Também é possível realizar este procedimento em **Liberar nota fiscal**, ou ao dar duplo clique sobre o documento na grid.

> **Observação:** Este procedimento não influenciará nas demais partes do sistema. Serve apenas para controle no próprio módulo Prestação de Contas.

### Por mapa

Similar à liberação por nota, porém faz o processo de acordo com o mapa de carregamento selecionado. Basta informar o mapa e clicar em **"Liberar o mapa de carregamento"** para que todos os documentos sejam liberados.

Em seguida, confirme a mensagem **"Confirma a liberação deste mapa de carregamento?"**. O mapa ficará com status **"L - Liberado"** na tela de filtro, com a data de liberação exibida ao lado.

---

## Entregue com renegociação (Lançar pagamento)

É possível que a entrega seja realizada e o cliente pague com uma forma de pagamento diferente da estipulada anteriormente. Nesse caso, utilize o recurso **Lançar Pagamento** para registrar a forma de pagamento efetivamente utilizada.

Para realizar o lançamento, vá em **Ferramentas / Lançar pagamento**. É possível selecionar entre **"por nota"** ou **"por mapa"**.

### Por nota

Ao selecionar esta opção, o mapa selecionado em tela não será considerado.

Na tela de lançamento:
1. Informe os dados do pagamento (data, forma de pagamento, natureza e número do novo título que será gerado);
2. Utilize, opcionalmente, dois filtros para filtrar as notas;
3. Adicione, clicando em **"+"** no quadro **"Notas"**, os documentos que deseja renegociar. Só serão permitidas notas fiscais de um mesmo cliente.

Clique em **"Ok"** para confirmar.

> **Observação:** O título que fora renegociado não é baixado.

### Por mapa

Selecione o mapa pelo campo **"Nr. Mapa"** e vá em **Ferramentas / Lançar pagamento mapa atual**.

O usuário pode registrar pagamentos recebidos por mais de uma forma de pagamento, clicando no sinal de **"+"** e incluindo o registro de cada forma.

Informe o valor total dos títulos de acordo com o total do mapa e clique em **"Efetuar pagamento"**. O mapa ficará com status **Liberado** e o campo **"Vl. pago por mapa"** ficará preenchido com o valor pago.

> **Nota:** Pela linha do tempo, será gerado um novo título a receber (ao invés de uma renegociação, como ocorre no lançamento por nota).

---

## Reabrir Mapa de Carregamento

Se, por erro de operação, um mapa for liberado erroneamente, é possível reabri-lo. Clique em **"Reabrir"** com o mapa em tela.

Em seguida, informe os dados de login para autorização da reabertura e preencha o motivo.

> **Observação:** Para reabrir um mapa que tenha sido liberado com pagamento por mapa (renegociação), é preciso excluir os títulos gerados manualmente. Caso contrário, o sistema exibirá a mensagem: *"existem títulos a receber gerados para este mapa, para reabrir o mapa você deverá excluir estes títulos"*.

---

## Devolução

A devolução total de uma nota pode ser realizada dentro do módulo Prestação de Contas. Selecione a nota dentro de um mapa e clique em **"Devolver nota fiscal"**.

Na tela de devolução de nota fiscal:
1. Confirme o número do documento;
2. Informe o motivo de exclusão dos títulos;
3. Clique em **"OK"** para confirmar a devolução do documento;
4. Preencha o motivo da devolução e confirme.

O documento ficará com status **devolvido** na grid do mapa. Analisando a linha do tempo, será gerado um documento de devolução.

---

## Nota fiscal x Mapa de carregamento

É possível realizar o controle do vínculo entre a nota fiscal e o mapa de carregamento, podendo desvincular uma nota de um mapa e vinculá-la a outro.

**Exemplo de uso:** Um cliente solicita que sua entrega seja feita em outro dia. O usuário retira a nota fiscal desse cliente de um mapa e vincula a outro, de outra data.

### Desvincular uma nota

Informe o **"Nr. Mapa"** e selecione a nota no quadro **"Notas fiscais"**. Você poderá:
- Passar a nota para outro mapa de carregamento;
- Remover a nota do mapa em questão.

Confirme a retirada da NF-e do mapa clicando em **"Sim"**.

### Vincular nota sem mapa

Vá em **Ferramentas / Analisar notas sem mapa**. Informe os dados do mapa de carregamento em que deseja incluir o(s) documento(s). No quadro **"Notas fiscais sem mapa de carregamento"**, localize por meio de filtros opcionais as notas desejadas. Selecione com duplo clique a(s) nota(s) que deseja vincular ao mapa e clique em **"Ok"**.

### Transferir para outro mapa

Use **"Transferir para outro mapa"** para desvincular a nota de um mapa e vinculá-la a outro de forma direta (quando já existe outro mapa criado). Informe o mapa de carregamento destino e clique em **"Ok"**.

---

## Transferir NF-e para Mapa de Carregamento liberado

Durante uma transferência de nota para outro mapa de carregamento, o sistema valida se o mapa destino está liberado. Em caso positivo, o sistema verifica a opção **"Permite vincular nota fiscal a um mapa de carregamento já liberado"** no **Configurador / Faturamento / Opções / Mapa de Carregamento**.

- **Com a opção habilitada:** O sistema permite vincular um documento a um mapa já liberado. O documento transferido também ficará como liberado.
- **Com a opção desabilitada:** O sistema bloqueia a transferência, informando que será necessário reabrir o mapa de carregamento destino da transferência.

---

## Excluir Mapa de Carregamento

No módulo Prestação de Contas existe a opção de excluir um mapa de carregamento, no entanto, isso é possível **apenas para mapas que não possuem notas vinculadas**.

Caso deseje remover um mapa que contenha documentos vinculados, utilize o recurso **"Retira a nota selecionada do mapa de carregamento"** e em seguida clique em **"Excluir o mapa de carregamento"**.
