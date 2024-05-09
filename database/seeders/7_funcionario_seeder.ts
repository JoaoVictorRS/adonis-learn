import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Funcionario.createMany([
      {
        nome: "Orion",
        cpf: "111.111.111-11",
        endereco: "Distrito Federal",
        sexo: "M",
        telefone: "111111111111111",
        cargoId: 1
      },
      {
        nome: "Carlos",
        cpf: "777.777.777-11",
        endereco: "Ceilandia Norte",
        sexo: "M",
        telefone: "222222222222222",
        cargoId: 2
      }
    ])
  }
}