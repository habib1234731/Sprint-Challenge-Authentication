const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({ username, password });
  user
    .save((error, user) => {
      if (error) {
        return res.status(422).json(error);
      }
      res.json({message: 'User saved'});
    })
};

module.exports = {
  createUser
};
