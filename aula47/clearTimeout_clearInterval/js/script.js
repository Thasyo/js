//Callback functions (parte ASSÍNCRONA)

//clearTimeout na prática.
x = 1;

var myTimer = setTimeout(function(){
    console.log("x = 1");
}, 1000);

x += 1;

if(x > 1){
    clearTimeout(myTimer);
    console.log("x é maior que 1");
}

//clearInterval na prática.
var myInterval = setInterval(function(){
    console.log("setInterval funcionando...");
}, 500);

setTimeout(function(){
    clearInterval(myInterval);
    console.log("setInterval interrompido!");
}, 15000);







