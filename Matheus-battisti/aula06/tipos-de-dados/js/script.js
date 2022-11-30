//Tipo de Dado: NUMBER;
console.log("--- NUMBER ---")
var numberInt = 20;

console.log(numberInt);
console.log(typeof numberInt);

var numberFloat = 20.5;

console.log(numberFloat);
console.log(typeof numberFloat);

var stringNumber = '120';

console.log(stringNumber);
console.log(typeof stringNumber);

//É possível fazer a junção de tipos diferentes dados;
console.log(numberInt + stringNumber);

//Tipo de dado: STRING
console.log("--- STRING ---")

var nome = "Thasyo";
var sobreNome = "Peres";
var nomeCompleto = nome + " " + sobreNome;
var numberText = "234"

console.log(nome + " = " + typeof nome);
console.log(sobreNome + " = " + typeof sobreNome);
console.log(nomeCompleto + " = " + typeof nomeCompleto);
console.log(numberText + " = " + typeof numberText);

document.write("Olá, " + nomeCompleto + "!") //Essa funcionalidade escreve no documento HTML;

//Tipo de dado: BOOLEAN
console.log("--- BOOLEAN ---")

var verdadeiro = true;

console.log("Verdadeiro = " + verdadeiro);
console.log("Verdadeiro = " + typeof verdadeiro);

var falso = false;

console.log("Falso = " + falso);
console.log("Falso = " + typeof falso);

//Tipo de dado: NULL and UNDEFINED
console.log("--- NULL AND UNDEFINED ---")

var nome = null;
console.log(nome);

nome = "Thasyo";
console.log(nome);

var sobrenome;
console.log(sobrenome);

//HOISTING: incializar todas as variáveis antes mesmo de atribuirmos valores a elas, receber o tipo "undefined";

//Tipo de dado: OBJECT

console.log("--- OBJECT ---");

var obj = {

    nome: "Thasyo",
    idade: 20,
    profissao: "Web Developer",
    estaTrabalhando: false,
    truthJob: "Estudante",
};

console.log(obj);

console.log("Tipo de dado: ", typeof obj);

console.log("Nome dentro do 'obj': ", obj.nome);
console.log("Idade dentro do 'obj': ", obj.idade);
console.log("Profissão dentro do 'obj': ", obj.profissao);
console.log("Está trabalhando como ", obj.profissao, "? ", obj.estaTrabalhando);
console.log("Verdadeiro Trabalho atualmente: ", obj.truthJob);

//TIPO DE DADO: ARRAYS

console.log("--- ARRAYS ---");

console.log("os arrays podem ter armazenar todos os tipos de dados.");
var array = [5, "string", true, {teste: 1, teste: 2,}];
console.log("os arrays podem ter armazenar tipos únicos de dados.");
var array2 = [1, 2, 3, 4];

console.log(array);
console.log(array2);

console.log("também podemos acessar elementos em suas posições.");
console.log(array[0]);

console.log(array2[2]);

console.log("inserindo elementos no array");

array[4] = 10;
console.log(array);

console.log(typeof array);