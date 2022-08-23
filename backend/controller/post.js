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
     .findByIdAndDelete({id})
   .then((result) => {
    if (!result) {
 res.json(404).json({
success:false,
message :" the post is not found",
    })
        }
        else{
res.json(200).json({
      success:true,
       message:"the post ${id} is deleted"
      })}
})
    .catch((err) => {
    res.status(500).json({
       success: false,
     message: 'error',
});
    });
 };

module.exports = { createPost, deletePost };
