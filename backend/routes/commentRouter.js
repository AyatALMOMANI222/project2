const express =require ("express")
const commentRouter = express.Router()
const {createComment, updatedCommentById,getAllComment,deleteCommentById}= require("../controller/comment")
commentRouter.post("/" , createComment)
commentRouter.put("/",updatedCommentById)
commentRouter.get("/",getAllComment)
commentRouter.delete("/",deleteCommentById)
module.exports=commentRouter