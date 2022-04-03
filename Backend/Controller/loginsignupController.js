
const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();



exports.register  =async(req,res)=>{
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
    
} 


exports.login = async(req,res)=>{
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
        console.log(ismatch);
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

         const token = await jwt.sign(author,process.env.SECRET_KEY,{expiresIn:"3d"});
        

            res.cookie("token", token,{expires: new Date(Date.now() + 1000*60*60*24),httpOnly:true})
            
        const {password, ...other} = user._doc;

        res.status(200).json({
            success:true,
            token:token,
           user: {...other},
           
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Internal server error"
        })
    }

        

}