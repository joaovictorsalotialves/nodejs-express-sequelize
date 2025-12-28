const Controller = require('./Controller.js')
const PersonService = require('../services/PersonService.js')

const personService = new PersonService()

class PersonController extends Controller {
  constructor () {
    super(personService)
  }

  async getMatriculationsByStudent(req, res) {
    try {
      const { studentId } = req.params

      const matriculations = await personService.getMatriculationsByStudent(Number(studentId))

      return res.status(200).json(matriculations)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = PersonController
