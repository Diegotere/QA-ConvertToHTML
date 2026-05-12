---
inclusion: manual
---

# Steering: Pré-Análise de Processos de Erro (QA)

## Objetivo

Guiar a execução de pré-análises de processos de erro abertos pelo QA no Projects. O Kiro deve consultar MCPs, código-fonte e banco de dados conforme necessário para investigar o problema reportado e emitir um parecer objetivo e amigável.

---

## Fluxo de Execução

### 1. Receber o Processo

O QA fornecerá os dados do processo no seguinte padrão de abertura:

```
PROCESSO BIMER
Processo duplicado de [XXXXXXXXXX]

1. DESCRIÇÃO DA SITUAÇÃO E ATUAL IMPACTO:
(Detalhe o ocorrido e informe o comportamento que era esperado)

2. PASSO A PASSO PARA SIMULAÇÃO:
(Detalhe os passos necessários para reproduzir a situação)

3. CONEXÃO COM A BASE QUE POSSUI A SIMULAÇÃO ACIMA:
( ) Link: (Cole o link com a base ou logs)
( ) Base hospedada - Informar os dados:
SERVER NAME=
DATABASE NAME=
USUÁRIO=
SENHA=

4. PARA BASE DE CLIENTE, INFORME O PROTOCOLO DE CONTROLE DE BASE DE DADOS:
Protocolo: [XXXXXXXXXX] - Enviar para o usuário DSNBIMER.

5. EXISTE PALIATIVO? Sim ( ) ou Não ( )
Se sim, qual?

6. INFORMAÇÕES TÉCNICAS (Anexe logs, prints da tela com a situação, etc)
6.1 - Informe a última versão liberada que foi testada:
6.2 - Informe a versão utilizada pelo cliente:
6.3 - Sistema operacional (se aplicável):
6.4 - Para módulos Web, informe o navegador e a versão, além do dispositivo (modelo de tablet/celular, se aplicável):
7. NECESSITOU DE CONSULTA COM O IF? Sim ( ) ou Não ( )
Se sim, informe o protocolo: [XXXXXXXXXX]

8. PESSOA DE CONTATO DO PROCESSO:

9. AUTORIZADO POR:
```

### 2. Identificar o Sistema

Antes de prosseguir com a análise, identifique o tipo de sistema envolvido:

- **WEB** — Frontend Vue.js + Backend C# (Bimer Web)
- **Desktop** — Aplicação desktop (Bimer Desktop/Delphi)
- **API** — Endpoints REST isolados

**REGRA:** Se não for possível identificar o sistema com base nas informações fornecidas, PERGUNTE ao usuário antes de prosseguir:

> "Não consegui identificar o sistema envolvido. Esse processo se refere ao sistema **WEB**, **Desktop** ou **API**?"

Só continue após a resposta.

### 3. Investigar o Problema

Com base no tipo de sistema identificado, utilize as ferramentas disponíveis.

**Fallback sem MCP:** Caso algum MCP não esteja disponível ou não retorne resultados suficientes, utilize as ferramentas nativas do workspace (busca de arquivos, leitura de código, grep) para navegar nas pastas do projeto e localizar código-fonte relevante para a pré-análise. Explore a estrutura de diretórios, leia arquivos de código, e busque por termos relacionados ao problema reportado.

#### Para sistema WEB:
- Use os MCPs `bimer_frontend_vue2` para investigar componentes, stores, views, APIs do frontend
- Use os MCPs `bimer_web_repositorio` para investigar controllers, services, queries, DTOs do backend
- Use o MCP `bimer_database` para consultar esquemas, dados, procedures e regras de negócio
- Use o MCP `bimer-source` para consultar código-fonte adicional quando necessário, geralmente não será a base do cliente, por isso pode não ter os dados reais, use mais como base de consultas de relacionamentos e regras de BD.

#### Para sistema API:
- Use os MCPs `bimer_web_repositorio` para investigar controllers, services, fluxos
- Use o MCP `bimer_database` para consultar banco de dados
- Use o MCP `bimer-source` para consultar código-fonte adicional quando necessário

#### Para sistema Desktop:
- Use o MCP `bimer-source` para consultar código-fonte do sistema Desktop
- Use o MCP `bimer_database` para investigar banco de dados e regras de negócio

### 4. Avaliar Conclusão

Após a investigação, avalie se foi possível chegar a uma conclusão com base nos dados fornecidos. O parecer DEVE ter um dos seguintes status:

---

## Status de Conclusão

### Status 1: NÃO FOI POSSÍVEL REPRODUZIR POR FALTA DE INFORMAÇÕES

Use quando os dados fornecidos são insuficientes para simular ou investigar o problema.

**Ação:** Retornar ao suporte para colher mais dados.

**Formato do parecer:**

```
## Pré-Análise — Retorno ao Suporte

**Status:** ⚠️ Não foi possível reproduzir por falta de informações.

**Motivo:** [Explique brevemente por que não foi possível prosseguir]

**Informações necessárias para continuar:**
- [ ] [Item 1 que precisa ser solicitado ao suporte]
- [ ] [Item 2 que precisa ser solicitado ao suporte]
- [ ] [Item N...]

**Orientação:** Solicitar ao suporte que complemente o processo com as informações acima para que a pré-análise possa ser retomada.
```

---

### Status 2: CONCLUÍDA — NÃO É UM ERRO

Use quando a investigação mostra que o comportamento reportado é esperado (configuração, regra de negócio, uso incorreto, etc.).

**Formato do parecer:**

```
## Pré-Análise — Concluída (Não é erro)

**Status:** ✅ Concluída — Não se trata de um erro.

**Motivo:** [Explique de forma clara e amigável por que não é erro. Ex: configuração necessária, comportamento esperado por regra de negócio, etc.]

**Detalhamento:**
[Explique a configuração ou regra que justifica o comportamento. Seja didático.]

**Orientação:** Retornar ao suporte com este parecer para esclarecimento ao cliente.
```

---

### Status 3: CONCLUÍDA — PROCEDENTE

Use quando depois de analisado "cirurgicamente" o problema foi confirmado como um erro real no sistema conseguindo simular a situação da abertura, se não conseguiu simular dificilmente será procedente, por isso se entender que é procedente explique bem o que conseguiu simular, e se não consegui com base em que você julga procedente, pois os dados passados no procresso de abertura podem induzir ao erro.

**IMPORTANTE:** Para este status, o parecer DEVE ser salvo como arquivo `.md` na pasta `Convert-html` e já chamar o /QAhtml após a geração do md.

**Formato do parecer (salvar em `Convert-html/[nome-do-processo].md`):**

```markdown
# Pré-Análise — Procedente

1. Procedente conforme pré-análise do desenvolvimento.

2. Pré-análise realizada nas seguintes versões:
   [NomeDaAplicação] - [Versão] - [Data Hora]

3. Checklist:
   - [ ] Testar na versão do processo e outras versões conforme necessidade (versão do desenvolvimento, última liberada).
   - [ ] Vincular como "Foi duplicado por" caso seja uma réplica.
   - [ ] Alterar o resumo da tarefa com um breve descritivo da situação do processo.
   - [ ] Informar o módulo afetado.
   - [ ] Preencher versão impactada (não obrigatório).

4. Informações adicionais para simulação:
   [Descreva como simulou o problema, passos realizados, o que foi encontrado]

5. Sugestão de como deveria funcionar (opcional):
   [Se identificou a causa raiz, sugira a correção ou comportamento esperado]

6. Informações da base de dados:
   - [ ] Base de abertura.
   Caso tenha utilizado outra:
   SERVER NAME=
   DATABASE NAME=
   Usuário/Senha=
```

---

## Regra de Autocrítica Antes da Conclusão

**SEMPRE**, antes de emitir o parecer final, pergunte-se:

> "Existe alguma informação, arquivo (XML, configuração, log, script), ou instrução adicional que eu poderia consultar para tornar esta pré-análise mais assertiva?"

Se a resposta for sim — busque essa informação antes de "bater o martelo". Consulte arquivos de configuração, XMLs de regras, logs de execução, ou qualquer artefato que possa confirmar ou refutar a hipótese levantada. Só conclua quando estiver seguro de que esgotou as fontes acessíveis.

---

## Regra de Validação de Negócio (OBRIGATÓRIA)

**CONTEXTO:** Você é o QA expert. O processo foi aberto pelo suporte com base no que o cliente reportou. Sua função é validar se o que o suporte escreveu (com base no cliente) está correto. O relato do suporte/cliente é uma HIPÓTESE, não um fato. Trate como tal.

### 1. Simulação Aritmética Obrigatória

Antes de concluir como PROCEDENTE, **monte um exemplo numérico concreto** com valores reais simulando o fluxo completo. Trace cada variável com seu sinal correto:

```
Exemplo:
- QtEstoque = 0
- QtProcessamento = -12 (entrada pendente de transferência)
- Fórmula com O marcado: QtDisponivel = 0 - (-12) = +12
- Conclusão: Disponível = 12, logo a venda de 12 unidades é PERMITIDA (comportamento correto)
```

**NUNCA** conclua procedente sem ter feito essa conta explicitamente. Se a conta mostrar que o comportamento é esperado, NÃO é procedente.

### 2. Advogado do Diabo (Teste da Hipótese Contrária)

Antes de concluir como PROCEDENTE, **obrigatoriamente** construa o argumento contrário:

> "Se isso NÃO fosse um erro, qual seria a explicação?, O recurso sempre foi assim e foi feito para ser assim?"

Tente responder com base em:
- Qual é o **propósito de negócio** da configuração envolvida?
- O comportamento observado é **consistente** com esse propósito?
- Existe um cenário onde esse comportamento faz sentido para o usuário?

Se o argumento contrário for plausível, **NÃO conclua como procedente**. Investigue mais ou conclua como "Não é erro".

### 3. Visão de Negócio vs. Visão Técnica

**SEMPRE** analise o problema sob duas perspectivas antes de concluir:

| Perspectiva | Pergunta-chave |
|-------------|----------------|
| **Negócio** | "Por que essa configuração/funcionalidade existe? Qual problema ela resolve para o usuário?" |
| **Técnica** | "O código está fazendo o que a configuração manda? O resultado é matematicamente correto?" |

Se ambas as perspectivas estão alinhadas (a configuração existe para permitir X, e o código faz X), então **não é erro** — é o sistema funcionando conforme projetado.

**Erro real** = quando a perspectiva de negócio diz "deveria fazer X" mas o código faz "Y" (divergência entre intenção e implementação).

### 4. Não Confiar Cegamente no Relato

O processo de abertura pode **induzir ao erro**. O suporte repassa o que o cliente disse, e o cliente pode:
- Não entender a configuração que ele mesmo ativou
- Confundir comportamento esperado com bug
- Descrever o cenário de forma que parece um erro mas é uso incorreto

**REGRA:** Trate o relato como hipótese a ser validada, não como verdade. Questione cada afirmação com base no código e nas configurações reais.

### 5. Configurações Envolvidas = Sinal de Alerta

Quando o cenário envolve **configurações que o usuário ativou/desativou**, isso é um forte indicador de que o comportamento pode ser **by design**. Antes de concluir procedente:

- Identifique TODAS as configurações envolvidas
- Entenda o que cada uma faz (consulte o código que a consome)
- Verifique se o comportamento observado é o esperado para aquela combinação de configurações
- Pergunte: "Se o usuário mudar essa configuração, o comportamento muda conforme esperado?"

### 6. Validação de Caminhos e Nomenclaturas

O processo de abertura é escrito pelo suporte com base no relato do cliente. **Caminhos de menu, nomes de telas e nomenclaturas podem estar errados ou desatualizados.** O parecer final NÃO deve replicar caminhos incorretos.

**REGRA:** Antes de incluir qualquer caminho de navegação no parecer (ex: "Configurações > Modelos e Cenários"), **valide se o caminho existe** consultando:
- Rotas do frontend (arquivos de rotas, constantes de menu)
- MegaMenu (scripts SQL de rotas, MCP bimer-database)
- Código-fonte (nomes reais de telas, views, componentes)

**Se o caminho informado no processo estiver errado:**
- Corrija para o caminho real no parecer
- NÃO replique o erro do processo de abertura
- Se não conseguir determinar o caminho correto, use uma descrição genérica (ex: "na tela de modelos de impressão")

**Exemplos comuns de erros em processos:**
- "Configurações/Geral > Modelos e Cenários" → verificar se o caminho real é outro
- Nomes de módulos que mudaram entre versões
- Caminhos do Desktop usados para descrever funcionalidade Web (e vice-versa)
- Nomenclaturas internas (código) confundidas com nomes de tela visíveis ao usuário

---

## Regras Gerais

1. **Tom:** Objetivo, técnico mas amigável. Evite jargões desnecessários nas conclusões voltadas ao suporte.
2. **Investigação:** Sempre tente reproduzir ou entender o cenário antes de concluir. Use os MCPs disponíveis.
3. **Pergunte se necessário:** Se durante a análise precisar de mais contexto (módulo, tela, versão), pergunte ao usuário.
4. **Arquivo de saída:** Apenas o status PROCEDENTE gera arquivo na pasta `Convert-html`. Os demais status são apresentados diretamente no chat.
5. **Nome do arquivo:** Use um nome descritivo baseado no processo, ex: `pre-analise-movimento-bancario-duplicado.md`
6. **Não invente dados:** Se não encontrou evidência suficiente, use o Status 1 (falta de informações). Nunca conclua sem base factual.
