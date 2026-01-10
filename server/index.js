require('dotenv').config()
const express = require('express')
const { dbConfig } = require('./config/db.config')
const router = require('./router')
const app = express()
const port = process.env.PORT
dbConfig()
app.use(express.json())



// loclhost:8080/api/v1
app.use('/api/v1', router)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
