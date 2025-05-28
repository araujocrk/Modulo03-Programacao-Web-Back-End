const Operacao = require('../models/operacao.model')

exports.save = function (req, res) {
    // Cria uma instância da classe Operacão passando os dados que vem do body
    const operacao = new Operacao(req.body)
    // Validar e realizar as conversoes necessarias nos dados da classe
    operacao.validate()
    // Se ocorreu algum problema, o atributo erro vai receber na lista e retornar os erros
    if (operacao.errors.length > 0) {
        return res.send(operacao.errors)
    } else {
    // Senão, os dados são enviados para a lista/bd e redireciona para o historico de operações
        operacao.create()
            .then((result) => {
                res.send('Operacão salva com sucesso com o id: ' + result)
            })
            .catch((error) => {
                res.status(500).send(error)
            })
    }
}