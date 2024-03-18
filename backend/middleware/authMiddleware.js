const jwt = require('jsonwebtoken');
const authMiddleware = (req,res,next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({message: 'Unauthorized: Missing token'});
    }
    jwt.verify(token, "secret", (err,decoded) => {
        if(err){
            return res.status(401).json({message: "Unauthorized: Invalid token"})
        }
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        next();
    })
    module.exports = authMiddleware;
}