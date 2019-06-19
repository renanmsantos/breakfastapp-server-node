'use strict'

const Address = use('App/Models/Address')

class AddressController {
  async store ({ request }) {
    const data = request.only([
      'street',
      'number',
      'district',
      'city',
      'state',
      'cep',
      'default',
      'user_id'
    ])
    const address = await Address.create(data)
    return address
  }
  async index () {
    const address = await Address.all()
    return address
  }
}

module.exports = AddressController
