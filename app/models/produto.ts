import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import Tipo from './tipo.js'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Igrediente from './igrediente.js'
import Comanda from './comanda.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare preco: number

  @column()
  declare tamanho: string

  @column()
  declare tipoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Tipo)
  declare tipo: BelongsTo<typeof Tipo>

  @manyToMany(() => Igrediente, {
    'pivotTable': 'produto_igredientes',
  })
  declare ingredientes: ManyToMany<typeof Igrediente>

  @manyToMany(() => Comanda, {
    'pivotTable': 'produto_comandas',
  })
  declare comandas: ManyToMany<typeof Comanda>

}