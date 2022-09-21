let peca = "Torre";

if (peca === "Rei") {
    console.log("O Rei se move 1 casa em qualquer direção.")
}

else if (peca === "Rainha") {
    console.log("A Rainha se move quantas casas quiser em qualquer direção.");
}

else if (peca === "Bispo") {
    console.log("O Bispo se move quantas casas quiser em uma diagonal.");
}

else if (peca === "Torre") {
    console.log("A Torre se move quantas casas quiser na vertical ou horizontal");
}

else if (peca === "Cavalo") {
    console.log("O Cavalo se move em formato de L, duas casas na horizontal ou vertical e depois uma casa na horizontal ou vertical.");
}

else if (peca === "Peão") {
    console.log("O Peão se move uma casa para frente na vertical.");
}

else {
    console.log("Erro! Peça não encontrada.");
}

// Fazer bônus!