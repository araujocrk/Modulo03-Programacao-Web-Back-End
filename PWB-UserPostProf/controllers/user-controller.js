const User = require('../models/user');

exports.save = function (req, res) {
    /* Criar uma nova instância da classe User com os dados recebidos do corpo da requisição */
    const user = new User(req.body)
    /* Validar e realizar as conversoes necessarias nos dados da classe */
    user.validate()
    if (user.errors.length > 0) {
        // Se houver erros, redirecionar para a pagina de cadastro e exibir os erros
        return res.send(user.errors)
    } else {
        user.create()
            .then((result) => {
                //res.redirect('/operacoes')
                res.send('Usuário cadastrado com sucesso com o id: ' + result)
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    }
}

exports.login = function (req, res) {
    const user = new User(req.body)
    user.validateLogin()
    if (user.errors.length > 0) {
        // Se houver erros, redirecionar para a pagina de login e exibir os erros
        return res.send(user.errors)
    } else {
        user.login()
            .then((result) => {
                res.send('Usuário logado com sucesso com o username: ' + result)
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    }
}