# Link de Pagamento — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações Necessárias](#configurações-necessárias)
  - [Cadastro de Usuários](#cadastro-de-usuários)
  - [Obter o Token de Integração com a QuickOn](#obter-o-token-de-integração-com-a-quickon)
  - [Configurador Bimer](#configurador-bimer)
  - [Formas de Pagamento](#formas-de-pagamento)
  - [Configurar o Layout Padrão de E-mail](#configurar-o-layout-padrão-de-e-mail)
  - [Configurar o Evento de Baixa para Taxas de Convênio](#configurar-o-evento-de-baixa-para-taxas-de-convênio)
- [Rotina](#rotina)
  - [Geração do Link de Pagamento](#geração-do-link-de-pagamento)
  - [Geração de Link de Pagamento em Massa](#geração-de-link-de-pagamento-em-massa)
  - [Processamento do Pagamento e Baixa Automática](#processamento-do-pagamento-e-baixa-automática)
  - [Envio Automático de E-mail](#envio-automático-de-e-mail)
- [Dúvidas Frequentes](#dúvidas-frequentes)

---

## Introdução

O Bimer oferece a funcionalidade de **geração de Link de Pagamento via Cartão** no módulo **Contas a Receber**, permitindo a criação de links personalizados com informações detalhadas como valor, descrição e data de vencimento.

Através da integração com a **QuickOn** — mediadora com diversos processadores de pagamento — o sistema oferece envio simplificado desses links por e-mail e WhatsApp.

**Benefícios:**
- Agilidade no recebimento, melhorando o fluxo de caixa.
- Facilidade para o cliente, com experiência de pagamento rápida e intuitiva.
- Segurança nas transações, com proteção contra fraudes.
- Automatização do processo, minimizando erros e aumentando a eficiência operacional.

---

## Configurações Necessárias

### Cadastro de Usuários

Para que os usuários possam configurar e utilizar a geração de links de pagamento, habilite as seguintes permissões:

- **Configuração:** Cadastro de usuários >> Usuário ou Perfil de usuário >> Sistema "Configurador" >> Financeiro >> Cadastro >> Integrações >> **Link de pagamento**
- **Geração:** Cadastro de usuários >> Usuário ou Perfil de usuário >> Sistema "A receber" >> **Link de pagamento**

### Obter o Token de Integração com a QuickOn

A QuickOn é a ponte entre o Bimer e as operadoras de cartão. O **token** é uma senha única que identifica a empresa na QuickOn — sem ele, a integração é impossível.

1. Acesse o painel da QuickOn: https://painel.quickon.com.br/sign-in
2. Navegue até **Pay >> Contas** e copie a chave (token) da sua empresa.

### Configurador Bimer

Caminho: **Configurador >> Financeiro >> Integrações >> Link de pagamento**

- **Habilitar integração:** Ativa a integração com a QuickOn e faz a aba de convênio por bandeira aparecer no cadastro da forma de pagamento.
- **Empresa:** Informe as empresas que farão a integração. Ao clicar em **"+"**, informe a empresa, valide as credenciais do passaporte Alterdata e informe o **Token** obtido na QuickOn. Os campos **"Código assinante"** e **"Início da integração"** são preenchidos automaticamente.
- **Formas de pagamento:** Selecione as formas de pagamento do tipo "Cartão" que poderão gerar links de pagamento.

Ao gravar as configurações pela primeira vez, o sistema solicitará a configuração da tarefa para realização das baixas. Configure os dados de agendamento da tarefa **GEAtualizaStatusLinkPagamento** e, na aba **"Atualiza status link de pagamento"**, defina o tipo de baixa padrão para os títulos pagos via link.

> **Observação:** Recomenda-se utilizar um tipo de baixa com configuração de conta bancária por empresa, para casos onde o título não tenha uma conta vinculada.

Ao gravar a tarefa, o **Gerente Eletrônico** será reiniciado para validar o agendamento. O **GEAgente** precisa estar ativo para que as baixas sejam realizadas.

### Formas de Pagamento

Caminho: **Configurador >> Financeiro >> Forma de pagamento**

Selecione ou crie uma forma de pagamento do tipo **"Cartão"** para gerar links de pagamento. Acesse a aba **"Convênio"** e, em seguida, a aba **"Alíquota por bandeira"**.

Informe as alíquotas de convênio específicas para cada bandeira de cartão, conforme o contrato com a adquirente.

**Lógica de aplicação da alíquota na baixa:**
1. O sistema identifica a bandeira do cartão usado no pagamento.
2. Verifica se há alíquota específica para essa bandeira:
   - **Se sim:** Utiliza essa alíquota específica.
   - **Se não:** Utiliza a alíquota padrão do convênio (campo **"Alíquota de retenção"** na aba **"Geral"**).

### Configurar o Layout Padrão de E-mail

Configuração opcional para personalizar os e-mails enviados com os links de pagamento.

Caminho: **Configurador >> Geral >> Opções >> Envio para cliente >> Layout padrão**

Informe o layout em HTML que será utilizado para enviar os e-mails com o link de cobrança. O sistema utilizará o e-mail de cobrança vinculado no cadastro de pessoas para envio.

### Configurar o Evento de Baixa para Taxas de Convênio

Caminho: **Configurador >> Financeiro >> Opções >> Baixas >> Configurações diversas >> "Evento de baixa para lançamentos de baixa de taxa de administração de convênio"**

Selecione o evento de baixa que será utilizado para registrar os lançamentos das taxas administrativas dos convênios de cartão.

---

## Rotina

### Geração do Link de Pagamento

1. No módulo **Contas a Receber**, localize e selecione o título para o qual deseja gerar um link de pagamento.
2. Clique na opção **"Link de pagamento"**.
3. Visualize os dados do título (valor, data de vencimento/expiração) e confirme que estão corretos.
4. Clique em **"Gerar link"**. O Bimer envia as informações para a QuickOn, que cria um endereço web único para aquele pagamento.

Com o link gerado, é possível:
- Visualizar o link.
- Enviar por **e-mail** ou **WhatsApp**.
- **Cancelar** o link (dependendo do status).

Após a geração, uma nova aba **"Link de pagamento"** estará disponível dentro do cadastro do título, exibindo o histórico de links e o status atual.

**Status do link de pagamento:**

| Código | Status | Definição | Baixa título | Pode gerar novo link | Pode cancelar |
|--------|--------|-----------|:---:|:---:|:---:|
| 0 | Pago | Pagamento efetivado | ✔ | ✗ | ✗ |
| 1 | Pendente | Aguardando pagamento | ✗ | ✗ | ✔ |
| 2 | Expirado | Data de expiração excedida | ✗ | ✔ | ✗ |
| 3 | Cancelado | Link cancelado pelo usuário no Bimer ou portal da QuickOn | ✗ | ✔ | ✗ |
| 4 | Processando | Pagamento sendo processado | ✗ | ✗ | ✗ |
| 5 | Bloqueado | Empresa com pendências com a QuickOn | ✗ | ✗ | ✗ |
| 6 | Processando antifraude | Pagamento em processo de antifraude | ✗ | ✗ | ✗ |
| 7 | Erro de captura | Erro na captura de retorno entre QuickOn e administradora | ✗ | ✗ | ✗ |
| 8 | Erro de antifraude | Erro no processo de antifraude | ✗ | ✗ | ✗ |

### Geração de Link de Pagamento em Massa

Disponível a partir da versão **11.01.08.00**.

Caminho: **A Receber >> Ferramentas >> Gerar links de pagamento**

1. Utilize os filtros personalizáveis para refinar a busca e clique em **Avançar**.
2. O sistema retornará os títulos aptos a terem links gerados.
3. Selecione os títulos desejados marcando a caixa de seleção ao lado de cada um.
4. Clique em **"Gerar Link"** para iniciar o processo de geração individual para cada título selecionado.

> **Nota:** O envio em massa por WhatsApp não é possível por inviabilidade da API do WhatsApp. O envio por e-mail é suportado.

### Processamento do Pagamento e Baixa Automática

Quando o cliente realiza o pagamento pelo link, a QuickOn notifica o Bimer. O **Gerente Eletrônico (GE)**, executando a tarefa **GEAtualizaStatusLinkPagamento**, recebe essa informação e realiza a baixa automática do título no Contas a Receber.

**Lógica para identificação da conta bancária de destino:**
- **Prioridade 1:** Se o título possuir uma conta bancária vinculada, a baixa é realizada nessa conta.
- **Prioridade 2:** Se o título não possuir conta vinculada, o sistema utiliza a conta bancária definida no tipo de baixa padrão configurado na tarefa **GEAtualizaStatusLinkPagamento**.

> **Atenção:** Se não houver conta no título e nem no tipo de baixa, a baixa não será realizada e o GE apresentará um log.

### Envio Automático de E-mail

Disponível a partir da versão **11.02.00.00**.

O sistema verifica diariamente todos os títulos com link de pagamento e envia um e-mail com o link em anexo PDF. O PDF é protegido por senha (os 5 primeiros dígitos do CPF/CNPJ do destinatário).

Caminho: **Configurador >> Financeiro >> Opções >> Link de pagamento**

Configure os dias de antecedência para os avisos e o layout do e-mail. Para ativar a funcionalidade, agende a tarefa **GeEnviaEmailAvisoVencimento** em **Configurador >> Geral >> Tarefas Agendadas**.

---

## Dúvidas Frequentes

**Como é definida a data de expiração do link?**
A data de expiração do link é a data de vencimento do título.

**É possível alterar a data de vencimento de um título com link de pagamento pendente?**
Depende do status:
- **Processando** ou **Processando antifraude:** Não é possível editar o vencimento.
- **Cancelado:** O vencimento pode ser editado sem confirmação.
- **Pendente, Bloqueado, Erro de captura** ou **Erro de antifraude:** O usuário precisará confirmar a alteração, pois o link de pagamento será cancelado.

**Meu título tem uma conta vinculada, a baixa será feita nessa conta?**
Sim. Caso o título não tenha conta bancária vinculada, o sistema utilizará a conta do tipo de baixa configurado na tarefa **GEAtualizaStatusLinkPagamento**. Se não houver conta em nenhum dos dois, a baixa não será realizada e o GE apresentará um log.

**É possível gerar link de pagamento em massa?**
Sim, a partir da versão **11.01.08.00**, com envio por e-mail. Envio por WhatsApp não é suportado.

**Consigo baixar manualmente um título com link de pagamento gerado?**
Sim, é possível baixar manualmente um título vinculado a link de pagamento.

**Qual Natureza de Lançamento e Evento de Baixa é utilizado para a taxa do convênio?**
O sistema verifica na seguinte ordem:
1. Campo **"Natureza de lançamento para alíquota de convênio"** no título.
2. Campo **"Natureza de lançamento para baixa de taxa de administração de convênio"** em **Financeiro >> Opções >> Baixas >> Configurações diversas para baixas de títulos**.
3. Campo **"Natureza de lançamento"** do evento de baixa utilizado em **Configurador >> Financeiro >> Evento de baixa**.

Se a natureza de lançamento não estiver cadastrada no evento de baixa, a baixa não será realizada e um log será gerado.

**Como é aplicada a alíquota de convênio no Evento de Baixa?**
Quando o **GEAtualizaStatusLinkPagamento** realiza a baixa, o sistema identifica a bandeira usada e aplica a alíquota de convênio correspondente. As taxas por bandeira são cadastradas em **Configurador >> Financeiro >> Forma de pagamento >> Convênio >> Convênio x parcelas >> Alíquota por bandeira**. Se não houver taxa específica para a bandeira, o sistema usa a taxa de convênio geral (aba **"Geral"** da forma de pagamento).
