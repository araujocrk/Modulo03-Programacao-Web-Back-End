const express = require('express');
const router = express.Router();

const operacoes = [];

router.get('/', (req, res) => {
    res.render('pages/historico', { operations: operacoes});
});

router.get('/mercado', (req, res) => {
    res.render('pages/mercado');
});

router.post('/', (req, res) => {
    data = req.body.data;
    codigo = req.body.codigo;
    tipo = req.body.tipo;
    quantidade = parseInt(req.body.quantidade);
    precoUnit = parseFloat(req.body.precoUnit);
    bruto = quantidade * precoUnit;
    taxas = parseFloat(req.body.taxas);
    liquido = 0;
    if (tipo == 'compra') {
        liquido = bruto + (bruto * (taxas / 100));
    } else {
        liquido = bruto - (bruto * (taxas / 100));
    }

    operacoes.push({data, codigo, tipo, quantidade, precoUnit, bruto, taxas, liquido});

    res.render('pages/historico', { operations: operacoes});
});

module.exports = router;