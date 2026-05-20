# Bimer x Nuvem — Padronização para Servidor Nuvem — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Fluxo](#fluxo)
- [Primeiro passo: Versão](#primeiro-passo-versao)
- [Segundo passo:NF-e e MDF-e](#segundo-passonf-e-e-mdf-e)
- [Configurar o Envio de NF-e/MDF-e pelo](#configurar-o-envio-de-nf-emdf-e-pelo)
- [Faturamento](#faturamento)
  - [Ativar a funcionalidade:](#ativar-a-funcionalidade)
  - [Configurar o Certificado Digital:](#configurar-o-certificado-digital)
  - [Configurar Dados Gerais para Emissão](#configurar-dados-gerais-para-emissao)
  - [de Notas:](#de-notas)
  - [Configurar DANFE (NF-e):](#configurar-danfe-nf-e)
  - [Configurar E-mail (opcional):](#configurar-e-mail-opcional)
  - [Remoção do NF-easy (Importante):](#remocao-do-nf-easy-importante)
- [Configurar o Retorno de NF-e/MDF-e pelo](#configurar-o-retorno-de-nf-emdf-e-pelo)
- [Faturamento](#faturamento)
  - [Ativar o processamento de retornos](#ativar-o-processamento-de-retornos)
  - [pelo Faturamento:](#pelo-faturamento)
  - [Opções adicionais (opcional):](#opcoes-adicionais-opcional)
  - [Reiniciar o Faturamento:](#reiniciar-o-faturamento)
  - [Observações sobre o retorno:](#observacoes-sobre-o-retorno)
  - [Desativar a tarefa de retorno no](#desativar-a-tarefa-de-retorno-no)
  - [Gerente eletrônico:](#gerente-eletronico)
  - [Reiniciar o Gerente Eletrônico:](#reiniciar-o-gerente-eletronico)
- [Terceiro passo: NFS-e](#terceiro-passo-nfs-e)
- [ISS-easy como Serviços do Windows](#iss-easy-como-servicos-do-windows)
  - [Configurando o ISS-easy como serviço:](#configurando-o-iss-easy-como-servico)
  - [Configurar o Certificado Digital:](#configurar-o-certificado-digital)
- [Configurar o Retorno de NFS-e pelo](#configurar-o-retorno-de-nfs-e-pelo)
- [Faturamento](#faturamento)
  - [Ativar o processamento de retornos](#ativar-o-processamento-de-retornos)
  - [pelo Faturamento:](#pelo-faturamento)
  - [Reiniciar o Faturamento:](#reiniciar-o-faturamento)
  - [Observações sobre o retorno:](#observacoes-sobre-o-retorno)
  - [Desativar a tarefa de retorno no](#desativar-a-tarefa-de-retorno-no)
  - [Gerente eletrônico:](#gerente-eletronico)
  - [Reiniciar o Gerente Eletrônico:](#reiniciar-o-gerente-eletronico)
- [Quarto passo: Gerente Eletrônico](#quarto-passo-gerente-eletronico)
- [Gerente Eletrônico como Serviço do Windows](#gerente-eletronico-como-servico-do-windows)
- [Configurando o Gerente Eletrônico como](#configurando-o-gerente-eletronico-como)
- [serviço:](#servico)
  - [Criar um atalho com parâmetro de](#criar-um-atalho-com-parametro-de)
  - [configuração:](#configuracao)
  - [Modificar as propriedades do atalho:](#modificar-as-propriedades-do-atalho)
  - [Executar o atalho para configurar o](#executar-o-atalho-para-configurar-o)
  - [serviço:](#servico)
- [Quinto passo: Liberador de](#quinto-passo-liberador-de)
- [Estoque](#estoque)
- [Liberador de Estoque como Serviço do](#liberador-de-estoque-como-servico-do)
- [Windows](#windows)
- [Configurando o Liberador de Estoque como](#configurando-o-liberador-de-estoque-como)
- [serviço:](#servico)
  - [Criar um atalho com parâmetro de](#criar-um-atalho-com-parametro-de)
  - [configuração:](#configuracao)
  - [Configurar a conexão com a base de](#configurar-a-conexao-com-a-base-de)
  - [dados:](#dados)
  - [Tela de Configuração dos Serviços do](#tela-de-configuracao-dos-servicos-do)
  - [Liberador de Estoque:](#liberador-de-estoque)
- [Sexto passo: Usuário Agente](#sexto-passo-usuario-agente)
- [Verificar dependências de outros sistemas:](#verificar-dependencias-de-outros-sistemas)

---


## Introdução

Este manual oferece um guia prático e objetivo para a configuração do sistema Bimer em servidores na Nuvem Alterdata. Na próxima página apresenta o fluxo de configuração e validação necessário para o correto funcionamento de recursos nesse ambiente, visando, ao final do processo, desativar a dependência do usuário "agente" para a execução de sistemas. A aplicação precisa destas configurações que é fundamental para prevenir falhas e assegurar a execução dos serviços cruciais para a operação dos clientes que utilizam o sistema na nuvem. Ao seguir estas orientações, o Bimer poderá ser configurado de maneira otimizada para a Nuvem Alterdata, garantindo uma experiência de uso consistente e eficiente para os clientes, com o objetivo de minimizar a necessidade de um usuário "Agente" ativo.


## Fluxo

Utilize o recurso de zoom para ampliar e visualizar os detalhes do fluxo.


## Primeiro passo: Versão

O primeiro passo crucial para configurar o sistema Bimer no servidor Nuvem Alterdata éverificar a versão do sistema do cliente. A versão10.00.02.00 é um marco importante, pois contempla todos os recursos e funcionalidades necessários para aderir aos padrões de configuração otimizados para o ambiente Nuvem. Portanto, ao iniciar o processo de configuração, a primeira ação deve ser identificar a versão do Bimer instalada no ambiente do cliente. Caso a versão seja inferior a 10.00.02.00, será imprescindível orientar o cliente sobre a necessidade de realizar a atualização do sistema para a versão de trabalho recomendada. Esta atualização garantirá a disponibilidade de todos os recursos abordados neste manual e a compatibilidade com as configurações ideais para o servidor nuvem Alterdata, evitando potenciais incompatibilidades ou a ausência de funcionalidades essenciais.


## Segundo passo:NF-e e MDF-e

O segundo passo éidentificar se o cliente realiza a emissão de Notas Fiscais Eletrônicas (NF-e) e/ou Manifesto Eletrônico de Documentos Fiscais (MDF-e). ➔Se a resposta for SIM, ou seja, o cliente emite NF-e e/ou MDF-e, é fundamental prosseguir com as configurações de envio e retorno desses documentos diretamente pelo módulo Faturamento do Bimer, conforme vai acompanhar detalhado nesse tópico específico. ➔Se a resposta for NÃO, o cliente não trabalha com a emissão desses documentos, você poderá seguir para o próximo tópico deste manual, (Terceiro passo: NFS-e).


## Configurar o Envio de NF-e/MDF-e pelo


## Faturamento

➔Caso o cliente já utilize o envio de NF-e/MDF-e diretamente pelo Faturamento (via DLL), você pode seguir para o próximo assunto deste tópico, (Configurar o Retorno de NF-e/MDF-e pelo Faturamento ). ➔Entretanto, se o cliente ainda não utiliza o envio pelo Faturamento, acompanhe os próximos passos para realizar essa configuração. Com a integração via DLL (Dynamic Link Library), o próprio módulo Faturamento / Emissor de MDF-e do Bimer passa a ser responsável pela comunicação com a SEFAZ para o envio e recebimento das notas. Isso elimina a dependência do aplicativo NF- Easy para essas operações, embora a licença do NF-Easy ainda seja necessária, pois suas DLLs são utilizadas pelo Bimer. Como configurar o envio pelo Faturamento:


### Ativar a funcionalidade:

• Acesse o Bimer > Configurador. • Navegue até Faturamento > Opções > Dados Gerais > Comunicação com a SEFAZ. • Em "Aplicativo responsável para a comunicação e emissão de NF-e com a SEFAZ", marque a opção Faturamento / Emissor de MDF-e. • No campo "Diretório do armazenamento responsável para a comunicação dos XMLs no envio de notas pelo Faturamento e Emissor de MDF-e", selecione uma pasta para armazenar os arquivos de envio (XMLs). Recomenda-se uma pasta compartilhada na rede (exemplo: \\ SERVIDOR\DadosDFe) para facilitar o acesso e organização (será criada uma estrutura de pastas por Ano/Mês/Dia dentro desta pasta).


### Configurar o Certificado Digital:

• Acesse o Bimer Configurador. • Navegue até Geral > Empresas > Cadastro > Certificado digital. • Selecione o certificado digital da empresa (compatível com certificados digitais do tipo A1 - Arquivo). • O certificado será armazenado na base de dados e compartilhado com outras máquinas que emitem NF-e, não sendo necessário importá-lo em cada estação.


### Configurar Dados Gerais para Emissão


### de Notas:

• Acesse o Bimer > Configurador. • Navegue até Geral > Empresas > Emissão de notas > Dados gerais. • Marque a opção Possui NF-e. • Se o cliente desejar e/ou já utilizava no NFeasy, adicione o logotipo da empresa (formato JPEG) para ser impresso no DANFE. • Se o cliente desejar e/ou já utilizava no NFeasy o envio da nota por e-mail para o destinatário, marque a opção Habilitar envio de e-mail.


### Configurar DANFE (NF-e):

• Acesse o Bimer > Configurador. • Navegue atéGeral > Empresas > Emissão de notas > Configurações DANFE (NF-e). • Personalize as configurações de geração do DANFE (tipo de desconto, posição do logo, formato, etc.). • O botão Replicar configurações para outras empresas permite aplicar as mesmas configurações para outras empresas cadastradas no sistema.


### Configurar E-mail (opcional):

• Acesse o Bimer Configurador. • Navegue até Geral > Empresas > Emissão de notas > E-mail. • Configure os parâmetros para envio de e-mails. • Após configurar, é recomendado Enviar um e-mail de teste para verificar se as configurações estão corretas.


### Remoção do NF-easy (Importante):

Após concluir todas as configurações necessárias para o envio e retorno de NF-e/MDF-e diretamente pelo Faturamento, o aplicativo NF-easy não será mais utilizado para o envio desses documentos. Portanto, para otimizar o sistema, podemos proceder com a sua remoção. É importante ressaltar que apenas o aplicativo NF-easy será desinstalado, enquanto os componentes (DLLs) necessários para a comunicação via Faturamento permanecerão instalados na máquina. Para realizar a desinstalação, siga os seguintes passos: 1.Acesse o Painel de Controle do Windows. 2.Clique emProgramas e Recursos (ouDesinstalar um programa, dependendo da sua visualização do Painel de Controle). 3.Na lista de programas instalados, localize o NF-easy. 4.Clique com o botão direito sobre o NF-easy e selecione Desinstalar (ou Alterar/Remover e siga as instruções). Após a conclusão da desinstalação, o NF-easy não estará mais presente na lista de programas instalados.


## Configurar o Retorno de NF-e/MDF-e pelo


## Faturamento

➔Caso o cliente já utilize o Retorno de NF-e/MDF-e diretamente pelo Faturamento, você pode seguir para o próximo tópico, (Terceiro passo: NFS-e). ➔Entretanto, se o cliente ainda não utiliza o Retorno pelo Faturamento, acompanhe os próximos passos para realizar essa configuração.


### Ativar o processamento de retornos


### pelo Faturamento:

• Acesse o Bimer > Configurador. • Navegue até Faturamento > Opções > NF-e. • Marque a opção Os retornos de NF-e serão processados pelo sistema Faturamento.


### Opções adicionais (opcional):

• Gerar log para os processamentos do NFEasy: Se marcada, o Faturamento monitorará a pasta de arquivos assinados pelo NF-Easy e registrará no log ("000030 – Arquivo assinado pelo NFEasy") se um arquivo XML for encontrado para processamento. • Utilizar leitor de PDF interno: Se marcada, o DANFE será impresso utilizando o leitor de PDF padrão do Windows, ignorando as impressoras configuradas. • Intervalo para verificação do status do NF-Easy: Define o intervalo (em minutos) para que o Faturamento verifique o status das NF-e. O padrão é de 2 minutos. Essa verificação é feita diretamente no Faturamento através do recurso "Monitoramento do status do NFEasy".


### Reiniciar o Faturamento:

Após realizar as configurações, reinicie o módulo Faturamento em todas as máquinas onde ele estiver aberto para que as alterações tenham efeito.


### Observações sobre o retorno:

• Cada módulo Faturamento em execução é responsável por verificar o retorno das notas que foram emitidas pela própria máquina. • Se uma máquina não puder verificar o retorno (Faturamento fechado, sem conexão, máquina desligada, etc.), outra máquina com o Faturamento aberto assumirá a responsabilidade pela verificação daquele retorno.


### Desativar a tarefa de retorno no


### Gerente eletrônico:

Após concluir todas as configurações necessárias para o retorno diretamente pelo Faturamento, a tarefa do gerente eletrônico que realizava o retorno das notas não será mais utilizado. Portanto, para otimizar o sistema e essencial, proceder com a desativação.


### Reiniciar o Gerente Eletrônico:

> **Observação:** Importante após a desativação da tarefa (no Configurador > Geral > Tarefa) Fechar e abrir o gerente eletrônico ou reiniciar o serviço do gerente eletrônico para que a desativação da tarefa seja aplicada.


## Terceiro passo: NFS-e

O terceiro passo é identificar se o cliente realiza a emissão de Notas Fiscais de Serviço Eletrônicas (NFS-e). ➔Se a resposta for SIM, ou seja, o cliente emite NFS-e, é fundamental prosseguir configurando o ISS-easy como serviço, conforme vai acompanhar detalhado nesse tópico específico. ➔Se a resposta for NÃO, o cliente não trabalha com a emissão desses documentos, você poderá seguir para o próximo tópico deste manual, (Quarto passo: Gerente Eletrônico)


## ISS-easy como Serviços do Windows

O ISS-easy é o módulo do Bimer ERP responsável pela emissão de Notas Fiscais de Serviço Eletrônicas (NFS-e). Ao configurá-lo para funcionar como um serviço, a emissão e o envio das NFS-e ocorrem em segundo plano, sem a necessidade de manter o sistema ISS-easy aberto, evitando interrupções e garantindo a continuidade do processo.


### Configurando o ISS-easy como serviço:

• Acessar as opções: Abra o módulo ISS-EASY. Clique em Opções. • Alterar o modo de operação: Na aba Aplicação, localize a seção "Modo de operação". Marque a opção Serviço. • Gravar as configurações: Clique em Gravar. O sistema exibirá uma mensagem importante sobre a alteração para o modo de serviço. Leia atentamente e clique em Sim para confirmar.


### Configurar o Certificado Digital:

• Ao configurar o ISS-easy para o modo de serviço, o certificado digital utilizado para a emissão de NFS-e deverá ser armazenado no banco de dados. Isso ocorre porque, nesse modo de operação, não haverá mais um usuário do Windows ativa para armazenar e disponibilizar o certificado localmente. • O modo de serviço do ISS-EASY é compatível apenas com certificados digitais do tipo A1 (Arquivo). • Acesse o Bimer Configurador. • Navegue até Geral > Empresas > Cadastro > Certificado digital. • Selecione o certificado digital da empresa (compatível com certificados digitais do tipo A1 - Arquivo). • O certificado será armazenado na base de dados e compartilhado com outras máquinas que emitem NF-e, não sendo necessário importá-lo em cada estação.


## Configurar o Retorno de NFS-e pelo


## Faturamento

➔Caso o cliente já utilize o Retorno de NFS-e diretamente pelo Faturamento, você pode seguir para o próximo tópico, (Quarto passo: Gerente Eletrônico). ➔Entretanto, se o cliente ainda não utiliza o Retorno pelo Faturamento, acompanhe os próximos passos para realizar essa configuração.


### Ativar o processamento de retornos


### pelo Faturamento:

•Acesse o Bimer > Configurador; •Navegue até a aba "Faturamento"; •Clique em "Opções". •Localize a seção "NFS-e". •Informe o diretório onde se encontra o executável do ISS-easy. •Marque a opção "Os retornos de NFS-e serão processados pelo módulo Faturamento".


### Reiniciar o Faturamento:

Após realizar as configurações, reinicie o módulo Faturamento em todas as máquinas onde ele estiver aberto para que as alterações tenham efeito.


### Observações sobre o retorno:

• Cada módulo Faturamento em execução é responsável por verificar o retorno das notas que foram emitidas pela própria máquina. • Se uma máquina não puder verificar o retorno (Faturamento fechado, sem conexão, máquina desligada, etc.), outra máquina com o Faturamento aberto assumirá a responsabilidade pela verificação daquele retorno.


### Desativar a tarefa de retorno no


### Gerente eletrônico:

Após concluir todas as configurações necessárias para o retorno diretamente pelo Faturamento, a tarefa do gerente eletrônico que realizava o retorno das notas não será mais utilizado. Portanto, para otimizar o sistema e essencial, proceder com a desativação.


### Reiniciar o Gerente Eletrônico:

> **Observação:** Importante após a desativação da tarefa (no Configurador > Geral > Tarefa) Fechar e abrir o gerente eletrônico ou reiniciar o serviço do gerente eletrônico para que a desativação da tarefa seja aplicada.


## Quarto passo: Gerente Eletrônico

O quarto passo éidentificar se o cliente utiliza o Gerente Eletrônico e se está configurado como serviço. ➔Se o Cliente Não utiliza o Gerente Eletrônico OU Utiliza mas já está configurado como serviço, você poderá seguir para o próximo tópico deste manual, (Quinto passo: Liberador de Estoque). ➔Se o cliente, sim, utiliza o Gerente Eletrônico e não está configurado como Serviço, é fundamental prosseguir com as configurações, conforme vai acompanhar detalhado nesse tópico específico.


## Gerente Eletrônico como Serviço do Windows

O Gerente Eletrônico (GeAgente) é uma ferramenta do Bimer ERP que executa diversas tarefas automatizadas em segundo plano. Ao configurá-lo como um serviço do Windows, ele roda continuamente sem a necessidade de manter o aplicativo aberto, proporcionando maior estabilidade e confiabilidade para as rotinas automatizadas. *Antes de configurar o Gerente Eletrônico como serviço para o cliente, é essencial verificar se ele utiliza alguma das seguintes tarefas:

- GEImprimeBoleto
• GEImprimeNFOE • GEVerificaRetornoISSEasy • GEVerificaRetornoNFe. Atenção!!! A partir da versão 11.02.03.07 a tarefaGEimprimeBoleto funciona normalmente pelo GeAgente configurado como serviço. Sendo assim, desconsidere ela nos diagramas abaixo, caso a versão for igual ou superior. Atualmente, essas tarefas não são executadas se o Gerente Eletrônico estiver configurado como serviço. Sendo assim, siga as instruções abaixo: Cliente utiliza as tarefas? ➔Sim: Se o cliente utiliza alguma dessas tarefas, é necessário verificar se a tarefa ainda é realmente utilizada. ➔Não: Se o cliente não utiliza nenhuma dessas tarefas, o procedimento é configurar o GeAgente como serviço. Siga as instruções abaixo detalhadas. Verificar se a tarefa ainda é utilizada (caso a resposta anterior seja "Sim"): ➔Sim: Se a tarefa ainda é utilizada pelo cliente, a orientação é manter o GeAgente configurado como uma aplicação (não como serviço). Além disso, é importante abrir um processo de melhoria para que essa tarefa específica funcione também quando o GeAgente estiver configurado como serviço, visando futuras otimizações. ➔Não: Se a tarefa não é mais utilizada pelo cliente, o procedimento é inativar a tarefa e configurar o GeAgente como serviço. Siga as instruções detalhadas abaixo.


## Configurando o Gerente Eletrônico como


## serviço:


### Criar um atalho com parâmetro de


### configuração:

• Navegue até a pasta onde o executável do Gerente Eletrônico (GeAgente.exe) está localizado (geralmente emC:\Program Files\ Alterdata\ERP). • Clique com o botão direito do mouse sobre o arquivo GeAgente.exe. • Selecione Enviar para > Área de trabalho (criar atalho).


### Modificar as propriedades do atalho:

• Na área de trabalho, clique com o botão direito do mouse sobre o atalho criado. • Selecione Propriedades. • No campo Destino, ao final do texto existente, adicione um espaço e digite /config. O campo Destino deverá ficar semelhante a: "C:\Program Files\Alterdata\ERP\GeAgente.exe" /config. • Clique em OK.


### Executar o atalho para configurar o


### serviço:

• Dê um duplo clique no atalho modificado na área de trabalho. • Será aberta uma tela de configuração para informar os dados de conexão com a base de dados do Bimer. • Preencha os campos com as informações corretas da base de dados. • Após inserir os dados e salvar, o serviço do Gerente Eletrônico será automaticamente instalado e iniciado nos Serviços do Windows. O nome do serviço será "Alterdata GeAgente (NomeDaBaseDeDados)". Agora o Gerente Eletrônico estará rodando como um serviço em segundo plano.


## Quinto passo: Liberador de


## Estoque

O Quinto passo é verificar se o Liberador de Estoque já está configurado para rodar como um serviço do Windows no ambiente do cliente. ➔Sim: Se o Liberador de Estoque já estiver configurado como serviço, não é necessário realizar nenhuma ação adicional neste momento. O fluxo segue para o próximo tópico (Sexto passo: Usuário Agente). ➔Não: Se o Liberador de Estoque ainda não estiver configurado como serviço, é necessário realizar a configuração. Siga as instruções detalhadas abaixo para configurar o Liberador de Estoque para rodar como um serviço do Windows.


## Liberador de Estoque como Serviço do


## Windows

O Liberador de Estoque é responsável por liberar automaticamente documentos de estoque (notas de compra, venda, entre outros.) no Bimer. Ao configurá-lo como um serviço do Windows (a partir da versão 9.03.04.00), ele opera de forma contínua e segura, sem a necessidade de manter o aplicativo LiberadorEstoque.exe aberto. A configuração e gerenciamento do serviço são feitos através de uma tela específica.


## Configurando o Liberador de Estoque como


## serviço:


### Criar um atalho com parâmetro de


### configuração:

• Navegue até o caminho C:\Program Files\Alterdata\ERP. • Localize o atalho do Liberador de estoque (se existir). Caso não exista, localize o executável LiberadorEstoque.exe, clique com o botão direito e selecione Enviar para > Área de trabalho (criar atalho). • Na área de trabalho, clique com o botão direito no atalho criado e selecione Propriedades. • No campo Destino, informe o texto: "C:\Program Files\Alterdata\ERP\ LiberadorEstoque.exe" /config. Certifique-se de haver um espaço antes da /. • Execute o atalho para abrir a tela de configurações.


### Configurar a conexão com a base de


### dados:

• Na tela de configurações que será aberta, preencha os campos com os dados de conexão da base de dados do Bimer. • Clique em Gravar. • Verificar o serviço: Ao gravar, o serviço será instalado e iniciado automaticamente nos Serviços do Windows. O nome do serviço será "Alterdata Liberador do Estoque (NomeDaBasedeDados)".


### Tela de Configuração dos Serviços do


### Liberador de Estoque:

• Para acessar a tela de configuração após a criação inicial do serviço, execute o atalho do Liberador de Estoque presente na área de trabalho (sem o parâmetro /config). • Nessa tela, é possível iniciar ou parar o serviço instalado para a base de dados exibida. • Para adicionar o serviço a uma nova base de dados, clique no botão de adição (+), insira os dados da nova base e grave. • Para remover o serviço instalado em uma base de dados, clique no botão de remoção (-), selecione a base desejada e confirme. • A aba Logs exibirá informações sobre a execução do serviço, incluindo erros e o status de conexão com a base de dados. Bases com versões diferentes podem apresentar o status "Desatualizado". Observação: Os logs de liberação de documentos continuarão sendo acessíveis noConfigurador do Bimer > Geral > Ferramentas > Manutenção de Lotes do estoque.


## Sexto passo: Usuário Agente

O sexto passo é o procedimento final de verificação do fluxo.


## Verificar dependências de outros sistemas:

• O último passo é verificar se existe algum outro sistema que ainda dependa da execução de tarefas pelo usuário "agente". ➔Não: Se não houver mais nenhum sistema que dependa do usuário "agente", o procedimento é abrir um atendimento com o número "000029" e delegá-lo para a supervisão imediata. Após essa ação, o processo de configuração no servidor do cliente estará finalizado. ➔Sim: Se ainda existir algum sistema que dependa do usuário "agente", o procedimento é acionar a supervisão para que seja validada a necessidade de manter o usuário "agente" ativo para essas outras dependências. Após a validação e as devidas tratativas, o processo de configuração no servidor do cliente estará finalizado. Em resumo, para garantir a configuração ideal do Bimer no servidor nuvem Alterdata, você deve seguir meticulosamente cada etapa deste manual, desde a verificação da versão do sistema até a configuração dos serviços e do envio/retorno de notas fiscais. A completa execução deste passo a passo padronizado é crucial para assegurar o funcionamento otimizado do sistema, prevenindo falhas e garantindo uma experiência consistente para o cliente; ao final, é essencial verificar se outros sistemas dependem do usuário "agente", acionando a supervisão em caso positivo para validar a necessidade de sua manutenção, concluindo assim o processo de configuração de forma eficaz.
