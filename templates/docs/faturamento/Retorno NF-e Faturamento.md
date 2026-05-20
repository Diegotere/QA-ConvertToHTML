# Retorno NF-e Faturamento — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
- [Faturamento](#faturamento)
- [Monitoramento dos processos de retorno de NF-e](#monitoramento-dos-processos-de-retorno-de-nf-e)
- [Monitoramento do NFEasy](#monitoramento-do-nfeasy)
- [Registro no Banco de Dados](#registro-no-banco-de-dados)

---

## Introdução

Após gerar uma NF-e pelo módulo **Faturamento**, é necessário que ocorra a comunicação com a **SEFAZ** para realizar a autorização do documento fiscal, e atualizar dados como o financeiro, estoque, valores de comissão, entre outros.

Há duas maneiras de configurar o retorno da NF-e: pelo módulo **Faturamento** e pelo **Gerente Eletrônico**.

Este manual trata do retorno pelo **Faturamento**, que é a principal maneira utilizada hoje. Se quiser saber mais detalhes do retorno pelo Gerente Eletrônico, consulte o manual específico.

O processo pelo Faturamento ocorre do seguinte modo:

1. Através do **Faturamento** solicita-se o envio da Nota, onde é gravado o XML na **Pasta de Envio do NF Easy**;
2. O **NF Easy** transporta as notas da pasta de envio até a SEFAZ;
3. Após retornar da SEFAZ, o **NF Easy** localiza o documento e o envia para o diretório de **Recebimento**;
4. O **Faturamento** lê o arquivo que retornou da SEFAZ atualizando o status da nota no módulo, podendo ser Autorizada, rejeitada, cancelada, denegada, entre outros;
5. Após a autorização da nota, o **Faturamento** grava a informação no banco de dados do Bimer, e o próprio Faturamento processa a impressão do **DANFE** em PDF.

> *[Imagem: Representação gráfica do fluxo de retorno de NF-e pelo Faturamento]*

> **Nota:** A partir da versão **9.07.05.00**, é possível utilizar as DLL's do NF-Easy e o certificado acoplado na base de dados do Bimer, dispensando o uso do NF-Easy. Desse modo, o Faturamento funciona de modo independente.

---

## Configurações

Acesse **Configurador / Faturamento / Opções** e marque **"Os retornos de NF-e serão processados pelo sistema Faturamento"**.

> *[Imagem: Tela de opções do Configurador com a opção de retorno pelo Faturamento marcada]*

Ao marcar a opção, ficam disponíveis as seguintes marcações opcionais:

- **Gerar log para os processamentos do NFEasy** – Determina se o Faturamento monitorará a pasta de arquivos assinados pelo aplicativo NFEasy para verificar se o arquivo `*.xml` foi selecionado para ser processado. Com essa configuração marcada, o sistema preenche no log de processamento o registro `000030 – Arquivo assinado pelo NFEasy`;
- **Utilizar leitor de PDF interno** – Imprime o DANFE utilizando o leitor de PDF configurado no Windows e ignora as impressoras informadas abaixo. Se o cliente reclamar que a nota não está sendo impressa de modo correto na impressora física, peça para desmarcar esta opção.

Ainda temos a opção **Intervalo para verificação do status do NF-Easy**, que será monitorado diretamente no Faturamento através do recurso **Monitoramento do status do NFEasy**. Caso seja verificado algum motivo que impeça o envio e autorização de uma NF-e, o sistema exibirá um alerta na parte inferior da tela.

O padrão são **2 minutos**, mas podem ser ajustados conforme a necessidade.

---

## Faturamento

Após realizar as configurações anteriores, será necessário **reiniciar o Faturamento** caso o mesmo esteja aberto. Após isso, está tudo pronto para o retorno das notas começarem a ocorrer.

> **Importante:** O módulo Faturamento de cada máquina é responsável por verificar o retorno das notas que as próprias emitiram. Ou seja, se tem 10 máquinas na empresa e ambas estão com o Faturamento aberto, se o Faturamento da máquina PAT4444 emitir uma NF-e X, será o próprio Faturamento da máquina PAT4444 que verificará o retorno dessa nota X. Caso a máquina PAT4444 não possa verificar por alguma razão (Faturamento desligado, sem conexão local, máquina desligada, etc.), será então eleita uma outra máquina que verificará o retorno dessa nota X.

Para ver os detalhes do retorno da NF-e, especialmente quando a nota não retorna, acesse a aba **Nota Fiscal / Diversos** do Faturamento.

---

## Monitoramento dos processos de retorno de NF-e

A tela serve para acompanhar os retornos de: Documentos de venda, devolução, cancelamento, carta de correção, estorno e inutilização.

> *[Imagem: Tela de Monitoramento dos processos de retorno de NF-e]*

### Aba Log

Serão registradas todas as etapas desde o envio até o processamento dos arquivos de retorno. Existem dois campos:

- No lado **superior**: documentos enviados à SEFAZ;
- No lado **inferior**: detalhes do documento, onde é possível acompanhar as etapas do processamento da NF-e.

Os principais detalhes registrados são:

| Código do detalhe | Descrição |
|---|---|
| `00001` | Documento autorizado de modo manual pelo usuário no Faturamento. |
| `00010` | Preparação da nota fiscal eletrônica. |
| `00020` | Geração do `*.xml` de envio na pasta. |
| `00030` | Arquivo assinado pelo NF-Easy. *(Somente apresentado se a opção "Gerar log para os processamentos do NFEasy" estiver selecionada no Configurador / Faturamento / Opções / NF-e / Complementar.)* |
| `00040` | Início do processamento de retorno. |
| `00050` | DANFE enviado para a impressora a partir da rotina de envio. |
| `00060` | DANFE não foi impresso pela máquina que processou o retorno e/ou DANFE não foi impresso a partir das rotinas de impressão. *(Apresentado grifado de vermelho.)* |
| `00070` | Retorno de envio aprovado. |
| `00080` | Retorno de envio rejeitado. *(Apresentado caso o documento enviado retorne rejeitado por alguma inconsistência de acordo com a SEFAZ.)* |

### Aba Documento NF-e

Aqui são apresentadas as notas que foram processadas, porém não foram impressas. Dessa forma, é possível selecionar o documento e clicar em **Imprimir**.

Ao realizar este procedimento, o sistema exibirá o DANFE para que a impressão possa ser realizada através do aplicativo visualizador de PDF. Ao clicar no botão **Imprimir todos**, o sistema imprimirá todas as notas selecionadas.

> *[Imagem: Tela da aba Documento NF-e com lista de notas não impressas e botão Imprimir]*

Nesta mesma tela, ao clicar em **Visualizar Configurações** o aplicativo oferece uma forma de visualizar as configurações através de duas abas:

- **Aba Geral** – Apresenta as configurações para a impressão do DANFE, realizadas em **Configurador / Faturamento / Opções / NF-e / Geral**;
- **Aba Diretórios** – Apresenta a configuração dos diretórios do NF-Easy: Envio, Retorno de NF-e, Retorno de cancelamento, Retorno de inutilização e Retorno de carta de correção, em **Configurador / Faturamento / Opções / NF-e / Diretórios**.

---

## Monitoramento do NFEasy

Veja as informações detalhadas da comunicação do NF-easy com a SEFAZ:

> *[Imagem: Tela de Monitoramento do NFEasy com os campos de informação]*

| Campo | Descrição |
|---|---|
| **UF da SEFAZ** | Órgão da receita para onde foram enviados os documentos do emitente (SEFAZ MG, SEFAZ SP, etc). Caso o órgão principal de uma determinada UF não estiver operando, o SVC (SEFAZ Virtual de Contingência) é o órgão que poderá receber os documentos de todos os estados. |
| **Versão da NF-e** | Versão do documento da Nota Fiscal Eletrônica estabelecido pelo manual da NF-e, conforme o portal da NF-e. |
| **Serviço** | Cada um dos documentos enviados para a receita (NF-e, cancelamento, inutilização, entre outros) é enviado para um serviço específico. Esse serviço será responsável por validar o documento segundo as regras do manual da NF-e. |
| **Tempo de resposta** | Tempo que um determinado serviço levou para processar um documento enviado pelo emitente. |
| **Itens processados** | Quantidade de itens que foram processados pela SEFAZ na utilização de um serviço específico. Exemplo: caso o emitente gere cinco notas fiscais eletrônicas em um curto período de tempo, a aplicação poderá enviar para a SEFAZ as cinco notas em um único lote. |
| **Último acesso** | Registra a data mais recente em que foi feita a comunicação com um determinado serviço da SEFAZ. |

> **Você Sabia!?** O monitoramento do NF-easy é realizado somente nas seguintes circunstâncias:
> 1. Quando a base está configurada para trabalhar com NF-e;
> 2. Se a empresa de estoque informada no Faturamento trabalhar com NF-e;
> 3. Caso a configuração `StMonitorarStatusNFEasy` da tabela `<Configuracao>` da base de dados esteja com o valor `"1"`. (Esta configuração é alterada somente na base de dados.)

---

## Registro no Banco de Dados

Na rotina de envio da NF-e, a nota será armazenada como informação na tabela **`DocumentoProcessamentoNFe`** do banco de dados. No momento do retorno da NF-e essa informação é excluída da tabela. Em seguida, ao realizar a impressão do DANFE, será registrada uma nova informação na tabela **`DocumentoNFEletronica`**, referente à impressão.

Quanto ao acompanhamento realizado através da tela de **Monitoramento dos processos de retorno de NF-e** do módulo Faturamento, as informações serão registradas no banco de dados nas tabelas:

- **`DocumentoNFeLog`**
- **`DocumentoNFeLogDetalhe`**

Somente ao executar o módulo do **Liberador de Estoque**, serão registradas na tabela **`Documento`** as informações completas referentes à Nota Fiscal Eletrônica.
