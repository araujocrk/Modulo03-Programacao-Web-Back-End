const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('calculadora');
});

app.post('/calcular', (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const operacao = req.body.operacao;
    let simbolo = '';

    let resultado = 0;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            simbolo = '+';
            break;
        case 'subtracao':
            resultado = num1 - num2;
            simbolo = '-';
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            simbolo = '*';
            break;
        case 'divisao':
            resultado = num1 / num2;
            simbolo = '/';
            break;
        default:
            console.log('Erro: Operação inválida');
            break;
    }
    
    res.render('calcular', { res: resultado, n1: num1, n2: num2, op: operacao , s: simbolo });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});