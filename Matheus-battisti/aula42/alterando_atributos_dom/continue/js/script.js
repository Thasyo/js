//Alterando Atributos com o DOM.

//PASSO 01: selecionando elementos para alterar atributos.
var btn = document.querySelector("button");

//PASSO 02: adicionando atributo.
btn.setAttribute("id", "button-login");
console.log(btn);

//PASSO 03: removendo atributo.
btn.removeAttribute("id");
console.log(btn);



