//length: mostra o tamanho total da variável.

var nome = "Luana";
console.log(nome.length); // retorna 6

var arr = ["uva", "pera", "maçã"];
console.log(arr.length); //retorna 3, pois é o número total dos elementos do array.

//indexOf: localiza caracteres por índices.

var n = "Juca";
console.log(n[2]); //retorna c

var frase = "Eu te amo";
console.log(frase.indexOf("amo")); //retorna 6

//Slice: fatiamente - processo de "remoção".

var f = "Thasyo lindo";
console.log(f.slice(7, 12)); // retorna lindo.

//replace: substitue - processo de "troca";

var frase = "Eu sou Juca";
console.log(frase); //retorna Eu sou Juca

var novaFrase = frase.replace("Juca", "Thasyo");
console.log(novaFrase)// retorna Eu sou Thasyo

//toUpperCase (CAIXA ALTA) and toLowerCase (caixa baixa)

var texto = "Eu te amo LUANA";

console.log(texto.toUpperCase()); //retorna EU TE AMO LUANA

console.log(texto.toLowerCase()); //retorna eu te amo luana

//Trim: cancela e remove espaços desnecessários; geralmente usado em formulários

var nome = "      Thasyo Peres  ";
console.log(nome.trim()); //retorna Thasyo - sem espaços

//Split: transforma strings em arrays.

var texto = "Eu sou lindo";

console.log(texto.split(" ")); //Retorna ["Eu", "sou", "lindo"];

//lastIndexOf: usado quando se têm palavras iguais dentro de uma string; retorna a última.

var texto = "Thasyo. Você é Thasyo, correto?";

console.log(texto.indexOf("Thasyo")); //retorna 0.

console.log(texto.lastIndexOf("Thasyo")); //retorna 15.