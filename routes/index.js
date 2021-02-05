const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const { authenticate } = require('../middlewares/authenticate')

router.post('/register', Controller.register)
router.post('/login', Controller.login)
router.post('/googleLogin', Controller.googleLogin)
router.use(authenticate)
router.get('/manga', Controller.getManga)
router.get('/comic', Controller.getComic)
router.get('/game', Controller.getGame)

module.exports = router
