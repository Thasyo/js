//CLASSES - Fundamentos (A partir daqui, se aprofundar com projetos práticos).

class Livro {
    constructor(titulo, genero, editora, paginas){
        this.titulo = titulo;
        this.genero = genero;
        this.editora = editora;
        this.paginas = paginas;
    }

    divulgarLivro(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Gênero: ${this.genero}`);
        console.log(`Editora: ${this.editora}`);
        console.log(`Páginas: ${this.paginas}`);
    }

}

const wedding = new Livro("Marry me", "romance", "Amor I love You", 54);
const enricandoAlegremente = new Livro("Seja Rico sem trabalhar!", "aventura", "Coin Read", 235);

//mostrando o objeto criando a partir da classe.
console.log(wedding, enricandoAlegremente);

//executando o método criado na classe com os dados preenchidos.
wedding.divulgarLivro();
enricandoAlegremente.divulgarLivro();

//tipo de dados da classe.
console.log(typeof Livro)

//IMPORTANTE!!!
//Só podemos chamar as classes, depois de declará-las. Diferente das funções, que podemos fazer "hoisted".

//Herança das classes.
class LivroColecao extends Livro {
    constructor(titulo, genero, editora, paginas, tituloColecao){
        super(titulo, genero, editora, paginas) //herdando dados da classe pai, no caso "Livro"
        this.tituloColecao = tituloColecao
    }

    anunciarColecaoTitulo() {
        console.log(`Livro: ${this.titulo} \nColeção: ${this.tituloColecao}`);
    }
}

const htmlCss = new LivroColecao("HTML e CSS", "Tecnologia", "JavaScriptazando", 140, "Primeiros Passos Com Desenvolvimento Web");

console.log(htmlCss);
htmlCss.anunciarColecaoTitulo();















