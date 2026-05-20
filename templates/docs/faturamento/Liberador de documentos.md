# Liberador de Documentos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
- [Rotina – Trabalhando com Requisição de Material](#rotina--trabalhando-com-requisição-de-material)
- [Rotina – Verificação da Requisição](#rotina--verificação-da-requisição)
- [Configurador do FatPDV](#configurador-do-fatpdv)
- [Módulo Liberação de Pedidos](#módulo-liberação-de-pedidos)

---

## Introdução

O módulo **Liberador de Documentos** auxilia a empresa em um rigoroso controle de estoque através do controle das saídas de produtos do estoque, visto que o Liberador de Estoque somente enxergará os documentos após a liberação pelo aplicativo.

Este não é um módulo obrigatório na rotina dos clientes que utilizam o Bimer, porém pode ser necessário para aqueles clientes que desejam mais um ponto de controle na rotina de liberação de documentos.

---

## Configurações Necessárias

### Configurador do Bimer

No Configurador acesse **"Opções / Venda / Liberador de documentos"**:

Marque a opção **"Trabalha com o módulo Liberador de documento"**. Com esta opção marcada o sistema habilita os módulos que poderão trabalhar com o Liberador de documento. Ao menos um módulo deverá ser selecionado para trabalhar com o recurso.

> *[Imagem: Tela de configuração do Liberador de Documentos no Configurador Bimer]*

Ao clicar em **"Informações"** são exibidas informações detalhadas sobre o funcionamento.

Ao marcar **"Trabalhar com requisição de material"** será habilitada a possibilidade de gerar requisição de material a partir do módulo Liberação de Documento.

No quadro **"Empresas"** devem ser apontadas as empresas que trabalharão com a rotina para liberação de documentos.

> **Atenção:** Para utilizar o módulo de Liberador de Documentos a empresa precisa estar configurada para trabalhar com **setores**. Caso tente selecionar uma empresa que não trabalhe com setores, uma tela de aviso será exibida.

Ao finalizar, basta clicar em **"Gravar"** para salvar as alterações.

### Cadastro de Usuários

Acesse o módulo **"Cadastro de Usuários"**. Os acessos devem ser liberados de acordo com o que foi configurado a rotina nos passos anteriores, não sendo obrigatórios todos os aplicativos apresentados.

### Requisição de Material

Caso opte por trabalhar com requisição de material a partir do módulo Liberação de Documentos, é possível configurar para confirmar o recebimento da requisição. Ou seja, o estoque só será movimentado após o setor requisitante confirmar o recebimento dos produtos.

Para isso, acesse o módulo de **Requisição de Materiais**, informe a empresa e clique em **Opções**. Em seguida na aba **"Geral"** marque a opção **"Trabalhar com confirmação de recebimento de requisição"**.

> **Atenção:** A opção de confirmação de recebimento apenas aparecerá se a base estiver marcada para trabalhar com liberação de documentos.

Ao finalizar, basta clicar em **"OK"** para salvar as alterações.

### Faturamento

#### Venda e Saída

Ao marcar a opção **"Faturamento (Venda e saída)"**, ao imprimir um documento com uma operação que esteja marcada para atualizar estoque e seja de venda ou saída, será disponibilizado o documento no módulo de Liberador de documento.

> *[Imagem: Nota autorizada pela SEFAZ aguardando liberação pelo Liberador de Documento]*

#### Compra e Entrada de Importação

Quando marcada a opção **"Faturamento (Compra e Entrada de Importação)"**, ao lançar uma nota fiscal que seja de compra ou entrada de importação, o sistema também disponibilizará o documento para ser liberado.

### Liberador de documentos

No **Liberador de documentos**, informe a empresa e o setor para liberação, e clique em **"Processar"**. Assim, são exibidos os documentos que não foram conferidos.

> *[Imagem: Tela principal do Liberador de Documentos com lista de documentos pendentes]*

Selecione o documento desejado e em seguida clique em **"Conferir documento"**.

O documento ficará com a descrição em vermelho indicando a conferência. Insira o produto — caso este trabalhe com lote, o sistema exibirá abaixo da quantidade conferida. Confira os itens da nota e em seguida grave.

> *[Imagem: Tela de conferência de documento com itens e quantidades]*

Caso a conferência tenha sido realizada de maneira incorreta e seja necessário corrigir, clique sobre o botão **"Excluir conferência"**.

Caso a conferência esteja correta, clique sobre **"Liberar conferência"**.

> *[Imagem: Botões de excluir e liberar conferência]*

Ao retornar ao módulo **Faturamento**, a nota ficará com a legenda verde, ou seja, aguardando liberador de estoque.

Retornando no módulo de Liberador de Documentos existem os recursos:

- **Verificar série:** Verifica se o item possui a série informada corretamente. Caso o preenchimento tenha sido realizado, é exibida uma mensagem de confirmação.
- **Auditoria de sistemas:** Nesta área o sistema exibe todas as rotinas realizadas no sistema como: abertura da conferência, liberação, requisição etc.

---

## Rotina – Trabalhando com Requisição de Material

Precisa ser feita a configuração no Configurador para que no Liberador de Documentos seja possível criar a requisição de materiais.

No módulo **Liberador de Documentos**, quando o documento estiver em conferência, informe o setor e a quantidade da requisição e grave. Nesse caso, as informações de conferência não devem ser preenchidas, uma vez que se já foi conferido, é porque já se tem o produto e não precisa buscar de outro setor por meio da requisição de materiais.

Será habilitado o botão **"Gerar requisição"**.

> *[Imagem: Botão "Gerar requisição" habilitado no Liberador de Documentos]*

Será exibida uma tela de confirmação para geração da requisição. Após, será realizado o processamento da requisição.

Acesse o módulo de **requisição** para realizar o atendimento. Em caso de dúvidas sobre o módulo de requisição, acesse o **Portal da UCA > Bimer > Manuais**.

Desta forma, ao rodar o **Liberador de estoque**, a quantidade será movimentada para o setor que realizou a requisição.

---

## Rotina – Verificação da Requisição

Feito o atendimento da Requisição de Material e feita a liberação do estoque, abra o **Liberador de documento** para confirmar o recebimento. Ao clicar em **"Verificar requisição"** o sistema exibirá que a requisição foi atendida.

Em seguida, faça a liberação do documento.

---

## Configurador do FatPDV

Caso a empresa trabalhe com produtos que controlam lote/série e usa o módulo **Pré-Pedido**, é necessário acessar o módulo **Configurador do FatPDV**, menu **Ferramentas, Opções… / Pré-Pedido / Pedido de venda / Geral**. Em seguida, marque a opção **"Habilitar informação de lote/série de produto no Pré-Pedido"**, assim no lançamento do pré-pedido será habilitado campo para informar lote/série do produto.

Para que o usuário não esqueça de lançar a informação no pedido e cause um bloqueio no documento mais à frente, é aconselhável marcar a opção **"Obrigar o preenchimento de lote/série de produto no Pré-Pedido"**, mas nem sempre é possível visto que nem sempre o vendedor tem acesso a essa informação.

---

## Módulo Liberação de Pedidos

Caso trabalhe apenas com produtos que controlam série e opte por não liberar os pedidos automaticamente conforme a forma de pagamento, será necessário trabalhar com o módulo **Liberação de Pedidos**.

Para liberar os pedidos com itens que controlam série, mas sem série informada no item, é necessário acessar **"Configurações"**, aba **geral**, e marcar a opção **"Permitir liberar pedidos com produtos que controlam série, mas que estão sem série informada"**. Em seguida grave.

> **Observação:** Esta opção somente ficará habilitada caso a base esteja configurada para trabalhar com o módulo Liberação de Documento, conforme visto anteriormente. No **Configurador / Faturamento / Opções / Venda / Liberação de Documento**, esteja desmarcada a opção **Faturamento (Compra e Entrada de Importação)**.

> **Observação 2:** Esta configuração não funciona para produtos que controlam lote.
