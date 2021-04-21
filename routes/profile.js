const router = require('express').Router()
const User = require('../models/user')
const Card = require('../models/card')
const { sessionCheker } = require('../middleware/authHandler')


router.get('/',(req,res)=>res.render('profile'))

router.get('/purchased', (req,res)=>res.render('purchased'))
router.get('/forsale',(req,res)=>res.render('forsale'))

router.post('/forsale', async (req, res) => {
  const arr = {
    1: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/03/acolyte-of-pain.png',
    2: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/11/antique-healbot1.png',
    3: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/11/abyssal-enforcer-1.png',
    4: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2015/08/alexstraszas-champion-hd.png',
    5: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/03/azure-drake.png',
    6: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2015/11/anyfin-can-happen-hd.png',
    7: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/03/doomhammer.png',
    8: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/03/ancient-of-war1.png',
    9: 'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2016/08/arcane-giant.png',
    10:'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2018/02/patches-the-pirate-nerf.png',
    11:'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/03/alexstrasza.png',
    12:'https://cdn.hearthstonetopdecks.com/wp-content/uploads/2014/03/deathwing.png',
    }

  const card = new Card ({
    name: req.body.name,
    img: arr[req.body.img],
    price: req.body.price,
    city: req.body.city,
    condition: req.body.condition,
    sellerID: req.session.user._id
  })
  await card.save()
  res.json('OK')
})
module.exports = router
