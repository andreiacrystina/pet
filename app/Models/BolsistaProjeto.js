'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BolsistaProjeto extends Model {
  static get table () {
    return 'bolsista_projeto'
  }

  projeto () {
    return this.belongsTo('App/Models/Projeto')
  }

  bolsista () {
    return this.belongsTo('App/Models/Bolsista')
  }
}

module.exports = BolsistaProjeto
