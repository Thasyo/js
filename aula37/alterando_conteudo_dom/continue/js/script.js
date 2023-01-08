//Alterando o conteúdo no DOM.
var p = document.querySelector("#paragrafo");
p.textContent = "Testando o textContent";

var p02 = document.querySelector("#p span");
p02.innerHTML = "testado com o <strong>innerHTML</strong>.";

/*Existem duas formas de alterar o conteudo dentro do DOM. São elas: "innerHTML" e o "textContent"*/
