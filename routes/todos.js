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




module.exports = router;