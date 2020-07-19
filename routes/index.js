const express = require('express');
const ctrl_login = require("../controller/login");
const ctrl_signup = require("../controller/signup");


const router = express.Router();

router
    .route("/login")
    .post(ctrl_login.loginUser);


router
    .route("/register")
    .post(ctrl_signup.registerUser);


module.exports = router;