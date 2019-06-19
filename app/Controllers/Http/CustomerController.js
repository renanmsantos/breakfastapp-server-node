'use strict'

const User = use('App/Models/User')
const Customer = use('App/Models/Customer')

class CustomerController {
  async store ({ request }) {
    const customer = request.only(['name', 'lastname', 'cpf', 'cellphone'])
    const user = request.only(['email', 'password', 'user_type'])

    const customerCreated = Customer.create(customer)
    console.log(customerCreated)
    user.customer_id = customerCreated.id

    return User.create(user)
  }

  async index () {
    const customers = await Customer.query()
      .with('user')
      .fetch()

    return customers
  }
}

module.exports = CustomerController
