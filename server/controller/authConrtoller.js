const { otpGeneratorsend } = require("../helpers/otp")
const { sendEmail } = require("../helpers/sendEmail")
const userModel = require("../model/user.model")
const { jwtGenaret } = require("../utils/jwt")
// const bcrypt = require('bcrypt')
exports.authController = async (req, res) => {
    let otp = otpGeneratorsend()
    let { fullname, email, password, address, phone, role, } = req.body
    let user = new userModel({
        fullname,
        email,
        password,
        address,
        phone,
        role,
        otp


    })

    await user.save()
    sendEmail(fullname, email, otp)
    res.json({ success: true, message: 'user created successfull', data: user })
}

exports.loginController = async (req, res) => {
    let { email, password, } = req.body
    let exeistinguser = await userModel.findOne({ email })
    if (exeistinguser) {
        if (exeistinguser.password == password) {
          let jwtToken =  jwtGenaret(exeistinguser)


            res.json({ success: true, statusCode: 200, message: 'login successfulll',jwtToken })

        } else {
            res.json({ success: false, message: 'invalid credinsial' })
        }
    } else (
        res.json({ success: false, message: 'invalid credinsial' })


        //     bcrypt.compare(password, exeistinguser.password, function(err, result) {
        //     if(err){
        //        res.json({ success: false, message: 'someting went wrong' }) 
        //     }else{
        //         if(!result){
        //                   res.json({ success: false, message: 'someting went wrong' })  
        //         }else{
        //              res.json({ success: true, statusCode:200, message: 'login successfulll', data: result })  
        //         }
        //     }
        // })
    )

}