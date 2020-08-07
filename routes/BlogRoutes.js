const express = require('express')
const router = express.Router()

const { BlogController } = require('../controllers')
const { BlogValidator } = require('../validators')

router.get('/blogs', BlogController.findAll)
router.get('/blogs/:id', BlogController.findOne)
router.post('/blogs', BlogValidator.create, BlogController.create)
router.put('/blogs/:id', BlogValidator.edit, BlogController.edit)
router.delete('/blogs/:id', BlogController.delete)

module.exports = router