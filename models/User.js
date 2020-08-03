const mongoose = require('mongoose')

const  { Schema } = mongoose

const userSchema = new Schema({
    is_active: {
        type: Boolean,
        default: true
    },
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User