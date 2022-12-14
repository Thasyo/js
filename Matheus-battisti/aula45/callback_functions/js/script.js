//Callback functions (parte SÍNCRONA - chamanda feita dentro do próprio código)

function exibir(num) {

    console.log(`O número é: ${num}`);

}

function soma(a, b, callback){

    var result = a + b;
    callback(result);

}

function mult(a, b, cb){

    var result = a * b;
    cb(result);

}

soma(5, 5, exibir);

mult(2, 3, exibir);

/*Callback Function: é basicamente passar uma função tendo como argumento, uma outra função, e assim, executar o código.*/






