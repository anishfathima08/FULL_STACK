const express = require('express')
const userRouter = express.Router()

const { addUser, getUser, deleteUser, loginUser } = require('../controllers/userController')

userRouter.post('/addUser', addUser)
userRouter.get('/getUser', getUser)
userRouter.delete('/deleteUser/:id', deleteUser)
userRouter.post('/loginUser', loginUser)

module.exports = userRouter 