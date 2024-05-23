import type { HttpContext } from '@adonisjs/core/http'

import Igrediente from "#models/igrediente";

export default class IgredientesController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await Igrediente.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await Igrediente.query()
                          .where('id', params.id)
                          .preload('produtos')
                          .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome', 'descricao'])

    return await Igrediente.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const igrediente = await Igrediente.findOrFail(params.id)
    const dados = request.only(['nome', 'descricao'])

    igrediente.merge(dados)

    return await igrediente.save()
  }

  async destroy({ params }: HttpContext) {
    const igrediente = await Igrediente.findOrFail(params.id)

    await igrediente.delete()
    return { msg: 'Registro deletedo com sucesso', igrediente }
  }
}