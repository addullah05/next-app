import mongoose from 'mongoose';

const productModel = new mongoose.Schema ({
    name:String,
    price:String,
    company:String
});

export const  Product = mongoose.models.products || mongoose.model("db", productModel);
