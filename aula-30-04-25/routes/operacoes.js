const operacoesController = require('../controllers/operacoes_controller')

router.get('/', (req, res) => {
    res.render('pages/historico', 
        { 
            operations: operacoes, 
            page : 'operacoes', 
            title : 'Operações' 
        });
});

router.get('/mercado', (req, res) => {
    res.render('pages/mercado', 
        { 
            page : 'mercado', 
            title : 'Mercado' 
        });
});

router.post('/', (req, res) => {
    res.redirect('/operacoes/historico')
    res.render('pages/historico', 
        { 
            operations: operacoes, 
            page : 'operacoes', 
            title : 'Operações' 
        });
});

module.exports = operacoesController;