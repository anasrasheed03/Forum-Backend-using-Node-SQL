const controller = require("../controllers/comments.controller");
const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    next();
  });

  app.post(
    "/api/comment",
    [authJwt.verifyToken],
    controller.SaveComment
  );

  app.post(
    "/api/updateComment",
    [authJwt.verifyToken],
    controller.UpdateComment
  );

  app.get(
    "/api/deleteComment/:id",
    [authJwt.verifyToken],
    controller.DeleteComment
  );

  app.get(
    "/api/comments/:postId",
    controller.CommentsByPostId
  );

};