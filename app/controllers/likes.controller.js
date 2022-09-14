const Likes = require("../models/likes.model");


exports.SaveLike = async (req, res) => {
    try {
        let like = new Likes(req.body.postId, req.body.createdBy);
        like = await like.save();
        console.log(like)
        res.send({ message: "like saved successfully!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "something went wrong!"
        });
    }
};

exports.LikesByPostId = async (req, res) => {
    try {
        let [likes, _] = await Likes.getAllLikesByPost(req.params.postId);
        res.status(200).json({ likes })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "something went wrong!"
        });
    }
};

exports.UnLike = async (req, res) => {
    try {
        const like = await Likes.unLike(req.params.id);
        res.send({ message: "like deleted successfully!" });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: "something went wrong!"
        });
    }
};




