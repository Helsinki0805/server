const { User } = require('../models/index.js')
const { createToken } = require('../middlewares/authenticate')

class Controller {
  static login(req, res, next) {
    let inputData = {
      email: req.body.email,
      password: req.body.password
    }
    User
      .findOne({
        where: {
          email: inputData.email,
          password: inputData.password
        }
      })
      .then((data) => {
        if (!data) throw { name: 'customError', msg: 'Invalid email or password' }
        let accessToken = createToken({
          id: data.id,
          email: data.email
        })
        res.status(200).json({ accessToken })
      })
      .catch((err) => {
        next(err)
      })
  }
  static getComic(req, res, next) {

  }
  static getManga(req, res, next) {

  }
  static getGame(req, res, next) {

  }
}

module.exports = Controller