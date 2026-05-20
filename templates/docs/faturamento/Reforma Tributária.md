# Reforma Tributária — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Aviso Importante](#aviso-importante)
- [Introdução](#introdução)
- [Linha do Tempo da Reforma Tributária](#linha-do-tempo-da-reforma-tributária)
- [Configurações e Cadastros Iniciais no Bimer](#configurações-e-cadastros-iniciais-no-bimer)
- [Módulos Impactados](#módulos-impactados)
- [Faturamento](#faturamento)
- [Nota Fácil](#nota-fácil)
- [Devolução e Troca de Venda](#devolução-e-troca-de-venda)
- [Pedido de Venda](#pedido-de-venda)
- [Gerente Eletrônico](#gerente-eletrônico)
- [Integração Fiscal](#integração-fiscal)
- [Tags do XML](#tags-do-xml)

---

## Aviso Importante

> **Documento Orgânico e em Evolução**
>
> Este manual é um documento orgânico e reflete apenas as primeiras funcionalidades liberadas pela equipe de desenvolvimento.
>
> É crucial entender que o ritmo e a natureza das mudanças apresentadas aqui não são uma escolha interna, mas sim uma resposta obrigatória às constantes Notas Técnicas, definições legais e regulamentações que continuam sendo liberadas e ajustadas sobre a Reforma Tributária.
>
> Dessa forma, as informações e layouts descritos estão sujeitos a alterações a qualquer momento.

---

## Introdução

A **Reforma Tributária** no Brasil tem como objetivos principais a **unificação de impostos**, a **redução da complexidade do sistema**, a **promoção da justiça fiscal** e o **estímulo à economia**. O sistema tributário anterior, datado de 1965, era considerado oneroso, ineficiente e complexo, gerando insegurança jurídica e altos custos de conformidade.

A **Emenda Constitucional nº 132/2023** instituiu o **Imposto sobre Bens e Serviços (IBS)** e a **Contribuição sobre Bens e Serviços (CBS)**:

- **IBS** – de competência compartilhada entre Estados, Municípios e Distrito Federal;
- **CBS** – de competência da União.

Ambos são baseados no princípio da neutralidade, buscando evitar distorções econômicas.

A principal mudança é a **unificação de cinco impostos atuais** (PIS, COFINS, ICMS e ISS) em grande parte no IBS e na CBS. O novo sistema prevê a cobrança do imposto no local de consumo, corrigindo desigualdades regionais na arrecadação. Essa união de impostos será chamada de **IVA Dual**.

> *[Imagem: Modelo exemplificando a junção dos impostos no IVA Dual]*

O período de transição para o novo modelo será gradual, com a implementação total prevista para **2033**:

- **2026** – ano de teste para o CBS e o IBS, com alíquotas de 0,9% e 0,1%, respectivamente, sem recolhimento de fato do imposto, apenas o destaque;
- **A partir de 2027** – haverá a cobrança do CBS e a extinção do PIS e da COFINS.

---

## Linha do Tempo da Reforma Tributária

> *[Imagem: Linha do tempo da Reforma Tributária]*

---

## Configurações e Cadastros Iniciais no Bimer

O pontapé inicial é dado com a versão **11.02.02.00**, que traz as primeiras ferramentas essenciais para configurar o Bimer e começar a se familiarizar com o **IBS** e a **CBS**.

### Configurador

As maiores novidades da Reforma Tributária estão concentradas no **Configurador do Bimer**. Você encontrará tabelas e campos novos para o IBS e a CBS. O principal destaque é a nova tela para ajustar as **Operações**, projetada para ser um grande facilitador para a transição da reforma tributária.

#### Cadastro de Países

Em **Configurador >> Geral >> Endereços >> País**, foi adicionado um novo campo:

- **CBS – Contribuição sobre Bens e Serviços >> Alíquota(%)** – traz a alíquota da Contribuição sobre Bens e Serviços (CBS).

#### Cadastro de UFs

Em **Configurador >> Geral >> Endereços >> UF**, temos um novo campo:

- **IBS – Imposto sobre Bens e Serviços >> Alíquota(%)** – traz a alíquota de Imposto sobre Bens e Serviços.

#### Cadastro de Cidades

Em **Configurador >> Geral >> Endereços >> Cidades**, teremos o campo de **alíquota de IBS Municipal**, já que ele será rateado entre as prefeituras e estados.

#### Cadastro da Empresa

Para calcular corretamente os novos tributos, é importante selecionar a **cidade** no cadastro da empresa. Isso porque, anteriormente, a cidade era representada apenas pelo seu nome informado manualmente. Como terá a informação de alíquota dentro do cadastro da cidade, é necessário vincular a cidade por meio do seu cadastro de forma que sejam preenchidos o código e o nome do município.

#### Operações

No cadastro da Operação teremos a opção **"Calcula IBS/CBS"** em **Configurador >> Estoque >> Operações >> Impostos >> Calcula IBS/CBS**.

Será habilitada a aba **IBS/CBS** onde o usuário poderá vincular a classificação tributária **"Geral"**, por **"SUFRAMA"**, **"Produtor rural"** ou **"Órgão público"**.

> **Atenção!** Quanto à hierarquia do resgate da classificação fiscal, há um botão de ajuda na tela.

#### Classificação Tributária

A **Classificação Tributária** (ou **Código de Classificação Tributária – cClassTrib**) é um novo código obrigatório criado pela Reforma Tributária.

A função dela é determinar o enquadramento fiscal de cada produto ou serviço no novo regime. Ela indica, de forma padronizada, se a operação está sujeita à:

- Tributação integral (alíquota padrão);
- Alíquotas reduzidas (como 60% ou 30% para certos setores);
- Imunidade, isenção ou suspensão;
- Regimes específicos (como o de Produtor Rural não contribuinte).

Nos Documentos Fiscais Eletrônicos (como NF-e e NFC-e), essa informação será registrada na tag:

```xml
<cClassTrib>
```

Este campo é obrigatório e deve conter o código de **6 dígitos** que corresponde à classificação definida na nova tabela fiscal do governo.

No sistema foi criada a tabela de **Classificação tributária** em **Configurador >> Estoque >> Tributos >> Classificação tributária**.

> **Observação¹:** O CST referente à Classificação Tributária é sempre os três primeiros dígitos do código da classificação.
>
> **Observação²:** Foi criada a tabela interna de CST que controla alguns marcadores de cálculo com a Classificação Tributária, tabela igual da Secretaria de Fazenda.
>
> **Observação³:** Com tributação regular, as alíquotas de IBS e CBS são zeradas, mesmo que estejam preenchidas no cadastro do País, UF e Cidade.
>
> **Atenção!** Crédito presumido não está disponível na versão 11.02.02.00.

#### Ajustar IBS/CBS das Operações

Esta é uma das principais funcionalidades liberadas na nova versão, onde é possível realizar a parametrização das operações já cadastradas no sistema com as informações referentes à reforma tributária.

Para acessar, navegue até **Configurador >> Estoque >> Ajustar IBS/CBS das Operações**.

Nessa tela encontramos opções de filtros que permitem ao usuário refinar exatamente quais operações deseja visualizar e configurar:

- **Tipos de Movimento** – filtre se a operação é de Compra, Entrada, Venda, Saída, Devolução e/ou Transferência;
- **Tributos** – busque por operações que envolvam tributos específicos;
- **Outras opções** – use campos específicos de pesquisa para refinar ainda mais a listagem;
- **Adição manual** – na tabela de resultados há a opção de adicionar ou remover operações manualmente.

Após definir os filtros e clicar em **"Atualizar filtro"**, o sistema retornará uma lista precisa de todas as operações cadastradas que correspondem aos critérios definidos.

No retorno das operações após filtro, é possível definir se calculará ou não o IBS/CBS e definir quais as classificações tributárias serão vinculadas a elas nos campos **"Geral"**, **"SUFRAMA"**, **"Produtor rural"** e **"Órgão público"**. Após isso, basta clicar em **"Concluir"**.

Para realizar as alterações em massa, marque a opção **"Habilitar alterações em massa nas operações selecionadas"**. Em seguida, na lista de operações, selecione quais delas receberão as mudanças utilizando o checkbox lateral. Defina a ação desejada e clique no botão **"Aplicar no resultado"**.

#### Vincular Classificação Tributária de IBS/CBS com Produto

Esse recurso permite vincular a classificação tributária em massa para os produtos. Para acessá-lo, navegue até **Configurador >> Estoque >> Manutenção de produtos >> "Vincular classificação tributária de IBS/CBS com produto"**.

Nesta tela, é possível filtrar produtos usando diversas categorias, como **Empresa**, **Família/Grupo de produtos**, **Características**, **Classificação Fiscal (NCM)** e **Status** (ativos/inativos).

1. Após definir os filtros, clique em **"Filtrar"** para ver o resultado na tabela de **Produtos selecionados**;
2. Nessa tabela, é possível incluir ou remover produtos manualmente, se necessário;
3. No campo abaixo, informe a **classificação tributária de IBS/CBS** que será aplicada a todos os produtos listados;
4. Para confirmar a operação e vincular a classificação, clique em **"Vincular"**.

---

## Módulos Impactados

### Cadastro de Produtos

A **Classificação tributária de IBS/CBS** é configurada dentro da aba **"Impostos"** do Cadastro de Produtos. O preenchimento pode ser feito de forma flexível: manualmente para cada produto individualmente, ou de maneira mais rápida, através da rotina de preenchimento em massa.

### Pedido de Compras

O detalhamento da tributação para o novo regime já está acessível no Pedido de Compras. Ao navegar para a seção **Itens >> Impostos**, você encontrará a aba dedicada **IBS/CBS**. Estas informações também serão exibidas na aba **"Impostos >> IBS/CBS"** da tela principal de lançamento do Pedido de Compra.

### Nota Fiscal de Entrada

O módulo de Nota Fiscal de Entrada também está preparado para o cálculo de IBS e CBS das notas de compra e entrada.

Na tela de lançamento dos itens na aba **"Impostos >> IBS/CBS"**, é possível visualizar as alíquotas e valores por item de acordo com o tipo de tributação. Na tela principal também serão exibidos os totais na aba **"Impostos >> IBS/CBS"**.

### Gerenciador de Eventos (Nota Fiscal de Entrada)

Esta rotina tem como objetivo permitir o envio de eventos específicos para notas fiscais que possuam incidência dos novos impostos.

> **Atenção:** Essa funcionalidade está disponível a partir da versão **11.02.03.26**.

#### Configurações

- **Diretório de Armazenamento** – configure a pasta onde os arquivos XML dos eventos serão salvos em **Configurador >> Faturamento >> Opções >> Dados Gerais >> Comunicação com a SEFAZ**;
- **Certificado digital da empresa** – configure o certificado digital válido em **Configurador >> Geral >> Empresas >> Geral >> Certificado Digital**;
- **Permissão de usuários** – o usuário precisa ter permissões no módulo para ter acesso.

#### Visão Geral

Existem duas formas de acessar a ferramenta no módulo Faturamento:

- **Menu Principal** – localizado na barra superior de ferramentas do módulo;
- **Menu de Contexto** – clique com o botão direito sobre uma nota já Liberada.

#### Cadastro e Envio de Evento

O usuário pode filtrar o documento diretamente no Gerenciador ou na tela principal do Nota Fiscal de Entrada.

> **Dica:** Se você abrir o Gerenciador com um documento já selecionado na grid principal do Nota Fiscal de Entrada, ele será levado automaticamente para o filtro.
>
> **Regra Importante:** Somente documentos com valores de IBS e CBS podem trabalhar com a rotina de eventos, seguindo a legislação vigente.

Ao clicar em **"Adicionar um evento"**, selecione o tipo desejado. Dependendo da escolha, o sistema permitirá vincular itens e confirmar o envio.

#### Requisitos para Lançamento de Eventos

Para que o sistema processe o lançamento dos eventos, os seguintes critérios devem ser atendidos simultaneamente:

- **Origem do Documento** – a nota fiscal deve ter sido, obrigatoriamente, importada via arquivo XML;
- **Configuração de Tributação** – a operação utilizada deve estar configurada para o cálculo de IBS/CBS;
- **Status do Documento** – não é permitido o lançamento em documentos que possuam histórico de devolução;
- **Tipo de Nota** – o documento não pode ser classificado como Nota Complementar;
- **Finalidade da Operação** – a opção de Ajuste deve estar desmarcada nas configurações da operação.

#### Operações de Manutenção

**Cancelamento de Evento:**
1. No gerenciador, clique com o botão direito sobre o evento desejado;
2. Selecione a opção **"Cancelar"**;
3. Confirme o envio do Cancelamento.

**Inserir dados de Autorização Manualmente:**
1. Clique com o botão direito sobre o Evento desejado;
2. Selecione **"Inserir Dados de Autorização Manualmente"**;
3. Preencha o número do protocolo de autorização.

**Editar dados de autorização manualmente:**
1. Clique com o botão direito sobre o Evento;
2. Selecione **"Editar Dados de Autorização"** e faça a correção.

**Registro de Logs e Auditoria:**
Acesse **Configurador Bimer >> Geral >> Ferramentas >> Auditoria dos Sistemas**. Lá você encontrará os logs detalhados de todas as movimentações do Gerenciador.

### CT-e

No módulo de CT-e, na tela de cadastramento e na importação, na aba **"Tributos"** terá a aba **"IBS/CBS"** para destaque dos tributos.

### BI Estoque

No cenário de **"Notas fiscais de entrada x Itens das notas"**, as colunas referentes ao novo regime tributário de IBS e CBS já estão disponíveis, permitindo uma análise fiscal detalhada dos documentos de entrada. Essa estrutura permite visualizar as alíquotas (Al.) e valores (Vl.) separadamente, conforme a origem do tributo.

### Cobertura Contábil

Na versão **11.02.03.04** foram implementados os campos de IBS/CBS para configuração das operações para geração de lotes de estoque.

---

## Faturamento

### Emissão de NF-e

As emissões de notas fiscais que calculam IBS e CBS já estão gerando os XMLs com as tags correspondentes à Reforma Tributária.

Para o IBS/CBS está sendo feito o cálculo com a classificação tributária **comum**, com **tributação regular**, com **diferimento** e com **redução**.

### Lançamento da Nota

Na tela de itens da nota fiscal temos agora a aba **"Impostos"** onde é possível consultar a classificação tributária vinculada ao item ou na operação. Apenas o campo **"Classificação tributária"** ficará habilitado para edição.

> O usuário só conseguirá editar se tiver a permissão **Permitir edição da Classificação tributária de IBS/CBS** habilitada no cadastro de usuário no módulo faturamento em assinatura eletrônica.

Nesta aba o usuário verá também a base de cálculo dos dois impostos, a alíquota efetiva de **IBS Municipal**, **IBS Estadual** e seu somatório, além dos seus valores. E a alíquota efetiva de **CBS** e seu valor.

> **Atenção!** Caso a operação esteja configurada para calcular IBS/CBS, é obrigatório o preenchimento da classificação tributária no item.

### Notas Específicas

As notas específicas (Estorno, Estorno de crédito de ICMS (MG), Complementar/Suplementar, Ressarcimento de ICMS, Transferência de crédito de ICMS, Crédito/débito de ICMS e Devolução de valor) **não poderão calcular IBS/CBS**.

### Rotinas do Faturamento

1. Ao **duplicar o documento** irá calcular os impostos IBS/CBS conforme configurado no produto ou operação;
2. A configuração **"Aglutinar os lotes/séries dos produtos na impressão da NF/OE e na impressão do DANFE"** (em **Configurador >> Faturamento >> Opções >> Dados gerais >> Impressão**) também estará funcionando para o cálculo de IBS/CBS;
3. As **cópias de notas fiscais canceladas ou devolvidas** também estarão disponíveis para o cálculo do IBS/CBS;
4. Ao realizar o **"Fechamento de Ordem de Entrega"** calcula automaticamente os valores dos novos impostos (IBS e CBS);
5. Ao enviar do modelo **NFCom** será informado no XML as tags referente a IBS/CBS.

### Gerenciador de Eventos (Faturamento)

Esta rotina tem como objetivo permitir o envio de eventos específicos para notas fiscais que possuam incidência dos novos impostos.

> **Atenção:** Essa funcionalidade está disponível a partir da versão **11.02.03.26**.

#### Configurações

1. Acesse o **Configurador Bimer**;
2. Vá em: **Faturamento >> Opções >> Dados Gerais >> Comunicação com a SEFAZ**;
3. Configure o campo: **Diretório raiz de armazenamento dos XMLS de eventos de NF-e**;
4. Libere acesso nas **Permissões de Usuários**.

#### Acesso ao Gerenciador

Existem duas formas de acessar a ferramenta no módulo Faturamento:

- **Menu Principal** – localizado na barra superior de ferramentas do módulo;
- **Menu de Contexto** – clique com o botão direito sobre uma nota já impressa.

#### Cadastro e Envio de Evento

O usuário pode filtrar o documento diretamente no Gerenciador ou na tela principal do Faturamento.

> **Dica:** Se você abrir o Gerenciador com um documento já selecionado na grid principal do Faturamento, ele será levado automaticamente para o filtro.
>
> **Regra Importante:** Somente documentos com valores de IBS e CBS podem trabalhar com a rotina de eventos, seguindo a legislação vigente.

#### Operações de Manutenção

**Cancelamento de Evento:**
1. No gerenciador, clique com o botão direito sobre o evento desejado;
2. Selecione a opção **"Cancelar"**;
3. Confirme o envio do Cancelamento.

**Inserir dados de autorização manualmente:**
1. Clique com o botão direito sobre o Evento desejado;
2. Selecione **"Inserir Dados de Autorização Manualmente"**;
3. Preencha o número do protocolo de autorização.

**Editar dados de autorização manualmente:**
1. Clique com o botão direito sobre o Evento;
2. Selecione **"Editar Dados de Autorização"** e faça a correção.

**Registro de Logs e Auditoria:**
Acesse **Configurador Bimer >> Geral >> Ferramentas >> Auditoria dos Sistemas**.

---

## Nota Fácil

### Emissão da NF-e e NFC-e

Recursos disponibilizados dentro do Nota Fácil nas emissões de NF-e e NFC-e:

1. Emissão de NF-e e NFC-e calcula IBS/CBS, mas a princípio somente os cálculos com **tributação básica** e com **redução**;
2. Foi criado no totalizador do documento os campos para mostrar o valor calculado na DF-e de **IBS Municipal**, **IBS Estadual**, **IBS Total** (somatório de IBS Mun. e IBS Est.) e **CBS**;
3. Rotina de devolução e troca com DF-e que calculam IBS/CBS;
4. Duplicação de DF-e que calcula IBS/CBS.

---

## Devolução e Troca de Venda

Dentro do módulo de Devolução e Troca de Venda também há recursos disponibilizados:

1. Devolução total ou parcial de notas fiscais, ou pedidos que calcularam IBS/CBS;
2. Troca de notas fiscais ou pedidos que calcularam IBS/CBS;
3. Disponibilizado no totalizador do módulo os campos referentes aos impostos IBS e CBS.

---

## Pedido de Venda

Recursos disponíveis no Pedido de Venda:

1. Para o IBS/CBS está sendo feito o cálculo com a classificação tributária **comum**, com **tributação regular**, com **diferimento** e com **redução**;
2. Na tela de itens do pedido temos agora a aba **Impostos** onde é possível consultar a classificação tributária vinculada ao item ou na operação. Apenas o campo **"Classificação tributária"** ficará habilitado para edição;

> **Observação:** Caso a operação esteja configurada para calcular IBS/CBS é obrigatório o preenchimento da classificação tributária no item.

3. Duplicação de pedidos que calculam IBS/CBS;
4. Transformação de pedido em nota fiscal ou em ordem de entrega que calculam IBS/CBS (sendo válido para o cálculo com a classificação tributária comum, com tributação regular, com diferimento e com redução);
5. A **Rotina de Estoque Distribuído** também irá calcular IBS e CBS;
6. A **Rotina de Simples Faturamento** também irá calcular IBS e CBS.

---

## Gerente Eletrônico

### GeGeraNFOE (GeAgente)

Os pedidos que calculam IBS/CBS poderão ser transformados em NF-e ou em OE mantendo o cálculo dos impostos.

### GeEnviaNFe (GeAgente)

As notas fiscais que calculam IBS/CBS poderão ser emitidas por esta tarefa, gerando os XMLs com as tags referente à Reforma Tributária.

### Liberador de Estoque

Os documentos gerados no Faturamento e Nota Fácil que calculam IBS/CBS terão sua movimentação no estoque e financeiro realizados.

### Separação de Pedido

Os pedidos de venda que calculam IBS/CBS poderão ser separados por este módulo mantendo o cálculo dos impostos.

### Liberação de Documento

Os documentos que calculam IBS/CBS poderão ser liberados por este módulo mantendo o cálculo dos impostos.

### Liberação de Pedido

Os pedidos de venda que calculam IBS/CBS poderão ser liberados por este módulo mantendo o cálculo dos impostos.

---

## Integração Fiscal

A partir da versão **11.02.03.00** do Bimer, a integração fiscal já consegue levar os dados de IBS/CBS. Com a reforma, foram criados os registros **044** (nota fiscal) e **045** (itens da nota fiscal).

Nenhuma configuração adicional precisa ser realizada, somente que o cliente cadastre a nota corretamente e marque a operação para atualizar escrita fiscal.

Na versão **11.02.03.04** foram liberados os campos de IBS/CBS para visualização na tela de documentos na rotina de integração fiscal.

> **ATENÇÃO:** A partir da versão **11.02.03.26** o Bimer passa a considerar as informações de IBS e CBS de notas de serviços prestados e tomados na integração com escrita fiscal, realizando a geração do registro **049** no arquivo fiscal, garantindo maior aderência às novas exigências da reforma tributária. É feito de forma automática, contendo qualquer informação de IBS/CBS preenchido ele irá gerar o registro 049.

---

## Tags do XML

> *[Imagem: Exemplos das tags do XML que serão geradas com a Reforma Tributária]*
