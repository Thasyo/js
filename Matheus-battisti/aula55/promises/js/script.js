//ESTRUTURA BÁSICA DE UMA PROMISE
const myPromise = new Promise((resolve, reject) => {

    const name = "Thasyo";

    if(name == "Thasyo"){
        return resolve(`NOME: ${name}`);
    }

    return reject(`Algo de errado não está certo!`);

});

myPromise.then((data) => {
    console.log(data);
 }).catch((err) =>{
    console.log(err);
 });

 //Encadeamento de "then's"

 const myPromise2 = new Promise((resolve, reject) => {

    const name = "Thasyo";

    if(name == "Thasyo"){
        return resolve(`NOME: ${name}`);
    }

    return reject(`Algo de errado não está certo!`);

});

myPromise2.then((data) => {
    return data; //Para fazer encadeamento de then's, é necessário o "return" antes do valor final. 
 }).then((dataModify) => {
    const dataInLowerCase = dataModify.toLowerCase();
    console.log(dataInLowerCase);
 })
 .catch((err) =>{
    console.log(`ERRO: ${err}`);
 });

//Não existe limites para encadeamentos de then's, mas cuidado!


//RESOLVENDO VÁRIAS PROMISES AO MESMO TEMPO. (Promise.all(): todas as promessas tem que ser resolvidas para então, serem executadas)
const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("P1 deu bom!");
    }, 1000)
})
    
const p2 = new Promise((resolve, reject) => {
    resolve("P2 deu bom!");
})
    
const p3 = new Promise((resolve, reject) => {
    resolve("P3 deu bom!");
})

//dessa forma, podemos executar várias promises de uma vez.
const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    const dataJson = JSON.stringify(data);
    return dataJson
}).then((dataJson) => {
    const dataObj = JSON.parse(dataJson);
    console.log(dataObj);
}).catch((err) => {
    console.log(err);
})


//VÁRIAS PROMESSAS COM O RACE: basicamente, a primeira promessa a ser resolvida, vai ser retornada logo depois.

const p4 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("P4 deu bom!");
    }, 1000)
})
    
const p5 = new Promise((resolve, reject) => {
    setTimeout( () => {
        resolve("P5 deu bom!");
    }, 1500)
})
    
const p6 = new Promise((resolve, reject) => {
    resolve("P6 deu bom!");
})

//RACE: retorna a primeira promise que for resolvida.
const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
})



//PRÁTICA - utilizando o FETCH API
const userName = "Thasyo";

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((data) => {
    return data.json();
}).then((dataJson) => {
    console.log(`Nome do Usuário: ${dataJson.name} \nProfissão: ${dataJson.bio}`)
}).catch((err) => {
    console.log(`ERRO: ${err}`);
})





















