const express = require('express')
const router = express.Router()
const User = require('../models/user')
const userController = require('../controllers/user-controller')


router.get('/entrar', (req, res) => {
    res.render('pages/user/signin',
        {
            title: 'Entrar',
        })
})

router.post('/login', userController.login)

router.get('/novo', (req, res) => {
    res.render('pages/user/signup',
        {
            title: 'Novo Usuário',
        })
})

router.post('/salvar', userController.save)

module.exports = router