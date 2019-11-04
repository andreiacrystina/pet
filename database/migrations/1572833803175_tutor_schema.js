'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TutorSchema extends Schema {
  up () {
    this.create('tutores', (table) => {
      table.increments()
      table.string('cpf').notNullable().unique()
      table.string('nome').notNullable()
      table.string('telefone').notNullable()
      table.string('email').notNullable().unique()
      table.date('data_inicio').notNullable()
      table.date('data_fim')
      table.string('formacao').notNullable()
      table.date('data_nascimento').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tutores')
  }
}

module.exports = TutorSchema
