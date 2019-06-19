'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WorkGroupSchema extends Schema {
  up () {
    this.create('work_groups', table => {
      table.increments()
      table.string('name', 40).notNullable()
      table.string('enterprise_name', 40)
      table.timestamps()
    })
  }

  down () {
    this.drop('work_groups')
  }
}

module.exports = WorkGroupSchema
