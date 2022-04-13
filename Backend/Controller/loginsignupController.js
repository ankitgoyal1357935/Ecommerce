
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
   
  const user =   await newUser.save();
  
   res.status(201).json({success:true, message:"Registration Successful",user});
  
  
} catch (error) {
    res.status(500).json({success:false,error});   
}
    
} 


exports.login = async(req,res)=>{
    try {
        console.log(req.body.email);
        const user = await User.findOne({email: req.body.email});
        console.log(user);
        if(!user){
           return res.status(404).json({
                success: false,
                message:"Invalid Credentials"
            })
        }

        const ismatch = await bcrypt.compare(req.body.password,user.password);
        console.log(ismatch);
        if(!ismatch){
            return res.status(404).json({
                success: false,
                message:" Invalid Credentials "
            })
        }
         const author = {
             id : user._id,
             isAdmin: user.isAdmin,
         }   

         const token = await jwt.sign(author,process.env.SECRET_KEY,{expiresIn:"3d"});
        const options = {expires: new Date(Date.now() + 1000*60*60*24*3),httpOnly: true,secure: false};


          
        const {password, ...other} = user._doc;

        res.status(200).cookie("token", token, options).json({
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


exports.logout =(req,res)=>{

        try{

            res.cookie("token", null, {
                expires: new Date(Date.now()),
                httpOnly: true,
              });
            
              res.status(200).json({
                success: true,
                message: "Logged Out",
                token: null,
                user: null

              });
        }
        catch(error){
            res.status(500).json({success:false, error})
        }

}


exports.account = async(req,res)=>{

    
    try{
        const user =  await User.findOne({_id : req.user.id});

        if(user){
            res.status(200).json({success:true,user:user});
        }
        else{
            res.status(500).json({success:false,message:"user not found"});
        }

    }
    catch(error){
        res.status(500).json({success:false,error});
    }
}