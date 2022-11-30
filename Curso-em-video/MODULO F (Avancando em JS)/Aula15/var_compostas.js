//Mostrando o array.
let numero = [10, 93, 4, 5, 35]
//numero.push(5) -> .push() é um metodo no jS que acrescenta um valor no array em sua última posição.
console.log(numero)
//console.log(`Ordenando o vetor: ${numero.sort()}`) -> .sort() ordena o vetor de forma crecente.
console.log(`O tamanho total do vetor é: ${numero.length}`) // .length é uma atributo que mostra o total de espaços que a variável ocupa. 
console.log(`O primeiro valor do vetor é: ${numero[0]}`)

//Mostrando o vetor em um estrutura de repetição.
for (let i = 0; i < numero.length; i++) {
    console.log(`Posição ${i}: ${numero[i]}`)
}

//Mostrando o vetor em uma estrutura de repetição de forma simplicada.
for (let i in numero){
    console.log(`Posição ${i}: ${numero[i]}`)
}

//Buscando valores em vetores.
console.log(numero.indexOf(5))
console.log(numero.indexOf(100))
//Também podemos adaptar aos conhecimentos adquiridos.
let valor = numero.indexOf(93)
if (valor == -1){
    console.log('O valor não foi encontrado!')
}else{
    console.log(`O valor foi encontrado na posição ${numero.indexOf(93)}`)
}