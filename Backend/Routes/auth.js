const router = require("express").Router();
const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//Register 

router.post("/register",async(req,res)=>{
    const newUser = new User({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
try {

    newUser.password = await bcrypt.hash(newUser.password, 10);
   
  const u =   await newUser.save();
  console.log(u);
   res.status(201).json(u);
  
  
} catch (error) {
    res.status(500).json(error);   
}
    
})

!

router.post("/login",async(req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email});
        console.log(user);
        if(!user){
           return res.status(404).json({
                success: false,
                message:"user not found "
            })
        }

        const ismatch = await bcrypt.compare(req.body.password,user.password);
        if(!ismatch){
            return res.status(404).json({
                success: false,
                message:" invalid credentials "
            })
        }
         const author = {
             id : user._id,
             isAdmin: user.isAdmin,
         }   

         const accesstoken = jwt.sign(author,process.env.SECRET_KEY,{expiresIn:"3d"});
        

        const {password, ...other} = user._doc;
        res.status(200).json({
            success:true,
           other: {...other,accesstoken}
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Internal server error"
        })
    }

        

})

module.exports = router