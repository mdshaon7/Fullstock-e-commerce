exports.isadminormarhent= (...role)=>{
    return(req,res,next)=>{
        if(role.includes(req.session.user.role)){
next()
}else{
     res.send({
            success: false,
            statusCode: 401,
            message: "acces denid" 
        })
} 

}
}