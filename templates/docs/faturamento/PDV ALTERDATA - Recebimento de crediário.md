# PDV Alterdata — Recebimento de Crediário — Bimer ERP

> **Sensibilidade:** interno
> **Fonte:** Universidade Corporativa Alterdata

---

## Sumário
- [Introdução](#introdução)
- [Configurações](#configurações)
- [Recebimento](#recebimento)

---

## Introdução

Existem empresas que vendem a prazo com forma de pagamento que não seja cheque ou cartão de crédito, e permitem aos seus clientes que façam o pagamento do "carnê" direto no caixa da loja. Por exemplo, a loja tem um crediário próprio e emite carnês, duplicatas, etc., para que seus clientes façam o pagamento.

O recurso de **Recebimento de Crediário** é um plugin que existe para facilitar a baixa dos títulos a receber em aberto existentes para os clientes do Bimer.

---

## Configurações

**1. Configurar tipos de baixa e forma de pagamento padrão:**

Acesse **FatPDVCFG >> Ferramentas >> Opções >> Checkout >> Recebimento de crediário** e informe:
- **Tipos de baixa total e parcial** para operações de recebimento de crediário.
- **Forma de pagamento padrão** que o sistema utilizará nessas operações.

> **Observação:** As configurações que não estão contornadas NÃO impactam no recebimento de crediário pelo PDV Alterdata.

**2. Configurar formas de pagamento visíveis:**

Ainda no **FatPDVCFG >> Financeiro >> Geral**, informe as **formas de pagamento** que podem ser visualizadas no recebimento de crediário.

**3. Configurar bloqueio de desconto (opcional):**

No **PDVAlterdataCfg >> Ferramentas >> Opções >> Validação >> Recebimento de crediário**, é possível bloquear a concessão de descontos em títulos vencidos há mais de um certo número de dias. Se informar **0 (zero)**, o sistema não bloqueará o desconto mesmo que o título esteja vencido.

**4. Exportação e carga de dados:**

Após concluir as configurações, faça uma exportação no integrador e no concentrador, e reabra o PDV Alterdata.

---

## Recebimento

> **Atenção:** O recebimento de crediário utiliza o **webservice de plugin** para se comunicar com o Bimer.

**Para realizar um recebimento:**

1. Acesse o PDV Alterdata e tecle **F11**.
2. Na tela do recebimento de crediário, filtre o título desejado:
   - Se souber o número do título, basta informá-lo.
   - Se não, utilize os campos **"Título"** ou **"Pessoa"** para localizar.
3. Selecione o título na área **"Informações"** e clique em **"Adicionar"**.
4. Informe a **forma de pagamento**. Os campos ficarão editáveis conforme a forma de pagamento selecionada.

> **Observação:** É possível adicionar vários títulos a receber em um único lote de recebimento.

**Tratamento de valores:**

Caso o valor informado no **Pagamento** supere o **Valor a pagar**, o sistema exibirá uma mensagem:
- **Sim** → o valor da diferença é lançado como **Juros** e o sistema considerará o valor informado no campo Pagamento como o valor total a receber.
- **Não** → o sistema lançará o valor da diferença como **Troco** ao cliente.

Com o recebimento incluído, confira os valores totais na parte inferior e clique em **OK** para confirmar o recebimento do crediário.

O sistema realizará a impressão de comprovante do recebimento de crediário.

Em seguida, será apresentada mensagem confirmando a criação do lote de baixa no `Areceber.exe`.

> **Atenção:** Esse lote precisa ser **liberado manualmente** no módulo Contas a Receber.

Após confirmar, é impresso outro comprovante da movimentação.

**Para liberar o lote de baixa no Bimer:**

1. Acesse o módulo **Contas a Receber** no Bimer.
2. No menu **Baixa**, clique em **Baixa manual**.
3. Clique em **Abrir lote**.
4. Aplique o filtro até localizar o lote de baixa.
5. Selecione-o e clique em **OK**.
6. Abra o lote de baixa e libere normalmente para finalizar o processo de baixa.
