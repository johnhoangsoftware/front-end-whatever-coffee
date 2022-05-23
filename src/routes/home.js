const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');

router.get('/', homeController.index);

router.post('/login', homeController.login);

router.post('/register', homeController.register);

module.exports = router;