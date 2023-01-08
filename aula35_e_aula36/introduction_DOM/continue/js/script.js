//ACESSANDO ELEMENTOS (FORMAS MAIS ANTIGAS)
console.log("----- FORMAS ANTIGAS DE ACESSO -----")
console.log("------------------------------------")
//TAGS
var titulo = document.getElementsByTagName('h1');
console.log(titulo[0]);

var ul = document.getElementsByTagName('ul');
console.log(ul[0]);

//IDS
var p = document.getElementById('paragrafo');
console.log(p);

//CLASSES
var listaItems = document.getElementsByClassName('item');
console.log(listaItems[2]);

//ACESSANDO ELEMENTOS (FORMA MAIS ATUAL)
console.log("----- FORMAS ATUAIS DE ACESSO -----")
console.log("------------------------------------")
//QUERYSELECTOR
// por TAG:
var title = document.querySelector('h1');
console.log(title)

var lista = document.querySelector("ul");
console.log(lista);

//por ID:
var p = document.querySelector("#paragrafo");
console.log(p);

var ul01 = document.querySelector('#lista');
console.log(ul01);

var ul02 = document.querySelector('#lista2');
console.log(ul02);

//QUERYSELECTORALL

//por CLASSES:
var uls = document.querySelectorAll('ul');
console.log(uls);

var listItens = document.querySelectorAll("ul li");
console.log(listItens);

var listItensSpecify = document.querySelectorAll("ul .item");
console.log(listItensSpecify);

var pa = document.querySelector("#p");
console.log(pa);

var paSpe = document.querySelector("#p span");
console.log(paSpe);

