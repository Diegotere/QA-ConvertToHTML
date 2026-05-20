# PDV Alterdata — Venda e Integração Detalhada — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Venda com NFC-e](#venda-com-nfc-e)
- [Integração Detalhada Bimer × PDV × Bimer](#integração-detalhada-bimer--pdv--bimer)
- [Exportação Bimer → PDV Alterdata](#exportação-bimer--pdv-alterdata)
- [Importação PDV Alterdata → Bimer](#importação-pdv-alterdata--bimer)
- [Cenários de Instalação do PDV Alterdata](#cenários-de-instalação-do-pdv-alterdata)

---

## Venda com NFC-e

### Inserção de Produtos

Para iniciar uma venda, informe o código do produto (manualmente ou através de leitora de código de barras), tecle **Enter** e informe a quantidade do item que o cliente está adquirindo. É possível informar um desconto em percentual ou em valor.

> **Observação:** Os campos **quantidade**, **desconto (%)** e **desconto (R$)** só estarão editáveis de acordo com as configurações feitas no **PDVAlterdataCfg >> Opções >> Validação >> Produtos**.

Nos campos abaixo da quantidade é possível verificar a descrição do produto e o valor unitário. Ao clicar **Enter** para finalizar a inserção de um produto, as informações aparecerão no lado direito do PDV, bem como o valor total da compra até aquele momento.

Caso a empresa não trabalhe com leitor de código de barras e não consiga identificar o código do produto, tecle **F1** ou clique sobre a lupa para abrir a tela de **Localização do item**.

Para corrigir informações de um item selecionado, clique sobre ele e utilize a tecla **F8 – Editar Produtos**. Após a alteração, clique em **Confirmar** ou utilize a tecla **F9**.

### Formas de Pagamento

Após inserir todos os produtos, escolha a forma de pagamento no rodapé do PDV, clicando sobre ela ou utilizando a tecla de atalho indicada.

Caso haja mais de uma forma de pagamento cadastrada com o tipo escolhido, o sistema apresentará uma tela para escolher qual deve ser utilizada. Em seguida, será aberta a tela para informar o valor que está sendo pago.

**Dinheiro (F2):**
- Se a quantia for igual ao valor da venda, basta confirmar.
- Se o cliente der um valor maior, informe o valor recebido e o sistema mostrará o troco na tela de **Fechamento da venda**.
- Se o cliente der um valor menor, o sistema demonstrará o **Valor Recebido** e o **Valor a Receber** restante. Nessa mesma tela, o usuário pode selecionar outra forma de pagamento para completar.

**Cheque (F3):**
- Além dos dados do cliente, é necessário informar os dados do cheque: **Número do Banco**, **Agência**, **Conta**.
- Se for um cheque pré-datado, é possível informar o número de dias ou a data de vencimento para depósito.

**Parcelado (F6):**
- Além dos dados do cliente, na tela **Edição de Parcelamento**, tecle **F2** para selecionar o número de vezes em que a venda será paga. O sistema utilizará os prazos cadastrados no Bimer com forma de pagamento Boleto.

**Cartão (F4):**
- Será aberta uma tela para escolher em quantas vezes a venda será dividida.

> **Atenção:** É recomendável que no **PDFAlterdataCFG >> Opções >> Geral**, a configuração **"Solicitar rede adquirente, o número sequencial único e a autorização de operações com cartão"** esteja marcada, para que esses dados sejam informados no final da venda.

**Identificação do cliente (Cheque ou Parcelado):**
- Se for um cliente já cadastrado, basta digitar o CPF/CNPJ ou teclar **F2** para localizar.
- Se for um cliente novo, clique em **Novo** ou use a tecla **F5**.

### Finalização da Venda

Após informar a forma de pagamento desejada, utilize a tecla **F9 – Enviar NFC-e** para finalizar a venda.

---

## Integração Detalhada Bimer × PDV × Bimer

Para que os dados do Bimer sejam enviados para o PDV Alterdata, é feito o processo de **exportação** tanto pelo **Integrador Bimer PDV Alterdata** quanto pelo **Concentrador** (nesta ordem).

Para enviar os dados do PDV Alterdata para o Bimer, é feito o processo de **importação** tanto no **Concentrador** quanto no **Integrador Bimer PDV Alterdata** (nesta ordem).

**Detalhes importantes:**
- O banco de dados do Bimer está em linguagem SQL, armazenado no **Microsoft SQL Server**.
- O banco de dados do PDV é composto de **arquivos .DAT**, e o sistema trabalha de forma **off-line**. Em cada computador com o PDV Alterdata instalado, haverá uma pasta com os arquivos DAT que compõem o seu banco de dados.
- O PDV Alterdata só consegue ler e escrever informações em **formato DAT**. Portanto, é necessária uma conversão de dados para que o processo de integração possa ser realizado.

---

## Exportação Bimer → PDV Alterdata

### Passo 1 — Integrador Bimer PDV Alterdata

O primeiro passo é feito pelo **Integrador Bimer PDV Alterdata**, através da opção **EXPORTAÇÃO**, disponível na aba **Integração**.

O integrador fará uma seleção de dados nas tabelas do Bimer (produtos, clientes, formas de pagamento, prazos, configurações do PDVAlterdataCfg, etc.) e converterá para o formato DAT. Esses dados serão salvos no próprio banco de dados no SQL Server, na tabela **DadosExportacaoIntegracao**.

> **Atenção:** O Integrador Bimer PDV Alterdata **NÃO SE COMUNICA** com nenhum outro serviço ou aplicativo no processo de integração. Seu trabalho é **exclusivamente** no próprio banco de dados do Bimer.

### Passo 2 — Concentrador

O segundo passo no processo de EXPORTAÇÃO acontece no módulo **Concentrador**, ao executar a função de mesmo nome na aba **Integração**.

O Concentrador é responsável por buscar as informações disponibilizadas pelo Integrador na tabela **DadosExportacaoIntegracao** do SQL e entregá-las para o PDV Alterdata. O Concentrador funciona como um "entregador de dados" — não processa nada, não converte nada, apenas entrega dados.

Ao clicar em **Exportar**, o Concentrador entra em contato com o **WebService "Exporta e Importa dados Spice e PDV Alterdata"** para conseguir se comunicar com a base de dados do Bimer no SQL Server e pegar as informações disponíveis na tabela **DadosExportacaoIntegracao**.

Após pegar essas informações (já no formato DAT), ele salva os arquivos no diretório informado na **aba Principal >> Opções >> Exportação**.

### Passo 3 — PDV Alterdata (Carga de Dados)

O terceiro e último passo no processo de Exportação é realizado pelo próprio **PDV Alterdata**. Ao abrir o PDV, ele fará automaticamente a **CARGA DE DADOS**.

No processo de carga de dados, o PDV busca os arquivos DAT disponibilizados pelo Concentrador no diretório de exportação. Para identificar o diretório, o PDV verifica em **Outras Funções >> Configurações >> Gerais >> Diretório de Carga de dados**.

> **Atenção:** Para que a carga de dados funcione corretamente, é preciso ter certeza de que o **diretório de carga de dados configurado no PDV** seja o **mesmo** que foi configurado no **Concentrador >> aba Principal >> Opções**.

Na mesma tela de configurações há o **tempo de intervalo** para que a carga de dados seja executada automaticamente pelo PDV quando ele já estiver aberto, mantendo as informações sempre atualizadas.

No processo de carga de dados, após ler as informações dos arquivos DAT, o PDV salva essas informações no seu banco de dados, também em arquivos DAT. O banco de dados do PDV Alterdata fica no diretório:
```
C:\Program Files (x86)\Alterdata\PDV Alterdata\BASE
```

Além da carga automática, é possível efetuar uma carga de dados manualmente clicando no ícone na parte superior da tela do PDV.

**Fluxo completo de exportação:**
```
Integrador Bimer PDV Alterdata
  → WebService "Exporta e Importa dados Spice e PDV Alterdata"
  → Concentrador (exportação)
  → Carga de dados no PDV Alterdata
```

---

## Importação PDV Alterdata → Bimer

### Passo 1 — PDV Alterdata

O primeiro passo acontece no **PDV Alterdata**. Toda vez que uma movimentação é realizada (venda, retirada ou entrada de dinheiro no caixa, etc.), essas informações são gravadas na base de dados do PDV Alterdata.

Além de alimentar a própria base do PDV, alguns arquivos serão salvos no diretório para geração dos arquivos de venda, informado em **Outras Funções >> Configurações >> Gerais**.

**Lista dos arquivos gerados pelo PDV:**

| Arquivo | Descrição |
|---|---|
| **Ddoc** | Armazena informações dos itens da venda |
| **Hdoc** | Armazena informações da capa do documento de venda |
| **IdDoc** | Armazena informações de impostos do documento (NÃO é usado no Bimer — remanejado para a pasta `Não_Utilizados` pelo Concentrador) |
| **Xdoc** | XML de envio da NFC-e para a SEFAZ (em formato .dat para ser importado para o Bimer) |
| **XDocE** | XML de cancelamento de NFC-e |
| **DANFE** | Armazena o DANFE da NFC-e (NÃO é usado no Bimer — remanejado para `Não_Utilizados`) |
| **Liac** | Liberação de acesso de usuário para desconto e cancelamento |
| **TFlx** | Títulos da devolução |
| **VPROMO** | Leva os dados da promoção realizada na venda |
| **JECxa** | Leva os IDs das formas de pagamento da conferência cega off-line |
| **Pproc** | Guarda o status do DAV quando não há conexão com o banco de dados |
| **CCAD** | Contém as informações do cliente cadastrado no PDV |
| **PHDOC** | Criado quando há falha de comunicação com a SEFAZ no momento de enviar a NFC-e — o PDV cria os arquivos DDoc e Hdoc com o P na frente e continua tentando o envio |
| **TDOC** | Igual ao HDOC, porém contém as informações do documento de entrada gerado na Troca ou Devolução |
| **CDOC** | Igual ao HDOC e TDOC, porém contém as informações do documento cancelado |
| **LEVT** | Será importado para a auditoria do Bimer |

### Passo 2 — Concentrador

O segundo passo é realizado pelo **Concentrador** automaticamente, de acordo com o agendamento feito. Para fazer de forma manual:
1. Acesse o **Concentrador**.
2. Clique na aba **Integrações**.
3. Clique em **Importação** e depois em **Confirmar**.

O Concentrador fará a leitura dos arquivos DAT disponibilizados pelo PDV Alterdata no diretório configurado na **aba Principal >> Opções >> Diretórios >> Importação**.

> Esse diretório deve ser obrigatoriamente o mesmo informado no **PDV Alterdata >> Outras Funções >> Configurações >> Gerais >> Diretório para geração dos arquivos de venda**.

Após a leitura, o Concentrador se comunica com o **WebService "Exporta e Importa dados Spice e PDV Alterdata"** e grava essas informações (em formato DAT) na base de dados do Bimer no SQL Server, na tabela **DadosImportacaoIntegracao**.

Após realizar o processo de importação, o Concentrador compacta os arquivos processados com sucesso e salva nos subdiretórios:
- `\DadosPDVALTERDATA\SAIDA\Importados` → arquivos DAT processados que foram entregues ao Bimer.
- `\DadosPDVALTERDATA\SAIDA\Nao_Utilizados` → arquivos DAT processados, mas não necessários para o Bimer.

### Passo 3 — Integrador Bimer PDV Alterdata

O terceiro passo é realizado pelo **Integrador** automaticamente. Para realizá-lo manualmente:
1. Acesse o **Integrador Bimer PDV Alterdata**.
2. Clique na aba **Integração**.
3. Clique em **Importação** e em seguida em **Confirmar**.

O integrador fará uma leitura dos arquivos DAT gravados pelo Concentrador na tabela **DadosImportacaoIntegracao** do banco de dados do Bimer no SQL Server.

> **Observação:** O sistema utiliza o campo `DtExecucaoImportacao` para identificar se o arquivo já foi importado ou não.

> **Informação:** Durante a leitura, o integrador criará arquivos no formato DAT na memória do próprio computador para em seguida importar definitivamente para a tabela.

Caso haja algum erro no processo de importação, além da informação apresentada no LOG, a mensagem do erro será gravada no campo `DsErroImportacao` da tabela **DadosImportacaoIntegracao**.

> **Atenção:** Para completar o processo de importação de dados é necessário que o **LiberadorEstoque.exe** esteja em execução.

> **Reforçando:** O Integrador Bimer PDV Alterdata não se comunica com nenhum WebService ou sistema. Ele realiza o processo de importação no banco de dados no SQL Server.

### Análise da Integração

Além dos pontos acima, é possível fazer uma análise acessando **Integrador Bimer PDV Alterdata >> Aba Análises >> Tabelas de Integração**. Selecione a tabela **Integração** e clique em **Filtrar**.

> *[Imagem: Fluxograma Completo da integração Bimer × PDV × Bimer]*

---

## Cenários de Instalação do PDV Alterdata

Em geral, o **Integrador Bimer PDV Alterdata** e os **Web Services de Integração** ficam instalados em uma única máquina (Servidor de Retaguarda). Já o **Concentrador** e o **PDV Alterdata** podem estar instalados em mais de um computador.

### Cenário 01

**Matriz e Filial estão trabalhando na mesma rede.**

> *[Imagem: Diagrama do Cenário 01 — Matriz e Filial na mesma rede]*

### Cenário 02

**Matriz e Filial estão em diferentes ambientes** — a comunicação será estabelecida via Internet.

> *[Imagem: Diagrama do Cenário 02 — Matriz e Filial em ambientes diferentes, comunicação via Internet]*

### Cenário 03

**Matriz e Filial estão em diferentes ambientes**, assim como o Cenário 02, porém na filial constam **2 (duas) estações do PDV Alterdata**. Nesse caso:
- A pasta dos **Diretórios Entrada/Saída** precisa estar compartilhada na rede.
- Ou pode-se optar por ter **1 Concentrador em cada estação**, cada um com o seu diretório entrada/saída, mas apontados para o mesmo Web Service.

> *[Imagem: Diagrama do Cenário 03 — Filial com 2 estações PDV]*
