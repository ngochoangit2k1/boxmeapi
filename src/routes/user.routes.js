const express = require("express");
const upload = require("../middlewares/upload");
const authAdmin = require("../middlewares/authAdmin");
const authStaff = require("../middlewares/authStaff");
const {verifyToken} = require("../middlewares/auth");
const router = express.Router();
//Admin và nhân viên

module.exports = router;
