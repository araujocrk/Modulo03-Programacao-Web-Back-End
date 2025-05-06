const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(expressLayouts);

const homeRoute = require('./routes/home');
app.use('/', homeRoute);

const operacoesRoute = require('./routes/operacoes');
app.use('/operacoes', operacoesRoute);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
})