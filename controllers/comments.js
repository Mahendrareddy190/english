const Comment = require("../models/comments");

exports.CommentId = (req, res, Id, next) => {
  Comment.findById(Id).exec((err, comm) => {
    if (err) {
      return res.status(400).json({
        message: "cant create id ",
      });
    }
    req.Comment = comm;
  });
};

exports.Createcomment = (req, res) => {
  let comment = new Comment(req.body);

  comment.save((err, commen) => {
    if (err) {
      return res.status(400).json({
        message: "cant create store comment",
      });
    }
    res.json(commen);
  });
};

exports.singleComment = (req, res) => {
  return res.json(req.Comment);
};

exports.getallcomments = (req, res) => {
  Comment.find().exec((err, comment) => {
    if (err) {
      return res.status(400).json({
        error: " cant get all ",
      });
    }
    res.json(comment);
  });
};

exports.Deletecomment = (req, res) => {
  let comments = req.Comment;
  Comments.remove((err, comment) => {
    if (err) {
      return res.status(400).json({
        message: "cant delete comment",
      });
    }
    res.json(comment);
  });
};
