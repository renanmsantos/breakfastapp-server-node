'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PartnerSchema extends Schema {
  up () {
    this.create('partners', table => {
      table.increments()
      table.string('name', 50).notNullable()
      table
        .string('cnpj', 20)
        .notNullable()
        .unique()
      table.string('phone', 20)
      table.float('delivery_rate').notNullable()
      table.string('instagram_link', 60)
      table.string('facebook_link', 60)
      table.string('youtube_link', 60)
      table.timestamps()
    })
  }

  down () {
    this.drop('partners')
  }
}

module.exports = PartnerSchema
