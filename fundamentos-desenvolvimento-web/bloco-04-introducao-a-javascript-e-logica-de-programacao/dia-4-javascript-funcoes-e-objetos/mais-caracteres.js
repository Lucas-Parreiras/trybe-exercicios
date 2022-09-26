const testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let biggerWord = "Lua";
let letterCount = 0;

function moreCharacters(param) {
    for(let index = 0; index < param.length; index += 1) {
        let testCharacters = param[index];
        letterCount = param[index].length;
        if(letterCount > biggerWord.length) {
            biggerWord = testCharacters;
        }
    }
    return console.log(biggerWord);
}

moreCharacters(testArray);

// Tudo certo!