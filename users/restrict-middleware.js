const jwt = require('jsonwebtoken');

const secret = require('../config/secrets');

module.exports = {
    authenticate
}

function authenticate(req, res, next) {
    const token = req.headers.authorization

    if (token) {
        jwt.verify(token, secret.jwtSecret, (err, decodeToken) => {
            if (err) {
                res.status(401).json({ message: 'Invalid Credentials' });
            } else {
                /*  request.decodeToken = decodedToken; */ // may need 'decodetoken' <------ checks for roles
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'No token provided' });
    }
};