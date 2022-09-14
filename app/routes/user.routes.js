const controller = require("../controllers/user.controller");
const { verifySignUp } = require("../middlewares");


module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/register", 
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
  ]
  ,controller.CreateUser);

  app.post("/api/signin", controller.signin);


};
