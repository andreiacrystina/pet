'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

// API REST
// json.
// Os verbos HTTP (GET, POST, PUT e DELETE)

// ORM - Object Relational mapping - Mapeamento do Objeto Relacional
// A linguagem é orientada a objeto, mas o banco de dados é relacional
// Reuniao.create(data)

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Tutores Resource.
Route.resource('tutores', 'TutorController').apiOnly().validator(new Map([
  [['tutores.store'], ['StoreTutor']],
  [['tutores.update'], ['StoreTutor']]
]))

// Bolsistas Resource.
Route.resource('bolsistas', 'BolsistaController').apiOnly().validator(new Map([
  [['bolsistas.store'], ['StoreBolsista']],
  [['bolsistas.update'], ['StoreBolsista']]
]))

// Reunioes Resource.
Route.resource('reunioes', 'ReuniaoController').apiOnly().validator(new Map([
  [['reunioes.store'], ['StoreReuniao']],
  [['reunioes.update'], ['StoreReuniao']]
]))

Route.resource('reunioes.frequencia', 'FrequenciaController').only(['store', 'update'])
