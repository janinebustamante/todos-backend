const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

router.post('/', async (req, res) => {
    const { text } = req.body;
    res.send(`Hello ${text}`)
})




module.exports = router;