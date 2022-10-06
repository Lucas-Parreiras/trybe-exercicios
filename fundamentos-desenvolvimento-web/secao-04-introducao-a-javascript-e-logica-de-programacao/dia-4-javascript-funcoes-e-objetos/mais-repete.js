const testArray = [2, 3, 2, 5, 8, 2, 3];
let testRepeticao = 0;

function maisRepete(param) {
    for(let index = 0; index < param.length; index += 1) {
        for(let index2 = 0; index2 < param.length; index += 1) {
            if(param[index] === param[index2]) {
                testRepeticao += 1;
            }
        }
    }
}