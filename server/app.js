const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

// app
const app = express()

//db

mongoose.connect('mongodb://localhost:27017/video-streaming').then((data,err)=>{
    if(err){
        console.log('database not connected',err);
    }else{
        console.log('database connected');
    }
})


// midddleware
app.use(cors({origins:true,credentials:true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())


// routes
const userRoutes = require("./Routes/userRoute")
app.use('/',userRoutes)



// port
app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT}`);
})