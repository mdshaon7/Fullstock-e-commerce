const express = require("express")
const auth = require("./auth")
const api = express.Router()
const category = require('./auth/category')

// loclhost:8080/api/v1/api/auth
api.use('/auth', auth)
api.use('/category', category)

module.exports = api