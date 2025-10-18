const frasesComuns = {
    "bom dia": "etê aram",
    "boa noite": "etê yamí", 
    "como vai você": "mba'eichapa nde",
    "eu sou mulher": "xe cunhã",
    "eu sou homem": "xe abá",
    "onde está o sol": "mo aram?",
    "olá amigo": "anauê abaré",
    "obrigado": "aguyjevete",
    "até logo": "ame'ẽ porã",
    "estou com fome": "xe oikotevê tembi'u"
};

const dicionario = {
    "abá": "homem",
    "etê": "bom",
    "aram": "sol",
    "yamí": "noite",
    "anauê": "olá",
    "abaré": "amigo",
    "oca": "casa",
    "kurumí": "menino",
    "cunhã": "mulher",
    "yawara": "cachorro",
    "caá": "mato",
    "ira": "mel",
    "ibi": "terra",
    "i": "água",
    "tinga": "branco",
    "una": "preto",
    "aguyjevete": "obrigado",
    "ame'ẽ": "até",
    "porã": "logo",
    "xe": "eu",
    "oikotevê": "estou com",
    "tembi'u": "fome",
    "mba'eichapa": "como",
    "nde": "você",
    "mo": "onde"
};

function traduzirGuarani() {
    const entrada = document.getElementById("textoGuarani").value.toLowerCase().trim();
    const saida = document.getElementById("resultadoGuarani");

    if (!entrada) {
        saida.innerText = "Por favor, digite algo para traduzir";
        return;
    }

    let textoTraduzido = "";
    let textoRestante = entrada;

    for (const [frasePt, fraseGuarani] of Object.entries(frasesComuns)) {
        if (textoRestante.includes(frasePt)) {
            textoTraduzido += (textoTraduzido ? " " : "") + fraseGuarani;
            textoRestante = textoRestante.replace(frasePt, "").trim();
        }
    }

    if (textoRestante) {
        const palavras = textoRestante.split(/\s+/);
        palavras.forEach(palavra => {
            if (palavra) {
                const traducao = Object.keys(dicionario).find(key => dicionario[key] === palavra) || 
                               dicionario[palavra] || 
                               `[${palavra}]`;
                textoTraduzido += (textoTraduzido ? " " : "") + traducao;
            }
        });
    }

    saida.innerText = textoTraduzido || "Tradução não encontrada";
}