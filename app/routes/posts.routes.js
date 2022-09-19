const controller = require("../controllers/posts.controller");
const { authJwt } = require("../middlewares");
var express = require('express');
var router = express.Router();
var app = express();
var server = require('http').createServer(app);
const io = require('socket.io')(server,{
  cors:true,
  origin:['*']
})
server.listen(8081)

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

  app.get(
    "/api/deletePost/:id",
    [authJwt.verifyToken],
    controller.DeletePost
  );

};