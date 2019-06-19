'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LineBusinessSchema extends Schema {
  up () {
    this.create('line_businesses', table => {
      table.increments()
      table
        .string('description', 50)
        .notNullable()
        .unique()
      table
        .integer('partner_id')
        .unsigned()
        .references('id')
        .inTable('partners')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('line_businesses')
  }
}

module.exports = LineBusinessSchema
