let express = require('express')
let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.json())

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json())

app.get('/ok', (req, res) => {
  res.send('OK')
})

app.get('/test', (req, res) => {
  res.json(['testing' ])
})

app.listen(8080, function () {
  console.log("listening 8080")
})
