const router = require('express').Router()
const bcrypt = require('bcrypt')
const { sessionChecker } = require('../middleware/authHandler')
const User = require('../models/user')



router
  .route('/login')
  .get(sessionChecker,(req,res)=>{
    res.render('/login')
  })
  .post(async (req,res)=>{
    const {name, password} = req.body
    const user = await User.findOne({name})
    if(user && (await bcrypt.compare(password, user.password))){
      req.session.user = user
      res.redirect('/')
    }else{
      alert('Не верный login и/или password')
      res.redirect('/login')
    }
  })

router
  .route('/signup')
  .get(sessionChecker,(req ,res)=>{
    res.render('/signup')
  })
  .post(async (req,res, next)=>{
    try{
      const {name, email, password, city} = req.body
      const salt = 10
     const user = new User({
        name,
        email,
        password: await bcrypt.hash(password,salt),
        city
      }) 
      await user.save()
      req.session.user = user
      res.redirect('/')
    } catch (error){
      next(error)
    }
  })

router.get('/logOut',async (req, res, next)=>{
if(req.session.user){
  try{
    await req.session.destroy()
    res.clearCookie('user_sid')
    res.redirect('/')
  }catch (error){
   next(error)
  }
}else{
  res.redirect('/')
}
})

module.exports = router
