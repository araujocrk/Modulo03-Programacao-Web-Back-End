const express = require('express')
const app = express()
const port = 3000
app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Iniciando servidor na porta ${port}`)
})