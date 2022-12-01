let pessoa = {

    nome: "Thasyo",
    idade: 20,
    //Exemplos de métodos em objetos.  
    falar: function(){
         console.log("Opa! Eu sou um método.");
    },
    soma: function(a, b){
         return a + b;
    }
};

console.log(pessoa.nome, pessoa.idade); //Retorna Thasyo 20;

pessoa.falar(); //retorna "Opa! Eu sou um método."

let s = pessoa.soma(2,3);
console.log(`Soma: ${s}`); //retorna Soma: 5.