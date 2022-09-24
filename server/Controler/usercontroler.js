const User = require("../Models/users.js")
const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
module.exports={

    doSignup:async(req,res,next)=>{
     
        try{
            
            const hashPswrd = await bcrypt.hash(req.body.password,10)
            await User.create({
                name:req.body.name,
                email:req.body.email,
                password:hashPswrd})
            return res.status(200).send("user have been created")

        }catch(err){    
            next(err)
            console.log(err);

        }
    },

    doLogin:async(req,res,next)=>{
    
        try{
            const user = await User.findOne({email:req.body.email})
            if(!user) return res.status(403).send('user not found')
            const isPasswordCorrect = bcrypt.compare(req.body.password,user.password)
            if(!isPasswordCorrect) return res.status(400).send('wrong credentials')
            const token = jwt.sign({id:user._id},process.env.SECRET_TOKEN)
            const {password,...other} = user._doc


            res.cookie("acces_token",token,{
                httpOnly:true
            }).status(200).json(other)
        }catch(err){
            next(err)
            console.log(err);
        }
    }
}