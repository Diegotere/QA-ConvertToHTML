# PDV Alterdata — Integração FGF — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Pré-requisitos](#pré-requisitos)
- [Configuração](#configuração)
- [Rotina](#rotina)
  - [Critérios para Envio de Carga Completa](#critérios-para-envio-de-carga-completa)
  - [Análise e Retorno de Dados](#análise-e-retorno-de-dados)
  - [Visualização e Comparação de Dados](#visualização-e-comparação-de-dados)
  - [Consulta Rápida dentro do Cadastro de Produtos](#consulta-rápida-dentro-do-cadastro-de-produtos)
  - [Desfazer Alterações](#desfazer-alterações)
  - [Auditoria](#auditoria)
  - [Legenda](#legenda)
  - [Opções de Filtro](#opções-de-filtro)
- [Sincronização Automática de Dados via Gerente Eletrônico](#sincronização-automática-de-dados-via-gerente-eletrônico)
  - [000254 - Envio de Novos Produtos para FGF](#000254---envio-de-novos-produtos-para-fgf)
  - [000255 - Envio de Carga Completa dos Produtos para FGF](#000255---envio-de-carga-completa-dos-produtos-para-fgf)
  - [000256 - Buscar Atualizações da FGF](#000256---buscar-atualizações-da-fgf)
- [Impacto das Alterações no Bimer](#impacto-das-alterações-no-bimer)
- [Integração com o PDV](#integração-com-o-pdv)
  - [Procedure SQL](#procedure-sql)
  - [Fluxo de Exportação de Dados para o PDV](#fluxo-de-exportação-de-dados-para-o-pdv)

---

## Introdução

A **Integração FGF - Consulta Tributária** consiste em um módulo de dados fiscais (via API) para assegurar a conformidade tributária dos itens comercializados no Ponto de Venda (PDV).

A **FGF**, como empresa especializada, presta consultoria e assessoria em gestão financeira e tributária, com foco em revisão fiscal, compliance e auditoria. O sistema da FGF mantém um cadastro robusto de produtos, com informações fiscais segmentadas por Estado e atualizadas diariamente.

A principal função desta integração é garantir que os produtos do PDV possuam **informações tributárias (códigos e regras) corretas e atualizadas**, minimizando ocorrências de erros e rejeições fiscais no processo de venda.

---

## Pré-requisitos

- **Contrato de Serviço:** O usuário deve formalizar a contratação dos serviços de consultoria da FGF para obtenção das credenciais de acesso à API (chave de identificação, login e senha).
- **Versão do Sistema:** A versão do Bimer em utilização deve ser igual ou superior à **11.02.03.04**.
- **Acesso à API:** É imprescindível possuir a chave de identificação, login e senha fornecidos pela FGF.

---

## Configuração

A configuração da empresa é realizada no módulo **Configurador >> Geral >> Integrações >> FGF – Consulta Tributária**:

1. Selecione **Novo** e especifique a(s) empresa(s) que utilizarão a integração.
2. Insira a **chave de identificação**, **login** e **senha** obtidos junto à FGF.
3. Após o cadastro, execute a validação da conexão clicando em **"Validar integração"**.
4. Em seguida, clique em **"Enviar carga completa"**.

> **ATENÇÃO:** O envio da carga completa é um procedimento que deve ser executado **apenas uma única vez**.

---

## Rotina

### Critérios para Envio de Carga Completa

O envio de produtos para a FGF, realizado via API, precisa cumprir os seguintes requisitos:

- Produtos **ativos para venda**;
- Produtos com **movimentação nos últimos 12 meses**;
- Produtos **sem movimentação**, mas cadastrados/atualizados nos últimos 12 meses.

### Análise e Retorno de Dados

1. A FGF analisa os dados dos produtos. O prazo de resposta é determinado pelo contrato com a consultoria (aproximadamente **7 dias úteis** após o envio da carga completa).
2. Após a conclusão da análise, a lista de produtos revisados retorna ao sistema e fica acessível em: **Produto >> FGF - Consulta tributária**.

### Visualização e Comparação de Dados

1. Na tela da integração, selecione a empresa e clique em **"Buscar atualizações"**.
2. A interface exibirá **colunas duplas**, comparando as informações fiscais atuais do Bimer com as sugestões da FGF para os seguintes campos:

   - **CST de ICMS saída**
   - **Alíquota de ICMS**
   - **Alíquota de FCP** (Fundo de Combate à Pobreza)
   - **Alíquota de redução da base de ICMS**
   - **Tipo de desoneração de ICMS**
   - **Código de benefício fiscal**
   - **Classificação fiscal (NCM)**
   - **CST de PIS Saída**
   - **Código CEST**

> **Atenção:** Após a versão **11.02.03.19** foram adicionados os campos referentes à reforma tributária:
> - **Classificação tributária de IBS/CBS**
> - **Alíquota de IBS Est. (%)**
> - **Alíquota Red. IBS Est. (%)**
> - **Alíquota IBS Mun. (%)**
> - **Alíquota Red. IBS Mun. (%)**
> - **Alíquota CBS (%)**
> - **Alíquota Red. CBS (%)**

### Consulta Rápida dentro do Cadastro de Produtos

Para otimizar a conferência de dados durante a edição de um item, o sistema dispõe de visualização direta dentro do cadastro do produto na aba **Específico**.

Nesta tela, o sistema exibe os campos tributários retornados pela FGF. Os campos são destinados apenas para **visualização**, permitindo que o usuário valide as informações fiscais sem precisar sair da rotina de edição do produto ou abrir o módulo de integração completo.

### Desfazer Alterações

Caso seja necessário desfazer a aplicação das sugestões da FGF nos produtos, localize o produto, clique com o botão direito e clique em **"Desfazer alterações da FGF"**.

### Auditoria

Permite visualizar o histórico de quem aplicou ou desfez sugestões da FGF em um determinado produto, através de filtros como: **Empresas**, **usuários** e **produtos**.

### Legenda

O status de cada produto na lista pode ser acompanhado visualmente por meio de um **quadrado colorido** exibido ao lado do produto. Consulte a legenda para compreender o significado de cada cor.

### Opções de Filtro

É possível filtrar a lista de produtos com base no status da divergência ou no status do envio:

- **Com divergência** — Exibe apenas os produtos onde as informações fiscais cadastradas no Bimer estão **divergentes** (sinalizadas em vermelho) das sugestões da FGF. Este é o filtro mais comum para ações corretivas.
- **Sem divergência** — Exibe os produtos onde as informações cadastradas estão em **conformidade** (sinalizadas em preto) com as sugestões da FGF.
- **Aguardando retorno da FGF** — Exibe os produtos que foram enviados na carga completa e ainda estão em análise pela consultoria, aguardando o retorno da lista revisada.
- **Produto não enviado para a FGF** — Exibe produtos que atendem aos requisitos de envio, mas que por alguma razão não foram incluídos na carga inicial, ou que foram cadastrados após o envio da carga completa.
- **Sem divergência após aplicar sugestões da FGF** — O produto apresentava divergências, mas elas já foram corrigidas com base nas sugestões da FGF. No momento, o produto não possui pendências.

---

## Sincronização Automática de Dados via Gerente Eletrônico

A automação da integração com a FGF é feita pelo **Gerente Eletrônico (GE)** através de tarefas específicas que garantem a atualização contínua dos dados fiscais no Bimer.

### 000254 - Envio de Novos Produtos para FGF

Esta tarefa automatiza o fluxo de saída de dados para a CTributária FGF, garantindo que o catálogo de produtos na base da CTributária esteja sempre sincronizado com as inclusões realizadas no Bimer. A rotina funciona através da identificação e do envio exclusivo dos registros que ainda não foram processados pela API de integração.

### 000255 - Envio de Carga Completa dos Produtos para FGF

Esta tarefa é responsável pelo envio da carga completa de produtos do Bimer para a CTributária FGF. Diferente do envio de novos itens, esta rotina realiza uma **sincronização geral**, assegurando que toda a base de dados do cliente esteja em conformidade com o cadastro da consultoria.

### 000256 - Buscar Atualizações da FGF

Esta tarefa é responsável por retornar as consultas da FGF e integrar as atualizações fiscais diretamente no banco de dados do Bimer. O objetivo principal é garantir que as informações de **NCM**, **CFOP**, **CST** e alíquotas (**ICMS**, **PIS**, **COFINS**) estejam sincronizadas, eliminando a necessidade de digitação manual e reduzindo o risco de rejeições fiscais.

---

## Impacto das Alterações no Bimer

As alterações efetuadas por esta rotina possuem as seguintes especificidades:

- As alterações são integradas **somente ao PDV** para emissão de NFC-e. O processo não influencia na tributação normal do cliente para outras operações, como vendas interestaduais.
- **NF-e:** As configurações para emissão de NF-e (Nota Fiscal Eletrônica) **não são afetadas**.
- Somente o **NCM** (Classificação Fiscal) e o **Código CEST** são modificados diretamente no cadastro do produto.
- Alíquotas e outros campos **não são alterados** diretamente no cadastro principal do produto.
- **Validação NCM:** Se o NCM sugerido pela FGF não estiver previamente cadastrado no Bimer, o sistema emitirá uma mensagem de erro, exigindo o cadastro antes da aplicação das alterações.
- **Validação CEST:** Se o CEST não estiver vinculado, o sistema o adiciona automaticamente e prossegue com a rotina.

---

## Integração com o PDV

O fluxo de atualização dos dados tributários revisados pela FGF ocorre através do **Integrador do PDV**, com as informações trazidas da tabela `ProdutoAprovado`.

### Procedure SQL

A funcionalidade de integração das informações da FGF com o PDV requer a execução de uma **procedure** no banco de dados SQL.

Esta procedure é essencial para habilitar a consulta e garantir que o Integrador do PDV possa buscar os dados fiscais da tabela `ProdutoAprovado`.

> **ATENÇÃO:** A documentação fornecida não especifica a Procedure a ser executada, pois deverá ser vista diretamente com a **Supervisão Técnica**. Por precaução, somente após implementação da Reforma Tributária e estabilização nos clientes, será implementada uma versão que contemple a configuração sem que haja necessidade de ativação via banco de dados. Isso não impede que seja feito todo o cadastro dentro do Bimer, sendo somente rodado o comando para que o Integrador possa fazer a validação das informações da tabela `ProdutoAprovado`.

### Fluxo de Exportação de Dados para o PDV

O Integrador é o responsável por gerar os arquivos de produtos (`.DAT`).

1. Ao selecionar a opção de exportação no Integrador, ele realiza uma consulta e busca as informações.
2. Os produtos exportados para o PDV com as informações da FGF são aqueles que:
   - Estão na tabela `ProdutoAprovado`.
   - **Não apresentam divergência** na tela de consulta tributária.
3. O PDV passa a utilizar as novas informações da tabela `ProdutoAprovado` no momento da venda para a emissão de **NFC-e** (Nota Fiscal de Consumidor Eletrônica).
