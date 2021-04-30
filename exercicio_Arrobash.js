function solucao(textoCodificado) {
    let entrada = "";
    let textoDecodificado = "";
    
    for (let item of textoCodificado) {
        entrada = entrada + item;
        if (entrada == "###") {
            textoDecodificado = textoDecodificado + "C";
            entrada = "";
        } else if (entrada == "##@") {
            textoDecodificado = textoDecodificado + "U";
            entrada = "";
        } else if (entrada == "#@#") {
            textoDecodificado = textoDecodificado + "B";
            entrada = "";
        } else if (entrada == "#@@") {
            textoDecodificado = textoDecodificado + "A";
            entrada = "";
        } else if (entrada == "@##") {
            textoDecodificado = textoDecodificado + "D";
            entrada = "";
        } else if (entrada == "@#@") {
            textoDecodificado = textoDecodificado + "E";
            entrada = "";
        } else if (entrada == "@@#") {
            textoDecodificado = textoDecodificado + "M";
            entrada = "";
        } else if (entrada == "@@@") {
            textoDecodificado = textoDecodificado + "Y";
            entrada = "";
        }
    }
    console.log(textoDecodificado);
}

solucao("#@@####@@@##@#@@@#@@@");

/*
OUTRAS FORMAS DE FAZER:

SOLUÇÃO 1:
function solucao(textoCodificado) {
    
    let resposta = "";
        
    for (i = 0; i < textoCodificado.length; i += 3) {

        const pedaco = textoCodificado[i] + textoCodificado[i + 1] + textoCodificado[i + 2];

        if (pedaco == "###") {
            resposta += "C";
        } else if (pedaco == "##@") {
            resposta += "U";
        } else if (pedaco == "#@#") {
            resposta += "B";
        } else if (pedaco == "#@@") {
            resposta += "A";
        } else if (pedaco == "@##") {
            resposta += "D";
        } else if (pedaco == "@#@") {
            resposta += "E";
        } else if (pedaco == "@@#") {
            resposta += "M";
        } else {
            resposta += "Y";
        }
    }
    console.log(resposta);
}

SOLUÇÃO 2:
function solucao(textoCodificado) {

    const dicionario = {
        "###": "C",
        "##@": "U",
        "#@#": "B",
        "#@@": "A",
        "@##": "D",
        "@#@": "E",
        "@@#": "M",
        "@@@": "Y"
    };
    
    let resposta = "";
        
    for (i = 0; i < textoCodificado.length; i += 3) {
        const pedaco = textoCodificado[i] + textoCodificado[i + 1] + textoCodificado[i + 2];
        resposta += dicionario[pedaco];
    }
        
    console.log(resposta);
}
*/