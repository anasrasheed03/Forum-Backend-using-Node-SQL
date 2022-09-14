const controller = require("../controllers/comments.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/api/comment",
    controller.SaveComment
  );

  app.post(
    "/api/updateComment",
    controller.UpdateComment
  );

  app.get(
    "/api/deleteComment/:id",
    controller.DeleteComment
  );

  app.get(
    "/api/comments/:postId",
    controller.CommentsByPostId
  );

};