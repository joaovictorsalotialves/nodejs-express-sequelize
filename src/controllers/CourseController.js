const Controller = require('./Controller.js')
const CourseService = require('../services/CourseService.js')

const personService = new CourseService()

class CourseController extends Controller {
  constructor () {
    super(personService)
  }
}

module.exports = CourseController
