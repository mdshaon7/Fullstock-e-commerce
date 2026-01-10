const express = require("express")
const api = require("./api")
const router = express.Router()


// loclhost:8080/api/v1/api
router.use('/api', api)


module.exports = router