const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');
const auth = require('../auth');

router.post('/', auth.verify, async (req, res) => {
    const { text } = req.body;
    const token = req.headers.authorization;
    const payload = auth.decode(token);
    const userId = payload.id;
    res.send(`Hello ${text}, userid = ${userId}`)
})




module.exports = router;