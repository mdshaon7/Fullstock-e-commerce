const { default: mongoose } = require("mongoose")

exports.dbConfig = ()=>{

    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("date contct")
    }).catch(Error.message)
}