# Bimer Connect — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Fluxo de instalação](#fluxo-de-instalacao)
- [Ações do Instalador](#acoes-do-instalador)
- [Ações do Desinstalador](#acoes-do-desinstalador)
- [Possíveis Situações na](#possiveis-situacoes-na)
- [Instalação](#instalacao)
- [Exemplos de Possíveis](#exemplos-de-possiveis)
- [Falhas](#falhas)
- [Falha no Pré-pedido Web](#falha-no-pre-pedido-web)
  - [Bimer Connect não instalado](#bimer-connect-nao-instalado)
  - [Serviço do IIS parado](#servico-do-iis-parado)
  - [Falha no Serviço do IIS](#falha-no-servico-do-iis)
  - [Outras situações de suporte](#outras-situacoes-de-suporte)

---


## Introdução

O Bimer Connect é um componente essencial para uso de todos os recursos do sistema. A instalação se torna importante para ativar o funcionamento de recursos como a geração de DANFE e o calculo de impostos no pré-pedido do BimerUP. Esse componente deve ser instalado junto às versões específicas do Bimer (listadas abaixo). A Instalação do Bimer Connect está disponível nos instaladores do BimerUP e Bimer API a partir das respectivas versões abaixo: BimerUp - A partir da versão 11.00.07.00 Bimer API - A partir da versão 11.00.08.00


## Fluxo de instalação

Durante a instalação do BimerUp ou Bimer API, o Bimer Connect é um componente opcional, mas necessário para o funcionamento dos sistemas. O processo de instalação é silencioso. Ao final da instalação, é disponibilizada a URL indicando o caminho do Bimer Connect é registrada automaticamente no banco de dados, permitindo que qualquer aplicação que precise utilizar o Bimer Connect, encontre o componente por essa configuração. Exemplos práticos: • Cliente com 3 servidores rodando BimerUp: o cliente possui 3 servidores, com uma instalação do BimerUp em cada um, todos apontando para o mesmo banco de dados. Neste cenário, será necessário instalar o Bimer Connect em apenas um deles, pois as três instalações do BimerUp utilizarão a mesma instalação do Bimer Connect. • Cliente com BimerUp e Bimer API em servidores diferentes: o cliente possui 2 servidores, um com a instalação do BimerUp e o outro com a instalação da Bimer API, ambos apontando para o mesmo banco de dados. Neste cenário, será necessário instalar o Bimer Connect em apenas um deles, pois as duas instalações (BimerUp e Bimer API) utilizarão a mesma instalação do Bimer Connect. Após a instalação, não há necessidade de configurações adicionais no BimerUp ou na Bimer API, pois os recursos que dependem do Bimer Connect o localizarão automaticamente.


## Ações do Instalador

O instalador realiza as seguintes tarefas: • Habilita a extensão ISAPI no IIS nos recursos do Windows. optionalfeatures • Adiciona o arquivo BimerConnect.dll nas "Restrições ISAPI e CGI" do IIS: Nesse estágio, o instalador copia o arquivo ‘BimerConnect.dll’ para o diretório ‘C:\inetpub\wwwroot\BimerConnect_<nome da base>’ e o adiciona nas ‘Restrições ISAPI e CGI’ do IIS. Se, por algum motivo, essa etapa não for concluída corretamente, a instalação apresentará falhas e o IIS não conseguirá carregar a DLL, resultando em erro na execução dos serviços dependentes. • Cria um pool de aplicação exclusivo no IIS, com o nome padrão "BimerConnect_<nome da base>". • Cria um site no IIS com o nome "BimerConnect_<nome da base>" e a porta “3333” como padrão. Caso a porta 3333 já esteja em uso, o instalador identificará automaticamente a próxima porta disponível, como, por exemplo, 3334, para completar a instalação sem conflitos. • Registra a instalação no Painel de Controle > Programas e Recursos como "Bimer Connect (<nome da base>)". • Registra a URL do Bimer Connect no banco de dados, na tabela “Configuracao” no campo “URLBimerConnect.dll”. (SELECT * FROM Configuracao WHERE NmConfiguracao = 'URLBimerConnect.dll') • Arquivos gerados na instalação: Arquivo Local de destino BimerConnect.dll C:\inetpub\wwwroot\BimerConnect_<NOME DA BASE> connectionStrings.config C:\inetpub\wwwroot\BimerConnect_<NOME DA BASE> web.config C:\inetpub\wwwroot\BimerConnect_<NOME DA BASE> unins000.exe C:\inetpub\wwwroot\BimerConnect_<NOME DA BASE> unins000.dat C:\inetpub\wwwroot\BimerConnect_<NOME DA BASE>


## Ações do Desinstalador

O desinstalador executa as seguintes etapas: • Remove o BimerConnect.dll das "Restrições ISAPI e CGI" no IIS. • Exclui o site e o pool de aplicação no IIS. • Apaga os arquivos da pasta de instalação (C:\inetpub\wwwroot\ BimerConnect_<NOME DA BASE>). • Remove o registro da instalação no Painel de Controle > Programas e Recursos.


## Possíveis Situações na


## Instalação

• Atualização de uma instalação existente: Se já houver uma instalação do Bimer Connect para a base de dados correspondente, o instalador atualizará a versão existente, sem fazer uma nova instalação. • Alterações manuais na instalação: Se o nome do site ou a pasta de instalação for modificada pelo usuário, o instalador corrigirá automaticamente durante o processo de instalação/atualização. • Instalações em múltiplas bases de dados: Cada base de dados diferente exige uma instalação separada do Bimer Connect, mesmo que haja várias instalações do BimerUp ou Bimer API. Exemplo: Se o cliente tiver 3 instalações do BimerUp conectadas a 3 bases de dados diferentes, será necessário realizar 3 instalações separadas do Bimer Connect. Isso ocorre porque o Bimer Connect é instalado por base de dados, e não por instância do BimerUp ou Bimer API. • Instalações em servidores diferentes: Caso a instalação completa seja feita em dois servidores, a configuração mais recente prevalecerá, desativando a anterior. Exemplo: Se o cliente realizar a instalação completa do Bimer Connect no Servidor A e, posteriormente, repetir o processo no Servidor B, o sistema irá registrar a instalação mais recente no banco de dados. Nesse caso, a instalação do Servidor A será desativada, e o sistema passará a utilizar a instalação do Bimer Connect feita no Servidor B, já que ela foi a última configurada e gravada no banco de dados. • Alteração de porta: Se a porta do site for modificada após a instalação, o sistema atualizará automaticamente o caminho no banco de dados ao clicar no botão "Procurar <porta>(http)" no IIS.


## Exemplos de Possíveis


## Falhas


## Falha no Pré-pedido Web

Durante a criação de um pedido ou ao tentar realizar a impressão do DANFE, o sistema pode detectar a indisponibilidade do Bimer Connect. Quando isso ocorre, você verá uma mensagem de alerta indicando a inconsistência que impede o uso do sistema. A mensagem irá informar que o serviço Bimer Connect, responsável pelo cálculo de impostos e pela impressão do DANFE, está inacessível. Para resolver este problema, verifique se o serviço do Bimer Connect no IIS está Intalado, ativo e funcionando corretamente.


### Bimer Connect não instalado

Para resolver essa questão, execute o instalador do Bimer UP. Durante a instalação, certifique-se de selecionar a opção correspondente ao Bimer Connect. Isso garantirá que o componente necessário seja instalado corretamente.


### Serviço do IIS parado

Se o serviço do IIS (Serviço de Informações da Internet) associado ao Bimer Connect estiver interrompido, o Bimer Connect não funcionará corretamente. Para resolver essa questão, siga os passos abaixo: 1.Verificar o Status do Serviço IIS: • Acesse o Gerenciador de Serviços no Windows. • Localize o serviço “Bimer Connect”. • Verifique se o status está como "Em execução". 2.Iniciar o Serviço: • Se o serviço estiver parado, clique com o botão direito do mouse sobre ele e selecione “Iniciar”. • Aguarde alguns momentos para garantir que o serviço seja iniciado corretamente. 3.Reiniciar o Serviço (se necessário): • Caso o serviço já esteja em execução, pode ser útil reiniciá-lo para resolver possíveis falhas temporárias. • Clique com o botão direito do mouse e selecione “Reiniciar”.


### Falha no Serviço do IIS

Se as etapas anteriores não se aplicarem ou não resolverem a falha na comunicação, recomendamos realizar uma nova instalação do BimerUP e do serviço Bimer Connect. Certifique-se de seguir as recomendações e atender aos requisitos necessários durante a instalação. Você pode encontrar o manual “Bimer Up - Instalação e Configurações”, que é específico para a instalação do BimerUP, no portal da UCA na seção de manuais do Bimer. Acesse o link para a área de manuais: Portal UCA - Área de Manuais.


### Outras situações de suporte

1.Após a instalação ou atualização do BimerUp, ao tentar criar o primeiro pré- pedido, o sistema exibe a seguinte mensagem ao calcular os impostos: O problema ocorre porque o sistema foi instalado utilizando o usuário SA, mas a senha do usuárioSUPERVISOR (que é o usuário válido para o Bimer) é diferente da senha do SA. Quando o sistema tenta se conectar ao banco de dados, ele utiliza a senha do SA com o login do SUPERVISOR, resultando em erro de autenticação, já que o usuário SA não é aceito no Bimer. Para resolver o problema, temos duas alternativas: a)Alterar a senha do usuário no arquivo “connectionStrings.config” do Bimer Connect, atualizando-a para a senha correta do “SUPERVISOR” ou; b)Como uma segunda alternativa, pode-se alterar a senha do usuário “SUPERVISOR” para que fique igual à senha do “SA”. Além disso, as tarefas “FATWEB-1255” e “FATWEB-1289” foram abertas para ajustar o instalador e impedir o uso do usuário “SA” durante a instalação, prevenindo esse tipo de erro no futuro. 2. Outra situação que pode acontecer é, ao tentar acessar o site do Bimer Connect, uma mensagem de erro é exibida, impedindo o funcionamento do site. Foi identificado que o componente “rewrite_amd64_en-US.msi” não estava instalado no servidor, o que causava o erro. Esse problema foi corrigido na versão 11.01.00.00, que agora inclui automaticamente a instalação do recurso necessário, garantindo o funcionamento correto do site do Bimer Connect.
