const express = require("express")
const auth = require("./auth")
const api = express.Router()


// loclhost:8080/api/v1/api/auth
api.use('/auth', auth)


module.exports = api