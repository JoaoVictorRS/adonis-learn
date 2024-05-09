import Igrediente from '#models/igrediente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Igrediente.createMany([
      {
        nome: "Alface",
        descricao: "Colhido das melhores colinas da frança"
      },
      {
        nome: "Tomate",
        descricao: "De fazendeiros italianos o autentico tomate italino!"
      },
      {
        nome: "Batata",
        descricao: "Vinda da inglaterra, esse ingrediente ajudou muito a europa na idade media"
      },
      {
        nome: "Pão de Hamburguer"
      },
      {
        nome: "Caramelo Premium",
        descricao: "A receita é um segredo passado de geração em geração"
      }
    ])
  }
}