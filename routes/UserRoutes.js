const express = require('express')
const router = express.Router()

const { UserController } = require('../controllers')
const { UserValidator } = require('../validators')
const { verifyToken } = require('../middlewares')

router.get('/users', verifyToken, UserController.findAll)
router.get('/users/:id', verifyToken, UserController.findOne)
router.post('/users', UserValidator.create, UserController.create)
router.put('/users/:id', UserValidator.edit, UserController.edit)
router.delete('/users/:id', verifyToken, UserController.delete)

module.exports = router