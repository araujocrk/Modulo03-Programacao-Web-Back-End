const express = require('express')
const router = express.Router()

// Sequência da rota bolsaDeValores http://localhost:3000/bolsaDeValores/compraVenda
router.get('/compraVenda', (req, res) => {
    bolsaValores = ['NYSE', 'PETR4 ', 'ITSA4', 'BBSE3']
    // Primeiro parâmetro do render recebe o nome da view, segundo parâmetro recebe um objeto javascript
    res.render('compraVenda', { pagina: "Página de Compra ou Venda" , bolsa: bolsaValores}) // renderiza a view ola_resposta.ejs e passa o valor do nome através de um objeto javascript
})

let operacoes = []

router.post('/resultadoCompraVenda', (req, res) => { 
    // req.body é um objeto que contém os dados enviados no corpo da requisição
    data = req.body.data //  recupera o valor do parametro com chave = data
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
    // Primeiro parâmetro do render recebe o nome da view, segundo parâmetro recebe um objeto javascript
    res.render('resultadoCompraVenda', { pagina: "Página de Resultados" , operations: operacoes}) // renderiza a view ola_resposta.ejs e passa o valor do nome através de um objeto javascript
})

module.exports = router