const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const Users = require('./users-model');

router.post('/', (req, res) => { // registers user
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    if (req.body.username && req.body.password && req.body.email) {
        Users.addUser(user)
            .then(saved => {
                res.status(200).json(saved)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    } else {
        res.status(422).json({ error: "Please Complete All Forms" })
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username }) // need to define findBy / look for other models
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(error => {
            res.status(500).json(error)
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        roles: ['user']
    }

    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;