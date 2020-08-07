const { Blog } = require('../models')

module.exports = { 
    findAll: (req, res)=>{
        Blog.find()
            .then((respDB)=> res.status(200).json(respDB))
            .catch((err)=> console.log(err))
    },
    findOne: (req, res)=>{
        const { id } = req.params
        Blog.findById(id)
            .then((respDB)=> res.status(200).json(respDB))
            .catch((err)=> console.log(err))
    },
    create: (req, res)=>{
        const { body } = req
        const newBlog = new Blog(body)
        const blog = newBlog.save()
        res.status(201).json(blog)
    },
    delete: (req, res)=>{
        Blog.findByIdAndDelete(req.params.id)
            .then((resDB)=> res.status(204).json(resDB))
            .catch((err)=> res.status(400).json(err))
    }
}