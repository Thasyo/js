let pessoa = {

    nome: "Thasyo",
    idade: 20,
    dizerNome: function(){
          console.log(`Meu nome é: ${this.nome}`);
    },
    niver: function(){
          return this.idade += 1;
    },
    cumprimento: function(){
          return `Sr. ${this.nome}`;
    }
};

pessoa.dizerNome(); //retorna "Meu nome é: Thasyo";

//idade antes do metodo niver
console.log(pessoa.idade);
pessoa.niver();
pessoa.niver();
pessoa.niver();
//idade depois do metodo niver
console.log(pessoa.idade);


//utilizando método criado no objeto com o this.
console.log("Olá, " + pessoa.cumprimento(), ".");
