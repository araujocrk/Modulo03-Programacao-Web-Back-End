const express = require('express');
const router = express.Router();
const operacoesController = require('../controllers/operacoes_controller')

// Página com histórico de operações
router.get('/', (req, res) => {
    const operacoes = operacoesController.listarOperacoes();
    res.render('pages/operacoes', 
        { 
            operations: operacoes, 
            page : 'operacoes', 
            title : 'Operações' 
        });
});
// Página de mercado (Compra e Venda)
router.get('/mercado', (req, res) => {
    res.render('pages/mercado', 
        { 
            page : 'operacoes', 
            title : 'Mercado' 
        });
});

// Post de nova operação
router.post('/', (req, res) => {
    operacoesController.salvarOperacao(req);
    res.redirect('/operacoes')
});

module.exports = router;