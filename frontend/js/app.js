// Estado global da aplicação
let appState = {
    ativos: [],
    cenarioAtual: null,
    decisaoAluno: null,
    resultado: null,
    timer: null,
    tempoRestante: 300 // 5 minutos em segundos
};

// Cenários predefinidos
const cenarios = [
    {
        tipo: "Ataque de Ransomware",
        descricao: "Sua organização foi vítima de um ataque de ransomware. Vários sistemas críticos foram criptografados e estão indisponíveis.",
        sistemasAfetados: ["ERP", "E-mail"],
        tempoOffline: "6 horas",
        perdaDados: "4 horas",
        custoBase: 15000,
        icon: "fas fa-virus"
    },
    {
        tipo: "Incêndio no Datacenter",
        descricao: "Um incêndio no datacenter principal destruiu equipamentos críticos. Sistemas hospedados localmente estão completamente indisponíveis.",
        sistemasAfetados: ["Banco de Dados", "ERP"],
        tempoOffline: "12 horas",
        perdaDados: "8 horas",
        custoBase: 25000,
        icon: "fas fa-fire"
    },
    {
        tipo: "Falha Elétrica Prolongada",
        descricao: "Uma falha elétrica prolongada afetou toda a infraestrutura de TI. Sistemas críticos estão offline devido à falta de energia.",
        sistemasAfetados: ["Portal", "E-mail"],
        tempoOffline: "8 horas",
        perdaDados: "2 horas",
        custoBase: 10000,
        icon: "fas fa-bolt"
    },
    {
        tipo: "Sequestro de Backup",
        descricao: "Os sistemas de backup foram comprometidos por um ataque cibernético. A recuperação de dados está severamente limitada.",
        sistemasAfetados: ["Banco de Dados", "Portal"],
        tempoOffline: "10 horas",
        perdaDados: "12 horas",
        custoBase: 20000,
        icon: "fas fa-database"
    }
];

// Lições aprendidas predefinidas
const licoesAprendidas = [
    "Priorizar sistemas críticos com base na criticidade do negócio é fundamental para uma recuperação eficaz.",
    "Ter backups regulares e testados pode reduzir significativamente o RPO em situações de crise.",
    "Investir em redundância de sistemas críticos pode melhorar drasticamente o RTO.",
    "Treinamento regular da equipe de TI em procedimentos de recuperação é essencial.",
    "Documentação atualizada dos procedimentos de recuperação acelera o processo de restauração.",
    "Testes regulares do plano de continuidade revelam pontos fracos antes de uma crise real.",
    "Comunicação clara com stakeholders durante incidentes minimiza o impacto nos negócios.",
    "Monitoramento proativo pode detectar problemas antes que se tornem crises maiores."
];

// Inicialização da aplicação
document.addEventListener('DOMContentLoaded', function() {
    console.log('WM SimPCN iniciado');
    carregarAtivosIniciais();
});

// Carregar ativos com valores padrão
function carregarAtivosIniciais() {
    const ativosDefault = [
        {
            nome: "ERP",
            criticidade: "Alta",
            backup: "diário",
            rtoIdeal: 2,
            rpoIdeal: 60
        },
        {
            nome: "E-mail",
            criticidade: "Média",
            backup: "em tempo real",
            rtoIdeal: 4,
            rpoIdeal: 15
        },
        {
            nome: "Banco de Dados",
            criticidade: "Alta",
            backup: "diário",
            rtoIdeal: 1,
            rpoIdeal: 30
        },
        {
            nome: "Portal",
            criticidade: "Média",
            backup: "diário",
            rtoIdeal: 6,
            rpoIdeal: 120
        }
    ];
    
    appState.ativos = ativosDefault;
}

// Função para iniciar a simulação
function iniciarSimulacao() {
    // Coletar dados dos ativos da interface
    coletarDadosAtivos();
    
    // Gerar cenário aleatório
    gerarCenario();
    
    // Navegar para a tela de cenário
    navegarPara('cenario-incidente');
}

// Coletar dados dos ativos da interface
function coletarDadosAtivos() {
    const ativos = ['erp', 'email', 'bd', 'portal'];
    const nomes = ['ERP', 'E-mail', 'Banco de Dados', 'Portal'];
    
    appState.ativos = [];
    
    ativos.forEach((ativo, index) => {
        const criticidade = document.getElementById(`${ativo}-criticidade`).value;
        const backup = document.getElementById(`${ativo}-backup`).value;
        const rtoIdeal = parseFloat(document.getElementById(`${ativo}-rto`).value);
        const rpoIdeal = parseInt(document.getElementById(`${ativo}-rpo`).value);
        
        appState.ativos.push({
            nome: nomes[index],
            criticidade,
            backup,
            rtoIdeal,
            rpoIdeal
        });
    });
}

// Gerar cenário aleatório
function gerarCenario() {
    const cenarioAleatorio = cenarios[Math.floor(Math.random() * cenarios.length)];
    appState.cenarioAtual = cenarioAleatorio;
    
    // Atualizar interface do cenário
    document.getElementById('incident-type').textContent = cenarioAleatorio.tipo;
    document.getElementById('incident-description').textContent = cenarioAleatorio.descricao;
    document.getElementById('sistemas-afetados').textContent = cenarioAleatorio.sistemasAfetados.join(', ');
    document.getElementById('tempo-offline').textContent = cenarioAleatorio.tempoOffline;
    document.getElementById('perda-dados').textContent = cenarioAleatorio.perdaDados;
    
    // Atualizar ícone do alerta
    const alertIcon = document.querySelector('.alert-icon i');
    alertIcon.className = cenarioAleatorio.icon;
}

// Navegar para tela de decisão
function tomarDecisao() {
    // Atualizar opções do select com sistemas afetados
    const selectSistema = document.getElementById('sistema-prioridade');
    selectSistema.innerHTML = '<option value="">Selecione...</option>';
    
    appState.cenarioAtual.sistemasAfetados.forEach(sistema => {
        const option = document.createElement('option');
        option.value = sistema;
        option.textContent = sistema === 'E-mail' ? 'E-mail Corporativo' : 
                           sistema === 'ERP' ? 'Sistema ERP' :
                           sistema === 'Banco de Dados' ? 'Banco de Dados' :
                           'Portal Institucional';
        selectSistema.appendChild(option);
    });
    
    // Iniciar timer
    iniciarTimer();
    
    navegarPara('decisao-aluno');
}

// Iniciar timer de decisão
function iniciarTimer() {
    appState.tempoRestante = 300; // 5 minutos
    atualizarDisplayTimer();
    
    appState.timer = setInterval(() => {
        appState.tempoRestante--;
        atualizarDisplayTimer();
        
        if (appState.tempoRestante <= 0) {
            clearInterval(appState.timer);
            // Forçar decisão automática ou mostrar timeout
            alert('Tempo esgotado! Tomando decisão automática...');
            avaliarDecisao();
        }
    }, 1000);
}

// Atualizar display do timer
function atualizarDisplayTimer() {
    const minutos = Math.floor(appState.tempoRestante / 60);
    const segundos = appState.tempoRestante % 60;
    const display = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    document.getElementById('timer-display').textContent = display;
    
    // Mudar cor quando tempo está acabando
    const timerElement = document.querySelector('.timer');
    if (appState.tempoRestante <= 60) {
        timerElement.style.background = 'linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%)';
        timerElement.style.borderColor = '#fc8181';
    }
}

// Avaliar decisão do aluno
function avaliarDecisao() {
    // Parar timer
    if (appState.timer) {
        clearInterval(appState.timer);
    }
    
    // Coletar decisão
    const sistemaPrioridade = document.getElementById('sistema-prioridade').value;
    const rtoEstimado = parseFloat(document.getElementById('rto-estimado').value) || 0;
    const rpoEstimado = parseInt(document.getElementById('rpo-estimado').value) || 0;
    const justificativa = document.getElementById('justificativa').value;
    
    if (!sistemaPrioridade || rtoEstimado <= 0 || rpoEstimado <= 0) {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }
    
    appState.decisaoAluno = {
        sistemaPrioridade,
        rtoEstimado,
        rpoEstimado,
        justificativa
    };
    
    // Calcular resultado
    calcularResultado();
    
    // Navegar para resultado
    navegarPara('resultado-feedback');
}

// Calcular resultado da simulação
function calcularResultado() {
    const decisao = appState.decisaoAluno;
    const sistemaEscolhido = appState.ativos.find(ativo => ativo.nome === decisao.sistemaPrioridade);
    
    if (!sistemaEscolhido) {
        console.error('Sistema não encontrado');
        return;
    }
    
    // Validar RTO e RPO
    const rtoOk = decisao.rtoEstimado <= sistemaEscolhido.rtoIdeal;
    const rpoOk = decisao.rpoEstimado <= sistemaEscolhido.rpoIdeal;
    
    // Calcular custo baseado na decisão
    let custoFinal = appState.cenarioAtual.custoBase;
    
    // Penalidades por exceder limites
    if (!rtoOk) {
        custoFinal += (decisao.rtoEstimado - sistemaEscolhido.rtoIdeal) * 5000;
    }
    if (!rpoOk) {
        custoFinal += (decisao.rpoEstimado - sistemaEscolhido.rpoIdeal) * 100;
    }
    
    // Bonus por priorizar sistema crítico
    if (sistemaEscolhido.criticidade === 'Alta') {
        custoFinal *= 0.9; // 10% de desconto
    }
    
    // Calcular usuários afetados
    const usuariosAfetados = calcularUsuariosAfetados(decisao.sistemaPrioridade);
    
    // Gerar lições aprendidas aleatórias
    const licoesEscolhidas = gerarLicoesAprendidas(rtoOk, rpoOk, sistemaEscolhido.criticidade);
    
    appState.resultado = {
        rtoOk,
        rpoOk,
        custoFinal: Math.round(custoFinal),
        usuariosAfetados,
        emailsPerdidos: calcularEmailsPerdidos(),
        licoes: licoesEscolhidas,
        sistemaEscolhido
    };
    
    // Atualizar interface de resultado
    atualizarInterfaceResultado();
}

// Calcular usuários afetados baseado no sistema
function calcularUsuariosAfetados(sistema) {
    const usuarios = {
        'ERP': 150,
        'E-mail': 250,
        'Banco de Dados': 200,
        'Portal': 300
    };
    return usuarios[sistema] || 100;
}

// Calcular e-mails perdidos
function calcularEmailsPerdidos() {
    const perdaHoras = parseInt(appState.cenarioAtual.perdaDados.split(' ')[0]);
    return `${perdaHoras} horas`;
}

// Gerar lições aprendidas baseadas no resultado
function gerarLicoesAprendidas(rtoOk, rpoOk, criticidade) {
    let licoes = [];
    
    // Sempre incluir uma lição básica
    licoes.push(licoesAprendidas[0]);
    
    // Lições baseadas no resultado
    if (!rtoOk) {
        licoes.push("Investir em redundância de sistemas críticos pode melhorar drasticamente o RTO.");
    }
    if (!rpoOk) {
        licoes.push("Ter backups regulares e testados pode reduzir significativamente o RPO em situações de crise.");
    }
    if (criticidade === 'Alta') {
        licoes.push("Sistemas de alta criticidade devem ter prioridade máxima em planos de recuperação.");
    }
    
    // Adicionar lições aleatórias se necessário
    while (licoes.length < 3) {
        const licaoAleatoria = licoesAprendidas[Math.floor(Math.random() * licoesAprendidas.length)];
        if (!licoes.includes(licaoAleatoria)) {
            licoes.push(licaoAleatoria);
        }
    }
    
    return licoes.slice(0, 3);
}

// Atualizar interface de resultado
function atualizarInterfaceResultado() {
    const resultado = appState.resultado;
    const decisao = appState.decisaoAluno;
    
    // Selo de resultado
    const selo = document.getElementById('selo-resultado');
    const seloIcon = selo.querySelector('i');
    const seloText = selo.querySelector('span');
    
    if (resultado.rtoOk && resultado.rpoOk) {
        selo.className = 'badge success';
        seloIcon.className = 'fas fa-check-circle';
        seloText.textContent = 'Plano Eficaz';
    } else {
        selo.className = 'badge failure';
        seloIcon.className = 'fas fa-times-circle';
        seloText.textContent = 'Plano Falhou';
    }
    
    // Status RTO
    const rtoResultado = document.getElementById('rto-resultado');
    const rtoDetalhes = document.getElementById('rto-detalhes');
    
    if (resultado.rtoOk) {
        rtoResultado.className = 'result-status success';
        rtoResultado.innerHTML = '<i class="fas fa-check"></i><span>Dentro do limite</span>';
    } else {
        rtoResultado.className = 'result-status failure';
        rtoResultado.innerHTML = '<i class="fas fa-times"></i><span>Excedeu o limite</span>';
    }
    rtoDetalhes.textContent = `${decisao.rtoEstimado}h estimado vs ${resultado.sistemaEscolhido.rtoIdeal}h ideal`;
    
    // Status RPO
    const rpoResultado = document.getElementById('rpo-resultado');
    const rpoDetalhes = document.getElementById('rpo-detalhes');
    
    if (resultado.rpoOk) {
        rpoResultado.className = 'result-status success';
        rpoResultado.innerHTML = '<i class="fas fa-check"></i><span>Dentro do limite</span>';
    } else {
        rpoResultado.className = 'result-status failure';
        rpoResultado.innerHTML = '<i class="fas fa-times"></i><span>Excedeu o limite</span>';
    }
    rpoDetalhes.textContent = `${decisao.rpoEstimado}min estimado vs ${resultado.sistemaEscolhido.rpoIdeal}min ideal`;
    
    // Detalhes do impacto
    document.getElementById('emails-perdidos').textContent = resultado.emailsPerdidos;
    document.getElementById('custo-estimado').textContent = `R$ ${resultado.custoFinal.toLocaleString('pt-BR')}`;
    document.getElementById('usuarios-afetados').textContent = resultado.usuariosAfetados;
    
    // Lições aprendidas
    const licoesContainer = document.getElementById('licoes-container');
    licoesContainer.innerHTML = '';
    
    resultado.licoes.forEach(licao => {
        const licaoElement = document.createElement('div');
        licaoElement.className = 'lesson';
        licaoElement.innerHTML = `
            <i class="fas fa-lightbulb"></i>
            <p>${licao}</p>
        `;
        licoesContainer.appendChild(licaoElement);
    });
}

// Exportar relatório
function exportarRelatorio() {
    const resultado = appState.resultado;
    const decisao = appState.decisaoAluno;
    const cenario = appState.cenarioAtual;
    
    const relatorio = `
RELATÓRIO DE SIMULAÇÃO - WM SimPCN
================================

CENÁRIO: ${cenario.tipo}
Descrição: ${cenario.descricao}
Sistemas Afetados: ${cenario.sistemasAfetados.join(', ')}
Tempo Offline: ${cenario.tempoOffline}
Perda de Dados: ${cenario.perdaDados}

DECISÃO DO ALUNO:
Sistema Priorizado: ${decisao.sistemaPrioridade}
RTO Estimado: ${decisao.rtoEstimado} horas
RPO Estimado: ${decisao.rpoEstimado} minutos
Justificativa: ${decisao.justificativa}

RESULTADO:
RTO: ${resultado.rtoOk ? 'APROVADO' : 'REPROVADO'}
RPO: ${resultado.rpoOk ? 'APROVADO' : 'REPROVADO'}
Status Geral: ${resultado.rtoOk && resultado.rpoOk ? 'PLANO EFICAZ' : 'PLANO FALHOU'}

IMPACTO:
Custo Estimado: R$ ${resultado.custoFinal.toLocaleString('pt-BR')}
Usuários Afetados: ${resultado.usuariosAfetados}
E-mails Perdidos: ${resultado.emailsPerdidos}

LIÇÕES APRENDIDAS:
${resultado.licoes.map((licao, index) => `${index + 1}. ${licao}`).join('\n')}

Data da Simulação: ${new Date().toLocaleString('pt-BR')}
    `;
    
    // Criar e baixar arquivo
    const blob = new Blob([relatorio], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio_simpcn_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Funções de navegação
function navegarPara(telaId) {
    // Esconder todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostrar tela selecionada
    document.getElementById(telaId).classList.add('active');
}

function voltarCadastro() {
    navegarPara('cadastro-ativos');
}

function voltarCenario() {
    // Parar timer se estiver rodando
    if (appState.timer) {
        clearInterval(appState.timer);
    }
    navegarPara('cenario-incidente');
}

function novaSimulacao() {
    // Resetar estado
    appState.cenarioAtual = null;
    appState.decisaoAluno = null;
    appState.resultado = null;
    appState.tempoRestante = 300;
    
    if (appState.timer) {
        clearInterval(appState.timer);
    }
    
    // Limpar formulários
    document.getElementById('sistema-prioridade').value = '';
    document.getElementById('rto-estimado').value = '';
    document.getElementById('rpo-estimado').value = '';
    document.getElementById('justificativa').value = '';
    
    // Voltar para cadastro
    navegarPara('cadastro-ativos');
}

// Função para demonstração/teste
function testarSimulacao() {
    console.log('Estado atual da aplicação:', appState);
}

