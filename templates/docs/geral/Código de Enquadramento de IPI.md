# Código de Enquadramento de IPI — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Arquivo XML – Código de Enquadramento](#arquivo-xml-codigo-de-enquadramento)
- [Alterações no Bimer](#alteracoes-no-bimer)
- [Configurações](#configuracoes)
- [Tabelas](#tabelas)

---


## Introdução

A partir de 1 de Janeiro de 2016, as empresas deverão emitir Notas Fiscais Eletrônicas com conteúdos adicionais. Entre eles, o código de enquadramento de IPI. Este Código será utilizado para determinar, junto com o CST de IPI, as particularidades e motivos do enquadramento de determinado produto como Isento, Suspenso ou Imune de tributação do IPI. Dessa forma será possível dizer que o produto é Isento, por exemplo, e também dizer o por quê. Exemplo: De acordo com NT (Nota Técnica) 2015/002 , o código de enquadramento do IPI deve preencher a tag <cEnq> no arquivo XML, de acordo com tabela abaixo: CST IPI =02 e 52 →Código de enquadramento dentro da faixa: [301 – 399] CST IPI =04 e 54 →Código de enquadramento dentro da faixa: [001 – 099] CST IPI =05 e 55 →Código de enquadramento dentro da faixa: [101 – 199] Dica! Para visualizar o detalhamento de cada enquadramento, clique aqui e vá a página 28 do Manual (Anexo XIV – Código de Enquadramento Legal do IPI). Na versão 6.03.04 do BIMER (Processo: 0013266408), foram incluídos os ajustes para que seja possível a geração do Código de Enquadramento do IPI. As configurações para o IPI seguem o mesmo padrão anterior, porém será necessário o preenchimento do Código de Enquadramento de IPI no cadastro de Classificação Fiscal. A Tag <cEnq> deverá ser preenchida para a correta emissão da NF-e.


## Arquivo XML – Código de Enquadramento

No arquivo XML, a Tag <cEnq> passa a ser alimentada com o código de enquadramento de IPI. Dessa forma, ao gerar o XML, este ficará com a seguinte estrutura: Em relação ao “Código de Enquadramento Legal do IPI” (Tag: cEnq, id: O06), o Manual de Orientação do Contribuinte (MOC) orienta o preenchimento do campo com o valor “999”, quando o CST da mercadoria for diferente de 02, 04, 05 e 52, 54, 55. Na NT (Nota Técnica) 2015/002 é definida a tabela de valores possíveis para o campo, incluindo os códigos relacionados com as Olimpíadas Rio 2016 (Classificação Especial de Isenção, Suspensão ou Imunidade), mantendo o valor “999” como uma das possibilidades. Layout: Atenção! Caso o código esteja inválido, a nota será rejeitada. Item/Tributo – IPI: Abaixo segue o anexo para verificação do código de enquadramento em alguns casos: Dentro do “Grupo CST” somente entram CST's que tenham classificação especial de Suspensão, Imunidade ou Isenção. Caso o CST seja de classificação fiscal diferente, como Tributado, por exemplo, o Código de Enquadramento deverá permanecer “999”.


## Alterações no Bimer

As configurações para o IPI seguem o mesmo padrão que existia, porém será necessário o preenchimento na classificação fiscal o código de enquadramento de IPI.


## Configurações

No Cadastro de Produtos (EstProduto / aba Identificação), o Produto deve estar com o “Tipo” marcado como “Produto Industrializado”. O Produto deve possuir uma classificação fiscal que tenha a incidência de IPI (EstProduto / aba Impostos): No cadastro de classificação fiscal deve ser preenchida a alíquota de IPI, o CST de IPI (Entrada/Saída) e o código de enquadramento de IPI de acordo com o CST (Configurador Bimer / Estoque / Tributos / Classificação Fiscal): O cadastro do CFOP deve ter a opção Calcula IPI marcada (Configurador Bimer / Estoque / Tributos / CFOP): No cadastro da Operação a opção de Calcula IPI deve estar marcada (Configurador Bimer / Estoque / Operação): No lançamento da NFe, o sistema preencherá automaticamente o código de enquadramento de IPI. Além disso, o usuário poderá editar esse código dentro do lançamento do Item da NF-e (importante salientar que este procedimento não atualiza o código de enquadramento no cadastro de produtos): Após isso, o XML será emitido para a SEFAZ. Se o Código de Enquadramento do IPI estiver compatível com o CST de IPI utilizado, a nota será autorizada, sem críticas e o usuário poderá realizar a impressão do DANFE. O DANFE não sofre nenhuma alteração em sua estrutura, as informações no corpo do DANFE continuam as mesmas.


## Tabelas

A estrutura de uma das tabelas do sistema foi modificada para receber os campos de Código de Enquadramento de IPI. Conforme vimos, o código de enquadramento será preenchido na Classificação Fiscal. Dessa forma a tabela referente ao cadastro de classificação foi modificada, recebendo 2 novos campos: 1.CdEnquadramentoLegalIPIEntrada 2.CdEnquadramentoLegalIPISaida Esses campos foram criados na tabela ClassificacaoFiscalItem. Veja a informação que o banco de dados demonstra ao executar o comando: select CdEnquadramentoLegalIPIEntrada, CdEnquadramentoLegalIPISaida,* from ClassificacaoFiscalItem A tabela ClassificacaoFiscal somente grava as informações de capa da Classificação Fiscal cadastrada e não foi modificada. Para localizar a classificação fiscal que a tabela ClassificacaoFiscalItemestá referenciando, use a colunaIdClassificacaoFiscal presente nela para buscar esta informação na tabela ClassificacaoFiscal. Para mais detalhes sobre o Código de Enquadramento de IPIclique aqui para acessar o documento oficial da Receita Federal.
