let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let fs = require('fs')
let shortid = require('shortid').generate
let path = require('path')

let app = express()

app.use(cors())
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/email', require('./routes/email'))
app.use('/applicants', require('./routes/applicants'))
app.use('/reviews', require('./routes/reviews'))

app.get('/ok', (req, res) => {
  res.send('OK')
})

app.get('/test', (req, res) => {
  res.json(['testing', 'hello Zoltan!'])
})

app.listen(8080, function () {
  console.log("listening @ 8080")
})
