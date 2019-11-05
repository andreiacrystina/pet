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
}

module.exports = Bolsista
