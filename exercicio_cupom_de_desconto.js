/* Cupom RANGOBARATO
apenas das 12h as 13:59h (14h não pode)
se tiver cupom e estiver dentro do horário, tem 10% de desconto
se além disso, a compra for de 100 reais ou mais, desconto de 20%
*/

let valorDoDesconto;

function imprimirValorDoDesconto(valorDaCompra, hora, cupom) {
    if (cupom === "RANGOBARATO") {
        if (hora >= 12 && hora < 14) {
            if (valorDaCompra >= 10) {
                (valorDoDesconto = valorDaCompra * 20 / 100); //0.2
            } else {
                valorDoDesconto = valorDaCompra * 10 / 100; //0.1
            }
            console.log(`O valor do desconto é ${valorDoDesconto}.`)
        } else {
            console.log("Esse cupom não é válido este horário.")
        }

    } else {
        console.log("Não possui nenhum cupom aplicável.")
    }
}

imprimirValorDoDesconto(100, 13, "RANGOBARATO");
