# NFCOM (Nota Fiscal Fatura de Serviço de Comunicação Eletrônica) — Modelo 62 — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Cadastro de Produto](#cadastro-de-produto)
- [Cadastro de Pessoa](#cadastro-de-pessoa)
- [Emissão da NFCom](#emissão-da-nfcom)
- [Substituição de NFCom](#substituição-de-nfcom)
- [Impressão da DANFE-COM e mais recursos](#impressão-da-danfe-com-e-mais-recursos)
- [Envio por E-mail](#envio-por-e-mail)

---

## Introdução

Assim como para qualquer outro tipo de venda de produto ou prestação de serviços que uma empresa realize, para a prestação de serviços de comunicação ou telecomunicação também é exigida a emissão de um documento fiscal. Porém, as empresas que prestam esse tipo de serviço têm obrigatoriedades específicas para o segmento.

Os serviços de comunicação e de telecomunicação são regidos pela legislação do **ICMS** (Imposto sobre Operações Relativas à Circulação de Mercadorias e sobre Prestações de Serviços de Transporte Interestadual, Intermunicipal e de Comunicação) e não pela legislação do ISS.

A **Nota Fiscal Fatura de Serviço de Comunicação Eletrônica (NFCom), Modelo 62**, foi instituída pelo **Ajuste SINIEF nº 7/2022** com o objetivo de substituir a sistemática anterior de emissão dos documentos em papel, padronizando a obrigação fiscal em nível nacional.

Este novo modelo eletrônico define as seguintes obrigatoriedades para as empresas prestadoras de serviço de telecomunicação ou de comunicação:

**Obrigação principal:**
- Emissão, escrituração, manutenção e prestação das informações relativas à Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (NFCom), Modelo 62.

**Principais mudanças em relação aos modelos anteriores (21 e 22):**
- Substituição dos documentos fiscais em papel por um documento nacionalmente eletrônico.
- Exigência de transmissão do arquivo XML para a Sefaz antes da concessão da autorização de uso.
- Obrigatoriedade da impressão do Documento Auxiliar da Nota Fiscal Fatura de Serviços de Comunicação Eletrônica (**DANFE-COM**).

Em resumo, a empresa precisa emitir a nota fiscal de forma eletrônica, obter a autorização da Sefaz e gerar arquivos digitais (XML) com os dados das notas emitidas no período.

---

## Configurações

### Instalação e pré-requisito

Para garantir o correto funcionamento do recurso de envio da NFCom, é crucial que o ambiente esteja devidamente preparado. O envio é realizado por meio do componente **ACBr**.

Ao executar o **Instalador Bimer** ou **Bimer Servidor**, são disponibilizados os Schemas e as DLLs necessárias para a operação.

> **Atenção!** Recurso disponível a partir da versão **11.02.02.00**.

- **Schemas:** Instalados no diretório `C:\Program Files (x86)\Alterdata\NFCom\SchemaNFCom`.
- **DLLs:** Serão instaladas no mesmo local do `Bimer.exe` e incluem: `libexslt.dll`, `libiconv.dll`, `libxml2.dll` e `libxslt.dll`.

> **Dica:** O executável do Bimer também disponibiliza essas DLLs na abertura do sistema.

É obrigatório executar o Instalador Bimer ou Servidor, principalmente devido à criação da pasta de Schemas.

### Configurações Essenciais para Emissão

Para iniciar a emissão da NFCom, é necessário realizar uma série de configurações no sistema:

#### 1. Cadastro de empresa (Configurador > Geral > Cadastro de empresa)

- Na aba **Emissão de notas**, além da opção **"Possui nota fiscal de telecomunicação (modelo 21/22)"**, marque a nova opção **"Possui NFCom"**.
- **Habilitar envio de e-mail:** Caso deseje trabalhar com o envio de e-mail da NFCom, marque a opção e realize as devidas configurações na aba **E-mail**.

> **Dica:** Realize o teste de e-mail para confirmar o funcionamento das configurações.

#### 2. Cadastro de contas

- Na aba **Cadastro > Contas**, é mandatório que a conta bancária esteja vinculada ao cadastro da empresa para a emissão do boleto gerado na NFCom.

> **Atenção!** Para gerar corretamente a linha digitável do código de barras do grupo de fatura da NFCom, confira se os dados de código de barras/linha digitável e cobrança estão em conformidade com o contrato bancário em **Configurador/Financeiro/Informações bancárias/Contas bancárias**.

Os campos obrigatórios a serem preenchidos no cadastro da conta incluem:

- Número da Agência
- CNPJ da Agência
- Descrição da Carteira
- Número da Conta bancária
- Código do Cedente
- Número do Convênio (este é o número do contrato)
- Tipo da conta
- Código do Cliente no Banco

#### 3. Certificado digital

- Na aba **Cadastro > Certificado digital**, o certificado digital é um requisito fundamental para o envio da NFCom.

#### 4. Tipos de documento e operação

- **Tipo de documento** (**Configurador > Estoque > Tipo de documento**): Cadastre o novo tipo de documento para NFCom, realizando a vinculação ao **Modelo 62**.

> *[Imagem: Tela de cadastro de tipo de documento com Modelo 62 selecionado]*

- **Operação** (**Configurador > Estoque > Operação**): Vincule o tipo de documento Modelo 62 para NFCom. É imprescindível preencher o **CFOP** permitido para o envio da NFCom e marcar a opção **"Atualiza financeiro"**, visto que NFCom com faturamento do tipo normal exige a geração do grupo de informações da fatura.

#### 5. Configurações de faturamento

**Geral** (**Configurador > Faturamento > Opções > Telecomunicação > Geral**):

- Selecione a **finalidade**, essa define o tipo de serviço de telecomunicação que a empresa presta. Essa configuração influenciará nos dados dos arquivos que o sistema gerará referentes às NF emitidas.
- Preencha o **"Diretório raiz de armazenamento dos XMLs de NFCom"**.
- Verifique os **CFOPs permitidos** para emissão.

**Impressão** (**Configurador > Faturamento > Opções > Telecomunicação > Impressão**):

- Preencha a impressora destinada ao **DANFECom**.

**Vinculação** (**Configurador > Faturamento > Opções > Operação > Telecomunicação**):

- Após o cadastro do tipo de documento e da operação, grave o tipo de documento para a NF de telecomunicação e, em seguida, vincule a operação.

---

## Cadastro de Produto

Os produtos a serem utilizados para a emissão da nota fiscal de serviços de telecomunicação devem ter as seguintes características:

### Tipo de produto

Na aba **Identificação** deverá ser escolhido se o tipo do produto é **produto comercializado**, **serviço** ou **serviço comercializado**, de acordo com orientação do setor de contabilidade.

### Classificação do Item

Na aba **"Específico" >> Telecomunicação** selecione a **classificação do item** correspondente ao tipo de serviço que se está cadastrando.

> *[Imagem: Aba Específico > Telecomunicação com campo de classificação do item]*

### Item na lista de serviço

Caso tenha sido escolhido **serviço** ou **serviço comercializado** como tipo do produto, então, na aba **Geração NF-e >> Códigos >> Item na lista de serviços**, selecione o código de identificação do serviço, para emissão de NF-e.

> **Atenção!** Na explicação acima foram citadas apenas as configurações que influenciam diretamente na emissão das notas fiscais modelo 62. Porém, é importante que as demais regras de cadastro sejam configuradas corretamente de acordo com o padrão da empresa. Como, por exemplo, tabela de cálculo de ICMS, classificação fiscal, unidade do produto, grupo, etc.

> **Atenção sobre o produto:** A SEFAZ solicita que o código da classificação para o envio da NFCom seja composto por **7 dígitos**.

> Há um facilitador em **Configurador > Estoque > Produto > Classificação de telecomunicação** que permite a substituição do código de classificação.

---

## Cadastro de Pessoa

Quando a empresa trabalha com serviços de telecomunicação, é exigido que nas informações enviadas para o governo seja especificado o tipo de atividade que o seu cliente exerce.

Acesse o **Cadastro de Pessoas >> Cliente >> Cadastro >> Complementar**, e escolha o **Tipo de cliente para telecomunicação**.

Os tipos de clientes existentes são:

1. Comercial
2. Industrial
3. Residência / Pessoa Física
4. Produtor Rural
5. Órgão de administração pública estadual direta e suas fundações e autarquias. Concedido ICMS 107/95
6. Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto. Convênio ICMS 17/13
7. Missões diplomáticas, Repartições consulares e Organizações Internacionais. Convênio ICMS 158/94
8. Igrejas e Templos de qualquer natureza
9. Outros não especificados anteriormente

---

## Emissão da NFCom

Ao criar um documento, na aba **Telecomunicações**, foram adicionados os novos campos para preenchimento:

- **Início do contrato**
- **Fim do contrato**
- **Número do contrato**
- **Competência**

> **Observação:** O campo **"Competência"** foi liberado na versão 11.02.03.03. A data informada passa a ser utilizada para preenchimento da tag `CompetFat` no XML da NFCom, devendo sempre ser igual ou anterior à data de emissão do documento.

### Restrições e Proteções

- **CSTs Proibidos:** A SEFAZ não permite o envio da NFCom caso sejam informados os CSTs **10, 30, 50, 60, ou 70**. O sistema exibirá uma proteção nesse caso.
- **Forma de Pagamento:** A Sefaz permite apenas pagamento em **Boleto** e **sem parcelamento** para o envio da NFCom. Qualquer outra forma de pagamento ou parcelamento resultará em uma proteção.

Após a criação do documento e a observância das restrições, a emissão da NFCom pode ser iniciada no módulo Faturamento.

- **Processo de Envio:** O envio pode ser feito **individualmente** ou **em massa**.

---

## Substituição de NFCom

Precisa substituir uma Nota Fiscal de Comunicação (NFCom)? A partir da versão **11.02.03.26** o sistema está preparado para realizar esse processo pelo referenciamento da chave de acesso da NFCom autorizada na SEFAZ. (NT 2025.001)

### Passo a Passo para a Substituição

Acesse o caminho **Faturamento / Telecomunicação / Diversos / Substituir NFCom**.

> *[Imagem: Tela de substituição de NFCom com listagem de documentos]*

Localize na listagem a NFCom que deseja substituir. O sistema permite selecionar documentos que estejam com o status **Impresso** ou **Não impresso**.

Clique em **Substituir NFCom**.

No campo **Motivo**, descreva detalhadamente a razão da substituição (esta informação será gravada na tag `motSub` do arquivo XML).

Clique em **Confirmar** para que o sistema gere o novo documento e realize a transmissão para a SEFAZ.

Uma vez autorizada a nota na SEFAZ, o documento anterior terá seu status alterado para **'Substituída'** e será vinculado à nova nota autorizada.

Dentro da nota autorizada, a aba **'Referências'** exibirá os dados do documento substituído.

> **Dica:** Para reforçar a segurança da operação, foi disponibilizada uma nova permissão de usuário. Você pode gerenciar este recurso em: **Configurador > Cadastro de Usuários > Faturamento > Diversos > Substituir NFCom**.

---

## Impressão da DANFE-COM e mais recursos

### Impressão do DANFE-COM

Uma vez autorizada, a NFCom retorna com o status de **"Não impresso"**. O usuário pode realizar a impressão do **DANFE-COM** selecionando a nota fiscal. Após a impressão, o status será alterado para **"Impresso"**.

### Recursos adicionais

O sistema disponibiliza recursos que facilitam a gestão das notas:

- **Duplicar:** Permite facilitar a criação de novos documentos.
- **Cancelamento:** Disponível para NFComs com status **"impresso"** ou **"não impresso"**, gerando o evento de cancelamento para a SEFAZ.
- **Obter retorno de NFCom autorizada e Cancelada:** Quando a nota estiver com status **"NFCom enviando"** e **"Aguardando retorno"**, este recurso consulta o documento no portal da SEFAZ para retornar o status atualizado para o Faturamento.
- **Recurso de copiar chave de acesso:** Para agilizar consultas no sistema.
- **Monitoramento de retorno da NFCom:** Na aba **Diversos**, o monitoramento grava o registro de envio de e-mail e impressão.
- **Disponibilização dos XMLs:** O XML da NFCom é gravado no diretório raiz configurado em **Configurador\Faturamento\Telecomunicação\Geral**.

---

## Envio por E-mail

O envio do e-mail pode ocorrer de duas formas:

1. **Automático:** Ocorre após a autorização da NFCom, contanto que o campo **Email NF eletrônica** esteja preenchido no cadastro de Pessoa/Contato.
2. **Manual:** O usuário também tem a opção de enviar o e-mail após a autorização, selecionando pelo menu de contexto.

> **Observação:** Para o envio funcional, o e-mail deverá estar configurado no cadastro de empresa.
