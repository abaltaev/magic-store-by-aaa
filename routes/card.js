const router = require('express').Router()
const User = require('../models/user')
const Card = require('../models/card')
const { sessionCheker } = require('../middleware/authHandler')

router.get('/', (req,res) => res.render('card'))

router.post('/sell', (req, res) => {
  
})

module.exports = router
