// import type { HttpContext } from '@adonisjs/core/http'

import Comanda from "#models/comanda";

export default class ComandasController {
  async index() {
    return await Comanda.all()
  }
}