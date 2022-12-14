//CSS NO DOM.

//Adicionando estilos individualmente.
//PASSO 01: selecionando elemento.
var title = document.querySelector("h1");
//PASSO 02: Aplicando estilos ao elemento selecionado;
title.style.color = "green";
title.style.fontSize = "3em";
title.style.textAlign = "center";

//Adicionando vários estilos ao mesmo tempo.
//PASSO 01: selecionando elemento.
var subtitle = document.querySelector("h2");
//PASSO 02: adicionando vários estilos.
subtitle.style.cssText = "color: green; text-align: center; font-size:1.8em; text-shadow: 0px 0px 5px green;";





