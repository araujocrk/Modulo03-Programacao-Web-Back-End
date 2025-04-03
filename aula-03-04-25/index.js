const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}))

app.set('views', 'views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/ola_form', (req, res) => {
    res.render('ola_form')
})

app.get('/getnumsum', (req, res) => {
    res.render('getnumsum')
})

app.post('/ola', (req, res) => {
    // req.body é um objeto que contém os dados enviados no corpo da requisição
    nome1 = req.body.nome1
    nome2 = req.body.nome2
    nome3 = req.body.nome3 // recupera o valor do parametro com chave = nome
    lista_nomes = [nome1, nome2, nome3]
    res.render('ola_resposta', { nomes: lista_nomes })
})

app.post('/sumresponse', (req, res) => {
    n1 = req.body.n1
    n2 = req.body.n2
    numeros = [n1, n2]
    res.render('sumresponse', {n1: n1, n2: n2})
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})
