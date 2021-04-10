const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    userId: {
        type: String,
        required: [true, 'User ID is required.']
    },
    text: {
        type: String,
        required: [true, 'Todo is required.']
    },
    isComplete: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Todo', todoSchema);