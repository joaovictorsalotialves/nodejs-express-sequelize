const converterIds = require('../utils/stringConverterHelper.js')

class Controller {
  constructor (service) {
    this.service = service
  }

  async getAll(req, res) {
    try {
      const result = await this.service.getAll()
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params

      const result = await this.service.getById(Number(id))
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getOne(req, res) {
    try {
      const { ...params } = req.params

      const where = converterIds(params)

      const result = await this.service.getOne(where)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async create(req, res) {
    try {
      const data = req.body

      const result = await this.service.create(data)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async update(req, res) {
    try {
      const { ...params } = req.params
      const data = req.body

      const where = converterIds(params)

      const result = await this.service.update(data, where)

      if (!result) {
        return res.status(400).json({ message: 'Update failed' })
      }
      
      return res.status(200).json({ message: 'Updated successfully' })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      await this.service.delete(id)
      return res.status(200).json()
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = Controller
