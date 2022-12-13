//Trocando Elementos com o DOM.

//acessando body do html.
var body = document.querySelector("body");

//PASSO 01: criando elementos.
var p = document.createElement("p");
var contentP = document.createTextNode("parágrafo trocado com sucesso"); 
p.appendChild(contentP);

//PASSO 02: acessando elemento que vai dá lugar ao novo elemento.
var paragrafo = document.querySelector("#p");

//acessando elemento pai do elemento que vai ser substituido
var father = paragrafo.parentNode; //essa é uma forma de acessar um elemento pai especifico de um elemento x.

//PASSO 03: trocando elementos.
father.replaceChild(p, paragrafo);

