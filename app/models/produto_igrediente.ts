import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Produto from './produto.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Igrediente from './igrediente.js'

export default class ProdutoIgrediente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare produtoId: number

  @column()
  declare igredienteId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Produto)
  declare produto: BelongsTo<typeof Produto>

  @belongsTo(() => Igrediente)
  declare igrediente: BelongsTo<typeof Igrediente>
}