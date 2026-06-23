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
    { nome: "Vehuiah", mantra: "Eu sou a força divina que rompe as barreiras do medo. Diante dos desafios da vida, eu me transformo, descubro meu power oculto e renasço muito mais forte, guiado pela luz eterna.", bencao: "Concede uma coragem invencível e uma força espiritual extraordinária para iniciar projetos grandiosos, vencer crises severas e iluminar caminhos que antes pareciam completamente escuros." },
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

window.onload = function() {
    const selectDia = document.getElementById("dia");
    for (let i = 1; i <= 31; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = i;
        selectDia.appendChild(opt);
    }
};

function obterSigno(dia, mes) {
    if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) return "Áries";
    if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) return "Touro";
    if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) return "Gêmeos";
    if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) return "Câncer";
    if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) return "Leão";
    if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) return "Virgem";
    if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) return "Libra";
    if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) return "Escorpião";
    if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) return "Sagitário";
    if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) return "Capricórnio";
    if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) return "Aquário";
    return "Peixes";
}

function descobrirPerfil() {
    const nome = document.getElementById("nome").value.trim();
    const mes = parseInt(document.getElementById("mes").value);
    const resultadoDiv = document.getElementById("resultado");
    
    if (!nome) {
        alert("Por favor, digite seu nome antes de revelar o seu mapa!");
        return;
    }
    
    const divDia = parseInt(document.getElementById("dia").value);
    const nomeSigno = obterSigno(divDia, mes);
    const signo = dadosSignos[nomeSigno];
    const indiceAnjo = (divDia + mes) % anjosGuardioes.length;
    const anjo = anjosGuardioes[indiceAnjo];
    
    resultadoDiv.innerHTML = `
        <h3>Olá, ${nome}! Seu Portal Cósmico foi aberto:</h3>
        <div class="info-linha">✨ <strong>Signo Natal:</strong> <span class="destaque-astral">${nomeSigno}</span></div>
        <div class="info-linha">🔥 <strong>Elemento Cósmico:</strong> ${signo.elemento}</div>
        <div class="info-linha">🪐 <strong>Astro Regente:</strong> ${signo.regente}</div>
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
            <a href="https://mpago.la/26ZYT6y" target="_blank" class="btn-venda btn-basico">
                🟢 Quero o Relatório Básico no Site (Apenas R$ 1,90)
            </a>
            <a href="https://mpago.la/31hcncW" target="_blank" class="btn-venda btn-vip">
                🔮 Quero o Relatório VIP Completo em PDF (Apenas R$ 5,90)
            </a>
            <a href="https://mpago.la/1wzgqeP" target="_blank" class="btn-venda btn-premium">
                👑 Quero o PREMIUM: PDF + Conselho em Áudio (Apenas R$ 8,90)
            </a>
        </div>
    `;
    
    resultadoDiv.style.display = "block";
}
