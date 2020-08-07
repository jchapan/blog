const mongoose = require('mongoose')

const  { Schema } = mongoose

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    }
},
{    
    timestamps: true,
    versionKey: false
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog