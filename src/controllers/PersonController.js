const database = require('../models')

class PersonController {
  static async getAll(req, res) {
    try {
      const people = await database.Person.findAll()
      return res.status(200).json(people)
    } catch (error) {
      
    }
  }
}

module.exports = PersonController
