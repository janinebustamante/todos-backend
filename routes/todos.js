const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');
const auth = require('../auth');

router.post('/', auth.verify, async (req, res) => {
    const { text } = req.body;
    const token = req.headers.authorization;
    const payload = auth.decode(token);
    const userId = payload.id;

    try {
        const todo = await TodoController.createTodo(userId, text)
        res.json(todo);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})


router.get('/', auth.verify, async (req, res) => {
    const token = req.headers.authorization;
    const payload = auth.decode(token);
    const userId = payload.id;

    try {
        const todos = await TodoController.listTodos(userId)
        res.json(todos);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})


router.put('/:todoId', auth.verify, async (req, res) => {    
    const todoId = req.params.todoId

    const token = req.headers.authorization;
    const payload = auth.decode(token);
    const userId = payload.id;
    
    try {
        const todo = await TodoController.editTodo(userId, todoId, req.body);
        res.json(todo);
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})


router.delete('/:todoId', auth.verify, async (req, res) => {
    const todoId = req.params.todoId;

    const token = req.headers.authorization;
    const payload = auth.decode(token);
    const userId = payload.id;

    try {
        await TodoController.deleteTodo(userId, todoId)
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

module.exports = router;