const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({

    user:{
        type: String,
        unique: true,
        require: true
    },

    senha:{
        type: String,
        require: true,
        select: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Admin = mongoose.model('Admin', AdminSchema)

module.exports = Admin;