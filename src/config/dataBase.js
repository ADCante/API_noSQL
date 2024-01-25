const mongoose = require("mongoose");
require("dotenv").config()
console.log(process.env.URL_DATABASE)
const urlConnection = process.env.URL_DATABASE;

const connectDatabase = () => {
    mongoose.connect(urlConnection).then(() => {
        console.log("connected to dataBase")
    }).catch(error => {
        console.log(error)
    });
}

module.exports = connectDatabase;