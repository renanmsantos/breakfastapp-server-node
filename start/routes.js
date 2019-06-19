'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** OPEN ROUTES */
Route.group(() => {
  Route.post('/users', 'UserController.store')
  Route.post('/sessions', 'SessionController.store')
}).prefix('api/v1')

/** USERS */
Route.group(() => {
  Route.get('/users', 'UserController.index')
})
  .prefix('api/v1')
  .middleware('auth')
