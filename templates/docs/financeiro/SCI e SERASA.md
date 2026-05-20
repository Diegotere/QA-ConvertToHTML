# SCI e SERASA — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Geração do Arquivo de Forma Manual](#geração-do-arquivo-de-forma-manual)
- [Geração do Arquivo de Forma Automática](#geração-do-arquivo-de-forma-automática)
  - [Tarefas](#tarefas)
  - [Tarefas Agendadas](#tarefas-agendadas)
  - [Módulo GEAgente](#módulo-geagente)
- [Opções SCI/SERASA](#opções-sciserasa)

---

## Introdução

O Serasa Experian foi criado em 1968, em uma parceria da Assobesp (Associação de Bancos do Estado de São Paulo) com a Febraban (Federação Brasileira das Associações de Bancos). Tem como função armazenar um banco com informações de pessoas inadimplentes, disponibilizando-as para bancos e empresas. Basicamente é consultado se a pessoa possui algum tipo de débito causado pelo não pagamento de despesas em seu nome.

O **SCI** possui o mesmo objetivo do SERASA, porém tem um layout diferente e pode ser solicitado por determinadas instituições financeiras ou bancos. O arquivo SCI, por exemplo, gera dados de endereço e e-mail dos clientes, o que o arquivo SERASA não faz. Assim, a empresa precisa saber qual o tipo de arquivo aceito para gerar o SCI ou SERASA.

No sistema Bimer, a empresa enviará para os órgãos competentes as informações de títulos a receber por meio de arquivos gerados — títulos que o cliente deixou de quitar, fazendo com que outras empresas possam fazer uma análise de crédito no banco do SCI/SERASA, o que pode impedir a venda para esse cliente. O nome do cliente ficará limpo quando a dívida for quitada e o arquivo com a informação do título baixado for reenviado.

---

## Geração do Arquivo de Forma Manual

Caminho: **Configurador Bimer >> Geral >> Ferramentas >> Geração de arquivo para SCI/SERASA**

Na primeira tela, defina os seguintes parâmetros:

- **Tipo:** Escolha o arquivo que deseja gerar — SCI ou SERASA.
- **Layout do arquivo:** Remessa normal, correção (usado para corrigir alguma informação errada gerada anteriormente) ou conciliação de títulos.
- **Caminho para envio das informações:** Escolha o local para gerar o arquivo a ser enviado ao SCI/SERASA.
  - Para **SCI**: nomeie o arquivo a ser gerado e escolha o local de geração.
  - Para **SERASA**: informe apenas o local de geração; o sistema criará o arquivo com o nome padrão `SERASA + CÓDIGO DA EMPRESA + TXT`.
- **Arquivo para a conciliação de títulos:** Informado quando se marca a opção **Conciliação de títulos**, que consiste em ler um arquivo gerado pelo SERASA e conferir se dentre os títulos listados existem títulos baixados, gerando um arquivo de conciliação a ser reenviado ao SERASA.
- **Período:**
  - Para **SCI**: o sistema filtrará os títulos com datas de emissão, vencimento ou de baixa de acordo com o período informado.
  - Para **SERASA**: serão filtrados os títulos em aberto pela data de emissão e os títulos baixados pela data de baixa.
- **Empresas:** Informe a(s) empresa(s) emitente(s) dos títulos.

> *[Imagem: tela de configuração de geração de arquivo SCI/SERASA]*

Na tela seguinte, é possível filtrar os títulos por **Clientes** para que no arquivo sejam gerados títulos de pessoas específicas. Em seguida, selecione quais títulos serão gerados no arquivo de acordo com o filtro realizado nas telas anteriores e clique em **Gerar Arquivo**.

Após a geração, acesse o local escolhido para enviar o arquivo aos órgãos competentes.

---

## Geração do Arquivo de Forma Automática

É possível configurar o sistema para gerar automaticamente o arquivo por meio de tarefas agendadas, executadas pelo módulo **GEAgente**.

### Tarefas

Caminho: **Configurador Bimer >> Geral >> Tarefas**

Cadastre as tarefas de acordo com o arquivo que precisa ser gerado, informando no campo **Sistema** os seguintes códigos:

- **000089** — Exportação de dados para o SCI
- **000090** — Exportação de dados para o SERASA

> *[Imagem: tela de cadastro de tarefas]*

### Tarefas Agendadas

Caminho: **Configurador Bimer >> Geral >> Tarefas Agendadas**

Cadastre as tarefas agendadas vinculando as tarefas cadastradas no processo anterior. Informe:

- **Ocorrência**
- **Frequência**
- **Duração da tarefa**
- **Data inicial**
- **Prioridade**

> *[Imagem: tela de cadastro de tarefas agendadas]*

### Módulo GEAgente

Certifique-se de que o módulo **GEAgente** está em execução com a tarefa sendo processada de maneira correta.

> *[Imagem: módulo GEAgente com tarefa em execução]*

---

## Opções SCI/SERASA

Caminho: **Configurador Bimer >> Geral >> Opções >> SCI/SERASA**

Há três abas que devem ser configuradas:

**Empresas para remessa:** Informe as empresas para envio do arquivo na geração automática. As empresas informadas serão recuperadas também na tela de geração manual do arquivo.

**SCI:**
- Defina uma **Característica de Pessoa** que deve estar vinculada ao cliente inadimplente, informando o número de dias para o sistema consultar títulos em aberto e incluir o cliente no arquivo a ser enviado.
  - *Exemplo:* Se o título ultrapassar 10 dias de vencimento sem baixa, o cliente já será incluído no arquivo e considerado inadimplente.
- Em **Nome do arquivo para o envio de informações**, nomeie o arquivo a ser gerado e escolha o local de geração.
- Em **Número de dias padrão para o envio de dados**, defina um tempo padrão em dias para envio de dados caso não queira trabalhar especificando uma característica por pessoa. Dessa maneira, todos os títulos em atraso serão enviados de acordo com o período informado, independentemente da característica do cliente.

> **Observação:** A **Característica de Pessoa** e o **Número de dias padrão para o envio de dados** são usados na rotina automática. Já o **Nome do arquivo para o envio de informações** é usado tanto na rotina automática quanto na tela de geração manual.

**SERASA:**
- Em **Tipos de baixa para remessa de dados de correção**, defina os tipos de baixa usados para envio do arquivo de remessa de correção.
- Em **Diretório para envio das informações**, defina o local padrão para a geração do arquivo. Este caminho será usado na rotina de geração automática e será recuperado na tela de geração manual, podendo ser alterado.
- Em **Definição do movimento**, escolha entre:
  - **Diário:** enviar remessa até três dias úteis após a data final da última remessa processada.
  - **Semanal:** enviar até 10 dias corridos após a data final da última remessa processada.
  - **Quinzenal:** enviar até 18 dias corridos após a data final da última remessa processada.
  - **Mensal:** enviar entre os dias 1 e 10 de cada mês, com período referente ao mês anterior.
- Em **Último período processado**, o sistema demonstra qual foi a última data de movimento gerada para o SERASA de acordo com as rotinas feitas no sistema.
