# Permissão de Acesso às Vendas — BI Vendas

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações necessárias](#configurações-necessárias)
  - [Configurador Bimer](#configurador-bimer)
  - [Cadastro de Usuários](#cadastro-de-usuários)
  - [Pessoa — Categoria Representante](#pessoa--categoria-representante)
- [Utilizando o BI Vendas](#utilizando-o-bi-vendas)

---

## Introdução

Esta rotina foi criada com o objetivo de permitir o controle de acesso às vendas, de forma que somente o representante, ou seu(s) superior(es) hierárquico(s), possam ver, dentro do módulo **BI Vendas**, as vendas iniciadas ou realizadas pelo mesmo. Esse controle se dará através da criação da árvore de funções da empresa e de seu correto relacionamento com cada um dos integrantes envolvidos no processo de venda.

---

## Configurações necessárias

### Configurador Bimer

A tabela de funções é utilizada para organizar, dentro do sistema, a hierarquia de funções exercidas na empresa, e essas funções cadastradas deverão ser vinculadas aos usuários inseridos no sistema. Acesse o módulo **Configurador Bimer >> Geral >> Outros Cadastros >> Funções**.

> *[Imagem: Tela de cadastro de Funções no Configurador Bimer]*

Na tela que será aberta clique no botão **Novo**, e em seguida preencha os campos conforme a sua necessidade para o cadastro da função. Use a classificação e o tipo da função para cadastrar de modo correto a hierarquia. Exemplo:

```
1       Diretor presidente          (Sintética)
1.1     Gerente Comercial           (Sintética)
1.1.1   Supervisor Comercial        (Sintética)
1.1.1.1 Assessor Comercial          (Analítica)
1.1.1.2 Consultor Comercial         (Analítica)
1.1.1.3 Vendedor Sênior II          (Analítica)
```

> **Se Liga na dica!** Mesmo sendo um cadastro sintético é possível atribuir a função com este tipo no usuário do Bimer. O mesmo ocorre com as funções do tipo analítica.

### Cadastro de Usuários

Acesse o módulo **Cadastro de Usuários**, e clique em **Usuários**. Em seguida, localize o cadastro do usuário e clique em **Editar**.

No quadro **Perfis do usuário** selecione **(1) PERFIL INDIVIDUAL**, no quadro **Sistemas** selecione **(2) Acessos Gerais**, e no quadro **Acessos** selecione **(3) Acesso a pessoas** e clique com o botão direito sobre **Ver clientes de outros representantes** e clique em **(4) Desabilita**, e ao final clique em **(5) Salvar** para gravar as alterações.

> *[Imagem: Tela de permissões do usuário com opção "Ver clientes de outros representantes" desabilitada]*

Ainda no módulo **Cadastro de Usuários**, acesse a aba **Configurações do usuário >> Geral** e clique em **Editar**. Vincule o **Representante do usuário** clicando em **+** e na tela a seguir, preenchendo o **Representante** e marcando a opção **Representante principal**, e em seguida clicando em **OK** para gravar.

> *[Imagem: Tela de configurações do usuário com vínculo de representante]*

Após, basta clicar em **Salvar** no menu superior para gravar as alterações no cadastro de usuário.

Volte até a tela inicial do módulo **Cadastro de Usuários**, e clique sobre **Hierarquia de funções**.

> *[Imagem: Tela de Hierarquia de funções]*

Em seguida será aberta a tela com as funções cadastradas no quadro **Árvore hierárquica**, e no quadro **Usuários** serão mostrados os usuários cadastrados no sistema. Para vincular o usuário à função, basta segurar e arrastar o usuário para cima da função correspondente. Ao finalizar as alterações, basta clicar em **OK**.

> *[Imagem: Arrastar usuário para a função correspondente na árvore hierárquica]*

### Pessoa — Categoria Representante

Acesse o módulo **Pessoa**, e clique sobre a categoria **Representante**.

Em seguida, clique em **Novo** e preencha os campos conforme a necessidade para o cadastro do representante. Ao finalizar, basta clicar em **Gravar** no menu superior.

> *[Imagem: Cadastro de representante no módulo Pessoa]*

---

## Utilizando o BI Vendas

Acesse o módulo **BI Vendas** com um usuário vendedor (hierarquia inferior a supervisor de vendas). Clique em **Novo**.

Para o exemplo, use a **Área de pesquisa** em **Analítica (por valores)**, **Contatos Abertos e Encerrados** e filtrando somente a empresa desejada. Ao montar o cenário conforme sua necessidade, basta clicar em **Filtrar** no menu superior do módulo.

> *[Imagem: Tela do BI Vendas com filtro aplicado para usuário vendedor]*

Com o usuário vendedor, serão mostrados os contatos de venda em que ele está como **Representante**, apresentando o valor total na parte inferior.

Aplicando o mesmo filtro com outro usuário vendedor, o sistema fará o filtro dos contatos de venda vinculados ao seu usuário, com o correspondente valor total.

> *[Imagem: Comparação de resultados entre dois usuários vendedores]*

Já com um usuário de **hierarquia superior**, será mostrado o valor total dos contatos de venda, somando os contatos vinculados a todos os vendedores subordinados, e apresentando o respectivo valor total.

> *[Imagem: Resultado do BI Vendas para usuário com hierarquia superior mostrando soma dos subordinados]*
