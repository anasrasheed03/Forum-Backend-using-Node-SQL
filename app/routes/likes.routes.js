const controller = require("../controllers/likes.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/api/like",
    controller.SaveLike
  );


  app.get(
    "/api/removeLike/:id",
    controller.UnLike
  );

  app.get(
    "/api/likes/:postId",
    controller.LikesByPostId
  );

};