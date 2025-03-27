// 3) Implemente uma classe chamada “ContaBancaria” que possua atributos para armazenar o número da conta, nome do titular e saldo. Adicione métodos para realizar depósitos e saques que recebem como parâmetro o valor.

class ContaBancaria {
    constructor(numeroConta, nome, saldo) {
        this.numeroConta = numeroConta;
        this.nome = nome;
        this.saldo = saldo;
    }

    depositar(qtd) {
        this.saldo += qtd;
        console.log(`Depósito efetuado com sucesso. Saldo atual: R$ ${this.saldo}`);
    }

    retirar(qtd) {
        if (qtd <= this.saldo) {
            this.saldo -= qtd;
        } else {
            console.log('Erro. Saldo inválido.');
        }
    }

    transferir(conta, qtd) {
        if (qtd <= this.saldo) {
            this.retirar(qtd);
            conta.depositar(qtd);
            console.log(`Transferência concluída. Saldo atual: R$ ${this.saldo}`);
        } else {
            console.log('Erro. Saldo inválido.');
        }
    }
}

const cb1 = new ContaBancaria(12345, 'Ryan', 100);
cb1.depositar(50);
console.log(cb1.saldo);

cb1.retirar(100);
console.log(cb1.saldo);

cb1.retirar(100);
console.log(cb1.saldo);

const cb2 = new ContaBancaria(54321, 'Manoel', 50);
cb1.transferir(cb2, 50);

console.log(cb1.saldo);
console.log(cb2.saldo);
