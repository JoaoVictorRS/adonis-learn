import Tipo from '#models/tipo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Tipo.createMany([
      {nome: 'Bebidas'},
      {nome: 'Hambuerguer'},
      {nome: 'Sobremesas'},
      {nome: 'Hot Dog'},
      {nome: 'Porções'},
    ])
  }
}