class Aluno {
    constructor(matricula, nome, nota1 = 0, nota2 = 0) {
        this.matricula = matricula;
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
    getMedia() {
        return (this.nota1 + this.nota2) / 2;
    }
}

const a1 = new Aluno(1234, 'Teste');
console.log(a1);

a1.nota1 = 8;
a1.nota2 = 10;

console.log(a1.getMedia());