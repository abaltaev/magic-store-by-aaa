const express = require('express')
const indexMiddleware = require('./middleware/indexHandler')
const errorMiddleware = require('./middleware/errorHandler')
const routingMiddleware = require('./middleware/routingHandler')
// const hammer = require('hammerjs');

const app = express()

indexMiddleware(app)
// errorMiddleware(app)
routingMiddleware(app)


module.exports = app
