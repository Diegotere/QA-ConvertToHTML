# PDVBimerAPI x GZ Sistemas — Instalação de Servidor — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [O que é? Como funciona?](#o-que-é-como-funciona)
- [Diferenças entre o integrador PdvBimerAPI e Bimer x PDV Alterdata](#diferenças-entre-o-integrador-pdvbimerapi-e-bimer-x-pdv-alterdata)
- [Instalação](#instalação)
- [Integrador PDVBimerAPI](#integrador-pdvbimerapi)
- [Glossário](#glossário)

---

## O que é? Como funciona?

A **GZ Sistemas** é uma empresa que vende soluções PDV para o mercado varejista.

Pensando nisso, a Alterdata desenvolveu uma API que efetuará a integração das informações da parceira GZ Sistemas com a retaguarda Bimer, chamada de **PdvBimerAPI**.

O **PdvBimerAPI** instalará no servidor do cliente o integrador responsável por processar as informações vindas do PDV GZ Sistemas (Importação). Ele também efetuará o processamento das informações que irão para o PDV GZ Sistemas (Exportação).

> Em breve o PdvBimerAPI poderá ser utilizado para outros sistemas PDV.

---

## Diferenças entre o integrador PdvBimerAPI e Bimer x PDV Alterdata

O integrador **PdvBimerAPI** não terá o módulo Concentrador para fazer a importação e exportação dos dados em formato `.dat`. A comunicação será realizada através de uma API, que efetuará a ponte entre os dois sistemas comunicando-se diretamente com o banco de dados do Bimer.

Os dados via API serão em formato **`.json`**, sendo necessário processar essas informações para incluir no banco de dados.

O integrador será responsável por acessar as tabelas de integração no banco de dados:

- **Importação:** o integrador efetuará a leitura dos arquivos na tabela `DadosImportacaoIntegracao` e processará as vendas gerando as informações no Bimer.
- **Exportação:** o integrador gerará os dados como produto, códigos, usuários, entre outros, na tabela `DadosExportacaoIntegracao`, que será consumida pela API para alimentar o PDV.

As vendas do integrador **Bimer x PDV Alterdata** possuem os arquivos **HDOC**, **DDOC** e **XDOC**. Já as vendas do integrador **PdvBimerAPI** terão somente **HDOC** e **XDOC**, pois os dados do DDOC estarão juntos com o arquivo HDOC.

Esses arquivos HDOC e XDOC estarão no banco de dados com a extensão `.dat`, porém os arquivos em si são em formato `.json`.

| Item | Localização |
|------|-------------|
| Novo instalador (PdvBimerAPI) | `M:\BIMER\PdvBimerAPI` |
| Instalador PDVBimerAlterdata | `M:\BIMER\IntegracaoBimer_PDVAlterdata\Versões\AssistenteInstalacaoServidor.exe` |

> **Atenção!** A primeira versão compilada de trabalho é a **11.00.06.00**.

**Responsabilidades:**
- É de responsabilidade da Alterdata a exportação até a API. As informações chegando na API e não sendo integradas com o PDV são de responsabilidade da **GZ Sistemas** no suporte ao cliente.
- Caso precise de suporte quanto a uma falha de integração, será necessário acionar o superior imediato para acionamento do time **DSN**.

---

## Instalação

Para iniciar a instalação, clique com o botão direito do mouse sobre o arquivo **`PdvBimerAPI_versão.exe`** e execute-o como administrador. Avance e aceite os termos e condições de uso.

Na próxima tela, escolha se será uma **nova instalação** ou **atualização** de uma instalação já existente.

> *[Imagem: tela inicial do instalador com opções de nova instalação ou atualização]*

Clicando em **Nova instalação** e avançando, aparecerá a seguinte tela com os campos:

- **Porta IIS:** escolha uma porta de utilização do Web Service. A decisão de qual porta escolher é de responsabilidade do cliente.
- **Site IIS:** escolha um nome para sua API. Exemplo: `PdvBimerAPI`.

> *[Imagem: tela de configuração de Porta IIS e Site IIS]*

Na tela seguinte, preencha os dados de conexão da base Bimer que fará a integração com o PDV:

- **Servidor:** nome da instância onde se encontra a base de dados do Bimer.
- **Usuário:** usuário de conexão da instância.
- **Senha:** senha de conexão.
- **DataBase:** banco de dados do Bimer.

Clique em **Avançar**.

Marque, se desejar, a opção para criar um atalho na área de trabalho.

Avançando, o instalador executará os recursos necessários para o funcionamento da integração.

> **Se liga!** Caso durante a instalação tenha ocorrido erro na escolha da base, é possível alterar a base no arquivo **`appsettings.json`** localizado em `C:\inetpub\wwwroot\PdvBimerApi`.

---

## Integrador PDVBimerAPI

Após concluída a instalação, execute o arquivo **`IntegradorBimer_PDVAlterdata.exe`** disponível em `C:\Program Files (x86)\Alterdata\ERP`.

O **Integrador PDVBimerAPI** é responsável por iniciar o processo de integração. Ele selecionará os dados das tabelas do Bimer que serão exportadas para o PDV, e importará os dados do PDV para o Bimer.

> **Importante:** o serviço é criado automaticamente após a instalação do `IntegradorBimer_PDVAlterdata.exe` ao executá-lo pela primeira vez.

Ao executar o atalho **IntegradorBimer_PDVAlterdata** da área de trabalho (ou o `.exe` da pasta `C:\Program Files\Alterdata\ERP`), ele verificará o **"Tipo de integração"** de forma automática.

- Quando a integração for via API, será apresentada a informação **"Tipo de Integração: API"**.

> *[Imagem: tela do integrador exibindo "Tipo de Integração: API"]*

- Quando a integração for via concentrador, será exibido **"Tipo de Integração: Concentrador"**.

> *[Imagem: tela do integrador exibindo "Tipo de Integração: Concentrador"]*

O restante das configurações e parametrizações na retaguarda do Bimer — como cadastro de produto e empresa — continuam da mesma forma que para o PDV Bimer Alterdata, passando pelo **PDVAlterdataCfg**.

Para mais informações sobre as parametrizações e configurações necessárias para o funcionamento, consulte os manuais no portal da UCA sobre PDV Bimer Alterdata:
[https://portaluca.alterdata.com.br/course/view.php?id=81&section=11](https://portaluca.alterdata.com.br/course/view.php?id=81&section=11)

> **Atenção!** Cancelamentos, devoluções e trocas foram implementados pelo time Bimer. Em caso de falha, acione o superior imediato.

> **Observação:** na versão **11.00.07.00** do integrador PDVBimerAPI foi implementada melhoria no IntegradorBimer para que, na integração com PDV de parceiros, sejam exportados os produtos inativos.

---

## Glossário

### API
**API** (Application Programming Interface) é um conjunto de definições e protocolos que permite a comunicação e interação entre diferentes softwares.

### .json
**JSON** (JavaScript Object Notation) é um formato de texto leve usado para armazenar e trocar dados. É comumente usado para enviar dados entre um servidor e um navegador da web como alternativa ao XML (Extensible Markup Language).

### .dat
Um arquivo **DAT** (Data) é um tipo de arquivo que pode conter uma variedade de dados. A extensão `.dat` geralmente indica que o arquivo contém informações de dados, mas não fornece uma indicação clara sobre o formato específico dos dados dentro do arquivo.

### .exe
Significa "executable" (executável, em inglês) e é comumente usada em sistemas operacionais Windows para identificar arquivos que contêm programas ou aplicativos que podem ser executados diretamente no computador.
