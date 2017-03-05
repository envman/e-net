let router = require('express').Router()
let fs = require('fs')
let shortid = require('shortid').generate
let mkdirp = require('mkdirp')

let data = fs.readFileSync('./list.json', 'utf-8')
let list = JSON.parse(data)

router.get('/test', (req, res) => {
    res.send('Applicants OK')
})

router.get('/find/:id', (req, res) => {
    let personId = req.params.id
    fs.readFile(personId + '/personalData.json', function (err, data) {
        if (err) {
            return res.send(err);
        }
        res.send(data)
    })
})

router.get('/list', (req, res) => {
    res.json(list)
})

router.post('/update', (req, res) => {

  console.log('updating ', req.body)

    let person = req.body
    person.id = person.id || shortid()

    let existing = list.filter(p => p.id == person.id)

    if (existing.length < 1) {
        list.push({ name: person.name, id: person.id })
    } else {
        existing[0].name = person.name
    }

    fs.writeFile('./list.json', JSON.stringify(list, null, 2), function(listErr) {
        mkdirp('./' + person.id, (err) => {
            fs.writeFile('./' + person.id + '/personalData.json', JSON.stringify(person, null, 2), function (err) {
                if (err) {
                    console.log(err)
                }
                res.json(person)
            })
        })
    })
})

module.exports = router
