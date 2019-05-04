const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')

routes.post('/sessions', controllers.SessionController.store)
routes.post('/users', controllers.UserController.store)

routes.use(authMiddleware)

/*
 * Purchases
 */
routes.post('/purchase', controllers.PurchaseController.store)

module.exports = routes
