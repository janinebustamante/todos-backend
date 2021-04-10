const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

router.post('/register', async (req, res) => {
    //username and password
    const username = req.body.username;
    const password = req.body.password;

    //make UserController - pass username and password to controller function
    // res.send(`Username is ${username}, password is ${password}`);
    try {
        const message = await UserController.createUser(username, password);
        res.send(message);
    } catch (err) {
        res.status(500).json({ err: err.message });
    }
})

module.exports = router;