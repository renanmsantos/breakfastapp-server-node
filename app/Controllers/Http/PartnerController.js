'use strict'

const User = use('App/Models/User')
const Partner = use('App/Models/Partner')

class PartnerController {
  async store ({ request }) {
    const user = request.only(['email', 'password', 'user_type'])
    const partner = request.only([
      'name',
      'cnpj',
      'phone',
      'delivery_rate',
      'instagram_link',
      'facebook_link',
      'youtube_link'
    ])
    const userSaved = await User.create(user)
    partner.user_id = userSaved.id
    return Partner.create(partner)
  }
  async index () {
    const partners = await Partner.all()
    return partners
  }
}

module.exports = PartnerController
