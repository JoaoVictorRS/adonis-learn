import ProdutosComanda from '#models/produtos_comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await ProdutosComanda.createMany([
      {
       produtoId: 1,
       comandaId: 1,
       quantidade: 3
      }
    ])
  }
}