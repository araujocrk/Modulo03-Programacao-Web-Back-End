// 1) Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.

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



