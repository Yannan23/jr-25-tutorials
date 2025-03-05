const express = require('express');
const router = new express.Router();
const articlesController = require('../../controllers/aritclesController')

router.get('/', articlesController.index);

module.exports = router;