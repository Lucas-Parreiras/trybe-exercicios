function textIdChange(param1) {
    const newText = document.getElementById(param1).innerText = "Em 2 anos estarei empregado, pleno e realizado.";
    return newText;
}
textIdChange("paragraph");

function newGroundColor(classe, cor, index) {
    const colorGround = document.getElementsByClassName(classe)[index].style.backgroundColor = cor;
    return colorGround;
}
newGroundColor("main-content", "green", "0");
newGroundColor("center-content", "white", "0");

function textTagChange(param1, pos, novoTexto) {
    const newH1 = document.getElementsByTagName(param1)[pos].innerText = novoTexto;
    return newH1;
}
textTagChange("h1", "0", "Exercício - JavaScript");
textTagChange("p", "0", "TEXTO PADRÃO DO NOSSO SITE");

function paragraphConsole(dado1, posi) {
    const consolePrint = document.getElementsByTagName(dado1)[posi];
    console.log(consolePrint);
}
paragraphConsole("p", "0");
paragraphConsole("p", "1");
paragraphConsole("p", "2");

