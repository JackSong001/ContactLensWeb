const mongoose = require('mongoose');

const itemlistSchema = mongoose.Schema({
    name: String,
    bc: String,
    qty: Number,
    pwr: String,
    price: Number,
    img: String,
});

const orderSchema = mongoose.Schema({
    email:String,
    date:Number,
    price: Number,
    orders : [itemlistSchema],
}, {collection: 'orders'});

module.exports = mongoose.model("Order", orderSchema)