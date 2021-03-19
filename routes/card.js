const router = require('express').Router()
const User = require('../models/user')
const Card = require('../models/card')
const { sessionCheker } = require('../middleware/authHandler')

router.get('/newSaleCard', (req,res) => {
  res.render('addSaleCard')
})

router.get('/', (req,res)=> res.render('card'))

router.get('/:id', async (req, res) => {
  const {id} = req.params
  const card = await Card.findOne({_id:id})
  console.log(card, 'card');
  res.render ('card', {card})
})

module.exports = router
