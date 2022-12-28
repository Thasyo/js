//10 Métodos de Array

//Array de Objetos Base que vai ser utilizado para os exemplos a seguir. 
const data = [
   {name: "Matheus", age: 31, sallary: 2000, driverLicense: true },
   {name: "João", age: 18, sallary: 1000, driverLicense: false },
   {name: "Mariana", age: 22, sallary: 4000, driverLicense: true },
   {name: "Pedro", age: 50, sallary: 7200, driverLicense: true },
   {name: "Érica", age: 16, sallary: 0, driverLicense: false },
];
console.log("=== 10 Métodos de Array ===")
console.log("===========================")

//1- reverse: inverte a ordem do array original.
console.log("=== 1° Método: REVERSE() ===");

const reverseData = data.reverse();
console.log(reverseData);

//2- find: serve para encontrar algo específico dentro do array em questão. Retorna o último elemento do array que condiz com as condições implementadas no método.
console.log("===========================");
console.log("=== 2° Método: FIND() ===");

const highSallary = 2000;
const highestSallary = data.find((user) => user.sallary > highSallary);
console.log(highestSallary);

//3- finIndex: serve para encontrar algo específico dentro do array em questõ. Retorna a POSIÇÃO do último elemento do array que condiz com as condições implementadas no método.
console.log("===========================");
console.log("=== 3° Método: FINDINDEX() ===");

const lowerSallary = 1200;
const lowestSallary = data.findIndex((user) => user.sallary > 0 && user.sallary < 1200);
console.log(data, lowestSallary);

data[lowestSallary].sallary += 200;
console.log(data[lowestSallary]);

//4- includes: serve para verificar se meu array tem alguma informação que estou procurando. Retorna um valor booleano (true or false).
console.log("===========================");
console.log("=== 4° Método: INCLUDES() ===");

const numbers = [1, 2, 3, 4, 5];

const checkNumber = numbers.includes(3);
console.log(numbers);
console.log(`Tem o number 4 no array? ${checkNumber}`);
console.log(`Tem o number 100 no array? ${numbers.includes(100)}`);

//5- map: Geralmente usado para fazer alterações no array. É basicamente um loop, ele percorre todo o array e dá a possibilidade de modificar algo no array.
console.log("===========================");
console.log("=== 5° Método: MAP() ===");

//adicionando um novo dado aos elementos do array.
const newData = data.map((user) => user.socialStatus = "solteiro");
const modifyNewData = data.map((user) => {
   if(user.age > 20){
      user.socialStatus = "casado";
   }
});
console.log(data);

//6- filter: serve para filtrar informações do array em questão. Diferente do find(), o filter() retorna TODOS os dados que condizem com as condições implementadas no método.
console.log("===========================");
console.log("=== 6° Método: FILTER() ===");

const driverLicenseOkay = data.filter((user) => user.driverLicense);
console.log(driverLicenseOkay);

//7- reduce: percorre o array a fim de retornar um único valor baseado na iteração feita por ele.
console.log("===========================");
console.log("=== 7° Método: REDUCE() ===");

console.log(data)
//Verificando a quantia total de salário de todos os usuários.
const sallarySum = data.reduce((totalSallary, user) => (totalSallary += user.sallary), 0);
console.log(`Valor total de todos os salários dos usuários: ${sallarySum}`);

//verificando quantos usuários podem dirigir.
const userWithDriverLicense = data.reduce((totalUserWithDriverLicense, user) => (totalUserWithDriverLicense += user.driverLicense), 0);
console.log(`Quantidade de usuários sem Habilitação: ${userWithDriverLicense}`);

//verificando os usuários que ganham mais que 2000.
const usersRich = data.reduce((totalUsersRich, user) => (totalUsersRich += user.sallary > 2000), 0)
console.log(`Quantidade de usuários que ganham mais 2000 doleta: ${usersRich}`)

//8- forEach: se assemelha a estrutura de loop (for, while, etc). Geralmente é utilizado para exibir algo na tela.
console.log("===========================");
console.log("=== 8° Método: FOREACH() ===");

//Exibindo o nome de todos os usuários.
data.forEach((user) => {
   let names = user.name;
   console.log(names);
   document.writeln(`&raquo ${names} </br></br>`);
});

//9- some: Verifica se o dado que buscamos está presente no array em questão.
console.log("===========================");
console.log("=== 9° Método: SOME() ===");

//verificando se existe algum usuário que não trabalha.
const poorUser = data.some((user) => user.sallary === 0);
console.log(poorUser);

//10- every: verifica se todos os elementos do array possui o que estou buscando.
console.log("===========================");
console.log("=== 10° Método: EVERY() ===");

//verificando se todos os usuários são maiores de idade.
const UsersOfLegalAge = data.every((user) => user.age > 18);
console.log(UsersOfLegalAge);


































