const jwt = require('jsonwebtoken');

exports.jwtGenaret = (exeistinguser)=>{
 return jwt.sign({exeistinguser }, process.env.AUTH_SECRET, { expiresIn: '1m' });
}