# Importação de CT-e — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
  - [O que é CT-e (Conhecimento de Transporte Eletrônico)?](#o-que-é-ct-e-conhecimento-de-transporte-eletrônico)
  - [Benefícios](#benefícios)
  - [O que é o CT-e?](#o-que-é-o-ct-e)
- [Rotinas](#rotinas)
  - [Novo CT-e](#novo-ct-e)
    - [Identificação](#identificação)
    - [Dados Complementares](#dados-complementares)
    - [Pessoas](#pessoas)
    - [Carga](#carga)
    - [Tributos](#tributos)
    - [Documentos](#documentos)
    - [Documentos anteriores](#documentos-anteriores)
    - [Modal](#modal)
    - [Cobrança](#cobrança)
    - [Específico](#específico)
  - [Importar](#importar)
  - [Linha do tempo](#linha-do-tempo)
  - [Nota Fiscal de Entrada](#nota-fiscal-de-entrada)
- [Informações Adicionais](#informações-adicionais)
  - [Custo](#custo)
  - [Dados das Pessoas](#dados-das-pessoas)

---

## Introdução

### O que é CT-e (Conhecimento de Transporte Eletrônico)?

É um documento eletrônico emitido pelo transportador que acompanha a prestação de serviços de transporte. Assim como a NFe, o CTe é emitido e armazenado eletronicamente.

Este documento tem como objetivo permitir que seja documentado, para fins fiscais, a prestação do serviço de transporte de cargas, seja ela feita por qualquer um dos modais: rodoviário, aéreo, ferroviário, aquaviário ou dutoviário (Transporte Tubular).

O documento tem validade jurídica devido a assinatura digital do emitente, cuja recepção e autorização de uso são controladas pelo Fisco.

> **Observação:** O modal dutoviário é o transporte realizado através de tubulações, podendo transportar óleos, gases e produtos químicos através da gravidade ou da pressão.

A utilização deste documento permite eliminar alguns documentos fiscais impressos como, por exemplo, os modelos de documento: 7 (quando utilizada em transporte de cargas), 8, 9, 10, 11 e 27.

O CT-e é válido em todos os estados brasileiros e o Distrito Federal.

### Benefícios

O CT-e traz algumas vantagens como:

- Redução de custos de impressão e armazenamento por ser eletrônico;
- Reduz o tempo de parada dos caminhões em postos fiscais de fronteira;
- Simplifica o processo de fiscalização de mercadorias;
- Redução de erros de escrituração;
- Simplificação da escrituração fiscal e contábil;
- Facilita a obtenção de dados diretamente por um sistema de gestão, como é o caso do CT-e ou qualquer sistema de Gerenciamento Eletrônico de Documentos (GED).

### O que é o CT-e?

O módulo tem por objetivo o gerenciamento de CT-e com versão 3.00 por empresa. Permite cadastrar o CT-e manualmente ou por importação via XML (a partir da versão 10.00.06.00 do Bimer, é possível importar CT-e na versão 4.00).

> **Importante:** O módulo **NÃO** realiza a emissão do documento.

Outros recursos que este módulo possui são:

- Possibilita a visualização organizada dos dados do CT-e;
- Armazenamento dos XMLs importados em banco de dados;
- Relacionamento dos CT-e com documentos de entrada;
- Rastreabilidade pela linha do tempo;
- Preenchimento dos dados de aviso de transporte para integração fiscal.

---

## Rotinas

Será demonstrado toda a rotina de como importar ou registrar a CT-e pelo módulo CT-e para vincular a uma nota no Nota Fiscal de Entrada e também como fazer a importação e vínculo diretamente do Nota Fiscal de Entrada.

### Novo CT-e

No módulo CT-e informe a empresa e clique em **Novo**.

> *[Imagem: Tela principal do módulo CT-e]*

O cadastro foi implementado com base no layout do Manual do Contribuinte CT-e 3.00 disponibilizado pela receita federal em Leiaute CT-e – Estrutura Genérica (pág. 153 a 179), assim como os leiautes modais (pág. 189 a 199).

O módulo se ateve às informações de CT-e normal, não tendo sido implementados os campos referentes a CT-e complementar, CT-e anulação e CT-e OS. Também não foram adicionados os campos específicos referentes ao transporte de veículos novos.

Propositalmente o sistema somente apresenta validações para os campos que são obrigatórios pelo leiaute, de forma que qualquer CT-e válido para a Sefaz seja passível de importação e edição, independente das informações contidas.

Cadastrando manualmente um CT-e teremos várias informações que foram agrupadas por abas:

#### Identificação

Possui as informações principais do documento, incluindo dados de identificação.

> *[Imagem: Aba Identificação do CT-e]*

- **Chave de acesso** — Tem como objetivo a identificação do CT-e, similar a chave de uma NF-e.
- **Modelo do documento fiscal** — Neste local é informado o modelo do documento, que deverá ser o 57.
- **Tipo de serviço** — Será informado o tipo de serviço que poderá ser: Normal, Subcontratação, Redespacho, Redespacho Intermediário e Serviço vinculado a multimodal.
  - O remetente poderá não ser informado para os CTe de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.
  - O destinatário poderá ser omitido em caso de redespacho intermediário.
  - As informações dos documentos transportados pelo CT-e é opcional para redespacho intermediário e serviço vinculado a multimodal.
  - No modal aquaviário, as informações dos contêineres são somente para redespacho intermediário e serviço vinculado a multimodal.
- **Valor do serviço (vTPrest)** — É o valor total da prestação, ou seja, o valor total do frete, o quanto o tomador do serviço vai pagar para que a mercadoria seja transportada.
- **Valor a receber (vRec)** — Por exemplo, supondo que o valor do serviço seja 100 reais e o tomador já pagou antecipado 30 reais, o vRec seria 70 reais.

> **Observação:** No Bimer toda integração com o financeiro somente será feita pelo documento de entrada.

- **Código do local de origem** — É a sigla ou código interno da Filial/Porto/Estação/Aeroporto de Origem.
- **Código do local de destino** — É a sigla ou código interno da Filial/Porto/Estação/Aeroporto de Destino.

> **Observações para o modal aéreo:** Preenchimento obrigatório para o modal aéreo. O código de três letras IATA do aeroporto de partida deverá ser incluído como primeira anotação. Quando não for possível, utilizar a sigla OACI.

- **Locais de passagem** — Evento registrado pela SEFAZ no CT-e referente a passagem do MDF-e no Posto Fiscal. No Rio Grande do Sul por exemplo, é obrigatório o Registro de Passagem para mercadorias que entrarem no estado desde 1º de fevereiro de 2013 conforme Instrução Normativa RE Nº 13/2013.

#### Dados Complementares

Nesta aba fica reunido algumas informações como observações, previsão de entrega, características de transporte e serviço e dados da emissão.

> *[Imagem: Aba Dados Complementares]*

- **Característica do serviço** — A característica poderá ser por exemplo: ENTREGA EXPRESSA; LOGÍSTICA REVERSA; CONVENCIONAL; EMERGENCIAL.
- **Transporte** — O transporte pode ser por exemplo: REENTREGA; DEVOLUÇÃO; REFATURAMENTO.
- **CT-e globalizado** — É o mesmo conhecimento de transporte eletrônico emitido normalmente, porém com um indicador que permite a inclusão de várias notas fiscais originadas de uma mesma coleta (pelo menos 5) dentro do mesmo Estado, ou destinadas a uma única entrega.

#### Pessoas

Neste local ficam as pessoas envolvidas no transporte.

> *[Imagem: Aba Pessoas do CT-e]*

- **Remetente** — É a pessoa que promove a saída inicial da carga. Poderá não ser informado para os CT-e de redespacho intermediário e serviço vinculado a multimodal. Nos demais casos deverá sempre ser informado.
- **Emitente** — É o prestador de serviço de transporte que emite o documento fiscal relativo à prestação do serviço de transporte.
- **Destinatário** — É a pessoa a quem a carga é destinada. Só pode ser omitido em caso de redespacho intermediário.
- **Expedidor** — É aquele que entrega a carga ao transportador para efetuar o serviço de transporte.
- **Recebedor** — É a pessoa que recebe a carga do transportador.
- **Tomador do serviço** — É a pessoa que contratualmente é a responsável pelo pagamento do serviço de transporte, podendo ser o remetente, o destinatário ou um terceiro interveniente.

#### Carga

Neste local, ficam informações gerais sobre a carga a ser transportada.

> *[Imagem: Aba Carga do CT-e]*

- **Produto predominante** — É informado apenas qual o produto que é mais predominante sendo transportado. Poderá ter outros produtos sendo transportados, mas é informado apenas o mais predominante.
- **Características da carga** — É informado alguma característica específica da carga, por exemplo, FRIA, GRANEL, REFRIGERADA, Medidas: 12X12X12.

#### Tributos

Local onde fica centralizado as informações tributárias da carga. Essa tela já conta também com a aba de IBS/CBS, contemplando a reforma tributária.

> *[Imagem: Aba Tributos do CT-e]*

#### Documentos

Aqui ficam todos os documentos que estão relacionados a carga a ser transportada. Esse local é importante, pois será através das chaves de acesso informadas na aba **NF-e** ou **NF** é que o sistema conseguirá realizar o vínculo entre o CTe e a nota no sistema.

> *[Imagem: Aba Documentos do CT-e]*

- Na aba **Outros documentos** é onde poderá informar outros tipos de documentos como NF-e, NF e outros.
- Na aba **Multimodal vinculado** é onde deverá informar seus documentos fiscais, caso trabalhe com multimodal.

#### Documentos anteriores

Neste local é onde poderá vincular outros documentos que vieram anteriormente ao documento atual como, por exemplo, o caso do redespacho.

> *[Imagem: Aba Documentos anteriores]*

#### Modal

Neste local ficam informações que são específicas de determinado modal.

> *[Imagem: Aba Modal do CT-e]*

No campo **Tipo do modal** é onde poderá escolher se o modal será: rodoviário, aéreo, aquaviário, ferroviário, dutoviário e multimodal.

Dependendo do tipo de modal informado, os campos abaixo vão mudar, por exemplo, colocando o rodoviário aparecerá os campos: RNTRC e Ordens de coleta. Já se colocar dutoviário, aparecerá os campos: valor da tarifa, data inicial e final.

#### Cobrança

Neste local ficará o valor de cobrança referente ao transporte da mercadoria.

> *[Imagem: Aba Cobrança do CT-e]*

Caso insira dados de duplicatas, a partir da versão 9.01.00.00 é possível gerar títulos a pagar a partir da CT-e, tanto manual quanto automaticamente.

Para escolher o comportamento do sistema, acesse **Configurador / Estoque / Opções / Aba CT-e**.

A opção **"Gerar títulos a pagar a partir de dados de cobrança importados no XML de CT-e"** é determinante para o comportamento do sistema.

- **Com a configuração marcada:** Ao importar um CT-e, caso os Dados de duplicatas estejam preenchidos na aba cobrança do CT-e e seu tomador for a empresa informada, serão gerados automaticamente os títulos a pagar importados do XML com a Natureza de lançamento padrão e Forma de pagamento padrão preenchidos.
- **Com a configuração desmarcada:** Ao importar um CT-e, os títulos a pagar não serão gerados de forma automática e podem ser criados manualmente através da tela de cadastro do CT-e ou pelo botão **Gerar títulos a pagar**, do CT-e.

Nos casos de lançamento manual também é possível gerar os títulos a pagar clicando no botão **Gerar títulos a pagar**.

#### Específico

Existem algumas informações que podem ser específicas de acordo com a situação e é permitido assim fazer o uso de campos personalizados para inserir estes dados. Este recurso está previsto dentro do manual do contribuinte.

> *[Imagem: Aba Específico do CT-e]*

### Importar

Para realizar a importação de um XML informe a empresa e clique em **Importar CT-e**.

> *[Imagem: Opção "Importar CT-e"]*

Na importação você poderá importar pelo **arquivo XML**, caso tenha; ou utilizando seu **certificado digital**, como já existe para nota fiscal de entrada. Contudo, para importar por certificado digital, o cadastro da sua empresa precisa estar habilitado. Para isso, acesse **Configurador / Geral / Empresas / Estoque / Nota fiscal de entrada**. Nessa tela, selecione para importar CT-e e informe o certificado digital da sua empresa. Em seguida, faça a validação da integração para confirmar que está tudo correto.

> **Observação:** nessa rotina o sistema aceita somente certificado A1.

Depois de realizar a configuração, no módulo CT-e, selecione a opção de importar CT-e, depois a opção de **certificado digital**.

> *[Imagem: Tela de importação por certificado digital]*

Nesse momento o sistema utilizará os serviços do NF-Stock para buscar os CT-es emitidos para a empresa em questão e mostrará todos eles na mesma tela. Você poderá selecionar aqueles que deseja importar.

Para realizar a importação via **arquivo XML**, selecione a opção de importação por arquivo XML. Nesse momento, abrirá uma tela na qual você poderá selecionar um ou mais arquivos para serem importados ao mesmo tempo.

> *[Imagem: Tela de seleção de arquivos XML]*

Basta selecionar os que deseja importar e clicar em **Abrir**.

> **Se Liga!** Ao importar um CT-e, além de serem inseridos nos registros do banco de dados, também será armazenado o XML completo. Neste caso será disponibilizado na tela de cadastro do CT-e um botão para exportar o XML, dispensando o armazenamento dele em pasta.

Após a importação, as CT-es podem ser visualizadas na tela principal.

Ao efetuar a importação de um arquivo, o sistema automaticamente procura por documentos de entrada existentes pela chave de acesso, de forma que, caso encontrados, sejam automaticamente vinculados, para que apareçam na linha do tempo e para que seja possível a sugestão dos dados no Nota Fiscal de Entrada.

Este vínculo é válido para quaisquer documentos, estejam eles já liberados (pois não altera em nada os dados existentes), ou em aberto (sendo necessário clicar para "Carregar dados" no Nota Fiscal de Entrada, caso desejado que as informações do CT-e sejam inseridas no documento). Assim como funciona para NF-es que ainda não foram cadastradas ou importadas, as quais serão relacionadas pela chave de acesso quando informadas no Nota Fiscal de Entrada.

### Linha do tempo

Por meio deste recurso é possível uma visualização resumida dos principais dados do CT-e, assim como seus relacionamentos com documentos de entrada.

> *[Imagem: Linha do tempo do CT-e]*

### Nota Fiscal de Entrada

Ao criar um documento dentro do módulo, na aba **Conhecimento de transporte**, é possível importar, vincular ou criar um CT-e manualmente. Neste local é feito ou desfeito o vínculo com um ou mais CT-es no documento.

> *[Imagem: Aba Conhecimento de transporte no Nota Fiscal de Entrada]*

Caso seja vinculado um CT-e existente na aba Conhecimento de transporte eletrônico, ao gravar será feito um relacionamento entre o documento em edição e CT-e selecionado (tabela CTeDocumentoNFe).

Da mesma forma caso um CT-e já estiver vinculado e for removido, ele será excluído no relacionamento. Se houver um CT-e vinculado e for alterado para outro, o CT-e do vínculo inicial será excluído e será realizado novo vínculo.

Ao informar um CT-e existente, automaticamente todos os campos do aviso de conhecimento de transportes disponíveis que possuem informações no CT-e serão preenchidos. Eles permanecerão disponíveis para edição, de forma que o vínculo com CT-e não altera o comportamento atual do sistema, e sim atua como facilitador para o preenchimento das informações.

Para lançar informações manualmente, sem vínculo com CT-e no sistema, o usuário deve utilizar a aba **Lançamento manual**. Neste caso, os dados preenchidos não serão levados ao módulo CT-e. Sendo assim, o usuário também deve preencher os dados da aba **Transportadora**.

O botão para **Importar XML**, permite realizar a importação das informações do CT-e através do seu XML. Similar ao que é feito pelo módulo CT-e.

A opção **Importar NFStock** serve para fazer a importação por certificado digital, como vimos anteriormente. Clicando na opção, ele abrirá a mesma tela para seleção do documento a ser importado.

Ao efetuar a importação de um CT-e ele será automaticamente sugerido como vinculado ao documento em edição, sendo carregadas todas as informações disponíveis.

---

## Informações Adicionais

### Custo

Para calcular corretamente o custo do produto é necessário saber tudo aquilo que a empresa pagou para repô-lo, até mesmo o valor de CT-e pode ser considerado, para que o custo bata corretamente.

Acesse a Operação usada para dar entrada na nota (**Configurador / Estoque / Operação**). Vá na aba **Cálculos / Custo / Geral / Somar rateio do valor de CT-e ao custo** e escolha entre as opções **Por peso** ou **Por valor** (se marcar **Não somar** o valor de CT-e não é considerado no custo).

> *[Imagem: Configuração de rateio de CT-e no custo]*

**Como fica o valor de custo, após a vinculação do CT-e na nota?**

Para entender melhor vamos ao exemplo: duas notas vinculadas a um CT-e, levando em conta que a operação está configurada **por valor**.

- Nota 1 — item A = R$ 500,00
- Nota 2 — item B = R$ 600,00
- CTe — R$ 50,00 em valor de duplicatas

**Nota 1:**

```
Custo Item A = 500,00 (Valor do Item) / 1100,00 (Total das notas) * 50 (Valor de CT-e) = 22,72
```

**Nota 2:**

```
Custo Item B = 600,00 (Valor do Item) / 1100,00 (Total das notas) * 50 (Valor de CT-e) = 27,27
```

Se a operação estivesse configurada **por peso**, a fórmula seria a seguinte:

```
Custo Item = Peso do Item / Total do Peso das Notas * Valor de CT-e
```

> **Fique Ligado em Algumas Dicas sobre essa rotina!**

- Após executar o **Liberador de estoque** será feito o rateio do valor total das duplicatas do CT-e, entre os produtos de todos os documentos do CT-e.
- No Nota Fiscal de Entrada você verá um novo filtro **Aguardando Fechamento de CT-E**. Ao liberar uma nota, a mesma ficará com este status, até que todos os documentos vinculados ao CT-e sejam cadastrados, para que desse modo seja feito o rateio correto do custo.

### Dados das Pessoas

No momento de fazer a importação do CT-e, o sistema verifica se a pessoa do XML já existe no módulo **Pessoa**, observando até se o endereço é o mesmo. Desse modo, não teremos informações repetidas no Bimer.

**Mas e se o endereço for diferente, o que acontece?**

Será aberta uma tela na qual o usuário decide se irá:

- **Utilizar:** O endereço já cadastrado no sistema, não adicionando o novo endereço do XML.
- **Cadastrar:** O novo endereço no módulo Pessoa.

> *[Imagem: Tela de decisão de endereço na importação]*

Os botões **Utilizar Todos** e **Cadastrar Todos**, são usados para fazer uma ação com várias pessoas ao mesmo tempo, pois imagina que tenham 50 pessoas nessa tela e a decisão será mesma, é só usar o botão desejado.
