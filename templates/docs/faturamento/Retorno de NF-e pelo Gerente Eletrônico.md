# Retorno de NF-e pelo Gerente Eletrônico — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Bimer](#configurações-bimer)
- [GEAgente](#geagente)
- [Menu Inicializar](#menu-inicializar)

---

## Introdução

A maioria dos clientes por padrão utiliza o Módulo **Faturamento** para processar o retorno de Notas fiscais eletrônicas, mas em alguns casos o retorno pelo Faturamento não era eficaz, o que causava lentidão para retornar corretamente a nota para o sistema.

Sendo assim, como um dos primeiros meios de resolver, configura-se o retorno das notas pelo módulo **Gerente Eletrônico**, desativando o retorno pelo Faturamento, pois o retorno pelo módulo Gerente Eletrônico tende a ser mais rápido e eficaz, embora haja um trabalho maior em configurar.

No fim das contas o processo feito pelo Gerente será similar ao executado pelo Faturamento, ou seja:

1. Através do **Faturamento** solicita-se o envio da Nota, onde é gravado o XML na **Pasta de Envio do NF Easy**;
2. O **NF Easy** transporta as notas da pasta de envio até a SEFAZ;
3. Após retornar da SEFAZ, o **NF Easy** localiza o documento e o envia para o diretório de **Recebimento**;
4. O **Gerente Eletrônico** lê o arquivo que retornou da SEFAZ e importa essa informação para o Faturamento, atualizando o status da nota no módulo, podendo ser Autorizada, rejeitada, cancelada, denegada, entre outros;
5. Após a autorização da nota, o **Gerente Eletrônico** grava a informação no banco de dados do Bimer, e o próprio Gerente Eletrônico processa a impressão do **DANFE** em PDF.

> *[Imagem: Representação gráfica do fluxo de retorno de NF-e pelo Gerente Eletrônico]*

> **Nota:** A partir da versão **9.07.05.00**, é possível utilizar as DLLs do NF-Easy e o certificado acoplado na base de dados do Bimer, dispensando o uso do NF-Easy. Desse modo, o Faturamento funciona de modo independente.

---

## Configurações Bimer

### Desativar o retorno pelo Faturamento

Se for trabalhar com o retorno pelo Gerente, desative o retorno pelo Faturamento em **Configurador / Faturamento / Opções / NF-e / Geral**, desmarcando a opção **"Os retornos de NF-e serão processados pelo sistema Faturamento"**:

> *[Imagem: Tela de opções do Configurador com a opção de retorno pelo Faturamento desmarcada]*

### Cadastro da Tarefa

No **Módulo Configurador / aba Geral / Tarefas** cadastre uma tarefa com o **Sistema Tarefa para obter o retorno da NF-e** (o qual fica com o nome `GEVerificaRetornoNFe.exe` na pasta dos módulos do Bimer), sem definir um período de validade inicial e final:

> *[Imagem: Tela de cadastro de tarefa no Configurador com o sistema GEVerificaRetornoNFe.exe]*

### Agendamento da tarefa

Acesse **Configurador / aba Geral / Tarefas Agendadas** e preencha os campos:

1. **Tarefa** – Vincule a tarefa cadastrada anteriormente;
2. **Ocorrência** – Informe a periodicidade para executar a tarefa. Como os clientes possuem um grande volume de faturamento, recomenda-se que essa tarefa seja executada **Diariamente**. Se forem marcadas as opções Semanal ou Mensal, essa tarefa será executada somente de acordo com esses períodos;
3. **Diário** – Informe a cada quantos dias a tarefa será executada. Para configurar que ela seja executada todos os dias, deixe o número **1** informado;
4. **Frequência** – Marque a opção **Ocorre a cada** e configure um intervalo de tempo para a rotina, onde definimos a hora de **Início** e **Fim**;
5. **Duração desta tarefa** – Preencha a **Data inicial** para a tarefa; a partir desse dia em diante ela será executada. Ao lado, deixe a opção **Sem data final** marcada, para que a mesma possa ser executada sem um prazo de término;
6. **Qt. de notas a serem retornadas por execução** – Estipule ou limite a quantidade de notas que serão lidas na pasta de retorno do NF Easy a cada execução da Tarefa Agendada de retorno de NFE.

> *[Imagem: Tela de agendamento de tarefa com configuração de execução diária a cada 1 minuto, das 00:00 às 23:59, retornando 10 notas por execução]*

No exemplo da imagem, a tarefa de retorno de NFE pelo Gerente ocorrerá todos os dias, a cada 1 minuto, iniciando às 00:00 horas (meia-noite) e terminando às 23:59 de cada dia, essa tarefa não tem um prazo de término e a cada execução serão lidas 10 notas fiscais eletrônicas na pasta de retorno de NFE.

> **Dica:** Abaixe o valor dessa configuração se o servidor do cliente estiver sendo sobrecarregado ao liberar um volume alto de notas. O mesmo vale para o tempo de execução.

---

## GEAgente

Este módulo tem como responsabilidade executar todas as tarefas agendadas que são cadastradas pelo sistema Configurador.

### Execução do Módulo

Abrindo o módulo **GEAgente** podemos notar a tarefa que foi cadastrada sendo executada corretamente:

- Na coluna **Tipo** confirmamos que é uma **Tarefa Diária** (cor verde);
- No **Status** a tarefa sendo executada sem erros, isso quer dizer que o Gerente Eletrônico está realizando a rotina de leitura da pasta de retorno de notas fiscais eletrônicas corretamente.

> *[Imagem: Tela do GEAgente com a tarefa de retorno de NFE sendo executada com status verde]*

Após logar no GEAgente, ele fica localizado no canto inferior direito da tela. Basta clicar em **Tarefas em execução** para visualizar as tarefas que estão sendo executadas pelo módulo.

> *[Imagem: Ícone do GEAgente no canto inferior direito da tela com o menu de tarefas em execução]*

---

## Menu Inicializar

Para executar a tarefa é importante que em determinada máquina da rede (na maioria dos casos o servidor) o Gerente Eletrônico esteja sempre em execução. Assim que a máquina na qual o Gerente será executado for ligada, é necessário iniciar o módulo. Isso pode ser feito de duas maneiras:

**1ª Forma – Manual:** Executando o módulo manualmente.

**2ª Forma – Menu Inicializar:** Crie um atalho do módulo no menu Inicializar, para que no momento da inicialização da máquina o módulo seja iniciado sem a necessidade de execução manual. Para essa configuração siga o passo a passo:

1. Acesse a pasta padrão de módulos do Bimer (na maioria dos casos `C:\Program Files\Alterdata\ERP`) e crie um atalho do módulo **GEAgente**:

   > *[Imagem: Pasta de módulos do Bimer com o arquivo GEAgente.exe e a opção de criar atalho]*

2. Após isso será criado o atalho do módulo; localize-o e copie/recorte da pasta do ERP:

   > *[Imagem: Atalho do GEAgente criado na pasta do ERP]*

3. Após, acesse a pasta **Inicializar** da máquina e cole o arquivo. Na maioria dos casos essa pasta se encontra no diretório:

   ```
   C:\Users\(nome do usuário)\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
   ```

   > *[Imagem: Pasta Startup do Windows com o atalho do GEAgente colado]*
