const express = require('express')
const bodyParser = require('body-parser')
let router = require('./router')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use('/node_modules', express.static('node_modules'))
app.use('/public', express.static('public'))
app.set('view engine', 'ejs')

app.listen(3000, '127.0.0.1', () => {
  console.log('server is running at: http://127.0.0.1:3000');
})

app.use(router)