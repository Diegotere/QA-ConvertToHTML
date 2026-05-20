# Mapa Resumo — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário

- [Introdução](#introducao)
- [Acesso](#acesso)
- [Utilizando o módulo](#utilizando-o-modulo)

---


## Introdução

O módulo MapaResumo.exe foi criado para possibilitar no sistema Bimer um controle dos encerramentos de caixa diários feitos no PDV, a partir de totalizadores importados conforme a Redução Z ou até inclusos manualmente, a fim de não haver perdas de informações. Através do módulo visualize os valores de venda bruta diária, as datas dos movimentos e informações diárias de base de cálculo de ICMS e ISS contidos na Redução Z. Inclua também uma Redução Z manualmente no sistema, para não haver falta de informações no gerenciador e imprimi-las conforme a necessidade.


## Acesso

O módulo MapaResumo.exe deve ser inserido na máquina de modo manual. Se você for aqui da Matriz acesse o diretório: M:\BIMER\IntegracaoBimer_PDVAlterdata Se você não é da Matriz não fique triste, é só entrar em contato com Canais e solicitar o módulo. Após obter o módulo copie e cole na pasta padrão de instalação do Bimer ou do PDV Alterdata. Após executar é só inserir o usuário, senha e banco de dados desejados (os mesmos usados no acesso dos módulos comuns). Atenção! A versão utilizada deve ser igual à versão do seu Bimer. Senão houver uma versão igual, utilize a inferior mais próxima do seu Bimer.


## Utilizando o módulo

Ao abrirmos o módulo, veremos algumas opções de filtro no menu superior e os principais recursos. 1) Nesse quadro informe a Impressora ECF na qual deseja filtrar e a Data inicial e Data final. 2) Esse quadro se refere aos filtros informados no quadro 1, onde ao clicar em Aplicar filtros o sistema fará o filtro das informações conforme informado, ou podemos Limpar pesquisa que limpará os campos referentes aos filtros ou poderemos Visualizar que fará com que o sistema abra na tela uma espécie de relatório exatamente com as informações mostradas no resultado. 3) Esse recurso serve para filtrar os dias em que faltaram a emissão da Redução Z para a impressora informada no filtro, ou Todas as impressoras. Para usá-lo, antes informe uma Data inicial e Data final no quadro 1. 4) Nesse quadro você podeincluir uma Redução Z manualmente, e posteriormente editar ou excluir. O sistema só permitirá editar ou excluir uma Redução Z que tenha sido incluída manualmente ou que possua dados pendentes. O botão Consultar abre na tela detalhes da Redução Z lançada manualmente ou automaticamente sem nos possibilitar a edição. 5) Esse botão nos possibilita a impressão de um Mapa Resumo pelo sistema. Não é possível editar um layout para essa configuração, pois é impresso como está apresentado na tela. 6) Podemos habilitar o Painel de grupo caso seja necessário agrupar por colunas existentes no grid do módulo, podendo também Fechar todos os níveis ou Expandir todos os níveis. 7) Ao incluímos uma Redução Z manualmente a linha apresenta as letras na cor verde e quando há uma informação pendente necessário para compor o grid, as letras aparecem em vermelho. Em Impressora ECF temos a possibilidade de definir todas as impressoras ou somente 1 em específico, para que seja aplicada ao filtro. Em Visualizar não há a possibilidade de editar o layout, pois é carregado conforme está na tela, como um Print. O que você consegue fazer é usar os botões na parte superior para ajustar as margens, cor de fundo e outros elementos para imprimir o conteúdo conforme a preferência do usuário. EmImpressora sem redução Z veja as impressoras que não tiveram movimentação em alguma data, no caso do exemplo a impressora EPMM0400000000000001 não teve movimentação em todas as datas contidas na coluna Dt. Movimento. Nessa tela clicando no botão Exportar o sistema permite salvar as informações para o Excel. Em Incluir é necessário informar uma impressora ECF, caso contrário será apresentada a seguinte mensagem: Após informada a impressora ECF, ao clicar em Incluir é aberta uma tela para lançar as informações conforme estrutura da Redução Z. Basta preencher os campos e clicar em OK para gravar as alterações. Dessa forma o lançamento aparecerá no grid com as letras verdes diferenciando o lançamento automático do manual. Com o lançamento manual, será habilitado os botões Editar e Excluir. Ao editar, temos a possibilidade de alterar impressora ECF do lançamento realizado sem a necessidade de fazer a exclusão. EmMapa resumohá a possibilidade de filtrar um lançamento para a impressão do Mapa Resumo conforme mostrado na tela, onde são apresentados os totalizadores. O impresso apresenta a mesma estrutura do mostrado na tela.
