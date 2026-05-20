# Telecobrança — Envio de E-mail de Cobrança — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
  - [Configurador Bimer / Geral](#configurador-bimer--geral)
  - [Tipo de Atendimento](#tipo-de-atendimento)
  - [Configurador Bimer / CRM](#configurador-bimer--crm)
  - [Configurador Bimer / Financeiro](#configurador-bimer--financeiro)
  - [Cadastro de Usuário](#cadastro-de-usuário)
  - [Pessoa](#pessoa)
- [Exemplo](#exemplo)

---

## Introdução

Este material apresenta o recurso do sistema Bimer para o envio de e-mails automáticos de cobrança quando há títulos vencidos de um determinado cliente.

Esta rotina tem o objetivo de otimizar o processo de telecobrança, eliminando a necessidade de um atendente manter contato via telefone ou digitar e-mails manualmente sobre inadimplência. Com o sistema devidamente configurado, os e-mails serão enviados em períodos de tempo determinados, informando quais títulos já estão vencidos.

> **Nota:** Este manual aborda somente o envio de e-mail automático para telecobrança. Para configurar o módulo Telecobrança completo, consulte o manual específico.

---

## Configurações Necessárias

### Configurador Bimer / Geral

**1 — Configuração do Spy System (SMTP)**

Caminho: **Configurador Bimer >> Geral >> Opções >> Spy System**

Insira as configurações do SMTP utilizado pela empresa. Para validar se as configurações estão corretas, clique no botão **Testar envio** e informe um e-mail como destinatário.

**2 — Tipo de contato para e-mail de cobrança**

Caminho: **Configurador Bimer >> Geral >> Opções >> Pessoa >> Tipo de contato**

No campo **E-mail de cobrança**, informe o tipo de contato que receberá as cobranças via e-mail. O sistema utilizará este tipo de contato para identificar para qual endereço de e-mail deve enviar a cobrança.

**3 — Cadastro da tarefa**

Caminho: **Configurador Bimer >> Geral >> Tarefas**

Cadastre uma nova tarefa com as seguintes informações:

- **Tarefa:** Informe uma descrição para a tarefa.
- **Sistema:** Informe o código **000084 – Atualizador de cobranças**.
- **Início da validade:** Data de início de execução da tarefa.
- **Término da validade:** Caso seja uma tarefa temporária, informe a data de término.
- **Relevância da tarefa:** Defina o grau de prioridade.

**4 — Cadastro da tarefa agendada**

Caminho: **Configurador Bimer >> Geral >> Tarefas agendadas**

Crie um agendamento para a tarefa cadastrada. Ao clicar em **Novo**, preencha:

- **Nome do agendamento:** Informe uma descrição.
- **Tarefa:** Vincule a tarefa criada anteriormente.
- **Ocorrência:** Defina se será executada diariamente, semanalmente ou mensalmente. Para execução diária, informe de quantos em quantos dias.
- **Frequência:** Informe a frequência de execução.
- **Duração desta tarefa:** Para tarefas com prazo definido, informe a data inicial e final. Para tarefas fixas, informe a data inicial e marque **Sem data final**.
- **Prioridade:** Defina o nível de prioridade para o Gerente Eletrônico.
- **Descrição:** Informe uma descrição para melhor entendimento da tarefa.

Após a configuração, execute o **Gerente Eletrônico**. Se ele já estiver em execução, reinicie o sistema.

---

### Tipo de Atendimento

Verifique se já existe um tipo de atendimento para cobrança. Caso não exista, é necessário cadastrá-lo. Para isso, são necessários um **workflow** e **centros de responsabilidade**.

**1 — Cadastrar centros de responsabilidade**

Caminho: **Configurador Bimer >> Geral >> Atendimento / agendamento >> Centro de responsabilidade**

Cadastre os centros de responsabilidade necessários para a rotina de telecobrança.

**2 — Cadastrar workflow**

Caminho: **Configurador Bimer >> Geral >> Atendimento / agendamento >> Workflow**

Cadastre um workflow para telecobrança e crie as sequências vinculando os centros de responsabilidade criados.

**3 — Cadastrar tipo de atendimento**

Caminho: **Configurador Bimer >> Geral >> Atendimento / agendamento >> Tipo de atendimento**

Cadastre um tipo de atendimento para o Telecobrança e vincule o workflow criado anteriormente.

---

### Configurador Bimer / CRM

Caminho: **Configurador Bimer >> CRM >> Opções >> Telecobrança**

Configure com quantos dias de atraso do título será criado um atendimento automático de controle:

- **Dias em atraso para criação do atendimento de cobrança:** Informe a quantidade de dias em atraso para que o atendimento automático seja criado.
- **Tipo de atendimento para geração automática de cobranças:** Informe o tipo de atendimento cadastrado no passo anterior.

> **Atenção:** O tipo de atendimento configurado anteriormente deve estar informado neste segundo campo.

---

### Configurador Bimer / Financeiro

Caminho: **Configurador Bimer >> Financeiro >> Opções >> Cobrança >> E-mail de cobrança**

Configure os seguintes campos:

- **Envia e-mail de cobrança após a criação do atendimento automático:** Marque esta opção para habilitar o envio de e-mail de cobrança.
- **Destinatário para a resposta ao e-mail de cobrança:** Informe o e-mail da pessoa ou setor responsável que receberá as respostas dos clientes.
- **Destinatário para a resposta ao e-mail de cobrança por empresa:** Mesma aplicação do campo anterior, porém configurável por empresa.
- **Característica da pessoa que não permitirá o envio de e-mail de cobrança:** Defina uma característica de pessoa para criar uma regra de exceção. Clientes com essa característica vinculada não receberão e-mail de cobrança. Exemplo: clientes parceiros que utilizam produtos e serviços sem cobrança.
- **Tipo de atendimento que não permitirá o envio de e-mail de cobrança:** Defina um tipo de atendimento como regra de exceção. Sempre que a pessoa possuir o atendimento relacionado, a cobrança não será enviada.
- **Faixas de vencimento:** Defina de quantos em quantos dias os e-mails serão enviados, podendo utilizar até três layouts diferentes.

  **Exemplo de configuração de faixas:**
  - 1ª faixa: do 1º ao 8º dia após o vencimento — utiliza o layout 1.
  - 2ª faixa: do 9º ao 30º dia — utiliza o layout 2.
  - 3ª faixa: a partir do 31º dia — utiliza o layout 3, enviado a cada 10 dias.

- **Layout padrão para envio de e-mail de cobrança:** Informe um layout a ser usado quando os títulos não se enquadrarem nas faixas de vencimento configuradas.
- **Número de dias para o próximo contato no primeiro atendimento de cobrança, após envio do e-mail:** Informe o número de dias para o próximo contato do atendimento de cobrança após sua abertura.

> **Dica:** Caso não possua os arquivos HTML para os layouts, eles podem ser solicitados ao suporte ERP.

---

### Cadastro de Usuário

O usuário responsável pela execução das rotinas no módulo **Gerente Eletrônico** precisa ter permissão para envio de e-mail de cobrança.

Caminho: **Cadastro de Usuário >> Usuários**

Clique em **Localizar**, encontre o usuário desejado. Em **Sistemas**, adicione o módulo **Telecobrança** e verifique se a opção **Envia e-mail de cobrança** está habilitada.

- Ícone habilitado: o recurso está ativo para o usuário.
- Ícone bloqueado: clique com o botão direito sobre a opção **Envia e-mail de cobrança** e selecione **Habilita**.

---

### Pessoa

No cadastro da pessoa, é necessário que esteja inserido um e-mail com o mesmo tipo de contato configurado no **Configurador Bimer >> Geral >> Opções >> Pessoa >> Tipo de contato**.

O sistema segue uma hierarquia para identificar o e-mail de cobrança:

1. Verifica se há o tipo de contato cadastrado no **endereço de cobrança** da pessoa.
2. Se não houver, verifica no **endereço principal**.
3. Se não houver em nenhum dos dois, o e-mail de cobrança **não será enviado**.

Caso o e-mail não esteja preenchido no cadastro do cliente, adicione ou edite o cadastro informando a pessoa de contato e o tipo de contato correto.

> **Lembre-se:** O tipo de contato do e-mail a ser adicionado deve corresponder ao configurado em **Configurador Bimer >> Geral >> Opções >> Pessoa >> Tipo de contato >> E-mail de cobrança**.

---

## Exemplo

O e-mail enviado ao cliente informa quais títulos estão vencidos, com o valor e a data de vencimento correspondente a cada um. Caso haja outros vencimentos nos próximos dias, os títulos serão adicionados ao e-mail automaticamente.

No módulo **CRM**, é aberto um atendimento após o vencimento do título, onde são registrados os avisos de e-mail de cobrança, adicionados títulos em atraso ou removidos quando o título for baixado.

Para visualizar o atendimento:

1. Acesse o **CRM** e informe o código do cliente.
2. Clique sobre o botão **Fatores críticos**.
3. Será exibida a listagem de todos os atendimentos em aberto do cliente.
4. Abra o atendimento em **Telecobrança analítico** para visualizar todos os registros de contato com o cliente.
