let body = document.querySelector("#body");

let header1 = "Exercício - JavaScript DOM";
let element1 = document.createElement("h1");
    element1.innerText = header1;
    body.appendChild(element1);

let element2 = document.createElement("main");
    element2.className = "main-content";
    body.appendChild(element2);

let main = document.querySelector(".main-content");
let element3 = document.createElement("section");
    element3.className = "center-content";
    main.appendChild(element3);

let paragraph = document.querySelector(".center-content");
let element4 = document.createElement("p");
    element4.innerText = "Aqui está o parágrafo filho da seção";
    paragraph.appendChild(element4);

let element5 = document.createElement("section");
    element5.className = "left-content";
    main.appendChild(element5);

let element6 = document.createElement("section");
    element6.className = "right-content";
    main.appendChild(element6);

let element7 = document.createElement("img");
    element7.className = "small-image";
    element7.src = "https://picsum.photos/200";
    element5.appendChild(element7);

let element8 = document.createElement("ul");
    element6.appendChild(element8);

let element9 = document.createElement("li");
    element9.innerText = "1.";
    element8.appendChild(element9);

let element10 = document.createElement("li");
    element10.innerText = "2.";
    element8.appendChild(element10);

let element11 = document.createElement("li");
    element11.innerText = "3.";
    element8.appendChild(element11);

let element12 = document.createElement("li");
    element12.innerText = "4.";
    element8.appendChild(element12);

let element13 = document.createElement("li");
    element13.innerText = "5.";
    element8.appendChild(element13);

let element14 = document.createElement("li");
    element14.innerText = "6.";
    element8.appendChild(element14);

let element15 = document.createElement("li");
    element15.innerText = "7.";
    element8.appendChild(element15);

let element16 = document.createElement("li");
    element16.innerText = "8.";
    element8.appendChild(element16);

let element17 = document.createElement("li");
    element17.innerText = "9.";
    element8.appendChild(element17);

let element18 = document.createElement("li");
    element18.innerText = "10.";
    element8.appendChild(element18);

let element19 = document.createElement("h3");
    main.appendChild(element19);

let element20 = document.createElement("h3");
    main.appendChild(element20);

let element21 = document.createElement("h3");
    main.appendChild(element21);