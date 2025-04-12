const User = require('../model/user')

exports.registerUser = async (req, res){
    const user = new User(req.body);
    await user.save();
    return user;
}