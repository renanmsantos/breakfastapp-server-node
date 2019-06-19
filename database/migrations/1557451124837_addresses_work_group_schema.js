'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddressesWorkGroupSchema extends Schema {
  up () {
    this.create('addresses_work_groups', table => {
      table.increments()
      table.string('street', 200).notNullable()
      table.integer('number', 20).notNullable()
      table.string('district', 120).notNullable()
      table.string('city', 120).notNullable()
      table.string('state', 120).notNullable()
      table.string('cep', 20).notNullable()
      table
        .integer('work_group_id')
        .unsigned()
        .references('id')
        .inTable('work_groups')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.boolean('default').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('addresses_work_groups')
  }
}

module.exports = AddressesWorkGroupSchema
