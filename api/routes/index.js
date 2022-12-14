const { Router } = require('express')
const authRouter = require('./authRoutes')
const employeeRouter = require('./employeeRoutes')

const appRouter = Router()

appRouter.use('/employees', employeeRouter)
appRouter.use('/auth', authRouter)

module.exports = appRouter