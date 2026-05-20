# DifAl — Diferencial de Alíquotas — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Diferencial de Alíquotas – Conceitos](#diferencial-de-alíquotas--conceitos)
  - [Conceito até 31/12/2015](#conceito-de-diferencial-de-alíquotas-até-31122015)
  - [Conceito a partir de 01/01/2016](#conceito-de-diferencial-de-alíquotas-a-partir-de-01012016)
  - [FCP](#fcp)
  - [Forma de Cálculo do Diferencial de Alíquotas](#forma-de-cálculo-do-diferencial-de-alíquotas)
- [Alterações no Arquivo XML](#alterações-no-arquivo-xml)
- [Alterações no SPED – EFD](#alterações-no-sped--efd)
- [Alterações no Sistema Bimer](#alterações-no-sistema-bimer)
  - [Interface e Rotinas](#interface-e-rotinas)
  - [Operação](#operação)
  - [Cadastro de UF / Classificação Fiscal](#cadastro-de-uf--classificação-fiscal)
  - [CFOP](#cfop)
  - [Faturamento](#faturamento)
  - [Cálculo de ICMS](#cálculo-de-icms)
  - [Execução da Rotina](#execução-da-rotina)
  - [Cálculo sem FCP](#cálculo-sem-fcp)
- [Resumo das Alterações](#resumo-das-alterações)

---

## Diferencial de Alíquotas – Conceitos

No Brasil, há uma divisão bem clara entre **Estados "Consumidores"** e **"Estados Produtores"**. Estados menos favorecidos (Norte, Nordeste, Centro-Oeste e alguns do Sul) desenvolveram técnicas para atrair empresários, utilizando métodos de incentivos fiscais, principalmente ligados ao ICMS.

Os Estados prejudicados ("produtores") ganharam batalhas judiciais: em 2011, o STF julgou diversas ADINs, derrubando 14 leis e decretos de 7 Estados, reconhecendo que é **inconstitucional** todo e qualquer benefício fiscal em matéria de ICMS que não seja suportado por um **"Convênio ICMS"** (autorização prévia do CONFAZ). Esse posicionamento do STF continua intocado até hoje.

Foi então que se iniciou um novo capítulo na "guerra fiscal", culminando com a **EC 87/2015** (Emenda Constitucional nº 87 de 2015).

---

### Conceito de Diferencial de Alíquotas até 31/12/2015

Modalidade do ICMS apurada quando há compra para **Uso e Consumo** ou **Ativo Imobilizado**, na qual a alíquota interna do Estado do adquirente é maior em relação à alíquota utilizada na operação de compras. Aplicável a empresas **contribuintes de ICMS**.

Além de calcular o ICMS Normal, deve-se apurar também, sobre a base de cálculo, a diferença das alíquotas interestaduais.

No caso de vendas para **não contribuintes**, a empresa que vende utilizará a alíquota interna da UF de origem (não será utilizada a alíquota interestadual).

**Base legal – Constituição Federal/1988, art. 155, § 2º, VII e VIII:**

> VII – em relação às operações e prestações que destinem bens e serviços a consumidor final localizado em outro Estado, adotar-se-á:
> a) a alíquota interestadual, quando o destinatário for contribuinte do imposto;
> b) a alíquota interna, quando o destinatário não for contribuinte dele;
>
> VIII – na hipótese da alínea "a" do inciso anterior, caberá ao Estado da localização do destinatário o imposto correspondente à diferença entre a alíquota interna e a interestadual;

**Exemplo:**

A empresa Lótus LTDA. (Contribuinte de ICMS), localizada em São Paulo, adquire um sofá no Piauí por R$ 1.900,00 (em SP o mesmo produto custa R$ 2.700,00). Sobre a venda seria aplicada a alíquota de **12%** (interestadual). A empresa de SP se creditaria do ICMS normal. Porém, como a alíquota aplicada (12%) é menor que a interna de SP (18%), a legislação criou o pagamento de **Diferencial de Alíquotas**, que será recolhido no Estado do adquirente (destino) em guia própria.

---

### Conceito de Diferencial de Alíquotas a partir de 01/01/2016

A **Emenda Constitucional nº 87, de 16 de abril de 2015**, alterou a sistemática de incidência do ICMS nas vendas interestaduais para consumidores finais não contribuintes.

A partir de então:
- Nas cobranças das vendas interestaduais para consumidor final, **não há mais a utilização da alíquota interna** pela UF de origem quando o cliente não for contribuinte de ICMS;
- Somente será usada a **alíquota interestadual**;
- O diferencial de alíquotas passa a ser recolhido em **todas as movimentações interestaduais a consumidor final**, seja pelo adquirente (contribuinte) ou pelo remetente (não contribuinte).

**Partilha progressiva da arrecadação do Diferencial de Alíquotas:**

| Ano | UF Destino | UF Origem |
|-----|-----------|-----------|
| 2016 | 40% | 60% |
| 2017 | 60% | 40% |
| 2018 | 80% | 20% |
| 2019 | 100% | 0% |

**Sistema Original de Apuração:**

| Destinatário | Alíquota aplicada |
|---|---|
| Contribuintes de ICMS | Alíquota Interestadual (cobrada pelo Estado de origem) + Diferencial de alíquotas (cobrado pelo Estado de DESTINO, a cargo do adquirente) |
| NÃO Contribuintes de ICMS | Alíquota interna do Estado de origem (cobrada por este, a cargo da Empresa vendedora) |

**Sistema estabelecido pela EC 87/2015:**

| Situação | Responsável |
|---|---|
| Alíquota Interestadual | Cobrada pelo Estado de origem, a cargo da Empresa Vendedora |
| Diferencial de Alíquotas | Cobrado pela UF de Destino, a cargo do adquirente (quando Contribuinte de ICMS) ou a cargo do Alienante (quando não contribuinte) |

**Alíquotas interestaduais a serem utilizadas (conforme NT 2015/003 V.1.40):**

- **4%** — alíquota interestadual para produtos importados;
- **7%** — para os Estados de origem do Sul e Sudeste (exceto ES), destinado para os Estados do Norte, Nordeste, Centro-Oeste e Espírito Santo;
- **12%** — para os demais casos.

**Condições para aplicação do Cálculo para Não Contribuintes:**

- Venda de mercadoria Interestadual;
- Consumidor final e Não Contribuinte;
- Para empresas no regime normal, o CST deve ser: **00, 20, 40, 41 ou 60**;
- Para empresas enquadradas no Simples, o CSOSN deve ser: **102, 103, 300, 400 ou 500**.

---

### FCP

Em várias UFs são cobrados valores adicionais à alíquota de ICMS de 1 a 5% na circulação de algumas mercadorias. Este valor adicional se chama **FCP (Fundo de Combate e Erradicação da Pobreza)**, conforme autorizado pelo artigo 82, § 1°, do ADCT da Constituição Federal.

Este adicional deverá ser recolhido totalmente para a **UF de destino** da mercadoria. Estão baseadas no **Convênio ICMS 93/2015**.

**Previsão de cobrança do FCP por UF:**

| UF | Al. FCP | Base legal |
|----|---------|-----------|
| Alagoas | De 1% a 2% | Lei n° 6.558/2004 |
| Bahia | 2% | Lei nº 7.988/2001 |
| Ceará | 2% | Lei Complementar nº 37/2003 |
| Distrito Federal | 2% | Lei nº 4.220/2008 |
| Espírito Santo | 2% | Lei Complementar nº 336/2005 |
| Goiás | 2% e 5% | Lei nº 14.469/2003 |
| Maranhão | 2% | Lei nº 8.205/2004 |
| Mato Grosso | 2% | Lei Complementar nº 144/2003 |
| Mato Grosso do Sul | 2% | Lei nº 3.337/2006 |
| Minas Gerais | 2% | Lei nº 19.978/2011 |
| Paraíba | 2% | Lei nº 7.611/2004 |
| Paraná | 2% | Lei nº 18.573/2015 |
| Pernambuco | 2% | Lei nº 12.523/2003 |
| Piauí | 2% | Lei n° 5.622/2006 |
| Rio de Janeiro | De 1% a 5% | Lei nº 4.056/2002 |
| Rio Grande do Norte | 2% | Lei Complementar nº 261/2003 |
| Rio Grande do Sul | 2% | Lei nº 14.742/2015 |
| Rondônia | 2% | Lei Complementar n° 842/2015 |
| Sergipe | 2% | Lei nº 4.731/2002 |
| São Paulo | 2% | Lei n° 16.006/2015 |
| Tocantins | 2% | Lei nº 3.015/2015 |

*Acre, Amapá, Amazonas, Pará, Roraima e Santa Catarina: sem previsão de FCP.*

---

### Forma de Cálculo do Diferencial de Alíquotas

**Exemplo de cálculo do diferencial na venda para consumidor final não contribuinte:**

| Tag XML | Descrição do Campo | Valor |
|---------|-------------------|-------|
| `vBCUFDest` | Valor da base de cálculo (ICMS) na operação | R$ 1.000,00 |
| `pICMSInter` | Alíquota do ICMS interestadual | 12% |
| `pFCPUFDest` | Alíquota do FCP | 2% |
| `pICMSUFDest` | Alíquota do ICMS interna na UF de destino (sem FCP) | 17% |
| Al. ICMS Interna UF Destino com FCP | Alíquota do ICMS interna na UF de destino (com FCP) | 19% |
| `pICMSInterPart` | Alíquota do ICMS interestadual na partilha para o Estado de Destino | 40% |
| Al. ICMS Interestadual Partilha Origem | Alíquota do ICMS interestadual na partilha para o Estado de Origem | 60% |
| Vl. ICMS Origem | Valor do ICMS de operação própria no Estado de origem | R$ 120,00 |
| Vl. ICMS Destino | Valor do ICMS no Estado de destino | R$ 170,00 |
| Vl. ICMS DIFAL Destino | Valor do ICMS por Diferencial de Alíquota no Destino | R$ 50,00 |
| `vlFCPUFDest` | Valor do FCP no Estado de Destino (1000,00 × 0,02) | R$ 20,00 |
| `vlICMSUFDest` | Valor do ICMS diferencial de alíquota no Estado de destino (170,00 – 120,00 = 50,00 × 0,40) | R$ 20,00 |
| `vlICMSUFRemet` | Valor do ICMS diferencial de alíquota no Estado do remetente (50,00 – 20,00) | R$ 30,00 |

> **Observação:** As tags destacadas sem prefixo não existem no XML. Foram utilizadas para detalhar melhor o cálculo.

**Regra de partilha do diferencial:**

- 2016: 40% para o Estado de destino e 60% para o Estado de origem;
- 2017: 60% para o Estado de destino e 40% para o Estado de origem;
- 2018: 80% para o Estado de destino e 20% para o Estado de origem;
- 2019: 100% para o Estado de destino.

**Exemplo do arquivo XML:**

```xml
<prod>
  ...
  <vProd>1.000,00</vProd>
  <vUnTrib>1.000,00</vUnTrib>
  ...
  <imposto>
    <ICMS>
      <ICMS00>
        ...
        <vBC>1.000,00</vBC>
        <pICMS>12,00</pICMS>
        <vICMS>120,00</vICMS>
        ...
      </ICMS00>
    </ICMS>
    <ICMSUFDest>
      <vBCUFDest>1.000,00</vBCUFDest>
      <pFCPUFDest>2,0000</pFCPUFDest>
      <pICMSUFDest>17,0000</pICMSUFDest>
      <pICMSInter>12,0000</pICMSInter>
      <pICMSInterPart>40,0000</pICMSInterPart>
      <vFCPUFDest>20,00</vFCPUFDest>
      <vICMSUFDest>20,00</vICMSUFDest>
      <vICMSUFRemet>30,00</vICMSUFRemet>
    </ICMSUFDest>
  </imposto>
</prod>
...
<ICMSTot>
  ...
  <vFCPUFDest>20,00</vFCPUFDest>
  <vICMSUFDest>20,00</vICMSUFDest>
  <vICMSUFRemet>30,00</vICMSUFRemet>
  ...
</ICMSTot>
```

---

## Alterações no Arquivo XML

### Estrutura – Grupo de Tributação do ICMS para a UF de destino

Foi criado um novo grupo de informações no item para identificar o ICMS Interestadual nas operações de venda para consumidor final, atendendo ao disposto na **Emenda Constitucional 87 de 2015**.

**ICMS para a UF de destino:**

As principais alterações incluem: alíquotas interestaduais envolvidas, percentual de partilha do ICMS Diferencial, Valor do FCP (Fundo de Combate a Pobreza) e valor do ICMS interestadual do Remetente.

> *[Imagem: estrutura do grupo ICMSUFDest no XML]*

### Total da Nota Fiscal

Nos totais da NF-e, temos o valor do ICMS interestadual para UF destino e valor do ICMS interestadual para UF remetente.

> *[Imagem: totais da NF-e com campos de ICMS interestadual para UF destino e remetente]*

### Regras de Validação

Foram realizadas alterações nas Regras de Validação da NF-e. A ausência de informações sobre o DifAl acarreta em **rejeição da NF-e**.

**Identificação do Destinatário:**

Caso o destinatário esteja como **ISENTO** e a UF não permitir, a nota será rejeitada.

> *[Imagem: tabela de regras de validação para identificação do destinatário]*

**Item / Tributo: ICMS:**

Caso as tags apresentadas não possuam o conteúdo esperado, a NF-e será rejeitada.

> *[Imagem: tabela de regras de validação para tributo ICMS nos itens]*

**Item / ICMS para a UF de Destino:**

Caso as informações do ICMS da UF de destino estejam diferentes do padrão exigido pela SEFAZ, a NF-e será rejeitada.

> *[Imagem: tabela de regras de validação para ICMS da UF de destino]*

**Total da Nota Fiscal:**

Caso o valor do ICMS da UF de Origem, da UF de Destino ou do FCP esteja diferente do valor relativo aos itens da NF-e, a Nota Fiscal será rejeitada.

> *[Imagem: tabela de regras de validação para totais da NF-e]*

**DANFE:**

Não haverá alteração no layout do DANFE, mas as empresas remetentes devem informar, no campo de **"Informações Complementares"**, os valores descritos no grupo de tributação do ICMS para a UF de destino.

---

## Alterações no SPED – EFD

O **Ato Cotepe 44/2015** estabelece modificações no layout da EFD ICMS/IPI com a criação dos seguintes registros:

**Bloco C:**
- **C101** — Informação complementar dos documentos fiscais quando das operações interestaduais destinadas a consumidor final não contribuinte – EC 87/15

**Bloco D:**
- **D101** — Informação complementar dos documentos fiscais quando das prestações interestaduais destinadas a consumidor final não contribuinte – EC 87/15

**Bloco E:**
- **E300** — Período de Apuração do ICMS Diferencial de Alíquota – UF Origem/Destino EC 87/15
- **E310** — Apuração do ICMS Diferencial de Alíquota – UF Origem/Destino EC 87/15
- **E311** — Ajuste/Benefício/Incentivo da Apuração do ICMS Diferencial de Alíquota – UF Origem/Destino EC 87/15
- **E312** — Informações Adicionais dos Ajustes da Apuração do ICMS Diferencial de Alíquota – UF Origem/Destino EC 87/15
- **E313** — Informações Adicionais da Apuração do ICMS Diferencial de Alíquota – UF Origem/Destino EC 87/15 – Identificação dos Documentos Fiscais
- **E316** — Obrigações do ICMS recolhido ou a recolher – Diferencial de Alíquota – UF Origem/Destino EC 87/15

---

## Alterações no Sistema Bimer

O sistema Bimer foi modificado para realizar corretamente o cálculo do Diferencial de Alíquotas, conforme nova legislação.

### Interface e Rotinas

#### Operação

No cadastro de operações do sistema Bimer (**Configurador Bimer >> Estoque >> Operação >> Dados**) há os campos:

- **"Operação para Consumidor Final"**
- **"Consumidor Final Contribuinte"**

Quando houver venda para consumidor final **NÃO Contribuinte**, o diferencial de alíquotas será partilhado entre a UF de Origem e a UF de Destino. Quando a venda for para um **contribuinte**, somente o Estado de destino receberá o diferencial.

**A configuração deve obedecer aos seguintes critérios:**

- Calcular ICMS;
- Estar com a opção **"Venda/Saída para Consumidor Final"** marcada;
- Estar com a opção **"Consumidor Final Contribuinte"** desmarcada;
- Demais informações não influenciam na operação.

> *[Imagem: cadastro de operação com campos Operação para Consumidor Final e Consumidor Final Contribuinte destacados]*

---

#### Cadastro de UF / Classificação Fiscal

O **Cadastro de UF** (**Configurador Bimer >> Geral >> Endereço >> UF**) foi modificado para incluir o campo de **FCP (Fundo de Combate a Pobreza)** para o cálculo do Diferencial de Alíquotas.

- Informe a alíquota de ICMS cheia no campo **Al. ICMS interna** e no campo ao lado, informe a **alíquota da FCP**.
- Quando não houver alíquota de FCP, basta informar a alíquota de ICMS e deixar o campo de FCP em branco.

> **Atenção:** A alíquota de FCP só poderá ser de até **2%** (conforme orientação da NT). Caso o usuário informe uma alíquota superior a 2%, será exibido um aviso.

> **Importante:** O sistema obedece uma hierarquia para consultar a Alíquota Interna de ICMS:
>
> 1. **Cadastro de Classificação Fiscal** (Configurador Bimer >> Estoque >> Tributos >> Classificação Fiscal)
> 2. **Cadastro de UF** (Configurador Bimer >> Geral >> Endereço >> UF)
>
> A alíquota de ICMS interna somente será considerada no Cadastro de UF caso não tenha alíquota interna informada na Classificação Fiscal.

> *[Imagem: cadastro de UF com campos Al. ICMS interna e Al. FCP preenchidos]*

---

#### CFOP

A partir da versão **7.01.00.00**, para que haja o cálculo de Difal, será necessário em (**Configurador Bimer >> Estoque >> Tributos >> CFOP**) marcar a opção **"Calcula DIFAL"**.

A partir da versão **11.01.03.00**, é possível definir também se o tipo de base de cálculo para o DIFAL será **simples ou dupla**.

A base dupla surge no DIFAL porque o estado de destino recebe uma parte da diferença entre a alíquota interna do estado de destino e a alíquota interestadual do estado de origem, além da cobrança da alíquota interna no estado de origem. A escolha entre simples ou dupla base de cálculo depende da natureza da transação e do envolvimento de diferentes alíquotas estaduais.

> *[Imagem: cadastro de CFOP com opção Calcula DIFAL e tipo de base marcados]*

---

#### Faturamento

Foi criado no módulo **Faturamento** e **Pedido de Venda** o campo referente ao **ICMS Destino**, que demonstra o ICMS do destino com o valor do Diferencial juntamente ao valor do FCP (se houver).

---

#### Cálculo de ICMS

O cálculo de ICMS permanece inalterado. É importante somente preencher corretamente o **ICMS interestadual**, uma vez que este será usado para realizar o cálculo do Diferencial de Alíquotas.

---

#### Execução da Rotina

Ao gerar um Pedido de Venda ou Nota no Faturamento, os dados serão apresentados com o campo **ICMS** (ICMS interestadual) e o campo **ICMS Destino**.

> *[Imagem: tela do Faturamento com campos ICMS e ICMS Destino preenchidos]*

**Exemplo de cálculo com FCP (Al. UF SP = 18%, FCP = 2%):**

```
Valor do Produto: R$ 1.000,00
ICMS Interestadual: 1.000,00 * 12% = R$ 120,00

Cálculo de ICMS Destino:
Al. UF SP (ICMS interno Destino) 18% - 2% FCP = 16%
Al. Cálculo de ICMS 12% (Interestadual)
Diferencial: 16% - 12% = 4%
Vl. Diferencial: 1.000,00 * 4% = R$ 40,00
Al. Partilha: 40,00 * 20% (Alíquota da Partilha Destino [2015]) = R$ 8,00
Vl. FECP: 1.000,00 * 2% (FCP calculado separadamente) = R$ 20,00
Total ICMS Dest SP: R$ 20,00 (FCP) + R$ 8,00 (Partilha 20% para Destino) = R$ 28,00
```

---

#### Cálculo sem FCP

Caso o Estado de destino não tenha FCP informado, deixe em branco o campo referente ao FCP no cadastro de UF.

**Exemplo de cálculo sem FCP (Al. UF SP = 18%, sem FCP):**

```
Valor do Produto: R$ 1.000,00
ICMS Interestadual: 1.000,00 * 12% = R$ 120,00

Cálculo de ICMS Destino:
Al. UF SP (ICMS interno Destino) 18%
Al. Cálculo de ICMS 12% (Interestadual)
Diferencial: 18% - 12% = 6%
Vl. Diferencial: 1.000,00 * 6% = R$ 60,00
Al. Partilha: 60,00 * 20% (Alíquota da Partilha Destino [2015]) = R$ 12,00
Al. Partilha UF Origem: 60,00 * 80% (Alíquota da Partilha Origem [2015]) = R$ 48,00
```

---

## Resumo das Alterações

Alterações relacionadas à rotina de ICMS em Operações Interestaduais de Vendas a Consumidor Final (DIFAL) — Nota Técnica 2015/003:

**Faturamento:**
- Disponibilizado o novo campo **'ICMS destino'** no Faturamento, na tela de edição das Notas Fiscais (não apresentado no DANFE).
- Adicionados os valores do grupo da tag `'ICMSUFDest'` no campo de "Informações Complementares" da NF-e, conforme NT 2015.003 v 1.5.
- Realizada a alteração na rotina de cálculo do sistema para operações interestaduais para consumidor final não contribuinte a partir de 01/01/2016.
- Implementadas regras de validação conforme NT_2015_003_v150: N1620, NA0910, NA0920, E16a30, N1270, N1280, N12a70.

**FatDevolucao / FatPDV:**
- Para que seja possível devolver os valores calculados de ICMS para consumidor final não contribuinte, a operação de devolução precisa possuir a opção **'operação para consumidor final'** marcada.

**FatPedido / FatPrePedido:**
- Implementado ajuste para que o valor do ICMS destino seja calculado quando necessário no pedido de venda e na geração de nota fiscal a partir de pedido.

**Configurador Bimer >> Geral:**
- Disponibilizado o campo **'al. Fcp'** (Fundo de Combate a Pobreza) com percentual máximo de 2%, em **Configurador Bimer >> Geral >> Endereço >> Ufs**.

**Configurador Bimer >> Estoque:**
- A opção **'Operação para consumidor final'** ficou habilitada para operações do tipo venda, saída e devolução.
- Criada opção **"Calcula partilha do ICMS cobrado anteriormente por substituição tributária"** para o cálculo da partilha do ICMS nos casos em que for utilizado CST 60.

**MANAGER:**
- Incluídos campos `VlBaseICMSInterestadual`, `VlBaseICMSUFDestino`, `AlFCPUFDestino`, `VlFCPUFDestino`, `AlICMSUFDestino`, `VlICMSUFDestino`, `AlICMSInterestadual`, `AlICMSInterestadualPartilha` e `VlICMSUFRemetente` nas tabelas `PedidoDeVendaItem`, `LoteDocItem`, `DocumentoItemValores` e `LoteDocDevolucaoItem`.
- Adicionado o campo `AlFCP` na tabela `UF`.
