//Callback functions (parte ASSÍNCRONA)

//setTimeout: executa uma vez só.
console.log("Antes do setTimeout");

setTimeout(function(){
    console.log("Testando setTimeout.");
}, 2000 /* 1 segundo = 1000*/);

console.log("Depois do setTimeout");

//setInterval: executa ação diversas vezes.
setInterval(function (){
    console.log("testando setInterval");
}, 1000);






