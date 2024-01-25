const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/dataBase");
const userRoutes = require("./routes/UserRoutes");
const destinationRoutes = require("./routes/DestinationRoutes");
require("dotenv").config();

connectDatabase();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Ca marche" });
});

app.use("/user", userRoutes);
app.use("/destination", destinationRoutes);

app.listen(process.env.PORT, () => {
    console.log("L'application tourne sur le port" + process.env.PORT);
})
