# Integração Neogrid — Layout 5.0 — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [O que é exportado?](#o-que-e-exportado)
- [Configurações](#configuracoes)
- [Exportação dos dados](#exportacao-dos-dados)
- [Manual](#manual)
- [Automática (Gerente Eletrônico)](#automatica-gerente-eletronico)
- [Informações importantes](#informacoes-importantes)
- [Integridade dos Dados](#integridade-dos-dados)

---


## Introdução

Na versão 11.02.03.15 do Bimer foi liberada a nova rotina de integração com Neogrid: Layout 5.0. Atenção! Essa é uma rotina separada da integração Neogrid que já existia! A nova integração automatiza a exportação de dados do Bimer no layout exigido pela Sylvamo/NeoGrid, garantindo mais segurança, padronização e menos trabalho manual no dia a dia. Com ela é possível enviar informações de vendas, produtos, estoque, clientes e vendedores de forma organizada, podendo optar por execução manual ou automática, além de controle de período e regras que asseguram a integridade dos dados exportados.


## O que é exportado?

São exportados: • Vendas: Notas fiscais de vendas, devoluções e cancelamentos, incluindo o detalhamento de itens; • Produtos: Cadastro de produtos; • Estoque: Posição atual de saldo em estoque por item; • Clientes: Cadastro de clientes com endereços e segmentação de mercado; • Vendedores: Cadastro de vendedores, supervisores e gerentes. Vamos conferir as configurações da rotina e, depois, algumas informações importantes sobre a integração!


## Configurações

Para configurar esse novo recurso, acesseConfigurador / Geral / Opções / Integração Neogrid / Layout 5.0. Marque a opção “Trabalhar com Integração NeoGrid Layout 5.0”. Feito isso, informe a empresa que trabalhará com a rotina. Serão necessárias também características de pessoas e produtos que terão suas informações exportadas. Além disso, adicione também os vendedores para a correta exportação dos dados. Importante! As características deverão estar informadas corretamente nos respectivos cadastros de pessoas e produtos.


## Exportação dos dados


## Manual

Para realizar a exportação manual dos dados para o NeoGrid, acesse Configurador / Geral / Ferramentas / Exportação NeoGrid Layout 5.0. Na tela que se abrirá, informe a empresa e marque as informações que deseja exportar, bem como o período das informações. Você também poderá realizar uma composição de data, basta clicar na engrenagem ao lado da data. Após clicar em “Exportar”, no diretório configurado anteriormente na ativação da rotina, serão gerados os arquivos TXT referentes às informações selecionadas para exportação.


## Automática (Gerente Eletrônico)

Para realizar a exportação automaticamente, é necessário realizar a configuração da tarefa e tarefa agendada para que o GEAgente consiga realizar a rotina. Para isso, acesseConfigurador / Geral / Tarefas. Utilize o sistema000257 - Exportação de dados para a NeoGrid no layout 5.0. Agora é necessário cadastrar a tarefa agendada com a frequência de execução. AcesseConfigurador / Geral / Tarefas agendadas.Recupere a tarefa criada anteriormente e defina o período de execução. Na aba “Neogrid” informe a empresa da exportação. Importante: se o cliente utilizar a rotina para mais de uma empresa, então ele deverá cadastrar 1 tarefa para cada empresa. Após a execução da tarefa, os arquivos serão gerados no diretório configurado, assim como ocorre com a execução manual. Dúvida! “Mas como o Gerente Eletrônico saberá qual período ele deverá exportar?” Boa pergunta! Quando a exportação é executada pelo GE, o sistema calcula as datas automaticamente com base no tipo de ocorrência configurado: • Diário: exporta dados do dia, das 00h às 23h59; • Semanal: exporta os dados dos últimos 7 dias até o momento atual; • Mensal: exporta do primeiro dia do mês atual até o momento atual. Outra dúvida! “Posso mudar o padrão da nomenclatura dos arquivos gerados?” Não! O nome de cada arquivo segue um padrão rigoroso para evitar sobreposição: • Padrão: ENTIDADE_MES_ANO_DATA-GERACAO_HORA-GERACAO.txt • Exemplo: CLIENTES_JANEIRO_20XX_17.01.20XX_11.31.txt. Observação: Para vendas e estoque, o "Mês/Ano" no nome refere-se ao início do período selecionado, enquanto a data final indica o momento exato da criação do arquivo.


## Informações importantes


## Integridade dos Dados

• Produtos: Se houver ao menos uma característica de produto informada em “Configurador / Geral / Opções / Integração NeoGrid / Layout 5.0 / Características de produto” serão exportados somente os produtos com as características configuradas. Caso não tenha nenhum, serão exportados todos os produtos vinculados à empresa de exportação; • Vendedores: Serão exportados apenas os vendedores configurados em “Configurador / Geral / Opções / Integração NeoGrid / Layout 5.0 / Vendedores”. • Vendas: Serão exportadas as vendas do período que possuam produtos que se enquadrem no filtro de exportação de produtos supracitado; • Clientes: Se houver ao menos uma característica de pessoa informada em “Configurador / Geral / Opções / Integração NeoGrid / Layout 5.0 / Características de clientes X segmentação” serão exportados somente os clientes com as características configuradas. Se não houver característica informada, serão exportados todos os clientes e as informações de segmentação ficarão em branco; • Estoque: Serão exportados os dados de estoque dos produtos que se enquadrem no filtro de exportação de produtos supracitado.
