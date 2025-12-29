const Services = require('./Services.js')

class PersonService extends Services {
  constructor () {
    super('Person')
  }

  async getAllMatriculationsByStudent(studentId) {
    const student = await super.getById(studentId)
    const matriculations = await student.getAllCoursesMatriculate()

    return matriculations
  }

  async getMatriculationsActiveByStudent(studentId) {
    const student = await super.getById(studentId)
    const matriculations = await student.getCoursesMatriculateActive()

    return matriculations
  }

  async getAllPeople() {
    const people = await super.getByScope('all')
    return people
  }
}

module.exports = PersonService
