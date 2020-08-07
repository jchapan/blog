const { User } = require('../models')
const { UserService } = require('../Services')
const { comparePasswords, createToken } = require('../utils')

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
    create: async (req, res)=>{
        const { body } = req
       try {
        const userExists = await UserService.findOneByEmail(body.email)
        if (userExists) res.status(400).json({message: 'Email Already Registred'})
        else{
        const newUser = new User(body)
        const user = await newUser.save()
        res.status(201).json(user)
        }
       } catch (error) {
           res.status(400).json(error)
       }
    },
    signup: async (req, res)=>{
        const { body } = req
       try {
        const userExists = await UserService.findOneByEmail(body.email)
        if (userExists) res.status(400).json({message: 'Email Already Registred'})
        else{
        const newUser = new User(body)
        const user = await newUser.save()
        user.password = undefined
        res.status(201).json({message: 'Successfully Created'})
        }
       } catch (error) {
           res.status(400).json(error)
       }
    },
    login: async (req, res)=>{
        const { email, password } = req.body
        try {
           const user = await UserService.findOneByEmail(email)
           if (!user) res.status(400).json({message: 'Email not valid'})
           const isValid = comparePasswords(password, user.password) 
           if(!isValid) res.status(400).json({message: 'Invalid Password'})
           const token = createToken(user)
           if(!token) res.status(500).json({message: 'Error creating token'})
           res.status(200).json({message: 'successfull login', token})
        } catch (error) {
            res.status(400).json(error)
        }
    },
    edit: (req, res)=>{
        const { body } = req
        User.findByIdAndUpdate(req.params.id, body, { new: true})
        .then((resDB)=> res.status(201).json(resDB))
        .catch((err)=> res.status(400).json(err))
    },
    delete: (req, res)=>{
        User.findByIdAndDelete(req.params.id)
            .then((resDB)=> res.status(204).json(resDB))
            .catch((err)=> res.status(400).json(err))
    }
 }