require("dotenv").config();
const stripe = require('stripe')(process.env.SP_SECRET_KEY);


exports.processPayment = async(req, res)=>{
    try{

        const myPayment = await stripe.paymentIntents.create({
            
            
            amount:req.body.amount,
            currency:"inr",
            metadata:{
                company:"Shoppkart",
                
            },
        });
        
        
        res.status(200).json({success:true,client_secret:myPayment.client_secret});
    }catch(err) {
        res.status(500).json({success:false,err})
    }
}


exports.sendStripeApiKey =  async(req, res) => {
    try{
        
        res.status(200).json({stripeApiKey:process.env.SP_API_KEY});
    }
    catch(err) {
        res.status(500).json({success:false,err})
    }
}