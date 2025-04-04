const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: false}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Welcome to Home Page')
})

app.get('/get_num_soma', (req, res) => {
    res.render('get_num_soma')
})

app.post('/post_num_soma', (req, res) => {
    n1 = Number(req.body.num1);
    n2 = Number(req.body.num2);
    sum = n1 + n2;
    res.render('post_num_soma', {num1: n1, num2: n2, soma: sum})
})

app.get('/get_num_multiplicacao', (req, res) => {
    res.render('get_num_multiplicacao')
})

app.post('/post_num_multiplicacao', (req, res) => {
    n1 = Number(req.body.num1);
    n2 = Number(req.body.num2);
    multiplication = n1 * n2;
    res.render('post_num_multiplicacao', {num1: n1, num2: n2, multiplicacao: multiplication})
})

app.listen(port, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})