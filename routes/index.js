const router = require('express').Router()
const Card = require('../models/card')
router.get('/', async (req,res)=>{
  let cards = await Card.find()
  console.log(cards)
  res.render('index',{cards})

})

module.exports = router
