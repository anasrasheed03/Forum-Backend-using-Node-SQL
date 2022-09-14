const Comments = require("../models/comments.model");


exports.SaveComment = async(req, res) => {
  try{  
  let comment = new Comments(req.body.comment,req.body.postId,req.body.createdBy);
  comment = await comment.save();
    console.log(comment)
    res.send({ message: "Comment saved successfully!" });
  }catch(e){
    console.log(e);
    res.status(500).json({
        message:"something went wrong!"
      });
  }
  };

  exports.UpdateComment = async(req, res) => {
    try{  
    let comment = await Comments.edit(req.body.comment, req.body.postId, req.body.id);
      console.log(comment)
      res.send({ message: "Comment updated successfully!" });
    }catch(e){
      console.log(e);
      res.status(500).json({
        message:"something went wrong!"
      });
    }
    };

    exports.CommentsByPostId =async (req, res) => {
        try{
         let [comments,_] = await Comments.getAllCommentsByPost(req.params.postId);
         res.status(200).json({comments})
        }catch(e){
         console.log(e);
         res.status(500).json({
            message:"something went wrong!"
          });
        }
       };
    
  exports.DeleteComment = async (req, res) => {
    try{
      const comment= await Comments.deleteComment(req.params.id);
      res.send({ message: "Comment deleted successfully!" });
    }catch(e){
      console.log(e);
      res.status(500).json({
        message:"something went wrong!"
      });
    }
  };

  


