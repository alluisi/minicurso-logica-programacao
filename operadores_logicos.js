const pessoa = {
    nome: "José",
    idade: 19,
    altura: 1.39,
    temPassaporte: false
};

// idade mínima = 12
// altura mínima = 1.40
/*
if (pessoa.idade > 12) {
    if (pessoa.altura > 1.40) {
        console.log(`${pessoa.nome} pode brincar`);
    } else {
        console.log(`${pessoa.nome} não pode brincar porque não tem altura mínima.`);
    }
} else {
    console.log(`${pessoa.nome} não pode brincar porque não tem idade mínima.`)
}
*/
/*
Operadores Lógicos:
&& E
|| OU
! NEGAÇÂO
*/

if (pessoa.idade > 12 && pessoa.altura > 1.40) {
    console.log(`${pessoa.nome} pode brincar.`);
} else {
    console.log(`${pessoa.nome} não pode brincar.`)
}

if (!pessoa.temPassaporte) {
    console.log("BARRADO!")
}
