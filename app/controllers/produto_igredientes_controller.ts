import ProdutoIgrediente from '#models/produto_igrediente'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProdutoIgredientesController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await ProdutoIgrediente.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await ProdutoIgrediente.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['produtoId', 'igredienteId'])

    return await ProdutoIgrediente.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const produto_igrediente = await ProdutoIgrediente.findOrFail(params.id)
    const dados = request.only(['produtoId', 'igredienteId'])

    produto_igrediente.merge(dados)

    return await produto_igrediente.save()
  }

  async destroy({ params }: HttpContext) {
    const produto_igrediente = await ProdutoIgrediente.findOrFail(params.id)

    await produto_igrediente.delete()
    return { msg: 'Registro deletedo com sucesso', produto_igrediente }
  }
}