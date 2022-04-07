const router = require('express').Router();
const Product = require("../Models/productModel");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");





router.post("/", verifyTokenAndAdmin, async (req, res) => {


    const newProduct = new Product(req.body);
    console.log(newProduct);
    try {


        const products = await newProduct.save();

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  

    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, {

            $set: req.body
        },
            { new: true }
        );

        console.log(updateProduct);
        res.status(200).json(updateProduct);
    } catch (err) {
        res.status(500).json(err);
    }
})


router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("product has been deleted...!")
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/find/:id", async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json({
            success:true,
            product})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", async (req, res) => {
    const querycat = req.query.cate;
    const queryNew = req.query.new;
        console.log(querycat);

   try {
        let products;
        if (queryNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5);
        } else if (querycat) {
            products = await Product.find({
                category: {
                    $in: [querycat],
                }
            });
    
        }
        else{
            products = await Product.find();
        }
        res.status(200).json({
            success:true,
            products,})
    } catch (err) {
        res.status(500).json(err);
    }

   
})







module.exports = router;