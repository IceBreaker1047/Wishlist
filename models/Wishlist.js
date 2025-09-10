import mongoose from "mongoose";

const Wishlist = new mongoose.Schema({
    itemName: {type: String, required: true},
    notes: {type: String},
    price: {type: Number, required: true},
    url: {type: String},
    purchased: {type: String, required:true}
}, {timestamps:true})

export default mongoose?.models.Wishlist || mongoose.model("Wishlist", Wishlist)