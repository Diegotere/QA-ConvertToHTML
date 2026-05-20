# PDV Alterdata — Transformar Pré-pedido em DAV — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [O que é DAV?](#o-que-é-dav)
- [Configurações](#configurações)
  - [Cadastro da Empresa](#cadastro-da-empresa)
  - [Pré-Pedido](#pré-pedido)
- [Módulo Documento Auxiliar de Venda](#módulo-documento-auxiliar-de-venda)
  - [DAV](#dav)
  - [DAV - manual](#dav---manual)
- [PDV – Alterdata](#pdv--alterdata)

---

## Introdução

### O que é DAV?

DAV é a abreviação de "Documento Auxiliar de Venda". Documento instituído pela SEFAZ que deve ser emitido pelas empresas que fazem vendas através do PDV, quando houver a necessidade de se emitir um orçamento para os clientes.

Não é permitido às empresas que trabalham desta forma emitir outro tipo de documento que sirva como orçamento (ou pré-venda), que não seja o DAV.

**Exemplo:**
Um cliente chega a uma loja de materiais de construção, porém deseja apenas fazer um orçamento de alguns produtos, antes de decidir se fará ou não a compra. Neste caso a empresa deverá emitir um DAV. Quando houver a decisão do cliente pela compra, a loja processará o DAV direto no PDV, finalizando a venda e realizando a emissão do cupom fiscal.

Como muitos clientes do Bimer utilizam o módulo de Pré-pedido para iniciar suas vendas, foi criado recurso para transformar um pré-pedido em DAV, evitando a necessidade de se redigitar a venda no módulo específico para o DAV.

---

## Configurações

Para trabalhar com DAV, a instalação do PDV Alterdata é feita normalmente. (Verificar material disponível no Portal UCA sobre instalação do PDV Alterdata para o Bimer.)

Após a instalação do PDV Alterdata será necessário realizar algumas configurações no Bimer.

### Cadastro da Empresa

Acesse **Configurador >> Geral >> Empresas**, selecione a empresa, vá até a aba **Cadastro** / sub-aba **Complementar** e marque a opção **"Trabalha com integração do PDV Alterdata"**, escolhendo a opção **Cupom Fiscal**. Desta forma, será possível transformar os Pré-pedidos em DAV.

> *[Imagem: tela de configuração da empresa com a opção "Trabalha com integração do PDV Alterdata" marcada e Cupom Fiscal selecionado]*

---

### Pré-Pedido

A criação do Pré-pedido é feita normalmente. Após a sua criação, será necessário liberá-lo para transformação em DAV.

Para isso, basta clicar no botão **"Liberar para transformação em DAV"**.

> *[Imagem: botão "Liberar para transformação em DAV" na tela do Pré-pedido]*

Ao aparecer a tela seguinte, clique em **"Liberar para Transf. em DAV"**.

O sistema apresentará um alerta de confirmação.

> *[Imagem: alerta de confirmação da liberação para transformação em DAV]*

---

## Módulo Documento Auxiliar de Venda

### DAV

Após liberar o Pré-pedido para ser transformado em DAV, acesse o módulo **Documento Auxiliar de Venda** para concluir a operação. Clique na opção **"Copiar dados para novo DAV"** e, na tela seguinte, realize os filtros para localizar e selecionar o Pré-pedido que deverá ser transformado em DAV.

> *[Imagem: tela de filtro para localizar o Pré-pedido a ser transformado em DAV]*

Após transformar o Pré-pedido em DAV, será necessário liberá-lo para que a venda seja finalizada no PDV. Para liberar o DAV, selecione-o na grid principal do sistema e clique na opção **"Alterar status"** no menu de opções do módulo.

Ao clicar em **"Alterar status"**, o sistema apresentará uma tela com 3 opções:

- **Opção 01 – Disponível para o PDV-Alterdata:** altera o status do DAV, permitindo que ele possa ser finalizado pelo PDV.
- **Opção 02 – Inativo:** torna o DAV indisponível para uso, não permitindo que seja feito mais nada com ele.
- **Opção 03 – Cancelar:** mantém o DAV com o status atual.

Após alterar o status do DAV para **"Disponível para o PDV-Alterdata"**, a venda poderá ser concluída no PDV.

---

### DAV - manual

Caso a empresa não trabalhe com o Pré-Pedido, ela deverá criar os DAVs manualmente, dentro do próprio módulo DAV. Para isso, basta clicar em **"Novo"** e preencher os dados do DAV.

> *[Imagem: tela de criação manual de DAV com campos a preencher]*

---

## PDV – Alterdata

Para finalizar uma venda iniciada por um DAV, na tela principal do PDV, pressione as teclas **`<Alt+O>`**. O PDV abrirá a tela de seleção de DAV, na qual deverá ser feito o filtro para localizar e selecionar o DAV que deseja concluir. Clique em **"Próximo"** e depois em **"Concluir"**.

> *[Imagem: tela de seleção de DAV no PDV Alterdata]*

O sistema trará o DAV selecionado para a tela principal do PDV Alterdata, pela qual a venda poderá ser finalizada normalmente como qualquer outra venda.
