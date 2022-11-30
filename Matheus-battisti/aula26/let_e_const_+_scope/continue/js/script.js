//LET E CONST

//LET

let x = 5; //var x = 5;

x = 12;

console.log(x);

if (true){
    let x = 20;
    const y = 25;
    console.log(x); //o let nos dá a possibilidade de não poluir o scope global fora do IF;
    console.log(y); //a const tem o mesmo esquema do let, não interfere no const de fora do IF;

}

console.log(x);

//CONST

const y = 10; //const cria uma constante, a variável se torna imutável;
console.log(y);