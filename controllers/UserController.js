const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../auth');

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


module.exports.login = async (username, password) => {

    if (!username || !password) {
        throw new Error('No username and/or password.');
    } 

    const user = await User.findOne({ username: username });

    if (!user) {
        throw new Error('User not found.')
    }

    const isPasswordMatched = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatched) {
        throw new Error('Password incorrect.');
    }

    const payload = getUserPayload(user);
    const accessToken = auth.createAccessToken(payload);
    return accessToken;
}