# Simples Nacional — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [O que é Regime Tributário?](#o-que-é-regime-tributário)
- [Tributos](#tributos)
- [Configurações no Sistema](#configurações-no-sistema)
- [Rotinas](#rotinas)

---

## Introdução

Neste manual vamos falar sobre o **Simples Nacional**. Falaremos sobre as compras e vendas de empresas que utilizam esse regime tributário, retenção de tributos, suas principais características e diferenças entre os regimes tributários Lucro Real e Lucro Presumido.

---

## O que é Regime Tributário?

O regime de tributação é o que determina como e quais os tributos serão pagos por uma empresa. Dentre os regimes tributários existentes no Brasil atualmente estão: **Lucro Real**, **Lucro Presumido** e **Simples Nacional**. As principais diferenças entre eles são: limite de faturamento, base de cálculo e alíquotas cobradas pelos tributos.

### Lucro Real

No Lucro Real o cálculo de **IRPJ** e **CSLL** são baseados no lucro efetivo da empresa dentro do período de apuração, ou seja, quanto maior o lucro, mais tributos são pagos. Porém, o inverso também acontece: se a empresa estiver sem lucros ou em prejuízos, ela não precisa pagar esses tributos.

Além de IRPJ e CSLL, as empresas também pagam por **PIS**, **COFINS**, **ISS**, **ICMS** e **IPI** (no caso de indústrias e importadores). Fazem parte deste regime empresas com faturamento anual mínimo de **R$ 78 milhões**.

### Lucro Presumido

No Lucro Presumido, a RFB entende por lucro apenas uma parte do faturamento da empresa, esta parte é chamada de **percentual de presunção**. Nesse sentido, o cálculo de IRPJ e CSLL são baseados em uma tabela fixa de presunção e são recolhidos trimestralmente.

PIS e COFINS são calculados de forma **cumulativa**, ou seja, as compras realizadas por empresas do Lucro Presumido não têm direito a crédito destes tributos e não possuem redução de base de PIS e COFINS. Além destes, também há incidência de ISS para serviço, ICMS para comércio e IPI em caso de indústrias e importadores; são recolhidos mensalmente. Fazem parte deste regime empresas com faturamento que não ultrapasse **R$ 78 milhões** ao ano.

### Simples Nacional

O **Simples Nacional** é o nome abreviado de "Regime Especial Unificado de Arrecadação de Tributos e Contribuições devidos pelas Microempresas e Empresas de Pequeno Porte".

Isso significa que o Simples é um regime tributário diferenciado e que é oferecido a empresas de pequeno porte (EPP) e microempresas (ME), além dos Microempreendedores Individuais (MEI). Para fazer parte do Simples Nacional, a empresa precisa ter uma **receita bruta anual de até R$ 4,8 milhões**.

Diferente das empresas do Lucro Real e Lucro Presumido, quando uma empresa do Simples Nacional emite uma NF-e com tributos, ela paga por estes tributos em uma única guia que se chama **DAS** (Documento de Arrecadação do Simples Nacional).

Mensalmente é recolhido, através do DAS, o **IRPJ**, **IPI**, **CSLL**, **PIS/Pasep**, **COFINS**, **ICMS** e **ISS**. Apenas o **ICMS ST** não é pago através do DAS, mas sim por uma guia separada.

---

## Tributos

### CST x CSOSN

As empresas que pertencem ao Simples Nacional não utilizam **CST** e sim o **CSOSN** que significa "Código de Situação da Operação no Simples Nacional".

No sistema Bimer há como cadastrar a equivalência entre CST e CSOSN em **Configurador Bimer / Estoque / Tributos / "Equivalência de códigos de tributação"**. Esses cadastros podem ser comuns a todas as empresas ou individual por empresa.

### Destaque dos tributos

Empresas do Simples Nacional **não precisam destacar impostos nas notas fiscais** (salvo exceções), isso se dá porque o recolhimento dos tributos é baseado no faturamento da empresa e não no valor da nota.

Porém, as empresas precisam informar no campo **"Informações Adicionais"** que o documento é emitido por ME ou EPP optante pelo Simples Nacional e a nota fiscal não gera direito a crédito fiscal de IPI. No Bimer, o sistema leva essa mensagem automaticamente, desde que a empresa esteja configurada como Simples Nacional.

Para confirmar se a informação está sendo levada antes de emitir a NF-e, abra a nota no Faturamento e vá na aba **"Observação"**, em seguida, clique em **"Exibir informações adicionais do DANFE"**.

As operações em que o **ICMS deve ser destacado** são:

- Nota Fiscal de Devolução;
- Nota Fiscal de Importação de Mercadorias;
- Nota Fiscal com ICMS ST;
- ICMS de Operação Própria*.

> **Nota:** *Nas notas fiscais de venda de mercadoria, o ICMS da operação própria não deve ser destacado em campo específico dos documentos fiscais. Porém, há casos em que a empresa emissora da NF-e, optante pelo SN, gera crédito de ICMS ao destinatário da nota. Nestes casos, tanto o valor quanto a alíquota do ICMS serão levados para os campos específicos da NF-e.*

> **Atenção!** Na capa da nota, no Faturamento, o campo de valor de ICMS não será preenchido! As informações serão levadas para tags específicas no XML.

> *[Imagem: Tela do Faturamento mostrando a capa da nota com o campo de ICMS vazio e as tags específicas no XML]*

Além disso, a informação de crédito de ICMS aparecerá automaticamente nas informações adicionais da nota.

> *[Imagem: Informações adicionais da nota com o crédito de ICMS do Simples Nacional]*

### Antecipação de ICMS ST

Empresas do Simples Nacional podem precisar calcular a **Antecipação do ICMS ST**. A antecipação do ICMS ST é calculada quando a empresa faz o recolhimento do ICMS ST retido na compra de matérias-primas ou mercadoria para revenda. Assim, ao realizar a venda, ela não precisa pagar por este tributo porque já foi pago anteriormente.

Para realizar o cálculo de Antecipação de ICMS ST:

1. A operação deverá estar marcada para tal, em **Configurador Bimer / Estoque / Operação / aba "Cálculos"**;
2. Em **Configurador Bimer / Estoque / Tributos / Cálculo de ICMS / aba "Substituição Tributária/Antecipação de ICMS-ST"** deverá estar marcado e configurado para o cálculo de antecipação;
3. É necessário ter a nota com o valor de ICMS ST retido cadastrada no sistema para que possa ser informada dentro da tela de adição do item / Complementar.

### Retenção de impostos e contribuições sociais

A retenção de impostos e contribuições sociais é uma maneira que o Governo Federal tem de antecipar uma parte dos valores que as empresas devem pagar a fim de combater a sonegação. A retenção depende da atividade e regime tributário da empresa.

No caso de empresas do **Simples Nacional**, não há a retenção de tributos pagos a estas empresas, apenas às empresas optantes pelo Lucro Real, Lucro Presumido ou Regime Normal. Com exceção do **ISS**, já que o município pode exigir sua antecipação, inclusive por parte das empresas pertencentes ao Simples Nacional.

---

## Configurações no Sistema

### Cadastro de Empresa

Abra o cadastro da empresa no **Configurador Bimer / Geral / Empresas / Cadastro / Complementar** e faça o seguinte:

- Desmarque **"Não se enquadra em nenhum dos regimes especificados abaixo"** e selecione a categoria do Simples Nacional na qual a empresa se encaixa na área **Regime especial de Tributação**.

> *[Imagem: Tela de cadastro da empresa com a área de Regime especial de Tributação]*

Ao marcar as opções **"MEI - Simples Nacional"** e **"ME EPP - Simples Nacional"** é habilitada a tela **"Simples Nacional"** no lado direito da tela:

- **Situação da operação de saída** – Informe o CSOSN para os documentos de saídas gerados nos módulos do Faturamento;
- **Situação da operação de saída para o PDV Alterdata** – Selecione o CSOSN para os documentos de saídas gerados no PDV;
- **Situação da operação de entrada** – Informe o CSOSN para os documentos de entradas;
- **Al. crédito ICMS SN** – Informe o percentual para calcular o valor de ICMS nos documentos do Faturamento, caso a empresa tenha direito de se aproveitar de crédito de ICMS nas vendas;
- **Calcula ICMS (Nota fiscal de entrada)** – Nas notas de entrada, o valor de ICMS será calculado de modo comum a partir das configurações do Bimer. Marque esta opção para que os valores de tributos lançados de modo manual sejam preservados na nota de entrada;
- **Código do tipo de receita** – Utilizado para nota de serviço. Ao preencher algum código neste campo a tag `<OptanteSimplesNacional>` será preenchida com `1` representando que a empresa é do Simples. Se o campo estiver vazio a tag será gerada com o valor `2` representando que a empresa não é Simples.

> **Se liga nas dicas!** A recuperação do CSOSN no sistema Nota Fiscal de Entrada respeita a seguinte hierarquia:
> 1. Cadastro de Produto, aba Empresa, vínculo produto x empresa, aba Tributos, aba Geral.
> 2. Configurador Bimer / Geral / Empresas, aba Cadastro / Complementar.
>
> Na importação de um NF-e no Nota Fiscal de Entrada, o CSOSN será recuperado do Cadastro de Produto ou do cadastro da empresa somente se a opção **"Recuperar o Código de Situação Tributária ou Código da Situação da Operação do Simples Nacional (CSOSN) do declarante ao invés do informado no DANFE/XML"**, localizada no **Configurador Bimer / Estoque / Opções / Nota fiscal de entrada / Importação NF-e XML**, estiver marcada.

Ao selecionar **"ME EPP - Simples Nacional (excesso de sublimite de receita bruta)"** o campo de **Optante pelo Simples Nacional (NFS-e)** é habilitado. Sendo utilizado para inserir no XML de NFS-e que a empresa é optante ou não por esse regime. Com a opção marcada a tag `"OptanteSimplesNacional"` será preenchida com `"1 – Sim"`. Se a opção estiver desmarcada será preenchida com `"2-Não"`.

Outras opções disponíveis:

- **Trabalha com integração do PDV Alterdata** – Marque esta opção se a empresa emitir NFC-e ou Cupom fiscal no PDV. Isto habilita a opção **Situação da operação de saída para o PDV Alterdata**;
- **Exerce atividade de pesquisa e desenvolvimento** – Ao utilizar serviço isento de ISS na emissão de NFS-e e uma operação configurada para calcular ISS, o sistema irá preencher no XML o campo referente a base de cálculo do ISS com o valor total dos itens. Com esta marcação não é possível incluir em uma única NFS-e um item isento de ISS e outro que calcule ISS.

### Cadastro de Produtos

Há também configuração específica para o Simples Nacional no **Cadastro de produtos** na aba **"Empresa » Vínculo produto/empresa » Tributos » Geral"**.

> *[Imagem: Tela do cadastro de produtos com a aba de configuração do Simples Nacional]*

### Cálculo de ICMS

No **Cálculo de ICMS** você configura o CSOSN de acordo com a origem e destino da operação comercial.

> *[Imagem: Tela de Cálculo de ICMS com configuração de CSOSN por origem e destino]*

Para obter o CSOSN o Bimer usa a seguinte hierarquia:

1. **Cálculo de ICMS / aba Uso e consumo** (quando a opção *"Operação para consumidor final / uso e consumo"* está marcada na operação);
2. **Cálculo de ICMS / aba Dados**;
3. **Cadastro de produtos** (Aba Empresa / aba Tributos / aba Geral);
4. **Cadastro da empresa** (Configurador Bimer / Geral / Empresas / tela de cadastro da empresa / Aba Cadastro / aba Complementar / quadro Simples Nacional).

> **Observações:**
> 1. No cálculo de ICMS existe a configuração na aba **Específicos por empresa** que é prioritária em relação à aba **Comuns às empresas**.
> 2. A hierarquia para resgate do CSOSN será utilizada nos seguintes aplicativos: Pedido de Venda (apenas para pedidos de venda com produtos), Faturamento (apenas na aba "Nota fiscal"), Nota Fácil, Ordem de Serviço, CRM - Administrador de relacionamentos (apenas no contato de venda do Vendas follow up), Consignação (gerando a devolução no Faturamento).

---

## Rotinas

### Venda

Veja que no lançamento do produto no pedido de vendas, o sistema resgata o CSOSN da hierarquia conforme aprendemos:

> *[Imagem: Tela do pedido de vendas com o CSOSN resgatado automaticamente no item]*

> **Nota:** Não temos no item os campos de cálculo de ICMS ao lado de IPI, assim como nas empresas que não são do Simples Nacional.

Veja a nota no Faturamento que apresenta a **Al. Crédito ICMS**:

> *[Imagem: Tela do Faturamento com a nota do Simples Nacional e o campo Al. Crédito ICMS]*

#### O que muda no XML da nota?

1. **Tag `<ICMS>`** – Exibe o CSOSN utilizado na nota, com o percentual e valor de crédito de ICMS calculados. Este percentual é resgatado do cadastro da empresa. Caso hajam outros tributos calculados, como o IPI, serão exibidos na Tag `<Imposto>`.

2. **Tag `<InfCpl>`** – Mostra o aproveitamento do crédito do Simples Nacional e os valores que foram calculados na Tag `<ICMS>`.

> *[Imagem: XML da nota com as tags ICMS e InfCpl do Simples Nacional]*

#### De olho nas dicas!

O cliente pode usar vários CSOSNs diferentes. Isso pode acarretar algumas situações no atendimento como calcular ou não determinado tributo:

| CSOSN | Comportamento |
|---|---|
| **101** | Calcula crédito de ICMS, mas não calcula Substituição Tributária. |
| **102 / 103 / 900** | Não calcula crédito de ICMS, mas calcula Substituição Tributária. |
| **201** | Calcula crédito de ICMS e Substituição Tributária. Ao enviar uma NF-e com o CSOSN 201 que não possuir ICMS ST, aparece mensagem dizendo que a nota possui item(ns) configurado(s) que estão sujeitos à substituição tributária conforme o código da mesma informado. |
| **202 / 203 / 300 / 400** | Não calcula crédito de ICMS, mas calcula Substituição Tributária. |
| **500** | Não calcula crédito de ICMS e nem Substituição Tributária. Ao trabalhar com esse CSOSN, algumas mensagens serão exibidas para informar na aba **Complementar** do item o **ICMS / ICMS ST Efetivo** ou **ICMS Efetivo**. |

#### Excesso de sublimite

Toda empresa optante pelo Simples Nacional não pode ultrapassar a receita anual de **R$ 4.800.000,00**. Se isto ocorrer antes do término do ano, a empresa ultrapassa o sublimite e perde o direito de tributar como uma empresa do Simples até o fim do ano. E no próximo ano, não se enquadra mais como Simples.

Deste modo, nos módulos do Faturamento não usaremos mais o CSOSN, mas sim o **CST** de tributação aplicado para empresas de lucro real e presumido:

> *[Imagem: Tela do Faturamento com a nota usando CST ao invés de CSOSN por excesso de sublimite]*

Veja que no XML da nota aparece a observação que a empresa atingiu o sublimite do Simples Nacional:

> *[Imagem: XML da nota com a observação de atingimento do sublimite do Simples Nacional]*

### Compra

No lançamento da entrada de notas é possível calcular o ICMS de modo comum. Para isso, configure o sistema:

1. **Operação** – Marque **Calcula ICMS**;
2. **Cálculo de ICMS** – Configure a Origem e destino, de acordo com as UFs da empresa de compra e do Fornecedor;
3. **Produto** – Vincule o cálculo de ICMS configurado.

Lance a nota e veja na aba **Impostos** o ICMS calculado:

> *[Imagem: Tela de lançamento de nota de entrada com o ICMS calculado na aba Impostos]*

> **Dica!** Quando a empresa é do Simples Nacional e se faz necessário ajustar o tributo manualmente na tela de lançamento, duas configurações são necessárias:
> 1. Deixar a marcação **"Calcula ICMS (Nota fiscal de entrada)"** selecionada no cadastro da empresa;
> 2. Nas opções do módulo Nota fiscal de entrada / Aba Complementar / **Permite alteração manual dos impostos**, marcar **Imposto dos itens**.

> **Informações para Compras & Vendas:** Os tributos que não foram mencionados, também serão calculados caso o sistema esteja configurado (como PIS, COFINS e IPI).

> **Lembre-se:** Em caso de dúvidas, o cliente sempre deve verificar com a contabilidade da empresa a informação correta. Além disso, o setor de **Inteligência Fiscal** está sempre disponível para responder aos questionamentos!
