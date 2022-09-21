const notaPessoa = 50;
let verificaAprovacao;

if (notaPessoa >= 80) {
    verificaAprovacao = 2;
    console.log("Parabéns, você foi aprovada(o)!")
}

else if (notaPessoa >= 60 && notaPessoa < 80) {
    verificaAprovacao = 1;
    console.log("Você está na nossa lista de espera")
}

else if (notaPessoa < 60) {
    verificaAprovacao =0;
    console.log("Você foi reprovada(o)")
}

// Deu certo!

let estadoAprovacao = "";

switch (verificaAprovacao) {
    case 2: estadoAprovacao = "Aprovado(a)";
    break
    case 1: estadoAprovacao = "Lista";
    break
    case 0: estadoAprovacao = "Reprovação";
    break
    default: "Não se aplica"; 
}

console.log(estadoAprovacao);