'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BolsistaReuniaoSchema extends Schema {
  up () {
    this.create('bolsista_reuniao', (table) => {
      table.increments()
      table.integer('bolsista_id').unsigned().references('id').inTable('bolsistas').onUpdate('CASCADE').onDelete('RESTRICT')
      table.integer('reuniao_id').unsigned().references('id').inTable('reunioes').onUpdate('CASCADE').onDelete('RESTRICT')
      table.boolean('bolsista_presente').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('bolsista_reuniao')
  }
}

module.exports = BolsistaReuniaoSchema
