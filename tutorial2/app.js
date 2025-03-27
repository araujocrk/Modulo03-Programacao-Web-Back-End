const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Olá Mundo!')
})

app.get('/ryan', (req, res) => {
    res.send('Olá Ryan!')
})

app.get('/fernando', (req, res) => {
    res.send('Olá Fernando!')
})

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})