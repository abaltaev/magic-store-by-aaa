const router = require('express').Router()
const User = require('../models/user')
const Card = require('../models/card')

router.get('/',(req,res)=>res.render('basket'))

router.post('/:id', async (req, res) => {
  const {id} = req.params;
  console.log(id);
  const addBasketCard = await Card.findOne({_id:id})
  console.log(addBasketCard);
  const thisUser = await User.findOne({_id:req.session.user._id})
  await thisUser.basket.push(addBasketCard)
  // await thisUser.updateOne()
  console.log(thisUser.basket);

  await thisUser.save()
  res.send('work!')
})


module.exports = router
