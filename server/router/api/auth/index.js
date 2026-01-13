const express = require("express")
const { authController , loginController} = require("../../../controller/authConrtoller")
const auth = express.Router()


// loclhost:8080/api/v1/api/auth/signup
auth.post('/signup',authController)

// loclhost:8080/api/v1/api/auth/signin
auth.post('/login',loginController)


// loclhost:8080/api/v1/api/auth/product
auth.post('/product',authController)


module.exports = auth