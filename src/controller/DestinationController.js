const Destinations = require("../model/Destination.js");
require("dotenv").config();

/*
* @route: GET '/destination/'
* This methods is used for get all destination
*/
exports.getAllDestination = async (req, res, next) => {
    await Destinations.find()
    .then((destination) => res.status(200).json(destination))
    .catch((error) => next(error));
};

/*
* @params: [':id']
* @route: GET '/destination/65b2358fd8d533e3b5be2447'
* This methods is used for get by id destination
*/
exports.getDestinationsById = async (req, res) => {
    await Destinations.findById()
    .then((destination) => res.status(200).json(destination))
    .catch((err) => res.status(500).json({ message: err.message }));
};

/*
* @body: {title, description, coordinate}
* @route: POST '/destination/'
* This methods is used for create destination
*/
exports.createDestination = async (req, res) => {
    await Destinations.create({...req.body})
    .then((destination) => res.status(201).json(destination))
    .catch((err) => res.status(500).json({ message: err.message }));
}

/*
* @params: [':id']
* @body: {title, description, coordinate}
* @route: PUT '/user/65b2358fd8d533e3b5be2447'
* This methods is used for update destination
*/
exports.updateDestination = async (req, res) => {
    await Destinations.findByIdAndUpdate(req.params.id, {...req.body})
    .then((destination) => res.status(200).json(destination))
    .catch((err) => res.status(500).json({ message: err.message }));
};

/*
* @params: [':id']
* @route: DELETE '/user/65b235d0d8d533e3b5be244a'
* This methods is used for delete destination
*/
exports.deleteDestination = async (req, res) => {
    await Destinations.findByIdAndDelete(req.params.id)
    .then(() => res.status(201).json({message: "Destination supprimé avec succés"}))
    .catch((err) => res.status(500).json({message: err.message}));
};