const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports.createAccessToken = (payload) => {
    return jwt.sign(payload, secret)
}

//middleware to identify if the request contains a valid authorization header
module.exports.verify = (req, res, next) => {
    let token = req.headers.authorization;

    if (typeof token !== 'undefined') {
        token = token.slice(7, token.length)

        return jwt.verify(token, secret, (err, data) => {
            return (err) ? res.send({ auth: 'failed' }) : next();
        })
    } else {
        return res.send({ auth: 'failed' });
    }
}

//decode function return jwt payload
module.exports.decode = (token) => {
    if (typeof token !== 'undefined') {
        token = token.slice(7, token.length)

        return jwt.verify(token, secret, (err, data) => {
            return (err) ? null : jwt.decode(token, { complete: true }).payload
        })
    }
}