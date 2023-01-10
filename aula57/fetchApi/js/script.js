if(self.fetch) {
    //executando a requisição GET.
    (async () => {
        const getJson = await getPosts(1);
        console.log(getJson);
    })();  
    
    //executando a requisição POST.
    (async () => {
        const postJson = await postPosts({
            userId: 1,
            title: "Primeira Requisição POST",
            body: "Tá sendo um pouco complicado, mas tá legal!"
        });
        console.log(postJson);
    })();

    //executando a requisição PUT.
    (async () => {
        const putJson = await putPosts({
            userId: 1,
            title: "Primeira Requisição PUT",
            body: "No caso do PUT, é bom usá-lo quando for atualizar todos os dados."
        }, 1);
        console.log(putJson);
    })();

    //executando a requisição PATCH.
    (async () => {
        const patchJson = await patchPosts({
            userId: 1,
            title: "Primeira Requisição PATCH",
            body: "No caso do PATCH, é bom usá-lo quando for atualizar dados ESPECÍFICOS."
        }, 1);
        console.log(patchJson);
    })();

    //executando a requisição DELETE.
    (async () => {
        const deleteJson = await deletePosts(1);
        console.log(deleteJson);
    })();


} else {
    console.log("Não tem suporte.");
};

//função para tratamento de erros.
async function checkRequest(response) {
    if(!response.ok){
        throw new Error(`${response.status} - ${response.statusText}`);
    }

    const json = await response.json();
    return json;
}

//método de requisição: GET -> resgata dados da api e transfere para o front.
async function getPosts(id) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return checkRequest(response);
}

//método de requisição POST -> cria dados a partir do front e transfere para a api novos dados.
async function postPosts(data){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        }
      }
    );

    return checkRequest(response);

}

//método de requisição PUT -> edita/atualiza o body por completo do dados em questão.
async function putPosts(data, id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        }
    });

    return checkRequest(response);
}

//método de requisição PATCH -> edita/atualiza o body em casos específicos, uma coisa ou outra, e não todo o body.
async function patchPosts(data, id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        }
    });

    return checkRequest(response);
}

//método de requisição DELETE -> deleta dados da api a partir do front.
async function deletePosts(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json;charset=UTF-8'
        }
    });

    return checkRequest(response);
}