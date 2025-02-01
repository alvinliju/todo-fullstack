const mongoose = require("mongoose")


const resetSchema = new Schema({
    userId:{
        type:String,
        required: true,
        ref:"User"
    },
    token:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        expires: 3600
    }
})

module.exports = mongoose.model("token", tokenSchema)