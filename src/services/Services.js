const dataSource = require('../database/models')

class Services {
  constructor (model) {
    this.model = model
  }

  async getAll() {
    return dataSource[this.model].findAll()
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id)
  }

  async create(data) {
    return dataSource[this.model].create(data)
  }

  async update(data, id) {
    const dataUpdate = await dataSource[this.model].update(data, {
      where: { id: id }
    })

    if (dataUpdate[0] === 0) {
      return false
    }

    return true
  }

  async delete(id) {
    return dataSource[this.model].destroy({ where: { id: id } })
  }
}

module.exports = Services
