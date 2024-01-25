const { default:mongoose } = require("mongoose");

const Schema = require("mongoose").Schema;

const DestinationSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coordinate: {
        type: String,
        required: true,
    }
});

const Destinations = mongoose.model("/destination", DestinationSchema);

module.exports = Destinations;