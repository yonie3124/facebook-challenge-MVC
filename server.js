const express =require('express')
const router = require('./config/router')

const app = express()


app.use(express.urlencoded({extended:true}))


app.set('views', './views')
app.set('view engine', 'ejs')


app.use(express.static('public'))

app.use(router)

require('./config/mongoose')

app.listen(80, () => {
    console.log('server running on port 80')
})