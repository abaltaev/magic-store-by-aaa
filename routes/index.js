const router = require('express').Router()

const Card = require('../models/card');

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/getarray', async (req, res) => {
  const cardsArr = await Card.find({ status: true });
  res.json(cardsArr);

})

module.exports = router
