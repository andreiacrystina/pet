'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BolsistaReuniao extends Model {
  static get table () {
    return 'bolsista_reuniao'
  }

  reuniao () {
    return this.belongsTo('App/Models/Reuniao')
  }

  bolsista () {
    return this.belongsTo('App/Models/Bolsista')
  }
}

module.exports = BolsistaReuniao
