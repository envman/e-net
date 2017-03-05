let router = require('express').Router()
let fs = require('fs')
let path = require('path')
let mkdirp = require('mkdirp')

router.get('/groups', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'data', 'review-groups.json'), 'utf-8', (err, file) => {
      res.send(file)
  })
})

.post('/groups', (req, res) => {
  fs.writeFile(path.join(__dirname, '..', 'data', 'review-groups.json'), JSON.stringify(req.body, null, 2), (err) => {
    res.send('OK')
  })
})

.post('/review/:from/:to', (req, res) => {
  let from = req.params.from
  let forPerson = req.params.to

  let review = req.body
  review.date = new Date().toString()

  mkdirp('./data/reviews/' + forPerson, (err) => {
    fs.writeFile(path.join(__dirname, '..', 'data', 'reviews', forPerson, from + '.json'), JSON.stringify(review, null, 2), (fileErr) => {
      res.send('DONE')
    })
  })
})

module.exports = router
