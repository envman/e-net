let router = require('express').Router()

router.get('/test', (req, res) => {
  res.send('Applicants OK')
})

module.exports = router
