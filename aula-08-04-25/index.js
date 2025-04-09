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

let operacoes = []

app.post('/resultado', (req, res) => {
    data = req.body.data
    codigo = req.body.codigo
    tipo = req.body.tipos
    quantidade = parseInt(req.body.quantidade)
    precoUnit = parseFloat(req.body.preco)
    valorBruto = quantidade * precoUnit
    valorLiquido = 0
    if (tipo === 'Compra') {
        valorLiquido = valorBruto + (valorBruto * 0.05)
    } else {
        valorLiquido = valorBruto - (valorBruto * 0.05)
    }        

    const operacao = {
        data,
        codigo,
        tipo,
        quantidade,
        precoUnit,
        bruto: valorBruto,
        liquido: valorLiquido
    }

    operacoes.push(operacao)
    res.render('resultado', { pagina: "Página de Reultados" , operations: operacoes})
})

app.listen(port, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})