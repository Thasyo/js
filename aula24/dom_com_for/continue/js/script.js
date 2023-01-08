//PRÁTICA COM O DOM - CRIANDO LISTA COM JAVASCRIPT PURO


//Criando lista de frutas;
var lista = ["Laranja", "Maçã", "Banana", "Jabuticaba", "Pêra", "Amora"];

//Criando elemento HTML com JavaScript;
var listaUl = document.createElement('ul');

//Acessando elementos HTML;
var body = document.getElementsByTagName('body');

//Inserindo o elemento criado no js na página HTML;
body[0].appendChild(listaUl);

//Acessando o elemento dentro do body;
var listaNoBody = document.getElementsByTagName('ul');

//Inserindo os itens da lista de frutas dentro da tag ul criada dentro do body (pg html);
for (var i = 0; i < lista.length; i++){

    //criando o elemento que serão colocados os itens;
    var li = document.createElement('li');

    //Criando texto dentro de um elemento HTML pelo JS;
    var liItems = document.createTextNode(lista[i]);

    //Inserindo elemento filho (liItems) no elemento pai (li);
    li.appendChild(liItems);

    //Inserindo lista preenchida dentro da ul da pagina HTML;
    listaNoBody[0].appendChild(li);

}