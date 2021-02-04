const express = require('express')
const router = express.Router()
const { authenticate } = require('../middlewares/authenticate')

router.post('/login', controller.login)
router.use(authenticate)

router.get('/manga', controller.getManga)
router.get('/comic', controller.getComic)
router.get('/game', controller.getGame)

module.exports = router
