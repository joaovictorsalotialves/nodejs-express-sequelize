const { Router } = require('express')
const PersonController = require('../controllers/PersonController.js')
const MatriculationController = require('../controllers/MatriculationController.js')

const personController = new PersonController()
const matriculationController = new MatriculationController()

const router = Router()

router.get('/person', (req, res) => personController.getAll(req, res))
router.get('/person/all', (req, res) => personController.getAllPeople(req, res))
router.get('/person/:id', (req, res) => personController.getById(req, res))
router.post('/person', (req, res) => personController.create(req, res))
router.put('/person/:id', (req, res) => personController.update(req, res))
router.delete('/person/:id', (req, res) => personController.delete(req, res))

router.get('/person/:studentId/matriculation', (req, res) => personController.getMatriculationsActiveByStudent(req, res))
router.get('/person/:studentId/matriculation/all', (req, res) => personController.getAllMatriculationsByStudent(req, res))
router.get('/person/:studentId/matriculation/:id', (req, res) => personController.getOne(req, res))
router.post('/person/:studentId/matriculation', (req, res) => matriculationController.create(req, res))

module.exports = router
