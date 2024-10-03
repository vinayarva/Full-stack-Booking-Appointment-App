//Third-party Imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const Sequelize = require("sequelize")

//Custom Imports
const sequelize = require("./Database/database");
const router = require("./Routes/route");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(router);

sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is online at http://localhost:4000/ ");
    });
  })
  .catch((err) => console.log(err));
