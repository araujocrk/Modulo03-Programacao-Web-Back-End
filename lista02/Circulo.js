class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    getPerimetro() {
        const pi = 3.14;
        let perimetro = pi * 2 * this.raio;
        return perimetro.toFixed(2);
    }

    getArea() {
        const pi = 3.14;
        let area = pi * (this.raio ** 2);
        return area.toFixed(2);
    }
}

const c1 = new Circulo(5);
console.log(c1.getArea());
console.log(c1.getPerimetro());


class Aluno {
    constructor(nome, matricula, nota1 = 0, nota2 = 0){
        this.nome = nome
        this. matricula = matricula
        this.nota1 = nota1
        this.nota2 = nota2
    }

    getMedia
}
