# Diferimento de ICMS — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introdução)
- [ICMS Diferido](#icms-diferido)
- [Configurações do Bimer](#configurações-do-bimer)
  - [Cadastro de Pessoas](#cadastro-de-pessoas)
  - [Configurador Bimer >> Estoque >> Tributos >> Cálculo de ICMS](#configurador-bimer--estoque--tributos--cálculo-de-icms)
- [Emissão da NF-e com Diferimento](#emissão-da-nf-e-com-diferimento)
  - [Faturamento](#faturamento)
  - [O XML](#o-xml)
- [Empresas do Paraná](#empresas-do-paraná)

---

## Introdução

O diferimento é uma espécie de substituição tributária que consiste em uma postergação ou adiamento do pagamento do imposto e, ao mesmo tempo, transfere a responsabilidade do pagamento do imposto a um terceiro.

---

## ICMS Diferido

É o ICMS recolhido pelo tomador da prestação, ou seja, a responsabilidade pelo pagamento fica atribuída ao adquirente, destinatário ou usuário do serviço que motivar o encerramento do diferimento, na condição de substituto tributário. Essa operação deve estar prevista em lei.

Exemplos de operações em que se aplicam o diferimento do ICMS:

- Industrialização – Remessa – Art. 402 do RICM/00.
- Industrialização – Retorno – Art. 403 do RICM/00.

O diferimento do ICMS ocorre quando o lançamento e/ou pagamento do imposto incidente sobre determinada operação ou prestação são transferidos para uma etapa posterior de comercialização, industrialização, prestação, uso ou consumo. O lançamento diferido é efetuado no momento em que se realiza a operação ou prestação subsequente, com as respectivas mercadorias ou serviços.

O pagamento diferido deve ser recolhido na mesma data prevista para o pagamento normal do imposto e pelo estabelecimento que encerrou a fase do diferimento.

> **Importante:** O diferimento de ICMS pode ser parcial ou total, e podem haver validações do XML diferentes por UF, inclusive obrigando o preenchimento de campos que no Manual de Orientação do Contribuinte aparecem como Não Obrigatórios, como o Estado de São Paulo, por exemplo.

O sistema Bimer está preparado para o lançamento e preenchimento de todos os campos do Grupo de Tributação do ICMS = **51** no XML das Notas Fiscais Eletrônicas com diferimento de ICMS.

---

## Configurações do Bimer

Primeiramente, consulte o contador da empresa sobre a operação e questione em quais casos sua empresa deverá emitir uma NF-e com Diferimento de ICMS.

### Cadastro de Pessoas

Para emissão de uma nota fiscal eletrônica com Diferimento de ICMS, o seu cliente/destinatário deve ser **Contribuinte do ICMS** e com **Inscrição Estadual válida**. Caso contrário, o sistema tem proteção para não permitir o envio da NF-e.

- Caso o cliente esteja configurado como **Não contribuinte**: o sistema apresentará mensagem de bloqueio.
- Caso o cliente esteja configurado como **Contribuinte isento de IE**: o sistema também apresentará mensagem de bloqueio.

> *[Imagem: mensagem de erro para cliente configurado como Não contribuinte]*

> *[Imagem: mensagem de erro para cliente configurado como Contribuinte isento de IE]*

Em ambos os casos deverá ser ajustado o cadastro do cliente. Acesse o módulo **Cadastro de Pessoas** e abra a categoria **(1) Cliente**, então vá até o cadastro do seu cliente e clique no botão **(2) Editar** no menu superior da tela.

> *[Imagem: tela do Cadastro de Pessoas com destaque para o botão Editar]*

No quadro **Endereços** clique no botão **(1) Editar endereço** e no campo **(2) Tipo de contribuição do ICMS** marque **Contribuinte ICMS** e à direita informe a **Inscrição Estadual** do cliente. Feitas as alterações, clique no botão **(3) OK** para gravar as alterações.

Feito isso, clique em **Gravar** para finalizar as alterações no cadastro do cliente.

---

### Configurador Bimer >> Estoque >> Tributos >> Cálculo de ICMS

Na tela seguinte, selecione o cálculo de ICMS no qual deseja incluir a configuração e clique no botão **Editar**.

Caso trabalhe com mais de 1 empresa cadastrada no sistema Bimer, observe se adicionará a configuração:
- **Comuns às empresas** – aplicando-se a todas as empresas; ou
- **Específicos por empresa** – aplicando-se somente à empresa apontada na configuração.

Clique no botão **Adicionar**.

> *[Imagem: tela de configuração do Cálculo de ICMS com quadro Diferimento]*

Deverá ser preenchida a **Situação Tributária = 51**, correspondente ao Diferimento de ICMS. No quadro **Diferimento**, preencha a alíquota resultante ou o percentual de diferimento. Os campos são **excludentes** — não é possível informar um valor em ambos; ao preencher um deles o outro ficará desabilitado.

**Exemplo:** informando **40%** no campo **Al. Resultante**, significa que será diferido **60%** do valor do ICMS.

> **Nota:** Os campos são equivalentes — quanto maior o valor informado no campo **Al. Resultante**, menor o percentual diferido. E quanto menor o valor informado, maior o percentual diferido.

Caso nenhum dos campos do quadro **Diferimento** seja preenchido, o sistema considerará o campo **Al. Resultante** como **0%**, entendendo como **100% de percentual de Diferimento** (diferimento total).

> **Dica:** Caso tenha dúvidas sobre os campos, clique na **hint (?)** ao lado do campo "Percentual de diferimento".

Vale ressaltar que não há nenhuma configuração específica no cadastro de operação usada na emissão da NF-e.

---

## Emissão da NF-e com Diferimento

### Faturamento

Ao cadastrar a nota fiscal no módulo **Faturamento**, observe que no momento do lançamento do item será resgatada a **Situação Tributária = 51** e na aba **Impostos** o campo **Al. ICMS** é preenchido com a alíquota de ICMS cadastrada no Cálculo de ICMS, normalmente.

Na capa da NF-e, o campo **ICMS** apresenta o valor real do ICMS já descontado com o percentual de ICMS diferido.

> *[Imagem: capa da NF-e com campo ICMS mostrando valor com desconto do diferimento]*

---

### O XML

O XML da NF-e é criado com o **Grupo de tributação do ICMS = 51** e com todos os campos correspondentes ao grupo, conforme manual de orientação do contribuinte.

> *[Imagem: trecho do XML com grupo de tributação ICMS 51]*

---

## Empresas do Paraná

A partir da versão **9.01.01.00**, foi criada a marcação **Preencher o valor do diferimento em informações complementares**. Esta configuração está disponível em **Configurador Bimer > Geral > Empresas > Emissão de notas > NF-e**.

Ao gerar a nota com diferimento ocorre o seguinte:

- **XML:** Na tag `<InfCpl>`, é gerado o texto com o valor do diferimento.
- **DANFE:** Em **Dados Adicionais**, dentro de informações complementares, é gerado o texto com o valor do diferimento.

**Exemplo de texto gerado:**

```
ICMS parcialmente diferido no valor de R$6,00 nos termos do Art. 28, Anexo VIII do
Decreto n° 7871/17 (RICMS/PR)
```

> **Atenção:** O texto é fixo, pois essa obrigatoriedade é exclusiva para as empresas do Paraná.
