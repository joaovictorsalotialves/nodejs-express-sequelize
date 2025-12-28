const Services = require('./Services.js')

class PersonService extends Services {
  constructor () {
    super('Person')
  }

  async getMatriculationsByStudent(studentId) {
    const student = await super.getById(studentId)
    const matriculations = await student.getCoursesMatriculate()

    return matriculations
  }
}

module.exports = PersonService
