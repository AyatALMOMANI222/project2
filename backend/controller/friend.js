const friendSchema = require("../database/model/friendSchema");
const createfriend = (req, res) => {
  const userId = req.token.id
  const { friendId } = req.body;
  const createfriend = new friendSchema({
    friendId,
    userId,
  });
  createfriend
    .save()
    .then(() => {
      res.json("you are friend now");
    })
    .catch((err) => {
      res.json(err);
    });
};

const getAllFriend = (req, res) => {
  friendSchema
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: "all the friends",
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

const deleteFriendById = (req, res) => {
  const id = req.body.id;
  friendSchema
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `the user: ${id} is not found`,
        });
      }
      res.status(200).json({
        success: true,
        messege: "friend deleted",
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
// const updatedFriendById =(req,res)=>{
// const {friendId,userId} =req.body
// friendSchema.findByIdAndUpdate(id ,userId, friendId)
// .then((result) => {
//   if (!result) {
//     return res.status(404).json({
//       success: false,
//       message: "the user: ${id} is not found",
//     });
//   }
//   res.status(202).json({
//     success: true,
//     messege: "user updated",
//     result: result,
//   });
// })
// .catch((err) => {
//   res.status(500).json({
//     success: false,
//     messege: "server error",
//     err: err.message,
//   });
// });
// }

module.exports = { createfriend, getAllFriend, deleteFriendById };
