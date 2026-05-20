# NF-easy — Envio de XML por e-mail — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações necessárias](#configurações-necessárias)
- [Resumo do fluxo](#resumo-do-fluxo)

---

## Introdução

Através do aplicativo **NF-easy**, após a autorização do documento (NF-e ou MDF-e), podemos configurar o envio automático de XML autorizado por e-mail ao cliente.

Dessa forma, quando o NF-easy receber o retorno da SEFAZ de um documento autorizado, será armazenado o DANFE e o XML em um diretório de envio de e-mail, que serão enviados automaticamente ao cliente.

---

## Configurações necessárias

### Tipo de contato

Acesse o **Configurador Bimer / Geral / Opções / Pessoa / Tipo de Contato** e preencha o campo **E-mail NF eletrônica**. Este tipo de contato será usado para o envio do e-mail do documento fiscal. Desse modo, é necessário que haja o tipo de contato vinculado ao cliente no módulo Pessoa e, naturalmente, um e-mail preenchido nele.

> *[Imagem: Tela de configuração do Tipo de Contato para E-mail NF eletrônica]*

Normalmente é usado o tipo de contato **EMAILNF**, porém, se a empresa desejar usar o tipo de contato de e-mail convencional do cliente para o envio do DF-e, é só indicá-lo aqui.

A marcação **"Permitir envio de NF-e para a SEFAZ, apenas para os destinatários que possuírem em seu cadastro o tipo de contato acima"** é usada para bloquear o envio da nota para a SEFAZ no módulo Faturamento, caso o cliente da nota não tenha o tipo de contato indicado no campo. Isso impede que a nota seja enviada e autorizada, assim é necessário vincular o tipo de contato no cliente para que este possa receber o e-mail com a nota.

### Pessoa

No cliente da nota, menu **Endereços**, no quadro **Contatos** adicione ou edite uma pessoa de contato na empresa. Insira o tipo de contato configurado nas opções gerais com e-mail preenchido.

> *[Imagem: Tela de cadastro de pessoa com contato de e-mail NF eletrônica]*

### NF-easy

Acesse o aplicativo **NF-easy** e na tela principal, clique em **Configuração Geral**.

Na aba **Geral** marque a opção **Habilitar envio de e-mail**. Duas novas abas surgirão: **E-mail** e **E-mail NF-e**.

> *[Imagem: Tela de Configuração Geral do NF-easy com opção "Habilitar envio de e-mail" marcada]*

Na aba **E-mail** defina as configurações do servidor de e-mail da empresa. Essas informações são de responsabilidade do setor de TI da empresa. O sistema dá uma "ajudinha" na opção **Provedor**: ao selecionar o Gmail, por exemplo, os dados deste provedor são preenchidos automaticamente.

Fique atento nos campos:

- **Informações de anexo:**
  - **Retorno SEFAZ:** Envia o arquivo de retorno da SEFAZ com a mensagem de autorização do documento. Não contém as informações completas do documento.
  - **Arquivo Assinado:** É o XML do documento autorizado. Utilizado por muitos clientes para fazer a importação da nota em seu próprio sistema.
  - **DANFE PDF:** É a nota em papel, você envia ao cliente a representação do documento que acompanha o caminho desde a saída da empresa até a chegada no destino final.

> **Dica:** Se você desejar enviar ao cliente o XML e PDF da nota, marque as opções **Arquivo Assinado** e **DANFE PDF**.

- **Informações de envio:** Marque **E-mail com cópia para o remetente** para que a cada envio ao destinatário, chegue também uma cópia para a empresa (conforme o e-mail configurado nesta tela).
- **Informação adicional para documentos autorizados:** Escreva uma mensagem que será enviada no corpo do e-mail.

Através desta tela podemos também testar o envio de e-mail clicando em **Enviar e-mail de teste**, assim teremos certeza que as configurações estão corretas e o recurso está funcionando. Após clicar neste botão teremos que apontar o destinatário e clicar em **OK** para confirmar o envio.

> *[Imagem: Tela de configuração de e-mail no NF-easy com campos de servidor SMTP e opções de anexo]*

Após realizar as configurações, esse mesmo teste é possível através da tela inicial do NF-easy, na aba **Testes de Comunicação**, em **Testar Envio de E-mail**.

> **Dica:** Não termine um atendimento com o cliente sem antes realizar os testes de envio de e-mail, pois se as configurações estiverem erradas, o cliente terá que entrar em contato no suporte novamente, causando insatisfação e uma demanda desnecessária. Isso vale para quem implanta e para quem presta atendimentos no suporte.

> **Se Liga!** Após essas configurações, as notas e os MDF-es que forem autorizados já serão enviados aos clientes por e-mail.

Continuando, na aba **E-mail NF-e** informe o diretório dos documentos autorizados (nota comum, nota cancelada e carta de correção).

> **Observação:** O NFEasy também faz o envio automático de MDF-e e eventos utilizando essas mesmas configurações, a partir da versão 4.38.

Clique em **Alterdata ERP** para preencher o diretório padrão do NF-Easy + `*.zip` (representa todos os arquivos compactados dentro das pastas, que é o modelo adotado quando a nota é autorizada). Ajuste de modo manual caso o diretório seja diferente.

Se nenhuma carta de correção ou cancelamento tiver sido autorizada ainda, o sistema informa que não existe o diretório para esses elementos, assim crie as pastas de modo manual para salvar as configurações.

> **Dúvida!** Se a aba **E-mail NF-e** não for configurada de modo certo, o que vai acontecer?
> Ao tentar enviar a nota por e-mail, na tela de logs, o NF-Easy informará que não conseguiu encontrar os arquivos, pois o diretório está incorreto.

A rotina de envio de e-mail pela tela de logs é utilizada quando é necessário reenviar a nota por e-mail.

Por fim, o NF-easy criará os diretórios de e-mail automaticamente:

- **Pasta Pendente:** Onde ficarão armazenados os XMLs e DANFEs pendentes de envio para os clientes por e-mail.
- **Pasta NãoEncontrados:** Onde ficarão os arquivos que não foram enviados por erro de digitação, inexistência ou algum outro empecilho no e-mail do destinatário.

---

## Resumo do fluxo

Em conclusão, o funcionamento da rotina é assim:

1. Escolha um tipo de contato para informar no configurador Bimer.
2. Vincule o tipo de contato na pessoa do documento, com o e-mail preenchido.
3. Configure as opções de envio de e-mail no NF-Easy, escolhendo quais arquivos serão enviados na autorização. Informe também os diretórios das notas autorizadas.
4. Após a autorização, o envio do e-mail é feito automaticamente pelo NF-Easy, para o e-mail configurado. E a empresa pode reenviar o documento manualmente pela tela de logs do NF-Easy.
