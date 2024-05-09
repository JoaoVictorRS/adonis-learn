// import type { HttpContext } from '@adonisjs/core/http'

import Tipo from "#models/tipo";

export default class TiposController {
  async index() {
    return await Tipo.all()
  }
}