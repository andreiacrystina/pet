'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Projeto extends Model {
  static get table () {
    return 'projetos'
  }

  bolsistas () {
    return this.belongsToMany('App/Models/Bolsista')
      .withTimestamps()
      .withPivot(['id', 'colaborador', 'created_at', 'updated_at'])
  }
}

module.exports = Projeto
