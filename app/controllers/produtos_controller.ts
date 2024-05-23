import type { HttpContext } from '@adonisjs/core/http'

import Produto from "#models/produto";

export default class ProdutosController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)
    
    //Por questões de perfomace é uma boa deixar o index sem os preloads
    return await Produto.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    //return await Produto.findOrFail(params.id)

    //Aqui pode-se usar quantos preloads quiser ja que com o first so retornara um obj inves de uma array
    return await Produto.query()
                        .where('id', params.id)
                        .preload('tipo')
                        .preload('ingredientes')
                        .first()
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])

    return await Produto.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)
    const dados = request.only(['nome', 'preco', 'tamanho', 'tipoId'])

    produto.merge(dados)

    return await produto.save()
  }

  async destroy({ params }: HttpContext) {
    const produto = await Produto.findOrFail(params.id)

    await produto.delete()
    return { msg: 'Registro deletedo com sucesso', produto }
  }

}
