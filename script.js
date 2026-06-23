// Banco de dados astral simplificado para os Anjos e Signos
const dadosSignos = {
    "Áries": { elemento: "Fogo 🔥", regente: "Marte 🔴" },
    "Touro": { elemento: "Terra 🌱", regente: "Vênus ♀️" },
    "Gêmeos": { elemento: "Ar 💨", regente: "Mercúrio ☿" },
    "Câncer": { elemento: "Água 💧", regente: "Lua 🌙" },
    "Leão": { elemento: "Fogo 🔥", regente: "Sol ☀️" },
    "Virgem": { elemento: "Terra 🌱", regente: "Mercúrio ☿" },
    "Libra": { elemento: "Ar 💨", regente: "Vênus ♀️" },
    "Escorpião": { elemento: "Água 💧", regente: "Plutão/Marte 🌌" },
    "Sagitário": { elemento: "Fogo 🔥", regente: "Júpiter ♃" },
    "Capricórnio": { elemento: "Terra 🌱", regente: "Saturno ♄" },
    "Aquário": { elemento: "Ar 💨", regente: "Urano 🌌" },
    "Peixes": { elemento: "Água 💧", regente: "Netuno 🌊" }
};

const anjosGuardioes = [
    { nome: "Vehuiah", mantra: "Eu sou a força divina que rompe as barreiras do medo. Diante dos desafios da vida, eu me transformo, descubro meu poder oculto e renasço muito mais forte, guiado pela luz eterna.", bencao: "Concede uma coragem invencível e uma força espiritual extraordinária para iniciar projetos grandiosos, vencer crises severas e iluminar caminhos que antes pareciam completamente escuros." },
    { nome: "Jeliel", mantra: "A harmonia universal habita o centro do meu coração. Eu sou um farol de pacificação, e a minha presença acalma as tempestades e estabelece a ordem onde houver caos.", bencao: "Traz paz absoluta ao ambiente familiar, sela a fidelidade eterna entre aqueles que se amam e derrama uma energia de conciliação que ajuda a resolver disputas e desentendimentos complexos." },
    { nome: "Sitael", mantra: "Eu sou o arquiteto soberano da minha própria história. Sob o manto protetor das milícias celestes, nenhum obstáculo terreno é capaz de desviar os meus passos do sucesso.", bencao: "Atua como um escudo divino contra grandes adversidades, protege a integridade física e espiritual e concede a virtude da honra, ajudando a cumprir promessas e atrair a verdade." },
    { nome: "Elemiah", mantra: "O passado passou; eu liberto as velhas amarras e sigo leve, confiante e soberano em direção à minha evolução espiritual e prosperidade.", bencao: "Afasta a angústia da alma e a incerteza do futuro. Abre portas de ouro para novos caminhos profissionais e revela os segredos para transformar crises em grandes vitórias." },
    { nome: "Mahasiah", mantra: "A sabedoria infinita do universo flui através das minhas escolhas. Minha mente é um templo de luz, clareza e discernimento para compreender os mistérios do mundo.", bencao: "Facilita o aprendizado de grandes artes, ciências e estudos elevados. Derrama uma profunda paz de espírito na mente do protegido, limpando pensamentos negativos e ansiedades." },
    { nome: "Lelahel", mantra: "A luz milagrosa da cura, do amor e da inspiração divina brilha intensamente através de mim, tocando a vida de todos que cruzam a minha jornada.", bencao: "Traz uma poderosa energia de cura física e espiritual. Atrai inspiração artística, reconhecimento honesto nos negócios e magnetismo pessoal para atrair a felicidade e o amor verdadeiro." },
    { nome: "Achaiah", mantra: "Eu contemplo o universo com a paciência dos anjos. Na quietude da minha alma, eu descubro as respostas mais profundas e os segredos ocultos da criação.", bencao: "Multiplica a paciência nas horas difíceis, expande a inteligência prática e ajuda a desvendar mistérios complexos da natureza e do trabalho, transformando tarefas difíceis em sucesso absoluto." },
    { nome: "Cahetel", mantra: "Eu sinto e agradeço pela imensa abundância cósmica que a terra e o céu derramam diariamente sobre a minha vida, meu lar e meu trabalho.", bencao: "Atrai a fartura material, o sucesso estrondoso em negócios e plantações. Cria uma barreira celestial intransponível que afasta energias densas, inveja e feitiçarias da sua vida." },
    { nome: "Haziel", mantra: "A misericórdia do Criador me envolve como um manto sagrado. Eu aprendo a perdoar o passado e permito que o amor incondicional guie minhas relações.", bencao: "Atrai a promessa de amizades leais e sinceras, abre as portas para o favor e apoio de pessoas influentes e concede a graça do perdão para libertar o coração de velhas mágoas." },
    { nome: "Aladiah", mantra: "Minhas feridas antigas se fecham agora. Meu espírito se renova por completo na fonte da juventude cósmica, pronto para uma nova história de triunfo.", bencao: "Traz regeneração total da saúde e restauração da boa reputação. Ajuda a superar erros cometidos no passado e transforma trajetórias difíceis em grandes exemplos de superação." },
    { nome: "Laoviah", mantra: "A minha verdadeira vitória consiste no equilíbrio inabalável da minha alma. Eu sou protegido contra as ilusões do mundo e sigo firme na luz.", bencao: "Protege o indivíduo contra fraudes, mentiras e falsidades intelectuais. Concede um talento natural brilhante que traz renome, sucesso e reconhecimento público merecido." },
    { nome: "Hahahiah", mantra: "O meu coração é um santuário de paz mística, totalmente inacessível às forças do mal. Eu caminho sob a guarda dos sentinelas celestes.", bencao: "Atua como um escudo supremo contra a falsidade e a traição. Revela grandes mistérios do destino e conselhos valiosos através de sonhos lúcidos e intuições certeiras." },
    { nome: "Caliel", mantra: "Minha mente é justiça, reta e iluminada pela verdade inabalável. Eu reconheço a justiça divina em todas as coisas e sou amparado por ela.", bencao: "Fornece socorro espiritual ultra rápido diante de problemas jurídicos ou burocráticos. Ajuda a reconhecer a verdade imediatamente e confunde os inimigos que tentam prejudicar o protegido." }
];

// Preenche a lista de dias (1 a 31) ao iniciar a página
window.onload = function() {
    const selectDia = document.getElementById("dia");
    if (selectDia) {
        for (let i = 1; i <= 31; i++) {
            let opt = document.createElement("option");
            opt.value = i;
            opt.innerHTML = i;
            selectDia.appendChild(opt);
        }
    }
};

// BANCO DE DADOS DOS ANJOS
const tabelaAnjos = [
  { inicio: "03-20", fim: "03-24", 
    nome: "VEHUIAH", msg: "Espírito empreendedor." },
  { inicio: "03-25", fim: "03-29", 
    nome: "JELIEL", msg: "Paz e fidelidade." },
  { inicio: "03-30", fim: "04-03", 
    nome: "SITAEL", msg: "Proteção contra adversidades." },
  { inicio: "04-04", fim: "04-08", 
    nome: "ELEMIAH", msg: "Proteção em viagens." },
  { inicio: "04-09", fim: "04-13", 
    nome: "MAHASIAH", msg: "Paz interior." },
  { inicio: "04-14", fim: "04-18", 
    nome: "LELAHEL", msg: "Arte, fama e fortuna." },
  { inicio: "04-19", fim: "04-23", 
    nome: "ACHAIAH", msg: "Paciência e estudos." },
  { inicio: "04-24", fim: "04-28", 
    nome: "CAHETHEL", msg: "Abundância e colheitas." },
  { inicio: "04-29", fim: "05-03", 
    nome: "HAZIEL", msg: "Misericórdia e promessas." },
  { inicio: "05-04", fim: "05-08", 
    nome: "ALADIAH", msg: "Saúde e regeneração." },
  { inicio: "05-09", fim: "05-13", 
    nome: "LAOVIAH", msg: "Vitória contra a inveja." },
  { inicio: "05-14", fim: "05-18", 
    nome: "HAHAIAH", msg: "Mistérios ocultos." },
  { inicio: "05-19", fim: "05-23", 
    nome: "YESALEL", msg: "Fidelidade conjugal." },
  { inicio: "05-24", fim: "05-28", 
    nome: "MEBAHEL", msg: "Justiça e verdade." },
  { inicio: "05-29", fim: "06-02", 
    nome: "HARIEL", msg: "Ciências e artes." },
  { inicio: "06-03", fim: "06-07", 
    nome: "HAKAMIAH", msg: "Proteção contra golpes." }
];

// DATAS DOS GÊNIOS DA HUMANIDADE
const datasGenios = [
  "03-19", "05-31", "08-12", 
  "10-24", "01-05"
];

}

// Valida se a data é consistente com o mês
function validarData(dia, mes) {
    const trintaDias = [4, 6, 9, 11]; // Abril, Junho, Setembro, Novembro
    if (mes === 2 && dia > 29) return false;
    if (trintaDias.includes(mes) && dia > 30) return false;
    return true;
}

// CÉREBRO DO ANJO CÓSMICO: EXECUTAR O MAPA ASTRAL
function descobrirPerfil() {
    const campoNome = document.getElementById('nome').value.trim();
    const dia = parseInt(document.getElementById('dia').value, 10) || 1;
    const mes = parseInt(document.getElementById('mes').value, 10) || 1;
    const resultadoDiv = document.getElementById('resultado');

    if (!campoNome) {
        alert("Por favor, digite seu nome antes de revelar o seu mapa!");
        return;
    }

    if (!validarData(dia, mes)) {
        alert("A data inserida parece inválida para o mês selecionado. Por favor, confira o dia!");
        return;
    }

    const nomeSigno = obterSigno(dia, mes);
    const signoObj = dadosSignos[nomeSigno];

    // Cálculo do índice do anjo guardião
    const indiceAnjo = (dia + mes) % anjosGuardioes.length;
    const anjo = anjosGuardioes[indiceAnjo];

    if (resultadoDiv) {
        resultadoDiv.innerHTML = `
            <h3>Olá, ${campoNome}! Seu Portal Cósmico foi aberto:</h3>
            <div class="info-linha">✨ <strong>Signo Natal:</strong> <span class="destaque-astral">${nomeSigno}</span></div>
            <div class="info-linha">🔥 <strong>Elemento Cósmico:</strong> ${signoObj.elemento}</div>
            <div class="info-linha">🪐 <strong>Astro Regente:</strong> ${signoObj.regente}</div>
            <div class="info-linha">👼 <strong>Anjo da sua Alma:</strong> <span class="destaque-anjo">${anjo.nome}</span></div>
            <br>
            <div class="info-linha">📜 <strong>A Revelação e Bênção do Anjo:</strong>
                <div class="significado">${anjo.bencao}</div>
            </div>
            <br>
            <div class="info-linha">🔮 <strong>Seu Decreto Celeste e Mantra de Poder:</strong>
                <div class="significado" style="font-weight: 500; color: #fff;">"${anjo.mantra}"</div>
            </div>
            <div class="opcoes-pagamento">
                <a href="https://mpago.la/26ZYT6y" target="_blank" class="btn-venda btn-basico">Básico R$ 1,90</a>
                <a href="https://mpago.la/31hcncW" target="_blank" class="btn-venda btn-vip">VIP R$ 4,90</a>
                <a href="https://mpago.la/1wzgqeP" target="_blank" class="btn-venda btn-premium">Premium R$ 6,90</a>
            </div>
        `;
        resultadoDiv.style.display = "block";
        resultadoDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

function abrirSuporte() {
    document.getElementById('suporteModal').style.display = 'flex';
}

function fecharSuporte() {
    document.getElementById('suporteModal').style.display = 'none';
}
