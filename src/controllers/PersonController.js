const Controller = require('./Controller.js')
const PersonService = require('../services/PersonService.js')

const personService = new PersonService()

class PersonController extends Controller {
  constructor () {
    super(personService)
  }

  async getAllMatriculationsByStudent(req, res) {
    try {
      const { studentId } = req.params

      const matriculations = await personService.getAllMatriculationsByStudent(Number(studentId))

      return res.status(200).json(matriculations)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getMatriculationsActiveByStudent(req, res) {
    try {
      const { studentId } = req.params

      const matriculations = await personService.getMatriculationsActiveByStudent(Number(studentId))

      return res.status(200).json(matriculations)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getAllPeople(req, res) {
    try {
      const people = await personService.getAllPeople()
      return res.status(200).json(people)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = PersonController
