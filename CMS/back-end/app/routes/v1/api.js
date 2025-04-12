const express = require('express');
const router = new express.Router();
const articlesController = require('../../controllers/aritclesController')

//get all
router.get('/articles', articlesController.index);

//get one
router.get('/articles/:id', articlesController.show)

//update one
router.put('/articles/:id', articlesController.update)

//delete one
router.delete('/articles/:id', articlesController.destroy)

//create one
router.post('/articles', articlesController.store)

// router.post('/register', registerController.register)
module.exports = router;