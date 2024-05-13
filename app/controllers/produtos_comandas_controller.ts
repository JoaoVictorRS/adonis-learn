import ProdutosComanda from '#models/produtos_comanda'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutosComandasController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await ProdutosComanda.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await ProdutosComanda.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['produtoId', 'comandaId', 'quantidade'])

    return await ProdutosComanda.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const produtos_comanda = await ProdutosComanda.findOrFail(params.id)
    const dados = request.only(['produtoId', 'comandaId', 'quantidade'])

    produtos_comanda.merge(dados)

    return await produtos_comanda.save()
  }

  async destroy({ params }: HttpContext) {
    const produtos_comanda = await ProdutosComanda.findOrFail(params.id)

    await produtos_comanda.delete()
    return { msg: 'Registro deletedo com sucesso', produtos_comanda }
  }
}