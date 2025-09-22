import mongoose from "mongoose";
import bcrypt from "bcrypt";
import crypto from "crypto";

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
        minlength: 3,
        maxlength: 30,
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: 8,
        maxlength: 32,
        select: false, // never return password in queries
    },

    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },

    avatar: {
        type: String,
        default: "",
    },

    // 🔑 Email verification
    isVerified: {
        type: Boolean,
        default: false,
    },

    otp: String, // hashed OTP

    otpExpire: Date,

    // 🔑 For refresh tokens
    refreshToken: String,

    // 🔑 For password reset (optional, if you want separate from OTP)
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, { 
    timestamps: true 
});

// 🔑 Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🔑 Compare password during login
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// 🔑 Generate OTP (6-digit)
userSchema.methods.generateOTP = function () {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Hash OTP before saving
    this.otp = crypto.createHash("sha256").update(otp).digest("hex");
    this.otpExpire = Date.now() + 10 * 60 * 1000; // 10 min expiry

    return otp; // return plain OTP (to send via email)
};

// 🔑 Verify OTP
userSchema.methods.verifyOTP = function (enteredOtp) {
    const hashedOtp = crypto.createHash("sha256").update(enteredOtp).digest("hex");
    return this.otp === hashedOtp && this.otpExpire > Date.now();
};

const User = mongoose.model("User", userSchema);

export default User;
