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

router.get('/person/:student_id/matriculation', (req, res) => personController.getMatriculationsActiveByStudent(req, res))
router.get('/person/:student_id/matriculation/all', (req, res) => personController.getAllMatriculationsByStudent(req, res))
router.get('/person/:student_id/matriculation/confirmat', (req, res) => matriculationController.getMatriculationByStudent(req, res))
router.get('/person/matriculation/crowded', (req, res) => matriculationController.getCrowdedCourses(req, res))
router.get('/person/:student_id/matriculation/:id', (req, res) => matriculationController.getOne(req, res))
router.post('/person/:student_id/matriculation', (req, res) => matriculationController.create(req, res))
router.put('/person/:student_id/matriculation/:id', (req, res) => matriculationController.update(req, res))
router.delete('/person/:student_id/matriculation/:id', (req, res) => matriculationController.delete(req, res))

module.exports = router
