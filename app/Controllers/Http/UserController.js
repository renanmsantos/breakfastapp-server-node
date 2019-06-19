'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    return null
  }

  async store({request}){
    const data = request.only(['email', 'password'])
    const user = await User.create(data)

    return user
  }

  async destroy () {}
}

module.exports = UserController
