const express = require("express");
const upload = require("../middlewares/upload");
const userController = require("../controllers/user.controller")
const authAdmin = require("../middlewares/authAdmin");
const authStaff = require("../middlewares/authStaff");
const {verifyToken} = require("../middlewares/auth");
const router = express.Router();
//Admin và nhân viên
router.post('/create', userController.register);
router.get('/get-all-staff', verifyToken, userController.getAllUser);
router.get('/search-staff',verifyToken, userController.searchStaff);
router.post('/delete-user/:userId', verifyToken,  userController.deleteUser)

module.exports = router;
