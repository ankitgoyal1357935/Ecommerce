const User = require('../Models/userModel');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const updateUser = async (req, res) => {
    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }

    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {

            $set: req.body
        },
            { new: true }
        );

        console.log(updateUser);
        res.status(200).json({success: true,updateUser});
    } catch (err) {
        res.status(500).json(err);
    }
}


 const deleteUser = async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted...!")
    } catch (err) {
        res.status(500).json(err);
    }
}


 const getUserbyId = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err);
    }
}


 const getAllUser = async (req, res) => {
    const query = req.query.new
    try {
        const user = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
}

 const getStats =  async (req, res) => {
    const date = new Date();
    const lastyear = new Date(date.setFullYear(date.getFullYear()-1));
    console.log(lastyear -1);
    try {
        const data = await User.aggregate([
            {
                $match: {
                    createdAt: { $gte: lastyear }
                }
            },
            {
                $project: {
                    _id:0,
                    month: {
                        $month: "$createdAt", 
                    }
              
                }
            },
             {
                 $group: {
                     _id: "$month",
                     total: { $sum: 1 },
                    
              
                 }
             }
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = {updateUser,deleteUser,getUserbyId,getAllUser,getStats}