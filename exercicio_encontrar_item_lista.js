const listaDeCompras = ["Arroz", "Feijão", "Banana", "Farinha"];

for (let item of listaDeCompras) {
    if (item === "Banana") {
        console.log(item);
        break;
    }    
}

// A utilização do break serve para interromper o loop e não
// ficar gastando processamento à toa.
