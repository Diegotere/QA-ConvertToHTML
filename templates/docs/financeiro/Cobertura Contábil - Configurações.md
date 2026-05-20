# Cobertura Contábil — Configurações — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Configurações Iniciais](#configurações-iniciais)
  - [Instalação do Sistema Pack Contábil](#instalação-do-sistema-pack-contábil)
  - [Configurando a Cobertura Contábil](#configurando-a-cobertura-contábil)
  - [Configuração para Integração Direta com Pack Contábil](#configuração-para-integração-direta-com-pack-contábil)
  - [Configuração para Integração através de Arquivo Tipo Texto](#configuração-para-integração-através-de-arquivo-tipo-texto)
  - [Formato dos Lançamentos](#formato-dos-lançamentos)
- [Cadastros](#cadastros)
  - [Importação dos Dados do WCont da Alterdata](#importação-dos-dados-do-wcont-da-alterdata)
  - [Cadastro da Empresa](#cadastro-da-empresa)
  - [Planos de Contas](#planos-de-contas)
  - [Contas](#contas)
  - [Plano de Centro de Custos e Centros de Custos](#plano-de-centro-de-custos-e-centros-de-custos)
  - [Histórico Padrão](#histórico-padrão)
  - [Importação Individual de Tabelas](#importação-individual-de-tabelas)

---

## Configurações Iniciais

### Instalação do Sistema Pack Contábil

Antes de qualquer configuração no Bimer, é necessário que o **WCont** esteja instalado e que nele estejam cadastrados:

- Plano de contas
- Plano de centros de custos (caso a empresa faça controle por centro de custo)
- Históricos Padrões
- Empresa

Essas informações devem estar previamente cadastradas porque serão importadas para a Cobertura Contábil.

> **Nota:** Caso a empresa ou seu contador não possua o WCont, todos os cadastros deverão ser feitos diretamente na Cobertura Contábil. Caso não tenha o WCont instalado, consulte os materiais disponíveis no **Portal UCA >> Pack >> Contábil >> Cursos >> Autodesenvolvimento >> AD Contábil**.

### Configurando a Cobertura Contábil

É necessário definir se a Cobertura Contábil trabalhará:

- **Integrada diretamente ao Alterdata Pack** — requer que o Pack Contábil esteja na mesma rede ou em local que permita conexão direta.
- **Gerando arquivo do tipo texto** — para importação em sistema de contabilidade em outro ambiente.

### Configuração para Integração Direta com Pack Contábil

Caminho: **Cadastros e Configurações >> Opções >> Configurações do Servidor**

Marque a opção **"Alterar o protocolo e nome do servidor"**. Informe o tipo de **Banco de dados** utilizado pelo WCont e, em **Configurações do servidor SQL Server / PostgreSQL**, informe os dados de acesso à base de dados do WCont:

- Nome do Servidor
- Usuário e Senha
- Nome da Base de dados

> **Pack com base no SQL Server:** O nome do servidor corresponde ao nome da instância. Pode-se usar `<nome do servidor>\<nome da instância>` ou `<ip do servidor>\<nome da instância>`.

> **Pack com base no PostgreSQL:** O nome do servidor deve ser `<número do ip>:<número da porta>`. O usuário deve ser `postgres` com a senha padrão da instalação.

### Configuração para Integração através de Arquivo Tipo Texto

Caso não vá trabalhar integrado diretamente ao Pack Contábil, ou ele esteja em ambiente fora da rede da empresa, a integração será via arquivo.

Caminho: **Cadastros e Configurações >> Opções >> aba Geral**

Na área **"Layouts disponíveis para a liberação dos lançamentos contábeis"**, clique no sinal de **"+"** e informe:

- **Nome da DLL de exportação do lote:** Por padrão, essa DLL fica em uma destas pastas:
  - `C:\Program Files (x86)\Alterdata\Biblioteca`
  - `C:\Program Files (x86)\Alterdata\ERP\`
- **Localização do arquivo de exportação:** Local onde o arquivo será salvo.

> **Dica:** A DLL é responsável por transformar os dados coletados da Cobertura Contábil em arquivo-texto no padrão necessário para que o Pack Contábil consiga importar. A DLL padrão da Alterdata é a `AltExpERPCobCont_Wcont_Txt.dll`. Caso a empresa possua um sistema de contabilidade diferente que não consiga ler esse arquivo, é necessário contatar o DSN Bimer para criar uma DLL específica.

### Formato dos Lançamentos

As convenções contábeis determinam que para um crédito deve haver um débito correspondente. É necessário configurar a Cobertura para que ela saiba como gerar um lançamento.

Existem dois formatos disponíveis:

**1. Partida dobrada (1 para 1)** — Cada lançamento gera um par débito/crédito individual.

Exemplo — Pagamento de R$ 1.000,00 de energia elétrica com R$ 20,00 de juros:

```
Débito:  R$ 1.000,00 → Pagamento a fornecedores
Crédito: R$ 1.000,00 → Caixa

Débito:  R$    20,00 → Juros
Crédito: R$    20,00 → Caixa
```

**2. Partida simples (1 para vários)** — Múltiplos débitos para um único crédito.

```
Débito:  R$ 1.000,00 → Pagamento a fornecedores
Débito:  R$    20,00 → Juros
Crédito: R$ 1.020,00 → Caixa
```

> **Atenção:** Devido à legislação do **SPED ECD**, atualmente só é permitido haver lançamentos como **partida dobrada**.

Caminho: **Cadastros e Configurações >> Opções >> aba Contábil**

Marque a opção **Partida dobrada (1 para 1)** para:

- Baixa de contas a pagar
- Baixa de contas a receber
- Inclusão de contas a pagar
- Inclusão de contas a receber

---

## Cadastros

Após realizar as configurações iniciais, é necessário alimentar as tabelas da Cobertura Contábil para configurar como serão gerados os lançamentos contábeis.

As tabelas encontram-se na aba **"Cadastros e Configurações"**:

- Empresas
- Plano de contas
- Contas
- Plano de centros de custos
- Centros de custos
- Histórico Padrão

> **Importante:** Quando o sistema trabalha integrado diretamente à base de dados do Pack Contábil, essas tabelas **obrigatoriamente devem ser importadas** do sistema contábil. Toda a manutenção (inclusões, exclusões, alterações) também deve ser feita **obrigatoriamente** no sistema **Alterdata PHD e Contábil**.

### Importação dos Dados do WCont da Alterdata

Caminho: **Lançamentos contábeis >> Importar dados WCont**

As modificações feitas no WCont serão inseridas, alteradas ou excluídas de acordo com as opções marcadas.

> **Atenção:** Cuidado com a opção **"Excluir os registros que não existem mais no WCont"**, pois serão apagados todos os registros das tabelas da Cobertura Contábil que foram cadastrados manualmente. Tenha especial cuidado quando se trabalha com centros de custo gerenciais que não são cadastrados no WCont.

### Cadastro da Empresa

Caminho: **Cadastros e Configurações >> Empresas**

Após a importação de dados, edite a empresa desejada e informe:

- **Plano de Contas** que ela utilizará.
- **Plano de Centros de Custos** (se a empresa trabalhar com centros de custos, marque a opção e selecione o plano).
- Marque a opção **"Trabalha com SPED Contábil"**.
- **Código da empresa no WCont** — importante pois o código da empresa no Bimer pode ser diferente do código no sistema de contabilidade. Se não for informado, o lançamento pode ser direcionado para a empresa errada na contabilidade.
- **Dt. Fechamento contábil** — campo de bloqueio do sistema. Ao informar uma data de fechamento, os usuários só poderão lançar com datas posteriores a ela. Útil após o fechamento de um exercício ou mês contábil.

> **Dica:** O exercício contábil é o período de 01 ano, iniciando sempre em 01 de janeiro até 31 de dezembro.

### Planos de Contas

Caminho: **Cobertura Contábil >> Cadastros e Configurações >> Plano de contas**

A tabela de Plano de Contas contém as definições básicas de cada plano, como **Descrição** e **máscara** para composição da classificação da conta contábil, além da definição dos níveis (aba **Definição**).

> **Nota:** Como esta tabela foi importada do Pack Contábil, a criação e manutenção deve ser feita no **PHD Alterdata**. Na Cobertura Contábil, utilize apenas para consulta.

### Contas

Esta tabela contém o detalhamento do plano de contas — todas as contas contábeis que podem ser usadas na classificação de um lançamento contábil (débito e crédito). Na tela principal, selecione o plano de contas desejado para visualizar suas contas.

> **Dica:** Existem dois tipos de contas: **Sintéticas** (apenas para definir os níveis de cada conjunto de contas) e **Analíticas** (as que realmente podem ser usadas em um lançamento contábil).

### Plano de Centro de Custos e Centros de Custos

De forma semelhante ao plano de contas, as tabelas **Plano de Centros de Custo** e **Centros de Custo** também são importadas do Pack Contábil e não devem sofrer alterações na Cobertura Contábil — apenas consulta.

> **Nota:** A partir da versão **11.01.00.00** do Bimer, quando um centro de custo estiver desativado no Pack, ele também será desativado na Cobertura Contábil.

### Histórico Padrão

Tabela importada do Pack Contábil que pode ser usada na composição de um lançamento contábil para descrevê-lo.

### Importação Individual de Tabelas

Caso seja cadastrada uma conta nova no plano de contas no Pack Contábil, não é necessário reimportar todas as tabelas. Em cada tabela da Cobertura Contábil há uma opção no menu chamada **Importação WCont**, que permite importar apenas aquela tabela específica.

> **Nota:** Em **Cadastros e Configurações** existe também a opção **Integração com escrita fiscal**, que não é abordada neste manual. Consulte o manual **Integração Bimer x Escrita Fiscal** no Portal UCA para detalhes sobre essa rotina.
