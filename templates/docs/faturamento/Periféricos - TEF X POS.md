# Periféricos — TEF X POS — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [TEF X POS](#tef-x-pos)
- [Configurações TEF PDV Alterdata](#configurações-tef-pdv-alterdata)
  - [PDV Alterdata](#pdv-alterdata)
  - [TEF Scope](#tef-scope)
  - [PINPAD](#pinpad)
  - [Alterdata Pay Tef](#alterdata-pay-tef)

---

## TEF X POS

Nas vendas em que o recebimento ocorre por meio digital — como cartão de débito ou crédito, entre outras — são utilizados equipamentos específicos que se comunicam com as administradoras para autorizar a transação. Existem dois tipos:

- **POS (Point of Sale):** é a máquina de cartão que normalmente se vê nos estabelecimentos comerciais. Permite que os clientes paguem suas compras usando cartões de crédito, débito ou outras formas eletrônicas diretamente no local de venda. Esse tipo de máquina **não fica interligada ao terminal do PDV**. Por isso, após a autorização do cartão, a venda precisa ser finalizada manualmente.

- **TEF (Transferência Eletrônica de Fundos):** é um sistema que conecta as máquinas de cartão aos bancos e às operadoras de cartão para autorizar e registrar as transações. O TEF é mais uma "infraestrutura" por trás do pagamento, lidando com a comunicação entre a máquina de cartão e os sistemas dos bancos ou das empresas de cartão de crédito. Com o TEF, as máquinas de cartão ficam **interligadas ao PDV**, e quando a transação é aprovada, a venda é finalizada automaticamente.

> **Resumindo:** o POS é a máquina de cartão em si, enquanto o TEF é o sistema que possibilita a comunicação entre essa máquina, os bancos e as operadoras de cartão para que a transação seja realizada.

---

## Configurações TEF PDV Alterdata

Antes de realizar a configuração do TEF, é necessário verificar qual é a sua modalidade:

- **TEF discado:** utiliza computadores e PinPads conectados à linha telefônica (internet discada).
- **TEF dedicado:** utiliza computadores e PinPads que se conectam por meio de conexões disponibilizadas pelas operadoras de telefonia.

Também é necessário analisar quais TEFs estão homologados com o sistema. Para isso, acesse **Novaintranet >> DSN >> Shop >> PDV Alterdata**.

> **Observação:** não consta na listagem, porém o **JUSTA Liber** também é homologado.

---

### PDV Alterdata

Para configurar o TEF no PDV Alterdata, acesse **Outras Funções >> Configurações >> TEF**.

Nessa tela, informe o layout do TEF armazenado no diretório: `C:\Program Files (x86)\Alterdata\PDV Alterdata\Lays`.

> **Observação:** as configurações abaixo somente são exibidas quando o cliente trabalha com **TEF Dedicado (SITEF)**. Os outros layouts não possuem configurações a serem preenchidas no PDV.

- **Endereço SiTef:** endereço do servidor (IP) onde está instalado o aplicativo SITEF, que é o gerenciador da aplicação TEF.
- **Código da empresa:** código fornecido pela empresa gerenciadora no momento da aquisição do TEF. É composto por 8 números. Se houver duas empresas que utilizem o equipamento sem visor, é necessário alterar esse código.
- **Número do Terminal:** número do terminal TEF, fornecido pela empresa gerenciadora. É composto por 8 números. Para empresas com somente um caixa, geralmente o número do terminal é `00000001`.
- **Porta PINPAD:** porta à qual o PINPAD está conectado. Os PINPADs geralmente são USB e emulam uma porta COM. Para verificar qual a porta correta, acesse o **Gerenciador de Dispositivos** do Windows e verifique as portas COM/LPT. A porta do TEF geralmente se inicia com a descrição **"PPC"** seguida do número da porta entre parênteses.

> *[Imagem: tela de configuração do TEF no PDV Alterdata com os campos Endereço SiTef, Código da empresa, Número do Terminal e Porta PINPAD]*

Após as configurações do TEF, realize os testes de comunicação em **Outras Funções >> Gerenciador TEF**.

O menu de comunicação com o TEF será exibido. Através dessa tela o usuário poderá:
- Testar a comunicação
- Reimprimir o comprovante
- Cancelar a transação
- Outras rotinas

Ao clicar em **Teste de comunicação**, o sistema fará a comunicação com o servidor do TEF.

> **Observação:** o servidor do SITEF fica em uma máquina na rede, permitindo que as demais façam a comunicação.

> *[Imagem: tela do Gerenciador TEF com as opções de comunicação disponíveis]*

---

### TEF Scope

Todo o processo de instalação é feito pela empresa do TEF, que realizará a configuração do VPN e o armazenamento das DLLs utilizadas na pasta do Windows (`System32` ou `Syswow64`).

Para configuração do TEF Scope no PDV, localize o layout **`AltTefDedicadoScope.all`**.

> *[Imagem: seleção do layout AltTefDedicadoScope.all na tela de configuração do TEF]*

Realizada a configuração do PDV com o layout **TEF Scope**, o sistema cria o arquivo **`ALTTEFSCOPE.INI`** armazenado no diretório `C:\Windows`. Edite esse arquivo incluindo as informações:
- Código da loja
- Filial
- Número do terminal
- Porta Pinpad

> **Observação:** em caso de dúvidas sobre essas informações, verifique com o responsável pela instalação do TEF Scope.

> **Atenção!** Os demais dados do arquivo INI **não serão alterados** — permanecerão da forma que foram criados. As únicas alterações são as mencionadas acima. Concluídas as configurações do PDV e do arquivo INI, verifique se as DLLs estão na `System32` e se o VPN está ativo. As informações contidas no arquivo `Scope.ini` devem ser fornecidas pelo suporte do TEF, pois são essenciais para o correto funcionamento.

> **Observação:** o layout **DEDICADO** será selecionado somente se o cliente utilizar o **TEF Dedicado SITEF** ou **Scope**. Caso seja de outras empresas como Pay&Go, Plug&Pay, Auttar (Get Net – Santander), Cappta ou Banese, o layout utilizado será o **DISCADO** com as configurações indicadas pela empresa gerenciadora do TEF.

---

### PINPAD

O PINPAD somente é utilizado nas aplicações TEF, dependendo de sua comunicação para efetuar as vendas. Alguns desses dispositivos possuem uma entrada USB e outra serial, conforme o modelo adquirido pelo cliente.

> **Observação:** o PIN PAD possui um software de comunicação instalado pela assistência técnica para fins de teste de comunicação, e seus drivers serão instalados nesse processo. É importante confirmar qual porta está conectada para que seja configurada corretamente no PDV Alterdata.

Em alguns casos será necessário realizar o download do driver do PINPAD diretamente do site do fabricante.

---

### Alterdata Pay Tef

O **TEF Justa** é um produto **Alterdata Pay**, desenvolvido pela empresa Justa e comercializado em parceria com a Alterdata. Outros sistemas da Alterdata, como Bimer e InterfaceNet, também trabalham com o Alterdata Pay.

#### Fluxo de Pré-Implantação

O cliente que usar o TEF Justa precisa ter adquirido um **Pin Pad**. O setor de vendas geralmente indica um Pin Pad para compra, mas não o comercializa — isso fica por conta do próprio cliente.

#### Instalação do Pin Pad

Essa instalação é de responsabilidade da empresa que comercializa o Pin Pad. Geralmente, o cliente apenas conecta o Pin Pad na máquina e ele já realiza a comunicação corretamente.

#### Fluxo de Implantação — Configurações no sistema

1. Nas **formas de pagamento** do tipo **"Cartão"**, marque a opção **"TEF"** e informe a **Administradora do Cartão** (Pessoa de categoria Convênio).
2. No **PDV**, pressione as teclas **`Shift + F11`** e acesse **"Configurações"**. Na aba **"TEF"**, aponte o layout: **Discado**.
