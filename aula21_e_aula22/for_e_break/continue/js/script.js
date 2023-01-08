//ESTRUTURA DE REPETIÇÃO FOR

console.log("--- Contando de 1 a 10 ---");

for(var i = 1; i <= 10; i++){

    console.log(i);

}
console.log("-------------------------------------");
console.log("--- Percorrendo as posições de um ARRAY ---");

var array = ["Thasyo", "é", "Lindo", "e", "gostoso", "!"];

console.log(array);
console.log("--- Percorrendo ---");
for(var i = 0; i < array.length; i++){

    console.log(array[i]);

};

console.log("-------------------------------------");
console.log("--- Escrevendo os números ímpares entre 100 e 200 ---");

for(var i = 100; i <= 200; i++){

    if(i % 2 != 0){
        console.log(i);
    } else {
        continue;
    };

};

console.log("-----------------------------------------");
console.log("--- Lendo 5 valores e calculando a media deles, bem como vendo quantos são positivos e negativos.");

var num = [23, -4, 55, 29, -21];
var soma = 0, media = 0, totpar = 0, totimpar = 0;

for(var i = 0; i < num.length; i++){

    //Calculando a media dos valores do array.
    soma += num[i];
    media = soma / 5;

    //Identificando os positivos e negativos.
    if(num[i] % 2 == 0){

        totpar += 1;

    } else {

        totimpar += 1;

    };

};

console.log("---");
console.log("Os 5 valores são: ", num.toString());
console.log("---");
console.log("A média dos 5 valores é: ", media);
console.log("---");
console.log("Total de Positivos: ", totpar);
console.log("---");
console.log("Total de Negativos: ", totimpar);


