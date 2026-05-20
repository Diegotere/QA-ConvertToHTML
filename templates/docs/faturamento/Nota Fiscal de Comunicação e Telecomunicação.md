# Nota Fiscal de Comunicação e Telecomunicação — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Configurador Bimer](#configurador-bimer)
- [Cadastro de Produto](#cadastro-de-produto)
- [Cadastro de Pessoa](#cadastro-de-pessoa)
- [Rotina de Emissão de Notas](#rotina-de-emissão-de-notas)
- [Manutenção de Contratos](#manutenção-de-contratos)

---

## Introdução

Assim como para qualquer outro tipo de venda de produto ou prestação de serviços, para a prestação de serviços de comunicação ou telecomunicação também é exigida a emissão de uma nota fiscal. Porém, as empresas que prestam esse tipo de serviço têm obrigatoriedades específicas para esse segmento.

Os serviços de comunicação e de telecomunicação são regidos pela legislação do **ICMS** (imposto sobre operações relativas à circulação de mercadorias e sobre prestações de serviços de transporte interestadual, intermunicipal e de comunicação). E não pela legislação do ISS.

O **Convênio ICMS 115/03** define, entre outras, as seguintes obrigatoriedades para as empresas prestadoras de serviço de telecomunicação ou de comunicação:

> *Cláusula primeira:* A emissão, escrituração, manutenção e prestação das informações relativas aos documentos fiscais a seguir enumerados, com emissão em uma única via por sistema eletrônico de processamento de dados, obedecerão ao disposto neste convênio:
> - II – Nota Fiscal de Serviço de Comunicação, modelo 21;
> - III – Nota Fiscal de Serviço de Telecomunicações, modelo 22;
> - IV – qualquer outro documento fiscal relativo à prestação de serviço de comunicação ou ao fornecimento de energia elétrica.
>
> *Cláusula segunda:* Em substituição à segunda via do documento fiscal, cuja impressão é dispensada, as informações constantes da primeira via do documento fiscal deverão ser gravadas até o 5º dia do mês subsequente do período de apuração em meio eletrônico não regravável.

Em resumo, a empresa precisa emitir a nota fiscal e gerar arquivos com os dados das notas emitidas no período.

> As notas fiscais modelo 21 e 22 são documentos **impressos**, e não Notas Fiscais eletrônicas.

---

## Configurador Bimer

### Cadastro de Empresas

Para que seja possível emitir uma Nota Fiscal de Comunicação ou Telecomunicação, é necessário definir quais empresas poderão fazer essa emissão. Acesse **Configurador Bimer >> Geral >> Empresas**, selecione e edite a empresa desejada. Na aba **Emissão de notas**, marque a opção **"Possui nota fiscal de Telecomunicação (modelo 21/22)"**.

Para as empresas que tiverem essa opção marcada, será exibida a aba **"Telecomunicações"** no Faturamento.

### Operação para Emissão de NF

O cadastro da tabela da operação para emissão da Nota Fiscal de comunicação/telecomunicação requer atenção aos seguintes pontos:

- **Tipo de movimento** – deve ser marcada a opção **"Saída"**;
- **Atualiza Financeiro** – deve ser marcada, para que o sistema gere o título referente à NF no módulo Contas a Receber;
- **Atualiza estoque** – deve estar **desmarcada**, visto que não se trata de um produto tangível, e sim um serviço;
- **Impostos** – a definição de quais impostos precisam ser calculados deve ser feita pelo contador da empresa;
- **Tipo de Documento** – as notas fiscais de comunicação ou telecomunicação têm modelos específicos definidos pelo FISCO. É necessário criar e selecionar um tipo de documento de acordo com o tipo de operação.

O tipo de documento deverá estar com a opção **Gera número sequencial** marcada, os campos **Número Sequencial**, **Espécie**, **Série/Subsérie** devem estar preenchidos, e no campo **Modelo Fiscal (ICMS)** deve ser selecionado o código **21** ou **22**:

- **Serviço de Comunicação: Modelo 21** – Nota Fiscal de Serviço de Comunicação (NFSC)
- **Serviço de Telecomunicação: Modelo 22** – Nota Fiscal de Serviço de Telecomunicação (NFST)

Na aba **Nota Fiscal / Ordens de entrega**, marque a opção **"Utilizar este documento para emissão de notas fiscais / ordens de entrega"** e no campo **"Arquivo Layout de notas fiscais"** informe o arquivo RTM correspondente.

- **CFOP** – os CFOPs devem ser preenchidos corretamente de acordo com o tipo de operação. Geralmente será informado um CFOP do grupo **5.300**, que se refere a "PRESTAÇÕES DE SERVIÇOS DE COMUNICAÇÃO", porém quem deve definir qual será utilizado é o setor de contabilidade da empresa.

### Classificação do Item de Telecomunicação

Em **Configurador Bimer >> Estoque >> Produtos**, foi criada a tabela de **Classificação do item de Telecomunicação**, que será utilizada no cadastro do produto/serviço de comunicação ou telecomunicação, para enquadrá-lo à lista de classificações de acordo com o **CONVÊNIO ICMS 115/03**.

Essa tabela já vem pré-cadastrada, mas é possível incluir novas classificações. Para isso, basta clicar na opção **"Novo"** e preencher com o código e descrição da classificação.

> **Atenção:** É possível incluir novas classificações de item, porém, deve-se respeitar a lista de classificações disponibilizada pelo governo.

### Opções do Configurador Bimer

#### Operação

Em **Configurador Bimer >> Faturamento >> Opções >> Operação >> Telecomunicação** devem ser informados os tipos de documentos que podem ser utilizados nas operações de emissão de NF de telecomunicação.

> **Atenção:** O sistema só permite que sejam utilizadas na emissão de NF, no Faturamento ou na Manutenção de Contratos, as operações que estiverem configuradas com o tipo de documento informado nesta área.

Nesta tela também é possível informar uma **operação padrão** para emissão de notas fiscais de telecomunicação. A operação informada nesta tela será sugerida pelo módulo Faturamento.

> **Observação:** Para informar uma operação neste campo, antes informe o tipo de documento na área "tipo de documento para nota fiscal de telecomunicação", grave a tela de opções, e em seguida retorne e selecione a operação padrão.

#### Tipo de Finalidade

Em **Configurador Bimer >> Faturamento >> Opções >> Telecomunicação** deverá ser escolhido o **Tipo de finalidade**, que define o tipo de serviço de telecomunicação que a empresa presta. Essa configuração influenciará nos dados dos arquivos que o sistema gerará referentes às NF emitidas.

---

## Cadastro de Produto

Os produtos a serem utilizados para a emissão da nota fiscal de serviços de telecomunicação devem ter as seguintes características:

### Tipo de produto

Na aba **Identificação** deverá ser escolhido se o tipo do produto é **Produto comercializado**, **Serviço** ou **Serviço Comercializado**, de acordo com orientação do setor de contabilidade.

### Classificação do Item

Na aba **"Específico" >> Telecomunicação** selecione a **classificação do item** correspondente ao tipo de serviço que se está cadastrando.

### Item na lista de serviço

Caso tenha sido escolhido **Serviço** ou **Serviço Comercializado** como tipo do produto, na aba **Geração NF-e >> Códigos >> Item na lista de serviços**, selecione o código de identificação do serviço, para emissão de NF-e.

> **Atenção!** Na explicação acima foram citadas apenas as configurações que influenciam diretamente na emissão das notas fiscais modelo 21 ou 22. Porém, é importante que as demais regras de cadastro sejam configuradas corretamente de acordo com o padrão da empresa. Como, por exemplo, tabela de cálculo de ICMS, classificação fiscal, unidade do produto, grupo, etc.

---

## Cadastro de Pessoa

Quando a empresa trabalha com serviços de telecomunicação, é exigido que nas informações enviadas para o governo seja especificado o tipo de atividade que o seu cliente exerce.

Acesse **Cadastro de Pessoas >> Cliente >> Cadastro >> Complementar** e escolha o **Tipo de cliente para telecomunicação**.

Os tipos de clientes existentes são:

1. Comercial;
2. Industrial;
3. Residência / Pessoa Física;
4. Produtor Rural;
5. Órgão de administração pública estadual direta e suas fundações e autarquias. Concedido ICMS 107/95;
6. Prestador de serviço de telecomunicação responsável pelo recolhimento do imposto. Convênio ICMS 17/13;
7. Missões diplomáticas, Repartições consulares e Organizações Internacionais. Convênio ICMS 158/94;
8. Igrejas e Templos de qualquer natureza;
9. Outros não especificados anteriormente.

---

## Rotina de Emissão de Notas

As notas fiscais dos modelos 21 e 22 podem ser criadas manualmente pelo módulo **Faturamento** (`Faturamento.exe`), ou automaticamente através do módulo de **Manutenção de Contratos** (`FinManutencaoContratos.exe`).

### Faturamento

#### Emissão da Nota Fiscal

No módulo Faturamento, ao selecionar uma empresa configurada para emissão de nota fiscal modelos 21 e 22, será apresentada uma nova aba no rodapé da tela chamada **Telecomunicações**.

Nesta área, basta clicar em **Novo** para iniciar a criação de uma nota fiscal de telecomunicação.

O preenchimento dos dados da NF deve ser feito normalmente. Porém é importante ter atenção aos seguintes pontos:

- **Destinatário** – só podem ser utilizadas como destinatário, pessoas cadastradas na categoria de clientes, configuradas conforme explicado nos primeiros tópicos deste manual;
- **Operação** – o sistema só permitirá selecionar operações que estejam configuradas com um tipo de documento modelo fiscal 21 ou 22;
- **Produto** – só poderão ser selecionados os produtos/serviços criados especificamente para esse fim.

Na tela de criação de notas foi inserida a aba **Telecomunicação**, que possui a identificação do **Tipo de Finalidade** da nota. Por padrão, o sistema trará o tipo informado em **Configurador Bimer >> Faturamento >> Opções >> Telecomunicação**, porém é possível alterar a cada emissão de nota.

> **Atenção!** Os campos de **data de início** e **data de término** só aparecem caso o emitente da nota seja de SP. Esta informação foi criada a partir da versão **10.00.02.00**. No **Faturamento >> Ferramentas >> TXT para o convênio 115/03**:
> - Com o preenchimento da data do início e a data do término na nota de telecomunicação será gerado o arquivo **Mestre (M)**;
> - A "Data de início" da prestação será preenchida no formato AAAAMMDD com a posição inicial 285 e posição final 292;
> - A "Data de término" da prestação será preenchida no mesmo formato com a posição inicial 293 e posição final 300.

Após o preenchimento dos dados, basta clicar no botão **Imprimir** para finalizar a emissão da Nota Fiscal.

> **Observação:** As notas fiscais dos modelos 21 ou 22 são documentos impressos, e não uma Nota Fiscal Eletrônica.

Quando uma nota fiscal de telecomunicação é emitida, o sistema cria uma **chave de codificação** para ela. Essa chave faz parte dos dados que devem ser enviados ao FISCO posteriormente, e pode ser consultada na própria grade da tela inicial do faturamento.

> **Atenção!** Assim como qualquer outra NF emitida pelo faturamento, é necessário executar o **liberador do estoque** para que ela seja finalizada.

#### Arquivo Eletrônico – Convênio 115/03

Além da emissão da nota fiscal, a empresa prestadora do serviço de telecomunicação deverá gerar periodicamente arquivos no formato TXT com os dados das NF emitidas no período.

A empresa tem 02 obrigatoriedades em relação aos dados salvos em meio eletrônico:
1. Mantê-los em posse da empresa, em substituição à segunda via da nota;
2. Enviar à SEFAZ dentro do período estabelecido pelas UFs para a entrega, quando solicitado.

A geração do arquivo é feita no próprio módulo **Faturamento >> Aba Ferramentas >> TXT para o convênio 115/03**.

Ao clicar nesta opção, informe a empresa, o período de emissão, o tipo de documento, e em seguida clique em **Atualizar filtro**. Serão listadas todas as notas fiscais emitidas no período. Marque os documentos que devem ser incluídos no arquivo e clique em **Exportar**.

O sistema criará, no mínimo, **03 arquivos**, cada um deles contendo informações diferentes:

- **Mestre de documento fiscal** – com informações básicas dos documentos fiscais;
- **Item do documento fiscal** – com detalhamento das mercadorias ou serviços prestados;
- **Dados cadastrais do destinatário do documento fiscal** – com as informações cadastrais do destinatário.

Os arquivos serão identificados no formato:

- **UF** – sigla da unidade federativa do emitente;
- **CNPJ** – CNPJ do emitente;
- **Modelo (MM)** – modelo dos documentos fiscais;
- **Série (SSS)** – série dos documentos fiscais;
- **Ano (AA)** – ano do período de apuração;
- **Mês (MM)** – mês do período de apuração;
- **Status (Snn)** – indica se o arquivo é normal (N) ou substituto (S);
- **Tipo (T)** – inicial do tipo do arquivo:
  - `M` – MESTRE DE DOCUMENTO FISCAL;
  - `I` – ITEM DE DOCUMENTO FISCAL;
  - `D` – DADOS CADASTRAIS DO DESTINATÁRIO DO DOCUMENTO FISCAL;
- **Volume (VVV)** – número sequencial do volume. A quantidade de registros do arquivo MESTRE é limitada a 100 mil ou 1 milhão de documentos fiscais, conforme determinado no item 4.4.1 do convênio 115/03 do ICMS.

> **Observação:** O convênio 115/03 do ICMS menciona a criação de um quarto tipo de arquivo: o arquivo de "Identificação e Controle". Entretanto, esse arquivo só é gerado pelo aplicativo validador, disponibilizado pela SEFAZ. Ou seja, esse arquivo **não será gerado pelo Bimer**.

---

## Manutenção de Contratos

Além de criar manualmente as notas fiscais através do módulo Faturamento, o módulo **Manutenção de Contratos** também pode criar os documentos para emissão de notas fiscais de telecomunicação.

Acesse o módulo **Manutenção de Contratos** (`FinManutencaoContratos.exe`) e escolha o tipo de contrato a ser criado (Fixo, variável ou negociação). A criação do contrato deve ser feita no mesmo padrão de qualquer outro contrato, mas é preciso ter atenção aos seguintes pontos:

1. **Empresa** – deve ser selecionada a empresa configurada para emissão de notas fiscais de telecomunicação;
2. **Cliente** – deve ser selecionada uma pessoa da categoria cliente, configurada para notas fiscais de telecomunicação;
3. **Operação** – deve ser selecionada uma operação configurada para emissão de notas fiscais de telecomunicação. A operação é informada na aba **Dados da cobrança**. Ao selecionar a operação para notas de telecomunicação, é habilitado na aba **Complementar** o campo **Tipo de Finalidade**, no qual deve ser selecionado o tipo de serviço a ser faturado;
4. **Item** – deve ser selecionado o produto configurado como serviço de telecomunicação.

> **Atenção!** Para que seja possível trabalhar com o módulo Manutenção de Contratos gerando documentos no faturamento para emissão de nota fiscal de telecomunicação, é preciso verificar os seguintes pontos:
>
> - O produto **não pode** estar cadastrado com os tipos **Serviço** ou **Serviço Comercializado**;
> - **Configurador Bimer >> Geral >> Opções >> Geral >> Produto a ser utilizado como padrão** não pode estar preenchido com um produto do tipo serviço;
> - **Configurador Bimer >> Financeiro >> Opções >> Manutenção de Contratos >> Geração de cobrança >> Utilizar o produto padrão ao gerar "Nota Fiscal" ou "títulos a receber"** deve estar **desmarcada**.
>
> Caso uma destas configurações estejam preenchidas, o sistema poderá apresentar a seguinte mensagem: *"O produto padrão é de serviço ou serviço comercializado, porém a operação possui um tipo de documento configurado para nota fiscal."*

> **Observação:** Caso você ainda não conheça o funcionamento padrão do módulo Manutenção de Contratos, consulte o manual específico disponível no Portal da UCA >> Bimer >> Manuais >> Manutenção de contratos.
