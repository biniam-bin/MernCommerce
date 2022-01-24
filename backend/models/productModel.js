const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Please Enter product name"]
    },
    description: {
        type:String,
        required: [true, "Please Enter product description"]
    },
    price: {
        type:Number,
        required: [true, "Price is required"],
        maxLength: [8, "price can not exceed 8 characters"]
    },
    rating: {
        type:number,
        default: 0
    },
    images: {
        public_id: {
            type:String,
            required:true
        },
        
    }
})