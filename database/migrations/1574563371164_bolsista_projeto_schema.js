'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BolsistaProjetoSchema extends Schema {
  up () {
    this.create('bolsista_projetos', (table) => {
      table.increments()
      table.integer('bolsista_id').unsigned().references('id').inTable('bolsistas').onUpdate('CASCADE').onDelete('RESTRICT')
      table.integer('projeto_id').unsigned().references('id').inTable('projetos').onUpdate('CASCADE').onDelete('RESTRICT')
      table.boolean('colaborador').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('bolsista_projetos')
  }
}

module.exports = BolsistaProjetoSchema
