const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    //username and password
    const username = req.body.username;
    const password = req.body.password;

    //make UserController - pass username and password to controller function
    res.send(`Username is ${username}, password is ${password}`);

})

module.exports = router;