//KEYDOWN
document.addEventListener("keydown", function(event){

   //console.log(event.key); dá uma olhadinha para ver como funciona o parâmentro "event".
   if(event.key === "Enter"){
      console.log("Apertou Enter!");
   }

})

//KEYUP
document.addEventListener("keyup", function(e){

   //console.log(e.key); dá uma olhadinha para ver como funciona o parâmentro "event".
   if(e.key === "Enter"){
      console.log("Desapertou Enter!");
   }

})