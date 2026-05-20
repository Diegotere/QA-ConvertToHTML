# PDV Alterdata — TEF Discado e Dedicado — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [O que é TEF?](#o-que-é-tef)
- [O que é Adquirente?](#o-que-é-adquirente)
- [O que é Pin Pad?](#o-que-é-pin-pad)
- [Diferença entre TEF Discado e TEF Dedicado](#diferença-entre-tef-discado-e-tef-dedicado)
- [Configurações no Bimer](#configurações-no-bimer)
- [Configurações no PDV Alterdata](#configurações-no-pdv-alterdata)
- [Tabela de Códigos e Mensagens](#tabela-de-códigos-e-mensagens)

---

## Introdução

Este manual apresenta o TEF (Transferência Eletrônica de Fundos) integrado ao PDV Alterdata, abordando os tipos disponíveis, configurações no Bimer e no PDV, e as particularidades de cada solução.

---

## O que é TEF?

**TEF – Transferência Eletrônica de Fundos** – é um sistema que permite transações financeiras de forma eletrônica, através de cartão de crédito ou débito. É responsável por efetuar a comunicação entre o estabelecimento comercial e a operadora de cartão de crédito.

O TEF depende de uma rede para funcionar e é muito utilizado em supermercados, farmácias e grandes redes de lojas.

Diferente do **POS** (máquina de cartão portátil, que não trabalha interligada a um PDV), no TEF o comprovante financeiro da transação é impresso somente no ECF (emissor de cupom fiscal) ou impressora.

---

## O que é Adquirente?

Adquirentes são empresas que realizam a liquidação financeira das transações através de cartão de crédito e cartão de débito, permitindo a comunicação com as bandeiras de cartão Visa, Mastercard, Amex, Diners, Elo, etc.

**Exemplos de adquirentes:** REDE, Stone, Getnet, Cielo, Global Payments, etc.

---

## O que é Pin Pad?

O **Pin Pad** é um dispositivo que realiza a leitura de cartões de crédito, débito, vale e outros, efetuando a liberação automática das transações de venda após a validação dos dados do cartão e senha.

---

## Diferença entre TEF Discado e TEF Dedicado

Existem 2 tipos de TEF:

### TEF Discado

- Utiliza **linha telefônica comum**, sendo necessário fazer uma discagem automática à operadora de cartão para realizar a transação.
- **Não possui mensalidade** por uso de software proprietário ou infraestrutura TEF.
- **Desvantagem:** a linha telefônica precisa estar livre para funcionar. Se a loja usar o TEF na mesma linha que faz e recebe ligações, pode haver conflito.

**Layouts compatíveis (empresas que utilizam o TEF Discado):**
- Justa
- PayGo
- Plug&Pay
- Auttar (Get Net – Santander)
- Cappta
- Banese

> A **Justa** é uma empresa parceira da Alterdata e nosso setor comercial vende o seu TEF. Caso você atenda algum cliente com esse TEF, verifique com a sua supervisão a rotina de implantação.

### TEF Dedicado

- Utiliza **link dedicado**, que deve ser adquirido pelo cliente, e roteador próprio.
- Possui velocidade muito superior ao TEF Discado.
- Normalmente utilizado por estabelecimentos com grande demanda por pagamentos com cartão (mercados, redes de lojas, farmácias).
- Em geral, os custos para implantação e utilização são maiores que os do TEF Discado.
- Algumas empresas utilizam uma **VPN** para se comunicar com seus servidores. Nesses casos, a instalação da VPN é de responsabilidade da própria fornecedora do TEF.

---

## Configurações no Bimer

Quando o Bimer é utilizado como retaguarda do PDV, as formas de pagamento são exportadas e recebidas no PDV.

### Forma de Pagamento

A única configuração necessária no Bimer é marcar a opção **"Executar TEF"** na forma de pagamento desejada, para que o PDV acione as configurações de TEF ao utilizar esta forma de pagamento.

Após realizar a configuração, realize o processo de **exportação de dados**.

---

## Configurações no PDV Alterdata

### TEF Discado

1. No PDV Alterdata, acesse o menu **Configurações** (teclas **Shift + F11**).
2. Clique na opção **9 – TEF**.
3. No campo **Layout do TEF**, localize o arquivo `AltTefDiscadoOff.all`, disponível em:
   ```
   C:\Program Files (x86)\Alterdata\PDV Alterdata\Lays
   ```
4. Caso necessário, marque se **"Trabalha com crédito parcelado pelo estabelecimento"**.
5. Com a maquineta do PIN PAD já em funcionamento, o cliente pode testar a comunicação passando uma venda.

---

### TEF Dedicado – SiTEF

> Para configurar o TEF Dedicado, você precisará de informações fornecidas pela empresa de quem o cliente adquiriu o sistema de TEF.

1. Na tela de venda do PDV, acesse **Outras Funções (Shift + F11) >> Configurações**.
2. Na aba **TEF**, no campo **layout do TEF**, informe o arquivo `AltTefDedicadoOff.all`, disponível em:
   ```
   C:\Program Files (x86)\Alterdata\PDV Alterdata\Lays
   ```

**Campos de configuração:**

- **Endereço SiTef:** IP do servidor onde está instalado o gerenciador da aplicação TEF (fornecido pela empresa fornecedora do TEF). Formato: `<NR_IP>:<NR_porta>`.
  - Exemplo: `127.0.0.1:4096`
  - Versões do PDV Alterdata inferiores a **6.1353.69** não aceitam `:`. Nesse caso, acesse `C:\Windows`, localize o arquivo `AltTefDedicado.ini` e no campo `SiTefAddress` inclua `:` e a porta.

- **Código da Empresa:** Código de 8 dígitos para identificação da empresa, definido por PDV, fornecido pela Gerenciadora do TEF. Caso ela não forneça, a empresa pode definir os códigos respeitando o padrão de 8 dígitos.

  > Se o cliente possuir mais de uma loja com TEF, é indicado possuir um código por empresa para identificar a origem da movimentação na retaguarda.

- **Número do terminal:** Código sequencial de 8 dígitos, definido por PDV, fornecido pela Gerenciadora do TEF.
  - Exemplo: PDV 1 → `00000001`; PDV 2 → `00000002`.

- **Porta de Comunicação:** Porta em que o PIN PAD está conectado. Os PIN PADs geralmente são USB e emulam uma porta COM. Para verificar a porta correta, acesse o **Gerenciador de dispositivos** do Windows e verifique as portas COM/LPT. A porta do TEF geralmente se inicia com a descrição "PPC900" seguido do número da porta entre parênteses.

---

### TEF Dedicado – Innova

As configurações são semelhantes ao TEF SiTEF, porém as informações devem ser obtidas com a empresa Innova.

#### Instalação e Configuração da VPN

A instalação e configuração da VPN é realizada pelo suporte da Innova. O suporte Alterdata apenas precisará:
1. Baixar o pacote de DLLs do TEF (disponibilizado pela empresa Innova).
2. Inserir as DLLs na pasta `System32` ou `SysWOW64`.
3. Realizar a configuração do TEF no PDV.

> **Observação:** Caso o cliente entre em contato solicitando a instalação do PDV após formatar o computador ou adquirir uma máquina nova, será necessário também reinstalar a VPN. Esta instalação é realizada pela Innova — entre em contato com o suporte da Innova.

#### Processo de Manutenção

Quando for detectado um erro ou problema no TEF, o suporte da Alterdata tem a responsabilidade de entrar em contato com o suporte da Innova para solução.

---

### TEF Scope

Todo o processo de instalação é feito pela empresa do TEF, incluindo a configuração da VPN e o armazenamento das DLLs na pasta do Windows (`System32` ou `SysWow64`).

**Para configurar o TEF Scope no PDV:**
1. Localize o layout `AltTefDedicadoScope.all`.
2. Verifique se precisa marcar as opções:
   - **"Trabalha com crédito parcelado pelo estabelecimento"**
   - **"Controla modalidade (crédito / débito) pela forma de pagamento"**
3. Após a configuração do PDV, o sistema cria o arquivo `ALTTEFSCOPE.INI` no diretório `C:\Windows`.
4. Edite esse arquivo e inclua as informações: **código da loja**, **filial**, **número do terminal** e **Porta Pinpad**.

> **Observação:** Em caso de dúvidas sobre essas informações, verificar com o responsável pela instalação do TEF Scope.

> **Atenção:** Os demais dados do arquivo INI não serão alterados. As únicas alterações são as mencionadas acima.

Após as configurações do PDV e do arquivo INI, verifique se as DLLs estão na System e se a VPN está ativa.

> As informações contidas no arquivo `Scope.ini` devem ser passadas pelo suporte do TEF, pois são essenciais para o correto funcionamento.

---

## Tabela de Códigos e Mensagens

Tabela de códigos e mensagens apresentadas no PDV durante transações TEF:

| Código | Mensagem no PDV | Descrição |
|---|---|---|
| 00 | Transação OK | Aprovada, Transação executada |
| 03 | Estab. Inval | Estabelecimento Comercial inválido |
| 05 | Banco Emissor Negou | — |
| 06 | Refaça Trans | Erro |
| 12 | Trans. Inval. | Transação Inválida |
| 13 | Valor Inval. | Valor da Transação Inválido |
| 14 | Probl. Cartão | Cartão Inválido |
| 15 | Probl. Cartão | Instituição Não Cadastrada |
| 19 | Refaça Trans. | Refaça a Transação |
| 20 | Refaça Trans. | Resposta Inválida |
| 25 | Refaça Trans. | Registro não Encontrado |
| 30 | Refaça Trans. | Erro de Formato |
| 31 | Probl. Cartão | Instituição Não Pertence à Rede |
| 38 | Probl. Cartão | Excedido Número de Tentativas do PIN |
| 39 | Conta Inval. | Número da Conta Inválido |
| 41 | Probl. Cartão | Cartão Extraviado |
| 43 | Probl. Cartão | Cartão Roubado |
| 51 | Excede Limite | Saldo Insuficiente |
| 52 | Probl. Cartão | Conta-Corrente Não Cadastrada |
| 54 | Probl. Cartão | Não Autorizado – Cartão Vencido |
| 55 | Senha Inval. | Senha Incorreta |
| 56 | Probl. Cartão | Cartão Sem Registro |
| 57 | Probl. Cartão | Transação não permitida a esse cliente |
| 59 | Conta Inval. | Conta Irregular |
| 60 | Ligue cartão | Entrar em Contato com a Instituição |
| 61 | Excede Limite | Excedido Limite de Saque |
| 65 | Excede Limite | Excedido Frequência de Saque |
| 76 | Probl. Cartão | Cartão Bloqueado |
| 79 | Probl. Banco | Transação Não Permitida Neste Ciclo |
| 83 | Refaça Trans. | Time-out |
| 84 | Refaça Trans. | Log-On (Terminal não aberto) |
| 85 | Refaça Trans. | Problema Rede Local |
| 87 | Faltam Cartão | Cartão Obrigatório na Transação |
| 91 | Refaça Trans. | Instituição Temporariamente Fora de Operação |
| M7 | IPTE Inválido | Código IPTE Inválido |
| M9 | Refaça Trans. | Data Inválida |
| N0 | Refaça Trans. | MAC Inválido |
| N1 | Refaça Trans. | Dados Inválidos |
| N2 | Refaça Trans. | Código de Processamento Inválido |
| N3 | Trans. Canc. | Transação já Cancelada |
| N4 | Pag. Inval. | Empresa Credora Inválida |
| N5 | C.B. Inval. | Código de Barras Inválido |
| N9 | Refaça Trans. | NSU Repetido |
