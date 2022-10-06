let primeiro = document.querySelector('#body');
let conteudo = 'Exercício - JavaScript DOM';
let element = document.createElement('h1');
element.className = 'primeiroH1';
element.innerText = conteudo;
primeiro.appendChild(element);