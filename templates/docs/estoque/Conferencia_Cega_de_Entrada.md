# Conferência Cega de Entrada — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Vamos às Configurações](#vamos-às-configurações)
- [Rotina](#rotina)
  - [Nota de Entrada](#nota-de-entrada)
  - [Conferência](#conferência)
  - [Liberador de Estoque](#liberador-de-estoque)
- [Que tal mais algumas dicas?](#que-tal-mais-algumas-dicas)

---

## Introdução

A rotina de **Conferência Cega de Entrada** é uma forma diferente de fazer a entrada de notas, usando um módulo que ajuda a conferir se a quantidade enviada pelo fornecedor está de acordo com a quantidade pedida pela empresa.

O módulo **Conferência Cega de Entrada** possui a inteligência de avisar se a quantidade conferida está diferente da quantidade presente na nota fiscal. Somente após essa conferência é que a **mercadoria entra no estoque**.

### Exemplo prático

Considere uma empresa que realiza a revenda de mercadorias em seu supermercado:

- **MANSER:** O fornecedor. A mercadoria acabou de chegar e o fornecedor está na porta. É necessário que os setores da empresa façam o recebimento da nota e das mercadorias.
- **ANA:** A funcionária que faz o lançamento da nota de entrada que veio do fornecedor Manser. Após registrar a entrada da nota, ela manda as mercadorias para a conferência.
- **PAULO:** O responsável pelo estoque. Ele faz a separação de cada produto que veio do fornecedor na área de descarregamento do caminhão, facilitando o trabalho de conferência.
- **JOSÉ:** Auxilia o Paulo na missão da conferência. Os dois funcionários conferem os produtos enviados do fornecedor, verificando: a qualidade dos produtos, se veio com algum tipo de defeito, se os produtos são os que a empresa realmente pediu e a quantidade dos produtos que vieram no veículo.
  - É importante ressaltar que neste momento os funcionários Paulo e José **não têm acesso à nota fiscal** do fornecedor — eles precisam realmente conferir as mercadorias **às cegas**. Ao fazer isso, eles recebem um alerta de que a quantidade conferida é diferente da informada na nota, ou simplesmente o sistema confirma que os dados estão corretos.
  - Somente após esse processo é que a nota é aprovada e a mercadoria sai da área de descarregamento do caminhão, e **entra no estoque físico da empresa**.
- **ANA (novamente):** Se a conferência bateu certinho, a nota simplesmente será liberada no sistema. Do contrário, a Ana pode tomar ações como encaminhar essa nota para o processo de devolução com o fornecedor.

---

## Vamos às Configurações

Acesse o **Configurador / Estoque / Opções / Conferência Cega de Entrada** e insira as empresas que realizarão essa rotina.

### Opções disponíveis

1. **"No momento de finalização de conferência cega, destacar com cor diferente os itens que apresentarem divergência entre o documento e a conferência realizada"** — Muito útil! No momento de liberar a conferência, o sistema destaca em **vermelho** os documentos com diferença na conferência da quantidade.

2. **"Atualizar automaticamente a data de referência do documento com a data de liberação da conferência"** — Disponível a partir da versão 11.00.05.00. Isso porque, às vezes, a pessoa de compras dá entrada na nota fiscal, mas a conferência pode ser realizada dias depois. Assim, a data de referência será atualizada de acordo com a conferência da mercadoria.

---

## Rotina

A rotina se resume em basicamente:

1. **Nota Fiscal de Entrada:** Lançamento comum da nota de entrada do fornecedor. Ao final, liberamos para conferência. (Usado pela Ana)
2. **Conferência Cega de Entrada:** Confere as quantidades informadas no sistema com aquilo que veio no veículo do transportador. E, ao final, realiza a aprovação do documento. (Usado pelo Paulo e pelo José)
3. **Liberador de estoque:** Atualiza as quantidades no estoque, fornecendo a entrada das mercadorias no estoque.

### Nota de Entrada

Lance uma nota de modo manual ou importe o XML da nota de entrada.

Ao finalizar o lançamento, clique no botão **"Liberar para conferência"**. O **Status** da nota muda para **"Aguardando conferência"**.

> **Dica:** Você pode utilizar a tarefa **GEImportacaoNFEntrada** para importar os XMLs de notas de compra automaticamente. A partir da versão 10.00.07.00 do Bimer, ao configurar a tarefa agendada > aba "Importação NFEntrada", você poderá escolher o status da nota ao ser importada. Dessa forma, não é necessário posteriormente entrar na nota e alterar manualmente o status dela para "Aguardando conferência".

### Conferência

No módulo **Conferência Cega de Entrada**, informe a empresa de **Estoque** utilizada no momento de lançar a nota e clique em **"Atualizar"**. Serão exibidas as notas que foram liberadas para conferência.

Há duas opções: **"Conferir documento"** e **"Cancelar conferência"**.

#### Conferir documento

Ao conferir, os produtos da nota são demonstrados, mas **não as suas quantidades** — assim o conferente sabe de cada item que está pendente para conferência, observando a coluna **Qt. Conferida**.

> **Atenção:** O módulo possui linha do tempo. É importante que seja desabilitado o recurso para aqueles que farão a conferência. O ideal é que a linha do tempo fique habilitada somente para gestores e afins.

Agora é só inserir o código e a quantidade conferida de cada produto e clicar em **Enter**.

- Marcando a opção **Alterar**: o sistema substitui a quantidade informada no campo Qt. Conferida.
- Marcando a opção **Somar**: ele adiciona a quantidade no campo Qt. Conferida.

> **Exemplo:** A quantidade já conferida do produto arroz é 10, o conferente informou mais 2 quantidades. Se estiver marcada **Alterar**, a quantidade conferida passa para 2; já se estiver marcada **Somar**, a quantidade conferida passa para 12.

#### Ao finalizar a conferência

No rodapé você pode colocar uma **observação** que explique o motivo da divergência na conferência, como um produto que veio com algum tipo de defeito, ou simplesmente que a conferência foi bem-sucedida.

Três botões disponíveis:

- **Salvar rascunho:** Salva o processo que já foi feito até o momento, mas sem liberar a nota de entrada. A conferência ainda está pendente e continuará mais tarde. Ao localizar a conferência salva, você pode **Editar** para dar continuidade ou **Voltar conferência** para apagar a conferência.
- **Voltar conferência:** Exclui todo o processo de conferência feito neste documento.
- **Liberar:** Quando já está tudo certo, clique aqui para finalizar o processo e alterar o status da nota de entrada.

Ao fazer a liberação, se houver divergências, o sistema exibe uma mensagem de confirmação. Ao clicar em "não", o sistema demonstra quais produtos estão com a quantidade divergente na **cor vermelha** (se a opção correspondente estiver marcada no Configurador).

### Liberador de Estoque

Voltando ao módulo **Nota Fiscal de entrada**, a nota mudou o status para **"Aguardando Liberador de estoque"**.

Para finalizar, execute o módulo **Liberador de estoque** e o status da nota já muda para **"Liberado"** e o processo é finalizado.

> **Fica a dica!** Se a equipe de entrada de notas perceber que há algum problema com a conferência, pode mandar o documento para ser conferido mais uma vez, clicando em **"Liberar para conferência novamente"**.

---

## Que tal mais algumas dicas?

- **Cancelar conferência:** Ao clicar neste botão, o sistema exibe uma mensagem. Se você confirmar, o documento sai do módulo e volta para o **Nota Fiscal de entrada** com o status de **"Aberto"**. Isso é feito por vários motivos, como por exemplo alguma pendência no lançamento da nota, como falta de produtos que estão ali para ser conferidos.

- **Visualizar conferência:** Mesmo após finalizar o processo, é possível visualizar a conferência por este botão.

- **Imprimir relatório:** Emita um relatório das conferências realizadas em determinado período. É só clicar neste botão, informar os filtros desejados e mandar **Visualizar**.

- **Cadastro de usuários:** Remover a permissão do usuário para **Liberar a nota**, para que todos os documentos passem pela conferência. Para isso, acesse o **Cadastro de usuários**, e nos acessos do Nota Fiscal de Entrada, **desabilite** a opção de **Liberar**.
  - Você também pode remover algumas permissões do usuário no módulo **Conferência cega de entrada**, como retirar a opção de **finalizar conferência com divergência de quantidades**.
