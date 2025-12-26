const { Router } = require('express')
const PersonController = require('../controllers/PersonController.js')

const router = Router()

router.get('/', PersonController.getAll)

module.exports = router
