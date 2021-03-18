const router = require('express').Router()

router.get('/',(req,res)=>res.render('profile'))

router.get('/purchased', (req,res)=>res.render('purchased'))
router.get('/forsale',(req,res)=>res.render('forsale'))
module.exports = router
