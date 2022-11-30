//ESCOPO

//GLOBAL
var x = 5;
var y = 3;
console.log(x, y);

//LOCAL
function teste(){

    var z = 2;

    console.log(z);

}

teste();

/*PS: 

GLOBAL pode ser usada em funções, mas a LOCAL não pode ser usada fora das funções;

O IF não tem limitações para locais, composta por variáveis globais; 

*/

