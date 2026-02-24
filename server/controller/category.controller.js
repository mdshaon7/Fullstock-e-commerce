const categoryModel = require("../model/category.model")

exports.addCategoryController= async(req,res,next)=>{
    try {
        res.send(req.file)
//             let{name}=req.body
//    let category= new categoryModel({
//     name
//    })
//    await category.save()
//    res.send({success:true,statusCode :201, message:"create successfull" , data: category})
    } catch (error) {
           res.send({success:false,statusCode :404, message:error.message})

    }

}