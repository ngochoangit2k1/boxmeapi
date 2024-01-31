const express = require("express");
const customerController = require("../controllers/customer.controller")
const router = express.Router();
//Admin và nhân viên
router.post('/create', customerController.createCustomer);
router.get('/', customerController.getCustomer)
router.post('/delete/:customerId', customerController.deleteCustomer);
router.patch('/update-status/:customerId', customerController.updateCustomer);

module.exports = router;
