const commentSchema = require("../database/model/commentSchema");
const createComment = (req, res) => {
  const { comment, userId, postId } = req.body;

  const createcomment = new commentSchema({
    comment,
    userId,
    postId,
  });
  createcomment
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
const updatedCommentById = (req, res) => {
  const { comment, userId, postId } = req.body;
  commentSchema
    .findByIdAndUpdate(comment, userId, postId)
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `the comment: ${id} is not found`,
        });
      }
      res.status(202).json({
        success: true,
        messege: "comment updated",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        messege: "server error",
        err: err.message,
      });
    });
};

const getAllComment = (req, res) => {
  commentSchema
    .find({})

    .then((result) => {
      res.status(200).json({
        success: true,
        result,
        message: "all the posts",
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "error",
        error: err,
      });
    });
};
const deleteCommentById = (req, res) => {
  const { id } = req.body;
  commentSchema
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `the comment: ${id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        messege: "comment deleted",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        messege: "server error",
        err: err.message,
      });
    });
};

module.exports = {
  createComment,
  updatedCommentById,
  getAllComment,
  deleteCommentById,
};
