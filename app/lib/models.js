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
    }
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
    name: { type: String, required: true, min: 3 },
    amount: { type: Number, required: true },
    event: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

transactionSchema.statics.calculateTotalAmount = async function () {
    const result = await this.aggregate([
        {
            $group: {
                _id: null,
                totalAmount: { $sum: '$amount' }
            }
        }
    ])

    if (result.length > 0) {
        return result[0].totalAmount;
    } else {
        return 0
    }
}
export const Transaction = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema),
    User = mongoose.models.User || mongoose.model("User", userSchema),
    Product = mongoose.models.Product || mongoose.model("Product", productSchema)