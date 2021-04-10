const User = require('../models/User');

const createUser = async (username, password) => {
    return Promise.resolve(`Username is ${username}, password is ${password}`);
}

module.exports = {
    createUser: createUser,
}