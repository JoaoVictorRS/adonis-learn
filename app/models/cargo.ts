import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Cargo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Funcionario)
  declare funcionarios: HasMany<typeof Funcionario>
}