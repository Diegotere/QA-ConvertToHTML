# Periféricos — Balança — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Cadastro de produtos](#cadastro-de-produtos)
- [Balança de checkout](#balança-de-checkout)
  - [Configurações otimizadas](#configurações-otimizadas)
- [Balança impressora de etiqueta](#balança-impressora-de-etiqueta)
  - [Exportação dos produtos](#exportação-dos-produtos)

---

## Introdução

Diversos tipos de comércios necessitam de balanças como periférico auxiliar na rotina de vendas, como mercados, lojas de rações, restaurantes, entre outros.

Este manual aborda especificamente 2 tipos de balança:

- **Balança de checkout:** fica junto ao caixa, utilizada para pesar o produto e informar a quantidade diretamente no campo correspondente no PDV.
- **Balança impressora de etiqueta:** fica em um balcão, na qual o produto é pesado e ela emite uma etiqueta com código de barras contendo código do produto, peso e valor. A etiqueta é fixada na embalagem e lida pelo caixa na hora do recebimento.

---

## Cadastro de produtos

Antes de ver as configurações específicas das balanças, é importante revisar algumas configurações no cadastro de produtos que podem influenciar na venda quando se utiliza balança:

- **Código do produto:** no cadastro do produto / **Identificação** / **Códigos**, ter um código configurado como principal. Pode haver outros códigos secundários, como, por exemplo, um código EAN 13.
- **Unidade de medida:** no cadastro do produto / **Identificação** / **Unidade**, deve estar informada uma unidade configurada como fracionada (**Configurador Bimer >> Estoque >> Produto >> Unidade >> Tipo de unidade**).
- **Permissão de alteração:** no cadastro do produto / **Opções** / **Permissões de alteração**, deve estar marcada a opção **Quantidade e peso no PDV / Nota Fácil**.

---

## Balança de checkout

As configurações são feitas diretamente no **PDV Alterdata >> Outras Funções >> Configurações >> Periféricas >> Balança**.

Marque a opção **"Utiliza balança?"**.

As informações dos demais campos variam conforme modelo e marca da balança. Por isso, para preenchê-los, consulte o manual do equipamento.

Com a configuração feita, reinicie o PDV e passe a utilizar a balança para informar a quantidade do item na hora de passar a venda no caixa.

> *[Imagem: tela de configuração de balança no PDV Alterdata com a opção "Utiliza balança?" marcada]*

---

### Configurações otimizadas

Além de fazer a configuração diretamente no PDV, há também como fazê-la pelo módulo **Libera ECF**. Nele, clique em **Configuração de balança**.

Nessa área há duas opções:

1. Selecionar o modelo da impressora, caso seja alguma existente na lista;
2. Ou preencher manualmente os campos, consultando o manual do equipamento, semelhante à forma como é feita nas Configurações do PDV.

Além dos campos de configuração, há ainda a opção **Testar balança**, que permite verificar se a comunicação está correta, sem a necessidade de abrir o PDV para isso.

> *[Imagem: módulo Libera ECF com a opção "Configuração de balança" e botão "Testar balança"]*

---

## Balança impressora de etiqueta

Conforme citado na introdução, este tipo de balança não fica conectada diretamente ao PDV. Ela trabalha de forma autônoma.

Contudo, para ela funcionar, é necessário fazer uma carga de dados com as informações dos produtos. Somente assim ela conseguirá imprimir corretamente os valores na etiqueta.

Existe um aplicativo no Bimer para exportar o cadastro de produtos para um arquivo TXT. Antes de falar sobre ele, é importante verificar algumas configurações.

No **PDVAlterdataCFG**, acesse **Opções do sistema >> Código do Produto**. Caso a opção **"Exporta todos os códigos de produtos no integrador Bimer x PDV Alterdata"** esteja desmarcada, é possível selecionar quais tipos de código serão exportados.

> **Atenção!** Caso opte por definir tipos de códigos de produtos específicos para serem exportados, tenha certeza de que no cadastro dos produtos existe(m) esse(s) tipo(s) de código(s) informado(s).

> *[Imagem: tela PDVAlterdataCFG com opções de código do produto para exportação]*

Ainda no **PDVAlterdataCFG**, em **Opções do sistema >> Balança**, marque a opção **"Usa balança emissora de etiqueta de código de barras"**.

Em **Informações impressas no código de barras emitido pela balança**, selecione o padrão do sistema: **Código e peso** ou **Código e preço**.

As demais configurações devem ser preenchidas conforme modelo da balança / modelo da etiqueta.

> *[Imagem: tela de configuração de balança impressora de etiqueta no PDVAlterdataCFG]*

**Dicas:**
- Quando é **preço**, usa-se **duas casas decimais**; quando é **peso**, usa-se **três casas decimais**.
- Toda balança de etiqueta possui um software responsável por dar a carga dos dados para as balanças. Nesse software é possível definir se a etiqueta será de preço ou peso, a quantidade de casas decimais e também o tamanho do código do produto na etiqueta. Procure acessar esse software e definir um padrão semelhante ao do sistema.

---

### Exportação dos produtos

Feitas as configurações, realize a exportação dos produtos para o arquivo TXT. Para isso, utilize o módulo **`ExportadorGeralAlterdata.exe`**.

> **Observação:** este módulo não está em nenhum dos instaladores. É necessário obtê-lo em `M:\BIMER\BimerDesktop\Versao <número da versão>\<número da versão>\ArquivosAlterados`, ou solicitar ao suporte de canais caso não esteja na Matriz.

Acesse as configurações do módulo e informe:
- **Diretório padrão de exportação do ERP**
- **Tabela de preço de venda padrão para exportações** a ser considerada

> *[Imagem: tela de configurações do ExportadorGeralAlterdata com campos de diretório e tabela de preço]*

Em seguida, no menu à esquerda, na aba **Estoque**, marque a opção **Produtos para balança**. Há opções específicas para os modelos **Filizola** e **MGV**.

Selecione a empresa desejada e clique em **Exportar** para gerar o arquivo.

Em seguida, acesse o software da balança para fazer a importação do arquivo.
