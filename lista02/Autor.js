// 5) Implemente uma classe “Autor” que possui como atributos o nome e sobrenome do autor e criar um método que imprima o nome completo (nome + sobrenome). Implemente uma classe chamada “Livro” com atributos para armazenar o título, o autor e o número de páginas do livro.

// 6) Modifique a questão anterior para que o livro possa ter mais de um autor e adicione um método que imprima o nome completo de seus autores.

class Autor {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    informacoes() {
        return `Nome completo: ${this.nome} ${this.sobrenome}`;
    }
}

class Livro {
    constructor(titulo, autor, numeroPaginas) {
        this.titulo = titulo;
        this.autor = [];
        this.numeroPaginas = numeroPaginas;
    }

}