class Controller {
  constructor (service) {
    this.service = service
  }

  async getAll(req, res) {
    try {
      const result = await this.service.getAll()
      return res.status(200).json(result)
    } catch (error) {
      
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params

      const result = await this.service.getById(id)
      return res.status(200).json(result)
    } catch (error) {
      
    }
  }

  async create(req, res) {
    try {
      const data = req.body

      const result = await this.service.create(data)
      return res.status(200).json(result)
    } catch (error) {
      
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const data = req.body

      const result = await this.service.update(data, Number(id))

      if (!result) {
        return res.status(400).json({ message: 'Update failed' })
      }
      
      return res.status(200).json({ message: 'Updated successfully' })
    } catch (error) {
      
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      await this.service.delete(id)
      return res.status(200).json()
    } catch (error) {
      
    }
  }
}

module.exports = Controller
