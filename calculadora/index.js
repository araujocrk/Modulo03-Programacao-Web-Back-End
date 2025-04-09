const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('calculadora');
});

historico = []


app.post('/calcular', (req, res) => {
    num1 = parseFloat(req.body.num1);
    num2 = parseFloat(req.body.num2);
    operacao = req.body.operacao;
    simbolo = '';

    resultado = 0;

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

    const calculo = {
        num1,
        num2,
        operacao,
        simbolo,
        resultado
    }

    historico.push(calculo)

    res.render('calcular', { history: historico });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});