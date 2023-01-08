//Criando Elementos com o DOM.

//PASSO 01: criar TAG desejada.
var box = document.createElement("div");

//PASSO 02: criar conteudo da TAG criada.
var text = document.createTextNode("DIV CRIADA");

//PASSO 03: inserir texto criado dentro da TAG criada.
box.appendChild(text);

//colocando tag criada no body.
var body = document.querySelector('body');

body.appendChild(box);