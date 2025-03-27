// 2) Implemente uma classe chamada “Aluno” que possua atributos para armazenar o nome, a matrícula e as notas de um aluno. Adicione métodos para calcular a média das notas e verificar a situação do aluno (aprovado ou reprovado) de acordo com as regras de onde você estuda ou estudou.
class Aluno {
    constructor(nome, matricula, nota1 = 0, nota2 = 0) {
        this.nome = nome;
        this. matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }

    calcularMedia() {
        return (this.nota1 + this.nota2) / 2;
    }

    verificarSituacao(media) {
        if (media >= 7) {
            return 'Aprovado!';
        } else {
            return 'Reprovado!';
        }
    }
}

const a1 = new Aluno('Ryan', 1234, 10, 8);
let media1 = a1.calcularMedia();
console.log(media1);
console.log(a1.verificarSituacao(media1));

const a2 = new Aluno('Fernando', 4321, 6, 8);
let media2 = a2.calcularMedia();
console.log(media2);
console.log(a2.verificarSituacao(media2));