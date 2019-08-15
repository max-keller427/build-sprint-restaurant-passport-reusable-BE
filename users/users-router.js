const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../data/dbConfig");
const secret = require("../config/secrets");

const Users = require("./users-model");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  if (req.body.username && req.body.password && req.body.email) {
    Users.addUser(user)
      .then(saved => {
        const { id, username, email } = saved;
        res.status(200).json({ id, username, email });
      })
      .catch(error => {
        res.status(500).json(error);
      });
  } else {
    res.status(422).json({ error: "Please Complete All Forms" });
  }
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Submit both username and password when logging in!" });
  }
  Users.findBy({ username })
    .first()
    .then(user => {
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `User ${user.username} logged in`,
          userId: `${user.id}`,
          token: `${token}`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.get("/", (req, res) => {
  Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
