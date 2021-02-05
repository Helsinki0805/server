const { User } = require('../models/index.js')
const { createToken } = require('../middlewares/authenticate')
const { comparePassword } = require('../helpers/bcrypt.js')
const axios = require('axios')
const { OAuth2Client } = require('google-auth-library');

class Controller {
  static login(req, res, next) {
    const { email, password } = req.body
    console.log(email, password);
    let inputData = {
      email: req.body.email,
      password: req.body.password
    }
    User
      .findOne({
        where: {
          email: inputData.email
        }
      })
      .then((data) => {
        if (!data) throw { name: 'customError', msg: 'Invalid email or password' }
        let comparePass = comparePassword(inputData.password, data.password)
        if (!comparePass) throw { name: 'customError', msg: 'Invalid email or password' }
        let accessToken = createToken({
          id: data.id,
          email: data.email
        })
        res.status(200).json({ accessToken })
      })
      .catch((err) => {
        console.log(err);
        next(err)
      })
  }
  static googleLogin(req, res, next) {
    const client = new OAuth2Client(process.env.CLIENT_ID);
    const googleToken = req.body.googleToken;
    let email = ''
    const password = process.env.PASSWORD_GOOGLE_ACCOUNT

    client.verifyIdToken({
      idToken: googleToken,
      audience: process.env.CLIENT_ID
    })
      .then(ticket => {
        const payload = ticket.getPayload()
        email = payload.email

        return User.findOne({
          where: {
            email
          }
        })
      })
      .then(data => {
        if (data) {
          let accessToken = createToken({
            id: data.id,
            email: data.email
          })
          res.status(200).json({ accessToken })
        } else {
          return User.create({ email, password })
        }
      })
      .then(user => {
        let accessToken = createToken({
          id: user.id,
          email: user.email
        })
        res.status(201).json({ accessToken })
      })
      .catch(err => {
        next(err)
      })
  }
  static getComic(req, res, next) {
    const { title } = req.query
    axios.get(`https://superheroapi.com/api/${process.env.SUPERHERO_API}/search/${title}`)
      .then(data => {
        res.status(200).json(data.data.results)
      })
      .catch(err => {
        next(err)
      })
  }

  static getManga(req, res, next) {
    const { title } = req.query
    axios.get(`https://mangamint.kaedenoki.net/api/search/${title}`)
      .then(data => {
        res.status(200).json(data.data)
      })
      .catch(err => {
        next(err)
      })
  }

  static getGame(req, res, next) {
    const { title } = req.query
    axios.get(`https://www.cheapshark.com/api/1.0/games?title=${title}&limit=60`)
      .then(data => {
        res.status(200).json(data.data)
      })
      .catch(err => {
        next(err)
      })
  }

  static register(req, res, next) {
    let inputData = {
      email: req.body.email,
      password: req.body.password
    }
    User
      .create(inputData)
      .then((data) => {
        res.status(201).json(data)
      })
      .catch((err) => {
        next(err)
      })
  }
}

module.exports = Controller