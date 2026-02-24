const { otpGeneratorsend } = require("../helpers/otp")
const { sendEmail } = require("../helpers/sendEmail")
const { validEmailCheker } = require("../helpers/validEmailCheker ")
const userModel = require("../model/user.model")
const { jwtGenaret } = require("../utils/jwt")
const bcrypt = require('bcrypt')
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
        otp,
       


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

                let user = {
            _id: exeistinguser._id,
            name: exeistinguser.name,
            email: exeistinguser.email,
            role: exeistinguser.role,
            login: true,
          };
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

 
// exports.loginController = async (req, res) => {
//   let { email, password } = req.body;
//   let emailCheker = validEmailCheker(email);
//   if (!emailCheker) {
//     apiResponse(res, 400, "invelid email address");
//   }

//   let existingUser = await userModel.findOne({ email });
//   if (!existingUser) {
//     apiResponse(res, 404, "invelid  credential");
//   } else {
//      let user = {
//             _id: existingUser._id,
//             name: existingUser.name,
//             email: existingUser.email,
//             role: existingUser.role,
//             login: true,
//           };
//           if (existingUser.role == "admin" || existingUser.role == "marchent") {
//             req.session.cookie.maxAge = 60000 * 20;
//             req.session.user = user;
//           } else {
//             req.session.cookie.maxAge = 7 * 24 * 60 * 60 * 1000;
//             req.session.user = user;
//           }
//           // jwt genaret
//           // let  token = genaretJWTtoken(user);
//           apiResponse(res, 200, "login successfully", user);
        
//     // bcrypt.compare(password, existingUser.password, function (err, result) {
//     //   if (err) {
//     //     apiResponse(res, 500, "Somting went wrong");
//     //   } else {
//     //     if (!result) {
//     //       apiResponse(res, 401, "invelid credential ");
//     //     } else {
//     //      }
//     //   }
//     // });
//   }
// };