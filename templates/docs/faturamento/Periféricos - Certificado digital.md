# Periféricos — Certificado Digital — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Certificado Digital](#certificado-digital)
- [Instalação do certificado A1](#instalação-do-certificado-a1)
- [Vínculo do certificado no PDV Alterdata](#vínculo-do-certificado-no-pdv-alterdata)
- [Problemas na comunicação do certificado](#problemas-na-comunicação-do-certificado)
- [Instalação das cadeias dos certificados](#instalação-das-cadeias-dos-certificados)

---

## Certificado Digital

O certificado digital é um documento eletrônico, assinado digitalmente, que cumpre a função de associar uma pessoa ou entidade a uma chave pública, para emissão de documentos fiscais como NF-e, NFC-e e outros. Pode ser do tipo:

- **A1 (software):** armazenado em arquivo no computador.
- **A3 ou token:** armazenado em cartão ou pendrive físico.

> **Observação:** caso o cliente utilize o certificado A3 (cartão), é necessário que o driver do leitor seja instalado na máquina para que haja a correta comunicação. O processo de instalação é de responsabilidade do cliente.

---

## Instalação do certificado A1

Para o certificado A1, localize o arquivo disponibilizado pela certificadora, execute-o e avance na primeira tela.

Confirme o diretório e o nome do arquivo e clique em **Avançar**.

> *[Imagem: primeira tela do assistente de instalação do certificado A1]*

Na tela para preenchimento da senha, selecione a opção **"Marcar esta chave exportável"** para que seja possível realizar o backup posteriormente.

> *[Imagem: tela de senha com a opção "Marcar esta chave exportável" selecionada]*

Na tela de repositório do arquivo, deixe a opção **"Selecionar automaticamente o repositório de certificados conforme o tipo de certificado"** marcada e avance.

> *[Imagem: tela de seleção de repositório de certificados com opção automática marcada]*

Em seguida, o processo de instalação do certificado será concluído.

---

## Vínculo do certificado no PDV Alterdata

Caso o cliente emita NFC-e no PDV Alterdata, é necessário realizar o vínculo do certificado no sistema.

Na primeira abertura do PDV Alterdata, o sistema exibirá a tela de seleção do certificado digital.

> *[Imagem: tela de seleção do certificado digital na primeira abertura do PDV Alterdata]*

Caso já haja um certificado selecionado no PDV e deseje alterá-lo, acesse **Outras Funções >> Configurações >> NFC-e >> Alterar certificado digital**.

---

## Problemas na comunicação do certificado

Antes de orientar o cliente a entrar em contato com a certificadora, realize as seguintes verificações:

1. **Verifique o modelo do certificado:** A1, A3 ou token. Caso seja A3 ou token, oriente o cliente a retirar o certificado da máquina e em seguida conectá-lo novamente.
2. **Verifique a validade do certificado digital** acessando, no Windows: **Opções da Internet >> aba Conteúdo >> Certificados**. Havendo certificados vencidos, pergunte ao cliente se pode removê-los.

---

## Instalação das cadeias dos certificados

Em certas circunstâncias, é fundamental executar o processo de instalação das cadeias de certificados. Essas cadeias desempenham um papel crucial na autenticação de uma entidade, constituindo um conjunto de certificações que validam a identidade e estabelecem um caminho de confiança na certificação digital.

> **Importante!!** As cadeias de certificados podem ser encontradas nos seguintes sites:
> - [https://www.certisign.com.br/duvidas-suporte/downloads/hierarquias](https://www.certisign.com.br/duvidas-suporte/downloads/hierarquias)
> - [https://www.iti.gov.br/repositorio/cadeias-da-icp-brasil](https://www.iti.gov.br/repositorio/cadeias-da-icp-brasil)

> **Atenção!** Quando a empresa utiliza o certificado A3 em uma máquina que possua o **PDV Alterdata** e o **NF-easy** instalados, não será possível utilizá-los em ambos simultaneamente. Ao vincular o certificado ao PDV, este impossibilita o uso pelo NF-easy.
