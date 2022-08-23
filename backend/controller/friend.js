const friendSchema = require("../database/model/friendSchema");
const createfriend = (req, res) => {
  const { friendId, userId } = req.body;
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
module.exports = {createfriend};
