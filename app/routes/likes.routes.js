const controller = require("../controllers/likes.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/api/like",
    [authJwt.verifyToken],
    controller.SaveLike
  );


  app.get(
    "/api/removeLike/:id",
    [authJwt.verifyToken],
    controller.UnLike
  );

  app.get(
    "/api/likes/:postId",
    controller.LikesByPostId
  );

};