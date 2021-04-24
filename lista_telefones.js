// Encontre um nome na lista telefônica

let nome = ["Alessandra", "Jose", "Maria"];
/*
let i = 0;
let encontrado = false;

while (!encontrado) {
    if (nome[i] === "Jose") {
        encontrado = true;
        console.log("Encontrei!");
    }
    i++;   
}
*/
if (nome.includes("Jose")) {
    console.log("Encontrei!");
}
