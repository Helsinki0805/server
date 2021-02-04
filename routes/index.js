const express = require('express')
const router = express.Router()
const Controller = require('../controllers/controller')
const { authenticate } = require('../middlewares/authenticate')

router.post('/login', Controller.login)
router.use(authenticate)
router.get('/manga', controller.getManga)
router.get('/comic', controller.getComic)
router.get('/game', controller.getGame)

module.exports = router
