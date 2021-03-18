module.exports = (app) => {
  // ручки
  const indexRouter = require('../routes/index')
  const authRouter = require('../routes/auth')
  const cardRouter = require('../routes/card')
  const profileRouter = require('../routes/profile')
  const basketRouter = require('../routes/basket')
  //чек сессии 
  const { checkUser } = require('../middleware/authHandler')
  //app.use
  app.use('*', checkUser) // checkUser на весь проект для navbara
  app.use(indexRouter)
  app.use('/auth', authRouter)
  app.use('/card', cardRouter)
  app.use('/profile', profileRouter)
  app.use('/basket', basketRouter)
}
