import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    img: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },

}, { timestamps: true })

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    color: {
        type: String,
    },
    img: {
        type: String,
    },
    size: {
        type: String
    },
}, { timestamps: true })

const transactionSchema = new mongoose.Schema({
    username: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema)
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema)