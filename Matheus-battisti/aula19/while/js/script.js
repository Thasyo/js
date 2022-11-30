//WHILE

console.log("--- CONTANDO DE 0 A 10 ---");
var num = 0;

while (num < 11) {
    
    console.log(num);
    num = num + 1;

};

console.log("........................");
console.log("........................");

console.log("--- CONTANDO DE 10 A 0 ---");
var x = 10;

while(x >= 0){

    console.log(x);
    x = x - 1;

};

console.log("........................");
console.log("........................");

console.log("--- MOSTRANDO ITENS DE UM ARRAY COM A ESTRUTURA DE REPETIÇÃO ---");

var lista = ["Quero", "Casar", "Contigo", "Luana"];
var i = 0;

while(i < lista.length){

    console.log(lista[i]);
    i++;

}

console.log("........................");
console.log("........................");

console.log('--- Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500 ---');

var num = 0; 
var soma_num = 0;

while(num < 500){

   if((num > 1) && (num % 2 != 0)){
        soma_num += num;
        console.log(soma_num);
   }

   num += 3;
}

console.log(soma_num);


console.log("........................");
console.log("........................");

console.log("--- PERCORRENDO UMA VARIÁVEL SIMPLES COM UMA ESTRUTURA DE REPETIÇÃO ---");

var word = "EU_TE_AMO_LUANA";
var i = 0;

while(i < word.length){

    console.log(word[i]);
    i++;

}






