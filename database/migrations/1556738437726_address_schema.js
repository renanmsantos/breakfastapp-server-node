'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressSchema extends Schema {
  up () {
    this.create('addresses', table => {
      table.increments()
      table.string('street', 200).notNullable()
      table.integer('number', 20).notNullable()
      table.string('district', 120).notNullable()
      table.string('city', 120).notNullable()
      table.string('state', 120).notNullable()
      table.string('cep', 20).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .boolean('default')
        .notNullable()
        .defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses')
  }
}

module.exports = AddressSchema
