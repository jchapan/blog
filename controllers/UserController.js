const { User } = require('../models')

module.exports = { 
    findAll: (req, res)=>{
        User.find()
            .then((respDB)=> res.status(200).json(respDB))
            .catch((err)=> console.log(err))
    },
    findOne: (req, res)=>{
        const { id } = req.params
        User.findById(id)
            .then((respDB)=> res.status(200).json(respDB))
            .catch((err)=> console.log(err))
    },
    create: (req, res)=>{
        const { body } = req
        const newUser = new User(body)
        newUser.save()
            .then((respDB)=> res.status(201).json(respDB))
            .catch((err)=> console.log(err))
    },
    edit: (req, res)=>{
        const { body } = req
        User.findOneAndUpdate(req.params.id, body, { new: true})
        .then((resDB)=> res.status(201).json(resDB))
        .catch((err)=> res.status(400).json(err))
    },
    delete: (req, res)=>{
        User.findOneAndDelete(req.params.id)
            .then((resDB)=> res.status(204).json(resDB))
            .catch((err)=> res.status(400).json(err))
    }
 }