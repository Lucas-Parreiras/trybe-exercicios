let primos = [];

for(let i = 1; i <= 50; i += 1) {
    if(i % 6 === 1 || i % 6 === 5) {
        primos.push(i);
    }
    else if(i === 2 || i === 3) {
        primos.push(i);
    }

}

console.log(primos);


