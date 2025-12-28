const Controller = require('./Controller.js')
const MatriculationService = require('../services/MatriculationService.js')

const personService = new MatriculationService()

class MatriculationController extends Controller {
  constructor () {
    super(personService)
  }
}

module.exports = MatriculationController
