const router = require('express').Router();
const Cart = require("../Models/cartModel");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");





router.post("/", verifyToken, async (req, res) => {


    const newCart = new Cart(req.body);
    console.log(newCart);
    try {


        const cart = await newCart.save();

        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAuth, async (req, res) => {
  

    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id, {

            $set: req.body
        },
            { new: true }
        );

        console.log(updateCart);
        res.status(200).json(updateCart);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete("/:id", verifyTokenAndAuth, async (req, res) => {

    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("item has been deleted...!")
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/find/:userId", async (req, res) => {

    try {
        const cart = await Cart.findOne({userId:req.params.userId});

        res.status(200).json(cart)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
     
    } catch (err) {
        res.status(500).json(err);
    }
})







module.exports = router;