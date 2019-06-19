'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerSchema extends Schema {
  up () {
    this.create('customers', table => {
      table.increments()
      table.string('name', 50).notNullable()
      table.string('lastname', 50).notNullable()
      table
        .string('cpf', 20)
        .notNullable()
        .unique()
      table
        .string('cellphone', 20)
        .notNullable()
        .unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
