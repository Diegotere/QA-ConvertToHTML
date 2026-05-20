# Conferência Cega de Entrada — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Vamos às configurações](#vamos-às-configurações)
- [Rotina](#rotina)
  - [Nota de entrada](#nota-de-entrada)
  - [Conferência](#conferência)
  - [Liberador de estoque](#liberador-de-estoque)
- [Que tal mais algumas dicas?](#que-tal-mais-algumas-dicas)

---

## Introdução

O papo hoje é sobre a rotina de entrada de notas, mas de um modo um pouquinho diferente. Vamos fazer essa rotina usando um módulo que ajudará a conferir se a quantidade enviada pelo fornecedor está de acordo com a quantidade pedida pela empresa.

Para isso você vai usar o módulo **Conferência Cega de Entrada**. E tem mais, o módulo possui a inteligência de avisar se a quantidade conferida está diferente da quantidade presente na nota fiscal. Somente após essa conferência é que a mercadoria entra no estoque.

Para entender melhor, veja o exemplo de uma empresa que realiza a revenda de mercadorias em seu supermercado:

- **MANSER:** Este é meu fornecedor, há uma semana fiz um pedido para reposição do meu estoque. A mercadoria acabou de chegar e o fornecedor está na minha porta. É necessário que os setores da minha empresa façam o recebimento da nota e das mercadorias.
- **ANA:** É a funcionária que faz o lançamento da nota de entrada que veio do fornecedor Manser. Após registrar a entrada da nota ela manda as mercadorias para a conferência.
- **PAULO:** Esse é o "cara" do estoque! Ele já trabalha comigo há muitos anos, e conhece muito bem meu mix de produtos, assim ele já faz a separação de cada produto que veio do fornecedor na área de descarregamento do caminhão. Isso facilitará o trabalho de conferência das mercadorias.
- **JOSÉ:** Auxilia o Paulo na missão da conferência. Assim os dois funcionários começam a conferir os produtos enviados do fornecedor, vendo detalhes como: a qualidade dos produtos, se veio com algum tipo de defeito, se os produtos são os que a empresa realmente pediu e a quantidade dos produtos que vieram no veículo.
  - É importante ressaltar que neste momento os funcionários Paulo e José não têm acesso à nota fiscal do fornecedor, eles precisam realmente conferir as mercadorias **às cegas**, por assim dizer. Ao fazer isso, eles recebem um alerta de que a quantidade conferida é diferente da informada na nota, ou simplesmente o sistema confirma que os dados estão corretos.
  - Somente após esse processo é que a nota é aprovada e a mercadoria sai da área de descarregamento do caminhão, e entra no estoque físico da empresa.
- **ANA:** Voltando na Ana, se a conferência bateu certinho, a nota simplesmente será liberada no sistema. Do contrário, a Ana pode tomar ações como encaminhar essa nota para o processo de devolução com o fornecedor.

Ficou curioso para saber como fazer no sistema? Vem comigo que vou ensinar de modo fácil e bem direto ao ponto como configurar o sistema e depois como realizar a rotina.

---

## Vamos às configurações

Acesse o **Configurador / Estoque / Opções / Conferência Cega de Entrada** e insira as empresas que realizarão essa rotina.

> *[Imagem: Tela do Configurador com as empresas para Conferência Cega de Entrada]*

Veja ali abaixo a marcação: **"No momento de finalização de conferência cega, destacar com cor diferente os itens que apresentarem divergência entre o documento e a conferência realizada"**. Ela é muito útil! Pois no momento de liberar a conferência, o sistema destaca em vermelho os documentos com **diferença na conferência da quantidade**.

Além disso, a partir da versão 11.00.05.00 do sistema, há a possibilidade de **atualizar a data de referência do documento com a data de liberação da conferência**. Isso porque, às vezes, a pessoa de compras dá entrada na nota fiscal, mas a conferência pode ser realizada dias depois. Assim, a data de referência será atualizada de acordo com a conferência da mercadoria.

Já configuramos, agora bora ver como é a rotina!

---

## Rotina

Ela se resume em basicamente:

1. **Nota Fiscal de Entrada:** Lançamento comum da nota de entrada do fornecedor. Ao final **Liberamos para conferência**. Este será usado pela Ana.
2. **Conferência Cega de Entrada:** Confere as quantidades informadas no sistema com aquilo que veio no veículo do transportador. E, ao final, realiza a aprovação do documento. Este módulo será usado pelo Paulo e pelo José.
3. **Liberador de estoque:** Atualiza as quantidades no estoque, fornecendo a entrada das mercadorias no estoque.

Ei, não vamos ficar só na teoria não é? Vou mostrar para você na prática, que tal fazer no seu sistema junto comigo?

### Nota de entrada

Para começar, lance uma nota de modo manual ou importe o XML da nota de entrada. Ao finalizar o lançamento, clique no botão **Liberar para conferência**.

> *[Imagem: Botão "Liberar para conferência" na nota de entrada]*

Veja que o **Status** da nota muda para **Aguardando conferência**.

Ou ainda, você pode utilizar a tarefa **GEImportacaoNFEntrada** para importar os XMLs de notas de compra automaticamente.

A partir da versão 10.00.07.00 do Bimer, ao configurar a tarefa agendada > aba **"Importação NFEntrada"**, você poderá escolher o status da nota ao ser importada. Dessa forma, não é necessário posteriormente entrar na nota e alterar manualmente o status dela para "Aguardando conferência".

É neste momento que vamos usar o módulo **Conferência Cega de Entrada**.

### Conferência

É só informar a empresa de **Estoque** utilizada no momento de lançar a nota e clicar em **"Atualizar"**. Veja só! São as notas que foram liberadas para conferência.

> *[Imagem: Tela do módulo Conferência Cega de Entrada com notas listadas]*

Abaixo temos duas opções: **"Conferir documento"** e **"Cancelar conferência"**.

Vamos falar primeiro do **Conferir documento**, para realizar a rotina comum. Ao fazer isso, os produtos da nota são demonstrados, mas não as suas quantidades, assim o conferente sabe de cada item que está pendente para conferência, observando a coluna **Qt. Conferida**.

> **Atenção:** o módulo possui linha do tempo. Dessa forma, é importante que seja desabilitado o recurso para aqueles que farão a conferência. O ideal é que a linha do tempo fique habilitada somente para gestores e afins.

> *[Imagem: Tela de conferência com produtos listados]*

Agora é só inserir o código e a quantidade conferida de cada produto e clicar em **Enter**.

Marcando a opção **Alterar** o sistema substitui a quantidade informada no campo **Qt. Conferida**. Se marcar **Somar** ele adiciona a quantidade no campo **Qt. Conferida**.

Para entender melhor olhe a imagem acima e veja o exemplo:

> A quantidade já conferida do produto arroz é 10, o conferente informou mais 2 quantidades no campo Quant. conf. Se estiver marcada **Alterar** a quantidade conferida passa para 2; já se estiver marcada a opção **Somar** a quantidade conferida passa para 12.

Ao finalizar a conferência da contagem, o que fazer?

No rodapé você pode colocar uma observação que explique o motivo da divergência na conferência, como um produto que veio com algum tipo de defeito, ou simplesmente que a conferência foi bem-sucedida. Agora temos três botões:

- **Salvar rascunho:** Salva o processo que já foi feito até o momento, mas sem liberar a nota de entrada. Isso quer dizer que a conferência ainda está pendente por algum motivo, e continuará mais tarde. Ao localizar a conferência salva, você pode **Editar** para dar continuidade ou **Voltar conferência** para apagar a conferência.
- **Voltar conferência:** Exclui todo o processo de conferência feito neste documento.
- **Liberar:** Quando já está tudo certo é só clicar aqui para finalizar o processo e alterar o status da nota de entrada.

Ao fazer a liberação veja só a mensagem que recebi:

> *[Imagem: Mensagem de divergência na conferência]*

Ao clicar em "não", o sistema demonstra quais produtos estão com a quantidade divergente na cor vermelha (isso é feito pois marquei aquela opção no **Configurador Bimer**).

> *[Imagem: Produtos com divergência destacados em vermelho]*

Ajustei as quantidades e fiz a liberação. Vamos ver o passo final.

### Liberador de estoque

Voltando ao módulo **Nota Fiscal de entrada** a nota mudou o status para **Aguardando Liberador de estoque**.

> *[Imagem: Nota com status "Aguardando Liberador de estoque"]*

Para finalizar você já sabe, não é? É só executar o módulo **Liberador de estoque** e o status da nota já muda para **Liberado** e o processo é finalizado.

> **Fica a dica!** Se a galera de entrada de notas perceber que há algum problema com a conferência, pode mandar o documento para ser conferido mais uma vez, clicando em **Liberar para conferência** novamente.

---

## Que tal mais algumas dicas?

Bora finalizar essa apostila falando de algumas dicas úteis na rotina:

- **Cancelar conferência:** Ao clicar neste botão, o sistema exibe uma mensagem, se você confirmar o documento sai do módulo e volta para o **Nota Fiscal de entrada** com o status de **Aberto**. Isso é feito por vários motivos, como por exemplo alguma pendência no lançamento da nota, como falta de produtos que estão ali para ser conferidos.

> *[Imagem: Botão "Cancelar conferência"]*

- **Visualizar conferência:** Mesmo após finalizar o processo, é possível visualizar a conferência por este botão.

> *[Imagem: Botão "Visualizar conferência"]*

- **Imprimir relatório:** Emita um relatório das conferências realizadas em determinado período. É só clicar neste botão, informar os filtros desejados e mandar **Visualizar**.

> *[Imagem: Tela de filtro do relatório de conferências]*

- **Cadastro de usuários:** Você está pensando o mesmo que eu? Remover a permissão do usuário para **Liberar a nota**, para que todos os documentos passem pela conferência? Para isso só acessar o **Cadastro de usuários**, e nos acessos do Nota Fiscal de Entrada **Desabilitar** a opção de **Liberar**.

> *[Imagem: Tela de permissões do usuário no Nota Fiscal de Entrada]*

  - Você também pode remover algumas permissões do usuário no módulo **Conferência cega de entrada**, como retirar a opção de **finalizar conferência com divergência de quantidades**.

> *[Imagem: Permissões do módulo Conferência Cega de Entrada]*
