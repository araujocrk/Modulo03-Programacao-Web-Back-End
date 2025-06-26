const express = require('express')
const app = express()
const port = 3000

const router = require('./routes/index-router')
const userRouter = require('./routes/user-router')
const expressLayouts = require('express-ejs-layouts')

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.use(expressLayouts)


app.set('views', 'views')
app.set('view engine', 'ejs')

app.use('/', router)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})