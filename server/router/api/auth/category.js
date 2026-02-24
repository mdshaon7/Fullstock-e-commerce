const express = require("express")
const { authController, loginController } = require("../../../controller/authConrtoller")
const { addCategoryController } = require("../../../controller/category.controller")
const { isAuthorize } = require("../../../middleware/isAuthorize")
const { isadminormarhent } = require("../../../middleware/isadminormarhent")
const upload = require("../../../utils/upload")
const auth = express.Router()


// loclhost:8080/api/v1/api/auth/category/add-caregory
auth.post('/add-category',upload.array('img'),
    // isAuthorize, isadminormarhent('admin', 'marcent'),
    addCategoryController)


module.exports = auth