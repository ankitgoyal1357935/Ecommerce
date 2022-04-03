const router = require('express').Router();
const Order = require("../Models/orderModel");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");





router.post("/", verifyToken, async (req, res) => {


    const newOrder = new Order(req.body);
    console.log(newOrder);
    try {


        const Order = await newOrder.save();

        res.status(200).json(Order)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id, {

            $set: req.body
        },
            { new: true }
        );

        console.log(updateOrder);
        res.status(200).json(updateOrder);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("item has been deleted...!")
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/find/:userId", verifyTokenAndAuth, async (req, res) => {

    try {
        const Order = await Order.findOne({ userId: req.params.userId });

        res.status(200).json(Order)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const Order = await Order.find();
        res.status(200).json(Order);

    } catch (err) {
        res.status(500).json(err);
    }
})



router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().date.setMonth(lastMonth.getMonth() - 1));
    console.log(lastMonth - 1);
    try {
        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth }
                }
            },
            {
                $project: {
                    _id: 0,
                    month: {
                        $month: "$createdAt"},
                    sales:"$amount"

                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },


                }
            }
        ]);

        res.status(200).json(income);
    }
        catch (err) {
            console.log(err);
        }
        
    });




module.exports = router;