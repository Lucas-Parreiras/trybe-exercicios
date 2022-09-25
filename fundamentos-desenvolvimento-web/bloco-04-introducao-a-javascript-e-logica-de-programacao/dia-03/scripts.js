let fruits = [3, 4, 10, 1, 12];

let somaTotal = 0;

for(let index = 0; index < fruits.length; index += 1) {
    somaTotal = somaTotal + fruits[index];
}

if(somaTotal > 15) {
    console.log(somaTotal);
}
else {
    console.log("valor menor que 16.");
}

// Tudo certo!