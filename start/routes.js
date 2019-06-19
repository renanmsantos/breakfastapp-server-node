'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/** OPEN ROUTES */
Route.group(() => {
  Route.post('/customers', 'CustomerController.store')
  Route.post('/partners', 'PartnerController.store')
  Route.post('/sessions', 'SessionController.store')
}).prefix('api/v1')

/** USERS */
Route.group(() => {
  Route.get('/users', 'UserController.index')
  Route.get('/customers', 'CustomerController.index')
  Route.get('/partners', 'PartnerController.index')
})
  .prefix('api/v1')
  .middleware('auth')

/** ADDRESSES */
Route.group(() => {
  Route.get('/addresses', 'AddressController.index')
  Route.post('/addresses', 'AddressController.store')
})
  .prefix('api/v1')
  .middleware('auth')
