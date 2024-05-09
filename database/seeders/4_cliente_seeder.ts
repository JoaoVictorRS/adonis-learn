import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Cliente.createMany([
      {
        nome: "João",
        cpf: "111.111.111-11",
        telefone: "619999999999999",
        email: "cock@gmail.com"
      },
      {
        nome: "Maria",
        cpf: "222.222.222-22",
        telefone: "611111111111111",
        email: "glock@gmail.com"
      },
      {
        nome: "Roberta",
        cpf: "333.333.333-33",
        telefone: "619922222222222",
        email: "mi6@gmail.com"
      },
    ])
  }
}