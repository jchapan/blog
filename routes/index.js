const express = require('express')

const router = express.Router()

router.use(require('./UserRoutes'))
router.use(require('./AuthRoutes'))
router.use(require('./BlogRoutes'))

module.exports = router