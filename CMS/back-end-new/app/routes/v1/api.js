const express = require('express')
const router = new express.Router()
const articlesController = require('../../controllers/articlesControllers')

router.get('/articles', articlesController.index)

module.exports = router