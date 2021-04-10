const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports.createUser = async (username, password) => {
    //return Promise.resolve(`Username is ${username}, password is ${password}`);

    const user = new User({
        username: username,
        password: bcrypt.hashSync(password, 10)
    })

    const createdUser = await user.save();
    return createdUser;
}