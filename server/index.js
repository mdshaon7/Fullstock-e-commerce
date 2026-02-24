require('dotenv').config()
const express = require('express')
const { dbConfig } = require('./config/db.config')
const router = require('./router')
const app = express()
const session = require('express-session')
const port = process.env.PORT
dbConfig()
app.use(express.static('uploads'))
app.use(express.json())

app.use(
  session({
  secret: process.env.SESSOIN_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
})

)



// loclhost:8080/api/v1
app.use('/api/v1', router)

app.get("/getsession", (req,res)=>{
  return res.send("get session")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
