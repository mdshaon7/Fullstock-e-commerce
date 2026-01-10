const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname:{
    type:String,
    trim:true,
    required:[true, 'namae is required']
  },
  email:{
    type:String,
    required:[true, 'email is required'],
    unique:[true, 'email alreadyin use']
  },
  password:{
    type:String,
    required:[true, 'password is required']
  },
  address:{
    type:String,
  },
  phone:{
    type:String,
  },
  role:{
    type:String,
    enum:['user','admin','marcent'],
    default:'user'
  },
},{
    timestamps:true
})

module.exports = mongoose.model('User', userSchema)