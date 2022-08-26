const express =require ("express")
const friendRouter = express.Router()
const authentication = require("../middleware/authentication")
const {createfriend,getAllFriend,deleteFriendById,updatedFriendById} = require("../controller/friend")
friendRouter.post("/" ,authentication, createfriend)
friendRouter.get("/",getAllFriend)
friendRouter.delete("/",deleteFriendById)
// friendRouter.put("/",updatedFriendById)
module.exports= friendRouter;
