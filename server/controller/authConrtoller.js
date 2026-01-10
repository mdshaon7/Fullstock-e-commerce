const userModel = require("../model/user.model")

exports.authController = async (req, res) => {
    let { fullname, email, password, address, phone, role, } = req.body
    let user = new userModel({
        fullname,
        email,
        password,
        address,
        phone,
        role,

    })

    await user.save()
    res.json({ success: true, message: 'user created successfull', data: user })
}