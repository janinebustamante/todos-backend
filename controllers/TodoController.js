const Todo = require('../models/Todo');

module.exports.createTodo = async (userId, text) => {
    
    if (!text) {
        throw new Error('Text missing.')
    }
    
    const todo = new Todo({
        userId,
        text
    })

    const createdTodo = await todo.save();
    return createdTodo;
}