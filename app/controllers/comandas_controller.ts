import type { HttpContext } from '@adonisjs/core/http'

import Comanda from "#models/comanda";

export default class ComandasController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await Comanda.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await Comanda.query()
                        .where('id', params.id)
                        .preload('cliente')
                        .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'formaPagamentoId', 'dataPagamento', 'data'])

    return await Comanda.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const comanda = await Comanda.findOrFail(params.id)
    const dados = request.only(['mesa', 'funcionarioId', 'clienteId', 'formaPagamentoId', 'dataPagamento', 'data'])

    comanda.merge(dados)

    return await comanda.save()
  }

  async destroy({ params }: HttpContext) {
    const comanda = await Comanda.findOrFail(params.id)

    await comanda.delete()
    return { msg: 'Registro deletedo com sucesso', comanda }
  }
}