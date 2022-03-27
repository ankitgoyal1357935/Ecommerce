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

    imgsc: {
        type: String,
        required: true
    }
    ,
    category: {
        type: Array,
        

    }, 

    brand:{
        type: String
    },
    price: {
        type: Number,
        required: true
    }


}, { timestamps: true })


module.exports = mongoose.model("Products", productSchema);
