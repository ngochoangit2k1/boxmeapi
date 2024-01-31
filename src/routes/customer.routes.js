const express = require("express");
const customerController = require("../controllers/customer.controller")
const router = express.Router();
//Admin và nhân viên
router.post('/create', customerController.createCustomer);
router.get('/', customerController.getCustomer)

module.exports = router;
