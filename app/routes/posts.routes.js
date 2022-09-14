const controller = require("../controllers/posts.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/api/post",
    [authJwt.verifyToken],
    controller.CreatePost
  );

  app.post(
    "/api/updatePost",
    [authJwt.verifyToken],
    controller.UpdatePost
  );

  app.get(
    "/api/post",
    controller.PostList
  );

  app.get(
    "/api/post/:id",
    controller.PostById
  );

};