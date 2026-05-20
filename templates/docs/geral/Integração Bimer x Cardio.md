# Integração Bimer x Cardio — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
  - [Princípios da Integração](#principios-da-integracao)
  - [TI'S em Destaque](#tis-em-destaque)
  - [Instruções](#instrucoes)
- [Configurações](#configuracoes)
  - [Configurador Bimer](#configurador-bimer)
  - [Mas onde encontro a DLL?](#mas-onde-encontro-a-dll)
  - [A Receber e A Pagar](#a-receber-e-a-pagar)
  - [Desmembramento](#desmembramento)
  - [Aba Pessoa](#aba-pessoa)
  - [Conta bancária de cheques (despreza a baixa) e forma de](#conta-bancaria-de-cheques-despreza-a-baixa-e-forma-de)
  - [pagamento de cheques](#pagamento-de-cheques)
- [Funcionamento da](#funcionamento-da)
- [Integração](#integracao)
  - [Inclusão de Títulos](#inclusao-de-titulos)
  - [Baixa de Títulos](#baixa-de-titulos)
- [Fluxogramas](#fluxogramas)
- [Tabelas](#tabelas)
  - [Cadastros](#cadastros)
  - [Movimentação](#movimentacao)
  - [Mapeamento](#mapeamento)
- [Scripts](#scripts)
  - [Título a Receber](#titulo-a-receber)
  - [Título a Pagar](#titulo-a-pagar)

---


## Introdução

Este manual foi produzido pelo setor VIP, a fim de deixar bem claro como funciona a integração entre o Sistema de Gestão de Saúde (Cardio) e o Bimer. Esta integração tem como objetivo agilizar todo o procedimento financeiro e contábil do cliente, visto que o sistema do Cardio somente gera os títulos e as baixas, ou seja, não possui um vínculo com o sistema Wcont. Atenção! O cardio é de responsabilidade do cliente e a empresa de gestão de saúde.


### Princípios da Integração

Antes de iniciar, entenda como será feita a “conexão” entre o Cardio e o Bimer. Foram criadas no banco de dados do Cardio, diversas tabelas de integração, denominadasTI’s, estas são responsáveis por armazenar todos os dados utilizados na integração. Um fato muito importante é que essas tabelas são alimentadas pelo Cardio. O Bimer somente as lê, e insere os dados na base. Observação: O acesso a base de dados do Cardio é de responsabilidade do cliente, caso o suporte da Alterdata precise acessar é necessário solicitar ao cliente.


### TI'S em Destaque

Receitas (Títulos a receber):

- TI_EMPRESA_CLIENTE (cadastramento de cliente);
- TI_DOCUMENTO_REC (título);
- TI_ITEM_DOCTO_REC (itens dos títulos);
- TI_DOCUMENTO_BAIXA (Baixa do título);
- TI_ITEM_DOCTO_BXA (Baixa dos itens do título); Despesas (Títulos a pagar);
- TI_EMPRESA_CLIENTE (cadastramento de cliente);
- TI_EMP_FORNECEDOR (cadastramento de Fornecedor);
- TI_DOCUMENTO_CON (título);
- TI_ITEM_DOCTO_CON (itens dos títulos);
- TI_DOCUMENTO_PAGO (Baixa do título);
- TI_ITEM_DOCTO_PAGO (Baixa dos itens do título).


### Instruções

Toda a integração está baseada na tabela de Eventos Contábeis existente no banco de dados do Cardio. Esta tabela contém todos os tipos de lançamentos a fim de serem contabilizados. Estes eventos corresponderão ao nosso Tipo de Movimento de Cobrança (para títulos a Receber) e Naturezas de Lançamentos (para títulos a Pagar). Como existem muitos eventos contábeis cadastrados no Cardio (mais de 50 mil), foi feito um recurso que no momento em que se começa a importar os títulos, os eventos contábeis são “transformados” em Tipo de Movimento de Cobrança automaticamente.


## Configurações

Toda configuração está em dois lugares: Configurador Bimer e Cadastro de Pessoas.


### Configurador Bimer

Acesse a aba Geral / Importações/ exportações de dados. Crie uma nova configuração. Veja agora o que fazer nas seguintes abas: Dados Informe a Empresa, o Nome da Operação, marque a opçãoImportaçãoe informe o arquivo AltImpERP_Unimed.dll.


### Mas onde encontro a DLL?

Se você é da Matriz vá no diretório M (Museu) e procure em BIMER\BimerDesktop\Versão do sistema. Se você é de filial ou representação pode solicitar o arquivo para a galera de Canais. Entidade Externa Aqui você precisa preencher os dados de conexão com a base do Cardio para a integração funcionar de boa. É só clicar em Adicionar e informar: • Nome:Descrição do Banco de Dados entre colchetes (conforme imagem acima). • Servidor: Nome da máquina onde se encontra a base. • Usuário: Com permissão no banco de dados Cardio. • Senha: Do usuário informado acima. Se liga! Para as bases Cardio e Bimer trocarem informação é fundamental que elas consigam se comunicar, por isso precisam estar no mesmo servidor ou na mesma rede, por exemplo. Spy System Informe aqui os usuários que vão receber um e-mail sobre o andamento da rotina, você pode marcar que o spy será enviado somente para mensagens de erros. Se a opção estiver desmarcada serão enviados também e-mails da execução da rotina bem sucedida: Parâmetros


### A Receber e A Pagar

Preencha as seguintes informações padrões para cada tipo de lançamento:

- Natureza de lançamento;
- Forma de Pagamento;
- Situação administrativa;
- Evento de baixa;
- Tipo de Baixa Total;
- Tipo de baixa parcial.
#SeLiga: As naturezas de lançamentos padrões (a pagar / a receber) informadas aqui são utilizadas apenas se não houver esta informação no cadastro de pessoas. No módulo Pessoa /Cliente ou Fornecedor, aba cadastro existe um campo para colocar a Natureza de Lançamento específica para cada um. Isto foi feito por solicitação da própria Unimed, pois possuem particularidade de naturezas por pessoa. Em resumo o sistema segue a seguinte hierarquia para a natureza: 1.Cadastro Pessoa; 2.Configurador Bimer; 3.Se não tiver preenchimento em nenhum dos lugares sem natureza, o sistema importará os títulos sem natureza de lançamento. No caso dos títulos a pagar, pode acontecer de serem importados sem a natureza de lançamento, isto ocorre pois a natureza está informada dentro de desmembramento de valores por natureza de lançamento.


### Desmembramento

Adicione os desmembramentos. Eles representam as parametrizações para definir o que o sistema Bimer colocará nos campos de Tipo de Movimento de Cobrança e Naturezas de lançamentos. Será o "dê - para" entre os dois softwares. Esta é a etapa mais importante. Veja configurar cada movimento: Desmembramento – Contas a Receber • No caso de Item, preencha da seguinte forma: ◦Tipo de Movimento de Cobrança: Preenchido com o mesmo código do Evento contábil do Cardio; ◦Natureza de lançamento: Em branco; ◦Desmembramento: Em branco. • Os Tributos devem ser preenchidos da seguinte forma: ◦Tipo de Movimento de Cobrança: Preenchido com o mesmo código do Evento contábil de Tributo do Cardio; ◦Natureza de lançamento: Com uma natureza cadastrada manualmente, correspondente ao Tributo; ◦Desmembramento: Tributo Correspondente. Desmembramento – Contas a Pagar • No caso de Item, deve ser preenchido da seguinte forma: ◦Tipo de Movimento de Cobrança: Preenchido com o mesmo código do Evento contábil do Cardio; ◦Natureza de lançamento: Com a natureza cadastrada manualmente, correspondente ao Evento Contábil do Cardio; ◦Desmembramento: Em branco. • Os Tributos devem respeitar o padrão: ◦Tipo de Movimento de Cobrança: Preenchido com o mesmo código do Evento contábil de Tributo do Cardio; ◦Natureza de lançamento: Com uma natureza cadastrada manualmente, correspondente ao Tributo; ◦Desmembramento: Tributo Correspondente. #SeLiga: No Configurador Bimer do Financeiro / Opções / A Pagar / Impostos preencha os dados de Natureza e de Pessoa referente aos Tributos, pois é de lá que são obtidas as informações que são utilizadas para informar o Tributo dentro do título a pagar em desmembramento do valor.


### Aba Pessoa

Cada vez que o sistema importa um título, antes ele verifica o cadastro da pessoa envolvida e atua de duas maneiras: Cria um novo cadastro ou Sobrescreve o cadastro. No móduloCadastro de Pessoa/ Cadastro /temos o campo Código Externo,serve para especificar caso o cliente já esteja cadastrado no Bimer. Como assim? No momento da integração o sistema verifica primeiro se o cliente/fornecedor já está cadastrado no Bimer, é nesta hora que o campo código externo influencia, pois se ele encontrar na base de dados do Bimer algum cliente/fornecedor onde seu código externo é igual ao código no Cardio, este não é cadastrado automaticamente na integração. Caso contrário o cliente/fornecedor é cadastrado na base de dados do Bimer.


### Conta bancária de cheques (despreza a baixa) e forma de


### pagamento de cheques

Estes campos foram criados pois o cliente efetua a baixa de alguns títulos com cheques diretamente no módulo de Cheques a pagar. No Cardio, quando for baixado um título cuja forma de pagamento e conta bancária sejam as mesmas informadas acima, na hora da importação da baixa para o Bimer é desconsiderada a baixa deste título. Isto ocorre pois o cliente fará manualmente a baixa do título gerando o cheque manualmente no módulo de Cheques a Pagar.


## Funcionamento da


## Integração


### Inclusão de Títulos

No sistema Cardio são cadastrados, os títulos e a partir deste momento são gravadas as informações nas suas respectivas TI's. Isto se no Cardio estiver configurado para a gravação nas TI’s e se houver o Nº do Documento/título. A Pagar Para as informações da inclusão dos títulos, o sistema verifica/busca: • Natureza de Lançamento: Configurador Bimer / Geral ou Cadastro de Pessoas. Um detalhe é que se o título tiver mais de um desmembramento de valor por natureza de lançamento, na capa do título a pagar não terá nenhuma natureza informada; • Forma de Pagamento: Cadastrada no Configurador Bimer / Geral; • Situação Administrativa: Cadastrada no Configurador Bimer / Geral; • Tributos (desmembramentos de valores):Será de acordo com o vínculo do tipo de movimento de cobrança ao Tributo. Já a natureza de lançamento o sistema busca dentro do Configurador Bimer / Financeiro / Apagar / Impostos. A Receber Para as informações da inclusão dos títulos, o sistema verifica/busca: • Natureza de Lançamento: Configurador Bimer / Geral ou Cadastro de Pessoas; • Forma de Pagamento: Cadastrada no Configurador Bimer / Geral; • Situação Administrativa: Cadastrada no Configurador Bimer / Geral; • Tributos (desmembramentos de valores):Será de acordo com o vínculo do tipo de movimento de cobrança ao Tributo e a natureza de lançamento dentro do Configurador Bimer / Geral na aba desmembramento. Nota: Existe em algumas TI’s, o campo chamado COD_STATUS_REG, é esta coluna que especifica se o título já foi processado (P) - enviado para o Bimer, não processado (NP) ou com erro no processamento (ER) - não enviado para o Bimer por motivos específicos). Exemplo: Select COD_STATUS_REG,* from Ti_Documento_Rec where Cod_Documento_sg = 'NUMEROTITULO' Select COD_STATUS_REG,* From Ti_documento_con where Cod_documento_sg ='NUMEROTITULO'


### Baixa de Títulos

No sistema Cardio são baixados os títulos, a integração somente “atualiza” o cadastro do título, deixando-o assim baixado. Caso não tenha sido integrada a inclusão do título, o sistema não importará nada. Para as informações das baixas, o sistema verifica: • Forma de Pagamento: Teremos como base a integração sendo feita somente com a forma de pagamento informada no Configurador Bimer / Geral; • Tipo de Baixa: Total ou Parcial (informadas no Configurador Bimer / Geral); • Data de Baixa: Importada do Cardio; • Conta: A conta bancária da baixa deve estar cadastrada também no Bimer. Tenha atenção, pois os dados que o sistema compara (para verificar se a conta do Cardio é a mesma do Bimer), É o Nº da Conta Corrente e o Nº da Agência. São levados em consideração os zeros à esquerda e os hifens. Obs.: Caso o sistema não encontre a conta corrente de baixa, ele não importará a baixa e emitirá uma mensagem com a crítica.


## Fluxogramas

Segue abaixo um fluxograma que demonstra a Integração de títulos a Pagar: Segue abaixo um fluxograma que demonstra a Integração de títulos a Receber.


## Tabelas

A seguir, veja todas as tabelas que compõe as TIs. Há três grupos de tabelas que serão utilizadas no processo de integração:


### Cadastros

Tabela: TI_TIPO_REG_AUXI Objetivo: Define os tipos de registros auxiliares que serão utilizados pela contabilidade; Tabela: TI_EMPRESA_CLIENTE Objetivo: Representa os clientes gerados pelo Sistema de Gestão, por empresa (Unimed); Tabela: TI_EMP_FORNECEDOR Objetivo:Representa os fornecedores gerados pelo Sistema de Gestão (cooperados, credenciados, Unimed, etc.); Tabela:TI_DEP_FORNECEDOR Objetivo:Representa os dependentes dos fornecedores pessoa física;


### Movimentação

Tabela: TI_DOCUMENTO_REC Objetivo: Armazena os documentos (títulos) relacionados à receita; Tabela: TI_ITEM_DOCTO_REC Objetivo: Armazena os documentos a receber detalhados por itens de acordo com o nível de exigência da Agência Nacional de Saúde - ANS; Tabela: TI_Tributo_DOC_REC Objetivo: Armazena os Tributos relacionados ao documento a receber. Observação.: em TI_ITEM_DOC_REC é gerado o item relacionado ao Tributo e esta tabela apenas detalha os cálculos utilizados na apuração do referido Tributo; Tabela: TI_DET_DOCTO_REC Objetivo: Armazena o detalhe dos documentos (títulos) relacionados à receita para efeito de impressão; Tabela: TI_DOCUMENTO_BAIXA Objetivo: Armazena os recebimentos referentes aos documentos gerados; Tabela: TI_ITEM_DOCTO_BXA Objetivo: Armazena os recebimentos detalhados por itens de acordo com o nível de exigência da Agência Nacional de Saúde – ANS; Tabela: TI_DOCUMENTO_CON Objetivo: Armazena os documentos (títulos) relacionados à despesa; Tabela: TI_ITEM_DOCTO_CON Objetivo: Armazena os documentos a pagar ou a serem registrado contabilmente detalhados por itens de acordo com o nível de exigência da Agência Nacional de Saúde – ANS; Tabela: TI_Tributo_DOC_CON Objetivo: Armazena os Tributos relacionados ao documento a pagar. Observação.: em TI_ITEM_DOC_CON é gerado o item relacionado ao Tributo e esta tabela apenas detalha os cálculos utilizados na apuração do referido Tributo; Tabela: TI_DOCUMENTO_PAGO Objetivo: Armazena os pagamentos ou recuperações (glosas) referentes aos documentos conhecidos (registrados); Tabela: TI_ITEM_DOCTO_PAGO Objetivo: Armazena os pagamentos ou recuperações (glosas) detalhados por itens de acordo com o nível de exigência da Agência Nacional de Saúde - ANS; Tabela: TI_FECHA_REG_AUXI Objetivo: Identifica o fechamento da competência para os registros auxiliares.


### Mapeamento

Tabela: TI_MAP_EMPRESA Objetivo: Associa o código da empresa do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_CLIENTE Objetivo: Associa o código do cliente do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_MUNICIPIO Objetivo: Associa o código do município do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_AREA Objetivo: Associa o código da área do cliente do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_BLOQUEIO Objetivo: Associa o código do bloqueio do cliente do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_FILIAL Objetivo: Associa o código da filial do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_TIPO_DOC Objetivo: Associa o código do tipo do documento do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_SITUA_DOC Objetivo:Associa o código da situação do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_STATUS_DOC Objetivo: Associa o código do status do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_MOTIVO_CANC Objetivo: Associa o código do motivo do cancelamento do documento do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_USUARIO Objetivo: Associa o código do usuário do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_FORNECEDOR Objetivo: Associa o código do fornecedor do sistema integrante ao seu correspondente no Cardio; Tabela:TI_MAP_VENDEDOR Objetivo: Associa o código do vendedor do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_COORDENADOR Objetivo: Associa o código do coordenador do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_TIPODOC_OPF Objetivo: Associa o código do tipo de documento utilizado na operação financeira (recebimento) do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_SEGTO_MERC Objetivo: Associa o código do segmento de mercado do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_MOT_PRORROG Objetivo: Associa o código do motivo de prorrogação do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_CT_CORRENTE Objetivo: Associa o código da conta corrente no sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_TIPO_BAIXA Objetivo: Associa o código do tipo de baixa do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_IT_CTA_CTBL Objetivo: Associa o código do item que caracteriza a conta do sistema integrante ao seu correspondente no Cardio; Tabela: TI_MAP_COD_Tributo Objetivo: Associa o código do Tributo do sistema integrante ao seu correspondente no Cardio;


## Scripts

Abaixo estão alguns comandos simples que poderão ser necessários para análises futuras.


### Título a Receber

--Comando para localizar Cliente do título a receber na TI de integração: Select*from TI_EMPRESA_CLIENTE where Cod_Cliente_Sg in( Select Cod_Cliente_Sg from TI_DOCUMENTO_REC where Cod_Documento_sg ='NRTITULO') --Comando para localizar título a receber na TI de integração: Select COD_STATUS_REG,*from TI_DOCUMENTO_REC where Cod_Documento_sg ='NRTITULO' --Comando para localizar itens do título a receber na TI de integração: Select*from TI_ITEM_DOCTO_REC where Cod_documento_sg ='NRTITULO' --Comando para localizar a baixa do título a receber na TI de integração: Select COD_STATUS_REG,*From TI_DOCUMENTO_BAIXA where Cod_documento_sg ='NRTITULO' --Comando para localizar a baixa do ítem do título a receber na TI de integração: Select * From TI_ITEM_DOCTO_BXA where Cod_documento_sg ='NRTITULO' --Comando para modificar título a receber como processado / não Processado: Update TI_DOCUMENTO_REC set COD_STATUS_REG = 'P ou NP' where Cod_Documento_sg = 'NRTITULO' --Comando para modificar a baixa do título a receber como processado / não Processado: Update TI_DOCUMENTO_BAIXA set COD_STATUS_REG ='P ou NP'where Cod_Documento_sg = 'NRTITULO'


### Título a Pagar

--Comando para localizar Fornecedor do título a pagar na TI de integração: Select*from TI_EMP_FORNECEDOR where Cod_Fornecedor_Sg in( Select Cod_Cliente_Sg from TI_DOCUMENTO_CON where Cod_Fornecedor_Sg ='NRTITULO') --Comando para localizar título a pagar na TI de integração: Select COD_STATUS_REG,*from TI_DOCUMENTO_CON where Cod_Documento_sg ='NRTITULO' --Comando para localizar itens do título a pagar na TI de integração: Select*from TI_ITEM_DOCTO_CON where Cod_documento_sg ='NRTITULO' --Comando para localizar a baixa do título a pagar na TI de integração: Select COD_STATUS_REG,*From TI_DOCUMENTO_PAGO where Cod_documento_sg ='NRTITULO' --Comando para localizar a baixa do item do título a pagar na TI de integração: Select*From TI_ITEM_DOCTO_PAGO where Cod_documento_sg ='NRTITULO' --Comando para modificar título a pagar como processado / não Processado: Update TI_DOCUMENTO_CON set COD_STATUS_REG ='P ou NP'where Cod_Documento_sg = 'NRTITULO' --Comando para modificar a baixa do título a pagar como processado / não Processado: Update TI_DOCUMENTO_PAGO set COD_STATUS_REG ='P ou NP'where Cod_Documento_sg = 'NRTITULO'
