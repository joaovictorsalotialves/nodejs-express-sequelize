const { Router } = require('express')
const PersonController = require('../controllers/PersonController.js')

const router = Router()

router.get('/person', PersonController.getAll)

module.exports = router
