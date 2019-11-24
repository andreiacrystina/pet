'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bolsista extends Model {
  static get table () {
    return 'bolsistas'
  }

  tutor () {
    return this.belongsTo('App/Models/Tutor')
  }

  reunioes () {
    return this.belongsToMany('App/Models/Reuniao')
      .withTimestamps()
      .withPivot(['id', 'bolsista_presente', 'created_at', 'updated_at'])
  }

  projetos () {
    return this.belongsToMany('App/Models/Projeto')
      .withTimestamps()
      .withPivot(['id', 'colaborador', 'created_at', 'updated_at'])
  }
}

module.exports = Bolsista
