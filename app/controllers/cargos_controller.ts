import Cargo from '#models/cargo'
import type { HttpContext } from '@adonisjs/core/http'

export default class CargosController {
  async index({ request }: HttpContext) {

    const page = request.input('page', 1)
    const howMany = request.input('howMany', 5)

    return await Cargo.query().paginate(page, howMany)
  }

  async show({ params }: HttpContext) {
    return await Cargo.findOrFail(params.id)
  }

  async store({ request }: HttpContext) {

    const dados = request.only(['nome'])

    return await Cargo.create(dados)
  }

  async update({ params, request }: HttpContext) {
    const cargo = await Cargo.findOrFail(params.id)
    const dados = request.only(['nome'])

    cargo.merge(dados)

    return await cargo.save()
  }

  async destroy({ params }: HttpContext) {
    const cargo = await Cargo.findOrFail(params.id)

    await cargo.delete()
    return { msg: 'Registro deletedo com sucesso', cargo }
  }
}