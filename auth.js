const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports.createAccessToken = (payload) => {
    return jwt.sign(payload, secret)
}