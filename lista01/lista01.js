// 1) Considere o código abaixo e responda às perguntas:

function testeEscopo() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var a = 40;
        let b = 50;
        const c = 60;
        console.log(a, b, c); // 40 50 60
    }

    console.log(a, b, c); // 40 20 30
}

/*2) Faça um script que leia três números inteiros, em seguida mostre o maior e o
menor deles.*/
let n1 = 5;
let n2 = 10;
let n3 = 15;
var maior, menor;

function maiorMenor(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        maior = n1;
    } else if (n2 > n1 && n2 > n3) {
        maior = n2;
    } else {
        maior = n3;
    }
    
    if (n1 < n2 && n1 < n3) {
        menor = n1;
    } else if (n2 < n1 && n2 < n3) {
        menor = n2;
    } else {
        menor = n3;
    }
}

/*3) Crie um programa que peça ao usuário um número inteiro positivo n e exiba a
tabuada desse número de 1 a 10 utilizando um loop for.*/
let n1a10 = 5;

function tabuada(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + n * i);
    }
}

/*4) Supondo que a população de um país A seja da ordem de 80000 habitantes com
uma taxa anual de crescimento de 3% e que a população de B seja 200000
habitantes com uma taxa de crescimento de 1.5%. Faça um programa que calcule
e escreva o número de anos necessários para que a população do país A
ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.*/
let pA = 80000, tacA = 0.03, pB = 200000, tacB = 0.015;

function ultrapassarPopulacao() {
    let anos = 0;
    while (pA < pB) {
        pA += pA * tacA;
        pB += pB * tacB;
        anos++;
    }
    return anos;
}

/*5) Dado o array numeros, crie um novo array chamado numerosUnicos, contendo
os mesmos elementos do array original, mas sem valores repetidos e exibir no
console*/
function numerosUnicos() {
    const numeros = [3, 7, 3, 2, 7, 10, 2, 15, 10, 20];
    const numerosUnicos = [];
    for (let numero of numeros) {
        if (!numerosUnicos.includes(numero)) {
            numerosUnicos.push(numero);
        }
    }
}

console.log(numerosUnicos()); // [3, 7, 2, 10, 15, 20]

/*6) Implemente uma função que recebe como parâmetro um array de números, calcule
a média aritmética e retorne o resultado.*/
function mediaAritmetica(arrayNum) {
    let soma = 0;
    for (let i = 0; i < arrayNum.length; i++)
        soma += arrayNum[i];
    return soma / arrayNum.length
}

/*7) Desenvolva uma função que verifique se uma palavra é um palíndromo (lê-se da
    mesma forma da esquerda para a direita e vice-versa). Retorne true se for um
    palíndromo e false se não for.*/
function ehPalindromo(palavra) {
    const invertida = palavra.split('').reverse().join('');
    return palavra == invertida
    /*if (palavra == invertida) {
        return true
    } else {
        return false
    }*/
}