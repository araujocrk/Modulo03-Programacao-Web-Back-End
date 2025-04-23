const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const routeAluno = require('./routes/aluno')
app.use('/alunos', routeAluno)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
