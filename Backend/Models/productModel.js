const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true


    },
    desc: {
        type: String,
        required: true,

    },

    img: {
        type: String,
        required: true
    }
    ,
    categories: {
        type: Array,


    },
    size: {
        type: Array
    },
    color: {
        type: Array
    },

    brand: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 4
    },
    reviews: [{
        review:{
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        },

        comment: {
            type: String
        }
        ,
        CreatedAt: {
            type: Date,
            default: Date.now()
        }
    }
    }],
    instock: {
        type: Number,
        default: 1
    }


}, { timestamps: true })


module.exports = mongoose.model("Products", productSchema);
