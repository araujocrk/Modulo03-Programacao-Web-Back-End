const express = require('express')
const app = express()
const port = 3000
app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    bolsaValores = ['Bolsa de Nova York', 'Petrobás', 'ITAUSA']
    res.render('compraOuVenda', { pagina: "Página Inicial" , bolsa: bolsaValores})
})

app.post('/resultado', (req, res) => {
    operacao = [req.body.data, req.body.codigo]
    data = req.body.data
    res.render('resultado', { pagina: "Página de Reultados"}, { operation: operacao})
})

app.listen(port, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})