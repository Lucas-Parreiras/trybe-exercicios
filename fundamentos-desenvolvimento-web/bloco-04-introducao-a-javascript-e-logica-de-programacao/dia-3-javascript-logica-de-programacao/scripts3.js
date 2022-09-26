let word = "Tryber";
let contadorNegativo = word.length - 1;
let wordNova = [];

for(let i = 0; i < word.length; i += 1) {
    wordNova[contadorNegativo] = word[i];
    contadorNegativo -= 1;
}
console.log(wordNova);
