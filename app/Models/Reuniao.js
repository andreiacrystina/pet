'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Reuniao extends Model {
  static get table () {
    return 'reunioes'
  }

  tutor () {
    return this.belongsTo('App/Models/Tutor')
  }
}

module.exports = Reuniao
