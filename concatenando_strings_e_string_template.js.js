const pessoa = {
    nome: "Alessandra",
    idade: 40,
    ehMaiorDeIdade: true,
    altura: 1.69
}

let texto = pessoa.nome + " é um(a) adulto(a) de " + pessoa.idade + " anos";

if (pessoa.idade < 18) {
    console.log(pessoa.nome + " é uma criança de " + pessoa.idade + " anos");
}   else if (pessoa.idade < 60) {
    console.log(texto);
}   else {
    console.log(`${pessoa.nome} é um(a) idoso(a) de ${pessoa.idade} anos`)
}
