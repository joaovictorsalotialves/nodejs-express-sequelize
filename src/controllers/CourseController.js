const { Op } = require('sequelize')

const Controller = require('./Controller.js')
const CourseService = require('../services/CourseService.js')

const courseService = new CourseService()

class CourseController extends Controller {
  constructor () {
    super(courseService)
  }

  async getCourses(req, res) {
    const { start_date, end_date } = req.query
    const where = {}

    start_date || end_date ? where.start_date = {} : null
    start_date ? where.start_date[Op.gte] = start_date : null
    end_date ? where.start_date[Op.lte] = end_date : null

    try {
      const courses = await courseService.getAll(where)
      return res.status(200).json(courses)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = CourseController
