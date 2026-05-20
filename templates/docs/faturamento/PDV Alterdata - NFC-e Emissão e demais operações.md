# PDV Alterdata — NFC-e: Emissão e Demais Operações — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Emissão NFC-e](#emissão-nfc-e)
- [Emissão de NFC-e em Contingência](#emissão-de-nfc-e-em-contingência)
- [Integração das NFC-e com o Bimer](#integração-das-nfc-e-com-o-bimer)
- [Conferência das Vendas no Bimer](#conferência-das-vendas-no-bimer)
- [Cancelamento de NFC-e](#cancelamento-de-nfc-e)
- [Reimpressão de DANFE NFC-e](#reimpressão-de-danfe-nfc-e)
- [Inutilização de Número de NFC-e](#inutilização-de-número-de-nfc-e)
- [Encerramento de Caixa](#encerramento-de-caixa)
- [Extração de XML da NFC-e](#extração-de-xml-da-nfc-e)
- [Emissão de NF-e a partir de NFC-e](#emissão-de-nf-e-a-partir-de-nfc-e)
- [Casos de Suporte](#casos-de-suporte)

---

## Introdução

No manual "PDV Alterdata – Venda e Integração detalhada" foi demonstrada uma venda simples. Porém, o PDV Alterdata possui diversas outras funções que serão vistas neste manual.

> Se você ainda não fez a instalação do PDV, consulte primeiro o manual "PDV Alterdata – Instalação do servidor de retaguarda e estações".

---

## Emissão NFC-e

Após realizar o processo de venda no PDV Alterdata e informar a forma de pagamento desejada, na tela de fechamento clique **F9 – Enviar NFC-e** para finalizar a venda.

Neste momento o PDV iniciará o processo de comunicação com a SEFAZ Estadual para buscar autorização para emissão da NFC-e.

Haverá as seguintes possibilidades:

- A NFC-e poderá ser **autorizada e emitida normalmente**. Somente após este momento a NFC-e será impressa.
- A NFC-e poderá ser **rejeitada**, e com isso apresentará a rejeição na tela do PDV Alterdata.
- A NFC-e poderá ter **uso denegado**.
- A **comunicação com a SEFAZ poderá falhar**, e então o PDV apresentará mensagem perguntando se deseja emiti-la em contingência.

Ao clicar em **Tentar novamente**, o sistema fará nova comunicação com a SEFAZ.

Ao clicar em **Não emitir**, o sistema voltará à tela de Fechamento de venda.

Ao clicar em **Emitir em contingência**, a NFC-e será impressa em 2 vias, de acordo com orientações da SEFAZ: uma via fica na empresa e a outra é do cliente. O XML ficará na pasta de `Envio\RecepcaoNFe\Pendente` aguardando o PDV Alterdata estabelecer comunicação com a SEFAZ e realizar o envio da NFC-e normalmente.

> *[Imagem: Tela de mensagem de falha de comunicação com a SEFAZ, com opções "Tentar novamente", "Não emitir" e "Emitir em contingência"]*

**Diretório do arquivo:**
```
C:\Program Files (x86) ou Program Files\Alterdata\PDV ALTERDATA\NFCe\Envio\RecepcaoNFe\Pendente
```

Caso ocorra emissão de NFC-e em contingência, na via do cliente será impresso o QR-Code. Quando o PDV retomar a comunicação com a SEFAZ, ela será autorizada normalmente e o cliente poderá utilizar o mesmo QR-Code para fazer consulta na SEFAZ.

Quando o DANFE for impresso, caso esteja configurado para enviar o DANFE da NFC-e por e-mail ao cliente, será apresentada a tela para informar o e-mail de destino.

### Conteúdo do DANFE em Contingência

Ao emitir em contingência, o DANFE da NFC-e (via do Consumidor) conterá:

1. Dados da empresa emitente.
2. Dados para consulta da NFC-e junto à SEFAZ — o consumidor só conseguirá encontrá-la na SEFAZ após o PDV reestabelecer comunicação e emiti-la normalmente.
3. Os **valores totais aproximados de tributos federais, estaduais e municipais** serão apresentados de acordo com a importação da tabela IBPT pelo módulo **Configurador Bimer >> Estoque**, semelhante ao que acontece com a NF-e.
4. As mensagens finais configuradas (ex.: nome do vendedor).

A via do Estabelecimento não tem diferenças, exceto o destaque de quem pertence a via.

---

## Emissão de NFC-e em Contingência

Quando o PDV Alterdata não consegue estabelecer comunicação com a SEFAZ no envio de uma NFC-e, há a opção de fazer a emissão em ambiente de contingência.

- **Tentar novamente** → o sistema fará nova comunicação com a SEFAZ.
- **Não emitir** → o sistema voltará à tela de Fechamento de venda.
- **Emitir em contingência** → a NFC-e será impressa em 2 vias. O XML ficará na pasta:

```
C:\Program Files (x86)\Alterdata\PDV ALTERDATA\NFCe\Envio\RecepcaoNFe\Pendente
```

> **Atenção:** Uma NFC-e emitida em ambiente de Contingência **não terá validade fiscal** até que o sistema consiga enviar o arquivo XML para a SEFAZ e obter autorização de emissão. É estritamente necessário que ela seja reenviada assim que os problemas de comunicação sejam resolvidos.

### Gerenciador de NFC-e PDV Alterdata

Ao configurar o PDV Alterdata para trabalhar com NFC-e, ao abrir o sistema, será aberto também um agente chamado **"Gerenciador de NFC-e PDV Alterdata"**, que trabalhará minimizado na barra de tarefas do Windows, próximo ao relógio.

**Para configurar a periodicidade de reenvio:**
1. Clique com o botão direito do mouse sobre o ícone do Gerenciador.
2. Escolha a opção **Configurações**.
3. Informe a periodicidade em minutos para o Gerenciador tentar reenviar NFC-e emitidas em contingência. Por padrão, já vem configurado para **60 minutos**.

**Para visualizar as NFC-e pendentes:**
1. Clique com o botão direito do mouse sobre o Gerenciador.
2. Escolha a opção **Gerenciador de NFC-e**.

Pelo Gerenciador é possível:
- **Enviar todas as NFC-e pendentes**
- Selecionar uma ou mais NFC-e e **Enviar as NFC-e selecionadas**
- **Descartar as NFC-e selecionadas**
- **Reenviar somente a NFC-e destacada** na tela

> **Atenção:** Se uma NFC-e for descartada, a venda terá de ser feita novamente no PDV.

---

## Integração das NFC-e com o Bimer

Após as vendas serem realizadas no PDV, é necessário enviar os dados para movimentar a base do Bimer. Esse processo é feito automaticamente, de acordo com o agendamento dos módulos **Concentrador** e **Integrador Bimer PDV Alterdata**. Porém, é possível forçar o envio manualmente.

### Processo Manual de Integração

**Passo 1 — Concentrador:**
1. Abra o **Concentrador**.
2. Clique em **Importação**.
3. Clique em **Confirmar** no rodapé da tela.
4. Ao concluir, o sistema apresentará uma tela com o **Log da integração**, onde é possível observar, por tipo de movimento, a quantidade de documentos enviados e o local onde foi salva uma cópia após a exportação.

**Passo 2 — Integrador Bimer x PDV Alterdata:**
1. Abra o **Integrador Bimer x PDV Alterdata**.
2. Na aba **Integração**, clique em **Importação**.
3. No rodapé da tela, clique em **Confirmar**.
4. Ao final do processamento será demonstrado o LOG da importação.

> No primeiro processo de Importação dos dados de um terminal novo no Integrador, ocorrerá erro devido à falta de informações no cadastro do terminal.

### Configuração do Terminal

Para corrigir o erro no primeiro processo de importação:
1. Cancele a tela de importação.
2. Clique na aba **Principal** e em seguida em **Terminais**.
3. Nesta tela estarão todos os terminais de PDV, separados por empresa. O terminal terá o nome do computador em que foi instalado.
4. Clique duas vezes sobre o terminal desejado para editá-lo.

**Configurações do terminal:**
- **Setor de estoque:** caso a empresa trabalhe com movimento de estoque por setor, informe o setor dos produtos vendidos pelo PDV.

> É possível definir um setor de movimentação de estoque específico para itens com uma mesma característica de produtos, no campo **"Configurações para baixa direcionada de estoque"**.

- **Conta Bancária Padrão:** informe a conta bancária para movimentações. É possível selecionar uma conta bancária da empresa centralizadora, caso o cliente possua relação entre empresas. Também é possível informar contas diferentes por forma de pagamento (ex.: dinheiro → conta caixa; cheque → outra conta bancária).

> Para exportar formas de pagamento por empresa, acesse **Configurador Bimer >> Geral >> Empresas >> Cadastro >> Geral >> Formas de pagamento** e informe as formas de pagamento que devem ser apresentadas no PDV Alterdata.

Após configurar, clique em **Confirmar** e realize novamente a importação de dados somente no Integrador Bimer PDV Alterdata.

> **Atenção:** É comum aparecer a mensagem: *"Ocorrência identificada no arquivo: Hdoc[?????][CNF][?????][????].dat. O arquivo de encerramento referente a esta sangria ainda não foi importado"*. Nesses casos, basta executar novamente a importação no Integrador Bimer PDV Alterdata.

---

## Conferência das Vendas no Bimer

Após a importação ser realizada, é possível conferir as NFC-e criadas através do módulo **Faturamento**, na aba **Nota Fiscal do Consumidor**.

> **Atenção:** Para que a movimentação de estoque e a criação de títulos no Contas a Receber sejam realizadas, é necessário que o **LiberadorEstoque.exe** esteja em execução.

---

## Cancelamento de NFC-e

Segundo o Ajuste SINIEF 07/18, o emitente poderá solicitar o cancelamento da NFC-e, desde que não tenha havido a saída da mercadoria, em prazo não superior a **30 minutos** (podendo ser reduzido a critério de cada unidade federada), contado do momento em que foi concedida a Autorização de Uso da NFC-e.

**Para cancelar uma NFC-e:**
1. Na tela principal do PDV Alterdata, pressione **Shift + F11** para abrir o menu **Outras funções**.
2. Selecione **1 – Cancelar NFC-e** e clique em **Confirmar**.
3. O PDV Alterdata estabelecerá comunicação com a SEFAZ para apresentar os documentos emitidos.
4. Abrirá um assistente para localizar o documento, selecioná-lo e confirmar o envio do cancelamento.

---

## Reimpressão de DANFE NFC-e

Caso haja necessidade de reimprimir o DANFE de uma NFC-e:
1. Acesse o menu **Outras funções** com as teclas **Shift + F11**.
2. Escolha a opção **10 – Reimprimir Último DANFE NFC-e**.
3. Clique em **F9 – Confirmar**.
4. Será apresentada tela para informar o e-mail do destinatário (caso a base esteja configurada para envio por e-mail).
5. O DANFE será reimpresso.

> **Atenção:** O PDV só consegue reimprimir um DANFE NFC-e se o documento tiver sido gerado na **mesma abertura de caixa**. Se houver encerramento de caixa após a venda, não será mais possível reimprimir aquele DANFE pelo PDV.

---

## Inutilização de Número de NFC-e

Semelhante ao que acontece com a NF-e, quando existe um pulo na numeração da NFC-e por qualquer motivo, a empresa precisa comunicar a SEFAZ sobre a inutilização desta numeração.

**Para inutilizar faixas de NFC-e:**
1. Acesse o menu **Outras funções** através das teclas **Shift + F11**.
2. Escolha a opção **11 – Inutilizar faixas de NFC-e**.
3. Clique em **F9 – Confirmar**.
4. O sistema apresentará um assistente para informar a faixa a ser inutilizada e a justificativa.
5. Preencha os dados e clique em **Inutilizar faixa (F9)**.

Após isso, o sistema fará comunicação com a SEFAZ para o envio da inutilização.

**Possibilidades de retorno:**
- Inutilização será **autorizada normalmente**.
- Inutilização será **rejeitada** e apresentará rejeição na tela.
- Haverá **falha na comunicação** com a SEFAZ e apresentará mensagem de erro.

---

## Encerramento de Caixa

Um encerramento de caixa pode ser feito no final de um turno de trabalho ou no final do dia quando a loja fechar. O encerramento zera o caixa e emite um relatório demonstrando o resumo da movimentação financeira do PDV desde a abertura.

**Para fazer o encerramento:**
1. Acesse o menu **Outras Funções** ou use as teclas **Shift + F11**.
2. Selecione a opção **4 – Encerramento de caixa**.
3. Clique em **F9 – Confirmar**.
4. Será exibida a tela com o resumo da movimentação. Clique em **F9** para confirmar.
5. O sistema perguntará se deseja imprimir o relatório gerencial.
   - **Sim:** são impressos dois relatórios — um com o valor da sangria (retirada do caixa) e outro com o resumo da movimentação.
   - **Não:** somente o relatório da sangria é impresso.

---

## Extração de XML da NFC-e

Nas versões mais recentes do módulo Faturamento, é possível extrair o XML de uma NFC-e emitida no PDV Alterdata.

### Habilitação do Recurso

1. Acesse o módulo **Cadastro de Usuários**.
2. No modo de edição do usuário ou do Perfil de usuário, clique no sistema **Faturamento**.
3. Em **Diversos**, habilite o acesso à opção **Exportação de XMLs de notas fiscais**.

### Extração do XML

1. Acesse o módulo **Faturamento**, informe a **Empresa**.
2. Na aba **Diversos**, clique em **Exportação de XMLs**.
3. No assistente, informe:
   - **Empresa**
   - **Período de emissão**
   - **Tipo de documento:** NFC-e
   - **Diretório de exportação** onde o XML será gravado
4. Selecione o documento desejado e clique em **Exportar**.

> Caso ainda não tenha extraído o XML do documento, ele virá marcado como padrão.

---

## Emissão de NF-e a partir de NFC-e

Em diversas situações, a empresa pode precisar emitir uma NF-e a partir da NFC-e emitida pelo PDV. Por exemplo: a NFC-e é destinada a consumidores finais e não dá direito a crédito de ICMS para o comprador. Se o comprador for contribuinte de ICMS, ele pode solicitar a emissão da NF-e.

### Configuração Prévia

Acesse **Configurador Bimer >> Faturamento >> Opções >> Nota Fiscal** e informe a **Operação para nota fiscal de cupom fiscal**.

> **Atenção:** A operação deve ter:
> - Tipo de movimento igual a **Venda**
> - Opção **atualiza estoque:** desmarcada
> - Opção **atualiza financeiro:** desmarcada
> - Opção **imprime cupom fiscal:** desmarcada
> - Tipo de documento utilizado para emissão de NF-e
>
> As regras para cálculo de impostos devem ser vistas com a contabilidade da empresa.

### Emissão

1. Acesse o módulo **Faturamento**, na aba **Nota Fiscal**, informe a **Empresa**.
2. Na aba **Diversos**, clique em **Gerar nota fiscal a partir de cupom**.
3. No assistente, informe o **período de emissão** da NFC-e e clique em **Localizar** no campo **Documento**.
4. Se na NFC-e o cliente não foi identificado, é possível informá-lo neste momento.
5. Filtre pelo **Documento**, selecione-o e clique em **OK**.
6. Clique em **OK** novamente para confirmar a criação da NF-e no grid de notas fiscais.

O envio da NF-e para autorização da SEFAZ segue o fluxo normal do sistema.

---

## Casos de Suporte

### Duplicidade de NFC-e

Ao tentar emitir uma NFC-e, pode ocorrer instabilidade na comunicação com a SEFAZ, impedindo o envio ou retorno do documento. O PDV Alterdata possui proteção para evitar duplicidade, exibindo mensagem para emitir em contingência ou tentar novamente.

Neste momento, o sistema não gera Hdoc, Ddoc e Xdoc para essa numeração. Em vez disso, guarda a numeração em novos arquivos:

- **PHDOC** → Cópia do arquivo Hdoc, para guardar a numeração do documento para posterior verificação se foi emitido ou não.
- **PDDOC** → Cópia do arquivo Ddoc, com a mesma finalidade.
- **PXDOC** → Cópia do arquivo Xdoc, com a mesma finalidade.

Estes arquivos são criados no formato `.DAT` e enviados para a base do Bimer pelo Concentrador, ficando armazenados aguardando retorno da SEFAZ.

Ao clicar em **Tentar novamente**, o sistema tentará novo envio com nova numeração do documento e gerará os arquivos acima para verificação do número anterior.

Ao clicar em **Emitir em contingência**, o sistema fará processamento da venda em contingência com nova numeração e série, e também gerará os arquivos para verificação do número anterior.

- **XDOCE** → Arquivo de cancelamento de documento, gerado quando o PDV identifica que o documento anterior foi gerado na SEFAZ. Cancela o documento na SEFAZ e no sistema Bimer.
- **XDOCI** → Arquivo de inutilização de faixa de NFC-e, gerado quando é identificado que o documento não foi gerado na SEFAZ. Também é responsável por excluir o documento da tabela `LoteDoc` caso exista no Bimer.

---

### PDV Alterdata não Comunicando com a SEFAZ — X Vermelho

**Possíveis causas:**
- Certificado digital inválido.
- Falta de internet na máquina do PDV Alterdata.
- SEFAZ indisponível.

**Possíveis soluções:**
- Verificar status do ambiente da SEFAZ para emissão de NFC-e no Estado do cliente.
- Verificar status de conexão com a internet da máquina do PDV Alterdata.
- Verificar validade do certificado digital em **Opções da internet** do Windows.
- Reinstalar certificado digital com a opção **"Marcar esta chave como exportável…"** marcada.

---

### Violação de Acesso ao Tentar Abrir o PDV Alterdata

**Mensagem:** `Access violation at address 0AAC567B in module 'NFC_ePDVAlt.all'. Read of address 00000000`

**Possível solução:** Apagar chave de DLL no Regedit da máquina do PDV.

1. Pressione **Windows + R**, digite `regedit` e dê Enter.
2. Dentro do Regedit, pressione **Ctrl + F** para abrir o Pesquisar.
3. Cole a chave `B3DB14A0-04A9-4E7A-924D-FBA52CBA61E0` e dê Enter para pesquisar.
4. Exclua todos os registros encontrados para essa chave (apague a pasta completa no quadro da esquerda).
5. Pesquise novamente até não encontrar nenhum registro.

> Exemplo de pasta: `NFEasy2.Library.IntegracaoPDV.NFCEProxy`

---

### Erro na Leitura do Certificado Digital

Ao abrir o PDV Alterdata, pode ocorrer erro de leitura do certificado digital. Isso pode acontecer quando o código de série do certificado informado no arquivo `Empresas.xml` é diferente do código de série do certificado atual.

**Possível solução:**
1. Acesse **Opções da Internet >> Conteúdo >> Certificados**.
2. Localize o certificado atual e válido do cliente.
3. Selecione o certificado e clique em **Exibir**.
4. Na aba **Detalhes**, copie o **número de série** do certificado.
5. Abra a pasta `%\PDV Alterdata\NFCe\Config` e localize o arquivo `Empresas.xml`.
6. Edite o arquivo com o Notepad++ e, no campo `<NrCertificado>`, informe o código de série correto.
7. Salve o arquivo e abra o PDV novamente.

---

### Rejeição de NFC-e no QR-Code

**Rejeição:** `Código identificador do CFC no QR-Code não cadastrado na SEFAZ - COD 462`

**Possível solução:** Ajustar o código **Token** e **CSC** no cadastro da empresa no módulo **Configurador Bimer >> Geral**.

---

### Rejeição de NFC-e por Diferença de PIS e COFINS

**Rejeições:**
- `602 - Rejeição: Total do PIS difere do somatório dos itens sujeitos ao ICMS`
- `603 - Rejeição: Total do COFINS difere do somatório dos itens sujeitos ao ICMS`

**Possível solução:** Erro no arredondamento do PDV Alterdata na geração do XML (processo 0013518578).

---

### Rejeição de NFC-e por Falha no Rateio do Desconto

**Rejeições:**
- `O elemento 'vOutro' é inválido - O valor '0,00' é inválido - Código 215`
- `O elemento 'vDesc' é inválido - O valor '0.00' é inválido`

**Possível solução:** Falha no rateio do desconto ao importar um DAV no PDV Alterdata (processo 0014613492).

---

### Rejeição de NFC-e por Mudança na Validação da SEFAZ-AM

**Rejeição:** `O elemento 'prod' apresenta elemento filho 'CEST' inválido. Lista de possíveis elementos esperados: 'NVE, EXTIPI, CFOP'`

**Possível solução:** Atualizar a DLL responsável por emissão de NFC-e.

---

### Rejeição de NFC-e com Serviço devido CFOP

**Rejeição:** `O elemento 'ISSQN' apresenta elemento filho 'indIncentivo' inválido. Lista de possíveis elementos esperados: 'cServico, cMun, cPais'`

**Possível solução:** A tag `<indIncentivo>` só é habilitada quando se usa um CFOP destinado a Serviços. Ajuste o CFOP no cadastro da empresa no módulo **Configurador Bimer >> Geral**, na aba **NFC-e**, de vendas de Serviços.

---

### NFC-e Imprimindo Cortada na Impressora

No Libera ECF há alguns modelos de impressora homologados para funcionar com o layout de NFC-e. Porém, outros modelos podem ser utilizados usando o **Genérico** ou **Genérico (Mini Impressora)**.

**Possíveis soluções:**
- Imprimir folha de teste da impressora fora do sistema para verificar se também sai cortado. Se for o caso, orientar o cliente a buscar ajuda com o seu TI.
- Realizar testes com outros modelos de impressora (Genérico, Genérico Mini Impressora) no Libera ECF.

---

### Rejeição de NFC-e por NCM Inválido

**Rejeição:** `Informado NCM inexistente`

**Possíveis soluções:**
- Consultar a tabela de NCM existente no Portal Nacional de NF-e para verificar se o NCM informado no produto existe. Possivelmente será necessário ajustá-lo.
- Realizar exportação do Bimer para o PDV Alterdata.

---

### Gaveta não Funciona com NFC-e

Gavetas são acionadas automaticamente somente por impressoras fiscais. Neste caso, o cliente deverá acionar a gaveta manualmente, pois não há possibilidade de configurar o acionamento automático.

---

### PDV Alterdata não Abre com "Caractere Inválido Encontrado no Texto"

**Mensagens:**
- `Caractere inválido encontrado no texto.`
- `Não foi possível carregar as DLLs de NFC-e. Ocorreu o seguinte erro do tipo "EAccessViolation": Access violation at address 0A12377B in module 'NFCe_PDVAlt.all'. Read of address 00000000.`

Geralmente ocorre após uma queda de energia na máquina do PDV Alterdata.

**Possível solução:** Na pasta de instalação do PDV Alterdata, localize a pasta `NFCe` e dentro dela a pasta `Config`. Renomeie esta pasta para `Config.old` e tente abrir o PDV Alterdata novamente. A pasta será recriada automaticamente pelo PDV.
