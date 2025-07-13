# WM SimPCN - Simulador de Continuidade de Negócios

## 🎯 Objetivo

O WM SimPCN é um simulador educacional que permite aos alunos simular eventos críticos em uma organização e tomar decisões estratégicas sobre continuidade de negócios, avaliando se suas ações atendem aos objetivos de recuperação (RTO e RPO).

**Subtítulo:** Teste seus planos. Salve seus dados. Aprenda com seus erros.

👉 **[Acesse agora o simulador online](https://wcmendes.github.io/simpcn/)**  
(*Hospedado gratuitamente via GitHub Pages*)

## 🔧 Funcionalidades Implementadas

### 1. Cadastro de Ativos Críticos
- **Sistemas disponíveis:** ERP, E-mail Corporativo, Banco de Dados, Portal Institucional
- **Configurações por ativo:**
  - Criticidade (Alta, Média, Baixa)
  - Frequência de backup (Em tempo real, Diário, Semanal)
  - RTO Ideal (Recovery Time Objective) em horas
  - RPO Ideal (Recovery Point Objective) em minutos

### 2. Cenário de Incidente
- **Cenários disponíveis:**
  - Ataque de Ransomware
  - Incêndio no Datacenter
  - Falha Elétrica Prolongada
  - Sequestro de Backup
- **Informações exibidas:**
  - Descrição detalhada do incidente
  - Sistemas afetados
  - Tempo offline estimado
  - Perda de dados estimada

### 3. Decisão do Aluno
- **Timer de 5 minutos** para tomar decisão
- **Campos de decisão:**
  - Sistema a recuperar primeiro (baseado nos sistemas afetados)
  - RTO Estimado pelo aluno
  - RPO Estimado pelo aluno
  - Justificativa da decisão
- **Interface intuitiva** com validação de campos

### 4. Resultado e Feedback
- **Avaliação automática:**
  - Validação se RTO e RPO estão dentro dos limites ideais
  - Selo de "Plano Eficaz" ou "Plano Falhou"
- **Métricas de impacto:**
  - Custo estimado do incidente
  - Número de usuários afetados
  - Quantidade de e-mails perdidos
- **Lições aprendidas** geradas automaticamente
- **Exportação de relatório** em formato texto

### 5. Funcionalidades Adicionais
- **Interface responsiva** para desktop e mobile
- **Design moderno** com gradientes e animações
- **Navegação fluida** entre telas
- **Feedback visual** com cores e ícones intuitivos
- **Gamificação** com timer e sistema de pontuação

## 💻 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Estilização:** CSS Grid, Flexbox, Animações CSS
- **Ícones:** Font Awesome 6.0
- **Responsividade:** Media queries para diferentes dispositivos
- **Armazenamento:** LocalStorage para persistência de dados

## 📁 Estrutura do Projeto

```
simPCN/
├── frontend/
│   ├── index.html          # Página principal com todas as telas
│   ├── css/
│   │   └── styles.css      # Estilos completos da aplicação
│   ├── js/
│   │   └── app.js          # Lógica completa da aplicação
│   └── img/                # Diretório para imagens (vazio)
├── data/
│   └── data.json          # Estrutura de dados de exemplo
└── README.md              # Esta documentação
```

## 🚀 Como Executar

### Opção 1: Servidor Local Python
```bash
cd simPCN/frontend
python3 -m http.server 8000
```
Acesse: http://localhost:8000

### Opção 2: Servidor Local Node.js
```bash
cd simPCN/frontend
npx http-server -p 8000
```
Acesse: http://localhost:8000

### Opção 3: Abrir Diretamente
Abra o arquivo `index.html` diretamente no navegador (algumas funcionalidades podem ser limitadas).

## 🎮 Como Usar

### Passo 1: Cadastro de Ativos
1. Configure os sistemas críticos da sua organização
2. Ajuste criticidade, frequência de backup, RTO e RPO ideais
3. Clique em "Iniciar Simulação"

### Passo 2: Cenário de Incidente
1. Leia atentamente o cenário gerado
2. Observe os sistemas afetados e impacto inicial
3. Clique em "Tomar Decisão"

### Passo 3: Sua Decisão
1. **Atenção ao timer** de 5 minutos
2. Selecione o sistema prioritário para recuperação
3. Defina RTO e RPO estimados
4. Justifique sua decisão
5. Clique em "Confirmar Decisão"

### Passo 4: Resultado
1. Veja se seu plano foi eficaz
2. Analise os impactos da sua decisão
3. Leia as lições aprendidas
4. Exporte o relatório se desejar
5. Inicie nova simulação para praticar mais

## 📊 Sistema de Avaliação

### Critérios de Sucesso
- **RTO:** Tempo estimado ≤ Tempo ideal configurado
- **RPO:** Perda estimada ≤ Perda ideal configurada
- **Priorização:** Sistemas de alta criticidade têm bonus

### Cálculo de Custos
- **Custo base:** Definido por cenário
- **Penalidades:** Aplicadas por exceder RTO/RPO
- **Bonus:** 10% desconto para sistemas de alta criticidade

### Lições Aprendidas
- Geradas dinamicamente baseadas no desempenho
- Focam em pontos de melhoria específicos
- Incluem boas práticas de continuidade de negócios

## 🎨 Design e UX

### Paleta de Cores
- **Primária:** Gradiente azul-roxo (#667eea → #764ba2)
- **Sucesso:** Verde (#22543d, #48bb78)
- **Erro:** Vermelho (#742a2a, #fc8181)
- **Neutro:** Cinzas (#f7fafc, #e2e8f0)

### Elementos Visuais
- **Cards interativos** com hover effects
- **Animações suaves** de transição
- **Ícones intuitivos** para cada funcionalidade
- **Feedback visual** imediato para ações

### Responsividade
- **Desktop:** Layout em grid com múltiplas colunas
- **Tablet:** Adaptação automática do grid
- **Mobile:** Layout em coluna única com botões full-width

## 🔧 Funcionalidades Técnicas

### Gerenciamento de Estado
- Estado global da aplicação em JavaScript
- Persistência de dados durante a sessão
- Navegação entre telas sem reload

### Validações
- Campos obrigatórios na decisão
- Valores numéricos para RTO/RPO
- Timer automático com timeout

### Exportação
- Relatório completo em formato texto
- Download automático via JavaScript
- Inclui todos os dados da simulação

## 📈 Possíveis Melhorias Futuras

### Funcionalidades
- [ ] Modo multiplayer para equipes
- [ ] Histórico de simulações
- [ ] Ranking de desempenho
- [ ] Cenários personalizáveis
- [ ] Integração com LMS

### Técnicas
- [ ] Backend para persistência
- [ ] Autenticação de usuários
- [ ] API REST para dados
- [ ] PWA (Progressive Web App)
- [ ] Testes automatizados

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do simulador de Plano de Continuidade de Negócios (PCN).

## 👥 Créditos

Desenvolvido por William Corrêa Mendes, com auxílio de inteligência artifical, para auxiliar no ensino dos alunos do Curso de Análise e Desenvolvimento de Sistemas, de conceitos de continuidade de negócios e recuperação de desastres.

---

**Versão:** 1.0  
**Data:** Julho 2025  
**Compatibilidade:** Navegadores modernos (Chrome, Firefox, Safari, Edge)

