# MDF-e — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [O que é MDF-e?](#o-que-é-mdf-e)
- [Diferença entre MDF-e x CT-e](#diferença-entre-mdf-e-x-ct-e)
- [Obrigatoriedade](#obrigatoriedade)
- [Configuração](#configuração)
- [Rotina](#rotina)
- [Campos no Lançamento](#campos-no-lançamento)
- [Outros recursos do FatMDFe](#outros-recursos-do-fatmdfe)
- [Help no Atendimento](#help-no-atendimento)

---

## Introdução

Este material tem como objetivo demonstrar a parte conceitual do MDF-e e como isto funciona no Bimer. Caso queira saber mais sobre o MDF-e poderá consultar a nota técnica da SEFAZ em: https://dfe-portal.svrs.rs.gov.br/Mdfe/Documentos

---

## O que é MDF-e?

O Projeto MDF-e tem como objetivo a implantação de um modelo nacional de documento fiscal eletrônico que venha substituir a sistemática atual de emissão do documento em papel, com validade jurídica garantida pela assinatura digital do emitente, simplificando as obrigações acessórias dos contribuintes e permitindo, ao mesmo tempo, o acompanhamento em tempo real das operações comerciais pelo Fisco.

O MDF-e deverá ser emitido:

- Pelo contribuinte emitente de CT-e
- Pelo contribuinte emitente de NF-e, no transporte de bens ou mercadorias realizados em veículos próprios ou arrendados, ou mediante contratação de transportador autônomo de cargas

A finalidade do MDF-e é agilizar o registro em lote de documentos fiscais em trânsito e identificar a unidade de carga utilizada e demais características do transporte.

Para acobertar o transporte, o **DAMDFE** (Documento Auxiliar do MDF-e) deve estar na posse do respectivo motorista desde o início da prestação do serviço de transporte. O Manifesto Eletrônico só pode ser emitido quando são conhecidos os Documentos Fiscais originários que serão transportados.

---

## Diferença entre MDF-e x CT-e

O **CT-e** deve ser emitido um para cada destinatário da mercadoria a ser transportada independente de qual UF ele está localizado. Já o **MDF-e** deve ser emitido um para cada UF de descarregamento da mercadoria. Um MDF-e pode conter diversos CT-e, desde que os destinatários sejam da mesma UF.

**Exemplo:** Uma transportadora localizada no RJ precisa realizar a entrega de mercadorias em 02 clientes em SP e 02 clientes em MG. Então ela deverá emitir 04 CT-e, um para cada cliente. Já os MDF-e deverão ser emitidos 02, um para SP e outro para MG, cada um contendo 02 CT-e.

Assim, se a transportadora for parada em uma barreira fiscal, pode-se verificar pelo MDF-e todos os CT-es vinculados ao documento, de maneira simples e rápida.

---

## Obrigatoriedade

O Ajuste SINIEF 21, de dezembro de 2010, definiu que cada estado (Secretaria da Fazenda) deveria definir as datas de obrigatoriedade da emissão, a partir de janeiro/2013.

Novo Ajuste SINIEF/2015 alterou algumas regras e determinou que a partir de **04/04/2016** a emissão do MDF-e será obrigatória para todos os contribuintes (regime normal e Simples Nacional).

### Empresas que devem/podem emitir

- Empresa que possuir veículo próprio para entrega, nas operações interestaduais.
- Empresa que utilizar transportador autônomo (motoboy, pessoa física/jurídica proprietária de veículo de carga e afins) nas operações interestaduais.
- Se o produto for entregue por empresa transportadora, é obrigação da empresa contratada emitir o MDF-e.

### O que deve estar contido no MDF-e

A empresa emissora do MDF-e gerará um arquivo eletrônico contendo as informações do **veículo de carga**, **condutor**, **previsão de itinerário**, **valor e peso da carga** e **documentos fiscais**.

---

## Fluxo de funcionamento do MDF-e

1. O MDF-e é cadastrado no **FatMDF-e**, carregando as notas fiscais eletrônicas emitidas no Faturamento.
2. É realizada a geração do XML pelo FatMDF-e para o envio à SEFAZ através do **NF-easy**.
3. Ao autorizar o MDF-e, o NF-easy disponibiliza os arquivos de retorno no diretório de recebimento e o FatMDFe compacta os arquivos, atualizando o status do MDF-e.
4. Caso tenha sido rejeitado, os campos do MDF-e ficam novamente habilitados possibilitando o acerto das informações e um novo envio. Quando o retorno é feito no MDF-e, é realizada a impressão automática do DAMDFE para acobertar o transporte.
5. O usuário ainda tem a possibilidade de registrar a saída efetiva do transporte no FatMDFe, para saber exatamente se o veículo já está ou não na empresa. Esse controle é interno do sistema e não gera informações para a SEFAZ.
6. Caso seja necessário realizar a troca do condutor do veículo durante o transporte, é necessário comunicar à SEFAZ a alteração. Para isso, deve ser criado um evento de inclusão de condutor no FatMDFe.
7. Um MDF-e somente pode ser cancelado após a sua autorização e enquanto o transporte ainda não tiver iniciado.
8. Ao finalizar um transporte, é necessário comunicar à SEFAZ o retorno do veículo que realizou o transporte. Para isso, é necessário criar um evento de encerramento.

---

## Configuração

### Cadastro de Empresas

No **Configurador Bimer > Gestal > Empresas**, na tela de edição da Empresa > aba **Cadastro > Geral**, há o campo **RNTRC** (Registro Nacional de Transportadores Rodoviários de Carga) do emitente, obrigatório junto à ANTT (Agência Nacional de Transportes Terrestres) para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.

Na aba **MDF-e** marque **"Possui dispensa de emissão de C.T.R.C a cada prestação e autorização para emissão global do documento"**, caso a empresa selecionada possua dispensa de emissão de Conhecimento de Transporte Rodoviário de Cargas (C.T.R.C.) a cada prestação e autorização para emissão global do documento. Desta forma o sistema permitirá que seja agrupado no MDF-e, NF-e de outras empresas cadastradas no sistema.

### Cadastro de Transportadoras

#### Transporte terceirizado

No módulo **Cadastro de Pessoas > transportadoras**, acesse a aba **Cadastros** e preencha:

- **Código RNTRC:** É de preenchimento obrigatório para o funcionamento correto, caso seja um Transportador Autônomo de Cargas.
- **Tipo proprietário:** De acordo com a Lei Nº 11.442, de 5/01/2007:
  - **TAC-agregado:** Transportador Autônomo de Carga com vínculo com uma transportadora.
  - **TAC-independente:** Possui veículo próprio e não tem vínculo com nenhuma transportadora.
  - **Outros:** Caso não se aplique às opções acima.
- **Tipo Transportador:**
  - **ETC** (Empresas de Transporte Rodoviário de Carga)
  - **TAC** (Transportador Autônomo de Cargas)
  - **CTC** (Cooperativa de Transporte Rodoviário de Cargas)

Ainda nesta aba, cadastre os veículos da empresa. Abaixo veja a explicação de alguns campos:

- **Tipo de rodado:**
  - **Truck:** Caminhão com três eixos na carroceria, capacidade de até 14 toneladas.
  - **Toco:** Caminhão com dois eixos na carroceria, com capacidade de até 6 toneladas.
  - **Cavalo mecânico:** Formado pela cabine, motor e rodas de tração do caminhão com eixo simples.
  - **VAN:** Furgão de transporte com bloco único.
  - **Utilitário:** Veículos sem carroceria, destinados a transporte de carga.
  - **Outros:** Aplicado a outros tipos de veículos.

- **Tipo de Carroceria:**
  - **Granelera:** Carroceria lonada que possui grandes grades. Ideal para transporte de cereais a granel.
  - **Porta Contêiner:** Serve para transportar contêineres.
  - **Sider:** Baú lonado, ideal para transporte de grandes quantidades de volumes, permite carga e descarga pelas laterais.

- **Tara:** É o peso do veículo sem sua carga.
- **Código Interno do veículo:** Apenas de controle da empresa.
- **Tipo de veículo:** Veículo de tração possui força própria; o reboque depende de um veículo de tração para se mover. É necessário cadastrar todos os veículos que vai usar, incluindo os reboques.
- **Status do veículo:** Apenas os **Ativos** podem ser usados.

#### Transporte próprio

Se a própria empresa transporta a mercadoria, cadastre-a como Transportadora no módulo Pessoa. Vá até a categoria relacionada, clique em **Novo > Lupa ao lado de Nome > Selecione a Empresa**. Após clique em **Gravar**.

> **Observação:** Não precisa informar o RNTRC pois essa informação é carregada a partir do cadastro da empresa. Não se esqueça de informar na aba Cadastros os veículos que a empresa possui.

### Tipo de documento

No **Configurador Bimer > Estoque > Tipo de Documento**, cadastre um específico para o controle de numeração da MDF-e. Esse tipo de documento deve possuir o **modelo 58** (MANIFESTO ELETRÔNICO DE DOC. FISCAIS) e na aba **Dados** deverá marcar **Gerar número sequencial** e informar os campos **Nr. Sequencial**, **Espécie** e **Série/Sub-série**.

> **Observação:** As demais abas não precisam ser informadas.

### Opções da MDF-e no Configurador Bimer

Acesse o **Configurador Bimer > Faturamento > Opções > MDF-e**, e defina as configurações para o módulo FatMDFe:

- **Tipo de documento padrão para MDF-e:** Vincule o tipo de documento cadastrado.
- **Informe o diretório raiz utilizado pelo sistema de transmissão da MDF-e:** Utilize o mesmo diretório raiz configurado no NF-easy, visto que a transmissão dos arquivos XML será realizada por ele. O ideal é inserir o diretório de rede, para que outras estações enviem documentos para um diretório comum.
- Se as pastas ainda não foram criadas, clique em **Criar diretórios automaticamente**, informe o diretório raiz e clique em **Ok**.

> **Atenção:** As opções referentes a diretórios raiz ficarão desabilitadas, caso o sistema esteja configurado para que o Faturamento / MDF-e sejam os aplicativos responsáveis pela comunicação com a SEFAZ, no **Configurador Bimer > Faturamento > Dados gerais > Comunicação com a SEFAZ**.

- **Impressoras:** Configure a impressora e a quantidade de impressões do DAMDFE (Documento Auxiliar do Manifesto Eletrônico de Documentos Fiscais), podendo também definir uma impressora para cada empresa cadastrada no Bimer.

### NF-easy

Para enviar o documento precisamos do **NFEasy** configurado em uma das máquinas da rede (na maioria dos casos o servidor).

O link para baixar encontra-se em: http://nfeasy.alterdata.com.br/instalador/

Após instalar, acesse a aba **Principal**, vá em **Configuração Geral > Aba Geral** e marque a opção **Habilitar recursos de MDF-e**.

Na aba ao lado, **DAMDFE**, selecione se o Documento Auxiliar do Manifesto Eletrônico de Documentos Fiscais será impresso em **Retrato** ou **Paisagem**.

Ainda no menu **Principal**, vá na **Empresa**, clique em **Editar**, selecione o **Certificado** e o **Tipo de certificado** (A1, A3 ou Token). Abaixo escolha o **Ambiente MDF-e** como **Homologação** (ambiente de testes) ou **Produção** (após finalizar o período de testes).

---

## Rotina

Para a emissão do MDF-e no Bimer é feita pelo módulo **FatMDFe**, que é responsável pela geração do XML, inclusão de eventos e pelos retornos da SEFAZ.

### Faturamento

Na nota de venda, na aba **Transportadora** é necessário selecionar a empresa que realiza o transporte. Após informar quem realiza o transporte, complete com:

- **Código da transportadora de redespacho:** Redespacho significa que a empresa transportadora contratou uma outra transportadora para dar continuidade até completar o trânsito da mercadoria.
- **Placa:** Abra o módulo Pessoa para consultar as placas vinculadas nos veículos e informe neste campo de forma manual.
- **UF:** Informe de acordo com o veículo cadastrado.

Após realize o **envio e Autorização** da nota. Se ela não estiver autorizada não aparece no módulo FatMDF-e.

### FatMDFe

Busque a nota do Faturamento pelo botão **Gerar MDF-e a partir de NF-e**.

> *[Imagem: Botão "Gerar MDF-e a partir de NF-e" no FatMDFe]*

Informe a **Empresa** que gerou a NF-e. Faça um filtro informando a **UF de Destino** do cliente da nota, o **Código da Transportadora** vinculada à nota.

> **Observação:** O filtro somente apresenta outras notas quando são da mesma UF de destino, assim você pode selecionar várias para gerar um único MDF-e. Notas de UFs diferentes deverão ser enviadas em MDF-es separados. Isso é um padrão da legislação.

Encontrou a nota? Selecione o quadradinho ao lado do número da nota e clique em **Gerar MDF-e**.

Na tela seguinte a nota é carregada e precisamos fazer o envio do documento. Clique em **Enviar**.

Se não houver pendência será enviada com sucesso. Se estiver faltando alguma informação obrigatória é aberta a tela **Atenção: Relação de Ocorrências**.

Se desejar guardar esse documento para ajustar futuramente clique no botão **Salvar**.

Para continuar a rotina, de acordo com ocorrências, preciso informar:

- **Condutor:** Na aba **Rodoviário > Condutores** informe pelo menos um motorista para o veículo. O sistema busca do módulo Pessoa na categoria de Terceiros. Você pode informar no máximo **10 condutores** de acordo com a legislação.
- **Unidade:** Selecione de acordo com o campo **Peso carga**, para dizer se é por Quilograma ou Tonelada.

Após a autorização do documento pela SEFAZ, o documento será impresso de acordo com a impressora apontada no Configurador Bimer.

A coluna **MDF-e** fica como **Autorizado** e a coluna **I** como **Impresso**. Com o documento assim, outros botões são habilitados:

- **Registrar Saída:** Serve para controlar internamente a data e hora que o veículo saiu da empresa. Ao clicar nesse botão não é feita nenhuma comunicação com a SEFAZ, mas a coluna **Dt. Saída** é preenchida.
- **Inclusão de Condutor:** Após a saída do veículo da empresa, caso precise de um segundo motorista para completar o transporte, clique em **Inclusão de Condutor** e insira o outro motorista para informar esse evento à SEFAZ.
- **Pagamento de transporte:** Inserir evento de pagamento de transporte.
- **DAMDFE:** Reimprimir o documento deste MDF-e no formato PDF.
- **Encerrar:** É a última etapa da rotina. Utilize somente quando o veículo finalizar o transporte das mercadorias. Será criado um XML e enviado à SEFAZ para comunicar a finalização do transporte.

> **Atenção:** Enquanto o MDF-e estiver autorizado e não encerrado, não é permitido criar um documento para o veículo. Isso quer dizer que o encerramento libera o veículo para um novo transporte. Se o usuário tentar fazer isso, no momento do envio podem ocorrer mensagens como:
> - **Código (55):** O veículo de tração deste MDF-e está relacionado ao MDF-e 99, criado pela empresa 00001, que ainda não foi encerrado.
> - **Código (59):** Existe MDF-e não encerrado há mais de 30 dias para o emitente.

Após autorização do encerramento pela SEFAZ, o **Status do evento de encerramento** muda para **Autorizado**; a coluna **Protocolo** é preenchida com o número de autorização; e a coluna **Dt. Encerramento** registra quando o documento foi encerrado.

---

## Campos no Lançamento

### Aba Dados

- **Carregamento:** Desabilitada para edição e somente é preenchida no carregamento das Notas Fiscais, ficando com a cidade de emissão das notas fiscais.
- **Descarregamento:** Preenchida ao carregar as NF-es e exibirá as cidades dos destinatários das notas fiscais. Também poderá adicionar manualmente uma NF-e, NFC-e ou CT-e.
- **Percurso:** Informe as UFs que serão percorridas sempre que existir pelo menos uma UF entre a UF de carregamento e a UF de descarregamento. A UF de percurso sempre deve estar na ordem do trajeto do motorista. Esse processo é chamado de **Registro de Passagem**.
- **Lacres:** Deve ser preenchida somente quando houver lacre inserido pelo responsável da carga.
- **Seguro:** Preenchida quando a mercadoria tem seguro e será transportada. Basta preencher o **Tipo de Responsável**, a **Seguradora** (cadastrada como Terceiro no módulo Pessoa), o **Número da apólice** e o número do documento do seguro (**Averbação**).

### Aba Rodoviário

- **Veículo de tração:** Dados do transportador proprietário do veículo de tração que realizará o transporte.
  - **Código de agendamento de porto:** Para que um veículo entre em determinado porto, é preciso realizar previamente um agendamento, para o qual será gerado um código.
- **CIOT:** É o Código Identificador da Operação de Transporte. Um número que identifica a operação de transporte (frete) a ser paga.
- **Reboques:** Caso use reboque, informe os dados do transportador proprietário do reboque.
- **Vale pedágio:** Quando houver o pagamento antecipado do pedágio, informe o número do comprovante de compra do vale pedágio, a empresa que forneceu e a empresa responsável pelo pagamento. Possui o campo **"Categoria de combinação veicular"** para adequar o sistema à nota técnica 2021.001.
- **Contratante:** Insira a pessoa que contratou o serviço de transporte (precisa cadastrá-lo como Terceiro pelo módulo Pessoa).
- **Lacres:** Informe os lacres inseridos pelo transportador.

#### Sub aba Produto predominante

A partir da versão 9.00.07.00 foi incluída a aba **Produto Predominante**, para atender a nota técnica 2020.001, que obriga que essa informação seja fornecida quando o modal é **Rodoviário** e o **Tipo do emitente** é igual a "prestador de serviço de transporte" ou "prestador de serviço de transporte que emitirá CT-e globalizado".

- Selecione o tipo da carga que está sendo transportada.
- Digite a descrição do produto que corresponde à maior parte da carga.
- Informe o código EAN e NCM desse produto.
- É necessário informar ainda o CEP, código de Latitude e Longitude, tanto do local de carregamento, quanto do local de descarregamento.

### Abas Observação do Contribuinte

O que é descrito nessa aba alimenta a **Tag infCpl** no XML, com o intuito de enviar observações ou dados complementares para os quais não temos um campo próprio de acordo com o layout do documento.

### Aba Observações do Fisco

O que o usuário preenche nessa tela será gerado no XML na **Tag infAdFisco**, preenchido caso o Fisco exija ou se a empresa quiser inserir algum tipo de informação específica para a fiscalização.

---

## Outros recursos do FatMDFe

### Botões no menu principal

- **Editar:** Edição de um MDF-e enquanto estiver com erro, aberto ou rejeitado.
- **Visualizar:** Permite abrir a tela de cadastro do MDF-e somente para visualização dos dados.
- **Excluir:** Apaga um MDF-e que ainda não tenha sido enviado (status aberto ou com erro).

### Cancelamento

Depois que você envia e autoriza o MDF-e, possui um prazo de **24 horas** para realizar o cancelamento. Para isso no menu **Principal** clique em **Cancelar** (o botão só vai habilitar para o documento autorizado).

Na próxima tela, informe a **Justificativa de cancelamento** e **Salve**. A coluna **Status do evento de cancelamento** muda para **Enviando**. Feito isso é só aguardar o retorno da SEFAZ.

### Vincular CT-e em um MDF-e

A partir da versão 8.01.02.00 podemos adicionar uma chave de acesso de documentos do modelo 57 (CT-e), além dos modelos 55 e 65 (NF-e e NFC-e, respectivamente).

Para isso clique em **Novo**, vá em **Dados > Descarregamento**, clique em **Adicionar**, informe a UF de descarregamento, chave de acesso e demais dados.

> **Observação 1:** O Bimer não emite CT-e. Isso quer dizer que no MDF-e apenas vinculamos a chave de acesso obtida pela autorização de um outro sistema.
>
> **Observação 2:** Caso seja incluído um documento do modelo 57, não será permitido incluir documentos do modelo 55 (NF-e) e 65 (NFC-e).

### Pagamento de Transporte

A partir da versão 9.00.09.00 o sistema conta com o recurso de **pagamento de transporte**, implantado em virtude da publicação da Nota Técnica 2020.001, que regulamenta a informação do pagamento do MDF-e com a criação do grupo de informações do pagamento do frete (**infPag**).

É possível inserir dados de Pagamento de Transporte em um MDF-e em dois momentos:

#### Inclusão de Pagamento de Transporte na Criação do MDF-e

Enquanto estiver criando a MDF-e, para informar pagamento de transporte, acesse a aba **Rodoviário** e vá até a sub aba **Pagamento do frete**. Clique no **"+"** para adicionar os dados.

#### Inclusão de Pagamento de Transporte como Evento

Se o emitente esqueceu de colocar os dados de pagamento ou houve um pagamento posterior à emissão, enquanto o MDF-e estiver aberto, selecione-o na grid e clique em **Pagamento de Transporte**.

#### Tela de Informações do Pagamento de Transporte

1. **Responsável pelo pagamento:** Informe a pessoa responsável pelo pagamento do transporte.
2. **Tipo de pagamento e Valor:** Selecione entre **A Vista** ou **Parcelado** o tipo do pagamento.
3. **CNPJ da IPEF:** A IPEF (Instituição de Pagamento Eletrônico de Frete) é equiparada a um "banco", onde o valor é creditado pelo responsável e debitado pelo transportador.
4. **Número do banco e agência:** Este campo só pode ser preenchido caso o CNPJ da IPEF não tenha sido informado.
5. **Chave pix:** A partir da versão 9.03.06.00 foi implementado o campo de chave pix para atender a nota técnica 2021.001-V1.01.
6. **Componentes do pagamento do frete:** Informe os componentes do valor do transporte, selecionando o tipo do componente (vale pedágio, impostos, taxas, etc) e seu respectivo valor.
7. **Informações do pagamento a prazo:** Insira as parcelas neste quadro caso o tipo de pagamento seja parcelado.
8. **Dados do evento de pagamento do frete:** Os campos deste quadro estarão habilitados para preenchimento somente quando os dados do pagamento forem enviados como evento.
   - **Quantidade de viagem:** Referente ao total de viagens realizadas com o pagamento do frete.
   - **Número da viagem:** Referente ao número da viagem do MDF-e referenciado.

---

## Help no Atendimento

### Consulta de MDF-e

O cliente entra em contato e diz que seu documento foi enviado para a SEFAZ, porém continua com o status de **enviando** e não autoriza. Para verificar:

1. Acesse o portal da MDF-e da SEFAZ do cliente. Na maioria dos casos é utilizado o portal da SEFAZ do Rio Grande do Sul disponível em: https://dfe-portal.svrs.rs.gov.br/MDFe/consulta
2. Copie a chave de acesso gerada no sistema e cole no respectivo campo.
3. Selecione o tipo de ambiente (Produção ou Homologação).
4. Clique em **Consulta**.

Se o documento existir, as informações serão exibidas na tela, e assim concluímos que é algum erro no retorno do documento para o sistema.

### Diretório de MDF-e

Dentro da pasta raiz do NFEasy é criada uma pasta para MDFe, onde ficam todos os documentos e eventos autorizados.

Dentro da Pasta **MDFe** temos as divisões:

- **Envio / EventoMDFe:** Armazena os eventos enviados para a SEFAZ até o retorno.
- **Envio / RecepcaoMDFe:** Armazena a MDF-e enviada para a SEFAZ até o retorno.
- **Recebimento / EventoMDFe:** Guarda o retorno do evento enviado anteriormente.
- **Recebimento / RecepcaoMDFe:** Guarda o retorno da MDF-e enviada antes.

### Tabela do Banco

No banco de dados temos as tabelas com o prefixo **"MDFe"** que guardam os dados deste módulo.

Uma das principais tabelas que usamos é a **Mdfe**, que guarda dados importantes como a chave de acesso, número do documento, status e número de protocolo. Caso queira ver mais detalhes use o comando:

```sql
select nrmdfe, cdchaveacesso, StMDFe, NrProtocolo, NrProtocoloEncerramento,
       StEncerramento, dtencerramento, *
from mdfe
```

Use por exemplo a informação da coluna **cdchaveacesso** para copiar facilmente a chave da nota para consultar.
