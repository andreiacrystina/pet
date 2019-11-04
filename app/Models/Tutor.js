'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tutor extends Model {
  static get table () {
    return 'tutores'
  }
}

module.exports = Tutor
