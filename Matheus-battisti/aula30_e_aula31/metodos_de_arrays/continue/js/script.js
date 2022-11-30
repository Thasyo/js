//Push: ADICIONA elementos no final do array. Além disso, ele adiciona qualquer tipo de dado.

var arr = [1, 2, 3, 4];
console.log("antes do push");
console.log(arr);

arr.push(5); 
console.log("depois do push");
console.log(arr); //retorna [1, 2, 3, 4, 5];

//Pop: REMOVE elementos no final do array.
console.log("---- ----- -----");
var arr = [1, 2, 3, 4];

console.log("antes do pop");
console.log(arr);

arr.pop();
console.log("depois do pop");
console.log(arr); //retorna [1,2,3]; 

//Unshift: ADICIONA elementos no início do array.
console.log("---- ----- -----");
var arr = [1, 2, 3, 4, 5];

console.log("antes do unshift");
console.log(arr);

arr.unshift(0); //retorna [0,1,2,3,4,5];
console.log("depois do unshift");
console.log(arr);

//Shift: REMOVE elementos no início do array.
console.log("---- ----- -----");
var arr = [1,2,3,4,5];

console.log("antes do shift");
console.log(arr);

arr.shift(); //retorna [2,3,4,5];
console.log("depois do shift");
console.log(arr);

//Acessando o último elemento de um array.
console.log("---- ----- -----");
var array = [1,2,3,4,5];

array.push("Thasyo");
array.push("é");
array.push("Lindo");
console.log(array);

console.log("Acessando o último elemento de um array qualquer.")
console.log(array[array.length - 1]);  //retorna 5

//isArray: identifica se o tipo de dado é um array.
console.log("---- ----- -----");
console.log("Identificando um Array");

console.log("5 é Array = ", Array.isArray(5)); //retorna FALSE

console.log("[1, 2, 3, 4, 5] é um Array = ", Array.isArray(array)); //retorna TRUE

//Splice: Adiciona um elemento no meio de um array.
console.log("---- ----- -----");
var array = [1,2,3,4,5];
console.log("array inicial");
console.log(array);

console.log("array após adicionar elemento");
array.splice(2,0,2.5); //retorna [1,2,2.5,3,4,5];
console.log(array);

console.log("array após remover elemento");
array.splice(3,1); //retorna [1,2,3,4,5];
console.log(array);

//indexOf: Localiza a posição de um elemento dentro de um array.

var array = [1,2,3,4,5];
array.indexOf(4); //retorna 3

//Join: transforma um array em uma string.
console.log("---- ----- -----");
var array = ["Brasil", "campeão", "mundial!"];
console.log(array);

console.log("Transformando Array em String");
console.log(array.join(" "));

//Reverse: inverte a ordem de um array.
console.log("---- ----- -----");
console.log("Array-Original");
var array = [1,2,3,4,5];
console.log(array);

console.log("Revertendo-Array");
console.log(array.reverse());