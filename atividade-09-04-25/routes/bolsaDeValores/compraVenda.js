const express = require('express')
const router = express.Router()

router.get('/compraVenda', (req, res) => {
    bolsaValores = ['NYSE', 'PETR4 ', 'ITSA4', 'BBSE3']
    res.render('compraVenda', { pagina: "Página de Compra ou Venda" , bolsa: bolsaValores})
})

router.post('/resultadoCompraVenda', (req, res) => { 
    let operacoes = []
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
    res.render('resultadoCompraVenda', { pagina: "Página de Resultados" , operations: operacoes})
})

module.exports = router