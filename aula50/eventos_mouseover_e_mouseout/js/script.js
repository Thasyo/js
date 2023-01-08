//evento de hover do css feito no js.
var title = document.querySelector("h1");
title.addEventListener("mouseover", function(){

   this.style.backgroundColor="yellow";

})

title.addEventListener("mouseout", function(){

   this.style.backgroundColor="white";

})

//exemplo de mouseover com alguns métodos já estudados
//criando elemento
var p = document.createElement("p");
var pContent = document.createTextNode("ESTA É UMA LEGENDA CARA...");
p.appendChild(pContent);

//colocando elemento criado no body
var body = document.querySelector("body");
var pAfter = document.querySelector("#paragrafo");
body.insertBefore(p, pAfter);

//adicinado um style e uma class ao elemento criado.
p.setAttribute("class", "p-js");
p.setAttribute("style", "display:none;");

//creating animation with the mouseover and the mouseout.
var subtitle = document.querySelector("h2");
subtitle.addEventListener("mouseover", function(){

   this.style.backgroundColor="gray";
   var p = document.querySelector(".p-js");
   p.removeAttribute("style");

})

subtitle.addEventListener("mouseout", function(){

   this.style.backgroundColor="white";
   var p = document.querySelector(".p-js");
   p.setAttribute("style", "display:none;");

})
