const Sequelize = require('sequelize')

const Controller = require('./Controller.js')
const MatriculationService = require('../services/MatriculationService.js')

const matriculationService = new MatriculationService()

class MatriculationController extends Controller {
  constructor () {
    super(matriculationService)
  }

  async getMatriculationByStudent(req, res) {
    try {
      const { student_id } = req.params

      const result = await matriculationService.getAndCount(
        {
          where: {
            student_id: Number(student_id),
            status: 'matriculado'
          },
          limit: 2,
          order: [['id', 'DESC']],
        }
      )
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getCrowdedCourses(req, res) {
    const crowdedCourse = 2
    try {
      const result = await matriculationService.getAndCount({
        where: {
          status: 'matriculado'
        },
        attributes: ['course_id'],
        group: ['course_id'],
        having: Sequelize.literal(`count(course_id) >= ${crowdedCourse}`)
      })
      return res.status(200).json(result.count)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = MatriculationController
