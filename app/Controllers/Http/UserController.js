'use strict'

const User = use('App/Models/User')

class UserController {
  async index () {
    const users = await User.query()
      .with('addresses')
      .fetch()
    return users
  }

  async destroy () {}
}

module.exports = UserController
