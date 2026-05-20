# Cálculo Automático de Valor de Frete na Venda — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [Configurações e Cadastros Necessários](#configurações-e-cadastros-necessários)
  - [Habilitar Cálculo de Frete no Pedido de Venda](#habilitar-cálculo-de-frete-no-pedido-de-venda)
  - [Habilitar Cálculo de Frete no Pré-pedido](#habilitar-cálculo-de-frete-no-pré-pedido)
  - [Cadastro de Regiões](#cadastro-de-regiões)
  - [Empresas](#empresas)
  - [Tipo de Cálculo do Frete](#tipo-de-cálculo-do-frete)
  - [Tipo de Frete](#tipo-de-frete)
  - [Cadastro de Pessoas](#cadastro-de-pessoas)
  - [Região por Pessoa](#região-por-pessoa)
- [Utilização e Demonstração da Rotina](#utilização-e-demonstração-da-rotina)
- [Dicas](#dicas)

---

## Introdução

Em uma empresa, o frete é um dos pontos da venda que merece muita atenção. Afinal, caso não tenha uma forma eficiente de cálculo, a empresa pode reduzir sua margem de lucro, caso ofereça frete grátis ou arque com o transporte; ou assustar o cliente com uma cobrança de frete fora do comum.

O recurso de **cálculo automático de frete** foi criado para possibilitar a apuração do valor do transporte por regiões, seja de um município, estado ou até mesmo do país! O sistema realiza uma espécie de vínculo dos dados do endereço do cliente com as regiões cadastradas no Bimer. Sendo assim, o usuário pode definir o frete por região e o sistema atribui o valor automaticamente.

Atualmente o sistema permite calcular o frete a partir de:
- **Peso (Kg)**
- **Alíquota** (a ser aplicada conforme valor da venda)
- **Valor Fixo**

> **Importante:** Para cálculo do frete no **Faturamento** não há configuração específica, como para o FatPrePedido e FatPedido. Sendo necessário apenas realizar as demais configurações.

---

## Configurações e Cadastros Necessários

### Habilitar Cálculo de Frete no Pedido de Venda

Caminho: **Configurador > aba Faturamento > Opções > Aba Pedido de Venda > aba Padrões**

Marque a opção **Calcula frete**.

> *[Imagem: tela do Configurador com a opção "Calcula frete" marcada no módulo Pedido de Venda]*

### Habilitar Cálculo de Frete no Pré-pedido

Caminho: **Configurador do FatPDV > Opções > aba Pré-Pedido / Pedido de Venda > aba Padrões**

Marque a opção **Calcula frete**.

> *[Imagem: tela do Configurador FatPDV com a opção "Calcula frete" marcada e o botão de ajuda "?" ao lado]*

> **Nota:** Ao lado da opção, há um tópico de ajuda. Ao clicar no **"?"**, o sistema exibe uma explicação sobre o que ocorre ao marcar a opção.

---

### Cadastro de Regiões

Caminho: **Configurador > Geral > Endereço > Regiões > Novo**

No cadastro, informe um **Nome** sugestivo para a região, para que possamos identificar posteriormente.

#### Localidades

No quadro **Localidades**, clique no botão **+** para adicionar.

Aqui você pode adicionar as localidades pertencentes a esta região. É possível utilizar exemplos mais abrangentes como **Região Sudeste** (contendo os estados de MG, RJ, SP e ES) ou regiões mais específicas como **Zona Rural de Teresópolis** (contendo os bairros desta zona).

Na tela de inclusão da localidade, preencha os campos de **UF**, **Cidade** e **Bairro**.

> *[Imagem: exemplos de localidades com dados genéricos (Região Sudeste) e dados específicos (Zona Rural de Teresópolis)]*

Caso deseje, marque a opção **Frete por localidade** para tarifação de frete específica por bairro, UF ou cidade.

#### Frete por localidade da região

A opção **Frete por localidade** deve ser marcada quando há um valor de frete específico para cada localidade dentro de uma região.

**Exemplo:**
- Entrega por motoboy: o valor pode variar de um bairro para outro dentro de uma mesma região → marque **Frete por localidade**.
- Transportadora com valor fixo para todos os bairros da região → informe o valor do frete por empresa (sem marcar a opção).

---

### Empresas

Ainda na tela de cadastro da região, localize o quadro **Empresa** na parte inferior da janela. Caso o valor do frete seja o mesmo para todos os bairros, cidades ou estados informados no quadro Localidades, insira a empresa e informe de que forma o frete será calculado.

> **Nota:** Este quadro só será consultado se na localidade a opção **Frete por localidade** estiver **desmarcada**.

**Exemplo prático:**
- Região central da cidade: empresa terceirizada cobra R$ 5,00 por entrega (mesmo valor para qualquer localidade) → adicione os bairros e insira o valor do frete por empresa.
- Zona rural: bairro Bonsucesso tem frete de R$ 10,00 e Vargem Grande tem R$ 8,00 → marque **Frete por localidade** para cada bairro.

---

### Tipo de Cálculo do Frete

Tanto na inserção da empresa quanto na localidade (ao marcar **Frete por localidade**), é necessário definir de que forma o frete será tarifado:

| Tipo | Descrição |
|------|-----------|
| **Valor (Kg)** | O valor será calculado sobre o peso total do pedido ou nota. Ex.: R$ 2,00/KG × 10 KG = R$ 20,00 de frete. |
| **Alíquota** | O valor do frete é o resultado da aplicação da alíquota sobre o valor total dos itens. Ex.: venda de R$ 1.000,00 com alíquota de 5% = R$ 50,00 de frete. |
| **Fixo** | O valor do frete é fixo, independente do peso ou do valor dos itens. Ex.: R$ 5,00 fixo sempre. |
| **Nenhum** | Caso o frete seja grátis, utilize esta opção. |

#### Frete por peso (KG)

Para o correto funcionamento utilizando a configuração **Valor (KG)**, é necessário informar o **peso bruto** do produto em seu cadastro.

Caminho: **Cadastro de Produtos > aba Detalhes > campo Peso bruto**

> *[Imagem: tela do Cadastro de Produtos com o campo Peso bruto preenchido na aba Detalhes]*

---

### Tipo de Frete

Caminho: **Configurador > Faturamento > Opções > Venda > Padrões**

Informe o tipo de frete desejado, desde que não seja a opção **Sem frete**.

---

### Cadastro de Pessoas

Para que o cálculo automático do frete funcione corretamente, o cliente da venda precisa ter um bairro, cidade ou UF que esteja presente em uma das regiões cadastradas.

> *[Imagem: cadastro do cliente com endereço no bairro Bonsucesso, Teresópolis — pertencente à região Zona Rural de Teresópolis]*

> **Nota:** Em versões mais antigas, era necessário que a região estivesse vinculada à transportadora que, por sua vez, deveria estar vinculada ao cliente. Entretanto, não há mais necessidade de realizar este vínculo obrigatoriamente, pois o sistema valida a região de acordo com o endereço do cliente.

---

### Região por Pessoa

O **BiPessoa** possui uma coluna chamada **Região**, que trará exatamente a região identificada para o cliente de acordo com seu endereço.

> *[Imagem: listagem de clientes no BiPessoa com a coluna Região preenchida]*

> **Nota:** Esta coluna só será preenchida se houver região que possa ser identificada de acordo com os endereços dos clientes.

---

## Utilização e Demonstração da Rotina

Após todas as configurações e cadastros realizados, o procedimento de utilização segue o mesmo padrão para **Pré-Pedido**, **Pedido de Venda** e **Faturamento**.

### Pedido com frete fixo específico para o bairro

1. Acesse o módulo **Pré-Pedido** e clique em **"Novo"**.
2. Informe o cliente. Note que o **Valor do Frete** já foi calculado automaticamente logo após informar o código do cliente.
3. O valor encontrado (ex.: R$ 10,00) ocorreu porque, no cadastro da região, o bairro do cliente foi configurado para **Frete por localidade** com valor fixo.

> *[Imagem: pré-pedido com o Valor do Frete preenchido automaticamente como R$ 10,00]*

Perceba que, independente do produto, o valor do frete já está definido, já que o valor será fixo.

### Pedido com frete (%) para a região

Para um cliente do estado do Mato Grosso do Sul (região Centro-Oeste):

> *[Imagem: pré-pedido com frete calculado em R$ 44,00 para cliente da região Centro-Oeste]*

O sistema encontrou R$ 44,00 de frete porque a região Centro-Oeste está configurada com alíquota de 10% do valor dos itens. Neste caso, a atribuição do valor do frete só foi possível após informar o produto (o mesmo ocorreria para cálculo por peso).

---

## Dicas

- Caso o cliente faça parte de **duas regiões**, o sistema considerará a **região mais específica** para cálculo do frete.
- Se houver regiões internas na cidade (com UF, cidade e bairro) e também regiões genéricas (somente com UF), o sistema vai considerar a região interna, pois está com mais informações detalhadas.
- Por padrão, o sistema **não vem com nenhuma região cadastrada**. Portanto, busque manter os cadastros preenchidos para que as regiões possam ser vinculadas corretamente.

Esta rotina pode ser determinante para o cliente e a empresa decidirem a viabilidade de uma venda. Portanto, é importante que o nosso cliente saiba da existência deste recurso.
