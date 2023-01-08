//Removendo Elementos com o DOM.

//acessando body e modificando paragrafo
var body = document.querySelector("body");
var p = document.querySelector("#p");
p.textContent = "este parágrafo será removido";

//criando elementos que serão serão removidos hauhauh
var div = document.createElement("div");
var content_div = document.createTextNode("DIV CRIADA");
div.appendChild(content_div);
body.appendChild(div);

//removendo PAI
div.remove();

//removendo FILHO
body.removeChild(p);



