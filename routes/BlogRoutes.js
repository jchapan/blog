const express = require('express')
const router = express.Router()

const { BlogController } = require('../controllers')

router.get('/blogs', BlogController.findAll)
router.get('/blogs/:id', BlogController.findOne)
router.post('/blogs', BlogController.create)
router.put('/blogs/:id', BlogController.edit)
router.delete('/blogs/:id', BlogController.delete)

module.exports = router