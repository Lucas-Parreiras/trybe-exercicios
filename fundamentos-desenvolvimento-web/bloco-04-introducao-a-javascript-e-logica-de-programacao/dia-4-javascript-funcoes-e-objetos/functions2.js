const numero1 = 25;
      numero2 = 45;

function maiorNumero(numero1, numero2) {
    if(numero1 > numero2) {
        console.log("O maior número é: ", numero1, ".");
    }
    else if(numero1 === numero2) {
        console.log("Ambos os números são iguais!");
    } 
    else {
        console.log("O maior número é: ", numero2, ".");
    }
}
maiorNumero(numero1, numero2);

// Tudo certo!