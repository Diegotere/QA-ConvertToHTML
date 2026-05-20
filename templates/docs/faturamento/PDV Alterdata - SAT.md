# PDV Alterdata — CF-e e SAT — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [O que é o Projeto SAT-CF-e?](#o-que-é-o-projeto-sat-cf-e)
- [O que é o Equipamento SAT?](#o-que-é-o-equipamento-sat)
- [Como o Equipamento SAT Funciona?](#como-o-equipamento-sat-funciona)
- [O que é o CF-e-SAT?](#o-que-é-o-cf-e-sat)
- [Benefícios para o Contribuinte](#benefícios-para-o-contribuinte)
- [Certificado Digital](#certificado-digital)
- [Leiaute de Impressão do Extrato do CF-e-SAT](#leiaute-de-impressão-do-extrato-do-cf-e-sat)
- [Obrigatoriedade para o Uso do SAT](#obrigatoriedade-para-o-uso-do-sat)
- [Obrigações Acessórias](#obrigações-acessórias)
- [Requisitos para Uso do SAT](#requisitos-para-uso-do-sat)
- [Primeiros Passos para Colocar o SAT em Funcionamento](#primeiros-passos-para-colocar-o-sat-em-funcionamento)
- [Primeira Versão Liberada para o SAT](#primeira-versão-liberada-para-o-sat)
- [Configurações no Sistema Bimer](#configurações-no-sistema-bimer)
- [Configuração de Layout do SAT](#configuração-de-layout-do-sat)
- [Instalação do Certificado Digital](#instalação-do-certificado-digital)
- [Primeira Abertura do PDV com o Layout SAT](#primeira-abertura-do-pdv-com-o-layout-sat)
- [Emissão de NFC-e](#emissão-de-nfc-e)
- [Visualização da Venda no Bimer](#visualização-da-venda-no-bimer)

---

## O que é o Projeto SAT-CF-e?

O projeto **SAT-CF-e** (Sistema Autenticador e Transmissor de Cupons Fiscais Eletrônicos) tem por objetivo documentar, de forma eletrônica, as operações comerciais do varejo dos contribuintes do Estado de São Paulo, em substituição aos atuais equipamentos ECF (Emissor de Cupom Fiscal) e à Nota Fiscal de Venda a Consumidor (modelo 2).

Para isso, foram criados:
- Um novo modelo de documento fiscal eletrônico: o **Cupom Fiscal Eletrônico – SAT (CF-e-SAT)**, aderente ao modelo da NF-e.
- Um novo padrão de equipamento de baixo custo para gerar, autenticar com validade jurídica e transmitir via Internet os CF-e-SAT emitidos pelos estabelecimentos comerciais.

O projeto possibilita aos consumidores localizar o documento fiscal no programa da Nota Fiscal Paulista em prazo muito menor, além de simplificar as obrigações acessórias dos estabelecimentos varejistas.

---

## O que é o Equipamento SAT?

O equipamento SAT é um módulo composto de hardware com software embarcado que gera e autentica, por meio de Certificado Digital próprio, o CF-e-SAT, transmitindo-o periódica e automaticamente à SEFAZ via Internet. **O SAT não possui impressora integrada.**

O SAT é um equipamento blindado que não permite manutenção dos seus componentes internos e software básico; deve ser trocado caso pare de funcionar. Manutenção ou atualização é feita remotamente pela Secretaria da Fazenda.

### Modelos de Equipamentos SAT Registrados junto à SEFAZ-SP

| Marca | Modelo | Versão do Software | Número do Termo |
|---|---|---|---|
| TANCA | TS-1000 | 01.00.00 | 002/2015 |
| URANO | SAT UR | 01.00.00 | 004/2015 |
| SWEDA | SS1000 | 01.00.01 / 01.00.02 | 002/2014 / 001/2015 |
| ELGIN | Linker | 01.00.00 | 006/2015 |
| GERTEC | GerSat | 01.03.06 | 003/2015 |
| BEMATECH | RB-1000 | 01.00.00 | 007/2015 |

---

## Como o Equipamento SAT Funciona?

O equipamento SAT deve ser interligado com qualquer equipamento de processamento de dados padrão de mercado que possua um **AC (Aplicativo Comercial)** instalado, adequado para se comunicar com o SAT. Ele recebe do AC os dados de venda, valida as informações, gera o CF-e-SAT e o assina digitalmente.

A cada CF-e-SAT gerado, o equipamento SAT retorna ao AC uma **cópia digital ("cópia de segurança")**, a partir da qual o AC imprime o Extrato do CF-e-SAT na impressora comum. A cópia de segurança deve ser mantida pelo contribuinte pelo prazo previsto na legislação.

**Sobre a internet:**
- Não há necessidade de internet no ponto de venda — o SAT funciona de maneira off-line, armazenando os cupons fiscais eletrônicos emitidos no equipamento.
- É necessária conexão com a internet no estabelecimento (ex.: no escritório da retaguarda) para que o SAT transmita os dados à SEFAZ.

> **Observação:** Se o SAT não mantiver uma conexão com a SEFAZ em um período de **10 dias** após a última conexão, o aparelho se **autobloqueará**. Para desbloqueá-lo, o usuário deverá conectar o SAT a um equipamento com internet. O bloqueio é diretamente com a SEFAZ e não está relacionado ao sistema de automação comercial.

---

## O que é o CF-e-SAT?

O **CF-e-SAT, modelo 59**, é um documento fiscal eletrônico, emitido, armazenado e transmitido automaticamente pelo equipamento SAT, de existência apenas digital, que documenta operações de circulação de mercadorias no varejo. Sua validade jurídica é garantida pela assinatura digital feita pelo equipamento SAT por meio do seu Certificado Digital.

Como o CF-e-SAT só existe na forma eletrônica, o consumidor receberá como comprovante o chamado **"Extrato do CF-e-SAT"**.

---

## Benefícios para o Contribuinte

Os principais benefícios ao usar o equipamento SAT são:
- Redução de custos.
- Simplificação de obrigações acessórias.
- Documento dotado de validade jurídica pela Medida Provisória 2.200.
- Garantia de autenticidade e integridade nos documentos eletrônicos emitidos.

---

## Certificado Digital

O contribuinte poderá optar entre dois tipos de Certificado Digital para o equipamento SAT:
- Um oferecido **gratuitamente pela SEFAZ**.
- Outro seguindo o **padrão ICP-Brasil**, que poderá ser adquirido no mercado junto às Autoridades Certificadoras.

O contribuinte deverá optar pelo tipo de Certificado que deseja antes de começar a utilizar o SAT, quando realizar a ativação do equipamento.

---

## Leiaute de Impressão do Extrato do CF-e-SAT

Como o equipamento SAT não possui mecanismo impressor, o Extrato do CF-e-SAT deverá ser impresso em **impressora comum (não fiscal)**, a partir de comandos do Aplicativo Fiscal.

O extrato do CF-e-SAT **não é um documento fiscal** — é uma representação em papel da transação de venda que permite a consulta do documento fiscal eletrônico no ambiente da SEFAZ pelo consumidor.

**Regras de impressão:**
- O extrato deverá ser impresso independentemente da solicitação do consumidor.
- Na hipótese de cancelamento do CF-e-SAT, o extrato correspondente ao cancelamento também deverá ser impresso.
- O extrato poderá ser impresso de forma **resumida** (sem a lista dos itens) ou **completo** (com itens), conforme solicitação do consumidor.
- No rodapé do extrato deverá conter o **código de barras** (chave de consulta) e o **QR Code**.

> *[Imagem: Exemplo de Extrato Resumido e Extrato Completo do CF-e-SAT]*

---

## Obrigatoriedade para o Uso do SAT

**Postos de combustível:** A partir de 01/07/2015, deverão emitir CF-e-SAT em substituição ao Cupom Fiscal emitido por ECF com 5 anos ou mais da data da lacração inicial. A partir de 01/01/2017, não é mais permitida a emissão de Cupom Fiscal por ECF.

**Demais ramos de atividade:** A vedação de uso de ECF com 5 anos ou mais da lacração inicial ocorre de acordo com o código **CNAE** do estabelecimento. Dependendo da CNAE, a vedação pode se iniciar em 01/07/2015, 01/08/2015, 01/09/2015 ou 01/10/2015.

> *[Imagem: Tabela resumo das regras de obrigatoriedade por CNAE]*

---

## Obrigações Acessórias

O equipamento SAT realiza automaticamente a transmissão à SEFAZ dos CF-e-SAT gerados. Portanto:
- **Não é necessário** o contribuinte enviar REDF para os CF-e-SAT.
- Os contribuintes obrigados ao envio da **EFD (Escrituração Fiscal Digital)** fazem a escrituração do CF-e-SAT de modo similar ao da NF-e.
- **Não há necessidade** de extração de leitura X, redução Z e mapa resumo (embora nada impeça que o estabelecimento realize a extração para fins gerenciais).

> **Atenção:** A retenção de documentos fiscais continua sendo obrigatória por questão legal. Contudo, em vez de salvar a bobina do ECF ou talonário em papel, o que será guardado é o **documento fiscal eletrônico**.

---

## Requisitos para Uso do SAT

- Equipamento de processamento de dados (computador ou microterminal tipo PC) com **porta USB**.
- **Aplicativo Comercial** de frente de loja (AC).
- **Impressora comum** (pode ser compartilhada).
- **Meio de comunicação com a Internet** (pode ser compartilhado).
- **Equipamento SAT** (equipamento externo, visível ao consumidor e ao Fisco).

### Requisitos Gerais

- Tecnologia Internet Banda Larga para comunicação (Wi-Fi ou Ethernet).
- Transmissão periódica: não precisa de internet 24h.
- Não precisa de internet na frente de caixa.
- Impressão feita em impressora comum diretamente pelo Aplicativo Comercial.

---

## Primeiros Passos para Colocar o SAT em Funcionamento

Quando o cliente entrar em contato informando que deseja colocar o SAT em funcionamento, verifique se ele já realizou os seguintes passos:

**1º** — Ao adquirir o equipamento, o contribuinte deverá **cadastrar o equipamento** registrando-o junto à SEFAZ SP, informando também o tipo de certificado que será utilizado.

**2º** — Após o cadastro, o contribuinte deverá fazer a **ativação do equipamento SAT** por meio do Software de Ativação do Equipamento SAT (fornecido pelo fabricante junto com o equipamento).

> **Atenção:** A instalação do software do SAT é de responsabilidade de seu fabricante.

**3º** — No programa do fabricante será solicitado o **código de Ativação do Equipamento SAT** (definido pelo contribuinte, com mínimo de 8 e máximo de 32 caracteres alfanuméricos) e o **CNPJ do contribuinte**. Clique em **"Enviar"** para ativar junto à SEFAZ.

**4º** — Se for utilizar NFC-e, o contribuinte deverá também se credenciar junto à SEFAZ e gerar o **código Token**, além de efetuar os passos 1, 2 e 3.

> **Observação:** Os passos 1, 2, 3 e 4 devem ser realizados pelo contribuinte (cliente).

Após esses passos, o contribuinte deverá solicitar o **código de vinculação** à Software House (Alterdata), que poderá ser informado no Aplicativo Fiscal (PDV) ou no programa do fabricante do equipamento SAT.

O **Código de Vinculação** é uma sequência numérica de 28 algarismos (14 do CNPJ do Desenvolvedor do AC + 14 do CNPJ do Estabelecimento Comercial), assinada digitalmente pelo desenvolvedor do AC mediante uso de certificado digital padrão ICP-Brasil.

---

## Primeira Versão Liberada para o SAT

A versão **6.1353.57** foi a primeira versão do PDV Alterdata liberada para o funcionamento do SAT. A versão mínima do Bimer exigida é **6.09.00.00**.

**Observações desta versão:**
- Na primeira versão, somente será permitido trabalhar em **modo exclusivo** — será necessário um aparelho por caixa.
- Clientes que optarem por NFC-e precisarão adquirir o equipamento do SAT. Caso ocorram erros na comunicação, não será possível emitir em contingência pela NFC-e — este processo será realizado pelo SAT.

> **Atenção:** A orientação é que os clientes utilizem o próprio SAT, visto que ele realizará o processo de contingência normalmente.

---

## Configurações no Sistema Bimer

> Caso o cliente já trabalhe com o PDV Alterdata emitindo Cupom Fiscal na ECF, recomenda-se que a migração para o SAT seja feita somente no **final do dia** ou **início do dia**, antes de abrir o caixa.

As configurações do SAT reaproveitam a linha de configuração de NFC-e.

**1. Configurar a empresa:**

Acesse **Configurador Bimer >> Geral >> Empresas >> Emissão de notas >> Dados gerais**. Abra a edição do cadastro da empresa que trabalhará com o SAT no PDV Alterdata.

- Marque a opção **"Possui NFC-e"**.
- Ajuste todo o endereço da empresa, confirmando se os dados estão corretos.

Com a marcação da opção **Possui NFC-e**, será habilitada a aba **NFC-e** que deve ser configurada conforme a necessidade da empresa e com os dados passados pela SEFAZ ao cliente.

> **Observação:** As informações de configuração são meramente ilustrativas. A Alterdata não se responsabiliza por essas informações. O cliente deve consultar o seu contador.

**2. Criar operação para emissão de cupom fiscal – SAT:**

Acesse **Configurador Bimer >> Estoque >> Operação** e crie uma operação com o **tipo de movimento Venda**. Configure o restante conforme a necessidade do cliente.

**3. Criar tipo de documento:**

Na aba **Documento**, em **Tipo de documento**, clique em **Novo cadastro**. Informe:
- **Nome** do Tipo de Documento.
- **Empresa**
- **Gera número sequencial:** marcado
- **Número sequencial, espécie, série** e **modelo fiscal do CF-e-SAT: 59**

Grave o cadastro do Tipo de documento e faça o vínculo na Operação. Informe os **CFOPs** conforme orientação do contador do cliente e salve o cadastro da operação.

**4. Vincular operação no PDV:**

Acesse **PDVAlterdataCfg >> Ferramentas >> Opções**. Na aba **Operações**, vincule a operação cadastrada no campo **"Operação para documento SAT"**.

**5. Exportação de dados:**

Realize a exportação dos dados do Bimer para o PDV Alterdata rodando o **Integrador Bimer x PDV Alterdata** e, em seguida, o **Concentrador do PDV Alterdata**.

---

## Configuração de Layout do SAT

1. Acesse o terminal do PDV Alterdata e abra o aplicativo **Libera ECF**.
2. Em **Layout de impressão**, no campo **"Nome do layout da impressora"**, aponte o **SAT**.
3. Informe o **Modelo do SAT** e selecione a impressora.
4. Clique em **Gravar**.

---

## Instalação do Certificado Digital

A instalação do certificado digital é responsabilidade do Técnico de Informática do cliente. Ao configurar o layout SAT, o PDV Alterdata só abrirá caso o certificado esteja instalado corretamente.

**Procedimento de instalação:**

1. Acesse o **Painel de Controle** do Windows.
2. Em **Exibir por: Categoria**, clique em **Rede e Internet**.
3. Clique em **Opções da Internet**.
4. Na aba **Conteúdo**, clique em **Certificados**.
5. Na aba **Pessoal**, clique em **Importar…**
6. Clique em **Avançar** na primeira tela.
7. Clique em **Procurar…** e aponte o arquivo de extensão `.pfx`. Se não aparecer na pasta, selecione **Todos os arquivos (*.*)** na parte inferior direita.
8. Clique em **Avançar**.
9. Selecione a opção **"Marcar esta chave como exportável…"**, informe a **senha do certificado digital** e clique em **Avançar**.
10. Deixe marcado **"Colocar todos os certificados no repositório a seguir"** e avance.
11. Clique em **Concluir** para realizar a importação.
12. Clique em **OK** na mensagem de confirmação.

---

## Primeira Abertura do PDV com o Layout SAT

Ao abrir o PDV Alterdata pela primeira vez com o layout SAT, será exibida a tela de configuração do PDV na aba **SAT**.

Nesta tela, informe:
- **Código de ativação** — o mesmo que o cliente definiu no software do fabricante do SAT.
- **Assinatura digital conjunta** — gerada pelo Suporte da Alterdata no aplicativo de vinculação (junção do CNPJ da Software House e o CNPJ do emitente, com 344 caracteres).
- **CNPJ do emitente**.
- **Número do terminal** — código específico para cada terminal.
- **Gerar log** — quando marcado, será gerado um arquivo TXT na pasta do PDV Alterdata.

### Botão "Outras Funções SAT"

**Consultas:** Permite visualizar se há comunicação com o SAT e verificar o estado operacional do equipamento.

**Teste Fim-a-Fim:** Gera informações de um cupom de venda de teste, valida no equipamento SAT e envia à SEFAZ. Deve ser utilizado para:
- Verificação final do processo de ativação do equipamento SAT.
- Ação de teste do contribuinte para verificação do estado de funcionamento do SAT, da comunicação com a SEFAZ e da disponibilidade do servidor da SEFAZ.

**Bloquear SAT:** Realiza o bloqueio do modo operacional do SAT, impossibilitando as funções fiscais (vendas e cancelamentos).

**Desbloquear SAT:** Realiza o desbloqueio do modo operacional do SAT, reativando as funções fiscais.

**Atualizar Software do SAT:** Utilizado para o contribuinte atualizar o software básico do SAT junto à SEFAZ.

### Recursos Implementados

- **ExpOffline:** Inclusão dos campos `CdSitTribPIS`, `CdSitTribCofins`, `AlPIS` e `AlCOFINS`.
- **ImpOffline:** Importar as vendas SAT e o XML para a tabela `Documento_Cfe`.
- **Estrutura de Pastas:** Criação da pasta SAT em `C:\Program Files (x86)\Alterdata\PDV Alterdata SAT` com subpastas: Envio, Recebimento, Autorizada, Rejeitada.
- **Extrato CF-e-SAT:** Pode ser impresso de forma resumida (sem itens) ou completo (com itens).
- **Cancelamento último CF-e:** Somente é permitido efetuar o cancelamento do último cupom fiscal.
- **Reimprimir o último CF-e:** Possível realizar a reimpressão do CF-e, desde que tenha sido o último cupom impresso.

---

## Emissão de NFC-e

Segundo a SEFAZ SP, os contribuintes podem gerar em substituição ao SAT modelo 59 a **NFC-e modelo 65**. No entanto, a contingência precisa ser feita pelo SAT. Desta forma, o cliente pode gerar esses 2 modelos de documento no PDV: para emissão normal e emissão em contingência.

**Como configurar o ambiente:**

1. No **LiberaECF**, deixe a opção de **NFC-e** marcada no campo **"Nome do layout da impressora"**. Se for necessário emitir em contingência, retorne a configuração para **SAT**.
2. Acesse o manual "PDV Alterdata - Configurações Retaguarda" para realizar as outras configurações necessárias para gerar NFC-e.

---

## Visualização da Venda no Bimer

- A partir da versão **11.01.03.00**, é possível visualizar as vendas que utilizam modelo 59 (CF-e e/ou MF-e) diretamente no **Faturamento**, aba **Nota Fiscal Consumidor**.
- Se a empresa utiliza o SAT, os cupons aparecem no **Resumo diário** do **BI Faturamento**.
