const express =require ("express")
const friendRouter = express.Router()
const {createfriend,getAllFriend,deleteFriendById,updatedFriendById} = require("../controller/friend")
friendRouter.post("/" , createfriend)
friendRouter.get("/",getAllFriend)
friendRouter.delete("/",deleteFriendById)
// friendRouter.put("/",updatedFriendById)
module.exports= friendRouter;
