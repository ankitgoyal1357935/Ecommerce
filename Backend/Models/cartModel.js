const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({

    userId:{
        type: String,
        required: true,
        unique: true


    },
    products:[{
        productId:{
        type: mongoose.Types.ObjectId,
        ref: "Products"
        },
        quantity: {
            type: Number,
            default:1
        }
       
       
    }
]
}, {timestamps:true})


module.exports = mongoose.model("Cart", CartSchema);