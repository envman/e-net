let router = require('express').Router()
let fs = require('fs')

let data = fs.readFileSync('./reviews.json', 'utf-8')
let list = JSON.parse(data)

router.get('/test', (req, res) => {
    res.send('Reviews OK')
})

router.get('/list', (req, res) => {
    res.json(list)
})

module.exports = router
