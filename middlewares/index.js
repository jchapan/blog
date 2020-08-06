const jwt = require('jsonwebtoken')

module.exports = {
    verifyToken: (req, res, next)=>{
        try {
            const { authorization } = req.headers
            const token = authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.decoded = decoded
            next()
        } catch (err){
            res.status(401).json({message: 'Auth error', err})
        }
    }
}