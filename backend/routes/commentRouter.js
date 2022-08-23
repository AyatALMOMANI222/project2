const express =require ("express")
// const {creatComment ,getCommentById ,updateCommentById,deleteCommentById} =require("../controller/comment")
const commentRouter = express.Router()
const {createcomment}= require("../controller/comment")
commentRouter.get("/" , createcomment)

// commentRouter.get("/",getCommentById)
// commentRouter.creatComment("/",creatComment)

module.exports=commentRouter