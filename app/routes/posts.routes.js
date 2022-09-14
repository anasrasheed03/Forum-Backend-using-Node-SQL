const controller = require("../controllers/posts.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/api/post",
    controller.CreatePost
  );

  app.post(
    "/api/updatePost",
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