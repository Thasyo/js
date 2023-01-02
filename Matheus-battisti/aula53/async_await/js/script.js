//ASYNC E AWAIT

//SINTAXE

/* 

const firstFunction = () => {

   return new Promise((resolve) => {

      setTimeout(() => {

         console.log("Esperou isso aqui...");
         resolve();

      }, 1000);

   });

};

const twiceFunction = async () => {

   console.log("Iniciando...");

   await firstFunction();

   setTimeout(() => {
      console.log("Terminando...");
   }, 1000);

};

twiceFunction();

*/

//Prática
const getUser = (id) => {

   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))

};

const showUserName = async (id) => {

   try {
      
      const userName = await getUser(id);
      console.log(`ID: ${id} `);
      console.log(`Nome: ${userName.name} `)

   } catch (err) {
     
      console.log(`ERROR: ${err}`);
   
   };

};

const showUserEmail = async (id) => {

   try {
      
      const userEmail = await getUser(id);
      console.log(`Email: ${userEmail.email}`);

   } catch (err) {
      
      console.log(`ERROR: ${err}`);

   };

}

showUserName(1);
showUserEmail(1);
































