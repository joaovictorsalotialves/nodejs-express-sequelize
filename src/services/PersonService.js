const Services = require('./Services.js')

class PersonService extends Services {
  constructor () {
    super('Person')
    this.matriculationService = new Services('Matriculation')
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

  async cancelStudentAndMatriculation(studentId) {
    await super.update({ active: false }, { id: studentId })
    await this.matriculationService.update({ status: 'cancelado' }, {
      student_id: studentId
    })
  }
}

module.exports = PersonService
