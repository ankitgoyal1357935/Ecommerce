const router = require('express').Router();
const Cart = require("../Models/cartModel");
const { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin } = require("./verifyToken");





router.post("/", verifyToken ,async (req, res) => {
         
            const product = req.body.product;
            const quantity = req.body.quantity;
                console.log(product);
                console.log("num of quantity are "+quantity);
                const user = await Cart.findOne({userId : req.user.id});

           if(!user){
            const newCart = new Cart({
                userId: req.user.id,
                products:[{productId: product}],
                quantity: quantity,
            });
            
       
            try {
        
        
                const cart = await newCart.save();
        
                res.status(200).json({sucess:true,cart})
            } catch (err) {
                res.status(500).json(err);
            }
        }else{

           const arr = user.products.filter(p=>p.productId == product._id);
                if(arr.length>0){
                    res.status(200).json({success:false, message:"already in cart"});
                }else{

                    
                    const data = {
                        productId: product,
                        quantity:quantity,
            }
            user.products = [...user.products,data]
            
            
            try {
                
                
                const cart = await user.save();
        
                res.status(200).json({success:true,cart})
            } catch (err) {
                res.status(500).json(err);
            }
        }
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

router.delete("/product/:id", verifyToken, async (req, res) => {
                  console.log(req.params.id);
    try {
        
        let cart = await Cart.findOne({userid:req.user.id});
        cart.products = (cart.products).filter(product => product.productId._id != req.params.id);
        cart.save();
       console.log(cart);
        
        res.status(200).json("item has been deleted...!")
    } catch (err) {
        res.status(500).json(err);
    }
})


router.get("/find",verifyToken,async (req, res) => {

    try {
        const cart = await Cart.findOne({userId:req.user.id}).populate("products.productId");
        res.status(200).json({success:true, cart});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
        const cart = await Cart.find();
        res.status(200).json({success:true, cart});
     
    } catch (err) {
        res.status(500).json(err);
    }
})







module.exports = router;