const User = require('../models/User');
const bcrypt = require('bcryptjs');

const getUserPayload = (user) => {
    return { id: user._id, username: user.username }
}

module.exports.createUser = async (username, password) => {
    //return Promise.resolve(`Username is ${username}, password is ${password}`);

    const foundUser =  await User.findOne({ username });

    if (foundUser) {
        throw new Error('Username already taken.')
    }

    const user = new User({
        username: username,
        password: bcrypt.hashSync(password, 10)
    })

    const createdUser = await user.save();
    const userPayload = getUserPayload(createdUser);
    return userPayload;
}