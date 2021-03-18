const router = require('express').Router()

// router.get('/:name', (req.res) => {

// })
router.get('/', (req,res) => res.render('card'))

module.exports = router
