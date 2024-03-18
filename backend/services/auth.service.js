const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authService = {
    login: async (req,res) => {
        try {
            const {username,password} = req.body;
            const user = await User.findOne({username, password});
            if(!user){
                return res.status(401).json({message : 'Invalid credentials'})
            }
            const token = jwt.sign({userId: user._id, role:user.role}, 'secret');
            res.json({token});
        } catch (error) {
            console.error(error);
            res.status(500).json({message:'Internal server error'})
        }
    }
}
module.exports = authService;