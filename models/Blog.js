const mongoose = require('mongoose')

const  { Schema } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},
{    
    timestamps: true,
    versionKey: false
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog