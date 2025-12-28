const Controller = require('./Controller.js')
const CategoryService = require('../services/CategoryService.js')

const personService = new CategoryService()

class CategoryController extends Controller {
  constructor () {
    super(personService)
  }
}

module.exports = CategoryController
