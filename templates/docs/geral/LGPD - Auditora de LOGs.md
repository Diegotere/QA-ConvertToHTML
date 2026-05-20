# LGPD — Auditoria de LOGs — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Configurações necessárias](#configuracoes-necessarias)
- [Criação da base para LOGs](#criacao-da-base-para-logs)
- [Como consultar os dados](#como-consultar-os-dados)
- [de LOG](#de-log)
- [Informações importantes](#informacoes-importantes)

---


## Introdução

A LGDP (Lei Geral de Proteção de Dados) chegou e não há para onde correr. Todo mundo terá de se adaptar se não quiser sofrer nenhum problema jurídico. Se você não está por dentro da LGPD, faça o treinamento disponível no Portal UCA » Tecnologia da Informação » Cybersec » Treinamento LGPD. São muitas as exigências de proteção previstas na Lei, que se tornam um desafio nós, pois temos de encontrar meios de preparar o Bimer para atender as necessidades dos nossos clientes. Um bom exemplo é que precisamos permitir que tenham controle sobre as informações consideradas sensíveis de pessoas físicas, como CPF, endereço, etc. Mas como fazer isso no Bimer? Somente bloquear o acesso não resolveria, porque tem usuários que precisam ter acesso aos dados. Por exemplo, um vendedor conseguirá manter contato com seu cliente, se não souber seu e-mail ou telefone? A pessoa responsável pelo faturamento conseguiria emitir a NF-e, sem saber o CPF do cliente? Então, para permitir o controle de quem está acessando os dados, e quais dados foram acessados, optamos por criar LOGs que registrarão informações, sempre que algum usuário acessar dados de uma pessoa física. Exemplos: • Ao acessar o módulo Cadastro de pessoas, e visualizar os dados de uma pessoa física; • Ao pesquisar em qualquer módulo no Bimer, e na lista aparecerem pessoas físicas; • Ao acessar o cadastro de uma pessoa física no CRM; • Ao emitir uma NF-e para pessoa física; • Etc. Você pode estar se perguntando: “Criar LOG em todas essas situações não aumentará muito a base de dados do Bimer, e o deixará muito lento?” O DSN Bimer pensou nisso também! E, por isso, o LOG não ficará armazenado na base de dados principal do sistema. A partir da versão 9.04.04.00 será criada uma base de dados secundária, na qual ficarão salvos apenas os registros de LOG.


## Configurações necessárias

No Configurador Bimer » Geral » Opções » Pessoa » Dados foi criada a opção “Auditar consultas de dados sensíveis de pessoas físicas (LGPD)”. Com ela marcada, serão salvas informações das consultas que possuam dados sensíveis de pessoas físicas. Atenção: Ao atualizar o Bimer com a versão 9.04.04.00, essa opção será marcada automaticamente. O cliente poderá desmarcá-la, caso queira. Mas, até o que nosso cliente note a existência da configuração, a base de LOGs já existirá no SQL Server. Quais as consequências se o cliente desmarcar a opção, com a base secundária criada? Nenhuma, além de deixar de fazer esse tipo de controle. O Bimer apenas deixará de salvar informações das consultas na base secundária. A questão se dá, principalmente, se o cliente passar por algum tipo de fiscalização. Além disso, ao desmarcar a opção, isso ficará registrado na auditoria de sistemas.


## Criação da base para LOGs

A base de dados secundária é criada automaticamente quando qualquer usuário fizer alguma pesquisa ou acessar uma área na qual constem dados sensíveis de pessoas físicas. Por exemplo, quando o sistema for atualizado, e o primeiro usuário que acessar o sistema faça uma pesquisa de clientes na opção “Localizar”. A base é criada, mesmo que a pesquisa tenha sido feita sem nenhum dado como filtro. O Bimer então criará segunda base, cujo nome será <Nome da base principal>_LGPD, conforme imagem a seguir. Essa base de dados é composta de apenas 02 tabelas. 1.LogConsulta Para cada consulta, ou acesso de informações, é criado um registro com os seguintes campos: • IdLogConsulta – ID primário do registro; • DtReferencia – Data e hora em que ocorreu o acesso aos dados; • IdUsuario – ID do usuário que acessou os dados; • NmSistema – Identifica o sistema pela qual os dados foram acessados; • DsCamposAcessdados – Informação do tipo de dados que se acessou. 2.LogConsutaItem Nela constam o ID da pessoa acessada, associada ao ID da consulta da tabela LogConsulta. Exemplo: Ao usar a localização de pessoas aparecerem 10 pessoas. Então, o sistema criará 01 registro na tabela LogConsulta, e 10 registros associados a ele na tabela LogConsultaItem.


## Como consultar os dados


## de LOG

NoConfigurador Bimer » Geral » Ferramentas » Auditoria de consultas de pessoas físicas (LGPD) é possível verificar as informações de pessoas físicas que foram acessadas. Nela são demonstradas a Data e Hora em que houve o acesso aos dados, o Usuário e Sistema pelo qual houve o acesso, além do Nome da pessoa e Campos de dados acessados. Essa tela apresenta no máximo 30 mil registros. É possível utilizar as ferramentas de filtro, para refinar a consulta. Caso ultrapasse o limite de registros, o sistema exibirá um alerta a esse respeito. Outro recurso importante dessa consulta é a possibilidade exportá-la para arquivo nos formatos XLS, XLSX ou CSV.. O funcionamento do recurso é bastante simples, mas extremamente funcional.


## Informações importantes

1)Qual usuário grava as informações na base de Log? O usuário ativo no sistema, aquele com o qual está logado. 2)O arquivo LDF da base de Logs não tende a crescer muito? A base de Log é criada no SQL, configurada para “Simple Recovery”, para minimizar o crescimento do arquivo LDF. 3)As consultas de dados direto na base de dados são auditadas? Não. Somente as consultas feitas através de qualquer módulo do Bimer. 4)As alterações feitas no Configurador Bimer » Geral » Opções » Pessoa » Dados » “Auditar consultas de dados sensíveis de pessoas físicas (LGPD)” têm efeito imediato em todos os módulos? Não. É preciso fazer novo login no módulo para passarem a valer. 5)O DBMonitor “pega” o processo de gravar informações na base de Log? Não. 6)Existe prazo para o sistema guardar um Log? Atualmente não existe nenhuma definição na LGPD sobre o prazo que uma informação deve ser guardada. Por isso, também não há limites no sistema. 7)Existe recurso para limpar as tabelas de log na base secundária? Só é possível “limpar” o registro de LOG’s através de comandos direto na base de dados. Porém, não recomendamos que isso seja feito. 8)O que acontece se a base de dados secundária for excluída no SQL Server? Se no Configurador Bimer » Geral » Opções » Pessoa » Dados a opção “Auditar consultas de dados sensíveis de pessoas físicas (LGPD)” estiver marcada, a base secundária para LOGs será recriada automaticamente no próximo acesso ou consulta a dados sensíveis de pessoas físicas.
