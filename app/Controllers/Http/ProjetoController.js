'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */

const Projeto = use('App/Models/Projeto')

/**
 * Resourceful controller for interacting with projetos
 */
class ProjetoController {
  /**
   * Show a list of all projetos.
   * GET projetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const projetos = await Projeto.all()

    return projetos
  }

  /**
   * Create/save a new projeto.
   * POST projetos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'nome', 'data_inicio', 'data_fim', 'resumo', 'bolsista_responsavel', 'data_aceitacao'
    ])

    const projeto = await Projeto.create(data)

    return projeto
  }

  /**
   * Display a single projeto.
   * GET projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update projeto details.
   * PUT or PATCH projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a projeto with id.
   * DELETE projetos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = ProjetoController
