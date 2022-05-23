const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController');

router.get('/', orderController.index);
//[post] order/
router.post('/purchase', orderController.purchase);

module.exports = router;