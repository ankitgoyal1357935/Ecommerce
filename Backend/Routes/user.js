const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");
const bcrypt = require("bcryptjs");
const router = require("express").Router();
const User = require("../Models/userModel");


router.put("/:id", verifyTokenAndAuth, async (req, res) => {
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
        res.status(200).json(updateUser);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete("/:id", verifyTokenAndAuth, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted...!")
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
        const { password, ...other } = user._doc;
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const user = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
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
})

module.exports = router;

