'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReuniaoSchema extends Schema {
  up () {
    this.create('reunioes', (table) => {
      table.increments()
      table.integer('tutor_id').unsigned().references('id').inTable('tutores').onUpdate('CASCADE').onDelete('SET NULL')
      table.date('data').notNullable()
      table.time('hora').notNullable()
      table.text('descricao').notNullable()
      table.string('bolsista_ata').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('reunioes')
  }
}

module.exports = ReuniaoSchema
