# Retenção de tributos na prestação de serviços — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [O que é retenção de tributos?](#o-que-é-retenção-de-tributos)
- [Evento de baixa](#evento-de-baixa)
- [Retenção de ISS](#retenção-de-iss)
- [Retenção de tributos federais](#retenção-de-tributos-federais)
- [Resultado no faturamento](#resultado-no-faturamento)

---

## Introdução

É muito provável que você já tenha escutado o quão complexo é o nosso sistema tributário, e talvez até mesmo falado sobre isso. Existe uma diversidade de tributos, de competências da União, das UF ou dos Municípios.

Cada tributo tem a sua regra específica, e as empresas precisam se adequar a elas, para não correrem o risco de receber uma multa por estarem em desacordo com as obrigações.

Entre essas obrigações, pode estar a de retenção de tributos. E é sobre isso que vamos falar nas próximas páginas.

> **Atenção:** A retenção só ocorre quando a transação é feita entre Pessoas Jurídicas. Então, tudo o que vamos ver só vale se o cliente for Pessoa Jurídica.

---

## O que é retenção de tributos?

Quando a empresa presta algum serviço ela tem por obrigação calcular diversos tributos (ISS, PIS, COFINS, etc) de acordo com o que está previsto nas legislações.

Na maioria das vezes o valor desses tributos já está embutido no valor do serviço, ou seja, os tributos não alteram o valor final da nota. Veja o exemplo a seguir:

```
Valor do Serviço .............. R$ 1.500,00
ISS ............. 5,00% ........ R$    75,00
IRRF ............ 1,50% ........ R$    22,50
PIS ............. 0,65% ........ R$     9,75
COFINS .......... 3,00% ........ R$    45,00
CSLL ............ 1,00% ........ R$    15,00
Valor total da NFS-e .......... R$ 1.500,00
```

Nesse exemplo, ainda sem considerar a retenção, o valor que o cliente (tomador de serviço) pagará à empresa (prestadora de serviços) será R$ 1.500,00. E a empresa fica responsável por recolher (pagar) os tributos aos respectivos órgãos de arrecadação (Receita Federal e prefeituras) no prazo estabelecido na lei.

Acontece que em algumas circunstâncias a lei determina que o cliente tomador do serviço faça a retenção dos tributos no momento que pagar à prestadora de serviços.

Utilizando o mesmo exemplo acima, o tomador do serviço pagaria para a empresa apenas **R$ 1.332,75**. Ou seja, R$ 1.500,00 menos o valor retido de cada tributo. E além de reter, o tomador passa a ser o responsável por recolher o valor para os órgãos dependentes.

Observando os detalhes citados, podemos entender que o prestador de serviços precisa:

- Calcular os tributos corretamente na emissão da NFS-e;
- Estar consciente de que o valor que receberá será menor que o valor total da NFS-e;
- Informar para o setor financeiro o valor líquido a receber;
- Discriminar corretamente o valor de cada tributo, pois essa informação é importantíssima para a contabilidade.

> **Importante:** As regras que definem a retenção podem variar muito. Por isso, não vamos focar no embasamento legal. A pessoa responsável pela contabilidade da empresa é quem tem essa responsabilidade. Vamos apresentar apenas as regras gerais mais comuns.

---

## Evento de baixa

Como o nome da tabela sugere, ela é utilizada no processo de baixa dos títulos a receber. Sua função é detalhar e justificar na baixa a diferença entre o valor bruto do título (valor do serviço), e o valor líquido recebido (valor do serviço – retenções). Veja no exemplo:

```
Valor do Serviço .............. R$ 1.500,00
ISS ............. 5,00% ........ R$    75,00
IRRF ............ 1,50% ........ R$    22,50
PIS ............. 0,65% ........ R$     9,75
COFINS .......... 3,00% ........ R$    45,00
CSLL ............ 1,00% ........ R$    15,00
Valor líquido ................. R$ 1.332,75
```

Com os valores do exemplo, o cliente pagaria apenas R$ 1.332,75. Como o valor bruto é R$ 1.500,00, então na hora da baixa se apenas informamos o valor recebido, o sistema entenderia que a empresa deu um desconto para o cliente – ou ficaria como baixa parcial. Com o evento de baixa os valores das retenções serão demonstrados e justificará a diferença.

O cadastro da tabela de **Evento de Baixa** fica em **Configurador Bimer » Financeiro**. Sua utilização é obrigatória no processo de retenção, e precisará ser informada no cadastro da operação da NFS-e.

- Informe uma **Descrição** para o Evento, como por exemplo "ISS Retido".
- O campo **Natureza de lançamento** não é obrigatório, mas pode ser informado para melhorar a classificação do valor.
- Em **Tipo** marque a opção **Dedução**, porque o seu valor será diminuído do valor bruto.

---

## Retenção de ISS

Normalmente a retenção do ISS ocorre nas seguintes situações:

- Quando o serviço é prestado em município diferente da localização do prestador de serviços. Por exemplo, a sede do prestador do serviço fica no município de Teresópolis, porém o serviço foi realizado na Cidade do Rio de Janeiro; e
- Quando no município onde o serviço foi prestado há definição na legislação para a retenção. Se no município onde o serviço foi prestado não houver essa definição legal, mesmo sendo diferente da localidade do prestador do serviço, não haverá retenção.

> **Atenção:** Pode acontecer de algum município definir através de lei específica que o ISS sobre alguns tipos de serviços sejam retidos pelo tomador, mesmo o serviço seja prestado internamente, no próprio município.

### Cadastro da operação

No **cadastro da operação » Cálculo** a opção **"Calcula ISS"** ou **"Calcula ISS do destino"** precisa estar marcada. Afinal, para reter é preciso primeiro calcular.

- Se estiver marcada a opção **"Calcula ISS"**, marque na aba **ISS** a opção **"ISS Retido na fonte"**, além das demais configurações necessárias para o cálculo que podem variar.
- Se estiver marcada a opção **"Calcula ISS do destino"**, marque na aba **ISS Destino** a opção **"ISS do destino retido na fonte"**.

Ainda no cadastro da operação é necessário informar o **Evento de baixa para ISS**, na aba **Evento**.

> *[Imagem: Tela do cadastro da operação com as opções de ISS e ISS Retido na fonte marcadas]*

### Cálculo de ISS no Destino

O cálculo do ISS no destino ocorre quando o serviço for prestado em município diferente do endereço do prestador de serviços, e quando há legislação no município de destino prevendo essa obrigatoriedade.

Nesse caso, quem define a alíquota de ISS para o cálculo é o município de destino. Se, por exemplo, o prestador do serviço está no município de Teresópolis que tem uma alíquota de ISS de 3%, porém o serviço foi realizado na Cidade do Rio de Janeiro que tem uma alíquota de ISS de 5%, no cálculo do ISS deve ser utilizada a alíquota de 5% do Rio de Janeiro.

Além de configurar a operação, é necessário cadastrar uma tabela com a alíquota de cada município onde o prestador venha a realizar um serviço. Para isso, no **Configurador Bimer**, acesse **Estoque » Tributos » Cálculo de ISS**.

1. Clique em **"Novo"** para iniciar o cadastro;
2. Informe uma **Descrição**; se quiser pode incluir uma **Observação**;
3. Na área **"Cálculo de ISS por cidade"**, clique em **"Adicionar"**;
4. Na janela que se abrirá informe o código da **Cidade**, a **alíquota de ISS** nessa Cidade, e se ao realizar a integração fiscal o valor do ISS será enviado para a **Base** ou como **Isento**.

> **Dica:** Na mesma tabela de cálculo de ISS você pode incluir todas as cidades onde pode haver prestação de serviços. Não cadastre uma tabela para cada cidade.

Depois de criar a tabela é preciso vinculá-la ao **cadastro do Serviço**. Para isso, acesse o **Cadastro de produtos**, localize e edite o serviço desejado, e na aba **Impostos** informe a tabela de **Cálculo de ISS no destino**.

> *[Imagem: Tela do cadastro de produto com a aba Impostos e o campo Cálculo de ISS no destino]*

---

## Retenção de tributos federais

Tributos federais existem aos montes, mas nem todos estão enquadrados nas regras da retenção de impostos. Vamos falar dos mais comuns: as contribuições Sociais Retidas na Fonte (CSRF): **PIS**, **COFINS** e **CSLL**, e também do **Imposto de Renda** e do **INSS**.

As regras que definem se e quando um destes tributos deve ser retido variam, de acordo com a natureza da empresa e tipo de serviço. Na dúvida, consulte a pessoa responsável pela contabilidade da empresa.

Uma informação importante é o **valor mínimo para a retenção de PIS, COFINS e CSLL**:

- Até 21/06/2015: a retenção só aconteceria quando o valor dos serviços prestados no período fosse superior a **R$ 5.000,00** acumuladamente.
- Com a entrada em vigor da **LEI 13.137, artigo 24, em 22/06/2015**: a retenção fica dispensada quando o seu valor for igual ou inferior a **R$ 10,00**, exceto na hipótese de DARF eletrônico efetuado por meio do SIAFI.

Na Bimer há configuração para trabalhar nos dois cenários. A configuração fica em **Configurador Bimer » Faturamento » Opções » Dados Gerais » Parâmetros**, em **Retenção de Contribuições sobre Serviço**.

As duas configurações existentes trabalham de forma exclusiva:

- **Trabalha com retenção de contribuições sobre serviços acumulada mensalmente** – O sistema verificará se o total do pagamento do tomador do serviço, dentro do mês, ultrapassou o valor de R$ 5.000,00, e somente quando ultrapassar realizará as retenções;
- **Trabalha com retenção considerando o valor mínimo do DARF informado no Cadastro da Operação do documento** – O sistema verificará se o valor total do tributo a pagar (o valor do DARF) de um determinado documento ultrapassou o valor definido no cadastro da Operação para realizar a retenção.

> **Importante:** Para ambas as configurações o sistema dependerá de outras configurações para realizar as retenções. A retenção ocorre quando a operação ocorre entre Pessoas Jurídicas. E no caso específico do PIS, COFINS e CSLL em geral só acontece se o tomador do serviço não estiver configurado no regime do Simples Nacional no cadastro de pessoas.

### Retenção de PIS e COFINS

Para que a retenção de PIS e COFINS aconteça são necessárias configurações no **Cadastro de Pessoas**, **cadastro de produtos** e **Cadastro de operação**.

#### Cadastro do Cliente

O tomador do serviço precisa ser Pessoa Jurídica. Na aba **Adicionais** há duas configurações que influenciarão na retenção:

- **Retenção de tributos e contribuições** – Marque essa opção quando houver a obrigatoriedade de esse cliente reter os valores de PIS e COFINS.
- **Entidade de administração pública federal** – Marque essa opção caso o cliente tomador se enquadre nessa categoria. Marcando essa opção o sistema fará retenção, mesmo que a opção "Retenção de tributos e contribuições" esteja desmarcada.

#### Cadastro da Operação

No cadastro da operação que será utilizada na emissão da NFS-e, na aba **Cálculo** marque as opções **"Calcula PIS"** e **"Calcula COFINS"**. Ao marcá-las, será habilitada a aba secundária **"PIS/COFINS/CSLL"**, com abas chamadas **PIS** e **COFINS**.

- No campo **"Valor mínimo do DARF"** informe o valor mínimo definido pela Receita Federal para retenção de PIS, COFINS e CSLL.
- No campo **CST** selecione o Código de Situação tributária do tributo.
- O campo **"Al.:"** seguido de **%** é onde deve ser informada a alíquota de cálculo do tributo.
- O campo **"Al.:"** seguido de **$** só deve ser utilizado em situações em que em vez de alíquota usa-se um valor fixo.
- A prioridade para utilização de CST e alíquota do tributo é do **cadastro do produto**. Ou seja, por padrão, o sistema procura primeiro no cadastro de produtos e se não encontrar busca no cadastro da operação.
- Marque a opção **"Possui retenção de \<tributo\>"** para que o processo ocorra.
- Na aba **Evento**, informe os eventos para **PIS** e para **COFINS**.

> **Atenção:** As configurações na operação para retenção de PIS e de COFINS são iguais. Tudo que foi explicado sobre PIS vale também para COFINS, só que as configurações devem ser feitas em **Operação » Aba Cálculo » PIS/COFINS/CSLL » COFINS**.

#### Cadastro do Serviço

O Serviço é cadastrado no módulo **Cadastro de Produtos**. Acesse a aba **Impostos**.

- Marque as opções **"Calcula PIS"** e **"Calcula COFINS"**. Ao marcá-las, serão habilitados os campos para **Alíquota** e **CST**.
- Existem campos para **Alíquota em percentual** (a mais utilizada) e **Alíquota em valor**.
- A informação no cadastro de produtos tem prioridade em relação ao que for informado no cadastro da operação.
- Há campos distintos para **CST na entrada** e **CST na Saída**. Como estamos falando de retenção na emissão de NFS-e do serviço prestado, o foco está na **CST de Saída**.

> **Dica:** A informação das alíquotas e CSTs no cadastro de produtos é muito útil em empresas que tenham serviços distintos, e cada um com tributações específicas.

Quando há mais de uma empresa que emita NFS-e cadastrada no Bimer, é possível configurar PIS e COFINS por empresa no cadastro do Serviço. Acesse a aba **Empresa**, edite a empresa vinculada ao serviço, e acesse a aba **Tributos » Geral**.

Marque as opções **"Tributação Específica de PIS"** e **"Tributação Específica de COFINS"** e preencha as informações de Alíquota e CST. As configurações dessa tela terão prioridade em relação à aba impostos.

A ordem de prioridade é:

1. Relacionamento Produto x Empresa
2. Produto
3. Operação

### Retenção de CSLL

Não há diferenças no Cadastro do cliente tomador do serviço em relação ao que já vimos para PIS e COFINS.

#### Cadastro da operação

No cadastro da operação utilizada na emissão da NFS-e, acesse a aba **Cálculos**, e marque a opção **"Calcula CSLL"**.

Na aba **Cálculos » PIS/COFINS/CSLL » CSLL** marque a opção **"Possui retenção de CSLL"**. Não se esqueça de informar a **alíquota** para cálculo do tributo.

Na aba **Evento** informe o **Evento para CSLL**.

#### Cadastro do Serviço

No cadastro do serviço (produto) na aba **Impostos** existe a opção **Base de cálculo de CSLL**, que permite definir se os valores de PIS e de COFINS devem compor a base. Porém, ela não é obrigatória, pois dependerá do regime tributário que a empresa está enquadrada.

### Retenção de IRRF e INSS

No cadastro da operação utilizada para emissão da NFS-e, acesse a aba **Cálculos**, e marque as opções **"Calcula IRRF"** e **"Calcula INSS"**.

- Na aba **Cálculos » IRRF** informe a alíquota de cálculo;
- Na aba **Cálculos » INSS** informe a alíquota de cálculo.

Tanto na aba IRRF, quanto na aba INSS existem campos para se informar o **valor mínimo para retenção**. Consulte a contabilidade da empresa para verificar o valor mínimo de cada tributo.

Na aba **Evento** informe os **Eventos para IRRF e INSS**.

E no cadastro de pessoas deve estar marcada a opção para **retenção de tributos**.

---

## Resultado no faturamento

Depois de tudo configurado, é só gerar a NFS-e e verificar se calculou tudo certinho.

> *[Imagem: Tela do Faturamento com a NFS-e gerada, mostrando o Total da Nota de R$ 1.500,00, os valores de cada tributo e a aba Negociação com o valor líquido a receber]*

- No canto inferior direito da tela veja que o **Total da Nota** é R$ 1.500,00.
- Na última linha da informação dos tributos estão os valores de cada um.
- Na aba **Negociação**, observe que o valor negociado é o **valor líquido**, ou seja, diminuindo os valores que serão retidos.

> *[Imagem: Tela de Desmembramento do Valor do título gerado pela NFS-e, mostrando o título a receber com o valor bruto do serviço]*

> **Nota:** O título a receber é criado com o **valor bruto** do serviço. A diferença entre o valor bruto e o valor líquido recebido é justificada pelos eventos de baixa configurados.
