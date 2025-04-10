const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: false }))

const routeCompraVenda = require('./routes/bolsaDeValores/compraVenda')
app.use('/bolsaDeValores', routeCompraVenda)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
