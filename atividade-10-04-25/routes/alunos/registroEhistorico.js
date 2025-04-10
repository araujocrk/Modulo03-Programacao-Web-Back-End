const express = require('express')
const router = express.Router()

router.get('/registro', (req, res) => {
    res.render('./alunos/registro')
})

const notas = []

router.get('/historico', (req, res) => {
    res.render('./alunos/historico', { notass: notas })
})

router.post('/historico', (req, res) => {
    let disciplina = req.body.disciplina
    let n1 = parseFloat(req.body.nota1)
    let n2 = parseFloat(req.body.nota2)
    let media = (n1 + n2) / 2

    const nota = {
        disciplina,
        n1,
        n2,
        media
    }

    notas.push(nota)
    res.render('./alunos/historico', { notass: notas})
})

module.exports = router