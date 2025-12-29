const dataSource = require('../database/models')

class Services {
  constructor (model) {
    this.model = model
  }

  async getAll(where = {}) {
    return dataSource[this.model].findAll({ where: { ...where } })
  }

  async getByScope(scope) {
    return dataSource[this.model].scope(scope).findAll()
  }

  async getById(id) {
    return dataSource[this.model].findByPk(id)
  }

  async getOne(where) {
    return dataSource[this.model].findOne({ where: { ...where } })
  }

  async getAndCount(where) {
    return dataSource[this.model].findAndCountAll({ 
      where: { ...where },
      limit: 2,
      order: [['id', 'DESC']],
    })
  }

  async create(data) {
    return dataSource[this.model].create(data)
  }

  async update(data, where) {
    const dataUpdate = await dataSource[this.model].update(data, {
      where: { ...where }
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
