const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "http://localhost:8000/"
};

app.use(cors());
app.use(bodyParser.json({ limit: "200mb" }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to forum application." });
});

// routes
require("./app/routes/user.routes")(app);
require("./app/routes/posts.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});