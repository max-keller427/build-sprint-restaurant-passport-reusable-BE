const router = require('express').Router();
const Users = require('./users-model');

router.post('/', (req, res) => {
    if (req.body.username && req.body.password && req.body.email) {
        Users.addUser(req.body)
            .then(ids => {
                res.status(200).json(ids)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    } else {
        res.status(422).json({ error: "Please Complete All Forms" })
    }
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

module.exports = router;