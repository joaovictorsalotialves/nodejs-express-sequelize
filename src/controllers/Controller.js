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
}

module.exports = Controller
