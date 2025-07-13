# Manual do Usuário - SimPCN

## 📖 Guia Completo de Utilização

### Introdução

O WM SimPCN (Simulador de Continuidade de Negócios) é uma ferramenta educacional interativa que permite simular situações de crise em organizações e testar estratégias de recuperação. Este manual irá guiá-lo através de todas as funcionalidades do sistema.

## 🎯 Objetivos de Aprendizagem

Ao usar o WM SimPCN, você será capaz de:
- Compreender conceitos de RTO (Recovery Time Objective) e RPO (Recovery Point Objective)
- Praticar tomada de decisões em situações de crise
- Avaliar o impacto de diferentes estratégias de recuperação
- Desenvolver habilidades de priorização de sistemas críticos

## 🚀 Primeiros Passos

### Acessando o Sistema
1. Abra o arquivo `index.html` no seu navegador
2. Ou execute um servidor local e acesse via localhost
3. A tela inicial será exibida com o logo do WM SimPCN

### Interface Principal
- **Header:** Logo e informações do sistema
- **Área de conteúdo:** Telas de interação
- **Navegação:** Botões para avançar/voltar entre telas

## 📋 Tela 1: Cadastro de Ativos Críticos

### Objetivo
Configure os sistemas críticos da sua organização antes de iniciar a simulação.

### Sistemas Disponíveis
1. **Sistema ERP**
2. **E-mail Corporativo**
3. **Banco de Dados**
4. **Portal Institucional**

### Configurações por Sistema

#### Criticidade
- **Alta:** Sistema essencial para operação
- **Média:** Sistema importante mas não crítico
- **Baixa:** Sistema de apoio

#### Frequência de Backup
- **Em tempo real:** Backup contínuo
- **Diário:** Backup uma vez por dia
- **Semanal:** Backup uma vez por semana

#### RTO Ideal (horas)
- Tempo máximo aceitável para recuperar o sistema
- Valores sugeridos: 0.5 a 24 horas
- Sistemas críticos devem ter RTO menor

#### RPO Ideal (minutos)
- Perda máxima de dados aceitável
- Valores sugeridos: 15 a 480 minutos
- Sistemas críticos devem ter RPO menor

### Dicas de Configuração
- Sistemas de alta criticidade merecem investimento em RTO/RPO menores
- Considere o custo vs. benefício de cada configuração
- Backup em tempo real reduz RPO mas aumenta custos

### Finalizando
Clique em **"Iniciar Simulação"** quando terminar as configurações.

## 🚨 Tela 2: Cenário de Incidente

### Objetivo
Compreender o incidente que afetou sua organização.

### Tipos de Cenários

#### 1. Ataque de Ransomware
- **Impacto:** Criptografia de sistemas
- **Sistemas típicos afetados:** ERP, E-mail
- **Características:** Alta urgência, possível perda total

#### 2. Incêndio no Datacenter
- **Impacto:** Destruição física de equipamentos
- **Sistemas típicos afetados:** Banco de Dados, ERP
- **Características:** Recuperação lenta, necessita hardware

#### 3. Falha Elétrica Prolongada
- **Impacto:** Indisponibilidade por falta de energia
- **Sistemas típicos afetados:** Portal, E-mail
- **Características:** Temporário mas prolongado

#### 4. Sequestro de Backup
- **Impacto:** Comprometimento dos backups
- **Sistemas típicos afetados:** Banco de Dados, Portal
- **Características:** Dificulta recuperação

### Informações Apresentadas
- **Descrição detalhada** do que aconteceu
- **Sistemas afetados** pelo incidente
- **Tempo offline** estimado sem intervenção
- **Perda de dados** estimada

### Análise Recomendada
1. Leia atentamente a descrição
2. Identifique quais sistemas foram afetados
3. Avalie a gravidade do impacto
4. Considere as implicações para o negócio

### Próximo Passo
Clique em **"Tomar Decisão"** para definir sua estratégia.

## ⏱️ Tela 3: Sua Decisão

### Objetivo
Definir sua estratégia de recuperação dentro do tempo limite.

### Timer de Decisão
- **Tempo disponível:** 5 minutos
- **Indicador visual:** Cronômetro regressivo
- **Alerta:** Cor vermelha quando restam menos de 60 segundos
- **Timeout:** Decisão automática se o tempo esgotar

### Campos de Decisão

#### Sistema a Recuperar Primeiro
- **Opções:** Apenas sistemas afetados pelo incidente
- **Critério:** Priorize baseado na criticidade e impacto no negócio
- **Dica:** Sistemas de alta criticidade geralmente devem ser priorizados

#### RTO Estimado (horas)
- **Definição:** Quanto tempo você estima para recuperar o sistema
- **Formato:** Números decimais (ex: 2.5)
- **Considerações:** Seja realista baseado nos recursos disponíveis

#### RPO Estimado (minutos)
- **Definição:** Quanta perda de dados você considera aceitável
- **Formato:** Números inteiros múltiplos de 15
- **Considerações:** Baseie-se na frequência de backup configurada

#### Justificativa da Decisão
- **Objetivo:** Explicar o raciocínio por trás da escolha
- **Dicas:** Mencione criticidade, impacto no negócio, recursos disponíveis
- **Avaliação:** Não afeta a pontuação, mas ajuda na reflexão

### Estratégias Recomendadas

#### Para Sistemas de Alta Criticidade
- Priorize sempre que possível
- Defina RTO/RPO agressivos
- Justifique baseado no impacto no negócio

#### Para Múltiplos Sistemas Afetados
- Escolha o mais crítico primeiro
- Considere dependências entre sistemas
- Avalie recursos disponíveis para recuperação

#### Gestão do Tempo
- Não demore muito na análise inicial
- Tome decisões baseadas em critérios claros
- Use a justificativa para documentar seu raciocínio

### Finalizando
Clique em **"Confirmar Decisão"** para ver o resultado.

## 📊 Tela 4: Resultado e Feedback

### Objetivo
Avaliar o desempenho da sua estratégia de recuperação.

### Selo de Resultado

#### Plano Eficaz ✅
- **Critério:** RTO e RPO dentro dos limites ideais
- **Cor:** Verde
- **Significado:** Sua estratégia foi bem-sucedida

#### Plano Falhou ❌
- **Critério:** RTO ou RPO excederam os limites
- **Cor:** Vermelho
- **Significado:** Estratégia precisa ser revista

### Análise Detalhada

#### Validação RTO
- **Dentro do limite:** Tempo estimado ≤ Tempo ideal
- **Excedeu o limite:** Tempo estimado > Tempo ideal
- **Detalhes:** Comparação entre valores estimados e ideais

#### Validação RPO
- **Dentro do limite:** Perda estimada ≤ Perda ideal
- **Excedeu o limite:** Perda estimada > Perda ideal
- **Detalhes:** Comparação entre valores estimados e ideais

### Impacto da Decisão

#### E-mails Perdidos
- Baseado na perda de dados do cenário
- Representa informações não recuperáveis

#### Custo Estimado
- **Custo base:** Definido pelo tipo de incidente
- **Penalidades:** Por exceder RTO/RPO
- **Bonus:** 10% desconto para sistemas de alta criticidade

#### Usuários Afetados
- Número de pessoas impactadas pelo sistema escolhido
- Varia por tipo de sistema

### Lições Aprendidas

#### Tipos de Lições
- **Priorização:** Importância de escolher sistemas críticos
- **Backup:** Valor de backups regulares e testados
- **Redundância:** Benefícios de sistemas redundantes
- **Treinamento:** Importância de equipes preparadas
- **Documentação:** Valor de procedimentos atualizados
- **Testes:** Necessidade de testar planos regularmente
- **Comunicação:** Importância de comunicação clara
- **Monitoramento:** Valor de monitoramento proativo

#### Como São Geradas
- Baseadas no desempenho na simulação
- Focam em áreas de melhoria específicas
- Incluem boas práticas da área

### Ações Disponíveis

#### Nova Simulação
- Reinicia o processo com novos cenários
- Permite praticar com diferentes configurações
- Mantém aprendizado acumulado

#### Exportar Relatório
- Gera arquivo de texto com todos os dados
- Inclui configurações, decisões e resultados
- Útil para revisão posterior ou compartilhamento

## 💡 Dicas de Uso Avançado

### Estratégias de Aprendizado

#### Primeira Simulação
- Use configurações padrão
- Foque em entender o fluxo
- Não se preocupe com a pontuação

#### Simulações Subsequentes
- Experimente diferentes configurações
- Teste cenários variados
- Compare resultados entre simulações

#### Análise de Resultados
- Sempre leia as lições aprendidas
- Compare custos entre diferentes estratégias
- Documente insights importantes

### Cenários de Prática

#### Cenário Conservador
- RTOs altos (6-24h)
- RPOs altos (2-8h)
- Foco em custo-benefício

#### Cenário Agressivo
- RTOs baixos (0.5-2h)
- RPOs baixos (15-60min)
- Foco em disponibilidade máxima

#### Cenário Balanceado
- RTOs médios (2-6h)
- RPOs médios (1-4h)
- Equilíbrio entre custo e disponibilidade

### Interpretação de Resultados

#### Custo Alto
- Pode indicar configurações muito agressivas
- Considere relaxar alguns RTOs/RPOs
- Avalie custo vs. benefício

#### Custo Baixo
- Pode indicar configurações muito relaxadas
- Considere impacto no negócio
- Avalie se atende necessidades reais

#### Falhas Frequentes
- Revise configurações iniciais
- Considere investir em backup/redundância
- Pratique diferentes estratégias de priorização

## 🔧 Solução de Problemas

### Problemas Comuns

#### Timer Não Funciona
- Verifique se JavaScript está habilitado
- Recarregue a página
- Use navegador atualizado

#### Exportação Não Funciona
- Verifique permissões de download
- Desabilite bloqueadores de popup
- Tente navegador diferente

#### Interface Não Responsiva
- Verifique conexão com internet (para ícones)
- Limpe cache do navegador
- Verifique se CSS carregou corretamente

### Requisitos Técnicos

#### Navegadores Suportados
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

#### Recursos Necessários
- JavaScript habilitado
- Conexão com internet (para ícones Font Awesome)
- Resolução mínima: 320px de largura

## 📚 Conceitos Importantes

### RTO (Recovery Time Objective)
- **Definição:** Tempo máximo aceitável para recuperar um sistema
- **Medida:** Geralmente em horas
- **Impacto:** Afeta disponibilidade do serviço
- **Custo:** RTOs menores custam mais

### RPO (Recovery Point Objective)
- **Definição:** Perda máxima de dados aceitável
- **Medida:** Geralmente em minutos ou horas
- **Impacto:** Afeta integridade dos dados
- **Custo:** RPOs menores exigem backups mais frequentes

### Criticidade de Sistemas
- **Alta:** Essencial para operação, parada causa prejuízo imediato
- **Média:** Importante mas operação pode continuar temporariamente
- **Baixa:** Apoio, parada não afeta operação crítica

### Plano de Continuidade de Negócios
- **Objetivo:** Manter operações durante e após incidentes
- **Componentes:** Prevenção, resposta, recuperação
- **Testes:** Devem ser testados regularmente
- **Atualização:** Deve evoluir com a organização

---

**Suporte:** Para dúvidas sobre o simulador, consulte a documentação técnica ou entre em contato com o suporte educacional.

**Versão do Manual:** 1.0  
**Última Atualização:** Julho 2025

