'use strict'

const Antl = use('Antl')

class StoreTutor {
  get validateAll () {
    return true
  }

  get rules () {
    const tutorId = this.ctx.params.id || 0

    return {
      cpf: `required|unique:tutores,cpf,id,${tutorId}`,
      nome: 'required',
      telefone: 'required',
      email: `required|email|unique:tutores,email,id,${tutorId}`,
      data_inicio: 'required|date',
      data_fim: 'date',
      formacao: 'required',
      data_nascimento: 'required|date'
    }
  }

  get messages () {
    return Antl.list('validation')
  }
}

module.exports = StoreTutor
