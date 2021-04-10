const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required.']
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    }
})

module.exports = mongoose.model('User', userSchema);