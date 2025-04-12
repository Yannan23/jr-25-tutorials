const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String,
        index: true,
        unique: true,
        require: true
    },
    avatar: {
        type: String
    },
    userName: {
        type: String
    }
},
    { timestamps: true }
)

//before it save to Db we need to encrypt the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(userSchema.password, 8)
    }
    next();
})

//we do not want the password to return in the response,security issue
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    return userObject
}

module.exports = mongoose.model('User', userSchema)



