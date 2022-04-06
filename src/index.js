const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/index");

app.use(cors({ preflightContinue: true, optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

mongoose.connect(
  "mongodb://localhost:27017/notifications",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) return console.log(err);

    app.listen(3000, () => {
      console.log("Сервер ожидает подключения...");
    });
  }
);
