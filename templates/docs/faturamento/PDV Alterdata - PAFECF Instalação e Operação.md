# PDV Alterdata — PAF ECF: Instalação e Operação — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [O que é PAF ECF?](#o-que-é-paf-ecf)
- [Funcionamento da Integração](#funcionamento-da-integração)
- [Cenários](#cenários)
- [Versões Homologadas](#versões-homologadas)
- [Instalação e Configurações](#instalação-e-configurações)
- [Impressora Fiscal](#impressora-fiscal)
- [PDV Alterdata — Especificações PAF ECF](#pdv-alterdata--especificações-paf-ecf)
- [Arquivos .DAT das Movimentações](#arquivos-dat-das-movimentações)
- [Menu Fiscal do PDV](#menu-fiscal-do-pdv)
- [Funções Administrativas](#funções-administrativas)
- [Sangria e Suprimento](#sangria-e-suprimento)
- [Encerramento de Caixa](#encerramento-de-caixa)

---

## Introdução

Este material apresenta o que é PAF-ECF, como instalá-lo e toda a integração do Bimer com o PDV Alterdata. Serão vistas as configurações necessárias e conceitos sobre a rotina de funcionamento, até a venda ser feita no caixa e importada para o Bimer.

**O que é PDV?**

É o aplicativo responsável por realizar a venda direta a consumidor final, utilizando equipamento emissor de cupom fiscal e realizando o registro de dados de forma segura, integrado com o Bimer.

Contempla a legislação do PAF/ECF, que determina que o PDV deva trabalhar com uma impressora fiscal e que as operações realizadas devem ser 100% fiscais.

Ele funciona **off-line**, o que significa que não depende de uma comunicação constante com a rede para o seu funcionamento. O PDV Alterdata não deixará de funcionar em caso de perda de conexão com o servidor da base de dados, pois está conectado a uma base de dados local que registrará as vendas. Quando a comunicação com a rede voltar, o processo de integração de dados entre Bimer e PDV Alterdata voltará a funcionar normalmente, de modo automático, conforme o agendamento configurado.

---

## O que é PAF ECF?

**Programa Aplicativo Fiscal – Emissor Cupom Fiscal:** foi instituído para controlar a emissão de cupons fiscais pelos ECFs.

Até o ano de 2008, cada estado definia como o Aplicativo Fiscal deveria atuar com o ECF. Porém, o Fisco publicou dois documentos contendo as informações para Automação Comercial do PAF-ECF, que são o **Ato Cotepe 06/08** e o **Convênio ICMS 15/08**. Estes documentos são de abrangência nacional e todas as empresas de software devem atendê-los.

Antes da legislação do PAF-ECF, o FatPDV era instalado em um TS e tinha acesso direto à base de dados. Porém, caso o acesso ao TS fosse interrompido, não seria possível utilizar o PDV.

Com a legislação do PAF-ECF, o PDV deverá ter o controle de venda, pois no momento de efetuá-la e esta for registrada no sistema, as informações deverão ser geradas de forma segura, sem que fatores como a falta de internet ou de rede interrompam as vendas.

> Para observar a situação de cada estado em relação ao PAF ECF, consulte a intranet Alterdata.

---

## Funcionamento da Integração

Os componentes da integração são:

- **Banco de dados Bimer** — contém as informações necessárias para que as vendas sejam efetuadas pelo PDV (clientes, produtos, prazos, etc.).

- **Integrador Bimer PDV Alterdata** — instalado no Servidor. Na rotina de exportação, gera os arquivos .DAT com as informações do Bimer para que o Concentrador envie para o PDV. Na rotina de importação, processa os arquivos .DAT dos movimentos do PDV gravados na tabela `DadosImportacaoIntegracao`, gerando documentos, terminais, títulos, etc. Os terminais do PDV Alterdata são cadastrados automaticamente e podem ser editados pelo Integrador. Trabalha em conjunto com o módulo **Guardião**, responsável por iniciar o integrador sempre que ele estiver sem responder ou seja fechado de forma inesperada.

- **Web Service – Exporta e Importa dados PDV Alterdata** — responsável por transportar os arquivos da estação (PDV Alterdata) para o servidor (Retaguarda) e vice-versa, sendo consumido pelo Concentrador.

- **Web Service – Integra plugins PDV Alterdata** — utilizado pelos plugins do PDV Alterdata, chamados através dos arquivos BPL localizados na pasta `MODPDV`.

- **Plugins** — recursos do PDV Alterdata além da venda (Recebimento de crediário, troca e devolução, Resgatar um DAV para o PDV, etc.).

- **Concentrador** — responsável por disponibilizar os arquivos .DAT de exportação para os terminais do PDV Alterdata e enviar os arquivos de importação para o Web Service. Não possui nenhuma inteligência — é utilizado somente para o transporte dos arquivos .dat.

- **Diretório Entrada/Saída** — aqui são alocados os arquivos exportados pelo Concentrador do Bimer para o PDV, e no diretório de saída ficam os arquivos de importação gerados pelo PDV referentes às vendas e outras movimentações.

- **PDV Alterdata** — a estação com o PDV Alterdata trabalha de forma autônoma ao sistema Bimer. Caso haja problema de conexão de rede, ele continuará trabalhando, conforme exigência da legislação.

- **DAT** — arquivos utilizados pelo PDV Alterdata para resgatar informações exportadas do Bimer e para gravar dados de vendas efetuadas para serem enviadas ao Bimer.

---

## Cenários

**Cenário 1:** Matriz e Filial estão trabalhando na mesma rede.

> *[Imagem: Diagrama do Cenário 1 — Matriz e Filial na mesma rede]*

**Cenário 2:** Matriz e Filial estão em diferentes ambientes — a comunicação será estabelecida via Internet.

> *[Imagem: Diagrama do Cenário 2 — Matriz e Filial em ambientes diferentes, comunicação via Internet]*

**Cenário 3:** Matriz e Filial estão em diferentes ambientes, porém na filial constam 2 (duas) estações do PDV Alterdata. Nesse caso, a pasta dos Diretórios Entrada/Saída precisa estar compartilhada na rede. Também é possível ter 1 Concentrador em cada estação, cada um com o seu diretório entrada/saída, mas apontados para o mesmo Web Service.

> *[Imagem: Diagrama do Cenário 3 — Filial com 2 estações PDV]*

---

## Versões Homologadas

Para atender à legislação do PAF-ECF, o PDV Alterdata também precisa estar com versões homologadas em cada Estado. Consulte as versões homologadas na intranet Alterdata.

> É importante atentar-se para que não seja instalado no cliente uma versão que não seja homologada em seu Estado.

---

## Instalação e Configurações

Já existem manuais específicos sobre instalação do PDV tanto no servidor quanto nas estações, e também sobre as configurações necessárias na retaguarda. Consulte:
- Manual de instalação da retaguarda e estações.
- Manual de configurações.

---

## Impressora Fiscal

Para utilizar o PDV Alterdata será necessário ter uma impressora fiscal conectada à máquina; ela deve estar ligada e ser reconhecida pelo Windows. Cada impressora fiscal possui seus próprios instaladores, que já devem estar instalados corretamente na máquina.

### Configurando Impressora Virtual (para testes internos)

**1. Download dos instaladores:**

Acesse o link `http://treinar.alterdata.com.br/Treinar/Emulador_Epson.zip` e realize o download dos arquivos compactados.

**2. Instalar o emulador de porta virtual:**

Execute o arquivo `SetupVSPE.msi` (dentro do `SetupVSPE.zip`). Siga os passos: **Next >> Aceitar termos >> Next >> Next >> Install >> Finish**.

**3. Configurar a porta virtual:**

Execute o **VSPE** instalado na área de trabalho. Clique em **Não** e **Ok** na mensagem inicial. Clique em **Create new device...**, selecione o tipo **Connector**, informe **COM4** em **Virtual serial port** e clique em **Concluir**.

**4. Instalar a impressora:**

Execute o arquivo `SimuladorT81FBIII.msi` (dentro do `SimuladorT81FBIII.zip`). Siga: **Next >> Next >> Close**.

**5. Configurar a porta da impressora:**

Acesse `C:\Program Files (x86) ou Program Files\Epson\SimuladorT81FBIII` e abra o arquivo `Settings.ini`. Na linha `HOST=COM1`, mude para `HOST=COM4` e salve.

**6. Ligar a impressora:**

Execute a impressora instalada na área de trabalho e clique no botão **On** para ligá-la.

**7. Cadastrar alíquotas:**

No arquivo compactado, execute `ExemploEpson.exe`. No programa, acesse:
- **Funções >> EPSON_Serial >> EPSON_Serial_Abrir_PortaEx**
- **Funções >> EPSON_Config >> EPSON_Config_Aliquota**

Após isso, a alíquota estará configurada.

> **Observação:** Quando se utiliza impressoras virtuais, o PDV só aceita produtos que tenham em sua descrição a palavra **TESTE** (ex.: "FEIJÃO 1 Kg TESTE") e somente produtos de código **000001 ao 000005**.

### Liberação de ECF

O próximo passo deve ser feito tanto para impressora virtual quanto para impressoras físicas. O **Libera ECF** pode ser encontrado na área de trabalho ou nos diretórios:
```
C:\Program Files (x86) ou Program Files\Alterdata\PDV Alterdata
```

**Procedimento:**
1. Execute o `Libera ECF.exe`.
2. Aponte o **layout da impressora** e a **porta de comunicação**.
3. Clique em **Gravar**.
4. Acesse **Liberação de ECF** e clique em **Ler informações do ECF** para o aplicativo ler automaticamente a série e totalizador da impressora fiscal/emulador.
5. Copie a série do equipamento.
6. Acesse o site `paf.alterdata.com.br` (de preferência pelo Internet Explorer).
7. Informe o **Código**, **CNPJ** e **Razão Social** do cliente, marque a opção **Liberação de ECF** e cole a série do equipamento no campo **Série**.
8. Clique em **Gerar Contra-Senha**, copie a senha e cole no Libera ECF.

> **Se Liga!** A contrassenha tem validade de **10 minutos** para ser utilizada. Caso expire, deverá gerar uma nova contrassenha. Atentar-se à diferença de horário na máquina em que foi gerada a senha e a máquina que usará a contrassenha no Libera ECF.

---

## PDV Alterdata — Especificações PAF ECF

Para conhecer a rotina de vendas e integração, consulte o manual específico de venda e integração.

A partir deste ponto, são detalhados aspectos específicos da rotina de PAF ECF.

---

## Arquivos .DAT das Movimentações

| Arquivo | Descrição |
|---|---|
| **HDOC** | Informações da capa do cupom fiscal (NrCOO, Cliente, Valor Total, Terminal, Prazo…) |
| **DDOC** | Informações dos itens do Cupom Fiscal (quantidade, valor unitário, desconto…) |
| **TDOC** | Igual ao HDOC, porém com informações do documento de entrada gerado na Troca ou Devolução |
| **CDOC** | Igual ao HDOC e TDOC, porém com informações do documento cancelado |
| **LEVT** | Importado para a auditoria da retaguarda |
| **MRES** | Utilizado pelo aplicativo Gerenciador de Mapa Resumo do Bimer |
| **PPROC** | Gerado ao resgatar um DAV no PDV Alterdata e cancelar a venda antes de finalizá-la. Ao importar para o Bimer, o sistema ajusta a tabela `ProcessoPendente` e o DAV volta ao status "Disponível" |
| **HDOC CNF** | Cupom Não Fiscal, gerado por suprimentos e sangrias de caixa, assim como relatórios não fiscais |
| **ECXA** | Encerramento de caixa — ao ser importado, alimenta a tabela `MovimentoCaixa`. Somente com a importação deste arquivo o caixa poderá ser conferido no módulo Conferência Cega |

### Arquivos R (temporários, enviados à retaguarda após a Redução Z)

| Arquivo | Descrição |
|---|---|
| **R01** | Grava as informações do ECF e da empresa |
| **R02** | Gerado após a Redução Z — guarda as informações da mesma (Venda Bruta, CRZ, CRO, GT…) |
| **R03** | Gerado após a Redução Z — guarda os totais das alíquotas, cancelamento, desconto, acréscimo… |
| **R04** | Alimentado a cada venda — guarda as informações do cupom fiscal (COO, valor total, CCF…) |
| **R05** | Alimentado a cada venda de item — guarda as informações dos itens do cupom fiscal |
| **R06** | Alimentado durante o dia — guarda todos os relatórios gerenciais, comprovantes não fiscais e CCD impressos |
| **R07** | Alimentado durante o dia — guarda todas as formas de pagamento e valores que saíram nos cupons fiscais |

### Limites de Importação por Bloco

A partir da versão **6.09.11.00** do Integrador Bimer x PDV Alterdata, o sistema importa os documentos em bloco com os seguintes limites:

| Tipo | Quantidade |
|---|---|
| Auditoria (A) | 50 |
| Mapa resumo (M) | 20 |
| Processo Pendente (S) | 30 |
| Movimento ECF (1,2,3,4,5,6,7) | 10 |
| Cancelamento (N) | 10 |
| Encerramento (X) | 10 |
| Inutilização (U) | 30 |
| Contingência (W) | 20 |
| Resumo Diário (L) | 10 |

---

## Menu Fiscal do PDV

Acessível em qualquer tela do PDV (desde que não haja cupom aberto) pela tecla de atalho **Ctrl + M**.

| Opção | Descrição |
|---|---|
| **LX** | Imprime a leitura X no ECF. Indica os valores acumulados nos contadores e totalizadores sem zerá-los. Pode ser feita a qualquer hora do dia e quantas vezes forem necessárias. |
| **LMF** | Emite uma leitura da memória fiscal completa. O intervalo de impressão pode ser por "CRZ" (Número do contador de Redução Z) ou por "Data". |
| **Arq. MFD** | Gera um arquivo semelhante ao da NF Paulista. Também pode gerar o Arq. TDM com as configurações do ECF, solicitado pela Secretaria de Fazenda. |
| **Arq. AC 17/04** | Emite um arquivo TDM ou MFD de um determinado período no layout do Ato COTEPE/ICMS 17/04. Usado principalmente na integração contábil. |
| **Identificação do PAF-ECF** | Gera o número do laudo da impressora, a autenticação dos executáveis, MD-5 do PDV Alterdata, número de série dos ECF Autorizados, entre outras informações. |
| **Tab. Índice Técnico da Produção** | Mostra os insumos utilizados em cada produto composto. |
| **Parâmetros de Configuração** | Imprime os parâmetros das configurações inacessíveis ao usuário do PAF-ECF. |
| **Registro PAF-ECF** | Gera um arquivo com as informações dos produtos no estoque. Opções: "Parcial" (selecionar produtos) ou "Completo" (todos os produtos). |
| **Espelho MFD** | Reimpressão de dados da memória interna da impressora: determinados cupons fiscais ou a sequência de cupons fiscais emitidos em uma determinada data. |
| **Envio ao FISCO-REDUÇÃO Z** e **Envio ao FISCO-ESTOQUE** | Utilizadas para geração do arquivo bloco X pelo sistema. |
| **Vendas Identificadas pelo CPF/CNPJ** | Gera o arquivo eletrônico das vendas realizadas para pessoa física (CPF) ou jurídica (CNPJ), com seleção por mês, ano e CPF/CNPJ. |
| **Vendas do período** | Gera um arquivo TXT de vendas no formato do convênio 57/95 ou no formato Ato Cotepe ICMS 09/08. |

> **Observação:** Alguns relatórios precisam ler os dados da memória fiscal para serem emitidos. Portanto, não será possível utilizar impressoras matriciais, pois esse tipo de impressora não possui esse recurso.

---

## Funções Administrativas

Acessível pela tecla de atalho **Shift + F11**.

| Opção | Descrição |
|---|---|
| **Cancelar Último Cupom** | Permite fazer o cancelamento do último cupom gerado pela impressora fiscal. Não é permitido cancelar cupom que não seja o último. Para cancelamentos de outros cupons, sugerir uma devolução de venda. |
| **Redução Z** | Encerra o caixa e imprime a Redução Z. A Redução Z é um documento fiscal emitido pelo ECF com informações idênticas às da Leitura X, mas que zera os totalizadores parciais. Deve ser emitida no encerramento diário das atividades — o ECF ficará bloqueado até as 00h00 do dia. |
| **Encerramento de Caixa** | Encerra o caixa sem emitir a Redução Z. Pode ser utilizado em troca de turnos. |
| **Configurações** | Abre as configurações do terminal. |
| **Espelho MFD** | Gera um arquivo TXT com o espelho das movimentações do período selecionado. A MFD (Memória de Fita Detalhe) armazena todas as informações impressas na impressora fiscal e substitui a segunda via da bobina, eliminando a necessidade de armazenar a segunda via em papel por 5 anos. |
| **Leitura X** | Imprime a Leitura X no ECF. Pode ser emitida a qualquer momento do dia e quantas vezes forem necessárias sem bloquear a impressora. Contém informações resumidas da movimentação do dia. |

---

## Sangria e Suprimento

- **Suprimento** — entrada de dinheiro no caixa, normalmente usado para compor o caixa em sua abertura ou como reforço de caixa.
- **Sangria** — saída de dinheiro do caixa, normalmente usada para composição de depósitos feitos pela empresa no decorrer da movimentação diária e no término do expediente. O valor é retirado do caixa, porém é gerado um relatório não fiscal na impressora com o registro da retirada, evitando divergências no encerramento de caixa.

> Qualquer suprimento ou sangria é feito com base na forma de pagamento em **dinheiro**.

### Sangria no Caixa

1. Acesse **Shift + F11** e selecione **3 – Sangria**.
2. Na tela seguinte, selecione a **forma de pagamento** da retirada (Dinheiro).
3. Digite uma **descrição** para a Sangria (ex.: "Retirada de valores para almoço de Funcionários").
4. Clique em **Editar**, informe o **valor da sangria** e clique em **Confirmar**.
5. Clique novamente em **Confirmar**.

Na impressora fiscal, será impresso um comprovante não fiscal de transação com o valor da Sangria.

### Suprimento no Caixa

1. Acesse **Shift + F11** e pressione **2 – Suprimento**.
2. Na tela seguinte, informe a **justificativa** da entrada e o **valor de entrada** no caixa.
3. Clique em **Confirmar**, informe a **forma de pagamento** do suprimento e clique em **Confirmar** novamente.

Na impressora fiscal, será impresso um comprovante não fiscal de transação com o valor do Suprimento.

---

## Encerramento de Caixa

Existem dois tipos de encerramento do caixa:

### Encerramento no Meio do Expediente (troca de turnos)

1. Pressione **Shift + F11** para abrir a tela **Ferramentas administrativas**.
2. Selecione a opção **5 – Encerramento de Caixa**.
3. Nesta tela será emitido o relatório de encerramento com todas as movimentações do dia, desde a abertura do caixa até o momento do encerramento.
4. Ao clicar em **Confirmar**, o sistema perguntará se deseja imprimir o relatório de encerramento.
   - **Sim** → será emitido na impressora Fiscal o relatório de encerramento.

### Encerramento no Final do Expediente (Redução Z)

1. Pressione **Shift + F11** para abrir a tela de **Ferramentas administrativas**.
2. Selecione a opção **4 – Redução Z**.
3. O sistema apresentará um alerta de confirmação.
4. Ao clicar em **Sim**, será apresentado o relatório gerencial de encerramento.
5. Após a impressão do relatório gerencial, será feita a impressão da **Redução Z** da impressora.

Após a impressão da Redução Z, a impressora ficará bloqueada até o dia seguinte e o PDV será fechado. Será gerado o arquivo de movimento ECF em:
```
C:\Program Files (x86) ou Program Files\Alterdata\PDV Alterdata\MovimentoECF
```

> **Observação:** Para mais informações sobre os recursos do PDV, consulte o **Ctrl + H** dentro do sistema.
