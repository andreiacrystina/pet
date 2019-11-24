'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjetoSchema extends Schema {
  up () {
    this.create('projetos', (table) => {
      table.increments()
      table.string('nome').notNullable()
      table.date('data_inicio').notNullable()
      table.date('data_fim').notNullable()
      table.text('resumo').notNullable()
      table.string('bolsista_responsavel').notNullable()
      table.date('data_aceitacao').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('projetos')
  }
}

module.exports = ProjetoSchema
