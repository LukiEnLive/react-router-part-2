import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare lastname: string

  @column()
  declare firstname: string

  @column()
  declare login: string

  @column()
  declare password: string
}