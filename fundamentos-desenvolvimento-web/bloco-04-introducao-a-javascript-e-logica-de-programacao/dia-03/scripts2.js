let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = 'oi';

for(let i = 0; i < array.length; i += 1) {
    if(array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i];
    }
}
console.log(maiorPalavra);


let menorPalavra = 'ahsdiuashdiashd';

for(let i = 0; i < array.length; i += 1) {
    if(array[i].length < menorPalavra.length) {
        menorPalavra = array[i];
    }
}
console.log(menorPalavra);