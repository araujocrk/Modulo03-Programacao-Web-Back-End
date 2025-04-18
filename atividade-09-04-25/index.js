const express = require('express')
const app = express()
const port = 3000

// Definie o local onde estão localizadas as views do projeto
app.set('views', 'views')
/* Define o template engine que será utilizado para renderizar as views.
O EJS é um template engine que permite criar views dinâmicas utilizando JavaScript */
app.set('view engine', 'ejs')

/*
body-parser é Middleware para fazer o parse do corpo da requisição antes de utilizarmos o req.body.
O express.urlencoded() faz o parse do corpo da requisição para o formato URL-encoded.
O valor falso para extended indica que o body-parser vai aceitar somente strings e arrays, enquanto
o valor verdadeiro indica que o body-parser vai aceitar objetos aninhados ou qualquer outro tipo.
*/
app.use(express.urlencoded({ extended: false }))

// Recebe as rotas de bolsaDeValores
const routeCompraVenda = require('./routes/bolsaDeValores/compraVenda')
// Primeira rota do projeto http://localhost:3000/bolsaDeValores
app.use('/bolsaDeValores', routeCompraVenda)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
