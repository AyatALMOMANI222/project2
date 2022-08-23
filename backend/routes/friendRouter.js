const express =require ("express")
const friendRouter = express.Router()
const {createfriend} = require("../controller/friend")
friendRouter.post("/" , createfriend)


module.exports= friendRouter;
