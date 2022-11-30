//Dias da semana.

var semana = new Date()
var dia = semana.getDay()

console.log(dia)

switch (dia){
    case 0: console.log(`${dia}: Domingo`)
    break

    case 1: console.log(`${dia}: Segunda`)
    break

    case 2: console.log(`${dia}: Terça`)
    break

    case 3: console.log(`${dia}: Quarta`)
    break

    case 4: console.log(`${dia}: Quinta`)
    break

    case 5: console.log(`${dia}: Sexta`)
    break
    
    case 6: console.log(`${dia}: Sábado`)
    break
}