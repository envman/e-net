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
    fs.readFile('./data/' + personId + '/personalData.json', function (err, data) {
        if (err) {
            return res.send(err);
        }

        fs.readdir('./data/' + personId + '/', (err, files) => {
          let person = JSON.parse(data)
          person.files = []

          files.forEach(file => {
            if (file != 'personalData.json') {
              person.files.push(file)
            }
          })

          res.json(person)
        })
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
        list.push({ name: person.name, id: person.id, status: person.status, role: person.role })
    } else {
        existing[0].name = person.name
        existing[0].status = person.status
        existing[0].role = person.role
    }

    fs.writeFile('./list.json', JSON.stringify(list, null, 2), function (listErr) {
        mkdirp('./data/' + person.id, (err) => {
            fs.writeFile('./data/' + person.id + '/personalData.json', JSON.stringify(person, null, 2), function (err) {
                if (err) {
                    console.log(err)
                }
                res.json(person)
            })
        })
    })
})

router.post('/upload/:file/:id', (req, res) => {
  let file = req.params.file
  let id = req.params.id

  let writeStream = fs.createWriteStream('./data/' + id + '/' + file)

  req
    .on('end', () => {
      res.send('DONE')
    })
    .pipe(writeStream)
})

module.exports = router
