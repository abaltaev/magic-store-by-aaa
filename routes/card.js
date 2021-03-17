const router = require('express').Router()

// router.get('/:name', (req.res) => {

// })
router.get('/', (req,res) => res.send('CARD PAGE'))

module.exports = router
