const otpGenerator = require('otp-generator')

exports.otpGeneratorsend = ()=>{
  return  otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
}
