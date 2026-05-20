# PDV Alterdata — Instalação da Retaguarda e Estações — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Instalação do Servidor de Retaguarda](#instalação-do-servidor-de-retaguarda)
- [Integrador Bimer x PDV Alterdata](#integrador-bimer-x-pdv-alterdata)
- [Instalação da Estação do PDV](#instalação-da-estação-do-pdv)
  - [Configurações do Concentrador](#configurações-do-concentrador)
  - [Recursos na Interface do Concentrador](#recursos-na-interface-do-concentrador)
  - [Log de Execução](#log-de-execução)
  - [Exportação e Importação Manual](#exportação-e-importação-manual)
  - [Informações Adicionais](#informações-adicionais)
- [Instalação do Certificado Digital](#instalação-do-certificado-digital)
- [PDV Alterdata — Primeiro Acesso](#pdv-alterdata--primeiro-acesso)
  - [Ambiente de Homologação](#ambiente-de-homologação)

---

## Instalação do Servidor de Retaguarda

O PDV Alterdata trabalha de forma **OFF line**, com um processo de integração entre a base de dados do Bimer (geralmente no servidor principal da empresa) e os terminais do PDV Alterdata (que podem estar na mesma rede física ou em outros locais, como uma rede de lojas).

Por isso, é necessário definir um computador que servirá de **Servidor de integração do PDV**. Pode ser o próprio servidor da empresa, porém muitas preferem que seja em outra máquina, devido às liberações de acesso à internet necessárias.

> **Observação:** Antes de tudo é obrigatório ter o **.NET Framework 4.0** ou superior.

**Procedimento de instalação:**

1. Clique com o botão direito do mouse sobre o `AssistenteInstalacaoServidor.exe` e execute como administrador.
2. Por padrão, todas as opções para instalação do Integrador e dos Web Services estarão selecionadas. Elas devem permanecer marcadas, pois todas são necessárias para o processo de integração:

   - **Integrador Bimer x Spice e PDV Alterdata** — Executável responsável por exportar e importar dados entre o Bimer e o PDV Alterdata.
   - **Exporta e Importa dados Spice e PDV Alterdata** — Web Service utilizado pelo Concentrador, possibilitando a exportação e a importação de dados entre o Bimer e o PDV Alterdata.
   - **Integra plugins PDV Alterdata** — Web Service utilizado para efetuar a integração entre os recursos (plugins) disponíveis no PDV Alterdata e a retaguarda. No PDV, ao pressionar **Alt + O** e resgatar um DAV, por exemplo, este Web Service será utilizado.
   - **Integra dados Sintegra PDV Alterdata** — Efetua a consulta de dados na retaguarda para geração do arquivo de Sintegra através do PDV Alterdata.
   - **Integra dados Sped PDV Alterdata** — Efetua a consulta de dados na retaguarda para geração do arquivo de SPED através do PDV Alterdata.

3. Clique em **Avançar**.

> **Atenção:** No quadro **Instalação do Internet Information Service (IIS)**, mesmo que o IIS já esteja ativo no Windows, você deverá sempre marcar essa opção, para garantir que nenhuma das configurações necessárias esteja desmarcada.

4. No campo **Porta**, o executável identificará as possíveis portas habilitadas para uso. Para cada Web Service haverá um ícone de "Visto verde" (porta disponível) ou "X vermelho" (porta em uso). Após definir as portas, clique em **Avançar**.

5. Na tela de **Comunicação com a retaguarda**, crie um usuário que será utilizado pelo Web Service para comunicar-se com a base de dados de retaguarda. Este usuário será gravado no arquivo `Web.config`.

6. No quadro **Informações da retaguarda**, informe: **Servidor** e **Senha do usuário Supervisor (SA)**. Clique em **Conectar**. Após conectar ao SQL, aponte a base de dados do sistema Bimer no campo **Localize a base de retaguarda**.

7. No quadro **Usuário para o Web Service**, defina um nome e senha para o usuário que será criado para comunicar-se com a base de dados de retaguarda.

   > É altamente recomendável sempre criar um usuário, independente se já havia outro criado.

8. Clique em **Instalar**. Caso não haja nenhum problema, será exibida a tela de **Instalação Concluída com sucesso**.

   > **Dica:** Às vezes é necessário executar o instalador mais de uma vez para que ele consiga instalar todos os recursos corretamente.

O procedimento criará uma pasta chamada `WS` no diretório `C:\Program Files (x86)` ou `Program Files\Alterdata\`. Dentro dela constarão 4 pastas correspondentes aos Web Services criados.

Dentro de cada pasta conterá o arquivo `Web.config` com as configurações do Web Service:

```
<ConnectionStrings>
  Data Source     → Nome do servidor e Instância onde se encontra a base de dados do Bimer
  Initial Catalog → Nome da base de dados do Bimer
  ID e Password   → Usuário e senha de acesso ao Bimer
```

---

## Integrador Bimer x PDV Alterdata

Após concluída a instalação, execute `IntegradorBimer_PDVAlterdata.exe` disponível em `C:\Program Files (x86)\Alterdata\ERP`.

O **Integrador Bimer x PDV Alterdata** é responsável por iniciar o processo de integração. Ele selecionará os dados das tabelas do Bimer que serão exportadas pelo Concentrador para o PDV, e importará os dados do PDV para o Bimer.

> **IMPORTANTE:** A partir da versão **9.05.01.00** do sistema, o Integrador PDV Alterdata passa a funcionar como **serviço do Windows**. O serviço é criado automaticamente ao final da instalação do `IntegradorBimer_PDVAlterdata.exe`.

**Configuração:**

1. Na aba **Principal**, clique em **Opções**.
2. Informe o código da empresa e clique em **"Adicionar um registro"** para incluir a empresa no quadro inferior.
3. Após adicionar a(s) empresa(s), informe a **periodicidade da exportação**.

> **Observação:** A importação é realizada automaticamente a cada 2 minutos.

Tenha coerência na definição do tempo de exportação para não sobrecarregar o servidor desnecessariamente. Se não há muitas alterações no cadastro de produtos durante o dia, não há necessidade de um intervalo curto entre as exportações. Já a importação traz as vendas realizadas no PDV para o Bimer, justificando um intervalo menor.

4. Clique em **Confirmar** para salvar as alterações.

**Exportação e importação manual:**

Na aba **Integração** é possível realizar a exportação e a importação manualmente, visualizar os logs de execução, bem como parar e iniciar o serviço do integrador.

Por padrão, a exportação manual é feita para todas as empresas. Contudo, é possível selecionar apenas uma, se necessário. Clique em **Confirmar** para iniciar.

> **Atenção:** O sistema não abre nenhuma janela confirmando se a exportação foi realizada com sucesso ou não. Observe o **Progresso de Exportação** na tela. Para cada opção, o sistema indicará sucesso ou erro. Ao posicionar o cursor sobre a área que indica o percentual, o sistema mostrará uma mensagem indicando o motivo do erro, se houver.

---

## Instalação da Estação do PDV

Execute o instalador `PDVAlterdata_Bimer_NFCe.exe`. Ele instalará o **Concentrador**, os **Plugins** e o **PDV Alterdata**. Recomenda-se sempre executá-lo como administrador.

> **IMPORTANTE:** A partir da versão **9.03.07.00** do Bimer, o Concentrador do PDV Alterdata passou a funcionar como **serviço do Windows**, trazendo diversas vantagens — ao reiniciar o computador, o serviço é iniciado automaticamente.

O instalador exibirá uma mensagem informando que o serviço do concentrador será finalizado (caso esteja ativo) e reiniciado ao final da instalação.

**Procedimento:**

1. A primeira tela mostra informações sobre o instalador. Clique em **Avançar**.
2. Na tela seguinte, o diretório de instalação é exibido. Não há necessidade de alterá-lo, a não ser que o responsável de TI da empresa solicite. Clique em **Avançar**.
3. Defina o que será instalado naquele computador:
   - **Completa** — Instala o Concentrador e o PDV Alterdata.
   - **Somente o Concentrador**
   - **Somente o PDV Alterdata**

   > Por padrão, a instalação completa é feita em apenas 01 dos computadores da loja. Nos demais, pode ser instalado apenas o PDV Alterdata. O computador com o Concentrador ficará responsável por distribuir os dados vindos do Bimer para os demais terminais do PDV.

4. Clique em **Avançar** e em seguida em **Instalar** para concluir. Após a conclusão, o serviço do Concentrador será criado automaticamente.

### Configurações do Concentrador

Após a instalação, verifique as configurações do Concentrador. Ao iniciá-lo pela primeira vez, será exibida uma tela solicitando a URL do Web Service.

Informe a URL do Web Service **Exporta e Importa dados Spice e PDV Alterdata (Bimer)** e clique em **Confirmar**.

> **Atenção:** Para a informação da URL do webservice, observe:
> - Se o Concentrador foi instalado **na mesma máquina** dos Web Services: `http://localhost:<portadowebservice>`
> - Se são **máquinas diferentes na mesma rede local**: `http://<ipdoservidorderet>:<portadowebservice>`
> - Se as **máquinas estão em redes diferentes**: verifique com o TI do cliente para publicar o IP do WS na rede.

A URL informada será gravada no arquivo `Concentrador.ini` em `C:\Program Files (x86)` ou `Program Files\Alterdata\PDV Alterdata`. Para alterar o endereço, basta editar esse arquivo.

> **Importante:** Ao copiar a URL do Web Service do navegador, geralmente consta `/#/` ao final. Essa informação não pode ir para esta configuração — remova-a antes de gravar.

Após a configuração da URL, acesse o módulo do Concentrador (via Web Service, por qualquer usuário da base de retaguarda). Será exibido um alerta para configurar as **Opções do Concentrador**.

Clique em **Opções** e preencha:

- **Empresa de integração** — No concentrador só é possível informar uma empresa. Se mais de uma empresa trabalhar com PDV (como uma rede de lojas), é necessário instalar um concentrador para cada empresa em máquinas diferentes.
- **Diretório de Exportação** — Os dados serão resgatados da base de retaguarda para o PDV Alterdata.
- **Diretório de Importação** — As vendas efetuadas pelos terminais do PDV Alterdata serão enviadas à base de retaguarda.

  > Se a empresa possuir apenas 01 terminal do PDV no mesmo computador que o Concentrador, pode-se informar diretórios na unidade local. Se existirem mais de um terminal, os diretórios devem ser pastas na rede da empresa.

  Padrão recomendado:
  ```
  Exportação → C:\DadosPDVAlterdata\Entrada
  Importação → C:\DadosPDVAlterdata\Saída
  ```

- **Intervalo de tempo para exportação e importação** — Configure de acordo com a necessidade de cada empresa. Um tempo de exportação baixo só é recomendado para empresas com alta demanda de mudanças nos cadastros (como supermercados com diversas alterações de preços em um único dia).

Clique em **Confirmar** para gravar as configurações. A partir desse momento, o Serviço de Concentrador já foi criado e iniciado. Para verificar se está ativo, abra a lista de serviços do Windows e procure por **Alterdata Concentrador**.

### Recursos na Interface do Concentrador

Na tela principal do Concentrador existem as opções de **Iniciar** e **Parar** a execução do Serviço, sem necessidade de abrir a lista de serviços do Windows.

> **Atenção:** Se o serviço for parado manualmente na lista de serviços do Windows com o módulo Concentrador aberto, a tela não será atualizada — ficará parecendo que o serviço está iniciado. Porém, ao clicar em **Parar** e depois em **Iniciar** no módulo, o serviço será reiniciado.

### Log de Execução

Dividido em 3 abas:

- **Log de exportação** — Informações referentes ao processo de exportação.
- **Log de importação** — Informações referentes ao processo de importação.
- **Log de erros** — Concentra apenas os erros ocorridos em qualquer um dos processos.

Os logs ficam separados por dia e são temporários — o sistema armazena o LOG por até **7 dias**, após o que é apagado.

### Exportação e Importação Manual

Se os horários de importação foram definidos corretamente, raramente será necessário fazer uma exportação ou importação manualmente. Porém, situações como alteração de preço de produto com necessidade de atualização imediata no PDV, cadastro de produto novo ou necessidade de testes do suporte podem exigir o procedimento manual.

Na tela do módulo Concentrador, clique sobre **Exportação** ou **Importação**. O sistema para o serviço do concentrador, executa o processo e depois reinicia o serviço.

### Informações Adicionais

- Não é necessário manter a interface gráfica do Concentrador aberta para que o serviço se mantenha iniciado.
- Ao reinstalar ou fazer uma atualização do sistema, o instalador **SEMPRE** desinstalará o serviço e fará uma nova instalação.
- Se for feita alguma alteração nas opções do Concentrador com o serviço em execução, ao gravar as alterações o serviço será parado e reiniciado para assumir os novos parâmetros.
- Se o serviço for parado manualmente na lista de serviços do Windows e a interface do Concentrador for aberta, o serviço é iniciado novamente automaticamente.
- A partir da versão **9.05.01.00**, o Integrador também passou a ser executado como serviço do Windows.

> Para saber mais detalhes sobre o processo de Exportação e Importação e suas funções, consulte o manual **"PDV Alterdata – venda e integração detalhada"**.

---

## Instalação do Certificado Digital

A instalação do certificado digital é de responsabilidade do Técnico de Informática do cliente. Ao configurar o layout NFC-e, o PDV Alterdata só abrirá caso o certificado esteja instalado corretamente.

> **Observação:** Existe um certificado digital A1 para uso **INTERNO** em testes no PDV Alterdata, que pode ser solicitado ao suporte de canais. Este certificado não é válido — a NFC-e não será enviada para a SEFAZ.

**Procedimento de instalação do certificado de teste:**

1. Descompacte o arquivo do certificado em uma pasta.
2. Acesse o **Painel de Controle >> Rede e Internet >> Opções da Internet**.
3. Na aba **Conteúdo**, clique em **Certificados**.
4. Avance até a aba **Autoridades de Certificação Raiz Confiáveis** e clique em **Importar**.
5. No **Assistente para importação de certificado digital**, clique em **Avançar** e selecione o arquivo `Certificado_teste_cer` clicando em **Procurar**.
6. Clique em **Abrir** e em seguida em **Avançar**.
7. Marque a opção **"Colocar todos os certificados no repositório a seguir"** e clique em **Concluir**.
8. Navegue até a aba **Pessoal** e clique em **Importar**.
9. Selecione o arquivo `teste.pfx` clicando em **Procurar** (se não aparecer, selecione **Todos os arquivos (*.\*)** na parte inferior direita).
10. Ao avançar, marque a opção **"Marcar esta chave como exportável…"**, informe a senha `12345678` e clique em **Avançar**.
11. Deixe marcado **"Colocar todos os certificados no repositório a seguir"** e avance para concluir.

---

## PDV Alterdata — Primeiro Acesso

Ao executar o PDV Alterdata pela primeira vez, serão solicitadas algumas configurações.

O sistema apresentará uma mensagem indicando problemas de processamento em algumas tabelas. Essa mensagem aparece porque o PDV ainda não conseguiu localizar as tabelas para fazer a carga de dados com as informações vindas do Bimer — as configurações dos diretórios de comunicação ainda não foram feitas.

**Configuração inicial:**

1. Clique em **OK**. Será aberta a tela de configurações do PDV Alterdata.
2. Na **aba 1 – Gerais**, informe:
   - **Diretório para geração dos arquivos de venda** — Informe o mesmo diretório apontado no **Concentrador >> aba principal >> Opções >> Diretório de importação**. Nele serão gravados os movimentos gerados pelo PDV que devem ser enviados para o Bimer.
   - **Diretório de carga de dados** — Informe o mesmo diretório apontado no **Concentrador >> aba principal >> Opções >> Diretório de exportação**. É o diretório onde o PDV encontrará os dados enviados pelo Bimer para alimentar sua base de dados.
3. Na opção **Impressão**, no campo **layout** selecione **NFCe**. No **tipo de impressora** selecione **Genérica** e selecione a impressora de trabalho.
4. Clique em **Gravar**. O sistema indicará que é preciso reabrir o sistema para que ele reconheça as configurações.
5. Ao reabrir o PDV, será solicitada a identificação do **Certificado Digital**. Após selecionar, clique em **OK**. Em seguida, iniciará a carga de dados.
6. Faça o **login** informando usuário, senha e valor para abertura de caixa.
7. A próxima configuração é a identificação do endereço do **Web Service de plugins**.

> **Atenção:** Informe o endereço utilizando o número do IP + porta, pois geralmente o PDV não estará na mesma máquina que o servidor da retaguarda.

> **Observação:** Para saber o endereço do WebService de Plugin, abra o IIS (digite `inetmgr` no menu executar do Windows). Clique em **Sites**, clique com o botão direito no webservice **Integra plugins PDV Alterdata**, selecione **Gerenciar site** e clique em **Procurar**. O navegador abrirá o site referente ao webservice. Copie o link e cole na tela do PDV.

A informação do Webservice do Plugin ficará gravada no Regedit em:
```
HKEY_LOCAL_MACHINE >> SOFTWARE >> WOW6432Node >> ALTERDATA >> ERP >> LoginERPWS
```
Para alterar o endereço, acesse o regedit.

Após a configuração, será aberta a tela inicial do PDV Alterdata. Na parte superior é demonstrado o **status de conexão com a SEFAZ**, a **versão do PDV** e a **data da última carga de dados**.

O ícone de nuvem indica o status de conexão com a SEFAZ:
- **Nuvem normal** — Conectado.
- **X vermelho** — PDV não está conseguindo se comunicar com a SEFAZ (falta de internet, problemas no certificado digital, bloqueios na rede, etc.).

> Não havendo conexão com a SEFAZ, as vendas poderão ser emitidas em **contingência**.

**Verificar ou corrigir configurações:**

Clique em **Outras Funções >> 9 – Configurações >> Confirmar**.

Na tela de Configurações, no menu **NFC-e**:
- Teste a comunicação com o certificado digital ou altere-o.
- No quadro **Dados para geração e envio do XML de NFC-e**, altere a **Série** e **Número sequencial** de cada ambiente, se necessário. Clique em **F9 – Gravar** para salvar.

> **Atenção:** Os terminais são cadastrados automaticamente pelo sistema conforme o PDV for executado nas máquinas-estações — não é necessário cadastrá-los manualmente.

### Ambiente de Homologação

A configuração para emissão de NFC-e em homologação fica no **cadastro da empresa no sistema Bimer >> Configurador Bimer >> Geral**.

Por padrão, para as NFC-es emitidas em homologação, o PDV Alterdata **não gera** os arquivos `.DAT` das vendas para serem integradas com o sistema Bimer. Para testes internos com o PDV Alterdata emitindo NFC-e em homologação, é necessário fazer uma alteração no arquivo ini do PDV:

1. Acesse `C:\Program Files (x86)\Alterdata\PDV Alterdata` e localize o arquivo `PDVAlterdata.ini`.
2. Abra o arquivo com o Bloco de Notas.
3. Em `GeracaoArquivosHomologacao`, altere de `0` (zero) para `1` após o sinal de igual.
4. Salve as alterações e feche o arquivo.
5. Caso tenha feito o procedimento com o PDV aberto, feche-o e abra-o novamente.
