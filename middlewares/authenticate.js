const jwt = require('jsonwebtoken')

function createToken(payload) {
  return jwt.sign(payload, process.env.SECRET)
}

const authenticate = function (req, res, next) {
  try {
    const token = req.headers.token
    const decoded = jwt.verify(token, process.env.SECRET)
    req.decoded = decoded
    next()
  }
  catch (err) {
    next({ name: 'custom401', msg: 'Invalid token' })
  }
}


module.exports = { authenticate, createToken }