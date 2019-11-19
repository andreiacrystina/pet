'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Reuniao = use('App/Models/Reuniao')
const Bolsista = use('App/Models/Bolsista')

class FrequenciaController {
  /**
   * Create/save a new bolsista.
   * POST bolsistas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request, response }) {
    try {
      const { reunioes_id } = params
      const { bolsista_id } = request.only(['bolsista_id'])

      const reuniao = await Reuniao.findOrFail(reunioes_id)
      const bolsista = await Bolsista.findOrFail(bolsista_id)

      const frequencia = await reuniao.bolsistas().attach([bolsista.id])

      return frequencia
    } catch (error) {
      const modelError = error.message.includes('Reuniao') ? 'Reunião não cadastrada.' : 'Bolsista não cadastrado'

      return response.status(404).send({ error: { message: modelError } })
    }
  }
}

module.exports = FrequenciaController
