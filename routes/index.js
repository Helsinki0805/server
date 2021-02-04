const express = require('express')
const router = express.Router()

router.get('/login', controller.login)
router.get('/manga', controller.getManga)
router.get('/comic', controller.getComic)
router.get('/game', controller.getGame)

module.exports = router
