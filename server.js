const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//cors handler
var corsOptions = {
  origin: "*"
};

app.use(cors({corsOptions}));
app.use(bodyParser.json({ limit: "200mb" }));

// // simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to hotel toolkit forum application." });
});

// routes
require("./app/routes/user.routes")(app);
require("./app/routes/posts.routes")(app);
require("./app/routes/comments.routes")(app);
require("./app/routes/likes.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});