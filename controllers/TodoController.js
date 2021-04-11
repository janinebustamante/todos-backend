const Todo = require('../models/Todo');


module.exports.createTodo = async (userId, text) => {
    
    if (!userId) {
        throw new Error('User ID is missing.')
    }

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


module.exports.listTodos = async (userId) => {

    if (!userId) {
        throw new Error('User ID is missing.')
    }

    const todos = await Todo.find({ userId });
    return todos;
}


module.exports.editTodo = async (userId, todoId, params) => {

    const todo = await Todo.findOne({ _id: todoId });

    if (!todo) {
        throw new Error('Todo not found.')
    }

    if (userId !== todo.userId){
        throw new Error('Todo not found.')
    }

    if (params.text) {
        todo.text = params.text
    }

    if (params.isComplete !== undefined) {
        todo.isComplete = params.isComplete
    }

    const updatedTodo = await todo.save();
    return updatedTodo;
}


module.exports.deleteTodo = async (userId, todoId) => {
    const todo = await Todo.findOne({ _id: todoId })

    if (!todo) {
        throw new Error('Todo not found.')
    }

    if (todo.userId !== userId) {
        throw new Error('Todo not found.')
    }

    await todo.delete();
}