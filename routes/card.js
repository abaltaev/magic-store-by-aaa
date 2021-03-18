const router = require('express').Router()
const User = require('../models/user')
const Card = require('../models/card')
const { sessionCheker } = require('../middleware/authHandler')

router.get('/', (req,res) => {
  res.render('card')
})

// router.get('/forsale', (req,res)=> {
//   res.render('forsale')
// })

// router.post('/forsale', async (req, res) => {
//   const arr = [
//     {1: 'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/ltap0gxvul_RU.jpg'},
//     {2: 'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/sm6uf6dhow_RU.jpg'},
//     {3:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/7uyt66c4fo_RU.jpg'},
//     {4:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/fp8onqgwo3_RU.jpg'},
//     {5:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/c2o26fe2w5_RU.jpg'},
//     {6:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/cgcqubotzx_RU.jpg'},
//     {7:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/3bo69fwpy6_RU.jpg'},
//     {8:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/6uk431besl_RU.jpg'},
//     {9:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/lr7wuf741i_RU.jpg'},
//     {10:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/wg130bzl8b_RU.jpg'},
//     {11:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/hnnrutsyhl_RU.jpg'},
//     {12:'https://media.magic.wizards.com/image_legacy_migration/images/magic/tcg/products/dgm/tiwoirwiixix/rqj2xg44it_RU.jpg'},
//   ]
//   const card = new Card ({
//     name: req.body.name.value,
//     img: req.body.select.value,
//     price: req.body.price.value,
//     city: req.body.city.value,
//     condition: req.body.condition.value
//   })
//   for(let key in arr){
//     if (card.img == key){
//       card.img = arr.key
//     }
//   }
//   card.save()
// })

module.exports = router
