const controller = require("../controllers/comments.controller");
const { authJwt } = require("../middlewares");
var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(8082)

// socket io
io.on('connection', function (socket) {
  socket.on('newdata', function (data) {
      io.emit('new-data', { data: data });
  });
  socket.on('updatedata', function (data) {
    io.emit('update-data', { data: data });
  });
});

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