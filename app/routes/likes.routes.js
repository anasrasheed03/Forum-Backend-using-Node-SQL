const controller = require("../controllers/likes.controller");
const { authJwt } = require("../middlewares");
var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

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