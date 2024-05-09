import Produto from '#models/produto'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    return await Produto.createMany([
      {
        nome: "Coca-Cola Lata",
        preco: 6.5,
        tamanho: "330ml",
        tipoId: 1
      },
      {
        nome: "Coca-Cola 2L",
        preco: 10,
        tamanho: "2l",
        tipoId: 1
      },
      {
        nome: "Coca-Cola 600",
        preco: 8,
        tamanho: "600ml",
        tipoId: 1
      },
      {
        nome: "Coca-Cola ks",
        preco: 4.5,
        tamanho: "290ml",
        tipoId: 1
      },
      {
        nome: "CheeseBurger",
        preco: 15.99,
        tipoId: 2
      },
      {
        nome: "BigBurger",
        preco: 19.99,
        tipoId: 2
      },
      {
        nome: "Explosão Arabe",
        preco: 29.99,
        tipoId: 2
      },
      {
        nome: "Pudim",
        preco: 19.99,
        tamanho: "300g",
        tipoId: 3
      },
      {
        nome: "Cupcake",
        preco: 12.99,
        tamanho: "200g",
        tipoId: 3
      },
      {
        nome: "BrownieGG",
        preco: 24.99,
        tamanho: "600g",
        tipoId: 3
      },
      {
        nome: "Doguinho",
        preco: 9.99,
        tamanho: "pequeno",
        tipoId: 4
      },
      {
        nome: "Dog",
        preco: 12.99,
        tamanho: "medio",
        tipoId: 4
      },
      {
        nome: "Dogão",
        preco: 19.99,
        tamanho: "grande",
        tipoId: 4
      },
      {
        nome: "Porção Batata Pequena",
        preco: 13.99,
        tamanho: "pequena",
        tipoId: 5
      },
      {
        nome: "Porção Batata Media",
        preco: 19.99,
        tamanho: "media",
        tipoId: 5
      },
      {
        nome: "Porção Batata Grande",
        preco: 25.99,
        tamanho: "grande",
        tipoId: 5
      },
      {
        nome: "Porção Batata com Queijo",
        preco: 30.00,
        tamanho: "pequena",
        tipoId: 5
      },
    ])
  }
}