const express = require('express')
const user = require('./routers/user.js')
require('dotenv').config()



const cors  = require('cors')
// initialize the app
app = express();
app.use(cors())
app.use(express.json())

app.use(process.env.URL,user)

app.listen(process.env.PORT,()=>{
    console.log("Server is listening on the Port"+process.env.PORT)
})