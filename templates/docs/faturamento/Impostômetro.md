# Impostômetro — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configuração](#configuração)
  - [Cadastro da Empresa](#cadastro-da-empresa)
  - [Cadastro da Operação](#cadastro-da-operação)
  - [Classificação Fiscal e Lista de Serviços](#classificação-fiscal-e-lista-de-serviços)
- [Rotina](#rotina)

---

## Introdução

A **lei do impostômetro** (Lei nº 12.741/12, de 8 de dezembro de 2012) tem como objetivo deixar mais transparente ao consumidor final o valor aproximado dos tributos que está pagando em uma operação de compra de produtos ou serviços. (Este direito está assegurado pelo artigo 150, § 5º, da Constituição.)

Os tributos poderão ser destacados nos documentos fiscais como no **DANFE** e **cupom fiscal** na parte de informações complementares, ou também poderão estar em painel afixado em local visível do estabelecimento comercial.

Os tributos poderão ser demonstrados como **percentuais** ou **valores aproximados**. Dentre estes tributos estão: **IPI, IOF, PIS, COFINS, ICMS, ISS, CIDE** e outros.

Para mais informações, acesse: [https://impostometro.com.br/home/lei](https://impostometro.com.br/home/lei)

---

## Configuração

### Cadastro da Empresa

Para trabalhar com o impostômetro, verifique no **Configurador Bimer >> Geral >> Empresas >> Emissão de notas >> NF-e/NFS-e** e marque as opções:

- **Total tributos NF-e** (na aba NF-e)
- **Total tributos NFS-e** (na aba NFS-e)

> *[Imagem: tela de configuração da empresa com opções Total tributos NF-e e NFS-e marcadas]*

---

### Cadastro da Operação

No **Configurador Bimer >> Estoque >> Operação**, deverá estar marcada a opção **"Exibir total dos tributos da NF-e"**.

> *[Imagem: tela do cadastro de operação com opção Exibir total dos tributos da NF-e marcada]*

---

### Classificação Fiscal e Lista de Serviços

O valor aproximado dos tributos é configurado no Bimer através das tabelas de **Classificação Fiscal (NCM)** e da **Lista de Serviços**.

Elas poderão ser atualizadas manualmente em:
- **Configurador Bimer >> Estoque >> Tributos >> Classificação fiscal**
- **Configurador Bimer >> Estoque >> Tributos >> Lista de serviço**

Porém, também é possível fazer a atualização através da **importação da tabela IBPT**, que contém as relações dos produtos com sua respectiva tributação.

> **Importante:** A tabela IBPT é **mensal**. Logo, todo início de mês será necessário baixar a tabela corrente. Ela pode ser verificada em: [https://deolhonoimposto.ibpt.org.br/](https://deolhonoimposto.ibpt.org.br/)

**Procedimento para importação da tabela IBPT:**

1. Baixe a tabela IBPT no site indicado;
2. Crie uma pasta na área de trabalho e descompacte a tabela IBPT dentro dela;
3. O arquivo contém diversos arquivos no formato **CSV** — cada um se refere ao percentual de tributos aproximados em uma UF, por NCM;
4. Acesse **Configurador Bimer >> Estoque >> Alinhamentos >> Percentual total dos tributos**;
5. Localize a pasta IBPT e selecione o arquivo referente ao estado onde a empresa está localizada;
6. Caso a empresa tenha filiais em outros estados, será necessário fazer também a importação para esses estados;
7. Após selecionar uma das tabelas, clique em **"Avançar"**.

> *[Imagem: tela de importação da tabela IBPT com seleção do arquivo CSV]*

Na próxima tela, será exibida a relação das classificações fiscais contidas no arquivo. As que estiverem marcadas serão atualizadas com o percentual de tributos. Por padrão, o sistema identificará e marcará automaticamente todas as classificações fiscais cadastradas no sistema.

Na tela seguinte, serão exibidos os itens para a **Lista de Serviços**, seguindo a mesma lógica.

> *[Imagem: tela com relação de classificações fiscais para atualização]*

Ao concluir o processo, as alíquotas estarão vinculadas às classificações fiscais e aos itens da lista de serviços cadastrados no sistema e identificados no arquivo.

**Importação automática via Gerente Eletrônico:**

Há também a possibilidade de configurar uma **tarefa agendada** para que o sistema faça a importação automaticamente:

1. Cadastre uma tarefa em **Configurador Bimer > Geral > Tarefas**, com o sistema **000215 - Tarefa para importação de dados da Tabela IBPT**;
2. Cadastre a tarefa agendada em **Configurador Bimer > Geral > Tarefas agendadas**, informando a tarefa criada anteriormente e a ocorrência e frequência de execução.

> **Dica:** Como a tabela é mensal, não há necessidade de a tarefa rodar todos os dias.

> **Atenção:** É importante que previamente os produtos estejam cadastrados com **NCM (Classificação fiscal) válido**.

---

## Rotina

Na rotina de emissão de **NF-e**, **NFS-e** e **venda no PDV** não serão realizadas alterações.

O destaque do percentual ou valor aproximado dos tributos constará:

- **XML:** na tag `<infCpl>` (informações complementares);
- **DANFE:** nas informações complementares;
- **Cupom fiscal:** também será apresentado.

> *[Imagem: exemplo de DANFE com informações complementares exibindo o total de tributos]*
