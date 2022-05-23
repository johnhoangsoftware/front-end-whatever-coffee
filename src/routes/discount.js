const express = require('express');
const router = express.Router();
const discountController = require('../app/controllers/DiscountController');

router.get('/', discountController.index);

module.exports = router;