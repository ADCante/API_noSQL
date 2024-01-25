const User = require("../model/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/*
* @route: GET '/user/'
* This methods is used for get all users
*/
exports.getAllUsers = async (req, res, next) => {
  await User.find()
    .then((users) => res.status(200).json(users))
    .catch((error) => next(error));
};

/*
* @params: [:id]
* @route: GET '/user/65b10fc5697be28c5ed1e177'
* 
*/
exports.getUserById = async (req, res, next) => {
  await User.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(500).json({ message: err.message }));
};

/*
* @body: {name, email, password}
* @route: POST '/user/'
*/
exports.createUser = async (req, res, next) => {
  await User.create({...req.body})
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(500).json({ message: err.message }));
};

/*
* @params: [':id']
* @body: {name, email, password}
* @route: PUT '/user/65b10fc5697be28c5ed1e177'
*/
exports.updateUser = async (req, res, next) => {
    await User.findByIdAndUpdate(req.params.id, {...req.body})
        .then(user => res.status(200).json(user))
        .catch(err => res.status(500).json({ message: err.message }))
}

/*
* @params: [':id']
* @route: DELETE '/user/65b10fc5697be28c5ed1e177'
*/
exports.deleteUser = async (req, res, next) => {
  await User.findByIdAndDelete(req.params.id)
    .then(() => res.status(201).json({ message: "Utilisateur supprimé avec succès" }))
    .catch((err) => res.status(500).json({ message: err.message }));
};

/*
* @body [email, password]
* @route: POST '/user/login'
*/
exports.login = async (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt
        .compare(req.body.password, user.password)
        .then(() =>
          res
            .status(200)
            .json({
              token: jwt.sign(
                { user: user.username },
                process.env.JWT_KEY_TOKEN
              ),
            })
        );
    })
    .catch((err) => res.status(500).json({ message: "Mot de passe invalide" }))
    .catch((err) => res.status(500).json({ message: "Erreur" }));
};