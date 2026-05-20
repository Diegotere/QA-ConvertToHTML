# PDV Alterdata — Configurações Retaguarda — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Configurações no Bimer](#configurações-no-bimer)
  - [Cadastro da Empresa](#cadastro-da-empresa)
  - [Cadastro de Cidades](#cadastro-de-cidades)
  - [Cadastro de Usuários](#cadastro-de-usuários)
- [PDVAlterdataCfg](#pdvalterdatacfg)
  - [Opções](#opções)
  - [Aba Geral](#aba-geral)
  - [Aba Validação](#aba-validação)
  - [Aba Operação](#aba-operação)
  - [Aba Financeiro](#aba-financeiro)
  - [Aba Cliente](#aba-cliente)
  - [Aba Venda](#aba-venda)
- [Cadastro de Produtos](#cadastro-de-produtos)
- [Tipo de Documento e Operação para NFC-e](#tipo-de-documento-e-operação-para-nfc-e)

---

## Configurações no Bimer

Antes de efetuar o procedimento de instalação do Web Service, Concentrador e Integrador — responsáveis pela integração do sistema Bimer com o PDV Alterdata — é necessário realizar algumas configurações no sistema para que a integração ocorra de forma correta.

### Cadastro da Empresa

No cadastro da empresa, confirme os dados de endereço, principalmente o **Código no IBGE da Cidade**. Na aba **CNAE**, informe o **Código Nacional de Atividade Econômica** principal da empresa.

Na aba **Emissão de notas**, marque a opção **Possui NFC-e**.

> *[Imagem: aba Emissão de notas com opção "Possui NFC-e" marcada]*

Ao marcar essa opção, será habilitada a aba **NFC-e**. Nela configure:

- **Ambiente de emissão**
- **Tipo de impressão**
- **Tipo de certificado**
- **Limite de valores**
- **Códigos fiscais de operação para venda**
- **Informações do Token** (o Código de Identificação equivale ao CSC)

> **Observação 1:** Os dados contidos nas imagens são apenas exemplos usados em uma base interna e não devem ser interpretados como padrão. Estas informações devem ser consultadas com o contador da empresa, visto que a Alterdata não se responsabiliza por esses dados.

> **Observação 2:** A partir da versão **9.07.02.00** do sistema, é possível integrar o PDV Alterdata com o **NF-Stock**, fazendo com que o sistema envie automaticamente o XML das vendas.

**Detalhamento dos campos da aba NFC-e:**

- **Ambiente de homologação NFC-e** — Faz com que o XML gerado no PDV Alterdata seja enviado para um Web Service de testes da SEFAZ.
- **Certificado NFC-e** — Define qual o tipo de certificado digital será utilizado para a assinatura dos XMLs de NFC-e e envio para a SEFAZ. O certificado digital será selecionado no próprio PDV Alterdata.
- **Limite de valores** — A legislação estipulou o valor máximo de R$ 200.000,00 para uma NFC-e. Se o valor for inferior a R$ 10.000,00, a identificação do cliente não é obrigatória (a não ser que o cliente exija ou haja entrega em domicílio). O sistema não impedirá o envio do XML caso o valor seja superior ao limite máximo, porém emitirá um aviso ao usuário.

> **Atenção:** NFC-es emitidas desrespeitando os valores estipulados como limite poderão ser rejeitadas pela SEFAZ.

- **Token NFC-e** — Código de segurança de 36 caracteres alfanuméricos, de conhecimento apenas da Secretaria da Fazenda do Estado do emitente e do próprio contribuinte. Garante a autoria do DANFE NFC-e e do respectivo QR-Code. Uma empresa pode ter, simultaneamente, até 2 tokens válidos por UF em produção.

**Padrão de formação de Tokens para ambiente de homologação:**

```
Token 1 → CNPJ da empresa + ano + IdToken (número sequencial)
Token 2 → CNPJ da empresa + ano + IdToken (número sequencial)
```

Exemplo para empresa com CNPJ `43.708.379/0064-85`:
```
Token 1 com ID 000001 → 43708379 20140001
Token 2 com ID 000002 → 43708379 20140002
```

**Aba Emissão de notas >> NFC-e >> CFOP:** informe os Códigos Fiscais de Operação que devem ser utilizados pelo PDV Alterdata para emissão de NFC-e.

**Aba Emissão de Notas >> NFC-e >> DANFE:** escolha o formato de impressão. Existem 3 opções:

1. **Completo** — O DANFE NFC-e é impresso com as informações completas da capa do documento e dos itens.
2. **Ecológico** — São impressos apenas os dados básicos do DANFE, sem os itens da venda. Formato simplificado para economia de papel.
3. **Solicitar o tipo de impressão a cada venda** — O usuário poderá escolher o tipo de impressão (completo ou ecológico) no momento em que finalizar a venda no PDV Alterdata.

**Aba Emissão de notas >> E-mail:** preencha com os dados do cliente para envio de e-mails (consulte o responsável de TI da empresa). Se configurada, sempre que uma venda for finalizada no PDV Alterdata, será apresentada uma tela pedindo o endereço de e-mail do destinatário.

### Cadastro de Cidades

Além do cadastro da empresa, verifique em **Configurador Bimer >> Geral >> Endereço >> Cidades** se as cidades estão com o **código do IBGE** preenchido corretamente.

### Cadastro de Usuários

Os usuários que poderão utilizar o PDV Alterdata são exportados do Bimer. É preciso dar acesso ao módulo **PDV Alterdata (Offline)** para os usuários que trabalharão com ele. Ao dar acesso a esse módulo, é habilitada uma nova aba no cadastro dos usuários chamada **Spice/PDV Alterdata**.

Nessa aba configure:

- **Acesso ao Spice / PDV Alterdata bloqueado** — Marque apenas se desejar bloquear temporariamente o acesso desse usuário ao PDV, sem retirar o módulo do perfil (o que afetaria todos os usuários com o mesmo perfil).
- **Senha e Confirmar senha** — O PDV Alterdata não utiliza a senha padrão do usuário. Deve ser definida uma senha específica para esse acesso. As senhas podem ser iguais, mas os campos devem ser atualizados individualmente.
- **Desconto máximo** — Percentual máximo de desconto que o usuário poderá conceder em uma venda.

> **Observação:** O executável do PDV Alterdata fica disponível em `C:\Program Files (x86)\Alterdata\PDV Alterdata` somente após a sua instalação. Por isso, ao incluir o produto no perfil do usuário, ele ficará com X na cor vermelha.

É necessário também definir quais usuários terão acesso aos módulos de configurações do PDV no Bimer. No perfil desses usuários devem ser incluídos os módulos:
- **Configurador do FatPDV** (`FatPDVCfg.exe`)
- **Configurador do PDV – Alterdata** (`PDVAlterdataCfg.exe`)

---

## PDVAlterdataCfg

O **Configurador do PDV Alterdata** (`PDVAlterdataCfg.exe`) é responsável pela definição de como o Bimer se integrará ao PDV Alterdata e pelas tabelas utilizadas nessa integração.

> **Atenção:** A versão do `PDVAlterdataCfg.exe` deve ser sempre igual à versão do Bimer.

O `PDVAlterdataCfg.exe` não vem no instalador do Bimer. Ele fica disponível junto com os instaladores do PDV em `M:\BIMER\IntegracaoBimer_PDVAlterdata\<versão>`. Analistas externos devem solicitar os instaladores ao suporte de canais Bimer. O arquivo deve ser colocado em `C:\Program Files (x86)\Alterdata\ERP`.

> **Observação:** No Configurador do PDV Alterdata existe o cadastro da tabela de terminais, porém um terminal de PDV só aparecerá nessa tabela após ser acessado pela primeira vez.

### Opções

#### Aba Geral

Contém informações obrigatórias para integração:

- **Empresa Padrão** — Para efeitos de integração, é preciso informar uma empresa como padrão. Isso não significa que somente essa empresa será integrada ao PDV — todas as empresas existentes no Bimer podem utilizar o PDV.
- **Preço padrão para Venda** — Define o valor que cada produto terá ao iniciar uma venda no PDV.

> **Atenção:** O sistema só exportará do Bimer para o PDV os produtos que possuírem essa tabela de preços em seu cadastro.

- **Preço alternativo para Venda** — Tabela de preços opcional para a venda.

> **Atenção:** Na parte inferior da aba Geral existe a configuração **"Exportar para a base de integração somente produtos que possuam obrigatoriamente preço padrão e preço alternativo"**. Marcando essa opção, o sistema obrigará a inclusão da tabela de preço alternativa no cadastro do produto para que ele possa ser exportado.

- **Forma de pagamento para nota fiscal modelo 2 e modelo 55** — Forma de pagamento utilizada quando for necessário emitir NF em um dos modelos fiscais citados. Deve ser uma forma de pagamento cadastrada com o tipo **"Vale crédito"**.
- **Forma de pagamento padrão para movimentos de abertura / Sangria / Suprimento / Bonificação** — Por padrão é dinheiro, mas a empresa pode optar por outros tipos.

As opções da parte inferior da aba Geral são opcionais. Porém, é recomendável que a opção **"solicitar a rede adquirente, o número sequencial único e a atualização de operações com cartão"** esteja marcada, devido à integração do **Bimer Conciliare** (Conciliador de cartões de crédito e débito).

#### Aba Validação

Na subaba **Produto**, defina o padrão para:

- **Permitir editar desconto no PDV Alterdata**
- **Permitir editar quantidade / peso no PDV Alterdata**

Há também a configuração **"Considerar apenas os itens sem desconto unitário para a base de cálculo do desconto Global"**. O **Desconto Global** refere-se ao desconto dado sobre o valor total da venda, não em um item específico.

**Exemplo:**

Em uma venda com 3 itens, onde 2 receberam desconto unitário:
- Item 01 — Valor unitário R$ 6,50, 10% de desconto → R$ 5,85
- Item 02 — Valor unitário R$ 3,90, 10% de desconto → R$ 3,51
- Item 03 — Valor unitário R$ 5,20, sem desconto

Valor total da venda: R$ 14,56. No fechamento é dado um desconto global de 15%.

- **Com a configuração marcada:** o desconto global será aplicado somente sobre R$ 5,20 (Item 03).
- **Com a configuração desmarcada:** o desconto global será aplicado sobre R$ 14,56 (todos os itens).

#### Aba Operação

Informações das operações utilizadas para gerar documentos e realizar movimentações no Bimer. Mesmo que a empresa trabalhe somente com NFC-e, o Configurador obriga que todas as operações sejam preenchidas.

- **Operação para Cupom Fiscal** — Operação de venda com tipo de documento configurado com Modelo Fiscal (ICMS) **2D Cupom Fiscal**.
- **Operação para documento SAT** — Operação de venda com tipo de documento configurado com Modelo Fiscal (ICMS) **59 Cupom Fiscal Eletrônico**.
- **Operação para nota fiscal modelo 2** — Operação de vendas com Modelo Fiscal (ICMS) para NF modelo 02 (preenchida manualmente, em estados que ainda permitem).
- **Operação para nota fiscal eletrônica** — Operação de venda com tipo de documento configurado com Modelo Fiscal (ICMS) **55 Nota Fiscal Eletrônica**.
- **Operação para cupom fiscal cancelado antes da finalização da venda** — Operação de venda que não atualize estoque e não atualize financeiro, com tipo de documento Modelo Fiscal (ICMS) **2D Cupom Fiscal**. Pode ser o mesmo da Operação para Cupom Fiscal.
- **Operação para devolução de venda gerada no PDV Alterdata** — Operação do tipo devolução de vendas, que não atualize estoque e não atualize financeiro, com tipo de documento Modelo Fiscal (ICMS) **55 Nota Fiscal Eletrônica**.
- **Operação para devolução de venda gerada pelo plugin troca/devolução offline no PDV Alterdata** — Operação do tipo devolução de vendas, que **atualize estoque**, não atualize financeiro, não "influencie no custo médio" e não esteja configurada para integração fiscal. O tipo de documento pode ser o mesmo da Operação para Cupom Fiscal.

> **Atenção:** O padrão de configurações sobre cálculo de impostos deve ser visto com o contador da empresa.

#### Aba Financeiro

Na subaba **Contas a receber**, informe o **"Tipo de baixa para títulos em dinheiro"**, para que os títulos referentes às vendas com essa forma de pagamento já sejam criados baixados no Contas a Receber.

A aba **Índice técnico de produção** é utilizada quando a empresa faz venda de produtos compostos, para definir a operação que o sistema utilizará para fazer a entrada do produto composto no estoque do Bimer quando ele for vendido no PDV Alterdata, e a saída dos produtos de composição.

#### Aba Cliente

Informe uma **pessoa padrão** que o sistema utilizará quando em uma venda não houver a identificação do cliente.

> A pessoa informada deve ter o endereço com a mesma UF do endereço da empresa. Pode ser o mesmo endereço em ambos.

Caso haja mais de uma empresa trabalhando com PDV e para cada empresa uma pessoa específica, é possível configurar na área **"Cliente Padrão por empresa"**.

Nessa aba existe também a configuração **"Exportar somente clientes ativos (PDV Alterdata / Spice) na exportação de dados"**.

#### Aba Venda

- **Desconto sacolas plásticas** — Para empresas que estimulam a diminuição no consumo de sacolas plásticas, concedendo descontos aos clientes que não as utilizam. Informe o valor do desconto e a quantidade mínima de produtos comprados para que haja a concessão.

  *Exemplo: a cada 10 itens comprados, o cliente ganha R$ 0,05 de desconto no total da compra.*

- **Inibir a seleção da forma de pagamento para TEF dedicado (SiTEF)** — Com essa opção marcada, no fechamento de uma venda, quando o usuário selecionar **"Cartão"** como recebimento, não será exibida a tela de seleção da forma de pagamento, mas somente a tela do TEF.

> **Atenção:** Para que essa configuração tenha efeito, as formas de pagamento do tipo cartão cadastradas no Bimer têm que estar configuradas como **SiTEF** no Configurador Bimer.

> **Observação:** As configurações dessa aba não são obrigatórias.

---

## Cadastro de Produtos

Após analisar as configurações iniciais da integração, é fundamental verificar alguns pontos no módulo de cadastro de produtos que influenciarão diretamente na exportação dos produtos do Bimer para o PDV Alterdata.

**Aba Identificação:**
- Deve haver 01 código marcado como **principal**.
- O produto deve estar com a **unidade de medida** preenchida.

**Aba Impostos:**
- Devem estar preenchidas corretamente as informações da **tabela de cálculo do ICMS** e a **Classificação Fiscal** do produto.
- Se o produto precisar ser vendido com CFOP diferente do padrão, informe-o nos campos: **CFOP: Dentro do estado**, **Fora do Estado**, **Devolução dentro do estado**, **Devolução fora do estado**. Para que o sistema use o CFOP específico, acesse **PDVAlterdataCfg.exe >> Ferramentas >> Opções >> aba Geral** e marque a opção **"Exportar CFOP do cadastro do produto"**.

**Aba Empresas:**
- Além das empresas que podem vender o produto, deve estar informada a **tabela de preços padrão** indicada no Configurador do PDV Alterdata.
- Se houver tabela de preços alternativa obrigatória, ela também deve estar inserida no cadastro do produto.
- Clique duas vezes sobre a empresa para verificar se o produto está **ativo para venda**.

**Validação de exportação:**

No rodapé da tela existe a opção **"Validar exportação PDV Alterdata"**. Clicando sobre ela, o sistema apresentará uma tela com as inconsistências que impedirão que o produto seja exportado para o PDV.

---

## Tipo de Documento e Operação para NFC-e

Quando se trabalha com NFC-e, cada terminal possuirá **série e número sequencial específicos**. Não se pode usar o mesmo número de série para terminais diferentes.

Isso ocorre porque, assim como na NF-e, o número do documento é definido na hora em que ele é emitido, e a Receita Federal não permite que haja 2 documentos com mesma série, número e chave de acesso. Em uma loja com mais de um terminal realizando vendas simultaneamente, corre-se o risco de utilizarem o mesmo número — por isso cada terminal tem sua série e sequência numérica própria.

O sistema criará **automaticamente** as operações e tipos de documento para cada terminal no momento em que houver a importação dos documentos gerados por cada um. Dentro deste Tipo de Documento haverá a empresa, a série e o número sequencial.

A **Operação de NFC-e** ficará vinculada ao Terminal, no cadastro de terminais, que pode ser acessado através do Integrador Bimer x PDV Alterdata ou diretamente no Web Service **Exporta e Importa dados PDV Alterdata**.

> **Observação:** Caso o cliente já trabalhe com o PDV Alterdata emitindo cupom fiscal pela impressora ECF, não será necessário realizar nenhum cadastro ou configuração nesta parte, pois o Tipo de Documento e Operação para NFC-e são criados automaticamente na base do Bimer.
