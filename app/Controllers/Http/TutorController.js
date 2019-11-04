'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Tutor = use('App/Models/Tutor')

/**
 * Resourceful controller for interacting with tutors
 */
class TutorController {
  /**
   * Show a list of all tutors.
   * GET tutors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const tutores = await Tutor.all()

    return tutores
  }

  /**
   * Create/save a new tutor.
   * POST tutors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'cpf', 'nome', 'telefone', 'email', 'data_inicio', 'data_fim', 'formacao', 'data_nascimento'
    ])

    const tutor = await Tutor.create(data)

    return tutor
  }

  /**
   * Display a single tutor.
   * GET tutors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const { id } = params
      const tutor = await Tutor.findOrFail(id)

      return tutor
    } catch (error) {
      return response.status(404).send({ error: { message: 'Tutor não cadastrado.' } })
    }
  }

  /**
   * Update tutor details.
   * PUT or PATCH tutors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const { id } = params
      const tutor = await Tutor.findOrFail(id)

      const data = request.only([
        'cpf', 'nome', 'telefone', 'email', 'data_inicio', 'data_fim', 'formacao', 'data_nascimento'
      ])

      tutor.merge(data)
      tutor.save()

      return tutor
    } catch (error) {
      return response.status(404).send({ error: { message: 'Tutor não cadastrado.' } })
    }
  }

  /**
   * Delete a tutor with id.
   * DELETE tutors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params
      const tutor = await Tutor.findOrFail(id)

      tutor.delete()
    } catch (error) {
      return response.status(404).send({ error: { message: 'Tutor não cadastrado.' } })
    }
  }
}

module.exports = TutorController
