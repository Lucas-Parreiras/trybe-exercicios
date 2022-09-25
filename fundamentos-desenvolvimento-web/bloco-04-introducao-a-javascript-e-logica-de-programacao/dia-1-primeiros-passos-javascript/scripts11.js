let angulo1 = 50;
let angulo2 = 90;
let angulo3 = 90;

let verificaTriangulo;

if (angulo1 + angulo2 + angulo3 === 180) {
    verificaTriangulo = true;
    console.log(verificaTriangulo);
    console.log("São ângulos de um triangulo!");
}

else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("Erro! Angulo Inválido!")
}

else {
    verificaTriangulo = false;
    console.log(verificaTriangulo);
    console.log("Não podem ser ângulos de um triangulo!");
}

// Tudo certo.