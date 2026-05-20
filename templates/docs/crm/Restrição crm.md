# Restrição de Acesso — CRM

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Cadastro de Funções](#cadastro-de-funções)
  - [Hierarquia de Funções](#hierarquia-de-funções)
  - [Tipo de Atendimento](#tipo-de-atendimento)
- [CRM — Tela de restrição](#crm--tela-de-restrição)

---

## Introdução

O que muitas empresas prezam num ERP é o controle daquilo que os usuários podem manusear ou não. E isto se aplica também aos atendimentos criados na empresa para o controle de rotinas internas e contatos com os clientes.

Pensando nisso, o Bimer conta com o acesso restrito de atendimentos nos módulos do CRM, sendo possível controlar o que cada usuário pode visualizar ou alterar dentro do sistema.

---

## Configurações

Para que a rotina dê certo você precisa ensinar ao Bimer como restringir o acesso dos atendimentos.

### Cadastro de Funções

Acesse o **Configurador Bimer >> Geral >> Outros Cadastros >> Funções** e veja se todas as funções dos usuários que utilizam o CRM estão cadastradas. Ao manusear as funções respeite o padrão de **Classificação** e **Tipo** (Analítica e Sintética) de acordo com a hierarquia na empresa.

> *[Imagem: Tela de cadastro de Funções no Configurador Bimer]*

Exemplo de estrutura hierárquica:

```
1         Diretor presidente              (Sintética)
1.1       Gerente Comercial               (Sintética)
1.1.1     Supervisor Comercial            (Sintética)
1.1.1.1   Assessor Comercial              (Analítica)
1.1.1.2   Consultor Comercial             (Analítica)
1.2       Gerente de Estoque e compras    (Sintética)
1.2.1     Supervisor de Estoque e Compras (Sintética)
1.2.1.1   Assistente de compras           (Analítica)
1.2.1.2   Assistente de almoxarifado      (Analítica)
```

### Hierarquia de Funções

Não é só cadastrar as funções, você precisa dizer para o Bimer o que cada usuário é na empresa. Para isso acesse o módulo **Cadastro de Usuários >> Hierarquia de Funções**.

Ao abrir a tela, aparece do lado esquerdo as funções e do lado direito os usuários presentes no sistema. O Bimer respeita a árvore de hierarquia formada pelo padrão de organização sintético e analítico das funções. Para atribuir o usuário na função, arraste o seu nome para a função desejada.

> *[Imagem: Tela de Hierarquia de Funções com arrastar e soltar de usuários]*

Clique em **OK** para confirmar os ajustes.

> **Dica!** As funções não atribuídas aparecem na cor **azul**. As que já foram atribuídas aparecem na cor **cinza** com o nome do usuário entre parênteses.

> **Dica!** Uma outra maneira de incluir a função é abrindo o cadastro individual do usuário, aba **Configurações do usuário >> Geral >> Funções exercidas**.

### Tipo de Atendimento

Por fim acesse o **Configurador Bimer >> Geral >> Atendimento/agendamento >> Tipo de Atendimento**. Abra o tipo de atendimento usado pelos usuários, vá na aba **Restrição de usuários** e marque **"Haverá controle de acesso ao conteúdo dos atendimentos com este tipo de atendimento?"**

> *[Imagem: Aba Restrição de usuários no Tipo de Atendimento]*

Com a opção selecionada, defina as marcações (botões) em sequência:

- **Usuário de Abertura** — Apenas o usuário que abriu o atendimento possui acesso.
- **Usuários com as mesmas funções do usuário de abertura** — Todos os usuários que possuem a mesma função do usuário de abertura verão o atendimento.
- **Usuário de próximo contato** — Somente o usuário de próximo contato possui acesso.
- **Usuários com as mesmas funções do usuário de próximo contato** — Os usuários que possuem a mesma função do usuário de próximo contato verão o atendimento.
- **Usuário de contato interno** — Apenas o usuário de contato interno do atendimento possui acesso.
- **Usuários com as mesmas funções do usuário de contato interno** — Todos os usuários que possuem a mesma função do usuário de contato interno verão o atendimento.

> **Se Liga!**
> 1. Como mostra o aviso no rodapé do tipo de atendimento, os usuários com hierarquia superior aos que tiverem acesso ao atendimento, também o verão.
> 2. Os botões funcionam em sincronia, pois se referem ao acesso para usuários inseridos em campos diferentes do CRM (Abertura, próximo contato e contato interno).

> **Você Sabia?** Dentro do tipo de atendimento existe a aba **Encerramento** e a opção de **"Encerrar pelo(s) usuário(s) ou função(ões) relacionado(s) abaixo(s)"**. Ao marcá-la você consegue restringir o encerramento do atendimento para usuários que tenham determinadas funções. Com isso, além de ser possível trabalhar com a restrição na visualização e alteração do atendimento, é possível restringir também no encerramento.

---

## CRM — Tela de restrição

Para você entender melhor, veja o seguinte exemplo: O **ENZO** é o supervisor de vendas e abriu o atendimento de Reclamação que está com a restrição de acesso.

Como o **MARCOS** é supervisor de vendas também, ele consegue visualizar o atendimento pois foi marcado o botão de **"Usuários com as mesmas funções do usuário de abertura"**. Já o **THIAGO** não consegue acessar o atendimento pois não tem a mesma função (ou superior) dos supervisores de venda.

> *[Imagem: Visualização do MARCOS — consegue ver o atendimento]*

> *[Imagem: Visualização do THIAGO — acesso restringido, não consegue ver o atendimento]*

Com isso, o Thiago não consegue fazer outros procedimentos no atendimento como: dar um parecer, fazer um agendamento ou alterar qualquer outra informação.

**Últimas dicas, para fechar com chave de ouro!**

- Não é apenas no CRM Administrador de relacionamentos que a restrição é feita, mas em todos os módulos onde o atendimento é exibido.
- Os atendimentos que tenham o seu tipo alterado para a restrição de acesso ao conteúdo, também serão bloqueados, mesmo que tenham sido abertos ou encerrados antes desta configuração.
