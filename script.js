// ==========================================
// PORTAL ANJO CÓSMICO - INTELIGÊNCIA CORE
// CONFIGURAÇÕES DE PLANOS, CRÉDITOS E JUROS
// ==========================================

// Preenchimento automático do campo Dia (1 a 31) ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const selectDia = document.getElementById("dia");
    if (selectDia) {
        for (let i = 1; i <= 31; i++) {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = i;
            selectDia.appendChild(opt);
        }
    }
    atualizarContadorTela();
    inicializarBanners();
});

// Inicialização das variáveis de estado locais no navegador (Cache Local)
let usuarioDados = JSON.parse(localStorage.getItem('anjo_cosmico_user')) || {
    usosGratis: 0,
    creditos: 5, // Começa com 5 usos gratuitos liberados
    planoAtivo: 'Free',
    jaComprouBasico: false,
    jaComprouVip: false,
    premiumAte: null, // Data de expiração do Premium
    codigoIndicacaoProprio: 'ANJO-' + Math.floor(1000 + Math.random() * 9000),
    indicadosValidados: 0
};

// Função auxiliar para salvar o progresso do usuário no navegador
function salvarProgresso() {
    localStorage.setItem('anjo_cosmico_user', JSON.stringify(usuarioDados));
    atualizarContadorTela();
}

// Atualiza o aviso de créditos remanescentes na tela
function atualizarContadorTela() {
    const contadorDiv = document.getElementById("contadorExibicao");
    if (!contadorDiv) return;

    // Checa se o plano Premium expirou por tempo (3 meses)
    if (usuarioDados.planoAtivo === 'Premium' && usuarioDados.premiumAte) {
        if (new Date().getTime() > usuarioDados.premiumAte) {
            usuarioDados.planoAtivo = 'Free';
            usuarioDados.creditos = 0;
            salvarProgresso();
            alert("Seu passaporte Premium de 3 meses expirou. Retornando ao plano básico.");
        }
    }

    if (usuarioDados.planoAtivo === 'Premium') {
        contadorDiv.innerHTML = "✨ Plano Premium Ativo: Seu Acesso Livre está Garantido!";
        contadorDiv.style.color = "#d4af37";
    } else {
        contadorDiv.innerHTML = `🔮 Você possui <strong>${usuarioDados.creditos}</strong> consultas espirituais disponíveis.`;
        contadorDiv.style.color = "#a29bfe";
    }
}
// ==========================================
// FUNÇÃO DO BOTÃO PRINCIPAL E BLOQUEIO DE CRÉDITOS
// ==========================================

function descobrirPerfil() {
    const nome = document.getElementById("nome").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();
    const dia = parseInt(document.getElementById("dia").value) || 1;
    const mes = parseInt(document.getElementById("mes").value) || 1;
    const ano = parseInt(document.getElementById("ano").value) || 2026;
    const codigoConvite = document.getElementById("codigoConvite").value.trim();
    const resultadoDiv = document.getElementById("resultado");

    if (!nome) {
        alert("Por favor, digite seu nome antes de revelar o seu mapa!");
        return;
    }

    // Validação de segurança: Verifica se tem créditos disponíveis
    if (usuarioDados.planoAtivo !== 'Premium' && usuarioDados.creditos <= 0) {
        exibirTelaBloqueioECompra(resultadoDiv);
        return;
    }

    // Processa o código de convite caso o usuário tenha digitado um
    if (codigoConvite && codigoConvite.startsWith("ANJO-")) {
        processarInclusaoCodigoConvite(codigoConvite, whatsapp);
    }

    // Desconta 1 crédito se não for usuário Premium
    if (usuarioDados.planoAtivo !== 'Premium') {
        usuarioDados.creditos--;
        usuarioDados.usosGratis++;
        salvarProgresso();
    }

    // EXIBIÇÃO DO MAPA ASTRAL NA TELA (O conteúdo abaixo roda o seu cálculo interno)
    resultadoDiv.style.display = "block";
    resultadoDiv.innerHTML = `
        <h3>🌌 Portal de Revelação de ${nome}</h3>
        <p class="info-linha">📅 Data de Nascimento: <strong>${dia}/${mes}/${ano}</strong></p>
        <!-- Abaixo o sistema puxará a lógica do seu mapa astrológico atual -->
        <p class="info-linha">✨ Conexão Cósmica estabelecida com sucesso!</p>
    `;
    
    // Se o plano ativo for o Básico ou se o usuário estiver no limite grátis, esconde o botão de PDF
    if (usuarioDados.planoAtivo === 'Free' || usuarioDados.planoAtivo === 'Básico') {
        resultadoDiv.innerHTML += `
            <div class="opcoes-pagamento">
                <p style="font-size:0.85rem; color:#e5c158; text-align:center; margin-bottom:5px;">🌟 Quer aprofundar sua experiência?</p>
                <a href="${obterLinkPlano('Basico')}" class="btn-venda btn-basico" target="_blank">Adquirir Plano Básico (Texto + 20 Consultas) - R$ 1,90</a>
                <a href="https://mpago.la" class="btn-venda btn-vip" target="_blank">Gerar Meu Mapa em PDF Completo - R$ 4,90</a>
                <a href="${obterLinkPlano('Premium')}" class="btn-venda btn-premium" target="_blank">Acesso Total Sem Limites (3 Meses) - R$ 8,90</a>
            </div>
        `;
    }
    
    resultadoDiv.scrollIntoView({ behavior: 'smooth' });
}

// Monta o layout de bloqueio amigável na tela quando o saldo zera
function exibirTelaBloqueioECompra(elementoTela) {
    elementoTela.style.display = "block";
    
    // Define os textos de recompensa inteligentes (Fidelidade)
    const textoBasico = usuarioDados.jaComprouBasico ? "Renovar Básico (BÔNUS: Ganhe +30 Consultas)" : "Plano Básico (Ganhe +20 Consultas)";
    const textoVip = usuarioDados.jaComprouVip ? "Renovar VIP (BÔNUS: Ganhe +65 Consultas)" : "Plano VIP (PDF + 50 Consultas)";

    elementoTela.innerHTML = `
        <h3 style="color:#ff4757; border-bottom-color:rgba(255,71,87,0.3);">⚠️ Energia Espiritual Limmitada</h3>
        <p style="font-size:0.9rem; margin-bottom:15px; color:#dfe6e9;">Suas consultas gratuitas atingiram o teto cósmico. Escolha uma opção de luz abaixo para continuar consultando novos nomes sem travas:</p>
        
        <div class="opcoes-pagamento">
            <a href="${obterLinkPlano('Basico')}" class="btn-venda btn-basico" target="_blank">${textoBasico} - R$ 1,90</a>
            <a href="https://mpago.la" class="btn-venda btn-vip" target="_blank">${textoVip} - R$ 4,90</a>
            <a href="${obterLinkPlano('Premium')}" class="btn-venda btn-premium" target="_blank">Passaporte Premium (Livre por 3 Meses) - R$ 8,90</a>
        </div>

        <div style="margin-top:20px; border-top:1px solid rgba(255,255,255,0.1); padding-top:15px;">
            <label class="chk-container">
                <input type="checkbox" id="chkIndicar" onchange="alternarBlocoIndicacao(this)">
                <span>Convidar amigos e ganhar 10 créditos extras grátis!</span>
            </label>
            <div id="blocoCompartilharZap" style="display:none; margin-top:12px; text-align:center;">
                <p style="font-size:0.75rem; color:#b2bec3; margin-bottom:8px;">Seu Código de Luz é: <strong>${usuarioDados.codigoIndicacaoProprio}</strong></p>
                <button class="btn-principal" style="margin-top:5px; height:40px; background:#25d366;" onclick="dispararConviteWhatsapp()">👉 Enviar Convites no WhatsApp</button>
            </div>
        </div>
    `;
    elementoTela.scrollIntoView({ behavior: 'smooth' });
}

// Retorna o link correto do Mercado Pago dependendo do plano (Exemplo)
function obterLinkPlano(plano) {
    if (plano === 'Basico') return 'https://mpago.la';
    if (plano === 'Premium') return 'https://mpago.la';
    return '#';
}
// ==========================================
// MÁQUINA VIRAL - CÓDIGO DE LUZ E WHATSAPP
// ==========================================

// Controla a exibição do botão de compartilhar no WhatsApp
function alternarBlocoIndicacao(checkbox) {
    const bloco = document.getElementById("blocoCompartilharZap");
    if (bloco) {
        bloco.style.display = checkbox.checked ? "block" : "none";
    }
}

// Abre o WhatsApp do usuário com a mensagem de convite pronta
function dispararConviteWhatsapp() {
    const linkSite = window.location.href;
    const codigo = usuarioDados.codigoIndicacaoProprio;
    
    // Texto persuasivo estruturado para o clique por impulso do amigo
    const textoMensagem = encodeURIComponent(
        `Olá! Estou usando o app Anjo Cósmico para ver meu mapa astral e meu anjo guardião. É incrível! Acesse pelo link abaixo e use o meu Código de Luz para ganhar consultas grátis: \n\n🔗 Link: ${linkSite}\n🔑 Código: ${codigo}`
    );
    
    window.open(`https://whatsapp.com{textoMensagem}`, '_blank');
}

// Processa a validação do código do amigo quando o novo usuário entra
function processarInclusaoCodigoConvite(codigo, whatsappUsuario) {
    // Evita usar o próprio código de indicação
    if (codigo === usuarioDados.codigoIndicacaoProprio) return;

    // Envia a confirmação para a Planilha do Google computar o bônus
    const urlPlanilha = "SUA_URL_DO_GOOGLE_APPS_SCRIPT_AQUI"; 
    
    fetch(urlPlanilha, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            acao: "validar_convite",
            codigoOrigem: codigo,
            whatsappConvidado: whatsappUsuario || "Não informado"
        })
    })
    .then(() => {
        console.log("Código de indicação enviado para processamento.");
    })
    .catch(erro => console.error("Erro na comunicação viral:", erro));
}

// FUNÇÃO SECRETA: Chamada automaticamente caso o Mercado Pago retorne o usuário pago
// (Você pode rodar isso no console do navegador para testar as recargas locais)
function creditarCompraSucesso(planoComprado) {
    if (planoComprado === 'Basico') {
        // Se já comprou antes, ganha bônus Generoso de 30, senão 20
        usuarioDados.creditos += usuarioDados.jaComprouBasico ? 30 : 20;
        usuarioDados.jaComprouBasico = true;
        usuarioDados.planoAtivo = 'Básico';
        alert("Sua recarga do Plano Básico foi concluída com sucesso! Créditos adicionados.");
    } 
    else if (planoComprado === 'Vip') {
        usuarioDados.creditos += usuarioDados.jaComprouVip ? 65 : 50;
        usuarioDados.jaComprouVip = true;
        usuarioDados.planoAtivo = 'VIP';
        alert("Seu Plano VIP foi ativado! PDF disponível e créditos em conta.");
    } 
    else if (planoComprado === 'Premium') {
        usuarioDados.planoAtivo = 'Premium';
        // Libera 3 meses de acesso livre (calculado em milissegundos)
        const trêsMesesEmMs = 90 * 24 * 60 * 60 * 1000;
        usuarioDados.premiumAte = new Date().getTime() + trêsMesesEmMs;
        alert("Parabéns! Seu Passaporte Premium de 3 meses de acesso livre está liberado!");
    }
    
    salvarProgresso();
}
// ==========================================
// AUTOMAÇÃO DOS BANNERS ROTATIVOS (SaaS)
// ==========================================

// Lista temporária de anunciantes (padrão) caso a planilha esteja vazia no início
let listaAnunciantes = [
    { nome: "Anjo Cósmico Portal", img: "https://placeholder.com", link: "#" }
];

let indiceBannerTopo = 0;
let indiceBannerRodape = 0;
const URL_PLANILHA_ANUNCIOS = "SUA_URL_DO_GOOGLE_APPS_SCRIPT_AQUI";

// Puxa os anúncios ativos direto da sua planilha do Google Sheets
function inicializarBanners() {
    fetch(`${URL_PLANILHA_ANUNCIOS}?acao=puxar_banners`)
    .then(res => res.json())
    .then(dados => {
        if (dados && dados.length > 0) {
            listaAnunciantes = dados;
        }
        // Inicia o loop de rotação a cada 6 segundos
        rodarCarrosselBanners();
        setInterval(rodarCarrosselBanners, 6000);
    })
    .catch(() => {
        // Se der erro, roda a lista padrão sem travar o site
        rodarCarrosselBanners();
        setInterval(rodarCarrosselBanners, 6000);
    });
}

// Altera as fotos e os links do topo e rodapé de forma rotativa
function rodarCarrosselBanners() {
    if (listaAnunciantes.length === 0) return;

    const bTopo = document.getElementById("bannerTopo");
    const bRodape = document.getElementById("bannerRodape");

    if (bTopo) {
        const item = listaAnunciantes[indiceBannerTopo];
        bTopo.innerHTML = `<img src="${item.img}" alt="${item.nome}" onclick="window.open('${item.link}', '_blank')">`;
        indiceBannerTopo = (indiceBannerTopo + 1) % listaAnunciantes.length;
    }

    if (bRodape) {
        // O rodapé pega a lista de trás para frente para não exibir o mesmo anúncio ao mesmo tempo
        const item = listaAnunciantes[listaAnunciantes.length - 1 - indiceBannerRodape];
        bRodape.innerHTML = `<img src="${item.img}" alt="${item.nome}" onclick="window.open('${item.link}', '_blank')">`;
        indiceBannerRodape = (indiceBannerRodape + 1) % listaAnunciantes.length;
    }
}

// Abre a janela oculta do "Anuncie Aqui"
function abrirPainelAnunciante(evento) {
    evento.preventDefault();
    document.getElementById("painelAnunciante").style.display = "flex";
}

function fecharPainelAnunciante() {
    document.getElementById("painelAnunciante").style.display = "none";
}

// Redireciona o lojista para o seu link do Mercado Pago de R$ 29,90
function processarPagamentoAnuncio() {
    const nomeEmpresa = document.getElementById("anuncNome").value.trim();
    const linkDestino = document.getElementById("anuncLink").value.trim();
    const imgBanner = document.getElementById("anuncImg").value.trim();

    if (!nomeEmpresa || !linkDestino || !imgBanner) {
        alert("Por favor, preencha todos os campos do seu comércio antes do pagamento!");
        return;
    }

    // Grava temporariamente os dados digitados na memória do navegador dele
    const dadosTemp = { nome: nomeEmpresa, link: linkDestino, img: imgBanner };
    localStorage.setItem('anjo_cosmico_temp_anuncio', JSON.stringify(dadosTemp));

    // Abre o link do Mercado Pago gerado em consenso
    window.open("https://mpago.la", "_blank");

    // Revela o campo secreto para ele ativar após concluir o pagamento
    document.getElementById("blocoAtivacao").style.display = "block";
}

// Ativação 100% Robótica com código na Planilha
function ativarBannerAutomatico() {
    const codigoDigitado = document.getElementById("codigoAtivacaoInput").value.trim();
    const dadosAnuncio = JSON.parse(localStorage.getItem('anjo_cosmico_temp_anuncio'));

    if (!codigoDigitado) {
        alert("Insira o código gerado pelo Mercado Pago para ativar!");
        return;
    }

    if (!dadosAnuncio) {
        alert("Dados do anúncio não encontrados. Refaça o formulário.");
        return;
    }

    // Envia o pacote completo para a planilha computar e validar o dinheiro recebido
    fetch(URL_PLANILHA_ANUNCIOS, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            acao: "ativar_banner_sads",
            codigo: codigoDigitado,
            nome: dadosAnuncio.nome,
            link: dadosAnuncio.link,
            img: dadosAnuncio.img,
            valorPago: "29.90", // Registra o financeiro automaticamente na coluna
            periodo: "3 Meses"
        })
    })
    .then(() => {
        alert("✨ Conexão Concluída! Seu anúncio está ATIVO e rodando no Portal Anjo Cósmico!");
        fecharPainelAnunciante();
        location.reload();
    })
    .catch(() => alert("Erro ao ativar. Verifique sua conexão."));
}
