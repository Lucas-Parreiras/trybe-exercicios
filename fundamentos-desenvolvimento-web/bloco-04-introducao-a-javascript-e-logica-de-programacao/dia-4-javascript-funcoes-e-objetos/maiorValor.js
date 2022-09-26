const arrayTest = [2, 3, 6, 7, 10, 1];
let test = 0;

function maiorValor(param) {
    for(let index = 0; index < param.length; index += 1) {
        if(param[index] > test) {
            test = param[index];
        }
    }
    console.log(test);
    return param;
}

maiorValor(arrayTest);