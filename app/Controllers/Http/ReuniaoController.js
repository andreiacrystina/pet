'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Reuniao = use('App/Models/Reuniao')

/**
 * Resourceful controller for interacting with reuniaos
 */
class ReuniaoController {
  /**
   * Show a list of all reuniaos.
   * GET reuniaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const reunioes = await Reuniao.query().with('tutor').fetch()

    return reunioes
  }

  /**
   * Create/save a new reuniao.
   * POST reuniaos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'tutor_id', 'data', 'hora', 'descricao', 'bolsista_ata'
    ])

    const reuniao = await Reuniao.create(data)

    return reuniao
  }

  /**
   * Display a single reuniao.
   * GET reuniaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      const { id } = params
      const reuniao = await Reuniao.findOrFail(id)
      await reuniao.load('tutor')
      await reuniao.load('bolsistas')

      return reuniao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Reunião não cadastrada.' } })
    }
  }

  /**
   * Update reuniao details.
   * PUT or PATCH reuniaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      const { id } = params
      const reuniao = await Reuniao.findOrFail(id)
      await reuniao.load('tutor')

      const data = request.only([
        'tutor_id', 'data', 'hora', 'descricao', 'bolsista_ata'
      ])

      reuniao.merge(data)
      reuniao.save()

      return reuniao
    } catch (error) {
      return response.status(404).send({ error: { message: 'Reunião não cadastrada.' } })
    }
  }

  /**
   * Delete a reuniao with id.
   * DELETE reuniaos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const { id } = params
      const reuniao = await Reuniao.findOrFail(id)

      reuniao.delete()
    } catch (error) {
      return response.status(404).send({
        error: { message: 'Reunião não cadastrada.' }
      })
    }
  }
}

module.exports = ReuniaoController
