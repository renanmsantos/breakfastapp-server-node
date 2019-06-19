'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerWorkGroupSchema extends Schema {
  up () {
    this.create('customer_work_groups', table => {
      table.increments()
      table
        .integer('work_group_id')
        .unsigned()
        .references('id')
        .inTable('work_groups')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('customer_id')
        .unsigned()
        .references('id')
        .inTable('customers')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .boolean('is_admin')
        .notNullable()
        .default(false)
    })
  }

  down () {
    this.drop('customer_work_groups')
  }
}

module.exports = CustomerWorkGroupSchema
