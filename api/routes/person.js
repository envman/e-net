let router = require('express').Router()

router.get('/test', (req, res) => {
  res.send('Person OK')
})

module.exports = router
