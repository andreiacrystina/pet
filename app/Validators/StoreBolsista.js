'use strict'

const Antl = use('Antl')

class StoreBolsista {
  get validateAll () {
    return true
  }

  get rules () {
    const bolsistaId = this.ctx.params.id || 0

    return {
      tutor_id: 'required|number',
      cpf: `required|unique:bolsistas,cpf,id,${bolsistaId}`,
      nome: 'required',
      telefone: 'required',
      email: `required|email|unique:bolsistas,email,id,${bolsistaId}`,
      data_inicio: 'required|date',
      data_fim: 'date',
      curso: 'required',
      semestre: 'required|number',
      data_nascimento: 'required|date'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = StoreBolsista
