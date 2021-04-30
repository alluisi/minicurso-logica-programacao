const texto = "Eu gosto da Cubos Academy";

let palavra = "";
const novaFrase = [];

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === " ") {
        novaFrase.push(palavra);
        palavra = "";
        continue;
    }
    palavra += texto[i];
}

novaFrase.push(palavra);

const fraseInvertida = [];

for (let i = novaFrase.length - 1; i >= 0; i--) {
    fraseInvertida.push(novaFrase[i]);
}

console.log(fraseInvertida);
