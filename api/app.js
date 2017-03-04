let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())

app.get('/ok', (req, res) => {
  res.send('OK')
})

app.get('/test', (req, res) => {
  res.json({ name: 'testing' })
})

app.listen(8080)
