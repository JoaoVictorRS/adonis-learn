import FormaPagamento from '#models/forma_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await FormaPagamento.createMany([
      {nome: 'Credito'},
      {nome: 'Debito'},
      {nome: 'Dinheiro'},
      {nome: 'Pix'}
    ])
  }
}