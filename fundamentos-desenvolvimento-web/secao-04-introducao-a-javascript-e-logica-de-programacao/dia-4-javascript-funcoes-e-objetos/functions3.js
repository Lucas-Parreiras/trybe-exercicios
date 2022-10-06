const primeiro = 40;
      segundo = 20;
      terceiro = 20;
 
function maiorDeTres(primeiro, segundo, terceiro) {
    if(primeiro > segundo && primeiro > terceiro) {
        console.log("O maior número é: ", primeiro, ".");
    }
    else if(segundo > primeiro && segundo > terceiro) {
        console.log("O maior número é: ", segundo, ".");
    }
    else if(terceiro > primeiro && terceiro > segundo) {
        console.log("O maior número é: ", terceiro, ".");
    }
    else if(primeiro === segundo && primeiro === terceiro) {
        console.log("Os três números são iguais.");
    }
    else if(primeiro === segundo && primeiro > terceiro) {
        console.log("Os números ", primeiro, " e ", segundo, "são iguais e maiores que ", terceiro, ".");
    }
    else if(segundo === terceiro && segundo > primeiro) {
        console.log("Os números ", segundo, " e ", terceiro, "são iguais e maiores que ", primeiro, ".");
    }
}
maiorDeTres(primeiro, segundo, terceiro);      

// Tudo certo!