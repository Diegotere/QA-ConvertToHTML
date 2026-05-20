# Comunicação e Emissão de NF-e / MDF-e pelo Faturamento (FatMDF-e) — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Requisitos](#requisitos)
- [Fluxo](#fluxo)
- [Configurações](#configurações)
- [Remoção do NF-easy](#remoção-do-nf-easy)
- [Rotina até a versão 11.01.05.00](#rotina-até-a-versão-110105)
- [Rotina a partir da versão 11.01.06.00](#rotina-a-partir-da-versão-110106)
- [Informações Extras](#informações-extras)

---

## Introdução

A partir da versão **10.00.00.00** é possível emitir a NF-e diretamente pelo sistema Faturamento, sem utilizar o aplicativo NF-easy. A partir da versão **10.00.02.00**, o Emissor MDF-e também ganhou essa possibilidade.

Isso é feito utilizando os arquivos **DLLs do NF-easy** para a comunicação com a SEFAZ. Porém, agora, quem se comunica são os módulos **Faturamento** e **Emissor MDF-e**. Eles fazem o envio e retorno dos documentos fiscais na SEFAZ. Esse recurso vem com o objetivo de resolver alguns problemas que eram comuns no ambiente Nuvem, como a paralisação do NF-easy.

> **Atenção!** O envio por DLL permite a emissão em contingência a partir da versão **11.01.02.00**, tanto para NF-e quanto para MDF-e. Porém, é necessário estar marcado em **Configurador >> Empresa >> Emissão de nota >> NF-e**.

---

## Requisitos

- Versão **10.00.00.00** para envio pelo Faturamento, e **10.00.02.00** para envio pelo Emissor MDF-e;
- Versão do **Microsoft Net Framework** igual ou superior à versão **4.5.2**;
- Ter a **assinatura ativa do produto NF-easy** no CRM. Isso é necessário, pois os componentes do NF-easy, como as DLLs de comunicação, são consumidas pelo Bimer. O cliente precisa adquirir a licença do NF-easy.

---

## Fluxo

> *[Imagem: Fluxo de comunicação e emissão de NF-e/MDF-e pelo Faturamento]*

---

## Configurações

### Opções do Faturamento

Acesse **Configurador >> Faturamento >> Opções >> Dados Gerais >> Comunicação com a SEFAZ**.

O sistema possui a seguinte configuração: **"Aplicativo responsável para a comunicação e emissão de NF-e / MDF-e com a SEFAZ"**:

- **NF-easy** – mantém o processo de envio/recebimento da SEFAZ pelo sistema NF-easy;
- **Faturamento / Emissor MDF-e** – muda o sistema responsável pela emissão da NF-e/MDF-e com a SEFAZ.

> Ao acessar este caminho, o usuário notará que a configuração que aparece marcada é de acordo com o padrão de trabalho até o momento. Isso quer dizer que, se até a data atual a empresa trabalhava com o NF-easy, essa opção virá marcada, fornecendo a possibilidade de alteração.

Ao marcar a opção **Faturamento / Emissor MDF-e**, o sistema emitirá um alerta.

Após confirmar, no campo **"Diretório raiz de armazenamento dos XMLs de NF-e/MDF-e pelos aplicativos Faturamento e Emissor MDF-e"**, escolha uma pasta para armazenar os arquivos de envio. O recomendado é selecionar uma pasta compartilhada em rede (assim como fazemos com o NF-easy). Exemplo: `\\SERVIDOR\DadosDFe`.

Ao fazer o primeiro envio pelo Faturamento, no diretório raiz, é criada uma subpasta chamada **Backup**, que ficará subdividida por `Ano\Mês\Dia`.

Exemplo: `SERVIDOR\DadosDFe\backup\20XX\03\01`

Ao fazer o primeiro envio pelo Emissor MDF-e, no diretório raiz, é criada uma subpasta chamada **MDFe**, que ficará subdividida por `Ano\Mês\Dia`.

Exemplo: `SERVIDOR\DadosDFe\MDF-e\20XX\03\01`

### Cadastro de Empresas

É necessário armazenar no banco de dados um certificado digital, ou selecionar o certificado instalado no Windows, em **Configurador >> Geral >> Empresas >> Cadastro >> Certificado digital**.

> **Atenção!** Se o usuário optar pela seleção do certificado via Windows, somente as máquinas em que ele estiver instalado enviarão as NF-e / MDF-e para a SEFAZ. Já ao selecionar a opção armazenar o certificado digital no banco de dados, todas as máquinas enviam, sem ter uma como responsável igual era no NF-easy. Além disso, para esta rotina, o Bimer aceita somente o certificado do tipo **A1**.

Em **Configurador >> Geral >> Empresas >> Emissão de notas >> Dados Gerais** marque **Possui NF-e** e **Habilitar envio de e-mail**.

Ao marcar estas opções, as abas **Configurações DANFE (NF-e)** e **E-mail** são habilitadas.

Na aba **Configurações DANFE (NF-e)**, faça os ajustes necessários para a confecção da primeira impressão e da reimpressão do DANFE. Por exemplo, o tipo de desconto a ser impresso, posição da logo e formato do DANFE.

> O botão **"Replicar configurações para outras empresas"** envia para as outras empresas do seu sistema a mesma configuração realizada aqui.

#### Aba E-mail

Se a empresa tem o hábito de mandar a NF-e por e-mail para o cliente, é necessário configurar essa aba. Use a opção **Provedor** para facilitar e o sistema já preenche alguns campos, de acordo com o servidor de e-mail escolhido.

> **Atenção!** O envio ao destinatário ocorrerá se ele tiver um e-mail informado em seu cadastro (no Pessoa), assim como funciona no NF-easy.

#### Opcional: NF-Stock

Na aba **Emissão de notas >> NF-e** marque **"Enviar NF-e para o NF-Stock"** para que os documentos emitidos pelo Faturamento sejam enviados para o NF-Stock, que é um sistema de armazenamento via web de notas fiscais eletrônicas.

> Para que este envio aconteça, o cliente precisa ter a licença do sistema NF-Stock.

---

## Remoção do NF-easy

Feitas todas as configurações necessárias, é possível desinstalar o NF-easy, pois ele não será mais utilizado para o envio da NF-e. Assim, apenas os componentes do NF-easy permanecerão na máquina. Para isso, acesse **Painel de Controle >> Programas e Recursos >> Desinstalar ou Alterar um programa**.

---

## Rotina até a versão 11.01.05.00

Após obter a versão recomendável do Bimer, abra o módulo **Faturamento** ou **Emissor MDF-e**.

Após o login em um desses módulos, as DLLs do NF-easy são instaladas automaticamente na máquina. O mesmo ocorre na abertura do Bimer, Nota Fácil ou no instalador do sistema, pois é levado o instalador de dependências que faz a instalação de todas as DLLs necessárias.

O controle deste instalador é feito pelo Regedit, máquina a máquina em:

```
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\ALTERDATA\ERP\Faturamento
Registro: VersaoInstaladorDependencias
```

Para verificar se a sua máquina possui os requisitos para realizar a rotina, utilize o **Diagnóstico Bimer**.

Caso não tenha as DLLs necessárias na pasta `C:\Windows\Microsoft.NET\Framework64\v4.0.30319`, há duas opções:

1. Use a opção **Clique Aqui** para abrir o instalador do pacote Faturamento para instalar as DLLs e todos os módulos do Faturamento.
2. Abra o módulo Faturamento que ele faz todo o trabalho de instalação.

> O **Diagnóstico Bimer** também já demonstra se a versão do Net Framework está atualizada.

Após a instalação, é só continuar gerando sua NF-e ou MDF-e do mesmo modo que fazia antes: envio da nota, execução do retorno pelo faturamento ou pelo gerente eletrônico e atualizar o filtro do faturamento.

> **Atenção!** Qualquer ajuste no certificado, DANFE, e-mail e outras configurações de geração de nota precisam ser feitos no cadastro de empresa (conforme o caminho visto nas Configurações).

---

## Rotina a partir da versão 11.01.06.00

A partir da versão **11.01.06.00** temos algumas mudanças.

### Mudança de diretório das DLLs

Antes ficavam nas pastas:
- `C:\WINDOWS\MICROSOFT.NET\FRAMEWORK\V4.0.30319`
- `C:\WINDOWS\MICROSOFT.NET\FRAMEWORK64\V4.0.30319`

Agora ficarão no diretório:
- `C:\PROGRAMFILES(X86)\ALTERDATA\NFEASYDLL`

Com isso temos uma vantagem importante referente à permissão da pasta, pois as pastas do Windows têm permissões mais difíceis, pois são sensíveis ao próprio Windows.

### Mudança da chave no Regedit

Antes ficava no caminho:
```
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\ALTERDATA\ERP\Faturamento
Registro: VersaoInstaladorDependencias
```

Agora a chave fica no mesmo caminho, porém com outro registro:
```
HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\ALTERDATA\ERP\Faturamento
Registro: VersaoInstaladorDLLNFEasy
```

### Como instalar as DLLs

As opções disponíveis são:
- Instalar pelo **InstaladorBimerServidor**;
- Instalar pelo **InstaladorBimer**;
- Instalar pelo **Instalador de dependências**.

Ou rodar o módulo **Diagnóstico**, que ao clicar no botão executar, verificará que está sem as DLLs e apresentará um botão para instalá-las.

> O diagnóstico também verifica se a pasta das DLLs tem permissão de acesso e, caso não tenha, ele abre as propriedades da pasta para que o TI do cliente possa dar a permissão.

---

## Informações Extras

Ao marcarmos **Faturamento / Emissor MDF-e** como aplicativo responsável pela comunicação e emissão de NF-e / MDF-e com a SEFAZ, no banco de dados, na tabela `Configuracao`, na configuração `StNFeUtilizaDllNFEasy`, a coluna `VlConfiguracao` fica = 1.

Para consultar no banco de dados, use o comando:

```sql
Select * from configuracao where NmConfiguracao = 'StNFeUtilizaDllNFEasy'
```

> No primeiro momento a base modelo vem marcada como NF-easy. Sendo assim, ao rodar o comando não existirá a linha, pois ainda não foi configurado para emitir pelo Faturamento/Emissor MDF-e. Caso exista a linha e esteja na coluna `VlConfiguracao = 0` é porque está configurado para o NF-easy.

Se desejar pegar o XML ou DANFE das notas, não é mais pelas pastas do NF-easy, mas sim diretamente pelo módulo **Faturamento >> Aba Diversos >> Exportação de XMLs**. Deste modo, os dados da nota são resgatados do banco de dados para a geração dos arquivos.
