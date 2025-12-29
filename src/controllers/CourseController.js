const { Op } = require('sequelize')

const Controller = require('./Controller.js')
const CourseService = require('../services/CourseService.js')

const personService = new CourseService()

class CourseController extends Controller {
  constructor () {
    super(personService)
  }

  async getCourses(req, res) {
    const { start_date, end_date } = req.query
    const where = {}

    start_date || end_date ? where.start_date = {} : null
    start_date ? where.start_date[Op.gte] = start_date : null
    end_date ? where.start_date[Op.lte] = end_date : null
  }
}

module.exports = CourseController
