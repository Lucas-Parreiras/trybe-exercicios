let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log("Bem-vinda, ", info.personagem, "!");

info["recorrente"] = "Sim";
// console.log(info);



let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: "Sim",
};

for (key in info) {
    // console.log(info[key]);
    if(key === "recorrente" && info[key] === info2[key]) {
        console.log("Ambos são recorrentes.");
    }
    else {
        console.log(info[key], "e", info2[key]);
        }
}