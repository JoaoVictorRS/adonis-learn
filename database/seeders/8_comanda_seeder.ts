import Comanda from '#models/comanda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Comanda.createMany([
      {
        mesa: "C-3",
        funcionarioId: 2,
        clienteId: 2,
        formaPagamentoId: 4,
      }
    ])
  }
}