// import type { HttpContext } from '@adonisjs/core/http'

import Igrediente from "#models/igrediente";

export default class IgredientesController {
  async index() {
    return await Igrediente.all()
  }
}