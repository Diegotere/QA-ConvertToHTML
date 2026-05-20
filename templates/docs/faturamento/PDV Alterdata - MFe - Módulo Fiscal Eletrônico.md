# PDV Alterdata — MFe — Módulo Fiscal Eletrônico — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [O que é MFe?](#o-que-é-mfe)
  - [Como Funciona?](#como-funciona)
  - [Vantagens](#vantagens)
  - [Posso usar apenas NFC-e no Ceará?](#posso-usar-apenas-nfc-e-no-ceará)
  - [Pré-requisitos](#pré-requisitos)
- [Aquisição de Equipamento MFe](#aquisição-de-equipamento-mfe)
- [Vinculação do Equipamento MFe](#vinculação-do-equipamento-mfe)
- [Ativação do Equipamento](#ativação-do-equipamento)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Aparelho MFe (Driver)](#aparelho-mfe-driver)
  - [Configuração no Bimer](#configuração-no-bimer)
    - [Cadastro de Empresas](#cadastro-de-empresas)
    - [Cadastro de POS](#cadastro-de-pos)
    - [Cadastro da Operação](#cadastro-da-operação)
    - [Libera ECF](#libera-ecf)
  - [PDV Alterdata](#pdv-alterdata)
- [Exemplo da Emissão MFe](#exemplo-da-emissão-mfe)
  - [Simulação de Venda com POS](#simulação-de-venda-com-pos)
  - [Fluxo do Cartão de Crédito (POS)](#fluxo-do-cartão-de-crédito-pos)
  - [Diferença entre Máquinas de Cartões — POS e TEF](#diferença-entre-máquinas-de-cartões--pos-e-tef)
- [NFC-e em Contingência](#nfc-e-em-contingência)
- [Geração de NF-e a partir do CF-e](#geração-de-nf-e-a-partir-do-cf-e)
- [Arquivos Criados](#arquivos-criados)
- [Consulta dos Documentos](#consulta-dos-documentos)

---

## O que é MFe?

**MFe (Módulo Fiscal Eletrônico)** é um equipamento utilizado para substituir o **ECF** (Emissor de Cupom Fiscal) no estado do **Ceará**. Ele é responsável por emitir, armazenar e transmitir automaticamente, via Internet, o **CF-e** (Cupom Fiscal Eletrônico) modelo 59.

O MFe é um equipamento semelhante ao **SAT Fiscal**, responsável pela emissão do cupom fiscal eletrônico, com alguns requisitos adicionais exigidos pelo SEFAZ do Ceará, tais como: bateria, GPS e GPRS (Chip de celular).

> **Observação:** Todos os Modelos/Fabricantes homologados pela Sefaz-CE são compatíveis com o PDV Alterdata.

### Como Funciona?

O MF-e funciona como um intermediário entre o PDV e a SEFAZ CE:

1. O PDV envia as informações da venda para o MF-e.
2. O MF-e processa os dados e envia para a SEFAZ.
3. Quando a SEFAZ autoriza a venda, o MF-e informa ao PDV sobre a autorização.
4. O PDV finaliza a venda.

### Vantagens

- Facilita o processo de integração entre os sistemas PDVs homologados no Estado do Ceará e os emissores de documentos fiscais da SEFAZ.
- Padroniza o processo de comunicação entre os PDVs homologados no Estado do Ceará e os emissores de documentos fiscais da SEFAZ.
- Simplifica o processo de comunicação, visto que todo o processo de comunicação e emissão de documentos fiscais serão definidos de forma única.

### Posso usar apenas NFC-e no Ceará?

**Não.** A utilização da NFC-e só ocorrerá em caso de **contingência** na geração do Cupom Fiscal Eletrônico – CF-e.

### Pré-requisitos

- **Bimer** 7.02.00.00 ou superior
- **PDV Alterdata** 6.1353.73 ou superior

---

## Aquisição de Equipamento MFe

1. O Contribuinte adquire no mercado um modelo de equipamento homologado pela SEFAZ.
2. A Empresa adquirente do equipamento deverá acessar o endereço eletrônico `www.sefaz.ce.gov.br` e clicar em **Ambiente Seguro**.

Pontos importantes para a operacionalização do acesso ao Portal CFe:

1. Caso o Contribuinte (Sócio ou Contador) já acesse o Ambiente Seguro para outros serviços disponibilizados pela SEFAZ, poderá utilizar as mesmas credenciais de acesso — não é necessário novo credenciamento.
2. O acesso ao Ambiente Seguro é feito por **CPF e Senha** ou **Certificado Digital (e-CPF)**.
3. Caso o Contribuinte ainda não utilize o Ambiente Seguro, verifique a documentação no Portal CFe (`cfe.sefaz.ce.gov.br`) em **Downloads >> Orientações >> Manual do Serviço de Senhas**.
4. As Software Houses (provedores de softwares) não terão acesso ao Portal CFe pelo Ambiente Seguro, mas sim pelo **Acesso Restrito**.

> **Se Liga!** A partir de **25/07/2017**, a liberação de senhas para os Contribuintes usuários do MFe passou a ser por meio do Ambiente Seguro. Desta forma, não será mais necessária a solicitação por meio da Software House — será feita pelo próprio contribuinte, por meio dos seus sócios ou contador.

O contribuinte deverá aguardar o retorno do e-mail com a senha para acesso ao portal para o vínculo do equipamento, realizado pela Alterdata.

---

## Vinculação do Equipamento MFe

1. O Contribuinte assina o **"Termo de Aceite e Requisição de Certificado Digital da SEFAZ-CE para equipamento emissor de CF-e"**.
2. O Contribuinte vincula o equipamento MFe adquirido ao seu CNPJ.
3. O Contribuinte imprime, assina e entrega o Termo em uma **Célula de Execução da Administração Tributária (Cexat)** mais próxima.
4. O Contribuinte aguarda que o equipamento vinculado seja liberado para o processo de ativação.

O Contribuinte pode acompanhar o processo realizando a consulta: **MFes Vinculados >> Situação**. Selecione a situação **"Vinculação Pendente"** e verifique se o equipamento continua com essa situação. Quando o status mudar para **"Vinculado contribuinte"**, poderá ser dada continuidade ao processo.

---

## Ativação do Equipamento

Para tornar o equipamento MFe apto a gerar Cupons Fiscais de Venda e Cancelamento:

1. Solicite à Alterdata o processo de **vinculação do aplicativo comercial** ao CNPJ do estabelecimento em que o MFe será utilizado.
2. Para verificar se a vinculação foi realizada pela Alterdata, o contribuinte pode realizar a consulta **"Código de Vinculação de Aplicativos Comerciais (AC)"**.

---

## Instalação e Configuração

### Aparelho MFe (Driver)

1. Instale o driver do MFe (`DriverMFe_Instalador_<versão>.exe`), seguindo o manual de instalação e ativação do MFe disponibilizado pelo fabricante do aparelho.
2. Verifique se o MFe está ativo na bandeja do Windows. Se estiver com ícone vermelho, não está ativo.

**Links para download do driver:**

- Link oficial SEFAZ CE: `https://cfe.sefaz.ce.gov.br/mfe/informacoes/downloads#/` (verifique se o Windows é 32 ou 64 bits antes de baixar)
- Alternativas:
  - `https://www.tanca.com.br/assets/conteudo/drivers/TM-1000/DriverMFE_Instalador_01.05.06.zip`
  - `https://servicos.sefaz.ce.gov.br/internet/download/projetomfe/DriverMFE_Instaladorx86-01.05.09.exe`

Após executar o instalador, copie as DLLs:
- **Windows 64 bits:** de `C:\Program Files\SEFAZ-CE\Driver MFE\Biblioteca de funções` para `C:\Windows\SysWOW64`
- **Windows 32 bits:** de `C:\Program Files (x86)\SEFAZ-CE\Driver MFE\Biblioteca de funções` para `C:\Windows\System32`

3. Edite o arquivo `cco-ser.ini` do comunicador em `C:\Comunicador` e informe a **porta de comunicação** criada pelo MFe no momento de sua conexão.

   *Exemplo: se a porta de comunicação é a COM3, informe o número 3 na configuração.*

4. Reinicie o serviço do Comunicador.

### Configuração no Bimer

#### Cadastro de Empresas

Em **Configurador Bimer >> Geral >> Empresas >> Emissão de notas >> Dados Gerais**, marque a opção **Possui MF-e**.

> Se a opção **Possui NFC-e** estiver selecionada, ela deve ser desmarcada para realizar a marcação de MFe.

#### Cadastro de POS

Se o cliente tiver máquina de cartão de crédito (POS), faça o cadastro pelo módulo **PDVAlterdataCfg >> Arquivo >> Máquina de Cartão de crédito (POS)**.

#### Cadastro da Operação

Em **Configurador Bimer >> Estoque >> Operação**, crie uma operação com o tipo de movimento **Venda**.

- As opções **Atualiza financeiro** e **Atualiza estoque** devem ser marcadas conforme a necessidade do cliente (normalmente ficam marcadas).
- Na aba **Cálculos**, configure os tributos conforme orientações da contabilidade da empresa.
- Na aba **Documento**, informe um **Tipo de documento** configurado com modelo fiscal de ICMS **59**.

No cadastro do tipo de documento vinculado à operação:
- Além do modelo fiscal (ICMS) configurado como **59**, marque a opção **Gera número sequencial** e informe a **Espécie do documento** (pode ser CF-e, por exemplo).
- A numeração do cupom é atribuída automaticamente a partir do equipamento MFe — o usuário não consegue alterar essa informação pelo sistema Bimer, pois é controlado pela SEFAZ CE.
- Informe os **CFOPs** conforme orientação da contabilidade da empresa.

Depois de criar a operação, acesse **PDVAlterdataCfg >> Ferramentas >> Opções >> Operações** e vincule a operação no campo **Operação para documento SAT**, pois o sistema utiliza o mesmo campo quando a empresa trabalha com MF-e.

> Para dúvidas sobre configurar o restante das opções do Configurador PDV Alterdata, consulte o manual **"PDV Alterdata – Configurações Retaguarda"** disponível no **Portal UCA >> Bimer >> Materiais >> Manuais**.

Em seguida, realize a **exportação dos dados do Bimer para o PDV Alterdata** no Integrador Bimer x PDV Alterdata e no Concentrador do PDV Alterdata.

#### Libera ECF

No aplicativo **Libera ECF**, informe em **Nome do layout da impressora** a opção **MFE-Direto**.

### PDV Alterdata

> **IMPORTANTE:** Antes de abrir o PDV, verifique se o **Integrador Fiscal** está aberto, pois se ele não estiver em execução, não será possível emitir MFe.

No menu de **Configurações >> MFe**, preencha:

- **Código de Ativação** — Senha, normalmente de 8 a 32 dígitos, gerada pela SEFAZ.
- **Assinatura digital conjunta CNPJ + CNPJ** — Código gerado pelo Suporte Alterdata a partir do código de Ativação informado pelo cliente. É a junção do CNPJ da Alterdata e o CNPJ do emitente, constituído de 344 caracteres.
- **Número do Terminal** — Informe o número do terminal referente ao caixa em que o MF-e está conectado.
- **Botão Outras Funções do MFe** — Permite realizar procedimentos de acordo com cada aba:
  - **Consultas** — Visualiza se há comunicação com o MFe e verifica o estado operacional do equipamento.
  - **Teste fim a fim** — Gera informações de um cupom de venda de teste, valida este cupom no equipamento MFe e o envia à SEFAZ.
  - **Outras Funções:**
    - **Bloquear MFe** — Bloqueio do modo operacional do MFe, impossibilitando as funções fiscais (vendas e cancelamentos).
    - **Desbloquear MFe** — Desbloqueio do modo operacional do MFe, reativando as funções fiscais do equipamento.
    - **Atualizar Software MFe** — Utilizada para o contribuinte atualizar o software da MFe junto à SEFAZ.

> **Dica importantíssima!** As vendas realizadas com CF-e **não aparecem** no módulo Faturamento. Depois que o movimento do PDV for integrado no Bimer, é possível consultar somente CF-e através do **BI Faturamento**.

---

## Exemplo da Emissão MFe

### Simulação de Venda com POS

Na venda com cartão de crédito (POS), sem o programa de TEF, selecione a forma de pagamento **(CARTÃO – Sem TEF)**.

Antes de finalizar a venda, o usuário deverá informar qual máquina passará o cartão. Enquanto o usuário passa o cartão na máquina, o PDV ficará em tela de aguardo.

Se o cartão já tiver sido passado na máquina antes de chegar nessa tela, o usuário deverá digitar os dados da autorização e clicar no botão **F11 – Digitar**.

Se não houver conexão com internet na integração com o POS, o PDV abrirá a tela automaticamente para o usuário digitar as informações de autorização do cartão, guardando essas informações para quando a internet retornar. Quando a internet for reestabelecida, o PDV enviará as informações de autorização para o Integrador.

### Fluxo do Cartão de Crédito (POS)

> *[Imagem: fluxo do cartão de crédito com POS]*

### Diferença entre Máquinas de Cartões — POS e TEF

#### POS (Point of Sale ou Ponto de Venda)

É caracterizada por sua **mobilidade** — é uma máquina portátil, muito utilizada em situações como: garçom leva a maquininha à mesa, ou um motoboy leva a maquininha à casa de um cliente para receber o pagamento.

- A comunicação dos dados é realizada por linha discada ou por rede de celular (POS GPRS).
- O POS não depende de nenhuma outra infraestrutura para funcionar.
- A própria máquina imprime o recibo.
- Cada máquina funciona apenas com uma adquirente (por exemplo, Rede e Cielo).

#### TEF (Transferência Eletrônica de Fundos)

É um software que captura as transações e as envia para a rede adquirente via internet ou links dedicados. Fica instalado no computador do caixa no estabelecimento comercial.

- O TEF permite que o varejista aceite uma variedade grande de cartões, pois é **multiadquirente**.
- Há alguns estados que aceitam apenas a tecnologia TEF e não a POS.
- Não permite mobilidade para aceitação de cartões.
- Exige uma conexão de Internet para funcionar.

---

## NFC-e em Contingência

Como visto no início deste manual, a emissão de NFC-e para registrar a venda ocorre em caso de contingência na geração do Cupom Fiscal Eletrônico – CF-e.

Neste caso, é necessário:
1. Desmarcar no cadastro da empresa a opção **Possui MF-e**.
2. Marcar a opção **Possui NFC-e**.
3. Realizar todas as demais configurações para se trabalhar com NFC-e, conforme o manual **"PDV Alterdata – Configurações Retaguarda"** disponível no **Portal UCA >> Bimer >> Materiais >> Manuais**.

---

## Geração de NF-e a partir do CF-e

O processo de geração de notas fiscais eletrônicas a partir do Cupom Fiscal Eletrônico (modelo 59) gerado pelo MFe é realizado através do módulo **Faturamento >> Diversos >> Gerar nota fiscal a partir de cupom**.

1. Informe uma data de emissão para o filtro.
2. No campo **Documento**, selecione o cupom desejado.
3. Confirme o cliente e clique em **OK** para finalizar.
4. Confirme todos os dados da NF-e e envie para autorização.

---

## Arquivos Criados

Foram criados dois novos arquivos para possibilitar trabalhar com MFe e a integração dos dados da retaguarda com o PDV:

- **`MfePOS.dat`** — Possui os campos relativos às informações da máquina POS:
  - `Nome`: String (60)
  - `NrSeriePOS`: String (60)
  - `CodEstab`: String (60)

- **`Config.dat`** — Referente à utilização deste novo modelo e à chave de acesso:
  - `TrabalhaMFe`: Boolean
  - `ChaveAcessoIntegrador`: String (60)

---

## Consulta dos Documentos

A partir da versão **11.01.03.00** do Bimer, é possível visualizar as vendas que utilizam modelo 59 (CF-e e/ou MF-e) diretamente no **Faturamento >> aba Nota Fiscal Consumidor**.
