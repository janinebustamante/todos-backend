const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserController.createUser(username, password);
        res.json(user);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})

module.exports = router;