import type { HttpContext } from '@adonisjs/core/http'

import Tipo from "#models/tipo";

export default class TiposController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await Tipo.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await Tipo.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome'])

    return await Tipo.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const tipo = await Tipo.findOrFail(params.id)
    const dados = request.only(['nome'])

    tipo.merge(dados)

    return await tipo.save()
  }

  async destroy({ params }: HttpContext) {
    const tipo = await Tipo.findOrFail(params.id)

    await tipo.delete()
    return { msg: 'Registro deletedo com sucesso', tipo }
  }
}