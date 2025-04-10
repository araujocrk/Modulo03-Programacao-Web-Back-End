const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home')
})

const routeAlunosRegistro = require('./routes/alunos/registroEhistorico')
app.use('/alunos', routeAlunosRegistro)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})