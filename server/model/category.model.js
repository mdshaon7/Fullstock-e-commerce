const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({
  name:{
    type:String,
    trim:true,
    required:[true, 'namae is required']
  },
  image:{
    type:String,
    
  },
  slug:{
    type: String
  },
  discount:{
    type:Number,
    
  },
  subcategory:[{
    type:mongoose.Types.ObjectId,
    ref:"category"
  }]
},{
    timestamps:true
})

module.exports = mongoose.model('category', categorySchema)