const { Router } = require('express')
const { loginEmployee, createEmployee, isLoggedIn } = require('../controllers/authController')
const { authorization } = require('../middlewares/authMid')

const authRouter = Router()

authRouter.post('/login' , loginEmployee)
authRouter.post('/createEmployee', authorization, createEmployee)
authRouter.get('/isLoggedIn', authorization, isLoggedIn)

module.exports = authRouter