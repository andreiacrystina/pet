'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Bolsista = use('App/Models/Bolsista')

/**
 * Resourceful controller for interacting with bolsistas
 */
class BolsistaController {
  /**
   * Show a list of all bolsistas.
   * GET bolsistas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const bolsistas = await Bolsista.query().with('tutor').fetch()

    return bolsistas
  }

  /**
   * Create/save a new bolsista.
   * POST bolsistas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'tutor_id', 'cpf', 'nome', 'telefone', 'email', 'data_inicio', 'data_fim', 'curso', 'semestre', 'data_nascimento'
    ])

    const bolsista = await Bolsista.create(data)

    return bolsista
  }

  /**
   * Display a single bolsista.
   * GET bolsistas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const { id } = params
      const bolsista = await Bolsista.findOrFail(id)
      await bolsista.load('tutor')

      return bolsista
    } catch (error) {
      return response.status(404).send({ error: { message: 'Bolsista não cadastrado.' } })
    }
  }

  /**
   * Update bolsista details.
   * PUT or PATCH bolsistas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const { id } = params
      const bolsista = await Bolsista.findOrFail(id)
      await bolsista.load('tutor')

      const data = request.only([
        'tutor_id', 'cpf', 'nome', 'telefone', 'email', 'data_inicio', 'data_fim', 'curso', 'semestre', 'data_nascimento'
      ])

      bolsista.merge(data)
      bolsista.save()

      return bolsista
    } catch (error) {
      return response.status(404).send({ error: { message: 'Bolsista não cadastrado.' } })
    }
  }

  /**
   * Delete a bolsista with id.
   * DELETE bolsistas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params
      const bolsista = await Bolsista.findOrFail(id)

      bolsista.delete()
    } catch (error) {
      return response.status(404).send({
        error: { message: 'Bolsista não cadastrado.' }
      })
    }
  }
}

module.exports = BolsistaController
