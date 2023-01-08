//Adicionando Elementos com o DOM.

//acessando o body
var body = document.querySelector("body");

//PASSO 01: criando elementos.
var p = document.createElement("p");
var content_p = document.createTextNode("parágrafo criado pelo JS.");
p.appendChild(content_p);

var h2 = document.createElement("h2");
var content_h2 = document.createTextNode("Título criado pelo JS.");
h2.appendChild(content_h2);

//PASSO 02: adicionando dentro do body (FINAL);
body.appendChild(p);

//PASSO 03: adicionando dentro do body (MEIO);

//elemento referencial
var p_h2 = document.querySelector("#paragrafo");

body.insertBefore(h2, p_h2);



