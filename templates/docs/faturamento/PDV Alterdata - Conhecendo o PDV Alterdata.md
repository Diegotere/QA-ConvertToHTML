# PDV Alterdata — Conhecendo o PDV Alterdata e Requisitos — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
  - [O que é o PDV?](#o-que-é-o-pdv)
  - [Documento Fiscal](#documento-fiscal)
  - [Quem deve trabalhar com PDV](#quem-deve-trabalhar-com-pdv)
- [Conhecendo a NFC-e](#conhecendo-a-nfc-e)
  - [Modelo Operacional](#modelo-operacional)
  - [Certificado Digital](#certificado-digital)
  - [DANFE NFC-e](#danfe-nfc-e)
- [PDV Alterdata](#pdv-alterdata)
  - [Pré-requisitos](#pré-requisitos)

---

## Introdução

### O que é o PDV?

**PDV** é uma sigla que significa **Ponto de Venda** — o local onde as vendas são concretizadas. Muitas empresas chamam o PDV de *Checkout*, por se tratar do momento final, quando a venda é formalizada através da emissão de documento fiscal.

Algumas empresas, em vez de utilizar o faturamento para emitir Notas Fiscais de venda, utilizam o PDV para esse objetivo. A vantagem é que a venda ocorre de maneira muito mais ágil.

Os PDVs são muito utilizados por comércios (lojas, supermercados, farmácias, etc.) que vendem para o consumidor final (normalmente pessoas físicas).

**Modelos operacionais:**

- **Autoatendimento** — Utilizado normalmente por supermercados, lojas de departamento e similares. O cliente escolhe sua mercadoria nas prateleiras e vai direto ao caixa, onde a venda é realizada.
- **Lojas com vendedores** — Comumente utilizado por lojas de calçados, lojas de móveis e similares. O cliente é atendido por um vendedor, que emite um pedido de vendas. O cliente se desloca ao caixa com o pedido, onde a venda é finalizada.

### Documento Fiscal

Assim como acontece com outros tipos de venda, as operações feitas por PDV precisam emitir um comprovante fiscal. Ao finalizar uma venda, o PDV deve emitir esse documento fiscal.

O tipo de documento fiscal varia de acordo com cada Estado. Atualmente existem 4 modalidades:

- **NFC-e (Nota Fiscal ao Consumidor Eletrônica)** — Similar à NF-e, é um documento fiscal eletrônico para vendas ao consumidor final.
- **Cupom Fiscal (CF)** — Documento impresso em uma impressora fiscal chamada de **ECF** (Emissor de Cupom Fiscal), através de um Programa Aplicativo Fiscal (**PAF-ECF**).
- **Cupom Fiscal Eletrônico (CF-e) emitido pelo SAT** — Documento de existência meramente eletrônica, emitido pelo equipamento **SAT** (Sistema Autenticador e Transmissor). Utilizado somente pelo estado de São Paulo.
- **Cupom Fiscal Eletrônico (CF-e) emitido pelo MF-e** — Documento eletrônico emitido pelo **Módulo Fiscal Eletrônico (MF-e)**. Utilizado pelo estado do Ceará.

> **Observação:** No portal UCA você encontrará manuais com informações detalhadas para o PDV trabalhar com as modalidades PAF-ECF, MF-e e SAT. Este manual aborda especificamente o PDV trabalhando com NFC-e.

### Quem deve trabalhar com PDV

As regras variam em cada Estado. Em geral, são obrigadas:

- Empresas do ramo varejista
- Empresas que fazem venda direta ao consumidor final

Algumas empresas podem ser dispensadas da obrigatoriedade de emissão do Cupom Fiscal se o seu faturamento anual for inferior a um valor mínimo estipulado pelo Estado.

---

## Conhecendo a NFC-e

O objetivo de uma NFC-e é documentar operações comerciais de venda presencial ou venda para entrega em domicílio a consumidor final (pessoa física ou jurídica), em operação dentro do Estado, e sem geração de crédito de ICMS ao adquirente.

A **Nota Fiscal de Consumidor Eletrônica (NFC-e)** é uma modalidade totalmente eletrônica para substituir documentos fiscais em papel utilizados no varejo, como Cupom Fiscal emitido por ECF e Nota Fiscal de Venda a Consumidor (modelo 2). Reduz custos de obrigações acessórias aos contribuintes (como aquisição de impressoras fiscais) e possibilita o aprimoramento do controle fiscal pelas Administrações Tributárias.

O Projeto NFC-e propõe o estabelecimento de um padrão nacional de documento fiscal eletrônico, baseado nos padrões técnicos da Nota Fiscal Eletrônica modelo 55, adequado às particularidades do varejo.

### Modelo Operacional

O modelo operacional para emissão de NFC-e é o mesmo de uma NF-e:

1. A empresa gera um arquivo XML contendo os dados da Nota;
2. A empresa assina digitalmente o arquivo XML através de um Certificado Digital;
3. A empresa envia o arquivo XML assinado para a SEFAZ da UF na qual está localizada;
4. A SEFAZ Estadual analisa o arquivo XML enviado;
5. Se a estrutura e os dados estiverem corretos, a SEFAZ disponibiliza um protocolo de autorização. Se houver inconsistência, o arquivo é rejeitado com o motivo da rejeição;
6. A empresa recebe o retorno da SEFAZ (Autorizado ou Rejeitado);
7. Se positivo, a empresa emite a NFC-e e finaliza a venda. Se negativo, corrige as informações e reenvia.

> **Observação:** Assim como na NF-e, existem outros retornos que a SEFAZ pode dar além de autorizado ou rejeitado.

### Certificado Digital

O **Certificado Digital** é uma identidade eletrônica para as empresas — funciona como um CNPJ eletrônico. Pode ser utilizado para assinar digitalmente documentos ou acessar serviços do governo, servindo como garantia de que a empresa que emitiu uma NFC-e existe realmente.

Para a emissão de NFC-e, a empresa pode escolher entre:

- **A1** — Arquivo instalado no próprio computador onde está o PDV.
- **A3** — Armazenado em cartão ou token, dependendo de um leitor ligado ao computador para acessá-lo.

### DANFE NFC-e

Assim como na NF-e, existe um documento que pode ser impresso como representação gráfica da NFC-e: o **DANFE NFC-e** (Documento de Acompanhamento da Nota Fiscal Eletrônica ao Consumidor).

O padrão do DANFE NFC-e difere do DANFE da NF-e:

- Pode ser impresso ou apenas enviado por e-mail para o cliente;
- Se impresso, deverá ter a opção de sair completo ou resumido;
- Deve conter **QR Code** que permita ao consumidor consultar a validade da NFC-e na base da SEFAZ;
- Pode ser impresso em qualquer tipo de impressora capaz de imprimir o QR Code.

> *[Imagem: exemplo de DANFE NFC-e com QR Code]*

O **QR Code** é um código de barras em formato específico que permite ao consumidor conferir a validade fiscal do documento e os dados da compra através do site da Secretaria da Fazenda ou de um smartphone com o aplicativo da SEFAZ instalado.

---

## PDV Alterdata

O **PDV Alterdata** é o módulo utilizado pelo Bimer para realização de vendas diretas ao consumidor. Sua criação é de responsabilidade do setor de desenvolvimento do Shop, mas se integra perfeitamente ao Bimer.

Inicialmente desenvolvido para atender as necessidades do PAF-ECF, com o surgimento da NFC-e sua emissão foi incluída no módulo. Por isso, ele possui algumas obrigatoriedades.

Entre as obrigatoriedades está a de trabalhar de forma **OFF Line** em relação à integração com a base de dados da retaguarda. Cada terminal do PDV possui uma base de dados própria no computador onde está instalado.

A integração entre a base de dados do Bimer e a base de dados de cada terminal do PDV é feita por exportação/importação/carga de dados:

- **Base do Bimer** = SQL Server
- **Bases dos PDVs** = Arquivos DAT

No processo de integração são utilizados: o **Integrador Bimer PDV Alterdata**, os **Webservices** e o **Concentrador**.

**Fluxo de dados:**

- **Bimer → PDV Alterdata:** dados da empresa, cadastro de clientes, cadastro de produtos, formas de pagamento, prazos de negociação, etc.
- **PDV Alterdata → Bimer:** vendas realizadas, movimento de caixa, recebimentos de títulos, cadastro de novos clientes, etc.

### Pré-requisitos

- Versão do PDV Alterdata igual ou superior a **6.1353.9**
- Versão do Bimer igual ou superior a **5.18.00.00** (recomenda-se atualizar para a versão atual de trabalho liberada pelo Suporte Bimer)
- Versão do **Integrador Bimer x PDV Alterdata** igual à versão do Bimer
- Versão do **Concentrador do PDV Alterdata** igual à versão do Bimer
- Empresa emitente habilitada junto à SEFAZ para emissão de NFC-e
- Impressora não fiscal (térmica ou laser) ou gerador de PDF na máquina do PDV Alterdata

> **Observação:** Modelos de impressoras não fiscais homologados: Bematech MP-4200 TH, Daruma, Epson TM-T20 e Epson TM-T70.

- Certificado digital instalado em cada máquina do PDV Alterdata
- **.NET Framework 4.0** ou superior
