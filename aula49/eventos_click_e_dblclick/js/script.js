//inserir click
var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){

   console.log("ciclou");
   this.style.color="red"

});

//afetando outro elemento.
var title = document.querySelector("h1");
title.addEventListener("click", function(){

   var subtitle = document.querySelector("h2");
   subtitle.style.display="none";

});

//inserir double click
var subtitle = document.querySelector("h2");
subtitle.addEventListener("dblclick", function(){

   console.log("click duplo!")

});