const pessoas = [
    {
        nome: "Alessandra",
        idade: 40
    },
    {
        nome: "José",
        idade: 30
    },
    {
        nome: "Maria",
        idade: 16
    },
    {
        nome: "Pedro",
        idade: 12
    }
];

function criarRelatorio(lista) {
    let maiores = 0;
    let menores = 0;

    for (let item of lista) {
        const idade = item.idade;
        if (idade >= 18) {
            maiores++;
        } else {
            menores++;
        }
    }
    const resposta = {
        qtdMaiores: maiores,
        qtdMenores: menores,
        percMaiores: maiores / pessoas.length,
        percMenores: menores / pessoas.length
    };

    console.log(resposta);
}

criarRelatorio(pessoas);
