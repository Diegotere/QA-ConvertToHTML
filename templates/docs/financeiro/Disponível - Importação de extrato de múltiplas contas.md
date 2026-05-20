# Disponível — Importação de Extrato Bancário de Múltiplas Contas — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Como Funciona o Arquivo do Extrato?](#como-funciona-o-arquivo-do-extrato)
  - [Criação da Montagem do Extrato](#criação-da-montagem-do-extrato)
  - [Importação e Exportação da Montagem](#importação-e-exportação-da-montagem)
  - [Natureza do Lançamento no Banco](#natureza-do-lançamento-no-banco)
- [Importação dos Extratos](#importação-dos-extratos)

---

## Introdução

O Bimer permite realizar a rotina de importação de extratos bancários para **múltiplas contas** ao mesmo tempo.

Desenvolvida para clientes que possuem mais de uma conta no mesmo banco, essa funcionalidade agiliza o processo, permitindo a importação de todos os extratos de uma só vez.

---

## Configurações

### Como Funciona o Arquivo do Extrato?

O arquivo de múltiplos extratos possui uma estrutura semelhante a um arquivo remessa de liquidação, composta por:

- **Header do arquivo**
- Para cada conta bancária (lote):
  - Header do lote
  - Detail (lançamentos)
  - Trailer do lote
- **Trailer do arquivo**

**Exemplo com 3 contas:**

```
Header do arquivo
  Header do lote (conta nº 1)
  Detail da conta nº 1
  Trailer do lote (conta nº 1)
  Header do lote (conta nº 2)
  Detail da conta nº 2
  Trailer do lote (conta nº 2)
  Header do lote (conta nº 3)
  Detail da conta nº 3
  Trailer do lote (conta nº 3)
Trailer do arquivo
```

**Função de cada seção:**

- **Header** — Cabeçalho que inicia as informações do arquivo e de cada lote (conta bancária).
- **Detail** — Traz os lançamentos que serão importados no Disponível para conciliação.
- **Trailer** — Rodapé que indica o final das movimentações de cada conta e do arquivo.

O arquivo é composto por variáveis que compõem as **240 colunas** do arquivo. Os bancos disponibilizam manuais específicos com as posições de cada variável. Por isso, o cliente precisa passar por uma **homologação** para a criação da montagem.

### Criação da Montagem do Extrato

Caminho: **Configurador >> Financeiro >> Informações bancárias >> Extrato bancário >> Criação de registros**

Clique em **Novo** e informe o banco. O sistema já trará as estruturas — é necessário adicionar apenas as variáveis que compõem cada estrutura, conforme o manual do banco.

Após realizar a criação das montagens, elas ficarão listadas na tela principal.

> *[Imagem: tela de criação de registros de extrato bancário]*

### Importação e Exportação da Montagem

Caminho: **Configurador >> Financeiro >> Informações bancárias >> Extrato bancário**

É possível importar e exportar a montagem já pronta:

- **Exportar:** Selecione o banco e informe o diretório onde deseja salvar o arquivo.
- **Importar:** Selecione o arquivo e clique em **Processar**.

> **Nota:** Após a importação, a extensão do arquivo será modificada para a data corrente com o sufixo `.OK`, impedindo que o mesmo arquivo seja importado mais de uma vez.

### Natureza do Lançamento no Banco

O arquivo de extrato bancário possui siglas que identificam a **natureza do lançamento**, indicando se o lançamento ocorreu em valor "disponível" ou "a compensar". Isso possibilita a recomposição dos saldos em datas anteriores.

> **Atenção:** Esses códigos podem mudar de finalidade dependendo do banco.

A partir da versão **11.02.03.00** do Bimer, é possível configurar se cada código de natureza será considerado ou não no saldo.

Caminho: **Configurador >> Financeiro >> Informações bancárias >> Bancos**

Selecione o banco desejado e acesse a aba **Disponível**. No quadro **"Códigos de natureza do lançamento do extrato bancário"**, adicione a natureza do lançamento e marque (ou desmarque) a opção **"Considerar no saldo"** conforme o comportamento do banco.

---

## Importação dos Extratos

Com as configurações realizadas, acesse o módulo **Disponível**, aba **Conciliação automática**, e selecione a opção **"Importar extrato bancário de múltiplas contas"**.

**Pré-requisitos:**

- As contas bancárias devem estar cadastradas no sistema com agência, número da conta e banco corretos.
- As contas devem estar marcadas para **conciliação automática**.
- O banco deve ter a montagem realizada.

**Procedimento:**

1. Informe o banco.
2. Selecione o arquivo do extrato.
3. Clique em **Processar**.

**Resultado:**

- Movimentos em **preto** — sem inconsistências; serão importados para o Disponível.
- Movimentos em **vermelho** — possuem alguma inconsistência. Na última coluna há um ícone de texto para visualizar a mensagem de erro.

Após a importação, o sistema apresenta um **resumo** das contas presentes no extrato e cria automaticamente o sincronismo para os movimentos encontrados.

> **Observação:** Os movimentos com inconsistência não são importados. Os movimentos do tipo **APL** (aplicação automática) também não são importados pelo sistema.
