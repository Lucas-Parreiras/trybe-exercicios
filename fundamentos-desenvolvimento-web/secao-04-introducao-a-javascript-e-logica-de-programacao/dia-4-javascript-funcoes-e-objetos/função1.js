
function palindromoChecker(strin) {
    let splitStrin = strin.split("");  //Transforma a string em array.
    let reverseStrin = splitStrin.reverse(); //Atribui ao reverseStrin o array inicial invertido, sem alterar o original.
    let joinStrin = reverseStrin.join(""); //Adiciona o novo array invertido a nova variável joinStrin.
    
    if(joinStrin === splitStrin) {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

palindromoChecker("Lucas");

// Perguntar sobre o return na mentoria.