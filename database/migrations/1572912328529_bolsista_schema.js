'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BolsistaSchema extends Schema {
  up () {
    this.create('bolsistas', (table) => {
      table.increments()
      table.integer('tutor_id').unsigned().references('id').inTable('tutores').onUpdate('CASCADE').onDelete('RESTRICT')
      table.string('cpf').notNullable().unique()
      table.string('nome').notNullable()
      table.string('telefone').notNullable()
      table.string('email').notNullable().unique()
      table.date('data_inicio').notNullable()
      table.date('data_fim')
      table.string('curso').notNullable()
      table.integer('semestre').notNullable()
      table.date('data_nascimento').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('bolsistas')
  }
}

module.exports = BolsistaSchema
