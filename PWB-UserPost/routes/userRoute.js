const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController');


/* ----- funções de roteamento ----- */
// Rota Cadastro Form
router.get('/cadastro', userController.userCadastroForm);
// Rota Cadastro
router.post('/cadastro', userController.cadastro);

module.exports = router