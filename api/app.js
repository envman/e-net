let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(bodyParser.json())

app.get('/ok', (req, res) => {
  res.send('OK')
})

app.get('/test', (req, res) => {
  res.json(['testing', 'hello Zoltan!' ])
})

app.listen(8080, function () {
  console.log("listening 8080")
})
