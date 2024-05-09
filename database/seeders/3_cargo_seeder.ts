import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Cargo.createMany([
      {nome:"Gerente"},
      {nome:"Garçom"}
    ])
  }
}