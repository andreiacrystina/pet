'use strict'

const Antl = use('Antl')

class StoreReuniao {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      tutor_id: 'required|number',
      data: 'required|date',
      hora: 'required',
      descricao: 'required',
      bolsista_ata: 'required'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = StoreReuniao
