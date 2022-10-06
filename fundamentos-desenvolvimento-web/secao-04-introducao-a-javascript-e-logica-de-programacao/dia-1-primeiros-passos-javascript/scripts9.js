const a = 25;
const b = 36;
const c = 12;

if (a > b && a > c) {
    console.log(a);
} 

else if (b > a && b > c) {
    console.log(b);
}

else if (c > a && c > b) {
    console.log(c);
}

else if (a === b && a > c) {
    console.log(a);
}

else if (a === c && a > b) {
    console.log(a);
}

else if (c === b && c > a) {
    console.log(c);
}

else {
    console.log("Os números são todos iguais.");
}

// Tudo certo!