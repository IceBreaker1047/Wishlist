import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    savings: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);