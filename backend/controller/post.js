const postSchema = require("../database/model/postSchema");
const createPost = (req, res) => {
  const { img, post } = req.body;
  const createpost = new postSchema({
    img,
    post,
  });
  createpost
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const deletePost = (req, res) => {
  const id = req.params.id;
  postSchema
    .findByIdAndDelete({ id })
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: " the post is not found",
        });
      } else {
        res.status(200).json({
          success: true,
          message: "the post ${id} is deleted",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "error",
      });
    });
};

const getAllPost = (req, res) => {
  postSchema
    .find()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "all the posts",
        result,
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
const updatePostById = (req, res) => {
  const { post, img, id } = req.body;
  postSchema
    .findByIdAndUpdate(id, { post, img })

    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `the post is not found`,
        });
      }
    });

  res
    .status(200)
    .json({
      success: true,
      message: `the post ${id} is updated`,
    })

    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "error",
      });
    });
};

module.exports = { createPost, deletePost, getAllPost, updatePostById };
