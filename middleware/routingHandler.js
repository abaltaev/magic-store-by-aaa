module.exports = (app) => {
  //const
  const indexRouter = require('../routes/index')
  const authRouter = require('../routes/auth')
  const cardRouter = require('../routes/card')
  const profileRouter = require('../routes/profile')
  const basketRouter = require('../routes/basket')
  //app.use
  app.use(indexRouter)
  app.use('/auth', authRouter)
  app.use('/card', cardRouter)
  app.use('/profile', profileRouter)
  app.use('/basket', basketRouter)
}
