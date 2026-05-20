# Periféricos — Impressora Fiscal e Não Fiscal — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Impressora Fiscal](#impressora-fiscal)
  - [PDV não abre com erro de comunicação com o ECF](#pdv-não-abre-com-erro-de-comunicação-com-o-ecf)
- [Impressora Não Fiscal](#impressora-não-fiscal)
  - [Impressora não Imprime](#impressora-não-imprime)

---

## Impressora Fiscal

Atualmente a impressora fiscal está sendo utilizada por poucos clientes, porém é importante saber como resolver situações que ocorrem no suporte.

Caso haja dúvidas sobre as configurações iniciais para o PDV trabalhar com impressora fiscal, consulte o manual **PDV Alterdata – PAF/ECF**, no tópico **Impressora fiscal**.

Como a instalação varia conforme marca e modelo do ECF, siga as orientações do manual de instalação de cada fabricante.

---

### PDV não abre com erro de comunicação com o ECF

Quando o PDV não está comunicando com o ECF, realize os seguintes testes:

1. **Verifique a comunicação com o aplicativo de teste da impressora.** Realize a impressão de uma **Leitura X** para confirmar se a comunicação está ocorrendo. Veja alguns exemplos de aplicativos de teste que podem ser utilizados para cada impressora.

2. **Caso o teste não funcione**, verifique se na máquina existe a DLL da impressora na pasta `System32` ou `Syswow64`, ou se há DLLs em outras pastas que precisem ser removidas.

   Caso não haja a DLL na pasta correta, baixe-a no site do fabricante. Segue a relação dos sites por marca:

   | Marca | Site |
   |-------|------|
   | **Daruma** | [http://www.desenvolvedoresdaruma.com.br](http://www.desenvolvedoresdaruma.com.br/home/index.php) |
   | **Epson** | [https://epson.com.br/peps-drivers-apis-impressoras-fiscais](https://epson.com.br/peps-drivers-apis-impressoras-fiscais) |
   | **Bematech** | [https://www.bematech.com.br/manuais-e-drivers/](https://www.bematech.com.br/manuais-e-drivers/) |
   | **Elgin** | [https://www.elgin.com.br/institucional/produto.php?prod=NTU3&sessao=auto](https://www.elgin.com.br/institucional/produto.php?prod=NTU3&sessao=auto) |
   | **Sweda** | [https://sweda.com.br/acervo-tecnico](https://sweda.com.br/acervo-tecnico) |
   | **Urano** | [https://www.urano.com.br/softwares-drivers](https://www.urano.com.br/softwares-drivers) |

---

## Impressora Não Fiscal

Atualmente a maioria dos clientes utiliza impressora não fiscal para impressão de NFC-e, CF-e e MF-e.

---

### Impressora não Imprime

Caso o cliente informe que a impressora não está realizando a impressão, realize os seguintes procedimentos:

1. **Desligue a impressora**, desconecte os cabos e conecte novamente.

2. **Verifique se está configurada a impressora correta** no sistema.

3. **Verifique a porta de comunicação** no **Gerenciador de Dispositivos** do Windows, confirmando se a impressora está sendo exibida na área de USB.

   > **Observação:** algumas impressoras com entrada USB emulam a porta COM, permitindo que o usuário realize um teste no CMD através do comando `Mode com`.
   >
   > *[Imagem: resultado do comando "Mode com" no CMD exibindo as portas COM disponíveis]*

4. **Reinicie o spooler de impressão** em **Serviços do Windows**.

   > *[Imagem: tela de Serviços do Windows com o serviço "Spooler de Impressão" selecionado para reinicialização]*

5. **Verifique a fila de impressão** — se há arquivos travados ou algum com erro, pois podem estar interferindo no processo de impressão. Cancele os registros com problema.

   > *[Imagem: fila de impressão com arquivos travados ou com erro]*

6. **Reinstale o driver da impressora.**

7. **Faça a impressão de uma página de teste** em **Dispositivos e Impressoras** do Windows.
