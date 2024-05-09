import ProdutoIgrediente from '#models/produto_igrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await ProdutoIgrediente.createMany([
      {
        produtoId: 6,
        igredienteId: 1
      }
    ])
  }
}