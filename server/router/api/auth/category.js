const express = require("express")
const { authController, loginController } = require("../../../controller/authConrtoller")
const { addCategoryController, allCategoryController, updateCategoryController } = require("../../../controller/category.controller")
const { isAuthorize } = require("../../../middleware/isAuthorize")
const { isadminormarhent } = require("../../../middleware/isadminormarhent")
const upload = require("../../../utils/upload")
const auth = express.Router()


// loclhost:8080/api/v1/api/auth/category/add-caregory
auth.post('/add-category',upload.single('img'),
    // isAuthorize, isadminormarhent('admin', 'marcent'),
    addCategoryController)
auth.get('/all-caregory',allCategoryController)
auth.patch('/update-caregory/:id',upload.single('img'), updateCategoryController )

module.exports = auth 