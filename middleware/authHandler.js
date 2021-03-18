function cookieCleaner(req,res,next){
  if(req.cookie.user_sid && !req.session.user){
    res.clearCookie('user_sid')
  }
  next()
}

function sessionChecker(req ,res, next){
  if(req.session.user){
    // alert('Вы уже залогинины')
    res.redirect('/') //???? ручка под вопросом
  } else{
    next()
  }
}


const checkUser = (req, res, next) => {
  if(req.session.user){
    res.locals.check = true
    next()
  } else {
    res.locals.check = false
    next()
  }
}
module.exports = {sessionChecker, cookieCleaner, checkUser}
