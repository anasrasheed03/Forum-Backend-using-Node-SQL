const Posts = require("../models/posts.model");


exports.CreatePost = async(req, res) => {
  try{  
  let post = new Posts(req.body.title,req.body.body,req.body.createdBy);
    post = await post.save();
    console.log(post)
    res.send({ message: "Post Created successfully!" });
  }catch(e){
    console.log(e);
    res.status(500).json({
      message:"something went wrong!"
    });
  }
  };

  exports.UpdatePost = async(req, res) => {
    try{  
    let post = await Posts.edit(req.body.title, req.body.body, req.body.id);
      res.send({ message: "Post updated successfully!" });
    }catch(e){
      console.log(e);
      res.status(500).json({
        message:"something went wrong!"
      });
    }
    };

  exports.PostList = async (req, res) => {
    try{
      const [posts,_] = await Posts.getAllPosts();
      res.status(200).json({posts});
    }catch(e){
      console.log(e);
      res.status(500).json({
        message:"something went wrong!"
      });
    }
  };

  exports.PostById =async (req, res) => {
   try{
    let [post,_] = await Posts.getPostById(req.params.id);
    res.status(200).json({post:post[0]})
   }catch(e){
    console.log(e);
    res.status(500).json({
      message:"something went wrong!"
    });
   }
  };

  exports.DeletePost = async (req, res) => {
    try{
      const post= await Posts.deletePost(req.params.id);
      res.send({ message: "Post deleted successfully!" });
    }catch(e){
      console.log(e);
      res.status(500).json({
        message:"something went wrong!"
      });
    }
  };

