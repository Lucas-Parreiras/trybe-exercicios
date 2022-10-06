const arrayTest = [2, 4, 6, 7, 10, 0, -3];
let test = 50;

function menorIndice(param) {
    for(let index = 0; index < param.length; index += 1) {
        if(param[index] < test) {
            test = index;
        }
    }
    console.log(test);
    return param;
}

menorIndice(arrayTest);

// Tudo ok!