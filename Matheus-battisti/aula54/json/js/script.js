//Estrutura de array de objetos.

const objs = [

    {
        id: 1,
        nome: "Thasyo",
        idade: 20,
        esta_trabalhando: true,
        detalhes_profissao: {
            profissao: "Programador",
            empresa: "Bemobi",
            salario: 3.500
        },
        hobbies: ["Jogar Futebol", "Correr", "Malhar"] 
    },

    {
        id: 2,
        nome: "Juca",
        idade: 26,
        esta_trabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null,
            salario: null
        },
        hobbies: ["Jogar Basquete", "Dormir"] 
    }
]


//JSON

//convertendo objeto pata json.
const jsonData = JSON.stringify(objs); //stringify() transforma um object em um json.
console.log(jsonData);

//convertendo json para objeto.
const objData = JSON.parse(jsonData); //parse() transforma um json em object.
console.log(objData);

//A partir dos dados resgatados, podemos manipulá-los como quisermos.
objData.map((cliente) => {
    console.log(cliente.nome);
});
























