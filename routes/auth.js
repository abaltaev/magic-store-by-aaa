const router = require('express').Router()
const bcrypt = require('bcrypt')
const { sessionChecker } = require('../middleware/authHandler')
const { cookieCleaner } = require('../middleware/authHandler')
const User = require('../models/user')

// const { route } = require('./entries')

router.get('/', (req, res)=>{
  res.render('index')
})

router
  .route('/login')
  .get(sessionChecker,(req,res)=>{
    res.render('entries/auth')
  })
  .post(async (req,res)=>{
    const {name, password} = req.body
    const user = await User.findOne({name})
    if(user && (await bcrypt.compare(password, user.password))){
      req.session.user = user
      res.redirect('/entries')
    }else{
      // alert('Не верный login или password')
      res.redirect('/auth')
    }
  })

router
  .route('/signUp')
  .get(sessionChecker,(req ,res)=>{
    res.render('entries/signUp')
  })
  .post(async (req,res, next)=>{
    try{
      const {name, email, password} = req.body
      const salt = 10
     const user = new User({
        name,
        email,
        password: await bcrypt.hash(password,salt)
      }) 
      await user.save()
      req.session.user = user
      res.redirect('/entries')
    } catch (error){
      next(error)
    }
  })

router.get('/logOut',async (req, res, next)=>{
if(req.session.user){
  try{
    await req.session.destroy()
    res.clearCookie('user_sid')
    res.redirect('/auth')
  }catch (error){
   next(error)
  }
}else{
  res.redirect('/auth')
}
})

module.exports = router
