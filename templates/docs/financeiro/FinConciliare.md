# Conciliação de Cartões (FinConciliare) — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Importante](#importante)
- [Introdução](#introdução)
- [Configurações](#configurações)
  - [Clientes que Utilizam o Bimer.exe](#clientes-que-utilizam-o-bimerexe)
  - [Menu Configuração de Empresas](#menu-configuração-de-empresas)
  - [Menu Configurações](#menu-configurações)
- [Conhecendo o Módulo](#conhecendo-o-módulo)
  - [Conciliação](#conciliação)
  - [Consultas](#consultas)
  - [Ferramentas](#ferramentas)
  - [Logs](#logs)
- [SOS Suporte — Dicas Importantes](#sos-suporte--dicas-importantes)

---

## Importante

A utilização do módulo **FinConciliare** (desktop) não está liberada para todos os clientes. Ele é de uso exclusivo de clientes específicos que possuem liberação do gerente do DSN.

> **Atenção:** Este manual é de uso exclusivo da equipe de suporte da Alterdata e bases. Não deve ser disponibilizado para clientes.

---

## Introdução

O **FinConciliare** possui o mesmo objetivo do **Conciliare web**: auxiliar o cliente no controle de suas vendas em cartão.

---

## Configurações

O módulo não requer instalação e não está presente no instalador do financeiro do Bimer desktop. O executável fica em:

```
M:\BIMER\Projetos Específicos\Compartilhados\FinConciliare
```

> **Atenção:** Sempre verifique a versão do cliente para pegar o executável na versão correspondente.

O login é realizado como qualquer módulo do Bimer: usuário, senha e conexão com a base.

### Clientes que Utilizam o Bimer.exe

O executável `FinConciliare.exe` deve ficar na pasta de 64 bits do Windows. Exemplo:

```
C:\Program Files\Alterdata\ERP
```

Junto ao `Bimer.exe`. Além disso:

- O caminho do executável deverá ser informado manualmente no perfil de acesso do usuário.
- Tanto o `Bimer.exe` quanto o `FinConciliare.exe` devem estar configurados para serem executados como **administrador**, especialmente para o correto funcionamento da rotina de baixa automática.

### Menu Configuração de Empresas

Ao acessar o sistema pela primeira vez, é necessário informar quais empresas utilizarão o recurso:

1. Selecione a opção **"Configurações de empresa"** no menu superior.
2. Clique em **Novo**.
3. Informe o **código da empresa na operadora** e o **código da empresa no Bimer**.
4. Ao clicar em **Gravar**, é efetuado o alinhamento dos pagamentos e das vendas, realizando o vínculo para a nova empresa configurada.

> **Atenção:** O código da empresa na operadora não poderá ser editado posteriormente. Informe com cuidado.

A opção **"Mostrar empresas não localizadas"**, quando marcada, exibe as empresas que vieram da importação mas não estão vinculadas a nenhuma empresa no Bimer. Esta opção deve ser marcada para garantir que nenhuma empresa fique sem conciliação.

### Menu Configurações

Caminho: **Configurações** (dentro do módulo)

Informe:

- **Tipo de baixa** para baixar os títulos referentes às vendas quando pagas.
- **Tipo de baixa sem numerário** para casos em que alguma venda seja cancelada pela operadora.
- **Valor de tolerância para erro de divergência de valores** (em moeda, ex.: R$ 1,50).
- **Chave de acesso** e **Chave secreta** para integração com a API Boa Vista (dados fornecidos pelo setor comercial no fechamento da venda).

> **Importante:** O FinConciliare funciona apenas com integração via **Boa Vista**. Não funciona com a Concil.

Há também configurações opcionais para aglutinar os movimentos após as baixas e criar lotes de baixa agrupados por data do recebimento, bandeira e operação.

---

## Conhecendo o Módulo

### Conciliação

**Baixar títulos validados**

Baixa os títulos da grade que estão vinculados ao pagamento da venda da operadora e que estão com o símbolo de conciliação correta na coluna **Inconsistências** (venda corretamente conciliada com seu respectivo título, aguardando baixa).

Ao realizar a baixa, o sistema:
- Preenche o campo `IdAreceber` da tabela `PagamentoCartao`.
- Adiciona a observação **"Baixa efetuada pelo FinConciliare"** no título a receber (visível também pela linha do tempo).

> **Nota (versão 11.01.06.00):** Foi implementado ajuste para que o sistema considere a **data de emissão** ao realizar a baixa dos títulos validados com a opção **Dt. emissão** marcada. Para as opções Dt. Vencimento, Dt. Venda e Dt. Recebimento, o comportamento não é alterado.

**Vincular título**

Vincula manualmente um título à venda já importada da operadora. Utilizado principalmente quando o usuário informa o NSU ou autorização incorretamente. Ao vincular um título, se houver mais parcelas, o sistema vincula automaticamente todas as parcelas em seus devidos títulos.

O sistema apresenta as vendas semelhantes ao título selecionado. Ao clicar em **"Vincular título selecionado"**, o NSU, código de autorização e TID da venda são incluídos nos respectivos títulos de todas as parcelas.

**Alternar visões**

Há duas opções de visualização:

- **Por título** — Exibe os títulos cadastrados no Bimer. À esquerda, os **Dados dos títulos a receber**; à direita, as **vendas ligadas a eles** (Dados da operadora). É possível escolher se a data no centro da tela será considerada como **Dt. Vencimento** ou **Dt. Emissão**.

- **Por operadora** — Exibe à esquerda as vendas das operadoras (obtidas pela API) e à direita os títulos a receber ligados a elas. A data pode ser considerada como **Dt. Recebimento** ou **Dt. Venda**.

**Coluna Origem** — Indica títulos com origem e-commerce ou omni. Identificação feita por uma letra em posição específica do número do título:

```
1190.E07521.CAR.14  → Origem e-commerce
1190.N07522.CAR.14  → Origem Omni
1190.O07523.CAR.14  → Origem Omni
```

**Coluna Inconsistências** — Os tipos variam conforme a visão escolhida:

*Visão por títulos:*
- Venda corretamente conciliada, aguardando baixa.
- Venda conciliada e título baixado corretamente.
- Venda importada, mas título correspondente não localizado.
- Venda conciliada, aguardando importação do pagamento.
- Título cadastrado, mas nenhuma venda correspondente localizada.

*Visão por operadora:*
- Venda corretamente conciliada, aguardando baixa.
- Venda conciliada e título baixado corretamente.
- Pagamento importado, mas título correspondente não localizado.
- Valor da venda diferente do valor do título (considerando a tolerância configurada).
- Venda cancelada pela operadora.

> **Observação:** Ao selecionar qualquer opção que realize a baixa dos títulos, os cancelados também serão baixados, mas sem numerário. Uma observação é adicionada nos títulos e na descrição dos lotes de baixa.

---

### Consultas

**Consultar vendas na operadora**

Permite realizar consultas no webservice da API (Boa Vista) para identificar possíveis erros na importação dos dados das vendas. Pode ser feito por **vendas** ou **pagamentos**, com visualização do resultado em formato XML ou formatado. Filtros disponíveis: período da venda, NSU e/ou Autorização.

**Consulta de ajustes**

Criado para consulta de lançamentos de ajustes, permitindo visualizar valores de aluguel das maquininhas (POS) e outras informações. Os ajustes podem ser importados manualmente ou automaticamente.

Tipos de ajustes disponíveis para filtro:
- Aluguel POS Inativo
- Aluguel POS/Taxa Conectividade
- Ajuste Crédito/Débito
- Cancelamento de Venda
- Chargeback
- Consulta de Cheques
- Tarifa

Recursos adicionais: gravar e recuperar cenários, exportar para Excel, imprimir resultado.

**Consultar vendas**

Permite consultar e emitir relatório das vendas canceladas, antecipadas, pagas ou previstas. Conta com exportação para Excel, impressão, filtros na grade, gravação e recuperação de cenários. É possível filtrar somente as vendas com inconsistências.

---

### Ferramentas

**Importação manual**

Permite importar somente vendas, pagamentos, ajustes ou associação de títulos individualmente. Por padrão, o sistema sugere a **importação completa** (vendas + pagamentos + ajustes + associação de títulos).

> **Atenção:** A importação de vendas e pagamentos não faz a conciliação automaticamente — é necessário rodar a associação de títulos separadamente.

Ao encontrar erros, o sistema tenta a importação mais 5 vezes e sinaliza na grade conforme legenda (não importado, importado corretamente, erro de importação). O calendário de importação exibe a quantidade de vendas, pagamentos e ajustes importados.

**Importação automática**

Possui o mesmo objetivo da importação manual, porém é iniciada automaticamente por um serviço do Windows e também realiza o vínculo com o título correspondente e a baixa dos títulos.

> **Atenção:** Se houver problemas na importação, verifique se as DLLs `libeay32.dll` e `ssleay32.dll` estão no diretório do sistema.

O processo de baixa é executado uma vez ao dia após o término da importação, verificando e baixando sempre os últimos 5 dias anteriores ao dia corrente.

**Informações importantes sobre o serviço:**

- Se a máquina for ligada após o horário configurado e não houver importação no dia, uma importação e posterior baixa serão iniciadas em qualquer horário.
- Ao instalar o serviço em mais de uma máquina, ambos funcionarão, mas prevalecerá o que iniciou o primeiro processo.
- O serviço roda apenas uma vez por dia.
- O executável do serviço é o mesmo do FinConciliare. Quando o serviço estiver ativo, não será possível excluir ou substituir o executável sem parar o serviço primeiro (visualizável em `Services.msc`).
- Usuários sem permissão de administrador receberão mensagem informando a necessidade de permissões de administrador.

**Critérios de associação (tentativas em ordem):**

```
1)  NSU + Autorização + Nr parcela + Empresa
2)  TID + Nr parcela + Empresa
3)  NSU + Nr parcela + Empresa
4)  Nr Autorização + Nr parcela + Empresa
5)  Dt. emissão = data da venda + NSU + Autorização + Nr parcela + Empresa
6)  Dt. emissão = data da venda + TID + Nr parcela + Empresa
7)  Dt. emissão = data da venda + NSU + Nr parcela + Empresa
8)  Dt. emissão = data da venda + NSU + Autorização + NrParcela + Qualquer empresa
9)  Dt. emissão = data da venda + NSU + NrParcela + Qualquer empresa
10) Dt. emissão = data da venda + Nr Autorização + Nr parcela + Empresa
11) Dt. vencimento = data de pagamento + NSU + Autorização + Nr parcela + Empresa
12) Dt. vencimento = data do pagamento + TID + Nr parcela + Empresa
13) Dt. vencimento = data do pagamento + NSU + Nr parcela + Empresa
14) Dt. vencimento = data do pagamento + NSU + Autorização + NrParcela + Qualquer empresa
15) Dt. vencimento = data do pagamento + NSU + NrParcela + Qualquer empresa
16) Dt. vencimento = data do pagamento + Nr Autorização + Nr parcela + Empresa
```

> **Tabelas envolvidas:** `FinConciliare.VendaCartao`, `FinConciliare.PagamentoCartao` (dados da operadora) e `AreceberConvenio` (dados do título a receber).

**Baixa de títulos por período**

Baixa os títulos vinculados às suas vendas da operadora que não possuam inconsistências (diferença de valores além da tolerância, conta bancária não localizada, pagamento cancelado ou pendente). Após a baixa, o sistema adiciona uma observação ao título indicando que foi baixado pelo FinConciliare.

**Conciliar a partir de arquivo Excel**

Permite importar as movimentações da operadora, localizar e baixar os títulos utilizando um arquivo de recebimento. O usuário seleciona o arquivo Excel, informa a operadora e a empresa de conciliação, e prossegue com as mesmas opções disponíveis nas demais rotinas.

---

### Logs

Para visualizar possíveis erros na importação automática, clique em **"Configurar serviço"**. Na tela que se abrirá, acesse a aba **Logs**.

Para importação manual, dê um duplo clique sobre o dia desejado para visualizar os possíveis erros de importação.

---

## SOS Suporte — Dicas Importantes

- Na rotina de importação, o sistema importa as vendas e os pagamentos e preenche as tabelas `VendaCartão` e `PagamentoCartão`.
- Nas tabelas `VendaCartao` e `PagamentoCartao`, o campo `StVenda` representa o status das vendas ou pagamentos:
  - `0` = Previsto
  - `1` = Pago
  - `2` = Antecipado
  - `3` = Cancelado
- Em todas as rotinas de baixa, o sistema preenche o campo `IdAreceber` da tabela `PagamentoCartão`.
- Na baixa automática, o sistema registra a data em que o serviço rodou na tabela `Configuracao`, na coluna `Vlconfiguracao` quando a coluna `Nmconfiguracao` for igual a `'dtultimaimportacaoautomatica'`. Este serviço roda apenas uma vez por dia.
