let router = require('express').Router()
let shortid = require('shortid').generate
let fs = require('fs')
let mkdirp = require('mkdirp')

router.get('/test', (req, res) => {
    res.send('Person OK')
})

router.get('/find/:id', (req, res) => {
    let personId = req.params.id
    fs.readFile(personId + '/personalData.json', function (err, data) {
        if (err) {
            return console.log(err);
        }
       res.send(data)
    })
})

router.get('/find/:name', (req, res) => {

})

router.post('/add', (req, res) => {
    let newPerson = req.body
    let newId = shortid()
    newPerson.id = newId

    mkdirp('./' + newId, (err) => {
        fs.writeFile('./' + newId + '/personalData.json', JSON.stringify(newPerson, null, 2), function (err) {
            if (err) { 
                console.log(err) 
            }
            res.send(newId)
        })
    })
})

module.exports = router
