// lista para atuar como base de dados temporária
const listaDeOperacoes = []

const Operacao = require('../models/operacao')

exports.save = function (req, res) {
    // Cria uma instância da classe Operacão passando os dados que vem do body
    const operacao = new Operacao(req.body)
    // Validar e realizar as conversoes necessarias nos dados da classe
    operacao.create()
    // Se ocorreu algum problema, o atributo erro vai receber na lista e retornar os erros
    if (operacao.errors.length > 0) {
        return res.send(operacao.errors)
    } else {
    // Senão, os dados são enviados para a lista/bd e redireciona para o historico de operações
        listaDeOperacoes.push(operacao.data)
        res.redirect('/operacoes')
    }
}

exports.listaDeOperacoes = listaDeOperacoes