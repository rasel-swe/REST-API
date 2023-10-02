const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/user.route");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


app.use('/users', usersRouter)


app.use((req, res, next) => {
  res.status(404).json({
    message: "Url not found",
  });


});
app.use((err, req, res, next) => {
  res.status(501).json({
    message: "Something is borken",
  });
});



module.exports = app;
