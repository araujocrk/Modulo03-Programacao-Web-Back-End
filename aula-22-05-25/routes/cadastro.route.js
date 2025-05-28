const express = require('express')
const router = express.Router()

const cadastroController = require('../controllers/cadastro.controller')

router.get('/', (req, res) => {
    res.render('pages/cadastro', 
        {
            title: 'Cadastro'
    })
})

router.post('/salvar_cadastro', cadastroController.save)

module.exports = router